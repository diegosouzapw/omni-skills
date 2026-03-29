# 🖥️ CLI Visual Shell Specification (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Gedragscontract voor de op Ink gebaseerde terminal-UI, weergegeven door `omni-skills ui`.**---

## 1. Scope

De visuele schil is een geleid productoppervlak bovenop de bestaande CLI en installatie-engine.

Het vervangt niet:

- deskundig, op vlaggen gebaseerd CLI-gebruik
- `tools/bin/install.js`
- de begeleide tekstinstallatiestroom
- API-, MCP- of A2A-runtimegedrag

Het definieert:

- het gedrag van `omni-skills ui`
- het reservecontract voor `omni-skills ui --text`
- lokale staat en vooraf ingestelde persistentie
- begeleide previews van servicelanceringen
- herhaalbaarheid voor recente installaties en serviceruns---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` lanceert de op Ink gebaseerde visuele shell.

De visuele schil is de belangrijkste terminalervaring voor niet-experts voor:

- installeer stromen
- Catalogus-eerste detectie en installatie
- MCP-opstarten
- API-opstarten
- A2A-opstarten
- dokter en rookoverdracht### 2.2 Text Fallback

`omni-skills ui --text` lanceert de op leesregels gebaseerde fallback-interface.

Dit blijft nuttig wanneer:

- een terminal kan de rijkere shell niet correct weergeven
- het gedrag in de onbewerkte modus is beperkt
- een minimale tekstfallback heeft de voorkeur### 2.3 Handoff Rule

De visuele shell implementeert serviceruntimes of installatieschrijfacties niet rechtstreeks opnieuw.

Na een voorbeeld en bevestiging wordt het programma netjes afgesloten en wordt de uitvoering overgedragen aan het bestaande CLI-ingangspunt met de equivalente argumenten en omgevingsvariabelen.---

## 3. Home Screen Contract

Het startscherm moet het volgende weergeven:

- vaardigheden installeren
- vinden en installeren
- herhaal recente installaties indien aanwezig
- voer opgeslagen installatievoorinstellingen uit, indien aanwezig
- een dienst starten
- herhaal recente diensten indien aanwezig
- voer opgeslagen servicevoorinstellingen uit, indien aanwezig
- dokter
- rook
- uitgang

Het startscherm zou ook moeten verschijnen:

- huidige gepubliceerde bundelbeschikbaarheid
- lokale statustellingen voor recente, voorinstellingen en favorieten---

## 4. Install Flow Contract

De visuele shell-installatiestroom moet het volgende ondersteunen:

- bekende klantdoelselectie
- aangepaste padselectie
- volledige bibliotheekinstallatie
- installatie met één vaardigheid
- installatie in één bundel
- zoeken en vervolgens installeren
- voorbeeld voordat u schrijft
- vooraf ingestelde besparing
- favoriete vaardigheid of bundel wisselen

Voorbeeld moet tonen:

- opgelost doellabel
- opgelost pad
- bereik installeren
- geselecteerde vaardigheid of bundel indien van toepassing
- gelijkwaardige CLI-opdracht---

## 5. Service Flow Contract

De visuele schil moet het opstarten begeleiden voor:### 5.1 MCP

- transport: `stdio`, `stream`, `sse`
- modus: `alleen-lezen` of `lokaal`
- host-/poortconfiguratie voor netwerktransporten
- expliciet opdrachtvoorbeeld### 5.2 API

- gastheer
- poort
- basis- of gehard profiel
- geharde drager- of API-sleutelauthenticatie
- geharde snelheidslimietparameters
- auditlog inschakelen
- expliciet opdrachtvoorbeeld### 5.3 A2A

- gastheer
- poort
- winkeltype: `geheugen`, `json`, `sqlite`
- winkelpad voor duurzame modi
- uitvoerder: `inline`, `proces`
- SQLite-modus met wachtrijfunctie
- poll-interval en leaseduur voor gedeelde leasemodus
- expliciet opdrachtvoorbeeld---

## 6. Local State Contract

De visuele shell behoudt de status Alleen lokaal in:```text
~/.omni-skills/state/ui-state.json
```

Staat omvat momenteel:

- recente installaties
- recente servicelanceringen
- benoemde installatievoorinstellingen
- benoemde servicevoorinstellingen
- favoriete vaardigheden
- favoriete bundels

De schaal moet ondersteunen:

- recente installaties opnieuw afspelen
- recente servicelanceringen opnieuw afspelen
- benoemde installatievoorinstellingen hergebruiken
- hergebruik van benoemde servicevoorinstellingen---

## 7. Compatibility Contract

De visuele schil is additief.

Deze stromen moeten geldig en stabiel blijven:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundel devops`
- `npx omni-skills install --guided`
- `npx omni-skills vind figma --tool cursor --install --yes`
- `npx omni-skills mcp-stream --local`
- `npx omni-skills api --poort 3333`
- `npx omni-skills a2a --poort 3335`

De visuele schil mag zichzelf nooit dwingen tot expliciete expertcommandopaden.---

## 8. Safety Contract

De visuele schil moet de staat en het schrijven expliciet maken.

Het moet:

- bekijk een voorbeeld van installaties vóór schrijfoverdracht
- bekijk een voorbeeld van de startopdrachten van de service vóór uitvoering
- houd waar mogelijk geheim materiaal uit de previews van commando's in duidelijke tekst
- status alleen lokaal behouden
- behoud niet-interactief CLI-gedrag buiten de visuele schil