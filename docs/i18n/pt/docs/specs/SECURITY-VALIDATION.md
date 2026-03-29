# 🛡️ Security Validation and Distribution (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Verificação de segurança, geração de arquivos, assinatura opcional e pacote de distribuição para cada habilidade publicada.**---

## 📊 Status

| Recurso | Estado |
|:--------|:------|
| ✅ Scanner de segurança estática | Sempre ativado |
| ✅ Classificação de metadados por habilidade | Implementado |
| ✅ Arquivos por habilidade (zip/tar.gz) | Implementado |
| ✅ Manifestos de soma de verificação SHA-256 | Implementado |
| ✅ Porta do scanner CI nas etiquetas de liberação | Implementado |
| ✅ fluxo de trabalho de publicação npm de tarball verificado | Implementado |
| ⚙️ Digitalização ClamAV | Enriquecedor opcional |
| ⚙️ Pesquisa de hash do VirusTotal | Enriquecedor opcional |
| ✅ Assinatura individual | Implementado |
| ✅ Assinatura imposta por CI | Implementado em tags de lançamento |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Verifica todas as habilidades durante a validação:

| Alvo | O que é verificado |
|:-------|:-----------------|
| 📝 `SKILL.md` | Conteúdo de habilidade principal |
| 📄 Markdown/arquivos de texto | Referências e documentos empacotados |
| ⚙️ Roteiros | Scripts de automação empacotados |

**Famílias de regras:**

| Regra | Exemplos |
|:-----|:---------|
| 🎭**Injeção imediata**| Padrões de exfiltração, substituições de instruções |
| 💣**Comandos destrutivos**| `rm -rf`, `formato`, `del /s` |
| 🔑**Escalonamento de privilégios**| `sudo`, `chmod 777`, padrões setuid |
| 📂**Caminhos suspeitos**| `/etc/shadow`, `~/.ssh`, arquivos de credenciais |
| ⚠️**Primitivos arriscados**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Requer `clamscan` em `PATH`
- Verifica arquivos compactados em busca de malware conhecido
- Resultados registrados em metadados de habilidades---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Somente pesquisa de hash**— nenhum upload de arquivo durante a validação normal
- Arquivos desconhecidos permanecem apenas locais
- Mantém a construção**determinística**e independente de CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Portão de liberação estrito:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Esta etapa lê `skills/*/metadata.json` gerado e falha se os scanners necessários não executarem ou relatarem detecções.---

## 📊 Security Output Shape

Os dados de segurança são emitidos nos metadados de cada habilidade:```json
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

> Este bloco é propagado em manifestos e visualizações de catálogo, permitindo que CLI, API e MCP**filtrem e classifiquem por pontuação de segurança**.---

## 📦 Archive Outputs

Cada habilidade publicada gera:

| Arquivo | Formato |
|:-----|:-------|
| `dist/archives/<habilidade>.zip` | Arquivo ZIP |
| `dist/archives/<habilidade>.tar.gz` | Arquivo Tarball |
| `dist/archives/<habilidade>.checksums.txt` | Manifesto de soma de verificação SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Tags de lançamento do GitHub Actions (`v*`) agora:

1. verifique se a tag git corresponde a `package.json`
2. instale e atualize o ClamAV
3. decodifique a chave de assinatura de lançamento dos segredos do GitHub
4. execute `npm run release:verify`
5. empacotar o tarball com `npm pack`
6. publique esse tarball exato no npm com proveniência
7. crie uma versão do GitHub com notas personalizadas e ativos de verificação anexados---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Se nenhuma chave pública for fornecida, a compilação deriva uma com `openssl` e a coloca em `dist/signing/`.

Quando habilitado, os arquivos `.sig` são emitidos ao lado dos arquivos e do manifesto da soma de verificação.

No CI, as tags de lançamento agora exigem assinatura por meio de:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` ou `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- opcional `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` ou `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Limitação | Estado |
|:-----------|:-------|
| Envio de upload do VirusTotal | Excluído intencionalmente da validação padrão |
| Execução de assinatura | Aplicado em tags de lançamento; compilações locais ainda podem ser executadas sem assinatura |
| Governança hospedada | Autenticação integrada, tempo de execução de administrador, listas de permissões CORS/IP, modo de manutenção e registro de auditoria estão em vigor; gateways externos permanecem opcionais |