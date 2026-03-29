# 📋 Skill Manifest Specification (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Das maschinenlesbare JSON-Manifest, das während der Build-Pipeline aus jeder „SKILL.md“ generiert wird – der einzelne Datenvertrag, der von allen Laufzeitoberflächen genutzt wird.**---

## 📊 Status

| Funktion | Staat |
|:--------|:------|
| ✅ Automatisch generiert von SKILL.md | Implementiert |
| ✅ Verbraucht von CLI, API, MCP, A2A | Implementiert |
| ✅ Archive mit Prüfsummen | Implementiert |
| ✅ Sicherheitsklassifizierung | Implementiert |

>**Wichtig**: Das Manifest ist ein**Build-Artefakt**. Mitwirkender Autor „SKILL.md“ – die Pipeline leitet das JSON-Manifest automatisch ab.---

## 🎯 Purpose

Das Manifest ist so vorhanden, dass**alle Laufzeitoberflächen**dieselbe normalisierte Form verwenden:

| Oberfläche | Wie es Manifests verwendet |
|:--------|:-------|
| 🖥️**CLI**| Suche, Installationsplanung, Arztdiagnostik |
| 🌐**API**| Endpunktantworten, Filterung, Download-Links |
| 🔌**MCP**| Tool-Antworten, Ressourceninhalte |
| 🤖**A2A**| Erkennungs- und Empfehlungsnutzlasten |---

## 📁 Output Locations

| Artefakt | Pfad |
|:---------|:-----|
| 📊 Root-Metadaten | `metadata.json` |
| 📊 Pro-Skill-Metadaten | `skills/<skill>/metadata.json` |
| 📋 Kompetenzindex | `skills_index.json` |
| 📚 Veröffentlichter Katalog | `dist/catalog.json` |
| 📌 Pro-Skill-Manifest | `dist/manifests/<skill>.json` |
| 📦 Zip-Archiv | `dist/archives/<skill>.zip` |
| 📦 Tarball-Archiv | `dist/archives/<skill>.tar.gz` |
| 🔒 Prüfsummenmanifest | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Feld | Beschreibung |
|:------|:------------|
| `schema_version` | Version des Manifestschemas |
| `id` | Stabile Skill-ID aus dem Feld „Name“ |
| „Schnecke“ | Verzeichnis-Slug unter „skills/“ |
| `Anzeigename` | Für Menschen lesbarer Titel ab der ersten Überschrift |### 📝 Metadata

| Feld | Beschreibung |
|:------|:------------|
| `Beschreibung` | Kurze Zusammenfassung von frontmatter |
| `Version` | Skill-Version, unabhängig von der npm-Paketversion |
| „Kategorie“ | Kanonische Kategorie (normalisiert) |
| `raw_category` | Originalkategorie von frontmatter |
| „Taxonomie“ | Vollständige Taxonomie-Metadaten mit abgeleitetem Fallback |
| `Tags` | Durchsuchbare Tags |
| „Komplexität“ | „Anfänger“ · „Mittelstufe“ · „Fortgeschritten“ · „Experte“ |
| „Risiko“ | „sicher“ · „Vorsicht“ · „beleidigend“ · „kritisch“ |
| „Quelle“ | „Omni-Team“ · „Community“ · „offiziell“ |
| „Autor“ | Attributionszeichenfolge |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Feld | Beschreibung |
|:------|:------------|
| „Einstiegspunkt“ | Kanonischer „SKILL.md“-Pfad |
| `paths.root` | Skill-Verzeichnis im Repo |
| `paths.manifest` | Generierter Manifestpfad in „dist/“ |### 🖥️ Compatibility

| Feld | Beschreibung |
|:------|:------------|
| `Werkzeuge` | Werkzeugkennungen von frontmatter |
| `install_targets` | Installationsmetadaten pro Tool |

Jedes Installationsziel umfasst: „tool“, „scope“, „default_path“, „installer_flag“, „current_installer_behavior“, „invocation“.### 📦 Resources

| Feld | Beschreibung |
|:------|:------------|
| `sub_resources` | Skill-Unterverzeichnisse („Referenzen“, „Agenten“, „Assets“) |
| `artifacts_count` | Gesamtzahl der Dateien im Skill-Paket |
| `references_count` | Referenzdokumentanzahl |
| `agents_count` | Anzahl der Agent-Konfigurationen |
| `assets_count` | Anzahl der Asset-Dateien |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Feld | Beschreibung |
|:------|:------------|
| „Strategie“ | Installationsstrategie (z. B. „copy-skill-directory“) |
| `current_installer` | Für Menschen lesbares Installationsverhalten |
| `Rezepte` | Installationsrezepte pro Client |### 📊 Classification

| Abschnitt | Felder |
|:--------|:-------|
| 🎯 `Reife` | `skill_level`, `skill_level_label` |
| 📋 `best_practices` | „Punktzahl“ (0-100) |
| ⭐ „Qualität“ | „Punktzahl“ (0-100) |
| 🛡️ `Sicherheit` | „Punktzahl“, „Status“ |
| ✅ „Validierung“ | `Status` |### 📝 Content

Abgeleitete Signale: „body_length“, „content_length“, „body_lines“, „word_count“ sowie Strukturflags für Beispiele, Abschnitte zur Fehlerbehebung usw.### 📁 Artifacts

Array aller im Skill-Verzeichnis gelieferten Dateien:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Artefaktarten**: „Einstiegspunkt“ · „Referenz“ · „Agent“ · „Asset“ · „Lizenz“ · „Unterstützung“.### 📦 Archives

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

| Feld | Beschreibung |
|:------|:------------|
| `entrypoint_sha256` | Hash von SKILL.md |
| `package_sha256` | Deterministischer Digest aus geordneter Artefaktliste |---

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

> 📌 Repository-Paketversion und Skill-Version sind unterschiedliche Anliegen. Das Paket ist derzeit „0.1.3“, während einzelne Fähigkeiten ihre eigenen semantischen Versionen tragen.---

## ⚠️ Compatibility Notes

| Regel | Begründung |
|:-----|:----------|
| ✅ Muss vom Repo ableitbar bleiben | Keine manuelle Manifesterstellung erforderlich |
| ✅ Neue optionale Felder können hinzugefügt werden | Vorwärtskompatibilität |
| ⚠️Bestehende Felder müssen stabil bleiben | Abwärtskompatibilität |
| 🚫 Keine handschriftlichen Manifeste | Die Ableitung zur Build-Zeit ist die Quelle der Wahrheit |