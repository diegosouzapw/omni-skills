# 🧭 CLI UX Roadmap (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Tuotekartta Omni-taitojen kehittämiseen lippu-ensimmäisestä asentajasta ohjatuksi päätekokemukseksi sekä kokeneille että ei-asiantuntijoille.**
> Laajuus: npm-paketti, CLI-asennuskokemus, terminaalin käyttöliittymä, palvelun käynnistysprosessit ja visuaalinen käyttöönotto.---

## 1. Problem Statement

Nykyinen suoritusaikapohja on vahva, mutta pääsykokemus on silti optimoitu käyttäjille, jotka jo ymmärtävät:

- mihin asiakkaaseen he haluavat kohdistaa
- mitä asennusvalitsinta he haluavat käyttää
- kuinka tavoitteet muunnetaan sanoiksi "--taito", "--paketti" tai "etsi"
- kun he tarvitsevat vain CLI-asennuksen MCP-, API- tai A2A-palveluihin verrattuna

Tänään:

- `npx omni-skills' oletuksena on Antigravity
- Tämä on teknisesti pätevä ja taaksepäin yhteensopiva
- mutta se ei ole ihanteellinen ensikertalaisille tai vähemmän teknisille käyttäjille

CLI:ssä on jo interaktiivinen perustila, mutta se on silti lähempänä kehittäjäapuohjelmaa kuin ohjattua tuotepintaa.

Tämä tiekartta määrittelee polun vahvempaan julkiseen käyttökokemukseen rikkomatta nykyistä lippupohjaista käyttöliittymää.---

## 1.1 Delivery Status

Tiekartta on nyt suurelta osin toteutettu nykyisessä arkiston tilassa.

Valmistunut:

- Vaihe 1: Ohjattu aloituspisteen valinta
- Vaihe 2: Ohjattu asennus
- Vaihe 3: Visual Terminal Shell
- Vaihe 4: Visual Service Hub
- Vaihe 5: Tallennetut profiilit ja toistettavuus
- Vaihe 6: Karkaisu, testit ja dokumentointi---

## 2. Goals

- Säilytä nykyiset asiantuntija-CLI-työnkulut
- Tee argumentittomasta aloituskohdasta turvallinen ja ymmärrettävä ensikertalaisille
- Korvaa hiljaiset oletukset interaktiivisissa yhteyksissä ohjatulla valinnalla
- Tukee tunnettuja tekoälyasiakkaita ja mielivaltaisia mukautettuja asennuspolkuja
- Muuta asennus, etsiminen ja palvelun käynnistys johdonmukaiseksi käyttäjämatkaksi
- Tarjoa visuaalinen päätekäyttöliittymä, joka tuntuu tuotteelta, ei vain skriptiltä
- Pidä asennusmoottori, luettelo ja palvelun suoritusaika uudelleenkäytettävinä käyttöliittymässä---

## 3. Non-Goals

- Nykyisen lippupohjaisen CLI:n korvaaminen
- Antigravitaatio poistetaan tuetuista oletuskohteista
- Verkkokäyttöliittymän lähettäminen ensisijaisena toimitustapana
- Itse API-, MCP- tai A2A-protokollien muokkaaminen osana tätä UX-työtä
- SKILL.md-kirjoittamisen korvaaminen tietokannan tukemalla hallintapaneelilla---

## 4. Design Principles

### 4.1 Backward Compatibility First

Näiden komentojen on toimittava edelleen täsmälleen samalla tavalla kuin nykyään:

- "npx omni-skills --kursori --taito omni-figma".
- `npx omni-skills --bundle devops`
- "npx omni-skills find figma -- tool cursor -- install --yes"
- "npx omni-skills mcp stream --local".
- `npx omni-skills api --portti 3333`
- "npx omni-skills a2a -- portti 3335".### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Interaktiivinen pääteistunto ilman argumentteja: avoin ohjattu kokemus
- Ei-interaktiivinen kutsu ilman argumentteja: säilytä nykyinen asennuksen oletuskäyttäytyminen
- Eksplisiittiset komennot ja liput voittaa aina käyttöliittymän päättelyn### 4.3 Reuse One Engine Across Modes

Seuraavilla pitäisi olla sama sisäinen logiikka:

- lippu ensimmäinen CLI
- ohjattu tekstitila CLI
- Visuaalinen päätekäyttöliittymä

Tämä tarkoittaa, että UX-kerros ei saa omistaa liiketoimintalogiikkaa. Sen tulisi järjestää uudelleenkäytettäviä toimia.### 4.4 Preview Before Write

Kaikkien ohjattujen kulujen, jotka aiheuttavat kirjoittamista, tulee näyttää:

- ratkaistu tavoite
- ratkaistu polku
- valitut taidot tai niput
- vastaava CLI-komento
- vahvistuskehote### 4.5 Visual Does Not Mean Implicit

Jopa rikkaammassa käyttöliittymässä järjestelmän tulisi silti tehdä tila ja toimet selkeästi:

- minne asennus on menossa
- mitä kirjoitetaan
- mitä kuljetusta tai satamaa palvelu käyttää
- onko vuo vain luku - tai paikalliskirjoituskykyinen---

## 5. User Personas

### 5.1 Expert CLI User

Tarvitsee:

- nopeat komennot
- ei pakotettuja kehotteita
- vakaat liput
- käsikirjoitettavuus### 5.2 Guided Product User

Tarvitsee:

- selkeitä valintoja
- ei ole olemassa oletusta, että antigravitaatiota halutaan
- tuki mukautetun polun asennuksille
- ymmärrettävä asennuksen esikatselu
- näkyvä ero asennuksen ja palvelimen ajonaikaisten toimien välillä### 5.3 Operator / Platform User

Tarvitsee:

- kyky käynnistää MCP, API ja A2A visuaalisesti
- järkevät oletukset
- valinnainen porttien, kuljetuksen, pysyvyyden, toimeenpanotilan, todentamisen ja paikallisen tilan viritys---

## 6. Target UX Model

Tuotteen tulee paljastaa kolme kerrosta:### 6.1 Expert Mode

Suorat komennot ja liput.

Esimerkkejä:

- "npx omni-skills --kursori --taito omni-figma".
- "npx omni-skills mcp stream --local".
- "npx omni-skills a2a -- portti 3335".### 6.2 Guided Install Mode

Käynnistyy, kun:

- käyttäjä suorittaa `npx omni-skills' TTY:ssä ilman argeja
- käyttäjä suorittaa "npx omni-skills install" ilman konkreettisia valitsimia
- käyttäjä valitsee ohjatun tilan

