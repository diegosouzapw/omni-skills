import cors from "cors";
import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import { randomUUID } from "node:crypto";

function trimToken(value) {
  return String(value || "").trim();
}

function parseTokenList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseBoolean(value, fallback = false) {
  const normalized = String(value ?? "").trim().toLowerCase();
  if (!normalized) {
    return fallback;
  }
  return ["1", "true", "yes", "on"].includes(normalized);
}

function parsePositiveInt(value, fallback) {
  const parsed = Number.parseInt(String(value || ""), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function trimTrailingSlash(value) {
  return String(value || "").replace(/\/+$/, "");
}

function parseCorsOrigins(value) {
  return parseTokenList(value).map((origin) => trimTrailingSlash(origin));
}

function matchesOriginPattern(origin, pattern) {
  if (!origin || !pattern) {
    return false;
  }

  const normalizedOrigin = trimTrailingSlash(origin);
  const normalizedPattern = trimTrailingSlash(pattern);
  if (normalizedPattern === "*") {
    return true;
  }
  if (normalizedOrigin === normalizedPattern) {
    return true;
  }
  if (!normalizedPattern.includes("*")) {
    return false;
  }

  const escaped = normalizedPattern
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\\\*/g, ".*");
  return new RegExp(`^${escaped}$`, "i").test(normalizedOrigin);
}

function normalizeIp(value) {
  const candidate = String(value || "").trim();
  if (!candidate) {
    return "";
  }
  if (candidate.startsWith("::ffff:")) {
    return candidate.slice("::ffff:".length);
  }
  return candidate;
}

function buildAllowlist(entries) {
  const blockList = new net.BlockList();
  const normalizedEntries = [];

  for (const entry of entries) {
    const normalized = String(entry || "").trim();
    if (!normalized) {
      continue;
    }
    normalizedEntries.push(normalized);
    try {
      if (normalized.includes("/")) {
        const [address, prefix] = normalized.split("/");
        const ipType = net.isIP(address);
        if (ipType) {
          blockList.addSubnet(address, Number.parseInt(prefix, 10), ipType === 6 ? "ipv6" : "ipv4");
        }
        continue;
      }
      if (normalized.includes("-")) {
        const [start, end] = normalized.split("-");
        const ipType = net.isIP(start);
        if (ipType && ipType === net.isIP(end)) {
          blockList.addRange(start, end, ipType === 6 ? "ipv6" : "ipv4");
        }
        continue;
      }
      const ipType = net.isIP(normalized);
      if (ipType) {
        blockList.addAddress(normalized, ipType === 6 ? "ipv6" : "ipv4");
      }
    } catch {
      // Ignore malformed allowlist entries and surface the raw values in the runtime snapshot instead.
    }
  }

  return {
    entries: normalizedEntries,
    check(ip) {
      const normalizedIp = normalizeIp(ip);
      const ipType = net.isIP(normalizedIp);
      if (!ipType) {
        return false;
      }
      return blockList.check(normalizedIp, ipType === 6 ? "ipv6" : "ipv4");
    },
  };
}

function ensureLogDirectory(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

export function getHttpRuntimeConfig() {
  const bearerToken = trimToken(process.env.OMNI_SKILLS_HTTP_BEARER_TOKEN);
  const apiKeys = parseTokenList(process.env.OMNI_SKILLS_HTTP_API_KEYS);
  const adminToken = trimToken(process.env.OMNI_SKILLS_HTTP_ADMIN_TOKEN);
  const rateLimitWindowMs = parsePositiveInt(process.env.OMNI_SKILLS_RATE_LIMIT_WINDOW_MS, 60000);
  const rateLimitMax = parsePositiveInt(process.env.OMNI_SKILLS_RATE_LIMIT_MAX, 120);
  const auditLogEnabled = parseBoolean(process.env.OMNI_SKILLS_HTTP_AUDIT_LOG);
  const auditLogFormat = trimToken(process.env.OMNI_SKILLS_HTTP_AUDIT_FORMAT || "json").toLowerCase();
  const auditLogPath = trimToken(process.env.OMNI_SKILLS_HTTP_AUDIT_LOG_PATH);
  const trustedProxy = trimToken(process.env.OMNI_SKILLS_HTTP_TRUST_PROXY);
  const allowlistEntries = parseTokenList(process.env.OMNI_SKILLS_HTTP_ALLOWED_IPS);
  const corsOrigins = parseCorsOrigins(process.env.OMNI_SKILLS_HTTP_ALLOWED_ORIGINS);
  const maintenanceEnabled = parseBoolean(process.env.OMNI_SKILLS_HTTP_MAINTENANCE_MODE);
  const maintenanceRetryAfterSeconds = parsePositiveInt(
    process.env.OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS,
    300,
  );
  const allowlist = buildAllowlist(allowlistEntries);

  return {
    auth: {
      enabled: Boolean(bearerToken || apiKeys.length > 0),
      bearerToken: bearerToken || null,
      apiKeys,
    },
    admin: {
      enabled: Boolean(adminToken),
      token: adminToken || null,
    },
    rateLimit: {
      enabled: Number.isFinite(rateLimitMax) && rateLimitMax > 0,
      windowMs: Number.isFinite(rateLimitWindowMs) && rateLimitWindowMs > 0 ? rateLimitWindowMs : 60000,
      max: Number.isFinite(rateLimitMax) && rateLimitMax > 0 ? rateLimitMax : 120,
    },
    audit: {
      enabled: auditLogEnabled,
      format: auditLogFormat === "text" ? "text" : "json",
      path: auditLogPath || null,
    },
    trustProxy: trustedProxy || null,
    ipAllowlist: {
      enabled: allowlist.entries.length > 0,
      entries: allowlist.entries,
      matcher: allowlist,
    },
    cors: {
      enabled: corsOrigins.length > 0,
      allowedOrigins: corsOrigins,
    },
    maintenance: {
      enabled: maintenanceEnabled,
      retryAfterSeconds: maintenanceRetryAfterSeconds,
    },
  };
}

export function applyExpressHttpRuntime(app) {
  const config = getHttpRuntimeConfig();
  if (config.trustProxy) {
    app.set("trust proxy", config.trustProxy);
  }
}

export function createHttpCorsMiddleware() {
  const config = getHttpRuntimeConfig();
  if (!config.cors.enabled) {
    return cors();
  }

  return cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }

      if (config.cors.allowedOrigins.some((pattern) => matchesOriginPattern(origin, pattern))) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin not allowed by OMNI_SKILLS_HTTP_ALLOWED_ORIGINS"));
    },
  });
}

