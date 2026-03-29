# 📊 Skill Classification and Metadata (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Le classificateur local qui note chaque compétence lors de la validation et de la construction, générant des profils lisibles par machine pour l'ensemble du catalogue.**---

## 📊 Status

| Sortie | Généré |
|:-------|:--------------|
| ✅ Racine `metadata.json` | Résumé à l'échelle du référentiel |
| ✅ Par compétence `skills/<skill>/metadata.json` | Classements individuels |
| ✅ Catalogue `dist/catalog.json` | Catalogue publié avec partitions |
| ✅ Manifestes `dist/manifests/<skill>.json` | Données lisibles par machine par compétence |

Généré par : `python3 tools/scripts/validate_skills.py`

Instantané actuel du référentiel :

- 32 compétences publiées
- score de qualité moyen « 96,3 »
- score moyen des meilleures pratiques « 98,7 »
- score de sécurité moyen « 95,0 »
- spread de qualité actuel '94, 95, 96, 97, 100'
- répartition des meilleures pratiques actuelles « 98, 99, 100 »---

## 🎯 Purpose

Le classificateur donne à chaque compétence un**profil cohérent lisible par machine**avant qu'elle n'atteigne le catalogue. Il effectue quatre tâches :

1. 📋**Parse**— Frontmatter YAML et corps de démarque
2. 🏷️**Normaliser**— Étiquettes de catégorie selon la taxonomie canonique
3. 📊**Classifier**— Maturité, meilleures pratiques, qualité et notation de sécurité
4. 📁**Emit**— Artefacts de métadonnées consommés par les scripts de build, les documents et CI---

## 🏷️ Canonical Taxonomy

**18 catégories canoniques**avec mappage automatique des alias :

| Catégorie | Domaine | Alias ​​courants |
|:---------|:-------|:--------------|
| 💻 `développement` | Développement de logiciels généraux | `codage`, `programmation` |
| 🎨 `frontend` | Frontend et interface utilisateur | `ui`, `web-conception` |
| 🔧 `back-end` | Backend et API | `serveur`, `api` |
| 🌐 `fullstack-web` | Web de bout en bout | `web`, `full-stack` |
| 🛠️ `outils` | Outils de développement | `utilitaires` |
| ⚙️ `cli-automatisation` | CLI et automatisation | `scripts`, `workflow` |
| 📊 `affaires` | Stratégie commerciale | 'stratégie' |
| 📐 `produit` | Gestion des produits | `pm` |
| 🎯 `conception` | Conception visuelle et UX | `ux` |
| 🤖 `data-ai` | Applications de données et d'IA | `données`, `analyses` |
| 🧠 `ai-agents` | Modèles d'agents IA | `agents` |
| 📈 `apprentissage automatique` | Modèles ML et formation | `ml` |
| 🔌 `devops` | Infrastructures | « infrastructure », « nuage » |
| 🛡️ `tests-sécurité` | Tests et sécurité | `tests`, `sécurité`, `qa` |
| 📖 `documentation` | Gestion des documents | `documents` |
| 🎬 `contenu-média` | Création de contenu | `médias`, `contenu` |
| 💬 `communication` | Outils de communication | `discuter` |
| ❓ `non classé` | Remplacement par défaut | — |

> Les étiquettes héritées telles que « workflow », « architecture », « infrastructure » sont automatiquement normalisées via le mappage d'alias.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Niveau | Étiquette | Critères |
|:------|:------|:---------|
|**L1**| `métadonnées` | Frontmatter et corps minimal |
|**L2**| `instructions` | Instructions écrites substantielles |
|**L3**| `ressources` | Scripts groupés ou ressources packagées plus riches |

Signaux supplémentaires suivis : `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

L'heuristique évalue :

| Signalisation | Ce qu'il vérifie |
|:-------|:--------------|
| 📛 Qualité des limaces | Formatage du champ `name` |
| 📝Description | Clarté, longueur, caractère informatif |
| 📐Structure | Sections et hiérarchie du document |
| 💡 Exemples | Clôtures de code et exemples de blocs |
| 🔗 Références | `références/` locales liées, `scripts/` et aides du pack de support |
| 🧰 Opérabilité | Exemples de scripts locaux exécutables et extraits de workflow concrets |
| 🧩 Profondeur du pack de support | Plusieurs familles de support, fichiers réutilisables, métadonnées d'agent et actifs opérationnels |
| 🩺 Dépannage | Paires explicites « Symptômes » et « Solution » |
| 📚 Couverture | Sections « Quand utiliser », « Meilleures pratiques », « Dépannage » et « Ressources supplémentaires » |
| 🌐 Portabilité | Formulation indépendante de l'outil |
| 📅 Fraîcheur | Évitement des dates codées en dur |

**Niveau actuel**

| Niveau | Plage de scores |
|:-----|:-----------|
| `excellent` | 90-100 |
| 'bien' | 70-89 |
| `juste` | 50-69 |
| `besoin de travail` | 0-49 |

Le marqueur est intentionnellement**suffisamment sémantique pour créer une répartition**entre les compétences matures. Une compétence avec une structure claire peut obtenir de bons résultats, mais pour atteindre la bande supérieure, elle a également besoin de signaux de profondeur tels que :

- plusieurs exemples, pas un seul
- plusieurs cas de dépannage
- conseils en matière de compétences connexes
- des packs de support locaux plus riches
- plus d'une famille de support au-delà de la simple prose, incluant idéalement `agents/` ou `assets/` où ils ajoutent une réelle réutilisation
- une section dédiée `## Workflow` avec des étapes dénombrables
- au moins une petite table opérationnelle ou carte de décision lorsque cela améliore la clarté de l'exécution
- plus de spécificité opérationnelle qu'un simple modèle
- une profondeur de flux de travail plus claire et des ressources d'aide à la décision
- profondeur du pack de support qui va au-delà d'un fichier « références/ » et d'un script lié
- suffisamment de fichiers de support réutilisables pour ressembler à un kit de flux de travail, et non à un module complémentaire contenant une seule note
- une densité opérationnelle suffisante pour séparer un contour soigné d'un kit de flux de travail réutilisable

