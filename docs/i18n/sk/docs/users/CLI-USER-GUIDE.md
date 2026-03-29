# 🧭 Omni Skills CLI User Guide (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**Úplný verejný povrch CLI dodávaný „omni-skills“.**

Túto príručku použite, keď chcete:

| Cieľ | Oblasť príkazov |
|:-----|:--------------|
| 📥 Nainštalujte si zručnosti alebo balíky | [Postupy inštalácie](#3️⃣-postupy inštalácie) |
| 🔎 Hľadať v katalógu | [Objavenie katalógu](#4️⃣-objavenie katalógu) |
| 🔌 Konfigurácia klientov MCP | [Konfigurácia klienta MCP](#5️⃣-mcp-client-config) |
| 🖥️ Spustite služby MCP, API alebo A2A | [MCP Server](#6️⃣-mcp-server) · [API](#7️⃣-katalógové-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Použite vizuálny kryt terminálu | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Spustite diagnostiku alebo predbežnú kontrolu | [Diagnostika](#🔟-diagnostika-a-predletová kontrola) |---

## 1️⃣ Install and Entry Modes

Inštalovať pomocou `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Kontext | Čo sa stane |
|:--------|:------------|
| 🖥️ TTY + žiadne argumenty | Otvorí postup**riadenej inštalácie**|
| ⚙️ Non-TTY + žiadne argumenty | Neinteraktívna inštalácia do `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Značkový**Vizuálny obal atramentu**|
| 📝 `npx omni-skills ui --text` | Readline**záložný text**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Príkaz | Popis |
|:--------|:-----------|
| "ui" | 🎨 Vizuálny terminálový rozbočovač |
| "nájsť [dopyt]" | 🔎 Objavovanie katalógu |
| "prekategorizovať" | 🏷️ Správa taxonómie |
| `nainštalovať [príznaky]` | 📥 Inštalácia zručnosti/balíka |
| `config-mcp` | 🔌 Konfigurácia klienta MCP |
| `mcp <stdio\|stream\|sse>` | 🔌 Režimy servera MCP |
| "api" | 🌐 Katalógové API |
| "a2a" | 🤖 Doba chodu A2A |
| "dym" | 🧪 Uvoľnite predbežnú kontrolu |
| "zverejniť-kontrola" | 📦 Kontrola zverejnenia balíka |
| "lekár" | 🩺 Diagnostika prostredia |
| "pomoc" | ❓ Odkaz na príkaz |---

## 3️⃣ Install Flows

### Rýchly štart

```bash
npx omni-skills
npx omni-skills install --guided
```

> Sprievodca vám umožňuje vybrať si:**cieľový klient**→**balík alebo zručnosť**→**vlastná cesta**→**náhľad pred spustením**### 🎯 Single Skill

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

| Vlajka | Klient |
|:-----|:-------|
| "--antigravitácia" | 🟣 Antigravitácia *(predvolené)* |
| "--claude" | 🢢 Claude Code |
| "--kurzor" | 🔵 Kurzor |
| "--codex" | 🔴 Codex CLI |
| "--gemini" | 🡡 Gemini CLI |
| "--kiro" | 🠠 Kiro |
| "--opencode" | ⚪ OpenCode |

> Predvolený cieľ inštalácie (neinteraktívny): `~/.gemini/antigravity/skills`---

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

| Vlajka | Účel |
|:-----|:--------|
| "--kategória" | Filtrovať podľa kategórie taxonómie |
| "--nástroj" | Filtrovať podľa podporovaného nástroja |
| "--riziko" | Filtrovať podľa úrovne rizika |
| "--triediť" | Zoradiť výsledky (napr. „kvalita“) |
| "--objednať" | Poradie zoradenia |
| "--min-kvalita" | Minimálne skóre kvality |
| "--min-best-practices" | Minimálne skóre osvedčených postupov |
| `--min-level` | Minimálna úroveň splatnosti |
| "--min-bezpečnosť" | Minimálne skóre bezpečnosti |
| `--validačný-stav` | Filtrovať podľa stavu overenia |
| "--bezpečnostný-stav" | Filtrovať podľa stavu zabezpečenia |---

## 5️⃣ MCP Client Config

Použite `config-mcp` na zobrazenie ukážky alebo zápis konfigurácie MCP pre klienta.### 📋 List Targets

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

<podrobnosti>
<summary>🔌 <strong>Povrch klienta s možnosťou konfigurácie</strong></summary>

| Klient | Ciele |
|:-------|:--------|
| Claude | Nastavenia a ciele pracovnej plochy |
| Kurzor | Používateľ a pracovný priestor |
| Kódex | Konfigurácia TOML |
| Blíženci | Používateľ a pracovný priestor |
| Antigravitácia | Užívateľská konfigurácia |
| OpenCode | Používateľ a pracovný priestor |
| Cline | Prvotriedny cieľ |
| GitHub Copilot CLI | Používateľ a repo |
| Kilový kód | Používateľ, projekt a pracovný priestor |
| Kiro | Používateľ a pracovný priestor |
| Zed | Pracovný priestor |
| VS kód | Používateľ, pracovný priestor a kontajner pre vývojárov |
| Pokračovať | Pracovný priestor YAML |
| Junie | Projekt a užívateľ |
| Windsurfing | Užívateľská konfigurácia |</details>

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

>**Miestny sidecar**pridáva: detekciu klienta, ukážku inštalácie, toky inštalácie/odstránenia a zápis konfigurácie MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Trasa | Účel |
|:------|:--------|
| `GET /healthz` | Zdravotná prehliadka |
| `GET /openapi.json` | Špecifikácia OpenAPI |
| "ZÍSKAJTE /v1/zručnosti" | Zoznam všetkých zručností |
| "GET /v1/search" | Hľadať v katalógu |
| `GET /v1/skills/:id/archives` | Zoznam archívov pre zručnosť |
| `ZÍSKAJTE /v1/skills/:id/download/archive?format=zip` | Stiahnite si archív zručností |
| `ZÍSKAJTE /v1/skills/:id/download/archive/checksums` | Stiahnuť kontrolné súčty |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Funkcia | Stav |
|:--------|:-------|
| 🔎 Objavovanie podľa úloh | ✅ |
| 📋 Odovzdanie plánu inštalácie | ✅ |
| 🔄 Hlasovanie | ✅ |
| 📡 Streamovanie | ✅ |
| ❌ Zrušenie | ✅ |
| 🔔 Konfigurácia push-notifikácií | ✅ |
| 💾 Vytrvalosť | Pamäť, JSON a SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Funkcie

| Funkcia | Popis |
|:--------|:-----------|
| 🧭 Riadená inštalácia | Vyberte si klienta alebo vlastnú cestu |
| 🔎 Hľadať + nainštalovať | Nie je potrebné zapamätanie vlajky |
| 🔌 Konfigurácia MCP | Ukážka a zápis tokov |
| 🖥️ Spustenie služby | Riadené spustenie MCP, API a A2A |
| 🕐 Nedávne | Nedávne inštalácie a opätovné spustenie služby |
| ⭐ Obľúbené | Uložené zručnosti a balíky |
| 💾 Predvoľby | Pomenované predvoľby inštalácie a služby |

>**Cesta k stavu:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Kontroluje: stav repo, stav lokálnej inštalácie, dostupnosť runtime a problémy s prostredím.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Validuje: zostavenie, testy, výstup balíka, spustenie služby, pokrytie skenerom a uvoľnenie balenia.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Príkaz | Účel |
|:-----------|:--------|:--------|
| 🆕 Nový užívateľ | `npx omni-skills` | Riadená prvá inštalácia |
| 🔧 Prevádzkovateľ | `npx omni-skills config-mcp --list-targets` | Konfigurácia lokálneho MCP |
| 🔧 Prevádzkovateľ | `npx omni-skills mcp stream --local` | Štart miestnej sajdkáry |
| 📦 Údržba | `npx omni-skills smoke` | Overenie vydania |
| 🔍 Výkonný používateľ | `npx omni-skills nájsť bezpečnosť --triediť kvalitu --min-kvalitu 95` | Najprv nájdite najlepšiu zručnosť |---

## 📖 Related Documents

| Doc | Čo pokrýva |
|:----|:---------------|
| 🚀 [Začíname](./GETTING-STARTED.md) | Inštalácia a overenie za menej ako 2 minúty |
| 📗 [Sprievodca používaním](./USAGE.md) | Všetky príkazy, vzory a režimy CLI |
| 📦 [Bundles](./BUNDLES.md) | Vybrané zbierky zručností |
| 🔧 [Súbor Runbook](../operations/RUNBOOK.md) | Prevádzkový odkaz |
| 🔌 [Miestny MCP Sidecar](../specs/LOCAL-MCP-SIDECAR.md) | Nástroje súborového systému a zápis konfigurácie |