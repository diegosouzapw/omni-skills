# 🧩 CLI Guided Installer Specification (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Kontrata sa pag-uugali para sa may gabay na karanasan sa pag-install sa Omni Skills CLI.**---

## 1. Scope

Tinutukoy ng spec na ito ang ginabayang pag-uugali sa pag-install na nasa ibabaw ng kasalukuyang installer backend.

Hindi nito pinapalitan ang:

- `tools/bin/install.js`
- kasalukuyang dalubhasang flag na dumadaloy
- pumipili na pag-install ng mga manifest

Tinutukoy nito ang:

- kung paano ipinasok ang guided mode
- kung paano pinipili ang mga destinasyon
- kung paano napili ang saklaw ng pag-install
- anong impormasyon ng preview ang dapat ipakita
- kung paano gumagana ang kumpirmasyon at pagpapatupad---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

Ang CLI ay dapat pumasok sa guided install mode kapag:

- ang gumagamit ay nagpapatakbo ng `omni-skills` nang walang args sa isang TTY
- nagpapatakbo ang user ng `omni-skills install` nang walang mga tagapili sa isang TTY### 2.2 Forced Guided Entry

Dapat ding suportahan ng CLI ang tahasang guided mode sa pamamagitan ng isang nakalaang opsyon, gaya ng:

- `omni-skills install --guided`

Dapat gumana ang mode na ito kahit na ang input ay naka-pipe at hindi naka-attach sa isang TTY, hangga't available ang standard input.### 2.3 Non-Interactive Safety Rule

Kapag na-invoke nang walang TTY at walang guided mode, tahasang hiniling:

- panatilihin ang kasalukuyang default na gawi
- huwag harangan ang paghihintay para sa mga senyas---

## 3. Destination Model

Dapat na sinusuportahan ng ginabayang pag-install ang dalawang patutunguhang klase:### 3.1 Known Client Target

Ang bawat kilalang target ay nagpapasya sa:

- label na nababasa ng tao
- panloob na tool id
- i-install ang bandila
- nalutas na landas

Mga kinakailangang kilalang target:

- Claude Code
- Cursor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravity
- OpenCode### 3.2 Custom Path Target

Ang custom na path mode ay dapat na:

- prompt para sa isang landas
- lutasin ang `~`
- gawing normal sa ganap na landas
- ipakita ang nalutas na landas sa preview---

## 4. Install Scope Model

Dapat na sinusuportahan ng ginabayang pag-install:### 4.1 Full Library

Katumbas ng kasalukuyang pag-install na walang `--skill` o `--bundle`.### 4.2 Single Skill

Hinahayaan ang user na pumili ng isang nai-publish na kasanayan.### 4.3 Single Bundle

Hinahayaan ang user na pumili ng isang na-curate na bundle at lutasin ang mga na-publish na miyembro.### 4.4 Search Then Install

Hinahayaan ang gumagamit na:

- magpasok ng query sa paghahanap
- suriin ang mga resulta
- pumili ng kasanayan o bundle
- magpatuloy sa pag-install ng preview---

## 5. Preview Contract

Bago isagawa, dapat ipakita ang may gabay na pag-install:

- label ng patutunguhan
- landas ng patutunguhan
- I-install ang saklaw
- napiling kasanayan o bundle kung naaangkop
- katumbas na utos ng CLI

Opsyonal ngunit inirerekomenda:

- napiling buod ng metadata ng kasanayan
- buod ng availability ng bundle---

## 6. Execution Contract

Pagkatapos ng kumpirmasyon:

- may gabay na mga delegado sa pag-install sa kasalukuyang installer backend
- hindi nito muling ipinapatupad ang pagsusulat mismo ng file

Ang preview ng command at ang aktwal na itinalagang installer args ay dapat na eksaktong magkatugma.---

## 7. Result Contract

Pagkatapos ng matagumpay na pagpapatupad, dapat ipakita ang ginabayang resulta ng pag-install:

- tagapagpahiwatig ng tagumpay
- huling patutunguhan na landas
- utos na naisakatuparan
- susunod na inirerekomendang pagkilos

Halimbawa ng mga susunod na aksyon:

- gamitin ang kasanayan sa napiling kliyente
- tumakbo ng 'doktor'
- patakbuhin ang `mcp stream --local`---

## 8. Compatibility Contract

Ang mga sumusunod ay nananatiling wasto at hindi nagbabago:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bundle full-stack`
- `omni-skills --path ./skills`
- `omni-skills find figma --tool cursor --install --yes`

Ang guided mode ay nagdaragdag ng gawi. Hindi nito inaalis ang umiiral na gawi.