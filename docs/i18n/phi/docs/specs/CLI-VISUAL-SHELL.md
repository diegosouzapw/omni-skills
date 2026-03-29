# 🖥️ CLI Visual Shell Specification (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Kontrata sa pag-uugali para sa Ink-based na terminal UI na inilantad ng `omni-skills ui`.**---

## 1. Scope

Ang visual shell ay isang ginabayang ibabaw ng produkto sa ibabaw ng kasalukuyang CLI at installer engine.

Hindi nito pinapalitan ang:

- ekspertong paggamit ng CLI na nakabatay sa bandila
- `tools/bin/install.js`
- ang may gabay na daloy ng pag-install ng teksto
- API, MCP, o A2A runtime na gawi

Tinutukoy nito ang:

- ang pag-uugali ng `omni-skills ui`
- ang fallback na kontrata para sa `omni-skills ui --text`
- lokal na estado at preset na pagtitiyaga
- guided service launch previews
- repeatability para sa mga kamakailang pag-install at pagpapatakbo ng serbisyo---

## 2. Entry Rules

### 2.1 Visual Mode

Inilunsad ng `omni-skills ui` ang Ink-based visual shell.

Ang visual shell ay ang pangunahing hindi ekspertong karanasan sa terminal para sa:

- mga daloy ng pag-install
- catalog-unang pagtuklas at pag-install
- Pagsisimula ng MCP
- Pagsisimula ng API
- A2A startup
- doktor at smoke handoff### 2.2 Text Fallback

Inilunsad ng `omni-skills ui --text` ang readline-based na fallback na interface.

Ito ay nananatiling kapaki-pakinabang kapag:

- hindi mai-render ng terminal nang tama ang mas mayamang shell
- ang pag-uugali ng raw-mode ay pinipigilan
- Mas gusto ang kaunting text fallback### 2.3 Handoff Rule

Ang visual shell ay hindi muling nagpapatupad ng mga runtime ng serbisyo o direktang nagsusulat ng pag-install.

Pagkatapos ng preview at kumpirmasyon, malinis itong lumabas at ipapatupad ang kasalukuyang CLI entrypoint na may katumbas na mga argumento at mga variable ng kapaligiran.---

## 3. Home Screen Contract

Dapat ilantad ng home screen ang:

- mga kasanayan sa pag-install
- hanapin at i-install
- ulitin ang mga kamakailang pag-install kapag naroroon
- Patakbuhin ang mga naka-save na preset sa pag-install kapag naroroon
- simulan ang isang serbisyo
- ulitin ang mga kamakailang serbisyo kapag naroroon
- magpatakbo ng mga naka-save na preset ng serbisyo kapag naroroon
- doktor
- usok
- lumabas

Dapat ding lumabas ang home screen:

- kasalukuyang naka-publish na availability ng bundle
- bilang ng lokal na estado para sa mga recent, preset, at paborito---

## 4. Install Flow Contract

Ang daloy ng pag-install ng visual na shell ay dapat na sumusuporta sa:

- kilalang pagpili ng target ng kliyente
- pasadyang pagpili ng landas
- buong pag-install ng library
- one-skill install
- pag-install ng isang bundle
- maghanap-pagkatapos-i-install
- i-preview bago magsulat
- preset na pag-save
- paboritong kasanayan o bundle toggling

Dapat ipakita ang preview:

- nalutas ang target na label
- nalutas na landas
- I-install ang saklaw
- napiling kasanayan o bundle kapag naaangkop
- katumbas na utos ng CLI---

## 5. Service Flow Contract

Dapat gabayan ng visual shell ang pagsisimula para sa:### 5.1 MCP

- transportasyon: `stdio`, `stream`, `sse`
- mode: `read-only` o `local`
- host/port configuration para sa network transports
- tahasang preview ng command### 5.2 API

- host
- daungan
- basic o hardened profile
- hardened bearer o API key auth
- mga parameter ng hardened rate-limit
- pagpapagana ng log ng pag-audit
- tahasang preview ng command### 5.3 A2A

- host
- daungan
- uri ng tindahan: `memory`, `json`, `sqlite`
- Store path para sa matibay na mga mode
- executor: `inline`, `process`
- SQLite mode na pinagana ang queue
- pagitan ng poll at tagal ng lease para sa shared-lease mode
- tahasang preview ng command---

## 6. Local State Contract

Ang visual shell ay nagpapatuloy sa lokal na estado lamang sa:```text
~/.omni-skills/state/ui-state.json
```

Kasalukuyang kasama ng estado ang:

- kamakailang pag-install
- kamakailang paglulunsad ng serbisyo
- pinangalanang install preset
- pinangalanang mga preset ng serbisyo
- paboritong kasanayan
- mga paboritong bundle

Dapat suportahan ng shell ang:

- nire-replay ang mga kamakailang pag-install
- pag-replay ng mga kamakailang paglulunsad ng serbisyo
- muling paggamit ng pinangalanang install preset
- muling paggamit ng pinangalanang mga preset ng serbisyo---

## 7. Compatibility Contract

Ang visual shell ay additive.

Ang mga daloy na ito ay dapat manatiling wasto at matatag:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills install --guided`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

Hindi kailanman dapat pilitin ng visual shell ang sarili sa tahasang mga landas ng utos ng eksperto.---

## 8. Safety Contract

Ang visual shell ay dapat gumawa ng estado at nagsusulat ng tahasan.

Dapat itong:

- i-preview ang mga pag-install bago isulat ang handoff
- i-preview ang mga utos ng paglulunsad ng serbisyo bago isagawa
- Panatilihin ang lihim na materyal mula sa malinaw na tekstong mga preview ng command kung saan praktikal
- ipagpatuloy ang estado sa lokal lamang
- panatilihin ang hindi interactive na pag-uugali ng CLI sa labas ng visual shell