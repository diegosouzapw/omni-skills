# 📋 Skill Manifest Specification (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Le manifeste JSON lisible par machine généré à partir de chaque « SKILL.md » pendant le pipeline de construction — le contrat de données unique consommé par toutes les surfaces d'exécution.**---

## 📊 Status

| Fonctionnalité | État |
|:--------|:------|
| ✅ Généré automatiquement à partir de SKILL.md | Mis en œuvre |
| ✅ Consommé par CLI, API, MCP, A2A | Mis en œuvre |
| ✅ Archives avec sommes de contrôle | Mis en œuvre |
| ✅Classification de sécurité | Mis en œuvre |

>**Important** : Le manifeste est un**artefact de construction**. Auteur des contributeurs `SKILL.md` — le pipeline dérive automatiquement le manifeste JSON.---

## 🎯 Purpose

Le manifeste existe de telle sorte que**toutes les surfaces d'exécution**consomment la même forme normalisée :

| Surfaces | Comment il utilise les manifestes |
|:--------|:-----------|
| 🖥️**CLI**| Recherche, planification d'installation, diagnostic médical |
| 🌐**API**| Réponses des points de terminaison, filtrage, liens de téléchargement |
| 🔌**MCP**| Réponses aux outils, contenu des ressources |
| 🤖**A2A**| Charges utiles de découverte et de recommandation |---

## 📁 Output Locations

| Artefact | Chemin |
|:---------|:----------|
| 📊 Métadonnées racine | `métadonnées.json` |
| 📊 Métadonnées par compétence | `skills/<compétence>/metadata.json` |
| 📋 Index des compétences | `skills_index.json` |
| 📚 Catalogue publié | `dist/catalog.json` |
| 📌 Manifeste par compétence | `dist/manifests/<compétence>.json` |
| 📦 Archives Zip | `dist/archives/<compétence>.zip` |
| 📦 Archives tarball | `dist/archives/<compétence>.tar.gz` |
| 🔒 Manifeste de somme de contrôle | `dist/archives/<compétence>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Champ | Descriptif |
|:------|:------------|
| `version_schéma` | Version du schéma manifeste |
| `identifiant` | Identifiant de compétence stable à partir du champ `name` |
| `limace` | Slug d'annuaire sous `compétences/` |
| `nom_affichage` | Titre lisible par l'homme dès le premier titre |### 📝 Metadata

| Champ | Descriptif |
|:------|:------------|
| `description` | Bref résumé du frontmatter |
| `version` | Version de compétence, indépendante de la version du package npm |
| `catégorie` | Catégorie canonique (normalisée) |
| `catégorie_raw` | Catégorie originale du frontmatter |
| `taxonomie` | Métadonnées de taxonomie complètes avec repli déduit |
| `balises` | Balises consultables |
| `complexité` | `débutant` · `intermédiaire` · `avancé` · `expert` |
| 'risque' | `sûr` · `prudence` · `offensant` · `critique` |
| `source` | `omni-équipe` · `communauté` · `officiel` |
| `auteur` | Chaîne d'attribution |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Champ | Descriptif |
|:------|:------------|
| `point d'entrée` | Chemin canonique `SKILL.md` |
| `chemins.root` | Répertoire de compétences dans le dépôt |
| `chemins.manifest` | Chemin du manifeste généré dans `dist/` |### 🖥️ Compatibility

| Champ | Descriptif |
|:------|:------------|
| `outils` | Identificateurs d'outils de Frontmatter |
| `install_targets` | Métadonnées d'installation par outil |

Chaque cible d'installation comprend : `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| Champ | Descriptif |
|:------|:------------|
| `sous_ressources` | Sous-répertoires de compétences (`références`, `agents`, `actifs`) |
| `artefacts_count` | Nombre total de fichiers dans le package de compétences |
| `références_count` | Nombre de documents de référence |
| `agents_count` | Nombre de configurations d'agent |
| `actifs_count` | Nombre de fichiers d'actifs |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Champ | Descriptif |
|:------|:------------|
| 'stratégie' | Stratégie d'installation (par exemple, `copy-skill-directory`) |
| `installateur_actuel` | Comportement d'installation lisible par l'homme |
| `recettes` | Recettes d'installation par client |### 📊 Classification

| Rubrique | Champs |
|:--------|:-------|
| 🎯 `maturité` | `skill_level`, `skill_level_label` |
| 📋 `meilleures_pratiques` | `score` (0-100) |
| ⭐ `qualité` | `score` (0-100) |
| 🛡️ `sécurité` | `score`, `statut` |
| ✅ `validation` | `statut` |### 📝 Content

Signaux dérivés : `body_length`, `content_length`, `body_lines`, `word_count`, ainsi que des indicateurs structurels pour des exemples, des sections de dépannage, etc.### 📁 Artifacts

Tableau de chaque fichier livré dans le répertoire de compétences :```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Types d'artefacts** : `point d'entrée` · `référence` · `agent` · `actif` · `licence` · `support`### 📦 Archives

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

| Champ | Descriptif |
|:------|:------------|
| `point d'entrée_sha256` | Hachage de SKILL.md |
| `package_sha256` | Résumé déterministe de la liste d'artefacts ordonnés |---

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

> 📌 La version du package du référentiel et la version des compétences sont des préoccupations différentes. Le package est actuellement « 0.1.3 », tandis que les compétences individuelles portent leurs propres versions sémantiques.---

## ⚠️ Compatibility Notes

| Règle | Justification |
|:-----|:----------|
| ✅ Doit rester dérivable du repo | Aucune création manuelle de manifeste requise |
| ✅ De nouveaux champs facultatifs peuvent être ajoutés | Compatibilité ascendante |
| ⚠️ Les champs existants doivent rester stables | Compatibilité ascendante |
| 🚫 Pas de manifeste manuscrit | La dérivation du temps de construction est la source de la vérité |