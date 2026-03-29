# 🤝 Contributing to Omni Skills (Français)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills contient à la fois un catalogue de compétences et les surfaces d'exécution construites sur ce catalogue.**
> Les contributions peuvent cibler l'un ou l'autre domaine, mais les deux doivent rester alignés sur les artefacts générés et le comportement actuel de la CLI.---

## 📊 Repository Baseline

| Métrique | Valeur |
|:-------|:------|
| 📦 Version du package | `0.1.3` |
| 🧠 Compétences publiées | '32' |
| 📦 Offres groupées entièrement sauvegardées | '7' |
| 🖥️ Clients capables d'installer | '7' |
| 🔌 Clients compatibles MCP | '16' |
| 🔄 Sorties automatiques | Activé sur `main` |---

## Important

| Quoi | Où |
|:-----|:------|
| 🧠 Les compétences sont rédigées en | `skills/<nom-compétence>/SKILL.md` |
| 📖 Modèles et conseils pour les contributeurs | `docs/contributeurs/` |
| 🧾 Flux de relations publiques canonique pour de nouvelles compétences | [Workflow de relations publiques de compétences](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Les compétences natives entrantes débarquent sous | `compétences/` (n'importe quelle langue) |
| ✨ Dérivés améliorés sélectionnés | `skills_omni/` (anglais uniquement, automatisé) |
| 🚫 `skills_omni/` est protégé | Non ouvert à la contribution publique directe |
| 📖 Documents d'exécution et d'architecture | `docs/` |
| 📄 Fichiers communautaires | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Tapez | Zone |
|:-----|:-----|
| 🧠 Ajouter ou améliorer une compétence | `compétences/` |
| 📖 Mettre à jour les directives des contributeurs | `docs/contributeurs/` |
| 🖥️ Améliorer la CLI, l'installateur ou les scripts | `outils/` |
| 📦 Améliorer l'exécution du catalogue ou les packages de protocoles | `paquets/` |
| 🧪 Renforcez les tests, les contrôles de fumée ou publiez des documents | Divers |---

## Démarrage Rapide

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 Ouvrez le PR avec « Autoriser les modifications des responsables » activé.**---

## Documentation

Une bonne compétence native entrante doit :

- ✅ Résoudre proprement un problème précis
- ✅ Être réutilisable dans tous les projets
- ✅ Incluez les instructions qu'un agent peut réellement suivre
- ✅ Avoid vague or redundant content
- ✅ Déclarez des métadonnées de présentation et de compatibilité précises lorsqu'elles sont disponibles
- ✅ Atterrissez avec les artefacts de classification `metadata.json` générés après l'exécution de l'automatisation### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 Astuce :**Les packs de compétences de niveau version doivent inclure `agents/`, `references/`, `examples/` et `scripts/`. Mais la surface d’admission est intentionnellement permissive : une compétence entrante native minimale est autorisée et le pipeline d’amélioration génère le dérivé le plus fort.### 🌐 Language Policy

| Surfaces | Langues acceptées |
|:--------|:---------|
| 📥 `compétences/` (apport natif) | Portugais, anglais ou n'importe quelle langue |
| ✨ `skills_omni/` (sortie organisée) | Anglais uniquement |

> L'amplificateur privé préserve la source native telle que soumise et réécrit le dérivé organisé en anglais.

📖 Pour la séquence complète de branchement, de validation et d'examen des améliorations, utilisez [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Exécutez ceci avant d'ouvrir un PR :```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<détails>
<summary>📋 <strong>Ce que <code>npm run validate</code> régénère</strong></summary>

- `métadonnées.json`
- `skills/<compétence>/metadata.json`
- Cartographie de taxonomie canonique
- Maturité, bonnes pratiques, scores de qualité et de sécurité
- Résultats de sécurité statiques
- État du scanner ClamAV et VirusTotal en option (une fois configuré)</details>

>**⚠️ Important :**La validation est le contrat utilisé par CLI, API, MCP, A2A, les manifestes, les archives et l'automatisation des versions. Traitez les métadonnées générées comme faisant partie de la surface de révision et non comme une sortie jetable.### 📥 Intake Policy

| État | Comportement |
|:--------------|:---------|
| Frontmatter manquant/incomplet | ⚠️ Avertissements (ne bloque pas) |
| Résultats critiques en matière de sécurité | 🚫 Bloque l'apport |
| Erreurs de validation matérielle | 🚫 Bloque l'apport |
| Norme éditoriale plus stricte | Appliqué dans le flux dérivé amélioré, pas lors de l'admission native |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<détails>
<summary>📋 <strong>Ce que valide le pass de fumée</strong></summary>

- ✅ Validation des compétences
- ✅ Génération de catalogue
- ✅ Génération de catalogue Docs
- ✅ Suite de tests
- ✅ `npm pack --dry-run`
- ✅ Démarrage de l'API
- ✅ Démarrage MCP dans `stdio`, `stream` et `sse`
- ✅ Botte A2A
- ✅ Vérification des archives et attentes en matière de packaging</details>

---

## 📋 Skill Frontmatter

Le frontmatter est fortement recommandé. Utilisez [Skill Template](docs/contributors/SKILL-TEMPLATE.md) comme référence.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<détails>
<summary>🏷️ <strong>Catégories de taxonomie canonique</strong></summary>

| Catégorie | Catégorie |
|:--------|:---------|
| `développement` | `frontend` |
| `back-end` | `fullstack-web` |
| `outils` | `cli-automatisation` |
| `affaires` | `produit` |
| `conception` | `données-ai` |
| `ai-agents` | `apprentissage automatique` |
| `devops` | `tests-sécurité` |
| `documentation` | `contenu-média` |
| 'communication' | `non classé` |</details>

>**ℹ️**La version de la compétence est indépendante de la version du package npm. Si une compétence entrante native n'a pas encore de frontmatter, elle sera acceptée avec des avertissements et dérivera des métadonnées temporaires du répertoire, du titre et du corps du texte.---

## ⚙️ Runtime Contributions

Si vous touchez `packages/`, `tools/bin/`, `tools/lib/` ou construisez des scripts :

- 📦 Gardez `dist/` et les documents alignés sur l'implémentation
- 🔄 Préférez réutiliser `packages/catalog-core` au lieu de dupliquer la logique du catalogue
- 🔒 Conservez le comportement d'écriture locale derrière les valeurs par défaut de l'aperçu ou de l'exécution à sec
- 🔌 Gardez les rédacteurs MCP disciplinés — n'ajoutez des rédacteurs de configuration de première classe que lorsque le client a un contrat de configuration public stable
- 🛡️ Traitez les avertissements du scanner de sécurité dans le cadre de la barre de révision
- 🧪 Mettre à jour les tests lors du changement de commandes CLI, de modes de transport ou de points de terminaison publics### 🚧 Important Boundary

| Faites ceci ✅ | Ne fais pas ça 🚫 |
|:----------|:-----------------|
| Soumettez votre travail natif sous « compétences/ » | Ouvrir les PR manuels qui modifient `skills_omni/` |
| Laissez l'automatisation gérer l'exécution de l'amplificateur | Ajouter directement du contenu organisé |
| Focus sur la qualité légitime des compétences | Contourner le flux automatisé de relations publiques des compagnons |

>**ℹ️**Lorsqu'une compétence native dans `skills/` est mise à jour, l'amplificateur privé la retraite et actualise la ligne de base améliorée.---

## 🔄 Enhancer Outcome States

Lors des PR publiques de compétences natives, l'amplificateur signale l'un des quatre états suivants :

| État | Signification |
|:------|:--------|
| ✅ `terminé` | Dérivé amélioré généré proprement, éligible à `skills_omni/` |
| ⚠️ `dégradé` | Terminé avec un mouvement de repli ou de score plus faible — inspectez plus attentivement |
| 🚫 `bloqué` | Arrêté pour des raisons d'infrastructure ou de validation — empêche la publication automatique |
| ❌ `échec` | Erreur inattendue — nécessite une enquête du responsable |

>**📝 Les contributeurs**n'ont pas besoin de résoudre les problèmes d'infrastructure des optimiseurs. La responsabilité est de soumettre une compétence native légitime et de garder le dépôt vert.---

## 🔄 Automatic Release Policy

Lorsqu'un changement arrive sur « main » et inclut :

- `compétences/**`
- `skills_omni/**`
- `data/bundles.json`

…le référentiel publie automatiquement une**version de package**.### 📋 Version Bump Rule

| De | À | Règle |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Patch +1 |
| `0.1.9` | `0.1.10` | Patch +1 |
| `0.1.10` | `0.2.0` | Passer au mineur suivant, réinitialiser le patch |

> Le flux de publication régénère le catalogue/les archives, valide le changement de version, balise la version, publie npm et crée automatiquement la version GitHub.---

## 📝 Commit Conventions

| Préfixe | Utiliser pour |
|:-------|:--------|
| `exploit :` | Nouvelle compétence ou fonctionnalité |
| `correctif :` | Correction de bugs |
| `docs :` | Modifications de la documentation |
| `refactor :` | Nettoyage du code ou modifications de la structure |
| `test :` | Tester les modifications |
| `corvée :` | Entretien |---

## ❓ Need Help?

| Chaîne | Lien |
|:--------|:-----|
| 💬Questions | [Ouvrir une discussion](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Bogues | [Ouvrir un numéro](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Premiers retours | [Ouvrir un brouillon de PR](https://github.com/diegosouzapw/omni-skills/pulls) |