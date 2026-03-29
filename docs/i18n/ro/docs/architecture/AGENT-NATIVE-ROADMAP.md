# 🗺️ Agent-Native Roadmap (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Planul de evoluție a arhitecturii pentru Omni Skills: de la depozitul primul instalator la timpul de execuție a catalogului partajat care alimentează CLI, API, MCP și A2A fără a duplica logica.**---

## 📊 Current Platform Areas

| Faza | Nume | Stare |
|:------|:-----|:-------|
| 1️⃣ | Contracte și artefacte | ✅ Actual |
| 2️⃣ | API Catalog Read-Only | ✅ Actual |
| 3️⃣ | MCP Discovery Surface | ✅ Actual |
| 4️⃣ | Instalare locală și configurare Surface | ✅ Actual |
| 5️⃣ | Orchestrație A2A | ✅ Actual |### ✅ What Exists Today

- artefacte de catalog care pot fi citite de mașină în `dist/`
- API HTTP numai pentru citire cu acoperire a punctelor finale pentru căutare, pachete, comparare, planificare a instalării și descărcări
- Server MCP cu `stdio`, HTTP transmisibil în flux și transporturi SSE
- sidecar local cu scrieri permise și fluxuri `config-mcp`
- 7 clienți capabili de instalare, 16 clienți capabili de configurare, 33 ținte de configurare MCP și 19 profiluri de configurare
- specializare mai profundă a pachetului în `full-stack`, `security`, `devops` și `ai-engineer` prin `auth-flows`, `threat-modeling`, `release-engineering` și `context-engineering`
- arhive pe abilitate (`zip`, `tar.gz`) cu sume de control SHA-256 și semnături detașate pe etichetele de lansare
- Linia de referință pentru guvernanța API: autentificare purtător/cheie API, autentificare în timp de execuție admin, limitare a ratei, jurnal de audit, liste de permisiuni CORS/IP, proxy de încredere, mod de întreținere și ID-uri de solicitare
- Runtime A2A cu ciclu de viață al sarcinilor, durabilitate JSON/SQLite, repornire reluare, streaming SSE, anulare, notificări push, executor de proces opțional și coordonare închiriată opt-in### 🔭 Future Expansion Areas

Foaia de parcurs de bază descrie acum domeniul de aplicare actual al platformei. Elementele rămase sunt zone de extindere viitoare, nu goluri fundamentale:

- numai adăugări MCP extrem de selective din acest moment înainte și numai acolo unde documentele publice oficiale fac posibil un redactor sigur
- pachete de referințe mai profunde și mai multe scoruri semantice, astfel încât clasificatorul continuă să separe abilitățile excepționale de cele pur și simplu șlefuite
- guvernanță găzduită de întreprindere dincolo de linia de bază actuală în proces, dacă proiectul necesită ulterior integrare gateway sau IdP
- specializare mai profundă în noile piste „design”, „instrumente”, „data-ai” și „învățare automată” nou activate
- a continuat operaționalizarea în jurul amplificatorului privat, păstrând în același timp modelul oficial de operare: OmniRouter fixat la `cx/gpt-5.4`, cloud găzduit în preflight `simulat` sau degradat și `live` de încredere pe LAN sau execuție auto-găzduită
- lansarea continuă și întărirea fluxului de lucru doar ca lucru de calitate a serviciului, nu ca bază de platformă lipsă## Future Catalog Expansion Track

Primele două valuri de extindere a categoriei publice sunt acum aterizate:

- `design` → `design-systems-ops`, `accessibility-audit`, `design-token-governance`
- `instrumente` → `mcp-server-authoring`
- `data-ai` → `data-contracts`
- `învățare automată` → `servire model`

Următorul pas recomandat nu mai este activarea categoriei de dragul ei. Este de a aprofunda aceste piste native de cod nou active, astfel încât să se simtă ca suprafețe durabile de produs, mai degrabă decât puncte de sprijin cu o singură abilitate.

Direcția recomandată:

1. aprofundarea „proiectării” cu mai multe fluxuri de lucru operaționale ale sistemului de proiectare
2. aprofundarea „instrumentelor” cu abilități de autor și orientate spre plugin
3. aprofundarea `data-ai` cu abilități de implementare-în primul rând și instrumentare
4. aprofundarea „învățare automată” cu abilități de servire, instruire și evaluare

Categoriile au fost amânate în mod intenționat, cu excepția cazului în care apar propuneri puternice de cod nativ:

- `afacere`
- `conținut-media`

