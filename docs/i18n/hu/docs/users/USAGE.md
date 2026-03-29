# 📗 Usage Guide (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Minden, ami a készségek előhívásához, a szolgáltatások futtatásához és az Omni Skills futtatókörnyezetének működtetéséhez szükséges.**

A teljes működési munkafolyamatokat a [🔧 System Runbook](../operations/RUNBOOK.md) című dokumentumban találja.
A teljes végfelhasználói parancstérképet a [🧭 CLI felhasználói kézikönyvben](./CLI-USER-GUIDE.md) találja.---

## 📊 Current Catalog Reality

| Állapot | Részletek |
|:-------|:---------|
| ✅**Most elérhető**| 32 közzétett készség a tervezés, az architektúra, a hibakeresés, a dokumentumok, az OSS, a biztonság, a DevOps, az AI-mérnöki, az adatok, az eszközök és a gépi tanulási munkafolyamatok terén |
| 📦**Csomagok**| Az "essentials", "full-stack", "design", "security", "devops", "ai-engineer" és "oss-maintainer" ma már teljes mértékben támogatott |
| 🔌**MCP-elérés**| 7 telepíthető kliens, 16 konfigurálható ügyfél, 33 első osztályú konfigurációs cél, 19 konfigurációs profil |
| 🤖**A2A tartósság**| Memória, JSON vagy SQLite helyi tartósság, újraindítási folytatás, opcionális folyamatvégrehajtó és választható bérelt koordináció megosztott dolgozók számára |---

## 🖥️ Invocation by Client

| Ügyfél | Hogyan hívjunk | Készségek útja |
|:-------|:--------------|:-------------|
| 🔵**Claude Code**| `>> /készség-név segítsen nekem...` | `~/.claude/skills/` |
| 🟡**Gemini CLI**| `Use @skill-name to...` ​​| `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Use @skill-name to...` ​​| `~/.codex/skills/` |
| 🟢**Kiro**| Igény szerint automatikusan betölthető készségek | `~/.kiro/skills/` |
| 🟣**Antigravitáció**| `Use @skill-name to...` ​​| `~/.gemini/antigravitation/skills/` |
| 🔵**Kurzor**| `@készségnév` a chatben | `~/.cursor/skills/` |
| ⚪**OpenCode**| `nyílt kód futtatása @skill-name` | `.opencode/skills/` |
| ⬛**másodpilóta**| Képességi tartalom manuális beillesztése | N/A |

Az olyan kliensek, mint a Continue, a Junie, a Windsurf, a Zed, a VS Code, a GitHub Copilot CLI, a Cline és a Kilo Code elsősorban a „config-mcp” folyamatot használják, nem pedig egy készségkönyvtárat.---

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

>**📌 Megjegyzések:**
> - Egy interaktív terminálban az `npx omni-skills' most egy irányított telepítési folyamatot nyit meg
> - "npx omni-skills ui" megnyitja a vizuális tintahéjat telepítési, felderítési és szolgáltatásindítási műveletekkel
> - a vizuális shell megőrzi a legutóbbi telepítéseket, a legutóbbi szolgáltatásindításokat, a kedvenceket és az elnevezett előbeállításokat a `~/.omni-skills/state/ui-state.json` fájlban
> - TTY-n kívül továbbra is a teljes telepítés az alapértelmezett, ha nincs választó
> - A `--skill` csak a kiválasztott közzétett készségeket telepíti
> - "--bundle" kibővíti a csomagot, és telepíti a kurált csomagban deklarált közzétett tagokat
> - A "find" 12+ szűrőjelzőt támogat: "minőség", "best_practices", "skill_level", "security", "kategória", "eszköz", "kockázat" stb.
> - A `config-mcp` a megfelelő út az MCP-képes termékekhez, amelyek nem rendelkeznek első osztályú készségkönyvtárral---

## 🔌 Runtime Commands

A CLI egy egyesített műveleti eszköz, nem csak egy telepítő.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

A vizuális shell támogatja:

- irányított telepítés ismert kliens vagy egyéni elérési út kiválasztásával
- keresés, majd telepítés a zászlók memorizálása nélkül
- irányított MCP-kliens konfigurációs előnézeti és írási folyamatok
- MCP, API és A2A irányított indítás
- a legutóbbi telepítések és a szolgáltatás újraindításai
- mentett telepítési és szervizbeállítások
- kedvenc készségek és kötegek### 🩺 Diagnostics

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

| # | Tipp |
|:--|:----|
| 1️⃣ | Hivatkozzon a készségre név szerint a promptban |
| 2️⃣ | Adja meg a pontos műterméket, kódot vagy tervezési környezetet, amelyre az ügynöknek szüksége van |
| 3️⃣ | A `--skill' előnyben részesítése minimális telepítési helyigényért |
| 4️⃣ | Használja a "doctor" és a "smoke" szavakat a csomagolás vagy a futásidejű problémák hibakeresése előtt |
| 5️⃣ | Használja a csomagokat válogatott domaintelepítésként most, hogy mind a hét kezdőcsomag teljes mértékben támogatott |
| 6️⃣ | Használja a "find --install --yes" parancsot a felfedezéshez + telepítéshez egy folyamatban |
| 7️⃣ | Tekintse meg a [runbook](../operations/RUNBOOK.md) hitelesítési, sebességkorlátozási, aláírási és ellenőrzési env vars |