# 📋 Skill Manifest Specification (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Koneluettava JSON-luettelo, joka on luotu kustakin "SKILL.md"-tiedostosta koontiprosessin aikana – kaikkien ajonaikaisten pintojen kuluttama yksittäinen datasopimus.**---

## 📊 Status

| Ominaisuus | valtio |
|:--------|:------|
| ✅ Luotu automaattisesti tiedostosta SKILL.md | Toteutettu |
| ✅ Kuluttaa CLI, API, MCP, A2A | Toteutettu |
| ✅ Arkistot tarkistussummaineen | Toteutettu |
| ✅ Turvaluokitus | Toteutettu |

>**Tärkeää**: Luettelo on**rakennusartefaktti**. Osallistujat kirjoittaja `SKILL.md` — putki johtaa JSON-luettelon automaattisesti.---

## 🎯 Purpose

Luettelo on olemassa siten, että**kaikki ajonaikaiset pinnat**käyttävät samaa normalisoitua muotoa:

| Pinta | Kuinka se käyttää manifesteja |
|:--------|:----------------------|
| 🖥️**CLI**| Etsi, asennussuunnittelu, lääkäridiagnostiikka |
| 🌐**API**| Päätepisteen vastaukset, suodatus, latauslinkit |
| 🔌**MCP**| Työkaluvastaukset, resurssin sisältö |
| 🤖**A2A**| Löytö- ja suosituskuormat |---

## 📁 Output Locations

| Artefaktti | Polku |
|:---------|:-----|
| 📊 Pääsisällönkuvaustiedot | `metadata.json` |
| 📊 Taitokohtaiset metatiedot | `skills/<taito>/metadata.json` |
| 📋 Taitoindeksi | `skills_index.json` |
| 📚 Julkaistu luettelo | `dist/catalog.json` |
| 📌 Taitoluettelo | `dist/manifests/<taito>.json` |
| 📦 Zip-arkisto | `dist/archives/<taito>.zip` |
| 📦 Tarball-arkisto | `dist/archives/<taito>.tar.gz` |
| 🔒 Tarkistussummaluettelo | `dist/archives/<taito>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Kenttä | Kuvaus |
|:-------|:-------------|
| `schema_version` | Luettelokaavion versio |
| "id" | Vakaa taitojen tunniste nimikentästä |
| "etana" | Hakemiston etana kohdassa "taidot/" |
| `näyttönimi` | Ihmisen luettava otsikko ensimmäisestä otsikosta |### 📝 Metadata

| Kenttä | Kuvaus |
|:-------|:-------------|
| "kuvaus" | Lyhyt yhteenveto frontmatterista |
| "versio" | Taitoversio, npm-pakettiversiosta riippumaton |
| "luokka" | Kanoninen luokka (normalisoitu) |
| `raw_category` | Alkuperäinen luokka frontmatterilta |
| "taksonomia" | Täydelliset taksonomian metatiedot päätellyillä varaosilla |
| "tunnisteet" | Haettavat tunnisteet |
| "monimutkaisuus" | "aloittelija" · "keskitaso" · "edennyt" · "asiantuntija" |
| "riski" | "turvallinen" · "varoitus" · "loukkaava" · "kriittinen" |
| "lähde" ​​| `omni-team` · `yhteisö` · `virallinen` |
| "tekijä" | Attribuutiomerkkijono |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Kenttä | Kuvaus |
|:-------|:-------------|
| "sisääntulo" | Kanoninen SKILL.md-polku |
| `polut.root` | Repon taitohakemisto |
| `paths.manifest` | Luotiin luettelopolku dist/-tiedostossa |### 🖥️ Compatibility

| Kenttä | Kuvaus |
|:-------|:-------------|
| "työkalut" | Frontmatterin työkalutunnisteet |
| `install_targets` | Työkalukohtaiset asennuksen metatiedot |

Jokainen asennuskohde sisältää: "työkalu", "sopivuus", "oletuspolku", "asennuslippu", "current_installer_behavior", "invocation".### 📦 Resources

| Kenttä | Kuvaus |
|:-------|:-------------|
| `aliresurssit` | Taitojen alaosastot ("viitteet", "agentit", "omaisuus") |
| "artefacts_count" | Tiedostojen kokonaismäärä taitopaketissa |
| `viitteiden_määrä` | Viiteasiakirjojen määrä |
| "agenttien_määrä" | Agentin asetusten määrä |
| `assets_count` | Omaisuustiedostojen määrä |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Kenttä | Kuvaus |
|:-------|:-------------|
| "strategia" | Asenna strategia (esim. "copy-skill-directory") |
| `current_installer` | Ihmisten luettavissa oleva asennuskäyttäytyminen |
| "reseptit" | Asiakaskohtaiset asennusreseptit |### 📊 Classification

| jakso | Kentät |
|:--------|:-------|
| 🎯 `kypsyys` | `taitotaso`, `taitotason_tunniste` |
| 📋 `parhaat_käytännöt` | "pisteet" (0-100) |
| ⭐ "laatu" | "pisteet" (0-100) |
| 🛡️ `turvallisuus` | "pisteet", "tila" |
| ✅ "vahvistus" | "tila" |### 📝 Content

Johdetut signaalit: "body_length", "content_length", "body_lines", "word_count" sekä rakenteelliset liput esimerkeille, vianetsintäosille jne.### 📁 Artifacts

Joukko kaikista taitohakemistoon lähetetyistä tiedostoista:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Artefaktityypit**: sisääntulopiste · viite · agentti · omaisuus · lisenssi · tuki### 📦 Archives

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

| Kenttä | Kuvaus |
|:-------|:-------------|
| `entrypoint_sha256` | Hash of SKILL.md |
| `package_sha256` | Deterministinen tiivistelmä järjestetystä artefaktiluettelosta |---

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

> 📌 Arkistopakettiversio ja taitoversio ovat eri huolenaiheita. Paketti on tällä hetkellä `0.1.3`, kun taas yksittäisillä taidoilla on omat semanttiset versionsa.---

## ⚠️ Compatibility Notes

| Sääntö | Perustelut |
|:-----|:-----------|
| ✅ Täytyy pysyä johdettavissa reposta | Manuaalista luettelon luontia ei vaadita |
| ✅ Uusia valinnaisia ​​kenttiä voidaan lisätä | Eteenpäin yhteensopivuus |
| ⚠️ Olemassa olevien kenttien on pysyttävä vakaina | Taaksepäin yhteensopivuus |
| 🚫 Ei käsinkirjoitettuja manifesteja | Rakennusaikainen johtaminen on totuuden lähde |