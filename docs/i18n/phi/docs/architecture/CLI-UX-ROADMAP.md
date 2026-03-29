# 🧭 CLI UX Roadmap (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Ang roadmap ng produkto para sa nagbabagong Omni Skills mula sa isang flag-first installer tungo sa isang guided terminal experience para sa parehong eksperto at hindi ekspertong user.**
> Saklaw: npm package, karanasan sa pag-install ng CLI, terminal UI, mga daloy ng paglulunsad ng serbisyo, at visual na onboarding.---

## 1. Problem Statement

Ang kasalukuyang runtime foundation ay matibay, ngunit ang karanasan sa pagpasok ay na-optimize pa rin para sa mga user na nakakaunawa na:

- sinong kliyente ang gusto nilang i-target
- kung aling tagapili ng pag-install ang gusto nilang gamitin
- kung paano isalin ang mga layunin sa `--skill`, `--bundle`, o `find`
- kapag kailangan nila ng CLI-only install kumpara sa mga serbisyo ng MCP, API, o A2A

ngayon:

- Nagde-default ang `npx omni-skills` sa Antigravity
- ito ay teknikal na wasto at pabalik-katugma
- ngunit hindi ito mainam para sa mga unang beses na gumagamit o hindi gaanong teknikal na mga operator

Ang CLI ay mayroon nang pangunahing interactive na mode, ngunit mas malapit pa rin ito sa isang utility ng developer kaysa sa isang may gabay na ibabaw ng produkto.

Tinutukoy ng roadmap na ito ang landas patungo sa mas malakas na pampublikong UX nang hindi sinisira ang kasalukuyang interface na nakabatay sa bandila.---

## 1.1 Delivery Status

Ang roadmap ay higit na ipinapatupad sa kasalukuyang estado ng repositoryo.

Nakumpleto:

- Phase 1: Pinatnubayang Entrypoint Selection
- Phase 2: Guided Install Wizard
- Phase 3: Visual Terminal Shell
- Phase 4: Visual Service Hub
- Phase 5: Mga Nai-save na Profile at Pag-uulit
- Phase 6: Pagpapatigas, Pagsusuri, at Dokumentasyon---

## 2. Goals

- Panatilihin ang kasalukuyang mga dalubhasang CLI workflow
- Gawing ligtas at naiintindihan ang entrypoint na walang argumento para sa mga unang beses na gumagamit
- Palitan ang mga silent default sa mga interactive na konteksto ng may gabay na pagpili
- Suportahan ang mga kilalang AI client at arbitrary na custom na mga path ng pag-install
- Gawing magkakaugnay na paglalakbay ng user ang pag-install, pagtuklas, at pag-boot ng serbisyo
- Magbigay ng visual terminal UI na parang isang produkto, hindi lamang isang script
- Panatilihing magagamit muli ang install engine, catalog, at runtime ng serbisyo sa ilalim ng UI---

## 3. Non-Goals

- Pinapalitan ang kasalukuyang flag-based na CLI
- Pag-alis ng Antigravity bilang isang sinusuportahang default na target
- Pagpapadala ng web UI bilang pangunahing mode ng paghahatid
- Refactoring API, MCP, o A2A protocol mismo bilang bahagi ng gawaing UX na ito
- Pinapalitan ang `SKILL.md` authoring ng isang database-backed admin panel---

## 4. Design Principles

### 4.1 Backward Compatibility First

Ang mga utos na ito ay dapat na patuloy na gumana nang eksakto tulad ng ginagawa nila ngayon:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Interactive na terminal session na walang mga argumento: bukas na may gabay na karanasan
- Non-interactive na invocation na walang argumento: panatilihin ang kasalukuyang pag-install ng default na gawi
- Ang mga tahasang command at flag ay palaging nananalo sa UI inference### 4.3 Reuse One Engine Across Modes

Ang mga sumusunod ay dapat magbahagi ng parehong panloob na lohika:

