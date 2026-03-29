# 📗 Usage Guide (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Alt du trenger for å påkalle ferdigheter, kjøre tjenester og drive Omni Skills-kjøringen.**

For fullstendige operasjonelle arbeidsflyter, se [🔧 System Runbook](../operations/RUNBOOK.md).
For det fullstendige kommandokartet for sluttbrukere, se [🧭 CLI User Guide](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Status | Detaljer |
|:-------|:--------|
| ✅**Tilgjengelig nå**| 32 publiserte ferdigheter på tvers av design, arkitektur, feilsøking, dokumenter, OSS, sikkerhet, DevOps, AI-engineering, data, verktøy og arbeidsflyter for maskinlæring |
| 📦**Bunter**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` og `oss-maintainer` er fullt støttet i dag |
| 🔌**MCP-rekkevidde**| 7 installeringskompatible klienter, 16 konfigurasjonskompatible klienter, 33 førsteklasses konfigurasjonsmål, 19 konfigurasjonsprofiler |
| 🤖**A2A-holdbarhet**| Minne, JSON eller SQLite lokal holdbarhet, omstart CV, valgfri prosessutøver og opt-in leid koordinering for delte arbeidere |---

## 🖥️ Invocation by Client

| Kunde | Hvordan påkalle | Ferdighetssti |
|:-------|:-------------|:-----------|
| 🔵**Claude-kode**| `>> /ferdighetsnavn hjelp meg...` | `~/.claude/skills/` |
| 🟡**Gemini CLI**| `Bruk @skill-name for å...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Bruk @skill-name for å...` | `~/.codex/skills/` |
|**Kiro**| Ferdigheter laster automatisk etter behov | `~/.kiro/skills/` |
| 🟣**Antigravitasjon**| `Bruk @skill-name for å...` | `~/.gemini/antigravity/skills/` |
| 🔵**Markør**| `@skill-name` i chat | `~/.cursor/skills/` |
| ⚪**OpenCode**| `opencode run @skill-name` | `.opencode/skills/` |
| ⬛**Kopilot**| Lim inn ferdighetsinnhold manuelt | N/A |

Klienter som Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline og Kilo Code bruker primært 'config-mcp'-flyten i stedet for en ferdighetskatalog.---

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

>**📌 Merknader:**
> - I en interaktiv terminal åpner `npx omni-skills` nå en guidet installasjonsflyt
> - `npx omni-skills ui` åpner det visuelle Ink-skallet med installasjons-, oppdagelses- og tjenestestarthandlinger
> - det visuelle skallet vedvarer nylige installasjoner, nylige tjenestelanseringer, favoritter og navngitte forhåndsinnstillinger i `~/.omni-skills/state/ui-state.json`
> - Utenfor en TTY er full installasjon fortsatt standard når det ikke er noen velger
> - `--skill` installerer kun de valgte publiserte ferdighetene
> - `--bundle` utvider pakken og installerer de publiserte medlemmene som er deklarert i den kuraterte pakken
> - «finn» støtter 12+ filterflagg: «kvalitet», «beste_praksis», «ferdighetsnivå», «sikkerhet», «kategori», «verktøy», «risiko» og mer
> - `config-mcp` er den rette banen for MCP-kompatible produkter som ikke har en førsteklasses ferdighetskatalog---

## 🔌 Runtime Commands

CLI er et enhetlig driftsverktøy, ikke bare et installasjonsprogram.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Det visuelle skallet støtter:

- veiledet installasjon med kjent klient eller tilpasset banevalg
- søk-og-installer uten å huske flagg
- guidet forhåndsvisning og skriveflyt for MCP-klientkonfigurasjon
- MCP, API og A2A veiledet oppstart
- nylige installasjoner og relanseringer av tjenester
- lagrede forhåndsinnstillinger for installasjon og service
- favorittferdigheter og bunter### 🩺 Diagnostics

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
| 1️⃣ | Referer til ferdigheten ved navn i ledeteksten din |
| 2️⃣ | Oppgi den eksakte artefakten, koden eller designkonteksten agenten trenger |
| 3️⃣ | Foretrekk `--skill` for et minimalt installasjonsfotavtrykk |
| 4️⃣ | Bruk "doktor" og "røyk" før du feilsøker emballasje eller kjøretidsproblemer |
| 5️⃣ | Bruk pakker som kuraterte domeneinstallasjoner nå som alle de syv startpakkene er fullt støttet |
| 6️⃣ | Bruk `finn --install --yes` for oppdagelse + installasjon i én flyt |
| 7️⃣ | Se [runbook](../operations/RUNBOOK.md) for auth, rate limits, signing and verification env vars |