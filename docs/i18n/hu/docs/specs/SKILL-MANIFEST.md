# 📋 Skill Manifest Specification (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**A géppel olvasható JSON-jegyzék, amely az összeállítási folyamat során minden egyes `SKILL.md-ből generálódik – az összes futásidejű felület által felhasznált egyetlen adatszerződés.**---

## 📊 Status

| Funkció | állam |
|:--------|:------|
| ✅ Automatikusan generált a SKILL.md | Megvalósítva |
| ✅ CLI, API, MCP, A2A | Megvalósítva |
| ✅ Archívumok ellenőrző összegekkel | Megvalósítva |
| ✅ Biztonsági besorolás | Megvalósítva |

>**Fontos**: A jegyzék egy**építési műtermék**. A közreműködők szerzője `SKILL.md` – a folyamat automatikusan levezeti a JSON-jegyzékfájlt.---

## 🎯 Purpose

A jegyzék úgy létezik, hogy**minden futásidejű felület**ugyanazt a normalizált alakot használja:

| Felület | Hogyan használja Manifests |
|:--------|:----------------------|
| 🖥️**CLI**| Keresés, telepítés tervezés, orvosi diagnosztika |
| 🌐**API**| Végponti válaszok, szűrés, letöltési hivatkozások |
| 🔌**MCP**| Eszközválaszok, forrástartalom |
| 🤖**A2A**| Felfedezési és ajánlási rakományok |---

## 📁 Output Locations

| Műtárgy | Útvonal |
|:---------|:-----|
| 📊 Gyökér metaadatok | `metadata.json` |
| 📊 Képességenkénti metaadatok | `skills/<skill>/metadata.json` |
| 📋 Képességmutató | `skills_index.json` |
| 📚 Megjelent katalógus | `dist/catalog.json` |
| 📌 Képességenkénti kimutatás | `dist/manifests/<skill>.json` |
| 📦 Zip archívum | `dist/archives/<skill>.zip` |
| 📦 Tarball archívum | `dist/archives/<skill>.tar.gz` |
| 🔒 Checksum manifest | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Mező | Leírás |
|:------|:-------------|
| `séma_verzió` | A jegyzékséma verziója |
| "id" | Stabil készségazonosító a „name” mezőből |
| "csiga" | Címtár a "készségek/" alatt |
| `megjelenítési_név` | Ember által olvasható cím az első címsorból |### 📝 Metadata

| Mező | Leírás |
|:------|:-------------|
| "leírás" | Rövid összefoglaló a frontmatterről |
| "verzió" | Skill verzió, független az npm csomagverziótól |
| "kategória" | Kanonikus kategória (normalizált) |
| "nyers_kategória" | Eredeti kategória a frontmatterből |
| `taxonómia` | Teljes taxonómiai metaadatok kikövetkeztetett tartalékkal |
| "címkék" | Kereshető címkék |
| "bonyolultság" | "kezdő" · "középfok" · "haladó" · "szakértő" |
| `kockázat` | "biztonságos" · "vigyázat" · "sértő" · "kritikus" |
| "forrás" | `omni-team` · `közösség` · `hivatalos` |
| "szerző" | Hozzárendelési karakterlánc |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Mező | Leírás |
|:------|:-------------|
| "belépési pont" | Kanonikus `SKILL.md` útvonal |
| `paths.root` | Képességkatalógus a repóban |
| `útvonalak.manifest` | Létrehozott jegyzék elérési útja a `dist/` |### 🖥️ Compatibility

| Mező | Leírás |
|:------|:-------------|
| "szerszámok" | Eszközazonosítók a frontmattertől |
| `install_targets` | Eszközönkénti telepítési metaadatok |

Minden telepítési cél a következőket tartalmazza: "tool", "cope", "default_path", "installer_flag", "current_installer_behavior", "invocation"### 📦 Resources

| Mező | Leírás |
|:------|:-------------|
| "alforrások" | Képességi aldirek ("hivatkozások", "ügynökök", "eszközök") |
| `termékek_száma` | Teljes fájlszám a készségcsomagban |
| `hivatkozások_száma` | Hivatkozási dokumentumok száma |
| `ügynökök_száma` | Ügynök konfigurációk száma |
| `eszközök_száma` | Eszközfájlok száma |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Mező | Leírás |
|:------|:-------------|
| "stratégia" | Stratégia telepítése (pl. "másolás-készség-könyvtár") |
| `current_installer` | Ember által olvasható telepítési viselkedés |
| `receptek` | Ügyfélenkénti telepítési receptek |### 📊 Classification

| szakasz | Mezők |
|:--------|:-------|
| 🎯 `érettség` | "készségszint", "készségszint_címke" |
| 📋 `best_practices` | "pontszám" (0-100) |
| ⭐ "minőség" | "pontszám" (0-100) |
| 🛡️ `biztonság` | `pontszám`, `állapot` |
| ✅ "érvényesítés" | "állapot" |### 📝 Content

Származtatott jelek: "body_length", "content_length", "body_lines", "word_count", plusz szerkezeti jelzők példákhoz, hibaelhárítási szakaszokhoz stb.### 📁 Artifacts

A skill könyvtárban szállított összes fájl tömbje:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Artifact fajták**: "belépési pont" · "referencia" · "ügynök" · "eszköz" · "licenc" · "támogatás"### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

| Mező | Leírás |
|:------|:-------------|
| `entrypoint_sha256` | A SKILL.md hash-je |
| `package_sha256` | Determinisztikus kivonat a rendezett műterméklistából |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 📌 A tárolócsomag verziója és a készségekre vonatkozó verziója eltérő probléma. A csomag jelenleg `0.1.3`, míg az egyéni készségek saját szemantikai verziókat hordoznak.---

## ⚠️ Compatibility Notes

| szabály | Indoklás |
|:-----|:-----------|
| ✅ A repóból származtathatónak kell maradnia | Nincs szükség manuális jegyzékalkotásra |
| ✅ Új opcionális mezők hozzáadhatók | Forward kompatibilitás |
| ⚠️ A meglévő mezőknek stabilnak kell maradniuk | Visszafelé kompatibilitás |
| 🚫 Nincsenek kézzel írt manifesztek | Az építési idejű levezetés az igazság forrása |