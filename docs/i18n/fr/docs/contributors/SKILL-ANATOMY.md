# 🔬 Anatomy of a Well-Written Skill (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Structure et attentes en matière de qualité pour un « SKILL.md » Omni Skills — le format de création qui alimente l'ensemble du catalogue.**---

## 📐 The Two Parts

Chaque `SKILL.md` est composé de deux sections distinctes :### 1️⃣ Frontmatter (YAML Metadata)

Métadonnées lisibles par machine entre les délimiteurs `---`. Il alimente :

- 📚 Le référentiel de compétences et la génération du catalogue
- 🔎 Recherche et filtrage CLI
- ✅ Validation et notation qualité
- 📊 Génération d'artefacts de classification `metadata.json`
- 📋 Manifestes par compétence dans `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Instructions lisibles par l’homme (et par l’agent). Écrivez-le comme si vous**informiez un développeur senior**sur la façon d'effectuer une tâche - suffisamment spécifique pour qu'un agent d'IA puisse la suivre sans deviner.---

## 📋 Frontmatter Reference

| Champ | Obligatoire | Tapez | Descriptif |
|:------|:--------|:-----|:------------|
| `nom` | ✅ | chaîne | Doit correspondre au nom du répertoire, avec trait d'union minuscule |
| `description` | ✅ | chaîne | Description sur une ligne (10-200 caractères) |
| `version` | ⚡ | chaîne | Version sémantique de la compétence elle-même (par exemple, `"0.1.1"`) |
| `catégorie` | ⚡ | chaîne | Une catégorie canonique de la taxonomie des repo |
| `balises` | ⚡ | chaîne[] | Balises consultables pour la découverte |
| `complexité` | ⚡ | chaîne | `débutant` · `intermédiaire` · `avancé` · `expert` |
| 'risque' | ⚡ | chaîne | `sûr` · `prudence` · `offensant` · `critique` |
| `outils` | ⚡ | chaîne[] | Assistants de codage IA testés |
| `source` | ⚡ | chaîne | `omni-équipe` · `communauté` · `officiel` |
| `auteur` | ⚡ | chaîne | Attribution |
| `date_ajoutée` | ⚡ | chaîne | Date ISO |
| `date_mise à jour` | ⚡ | chaîne | Date ISO |

> ✅ = Toujours obligatoire · ⚡ = Obligatoire en mode strict

La version de la compétence est indépendante de la version du package npm. Le package est actuellement `0.1.3`, mais les compétences existantes peuvent valablement rester sur leur propre version sémantique.---

## 🏷️ Canonical Categories

La taxonomie des repo définit actuellement**18 catégories canoniques** :

| Catégorie | Domaine |
|:--------|:-------|
| 💻 `développement` | Développement de logiciels généraux |
| 🎨 `frontend` | Frameworks frontend et interface utilisateur |
| 🔧 `back-end` | Services backend et API |
| 🌐 `fullstack-web` | Développement Web de bout en bout |
| 🛠️ `outils` | Outils et utilitaires de développement |
| ⚙️ `cli-automatisation` | Outils CLI et scripts d'automatisation |
| 📊 `affaires` | Processus commerciaux et stratégie |
| 📐 `produit` | Gestion et conception de produits |
| 🎯 `conception` | Conception visuelle et UX |
| 🤖 `data-ai` | Ingénierie des données et applications IA |
| 🧠 `ai-agents` | Développement et modèles d'agents IA |
| 📈 `apprentissage automatique` | Modèles ML et formation |
| 🔌 `devops` | Infrastructure et déploiement |
| 🛡️ `tests-sécurité` | Pratiques de test et de sécurité |
| 📖 `documentation` | Génération et gestion de documentation |
| 🎬 `contenu-média` | Création de contenu et médias |
| 💬 `communication` | Outils et flux de travail de communication |
| ❓ `non classé` | Par défaut lorsqu'aucune correspondance n'est trouvée |

> Les étiquettes héritées telles que « workflow », « architecture », « infrastructure », « sécurité » et « tests » sont automatiquement normalisées via le mappage d'alias.---

## 📝 Body Structure

Un corps de compétences bien rédigé suit cette hiérarchie :

### 📌 Aperçu (obligatoire)
2-3 phrases sur**ce**que fait la compétence et**pourquoi**elle existe.

### 🎯 Quand utiliser (obligatoire)
Liste à puces de**scénarios spécifiques**dans lesquels cette compétence s'applique.

### 📋 Instructions de base (obligatoires)
Le**processus étape par étape**que l'agent doit suivre. Soyez explicite. Soyez précis. Les agents travaillent mieux avec des instructions claires et sans ambiguïté.

### 💡 Exemples (recommandés)
Invites concrètes, blocs de code ou résultats attendus.**Plus c'est précis, mieux c'est.**

### ✅ Meilleures pratiques (recommandées)
Utilisez le format ✅ Do / ❌ Don't pour une numérisation rapide.

### 🔧 Dépannage (facultatif)
Problèmes courants et leurs solutions.

### 🔗 Compétences connexes (facultatif)
Des références croisées à des compétences complémentaires.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Centré sur**un workflow ou un domaine spécifique**
- 📌 Les instructions sont**suffisamment claires pour qu'une IA**puisse les suivre sans interprétation humaine
- 💡 Comprend des**exemples concrets**avec le comportement attendu
- 🛡️ Dispose de conseils appropriés pour la**gestion des erreurs**
- 📊 Produit des métadonnées saines : catégorie canonique, maturité L2+, qualité 70+
- 🧰 Fournit un pack de support réutilisable, pas seulement de la prose, idéalement à travers `references/`, `scripts/`, `examples/` et `agents/` le cas échéant

Pour les modèles de notation plus forts qui poussent les compétences dans les bandes les plus élevées, voir [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Des conseils génériques qui pourraient s'appliquer à tout
- 🤷 Des instructions vagues comme "écrire du bon code"
- 🚫 Aucun exemple ni bloc de code
- ⚠️ Champs frontmatter manquants
- 📉 Score de qualité faible (inférieur à 50)