- flag-first CLI
- may gabay na text-mode CLI
- visual terminal UI

Nangangahulugan iyon na ang layer ng UX ay hindi dapat nagmamay-ari ng lohika ng negosyo. Dapat itong ayusin ang mga magagamit na pagkilos.### 4.4 Preview Before Write

Ang lahat ng may gabay na daloy na nagiging sanhi ng pagsusulat ay dapat magpakita ng:

- nalutas na target
- nalutas na landas
- napiling mga kasanayan o mga bundle
- katumbas na utos ng CLI
- prompt ng kumpirmasyon### 4.5 Visual Does Not Mean Implicit

Kahit na sa mas mayamang UI, dapat pa ring gawing tahasan ng system ang estado at mga pagkilos:

- kung saan pupunta ang pag-install
- kung ano ang isusulat
- kung aling transportasyon o port ang gagamitin ng isang serbisyo
- kung ang isang daloy ay read-only o local-write-capable---

## 5. User Personas

### 5.1 Expert CLI User

Kailangan:

- mabilis na mga utos
- walang sapilitang senyas
- matatag na mga bandila
- kakayahang mag-script### 5.2 Guided Product User

Kailangan:

- malinaw na mga pagpipilian
- walang pagpapalagay na ang Antigravity ay ninanais
- suporta para sa mga custom na pag-install ng path
- naiintindihan na preview ng pag-install
- nakikitang pagkakaiba sa pagitan ng pag-install at mga aksyon ng runtime ng server### 5.3 Operator / Platform User

Kailangan:

- kakayahang maglunsad ng MCP, API, at A2A nang biswal
- matino default
- opsyonal na pag-tune ng mga port, transportasyon, pagtitiyaga, executor mode, auth, at lokal na mode---

## 6. Target UX Model

Dapat ilantad ng produkto ang tatlong layer:### 6.1 Expert Mode

Mga direktang utos at watawat.

Mga halimbawa:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Na-trigger kapag:

- nagpapatakbo ang user ng `npx omni-skills` sa isang TTY na walang args
- nagpapatakbo ang user ng `npx omni-skills install` nang walang mga konkretong tagapili
- tahasang nag-opt in ang user sa guided mode

Ang ginabayang daloy ng pag-install ay dapat dumaan sa:

1. target na kliyente o custom na landas
2. uri ng pag-install
3. kasanayan o pagpili ng bundle
4. silipin
5. kumpirmasyon
6. pagpapatupad
7. mga susunod na hakbang### 6.3 Visual Operations Hub

Na-trigger ng:

- `npx omni-skills ui`

Dapat itong maging "home screen" para sa mga hindi ekspertong user at operator.

Mga pangunahing aksyon:

- mga kasanayan sa pag-install
- tumuklas ng mga kasanayan
- simulan ang MCP
- simulan ang API
- simulan ang A2A
- tumakbo ng doktor
- magpatakbo ng mga tseke ng usok---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

kinalabasan:

- Hindi na tahimik na ipinapalagay ng `npx omni-skills` sa TTY ang Antigravity
- sinenyasan ang mga user na pumili ng kliyente o custom na landas

Mga kinakailangan:

- panatilihin ang hindi TTY na default na gawi sa pag-install
- magdagdag ng tagapili ng target
- suportahan ang pasadyang pagkuha ng landas### Phase 2: Guided Install Wizard

kinalabasan:

- Ang pag-install ay nagiging ganap na ginabayang daloy

Mga kinakailangan:

- pagpili ng mode ng pag-install:
  - buong library
  - isang kasanayan
  - isang bundle
  - maghanap pagkatapos ay i-install
- i-install ang preview
- katumbas na pag-render ng command
- kumpirmasyon at pagpapatupad### Phase 3: Visual Terminal Shell

kinalabasan:

- ang kasalukuyang pangunahing text UI ay nagiging isang branded na terminal application

Mga kinakailangan:

