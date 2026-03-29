# 📗 Usage Guide (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Alt hvad du har brug for for at påkalde færdigheder, køre tjenester og drive Omni Skills runtime.**

For fuldstændige operationelle arbejdsgange, se [🔧 System Runbook](../operations/RUNBOOK.md).
Se [🧭 CLI-brugervejledningen](./CLI-USER-GUIDE.md) for det fulde slutbrugerkommandokort.---

## 📊 Current Catalog Reality

| Status | Detaljer |
|:-------|:--------|
| ✅**Tilgængelig nu**| 32 offentliggjorte færdigheder på tværs af design, arkitektur, fejlretning, docs, OSS, sikkerhed, DevOps, AI-engineering, data, værktøjer og arbejdsgange til maskinlæring |
| 📦**Bundter**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` og `oss-maintainer` er fuldt understøttet i dag |
| 🔌**MCP rækkevidde**| 7 installationskompatible klienter, 16 konfigurationskompatible klienter, 33 førsteklasses konfigurationsmål, 19 konfigurationsprofiler |
| 🤖**A2A holdbarhed**| Hukommelse, JSON eller SQLite lokal holdbarhed, genstart CV, valgfri proces eksekvering og opt-in leaset koordinering for delte arbejdere |---

## 🖥️ Invocation by Client

| Kunde | Sådan påberåbes | Færdighedssti |
|:-------|:-------------|:-----------|
| 🔵**Claude-kode**| `>> /færdighedsnavn hjælp mig...` | `~/.claude/skills/` |
| 🟡**Gemini CLI**| `Brug @skill-name til at...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Brug @skill-name til at...` | `~/.codex/skills/` |
|**Kiro**| Færdigheder auto-load on demand | `~/.kiro/skills/` |
| 🟣**Antigravity**| `Brug @skill-name til at...` | `~/.gemini/antigravity/skills/` |
| 🔵**Markør**| `@skill-name` i chat | `~/.cursor/færdigheder/` |
| ⚪**OpenCode**| `opencode run @skill-name` | `.opencode/skills/` |
| ⬛**Copilot**| Indsæt færdighedsindhold manuelt | N/A |

Klienter som Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline og Kilo Code bruger primært 'config-mcp'-flowet frem for en færdighedsmappe.---

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

>**📌 Bemærkninger:**
> - I en interaktiv terminal åbner `npx omni-skills` nu et guidet installationsflow
> - `npx omni-skills ui` åbner den visuelle blæk-skal med installations-, opdagelses- og servicestarthandlinger
> - den visuelle skal fortsætter med nylige installationer, seneste servicelanceringer, favoritter og navngivne forudindstillinger i `~/.omni-skills/state/ui-state.json`
> - Uden for en TTY er fuld installation stadig standard, når der ikke er en vælger
> - `--skill` installerer kun de valgte publicerede færdigheder
> - `--bundle` udvider bundtet og installerer de offentliggjorte medlemmer, der er erklæret i det kurerede bundt
> - `find` understøtter mere end 12 filterflag: `kvalitet`, `best_practices`, `færdighedsniveau`, `sikkerhed`, `kategori`, `værktøj`, `risiko` og mere
> - `config-mcp` er den rigtige vej for MCP-kompatible produkter, der ikke har en førsteklasses færdighedsmappe---

## 🔌 Runtime Commands

CLI er et samlet driftsværktøj, ikke kun et installationsprogram.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Den visuelle skal understøtter:

- guidet installation med kendt klient eller brugerdefineret stivalg
- søg-så-installer uden at huske flag
- guidet MCP-klientkonfigurations-preview og skrive-flows
- MCP, API og A2A guidet opstart
- seneste installationer og servicerelanceringer
- gemte installations- og serviceforudindstillinger
- yndlingsfærdigheder og bundter### 🩺 Diagnostics

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
| 1️⃣ | Henvis til færdigheden ved navn i din prompt |
| 2️⃣ | Angiv den nøjagtige artefakt, kode eller designkontekst, som agenten har brug for |
| 3️⃣ | Foretrækker `--færdighed` for et minimalt installationsfodaftryk |
| 4️⃣ | Brug 'læge' og 'røg' før fejlretning af emballage eller køretidsproblemer |
| 5️⃣ | Brug bundter som kuraterede domæneinstallationer nu, hvor alle syv startpakker er fuldt understøttet |
| 6️⃣ | Brug `find --install --yes` til opdagelse + installation i ét flow |
| 7️⃣ | Se [runbook](../operations/RUNBOOK.md) for godkendelse, hastighedsgrænser, signering og verifikation env vars |