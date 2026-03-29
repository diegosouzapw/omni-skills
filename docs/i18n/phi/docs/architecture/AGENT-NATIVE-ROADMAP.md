# 🗺️ Agent-Native Roadmap (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Ang architecture evolution plan para sa Omni Skills: mula sa installer-first repository hanggang sa shared catalog runtime powering CLI, API, MCP, at A2A nang walang duplicate na logic.**---

## 📊 Current Platform Areas

| Yugto | Pangalan | Katayuan |
|:------|:-----|:-------|
| 1️⃣ | Mga Kontrata at Artifact | ✅ Kasalukuyan |
| 2️⃣ | Read-Only Catalog API | ✅ Kasalukuyan |
| 3️⃣ | Ibabaw ng Pagtuklas ng MCP | ✅ Kasalukuyan |
| 4️⃣ | Lokal na Pag-install at Config Surface | ✅ Kasalukuyan |
| 5️⃣ | A2A Orchestration | ✅ Kasalukuyan |### ✅ What Exists Today

- mga artifact ng catalog na nababasa ng makina sa `dist/`
- read-only na HTTP API na may saklaw ng endpoint para sa paghahanap, mga bundle, paghahambing, pagpaplano sa pag-install, at pag-download
- MCP server na may `stdio`, streamable HTTP, at SSE transports
- lokal na sidecar na may mga pinahihintulutang pagsusulat at mga daloy ng `config-mcp`
- 7 client na may kakayahang mag-install, 16 na client na may kakayahang mag-config, 33 target na config ng MCP, at 19 na profile ng config
- mas malalim na espesyalisasyon ng bundle sa loob ng `full-stack`, `security`, `devops`, at `ai-engineer` sa pamamagitan ng `auth-flows`, `threat-modeling`, `release-engineering`, at `context-engineering`
- per-skill archives (`zip`, `tar.gz`) na may mga SHA-256 checksum at nakahiwalay na lagda sa mga release tag
- Baseline ng pamamahala ng API: bearer/API-key auth, admin runtime auth, rate limiting, audit logging, CORS/IP allowlists, trust proxy, maintenance mode, at request ID
- A2A runtime na may task lifecycle, JSON/SQLite durability, restart resume, SSE streaming, cancellation, push notifications, opsyonal na process executor, at opt-in leased coordination### 🔭 Future Expansion Areas

Inilalarawan na ngayon ng pangunahing roadmap ang kasalukuyang saklaw ng platform. Ang natitirang mga item ay mga lugar ng pagpapalawak sa hinaharap, hindi mga puwang sa pundasyon:

- lamang ang mga mataas na pumipili na pagdaragdag ng MCP mula sa puntong ito, at kung saan ang mga opisyal na pampublikong doc ay ginagawang posible ang isang ligtas na manunulat
- mas malalim na reference pack at mas semantic na pagmamarka upang patuloy na ihiwalay ng classifier ang mga pambihirang kasanayan mula sa mga pinakintab lamang
- pamamahalang hino-host ng enterprise na lampas sa kasalukuyang in-process na baseline, kung kailangan ng proyekto sa ibang pagkakataon ang gateway o pagsasama ng IdP
- mas malalim na espesyalisasyon sa mga bagong activate na `design`, `tools`, `data-ai`, at `machine-learning` track
- patuloy na operational polish sa paligid ng pribadong enhancer habang pinapanatili ang pormal nitong operating model: OmniRouter na naka-pin sa `cx/gpt-5.4`, naka-host na cloud sa `mock` o degraded preflight, at maaasahang `live` sa LAN o self-hosted execution
- patuloy na pagpapalabas at pagpapatigas ng daloy ng trabaho bilang kalidad ng serbisyong trabaho, hindi bilang nawawalang pundasyon ng platform## Future Catalog Expansion Track

Ang unang dalawang public category-expansion wave ay nakarating na ngayon:

- `design` → `design-systems-ops`, `accessibility-audit`, `design-token-governance`
- `mga tool` → `mcp-server-authoring`
- `data-ai` → `data-contracts`
- `machine-learning` → `model-serving`

Ang susunod na inirerekomendang hakbang ay hindi na pag-activate ng kategorya para sa sarili nitong kapakanan. Ito ay upang palalimin ang mga bagong aktibong code-native na track na ito upang maramdaman ang mga ito na parang matibay na ibabaw ng produkto kaysa sa mga single-skill foothold.

Inirerekomendang direksyon:

1. palalimin ang `design` na may higit pang operational na disenyo-system workflow
2. palalimin ang `tools` gamit ang mga kasanayan sa pag-author at plugin-oriented
3. palalimin ang `data-ai` gamit ang mga kasanayan sa pagpapatupad-unang pipeline at instrumentation
4. palalimin ang `machine-learning` gamit ang mga kasanayan sa pagpapatakbo ng paghahatid, pagsasanay, at pagsusuri

Ang mga kategorya ay sadyang ipinagpaliban maliban kung ang mga malakas na panukalang code-native ay lumabas:

- `negosyo`
- `content-media`

Ang kasaysayan ng pagpapalawak na iyon ay sinusubaybayan na ngayon sa:

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Panatilihing gumagana ang kasalukuyang `npx omni-skills` workflow
- ✅ Magpakilala ng nababasa ng makina na mapagkukunan ng katotohanan para sa mga kasanayan
- ✅ Suportahan ang pagtuklas, rekomendasyon, at pagpaplano ng pag-install ng mga ahente
- ✅ Paghiwalayin ang malayuang mga alalahanin sa catalog mula sa mga lokal na filesystem writes
- ✅ Muling gamitin ang parehong metadata sa CLI, API, MCP, at A2A---

## 🚫 Non-Goals

- ❌ Remote install-on-user-machine mula sa isang naka-host na server
- ❌ Palitan ang `SKILL.md` bilang canonical authoring format
- ❌ Atasan ang mga kontribyutor na magsulat ng mga manifest sa pamamagitan ng kamay
- ❌ Gawing isang mabigat na naka-host na platform ng pila ang proyekto bilang default---

## 🏗️ Target Architecture

Isang**catalog core**na may tatlong protocol surface:

| Ibabaw | Pinakamahusay Para sa | Mode |
|:--------|:---------|:-----|
| 🌐**REST API**| Pag-access sa rehistro, pagsasama ng UI, mga consumer ng third-party | Read-only |
| 🔌**MCP**| Pagtuklas ng ahente, pag-install ng mga preview, pagsulat ng config, mga recipe ng kliyente | Read-only + local writes |
| 🤖**A2A**| Ahente-to-agent orkestrasyon at install-plan handoff | Lifecycle ng gawain na may simple-unang lokal na tibay |### ⚙️ Core Principle

>**Ang lahat ng protocol ay gumagamit ng parehong nabuong pamilya ng artifact.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Ang manifest ay nananatili sa nakabahaging kontrata. Ang mga archive ay mga artifact sa pamamahagi na naka-layer sa ibabaw ng kontratang iyon, hindi isang kapalit para dito.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Ginagamit ng naka-host na API at mga malayuang MCP server.

| ✅ Pinapayagan | ❌ Hindi Pinapayagan |
|:-----------|:----------------|
| Mga kasanayan sa paghahanap | Sumulat sa filesystem ng tumatawag |
| Kunin ang mga manifest | I-mute ang lokal na config ng kliyente |
| Paghambingin ang mga kasanayan | Infer arbitrary machine state |
| Magrekomenda ng mga bundle | — |
| Bumuo ng mga plano sa pag-install | — |### 2️⃣ Local Installer Mode

Ginamit ng CLI at ng sidecar ng MCP.

| ✅ Pinapayagan |
|:-----------|
| I-detect ang mga lokal na kliyente ng AI |
| Siyasatin ang mga naka-install na kasanayan |
| I-preview ang mga pagpapatakbo ng file |
| I-install o alisin ang mga direktoryo ng kasanayan |
| Sumulat ng lokal na MCP config pagkatapos ng preview |

