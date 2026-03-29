# 🧠 Omni Skills (Français)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Le catalogue de compétences qui s'installe tout seul.**<br/>
CLI · API · MCP · A2A — le tout à partir d'une seule commande « npx ».<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Installez en 1 min](#-installation) · [🛠️ Choisissez votre outil](#-choisissez-votre-outil) · [📖 Guide CLI](docs/users/CLI-USER-GUIDE.md) · [📦 Bundles](docs/users/BUNDLES.md) · [🔌 Runtime](#-runtime-surfaces) · [💡 Pourquoi Omni Compétences](#-pourquoi-omni-compétences)</div>

---

<div align="center">

### Aperçu

</div>

| | Métrique | Valeur |
|:--|:-------|:------|
| 📦 |**Compétences publiées**| '32' dans 15 catégories actives |
| 🎯 |**Forfaits**| `7` offres groupées entièrement sauvegardées |
| 🖥️ |**Installer les clients**| `7` assistants de codage IA compatibles avec l'installation |
| 🔌 |**Client MCP**| `16` Clients compatibles avec la configuration MCP |
| 🔐 |**Sortie organisée**| `32` Dérivés anglais améliorés dans `skills_omni/` |
| 📋 |**Version actuelle**| `v0.1.2` |---

## Démarrage Rapide

>**Vous avez recherché des compétences en codage IA, des compétences Claude Code, des compétences Cursor, des compétences Codex CLI, des compétences Gemini CLI, des compétences antigravité ou des bibliothèques `SKILL.md` installables ?**
> Vous êtes au bon endroit.### 1️⃣ What is this?

Omni Skills est un**catalogue de compétences et un environnement d'exécution installables**pour les assistants de codage IA. À la base, il s'agit d'un référentiel public de playbooks `SKILL.md` réutilisables - mais contrairement aux collections de compétences simples, le dépôt**est**la couche de distribution et d'exécution.

<détails>
<summary>📋 <strong>Ce qui est inclus</strong></summary>

| Composant | Descriptif |
|:--------------|:---------------|
| 🧠**Compétences**| Playbooks basés sur SKILL.md pour les assistants IA |
| 📦**Manifestes**| Manifestes, bundles et archives JSON générés |
| 🧭**Installation guidée**| Flux d'installation d'ATS interactifs et de terminaux visuels |
| 🌐**API du catalogue**| API HTTP en lecture seule pour la recherche, la découverte et les téléchargements |
| 🔌**Serveur MCP**| Outils de découverte, de recommandation et de configuration adaptés au client |
| 🤖**Exécution A2A**| Orchestration des tâches d'agent à agent |
| ✨**Pipeline d'amélioration**| Private Enhancer publie des dérivés anglais sélectionnés dans `skills_omni/` |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *"Utilisez `@brainstorming` pour planifier un MVP SaaS."*
>
> 💬 *"Utilisez `@api-design` pour revoir la conception de ce point de terminaison."*
>
> 💬 *"Utilisez `@debugging` pour isoler cette régression."*### 5️⃣ Start with a bundle

| 🎯 Objectif | Paquet | Commande |
|:--------|:-------|:--------|
| Ingénierie générale | `essentiels` | `npx omni-skills --bundle essentials` |
| Livraison du produit + de l'application | `full-stack` | `npx omni-skills --bundle full-stack` |
| Systèmes de conception | `conception` | `npx omni-skills --bundle design` |
| Examen de sécurité | `sécurité` | `npx omni-skills --bundle security` |
| Infra et version | `devops` | `npx omni-skills --bundle devops` |
| Candidatures LLM | `ingénieur IA` | `npx omni-skills --bundle ai-engineer` |
| Maintenance des logiciels libres | `oss-mainteneur` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Avant de comparer les offres groupées ou de choisir un chemin d'installation, il est utile de comprendre ces cinq éléments de base :

