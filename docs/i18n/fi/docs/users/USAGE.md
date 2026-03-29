# 📗 Usage Guide (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Kaikki mitä tarvitset taitojen kehittämiseen, palvelujen suorittamiseen ja Omni Skills -ajoajan käyttämiseen.**

Katso täydelliset toiminnalliset työnkulut [🔧 System Runbook](../operations/RUNBOOK.md).
Katso täydellinen loppukäyttäjän komentokartta [🧭 CLI -käyttöoppaasta](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Tila | Tiedot |
|:-------|:---------|
| ✅**Saatavilla nyt**| 32 julkaistua osaamista suunnittelusta, arkkitehtuurista, virheenkorjauksesta, asiakirjoista, OSS:stä, turvallisuudesta, DevOpsista, tekoälysuunnittelusta, datasta, työkaluista ja koneoppimisen työnkuluista |
| 📦**Paketit**| "essentials", "full-stack", "design", "turvallisuus", "devops", "ai-engineer" ja "oss-maintainer" ovat täysin tuetut tänään |
| 🔌**MCP-kattavuus**| 7 asennuskykyistä asiakasta, 16 konfigurointikykyistä asiakasta, 33 ensiluokkaista konfigurointikohdetta, 19 konfigurointiprofiilia |
| 🤖**A2A kestävyys**| Muistin, JSON- tai SQLite-paikallinen kestävyys, uudelleenkäynnistyksen jatkaminen, valinnainen prosessin suorittaja ja valinnainen vuokrakoordinointi jaetuille työntekijöille |---

## 🖥️ Invocation by Client

| Asiakas | Kuinka kutsua | Taitojen polku |
|:-------|:--------------|:-------------|
| 🔵**Claude Code**| `>> /taidon nimi auta minua...` | `~/.claude/skills/` |
| 🟡**Gemini CLI**| `Käytä @skill-nimeä...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Käytä @skill-nimeä...` | `~/.codex/skills/` |
| 🟢**Kiro**| Taidot automaattisesti latautuvat pyynnöstä | `~/.kiro/skills/` |
| 🟣**Antigravity**| `Käytä @skill-nimeä...` | `~/.gemini/antigravity/skills/` |
| 🔵**Osoitin**| "@skill-name" chatissa | `~/.kursori/taidot/` |
| ⚪**OpenCode**| `avoinkoodin suoritus @skill-name` | `.opencode/skills/` |
| ⬛**Copilot**| Liitä taitosisältö manuaalisesti | N/A |

Asiakkaat, kuten Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline ja Kilo Code käyttävät ensisijaisesti "config-mcp" -kulkua taitojen hakemiston sijaan.---

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

>***📌 Huomautuksia:**
> - Interaktiivisessa päätteessä "npx omni-skills" avaa nyt ohjatun asennuskulun
> - `npx omni-skills ui` avaa visuaalisen Ink-kuoren asennus-, etsintä- ja palvelun käynnistystoiminnoilla
> - visuaalinen kuori säilyttää viimeisimmät asennukset, viimeisimmät palvelun julkaisut, suosikit ja nimetyt esiasetukset tiedostossa `~/.omni-skills/state/ui-state.json`
> - TTY:n ulkopuolella täysi asennus on edelleen oletusasetus, kun valitsinta ei ole käytettävissä
> - "--skill" asentaa vain valitut julkaistut taidot
> - `--bundle` laajentaa paketin ja asentaa kuratoidussa paketissa ilmoitetut julkaistut jäsenet
> - "find" tukee yli 12 suodatinmerkkiä: "laatu", "best_practices", "taitotaso", "turvallisuus", "luokka", "työkalu", "riski" ja paljon muuta.
> - `config-mcp` on oikea polku MCP-yhteensopiville tuotteille, joilla ei ole ensiluokkaista taitojen hakemistoa---

## 🔌 Runtime Commands

CLI on yhtenäinen toimintotyökalu, ei vain asennusohjelma.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Visuaalinen kuori tukee:

- Ohjattu asennus tunnetun asiakkaan tai mukautetun polun valinnalla
- Etsi ja asenna ilman lippujen muistamista
- ohjattu MCP-asiakasasetusten esikatselu ja kirjoituskulku
- Ohjattu MCP-, API- ja A2A-käynnistys
- viimeaikaiset asennukset ja palvelun uudelleenkäynnistykset
- tallennetut asennus- ja huoltoasetukset
- suosikkitaidot ja -niput### 🩺 Diagnostics

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

| # | Vinkki |
|:--|:----|
| 1️⃣ | Viittaa taitoon nimellä kehotteessa |
| 2️⃣ | Anna agentin tarvitsema tarkka artefakti, koodi tai suunnittelukonteksti |
| 3️⃣ | Käytä mieluummin "--taitoa", jotta asennustila on mahdollisimman pieni |
| 4️⃣ | Käytä "doctor" ja "smoke" ennen pakkausten tai ajonaikaisten ongelmien virheenkorjausta |
| 5️⃣ | Käytä paketteja kuratoituina verkkotunnuksen asennuksina nyt, kun kaikki seitsemän aloituspakettia on täysin tuettu |
| 6️⃣ | Käytä "find --install --yes" -komentoa etsimiseen + asennukseen yhdessä prosessissa |
| 7️⃣ | Katso [runbook](../operations/RUNBOOK.md) todennus-, nopeusrajoitukset, allekirjoitukset ja varmistusenv vars -tiedot |