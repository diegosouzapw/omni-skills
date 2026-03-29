# 🖥️ CLI Visual Shell Specification (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Adfærdskontrakt for den blækbaserede terminal-brugergrænseflade, der er afsløret af "omni-skills ui".**---

## 1. Scope

Den visuelle skal er en guidet produktoverflade oven på den eksisterende CLI- og installatørmotor.

Det erstatter ikke:

- ekspert flag-baseret CLI-brug
- `tools/bin/install.js`
- det guidede tekstinstallationsforløb
- API, MCP eller A2A runtime adfærd

Den definerer:

- adfærden af `omni-skills ui`
- reservekontrakten for `omni-skills ui --text`
- lokal stat og forudindstillet persistens
- guidede forhåndsvisninger af servicelancering
- Repeterbarhed for seneste installationer og servicekørsler---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` lancerer den blæk-baserede visuelle skal.

Den visuelle skal er den primære ikke-ekspert terminaloplevelse for:

- installere flows
- katalog-første opdagelse og installation
- MCP opstart
- API opstart
- A2A opstart
- læge og røgaflevering### 2.2 Text Fallback

`omni-skills ui --text` starter den readline-baserede reservegrænseflade.

Dette er fortsat nyttigt, når:

- en terminal kan ikke gengive den rigere skal korrekt
- Raw-mode adfærd er begrænset
- et minimalt tekstfald er at foretrække### 2.3 Handoff Rule

Den visuelle shell genimplementerer ikke service-runtimes eller installationsskrivninger direkte.

Efter forhåndsvisning og bekræftelse afslutter den rent og sender udførelsen til det eksisterende CLI-indgangspunkt med de tilsvarende argumenter og miljøvariabler.---

## 3. Home Screen Contract

Startskærmen skal afsløre:

- installere færdigheder
- find og installer
- Gentag de seneste installationer, når de er til stede
- Kør gemte installationsforudindstillinger, når de er til stede
- starte en tjeneste
- Gentag de seneste tjenester, når de er til stede
- Kør gemte tjenesteforudindstillinger, når de er til stede
- læge
- røg
- udgang

Startskærmen skal også dukke op:

- aktuelle offentliggjorte bundt tilgængelighed
- lokal stat tæller for seneste, forudindstillinger og favoritter---

## 4. Install Flow Contract

Det visuelle skalinstallationsflow skal understøtte:

- kendt klientmålvalg
- tilpasset stivalg
- fuld biblioteksinstallation
- installation med én færdighed
- et-bundt installation
- søg-så-installer
- forhåndsvisning før skrivning
- forudindstillet lagring
- yndlingsfærdighed eller bundtskiftning

Forhåndsvisningen skal vise:

- løst målmærke
- løst vej
- installere omfang
- udvalgt færdighed eller bundt, når det er relevant
- tilsvarende CLI-kommando---

## 5. Service Flow Contract

Den visuelle skal skal guide opstart for:### 5.1 MCP

- transport: `stdio`, `stream`, `sse`
- tilstand: "skrivebeskyttet" eller "lokal".
- vært/port konfiguration for netværkstransporter
- Eksplicit kommando forhåndsvisning### 5.2 API

- vært
- port
- grund- eller hærdet profil
- hærdet bærer eller API-nøgleaut
- hærdede hastighedsgrænseparametre
- aktivering af revisionslog
- Eksplicit kommando forhåndsvisning### 5.3 A2A

- vært
- port
- butikstype: `hukommelse`, `json`, `sqlite`
- butikssti til holdbare tilstande
- udfører: 'inline', 'proces'
- køaktiveret SQLite-tilstand
- afstemningsinterval og leasingvarighed for delt leasing-tilstand
- Eksplicit kommando forhåndsvisning---

## 6. Local State Contract

Den visuelle skal fortsætter kun lokal tilstand i:```text
~/.omni-skills/state/ui-state.json
```

Staten omfatter i øjeblikket:

- seneste installationer
- seneste tjenestelanceringer
- navngivne installationsforudindstillinger
- navngivne serviceforudindstillinger
- yndlingsfærdigheder
- yndlingsbundter

Skallen skal understøtte:

- genafspilning af seneste installationer
- genafspilning af de seneste tjenestelanceringer
- genbrug af navngivne installationsforudindstillinger
- genbrug af navngivne serviceforudindstillinger---

## 7. Compatibility Contract

Den visuelle skal er additiv.

Disse strømme skal forblive gyldige og stabile:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills install --guided`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

Den visuelle skal må aldrig tvinge sig selv ind på eksplicitte ekspertkommandostier.---

## 8. Safety Contract

Den visuelle skal skal gøre staten og skriver eksplicit.

Det skal:

- forhåndsvisning af installationer før overdragelse
- forhåndsvisning af servicestartkommandoer før udførelse
- hold hemmeligt materiale ude af klartekst-kommandoer, hvor det er praktisk
- vedvarer kun lokalt
- Bevar ikke-interaktiv CLI-adfærd uden for den visuelle skal