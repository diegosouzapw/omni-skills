# 🗺️ Agent-Native Roadmap (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Plán evolúcie architektúry pre Omni Skills: od inštalačného úložiska po zdieľaný katalógový runtime napájajúci CLI, API, MCP a A2A bez duplikovania logiky.**---

## 📊 Current Platform Areas

| Fáza | Meno | Stav |
|:------|:-----|:-------|
| 1️⃣ | Zmluvy a artefakty | ✅ Aktuálne |
| 2️⃣ | Rozhranie API katalógu iba na čítanie | ✅ Aktuálne |
| 3️⃣ | MCP Discovery Surface | ✅ Aktuálne |
| 4️⃣ | Lokálna inštalácia a konfigurácia povrchu | ✅ Aktuálne |
| 5️⃣ | Orchester A2A | ✅ Aktuálne |### ✅ What Exists Today

- strojovo čitateľné artefakty katalógu v `dist/`
- HTTP API iba na čítanie s pokrytím koncových bodov pre vyhľadávanie, balíky, porovnávanie, plánovanie inštalácie a sťahovanie
- Server MCP s prenosom `stdio`, streamovateľným HTTP a SSE
- lokálny postranný vozík s povolenými zápismi a tokmi `config-mcp`
- 7 klientov s možnosťou inštalácie, 16 klientov s možnosťou konfigurácie, 33 cieľov konfigurácie MCP a 19 konfiguračných profilov
– hlbšia špecializácia balíkov v rámci „úplného zásobníka“, „zabezpečenia“, „devops“ a „ai-engineer“ prostredníctvom „tokov overenia“, „modelovania hrozieb“, „inžinierstva uvoľnenia“ a „kontextového inžinierstva“
- archívy pre jednotlivé zručnosti (`zip`, `tar.gz`) s kontrolnými súčtami SHA-256 a oddelenými podpismi na značkách vydania
- Základná úroveň riadenia API: overenie nosiča/kľúča API, overenie za behu správcu, obmedzenie rýchlosti, protokolovanie auditu, zoznamy povolených CORS/IP, dôveryhodný proxy, režim údržby a ID žiadostí
- Runtime A2A so životným cyklom úlohy, trvanlivosťou JSON/SQLite, obnovením reštartu, streamovaním SSE, zrušením, upozorneniami push, voliteľným spúšťačom procesov a voliteľnou prenajatou koordináciou### 🔭 Future Expansion Areas

Hlavná cestovná mapa teraz popisuje súčasný rozsah platformy. Zvyšné položky sú oblasti budúceho rozšírenia, nie základné medzery:

- od tohto bodu len vysoko selektívne pridania MCP a len tam, kde oficiálne verejné dokumenty umožňujú bezpečné zapisovanie
- hlbšie referenčné balíky a viac sémantického bodovania, takže klasifikátor neustále oddeľuje výnimočné zručnosti od iba vylepšených
- podnikové riadenie nad rámec aktuálnej základnej línie procesu, ak projekt neskôr potrebuje integráciu brány alebo IdP
- hlbšia špecializácia v rámci novo aktivovaných stôp `design`, `tools`, `data-ai` a `machine-learning'
- pokračovanie v prevádzke okolo súkromného vylepšenia pri zachovaní jeho formálneho prevádzkového modelu: OmniRouter pripnutý na `cx/gpt-5.4`, hostovaný cloud v `simokovom` alebo zníženom preflighte a spoľahlivé `live` na LAN alebo samohostené spustenie
- pokračujúce uvoľňovanie a upevňovanie pracovného toku len ako práca na kvalite služieb, nie ako chýbajúci základ platformy## Future Catalog Expansion Track

Prvé dve vlny rozšírenia verejnej kategórie sú teraz vysadené:

- `design` → `design-systems-ops`, `accessibility-audit`, `design-token-governance`
- `tools` → `mcp-server-authoring`
- `data-ai` → `data-contracts`
- `strojové učenie` → `modelovanie`

Ďalším odporúčaným krokom už nie je aktivácia kategórie pre vlastnú potrebu. Ide o prehĺbenie týchto novo aktívnych kódovo natívnych stôp, aby sa cítili ako trvanlivé povrchy produktov a nie ako opory pre jednu zručnosť.

Odporúčaný smer:

1. prehĺbiť „dizajn“ s operatívnejšími pracovnými postupmi návrhového systému
2. prehĺbiť `nástroje` s tvorbou a zručnosťami orientovanými na pluginy
3. prehĺbiť `data-ai` s implementáciou-prvým potrubím a prístrojovými zručnosťami
4. prehĺbiť „strojové učenie“ pomocou zručností obsluhy, školenia a hodnotenia

Kategórie sú zámerne odložené, pokiaľ sa neobjavia silné kódové návrhy:

- "podnikanie".
- „obsahové médiá“.

História expanzie sa teraz sleduje v:

- [../tasks/TASK-07-KATALÓG-ŠPECIALIZÁCIA-A-KATEGÓRIA-EXPANZIA.md](../tasks/TASK-07-KATALÓG-ŠPECIALIZÁCIA-A-KATEGÓRIA-EXPANZIA.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Udržujte aktuálny pracovný postup `npx omni-skills`
- ✅ Predstavte strojovo čitateľný zdroj pravdy pre zručnosti
- ✅ Podpora zisťovania, odporúčaní a plánovania inštalácie agentmi
- ✅ Oddeľte obavy vzdialeného katalógu od zápisov do lokálneho súborového systému
- ✅ Opätovne použite rovnaké metadáta v CLI, API, MCP a A2A---

## 🚫 Non-Goals

- ❌ Vzdialená inštalácia na používateľskom počítači z hosťovaného servera
- ❌ Nahraďte `SKILL.md` ako kanonický formát na tvorbu obsahu
- ❌ Požadovať od prispievateľov, aby písali manifesty ručne
- ❌ V predvolenom nastavení premeňte projekt na ťažkú hosťovanú frontovú platformu---

## 🏗️ Target Architecture

Jedno**katalógové jadro**s tromi protokolovými povrchmi:

| Povrch | Najlepšie pre | Režim |
|:--------|:---------|:-----|
| 🌐**REST API**| Prístup k registrom, integrácia používateľského rozhrania, spotrebitelia tretích strán | Len na čítanie |
| 🔌**MCP**| Zisťovanie agentov, ukážky inštalácie, písanie konfigurácií, recepty klientov | Iba na čítanie + lokálne zápisy |
| 🤖**A2A**| Orchesterizácia medzi agentmi a odovzdanie plánu inštalácie | Životný cyklus úlohy s jednoduchou lokálnou trvanlivosťou |### ⚙️ Core Principle

>**Všetky protokoly využívajú rovnakú vygenerovanú rodinu artefaktov.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Manifest zostáva zdieľanou zmluvou. Archívy sú distribučné artefakty navrstvené na tejto zmluve, nie jej náhrada.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Používajú ho hosťované API a vzdialené servery MCP.

| ✅ Povolené | ❌ Nepovolené |
|:-----------|:---------------|
| Vyhľadávacie zručnosti | Napíšte do súborového systému volajúceho |
| Načítať manifesty | Zmeňte konfiguráciu lokálneho klienta |
| Porovnať zručnosti | Vyvodiť ľubovoľný stav stroja |
| Odporučiť balíky | — |
| Zostavte inštalačné plány | — |### 2️⃣ Local Installer Mode

Používa ho CLI a postranný vozík MCP.

| ✅ Povolené |
|:------------|
| Zistiť miestnych klientov AI |
| Skontrolujte nainštalované zručnosti |
| Ukážka operácií so súbormi |
| Nainštalujte alebo odstráňte adresáre zručností |
| Po náhľade napíšte lokálnu konfiguráciu MCP |

> 📌 Toto zostáva jediný režim, v ktorom dochádza k skutočným zápisom OS.---

## 📐 Protocol Split

### 🌐 REST API

Najlepšie pre prístup k registrom, vyhľadávanie, porovnávanie, sťahovanie verzií a plánovanie inštalácie.

**Koncové body**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Najlepšie pre zisťovanie pomocou nástrojov, odporúčané odporúčania, ukážky inštalácie a nastavenie MCP špecifické pre klienta.

**Nástroje iba na čítanie**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Miestne nástroje**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Najlepšie na odovzdanie zisťovania, pracovné postupy podľa plánu inštalácie a obnovenie úloh agenta.

**Aktuálne operácie**: `discover-skills` · `recommend-stack` · `prepare-install-plan`---

## 🛡️ Security Model

| Princíp | Implementácia |
|:----------|:---------------|
| 🔒 Hostované služby sú len na čítanie | API a vzdialený MCP nezapisujú do súborového systému volajúceho |
| 📂 Píše zostať miestne | Iba postranný vozík CLI a MCP |
| 👁️ Ukážka pred napísaním | Predvolené nastavenie suchého chodu pri lokálnych mutáciách |
| 🔑 Bezúhonnosť je jasná | Kontrolné súčty SHA-256 pre generované artefakty |
| ✍️ Dôvera k uvoľneniu je explicitná | Oddelené podpisy vynútené na značkách uvoľnenia |
| ⚠️ Riziko je na povrch | Metaúdaje o rizikách a zabezpečení sa šíria na každý povrch runtime |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- zdokumentovaná cieľová architektúra
- definovaná schéma manifestu
- generované metadáta, katalóg, manifesty, balíky a archívy### Phase 2: Catalog Service

- HTTP API iba na čítanie s Express 5
- vyhľadávanie, filtrovanie, vyhľadávanie manifestov, zoznam balíkov, porovnávanie a sťahovanie
- základná línia hostiteľskej správy riadená env### Phase 3: MCP Discovery

- oficiálna integrácia `@modelcontextprotocol/sdk`
- `stdio`, streamovateľné prenosy HTTP a SSE
- nástroje, zdroje a výzvy len na čítanie podporované zdieľaným katalógom### Phase 4: Local Install and Config Surface

- miestny postranný vozík s povolenými zápismi
- detekcia pre 7 klientov s možnosťou inštalácie
- písanie konfigurácií pre 16 klientov schopných konfigurácie v 33 cieľoch a 19 konfiguračných profiloch
- riadené toky `config-mcp` v CLI a vizuálnom prostredí
- stabilná podpora pre kontajnery Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose a Dev Containers### Phase 5: A2A Orchestration

- karta agenta na adrese `/.well-known/agent.json`
- metódy konfigurácie `správa/odoslať`, `správa/stream`, `tasks/get`, `tasks/cancel`, `tasks/resubscribe` a push-notification
- Trvalosť JSON a SQLite s obnovením po reštarte
- voliteľný externý spúšťač procesov
- voliteľné prenajaté vykonávanie medzi pracovníkmi pre SQLite a voliteľná pokročilá koordinácia Redis
- jednoduché predvolené hodnoty uložené v pamäti, JSON alebo SQLite bez externých závislostí### Current Enhancer Operating Decision

Podporovaný „živý“ model súkromného vylepšovača je teraz explicitný:

- hostovaná PR automatizácia spustí predflight-gated "live" pokus
- ak je verejná brána OmniRoute zablokovaná alebo nestabilná, PR sa označí ako „zablokované“ s dôvodom pre operátora namiesto nepriehľadného zlyhania
- kanonická spoľahlivá `živá` cesta zostáva vykonávaním LAN alebo lokálnej služby
- plánované súkromné spúšťanie GitHubu zostanú predvolene `mock`, pokiaľ operátor výslovne nepožiada `live`---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Rozhodnutie**: ponechajte manifest ako zdieľanú zmluvu a ponechajte si podpísané archívy jednotlivých zručností ako distribučný povrch.

**Prečo**:
- CLI, API, MCP a A2A už používajú normalizovaný tvar manifestu
- archívy sú ideálne na sťahovanie a overovanie, ale sú slabé ako jediná zmluva o objavení
- vďaka tomu je tvorba jednoduchá a distribúcia je overiteľná### 2. Private or Premium Catalogs

**Rozhodnutie**: Opätovne použite rovnaký formát manifestu a katalógu a externé overenie alebo pravidlá vrstvy.

**Prečo**:
- zabraňuje rozvetveniu dátového modelu
- zodpovedá súčasnému prístupu riadenia API/MCP
- zostáva kompatibilný so smerovaním ekosystému MCP okolo poverení klienta OAuth a autorizácie spravovanej podnikom### 3. Client Writer Strategy

**Rozhodnutie**: konvergujte na malej skupine kanonických exportných rodín a ponechajte si na mieru šitých spisovateľov len tam, kde to vyžadujú oficiálne klientske dokumenty.

**V súčasnosti sa používajú kanonické rodiny**:
- JSON `mcpServers`
- „servery“ JSON
- JSON `kontextové_servery`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**Prečo**:
- udržiava implementáciu udržiavateľnú
- stále podporuje špecifické potreby klienta, ako sú nastavenia Claude, Continue YAML, Zed `context_servers` a Codex TOML
- vyhýba sa vymýšľaniu krehkých spisovateľov pre klientov bez stabilných verejných konfiguračných dokumentov---

## 🌍 Research Notes Behind Those Decisions

Súčasné rozhodnutia boli porovnané s oficiálnymi dokumentmi o ekosystéme:

- Ekosystém MCP teraz dokumentuje voliteľné rozšírenia, ako sú napríklad poverenia klienta OAuth a podnikom spravovaná autorizácia, ktorá podporuje externalizáciu hosteného overenia namiesto rozdelenia formátu katalógu
- OpenAI dokumentuje verejný MCP server a Codex MCP konfiguračné vzory, ktoré sú v súlade so zdieľaným manifestom a stratégiou klient-zapisovateľ
- VS Code dokumentuje prvotriednu podporu MCP a sprievodcu rozšírením, ktorý posilňuje údržbu vyhradeného zapisovača založeného na serveroch
- JetBrains AI Assistant dokumentuje nastavenie MCP prostredníctvom používateľského rozhrania produktu namiesto stabilnej zmluvy o súboroch naprieč platformami, čo zatiaľ podporuje jeho uchovanie na území s manuálom/úryvkami---

## 🔮 Longer-Term Decision Points

Skutočne otvorených zostáva len niekoľko strategických otázok:

1. Či niektorý klient mimo aktuálnej matice skutočne prekonáva latku pre prvotriedne písanie, alebo či zostávajúce produkty by mali zostať iba manuálne/úryvky
2. Kedy, ak vôbec niekedy, by sa malo hostiteľské riadenie presunúť za externú bránu alebo podnikového IdP namiesto súčasnej základnej línie v procese?
3. Ako ďaleko by mal hodnotiteľ zájsť pri hodnotení hĺbky referenčného balíka a prevádzkovej kvality, kým nebude pre prispievateľov príliš mienkotvorný?