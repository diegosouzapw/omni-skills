# 🛡️ Security Validation and Distribution

> **Security scanning, archive generation, optional signing, and distribution packaging for every published skill.**

---

## 📊 Status

| Feature | State |
|:--------|:------|
| ✅ Static security scanner | Always enabled |
| ✅ Per-skill metadata classification | Implemented |
| ✅ Per-skill archives (zip/tar.gz) | Implemented |
| ✅ SHA-256 checksum manifests | Implemented |
| ⚙️ ClamAV scanning | Optional enricher |
| ⚙️ VirusTotal hash lookup | Optional enricher |
| ⚙️ Detached signing | Optional, local |
| ⏳ CI-enforced signing | Pending |

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

---

## ⚠️ Current Limitations

| Limitation | Status |
|:-----------|:-------|
| VirusTotal upload submission | Intentionally excluded from default validation |
| Signing enforcement | Optional and local, not enforced in CI |
| Hosted governance | Auth, rate limiting, and audit logging are in place; external gateway pending |
