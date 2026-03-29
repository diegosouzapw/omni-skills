# 🗺️ Agent-Native Roadmap (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Le plan d'évolution de l'architecture pour Omni Skills : du référentiel d'installation d'abord au runtime de catalogue partagé alimentant CLI, API, MCP et A2A sans dupliquer la logique.**---

## 📊 Current Platform Areas

| Phases | Nom | Statut |
|:------|:-----|:-------|
| 1️⃣ | Contrats et artefacts | ✅ Actuel |
| 2️⃣ | API du catalogue en lecture seule | ✅ Actuel |
| 3️⃣ | Surface de découverte MCP | ✅ Actuel |
| 4️⃣ | Surface d'installation et de configuration locale | ✅ Actuel |
| 5️⃣ | Orchestration A2A | ✅ Actuel |### ✅ What Exists Today

- artefacts de catalogue lisibles par machine dans `dist/`
- API HTTP en lecture seule avec couverture des points de terminaison pour la recherche, les offres groupées, la comparaison, la planification de l'installation et les téléchargements
- Serveur MCP avec `stdio`, transports HTTP et SSE diffusables
- side-car local avec écritures sur liste autorisée et flux `config-mcp`
- 7 clients capables d'installation, 16 clients capables de configuration, 33 cibles de configuration MCP et 19 profils de configuration
- spécialisation plus approfondie des bundles dans `full-stack`, `security`, `devops` et `ai-engineer` via `auth-flows`, `threat-modeling`, `release-engineering` et `context-engineering`
- archives par compétence (`zip`, `tar.gz`) avec sommes de contrôle SHA-256 et signatures détachées sur les balises de version
- Base de référence de gouvernance des API : authentification du porteur/clé API, authentification de l'exécution de l'administrateur, limitation du débit, journalisation d'audit, listes d'autorisation CORS/IP, proxy de confiance, mode de maintenance et identifiants de demande
- Runtime A2A avec cycle de vie des tâches, durabilité JSON/SQLite, reprise du redémarrage, streaming SSE, annulation, notifications push, exécuteur de processus en option et coordination louée opt-in### 🔭 Future Expansion Areas

La feuille de route principale décrit désormais la portée actuelle de la plateforme. Les éléments restants sont des domaines d’expansion futurs, et non des lacunes fondamentales :

- uniquement des ajouts MCP très sélectifs à partir de maintenant, et uniquement là où les documents publics officiels permettent un écrivain sûr
- des packs de référence plus profonds et une notation plus sémantique afin que le classificateur continue de séparer les compétences exceptionnelles de celles simplement perfectionnées
- Gouvernance hébergée par l'entreprise au-delà de la base de référence actuelle du processus, si le projet nécessite ultérieurement une passerelle ou une intégration IdP
- spécialisation plus approfondie dans les filières « conception », « outils », « données-ai » et « apprentissage automatique » nouvellement activées
- poursuite du perfectionnement opérationnel autour de l'amplificateur privé tout en conservant son modèle opérationnel formel : OmniRouter épinglé sur "cx/gpt-5.4", cloud hébergé en "simulation" ou en contrôle en amont dégradé, et fiable "en direct" sur LAN ou exécution auto-hébergée
- publication continue et renforcement du flux de travail uniquement en tant que travail de qualité de service, et non en tant que base de plate-forme manquante## Future Catalog Expansion Track

Les deux premières vagues d’expansion de catégories publiques sont maintenant lancées :

- `design` → `design-systems-ops`, `accessibility-audit`, `design-token-governance`
- `outils` → `mcp-server-authoring`
- `data-ai` → `data-contrats`
- `machine-learning` → `model-serving`

La prochaine étape recommandée n’est plus l’activation de catégorie en soi. Il s’agit d’approfondir ces nouvelles pistes de code natives afin qu’elles ressemblent à des surfaces de produits durables plutôt qu’à des points d’ancrage d’une seule compétence.

Direction recommandée :

1. approfondir la « conception » avec des flux de travail de système de conception plus opérationnels
2. approfondir les « outils » avec des compétences orientées création et plugins
3. Approfondir le « data-ai » avec des compétences en matière de pipeline et d'instrumentation axées sur la mise en œuvre
4. approfondir « l'apprentissage automatique » grâce à des compétences en matière d'opérations de service, de formation et d'évaluation

Catégories intentionnellement différées à moins que de fortes propositions natives du code n'apparaissent :

- 'affaires'
- `contenu-média`