Istoricul expansiunii este acum urmărit în:

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Menține fluxul de lucru actual `npx omni-skills`
- ✅ Introduceți o sursă de adevăr care poate fi citită de mașină pentru abilități
- ✅ Sprijină descoperirea, recomandarea și planificarea instalării de către agenți
- ✅ Separați problemele legate de catalogul de la distanță de scrierile din sistemul de fișiere local
- ✅ Reutilizați aceleași metadate în CLI, API, MCP și A2A---

## 🚫 Non-Goals

- ❌ Instalare la distanță pe mașina utilizatorului de pe un server găzduit
- ❌ Înlocuiți `SKILL.md` ca format de autor canonic
- ❌ Solicitați colaboratorilor să scrie manifeste de mână
- ❌ Transformați proiectul într-o platformă de coadă găzduită în mod implicit---

## 🏗️ Target Architecture

Un**nucleu de catalog**cu trei suprafețe de protocol:

| Suprafata | Cel mai bun pentru | Modul |
|:--------|:---------|:-----|
| 🌐**REST API**| Acces la registru, integrări UI, consumatori terți | Numai citire |
| 🔌**MCP**| Descoperirea agentului, previzualizările instalării, scrierea config., rețete client | Numai citire + scrieri locale |
| 🤖**A2A**| Orchestrare de la agent la agent și transfer al planului de instalare | Ciclul de viață al sarcinii cu durabilitate locală simplă-întâi |### ⚙️ Core Principle

>**Toate protocoalele consumă aceeași familie de artefacte generată.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Manifestul rămâne contractul comun. Arhivele sunt artefacte de distribuție stratificate peste acel contract, nu un înlocuitor al acestuia.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Folosit de serverele API găzduite și MCP la distanță.

| ✅ Permis | ❌ Nu este permis |
|:------------|:----------------|
| Abilități de căutare | Scrieți în sistemul de fișiere al apelantului |
| Preluare manifeste | Mutați configurația clientului local |
| Comparați abilitățile | Deduceți starea arbitrară a mașinii |
| Recomanda pachete | — |
| Creați planuri de instalare | — |### 2️⃣ Local Installer Mode

Folosit de CLI și sidecar-ul MCP.

| ✅ Permis |
|:------------|
| Detectați clienți locali AI |
| Inspectați abilitățile instalate |
| Previzualizează operațiunile fișierului |
| Instalați sau eliminați directoarele de abilități |
| Scrieți configurația MCP locală după previzualizare |

> 📌 Acesta rămâne singurul mod în care au loc scrierile reale ale sistemului de operare.---

## 📐 Protocol Split

### 🌐 REST API

Cel mai bun pentru acces la registru, căutare, comparare, descărcări cu versiuni și planificare a instalării.

**Punctele finale**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Cel mai bun pentru descoperirea bazată pe instrumente, recomandări prompte, previzualizări de instalare și configurarea MCP specifică clientului.

**Instrumente numai pentru citire**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Instrumente locale**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Cel mai bun pentru transferul de descoperire, fluxurile de lucru ale planului de instalare și executarea sarcinilor agentului reluabil.

**Operațiuni curente**: `descoperiți-aptitudini` · `recomand-stack` · `pregătiți-plan-instalare`---

## 🛡️ Security Model

| Principiul | Implementare |
|:----------|:---------------|
| 🔒 Serviciile găzduite sunt doar în citire | API și MCP la distanță nu scriu în sistemul de fișiere al apelantului |
| 📂 Scrierile rămân locale | Numai CLI și MCP sidecar |
| 👁️ Previzualizează înainte de a scrie | Setarea implicită pentru mutații locale |
| 🔑 Integritatea este explicită | Sume de control SHA-256 pentru artefactele generate |
| ✍️ Încrederea de eliberare este explicită | Semnături detașate aplicate pe etichetele de lansare |
| ⚠️ Riscul iese la suprafață | Metadatele de risc și securitate se propagă pe fiecare suprafață de rulare |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- arhitectura tinta documentata
- schema manifest definita
- metadate generate, catalog, manifeste, pachete și arhive### Phase 2: Catalog Service

- API HTTP numai pentru citire cu Express 5
- căutare, filtrare, căutare manifest, listare de pachete, comparare și descărcări
- Linia de bază pentru guvernanță găzduită bazată pe mediu### Phase 3: MCP Discovery

- integrare oficială `@modelcontextprotocol/sdk`
- `stdio`, HTTP transmisibil în flux și transporturi SSE
- instrumente, resurse și solicitări numai pentru citire susținute de catalogul partajat### Phase 4: Local Install and Config Surface

