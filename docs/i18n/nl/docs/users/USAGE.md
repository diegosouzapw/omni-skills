# 📗 Usage Guide (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Alles wat u nodig hebt om vaardigheden aan te roepen, services uit te voeren en de Omni Skills-runtime te gebruiken.**

Zie het [🔧 System Runbook](../operations/RUNBOOK.md) voor volledige operationele werkstromen.
Zie de [🧭 CLI-gebruikershandleiding](./CLI-USER-GUIDE.md) voor de volledige opdrachtkaart voor eindgebruikers.---

## 📊 Current Catalog Reality

| Staat | Details |
|:-------|:--------|
| ✅**Nu verkrijgbaar**| 32 gepubliceerde vaardigheden op het gebied van ontwerp, architectuur, debugging, documenten, OSS, beveiliging, DevOps, AI-engineering, data, tools en machine learning-workflows |
| 📦**Bundels**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` en `oss-maintainer` worden vandaag volledig ondersteund |
| 🔌**MCP-bereik**| 7 clients die geschikt zijn voor installatie, 16 clients die geschikt zijn voor configuratie, 33 eersteklas configuratiedoelen, 19 configuratieprofielen |
| 🤖**A2A-duurzaamheid**| Geheugen, JSON of SQLite lokale duurzaamheid, hervatten van herstart, optionele procesuitvoerder en opt-in gehuurde coördinatie voor gedeelde werknemers |---

## 🖥️ Invocation by Client

| Klant | Hoe u een beroep kunt doen op | Vaardigheidspad |
|:-------|:-------------|:-----------|
| 🔵**Claude-code**| `>> /vaardigheidsnaam help mij...` | `~/.claude/skills/` |
| 🟡**Gemini CLI**| `Gebruik @vaardigheidsnaam om...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Gebruik @vaardigheidsnaam om...` | `~/.codex/skills/` |
| 🟢**Kiro**| Vaardigheden worden op aanvraag automatisch geladen | `~/.kiro/skills/` |
| 🟣**Antizwaartekracht**| `Gebruik @vaardigheidsnaam om...` | `~/.gemini/antigravity/skills/` |
| 🔵**Cursor**| `@vaardigheidsnaam` in chat | `~/.cursor/skills/` |
| ⚪**OpenCode**| `opencode run @skill-naam` | `.opencode/skills/` |
| ⬛**Copiloot**| Vaardigheidsinhoud handmatig plakken | N.v.t. |

Clients zoals Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline en Kilo Code gebruiken voornamelijk de `config-mcp`-stroom in plaats van een vaardighedenmap.---

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

>**📌 Opmerkingen:**
> - In een interactieve terminal opent `npx omni-skills` nu een begeleide installatiestroom
> - `npx omni-skills ui` opent de visuele Ink-shell met installatie-, detectie- en service-lanceringsacties
> - de visuele shell bewaart recente installaties, recente servicelanceringen, favorieten en benoemde voorinstellingen in `~/.omni-skills/state/ui-state.json`
> - Buiten een TTY is volledige installatie nog steeds de standaard als er geen selector beschikbaar is
> - `--skill` installeert alleen de geselecteerde gepubliceerde vaardigheden
> - `--bundle` breidt de bundel uit en installeert de gepubliceerde leden die zijn gedeclareerd in de samengestelde bundel
> - `find` ondersteunt meer dan 12 filtervlaggen: `quality`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk` en meer
> - `config-mcp` is het juiste pad voor MCP-compatibele producten die geen eersteklas vaardighedenmap hebben---

## 🔌 Runtime Commands

De CLI is een uniforme bewerkingstool en niet alleen een installatieprogramma.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

De visuele schil ondersteunt:

- begeleide installatie met bekende client of aangepaste padselectie
- zoeken en installeren zonder vlaggen te onthouden
- begeleide preview van MCP-clientconfiguratie en schrijfstromen
- MCP-, API- en A2A-geleide opstart
- recente installaties en herlanceringen van services
- opgeslagen installatie- en servicevoorinstellingen
- favoriete vaardigheden en bundels### 🩺 Diagnostics

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

| # | Tip |
|:--|:----|
| 1️⃣ | Verwijs naar de vaardigheid op naam in uw prompt |
| 2️⃣ | Geef de exacte artefact-, code- of ontwerpcontext op die de agent nodig heeft |
| 3️⃣ | Geef de voorkeur aan `--skill` voor een minimale installatievoetafdruk |
| 4️⃣ | Gebruik `doctor` en `smoke` voordat u fouten in de verpakking of runtime oplost |
| 5️⃣ | Gebruik bundels als beheerde domeininstallaties nu alle zeven starterbundels volledig worden ondersteund |
| 6️⃣ | Gebruik `find --install --yes` voor ontdekking + installatie in één stroom |
| 7️⃣ | Zie het [runbook](../operations/RUNBOOK.md) voor verificatie, snelheidslimieten, ondertekening en verificatie-env vars |