Cet historique d'expansion est désormais suivi dans :

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Maintenir le flux de travail actuel « npx omni-skills » en bon état de fonctionnement
- ✅ Introduire une source de vérité lisible par machine pour les compétences
- ✅ Prise en charge de la découverte, de la recommandation et de la planification de l'installation par les agents
- ✅ Séparez les problèmes de catalogue distant des écritures du système de fichiers local
- ✅ Réutilisez les mêmes métadonnées dans CLI, API, MCP et A2A---

## 🚫 Non-Goals

- ❌ Installation à distance sur la machine de l'utilisateur depuis un serveur hébergé
- ❌ Remplacez `SKILL.md` comme format de création canonique
- ❌ Exiger des contributeurs qu'ils rédigent les manifestes à la main
- ❌ Transformez le projet en une plateforme de file d'attente hébergée lourde par défaut---

## 🏗️ Target Architecture

Un**cœur de catalogue**avec trois surfaces de protocole :

| Surfaces | Idéal pour | Mode |
|:--------|:---------|:---------|
| 🌐**API REST**| Accès au registre, intégrations d'interface utilisateur, consommateurs tiers | Lecture seule |
| 🔌**MCP**| Découverte d'agents, aperçus d'installation, rédaction de configuration, recettes client | Lecture seule + écritures locales |
| 🤖**A2A**| Orchestration d'agent à agent et transfert du plan d'installation | Cycle de vie des tâches avec une durabilité locale simple |### ⚙️ Core Principle

>**Tous les protocoles consomment la même famille d'artefacts générés.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Le manifeste reste le contrat partagé. Les archives sont des artefacts de distribution superposés à ce contrat, et non un substitut à celui-ci.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Utilisé par l'API hébergée et les serveurs MCP distants.

| ✅ Autorisé | ❌ Non autorisé |
|:---------------|:---------------|
| Compétences de recherche | Écrire dans le système de fichiers de l'appelant |
| Récupérer les manifestes | Muter la configuration du client local |
| Comparez les compétences | Déduire un état arbitraire de la machine |
| Recommander des forfaits | — |
| Construire des plans d'installation | — |### 2️⃣ Local Installer Mode

Utilisé par la CLI et le side-car MCP.

| ✅ Autorisé |
|:---------------|
| Détecter les clients IA locaux |
| Inspecter les compétences installées |
| Aperçu des opérations sur les fichiers |
| Installer ou supprimer des répertoires de compétences |
| Écrire la configuration MCP locale après l'aperçu |

> 📌 Cela reste le seul mode dans lequel de véritables écritures du système d'exploitation ont lieu.---

## 📐 Protocol Split

### 🌐 REST API

Idéal pour l'accès au registre, la recherche, la comparaison, les téléchargements versionnés et la planification de l'installation.

**Points de terminaison** : `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Idéal pour la découverte basée sur des outils, les recommandations rapides, les aperçus d'installation et la configuration MCP spécifique au client.

**Outils en lecture seule** : `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Outils locaux** : `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Idéal pour le transfert de découverte, les flux de travail de plan d'installation et l'exécution de tâches d'agent avec reprise.

**Opérations actuelles** : `découvrir-les compétences` · `recommander-pile` · `préparer-plan d'installation`---

## 🛡️ Security Model

| Principe | Mise en œuvre |
|:--------------|:---------------|
| 🔒 Les services hébergés sont en lecture seule | L'API et le MCP distant n'écrivent pas sur le système de fichiers appelant |
| 📂 Les écrits restent locaux | Side-car CLI et MCP uniquement |
| 👁️ Aperçu avant d'écrire | Valeurs par défaut d'essais à sec sur les mutations locales |
| 🔑 L'intégrité est explicite | Sommes de contrôle SHA-256 pour les artefacts générés |
| ✍️ Libérer la confiance est explicite | Signatures détachées appliquées aux balises de version |
| ⚠️ Le risque fait surface | Les métadonnées de risque et de sécurité se propagent sur chaque surface d'exécution |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- architecture cible documentée
- schéma manifeste défini
- métadonnées, catalogues, manifestes, bundles et archives générés### Phase 2: Catalog Service

- API HTTP en lecture seule avec Express 5
- recherche, filtrage, recherche de manifeste, liste de bundles, comparaison et téléchargements
- Base de référence de gouvernance hébergée basée sur l'environnement### Phase 3: MCP Discovery

- intégration officielle `@modelcontextprotocol/sdk`
- Transports `stdio`, HTTP et SSE diffusables
- outils, ressources et invites en lecture seule soutenus par le catalogue partagé### Phase 4: Local Install and Config Surface

