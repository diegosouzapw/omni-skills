# 🧩 CLI Guided Installer Specification (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Beteendekontrakt för den guidade installationsupplevelsen i Omni Skills CLI.**---

## 1. Scope

Den här specifikationen definierar det guidade installationsbeteendet som sitter ovanpå den befintliga installationsservern.

Den ersätter inte:

- `tools/bin/install.js`
- nuvarande expertflagga flyter
- selektiva installationsmanifest

Den definierar:

- hur guidat läge går in
- hur destinationer väljs
- hur installationsomfattningen väljs
- vilken förhandsgranskningsinformation som måste visas
- hur bekräftelse och verkställighet fungerar---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI:n bör gå in i guidad installationsläge när:

- användaren kör "omni-skills" utan args i en TTY
- användaren kör `omni-skills install` utan väljare i en TTY### 2.2 Forced Guided Entry

CLI bör också stödja explicit guidad läge genom ett dedikerat alternativ, som:

- `omni-skills install --guided`

Det här läget bör fungera även när ingången är kopplad och inte ansluten till en TTY, så länge som standardingången är tillgänglig.### 2.3 Non-Interactive Safety Rule

När det anropas utan en TTY och utan guidat läge uttryckligen begärt:

- bevara det nuvarande standardbeteendet
- blockera inte att vänta på uppmaningar---

## 3. Destination Model

Guidad installation måste stödja två destinationsklasser:### 3.1 Known Client Target

Varje känt mål löser sig till:

- Människoläsbar etikett
- internt verktygs-id
- installera flagga
- löst väg

Krävda kända mål:

- Claude Code
- Markör
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitation
- OpenCode### 3.2 Custom Path Target

Anpassat sökvägsläge måste:

- fråga efter en väg
- lösa `~`
- normalisera till absolut väg
- visa den lösta sökvägen i förhandsgranskning---

## 4. Install Scope Model

Guidad installation måste stödja:### 4.1 Full Library

Motsvarar nuvarande installation utan "--skill" eller "--bundle".### 4.2 Single Skill

Låter användaren välja en publicerad färdighet.### 4.3 Single Bundle

Låter användaren välja ett kurerat paket och löser publicerade medlemmar.### 4.4 Search Then Install

Låter användaren:

- ange en sökfråga
- inspektera resultaten
- välj en färdighet eller ett paket
- fortsätt till installationsförhandsgranskningen---

## 5. Preview Contract

Före utförandet måste guidad installation visa:

- destinationsetikett
- destinationsväg
- installera omfattning
- vald färdighet eller paket om tillämpligt
- motsvarande CLI-kommando

Valfritt men rekommenderas:

- sammanfattning av vald färdighetsmetadata
- sammanfattning av pakettillgänglighet---

## 6. Execution Contract

Efter bekräftelse:

- guidade installationsdelegater till den befintliga installationsprogrammets backend
- det inte reimplementera filen skriver sig själv

Kommandoförhandsgranskningen och de faktiska delegerade installationsargumenten måste matcha exakt.---

## 7. Result Contract

Efter framgångsrik exekvering bör det guidade installationsresultatet visa:

- framgångsindikator
- slutdestinationsväg
- kommando som utfördes
- nästa rekommenderade åtgärd

Exempel på nästa åtgärder:

- använd färdigheten i den valda klienten
- kör `doktor`
- kör `mcp stream --local`---

## 8. Compatibility Contract

Följande förblir giltiga och oförändrade:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bunt full-stack`
- `omni-skills --path ./skills`
- `omni-skills find figma --tool cursor --install --yes`

Guidat läge lägger till beteende. Det tar inte bort existerande beteende.