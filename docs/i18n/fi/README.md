# 🧠 Omni Skills (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Taitoluettelo, joka asentaa itsensä.**<br/>
CLI · API · MCP · A2A – kaikki yhdestä npx-komennosta.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Asenna 1 minuutissa](#-asennus) · [🛠️ Valitse työkalusi](#-choose-your-tool) · [📖 CLI-opas](docs/users/CLI-USER-GUIDE.md) · [📦 Paketit](docs/users/BUNDLES.md) Ajonaika [](🔌) Miksi ajonaika Omni Skills](#-why-omni-skills)</div>

---

<div align="center">

### Yleiskatsaus

</div>

| | Metrinen | Arvo |
|:--|:-------|:------|
| 📦 |**Julkaistut taidot**| "32" 15 aktiivisessa kategoriassa |
| 🎯 |**Paketit**| "7" täysin tuetut kuratoidut paketit |
| 🖥️ |**Asenna asiakkaat**| "7" asennuskykyiset AI-koodausavustajat |
| 🔌 |**MCP-asiakkaat**| `16` MCP-konfigurointikykyiset asiakkaat |
| 🔐 |**Kurattu tulos**| "32" parannetut englannin johdannaiset kohdassa "skills_omni/" |
| 📋 |**Nykyinen julkaisu**| "v0.1.2" |---

## Pikakäynnistys

>**Etsitkö tekoälyn koodaustaitoja, Claude Code -taitoja, Cursor-taitoja, Codex CLI -taitoja, Gemini CLI -taitoja, Antigravity-taitoja tai asennettavia SKILL.md-kirjastoja?**
> Olet oikeassa paikassa.### 1️⃣ What is this?

Omni Skills on**asennettava taitoluettelo ja suoritusaika**AI-koodausavustajille. Pohjimmiltaan se on julkinen arkisto uudelleenkäytettäville SKILL.md-pelikirjoille – mutta toisin kuin tavalliset taitokokoelmat, repo**on**jakelu- ja ajonaikainen kerros.

<tiedot>
<summary>📋 <strong>Mitä sisältyy</strong></summary>

| Komponentti | Kuvaus |
|:----------|:------------|
| 🧠**Taidot**| Kuroidut SKILL.md-pohjaiset pelikirjat tekoälyavustajille |
| 📦**Manifestit**| Luodut JSON-luettelot, niput ja arkistot |
| 🧭**Ohjattu asennus**| Interaktiiviset TTY- ja visuaaliset pääteasennukset |
| 🌐**Katalogi API**| Vain luku -HTTP-sovellusliittymä hakua, etsimistä ja latauksia varten |
| 🔌**MCP-palvelin**| Löytäminen, suositukset ja asiakastietoiset konfigurointityökalut |
| 🤖**A2A Runtime**| Agenttien välinen tehtävien organisointi |
| ✨**Enhancement Pipeline**| Yksityinen tehostaja julkaisee kuratoimia englanninkielisiä johdannaisia ​​kohtaan "skills_omni/" |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *"Käytä `@brainstorming`a SaaS MVP:n suunnitteluun."*
>
> 💬 *"Käytä `@api-design` tämän päätepisteen suunnittelun tarkistamiseen."*
>
> 💬 *"Käytä `@debugging` tämän regression eristämiseen."*### 5️⃣ Start with a bundle

| 🎯 Maali | Paketti | Komento |
|:---------|:-------|:---------|
| Yleinen suunnittelu | "olennaiset" | `npx omni-skills -- paketti olennaiset tarvikkeet` |
| Tuotteen + sovelluksen toimitus | "täysi pino" | `npx omni-skills -- bundle full-stack` |
| Suunnittelujärjestelmät | "suunnittelu" | `npx omni-skills -- pakettisuunnittelu` |
| Turvatarkastus | "turvallisuus" | `npx omni-skills -- pakettitietoturva` |
| Infra ja vapauta | "devops" | `npx omni-skills -- nippu devops` |
| LLM-sovellukset | "ai-insinööri" | `npx omni-skills --bundle ai-engineer` |
| OSS-huolto | "oss-maintainer" | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Ennen nippujen vertailua tai asennuspolun valitsemista näiden viiden rakennuspalikan ymmärtäminen auttaa:

| käsite | Mitä se tarkoittaa |
|:--------|:--------------|
| 🧠**Taidot**| Uudelleen käytettävät SKILL.md-pelikirjat, jotka opettavat assistentin suorittamaan työnkulun hyvin |
| 📦**Katalogiesineet**| Luodut JSON- ja arkistolähdöt, jotka mahdollistavat haun, vertailun, lataamisen ja asennuksen |
| 🔌**MCP-asetus**| Asiakaspuolen määritys avustajille, jotka voivat löytää Omni-taidot MCP-työkalujen avulla |
| 🤖**A2A Runtime**| Agenttien välinen orkestraatio etsimistä, suositusta ja asennussuunnitelman vaihtoa varten |
| ✨**Kurattu tulos**| "skills_omni/" — Omnin ylläpitämä parannettu pinta, joka on erillään alkuperäisestä ylävirran syöttöaukosta |

>**📝 Alkuperäinen/kuroitu käytäntö:**
> - `skills/` hyväksyy alkupään natiivisisällön millä tahansa kielellä
> - Skills_omni/ on aina kuratoitu ja julkaistu englanniksi
> - "skills_omni/" on yksisuuntainen pinta, eikä se palaa takaisin alkuperäiseen käyttöön---

## 💡 Why Omni Skills

>**Ei vain "toinen arkisto, jossa on taitoja kansioissa."**
> Omni Skillsilla on vahvempi sopimus ja laajempi käyttöaikapinta.

| Jos haluat… | 📁 Tyypillinen taitojen repo | ✨ Omni Skills |
|:-------------|:-----------------------|:---------------|
| Asenna todelliseen avustajaan | Manuaalinen kopio tai mukautettu komentosarja | "npx omni-skills", ohjattu asennus, visuaalinen käyttöliittymä, valikoiva "--skill" ja "--bundle" |
| Etsi ja vertaa taitoja | Selaa merkintöjä manuaalisesti | Luotu luettelo, suodatus, pakettien suunnittelu, haku, vertailu ja suositus |
| Käytä samoja tietoja eri työkaluissa | Erillinen logiikka työkalua kohden | Jaetut luettelot ja luettelo CLI:lle, API:lle, MCP:lle ja A2A:lle |
| Määritä MCP-asiakkaat | Muokkaa tiedostoja käsin | `config-mcp`, paikalliset sivuvaunujen esikatselut, luodut reseptit ja sallitut kirjoitukset |
| Luottamustiedotteet | Paras pakkaus | Tarkistussummat, allekirjoitetut arkistot, skannerin vahvistus, CI:n vapauttaminen ja esitarkastuksen julkaiseminen |
| Kuroi yhteisön osallistuminen | Mikä tahansa maa pysyy sellaisenaan | Alkuperäinen saanti sanalla "skills/", kuratoidut englanninkieliset johdannaiset kentässä "skills_omni/" attribuutioineen |---

## 🖥️ Compatibility and Invocation

Nämä taidot noudattavat SKILL.md-mallia ja niitä voidaan käyttää normaalina arkistona, mutta paketti myös asentaa ja konfiguroi ne laajalle pinnalle:

>**7**asennuskykyisiä asiakkaita ·**16**MCP-konfigurointikykyisiä asiakkaita### 🎯 Install-Capable Clients

| Työkalu | Tyyppi | Invocation esimerkki | Asenna polku |
|:-----|:-----|:--------------------|:--------------|
| 🟢**Claude Code**| CLI | "Käytä aivoriihiä ominaisuuden suunnittelussa" | "~/.claude/skills" |
| 🔵**Osoitin**| IDE | `@brainstorming auttaa minua suunnittelemaan ominaisuuden` | "~/.kursori/taidot" |
| 🟡**Gemini CLI**| CLI | "Käytä aivoriihiä ominaisuuden suunnittelussa" | "~/.gemini/skills" |
| 🔴**Codex CLI**| CLI | "Käytä aivoriihiä ominaisuuden suunnittelussa" | "~/.codex/skills" |
| 🟠**Kiro**| CLI / IDE | "Käytä aivoriihiä ominaisuuden suunnittelussa" | "~/.kiro/skills" |
| 🟣**Antigravity**| IDE | `Käytä @brainstorming-toimintoa ominaisuuden suunnitteluun` | "~/.gemini/antigravity/skills" |
| ⚪**OpenCode**| CLI | `avoinkoodin ajo @aivoriihi` | `<työtila>/.opencode/skills' |

<tiedot>
<summary>🔌 <strong>Laajempi MCP-määritysten kattavuus (16 asiakasta)</strong></summary>

Nämä kohteet ovat osa tuettua MCP-määrityspintaa, vaikka ne eivät olisikaan asennuskohteita taitohakemistoille:

| Asiakas tai pinta | Tukityyppi | Huomautuksia |
|:------------------|:-------------|:-------|
| Claude-asetukset ja työpöytä | MCP-kokoonpano | Asetukset, työpöytä ja projektitiedot |
| VS-koodi | MCP-kokoonpano | Käyttäjä-, työtila-, sisäpiiri- ja kehittäjäsäilökohteet |
| Kaksoset | MCP-kokoonpano | Käyttäjä- ja työtilan asetukset |
| Cline | MCP-kokoonpano | Ensiluokkainen konfigurointikohde |
| GitHub Copilot CLI | MCP-kokoonpano | Käyttäjä- ja repo-määrityskohteet |
| Jatka | MCP-kokoonpano | Workspace YAML sukupolvi |
| Purjelautailu | MCP-kokoonpano | Käyttäjän asetuskohde |
| Zed | MCP-kokoonpano | Työtilan määrityskohde |
| Hanhi | MCP-kokoonpano | Käyttäjän konfigurointikohde luodulla reseptillä |
| Kilo-koodi | MCP-kokoonpano | Käyttäjä-, projekti- ja työtilakohteet |
| Junie | MCP-kokoonpano | Projektin ja käyttäjän konfigurointikohteet |</details>

---

## Asenna

<taulukko>
<tr>
<td width="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

| Työkalu | Asenna komento | Ensimmäinen käyttökerta |
|:-----|:----------------|:-----------|
| 🟢 Claude Code | `npx omni-skills --claude` | "Käytä aivoriihiä ominaisuuden suunnittelussa" |
| 🔵 Kursori | `npx omni-skills --kursori` | `@brainstorming auttaa minua suunnittelemaan ominaisuuden` |
| 🟡 Gemini CLI | `npx omni-skills --gemini` | "Käytä aivoriihiä ominaisuuden suunnittelussa" |
| 🔴 Codex CLI | `npx omni-skills --codex` | "Käytä aivoriihiä ominaisuuden suunnittelussa" |
| 🟣 Antigravitaatio | `npx omni-skills --antigravity` *(oletus)* | `Käytä @brainstorming-toimintoa ominaisuuden suunnitteluun` |
| 🟠 Kiro | `npx omni-skills --kiro` | "Käytä aivoriihiä ominaisuuden suunnittelussa" |
| ⚪ OpenCode | `npx omni-skills --opencode` | `avoinkoodin ajo @aivoriihi` |
| 📂 Mukautettu polku | `npx omni-skills --polku ./oma-taidot` | Riippuu työkalustasi |

> 📖**Etkö ole varma mistä aloittaa?**
> - [🚀 Aloitus](docs/users/GETTING-STARTED.md) – asenna ja vahvista alle 2 minuutissa
> - [🧭 CLI User Guide](docs/users/CLI-USER-GUIDE.md) – täydellinen komentoviittaus
> - [📗 Käyttöopas](docs/users/USAGE.md) - kehotteet, mallit ja ajonaikaiset tilat---

## 🔌 Runtime Surfaces

Omni Skills ei ole vain taitojen kirjasto. Se paljastaa**neljä ajonaikaista pintaa**, jotka kuluttavat samaa luotua luetteloa:

| Pinta | valtio | Mitä se tekee | Esimerkki |
|:--------|:------|:--------------|:---------|
| 🖥️**CLI**| ✅ Saatavilla | Etsi, asenna, diagnosoi, visuaalinen käyttöliittymä, käynnistyspalvelut, savutarkistukset | "npx omni-skills doctor" |
| 🌐**Katalogi API**| ✅ Saatavilla | Vain luku -luettelo, etsi, niput, vertaa, asenna suunnitelmat, lataukset | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Saatavilla | Löytäminen, suositus, asennuksen esikatselu, paikallinen sivuvaunu, konfigurointiprosessit | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅ Saatavilla | Tehtävän elinkaari, kanavanvaihto, kysely, suoratoisto, peruutus, pysyvyys | `npx omni-skills a2a -- portti 3335` |

<tiedot>
<summary>🖥️ <strong>Visuaaliset komentotulkki- ja operaattorikomennot</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<tiedot>
<summary>🔌 <strong>MCP-siirrot ja -asetukset</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

| Metrinen | Laske |
|:-------|:------|
| 🧠 Julkaistu taidot |**32**|
| 📂 Aktiiviset luokat |**15**|
| 📦 Täysin tuetut paketit |**7**|
| ✨ Kuroidut johdannaiset |**32**kohdassa `skills_omni/` |### 📦 Bundle Availability

| Paketti | Taidot | Jäsenet |
|:-------|:--------|:---------|
| 🧰 "Essentials" |**4/4**✅ | `etsintätaidot` · `aivoriihi` · `arkkitehtuuri` · `virheenkorjaus` |
| 🌐 `täysi pino` |**5/5**✅ | "frontend-design" · "api-design" · "tietokannan suunnittelu" · "omni-figma" · "auth-flows" |
| 🎨 `design` |**5/5**✅ | "frontend-design" · "omni-figma" · "design-systems-ops" · "accessibility-audit" · "design-token-governance" |
| 🛡️ `turvallisuus` |**4/4**✅ | "security-auditor" · "haavoittuvuusskanneri" · "incident-response" · "uhan mallinnus" |
| ⚙️ `devops` |**5/5**✅ | "docker-expert" · "kubernetes" · "terraform" · "observability-review" · "release-engineering" |
| 🤖 `ai-insinööri` |**7/7**✅ | "rag-engineer" · "prompt-engineer" · "llm-patterns" · "eval-design" · "context-engineering" · "data-sopimukset" · "mallinkäyttö" |
| 🔧 `oss-maintainer` |**4/4**✅ | "find-skills" · "create-pr" · "muutosloki" · "dokumentaatio" |### ✨ Native Intake → Curated Output

| Pinta | Tarkoitus | Kieli |
|:--------|:--------|:----------|
| 📥 `taidot/` | Alkuperäinen saanti | Mikä tahansa kieli |
| ✨ `skills_omni/` | Kuroitu Omni-ylläpidetty tuotos | Aina englanti |

>**ℹ️**Yksityinen tehostaja käsittelee natiivitaitojen muutokset uudelleen ja päivittää ne kuratoidussa perustilassa. Tämä tekee `skills_omni/`:sta**ylläpidetyn katalogipinnan**, ei toista kopiota.---

## 🛡️ Security and Release Posture

> Omni Skills toimittaa vahvemman julkaisu- ja vahvistustarinan kuin pelkkä arkisto.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<tiedot>
<summary>📋 <strong>Mitä putki vahvistaa</strong></summary>

- ✅ Taitojen validointi ja metatietojen luominen
- ✅ Taksonomian normalisointi- ja uudelleenluokittelutyökalut
- ✅ Katalogien ja arkiston luominen
- ✅ Automaattiset testit
- ✅ API-, MCP- ja A2A-käynnistyspolut
- ✅ Arkiston vahvistus
- ✅ Paketin esilento `npm pack --dry-run` -toiminnolla</details>

<tiedot>
<summary>🔐 <strong>Vapauta asento</strong></summary>

| Ohjaus | Kuvaus |
|:--------|:------------|
| 🔒 SHA-256 tarkistussummat | Kaikkien arkistojen tarkistussummaluettelot |
| ✍️ Allekirjoitettuja esineitä | Irrotetut allekirjoitukset julkaisuartefakteista |
| 🤖 CI-valvonta | Vapauttaminen CI:ssä ennen julkaisemista |
| 🦠 Skanneriportit | ClamAV- ja VirusTotal-porteilla suojattu julkaisuvirta |
| 📦 GitHub-julkaisu | Automatisoitu GitHub-julkaisun luominen |
| 📋 npm julkaisu | Vain vahvistetusta tarballista |
| 🔄 Automaattinen vapautus | Hyväksytyssä taito sulautuu "main" |

**Automaattinen julkaisu laukeaa vain, kun yhdistäminen muuttuu:**
- "taidot/*/**".
- "skills_omni/*/**".
- "data/bundles.json".

Vain asiakirjan muutokset**älä**käynnistä paketin julkaisun.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Doc | Mitä opit |
|:----|:------------------|
| 🚀 [Aloitus](docs/users/GETTING-STARTED.md) | Asenna, tarkista ja kutsu alle 2 minuutissa |
| 🧭 [CLI-käyttöopas](docs/users/CLI-USER-GUIDE.md) | Täysi komentoviittaus ja reaalimaailman mallit |
| 📗 [Käyttöopas](docs/users/USAGE.md) | CLI-komennot, asennustilat, ajonaika ja MCP-kokoonpano |
| 📦 [Paketit](docs/users/BUNDLES.md) | Kuroidut niput ja saatavuus |
| 📚 [Katalogi](docs/CATALOG.md) | Automaattisesti luotu luettelo julkaistuista taidoista |
| 🔧 [System Runbook](docs/operations/RUNBOOK.md) | Rakenna, palvele, suojaa ja tee vianetsintä |### 🏗️ For Architects

| Doc | Mitä opit |
|:----|:------------------|
| 🗺️ [Agent-Native Roadmap](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Arkkitehtuurin kehitys ja jäljellä olevat alueet |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Keskeinen monorepo-päätös |
| 🔬 [Codebase Analysis](docs/architecture/CODEBASE-ANALYSIS.md) | Ajonaikainen koostumus ja järjestelmän rajat |
| 🌐 [Katalogin API](docs/specs/CATALOG-API.md) | HTTP-päätepisteet, suodatus, hallinta ja lataukset |
| 🧩 [CLI-opastettu asennusohjelma](docs/specs/CLI-GUIDED-INSTALLER.md) | Ohjatun asentajan käyttäytymissopimus |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Musteen visuaalinen kuori ja tilamalli |
| 🔌 [Paikallinen MCP-sivuvaunu](docs/specs/LOCAL-MCP-SIDECAR.md) | Tiedostojärjestelmätyökalut ja sallittujen luettelomalli |
| 📊 [Client Support Matrix](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Täydellinen asiakas- ja kirjoittajaviite |
| 🏷️ [Skill Classification](docs/specs/SKILL-CLASSIFICATION.md) | Taksonomia, pisteytys ja metatiedot |
| 🛡️ [Turvallisuusvahvistus](docs/specs/SECURITY-VALIDATION.md) | Skannerit, arkistot ja allekirjoitukset |
| 📋 [Skill Manifest](docs/specs/SKILL-MANIFEST.md) | Koneluettava luettelomuoto |### 🤝 For Contributors

| Doc | Mitä opit |
|:----|:------------------|
| 📝 [Käyttäjäopas](CONTRIBUTING.md) | Repo-työnkulku ja PR-odotukset |
| 🧾 [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) | Alkuperäinen saanti, tehosteiden käsittely, arvioijan odotukset |
| 📄 [Skill Template](docs/contributors/SKILL-TEMPLATE.md) | Startti `SKILL.md` frontmatterilla ja rakenteella |
| 🔬 [Skill Anatomy](docs/contributors/SKILL-ANATOMY.md) | Rakenne- ja laatuodotukset |
| ✅ [Laatupalkki](docs/contributors/QUALITY-BAR.md) | Hyväksymiskriteerit |
| 🏆 [High-score Playbook](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Mikä saa huipputuloksia |---

## 🗂️ Repository Layout

| Polku | Tarkoitus |
|:-----|:--------|
| 📂 `taidot/` | Kanoniset kirjoittamat taidot ja syntyperäiset tiedot |
| ✨ `skills_omni/` | Kuroidut Omnin ylläpitämät parannetut johdannaiset |
| 📖 `docs/` | Käyttäjä-, avustaja-, arkkitehtuuri-, toiminta- ja tekninen dokumentaatio |
| 📦 `dist/` | Luodut luettelot, niput, luettelot ja arkistot |
| 📁 `data/` | Nipun määritelmät ja staattiset tukitiedot |
| 🧠 `paketit/catalog-core/` | Jaetun luettelon suoritusaika |
| 🌐 `paketit/palvelin-api/` | Vain luku - HTTP API |
| 🔌 `paketit/palvelin-mcp/` | MCP-palvelin ja paikallinen sivuvaunu |
| 🤖 `paketit/palvelin-a2a/` | A2A suoritusaika ja tehtävien orkestrointi |
| 🖥️ `tools/bin/` | CLI-tulopisteet |
| 📚 `tools/lib/` | Asennus- ja käyttöliittymäapulaiset |
| ⚙️ `työkalut/skriptit/` | Skriptien validointi, luominen, julkaisu ja testaus |

>**ℹ️**`dist/` on tarkoituksella versioitu, koska luodut artefaktit ovat osa asennus-, API-, MCP-, A2A-, savu- ja julkaisusopimusta.---

## 🤝 Contributing

Omni Skills hyväksyy alkuperäisen alkuvaiheen taitojen hankinnan kohdassa "skills/".

| Sääntö | Tiedot |
|:-----|:--------|
| 📥 Alkuperäinen saanti | Voi olla karkea, kirjoitettu millä tahansa kielellä |
| ✨ Kuroitu tulos | `skills_omni/` varattu automatisoimille Omni-johdannaisille |
| 🚫 Manuaaliset muokkaukset | Julkiset manuaaliset muokkaukset parametriin `skills_omni/` hylätään |
| 🔄 Uudelleenkäsittely | Yksityinen tehostaja käsittelee uudelleen alkuperäiset muutokset ja päivittää kuratoidun lähtötilan |

> 📖**Aloita:**[Contributing Guide](CONTRIBUTING.md) · [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Tyyppi | Lisenssi |
|:-----|:--------|
| 💻 Koodi ja työkalut | [MIT-lisenssi](KÄYTTÖOIKEUS) |
| 📝 Dokumentaatio ja taitosisältö | [CC BY 4.0](KÄYTTÖOIKEUS-SISÄLTÖ) |---

<div align="center">

**Tekijä: 🧠 Omni Skills Teamin toimesta**

[⭐ Merkitse tämä repo](https://github.com/diegosouzapw/omni-skills) · [🐛 Ilmoita virheestä](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Keskustelut](https://github.com/diegosouzapw/omni-skills)/</div>