- side-car local avec écritures sur liste autorisée
- détection de 7 clients capables d'installation
- écriture de configuration pour 16 clients compatibles sur 33 cibles et 19 profils de configuration
- flux `config-mcp` guidés dans la CLI et le shell visuel
- prise en charge stable de Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose et Dev Containers### Phase 5: A2A Orchestration

- carte d'agent sur `/.well-known/agent.json`
- Méthodes de configuration `message/send`, `message/stream`, `tasks/get`, `tasks/cancel`, `tasks/resubscribe` et de notification push
- Persistance JSON et SQLite avec récupération au redémarrage
- exécuteur de processus externe en option
- exécution louée opt-in entre les travailleurs pour SQLite et coordination Redis avancée en option
- valeurs par défaut simples conservées en mémoire, JSON ou SQLite sans dépendances externes### Current Enhancer Operating Decision

Le modèle « live » pris en charge par l'amplificateur privé est désormais explicite :

- L'automatisation des relations publiques hébergée exécute une tentative de contrôle en amont
- si la passerelle publique OmniRoute est bloquée ou instable, le PR est marqué « bloqué » avec une raison destinée à l'opérateur au lieu d'échouer de manière opaque
- le chemin canonique fiable « en direct » reste l'exécution du réseau local ou du service local
- Les exécutions privées planifiées de GitHub restent « simulées » par défaut, sauf si un opérateur demande explicitement « en direct »---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Décision** : conserver le manifeste comme contrat partagé et conserver les archives signées par compétence comme surface de distribution.

**Pourquoi** :
- CLI, API, MCP et A2A consomment déjà la forme du manifeste normalisé
- les archives sont idéales pour le téléchargement et la vérification, mais médiocres en tant que seul contrat de découverte
- cela permet de conserver une création simple et une distribution vérifiable### 2. Private or Premium Catalogs

**Décision** : réutiliser le même format de manifeste et de catalogue, ainsi que l'authentification ou la politique de couche en externe.

**Pourquoi** :
- cela évite de bifurquer le modèle de données
- il correspond à l'approche actuelle de gouvernance API/MCP
- il reste compatible avec l'orientation de l'écosystème MCP autour des informations d'identification des clients OAuth et de l'autorisation gérée par l'entreprise### 3. Client Writer Strategy

**Décision** : converger vers un petit ensemble de familles d'exportation canoniques et ne conserver les rédacteurs sur mesure que là où les documents clients officiels l'exigent.

**Familles canoniques désormais utilisées** :
-JSON `mcpServers`
- "Serveurs" JSON
-JSON `context_servers`
-YAML `mcpServers`
- TOML `[mcp_servers]`

**Pourquoi** :
- il maintient l'implémentation maintenable
- il prend toujours en charge les besoins spécifiques du client tels que les paramètres Claude, Continue YAML, Zed `context_servers` et Codex TOML
- cela évite d'inventer des rédacteurs fragiles pour les clients sans documentation de configuration publique stable---

## 🌍 Research Notes Behind Those Decisions

Les décisions actuelles ont été vérifiées par rapport aux documents officiels de l'écosystème :

- L'écosystème MCP documente désormais les extensions facultatives telles que les informations d'identification du client OAuth et l'autorisation gérée par l'entreprise, qui prennent en charge l'externalisation de l'authentification hébergée au lieu de bifurquer du format de catalogue.
- OpenAI documente un serveur MCP de documents publics et des modèles de configuration Codex MCP qui s'alignent sur la stratégie de manifeste partagé et d'écriture client
- VS Code documente un support MCP de première classe et un guide d'extension, qui renforce la maintenance de son rédacteur dédié basé sur des « serveurs »
- JetBrains AI Assistant documente la configuration de MCP via l'UX du produit plutôt qu'un contrat de fichiers multiplateforme stable, qui permet de le conserver en territoire manuel/extrait pour le moment---

## 🔮 Longer-Term Decision Points

Seules quelques questions stratégiques restent véritablement ouvertes :

1. Si un client au-delà de la matrice actuelle franchit réellement la barre pour une écriture de première classe, ou si les produits restants doivent rester manuels/extraits uniquement
2. Quand, le cas échéant, la gouvernance hébergée devrait-elle passer derrière une passerelle externe ou un IdP d'entreprise au lieu de la référence actuelle en cours ?
3. Jusqu'où le correcteur doit-il aller dans l'évaluation de la profondeur du pack de référence et de sa qualité opérationnelle avant qu'il ne devienne trop opiniâtre pour les contributeurs ?