function getClientIp(req, config) {
  if (config.trustProxy) {
    const forwarded = String(req.headers["x-forwarded-for"] || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)[0];
    if (forwarded) {
      return normalizeIp(forwarded);
    }
  }
  return normalizeIp(req.ip || req.socket?.remoteAddress || "unknown");
}

function getAuthPrincipal(req, config) {
  const authorization = String(req.headers.authorization || "");
  if (config.auth.bearerToken && authorization.startsWith("Bearer ")) {
    const providedToken = authorization.slice("Bearer ".length).trim();
    if (providedToken && providedToken === config.auth.bearerToken) {
      return { ok: true, type: "bearer", id: "bearer-token" };
    }
  }

  const apiKey = String(req.headers["x-api-key"] || "").trim();
  if (apiKey && config.auth.apiKeys.includes(apiKey)) {
    return { ok: true, type: "api-key", id: "api-key" };
  }

  return { ok: false, type: null, id: "anonymous" };
}

function getAdminPrincipal(req, config) {
  if (!config.admin.enabled) {
    return { ok: false, id: "admin-disabled" };
  }

  const adminToken = String(req.headers["x-admin-token"] || "").trim();
  if (adminToken && adminToken === config.admin.token) {
    return { ok: true, id: "x-admin-token" };
  }

  const authorization = String(req.headers.authorization || "");
  if (authorization.startsWith("Bearer ")) {
    const providedToken = authorization.slice("Bearer ".length).trim();
    if (providedToken && providedToken === config.admin.token) {
      return { ok: true, id: "bearer-admin" };
    }
  }

  return { ok: false, id: "admin-unauthorized" };
}

function setRateLimitHeaders(res, bucket, config) {
  const remaining = Math.max(0, config.rateLimit.max - bucket.count);
  const resetAtSeconds = Math.max(0, Math.ceil((bucket.resetAt - Date.now()) / 1000));
  res.setHeader("X-RateLimit-Limit", String(config.rateLimit.max));
  res.setHeader("X-RateLimit-Remaining", String(remaining));
  res.setHeader("X-RateLimit-Reset", String(resetAtSeconds));
}

function writeAuditEvent(event, config) {
  if (!config.audit.enabled) {
    return;
  }

  const line =
    config.audit.format === "text"
      ? `[omni-http] ${event.method} ${event.path} ${event.status_code} request_id=${event.request_id} auth=${event.auth.id} admin=${event.admin.id} ip=${event.ip} ${event.duration_ms}ms`
      : JSON.stringify(event);

  if (config.audit.path) {
    ensureLogDirectory(config.audit.path);
    fs.appendFileSync(config.audit.path, `${line}\n`, "utf-8");
    return;
  }

  console.log(line);
}

