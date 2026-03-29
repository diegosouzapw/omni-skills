# 📖 Omni Skills — Documentation Hub (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Referința centrală pentru utilizarea, operarea, extinderea și înțelegerea actualei platforme Omni Skills.**

Fișierele comunității standard trăiesc în rădăcina depozitului:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_D_CONDUCT.md)---

## 📊 Status Snapshot

| Zona | Stat | Detalii |
|:-----|:------|:--------|
| 🏗️**Runtime**| ✅ Actual | CLI unificat, Ink Visual Shell, API, MCP și A2A sunt livrate din același pachet |
| 📦**Catalog**| 📌 32 de aptitudini | 32 de abilități „L3” publicate în 15 categorii active de catalog și 7 pachete susținute complet |
| 🎯**Instalează**| ✅ Actual | Instalare TTY ghidată, `--skill` și `--bundle` selective, suport pentru căi personalizate și instalare bazată pe descoperire |
| 🌐**API**| ✅ Actual | API de registru numai pentru citire cu autentificare, durată de administrare, limitare a ratei, liste de permise CORS/IP, mod de întreținere și descărcări |
| 🔌**MCP**| ✅ Actual | `stdio` · `stream` · `sse`, modul sidecar local, 7 clienți capabili de instalare, 16 clienți capabili de configurare, 33 ținte de configurare și 19 profiluri de configurare |
| 🤖**A2A**| ✅ Actual | Simplu-primul timp de execuție local cu durabilitate JSON/SQLite, repornire reluare, streaming SSE, anulare, mod executor extern și coordonare opțională închiriată atunci când sunt activate în mod explicit |
| 🛡️**Securitate**| ✅ Actual | Scaner static, ClamAV/VirusTotal opțional, artefacte de lansare semnate, sume de verificare arhivate și verificare a timpului de lansare |
| 📋**Clasificare**| ✅ Actual | Taxonomie canonică, maturitate, răspândirea calității semantice, răspândirea celor mai bune practici și scorul de securitate |
| 📁**Arhive**| ✅ Actual | Arhivele `.zip` și `.tar.gz` per abilitate cu manifeste de sumă de control SHA-256 |
| 🔐**Semnează**| ✅ Actual | Semnături detașate aplicate pe etichetele de eliberare; fluxurile de instalare locale consumă aceleași metadate manifest și sumă de control |
| 🧬**Debitul de admisie**| ✅ Actual | Abilitățile native aterizează sub `skills/`; Automatizarea PR le revizuiește și propune derivate Omni-enhanced sub `skills_omni/` |## 🔭 Current Project State

Pista de fundație trăiește acum în starea activă a proiectului, iar al doilea val de extindere a categoriei este deja în catalog. Proiectul ar trebui să fie citit acum ca o bază de lucru cu piste opționale de extindere viitoare:

- public `v0.1.2` și privat `v0.0.1` sunt nivelul de lansare stabil actual
- catalogul acoperă acum 32 de abilități publicate în 15 categorii active și 7 pachete susținute complet
- aportul nativ și ieșirea `skills_omni/` organizată sunt ambele operaționale, inclusiv aportul nativ multilingv și ieșirea organizată numai în limba engleză
- suprafețele de protocol, automatizarea lansării și automatizarea îmbunătățirii private sunt în serviciu, nu în bootstrap

Extinderea viitoare rămâne deliberată:

- aprofundați `design`, `instrumente`, `data-ai` și `machine-learning`
- evitați redeschiderea categoriilor latente non-native de cod până când melodiile native de cod actuale au o adâncime mai mare
- păstrați intactă calea de evaluare a nivelului de calitate și a îmbunătățitorului în timp ce faceți acest lucru

Acest plan este acum împărțit în:

- primul val de extindere finalizat în [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- al doilea val de expansiune finalizat în [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- și acumularea anticipată în [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Aceste întrebări de arhitectură nu mai sunt „deschise” în practică și sunt acum tratate ca decizii de proiect:

1.**Distribuția rămâne în primul rând manifest, plus arhivele semnate**
   Manifestul care poate fi citit de mașină rămâne contractul consumat de CLI, API, MCP și A2A. Arhivele semnate pentru fiecare abilitate sunt suprafața de descărcare și lansare stratificată deasupra contractului respectiv.
2.**Cataloagele private sau premium ar trebui să refolosească aceeași schemă manifest**
   Autentificarea și politica ar trebui să fie stratificate în exterior, nu prin bifurcarea formei manifest sau catalog.
3.**Configurația MCP ar trebui să convergă pe câteva familii de export canonice**
   Omni Skills standardizează acum în jurul JSON `mcpServers`, JSON `server`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` și TOML `[mcp_servers]`, păstrând în același timp scriitorii personalizați numai acolo unde documentele oficiale ale clientului necesită o structură diferită.

Aceste decizii se aliniază cu documentația oficială actuală a MCP și a clientului, inclusiv:

- Registrul MCP oficial și ghidul de asistență pentru extensii la `modelcontextprotocol.io`
- Documente OpenAI Docs MCP și Codex CLI la `developers.openai.com` și `platform.openai.com`
- Extensia VS Code MCP și documente despre produs la `code.visualstudio.com`
- documente client pentru Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman și JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Ce vei învăța |
|:----|:------------------|
| 📘 [Getting Started](users/GETTING-STARTED.md) | Instalează, verifică și invocă prima ta abilitate |
| 🧭 [Ghid de utilizare CLI](utilizatori/CLI-USER-GUIDE.md) | Referință de comandă completă și modele de utilizare CLI din lumea reală |
| 📗 [Ghid de utilizare](users/USAGE.md) | Comenzi CLI, moduri de instalare, comenzi de rulare și fluxuri de configurare MCP |
| 📦 [Pachete](utilizatori/BUNDLES.md) | Pachetele organizate și disponibilitatea lor curentă |
| 📚 [Catalog](CATALOG.md) | Catalog autogenerat de competențe publicate |
| 🔧 [System Runbook](operațiuni/RUNBOOK.md) | Creați, serviți, asigurați și depanați timpul de execuție |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Ce vei învăța |
|:----|:------------------|
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Evoluția arhitecturii, deciziile închise și zonele de expansiune rămase |
| 🧭 [Foaie de parcurs CLI UX](architecture/CLI-UX-ROADMAP.md) | Planul istoric și forma actuală a CLI-ului ghidat și vizual |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Monorepo de bază și decizie de execuție partajată |
| 🔬 [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md) | Compoziția curentă a timpului de execuție, numărătoarea și limitele sistemului |
| 🌐 [Catalog API Surface](specs/CATALOG-API.md) | Puncte finale HTTP, filtrare, guvernare și descărcări |
| 🧩 [CLI Guided Installer](specificații/CLI-GUIDED-INSTALLER.md) | Contract comportamental pentru instalatorul ghidat |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Înveliș vizual cu cerneală, model de stare și centru de servicii |
| 🔌 [Local MCP Sidecar](specificații/LOCAL-MCP-SIDECAR.md) | Instrumente care știe sistemul de fișiere, modelul listei de permise și scrierea configurațiilor |
| 🧭 [Client Support Matrix](specificații/CLIENT-SUPPORT-MATRIX.md) | Clienți CLI și IDE acceptați, scriitori, ținte manuale și referințe surse |
| 📊 [Clasificarea aptitudinilor](specs/CLASIFICARE-ABILITATE.md) | Taxonomie, euristici de punctare și artefacte de metadate |
| 🛡️ [Validare de securitate](specs/SECURITY-VALIDATION.md) | Scanere, arhive, semnături și verificarea eliberării |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Format manifest citibil de mașină și contract de compatibilitate |### 🤝 If You Want to **Contribute**

| Doc | Ce vei învăța |
|:----|:------------------|
| 📝 [Ghid de contribuție](../CONTRIBUTING.md) | Fluxul de lucru repo și așteptările solicitărilor de extragere |
| 🧾 [Skill PR Workflow](contributori/SKILL-PR-WORKFLOW.md) | Aportul nativ, procesarea automată a amplificatorului, publicarea `skills_omni/` și așteptările recenzenților |
| 📄 [Șablon de aptitudini](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` cu frontmateria și structura actuală |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Structura și așteptările de calitate pentru o abilitate |
| ✅ [Bara de calitate](contributors/QALITY-BAR.md) | Criterii de acceptare pentru depozit |
| 🏆 [High-Score Playbook](colaboratori/HIGH-SCORE-PLAYBOOK.md) | Ceea ce determină o maturitate ridicată, calitate, cele mai bune practici și scoruri de securitate |
| 📋 [Tasks Backlog](tasks/README.md) | Întârziere detaliată de implementare pentru lucrările publice și private rămase |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Binarul „omni-skills” publicat este punctul de intrare public unificat.```bash
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

Pentru suprafața completă de comandă a utilizatorului final, utilizați [CLI User Guide](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Conducta de compilare emite fișierele care pot fi citite de mașină care conduc fiecare suprafață de rulare:

| Artefact | Scop |
|:---------|:--------|
| `metadata.json` | Validarea la nivelul depozitului și rezumatul scorului |
| `skills_index.json` | Indicele de calificare normalizat repo-local |
| `dist/catalog.json` | Catalog publicat pentru căutare și listare |
| `dist/bundles.json` | Definiții pachete cu disponibilitate |
| `dist/manifests/<skill>.json` | Manifest citibil de mașină pentru fiecare abilitate |
| `dist/archives/<skill>.zip` | Arhiva de aptitudini (zip) |
| `dist/archives/<skill>.tar.gz` | Arhiva de aptitudini (tarball) |
| `dist/archives/<skill>.checksums.txt` | Manifestul sumei de control SHA-256 |

`dist/` rămâne săvârșit intenționat. Aceste artefacte generate fac parte din contractul de instalare, API, MCP, A2A, fum și lansare.### 🌐 API

```bash
npx omni-skills api --port 3333
```

API de registru numai pentru citire pentru competențe, pachete, comparație, planificare a instalării și descărcări de artefacte.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Sidecarul local acceptă acum scrierea de configurare MCP de primă clasă pentru:

- Claude Code
- Cursor
- VS Code și Dev Containers
- Gemeni CLI
- Antigravitație
- Kiro
- Codex CLI
- Continuă
- Windsurf
- OpenCode
- Cline
- CLI GitHub Copilot
- Cod Kilo
- Zed
- Gâscă### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Ciclul de viață al sarcinilor, fluxul în flux, persistența, recuperarea repornirii și orchestrarea locală mai întâi simplă. Execuția închiriată partajată este disponibilă atunci când este activată în mod explicit; Redis rămâne o opțiune găzduită avansată, nu calea locală implicită.---

## 🗂️ Repository Map

| Calea | Scop |
|:-----|:--------|
| 📂 `skills/` | Abilități de autor canonic |
| 📖 `docs/users/` | Documentația utilizatorului final |
| 🤝 `docs/contributors/` | Șabloane și îndrumări pentru colaboratori |
| 🏗️ `docs/architecture/` | Foaia de parcurs, ADR-uri și analiză tehnică |
| 🔧 `docs/operations/` | Runbook-uri operaționale |
| 📋 `docs/specs/` | Contracte de execuție, protocol și artefact |
| 📚 `docs/CATALOG.md` | Catalog de competențe generat |
| 📦 `dist/` | Artefacte generate de citire automată |
| 🧠 `pachete/catalog-core/` | Timp de rulare a catalogului partajat |
| 🌐 `pachete/server-api/` | API HTTP numai pentru citire |
| 🔌 `pachete/server-mcp/` | Server MCP și sidecar local |
| 🤖 `pachete/server-a2a/` | Server A2A și timp de rulare a sarcinii |
| 🖥️ `tools/bin/` | Puncte de intrare CLI |
| 📚 `tools/lib/` | Instalator și asistență UI |
| ⚙️ `instrumente/scripturi/` | Validare, generare, verificare și teste |---

## 🧪 Release Validation

```bash
npm run smoke
```

Cursa de fum validează:

- ✅ validarea abilităților și generarea de metadate
- ✅ instrumente de recategorizare taxonomie
- ✅ generarea de artefacte de catalog
- ✅ reducere de catalog generată
- ✅ generarea și verificarea arhivei
- ✅ suită de teste automatizate
- ✅ `npm pack --dry-run`
- ✅ Boot și sănătate API
- ✅ Pornire MCP în `stdio`, `stream` și `sse`
- ✅ Pornire A2A, sondare, streaming SSE, anulare și ciclu de viață push-config