Ohjatun asennuksen tulisi kulkea läpi:

1. kohdeasiakas tai mukautettu polku
2. asennustyyppi
3. taito tai nippu valinta
4. esikatselu
5. vahvistus
6. toteutus
7. seuraavat vaiheet### 6.3 Visual Operations Hub

Laukaisi:

- "npx omni-skills ui".

Tästä pitäisi tulla "aloitusnäyttö" ei-asiantuntijoille käyttäjille ja operaattoreille.

Keskeiset toimet:

- asennustaidot
- löytää taitoja
- Käynnistä MCP
- Käynnistä API
- aloita A2A
- juokse lääkäri
- suorittaa savutarkastuksia---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Tulos:

- "npx omni-skills" TTY:ssä ei enää hiljaa ota antigravitaatiota
- Käyttäjiä kehotetaan valitsemaan asiakas tai mukautettu polku

Vaatimukset:

- säilyttää ei-TTY-oletusasennuskäyttäytyminen
- Lisää kohdevalitsin
- Tukee mukautettua polkua### Phase 2: Guided Install Wizard

Tulos:

- asennuksesta tulee täysi ohjattu virtaus

Vaatimukset:

- asennustilan valinta:
  - täysi kirjasto
  - yksi taito
  - yksi nippu
  - etsi ja asenna
- asennuksen esikatselu
- vastaava komentotoisto
- vahvistus ja toteutus### Phase 3: Visual Terminal Shell

Tulos:

- nykyisestä perustekstikäyttöliittymästä tulee merkkipäätesovellus

Vaatimukset:

- rikkaampi ulkoasu
- projektin brändäys ja logo
- parempi stepperi ja kortit
- näppäimistöohjattu navigointi
- Reagoi terminaalin toteutukseen musteen kautta### Phase 4: Visual Service Hub

