# 📖 Omni Skills — Documentation Hub (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Keskeinen viite nykyisen Omni Skills -alustan käyttöön, käyttämiseen, laajentamiseen ja ymmärtämiseen.**

Vakioyhteisötiedostot ovat arkiston juuressa:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`KÄYTTÖKOODI.md`](../CODE_OF_OF)---

## 📊 Status Snapshot

| Alue | valtio | Tiedot |
|:-----|:------|:--------|
| 🏗️**Suoritusaika**| ✅ Nykyinen | Unified CLI, Ink visuaalinen kuori, API, MCP ja A2A toimitetaan kaikki samasta paketista |
| 📦**Katalogi**| 📌 32 taitoa | 32 julkaistua L3-taitoa 15 aktiivisessa luettelokategoriassa ja 7 täysin tuetussa paketissa |
| 🎯**Asenna**| ✅ Nykyinen | Ohjattu TTY-asennus, valikoiva "--skill" ja "--bundle", mukautetun polun tuki ja etsintäohjattu asennus |
| 🌐**API**| ✅ Nykyinen | Vain luku -rekisteri-API, jossa on todennus, järjestelmänvalvojan suoritusaika, nopeusrajoitus, CORS/IP-sallitut luettelot, ylläpitotila ja lataukset |
| 🔌**MCP**| ✅ Nykyinen | "stdio" · "stream" · "sse", paikallinen sivuvaunutila, 7 asennuskykyistä asiakasta, 16 konfigurointikykyistä asiakasta, 33 konfigurointikohdetta ja 19 konfigurointiprofiilia |
| 🤖**A2A**| ✅ Nykyinen | Yksinkertainen ensin paikallinen suoritusaika JSON/SQLite-kestävyydellä, uudelleenkäynnistyksen jatkaminen, SSE-suoratoisto, peruutus, ulkoinen suoritustila ja valinnainen vuokrattu koordinointi, kun se on erikseen käytössä |
| 🛡️**Turvallisuus**| ✅ Nykyinen | Staattinen skanneri, valinnainen ClamAV/VirusTotal, allekirjoitetut julkaisuartefaktit, arkiston tarkistussummat ja julkaisuajan vahvistus |
| 📋**Luokittelu**| ✅ Nykyinen | Kanoninen taksonomia, maturiteetti, semanttinen laadun leviäminen, parhaiden käytäntöjen leviäminen ja turvapisteytys |
| 📁**Arkistot**| ✅ Nykyinen | Taitokohtaiset .zip- ja .tar.gz-arkistot SHA-256-tarkistussummaluetteloilla |
| 🔐**Allekirjoitus**| ✅ Nykyinen | Irrotetut allekirjoitukset pakotettu julkaisutunnisteisiin; paikalliset asennusvirrat kuluttavat saman manifestin ja tarkistussumman metatiedot |
| 🧬**Imuvirtaus**| ✅ Nykyinen | Alkuperäiset taidot laskeutuvat `taitojen/` alle; PR-automaatio tarkistaa ne ja ehdottaa Omni-parannettuja johdannaisia ​​kohdassa "skills_omni/" |## 🔭 Current Project State

Perusrata elää nyt aktiivisessa projektitilassa ja toinen kategoria-laajennusaalto on jo luettelossa. Projektia pitäisi nyt lukea toimivana lähtökohtana, jossa on valinnaisia tulevia laajennusraitoja:

- julkinen "v0.1.2" ja yksityinen "v0.0.1" ovat nykyinen vakaa julkaisutaso
- luettelo kattaa nyt 32 julkaistua taitoa 15 aktiivisesta kategoriasta ja 7 täysin tuetuista paketeista
- natiivi sisäänotto ja kuratoitu "skills_omni/" -tulostus ovat molemmat toimivia, mukaan lukien monikielinen natiivi sisäänotto ja vain englanninkielinen kuratoitu tulos
- Protokollapinnat, julkaisuautomaatio ja yksityinen parannusautomaatio ovat käytössä, ei bootstrapissa

Tuleva laajentaminen on tarkoituksellista:

- syventää "design", "työkalut", "data-ai" ja "koneoppiminen"
- Vältä uinuvien ei-koodattujen luokkien avaamista uudelleen, kunnes nykyiset koodinatiivikappaleet ovat syvempiä
- Pidä laatulattia ja tehostimen tarkistuspolku ennallaan samalla

Tämä suunnitelma on nyt jaettu:

- valmistunut ensimmäinen laajennusaalto kohteessa [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALISATION-AND-CATEGORY-EXPANSION.md)
- suoritettu toinen laajennusaalto kohteessa [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- ja tulevaisuuteen suuntautuva ruuhka tiedostossa [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Nämä arkkitehtuurikysymykset eivät ole enää "avoimia" käytännössä ja niitä käsitellään nyt projektipäätöksinä:

1.**Jakelu pysyy luettelossa ensin plus allekirjoitetut arkistot**
   Koneluettava luettelo pysyy CLI:n, API:n, MCP:n ja A2A:n käyttämänä sopimuksena. Allekirjoitetut taitokohtaiset arkistot ovat lataus- ja julkaisupinta kerrostettuna kyseisen sopimuksen päälle.
2.**Yksityisten tai premium-luetteloiden tulee käyttää uudelleen samaa luettelomallia**
   Auth ja käytäntö tulee kerrostaa ulkoisesti, ei haaroittamalla luettelon tai luettelon muotoa.
3.**MCP-kokoonpanon tulisi konvergoida muutamaan ensisijaiseen vientiperheeseen**
   Omni Skills standardoituu nyt JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` ja TOML `[mcp_servers] ympärille, samalla kun mittatilaustyönä tehdyt kirjoittajat edellyttävät vain erilaista asiakasrakennetta.

Nämä päätökset ovat yhdenmukaisia nykyisen virallisen MCP- ja asiakasdokumentaation kanssa, mukaan lukien:

- virallinen MCP-rekisteri- ja laajennustukiohjeet osoitteessa "modelcontextprotocol.io".
- OpenAI Docs MCP- ja Codex CLI -asiakirjat osoitteessa "developers.openai.com" ja "platform.openai.com"
- VS Coden MCP-laajennus ja tuotedokumentit osoitteessa "code.visualstudio.com".
- asiakasdokumentit Claude Codelle, Cursorille, Continuelle, Junielle, Kirolle, OpenCodelle, Clinelle, Kilo Codelle, GitHub Copilot CLI:lle, Zedille, Gooselle, Postmanille ja JetBrains AI Assistantille---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Mitä opit |
|:----|:-------------------|
| 📘 [Aloitus](users/GETTING-STARTED.md) | Asenna, tarkista ja käynnistä ensimmäinen taitosi |
| 🧭 [CLI-käyttöopas](users/CLI-USER-GUIDE.md) | Täysi komentoviittaus ja todelliset CLI-käyttötavat |
| 📗 [Käyttöopas](users/USAGE.md) | CLI-komennot, asennustilat, ajonaikaiset komennot ja MCP-määritysvirrat |
| 📦 [Numput](users/BUNDLES.md) | Kuroidut paketit ja niiden nykyinen saatavuus |
| 📚 [Katalogi](CATALOG.md) | Automaattisesti luotu luettelo julkaistuista taidoista |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Rakenna, palvele, suojaa ja suorita vianmääritys |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Mitä opit |
|:----|:-------------------|
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Arkkitehtuurin kehitys, suljetut päätökset ja jäljellä olevat laajennusalueet |
| 🧭 [CLI UX Roadmap](architecture/CLI-UX-ROADMAP.md) | Ohjatun ja visuaalisen CLI:n historiallinen suunnitelma ja nykyinen muoto |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Ydin monorepo ja jaettu ajonaikainen päätös |
| 🔬 [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md) | Nykyinen ajonaikainen koostumus, määrät ja järjestelmän rajat |
| 🌐 [Katalogisovellusliittymän pinta](specs/CATALOG-API.md) | HTTP-päätepisteet, suodatus, hallinta ja lataukset |
| 🧩 [CLI-opastettu asennusohjelma](specs/CLI-GUIDED-INSTALLER.md) | Ohjatun asentajan käyttäytymissopimus |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Musteen visuaalinen kuori, tilamalli ja palvelukeskus |
| 🔌 [Paikallinen MCP-sivuvaunu](specs/LOCAL-MCP-SIDECAR.md) | Tiedostojärjestelmätietoiset työkalut, sallittujen luettelomalli ja asetusten kirjoittaminen |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Tuetut CLI- ja IDE-asiakkaat, kirjoittajat, manuaaliset kohteet ja lähdeviitteet |
| 📊 [Skill Classification](specs/SKILL-CLASSIFICATION.md) | Taksonomia, pisteytysheuristiikka ja metatietojen artefaktit |
| 🛡️ [Turvallisuusvahvistus](specs/SECURITY-VALIDATION.md) | Skannerit, arkistot, allekirjoitukset ja julkaisun vahvistus |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Koneluettava luettelomuoto ja yhteensopivuussopimus |### 🤝 If You Want to **Contribute**

| Doc | Mitä opit |
|:----|:-------------------|
| 📝 [Käyttäjäopas](../CONTRIBUTING.md) | Repo työnkulku ja vetopyynnön odotukset |
| 🧾 [Skill PR-työnkulku](contributors/SKILL-PR-WORKFLOW.md) | Alkuperäinen otto, automaattinen tehostimen käsittely, `skills_omni/` -julkaisu ja arvioijan odotukset |
| 📄 [Skill Template](contributors/SKILL-TEMPLATE.md) | Startti `SKILL.md` nykyisellä frontmatterilla ja rakenteella |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Taidon rakenne ja laatuvaatimukset |
| ✅ [Laatupalkki](contributors/QUALITY-BAR.md) | Arkiston hyväksymiskriteerit |
| 🏆 [High-score Playbook](contributors/HIGH-SCORE-PLAYBOOK.md) | Mikä edistää korkeaa kypsymistä, laatua, parhaita käytäntöjä ja turvallisuuspisteitä |
| 📋 [Tasks Backlog](tasks/README.md) | Yksityiskohtainen toteutusruuhka jäljellä olevalle julkiselle ja yksityiselle työlle |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Julkaistu "omni-skills"-binaari on yhtenäinen julkinen sisääntulopiste.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

Täydellisen loppukäyttäjän komentopinnan saat käyttämällä [CLI User Guide](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Rakennusputki lähettää koneellisesti luettavia tiedostoja, jotka ohjaavat jokaista ajonaikaista pintaa:

| Artefaktti | Tarkoitus |
|:---------|:--------|
| `metadata.json` | Tietovaraston laajuinen validointi ja tulosten yhteenveto |
| `skills_index.json` | Repo-paikallinen normalisoitu taitoindeksi |
| `dist/catalog.json` | Julkaistu luettelo hakua ja luettelointia varten |
| `dist/bundles.json` | Nipun määritelmät saatavuudella |
| `dist/manifests/<taito>.json` | Koneluettava luettelo taitokohtaisesti |
| `dist/archives/<taito>.zip` | Taitoarkisto (zip) |
| `dist/archives/<taito>.tar.gz` | Taitoarkisto (tarball) |
| `dist/archives/<taito>.checksums.txt` | SHA-256-tarkistussummaluettelo |

`dist/` pysyy tarkoituksella sitoutuneena. Nämä luodut artefaktit ovat osa asennus-, API-, MCP-, A2A-, savu- ja julkaisusopimusta.### 🌐 API

```bash
npx omni-skills api --port 3333
```

Vain luku -rekisterisovellusliittymä taitojen, pakettien, vertailun, asennuksen suunnittelun ja artefaktien lataamiseen.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Paikallinen sivuvaunu tukee nyt ensiluokkaista MCP-asetusten kirjoittamista:

- Claude Code
- Kursori
- VS Code ja Dev Containers
- Gemini CLI
- Antigravitaatio
- Kiro
- Codex CLI
- Jatka
- Purjelautailu
- OpenCode
- Cline
- GitHub Copilot CLI
- kilokoodi
- Zed
- Hanhi### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Tehtävän elinkaari, suoratoisto, pysyvyys, uudelleenkäynnistyksen palautus ja yksinkertainen ensin paikallinen orkestrointi. Jaettu vuokrattu toteutus on käytettävissä, kun se on erikseen otettu käyttöön; Redis on edelleen kehittynyt isännöity vaihtoehto, ei oletusarvoinen paikallinen polku.---

## 🗂️ Repository Map

| Polku | Tarkoitus |
|:-----|:--------|
| 📂 `taidot/` | Kanoniset taidot |
| 📖 `dokumentit/käyttäjät/` | Loppukäyttäjän dokumentaatio |
| 🤝 `asiakirjat/avustajat/` | Osallistujien mallit ja ohjeet |
| 🏗️ `docs/architecture/` | Etenemissuunnitelma, ADR:t ja tekninen analyysi |
| 🔧 `asiakirjat/toiminnot/` | Operatiiviset runbookit |
| 📋 `docs/specs/` | Suoritusaika-, protokolla- ja artefaktisopimukset |
| 📚 `docs/CATALOG.md` | Luotu taitoluettelo |
| 📦 `dist/` | Luodut koneellisesti luettavat esineet |
| 🧠 `paketit/catalog-core/` | Jaetun luettelon suoritusaika |
| 🌐 `paketit/palvelin-api/` | Vain luku - HTTP API |
| 🔌 `paketit/palvelin-mcp/` | MCP-palvelin ja paikallinen sivuvaunu |
| 🤖 `paketit/palvelin-a2a/` | A2A-palvelin ja tehtävän suoritusaika |
| 🖥️ `tools/bin/` | CLI-sisääntulokohdat |
| 📚 `tools/lib/` | Asennus- ja käyttöliittymäapulaiset |
| ⚙️ `työkalut/skriptit/` | Validointi, generointi, todentaminen ja testit |---

## 🧪 Release Validation

```bash
npm run smoke
```

Savuajo vahvistaa:

- ✅ taitojen validointi ja metatietojen luominen
- ✅ taksonomian uudelleenluokittelutyökalut
- ✅ katalogin artefaktien sukupolvi
- ✅ luotu katalogi
- ✅ arkiston luonti ja tarkistus
- ✅ automatisoitu testipaketti
- ✅ `npm pack --dry-run`
- ✅ API-käynnistys ja terveys
- ✅ MCP-käynnistys "stdio", "stream" ja "sse" kohdissa
- ✅ A2A-käynnistyksen, kyselyn, SSE-suoratoiston, peruutuksen ja push-config-elinkaari