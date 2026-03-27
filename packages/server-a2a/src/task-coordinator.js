import Redis from "ioredis";

function nowIso() {
  return new Date().toISOString();
}

function isoToMillis(value, fallback = Date.now()) {
  const parsed = Date.parse(String(value || ""));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function getExecutionState(task) {
  return String(task?.status?.state || "unknown");
}

function getQueueAvailableAt(task) {
  const state = getExecutionState(task);
  if (state === "working") {
    return nowIso();
  }
  return (
    task?.metadata?.available_at ||
    task?.metadata?.queue?.available_at ||
    task?.metadata?.created_at ||
    nowIso()
  );
}

function shouldQueueTask(task) {
  const state = getExecutionState(task);
  return state === "submitted" || state === "working";
}

function cloneSerializable(value) {
  return JSON.parse(JSON.stringify(value));
}

function redactRedisUrl(rawUrl) {
  try {
    const parsed = new URL(String(rawUrl || ""));
    if (parsed.password) {
      parsed.password = "*****";
    }
    return parsed.toString();
  } catch {
    return rawUrl ? "<configured>" : null;
  }
}

class StoreBackedTaskCoordinator {
  constructor({ taskStore }) {
    this.kind = "store";
    this.external = false;
    this.taskStore = taskStore;
  }

  getSnapshot() {
    return {
      kind: this.kind,
      external: this.external,
    };
  }

  async syncTask() {}

  async syncTasks() {}

  async claimPendingTask({ owner, leaseMs, referenceTime = nowIso(), eligibleStates = ["submitted"] } = {}) {
    if (typeof this.taskStore.claimPendingTask !== "function") {
      return null;
    }
    return this.taskStore.claimPendingTask({ owner, leaseMs, referenceTime, eligibleStates });
  }

  async renewTaskLease(id, owner, leaseMs, referenceTime = nowIso()) {
    if (typeof this.taskStore.renewTaskLease !== "function") {
      return false;
    }
    return this.taskStore.renewTaskLease(id, owner, leaseMs, referenceTime);
  }

  async clearTaskLease(id, owner = null) {
    if (typeof this.taskStore.clearTaskLease !== "function") {
      return false;
    }
    return this.taskStore.clearTaskLease(id, owner);
  }

  async close() {}
}

class RedisTaskCoordinator {
  constructor({
    taskStore,
    redisUrl,
    keyPrefix = process.env.OMNI_SKILLS_A2A_COORDINATION_PREFIX || "omni-skills:a2a",
    redisClient = null,
  } = {}) {
    if (!taskStore || typeof taskStore.getTask !== "function") {
      throw new Error("RedisTaskCoordinator requires a taskStore with getTask(id).");
    }

    this.kind = "redis";
    this.external = true;
    this.taskStore = taskStore;
    this.keyPrefix = keyPrefix;
    this.redisUrl = redisUrl || process.env.OMNI_SKILLS_A2A_REDIS_URL || "";
    this.client = redisClient || new Redis(this.redisUrl, {
      lazyConnect: false,
      maxRetriesPerRequest: 1,
      enableOfflineQueue: true,
    });
    this.ownsClient = !redisClient;
    this.stateKey = `${this.keyPrefix}:state`;
    this.availableAtKey = `${this.keyPrefix}:available-at`;
    this.queueKey = `${this.keyPrefix}:queue`;
    this.lockPrefix = `${this.keyPrefix}:lock:`;
    this.claimScript = `
      local queueKey = KEYS[1]
      local stateKey = KEYS[2]
      local lockPrefix = KEYS[3]
      local referenceTime = tonumber(ARGV[1])
      local owner = ARGV[2]
      local leaseMs = tonumber(ARGV[3])
      local eligibleStates = ARGV[4]
      local ids = redis.call('ZRANGEBYSCORE', queueKey, '-inf', referenceTime, 'LIMIT', 0, 128)
      for _, id in ipairs(ids) do
        local state = redis.call('HGET', stateKey, id)
        if state then
          if string.find(eligibleStates, '|' .. state .. '|', 1, true) then
            local locked = redis.call('SET', lockPrefix .. id, owner, 'NX', 'PX', leaseMs)
            if locked then
              return id
            end
          else
            redis.call('ZREM', queueKey, id)
            redis.call('HDEL', stateKey, id)
          end
        else
          redis.call('ZREM', queueKey, id)
        end
      end
      return false
    `;
    this.renewScript = `
      local lockKey = KEYS[1]
      local owner = ARGV[1]
      local leaseMs = tonumber(ARGV[2])
      if redis.call('GET', lockKey) == owner then
        return redis.call('PEXPIRE', lockKey, leaseMs)
      end
      return 0
    `;
    this.clearScript = `
      local lockKey = KEYS[1]
      local owner = ARGV[1]
      if owner == '' then
        return redis.call('DEL', lockKey)
      end
      if redis.call('GET', lockKey) == owner then
        return redis.call('DEL', lockKey)
      end
      return 0
    `;
  }

  getSnapshot() {
    return {
      kind: this.kind,
      external: this.external,
      redis_url: redactRedisUrl(this.redisUrl),
      key_prefix: this.keyPrefix,
    };
  }

  lockKey(id) {
    return `${this.lockPrefix}${id}`;
  }

  async syncTask(task) {
    if (!task?.id) {
      return;
    }

    const state = getExecutionState(task);
    const availableAt = getQueueAvailableAt(task);
    const score = isoToMillis(availableAt);
    const pipeline = this.client.multi();
    pipeline.hset(this.stateKey, task.id, state);
    pipeline.hset(this.availableAtKey, task.id, availableAt);

    if (shouldQueueTask(task)) {
      pipeline.zadd(this.queueKey, score, task.id);
    } else {
      pipeline.zrem(this.queueKey, task.id);
      pipeline.hdel(this.stateKey, task.id);
      pipeline.hdel(this.availableAtKey, task.id);
      pipeline.del(this.lockKey(task.id));
    }

    await pipeline.exec();
  }

  async syncTasks(tasks = []) {
    const pipeline = this.client.multi();
    for (const task of tasks) {
      if (!task?.id) {
        continue;
      }
      const state = getExecutionState(task);
      const availableAt = getQueueAvailableAt(task);
      pipeline.hset(this.stateKey, task.id, state);
      pipeline.hset(this.availableAtKey, task.id, availableAt);
      if (shouldQueueTask(task)) {
        pipeline.zadd(this.queueKey, isoToMillis(availableAt), task.id);
      } else {
        pipeline.zrem(this.queueKey, task.id);
        pipeline.hdel(this.stateKey, task.id);
        pipeline.hdel(this.availableAtKey, task.id);
        pipeline.del(this.lockKey(task.id));
      }
    }
    await pipeline.exec();
  }

  async claimPendingTask({ owner, leaseMs, referenceTime = nowIso(), eligibleStates = ["submitted"] } = {}) {
    const claimedId = await this.client.eval(
      this.claimScript,
      3,
      this.queueKey,
      this.stateKey,
      this.lockPrefix,
      String(isoToMillis(referenceTime)),
      owner,
      String(leaseMs),
      `|${eligibleStates.map((state) => String(state || "").trim()).filter(Boolean).join("|")}|`,
    );

    if (!claimedId) {
      return null;
    }

    const record = this.taskStore.getTask(String(claimedId));
    if (!record) {
      await this.client
        .multi()
        .zrem(this.queueKey, String(claimedId))
        .hdel(this.stateKey, String(claimedId))
        .hdel(this.availableAtKey, String(claimedId))
        .del(this.lockKey(String(claimedId)))
        .exec();
      return null;
    }

    return cloneSerializable(record);
  }

  async renewTaskLease(id, owner, leaseMs) {
    const result = await this.client.eval(
      this.renewScript,
      1,
      this.lockKey(id),
      owner,
      String(leaseMs),
    );
    return Number(result) > 0;
  }

  async clearTaskLease(id, owner = null) {
    const result = await this.client.eval(
      this.clearScript,
      1,
      this.lockKey(id),
      owner || "",
    );
    return Number(result) > 0;
  }

  async close() {
    if (this.ownsClient) {
      await this.client.quit();
    }
  }
}

export function createTaskCoordinator({
  queueEnabled = false,
  taskStore,
  coordinationType = process.env.OMNI_SKILLS_A2A_COORDINATION_TYPE || "store",
  redisUrl = process.env.OMNI_SKILLS_A2A_REDIS_URL || "",
  redisKeyPrefix = process.env.OMNI_SKILLS_A2A_COORDINATION_PREFIX || "omni-skills:a2a",
  redisClient = null,
} = {}) {
  const normalized = String(coordinationType || "store").trim().toLowerCase();

  if (!queueEnabled || normalized === "store" || normalized === "sqlite" || normalized === "local") {
    return new StoreBackedTaskCoordinator({ taskStore });
  }

  if (normalized === "redis") {
    if (!redisClient && !redisUrl) {
      throw new Error("OMNI_SKILLS_A2A_REDIS_URL is required when OMNI_SKILLS_A2A_COORDINATION_TYPE=redis.");
    }
    return new RedisTaskCoordinator({
      taskStore,
      redisUrl,
      keyPrefix: redisKeyPrefix,
      redisClient,
    });
  }

  throw new Error(`Unsupported A2A coordination type '${coordinationType}'.`);
}

export {
  RedisTaskCoordinator,
  StoreBackedTaskCoordinator,
};
