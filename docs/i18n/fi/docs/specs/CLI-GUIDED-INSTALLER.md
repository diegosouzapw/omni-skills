# 🧩 CLI Guided Installer Specification (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Käyttäytymissopimus Omni Skills CLI:n ohjatusta asennuskokemuksesta.**---

## 1. Scope

Tämä spesifikaatio määrittää ohjatun asennuskäyttäytymisen, joka on olemassa olevan asennusohjelman taustaohjelman päällä.

Se ei korvaa:

- "tools/bin/install.js".
- nykyiset asiantuntijaliput
- valikoiva asennusluettelo

Se määrittelee:

- kuinka ohjattu tila siirrytään
- miten kohteet valitaan
- kuinka asennusalue valitaan
- mitä esikatselutietoja on näytettävä
- kuinka vahvistus ja toteutus toimivat---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI:n pitäisi siirtyä ohjattuun asennustilaan, kun:

- käyttäjä suorittaa "kaikki taidot" ilman argeja TTY:ssä
- käyttäjä suorittaa "omni-skills install" ilman valitsimia TTY:ssä### 2.2 Forced Guided Entry

CLI:n tulisi myös tukea eksplisiittistä ohjattua tilaa erillisen vaihtoehdon kautta, kuten:

- `kaikki taidot asennus --opastettu`

Tämän tilan pitäisi toimia myös silloin, kun tuloa ei ole liitetty TTY:hen, kunhan vakiotulo on käytettävissä.### 2.3 Non-Interactive Safety Rule

Käytettäessä ilman TTY:tä ja ilman erikseen pyydettyä ohjattua tilaa:

- säilyttää nykyinen oletuskäyttäytyminen
- älä estä kehotteiden odottamista---

## 3. Destination Model

Ohjatun asennuksen on tuettava kahta kohdeluokkaa:### 3.1 Known Client Target

Jokainen tunnettu kohde ratkaisee:

- ihmisen luettava etiketti
- sisäinen työkalutunnus
- asenna lippu
- ratkaistu polku

Vaaditut tunnetut kohteet:

- Claude Code
- Kursori
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitaatio
- OpenCode### 3.2 Custom Path Target

Mukautetun polkutilan tulee:

- kysy polkua
- ratkaise `~`
- normalisoi absoluuttiseen polkuun
- näytä ratkaistu polku esikatselussa---

## 4. Install Scope Model

Ohjatun asennuksen on tuettava:### 4.1 Full Library

Vastaa nykyistä asennusta ilman "--skill" tai "--bundle".### 4.2 Single Skill

Antaa käyttäjän valita yhden julkaistun taidon.### 4.3 Single Bundle

Antaa käyttäjän valita yhden kuratoidun paketin ja ratkaista julkaistut jäsenet.### 4.4 Search Then Install

Antaa käyttäjän:

- kirjoita hakukysely
- Tarkista tulokset
- valitse taito tai nippu
- jatka asennuksen esikatseluun---

## 5. Preview Contract

Ennen suorittamista ohjatun asennuksen tulee näyttää:

- kohdetarra
- määränpään polku
- asenna laajuus
- valittu taito tai paketti tarvittaessa
- vastaava CLI-komento

Valinnainen mutta suositeltava:

- Valittujen taitojen metatietojen yhteenveto
- paketin saatavuuden yhteenveto---

## 6. Execution Contract

Vahvistuksen jälkeen:

- ohjatut asennusedustajat olemassa olevaan asennusohjelman taustajärjestelmään
- se ei toteuta tiedostojen kirjoittamista uudelleen

Komennon esikatselun ja todellisten delegoitujen asennusohjelman argien on vastattava täsmälleen.---

## 7. Result Contract

Onnistuneen suorituksen jälkeen ohjatun asennuksen tuloksen pitäisi näyttää:

- onnistumisen indikaattori
- lopullinen määränpääpolku
- suoritettu komento
- seuraava suositeltu toimenpide

Esimerkki seuraavista toimista:

- käyttää taitoa valitussa asiakkaassa
- ajaa "lääkäri".
- suorita "mcp stream --local".---

## 8. Compatibility Contract

Seuraavat ovat voimassa ja ennallaan:

- "kaikki taidot --kursori --taito omni-figma".
- "kaikki taidot -- nippu täysi pino".
- `kaikki taidot --polku ./taidot`
- `kaikki taidot löytää figma --tool cursor --install --yes`

Ohjattu tila lisää käyttäytymistä. Se ei poista olemassa olevaa käyttäytymistä.