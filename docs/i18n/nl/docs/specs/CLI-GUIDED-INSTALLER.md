# 🧩 CLI Guided Installer Specification (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Gedragscontract voor de begeleide installatie-ervaring in de Omni Skills CLI.**---

## 1. Scope

Deze specificatie definieert het begeleide installatiegedrag dat bovenop de bestaande backend van het installatieprogramma komt.

Het vervangt niet:

- `tools/bin/install.js`
- huidige vlagstromen van deskundigen
- selectieve installatiemanifesten

Het definieert:

- hoe de begeleide modus wordt geactiveerd
- hoe bestemmingen worden gekozen
- hoe de installatieomvang wordt gekozen
- welke voorbeeldinformatie moet worden weergegeven
- hoe bevestiging en uitvoering werken---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

De CLI moet naar de begeleide installatiemodus gaan wanneer:

- de gebruiker voert `omni-skills` uit zonder argumenten in een TTY
- de gebruiker voert `omni-skills install` uit zonder selectors in een TTY### 2.2 Forced Guided Entry

De CLI moet ook de expliciete begeleide modus ondersteunen via een speciale optie, zoals:

- `omni-skills installeren --begeleid`

Deze modus zou zelfs moeten werken als de invoer wordt doorgesluisd en niet is gekoppeld aan een TTY, zolang er standaardinvoer beschikbaar is.### 2.3 Non-Interactive Safety Rule

Wanneer aangeroepen zonder TTY en zonder expliciet gevraagde begeleide modus:

- behoud het huidige standaardgedrag
- blokkeer het wachten op aanwijzingen niet---

## 3. Destination Model

Begeleide installatie moet twee doelklassen ondersteunen:### 3.1 Known Client Target

Elk bekend doelwit heeft de volgende doelstellingen:

- voor mensen leesbaar etiket
- interne tool-ID
-vlag installeren
- opgelost pad

Vereiste bekende doelen:

- Claude Code
- Cursor
- Gemini CLI
- Codex CLI
- Kiro
- Antizwaartekracht
-OpenCode### 3.2 Custom Path Target

Aangepaste padmodus moet:

- vraag om een pad
- oplossing `~`
- normaliseren naar absoluut pad
- toon het opgeloste pad in preview---

## 4. Install Scope Model

Begeleide installatie moet het volgende ondersteunen:### 4.1 Full Library

Equivalent aan de huidige installatie zonder `--skill` of `--bundle`.### 4.2 Single Skill

Hiermee kan de gebruiker één gepubliceerde vaardigheid selecteren.### 4.3 Single Bundle

Hiermee kan de gebruiker één samengestelde bundel selecteren en gepubliceerde leden oplossen.### 4.4 Search Then Install

Laat de gebruiker:

- voer een zoekopdracht in
- resultaten inspecteren
- kies een vaardigheid of bundel
- ga verder naar het installatievoorbeeld---

## 5. Preview Contract

Vóór uitvoering moet de begeleide installatie het volgende weergeven:

- bestemmingslabel
- bestemmingspad
- bereik installeren
- geselecteerde vaardigheid of bundel, indien van toepassing
- gelijkwaardige CLI-opdracht

Optioneel maar aanbevolen:

- geselecteerde samenvatting van metagegevens van vaardigheden
- Overzicht van beschikbaarheid van bundels---

## 6. Execution Contract

Na bevestiging:

- begeleide installatieafgevaardigden naar de bestaande backend van het installatieprogramma
- het implementeert het schrijven van bestanden zelf niet opnieuw

Het opdrachtvoorbeeld en de feitelijke gedelegeerde installatieargumenten moeten exact overeenkomen.---

## 7. Result Contract

Na een succesvolle uitvoering zou het begeleide installatieresultaat het volgende moeten tonen:

- succesindicator
- eindbestemmingspad
- commando dat werd uitgevoerd
- volgende aanbevolen actie

Voorbeeld volgende acties:

- gebruik de vaardigheid bij de geselecteerde cliënt
- voer 'dokter' uit
- voer `mcp stream --local` uit---

## 8. Compatibility Contract

Het volgende blijft geldig en ongewijzigd:

- `omni-vaardigheden --cursor --vaardigheid omni-figma`
- `omni-skills --bundel full-stack`
- `omni-skills --pad ./skills`
- `omni-vaardigheden vinden figma --tool cursor --install --yes`

Begeleide modus voegt gedrag toe. Het verwijdert bestaand gedrag niet.