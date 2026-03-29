# 🚀 Getting Started (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Asenna taidot, tarkista asetukset ja käynnistä ensimmäinen tekoälytaitosi alle kahdessa minuutissa.**---

## 📊 Current Catalog Status

| Metrinen | Arvo |
|:-------|:------|
| Julkaistut taidot |**32**15 aktiivisessa kategoriassa, mukaan lukien arkkitehtuuri, suunnittelu, turvallisuus, DevOps, tekoälytekniikka ja paljon muuta |
| Määritellyt niput |**7**(kaikki täysin julkaistut taidot) |
| Asennuskykyiset asiakkaat |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| MCP-konfigurointikykyiset asiakkaat |**16**33 ensimmäisen luokan MCP-määrityskohteessa |---

## 📦 Step 1 — Install

### Pikakäynnistys

```bash
npx omni-skills
```

Interaktiivisessa päätteessä tämä avaa nyt ohjatun asennusohjelman sen sijaan, että ottaisi hiljaa asiakkaan käyttöön.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Tämä avaa merkkipäätekeskuksen asennusta, etsintää, MCP-, API- ja A2A-käynnistystä varten.### 🎯 Default Install (Antigravity Outside TTY)

TTY:n ulkopuolella no-arg-asennusohjelman oletusarvo on edelleen "~/.gemini/antigravity/skills".### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Aloituspaketit ovat nyt täysin tuetut, mukaan lukien "devops" ja "ai-engineer".### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Tarkista, että taidot osuivat oikeaan paikkaan:```bash
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

Tai käytä sisäänrakennettua diagnostiikkaa:```bash
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

Antaa agenteille tiedostojärjestelmätyökaluja asiakkaiden havaitsemiseen, asentamiseen/poistamiseen ja MCP-asetusten kirjoittamiseen:```bash
npx omni-skills mcp stream --local
```

Voit myös määrittää MCP:n asiakkaille, jotka eivät ole taitojen asennuskohteita:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Näyttää taitoluettelon vain luku -muotoisena HTTP-sovellusliittymänä:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Agenttien välinen etsintä, suositus, asennussuunnittelu, äänestys ja suoratoisto:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Taito on strukturoitu merkintäohjekirja (`SKILL.md`), joka antaa tekoälyagentille:

| Komponentti | Tarkoitus |
|:----------|:--------|
| 📋**Frontmatter**| Koneluettava metatiedot (nimi, luokka, tunnisteet, työkalut, riski) |
| 📝**Runko**| Tehtäväkohtaiset ohjeet, askelmat, suojakaiteet ja esimerkit |
| 📚**Referenssit**| Tukiasiakirjat, joita agentti voi tarkastella suorituksen aikana |
| 🎨**Omaisuus**| Kuvakkeet, kuvat tai muut pakatut resurssit |---

## ➡️ Next Steps

| Doc | Mitä opit |
|:----|:-------------------|
| 🧭 [CLI-käyttöopas](CLI-USER-GUIDE.md) | Täydellinen komentoviite asennusta, suoritusaikaa, konfigurointia ja diagnostiikkaa varten |
| 📗 [Käyttöopas](USAGE.md) | Kaikki CLI-komennot, kehotemallit ja ajonaikaiset tilat |
| 📦 [Bundles](BUNDLES.md) | Kuroidut taitokokoelmat ja niiden saatavuus |
| 📚 [Katalogi](../CATALOG.md) | Automaattisesti luotu luettelo julkaistuista taidoista |
| 📖 [Documentation Hub](../README.md) | Täysi asiakirjakartta |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Toimintaviite |