- sidecar local cu scrieri permise
- detecție pentru 7 clienți capabili de instalare
- scrierea configurațiilor pentru 16 clienți capabili de configurare pe 33 de ținte și 19 profiluri de configurare
- fluxuri ghidate `config-mcp` în CLI și shell-ul vizual
- suport stabil pentru Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose și Dev Containers### Phase 5: A2A Orchestration

- card de agent la `/.well-known/agent.json`
- `mesaj/trimitere`, `mesaj/flux`, `tasks/get`, `tasks/cancel`, `tasks/resubscribe` și metode de configurare push-notification
- Persistență JSON și SQLite cu recuperare la repornire
- executor de proces extern optional
- opt-in execuția închiriată între lucrători pentru SQLite și coordonare Redis avansată opțională
- setările implicite mai întâi simple păstrate pe memorie, JSON sau SQLite fără dependențe externe### Current Enhancer Operating Decision

Modelul „live” acceptat de amplificatorul privat este acum explicit:

- automatizarea PR găzduită rulează o încercare „în direct” preflight-gated
- dacă gateway-ul public OmniRoute este blocat sau instabil, PR-ul este marcat „blocat” cu un motiv orientat către operator, în loc să eșueze opac
- calea `live` canonică de încredere rămâne LAN sau execuția serviciului local
- rulează GitHub privat programat rămâne `mock` în mod implicit, cu excepția cazului în care un operator solicită în mod explicit `live`---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Decizie**: păstrați manifestul ca contract partajat și păstrați arhivele semnate pentru fiecare abilitate ca suprafață de distribuție.

**De ce**:
- CLI, API, MCP și A2A consumă deja forma normalizată a manifestului
- arhivele sunt ideale pentru descărcare și verificare, dar slabe ca singurul contract de descoperire
- acest lucru menține crearea simplă și distribuția verificabilă### 2. Private or Premium Catalogs

**Decizie**: reutilizați același format de manifest și catalog, precum și autentificarea sau politica de nivel extern.

**De ce**:
- evită bifurcarea modelului de date
- se potrivește cu abordarea actuală de guvernare API/MCP
- rămâne compatibil cu direcția ecosistemului MCP în jurul acreditărilor clientului OAuth și a autorizației gestionate de întreprindere### 3. Client Writer Strategy

**Decizie**: converge spre un set mic de familii de export canonice și păstrează scriitori la comandă numai acolo unde documentele clienților oficiale o cer.

**Familii canonice acum utilizate**:
- JSON `mcpServers`
- `servere` JSON
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**De ce**:
- menține implementarea menținabilă
- acceptă în continuare nevoi specifice clientului, cum ar fi setările Claude, Continue YAML, Zed `context_servers` și Codex TOML
- evită inventarea unor scriitori fragili pentru clienții fără documente de configurare publice stabile---

## 🌍 Research Notes Behind Those Decisions

Deciziile actuale au fost verificate în raport cu documentele oficiale ale ecosistemului:

- ecosistemul MCP documentează acum extensii opționale, cum ar fi acreditările clientului OAuth și autorizarea gestionată de întreprindere, care acceptă externalizarea auth găzduită în loc să forkeze formatul de catalog
- OpenAI documentează un server MCP de documente publice și modele de configurare Codex MCP care se aliniază cu manifestul partajat plus strategia client-writer
- VS Code documentează suport MCP de primă clasă și un ghid de extensie, care întărește menținerea scriitorului său dedicat bazat pe „servere”
- JetBrains AI Assistant documentează configurarea MCP prin intermediul UX al produsului, mai degrabă decât printr-un contract de fișiere multiplatformă stabil, care acceptă păstrarea acestuia în teritoriu manual/fragment pentru moment---

## 🔮 Longer-Term Decision Points

Doar câteva întrebări strategice rămân cu adevărat deschise:

1. Dacă orice client dincolo de matricea actuală eliberează cu adevărat barajul pentru scriere de primă clasă sau dacă produsele rămase ar trebui să rămână manuale/doar fragmente
2. Când, dacă este vreodată, guvernanța găzduită ar trebui să se mute în spatele unui gateway extern sau al unui IdP al întreprinderii în loc de linia de bază actuală în proces?
3. Cât de departe ar trebui să meargă autorul în evaluarea profunzimii pachetului de referință și a calității operaționale înainte ca acesta să devină prea obstinat pentru contribuitori?