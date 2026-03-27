import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

function ensureParentDirectory(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function cloneSerializable(value) {
  return JSON.parse(JSON.stringify(value));
}

function nowIso() {
  return new Date().toISOString();
}

function sleepSync(ms) {
  if (!Number.isFinite(ms) || ms <= 0) {
    return;
  }
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function normalizeRecord(record) {
  return {
    ...cloneSerializable(record || {}),
    metadata: {
      ...(record?.metadata || {}),
    },
  };
}

function applyLease(record, { owner, expiresAt, claimedAt = nowIso() } = {}) {
  const next = normalizeRecord(record);
  next.metadata = {
    ...next.metadata,
    lease: {
      owner,
      expires_at: expiresAt,
      claimed_at: claimedAt,
    },
  };
  return next;
}

function clearLease(record) {
  const next = normalizeRecord(record);
  if (next.metadata?.lease) {
    delete next.metadata.lease;
  }
  return next;
}

function getExecutionState(record) {
  return String(record?.status?.state || "unknown");
}

function getAvailableAt(record) {
  return (
    record?.metadata?.available_at ||
    record?.metadata?.queue?.available_at ||
    record?.metadata?.created_at ||
    nowIso()
  );
}

function getLeaseOwner(record) {
  return record?.metadata?.lease?.owner || null;
}

function getLeaseExpiry(record) {
  return record?.metadata?.lease?.expires_at || null;
}

function isLeaseExpired(record, referenceTime = nowIso()) {
  const expiresAt = getLeaseExpiry(record);
  if (!expiresAt) {
    return true;
  }
  return expiresAt <= referenceTime;
}

class MemoryTaskStore {
  constructor() {
    this.kind = "memory";
    this.path = null;
    this.records = new Map();
  }

  loadTasks() {
    return [...this.records.values()].map((record) => cloneSerializable(record));
  }

  saveTasks(records) {
    this.records.clear();
    for (const record of records) {
      if (record?.id) {
        this.records.set(record.id, normalizeRecord(record));
      }
    }
  }

  getTask(id) {
    return this.records.has(id) ? cloneSerializable(this.records.get(id)) : null;
  }

  upsertTask(record) {
    if (!record?.id) {
      return;
    }
    this.records.set(record.id, normalizeRecord(record));
  }

  claimPendingTask({ owner, leaseMs, referenceTime = nowIso(), eligibleStates = ["submitted"] } = {}) {
    const records = [...this.records.values()]
      .filter((record) => eligibleStates.includes(getExecutionState(record)))
      .filter((record) => getAvailableAt(record) <= referenceTime)
      .filter((record) => !getLeaseOwner(record) || isLeaseExpired(record, referenceTime))
      .sort((left, right) => String(left?.metadata?.updated_at || "").localeCompare(String(right?.metadata?.updated_at || "")));

    const next = records[0];
    if (!next) {
      return null;
    }

    const expiresAt = new Date(Date.parse(referenceTime) + leaseMs).toISOString();
    const leased = applyLease(next, { owner, expiresAt, claimedAt: referenceTime });
    this.records.set(leased.id, leased);
    return cloneSerializable(leased);
  }

  renewTaskLease(id, owner, leaseMs, referenceTime = nowIso()) {
    const record = this.records.get(id);
    if (!record || getLeaseOwner(record) !== owner) {
      return false;
    }
    const expiresAt = new Date(Date.parse(referenceTime) + leaseMs).toISOString();
    this.records.set(id, applyLease(record, { owner, expiresAt, claimedAt: record.metadata?.lease?.claimed_at || referenceTime }));
    return true;
  }

  clearTaskLease(id, owner = null) {
    const record = this.records.get(id);
    if (!record) {
      return false;
    }
    if (owner && getLeaseOwner(record) && getLeaseOwner(record) !== owner) {
      return false;
    }
    this.records.set(id, clearLease(record));
    return true;
  }
}

class JsonTaskStore {
  constructor(filePath) {
    this.kind = "json";
    this.path = filePath;
  }

  readPayload() {
    if (!this.path || !fs.existsSync(this.path)) {
      return { tasks: [] };
    }
    return JSON.parse(fs.readFileSync(this.path, "utf-8"));
  }

  writePayload(records) {
    ensureParentDirectory(this.path);
    const payload = {
      schema_version: "2026-03-27",
      generated_at: nowIso(),
      tasks: records,
    };
    const temporaryPath = `${this.path}.tmp`;
    fs.writeFileSync(temporaryPath, JSON.stringify(payload, null, 2), "utf-8");
    fs.renameSync(temporaryPath, this.path);
  }

  loadTasks() {
    const payload = this.readPayload();
    return Array.isArray(payload?.tasks) ? payload.tasks : [];
  }

  saveTasks(records) {
    this.writePayload(records.map((record) => normalizeRecord(record)));
  }

  getTask(id) {
    return this.loadTasks().find((record) => record.id === id) || null;
  }

  upsertTask(record) {
    if (!record?.id) {
      return;
    }
    const records = this.loadTasks().filter((item) => item.id !== record.id);
    records.push(normalizeRecord(record));
    this.writePayload(records);
  }

  claimPendingTask({ owner, leaseMs, referenceTime = nowIso(), eligibleStates = ["submitted"] } = {}) {
    const records = this.loadTasks();
    const index = records
      .map((record, position) => ({ record, position }))
      .filter(({ record }) => eligibleStates.includes(getExecutionState(record)))
      .filter(({ record }) => getAvailableAt(record) <= referenceTime)
      .filter(({ record }) => !getLeaseOwner(record) || isLeaseExpired(record, referenceTime))
      .sort((left, right) => String(left.record?.metadata?.updated_at || "").localeCompare(String(right.record?.metadata?.updated_at || "")))[0];

    if (!index) {
      return null;
    }

    const expiresAt = new Date(Date.parse(referenceTime) + leaseMs).toISOString();
    const leased = applyLease(index.record, { owner, expiresAt, claimedAt: referenceTime });
    records[index.position] = leased;
    this.writePayload(records);
    return cloneSerializable(leased);
  }

  renewTaskLease(id, owner, leaseMs, referenceTime = nowIso()) {
    const records = this.loadTasks();
    const position = records.findIndex((record) => record.id === id);
    if (position === -1 || getLeaseOwner(records[position]) !== owner) {
      return false;
    }

    const expiresAt = new Date(Date.parse(referenceTime) + leaseMs).toISOString();
    records[position] = applyLease(records[position], {
      owner,
      expiresAt,
      claimedAt: records[position].metadata?.lease?.claimed_at || referenceTime,
    });
    this.writePayload(records);
    return true;
  }

  clearTaskLease(id, owner = null) {
    const records = this.loadTasks();
    const position = records.findIndex((record) => record.id === id);
    if (position === -1) {
      return false;
    }
    if (owner && getLeaseOwner(records[position]) && getLeaseOwner(records[position]) !== owner) {
      return false;
    }
    records[position] = clearLease(records[position]);
    this.writePayload(records);
    return true;
  }
}

class SqliteTaskStore {
  constructor(filePath) {
    this.kind = "sqlite";
    this.path = filePath;

    const require = createRequire(import.meta.url);
    const sqliteModule = require("node:sqlite");
    this.DatabaseSync = sqliteModule.DatabaseSync;
    ensureParentDirectory(this.path);
    this.db = new this.DatabaseSync(this.path);
    this.db.exec("PRAGMA busy_timeout = 5000");
    this.runWithLockRetry(() => {
      this.db.exec("PRAGMA journal_mode = WAL");
      this.db.exec("PRAGMA synchronous = NORMAL");
      this.db.exec(`
        CREATE TABLE IF NOT EXISTS tasks (
          id TEXT PRIMARY KEY,
          payload TEXT NOT NULL,
          updated_at TEXT NOT NULL
        );
      `);
      this.ensureColumn("execution_state", "TEXT NOT NULL DEFAULT 'unknown'");
      this.ensureColumn("lease_owner", "TEXT");
      this.ensureColumn("lease_expires_at", "TEXT");
      this.ensureColumn("available_at", "TEXT");
      this.ensureColumn("claimed_at", "TEXT");
      this.db.exec(`
        CREATE INDEX IF NOT EXISTS idx_tasks_queue
        ON tasks (execution_state, available_at, lease_expires_at, updated_at);
      `);
    });
  }

  runWithLockRetry(callback, attempts = 20, delayMs = 100) {
    let lastError;
    for (let attempt = 0; attempt < attempts; attempt += 1) {
      try {
        return callback();
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        if (!/database is locked/i.test(message) || attempt === attempts - 1) {
          throw error;
        }
        lastError = error;
        sleepSync(delayMs);
      }
    }
    throw lastError;
  }

  ensureColumn(name, definition) {
    const columns = this.db.prepare("PRAGMA table_info(tasks)").all();
    if (!columns.some((column) => column.name === name)) {
      try {
        this.db.exec(`ALTER TABLE tasks ADD COLUMN ${name} ${definition}`);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        if (!/duplicate column name/i.test(message)) {
          throw error;
        }
      }
    }
  }

  runInTransaction(callback) {
    return this.runWithLockRetry(() => {
      this.db.exec("BEGIN IMMEDIATE");
      try {
        const result = callback();
        this.db.exec("COMMIT");
        return result;
      } catch (error) {
        try {
          this.db.exec("ROLLBACK");
        } catch {
          // Ignore rollback errors so the original failure is preserved.
        }
        throw error;
      }
    });
  }

  buildUpsertPayload(record) {
    const normalized = normalizeRecord(record);
    return {
      id: normalized.id,
      payload: JSON.stringify(normalized),
      updated_at: normalized.metadata?.updated_at || nowIso(),
      execution_state: getExecutionState(normalized),
      lease_owner: getLeaseOwner(normalized),
      lease_expires_at: getLeaseExpiry(normalized),
      available_at: getAvailableAt(normalized),
      claimed_at: normalized.metadata?.lease?.claimed_at || null,
    };
  }

  loadTasks() {
    const statement = this.db.prepare("SELECT payload FROM tasks ORDER BY updated_at ASC");
    return statement.all().map((row) => JSON.parse(row.payload));
  }

  saveTasks(records) {
    const ids = new Set(records.map((record) => record.id));
    this.runInTransaction(() => {
      const upsert = this.db.prepare(`
        INSERT INTO tasks (id, payload, updated_at, execution_state, lease_owner, lease_expires_at, available_at, claimed_at)
        VALUES (@id, @payload, @updated_at, @execution_state, @lease_owner, @lease_expires_at, @available_at, @claimed_at)
        ON CONFLICT(id) DO UPDATE SET
          payload = excluded.payload,
          updated_at = excluded.updated_at,
          execution_state = excluded.execution_state,
          lease_owner = excluded.lease_owner,
          lease_expires_at = excluded.lease_expires_at,
          available_at = excluded.available_at,
          claimed_at = excluded.claimed_at
      `);
      for (const record of items) {
        upsert.run(this.buildUpsertPayload(record));
      }

      const existing = this.db.prepare("SELECT id FROM tasks").all();
      const remove = this.db.prepare("DELETE FROM tasks WHERE id = ?");
      for (const row of existing) {
        if (!ids.has(row.id)) {
          remove.run(row.id);
        }
      }
    });
  }

  getTask(id) {
    const row = this.db.prepare("SELECT payload FROM tasks WHERE id = ?").get(id);
    return row ? JSON.parse(row.payload) : null;
  }

  upsertTask(record) {
    if (!record?.id) {
      return;
    }
    this.db.prepare(`
      INSERT INTO tasks (id, payload, updated_at, execution_state, lease_owner, lease_expires_at, available_at, claimed_at)
      VALUES (@id, @payload, @updated_at, @execution_state, @lease_owner, @lease_expires_at, @available_at, @claimed_at)
      ON CONFLICT(id) DO UPDATE SET
        payload = excluded.payload,
        updated_at = excluded.updated_at,
        execution_state = excluded.execution_state,
        lease_owner = excluded.lease_owner,
        lease_expires_at = excluded.lease_expires_at,
        available_at = excluded.available_at,
        claimed_at = excluded.claimed_at
    `).run(this.buildUpsertPayload(record));
  }

  claimPendingTask({ owner, leaseMs, referenceTime = nowIso(), eligibleStates = ["submitted"] } = {}) {
    return this.runInTransaction(() => {
      const placeholders = eligibleStates.map(() => "?").join(", ");
      const candidate = this.db.prepare(`
        SELECT id, payload
        FROM tasks
        WHERE execution_state IN (${placeholders})
          AND available_at <= ?
          AND (lease_expires_at IS NULL OR lease_expires_at <= ?)
        ORDER BY updated_at ASC
        LIMIT 1
      `).get(...eligibleStates, referenceTime, referenceTime);

      if (!candidate) {
        return null;
      }

      const expiresAt = new Date(Date.parse(referenceTime) + leaseMs).toISOString();
      const nextRecord = applyLease(JSON.parse(candidate.payload), {
        owner,
        expiresAt,
        claimedAt: referenceTime,
      });

      const result = this.db.prepare(`
        UPDATE tasks
        SET payload = ?,
            updated_at = ?,
            execution_state = ?,
            lease_owner = ?,
            lease_expires_at = ?,
            available_at = ?,
            claimed_at = ?
        WHERE id = ?
          AND (lease_expires_at IS NULL OR lease_expires_at <= ?)
      `).run(
        JSON.stringify(nextRecord),
        nextRecord.metadata?.updated_at || referenceTime,
        getExecutionState(nextRecord),
        owner,
        expiresAt,
        getAvailableAt(nextRecord),
        referenceTime,
        candidate.id,
        referenceTime,
      );

      return result.changes > 0 ? nextRecord : null;
    });
  }

  renewTaskLease(id, owner, leaseMs, referenceTime = nowIso()) {
    const row = this.db.prepare("SELECT payload FROM tasks WHERE id = ?").get(id);
    if (!row) {
      return false;
    }

    const current = JSON.parse(row.payload);
    if (getLeaseOwner(current) !== owner) {
      return false;
    }

    const expiresAt = new Date(Date.parse(referenceTime) + leaseMs).toISOString();
    const nextRecord = applyLease(current, {
      owner,
      expiresAt,
      claimedAt: current.metadata?.lease?.claimed_at || referenceTime,
    });

    const result = this.db.prepare(`
      UPDATE tasks
      SET payload = ?,
          updated_at = ?,
          execution_state = ?,
          lease_owner = ?,
          lease_expires_at = ?,
          available_at = ?,
          claimed_at = ?
      WHERE id = ?
        AND lease_owner = ?
    `).run(
      JSON.stringify(nextRecord),
      nextRecord.metadata?.updated_at || referenceTime,
      getExecutionState(nextRecord),
      owner,
      expiresAt,
      getAvailableAt(nextRecord),
      nextRecord.metadata?.lease?.claimed_at || referenceTime,
      id,
      owner,
    );

    return result.changes > 0;
  }

  clearTaskLease(id, owner = null) {
    const row = this.db.prepare("SELECT payload FROM tasks WHERE id = ?").get(id);
    if (!row) {
      return false;
    }

    const current = JSON.parse(row.payload);
    if (owner && getLeaseOwner(current) && getLeaseOwner(current) !== owner) {
      return false;
    }

    const nextRecord = clearLease(current);
    const result = this.db.prepare(`
      UPDATE tasks
      SET payload = ?,
          updated_at = ?,
          execution_state = ?,
          lease_owner = NULL,
          lease_expires_at = NULL,
          available_at = ?,
          claimed_at = NULL
      WHERE id = ?
    `).run(
      JSON.stringify(nextRecord),
      nextRecord.metadata?.updated_at || nowIso(),
      getExecutionState(nextRecord),
      getAvailableAt(nextRecord),
      id,
    );

    return result.changes > 0;
  }
}

export function createTaskStore({
  enabled = true,
  storeType = process.env.OMNI_SKILLS_A2A_STORE_TYPE || "json",
  persistencePath,
} = {}) {
  if (!enabled) {
    return new MemoryTaskStore();
  }

  const normalized = String(storeType || "json").trim().toLowerCase();
  if (normalized === "memory") {
    return new MemoryTaskStore();
  }

  if (normalized === "sqlite") {
    return new SqliteTaskStore(persistencePath);
  }

  return new JsonTaskStore(persistencePath);
}