> 📌 Ito ay nananatiling ang tanging mode kung saan nangyayari ang tunay na OS writes.---

## 📐 Protocol Split

### 🌐 REST API

Pinakamahusay para sa pag-access sa registry, paghahanap, paghahambing, pag-download ng bersyon, at pagpaplano ng pag-install.

**Mga Endpoint**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Pinakamahusay para sa pagtuklas na nakabatay sa tool, maagap na rekomendasyon, pag-install ng mga preview, at pag-setup ng MCP na partikular sa kliyente.

**Read-only na tool**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Mga lokal na tool**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Pinakamahusay para sa discovery handoff, install-plan workflows, at resumable agent task execution.

**Mga kasalukuyang operasyon**: `discover-skills` · `recommend-stack` · `prepare-install-plan`---

## 🛡️ Security Model

| Prinsipyo | Pagpapatupad |
|:----------|:----------------|
| 🔒 Ang mga naka-host na serbisyo ay read-only | Hindi sumusulat ang API at remote MCP sa filesystem ng tumatawag |
| 📂 Manatiling lokal ang mga pagsusulat | CLI at MCP sidecar lang |
| 👁️ Silipin bago magsulat | Mga default na dry-run sa mga lokal na mutasyon |
| 🔑 Ang integridad ay tahasang | Mga checksum ng SHA-256 para sa mga nabuong artifact |
| ✍️ Ang pagpapakawala ng tiwala ay tahasang | Mga hiwalay na lagda na ipinatupad sa mga tag ng release |
| ⚠️ Lumalabas ang panganib | Ang metadata ng peligro at seguridad ay kumakalat sa bawat runtime surface |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- dokumentadong target na arkitektura
- tinukoy na manifest schema
- nabuong metadata, catalog, manifest, bundle, at archive### Phase 2: Catalog Service

- read-only na HTTP API na may Express 5
- paghahanap, pag-filter, manifest lookup, listahan ng bundle, paghahambing, at pag-download
- baseline ng naka-host na pamamahala sa env-driven### Phase 3: MCP Discovery

- opisyal na `@modelcontextprotocol/sdk` integration
- `stdio`, streamable HTTP, at SSE transports
- read-only na mga tool, mapagkukunan, at prompt na sinusuportahan ng nakabahaging catalog### Phase 4: Local Install and Config Surface

- lokal na sidecar na may mga pinahihintulutang pagsusulat
- detection para sa 7 install-capable na mga kliyente
- config writing para sa 16 config-capable clients sa 33 target at 19 config profile
- may gabay na `config-mcp` na dumadaloy sa CLI at visual shell
- matatag na suporta para sa Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose, at Dev Container### Phase 5: A2A Orchestration

- agent card sa `/.well-known/agent.json`
- `message/send`, `message/stream`, `tasks/get`, `tasks/cancel`, `tasks/resubscribe`, at push-notification config method
- Pagtitiyaga ng JSON at SQLite sa pag-restart ng pagbawi
- opsyonal na panlabas na tagapagpatupad ng proseso
- opt-in na naupahan na pagpapatupad sa mga manggagawa para sa SQLite at opsyonal na advanced na koordinasyon ng Redis
- mga simple-first default na pinananatili sa memorya, JSON, o SQLite nang walang mga panlabas na dependency### Current Enhancer Operating Decision

Ang modelo ng suportadong `live` ng pribadong enhancer ay tahasan na ngayon:

- ang naka-host na PR automation ay nagpapatakbo ng isang preflight-gated na 'live' na pagsubok
- kung ang pampublikong gateway ng OmniRoute ay naharang o hindi matatag, ang PR ay minarkahan na `naka-block` na may dahilan na nakaharap sa operator sa halip na mabigo nang malabo
- ang canonical na maaasahang `live` na landas ay nananatiling LAN o lokal na pagpapatupad ng serbisyo
- Ang naka-iskedyul na pribadong GitHub ay nagpapatakbo ng stay `mock` bilang default maliban kung ang isang operator ay tahasang humiling ng `live`---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Desisyon**: panatilihin ang manifest bilang nakabahaging kontrata at panatilihin ang nilagdaang per-skill archive bilang surface ng pamamahagi.