Tulos:

- MCP, API ja A2A voidaan käynnistää visuaalisesta käyttöliittymästä

Vaatimukset:

- ohjattu MCP-virtaus
- ohjattu API-kulku
- ohjattu A2A virtaus
- näkyvä tila ja asetusten esikatselut### Phase 5: Saved Profiles and Repeatability

Tulos:

- Yleisiä asennus- tai palveluesiasetuksia voidaan käyttää uudelleen

Vaatimukset:

- muista viimeaikaiset tavoitteet
- tallennetut palvelun esiasetukset
- viimeisimmät komennot
- suosikkinippuja tai -taitoja### Phase 6: Hardening, Tests, and Documentation

Tulos:

- UX:stä tulee ylläpidetty julkinen käyttöliittymä, ei ad hoc -mukavuus

Vaatimukset:

- savun suoja
- regressiotestit
- doc-päivitykset
- käyttäjän opastus
- paketin yhteensopivuuden tarkistus---

## 8. Proposed Command Model

### Stable Commands

- "kaikki taidot".
- "kaikki taidot asentaa".
- "kaikki taidot".
- "kaikki taidot ui".
- "kaikki taidot mcp".
- "kaikkitaidot api".
- "kaikki taidot a2a".
- "kaikkitaidot lääkäri".
- "kaikkitaidot savu".### Recommended Behavior

| Kutsuminen | Käyttäytyminen |
|:-----------|:---------|
| "kaikki taidot" TTY:ssä, ei argeja | Ohjattu asennus |
| "kaikki taidot" ei-TTY:ssä, ei argeja | Nykyinen Antigravitation oletusasennus |
| "kaikki taidot asennus" TTY:ssä, ei valitsimia | Ohjattu asennus |
| `kaikki taidot install --guided` | Pakota ohjattu asennuskulku |
| "kaikki taidot ui" | Avaa visuaalisten toimintojen keskus |
| selkeät liput | Suorita suoraan ilman kiertokulkua ohjattuun virtaukseen |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Vaihtoehdot:

- Claude Code
- Kursori
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitaatio
- OpenCode
- Mukautettu polku

Lähtö:

- valittu tunnettu kohde TAI mukautettu tiedostojärjestelmäpolku### Step 2: Choose Install Type

Vaihtoehdot:

- täysi kirjasto
- yksi julkaistu taito
- yksi nippu
- etsi ja asenna

Lähtö:

- asenna laajuus### Step 3: Resolve Selection

Asennustyypistä riippuen:

- täysi kirjasto: ei ylimääräistä valitsinta
- taito: luettele tai valitse taito
- nippu: luettele tai valitse nippu
- Haku: kysy kyselyä, näytä yhteensopivia taitoja ja nippuja### Step 4: Preview

Näyttö:

- valittu kohde
- ratkaistu polku
- valittu taito tai nippu
- vastaava CLI-komento
- onko virtaus valikoiva vai täysi asennus### Step 5: Confirm

Käyttäjä vahvistaa:

- kyllä → suorita
- ei → keskeytä tai palaa### Step 6: Result

Näyttö:

- menestys/epäonnistuminen
- määränpään polku
- ehdotus seuraavaksi---

## 10. Information Architecture for the Visual Operations Hub

Toimintakeskuksen tulee paljastaa:### 10.1 Install

- ohjattu asennuskulku
- taito- tai pakettihaku
- mukautettu polku### 10.2 Discover

- luettelohaku
- suodattimet
- esikatsella metatietoja
- asenna kanavanvaihto### 10.3 MCP

Vaihtoehdot:

- liikenne: stdio, stream, sse
- paikallinen tila päälle/pois
-isäntä
- portti### 10.4 API

Vaihtoehdot:

-isäntä
- portti
- valinnainen todennus
- valinnainen hintaraja### 10.5 A2A

Vaihtoehdot:

-isäntä
- portti
- tallennustyyppi: muisti, json, sqlite
- toteuttaja: inline, prosessi
- vuokrausvaihtoehdot, kun sqlite-jono on käytössä### 10.6 Diagnostics

