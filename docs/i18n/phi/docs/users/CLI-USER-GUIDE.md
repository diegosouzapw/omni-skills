# 🧭 Omni Skills CLI User Guide (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Ang buong pampublikong CLI surface na ipinadala ng `omni-skills`.**

Gamitin ang gabay na ito kapag gusto mong:

| Layunin | Command Area |
|:-----|:-------------|
| 📥 Mag-install ng mga kasanayan o bundle | [Mga Daloy ng Pag-install](#3️⃣-install-flows) |
| 🔎 Hanapin ang catalog | [Catalog Discovery](#4️⃣-catalog-discovery) |
| 🔌 I-configure ang mga kliyente ng MCP | [MCP Client Config](#5️⃣-mcp-client-config) |
| 🖥️ Simulan ang mga serbisyo ng MCP, API, o A2A | [MCP Server](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Gamitin ang visual terminal shell | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Magpatakbo ng diagnostics o preflight | [Diagnostics](#🔟-diagnostics-and-preflight) |---

## 1️⃣ Install and Entry Modes

I-install gamit ang `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Konteksto | Ano ang Mangyayari |
|:--------|:------------|
| 🖥️ TTY + walang argumento | Binubuksan ang**guided install**flow |
| ⚙️ Hindi TTY + walang argumento | Non-interactive na pag-install sa `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Branded**Ink visual shell**|
| 📝 `npx omni-skills ui --text` | Readline**text fallback**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Utos | Paglalarawan |
|:--------|:-----------|
| `ui` | 🎨 Visual terminal hub |
| `hanapin [query]` | 🔎 Pagkatuklas ng Catalog |
| `recategorize` | 🏷️ Pamamahala ng taxonomy |
| `install [mga flag]` | 📥 Skill/bundle install |
| `config-mcp` | 🔌 Configuration ng MCP client |
| `mcp <stdio\|stream\|sse>` | 🔌 Mga mode ng server ng MCP |
| `api` | 🌐 Catalog API |
| `a2a` | 🤖 A2A runtime |
| `usok` | 🧪 I-release ang preflight |
| `publish-check` | 📦 Pagsusuri sa publikasyon ng package |
| `doktor` | 🩺 Mga diagnostic sa kapaligiran |
| `tulong` | ❓ Command reference |---

## 3️⃣ Install Flows

### Mabilis na Simula

```bash
npx omni-skills
npx omni-skills install --guided
```

> Hinahayaan ka ng ginabayang daloy na pumili:**target na kliyente**→**bundle o kasanayan**→**pasadyang landas**→**preview bago isagawa**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| Bandila | Kliyente |
|:-----|:-------|
| `--antigravity` | 🟣 Antigravity *(default)* |
| `--claude` | 🟢 Claude Code |
| `--cursor` | 🔵 Cursor |
| `--codex` | 🔴 Codex CLI |
| `--gemini` | 🟡 Gemini CLI |
| `--kiro` | 🟠 Kiro |
| `--opencode` | ⚪ OpenCode |

> Default na target sa pag-install (non-interactive): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| Bandila | Layunin |
|:-----|:--------|
| `--kategorya` | I-filter ayon sa kategorya ng taxonomy |
| `--tool` | I-filter ayon sa suportadong tool |
| `--panganib` | I-filter ayon sa antas ng panganib |
| `--uri` | Pagbukud-bukurin ang mga resulta (hal., `kalidad`) |
| `--order` | Pagbukud-bukurin ang pagkakasunud-sunod |
| `--min-kalidad` | Pinakamababang marka ng kalidad |
| `--min-best-practices` | Pinakamababang marka ng pinakamahusay na kasanayan |
| `--min-level` | Minimum na antas ng maturity |
| `--min-security` | Pinakamababang marka ng seguridad |
| `--validation-status` | I-filter ayon sa validation state |
| `--security-status` | I-filter ayon sa estado ng seguridad |---

## 5️⃣ MCP Client Config

Gamitin ang `config-mcp` upang i-preview o isulat ang configuration ng MCP na alam ng kliyente.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<mga detalye>
<summary>🔌 <strong>Config-capable client surface</strong></summary>

| Kliyente | Mga Target |
|:-------|:--------|
| Claude | Mga setting at desktop target |
| Cursor | User at workspace |
| Codex | TOML config |
| Gemini | User at workspace |
| Antigravity | Config ng user |
| OpenCode | User at workspace |
| Cline | Unang-klase na target |
| GitHub Copilot CLI | User at repo |
| Kilo Code | User, proyekto, at workspace |
| Kiro | User at workspace |
| Zed | Workspace |
| VS Code | User, workspace, at Dev Container |
| Magpatuloy | Workspace YAML |
| Junie | Proyekto at user |
| Windsurf | Config ng user |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

> Nagdaragdag ang**Lokal na sidecar**: pagtuklas ng kliyente, preview ng pag-install, pag-install/pag-alis ng mga daloy, at pagsulat ng config ng MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Ruta | Layunin |
|:------|:--------|
| `GET /healthz` | Pagsusuri sa kalusugan |
| `GET /openapi.json` | OpenAPI spec |
| `GET /v1/skills` | Ilista ang lahat ng kasanayan |
| `GET /v1/search` | Maghanap sa catalog |
| `GET /v1/skills/:id/archives` | Listahan ng mga archive para sa isang kasanayan |
| `GET /v1/skills/:id/download/archive?format=zip` | I-download ang archive ng kasanayan |
| `GET /v1/skills/:id/download/archive/checksums` | Mag-download ng mga checksum |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Tampok | Katayuan |
|:--------|:-------|
| 🔎 Pagtuklas na may kamalayan sa gawain | ✅ |
| 📋 Handoff ng install-plan | ✅ |
| 🔄 Pagboto | ✅ |
| 📡 Streaming | ✅ |
| ❌ Pagkansela | ✅ |
| 🔔 Push-notification config | ✅ |
| 💾 Pagtitiyaga | Memorya, JSON, at SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Mga Tampok

| Tampok | Paglalarawan |
|:--------|:-----------|
| 🧭 May gabay na pag-install | Pumili ng kliyente o custom na landas |
| 🔎 Maghanap + i-install | Walang kinakailangang pagsasaulo ng bandila |
| 🔌 MCP config | I-preview at isulat ang mga daloy |
| 🖥️ Paglulunsad ng serbisyo | MCP, API, at A2A guided startup |
| 🕐 Mga Kamakailan | Mga kamakailang pag-install at muling paglulunsad ng serbisyo |
| ⭐ Mga Paborito | Mga naka-save na kasanayan at mga bundle |
| 💾 Preset | Pinangalanang pag-install at mga preset ng serbisyo |

>**Path ng estado:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Sinusuri: estado ng repo, estado ng lokal na pag-install, pagkakaroon ng runtime, at mga isyu sa kapaligiran.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Pinapatunayan: build, pagsubok, package output, service boot, scanner coverage, at release packaging.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Katauhan | Utos | Layunin |
|:-----------|:--------|:--------|
| 🆕 Bagong user | `npx omni-skills` | Ginabayang unang beses na pag-install |
| 🔧 Operator | `npx omni-skills config-mcp --list-targets` | I-configure ang lokal na MCP |
| 🔧 Operator | `npx omni-skills mcp stream --local` | Simulan ang lokal na sidecar |
| 📦 Maintainer | `npx omni-skills smoke` | I-validate ang isang release |
| 🔍 Power user | `npx omni-skills find security --sort quality --min-quality 95` | Hanapin muna ang pinakamahusay na kasanayan |---

## 📖 Related Documents

| Doc | Ano ang Saklaw Nito |
|:----|:--------------|
| 🚀 [Pagsisimula](./GETTING-STARTED.md) | I-install at i-verify sa loob ng wala pang 2 minuto |
| 📗 [Gabay sa Paggamit](./USAGE.md) | Lahat ng CLI command, pattern, at mode |
| 📦 [Mga Bundle](./BUNDLES.md) | Na-curate na mga koleksyon ng kasanayan |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Sanggunian sa pagpapatakbo |
| 🔌 [Lokal na MCP Sidecar](../specs/LOCAL-MCP-SIDECAR.md) | Mga tool sa filesystem at pagsulat ng config |