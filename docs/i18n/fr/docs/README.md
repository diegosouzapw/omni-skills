# 📖 Omni Skills — Documentation Hub (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**La référence centrale pour l'utilisation, l'exploitation, l'extension et la compréhension de la plateforme Omni Skills actuelle.**

Les fichiers de communauté standard se trouvent à la racine du référentiel :
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

| Zone | État | Détails |
|:-----|:------|:--------|
| 🏗️**Exécution**| ✅ Actuel | CLI unifiée, shell visuel Ink, API, MCP et A2A sont tous livrés à partir du même package |
| 📦**Catalogue**| 📌 32 compétences | 32 compétences « N3 » publiées dans 15 catégories de catalogue actives et 7 offres groupées entièrement prises en charge |
| 🎯**Installer**| ✅ Actuel | Installation TTY guidée, `--skill` et `--bundle` sélectifs, prise en charge des chemins personnalisés et installation basée sur la découverte |
| 🌐**API**| ✅ Actuel | API de registre en lecture seule avec authentification, runtime d'administration, limitation de débit, listes autorisées CORS/IP, mode maintenance et téléchargements |
| 🔌**MCP**| ✅ Actuel | `stdio` · `stream` · `sse`, mode side-car local, 7 clients capables d'installation, 16 clients capables de configuration, 33 cibles de configuration et 19 profils de configuration |
| 🤖**A2A**| ✅ Actuel | Exécution locale simple avec durabilité JSON/SQLite, reprise du redémarrage, streaming SSE, annulation, mode exécuteur externe et coordination louée facultative lorsqu'elle est explicitement activée |
| 🛡️**Sécurité**| ✅ Actuel | Scanner statique, ClamAV/VirusTotal en option, artefacts de version signés, sommes de contrôle d'archive et vérification de l'heure de sortie |
| 📋**Classement**| ✅ Actuel | Taxonomie canonique, maturité, diffusion de la qualité sémantique, diffusion des bonnes pratiques et notation de sécurité |
| 📁**Archives**| ✅ Actuel | Archives `.zip` et `.tar.gz` par compétence avec manifestes de somme de contrôle SHA-256 |
| 🔐**Signature**| ✅ Actuel | Signatures détachées appliquées aux balises de version ; les flux d'installation locaux consomment les mêmes métadonnées de manifeste et de somme de contrôle |
| 🧬**Débit d'admission**| ✅ Actuel | Les compétences autochtones se retrouvent sous « compétences / » ; L'automatisation des relations publiques les examine et propose des dérivés omni-améliorés sous `skills_omni/` |## 🔭 Current Project State

La piste de base est désormais à l'état de projet actif et la deuxième vague d'expansion de catégorie est déjà dans le catalogue. Le projet doit maintenant être lu comme une base de travail avec de futures pistes d’expansion facultatives :

- public `v0.1.2` et privé `v0.0.1` sont les versions stables actuelles
- le catalogue couvre désormais 32 compétences publiées dans 15 catégories actives et 7 bundles entièrement pris en charge
- l'admission native et la sortie organisée `skills_omni/` sont toutes deux opérationnelles, y compris l'admission native multilingue et la sortie organisée en anglais uniquement
- les surfaces de protocole, l'automatisation des versions et l'automatisation des améliorations privées sont en service, pas en démarrage

L’expansion future reste délibérée :

- approfondir la « conception », les « outils », les « données-ai » et l'« apprentissage automatique »
- éviter de rouvrir les catégories dormantes non natives du code jusqu'à ce que les pistes actuelles du code natif aient une plus grande profondeur
- garder intact le niveau de qualité et le chemin d'examen des améliorateurs

Ce plan est désormais divisé en :

