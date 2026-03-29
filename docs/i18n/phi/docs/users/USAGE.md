# 📗 Usage Guide (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Lahat ng kailangan mo para makatawag ng mga kasanayan, magpatakbo ng mga serbisyo, at magpatakbo ng Omni Skills runtime.**

Para sa buong operational workflows, tingnan ang [🔧 System Runbook](../operations/RUNBOOK.md).
Para sa buong end-user command map, tingnan ang [🧭 CLI User Guide](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Katayuan | Mga Detalye |
|:-------|:--------|
| ✅**Available na**| 32 na-publish na mga kasanayan sa kabuuan ng disenyo, arkitektura, pag-debug, mga dokumento, OSS, seguridad, DevOps, AI-engineering, data, mga tool, at mga daloy ng trabaho sa machine-learning |
| 📦**Mga Bundle**| Ang `mga mahahalaga`, `full-stack`, `design`, `security`, `devops`, `ai-engineer`, at `oss-maintainer` ay ganap na sinusuportahan ngayon |
| 🔌**Abot ng MCP**| 7 mga kliyenteng may kakayahang mag-install, 16 na kliyenteng may kakayahang mag-config, 33 mga target na config sa unang klase, 19 mga profile ng config |
| 🤖**A2A tibay**| Memory, JSON, o SQLite local durability, i-restart ang resume, opsyonal na process executor, at opt-in leased coordination para sa mga shared worker |---

## 🖥️ Invocation by Client

| Kliyente | Paano Mag-invoke | Landas ng Kasanayan |
|:-------|:-------------|:------------|
| 🔵**Claude Code**| `>> /skill-name tulungan mo ako...` ​​| `~/.claude/skills/` |
| 🟡**Gemini CLI**| `Gamitin ang @skill-name para...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Gamitin ang @skill-name para...` | `~/.codex/skills/` |
| 🟢**Kiro**| Awtomatikong pag-load ng mga kasanayan kapag hinihiling | `~/.kiro/skills/` |
| 🟣**Antigravity**| `Gamitin ang @skill-name para...` | `~/.gemini/antigravity/skills/` |
| 🔵**Cursor**| `@skill-name` sa chat | `~/.cursor/skills/` |
| ⚪**OpenCode**| `opencode run @skill-name` | `.opencode/skills/` |
| ⬛**Copilot**| Manu-manong i-paste ang nilalaman ng kasanayan | N/A |

Pangunahing ginagamit ng mga kliyente tulad ng Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline, at Kilo Code ang daloy ng `config-mcp` kaysa sa isang direktoryo ng mga kasanayan.---

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

>**📌 Mga Tala:**
> - Sa isang interactive na terminal, nagbubukas na ngayon ang `npx omni-skills` ng may gabay na daloy ng pag-install
> - Binubuksan ng `npx omni-skills ui` ang visual Ink shell na may mga aksyon sa pag-install, pagtuklas, at paglulunsad ng serbisyo
> - nagpapatuloy ang visual shell ng mga kamakailang pag-install, kamakailang paglulunsad ng serbisyo, mga paborito, at pinangalanang preset sa `~/.omni-skills/state/ui-state.json`
> - Sa labas ng isang TTY, ang buong pag-install pa rin ang default kapag walang ibinigay na tagapili
> - Ini-install lang ng `--skill` ang mga napiling na-publish na kasanayan
> - Pinapalawak ng `--bundle` ang bundle at ini-install ang mga na-publish na miyembro na idineklara sa na-curate na bundle
> - Sinusuportahan ng `find` ang 12+ filter na flag: `quality`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk`, at higit pa
> - Ang `config-mcp` ay ang tamang landas para sa mga produktong may kakayahang MCP na walang direktoryo ng mga kasanayan sa unang klase---

## 🔌 Runtime Commands

Ang CLI ay isang pinag-isang tool sa pagpapatakbo, hindi lamang isang installer.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Sinusuportahan ng visual shell ang:

- may gabay na pag-install gamit ang kilalang kliyente o pasadyang pagpili ng landas
- maghanap-pagkatapos-mag-install nang hindi isinasaulo ang mga flag
- guided MCP client config preview at write flows
- MCP, API, at A2A guided startup
- kamakailang pag-install at muling paglulunsad ng serbisyo
- naka-save na pag-install at mga preset ng serbisyo
- mga paboritong kasanayan at mga bundle### 🩺 Diagnostics

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
| 1️⃣ | I-refer ang kasanayan sa pamamagitan ng pangalan sa iyong prompt |
| 2️⃣ | Ibigay ang eksaktong artifact, code, o konteksto ng disenyo na kailangan ng ahente |
| 3️⃣ | Mas gusto ang `--skill` para sa kaunting bakas ng pag-install |
| 4️⃣ | Gumamit ng `doctor` at `smoke` bago i-debug ang packaging o mga isyu sa runtime |
| 5️⃣ | Gumamit ng mga bundle bilang mga na-curate na pag-install ng domain ngayong ang lahat ng pitong starter bundle ay ganap na naka-back |
| 6️⃣ | Gamitin ang `find --install --yes` para sa pagtuklas + pag-install sa isang daloy |
| 7️⃣ | Tingnan ang [runbook](../operations/RUNBOOK.md) para sa auth, mga limitasyon sa rate, pag-sign, at verification env vars |