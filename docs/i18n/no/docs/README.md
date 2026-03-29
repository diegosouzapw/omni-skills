# 📖 Omni Skills — Documentation Hub (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Den sentrale referansen for bruk, drift, utvidelse og forståelse av den nåværende Omni Skills-plattformen.**

Standard fellesskapsfiler lever i depotroten:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_DUCT.md)---

## 📊 Status Snapshot

| Område | Stat | Detaljer |
|:-----|:------|:--------|
| 🏗️**Kjøretid**| ✅ Nåværende | Unified CLI, Ink visual shell, API, MCP og A2A sendes alle fra samme pakke |
| 📦**Katalog**| 📌 32 ferdigheter | 32 publiserte "L3" ferdigheter på tvers av 15 aktive katalogkategorier og 7 fullt støttede bunter |
| 🎯**Installer**| ✅ Nåværende | Veiledet TTY-installasjon, selektiv `--skill` og `--bundle`, tilpasset banestøtte og oppdagelsesdrevet installasjon |
| 🌐**API**| ✅ Nåværende | Skrivebeskyttet register-API med auth, admin kjøretid, hastighetsbegrensning, CORS/IP-godkjenningslister, vedlikeholdsmodus og nedlastinger |
| 🔌**MCP**| ✅ Nåværende | `stdio` · `stream` · `sse`, lokal sidevognmodus, 7 installeringskompatible klienter, 16 konfigurasjonskompatible klienter, 33 konfigurasjonsmål og 19 konfigurasjonsprofiler |
| 🤖**A2A**| ✅ Nåværende | Enkel-første lokal kjøretid med JSON/SQLite-holdbarhet, gjenstart på nytt, SSE-streaming, kansellering, ekstern eksekveringsmodus og valgfri leid koordinering når eksplisitt aktivert |
| 🛡️**Sikkerhet**| ✅ Nåværende | Statisk skanner, valgfri ClamAV/VirusTotal, signerte utgivelsesartefakter, arkivsjekksummer og verifiseringstidspunkt for utgivelse |
| 📋**Klassifisering**| ✅ Nåværende | Kanonisk taksonomi, modenhet, semantisk kvalitetsspredning, spredning av beste praksis og sikkerhetspoengsum |
| 📁**Arkiv**| ✅ Nåværende | Per-skill `.zip` og `.tar.gz` arkiver med SHA-256 kontrollsummanifester |
| 🔐**Signer**| ✅ Nåværende | Atskilte signaturer håndhevet på utgivelsesetiketter; lokale installasjonsflyter bruker samme manifest- og kontrollsummetadata |
| 🧬**Inntaksstrøm**| ✅ Nåværende | Innfødte ferdigheter lander under `ferdigheter/`; PR-automatisering vurderer dem og foreslår Omni-forbedrede derivater under `skills_omni/` |## 🔭 Current Project State

Grunnsporet lever nå i den aktive prosjekttilstanden, og den andre kategoriutvidelsesbølgen er allerede i katalogen. Prosjektet skal nå leses som en fungerende baseline med valgfrie fremtidige utvidelsesspor:

- offentlige `v0.1.2` og private `v0.0.1` er den nåværende stabile utgivelsesgulvet
- Katalogen dekker nå 32 publiserte ferdigheter fordelt på 15 aktive kategorier og 7 fullt støttede pakker
- innfødt inntak og kuratert "skills_omni/"-utdata er begge operative, inkludert flerspråklig native inntak og kun engelsk kuratert utgang
- Protokolloverflater, utgivelsesautomatisering og privat forbedringsautomatisering er i bruk, ikke i bootstrap

Fremtidig utvidelse forblir bevisst:

- utdype `design`, `verktøy`, `data-ai` og `maskinlæring`
- unngå å gjenåpne sovende ikke-kodebaserte kategorier til de nåværende kodeinnfødte sporene har sterkere dybde
- Hold kvalitetsgulvet og forsterkerens gjennomgangsbane intakt mens du gjør det

Den planen er nå delt inn i:

- den fullførte første utvidelsesbølgen i [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALISATION-AND-CATEGORY-EXPANSION.md)
- den fullførte andre utvidelsesbølgen i [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- og den fremtidsrettede etterslepet i [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Disse arkitekturspørsmålene er ikke lenger "åpne" i praksis og behandles nå som prosjektbeslutninger:

1.**Distribusjonen forblir manifest-først pluss signerte arkiver**
   Det maskinlesbare manifestet forblir kontrakten som brukes av CLI, API, MCP og A2A. Signerte per-skill-arkiver er nedlastings- og utgivelsesoverflaten lagt på toppen av kontrakten.
2.**Private eller premiumkataloger bør gjenbruke det samme manifestskjemaet**
   Autentisering og policy bør legges på lag eksternt, ikke ved å splitte manifestet eller katalogformen.
3.**MCP-konfigurasjon bør konvergere på noen få kanoniske eksportfamilier**
   Omni Skills standardiserer nå rundt JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` og TOML `[mcp_servers]`, mens de beholder skreddersydde forfattere kun der offisielle klientdokumenter krever en annen struktur.

Disse avgjørelsene stemmer overens med gjeldende offisielle MCP og klientdokumentasjon, inkludert:

- offisiell MCP-register og utvidelsesstøtteveiledning på `modelcontextprotocol.io`
- OpenAI Docs MCP og Codex CLI-dokumenter på `developers.openai.com` og `platform.openai.com`
- VS Code MCP-utvidelse og produktdokumenter på `code.visualstudio.com`
- klientdokumenter for Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman og JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Dok | Hva du vil lære |
|:----|:------------------------|
| 📘 [Kom i gang](brukere/KOMME I GANG.md) | Installer, verifiser og påkall din første ferdighet |
| 🧭 [CLI User Guide](users/CLI-USER-GUIDE.md) | Full kommandoreferanse og virkelige CLI-bruksmønstre |
| 📗 [Bruksveiledning](users/USAGE.md) | CLI-kommandoer, installasjonsmoduser, kjøretidskommandoer og MCP-konfigurasjonsflyter |
| 📦 [Bundler](brukere/BUNDLES.md) | Utvalgte pakker og deres nåværende tilgjengelighet |
| 📚 [Katalog](CATALOG.md) | Autogenerert katalog over publiserte ferdigheter |
| 🔧 [System Runbook](operasjoner/RUNBOOK.md) | Bygg, server, sikre og feilsøk kjøretiden |### 🏗️ If You Want to **Understand** the Runtime

| Dok | Hva du vil lære |
|:----|:------------------------|
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Arkitekturutvikling, lukkede beslutninger og gjenværende utvidelsesområder |
| 🧭 [CLI UX Roadmap](arkitektur/CLI-UX-ROADMAP.md) | Historisk plan og nåværende form for den guidede og visuelle CLI |
| 📐 [ADR-0001: Workspace Foundation](arkitektur/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Kjerne monorepo og delt kjøretidsbeslutning |
| 🔬 [Kodebaseanalyse](arkitektur/CODEBASE-ANALYSIS.md) | Gjeldende kjøretidssammensetning, tellinger og systemgrenser |
| 🌐 [Catalog API Surface](specs/CATALOG-API.md) | HTTP-endepunkter, filtrering, styring og nedlastinger |
| 🧩 [CLI Guided Installer](specs/CLI-GUIDED-INSTALLER.md) | Atferdskontrakt for den veiledede installatøren |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Blekkvisuelt skall, tilstandsmodell og servicehub |
| 🔌 [Lokal MCP sidevogn](spesifikasjoner/LOCAL-MCP-SIDECAR.md) | Filsystembevisste verktøy, tillatelseslistemodell og konfigurasjonsskriving |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Støttede CLI- og IDE-klienter, skribenter, manuelle mål og kildereferanser |
| 📊 [Skill Classification](specs/SKILL-CLASSIFICATION.md) | Taksonomi, poengheuristikk og metadataartefakter |
| 🛡️ [Sikkerhetsvalidering](specs/SECURITY-VALIDATION.md) | Skannere, arkiver, signaturer og utgivelsesbekreftelse |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Maskinlesbart manifestformat og kompatibilitetskontrakt |### 🤝 If You Want to **Contribute**

| Dok | Hva du vil lære |
|:----|:------------------------|
| 📝 [Bidragsveiledning](../CONTRIBUTING.md) | Forventninger til repo-arbeidsflyt og pull-forespørsel |
| 🧾 [Skill PR Workflow](bidragsytere/SKILL-PR-WORKFLOW.md) | Innebygd inntak, automatisk forsterkerbehandling, `skills_omni/`-publisering og anmelderforventninger |
| 📄 [Skill Template](bidragsytere/SKILL-MAL.md) | Starter `SKILL.md` med aktuell frontmaterie og struktur |
| 🔬 [Skill Anatomy](bidragsytere/SKILL-ANATOMY.md) | Struktur og kvalitetsforventninger til en ferdighet |
| ✅ [Kvalitetslinje](bidragsytere/QUALITY-BAR.md) | Akseptkriterier for depotet |
| 🏆 [High-Score Playbook](bidragsytere/HIGH-SCORE-PLAYBOOK.md) | Hva driver høy modenhet, kvalitet, beste praksis og sikkerhetspoeng |
| 📋 [Tasks Backlog](tasks/README.md) | Detaljert implementeringsetterslep for gjenværende offentlige og private arbeid |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

The published `omni-skills` binary is the unified public entry point.

```bash
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

For den komplette sluttbrukerkommandooverflaten, bruk [CLI User Guide](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Bygg-pipelinen sender ut de maskinlesbare filene som driver hver kjøretidsoverflate:

| Artefakt | Formål |
|:--------|:--------|
| `metadata.json` | Repository-wide validering og poengsummeny |
| `skills_index.json` | Repo-lokal normalisert ferdighetsindeks |
| `dist/catalog.json` | Publisert katalog for søk og oppføring |
| `dist/bundles.json` | Buntdefinisjoner med tilgjengelighet |
| `dist/manifests/<skill>.json` | Maskinlesbart manifest per ferdighet |
| `dist/archives/<skill>.zip` | Ferdighetsarkiv (zip) |
| `dist/archives/<skill>.tar.gz` | Ferdighetsarkiv (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrollsummanifest |

`dist/` forblir begått med vilje. Disse genererte artefaktene er en del av installasjons-, API-, MCP-, A2A-, røyk- og frigjøringskontrakten.### 🌐 API

```bash
npx omni-skills api --port 3333
```

Read-only registry API for skills, bundles, comparison, install planning, and artifact downloads.

### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Den lokale sidevognen støtter nå førsteklasses MCP-konfigurasjonsskriving for:

- Claude Code
- Markør
- VS-kode og Dev-beholdere
- Gemini CLI
- Antigravitasjon
- Kiro
- Codex CLI
- Fortsett
- Vindsurfing
- Åpenkode
- Cline
- GitHub Copilot CLI
- Kilokode
- Zed
- Gås### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Oppgavelivssyklus, strømming, utholdenhet, restart gjenoppretting og enkel-første lokal orkestrering. Delt leid utførelse er tilgjengelig når den er eksplisitt aktivert; Redis forblir et avansert vertsalternativ, ikke den lokale standardbanen.---

## 🗂️ Repository Map

| Sti | Formål |
|:-----|:--------|
| 📂 `ferdigheter/` | Kanoniske forfatterferdigheter |
| 📖 `dokumenter/brukere/` | Sluttbrukerdokumentasjon |
| 🤝 `dokumenter/bidragsytere/` | Bidragsyter maler og veiledning |
| 🏗️ `docs/architecture/` | Veikart, ADRs og teknisk analyse |
| 🔧 `docs/operations/` | Operative runbooks |
| 📋 `docs/specs/` | Kjøretids-, protokoll- og artefaktkontrakter |
| 📚 `docs/CATALOG.md` | Generert ferdighetskatalog |
| 📦 `dist/` | Genererte maskinlesbare artefakter |
| 🧠 `pakker/katalog-kjerne/` | Delt katalog kjøretid |
| 🌐 `pakker/server-api/` | Skrivebeskyttet HTTP API |
| 🔌 `pakker/server-mcp/` | MCP-server og lokal sidevogn |
| 🤖 `pakker/server-a2a/` | A2A-server og oppgavekjøring |
| 🖥️ `tools/bin/` | CLI inngangspunkter |
| 📚 `tools/lib/` | Installasjons- og brukergrensesnitthjelpere |
| ⚙️ `verktøy/skript/` | Validering, generering, verifisering og tester |---

## 🧪 Release Validation

```bash
npm run smoke
```

Røykløpet bekrefter:

- ✅ ferdighetsvalidering og generering av metadata
- ✅ verktøy for taksonomi-rekategorisering
- ✅ katalogartefaktgenerering
- ✅ generert katalognedskrivning
- ✅ arkivgenerering og verifisering
- ✅ automatisert testpakke
- ✅ `npm pack --dry-run`
- ✅ API-oppstart og helse
- ✅ MCP-oppstart i 'stdio', 'stream' og 'sse'
- ✅ A2A-oppstart, polling, SSE-streaming, kansellering og push-config livssyklus