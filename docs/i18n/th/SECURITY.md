# 🛡️ Security Policy (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

> Translation snapshot for **Awesome Omni Skills** `v0.9.0`.
> Source: `SECURITY.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=SECURITY.md; version=0.9.0; release=v0.9.0; english_snapshot=2026-03-31T00:00:00+00:00 -->

---

## 🚨 Reporting a Vulnerability

> **If you discover a security issue in Awesome Omni Skills, do not open a public issue first.**

Please report through one of these private channels:

| Channel | How |
|:--------|:----|
| 🔒 GitHub Security Advisory | [Open a private advisory](https://github.com/diegosouzapw/awesome-omni-skills/security/advisories/new) |
| 📧 Direct Contact | Contact the maintainers directly |

### 📋 Include in Your Report

- 📁 Affected component or path
- 🔄 Reproduction steps
- ⚠️ Impact assessment
- 🧪 Any proof-of-concept material needed to verify the issue

> **⏱️ We aim to acknowledge reports within 48 hours** and prioritize fixes according to impact.

---

## 🎯 Scope

This policy covers the repository's runtime and content surfaces:

| Component | Path |
|:----------|:-----|
| 🖥️ CLI and installer | `tools/bin/` |
| 📚 Shared libraries | `tools/lib/` |
| ⚙️ Build and validation scripts | `tools/scripts/` |
| 📦 Generated catalog artifacts | `dist/` |
| 🌐 API, MCP, and A2A packages | `packages/` |
| 🧠 Skill content | `skills/` — especially shell commands, network access, credential flows, or security-sensitive guidance |

---

## สถาปัตยกรรม

The repository relies on the following security controls:

### 🧠 Skill-Level Controls

| Control | Description |
|:--------|:-----------|
| 🏷️ Risk field | Skill metadata includes a declared `risk` level |
| 📊 Scoring | Validation computes maturity, best-practices, quality, and security scores |
| 🔍 Static scanner | Inspects `SKILL.md`, packaged files, and helper scripts, and blocks critical findings from entering the public catalog |
| 🦠 Release malware verification | Published releases are verified with both ClamAV and VirusTotal before publication |

### 🚫 Hard Content Blocks

The public repository does not accept skills that trip the critical security gate. Current hard blockers include:

- remote content piped directly into shell execution
- instructions that attempt to reveal prompts, secrets, or hidden runtime context

When the validator finds one of those patterns, the skill does not enter the public catalog. In external-repository intake, valid siblings may still continue while the blocked skills are excluded and reported separately.

### 🖥️ Runtime Controls

| Control | Description |
|:--------|:-----------|
| 📁 Path safety | Install flows use path safety checks |
| 🔒 Allowlist writes | Local MCP sidecar writes constrained by an allowlist |
| 👁️ Dry-run defaults | Write-oriented tools default to dry-run unless explicitly disabled |
| 🔐 Auth & limits | Bearer/API-key auth, admin runtime auth, rate limiting, CORS/IP allowlists |
| 📋 Audit | Audit logging, maintenance mode, and request IDs |

### 📦 Release Controls

| Control | Description |
|:--------|:-----------|
| ✅ Checksum manifests | SHA-256 checksums for generated archives |
| ✍️ Signatures | Detached signature verification in CI before publication |
| 🦠 Dual scanner gate | ClamAV and VirusTotal both required to complete cleanly for release publication |
| 🧪 Smoke checks | Exercise shipped runtime surfaces before release |

---

## 🔮 What Is Still Open

> The main security work remaining is **not** baseline hardening. The open items are:

| Area | Status |
|:-----|:-------|
| 🏢 Enterprise governance | External identity, gateway policy, and WAF integration above current in-process controls |
| 🔌 MCP client writers | Broader writers only when public config contracts are stable enough |
| 📊 Scanner refinement | Continued refinement so exceptional skills stay clearly separated from merely well-structured ones |

---

## ⚠️ Risk Levels in Skills

Each skill declares one of these `risk` levels:

| Risk Level | Meaning |
|:-----------|:--------|
| 🟢 `safe` | No destructive operations expected |
| 🟡 `caution` | May modify files or interact with external systems |
| 🔴 `offensive` | Security-testing or adversarial workflows requiring explicit authorization |
| ⛔ `critical` | High-impact or system-level operations |

---

## 📋 Disclosure Notes

Because Awesome Omni Skills ships executable helpers, filesystem-aware local tooling, and client-specific config writers, these vulnerability classes should be treated as **high priority** even if they appear "local only":

| Category | Examples |
|:---------|:---------|
| 📁 Path traversal | Directory escape via skill install or config paths |
| 🔗 Symlink safety | Symlink following during install or archive extraction |
| 🖥️ Command execution | Arbitrary command injection via skill content or scripts |
| 📦 Archive verification | Bypass of checksum or signature verification |
| 🔓 Auth bypass | Rate-limiting or authentication bypass on API/MCP |
| 🔌 Allowlist bypass | Local sidecar allowlist circumvention |
| 🦠 Scanner evasion | False-negative classes in static or external scanners |