**Bakit**:
- Kinukonsumo na ng CLI, API, MCP, at A2A ang normalized na hugis ng manifest
- Ang mga archive ay mainam para sa pag-download at pag-verify, ngunit hindi maganda bilang ang tanging kontrata sa pagtuklas
- pinapanatili nitong simple ang pag-akda at nabe-verify ang pamamahagi### 2. Private or Premium Catalogs

**Desisyon**: muling gamitin ang parehong format ng manifest at catalog, at panlabas na pagpapatunay ng layer o patakaran.

**Bakit**:
- iniiwasan nitong i-forking ang data model
- tumutugma ito sa kasalukuyang diskarte sa pamamahala ng API/MCP
- nananatili itong tugma sa direksyon ng ecosystem ng MCP sa paligid ng mga kredensyal ng kliyente ng OAuth at pahintulot na pinamamahalaan ng enterprise### 3. Client Writer Strategy

**Desisyon**: magsama-sama sa isang maliit na hanay ng mga canonical export na pamilya at panatilihin lamang ang mga pasadyang manunulat kung saan kinakailangan ito ng mga opisyal na doc ng kliyente.

**Ginagamit na ngayon ang mga canonical na pamilya**:
- JSON `mcpServers`
- JSON `mga server`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**Bakit**:
- pinapanatili nitong mapanatili ang pagpapatupad
- sinusuportahan pa rin nito ang mga pangangailangang partikular sa kliyente gaya ng mga setting ng Claude, Continue YAML, Zed `context_servers`, at Codex TOML
- iniiwasan nito ang pag-imbento ng mga marupok na manunulat para sa mga kliyente na walang matatag na pampublikong config doc---

## 🌍 Research Notes Behind Those Decisions

Ang mga kasalukuyang desisyon ay sinuri laban sa mga opisyal na doc ng ecosystem:

- ang MCP ecosystem ay nagdodokumento na ngayon ng mga opsyonal na extension gaya ng mga kredensyal ng kliyente ng OAuth at pahintulot na pinamamahalaan ng enterprise, na sumusuporta sa pag-externalize ng naka-host na auth sa halip na i-forking ang format ng catalog
- Nagdodokumento ang OpenAI ng isang pampublikong docs MCP server at mga pattern ng configuration ng Codex MCP na nakaayon sa nakabahaging manifest at diskarte sa client-writer
- Ang VS Code ay nagdodokumento ng first-class na suporta sa MCP at isang extension na gabay, na nagpapatibay sa pagpapanatili ng nakatalagang `servers`-based na manunulat nito
- Ang JetBrains AI Assistant ay nagdodokumento ng MCP setup sa pamamagitan ng product UX sa halip na isang stable na cross-platform file contract, na sumusuporta sa pagpapanatili nito sa manual/snippet na teritoryo sa ngayon---

## 🔮 Longer-Term Decision Points

Ilan lamang sa mga madiskarteng tanong ang nananatiling tunay na bukas:

1. Kung ang sinumang kliyente na lampas sa kasalukuyang matrix ay tunay na nag-clear sa bar para sa first-class na pagsulat, o kung ang natitirang mga produkto ay dapat manatiling manual/snippet-only
2. Kailan, kung sakaling, dapat lumipat ang naka-host na pamamahala sa isang panlabas na gateway o enterprise IdP sa halip na sa kasalukuyang nasa prosesong baseline?
3. Gaano kalayo ang dapat gawin ng scorer sa pagsusuri sa lalim ng reference-pack at kalidad ng pagpapatakbo bago ito maging masyadong opinyon para sa mga kontribyutor?