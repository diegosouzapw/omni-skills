# 🛡️ Security Policy (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Ha biztonsági problémát fedez fel az Omni Skills szolgáltatásban, először ne nyisson nyilvános kérdést.**

Kérjük, jelentse az alábbi privát csatornák egyikén:

| Csatorna | Hogyan |
|:--------|:----|
| 🔒 GitHub biztonsági figyelmeztetés | [Nyiss meg egy privát tanácsadót](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧 Közvetlen kapcsolatfelvétel | Forduljon közvetlenül a karbantartókhoz |### 📋 Include in Your Report

- 📁 Érintett komponens vagy elérési út
- 🔄 Reprodukciós lépések
- ⚠️ Hatásvizsgálat
- 🧪 Bármilyen elméleti bizonyíték a probléma ellenőrzéséhez

>**⏱️ Célunk, hogy a bejelentéseket 48 órán belül**nyugtázzuk, és a hatásoknak megfelelően priorizáljuk a javításokat.---

## 🎯 Scope

Ez a házirend lefedi a lerakat futásidejű és tartalmi felületeit:

| Alkatrész | Útvonal |
|:----------|:-----|
| 🖥️ CLI és telepítő | `tools/bin/` |
| 📚 Megosztott könyvtárak | `tools/lib/` |
| ⚙️ Szkriptek készítése és ellenőrzése | `tools/scripts/` |
| 📦 Generált katalógus-termékek | `dist/` |
| 🌐 API, MCP és A2A csomagok | `csomagok/` |
| 🧠 Ügyességi tartalom | `skills/` – különösen shell-parancsok, hálózati hozzáférés, hitelesítési adatfolyamok vagy biztonságérzékeny útmutatás |---

## Architektúra

Az adattár a következő biztonsági ellenőrzésekre támaszkodik:### 🧠 Skill-Level Controls

| Control | Leírás |
|:--------|:------------|
| 🏷️ Kockázati mező | A készségek metaadatai deklarált kockázati szintet tartalmaznak |
| 📊 Pontozás | Az érvényesítés kiszámítja az érettséget, a bevált gyakorlatokat, a minőséget és a biztonsági pontszámokat |
| 🔍 Statikus szkenner | Ellenőrzi a `SKILL.md' fájlt, a csomagolt fájlokat és a segédszkripteket |
| 🦠 Választható szkennerek | ClamAV és VirusTotal hash keresés (ha be van állítva) |### 🖥️ Runtime Controls

| Control | Leírás |
|:--------|:------------|
| 📁 Útbiztonság | Telepítse az áramlásokat útvonalbiztonsági ellenőrzésekkel |
| 🔒 Engedélyezőlista írja | A helyi MCP oldalkocsis írásokat egy engedélyezési lista korlátozza |
| 👁️ Szárazfutási alapértékek | Az írásorientált eszközök alapértelmezés szerint szárazon futnak, hacsak nincsenek kifejezetten letiltva |
| 🔐 Hitelesítés és korlátozások | Adathordozó/API-kulcs hitelesítés, rendszergazdai futásidejű hitelesítés, sebességkorlátozás, CORS/IP engedélyezési listák |
| 📋 Audit | Naplónaplózás, karbantartási mód és kérésazonosítók |### 📦 Release Controls

| Control | Leírás |
|:--------|:------------|
| ✅ Ellenőrzőösszeg-nyilatkozatok | SHA-256 ellenőrző összegek generált archívumokhoz |
| ✍️ Aláírások | Leválasztott aláírás ellenőrzése a CI-ben a közzététel előtt |
| 🧪 Füstellenőrzés | Gyakorolja a szállított futásidejű felületeket a kiadás előtt |---

## 🔮 What Is Still Open

> A hátralévő fő biztonsági munka a**nem**alapvonal-megerősítés. A nyitott tételek a következők:

| Terület | Állapot |
|:-----|:-------|
| 🏢 Vállalatirányítás | Külső identitás, átjáróházirend és WAF-integráció a jelenlegi folyamaton belüli ellenőrzések felett |
| 🔌 MCP kliens írók | Csak akkor írj szélesebb kört, ha a nyilvános konfigurációs szerződések elég stabilak |
| 📊 Szkenner finomítás | Folyamatos finomítás, hogy a kivételes készségek egyértelműen elkülönüljenek a pusztán jól strukturáltoktól |---

## ⚠️ Risk Levels in Skills

Minden készség deklarál egyet a következő „kockázati” szintek közül:

| Kockázati szint | Jelentése |
|:-----------|:--------|
| 🟢 `biztonságos` | Nem várható romboló művelet |
| 🟡 `vigyázat` | Módosíthatja a fájlokat vagy kölcsönhatásba léphet külső rendszerekkel |
| 🔴 `sértő` | Biztonsági tesztelés vagy kontradiktórius munkafolyamatok, amelyek kifejezett engedélyt igényelnek |
| ⛔ `kritikus' | Nagy hatású vagy rendszerszintű műveletek |---

## 📋 Disclosure Notes

Mivel az Omni Skills futtatható segédprogramokat, fájlrendszer-tudatos helyi eszközöket és kliens-specifikus konfigurációírókat szállít, ezeket a sebezhetőségi osztályokat**magas prioritású**ként kell kezelni, még akkor is, ha „csak helyi”-nek tűnnek:

| Kategória | Példák |
|:---------|:---------|
| 📁 Út bejárás | Címtár-kilépés készségtelepítésen vagy konfigurációs útvonalon keresztül |
| 🔗 Symlink safety | Symlink követés a telepítés vagy az archívum kibontása közben |
| 🖥️ Parancs végrehajtás | Tetszőleges parancsinjektálás képességtartalom vagy szkriptek segítségével |
| 📦 Archívum ellenőrzése | Az ellenőrzőösszeg megkerülése vagy az aláírás ellenőrzése |
| 🔓 Auth bypass | Sebességkorlátozás vagy hitelesítés megkerülése API/MCP-n |
| 🔌 Az engedélyezési lista megkerülése | Helyi oldalkocsis engedélyezési lista megkerülése |
| 🦠 Szkenner kijátszása | Hamis negatív osztályok statikus vagy külső szkennerekben |