export function createHttpRuntimeMiddleware(options = {}) {
  const config = getHttpRuntimeConfig();
  const allowAnonymousPaths = new Set(options.allowAnonymousPaths || ["/healthz"]);
  const adminPaths = new Set(options.adminPaths || []);
  const buckets = new Map();

  return function httpRuntimeMiddleware(req, res, next) {
    const startedAt = Date.now();
    const path = req.path || req.url || "/";
    const requestId = String(req.headers["x-request-id"] || "").trim() || randomUUID();
    const ip = getClientIp(req, config);
    const authPrincipal = getAuthPrincipal(req, config);
    const adminPrincipal = getAdminPrincipal(req, config);
    req.omniAuth = authPrincipal;
    req.omniAdmin = adminPrincipal;
    req.omniRequestId = requestId;
    res.setHeader("X-Request-Id", requestId);
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "no-referrer");
    res.setHeader("X-Frame-Options", "DENY");

    if (config.ipAllowlist.enabled && !config.ipAllowlist.matcher.check(ip)) {
      res.status(403).json({ error: "Forbidden", request_id: requestId });
      return;
    }

    if (adminPaths.has(path)) {
      if (!config.admin.enabled) {
        res.status(404).json({ error: "Not found", request_id: requestId });
        return;
      }
      if (!adminPrincipal.ok) {
        res.setHeader("WWW-Authenticate", 'Bearer realm="omni-skills-admin"');
        res.status(401).json({ error: "Unauthorized", request_id: requestId });
        return;
      }
    }

    if (config.maintenance.enabled && !allowAnonymousPaths.has(path) && !adminPrincipal.ok) {
      res.setHeader("Retry-After", String(config.maintenance.retryAfterSeconds));
      res.status(503).json({
        error: "Maintenance mode enabled",
        request_id: requestId,
        retry_after_seconds: config.maintenance.retryAfterSeconds,
      });
      return;
    }

    if (!allowAnonymousPaths.has(path) && config.auth.enabled && !authPrincipal.ok) {
      res.setHeader("WWW-Authenticate", 'Bearer realm="omni-skills"');
      res.status(401).json({ error: "Unauthorized", request_id: requestId });
      return;
    }

    if (!allowAnonymousPaths.has(path) && config.rateLimit.enabled) {
      const bucketKey = authPrincipal.ok ? `${authPrincipal.type}:${authPrincipal.id}` : `ip:${ip}`;
      const now = Date.now();
      const current = buckets.get(bucketKey);
      const bucket =
        current && current.resetAt > now
          ? current
          : {
              count: 0,
              resetAt: now + config.rateLimit.windowMs,
            };

      bucket.count += 1;
      buckets.set(bucketKey, bucket);
      setRateLimitHeaders(res, bucket, config);

      if (bucket.count > config.rateLimit.max) {
        res.setHeader("Retry-After", String(Math.max(1, Math.ceil((bucket.resetAt - now) / 1000))));
        res.status(429).json({
          error: "Rate limit exceeded",
          request_id: requestId,
          retry_after_seconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
        });
        return;
      }
    }

    res.on("finish", () => {
      const durationMs = Date.now() - startedAt;
      writeAuditEvent(
        {
          ts: new Date().toISOString(),
          request_id: requestId,
          method: req.method,
          path,
          status_code: res.statusCode,
          duration_ms: durationMs,
          ip,
          host: req.get ? req.get("host") : req.headers.host,
          origin: req.headers.origin || null,
          user_agent: req.headers["user-agent"] || null,
          auth: {
            id: authPrincipal.id,
            type: authPrincipal.type,
            ok: authPrincipal.ok,
          },
          admin: {
            id: adminPrincipal.id,
            ok: adminPrincipal.ok,
          },
        },
        config,
      );
    });

    next();
  };
}

export function getHttpRuntimeSnapshot(options = {}) {
  const config = getHttpRuntimeConfig();
  const detailed = options.detailed === true;
  return {
    auth: {
      enabled: config.auth.enabled,
      methods: [
        ...(config.auth.bearerToken ? ["bearer"] : []),
        ...(config.auth.apiKeys.length > 0 ? ["x-api-key"] : []),
      ],
    },
    admin: {
      enabled: config.admin.enabled,
      methods: config.admin.enabled ? ["bearer", "x-admin-token"] : [],
    },
    rate_limit: {
      enabled: config.rateLimit.enabled,
      window_ms: config.rateLimit.windowMs,
      max: config.rateLimit.max,
    },
    audit: {
      enabled: config.audit.enabled,
      format: config.audit.format,
      destination: config.audit.path ? "file" : "stdout",
    },
    trusted_proxy: Boolean(config.trustProxy),
    cors: {
      enabled: config.cors.enabled,
      allowed_origins_count: config.cors.allowedOrigins.length,
      ...(detailed ? { allowed_origins: config.cors.allowedOrigins } : {}),
    },
    ip_allowlist: {
      enabled: config.ipAllowlist.enabled,
      entries_count: config.ipAllowlist.entries.length,
      ...(detailed ? { entries: config.ipAllowlist.entries } : {}),
    },
    maintenance: {
      enabled: config.maintenance.enabled,
      retry_after_seconds: config.maintenance.retryAfterSeconds,
    },
  };
}
