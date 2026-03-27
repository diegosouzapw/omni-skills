# 🔧 System Runbook

> **The complete operational guide for building, validating, serving, securing, and troubleshooting Omni Skills.**

---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
```

| Command | What It Does |
|:--------|:-------------|
| `npm run validate` | Validates `SKILL.md`, regenerates `metadata.json`, computes taxonomy/maturity/quality/security |
| `npm run taxonomy:report` | Shows category drift suggestions without rewriting files |
| `npm run verify:scanners` | Confirms scanner coverage recorded in generated skill metadata |
| `npm run release:notes` | Generates custom release notes from metadata, bundles, and git history |
| `npm run build` | Regenerates catalog/manifests/archives/checksums, verifies scanner coverage and archives, rebuilds `docs/CATALOG.md` |
| `npm test` | Full smoke suite across CLI, API, MCP, sidecar, and archive flows |

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/skill-template.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

The static scanner checks all skills automatically:

| Rule Family | Examples |
|:------------|:---------|
| 🎭 Prompt injection | Exfiltration patterns, instruction overrides |
| 💣 Destructive commands | `rm -rf`, `format`, `mkfs` |
| 🔑 Suspicious paths | `/etc/shadow`, `~/.ssh`, credential files |
| ⚠️ Risky primitives | `shell=True`, `pickle.load`, `eval`, `extractall` |

### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Requires `clamscan` in `PATH`.

### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Hash lookup only — unknown files are **not uploaded** by default.

### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Strict release gate:

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Archives are produced automatically by `npm run build`:

| Output | Path |
|:-------|:-----|
| 📦 ZIP | `dist/archives/<skill>.zip` |
| 📦 Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Checksums | `dist/archives/<skill>.checksums.txt` |

### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Optional public key override:

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> If no public key is supplied, the build derives one via `openssl` into `dist/signing/`.

---

## 5️⃣ Installation Flows

| Scenario | Command |
|:---------|:--------|
| 📥 Default install (Antigravity) | `npx omni-skills` |
| 🎯 Specific skill + client | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Discovery → install | `npx omni-skills find figma --tool cursor --install --yes` |
| 📦 Bundle install | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Verify install | `npx omni-skills doctor` |

---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filter | Flag | Example |
|:-------|:-----|:--------|
| 📂 Category | `--category` | `--category development` |
| 🖥️ Tool | `--tool` | `--tool cursor` |
| ⚠️ Risk | `--risk` | `--risk safe` |
| 📊 Sort | `--sort` | `--sort quality\|best-practices\|level\|security\|name` |
| 🔄 Order | `--order` | `--order asc\|desc` |
| ⭐ Min quality | `--min-quality` | `--min-quality 80` |
| 📋 Min BP | `--min-best-practices` | `--min-best-practices 60` |
| 🎯 Min level | `--min-level` | `--min-level 2` |
| 🛡️ Min security | `--min-security` | `--min-security 90` |
| ✅ Validation | `--validation-status` | `--validation-status passed` |
| 🛡️ Security | `--security-status` | `--security-status passed` |

---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Method | Endpoint | Purpose |
|:-------|:---------|:--------|
| `GET` | `/healthz` | Health check |
| `GET` | `/openapi.json` | OpenAPI 3.1 spec |
| `GET` | `/v1/skills` | List with filters |
| `GET` | `/v1/search` | Full-text search |
| `GET` | `/v1/skills/:id/archives` | Archive listing |
| `GET` | `/v1/skills/:id/download/archive?format=zip` | Download archive |
| `GET` | `/v1/skills/:id/download/archive/checksums` | Checksum manifest |

### 🔐 Hosted API Hardening

| Feature | Command |
|:--------|:--------|
| 🔑 Bearer auth | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api` |
| 🗝️ API key auth | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🚦 Rate limiting | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Audit logging | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api` |

> 🟢 `/healthz` stays open by design; catalog routes require auth when enabled.

---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### 🔐 Hosted MCP Hardening

Same env vars as the API:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills mcp stream
```

**Protected routes**: `POST /mcp` · `GET /sse` · `POST /messages`

> 🟢 `/healthz` remains open.

---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

### 🧱 Multi-Worker Lease Setup

Run more than one A2A node against the same SQLite store to get lease-based failover:

```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

If a worker dies while a task is `working`, another worker can reclaim it after the lease expires and continue execution.

### 📡 Endpoints

| Method | Path | Purpose |
|:-------|:-----|:--------|
| `GET` | `/healthz` | Health check |
| `GET` | `/.well-known/agent.json` | Agent Card (A2A discovery) |
| `POST` | `/a2a` | JSON-RPC endpoint for tasks and streaming |

### 🧭 Supported JSON-RPC Methods

| Method | Purpose |
|:-------|:--------|
| `message/send` | Start or continue a task |
| `message/stream` | Start a task and stream SSE updates |
| `tasks/get` | Poll a task snapshot |
| `tasks/cancel` | Cancel an active task |
| `tasks/resubscribe` | Resume SSE updates for an existing task |
| `tasks/pushNotificationConfig/set` | Register a push webhook |
| `tasks/pushNotificationConfig/get` | Read a push config |
| `tasks/pushNotificationConfig/list` | List push configs for a task |
| `tasks/pushNotificationConfig/delete` | Remove a push config |

### 📡 Task Lifecycle

The current runtime supports these task states:

- `submitted`
- `working`
- `input-required`
- `completed`
- `canceled`
- `failed`

Tasks are persisted to either a JSON file or a SQLite store and reloaded on restart. Completed and interrupted tasks remain available. Tasks that were still `submitted` or `working` during shutdown are recovered with explicit restart metadata and are resumed automatically by default.

### 🧪 Example: Start a Task

```bash
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

The repository now has two workflows:

| Workflow | Trigger | Purpose |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR to `main` | Build, test, and confirm generated artifacts are committed |
| `release.yml` | Tag push `v*` or manual dispatch | Run release-grade scanners, verify the version tag, sign artifacts, package the tarball, publish to npm, and create the GitHub Release |

### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Secret | Used By | Purpose |
|:-------|:--------|:--------|
| `VT_API_KEY` or `VIRUSTOTAL` | `release.yml` | Require VirusTotal hash lookups in release builds |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` or `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Required private key for detached archive signing in CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` or `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Optional public key override; otherwise derived from the private key |
| `NPM_TOKEN` | `publish-npm` job | Authenticate `npm publish` for tag releases |

### 🦠 Release Scanner Policy

`release.yml` sets or prepares:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || secrets.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` from runner temp storage

That means every tag-based release must:

- install and refresh ClamAV on the runner
- regenerate metadata with ClamAV enabled
- regenerate metadata with VirusTotal enabled
- decode CI signing key material into runner temp storage
- pass `npm run verify:scanners:strict`
- pass `npm run verify:archives:strict`
- pass tests and package verification before npm publish
- generate custom release notes from catalog metadata and git history
- create a GitHub Release with attached release assets after publish

---

## 1️⃣1️⃣ Environment Variables Reference

| Variable | Purpose | Default |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Override catalog root path | Auto-detected |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Extra allowed write paths | Known client roots |
| `OMNI_SKILLS_MCP_MODE` | Set to `local` for sidecar | Remote |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Alt flag for local mode | `0` |
| `OMNI_SKILLS_API_BASE_URL` | Public API URL for MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Public base URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bearer auth token | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Comma-separated API keys | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max requests per window | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Rate limit window (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Enable audit logging | `0` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Simulated async task delay | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`, `sqlite`, or `memory` task store | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Custom A2A task store file | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Enable shared queue polling for lease-aware workers | `1` for `sqlite`, otherwise `0` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Queue polling interval for lease workers | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Lease duration before another worker may reclaim a task | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Stable worker identifier for lease ownership and diagnostics | Hostname + PID + random suffix |
| `OMNI_SKILLS_A2A_EXECUTOR` | `inline` or `process` task executor | `inline` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Override external worker command | Node binary |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON array of external worker args | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Resume recovered submitted/working tasks on boot | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Allow non-HTTPS webhooks outside localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Enable ClamAV scanning | `0` |
| `VT_API_KEY` | VirusTotal API key | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Private key for signing | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Public key override | Auto-derived |

---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. Rebuild with `npm run build`
2. Rerun `npm run verify:archives`
3. If signing is enabled, confirm the public key and `openssl` availability

### 🦠 Release Workflow Fails on Scanner Coverage

- Confirm `VT_API_KEY` exists in repository secrets
- Confirm `freshclam` succeeded on the runner
- Rebuild locally with `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Rerun `npm run verify:scanners:strict`

### 📦 npm Publish Fails in CI

- Confirm `NPM_TOKEN` exists in repository secrets
- Confirm the Git tag matches `package.json` version exactly
- Check that the tarball uploaded by `release-verify` exists in the workflow artifacts

### ✍️ Release Signing Fails in CI

- Confirm `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` or `OMNI_SKILLS_SIGN_PRIVATE_KEY` exists in repository secrets
- If you provide a public key secret, confirm it matches the private key
- Confirm `openssl` is available and the private key is PEM-formatted
- Rebuild locally with `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Rerun `npm run verify:archives:strict`

### 🔒 API/MCP Returns `401 Unauthorized`

- Verify `OMNI_SKILLS_HTTP_BEARER_TOKEN` or `OMNI_SKILLS_HTTP_API_KEYS`
- Include `Authorization: Bearer <token>` or `x-api-key` header

### 🚦 API/MCP Returns `429 Too Many Requests`

- Increase `OMNI_SKILLS_RATE_LIMIT_MAX`
- Widen `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Reduce burst traffic from clients or probes

### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
