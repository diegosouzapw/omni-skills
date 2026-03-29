# 🔬 Codebase Deep Analysis (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Analyse technique complète de l'architecture Omni Skills actuelle, des surfaces d'exécution et du pipeline de build.**
> Dernière analyse : 2026-03-28---

## 📊 Project Overview

| Attribut | Valeur |
|:--------------|:------|
|**Nom**| `omni-compétences` |
|**Version du package**| `0.1.3` |
|**Versions de compétences**| Par compétence et indépendant de la version du package. De nombreuses compétences publiées sont encore « 0.0.1 » alors que le package est « 0.1.2 ». |
|**Licence**| MIT (code) + CC BY 4.0 (contenu) |
|**MNP**| `npx omni-compétences` |
|**Compétences publiées**| 32 |
|**Forfaits définis**| 7, le tout entièrement soutenu par des compétences publiées |
|**Catégories actives du catalogue**| 15 compartiments actifs sur 18 catégories canoniques de taxonomie |
|**LOC d'exécution/build principal échantillonné ci-dessous**| 13 600+ |
|**Dépendances de production**| 7 ($`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Instantané actuel de classification au niveau du référentiel à partir de « metadata.json » :

- score de qualité moyen : `96,3`
- score moyen des meilleures pratiques : `98,7`
- score de sécurité moyen : « 95,0 »
- les 32 compétences publiées sont validées comme « L3 »

Base de référence de la version actuelle :

- version du référentiel public : `v0.1.2`
- version d'amélioration privée : `v0.0.1`
- l'automatisation des versions publiques et l'automatisation des versions privées sont à la fois actives et vertes---

## 🏗️ Architecture Overview

Le référentiel suit un modèle**workspace monorepo**avec un noyau de catalogue partagé et plusieurs surfaces d'exécution.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

La conception est intentionnellement**pilotée par des artefacts** :

1. les compétences sont créées sous le nom « SKILL.md » plus des packs de support locaux
2. le build les valide, les classe, les archive et les normalise
3. les artefacts générés deviennent le contrat pour CLI, API, MCP et A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4 500+ LOC combinés**— la principale interface publique pour une utilisation experte et guidée.

| Commande | Fonction |
|:--------|:---------|
| 🔎 `trouver [requête]` | Recherche de catalogue en texte intégral avec filtres sensibles aux scores |
| 📦 `installer` | Installation guidée ou basée sur des indicateurs dans des clients connus ou des chemins personnalisés |
| 🧾 `config-mcp` | Prévisualisez ou écrivez une configuration MCP adaptée au client |
| 🔌 `mcp <transport>` | Démarre le serveur MCP dans `stdio`, `stream` ou `sse` |
| 🌐 `API` | Démarre l'API du catalogue |
| 🤖 `a2a` | Démarre le runtime A2A |
| 🧪 `fumée` | Validation en amont de la version |
| 🩺 `docteur` | Diagnostic local |
| 🖥️ `ui` | Shell visuel Ink avec installation, découverte, configuration et hub de services |
| 🏷️ `recatégoriser` | Inspection et réécriture des dérives taxonomiques |

La CLI n'est plus seulement un installateur. C'est l'outil d'opérations publiques pour l'ensemble de la plateforme.## 🧭 Future Expansion Direction

Le temps d'exécution public n'est plus bloqué sur les travaux de fondation, et la deuxième vague de catégorie est déjà débarquée. Le prochain travail de catalogue utile est la profondeur, et non la recherche du nombre de catégories.

Pistes code-natives nouvellement activées maintenant dans le catalogue :

- `conception` via `design-systems-ops`, `accessibility-audit` et `design-token-governance`
- `outils` via `mcp-server-authoring`
- `data-ai` via `data-contracts`
- `machine-learning` via `model-serving`

Prochaine direction recommandée :

1. approfondir la « conception », les « outils », les « données-ai » et l'« apprentissage automatique »
2. garder « business » et « content-media » différés à moins qu'une proposition clairement code-native n'apparaisse
3. préserver le plancher de qualité actuel au lieu de rouvrir la pression d’activation des catégories

Cette vague d'expansion est maintenant enregistrée dans [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— installe les compétences dans 7 assistants capables d'installer.

| Drapeau | Cible | Chemin par défaut |
|:-----|:-------|:-------------|
| `--claude` | Claude Code | `~/.claude/compétences` |
| `--curseur` | Curseur | `~/.cursor/compétences` |
| `--gémeaux` | CLI Gémeaux | `~/.gemini/compétences` |
| `--codex` | Codex CLI | `~/.codex/compétences` |
| `--kiro` | Kiro | `~/.kiro/compétences` |
| `--antigravité` | Antigravité | `~/.gemini/antigravité/compétences` |
| `--opencode` | Code Ouvert | `<espace de travail>/.opencode/skills` |

Il prend en charge :

- installations de bibliothèque complète
- installations sélectives par `--skill`
- installations organisées par `--bundle`
- flux TTY guidés et interface utilisateur visuelle
- chemins cibles personnalisés### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— couche d'exécution partagée pour CLI, API, MCP et A2A.

| Exporter | Descriptif |
|:-------|:------------|
| 🔎 `searchSkills()` | Recherche avec correspondance de texte pondérée et prise en charge des filtres |
| 📋 `listSkills()` | Filtrage multi-axes par qualité, meilleures pratiques, niveau, sécurité, risque, outil et catégorie |
| 📌 `getSkill()` | Résolution du manifeste et URL publiques enrichies |
| ⚖️ `compareSkills()` | Comparaison côte à côte |
| 💡 `recommendSkills()` | Recommandation axée sur les objectifs |
| 📦 `buildInstallPlan()` | Installer la génération de plans avec des avertissements et des conseils adaptés au client |
| 🗂️ `listBundles()` | Liste des offres groupées organisées avec disponibilité |
| 📁 `listSkillArchives()` | Résolution d'archives et de signature |

Il s’agit de la véritable source unique de vérité d’exécution après génération.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— implémentation complète de MCP à l'aide du SDK officiel.

**Transports**

- `stdio`
- HTTP diffusable
-ESS

**Outils toujours actifs en lecture seule**

- `search_skills`
- `get_skill`
- `compare_skills`
- `recommend_skills`
- `preview_install`

**Outils en mode local**

- `detect_clients`
- `list_installed_skills`
- `install_skills`
- `remove_skills`
- `configure_client_mcp`

La surface MCP est délibérément divisée entre :

- utilisation du catalogue à distance/en lecture seule
- utilisation side-car locale/capable d'écriture### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1 943 LOC**— couche MCP prenant en compte le système de fichiers pour la détection des clients, la gestion des compétences et l'écriture de la configuration MCP.

Support pratique actuel :

-**7 clients pouvant être installés**
-**16 clients compatibles avec la configuration**
-**33 cibles de configuration**
-**19 profils de configuration**

Clients pouvant être installés :

-Claude Code
- Curseur
- CLI Gémeaux
-CLI du Codex
-Kiro
- Antigravité
-OpenCode

Les clients et cibles compatibles avec la configuration incluent :

- Paramètres Claude, Claude Desktop et configuration du projet Claude
- Configuration de l'utilisateur et de l'espace de travail du curseur
- Espace de travail VS Code, utilisateur, initiés et configuration du conteneur de développement
- Paramètres utilisateur et espace de travail Gemini
- Configuration utilisateur antigravité
- Chemins utilisateur, espace de travail et anciens Kiro
- Configuration Codex CLI TOML
- Configuration des utilisateurs et de l'espace de travail OpenCode
- Paramètres de ligne
- Configuration de l'utilisateur et du dépôt GitHub Copilot CLI
- Configuration de l'utilisateur, du projet et de l'espace de travail Kilo
- Continuer l'espace de travail YAML
- Configuration utilisateur Windsurf
- Configuration de l'espace de travail Zed
- Configuration utilisateur Goose

Le side-car est intentionnellement honnête quant aux limites :

- il écrit uniquement dans une liste autorisée
- il prévisualise par défaut
- il ne conserve les rédacteurs de premier ordre que là où les documents officiels exposent un format stable
- cela ne prétend pas que chaque produit compatible MCP est également une cible d'installation de compétences### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC combinés**— API de registre en lecture seule et middleware de gouvernance.

Points finaux importants :

- `/santéz`
- `/openapi.json`
- `/admin/runtime`
- `/v1/compétences`
- `/v1/compétences/:id`
- `/v1/recherche`
- `/v1/comparer`
- `/v1/bundles`
- `/v1/install/plan`
- `/v1/skills/:id/download/*`

Base de gouvernance déjà mise en œuvre :

- authentification par jeton du porteur
- Authentification par clé API
- authentification du jeton d'administrateur
- limitation du débit en cours
- demander des identifiants
- journalisation d'audit
- Listes autorisées CORS
- Listes autorisées IP
- gestion du proxy de confiance
- mode entretien### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1 857 LOC combinés sur les fichiers du serveur principal, du runtime et du coordinateur**— Cycle de vie des tâches JSON-RPC 2.0 pour les workflows d'agent à agent.

Méthodes prises en charge :

- `message/envoyer`
- `message/flux`
- `tâches/obtenir`
- `tâches/annuler`
- `tâches/réabonnement`
- `tâches/pushNotificationConfig/*`

Opérations en cours :

- `découvrir les compétences`
- `recommander-pile`
- `préparer-installer-plan`

Modèle de durabilité et de coordination :

- persistance locale mémoire, JSON ou SQLite
- redémarrer la reprise
- exécuteur de processus externe en option
- coordination de file d'attente louée opt-in pour les travailleurs SQLite partagés
- Coordination facultative soutenue par Redis en tant que chemin hébergé avancé

Le choix architectural clé ici est**un fonctionnement local simple d'abord**. Redis existe en tant qu'option avancée, mais le chemin du produit par défaut reste local et léger en matière de dépendances.---

## ⚙️ Build Pipeline

| Scénario | Langue | Objectif |
|:-------|:--------|:--------|
| 📊 `skill_metadata.py` | Python | Validation, taxonomie, notation et analyse de sécurité statique |
| ✅ `validate_skills.py` | Python | Génération de métadonnées par compétence et pour le résumé racine |
| 📑 `generate_index.py` | Python | Index des compétences, manifestes, archives, signatures et sommes de contrôle |
| 🏗️ `build_catalog.js` | Noeud.js | Final `dist/catalog.json` et `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Python | Audit et réécriture des catégories canoniques |
| 🔍 `verify_archives.py` | Python | Vérification des archives et des signatures |

Deux détails comptent sur le plan opérationnel :

1. `dist/` fait partie du contrat d'exécution et est intentionnellement engagé
2. la version est suffisamment déterministe pour prendre en charge la vérification CI et la signature des versions---

## 📦 Published Catalog

Le catalogue public actuel couvre 32 compétences :

-**Découverte et planification** : `trouver des compétences`, `brainstorming`, `architecture`, `debugging`
-**Systèmes de conception et accessibilité** : `design-systems-ops`, `accessibility-audit`
-**Livraison de produits et de pile complète** : `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
-**Sécurité** : `auditeur de sécurité`, `scanner de vulnérabilité`, `réponse aux incidents`, `modélisation des menaces`
-**Workflows du responsable OSS** : `documentation`, `changelog`, `create-pr`
-**DevOps** : `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering`
-**Ingénierie IA** : `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Les sept offres groupées sont entièrement prises en charge :

- `essentiels` → `4/4`
- `full-stack` → `5/5`
- `conception` → `4/4`
- `sécurité` → `4/4`
- `devops` → `5/5`
- `ai-ingénieur` → `5/5`
- `oss-maintainer` → `4/4`

Score actuel réparti à partir du catalogue généré :

- scores de qualité : `94, 95, 96, 97, 100`
- scores des meilleures pratiques : `98, 99, 100`
- score de sécurité : toutes les compétences publiées sont actuellement de 95 

Haut de gamme représentatif :

- `omni-figma` → `qualité 100`, `best_practices 100`
- `audit-accessibilité` → `qualité 99`, `meilleures_pratiques 100`
- `auth-flows` → `qualité 97`, `best_practices 99`
- `design-systems-ops` → `qualité 97`, `best_practices 99`
- `release-engineering` → `qualité 97`, `best_practices 99`
- `modélisation des menaces` → `qualité 97`, `meilleures_pratiques 99`
- `ingénierie contextuelle` → `qualité 97`, `meilleures_pratiques 99`

Extrémité inférieure représentative à l’intérieur de la bande supérieure actuelle :

- `architecture` → `qualité 94`, `meilleures_pratiques 98`
- `changelog` → `qualité 94`, `best_practices 98`
- `create-pr` → `qualité 95`, `best_practices 98`

C'est intentionnel. Le marqueur distingue désormais « excellent » de « exceptionnel » au lieu d’aplatir l’ensemble du catalogue en haut.---

## 🌟 Strengths

1.**Conception axée sur les artefacts**
   Chaque surface d'exécution consomme le même catalogue et les mêmes manifestes générés.
2.**Large couverture de protocole**
   CLI, API, MCP et A2A coexistent sans fragmenter le modèle de données.
3.**Forte ergonomie des produits locaux**
   L'installation guidée, le shell visuel, `config-mcp` et les valeurs par défaut d'exécution à sec rendent le projet utilisable au-delà des utilisateurs expérimentés.
4.**Position de sécurité honnête**
   Les écritures locales autorisées, l'analyse statique, la signature, les sommes de contrôle et la vérification des versions sont tous explicites.
5.**Portée MCP saine**
   Le projet prend désormais en charge un large éventail de clients actuels compatibles MCP sans prétendre que les cibles non documentées sont stables.---

## 🔮 Opportunities

1.**Couverture groupée plus approfondie**
   La prochaine étape est la spécialisation au sein des offres groupées existantes, et pas seulement une large couverture.
2.**Sémantique des buteurs plus riche**
   Il est encore possible d’évaluer de manière plus sémantique la profondeur du pack de référence et la qualité du flux de travail.
3.**Plus de rédacteurs clients uniquement lorsque cela est justifié**
   L’expansion doit rester disciplinée et liée à des documents officiels stables.
4.**Décomposition du validateur**
   `skill_metadata.py` est toujours un module volumineux et bénéficierait d'une décomposition interne au fil du temps.
5.**Escalade de gouvernance hébergée**
   La base de référence actuelle en cours est suffisante pour l'auto-hébergement, mais le déploiement en entreprise nécessiterait à terme une passerelle externe et une intégration des identités.