- mas mayamang layout
- branding at logo ng proyekto
- mas mahusay na stepper at mga card
- nabigasyon na hinihimok ng keyboard
- Mag-react sa pagpapatupad ng terminal sa pamamagitan ng Ink### Phase 4: Visual Service Hub

kinalabasan:

- Ang MCP, API, at A2A ay nagsisimula mula sa visual na UI

Mga kinakailangan:

- ginabayang daloy ng MCP
- ginabayang daloy ng API
- ginabayang daloy ng A2A
- nakikitang mode at mga preview ng config### Phase 5: Saved Profiles and Repeatability

kinalabasan:

- ang karaniwang pag-install o mga preset ng serbisyo ay maaaring magamit muli

Mga kinakailangan:

- tandaan ang mga kamakailang target
- naka-save na mga preset ng serbisyo
- kamakailang mga utos
- mga paboritong bundle o kasanayan### Phase 6: Hardening, Tests, and Documentation

kinalabasan:

- ang UX ay nagiging isang pinapanatili na pampublikong interface, hindi isang ad hoc na kaginhawahan

Mga kinakailangan:

- saklaw ng usok
- mga pagsubok sa regression
- mga update ng doc
- gabay ng operator
- pagsusuri sa pagiging tugma ng package---

## 8. Proposed Command Model

### Stable Commands

- `omni-skills`
- `omni-skills install`
- `omni-skills find`
- `omni-skills ui`
- `omni-skills mcp`
- `omni-skills api`
- `omni-skills a2a`
- `omni-skills doctor`
- `omni-skills smoke`### Recommended Behavior

| Panawagan | Pag-uugali |
|:-----------|:---------|
| `omni-skills` sa TTY, walang args | May gabay na entry sa pag-install |
| `omni-skills` sa hindi TTY, walang args | Kasalukuyang Antigravity default na pag-install |
| `omni-skills install` sa TTY, walang mga pumipili | Ginabayang install wizard |
| `omni-skills install --guided` | Force guided install flow |
| `omni-skills ui` | Buksan ang visual operations hub |
| tahasang mga flag | Direktang isagawa nang hindi lumilihis sa ginabayang daloy |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Mga Pagpipilian:

- Claude Code
- Cursor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravity
- OpenCode
- Pasadyang landas

Output:

- napiling kilalang target O custom na path ng filesystem### Step 2: Choose Install Type

Mga Pagpipilian:

- buong library
- isang nai-publish na kasanayan
- isang bundle
- maghanap pagkatapos ay i-install

Output:

- I-install ang saklaw### Step 3: Resolve Selection

Depende sa uri ng pag-install:

- buong library: walang karagdagang tagapili
- kasanayan: ilista o pumili ng isang kasanayan
- bundle: ilista o pumili ng bundle
- paghahanap: prompt para sa query, ipakita ang pagtutugma ng mga kasanayan at mga bundle### Step 4: Preview

Display:

- napiling target
- nalutas na landas
- napiling kasanayan o bundle
- katumbas na utos ng CLI
- kung ang daloy ay pumipili o ganap na pag-install### Step 5: Confirm

Kinukumpirma ng user:

- oo → isagawa
- hindi → abort o bumalik### Step 6: Result

Display:

- tagumpay/kabiguan
- landas ng patutunguhan
- mungkahi sa susunod na hakbang---

## 10. Information Architecture for the Visual Operations Hub

Dapat ilantad ng operations hub ang:### 10.1 Install

- ginabayang daloy ng pag-install
- kasanayan o paghahanap ng bundle
- pasadyang landas### 10.2 Discover

- paghahanap ng katalogo
- mga filter
- i-preview ang metadata
- i-install ang handoff### 10.3 MCP

Mga Pagpipilian:

- transportasyon: stdio, stream, sse
- lokal na mode on/off
- host
- daungan### 10.4 API

Mga Pagpipilian:

- host
- daungan
- opsyonal na auth
- opsyonal na limitasyon sa rate### 10.5 A2A

Mga Pagpipilian:

