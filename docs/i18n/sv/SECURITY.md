# 🛡️ Security Policy (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Om du upptäcker ett säkerhetsproblem i Omni Skills, öppna inte en offentlig fråga först.**

Vänligen rapportera via någon av dessa privata kanaler:

| Kanal | Hur |
|:--------|:----|
| 🔒 GitHub säkerhetsrådgivning | [Öppna en privat rådgivning](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧 Direktkontakt | Kontakta underhållarna direkt |### 📋 Include in Your Report

- 📁 Berörd komponent eller sökväg
- 🔄 Reproduktionssteg
- ⚠️ Konsekvensanalys
- 🧪 Allt proof-of-concept-material som behövs för att verifiera problemet

>**⏱️ Vi strävar efter att kvittera rapporter inom 48 timmar**och prioritera korrigeringar efter påverkan.---

## 🎯 Scope

Den här policyn täcker förvarets körtid och innehållsytor:

| Komponent | Väg |
|:----------|:-----|
| 🖥️ CLI och installatör | `tools/bin/` |
| 📚 Delade bibliotek | `tools/lib/` |
| ⚙️ Bygga och validera skript | `verktyg/skript/` |
| 📦 Genererade katalogartefakter | `avstånd/` |
| 🌐 API-, MCP- och A2A-paket | `paket/` |
| 🧠 Färdighetsinnehåll | `skills/` – särskilt skalkommandon, nätverksåtkomst, referensflöden eller säkerhetskänslig vägledning |---

## Arkitektur

Förvaret förlitar sig på följande säkerhetskontroller:### 🧠 Skill-Level Controls

| Kontroll | Beskrivning |
|:--------|:--------|
| 🏷️ Riskfält | Skicklighetsmetadata inkluderar en deklarerad `risk` nivå |
| 📊 Poängsättning | Validering beräknar mognad, bästa praxis, kvalitet och säkerhetspoäng |
| 🔍 Statisk skanner | Inspekterar `SKILL.md`, paketerade filer och hjälparskript |
| 🦠 Valfria skannrar | ClamAV och VirusTotal hash lookup (när konfigurerad) |### 🖥️ Runtime Controls

| Kontroll | Beskrivning |
|:--------|:--------|
| 📁 Vägsäkerhet | Installera flöden använd vägsäkerhetskontroller |
| 🔒 Allowlist skriver | Lokal MCP sidovagn skriver begränsad av en godkännandelista |
| 👁️ Dry-run standardinställningar | Skrivorienterade verktyg är som standard torrkörda om de inte uttryckligen är inaktiverade |
| 🔐 Auth & limits | Bearer/API-key auth, admin runtime auth, rate limiting, CORS/IP-godkännandelistor |
| 📋 Revision | Granskningsloggning, underhållsläge och begärande-ID |### 📦 Release Controls

| Kontroll | Beskrivning |
|:--------|:--------|
| ✅ Kontrollsummanifest | SHA-256 kontrollsummor för genererade arkiv |
| ✍️ Signaturer | Fristående signaturverifiering i CI före publicering |
| 🧪 Rökkontroller | Träna levererade runtime-ytor innan release |---

## 🔮 What Is Still Open

> Det huvudsakliga säkerhetsarbetet som återstår är**inte**baslinjehärdning. De öppna föremålen är:

| Område | Status |
|:-----|:-------|
| 🏢 Företagsstyrning | Extern identitet, gatewaypolicy och WAF-integrering över nuvarande kontroller i processen |
| 🔌 MCP-klientskribenter | Bredare skribenter endast när offentliga konfigurationskontrakt är tillräckligt stabila |
| 📊 Skannerförfining | Fortsatt förfining så att exceptionella färdigheter förblir tydligt åtskilda från bara välstrukturerade |---

## ⚠️ Risk Levels in Skills

Varje färdighet deklarerar en av dessa "risk"-nivåer:

| Risknivå | Betydelse |
|:--------|:--------|
| `säkert` | Inga destruktiva operationer förväntas |
| `försiktighet` | Kan ändra filer eller interagera med externa system |
| 🔴 `offensiv` | Säkerhetstestning eller kontradiktoriska arbetsflöden som kräver uttrycklig auktorisering |
| ⛔ `kritisk` | Verksamhet med hög effekt eller systemnivå |---

## 📋 Disclosure Notes

Eftersom Omni Skills levererar exekverbara hjälpare, filsystemmedvetna lokala verktyg och klientspecifika konfigurationsskrivare, bör dessa sårbarhetsklasser behandlas som**hög prioritet**även om de visas "endast lokalt":

| Kategori | Exempel |
|:--------|:--------|
| 📁 Traversering av stig | Directory escape via färdighetsinstallations- eller konfigureringsvägar |
| 🔗 Symlink säkerhet | Symbollänk som följer under installation eller arkivextrahering |
| 🖥️ Kommandokörning | Godtycklig kommandoinjektion via färdighetsinnehåll eller skript |
| 📦 Arkivverifiering | Bypass av kontrollsumma eller signaturverifiering |
| 🔓 Auth bypass | Hastighetsbegränsande eller förbikoppling av autentisering på API/MCP |
| 🔌 Förbigå godkännandelista | Lokal kringgående av sidvagnsgodkännandelista |
| 🦠 Skannerundandragande | Falskt negativa klasser i statiska eller externa skannrar |