# 🔬 Codebase Deep Analysis (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Komplexná technická analýza súčasnej architektúry Omni Skills, runtime povrchov a zostavy.**
> Posledná analýza: 28.03.2026---

## 📊 Project Overview

| Atribút | Hodnota |
|:----------|:------|
|**Meno**| „všezručnosti“ |
|**Verzia balenia**| "0.1.3" |
|**Verzie schopností**| Podľa schopností a nezávisle od verzie balíka. Mnohé publikované zručnosti sú stále `0.0.1`, zatiaľ čo balík je `0.1.2`. |
|**Licencia**| MIT (kód) + CC BY 4.0 (obsah) |
|**NPM**| `npx omni-skills` |
|**Publikované zručnosti**| 32 |
|**Definované balíky**| 7, všetko plne podporované publikovanými zručnosťami |
|**Aktívne kategórie katalógu**| 15 aktívnych skupín z 18 kategórií kanonickej taxonómie |
|**Primárny runtime/zostava LOC uvedený nižšie**| 13 600+ |
|**Závislosti výroby**| 7 (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Aktuálna snímka klasifikácie na úrovni úložiska z `metadata.json`:

- priemerné skóre kvality: `96,3`
- priemerné skóre najlepších postupov: 98,7
- priemerné skóre bezpečnosti: `95,0`
- všetkých 32 publikovaných zručností je validovaných ako „L3“.

Aktuálny základ vydania:

- vydanie verejného úložiska: `v0.1.2`
- vydanie súkromného vylepšenia: `v0.0.1`
- automatizácia verejného a súkromného uvoľnenia sú aktívne a zelené---

## 🏗️ Architecture Overview

Úložisko sa riadi vzorom**pracovného priestoru monorepo**s jedným zdieľaným jadrom katalógu a viacerými prevádzkovými plochami.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

Dizajn je zámerne**riadený artefaktom**:

1. zručnosti sú vytvorené ako `SKILL.md` plus balíčky miestnej podpory
2. zostava ich validuje, klasifikuje, archivuje a normalizuje
3. vygenerované artefakty sa stanú kontraktom pre CLI, API, MCP a A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4 500+ LOC dokopy**— hlavné verejné rozhranie pre expertné aj riadené použitie.

| Príkaz | Funkcia |
|:--------|:---------|
| 🔎 `nájsť [dopyt]` | Fulltextové vyhľadávanie v katalógu s filtrami na základe skóre |
| 📦 `nainštalovať` | Riadená inštalácia alebo inštalácia založená na príznakoch do známych klientov alebo vlastných ciest |
| 🧾 `config-mcp` | Ukážka alebo zápis konfigurácie MCP s podporou klienta |
| 🔌 `mcp <doprava>` | Spustí MCP server v `stdio`, `stream` alebo `sse` |
| 🌐 `api` | Spustí katalógové API |
| 🤖 `a2a` | Spustí runtime A2A |
| 🧪 "dym" | Predletové overenie uvoľnenia |
| 🩺 "lekárka" | Lokálna diagnostika |
| 🖥️ `ui` | Ink vizuálny shell s inštaláciou, zisťovaním, konfiguráciou a servisným centrom |
| 🏷️ `prekategorizovať` | Kontrola posunu taxonómie a prepísanie |

CLI už nie je len inštalačný program. Je to nástroj verejnej prevádzky pre celú platformu.## 🧭 Future Expansion Direction

Verejná prevádzka už nie je blokovaná pri základných prácach a vlna druhej kategórie je už pristátá. Ďalšou užitočnou katalógovou prácou je hĺbka, nie viac naháňania podľa kategórií.

Novo aktivované skladby s natívnym kódom teraz v katalógu:

– „design“ prostredníctvom „design-systems-ops“, „accessibility-audit“ a „design-token-governance“
- `tools` cez `mcp-server-authoring`
- `data-ai` cez `data-contracts`
- „strojové učenie“ prostredníctvom „servírovania modelu“.

Odporúčaný ďalší smer:

1. prehĺbiť „dizajn“, „nástroje“, „data-ai“ a „strojové učenie“
2. ponechať „obchod“ a „obsah-médiá“ odložené, pokiaľ sa neobjaví jasne kódovo pôvodný návrh
3. zachovať súčasnú úroveň kvality namiesto opätovného otvorenia aktivačného tlaku kategórie

Táto vlna expanzie je teraz zaznamenaná v [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**– nainštaluje zručnosti do 7 asistentov schopných inštalácie.

| Vlajka | Cieľ | Predvolená cesta |
|:-----|:-------|:-------------|
| "--claude" | Claude Code | `~/.claude/skills` |
| "--kurzor" | Kurzor | `~/.kurzor/zručnosti` |
| "--gemini" | Gemini CLI | `~/.gemini/skills` |
| "--codex" | Codex CLI | `~/.codex/skills` |
| "--kiro" | Kiro | `~/.kiro/skills` |
| "--antigravitácia" | Antigravitácia | `~/.gemini/antigravity/skills` |
| "--opencode" | OpenCode | `<pracovný priestor>/.opencode/skills` |

Podporuje:

- inštalácie plnej knižnice
- selektívne inštalácie pomocou `--skill`
- spravované inštalácie podľa „--bundle“.
- riadené toky TTY a vizuálneho používateľského rozhrania
- vlastné cieľové cesty### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**– zdieľaná runtime vrstva pre CLI, API, MCP a A2A.

| export | Popis |
|:-------|:------------|
| 🔎 `vyhľadávacie schopnosti()` | Hľadajte pomocou váženého priraďovania textu a podpory filtrov |
| 📋 `zoznam zručností()` | Viacosové filtrovanie podľa kvality, osvedčených postupov, úrovne, zabezpečenia, rizika, nástroja a kategórie |
| 📌 `getSkill()` | Zjavné rozlíšenie plus obohatené verejné adresy URL |
| ⚖️ `porovnať zručnosti()` | Porovnanie vedľa seba |
| 💡 `odporúčameSkills()` | Odporúčanie zamerané na cieľ |
| 📦 `buildInstallPlan()` | Generovanie plánu inštalácie s upozorneniami a pokynmi pre klienta |
| 🗂️ `zoznamBundles()` | Zoznam vybraných balíkov s dostupnosťou |
| 📁 `zoznamArchív zručností()` | Archív a rozlíšenie podpisov |

Toto je skutočný jediný zdroj runtime pravdy po generácii.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— úplná implementácia MCP pomocou oficiálnej súpravy SDK.

**Doprava**

- "stdio".
- streamovateľný HTTP
- JJV

**Vždy dostupné nástroje iba na čítanie**

- „vyhľadávacie_zručnosti“.
- „získaj_zručnosť“.
- `porovnať_zručnosti`
- „odporúčať_zručnosti“.
- "preview_install".

**Nástroje miestneho režimu**

- `detect_clients`
- `zoznam_nainštalovaných_zručností`
- `zručnosti_inštalácie`
- `odstrániť_zručnosti`
- `configure_client_mcp`

Povrch MCP je zámerne rozdelený medzi:

- používanie katalógu na diaľku/len na čítanie
- miestne/zapisovateľné použitie postranného vozíka### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1 943 LOC**— vrstva MCP s orientáciou na súborový systém na detekciu klientov, správu zručností a zápis konfigurácie MCP.

Aktuálna praktická podpora:

-**7 klientov s možnosťou inštalácie**
-**16 klientov s možnosťou konfigurácie**
-**33 cieľov konfigurácie**
-**19 konfiguračných profilov**

Klienti s možnosťou inštalácie:

- Claude Code
- Kurzor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitácia
- OpenCode

Medzi klientov a ciele s možnosťou konfigurácie patria:

- Nastavenia Claude, Claude Desktop a konfigurácia projektu Claude
- Konfigurácia používateľa kurzora a pracovného priestoru
- Pracovný priestor VS Code, používateľ, zasvätení a konfigurácia Dev Container
- Nastavenia používateľa a pracovného priestoru Gemini
- Antigravitačná konfigurácia používateľa
- Používateľ Kiro, pracovný priestor a staršie cesty
- Konfigurácia Codex CLI TOML
- Konfigurácia používateľa a pracovného priestoru OpenCode
- Nastavenia Cline
- Používateľ a konfigurácia úložiska GitHub Copilot CLI
- Konfigurácia používateľa, projektu a pracovného priestoru v kilo
- Pokračovať v pracovnom priestore YAML
- Konfigurácia používateľa Windsurf
- Konfigurácia pracovného priestoru Zed
- Konfigurácia používateľa Goose

Postranný vozík je zámerne úprimný, pokiaľ ide o hranice:

- zapisuje iba do zoznamu povolených
- predvolene sa zobrazuje ukážka
- udržuje prvotriednych spisovateľov iba tam, kde oficiálne dokumenty odhaľujú stabilný formát
- nepredstiera, že každý produkt s podporou MCP je tiež cieľom inštalácie zručností### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC v kombinácii**— API registra len na čítanie plus middleware pre riadenie.

Dôležité koncové body:

- `/zdravie`
- `/openapi.json`
- `/admin/runtime`
- `/v1/skills`
- `/v1/skills/:id`
- `/v1/search`
- `/v1/porovnať`
- `/v1/bundles`
- `/v1/install/plan`
- `/v1/skills/:id/download/*`

Základná línia riadenia už bola implementovaná:

- autentifikácia tokenu nosiča
- Autentifikácia kľúčom API
- autorizácia tokenu správcu
- obmedzenie rýchlosti počas procesu
- ID žiadostí
- protokolovanie auditu
- CORS zoznamy povolených
- IP povolené zoznamy
- dôverovať proxy spracovanie
- udržiavací režim### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1 857 LOC kombinovaných v rámci hlavného servera, runtime a súborov koordinátora**— životný cyklus úlohy JSON-RPC 2.0 pre pracovné postupy medzi agentmi.

Podporované metódy:

- „správa/odoslanie“.
- „správa/stream“.
- „úlohy/dostať“.
- "úlohy/zrušiť".
- "úlohy/opätovné prihlásenie na odber".
- `tasks/pushNotificationConfig/*`

Aktuálne operácie:

- „objavovať zručnosti“.
- "odporúčame-zásobník".
- "plán prípravy na inštaláciu".

Model odolnosti a koordinácie:

- lokálna perzistencia pamäte, JSON alebo SQLite
- reštartovať pokračovať
- voliteľný externý spúšťač procesov
- koordinácia prenajatého frontu pre zdieľaných pracovníkov SQLite
- voliteľná koordinácia podporovaná Redis ako pokročilá hostovaná cesta

Kľúčovou architektonickou voľbou je tu**jednoduchá-prvá lokálna prevádzka**. Redis existuje ako rozšírená možnosť, ale predvolená cesta k produktu zostáva lokálna a nenáročná na závislosť.---

## ⚙️ Build Pipeline

| Scenár | Jazyk | Účel |
|:-------|:---------|:--------|
| 📊 `skill_metadata.py` | Python | Validácia, taxonómia, bodovanie a statické bezpečnostné skenovanie |
| ✅ `validate_skills.py` | Python | Generovanie metadát podľa zručnosti a pre súhrn koreňového adresára |
| 📑 `generate_index.py` | Python | Index zručností, zoznamy, archívy, podpisy a kontrolné súčty |
| 🏗️ `build_catalog.js` | Node.js | Konečné `dist/catalog.json` a `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Python | Kanonický audit a prepísanie kategórie |
| 🔍 `verify_archives.py` | Python | Archív a overenie podpisov |

Operatívne sú dôležité dva detaily:

1. `dist/` je súčasťou runtime kontraktu a je úmyselne zaviazaný
2. zostava je dostatočne deterministická, aby podporovala overenie CI a podpisovanie vydania---

## 📦 Published Catalog

Súčasný verejný katalóg zahŕňa 32 zručností:

-**Objavovanie a plánovanie**: `nájsť zručnosti`, `brainstorming`, `architektúra`, `ladenie`
-**Návrhové systémy a dostupnosť**: `design-systems-ops`, `accessibility-audit`
-**Dodanie produktu a celého balíka**: `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
–**Bezpečnosť**: „auditor zabezpečenia“, „skener zraniteľnosti“, „reakcia na incident“, „modelovanie hrozieb“
-**Pracovné postupy správcu OSS**: `documentation`, `changelog`, `create-pr`
–**DevOps**: „docker-expert“, „kubernetes“, „terraform“, „observability-review“, „release-engineering“
-**Inžinierstvo AI**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Všetkých sedem balíkov je plne zabezpečených:

- `základné` → `4/4`
- `plný zásobník` → `5/5`
- `dizajn` → `4/4`
- "zabezpečenie" → "4/4".
- `devops` → `5/5`
- `ai-inžinier` → `5/5`
- `oss-maintainer` → `4/4`

Aktuálny rozptyl skóre z vygenerovaného katalógu:

- skóre kvality: `94, 95, 96, 97, 100`
- skóre najlepších postupov: 98, 99, 100
- skóre bezpečnosti: všetky publikované zručnosti sú momentálne `95`

Reprezentatívny high-end:

- `omni-figma` → `kvalita 100`, `best_practices 100`
- `dostupnosť-audit` → `kvalita 99`, `best_practices 100`
- `toky autorizácie` → `kvalita 97`, `best_practices 99`
- `design-systems-ops` → `quality 97`, `best_practices 99`
– „inžinierstvo vydávania“ → „kvalita 97“, „najlepšie postupy 99“
- `modelovanie hrozieb` → `kvalita 97`, `best_practices 99`
- `kontextové inžinierstvo` → `kvalita 97`, `best_practices 99`

Reprezentatívny dolný koniec v rámci aktuálneho horného pásma:

- `architektúra` → `kvalita 94`, `best_practices 98`
- `changelog` → `kvalita 94`, `best_practices 98`
- `create-pr` → `kvalita 95`, `best_practices 98`

Toto je zámerné. Zapisovateľ teraz rozlišuje „výborné“ od „výnimočné“ namiesto sploštenia celého katalógu navrchu.---

## 🌟 Strengths

1.**Návrh ako prvý artefakt**
   Každý runtime povrch spotrebúva rovnaký vygenerovaný katalóg a manifesty.
2.**Široké pokrytie protokolov**
   CLI, API, MCP a A2A koexistujú bez fragmentácie dátového modelu.
3.**Silná ergonómia miestnych produktov**
   Riadená inštalácia, vizuálny shell, `config-mcp` a predvolené nastavenia suchého spustenia robia projekt použiteľným aj pre náročných používateľov.
4.**Poctivý bezpečnostný postoj**
   Povolené miestne zápisy, statické skenovanie, podpisovanie, kontrolné súčty a overenie vydania sú explicitné.
5.**Zdravý dosah MCP**
   Projekt teraz podporuje širokú škálu súčasných klientov s podporou MCP bez toho, aby predstierali, že nezdokumentované ciele sú stabilné.---

## 🔮 Opportunities

1.**Hlbšie pokrytie balíka**
   Ďalším krokom je špecializácia v rámci existujúcich balíkov, nielen široké pokrytie.
2.**Bohatšia sémantika strelcov**
   Stále existuje priestor na sémantické vyhodnotenie hĺbky referenčného balíka a kvality pracovného toku.
3.**Viac klientských autorov iba v odôvodnených prípadoch**
   Rozšírenie by malo zostať disciplinované a viazané na stabilné oficiálne dokumenty.
4.**Rozklad validátora**
   `skill_metadata.py` je stále veľký modul a časom by mu prospela interná dekompozícia.
5.**Eskalácia hosteného riadenia**
   Súčasná základná línia procesu je dostatočná na vlastné hosťovanie, ale podnikové nasadenie by si nakoniec vyžadovalo integráciu externej brány a identity.