- host
- daungan
- uri ng tindahan: memorya, json, sqlite
- tagapagpatupad: inline, proseso
- Mga opsyon sa pag-upa kapag pinagana ang sqlite queue### 10.6 Diagnostics

- doktor
- usok---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Ang kasalukuyang `tools/bin/cli.js` ay naghahalo:

- pag-parse ng command
- pagtatanghal
- mga interactive na senyas
- orkestrasyon ng aksyon
- boot ng serbisyo

Dapat ilipat ng bagong istraktura ang reusable logic sa:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

Ang `tools/bin/install.js` ay dapat manatiling backend na may kakayahang sumulat.

Dapat tawagan ng may gabay na UI ang kasalukuyang installer backend sa halip na i-duplicate ang logic ng pag-install.### 11.3 Keep Find/Search Reusable

Dapat gamitin muli ng guided install wizard ang parehong catalog-core at CLI search logic na nagpapagana na:

- `hanapin`
- i-install ang mga preview
- resolution ng bundle### 11.4 Prepare for Ink Without Forcing It Early

Ang unang paghahatid ay maaaring manatili sa text-mode prompt.

Ngunit ang arkitektura ay dapat panatilihing malinaw ang tahi upang ang daloy ng teksto ay mai-render sa ibang pagkakataon sa pamamagitan ng Ink.---

## 12. Risks

### 12.1 Breaking Existing Automation

Pagbawas:

- awtomatikong buksan ang guided UI sa TTY
- panatilihin ang kasalukuyang default sa hindi TTY
- panatilihin ang tahasang mga daloy ng bandila### 12.2 Letting UI Own Business Logic

Pagbawas:

- ilipat ang orkestra sa magagamit muli na mga module ng pagkilos
- panatilihin ang installer at service boot logic sa ibaba ng UI layer### 12.3 Ink Migration Too Early

Pagbawas:

- unang ipadala ang guided flow sa kasalukuyang Node terminal stack
- pagkatapos ay lumipat sa Ink kapag naging stable na ang flow semantics### 12.4 Incomplete Service UX

Pagbawas:

- ship install wizard muna
- pagkatapos ay paglulunsad ng serbisyong ginagabayan ng layer---

## 13. Acceptance Criteria by Phase

### Phase 1

- Hindi na agad nag-i-install ang `npx omni-skills` sa TTY
- Maaaring pumili ang user ng target na kliyente o custom na landas
- gumagana pa rin ang non-TTY no-arg invocation tulad ng dati### Phase 2

- Sinusuportahan ng guided install ang buong library, kasanayan, bundle, at search-then-install
- Palaging ipinapakita ang preview bago magsulat
- ipinapakita ang katumbas ng command### Phase 3

- umiiral ang branded na terminal UI
- ang UI ay mas visually structured kaysa sa mga simpleng readline na menu
- Ang nabigasyon ay keyboard-friendly### Phase 4

- maaaring simulan ng mga user ang MCP, API, at A2A mula sa visual hub
- Ang mga pangunahing opsyon sa runtime ay maaaring i-configure sa guided form### Phase 5

- magagamit muli ang mga kamakailan o naka-save na kagustuhan
- ang mga umuulit na daloy ay tumatagal ng mas kaunting mga senyas### Phase 6

- Ang saklaw ng usok ay sumasalamin sa mga bagong UX entrypoints
- Inilalarawan ng mga doc ang guided mode at pag-uugali ng service wizard---

## 14. Execution Order

Ang roadmap na ito ay dapat ipatupad sa ganitong pagkakasunud-sunod:

1. May gabay na pagpili ng entrypoint
2. Guided install wizard
3. Visual terminal shell
4. Visual service hub
5. Naka-save na mga profile at repeatability
6. Hardening, pagsubok, at docs polish

Dapat basahin ng gawaing pagpapatupad ang nauugnay na file ng gawain bago simulan ang bawat gawain upang manatiling nakahanay ang gawaing CLI sa plano at hindi naaanod.