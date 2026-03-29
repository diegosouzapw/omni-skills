# 📗 Usage Guide (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Allt du behöver för att åberopa färdigheter, köra tjänster och driva Omni Skills-körtiden.**

För fullständiga operativa arbetsflöden, se [🔧 System Runbook](../operations/RUNBOOK.md).
För den fullständiga kommandokartan för slutanvändare, se [🧭 CLI User Guide](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Status | Detaljer |
|:-------|:--------|
| ✅**Tillgänglig nu**| 32 publicerade färdigheter inom design, arkitektur, felsökning, dokument, OSS, säkerhet, DevOps, AI-teknik, data, verktyg och arbetsflöden för maskininlärning |
| 📦**Bundlar**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` och `oss-maintainer` är fullt uppbackade idag |
| 🔌**MCP-räckvidd**| 7 installationskompatibla klienter, 16 konfigurationskompatibla klienter, 33 förstklassiga konfigurationsmål, 19 konfigurationsprofiler |
| 🤖**A2A hållbarhet**| Minne, JSON eller SQLite lokal hållbarhet, återstartsresume, valfri processexekvering och opt-in hyrd koordinering för delade arbetare |---

## 🖥️ Invocation by Client

| Kund | Hur man anropar | Färdighetsväg |
|:-------|:-------------|:-----------|
| 🔵**Claude Code**| `>> /skill-name hjälp mig...` | `~/.claude/skills/` |
| 🟡**Gemini CLI**| `Använd @skill-name för att...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Använd @skill-name för att...` | `~/.codex/skills/` |
|**Kiro**| Färdigheter laddas automatiskt på begäran | `~/.kiro/skills/` |
| 🟣**Antigravitation**| `Använd @skill-name för att...` | `~/.gemini/antigravity/skills/` |
| 🔵**Markör**| `@skill-name` i chatten | `~/.cursor/skills/` |
| ⚪**OpenCode**| `opencode run @skill-name` | `.opencode/skills/` |
| ⬛**Copilot**| Klistra in färdighetsinnehåll manuellt | N/A |

Klienter som Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline och Kilo Code använder i första hand "config-mcp"-flödet snarare än en kompetenskatalog.---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

>**📌 Notes:**
> - I en interaktiv terminal öppnar nu `npx omni-skills` ett guidat installationsflöde
> - `npx omni-skills ui` öppnar det visuella Ink-skalet med åtgärder för installation, upptäckt och servicestart
> - det visuella skalet består av senaste installationer, senaste tjänstlanseringar, favoriter och namngivna förinställningar i `~/.omni-skills/state/ui-state.json`
> - Utanför en TTY är full installation fortfarande standard när ingen väljare tillhandahålls
> - `--skill` installerar endast de valda publicerade färdigheterna
> - `--bundle` expanderar paketet och installerar de publicerade medlemmarna som deklarerats i det kurerade paketet
> - `hitta` stöder 12+ filterflaggor: `kvalitet`, `bästa_practices`, `skill_level`, `security`, `category`, `tool`, `risk` och mer
> - `config-mcp` är rätt väg för MCP-kompatibla produkter som inte har en förstklassig kompetenskatalog---

## 🔌 Runtime Commands

CLI är ett enhetligt driftsverktyg, inte bara ett installationsprogram.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Det visuella skalet stöder:

- guidad installation med känd klient eller anpassad sökväg
- sök-sedan-installera utan att memorera flaggor
- guidad MCP-klientkonfiguration förhandsgranska och skriva flöden
- MCP, API och A2A guidad start
- senaste installationer och tjänstelanseringar
- sparade installations- och serviceförinställningar
- favoritkunskaper och buntar### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
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
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # | Tips |
|:--|:----|
| 1️⃣ | Referera till färdigheten med namn i din prompt |
| 2️⃣ | Ange exakt artefakt, kod eller designkontext som agenten behöver |
| 3️⃣ | Föredrar `--skill` för ett minimalt installationsfotavtryck |
| 4️⃣ | Använd "läkare" och "rök" innan du felsöker förpackningar eller körtidsproblem |
| 5️⃣ | Använd paket som kurerade domäninstallationer nu när alla sju startpaket är helt säkerhetskopierade |
| 6️⃣ | Använd `find --install --yes` för upptäckt + installation i ett flöde |
| 7️⃣ | Se [runbook](../operations/RUNBOOK.md) för autentisering, hastighetsgränser, signering och verifiering env vars |