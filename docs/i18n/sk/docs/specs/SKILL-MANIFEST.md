# 📋 Skill Manifest Specification (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Strojovo čitateľný manifest JSON vygenerovaný z každého súboru `SKILL.md` počas procesu zostavovania – jediný dátový kontrakt spotrebovaný všetkými povrchmi runtime.**---

## 📊 Status

| Funkcia | Štát |
|:--------|:------|
| ✅ Automaticky generované zo SKILL.md | Realizované |
| ✅ Spotrebované CLI, API, MCP, A2A | Realizované |
| ✅ Archívy s kontrolnými súčtami | Realizované |
| ✅ Bezpečnostná klasifikácia | Realizované |

>**Dôležité**: Manifest je**artefakt zostavy**. Autor prispievateľov `SKILL.md` – kanál odvodzuje manifest JSON automaticky.---

## 🎯 Purpose

Manifest existuje, takže**všetky povrchy spustenia**používajú rovnaký normalizovaný tvar:

| Povrch | Ako to používa prejavy |
|:--------|:---------------------|
| 🖥️**CLI**| Vyhľadávanie, plánovanie inštalácie, diagnostika lekárov |
| 🌐**API**| Odpovede koncových bodov, filtrovanie, odkazy na stiahnutie |
| 🔌**MCP**| Odpovede nástrojov, obsah zdrojov |
| 🤖**A2A**| Užitočné zaťaženie zisťovania a odporúčaní |---

## 📁 Output Locations

| Artefakt | Cesta |
|:---------|:-----|
| 📊 Koreňové metadáta | `metadata.json` |
| 📊 Metadáta pre jednotlivé zručnosti | `skills/<skill>/metadata.json` |
| 📋 Index zručností | `skills_index.json` |
| 📚 Publikovaný katalóg | `dist/catalog.json` |
| 📌 Manifest zručnosti | `dist/manifests/<skill>.json` |
| 📦 Zip archív | `dist/archives/<skill>.zip` |
| 📦 Archív Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Manifest kontrolného súčtu | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Pole | Popis |
|:------|:-------------|
| `verzia_schema` | Verzia schémy manifestu |
| 'id' | Stabilný identifikátor zručnosti z poľa `name` |
| "slimák" | Adresár slimák pod `skills/` |
| `zobrazovaný_názov` | Ľudsky čitateľný názov od prvého nadpisu |### 📝 Metadata

| Pole | Popis |
|:------|:-------------|
| "popis" | Krátke zhrnutie z frontmattera |
| "verzia" | Verzia zručnosti, nezávislá od verzie balíka npm |
| "kategória" | Kanonická kategória (normalizovaná) |
| `raw_category` | Pôvodná kategória od frontmattera |
| "taxonómia" | Úplné metaúdaje taxonómie s odvodenou záložnou možnosťou |
| "značky" | Vyhľadávateľné značky |
| "zložitosť" | `začiatočník` · `stredne pokročilý` · `pokročilý` · `expert` |
| "riziko" | "bezpečný" · "opatrnosť" · "urážlivý" · "kritický" |
| "zdroj" | `všetím` · `komunita` · `oficiálny` |
| "autor" | Reťazec priradenia |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Pole | Popis |
|:------|:-------------|
| "vstupný bod" | Kanonická cesta `SKILL.md` |
| `paths.root` | Zručnosť adresár vnútri repo |
| `cesty.manifest` | Vygenerovaná cesta manifestu v `dist/` |### 🖥️ Compatibility

| Pole | Popis |
|:------|:-------------|
| "nástroje" | Identifikátory nástrojov z frontmatter |
| `install_targets` | Metadáta inštalácie pre jednotlivé nástroje |

Každý cieľ inštalácie zahŕňa: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| Pole | Popis |
|:------|:-------------|
| `pod_zdroje` | Podadresáre zručností ("referencie", "agenti", "aktíva") |
| `artifacts_count` | Celkový počet súborov v balíku zručností |
| `počet_referencií` | Počet referenčných dokumentov |
| `počet_agentov` | Počet konfigurácií agenta |
| `assets_count` | Počet súborov majetku |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Pole | Popis |
|:------|:-------------|
| "stratégia" | Inštalačná stratégia (napr. `copy-skill-directory`) |
| `aktuálny_inštalátor` | Inštalačné správanie čitateľné pre človeka |
| "recepty" | Inštalačné recepty pre klienta |### 📊 Classification

| Sekcia | Polia |
|:--------|:-------|
| 🎯 „zrelosť“ | `skill_level`, `skill_level_label` |
| 📋 `najlepšie_postupy` | "skóre" (0 – 100) |
| ⭐ „kvalita“ | "skóre" (0 – 100) |
| 🛡️ "bezpečnosť" | `skóre`, `stav` |
| ✅ `overenie` | "stav" |### 📝 Content

Odvodené signály: dĺžka_tela, dĺžka_obsahu, riadky_body, počet_slov, plus štrukturálne príznaky pre príklady, sekcie na riešenie problémov atď.### 📁 Artifacts

Pole každého súboru dodaného v adresári zručností:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Druhy artefaktov**: „vstupný bod“ · „odkaz“ · „agent“ · „majetok“ · „licencia“ · „podpora“### 📦 Archives

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

| Pole | Popis |
|:------|:-------------|
| `entrypoint_sha256` | Hash súboru SKILL.md |
| `package_sha256` | Deterministický súhrn z usporiadaného zoznamu artefaktov |---

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

> 📌 Verzia balíka úložiska a verzia zručností sú rôzne problémy. Balík je momentálne `0.1.3`, pričom jednotlivé zručnosti majú svoje vlastné sémantické verzie.---

## ⚠️ Compatibility Notes

| Pravidlo | Odôvodnenie |
|:-----|:----------|
| ✅ Musí zostať odvoditeľné z repo | Nevyžaduje sa manuálne vytváranie zoznamu |
| ✅ Je možné pridať nové voliteľné polia | Dopredná kompatibilita |
| ⚠️ Existujúce polia musia zostať stabilné | Spätná kompatibilita |
| 🚫 Žiadne ručne písané manifesty | Odvodzovanie v čase výstavby je zdrojom pravdy |