| Concepts | Qu'est-ce que cela signifie |
|:--------|:-------------|
| 🧠**Compétences**| Playbooks `SKILL.md` réutilisables qui apprennent à un assistant comment bien exécuter un flux de travail |
| 📦**Catalogue Artefacts**| Génération de sorties JSON et d'archives permettant la recherche, la comparaison, le téléchargement et l'installation |
| 🔌**Configuration MCP**| Configuration côté client pour que les assistants découvrent Omni Skills via les outils MCP |
| 🤖**Exécution A2A**| Orchestration d'agent à agent pour la découverte, la recommandation et le transfert du plan d'installation |
| ✨**Sortie organisée**| `skills_omni/` — la surface améliorée maintenue par Omni, distincte de l'apport natif en amont |

>**📝 Politique native/conservée :**
> - `skills/` accepte un apport natif en amont dans n'importe quelle langue
> - `skills_omni/` est toujours organisé et publié en anglais
> - `skills_omni/` est une surface à sens unique et ne revient pas à l'admission native---

## 💡 Why Omni Skills

>**Pas seulement « un autre référentiel avec des compétences dans des dossiers ».**
> Omni Skills a un contrat plus solide et une surface d'exécution plus large.

| Si tu veux… | 📁 Référentiel de compétences typique | ✨ Compétences Omni |
|:-------------|:------------|:--------------|
| Installer dans un véritable assistant | Copie manuelle ou script personnalisé | `npx omni-skills`, installation guidée, interface utilisateur visuelle, `--skill` et `--bundle` sélectifs |
| Rechercher et comparer les compétences | Parcourir manuellement les démarques | Catalogue généré, filtrage, planification groupée, recherche, comparaison et recommandation |
| Utiliser les mêmes données dans tous les outils | Logique séparée par outil | Manifestes et catalogue partagés pour CLI, API, MCP et A2A |
| Configurer les clients MCP | Fichiers modifiés à la main | `config-mcp`, aperçus side-car locaux, recettes générées et écritures sur liste autorisée |
| Libérations de confiance | Emballage de qualité | Sommes de contrôle, archives signées, vérification du scanner, publication du CI et contrôle en amont de la publication |
| Organiser l'admission de la communauté | Quelles que soient les terres, elles restent telles quelles | Apport natif dans `skills/`, dérivés anglais organisés dans `skills_omni/` avec attribution |---

## 🖥️ Compatibility and Invocation

Ces compétences suivent le modèle « SKILL.md » et peuvent être utilisées comme un référentiel normal, mais le package les installe et les configure également sur une large surface :

>**7**clients capables d'installation ·**16**clients capables de configuration MCP### 🎯 Install-Capable Clients

| Outil | Tapez | Exemple d'appel | Chemin d'installation |
|:-----|:-----|:-------------------|:-------------|
| 🟢**ClaudeCode**| CLI | `Utilisez le brainstorming pour planifier une fonctionnalité` | `~/.claude/compétences` |
| 🔵**Curseur**| EDI | `@brainstorming aide-moi à planifier une fonctionnalité` | `~/.cursor/compétences` |
| 🟡**CLI Gemini**| CLI | `Utiliser le brainstorming pour planifier une fonctionnalité` | `~/.gemini/compétences` |
| 🔴**Codex CLI**| CLI | `Utiliser le brainstorming pour planifier une fonctionnalité` | `~/.codex/compétences` |
| 🟠**Kiro**| CLI/IDE | `Utilisez le brainstorming pour planifier une fonctionnalité` | `~/.kiro/compétences` |
| 🟣**Antigravité**| EDI | `Utilisez @brainstorming pour planifier une fonctionnalité` | `~/.gemini/antigravité/compétences` |
| ⚪**OpenCode**| CLI | `opencode exécuter @brainstorming` | `<espace de travail>/.opencode/skills` |

<détails>
<summary>🔌 <strong>Couverture plus large de la configuration MCP (16 clients)</strong></summary>

Ces cibles font partie de la surface de configuration MCP prise en charge, même lorsqu'elles ne sont pas des cibles d'installation pour les répertoires de compétences :