- la première vague d'expansion terminée dans [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- la deuxième vague d'expansion terminée dans [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- et le retard prospectif dans [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Ces questions d’architecture ne sont plus « ouvertes » en pratique et sont désormais traitées comme des décisions de projet :

1.**La distribution reste le manifeste en premier, plus les archives signées**
   Le manifeste lisible par machine reste le contrat consommé par CLI, API, MCP et A2A. Les archives signées par compétence constituent la surface de téléchargement et de publication superposée à ce contrat.
2.**Les catalogues privés ou premium doivent réutiliser le même schéma de manifeste**
   L'authentification et la politique doivent être superposées en externe, et non en bifurquant la forme du manifeste ou du catalogue.
3.**La configuration MCP devrait converger vers quelques familles d'exportation canoniques**
   Omni Skills standardise désormais autour des `mcpServers` JSON, des `servers` JSON, des `context_servers` JSON, des `mcpServers` YAML, des `extensions` YAML et des `[mcp_servers] TOML, tout en conservant les rédacteurs sur mesure uniquement lorsque les documents clients officiels nécessitent une structure différente.

Ces décisions sont conformes à la documentation officielle actuelle du MCP et du client, notamment :

- Registre MCP officiel et conseils de prise en charge des extensions sur `modelcontextprotocol.io`
- Documents OpenAI Docs MCP et Codex CLI sur `developers.openai.com` et `platform.openai.com`
- Extension VS Code MCP et documentation produit sur `code.visualstudio.com`
- documents clients pour Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman et JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Ce que vous apprendrez |
|:----|:------------------|
| 📘 [Mise en route](users/GETTING-STARTED.md) | Installez, vérifiez et invoquez votre première compétence |
| 🧭 [Guide de l'utilisateur CLI](users/CLI-USER-GUIDE.md) | Référence complète des commandes et modèles d'utilisation CLI du monde réel |
| 📗 [Guide d'utilisation](users/USAGE.md) | Commandes CLI, modes d'installation, commandes d'exécution et flux de configuration MCP |
| 📦 [Bundles](utilisateurs/BUNDLES.md) | Offres groupées sélectionnées et leur disponibilité actuelle |
| 📚 [Catalogue](CATALOG.md) | Catalogue généré automatiquement des compétences publiées |
| 🔧 [Runbook système](opérations/RUNBOOK.md) | Créer, servir, sécuriser et dépanner le runtime |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Ce que vous apprendrez |
|:----|:------------------|
| 🗺️ [Feuille de route Agent-Native](architecture/AGENT-NATIVE-ROADMAP.md) | Évolution de l'architecture, décisions fermées et zones d'expansion restantes |
| 🧭 [Feuille de route CLI UX](architecture/CLI-UX-ROADMAP.md) | Plan historique et forme actuelle de la CLI guidée et visuelle |
| 📐 [ADR-0001 : Fondation de l'espace de travail](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Monorepo de base et décision d'exécution partagée |
| 🔬 [Analyse de base de code](architecture/CODEBASE-ANALYSIS.md) | Composition actuelle du runtime, nombres et limites du système |
| 🌐 [Catalogue API Surface](specs/CATALOG-API.md) | Points de terminaison HTTP, filtrage, gouvernance et téléchargements |
| 🧩 [Installateur guidé CLI](specs/CLI-GUIDED-INSTALLER.md) | Contrat comportemental pour l'installateur guidé |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Shell visuel d'encre, modèle d'état et hub de services |
| 🔌 [Side-car MCP local](specs/LOCAL-MCP-SIDECAR.md) | Outils prenant en charge le système de fichiers, modèle de liste autorisée et écriture de configuration |
| 🧭 [Matrice de support client](specs/CLIENT-SUPPORT-MATRIX.md) | Clients CLI et IDE, enregistreurs, cibles manuelles et références sources pris en charge |
| 📊 [Classification des compétences](specs/SKILL-CLASSIFICATION.md) | Taxonomie, heuristiques de notation et artefacts de métadonnées |
| 🛡️ [Validation de sécurité](specs/SECURITY-VALIDATION.md) | Scanners, archives, signatures et vérification des versions |
| 📋 [Spécifications du manifeste de compétences](specs/SKILL-MANIFEST.md) | Format du manifeste lisible par machine et contrat de compatibilité |### 🤝 If You Want to **Contribute**

| Doc | Ce que vous apprendrez |
|:----|:------------------|
| 📝 [Guide de contribution](../CONTRIBUTING.md) | Flux de travail des dépôts et attentes des demandes d'extraction |
| 🧾 [Workflow de relations publiques de compétences](contributors/SKILL-PR-WORKFLOW.md) | Admission native, traitement automatique des améliorations, publication `skills_omni/` et attentes des réviseurs |
| 📄 [Modèle de compétences](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` avec le thème et la structure actuels |
| 🔬 [Compétence Anatomie](contributeurs/SKILL-ANATOMY.md) | Structure et attentes de qualité pour une compétence |
| ✅ [Barre de qualité](contributeurs/QUALITY-BAR.md) | Critères d'acceptation du référentiel |
| 🏆 [Livre de jeu des meilleurs scores](contributeurs/HIGH-SCORE-PLAYBOOK.md) | Qu'est-ce qui détermine des scores élevés en matière de maturité, de qualité, de bonnes pratiques et de sécurité |
| 📋 [Carnet des tâches](tasks/README.md) | Arriéré détaillé de mise en œuvre pour les travaux publics et privés restants |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Le binaire « omni-compétences » publié constitue le point d’entrée public unifié.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

Pour obtenir la surface de commande complète de l'utilisateur final, utilisez le [Guide de l'utilisateur CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Le pipeline de build émet les fichiers lisibles par machine qui pilotent chaque surface d'exécution :

| Artefact | Objectif |
|:--------|:--------|
| `métadonnées.json` | Validation à l'échelle du référentiel et résumé des scores |
| `skills_index.json` | Indice de compétences normalisé repo-local |
| `dist/catalog.json` | Catalogue publié pour la recherche et le référencement |
| `dist/bundles.json` | Regrouper les définitions avec disponibilité |
| `dist/manifests/<compétence>.json` | Manifeste lisible par machine par compétence |
| `dist/archives/<compétence>.zip` | Archives de compétences (zip) |
| `dist/archives/<compétence>.tar.gz` | Archives de compétences (archive tar) |
| `dist/archives/<compétence>.checksums.txt` | Manifeste de somme de contrôle SHA-256 |

`dist/` reste volontairement engagé. Ces artefacts générés font partie du contrat d’installation, d’API, MCP, A2A, smoke et release.### 🌐 API

```bash
npx omni-skills api --port 3333
```

API de registre en lecture seule pour les compétences, les offres groupées, la comparaison, la planification d'installation et les téléchargements d'artefacts.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Le side-car local prend désormais en charge l'écriture de configuration MCP de première classe pour :

-Claude Code
- Curseur
- VS Code et conteneurs de développement
- CLI Gémeaux
- Antigravité
-Kiro
-CLI du Codex
- Continuer
- Planche à voile
-OpenCode
-Cliné
- CLI Copilote GitHub
- Code kilo
-Zed
- Oie### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Cycle de vie des tâches, streaming, persistance, récupération au redémarrage et orchestration locale simple en premier. L'exécution louée partagée est disponible lorsqu'elle est explicitement activée ; Redis reste une option hébergée avancée, et non le chemin local par défaut.---

## 🗂️ Repository Map

| Chemin | Objectif |
|:-----|:--------|
| 📂 `compétences/` | Compétences d'auteur canoniques |
| 📖 `docs/utilisateurs/` | Documentation utilisateur final |
| 🤝 `docs/contributeurs/` | Modèles et conseils pour les contributeurs |
| 🏗️ `docs/architecture/` | Feuille de route, ADR et analyse technique |
| 🔧 `docs/opérations/` | Runbooks opérationnels |
| 📋 `docs/specs/` | Contrats d'exécution, de protocole et d'artefacts |
| 📚 `docs/CATALOG.md` | Catalogue de compétences généré |
| 📦 `dist/` | Artefacts générés lisibles par machine |
| 🧠 `packages/catalog-core/` | Exécution du catalogue partagé |
| 🌐 `packages/serveur-api/` | API HTTP en lecture seule |
| 🔌 `packages/serveur-mcp/` | Serveur MCP et side-car local |
| 🤖 `packages/serveur-a2a/` | Serveur A2A et environnement d'exécution des tâches |
| 🖥️ `outils/bin/` | Points d'entrée CLI |
| 📚 `outils/lib/` | Aides à l'installation et à l'interface utilisateur |
| ⚙️ `outils/scripts/` | Validation, génération, vérification et tests |---

## 🧪 Release Validation

```bash
npm run smoke
```

Le fumage valide :

- ✅ validation des compétences et génération de métadonnées
- ✅ outils de recatégorisation de taxonomie
- ✅ génération d'artefacts de catalogue
- ✅ démarque du catalogue générée
- ✅ génération et vérification d'archives
- ✅ suite de tests automatisés
- ✅ `npm pack --dry-run`
- ✅ Démarrage et santé de l'API
- ✅ Démarrage MCP dans `stdio`, `stream` et `sse`
- ✅ Démarrage A2A, interrogation, streaming SSE, annulation et cycle de vie push-config