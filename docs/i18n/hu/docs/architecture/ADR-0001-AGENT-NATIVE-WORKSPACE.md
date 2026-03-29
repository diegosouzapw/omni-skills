# 📐 ADR-0001: Agent-Native Workspace Foundation (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**A kulcsfontosságú építészeti döntés, amely a monorepo munkaterület szerkezetét alakította.**---

## 📊 Status

✅**Elfogadva**— a munkaterület aktuális iránya és az aktív adattár alakja.---

## 🔍 Context

Az Omni Skills**telepítők előtt**tárolóként indult. Ez elég volt a SKILL.md tartalom terjesztéséhez, de nem elég ahhoz, hogy a katalógust az ügynökök elé tárja a protokoll-natív felületeken keresztül.

Szükségünk volt egy alapítványra, amely támogatni tudja:

| Követelmény | Jegyzőkönyv |
|:------------|:---------|
| 🌐 Csak olvasható HTTP-katalógus API | REST |
| 🔌 Csak olvasható MCP-szerver | Model Context Protocol |
| 🤖 Ügynökre néző A2A felület | Agent-to-Agent |
| 📂 Helyi oldalkocsik beszerelése | Fájlrendszer eszközök |

**Kritikus megszorítás**: Kerülje a repo fájlok önálló újraértelmezését minden új szolgáltatásban.---

## ✅ Decision

Fogadjon el egy**munkaterület-orientált monorepót**megosztott katalógusmaggal és protokoll-specifikus csomagokkal:

| Csomag | Cél |
|:--------|:--------|
| 📦 "minden készségek" (gyökér) | CLI telepítő és repo szkriptek |
| 🧠 `@omni-skills/catalog-core` | Megosztott betöltés, keresés, összehasonlítás, csomagok, telepítési tervek |
| 🌐 `@omni-skills/server-api` | Csak olvasható REST API |
| 🔌 `@omni-skills/server-mcp` | MCP stdio/stream/sse + helyi oldalkocsi móddal |
| 🤖 `@omni-skills/server-a2a` | A2A feladat futtatókörnyezet ügynökkártyával, lekérdezéssel, SSE-vel és push config |### 📁 Shared Data Sources

A katalógus magja beolvassa a generált műtermékeket:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- "skills_index.json".---

## ✅ Positive Consequences

| Eredmény | Hatás |
|:--------|:-------|
| 🔗**Megosztott adatszolgáltatási szerződés**| Az API, az MCP és az A2A ugyanazokat a műtermékeket fogyasztja |
| 🖥️**Egységes CLI**| Egy bináris felfedi a telepítést, a felhasználói felület shellt, az API-t, az MCP-t, az A2A-t, a diagnosztikát és a füstöt |
| 🧩**Protokoll elkülönítés**| Az új felületek ismétlődnek anélkül, hogy a telepítő belső részeihez kapcsolódnának |
| 🔌**Helyi oldalkocsi**| Működő írásképes MCP mód engedélyezési lista mögött, kliens-tudatos receptekkel |
| 📦**Egycsomagos futásidejű**| A közzétett npm csomag együtt tartalmazza a protokollfelületeket, az érvényesítési eszközöket és a generált melléktermékeket |---

## ⚠️ Negative Consequences

| Kompromisszum | Mérséklés |
|:---------|:-----------|
| 🔄**Metaadat-másolás**| Python build + JavaScript futtatókörnyezet → végül konszolidál |
| 🏗️**A2A komplexitás**| A tartós életciklus már létezik, de a koordinációs adapterek növelik a működési mélységet |
| 📦**Katalógus igazítás**| A szelektív telepítéshez parancsokra, jegyzékekre és dokumentumokra van szükség a szinkronizáláshoz |
| 📋**Metaadat-hiányok kötegelése**| A csomagok felülmúlhatják a közzétett készségeket, ezért kifejezett figyelmeztetést igényelnek a hiányzó tagokról |---

## ➡️ Follow-Up Items

| # | Akció | Állapot |
|:--|:-------|:-------|
| 1️⃣ | Távoli MCP-hitelesítés és sebességkorlátozás | ✅ Kész |
| 2️⃣ | Továbbfejlesztett ügyfél-specifikus MCP-konfiguráció írása | ✅ A mai napon jelen van Claude, Cursor, Codex, Gemini, Kiro, VS Code és Dev Containers számára |
| 3️⃣ | Aláírt kiadási műtermékek vagy készségenkénti archívumok | ✅ Jelenítse meg ma a CI végrehajtásával a kiadási címkéken |
| 4️⃣ | A2A feladat futásidejű → tartós hangszerelés | ✅ Jelenítse meg ma JSON/SQLite-megtartóztatással, külső végrehajtókkal, opt-in bérleti koordinációval és opcionális továbbfejlesztett Redis-koordinációval |
| 5️⃣ | A kiadott katalógus bővítése a csomagok szélesebb lefedettsége érdekében | ✅ Ajándék a jelenlegi hét kiválasztott kezdőcsomaghoz |