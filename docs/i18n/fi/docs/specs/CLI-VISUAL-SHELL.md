# 🖥️ CLI Visual Shell Specification (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Omni-skills UI:n paljastaman mustepohjaisen päätteen käyttöliittymän käyttäytymissopimus.**---

## 1. Scope

Visuaalinen kuori on ohjattu tuotepinta olemassa olevan CLI- ja asennusmoottorin päällä.

Se ei korvaa:

- asiantuntijalippupohjainen CLI-käyttö
- "tools/bin/install.js".
- ohjattu tekstiasennusprosessi
- API-, MCP- tai A2A-ajonaikainen käyttäytyminen

Se määrittelee:

- "kaikkien taitojen käyttöliittymän" käyttäytyminen
- "omni-skills ui --text" -varasopimus
- paikallinen tila ja esiasetettu pysyvyys
- ohjatut palvelun käynnistämisen esikatselut
- uusimpien asennusten ja huoltoajojen toistettavuus---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` käynnistää mustepohjaisen visuaalisen kuoren.

Visuaalinen kuori on ensisijainen ei-asiantuntija-päätekokemus:

- asentaa virtauksia
- Katalogi-ensin löytäminen ja asennus
- MCP käynnistys
- API käynnistys
- A2A käynnistys
- lääkärin ja savun vaihto### 2.2 Text Fallback

`omni-skills ui --text` käynnistää readline-pohjaisen varakäyttöliittymän.

Tästä on hyötyä, kun:

- pääte ei pysty renderöimään rikkaampaa kuorta oikein
- Raaka-tilan käyttäytyminen on rajoitettua
- Minimaalinen tekstivaraus on suositeltavaa### 2.3 Handoff Rule

Visuaalinen kuori ei toteuta uudelleen palvelun ajoaikoja tai asennuskirjoituksia suoraan.

Esikatselun ja vahvistuksen jälkeen se poistuu puhtaasti ja siirtää suorituksen olemassa olevaan CLI-alkupisteeseen vastaavien argumenttien ja ympäristömuuttujien kanssa.---

## 3. Home Screen Contract

Aloitusnäytön tulee paljastaa:

- asennustaidot
- Etsi ja asenna
- toista viimeisimmät asennukset, kun niitä on
- Suorita tallennetut asennuksen esiasetukset, kun ne ovat olemassa
- aloittaa palvelun
- toista viimeisimmät palvelut, kun ne ovat olemassa
- Suorita tallennetut palvelun esiasetukset, kun ne ovat olemassa
-lääkäri
- savua
- poistu

Aloitusnäytön tulee myös tulla näkyviin:

- tämänhetkinen julkaistu paketin saatavuus
- paikalliset osavaltiot laskevat viimeisimpiä, esiasetuksia ja suosikkeja---

## 4. Install Flow Contract

Visuaalisen kuoren asennusvirran on tuettava:

- tunnettu asiakaskohteen valinta
- mukautetun polun valinta
- täydellinen kirjaston asennus
- yhden taidon asennus
- yhden paketin asennus
- etsi-ja sitten-asenna
- esikatselu ennen kirjoittamista
- esiasetusten tallennus
- suosikkitaito tai -nippujen vaihto

Esikatselun tulee näyttää:

- ratkaistu kohdetarra
- ratkaistu polku
- asenna laajuus
- valittu taito tai paketti tarvittaessa
- vastaava CLI-komento---

## 5. Service Flow Contract

Visuaalisen kuoren tulee ohjata käynnistystä:### 5.1 MCP

- kuljetus: "stdio", "stream", "sse".
- tila: "vain luku" tai "paikallinen".
- isäntä/porttikonfiguraatio verkkosiirtoja varten
- eksplisiittisen komennon esikatselu### 5.2 API

-isäntä
- portti
- perus- tai karkaistu profiili
- Harded Bearer tai API-avaimen todennus
- karkaistut nopeusrajaparametrit
- tarkastuslokin käyttöönotto
- eksplisiittisen komennon esikatselu### 5.3 A2A

-isäntä
- portti
- myymälän tyyppi: "muisti", "json", "sqlite".
- säilytyspolku kestäville tiloille
- suorittaja: "inline", "prosessi".
- jonokäyttöinen SQLite-tila
- kyselyn väli ja vuokran kesto yhteisvuokraustilassa
- eksplisiittisen komennon esikatselu---

## 6. Local State Contract

Visuaalinen kuori pysyy vain paikallisena tilassa:```text
~/.omni-skills/state/ui-state.json
```

Osavaltio sisältää tällä hetkellä:

- viimeisimmät asennukset
- äskettäiset palvelun lanseeraukset
- nimetyt asennuksen esiasetukset
- nimetyt palvelun esiasetukset
- suosikkitaidot
- suosikkinippuja

Kuoren tulee tukea:

- uusimpien asennusten toistaminen
- toistaa viimeisimmät palvelujulkaisut
- Nimettyjen asennuksen esiasetusten uudelleenkäyttö
- Nimettyjen palvelun esiasetusten uudelleenkäyttö---

## 7. Compatibility Contract

Visuaalinen kuori on additiivinen.

Näiden virtojen on pysyttävä voimassa ja vakaina:

- "npx omni-skills --kursori --taito omni-figma".
- `npx omni-skills --bundle devops`
- "npx omni-skills install --guided".
- "npx omni-skills find figma -- tool cursor -- install --yes"
- "npx omni-skills mcp stream --local".
- `npx omni-skills api --portti 3333`
- "npx omni-skills a2a -- portti 3335".

Visuaalinen kuori ei saa koskaan pakottaa itseään eksplisiittisille asiantuntijakomentopoluille.---

## 8. Safety Contract

Visuaalisen kuoren tulee tehdä tila ja kirjoittaa eksplisiittisiä.

Sen tulee:

- esikatsele asennuksia ennen kanavanvaihtoa
- esikatsella palvelun käynnistyskomentoja ennen suorittamista
- Pidä salainen materiaali poissa selkeän tekstin komennon esikatseluista mahdollisuuksien mukaan
- pysyvä tila vain paikallisesti
- säilyttää ei-interaktiivinen CLI-käyttäytyminen visuaalisen kuoren ulkopuolella