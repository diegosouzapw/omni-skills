# 🚀 Getting Started (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Telepítsen képességeket, ellenőrizze a beállításokat, és 2 percen belül előhívja első AI-készségét.**---

## 📊 Current Catalog Status

| Metrikus | Érték |
|:-------|:------|
| Megjelent készségek |**32**15 aktív kategóriában, beleértve az építészetet, a tervezést, a biztonságot, a DevOps-t, a mesterséges intelligencia-tervezést és egyebeket |
| Meghatározott kötegek |**7**(mindegyik teljes mértékben alátámasztja a közzétett készségeket) |
| Telepíthető kliensek |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| MCP konfigurálható ügyfelek |**16**33 első osztályú MCP konfigurációs célon |---

## 📦 Step 1 — Install

### Gyors kezdés

```bash
npx omni-skills
```

Egy interaktív terminálban ez most megnyitja az irányított telepítőt, ahelyett, hogy csendben klienst feltételezne.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Ez megnyitja a márkás terminálközpontot a telepítéshez, a felderítéshez, az MCP-hez, az API-hoz és az A2A-indításhoz.### 🎯 Default Install (Antigravity Outside TTY)

A TTY-n kívül a no-arg telepítő továbbra is alapértelmezés szerint a `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
npx omni-skills --codex --bundle ai-engineer
```

> ✅ Az indítócsomagok most már teljesen támogatottak, beleértve a "devops" és az "ai-engineer".### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Ellenőrizze, hogy a készségek a megfelelő helyre kerültek-e:```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

Vagy használja a beépített diagnosztikát:```bash
npx omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

Fájlrendszer-eszközöket biztosít az ügynököknek a kliensek észleléséhez, a telepítéshez/eltávolításhoz, valamint az MCP-konfigurációk írásához:```bash
npx omni-skills mcp stream --local
```

Az MCP-t olyan ügyfelek számára is beállíthatja, amelyek nem készségszintű telepítési célok:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

A készségkatalógust csak olvasható HTTP API-ként teszi közzé:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Ügynökök közötti felderítés, ajánlás, telepítés tervezés, lekérdezés és adatfolyam:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

A készség egy strukturált leértékelési útmutató (`SKILL.md`), amely egy AI-ügynököt ad:

| Alkatrész | Cél |
|:----------|:--------|
| 📋**Frontmatter**| Géppel olvasható metaadatok (név, kategória, címkék, eszközök, kockázat) |
| 📝**Body**| Feladatspecifikus utasítások, lépések, korlátok és példák |
| 📚**Referenciák**| Támogató dokumentumok, amelyeket az ügynök a végrehajtás során tekinthet meg |
| 🎨**Eszközök**| Ikonok, képek vagy egyéb csomagolt források |---

## ➡️ Next Steps

| Doc | Mit fogsz tanulni |
|:----|:-------------------|
| 🧭 [CLI felhasználói útmutató](CLI-USER-GUIDE.md) | Teljes parancsreferencia a telepítéshez, a futtatáshoz, a konfigurációhoz és a diagnosztikához |
| 📗 [Használati útmutató](USAGE.md) | Minden CLI-parancs, prompt-minta és futási mód |
| 📦 [Csomagok](BUNDLES.md) | Felügyelt készséggyűjtemények és elérhetőségük |
| 📚 [Katalógus](../CATALOG.md) | A közzétett készségek automatikusan generált katalógusa |
| 📖 [Documentation Hub](../README.md) | Teljes dokumentációs térkép |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Működési referencia |