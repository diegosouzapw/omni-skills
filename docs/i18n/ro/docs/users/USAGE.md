# 📗 Usage Guide (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Tot ce ai nevoie pentru a invoca abilități, pentru a rula servicii și pentru a opera runtime-ul Omni Skills.**

Pentru fluxuri de lucru operaționale complete, consultați [🔧 System Runbook](../operations/RUNBOOK.md).
Pentru harta completă a comenzilor utilizatorului final, consultați [🧭 Ghidul utilizatorului CLI](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Stare | Detalii |
|:-------|:--------|
| ✅**Disponibil acum**| 32 de abilități publicate în proiectare, arhitectură, depanare, documente, OSS, securitate, DevOps, inginerie AI, date, instrumente și fluxuri de lucru de învățare automată |
| 📦**Pachete**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` și `oss-maintainer` sunt susținute în totalitate astăzi |
| 🔌**Acoperire MCP**| 7 clienți capabili de instalare, 16 clienți capabili de configurare, 33 ținte de configurare de primă clasă, 19 profiluri de configurare |
| 🤖**Durabilitate A2A**| Durabilitate locală a memoriei, JSON sau SQLite, reluare repornire, executare de proces opțională și coordonare închiriată de înscriere pentru lucrătorii partajați |---

## 🖥️ Invocation by Client

| Client | Cum se invocă | Calea aptitudinilor |
|:-------|:--------------|:-------------|
| 🔵**Claude Code**| `>> /skill-name ajută-mă...` | `~/.claude/skills/` |
| 🟡**Gemeni CLI**| `Folosiți @skill-name pentru a...` | `~/.gemeni/skills/` |
| 🔴**Codex CLI**| `Folosiți @skill-name pentru a...` | `~/.codex/skills/` |
| 🟢**Kiro**| Încărcare automată a abilităților la cerere | `~/.kiro/skills/` |
| 🟣**Antigravitație**| `Folosiți @skill-name pentru a...` | `~/.gemeni/antigravitatie/skills/` |
| 🔵**Cursor**| `@skill-name` în chat | `~/.cursor/skills/` |
| ⚪**OpenCode**| `opencode run @skill-name` | `.opencode/skills/` |
| ⬛**Copilot**| Lipiți manual conținutul abilităților | N/A |

Clienți precum Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline și Kilo Code folosesc în principal fluxul `config-mcp` mai degrabă decât un director de abilități.---

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

>**📌 Note:**
> - Într-un terminal interactiv, `npx omni-skills` deschide acum un flux de instalare ghidat
> - `npx omni-skills ui` deschide shell-ul vizual Ink cu acțiuni de instalare, descoperire și lansare a serviciului
> - shell-ul vizual persistă instalări recente, lansări recente de servicii, favorite și presetări denumite în `~/.omni-skills/state/ui-state.json`
> - În afara unui TTY, instalarea completă este încă implicită atunci când nu este furnizat niciun selector
> - `--skill` instalează numai abilitățile publicate selectate
> - `--bundle` extinde pachetul și instalează membrii publicați declarați în pachetul organizat
> - `find` acceptă peste 12 semnalizatoare de filtrare: `calitate`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk`, și multe altele
> - `config-mcp` este calea potrivită pentru produsele compatibile cu MCP care nu au un director de abilități de primă clasă---

## 🔌 Runtime Commands

CLI este un instrument de operare unificat, nu doar un program de instalare.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Carcasa vizuală acceptă:

- instalare ghidată cu client cunoscut sau selecție personalizată a căii
- Căutare-apoi-instalare fără a memora steaguri
- Previzualizarea și scrierea fluxurilor de configurare client MCP ghidate
- Pornire ghidată MCP, API și A2A
- instalări recente și relansări de servicii
- setări salvate de instalare și service
- abilități și pachete preferate### 🩺 Diagnostics

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

| # | Sfat |
|:--|:----|
| 1️⃣ | Faceți referire la abilitate după nume în promptul dvs. |
| 2️⃣ | Furnizați exact artefactul, codul sau contextul de design de care are nevoie agentul |
| 3️⃣ | Preferați `--skill` pentru o amprentă minimă de instalare |
| 4️⃣ | Folosiți `doctor` și `smoke` înainte de a depana problemele de ambalare sau de rulare |
| 5️⃣ | Folosiți pachetele ca instalări de domenii organizate acum că toate cele șapte pachete de pornire sunt susținute complet |
| 6️⃣ | Utilizați `find --install --yes` pentru descoperire + instalare într-un singur flux |
| 7️⃣ | Consultați [runbook](../operations/RUNBOOK.md) pentru auth, rate limits, signing, and verify env vars |