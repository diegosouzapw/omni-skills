# 🛡️ Security Validation and Distribution (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


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
| ⚙️ ClamAV scanning | Optional enricher |
| ⚙️ VirusTotal hash lookup | Optional enricher |
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
| 💣 **Destructive commands** | `rm -rf`, `format`, `del /s` |
| 🔑 **Privilege escalation** | `sudo`, `chmod 777`, setuid patterns |
| 📂 **Suspicious paths** | `/etc/shadow`, `~/.ssh`, credential files |
| ⚠️ **Risky primitives** | `shell=True`, `pickle.load`, `eval`, `extractall` |

---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Requires `clamscan` in `PATH`
- Scans packaged files for known malware
- Results recorded in skill metadata

---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

- **Hash lookup only** — no file upload during normal validation
- Unknown files remain local-only
- Keeps the build **deterministic** and CI-independent

### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Strict release gate:

```bash
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
3. decode the release signing key from GitHub secrets
4. run `npm run release:verify`
5. package the tarball with `npm pack`
6. publish that exact tarball to npm with provenance
7. create a GitHub Release with custom notes and attached verification assets

---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> If no public key is provided, the build derives one with `openssl` and places it in `dist/signing/`.

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