Cela signifie qu'une compétence structurellement complète peut toujours atterrir dans les années 90 au lieu de « 100 » si son pack de support est plus restreint, ses actifs de décision sont plus minces ou sa densité opérationnelle est inférieure à celle des compétences les plus fortes du catalogue.---

### ⭐ Quality Score (0-100)

L'heuristique combine :

| Signalisation | Poids |
|:-------|:-------|
| 📝 Complétude du corps | Moyen-élevé |
| 📋 Précision de la description | Moyen |
| 📊 Complétude des métadonnées | Moyen |
| 📅 Récence (`date_updated`) | Moyen |
| 📦 Ressources packagées | Moyen |
| 📋 Contribution aux bonnes pratiques | Moyen |
| 🧠 Profondeur sémantique | Moyen-élevé |
| 🛠️ Profondeur opérationnelle | Moyen |
| 📚 Richesse du support-pack | Moyen |

**Niveaux de qualité :**

| Niveau | Plage de scores |
|:-----|:-----------|
| 💎 `platine` | 80+ |
| 🥇 `or` | 65-79 |
| 🥈 `argent` | 50-64 |
| 🥉 `bronze` | 35-49 |
| 🌱 `démarreur` | 0-34 |---

### 🛡️ Security Score (0-100)

La couche de sécurité combine :

| Scanner | Toujours activé | Ce qu'il fait |
|:--------|:--------------|:-------------|
| 🔍**Statique**| ✅ Oui | Analyse SKILL.md, les fichiers packagés et les scripts |
| 🦠**ClamAV**| ⚙️ Facultatif | Analyse des logiciels malveillants via `clamscan` |
| 🔒**VirusTotal**| ⚙️ Facultatif | Recherche de hachage (pas de téléchargement) |

**Familles de règles d'analyseur statique :**
- 🎭 Modèles d'injection et d'exfiltration rapides
- 💣 Commandes shell destructrices
- 🔑 Identifiants ou chemins d'accès au système d'exploitation suspects
- ⚠️ Primitives de script risquées (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Forme de sortie de sécurité :**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

| Rubrique | Champs |
|:--------|:-------|
| 🆔 Identité | `id`, `slug`, `display_name` |
| 🏷️ Taxonomie | `catégorie_raw`, `catégorie_canonique`, `catégorie_inferrée` |
| 📋 Création | tags, outils, complexité, risque, source, auteur |
| 📅 Dates & parcours | `date_added`, `date_updated`, chemins |
| 📊 Ressources | Compteurs de fichiers et de références |
| 📝 Signaux de contenu | Nombre de mots, longueur du corps, indicateurs structurels |
| 🧠 Profondeur sémantique | Étapes du flux de travail, exemples, profondeur du dépannage, ressources décisionnelles, familles de liens de support |
| 🧩 Structure du pack de support | Nombre de fichiers de support, familles liées, `agents/`, `assets/` et exemples réutilisables |
| 🎯 Maturité | Indicateurs de niveau, d'étiquette, de scripts/fichiers |
| 📋 Bonnes pratiques | Score et niveau |
| ⭐ Qualité | Score, niveau et répartition sémantique |
| 🛡️ Sécurité | Score, niveau, statut, résultats |
| ✅Validation | Statut, erreurs, avertissements |### Root (`metadata.json`)

| Rubrique | Champs |
|:--------|:-------|
| 📊 Résumé | Nombres, moyennes, répartition par catégorie |
| 🏷️ Taxonomie | Nombre de catégories |
| 🎯Distribution | Niveau de compétence, niveau de qualité, niveau de sécurité |
| ✅Validation | Le statut compte |
| 📋 Liste de compétences | Résumés compacts par compétence |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

Cela configure `git` pour utiliser `.githooks/pre-commit`, qui régénère les métadonnées et les artefacts de catalogue avant la validation et met automatiquement en scène les fichiers générés.