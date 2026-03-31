# 🔧 System Runbook

> **The complete operational guide for building, validating, serving, securing, and troubleshooting Awesome Omni Skills.**

---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run identity:check   # Verify package/repo identity contract
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx awesome-omni-skills ui      # Visual shell for install and service launch
```

| Command | What It Does |
|:--------|:-------------|
| `npm run identity:check` | Verifies `package.json`, README branding, CLI aliases, and source-controlled repo identity stay aligned |
| `npm run validate` | Validates `SKILL.md`, regenerates `metadata.json`, computes taxonomy/maturity/quality/security |
| `npm run taxonomy:report` | Shows category drift suggestions without rewriting files |
| `npm run repo:metadata:print` | Prints the desired GitHub description, homepage, and topics derived from `data/project_identity.json` |
| `npm run verify:scanners` | Confirms scanner coverage recorded in generated skill metadata |
| `npm run release:notes` | Generates custom release notes from metadata, bundles, and git history |
| `npm run build` | Regenerates catalog/manifests/archives/checksums, verifies scanner coverage and archives, rebuilds `docs/CATALOG.md` |
| `npm test` | Full smoke suite across CLI, API, MCP, sidecar, and archive flows |

---

## 🖥️ Visual Shell

The published CLI now includes an Ink-based operator shell:

```bash
npx awesome-omni-skills ui
```

Current capabilities:

- guided install for known clients and custom paths
- search-then-install flow
- MCP launch wizard
- API launch wizard
- A2A launch wizard
- recent installs and service relaunches
- named install and service presets

Local state path:

```text
~/.omni-skills/state/ui-state.json
```

Fallback:

```bash
npx awesome-omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx awesome-omni-skills recategorize           # Preview suggestions
npx awesome-omni-skills recategorize --write   # Apply canonical categories
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
OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS=1 \
OMNI_SKILLS_ENABLE_CLAMAV=1 \
npm run validate
```

> Requires `clamscan` in `PATH`.
> Canonical tracked metadata stays deterministic by default for local builds. Release workflows now opt in automatically with `OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS=1`.

### 🔒 Optional VirusTotal

```bash
OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS=1 \
VT_API_KEY=your-key \
npm run validate
```

> Hash lookup only — unknown files are **not uploaded** by default.
> Release workflows now opt in automatically with `OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS=1`, so published release artifacts persist the live scanner evidence.

### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Strict release gate:

```bash
OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS=1 \
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

`dist/` is committed intentionally in this repository. The generated catalog, manifests, bundles, and archives are runtime inputs for CLI install flows, API download surfaces, MCP previews, A2A task handoff, smoke tests, and release verification.

### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_EMBED_SIGNATURES=1 \
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem \
npm run index
```

Optional public key override:

```bash
OMNI_SKILLS_EMBED_SIGNATURES=1 \
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem \
npm run index
```

> If no public key is supplied, the build derives one via `openssl` into `dist/signing/`.
> Canonical tracked manifests stay unsigned by default for local builds. Release workflows now opt in automatically with `OMNI_SKILLS_EMBED_SIGNATURES=1`.

### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Version policy:

- patch increments until `.10`
- after `.10`, the next release rolls minor and resets patch to `.0`

Examples:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`

---

## 5️⃣ Installation Flows

| Scenario | Command |
|:---------|:--------|
| 📥 Default install (Antigravity) | `npx awesome-omni-skills` |
| 🎯 Specific skill + client | `npx awesome-omni-skills --cursor --skill omni-figma` |
| 🔎 Discovery → install | `npx awesome-omni-skills find figma --tool cursor --install --yes` |
| 📦 Bundle install | `npx awesome-omni-skills --cursor --bundle essentials` |
| 🩺 Verify install | `npx awesome-omni-skills doctor` |

