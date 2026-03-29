# 🛡️ Security Validation and Distribution (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**针对每项已发布技能的安全扫描、存档生成、可选签名和分发打包。**---

## 📊 Status

|特色|状态|
|:--------|:------|
| ✅ 静态安全扫描仪 |始终启用 |
| ✅ 按技能元数据分类 |已实施 |
| ✅ 按技能存档 (zip/tar.gz) |已实施 |
| ✅ SHA-256 校验和清单 |已实施 |
| ✅ 发布标签上的 CI 扫描器门 |已实施 |
| ✅ 来自经过验证的 tarball 的 npm 发布工作流程 |已实施 |
| ⚙️ ClamAV 扫描 |可选浓缩器|
| ⚙️ VirusTotal 哈希查找 |可选浓缩器|
| ✅ 独立签名 |已实施 |
| ✅ CI 强制签名 |在发布标签上实现 |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

在验证期间扫描每个技能：

|目标|扫描什么 |
|:-------|:-----------------|
| 📝 `技能.md` |主要技能内容|
| 📄 Markdown/文本文件 |打包的参考资料和文档 |
| ⚙️ 脚本 |打包的自动化脚本 |

**规则系列：**

|规则|示例 |
|:-----|:---------|
| 🎭**及时注射**|渗透模式、指令覆盖 |
| 💣**破坏性命令**| `rm -rf`、`format`、`del /s` |
| 🔑**权限升级**| `sudo`、`chmod 777`、setuid 模式 |
| 📂**可疑路径**| `/etc/shadow`、`~/.ssh`、凭证文件 |
| ⚠️**有风险的原语**| `shell=True`、`pickle.load`、`eval`、`extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- 在“PATH”中需要“clamscan”
- 扫描打包文件中的已知恶意软件
- 结果记录在技能元数据中---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**仅哈希查找**- 正常验证期间不上传文件
- 未知文件仅保留在本地
- 保持构建**确定性**和 CI 独立性### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

严格的释放门：```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

此步骤读取生成的“skills/*/metadata.json”，如果所需的扫描程序未执行或报告检测，则此步骤会失败。---

## 📊 Security Output Shape

安全数据在每个技能的元数据中发出：```json
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

> 该块被传播到清单和目录视图中，使 CLI、API 和 MCP 能够**按安全分数进行过滤和排名**。---

## 📦 Archive Outputs

每个发布的技能都会生成：

|文件|格式|
|:-----|:--------|
| `dist/archives/<skill>.zip` | ZIP 存档 |
| `dist/archives/<skill>.tar.gz` |压缩包存档 |
| `dist/archives/<skill>.checksums.txt` | SHA-256 校验和清单 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub Actions 现已发布标签 (`v*`)：

1. 验证 git 标签是否匹配 `package.json`
2.安装并刷新ClamAV
3. 从 GitHub 机密中解码发布签名密钥
4. 运行 `npm run release:verify`
5. 使用 npm pack 打包 tarball
6. 将确切的 tarball 发布到 npm 并注明出处
7. 创建带有自定义注释和附加验证资产的 GitHub 版本---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> 如果未提供公钥，则构建会使用“openssl”派生一个公钥并将其放置在“dist/signing/”中。

启用后，“.sig”文件将在存档和校验和清单旁边发出。

在 CI 中，发布标签现在需要通过以下方式签名：

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` 或 `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- 可选“OMNI_SKILLS_SIGN_PUBLIC_KEY_B64”或“OMNI_SKILLS_SIGN_PUBLIC_KEY”---

## ⚠️ Current Limitations

|限制|状态 |
|:-----------|:--------|
| VirusTotal 上传提交 |故意排除在默认验证之外 |
|签署执行 |强制发布标签；本地构建可能仍会运行未签名的|
|托管治理 |内置身份验证、管理运行时、CORS/IP 允许列表、维护模式和审核日志记录均已到位；外部网关仍然是可选的|