| Client ou Surface | Type de prise en charge | Remarques |
|:--------|:------------|:------|
| Paramètres et bureau de Claude | Configuration MCP | Flux liés aux paramètres, au bureau et aux projets |
| Code VS | Configuration MCP | Cibles d’utilisateurs, d’espaces de travail, d’initiés et de conteneurs de développement |
| Gémeaux | Configuration MCP | Paramètres utilisateur et espace de travail |
| Clin | Configuration MCP | Cible de configuration de première classe |
| CLI copilote GitHub | Configuration MCP | Cibles de configuration des utilisateurs et des dépôts |
| Continuer | Configuration MCP | Génération YAML de l'espace de travail |
| Planche à voile | Configuration MCP | Cible de configuration utilisateur |
| Zed | Configuration MCP | Cible de configuration de l'espace de travail |
| Oie | Configuration MCP | Cible de configuration utilisateur avec recette générée |
| Code kilo | Configuration MCP | Cibles utilisateur, projet et espace de travail |
| Junie | Configuration MCP | Cibles de configuration du projet et de l'utilisateur |</details>

---

## Installer

<tableau>
<tr>
<td largeur="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

| Outil | Commande d'installation | Première utilisation |
|:-----|:--------------|:--------------|
| 🟢Claude Code | `npx omni-compétences --claude` | `Utilisez le brainstorming pour planifier une fonctionnalité` |
| 🔵 Curseur | `npx omni-skills --cursor` | `@brainstorming aide-moi à planifier une fonctionnalité` |
| 🟡 CLI Gémeaux | `npx omni-compétences --gemini` | `Utilisez le brainstorming pour planifier une fonctionnalité` |
| 🔴CLI Codex | `npx omni-compétences --codex` | `Utilisez le brainstorming pour planifier une fonctionnalité` |
| 🟣 Antigravité | `npx omni-skills --antigravity` *(par défaut)* | `Utilisez @brainstorming pour planifier une fonctionnalité` |
| 🟠 Kiro | `npx omni-compétences --kiro` | `Utilisez le brainstorming pour planifier une fonctionnalité` |
| ⚪ OpenCode | `npx omni-compétences --opencode` | `opencode exécuter @brainstorming` |
| 📂 Chemin personnalisé | `npx omni-skills --path ./my-skills` | Cela dépend de votre outil |

