# 🛡️ Security Policy (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Ak v Omni Skills objavíte problém so zabezpečením, neotvárajte najskôr verejný problém.**

Nahláste sa prostredníctvom jedného z týchto súkromných kanálov:

| Kanál | Ako |
|:--------|:----|
| 🔒 Bezpečnostné poradenstvo GitHub | [Otvoriť súkromnú poradňu](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧 Priamy kontakt | Kontaktujte priamo správcov |### 📋 Include in Your Report

- 📁 Ovplyvnený komponent alebo cesta
- 🔄 Reprodukčné kroky
- ⚠️ Hodnotenie vplyvu
- 🧪 Akýkoľvek dôkazový materiál potrebný na overenie problému

>**⏱️ Naším cieľom je potvrdiť správy do 48 hodín**a uprednostniť opravy podľa dopadu.---

## 🎯 Scope

Táto politika sa vzťahuje na prostredie a povrchy obsahu úložiska:

| Komponent | Cesta |
|:----------|:-----|
| 🖥️ CLI a inštalátor | `tools/bin/` |
| 📚 Zdieľané knižnice | `tools/lib/` |
| ⚙️ Vytváranie a overovanie skriptov | `nástroje/skripty/` |
| 📦 Generované artefakty katalógu | `dist/` |
| 🌐 Balíky API, MCP a A2A | `balíky/` |
| 🧠 Obsah zručností | `skills/` – najmä príkazy shellu, sieťový prístup, toky poverení alebo usmernenia citlivé na bezpečnosť |---

## Architektúra

Úložisko sa spolieha na nasledujúce bezpečnostné kontroly:### 🧠 Skill-Level Controls

| Kontrola | Popis |
|:--------|:-----------|
| 🏷️ Rizikové pole | Metadáta zručností zahŕňajú deklarovanú úroveň „rizika“ |
| 📊 Bodovanie | Validácia počíta zrelosť, osvedčené postupy, kvalitu a skóre bezpečnosti |
| 🔍 Statický skener | Kontroluje `SKILL.md`, zabalené súbory a pomocné skripty |
| 🦠 Voliteľné skenery | Vyhľadávanie hash ClamAV a VirusTotal (ak je nakonfigurované) |### 🖥️ Runtime Controls

| Kontrola | Popis |
|:--------|:-----------|
| 📁 Bezpečnosť cesty | Inštalačné toky využívajú kontroly bezpečnosti cesty |
| 🔒 Allowlist píše | Zápis miestneho postranného vozíka MCP je obmedzený zoznamom povolených |
| 👁️ Predvolené nastavenia pre chod nasucho | Nástroje orientované na zápis sú predvolene spustené nasucho, pokiaľ nie sú výslovne zakázané |
| 🔐 Auth & Limits | Overenie nosiča/kľúča API, overenie za behu správcu, obmedzenie rýchlosti, zoznamy povolených CORS/IP |
| 📋 Audit | Protokolovanie auditu, režim údržby a ID žiadostí |### 📦 Release Controls

| Kontrola | Popis |
|:--------|:-----------|
| ✅ Manifesty kontrolného súčtu | Kontrolné súčty SHA-256 pre vygenerované archívy |
| ✍️ Podpisy | Overenie samostatného podpisu v KI pred zverejnením |
| 🧪 Kontroly dymu | Cvičenie dodávané prevádzkové povrchy pred vydaním |---

## 🔮 What Is Still Open

> Hlavná zostávajúca bezpečnostná práca je**nie**základné vytvrdzovanie. Otvorené položky sú:

| Oblasť | Stav |
|:-----|:-------|
| 🏢 Podnikové riadenie | Externá identita, politika brány a integrácia WAF nad súčasnými kontrolami počas procesu |
| 🔌 Autori klientov MCP | Širšie autori iba vtedy, keď sú verejné konfiguračné zmluvy dostatočne stabilné |
| 📊 Vylepšenie skenera | Pokračujúce zdokonaľovanie, takže výnimočné zručnosti zostávajú jasne oddelené od iba dobre štruktúrovaných |---

## ⚠️ Risk Levels in Skills

Každá zručnosť deklaruje jednu z týchto „rizikových“ úrovní:

| Úroveň rizika | Význam |
|:-----------|:--------|
| 🢢 "bezpečne" | Neočakávajú sa žiadne deštruktívne operácie |
| 🡨 "pozor" | Môže upravovať súbory alebo interagovať s externými systémami |
| 🔴 "urážlivé" | Bezpečnostné testovanie alebo kontradiktórne pracovné postupy vyžadujúce výslovné povolenie |
| ⛔ „kritický“ | Operácie s veľkým dosahom alebo na úrovni systému |---

## 📋 Disclosure Notes

Pretože Omni Skills dodáva spustiteľných pomocníkov, lokálne nástroje s podporou súborového systému a zapisovače konfigurácií špecifických pre klienta, tieto triedy zraniteľnosti by sa mali považovať za**vysokú prioritu**, aj keď sa zdajú byť „len lokálne“:

| Kategória | Príklady |
|:---------|:---------|
| 📁 Prechod cesty | Adresár uniknúť cez skill install alebo konfiguračné cesty |
| 🔗 Bezpečnosť Symlink | Nasledujúci symbolický odkaz počas inštalácie alebo extrakcie archívu |
| 🖥️ Vykonanie príkazu | Ľubovoľné vstrekovanie príkazov prostredníctvom obsahu zručností alebo skriptov |
| 📦 Overenie archívu | Obídenie kontrolného súčtu alebo overenia podpisu |
| 🔓 Auth bypass | Obmedzenie rýchlosti alebo autentifikácia na API/MCP |
| 🔌 Obídenie zoznamu povolených | Obchádzanie zoznamu povolených miestnych sajdkár |
| 🦠 Únik skenera | Falošne negatívne triedy v statických alebo externých skeneroch |