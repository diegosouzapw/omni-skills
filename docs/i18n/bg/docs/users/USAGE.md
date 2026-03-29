# 📗 Usage Guide (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Всичко, от което се нуждаете, за да извикате умения, да управлявате услуги и да управлявате средата за изпълнение на Omni Skills.**

За пълни оперативни работни процеси вижте [🔧 System Runbook](../operations/RUNBOOK.md).
За пълната карта на командите за краен потребител вижте [🧭 Ръководство за потребителя на CLI](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Статус | Подробности |
|:-------|:--------|
| ✅**Налично сега**| 32 публикувани умения за дизайн, архитектура, отстраняване на грешки, документи, OSS, сигурност, DevOps, AI инженерство, данни, инструменти и работни процеси за машинно обучение |
| 📦**Пакети**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` и `oss-maintainer` са напълно подкрепени днес |
| 🔌**MCP обхват**| 7 клиента с възможност за инсталиране, 16 клиента с възможност за конфигурация, 33 първокласни цели за конфигурация, 19 профила за конфигурация |
| 🤖**A2A трайност**| Локална издръжливост на памет, JSON или SQLite, възобновяване на рестартиране, незадължителен изпълнител на процеса и наета координация за включване за споделени работници |---

## 🖥️ Invocation by Client

| Клиент | Как да извикам | Път на умения |
|:-------|:-------------|:------------|
| 🔵**Клод Код**| `>> /skill-name помогне ми...` | `~/.claude/skills/` |
| 🟡**Gemini CLI**| `Използвайте @skill-name за...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Използвайте @skill-name за...` | `~/.codex/skills/` |
| 🟢**Киро**| Автоматично зареждане на умения при поискване | `~/.kiro/skills/` |
| 🟣**Антигравитация**| `Използвайте @skill-name за...` | `~/.gemini/antigravity/skills/` |
| 🔵**Курсор**| `@skill-name` в чата | `~/.cursor/skills/` |
| ⚪**OpenCode**| `opencode run @skill-name` | `.opencode/skills/` |
| ⬛**Втори пилот**| Поставете ръчно съдържание на умения | N/A |

Клиенти като Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline и Kilo Code използват предимно потока „config-mcp“, а не директория с умения.---

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

>**📌 Бележки:**
> - В интерактивен терминал, `npx omni-skills` вече отваря насочен поток на инсталиране
> - `npx omni-skills ui` отваря визуалната обвивка на Ink с действия за инсталиране, откриване и стартиране на услуга
> - визуалната обвивка запазва скорошни инсталации, скорошни стартирания на услуги, любими и предварително зададени имена в `~/.omni-skills/state/ui-state.json`
> - Извън TTY пълната инсталация все още е по подразбиране, когато не е предоставен селектор
> - `--skill` инсталира само избраните публикувани умения
> - `--bundle` разширява пакета и инсталира публикуваните членове, декларирани в курирания пакет
> - `find` поддържа 12+ филтърни флага: `quality`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk` и други
> - `config-mcp` е правилният път за продукти с възможност за MCP, които нямат първокласна директория с умения---

## 🔌 Runtime Commands

CLI е инструмент за унифицирани операции, а не просто инсталатор.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Визуалната обвивка поддържа:

- насочено инсталиране с известен клиент или потребителски избор на път
- търсете след това инсталирайте без запаметяване на флагове
- ръководен преглед на конфигурацията на MCP клиент и потоци за запис
- MCP, API и A2A ръководено стартиране
- скорошни инсталации и рестартиране на услуги
- запазени инсталационни и сервизни настройки
- любими умения и пакети### 🩺 Diagnostics

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

| # | Съвет |
|:--|:----|
| 1️⃣ | Посочете умението по име във вашата подкана |
| 2️⃣ | Осигурете точния артефакт, код или контекст на дизайна, от който агентът се нуждае |
| 3️⃣ | Предпочитайте `--skill` за минимален инсталационен отпечатък |
| 4️⃣ | Използвайте `doctor` и `smoke`, преди да отстраните грешки при проблеми с пакетирането или изпълнението |
| 5️⃣ | Използвайте пакети като подбрани инсталации на домейни сега, когато всичките седем стартови пакета са напълно подкрепени |
| 6️⃣ | Използвайте `find --install --yes` за откриване + инсталиране в един поток |
| 7️⃣ | Вижте [runbook](../operations/RUNBOOK.md) за удостоверяване, ограничения на скоростта, подписване и проверка env vars |