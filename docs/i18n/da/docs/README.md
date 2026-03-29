# 📖 Omni Skills — Documentation Hub (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Den centrale reference til at bruge, betjene, udvide og forstå den nuværende Omni Skills-platform.**

Standard fællesskabsfiler findes i lagerroden:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_DUCT.md)---

## 📊 Status Snapshot

| Område | Stat | Detaljer |
|:-----|:------|:--------|
| 🏗️**Køretid**| ✅ Nuværende | Unified CLI, Ink visual shell, API, MCP og A2A sendes alle fra den samme pakke |
| 📦**Katalog**| 📌 32 færdigheder | 32 offentliggjorte 'L3'-færdigheder på tværs af 15 aktive katalogkategorier og 7 bundter med fuld støtte |
| 🎯**Installer**| ✅ Nuværende | Guidet TTY-installation, selektiv `--skill` og `--bundle`, brugerdefineret stiunderstøttelse og opdagelsesdrevet installation |
| 🌐**API**| ✅ Nuværende | Skrivebeskyttet registrerings-API med godkendelse, admin-runtime, hastighedsbegrænsning, CORS/IP-tilladelseslister, vedligeholdelsestilstand og downloads |
| 🔌**MCP**| ✅ Nuværende | `stdio` · `stream` · `sse`, lokal sidevognstilstand, 7 installationskompatible klienter, 16 konfigurationskompatible klienter, 33 konfigurationsmål og 19 konfigurationsprofiler |
| 🤖**A2A**| ✅ Nuværende | Simpel-første lokal kørselstid med JSON/SQLite-holdbarhed, genstart-genoptagelse, SSE-streaming, annullering, ekstern eksekveringstilstand og valgfri leaset koordinering, når det udtrykkeligt er aktiveret |
| 🛡️**Sikkerhed**| ✅ Nuværende | Statisk scanner, valgfri ClamAV/VirusTotal, underskrevne udgivelsesartefakter, arkivkontrolsummer og verifikation af udgivelsestidspunkt |
| 📋**Klassificering**| ✅ Nuværende | Kanonisk taksonomi, modenhed, semantisk kvalitetsspredning, spredning af bedste praksis og sikkerhedsscoring |
| 📁**Arkiv**| ✅ Nuværende | Per-skill `.zip` og `.tar.gz` arkiver med SHA-256 checksum manifester |
| 🔐**Underskrift**| ✅ Nuværende | Adskilte signaturer håndhæves på frigivelsesmærker; lokale installationsflows bruger de samme manifest- og kontrolsummetadata |
| 🧬**Indtagsflow**| ✅ Nuværende | Native skills lander under `skills/`; PR-automatisering gennemgår dem og foreslår Omni-forbedrede derivater under `skills_omni/` |## 🔭 Current Project State

Grundsporet lever nu i den aktive projekttilstand, og den anden kategori-udvidelsesbølge er allerede i kataloget. Projektet skal nu læses som en fungerende baseline med valgfrie fremtidige ekspansionsspor:

- offentlige `v0.1.2` og private `v0.0.1` er det aktuelle stabile udgivelsesgulv
- Kataloget dækker nu 32 offentliggjorte færdigheder fordelt på 15 aktive kategorier og 7 fuldt understøttede bundter
- native indtag og kurateret `skills_omni/` output er begge operationelle, inklusive flersproget native indtag og kun engelsk kurateret output
- Protokoloverflader, udgivelsesautomatisering og privat forbedringsautomatisering er i drift, ikke i bootstrap

Fremtidig udvidelse forbliver bevidst:

- uddybe `design`, `værktøjer`, `data-ai` og `machine-learning`
- undgå at genåbne slumrende ikke-kodeindfødte kategorier, indtil de nuværende kodeindfødte spor har stærkere dybde
- Hold kvalitetsgulvet og forstærkerens gennemgang intakt, mens du gør det

Planen er nu opdelt i:

- den afsluttede første udvidelsesbølge i [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- den afsluttede anden udvidelsesbølge i [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- og det fremadrettede efterslæb i [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Disse arkitekturspørgsmål er ikke længere "åbne" i praksis og behandles nu som projektbeslutninger:

1.**Distribution forbliver manifest-først plus signerede arkiver**
   Det maskinlæsbare manifest forbliver kontrakten, der forbruges af CLI, API, MCP og A2A. Underskrevne per-skill-arkiver er download- og frigivelsesoverfladen lagt oven på den kontrakt.
2.**Private eller premium-kataloger bør genbruge det samme manifest-skema**
   Godkendelse og politik bør være lagdelt eksternt, ikke ved at forkaste manifestet eller katalogformen.
3.**MCP-konfiguration bør konvergere på nogle få kanoniske eksportfamilier**
   Omni Skills standardiserer nu omkring JSON `mcpServers`, JSON `servere`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` og TOML `[mcp_servers]`, mens de kun beholder skræddersyede writers, hvor officielle klientdokumenter kræver en anden struktur.

Disse beslutninger stemmer overens med den nuværende officielle MCP og klientdokumentation, herunder:

- officiel MCP-registrering og udvidelsesstøttevejledning på `modelcontextprotocol.io`
- OpenAI Docs MCP og Codex CLI-dokumenter på `developers.openai.com` og `platform.openai.com`
- VS Code MCP-udvidelse og produktdokumenter på `code.visualstudio.com`
- klientdokumenter til Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman og JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Hvad du vil lære |
|:----|:------------------------|
| 📘 [Kom godt i gang](brugere/KOM I GANG.md) | Installer, bekræft og påkald din første færdighed |
| 🧭 [CLI-brugervejledning](users/CLI-USER-GUIDE.md) | Fuld kommandoreference og CLI-brugsmønstre i den virkelige verden |
| 📗 [Brugsvejledning](brugere/USAGE.md) | CLI-kommandoer, installationstilstande, runtime-kommandoer og MCP-konfigurationsflow |
| 📦 [Bundler](brugere/BUNDLES.md) | Kurerede bundter og deres nuværende tilgængelighed |
| 📚 [Katalog](CATALOG.md) | Autogenereret katalog over offentliggjorte færdigheder |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Byg, servér, sikre og fejlfind kørselstiden |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Hvad du vil lære |
|:----|:------------------------|
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Arkitekturudvikling, lukkede beslutninger og resterende udvidelsesområder |
| 🧭 [CLI UX-køreplan](arkitektur/CLI-UX-ROADMAP.md) | Historisk plan og nuværende form af den guidede og visuelle CLI |
| 📐 [ADR-0001: Workspace Foundation](arkitektur/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo og shared runtime-beslutning |
| 🔬 [Kodebaseanalyse](arkitektur/CODEBASE-ANALYSIS.md) | Nuværende runtime-sammensætning, tællinger og systemgrænser |
| 🌐 [Catalog API Surface](specs/CATALOG-API.md) | HTTP-slutpunkter, filtrering, styring og downloads |
| 🧩 [CLI Guided Installer](specs/CLI-GUIDED-INSTALLER.md) | Adfærdskontrakt for den guidede installatør |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Blækvisuel skal, tilstandsmodel og servicehub |
| 🔌 [Local MCP Sidecar](specs/LOCAL-MCP-SIDECAR.md) | Filsystembevidste værktøjer, tilladelseslistemodel og konfigurationsskrivning |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Understøttede CLI- og IDE-klienter, skribenter, manuelle mål og kildehenvisninger |
| 📊 [Skill Classification](specs/SKILL-CLASSIFICATION.md) | Taksonomi, scoreheuristik og metadataartefakter |
| 🛡️ [Sikkerhedsvalidering](specs/SECURITY-VALIDATION.md) | Scannere, arkiver, signaturer og udgivelsesbekræftelse |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Maskinlæsbart manifestformat og kompatibilitetskontrakt |### 🤝 If You Want to **Contribute**

| Doc | Hvad du vil lære |
|:----|:------------------------|
| 📝 [Bidragende vejledning](../CONTRIBUTING.md) | Repo workflow og pull anmodning forventninger |
| 🧾 [Skill PR Workflow](bidragydere/SKILL-PR-WORKFLOW.md) | Native indtag, automatisk enhancer-behandling, `skills_omni/`-publicering og anmeldernes forventninger |
| 📄 [Skill Template](bidragsydere/SKILL-TEMPLATE.md) | Starter `SKILL.md` med aktuel frontmaterie og struktur |
| 🔬 [Skill Anatomy](bidragsydere/SKILL-ANATOMY.md) | Struktur og kvalitetsforventninger til en færdighed |
| ✅ [Kvalitetsbar](bidragydere/QUALITY-BAR.md) | Acceptkriterier for depotet |
| 🏆 [High-Score Playbook](bidragydere/HIGH-SCORE-PLAYBOOK.md) | Hvad driver høj modenhed, kvalitet, bedste praksis og sikkerhedsresultater |
| 📋 [Tasks Backlog](tasks/README.md) | Detaljeret implementeringsefterslæb for det resterende offentlige og private arbejde |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Den udgivne 'omni-skills' binær er det forenede offentlige indgangspunkt.```bash
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

Brug [CLI User Guide](users/CLI-USER-GUIDE.md) for at få den komplette slutbrugerkommandooverflade.### 📁 Generated Artifacts

Byggepipelinen udsender de maskinlæsbare filer, der driver hver runtime-overflade:

| Artefakt | Formål |
|:--------|:--------|
| `metadata.json` | Validering og resultatoversigt for hele lageret |
| `skills_index.json` | Repo-lokalt normaliseret færdighedsindeks |
| `dist/catalog.json` | Udgivet katalog til søgning og liste |
| `dist/bundles.json` | Bundle definitioner med tilgængelighed |
| `dist/manifests/<skill>.json` | Maskinlæsbart manifest pr. færdighed |
| `dist/archives/<skill>.zip` | Færdighedsarkiv (zip) |
| `dist/archives/<skill>.tar.gz` | Færdighedsarkiv (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrolsummanifest |

`dist/` forbliver begået med vilje. Disse genererede artefakter er en del af installations-, API-, MCP-, A2A-, røg- og frigivelseskontrakten.### 🌐 API

```bash
npx omni-skills api --port 3333
```

Skrivebeskyttet registrerings-API til færdigheder, bundter, sammenligning, installationsplanlægning og artefaktdownloads.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Den lokale sidevogn understøtter nu førsteklasses MCP-konfigurationsskrivning til:

- Claude Code
- Markør
- VS Code og Dev Containere
- Gemini CLI
- Antigravitation
- Kiro
- Codex CLI
- Fortsæt
- Windsurfing
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilo kode
- Zed
- Gås### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Opgavelivscyklus, streaming, vedholdenhed, genstart gendannelse og simpel-først lokal orkestrering. Delt leaset udførelse er tilgængelig, når den udtrykkeligt er aktiveret; Redis forbliver en avanceret hostet mulighed, ikke den lokale standardsti.---

## 🗂️ Repository Map

| Sti | Formål |
|:-----|:--------|
| 📂 `færdigheder/` | Kanoniske forfatterfærdigheder |
| 📖 `dokumenter/brugere/` | Slutbrugerdokumentation |
| 🤝 `dokumenter/bidragydere/` | Bidragyderskabeloner og vejledning |
| 🏗️ `docs/architecture/` | Køreplan, ADR'er og teknisk analyse |
| 🔧 `docs/operations/` | Operationelle runbooks |
| 📋 `docs/specs/` | Runtime, protokol og artefaktkontrakter |
| 📚 `docs/CATALOG.md` | Genereret færdighedskatalog |
| 📦 `dist/` | Genererede maskinlæsbare artefakter |
| 🧠 `pakker/katalog-kerne/` | Delt katalog runtime |
| 🌐 `pakker/server-api/` | Skrivebeskyttet HTTP API |
| 🔌 `pakker/server-mcp/` | MCP-server og lokal sidevogn |
| 🤖 `pakker/server-a2a/` | A2A-server og opgavekørsel |
| 🖥️ `tools/bin/` | CLI-indgangspunkter |
| 📚 `tools/lib/` | Installatør og UI hjælpere |
| ⚙️ `værktøjer/scripts/` | Validering, generering, verifikation og test |---

## 🧪 Release Validation

```bash
npm run smoke
```

Røgløbet bekræfter:

- ✅ færdighedsvalidering og metadatagenerering
- ✅ værktøj til taksonomi-rekategorisering
- ✅ katalog artefaktgenerering
- ✅ genereret katalogmarkdown
- ✅ arkivgenerering og verifikation
- ✅ automatiseret testsuite
- ✅ `npm pack --dry-run`
- ✅ API-opstart og sundhed
- ✅ MCP-start i 'stdio', 'stream' og 'sse'
- ✅ A2A boot, polling, SSE streaming, annullering og push-config livscyklus