---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx awesome-omni-skills find figma
npx awesome-omni-skills find mcp --sort quality --min-quality 80 --min-security 90
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
npx awesome-omni-skills api --port 3333
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
| 🔑 Bearer auth | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx awesome-omni-skills api` |
| 🗝️ API key auth | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx awesome-omni-skills api` |
| 🛂 Admin runtime auth | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx awesome-omni-skills api` |
| 🚦 Rate limiting | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx awesome-omni-skills api` |
| 📝 Audit logging | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx awesome-omni-skills api` |
| 🌍 CORS allowlist | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx awesome-omni-skills api` |
| 🧱 IP allowlist | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx awesome-omni-skills api` |
| 🚧 Maintenance mode | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx awesome-omni-skills api` |
| 🔁 Trusted proxy | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx awesome-omni-skills api` |

> 🟢 `/healthz` stays open by design; catalog routes require auth when enabled. `GET /admin/runtime` requires the admin token when configured and returns the live governance snapshot.

---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx awesome-omni-skills mcp stdio             # Pipe transport
npx awesome-omni-skills mcp stream            # Streamable HTTP
npx awesome-omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx awesome-omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

The sidecar can now preview or write MCP config for:

- Claude user and project settings
- Claude Desktop config
- Cline user config
- GitHub Copilot CLI user and repository config
- Cursor user and workspace config
- Codex TOML config
- Gemini user and project settings
- Kilo CLI user and project config
- Kilo workspace config
- Kiro user and project settings
- OpenCode user and workspace config
- Continue workspace YAML config
- Windsurf user config
- Zed workspace config
- workspace `.mcp.json`
- VS Code workspace and user config
- Dev Container config

`configure_client_mcp` also returns per-client `recipes` so operators get the equivalent CLI or manual setup steps together with the preview.

### 🧾 MCP Config Preview and Write Flow

Use the unified CLI when you want config generation without calling the MCP tool directly:

```bash
npx awesome-omni-skills config-mcp --list-targets
npx awesome-omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

The visual shell exposes the same workflow through:

- `npx awesome-omni-skills ui`
- `Services`
- `Configure MCP client`

The command stays in preview mode unless `--write` is passed.

### 🔐 Hosted MCP Hardening

Same env vars as the API:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx awesome-omni-skills mcp stream
```

**Protected routes**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` remains open.

---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx awesome-omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx awesome-omni-skills a2a --port 3335
```

The default local path stays simple-first:

- `json` or `sqlite` persistence can run with queue polling disabled
- set `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` only when you want multi-worker claim and lease failover
- keep Redis coordination as an advanced hosted option, not the baseline

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
npx awesome-omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx awesome-omni-skills a2a
```

If a worker dies while a task is `working`, another worker can reclaim it after the lease expires and continue execution.

### 🟥 Redis Coordination

For hosted or multi-node deployments that do not want queue coordination tied to the shared SQLite store, switch the coordinator to Redis:

```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx awesome-omni-skills a2a
```

In this mode:

- persistence still lives in JSON or SQLite
- task claiming and lease ownership move to Redis
- multiple A2A nodes can share a queue without relying on SQLite row-level coordination

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

The repository now has distinct validation and release workflows:

| Workflow | Trigger | Purpose |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR to `main` | Build, test, and confirm generated artifacts are committed |
| `release.yml` | Tag push `v*` or manual dispatch | Run release-grade scanners, verify the version tag, sign artifacts, package the tarball, publish to npm, and create the GitHub Release |

Repository header metadata is now managed separately:

| Workflow | Trigger | Purpose |
|:---------|:--------|:--------|
| `sync-repository-metadata.yml` | Pushes touching `data/project_identity.json` or manual dispatch | Check or apply GitHub description, homepage, and topics from source-controlled metadata |

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
| `OMNI_SKILLS_REPO_ADMIN_TOKEN` | `sync-repository-metadata.yml` apply mode | Optional PAT with repo-admin rights to update description, homepage, and topics automatically |
| `NPM_TOKEN` | `publish-npm` job | Authenticate `npm publish` for tag releases |

### 🦠 Release Scanner Policy

`release.yml` sets or prepares:

- `OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS=1`
- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || secrets.VIRUSTOTAL }}`
- `OMNI_SKILLS_EMBED_SIGNATURES=1`
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
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Admin runtime auth token | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max requests per window | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Rate limit window (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Enable audit logging | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` or `text` audit output | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Optional audit log file path | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Comma-separated CORS origin allowlist | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Comma-separated IP or CIDR allowlist | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Express trust proxy setting | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Enable maintenance responses | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Maintenance `Retry-After` seconds | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Simulated async task delay | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`, `sqlite`, or `memory` task store | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Custom A2A task store file | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Enable shared queue polling for lease-aware workers | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | `store`, `sqlite`, `local`, or `redis` coordinator | `store` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL for external coordination | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Redis key prefix for queue metadata | `omni-skills:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Queue polling interval for lease workers | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Lease duration before another worker may reclaim a task | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Stable worker identifier for lease ownership and diagnostics | Hostname + PID + random suffix |
| `OMNI_SKILLS_A2A_EXECUTOR` | `inline` or `process` task executor | `inline` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Override external worker command | Node binary |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON array of external worker args | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Resume recovered submitted/working tasks on boot | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Allow non-HTTPS webhooks outside localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Enable ClamAV scanning | `0` |
| `OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS` | Persist live optional scanner results into metadata/manifests | `0` |
| `VT_API_KEY` | VirusTotal API key | — |
| `OMNI_SKILLS_EMBED_SIGNATURES` | Persist detached archive signatures into committed manifests | `0` |
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
npx awesome-omni-skills recategorize
```

### 📦 Archive Verification Fails

1. Rebuild with `npm run build`
2. Rerun `npm run verify:archives`
3. If signing is enabled, confirm the public key and `openssl` availability

### 🦠 Release Workflow Fails on Scanner Coverage

- Confirm `VT_API_KEY` exists in repository secrets
- Confirm `freshclam` succeeded on the runner
- Rebuild locally with `OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS=1 OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Rerun `npm run verify:scanners:strict`

### 📦 npm Publish Fails in CI

- Confirm `NPM_TOKEN` exists in repository secrets
- Confirm the Git tag matches `package.json` version exactly
- Check that the tarball uploaded by `release-verify` exists in the workflow artifacts

### ✍️ Release Signing Fails in CI

- Confirm `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` or `OMNI_SKILLS_SIGN_PRIVATE_KEY` exists in repository secrets
- If you provide a public key secret, confirm it matches the private key
- Confirm `openssl` is available and the private key is PEM-formatted
- Rebuild locally with `OMNI_SKILLS_EMBED_SIGNATURES=1 OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Rerun `npm run verify:archives:strict`

### 🔒 API/MCP Returns `401 Unauthorized`

- Verify `OMNI_SKILLS_HTTP_BEARER_TOKEN` or `OMNI_SKILLS_HTTP_API_KEYS`
- Include `Authorization: Bearer <token>` or `x-api-key` header

### 🚦 API/MCP Returns `429 Too Many Requests`

- Increase `OMNI_SKILLS_RATE_LIMIT_MAX`
- Widen `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Reduce burst traffic from clients or probes

### 🛂 API/MCP Admin Runtime Returns `401`

- Verify `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Send `x-admin-token: <token>` or `Authorization: Bearer <admin-token>`

### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Disable `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Use `/healthz` for liveness probes during maintenance
- Use `/admin/runtime` with the admin token for operator diagnostics

### 🌍 Browser Requests Fail CORS Validation

- Verify `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Include the exact scheme and host, for example `https://app.example.com`

### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Verify `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Verify `OMNI_SKILLS_A2A_REDIS_URL`
- Check Redis connectivity from every node
- Inspect `/healthz` for the `coordination` snapshot

### 🩺 General Diagnostics

```bash
npx awesome-omni-skills doctor   # Check repo, targets, catalog state
npx awesome-omni-skills smoke    # Full preflight validation
```