> 📖**Vous ne savez pas par où commencer ?**
> - [🚀 Mise en route](docs/users/GETTING-STARTED.md) — installez et vérifiez en moins de 2 minutes
> - [🧭 Guide de l'utilisateur CLI](docs/users/CLI-USER-GUIDE.md) — référence complète des commandes
> - [📗 Guide d'utilisation](docs/users/USAGE.md) — invites, modèles et modes d'exécution---

## 🔌 Runtime Surfaces

Omni Skills n'est pas seulement une bibliothèque de compétences. Il expose**quatre surfaces d'exécution**qui consomment le même catalogue généré :

| Surfaces | État | Ce qu'il fait | Exemple |
|:--------|:------|:-------------|:--------|
| 🖥️**CLI**| ✅ Disponible | Rechercher, installer, diagnostiquer, interface utilisateur visuelle, services de démarrage, contrôles de fumée | `médecin omni-compétences npx` |
| 🌐**API du catalogue**| ✅ Disponible | Catalogue en lecture seule, recherche, offres groupées, comparaison, plans d'installation, téléchargements | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Disponible | Découverte, recommandation, aperçu de l'installation, side-car local, flux de configuration | `npx omni-compétences mcp stream --local` |
| 🤖**A2A**| ✅ Disponible | Cycle de vie des tâches, transfert, interrogation, streaming, annulation, persistance | `npx omni-compétences a2a --port 3335` |

<détails>
<summary>🖥️ <strong>Shell visuel et commandes opérateur</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<détails>
<summary>🔌 <strong>Transports et configuration MCP</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

| Métrique | Comte |
|:-------|:------|
| 🧠 Compétences publiées |**32**|
| 📂 Catégories actives |**15**|
| 📦 Offres groupées entièrement sauvegardées |**7**|
| ✨ Dérivés sélectionnés |**32**dans `skills_omni/` |### 📦 Bundle Availability

| Paquet | Compétences | Membres |
|:-------|:-------|:--------|
| 🧰 `essentiels` |**4/4**✅ | `trouver des compétences` · `brainstorming` · `architecture` · `débogage` |
| 🌐 `full-stack` |**5/5**✅ | `conception frontend` · `conception api` · `conception de base de données` · `omni-figma` · `flux d'authentification` |
| 🎨 `conception` |**5/5**✅ | `conception frontend` · `omni-figma` · `conception-systèmes-opérations` · `audit d'accessibilité` · `conception-jeton-gouvernance` |
| 🛡️ `sécurité` |**4/4**✅ | `auditeur de sécurité` · `scanner de vulnérabilité` · `réponse aux incidents` · `modélisation des menaces` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `observability-review` · `release-engineering` |
| 🤖 `ai-ingénieur` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contrats` · `model-serving` |
| 🔧 `oss-mainteneur` |**4/4**✅ | `trouver des compétences` · `créer-pr` · `changelog` · `documentation` |### ✨ Native Intake → Curated Output

| Surfaces | Objectif | Langue |
|:--------|:--------|:---------|
| 📥 `compétences/` | Admission autochtone | N'importe quelle langue |
| ✨ `skills_omni/` | Sortie organisée omni-maintenue | Toujours anglais |

>**ℹ️**Les modifications apportées aux compétences natives sont retraitées par l'amplificateur privé et actualisées dans la ligne de base organisée. Cela fait de `skills_omni/` une**surface de catalogue maintenue**, pas une deuxième copie.---

## 🛡️ Security and Release Posture

> Omni Skills propose une histoire de version et de vérification plus solide qu'un simple référentiel de démarques.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<détails>
<summary>📋 <strong>Ce que le pipeline valide</strong></summary>

- ✅ Validation des compétences et génération de métadonnées
- ✅ Outils de normalisation et de recatégorisation de taxonomie
- ✅ Génération de catalogue et d'archives
- ✅ Tests automatisés
- ✅ Chemins de démarrage API, MCP et A2A
- ✅ Vérification des archives
- ✅ Contrôle en amont du package avec `npm pack --dry-run`</details>

<détails>
<summary>🔐 <strong>Posture de relâchement</strong></summary>

| Contrôle | Descriptif |
|:--------|:---------------|
| 🔒 Sommes de contrôle SHA-256 | Manifestes de somme de contrôle pour toutes les archives |
| ✍️ Objets signés | Signatures détachées sur les artefacts de version |
| 🤖 CI-appliqué | Vérification de la version dans CI avant publication |
| 🦠Portes scanner | Flux de version contrôlé par ClamAV et VirusTotal |
| 📦 Sortie GitHub | Génération automatisée des versions GitHub |
| 📋publication npm | À partir d'une archive tar vérifiée uniquement |
| 🔄 Libération automatique | Lors de la qualification, la compétence fusionne avec « principale » |

**La publication automatique se déclenche uniquement lorsqu'une fusion est modifiée :**
- `compétences/*/**`
- `skills_omni/*/**`
- `data/bundles.json`

Les modifications apportées uniquement aux documents**ne déclenchent pas**la publication du package.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Doc | Ce que vous apprendrez |
|:----|:-----------------|
| 🚀 [Mise en route](docs/users/GETTING-STARTED.md) | Installez, vérifiez et invoquez en moins de 2 minutes |
| 🧭 [Guide de l'utilisateur CLI](docs/users/CLI-USER-GUIDE.md) | Référence complète des commandes et modèles du monde réel |
| 📗 [Guide d'utilisation](docs/users/USAGE.md) | Commandes CLI, modes d'installation, runtime et configuration MCP |
| 📦 [Bundles](docs/users/BUNDLES.md) | Offres groupées sélectionnées et disponibilité |
| 📚 [Catalogue](docs/CATALOG.md) | Catalogue généré automatiquement des compétences publiées |
| 🔧 [Runbook système](docs/opérations/RUNBOOK.md) | Créer, servir, sécuriser et dépanner |### 🏗️ For Architects

| Doc | Ce que vous apprendrez |
|:----|:-----------------|
| 🗺️ [Feuille de route Agent-Native](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Evolution de l'architecture et zones restantes |
| 📐 [ADR-0001 : Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Décision monorepo de base |
| 🔬 [Analyse de la base de code](docs/architecture/CODEBASE-ANALYSIS.md) | Composition du runtime et limites du système |
| 🌐 [API du catalogue](docs/specs/CATALOG-API.md) | Points de terminaison HTTP, filtrage, gouvernance et téléchargements |
| 🧩 [Installateur guidé CLI](docs/specs/CLI-GUIDED-INSTALLER.md) | Contrat comportemental pour l'installateur guidé |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Coque visuelle d'encre et modèle d'état |
| 🔌 [Side-car MCP local](docs/specs/LOCAL-MCP-SIDECAR.md) | Outils de système de fichiers et modèle de liste autorisée |
| 📊 [Matrice de support client](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Référence complète du client et du rédacteur |
| 🏷️ [Classification des compétences](docs/specs/SKILL-CLASSIFICATION.md) | Taxonomie, notation et métadonnées |
| 🛡️ [Validation de sécurité](docs/specs/SECURITY-VALIDATION.md) | Scanners, archives et signatures |
| 📋 [Manifeste de compétences](docs/specs/SKILL-MANIFEST.md) | Format de manifeste lisible par machine |### 🤝 For Contributors

| Doc | Ce que vous apprendrez |
|:----|:-----------------|
| 📝 [Guide de contribution](CONTRIBUTING.md) | Flux de travail des pensions et attentes en matière de relations publiques |
| 🧾 [Workflow de relations publiques de compétences](docs/contributors/SKILL-PR-WORKFLOW.md) | Admission native, traitement des rehausseurs, attentes des évaluateurs |
| 📄 [Modèle de compétences](docs/contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` avec frontmatter et structure |
| 🔬 [Compétence Anatomie](docs/contributors/SKILL-ANATOMY.md) | Attentes en matière de structure et de qualité |
| ✅ [Barre de qualité](docs/contributors/QUALITY-BAR.md) | Critères d'acceptation |
| 🏆 [Livre de jeu des meilleurs scores](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Qu'est-ce qui génère des scores élevés |---

## 🗂️ Repository Layout

| Chemin | Objectif |
|:-----|:--------|
| 📂 `compétences/` | Compétences d'auteur canoniques et apport natif |
| ✨ `skills_omni/` | Dérivés améliorés gérés par Omni |
| 📖 `docs/` | Documentation des utilisateurs, des contributeurs, de l'architecture, des opérations et des spécifications |
| 📦 `dist/` | Manifestes, bundles, catalogue et archives générés |
| 📁 `données/` | Définitions de bundle et données de support statiques |
| 🧠 `packages/catalog-core/` | Exécution du catalogue partagé |
| 🌐 `packages/serveur-api/` | API HTTP en lecture seule |
| 🔌 `packages/serveur-mcp/` | Serveur MCP et side-car local |
| 🤖 `packages/serveur-a2a/` | Exécution A2A et orchestration des tâches |
| 🖥️ `outils/bin/` | Points d'entrée CLI |
| 📚 `outils/lib/` | Aides à l'installation et à l'interface utilisateur |
| ⚙️ `outils/scripts/` | Scripts de validation, de génération, de publication et de test |

>**ℹ️**`dist/` est intentionnellement versionné car les artefacts générés font partie du contrat d'installation, de l'API, du MCP, de l'A2A, de Smoke et de la version.---

## 🤝 Contributing

Omni Skills accepte l'apport de compétences natives en amont sous « compétences/ ».

| Règle | Détails |
|:-----|:--------|
| 📥 Apport natif | Peut être approximatif, rédigé dans n'importe quelle langue |
| ✨ Sortie organisée | `skills_omni/` réservé aux dérivés Omni créés par l'automatisation |
| 🚫 Modifications manuelles | Les modifications manuelles publiques de `skills_omni/` sont rejetées |
| 🔄 Retraitement | L'amplificateur privé retraite les modifications natives et actualise la base de référence organisée |

> 📖**Commencez avec :**[Guide de contribution](CONTRIBUTING.md) · [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Tapez | Licence |
|:-----|:--------|
| 💻 Code et outils | [Licence MIT](LICENCE) |
| 📝 Documentation et contenu des compétences | [CC BY 4.0](LICENCE-CONTENU) |---

<div align="center">

**Réalisé avec 🧠 par l'équipe Omni Skills**

[⭐ Star ce dépôt](https://github.com/diegosouzapw/omni-skills) · [🐛 Signaler un bug](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Discussions](https://github.com/diegosouzapw/omni-skills/discussions)</div>