-lääkäri
- savua---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Nykyinen "tools/bin/cli.js" sekoittaa:

- komentojen jäsennys
- esittely
- interaktiiviset kehotteet
- toiminnan orkestrointi
- huoltoalusta

Uuden rakenteen pitäisi siirtää uudelleen käytettävä logiikka:

- `tools/lib/cli-actions/`
- Tools/lib/install-flow/
- Tools/lib/service-flow/
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js' pitäisi pysyä kirjoituskykyisenä taustaohjelmana.

Ohjatun käyttöliittymän tulisi kutsua olemassa olevaa asennusohjelman taustaohjelmaa sen sijaan, että se kopioi asennuslogiikkaa.### 11.3 Keep Find/Search Reusable

Ohjatun asennustoiminnon tulisi käyttää uudelleen samaa luetteloydin- ja CLI-hakulogiikkaa, joka on jo käytössä:

- "löytää".
- asenna esikatselut
- nipun resoluutio### 11.4 Prepare for Ink Without Forcing It Early

Ensimmäinen toimitus voi pysyä tekstitilassa.

Mutta arkkitehtuurin tulisi säilyttää selkeä sauma, jotta tekstivirta voidaan myöhemmin renderöidä Inkin avulla.---

## 12. Risks

### 12.1 Breaking Existing Automation

Lieventäminen:

- vain avaa ohjattu käyttöliittymä automaattisesti TTY:ssä
- säilyttää nykyinen oletusarvo muussa kuin TTY:ssä
- säilyttää nimenomaiset lippuvirrat### 12.2 Letting UI Own Business Logic

Lieventäminen:

- Siirrä orkestraatio uudelleenkäytettäviin toimintamoduuleihin
- Pidä asennusohjelman ja palvelun käynnistyslogiikka käyttöliittymäkerroksen alapuolella### 12.3 Ink Migration Too Early

Lieventäminen:

- lähetä ensin ohjattu virtaus nykyisessä solmupäätepinossa
- siirry sitten Inkiin, kun virtauksen semantiikka on vakaa### 12.4 Incomplete Service UX

Lieventäminen:

- lähetä ohjattu asennusohjelma ensin
- sitten kerrosohjattu palvelun käynnistäminen---

## 13. Acceptance Criteria by Phase

### Phase 1

- "npx omni-skills" TTY:ssä ei enää asennu välittömästi
- käyttäjä voi valita kohdeasiakkaan tai mukautetun polun
- ei-TTY no-arg -kutsu toimii edelleen kuten ennen### Phase 2

- Ohjattu asennus tukee täyttä kirjastoa, taitoja, nippua ja etsi ja asenna
- esikatselu näkyy aina ennen kirjoittamista
- komentovastine näytetään### Phase 3

- merkkipäätteen käyttöliittymä on olemassa
- Käyttöliittymä on visuaalisesti jäsennellympi kuin tavalliset Readline-valikot
- navigointi on näppäimistöystävällinen### Phase 4

- Käyttäjät voivat käynnistää MCP:n, API:n ja A2A:n visuaalisesta keskittimestä
- Tärkeimmät ajonaikaiset vaihtoehdot ovat konfiguroitavissa ohjatussa muodossa### Phase 5

- Viimeaikaiset tai tallennetut asetukset ovat uudelleenkäytettäviä
- Toistovirtaukset vievät vähemmän kehotteita### Phase 6

- savupeitto heijastaa uusia UX-tulopisteitä
- dokumentit kuvaavat ohjatun tilan ja ohjatun palvelun toiminnan---

## 14. Execution Order

Tämä etenemissuunnitelma on toteutettava seuraavassa järjestyksessä:

1. Ohjattu sisääntulopisteen valinta
2. Ohjattu asennustoiminto
3. Visuaalinen päätekuori
4. Visuaalinen palvelukeskus
5. Tallennetut profiilit ja toistettavuus
6. Kovettuminen, testit ja docs kiillotus

Toteutustyön tulee lukea asiaankuuluva tehtävätiedosto ennen kunkin tehtävän aloittamista, jotta CLI-työ pysyy linjassa suunnitelman kanssa eikä ajaudu.