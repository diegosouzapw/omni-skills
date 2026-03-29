# 🛡️ Security Policy (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Hvis du oppdager et sikkerhetsproblem i Omni Skills, ikke åpne en offentlig utgave først.**

Vennligst rapporter gjennom en av disse private kanalene:

| Kanal | Hvordan |
|:--------|:----|
| 🔒 GitHub sikkerhetsrådgivning | [Åpne en privat rådgivning](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧 Direkte kontakt | Kontakt vedlikeholderne direkte |### 📋 Include in Your Report

- 📁 Berørt komponent eller bane
- 🔄 Reproduksjonstrinn
- ⚠️ Konsekvensutredning
- 🧪 Alt proof-of-concept-materiale som trengs for å bekrefte problemet

>**⏱️ Vi tar sikte på å godkjenne rapporter innen 48 timer**og prioritere rettelser etter innvirkning.---

## 🎯 Scope

Denne policyen dekker depotets kjøretid og innholdsoverflater:

| Komponent | Sti |
|:----------|:-----|
| 🖥️ CLI og installatør | `tools/bin/` |
| 📚 Delte biblioteker | `tools/lib/` |
| ⚙️ Bygg og valideringsskript | `verktøy/skript/` |
| 📦 Genererte katalogartefakter | `dist/` |
| 🌐 API-, MCP- og A2A-pakker | `pakker/` |
| 🧠 Ferdighetsinnhold | `skills/` – spesielt shell-kommandoer, nettverkstilgang, legitimasjonsflyter eller sikkerhetssensitiv veiledning |---

## Arkitektur

Depotet er avhengig av følgende sikkerhetskontroller:### 🧠 Skill-Level Controls

| Kontroll | Beskrivelse |
|:--------|:--------|
| 🏷️ Risikofelt | Ferdighetsmetadata inkluderer et erklært "risiko"-nivå |
| 📊 Scoring | Validering beregner modenhet, beste praksis, kvalitet og sikkerhetspoeng |
| 🔍 Statisk skanner | Inspiserer `SKILL.md`, pakkede filer og hjelpeskript |
| 🦠 Valgfrie skannere | ClamAV og VirusTotal hash-oppslag (når konfigurert) |### 🖥️ Runtime Controls

| Kontroll | Beskrivelse |
|:--------|:--------|
| 📁 Stisikkerhet | Installer flyter bruk veisikkerhetskontroller |
| 🔒 Tillatelsesliste skriver | Lokal MCP-sidevogn skriver begrenset av en godkjenningsliste |
| 👁️ Tørrkjøre standarder | Skriveorienterte verktøy er standard til tørrkjøring med mindre de er eksplisitt deaktivert |
| 🔐 Autentisering og begrensninger | Bearer/API-key auth, admin runtime auth, rate limiting, CORS/IP-godkjenningslister |
| 📋 Revisjon | Revisjonslogging, vedlikeholdsmodus og forespørsels-IDer |### 📦 Release Controls

| Kontroll | Beskrivelse |
|:--------|:--------|
| ✅ Kontrollsummanifester | SHA-256-sjekksummer for genererte arkiver |
| ✍️ Signaturer | Fjernet signaturverifisering i CI før publisering |
| 🧪 Røyksjekker | Tren leverte runtime overflater før utgivelse |---

## 🔮 What Is Still Open

> Det viktigste sikkerhetsarbeidet som gjenstår er**ikke**grunnlinjeherding. De åpne elementene er:

| Område | Status |
|:-----|:-------|
| 🏢 Bedriftsstyring | Ekstern identitet, gatewaypolicy og WAF-integrasjon over gjeldende prosesskontroller |
| 🔌 MCP-klientskribenter | Bredere forfattere bare når offentlige konfigurasjonskontrakter er stabile nok |
| 📊 Skannerforfining | Fortsatt foredling slik at eksepsjonelle ferdigheter holdes klart atskilt fra bare godt strukturerte |---

## ⚠️ Risk Levels in Skills

Hver ferdighet erklærer ett av disse "risiko"-nivåene:

| Risikonivå | Betydning |
|:-----------|:--------|
| `trygt` | Ingen destruktive operasjoner forventet |
| `forsiktig` | Kan endre filer eller samhandle med eksterne systemer |
| 🔴 `støtende` | Sikkerhetstesting eller kontradiktoriske arbeidsflyter som krever eksplisitt autorisasjon |
| ⛔ `kritisk` | Effektive operasjoner eller operasjoner på systemnivå |---

## 📋 Disclosure Notes

Fordi Omni Skills sender kjørbare hjelpere, filsystembevisste lokalt verktøy og klientspesifikke konfigurasjonsforfattere, bør disse sårbarhetsklassene behandles som**høy prioritet**selv om de vises som "kun lokalt":

| Kategori | Eksempler |
|:--------|:--------|
| 📁 Traversering av sti | Directory escape via ferdighetsinstallering eller konfigurasjonsbaner |
| 🔗 Symlink sikkerhet | Symbolkobling som følger under installasjon eller arkivutvinning |
| 🖥️ Kommandoutførelse | Vilkårlig kommandoinjeksjon via ferdighetsinnhold eller skript |
| 📦 Arkivverifisering | Omgå kontrollsum eller signaturverifisering |
| 🔓 Auth bypass | Hastighetsbegrensende eller autentiseringsomgåelse på API/MCP |
| 🔌 Omgå tillatelsesliste | Omgåelse av lokal godkjenningsliste for sidevogn |
| 🦠 Skannerunndragelse | Falsk-negative klasser i statiske eller eksterne skannere |