# 🛡️ Security Validation and Distribution (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

> Translation snapshot for **Awesome Omni Skills** `v0.9.0`.
> Source: `docs/specs/SECURITY-VALIDATION.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/specs/SECURITY-VALIDATION.md; version=0.9.0; release=v0.9.0; english_snapshot=2026-03-31T00:00:00+00:00 -->

> **Security scanning, archive generation, optional signing, and distribution packaging for every published skill.**

---

## 📊 Status

| Feature | State |
|:--------|:------|
| ✅ Static security scanner | Always enabled |
| ✅ Per-skill metadata classification | Implemented |
| ✅ Per-skill archives (zip/tar.gz) | Implemented |
| ✅ SHA-256 checksum manifests | Implemented |
| ✅ CI scanner gate on release tags | Implemented |
| ✅ npm publish workflow from verified tarball | Implemented |
| ✅ ClamAV scanning | Required for published releases; optional for local ad hoc builds |
| ✅ VirusTotal hash lookup | Required for published releases; optional for local ad hoc builds |
| ✅ Detached signing | Implemented |
| ✅ CI-enforced signing | Implemented on release tags |

---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Scans every skill during validation:

| Target | What Gets Scanned |
|:-------|:-----------------|
| 📝 `SKILL.md` | Main skill content |
| 📄 Markdown/text files | Packaged references and docs |
| ⚙️ Scripts | Packaged automation scripts |

**Rule families:**

| Rule | Examples |
|:-----|:---------|
| 🎭 **Prompt injection** | Exfiltration patterns, instruction overrides |
| 🚫 **Hidden-context exfiltration** | Attempts to reveal prompts, secrets, or hidden runtime context |
| 💣 **Destructive commands** | `rm -rf`, `format`, `del /s` |
| 🔑 **Privilege escalation** | `sudo`, `chmod 777`, setuid patterns |
| 📂 **Suspicious paths** | `/etc/shadow`, `~/.ssh`, credential files |
| 🌐 **Remote shell piping** | `curl ... | sh`, `wget ... | bash`, or equivalent |
| ⚠️ **Risky primitives** | `shell=True`, `pickle.load`, `eval`, `extractall` |

Critical findings in these families block a skill from entering the public catalog. During external-repository intake, the importer can now filter only the blocked skills out of a mixed batch and keep the valid skills moving to PR review.

---

### 2️⃣ ClamAV (Release-Required, Optional Locally)

```bash
OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS=1 \
OMNI_SKILLS_ENABLE_CLAMAV=1 \
npm run validate
```

- Requires `clamscan` in `PATH`
- Scans packaged files for known malware
- Results are recorded in skill metadata only when `OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS=1` is set
- Release workflows now set that flag automatically, so release tags and auto-release runs persist live ClamAV and VirusTotal evidence by default

---

### 3️⃣ VirusTotal (Release-Required, Optional Locally)

```bash
OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS=1 \
VT_API_KEY=your-key \
npm run validate
```

- **Hash lookup only** — no file upload during normal validation
- Unknown files remain local-only
- Canonical tracked metadata stays deterministic by default for local and ad hoc builds because optional network results are not embedded unless explicitly requested
- Release workflows opt in automatically so published release artifacts carry the live scanner evidence

### 4️⃣ Scanner Coverage Verification

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

This step reads generated `skills/*/metadata.json` and fails if required scanners did not execute or reported detections.

---

## 📊 Security Output Shape

Security data is emitted in every skill's metadata:

```json
{
  "security": {
    "score": 100,
    "tier": "hardened",
    "status": "passed",
    "findings_count": 0,
    "findings": [],
    "signals": {
      "scanned_files": 3,
      "script_files": 0,
      "binary_like_files": 0
    },
    "scanners": {
      "static": { "enabled": true, "status": "completed" },
      "clamav": { "enabled": false, "status": "disabled" },
      "virustotal": { "enabled": false, "status": "disabled" }
    }
  }
}
```

> This block is propagated into manifests and catalog views, enabling CLI, API, and MCP to **filter and rank by security score**.
> Optional ClamAV and VirusTotal results stay opt-in for local builds. Release workflows now inject `OMNI_SKILLS_EMBED_OPTIONAL_SECURITY_RESULTS=1`, require both scanners to complete cleanly, and publish artifacts that already carry that evidence by default.

---

## 📦 Archive Outputs

Each published skill generates:

| File | Format |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP archive |
| `dist/archives/<skill>.tar.gz` | Tarball archive |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifest |

### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub Actions release tags (`v*`) now:

1. verify the git tag matches `package.json`
2. install and refresh ClamAV
3. require VirusTotal hash lookup credentials
4. decode the release signing key from GitHub secrets
5. run `npm run release:verify`
6. package the tarball with `npm pack`
7. publish that exact tarball to npm with provenance
8. create a GitHub Release with custom notes and attached verification assets

---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_EMBED_SIGNATURES=1 \
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem \
npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_EMBED_SIGNATURES=1 \
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem \
npm run index
```

> If no public key is provided, the build derives one with `openssl` and places it in `dist/signing/`.
> Canonical tracked manifests stay unsigned by default for local builds. Release workflows now inject `OMNI_SKILLS_EMBED_SIGNATURES=1`, so published release artifacts embed detached signatures by default.

When enabled, `.sig` files are emitted beside the archives and checksum manifest.

In CI, release tags now require signing through:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` or `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- optional `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` or `OMNI_SKILLS_SIGN_PUBLIC_KEY`

---

## ⚠️ Current Limitations

| Limitation | Status |
|:-----------|:-------|
| VirusTotal upload submission | Intentionally excluded from default validation |
| Signing enforcement | Enforced on release tags; local builds may still run unsigned |
| Hosted governance | Built-in auth, admin runtime, CORS/IP allowlists, maintenance mode, and audit logging are in place; external gateways remain optional |
