# 🧭 Omni Skills CLI User Guide (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**La surface CLI publique complète fournie par `omni-skills`.**

Utilisez ce guide lorsque vous souhaitez :

| Objectif | Zone de commandement |
|:-----|:-------------|
| 📥 Installer des compétences ou des bundles | [Flux d'installation](#3️⃣-install-flows) |
| 🔎 Rechercher dans le catalogue | [Découverte du catalogue](#4️⃣-catalog-discovery) |
| 🔌 Configurer les clients MCP | [Configuration du client MCP](#5️⃣-mcp-client-config) |
| 🖥️ Démarrez les services MCP, API ou A2A | [Serveur MCP](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Utilisez le shell du terminal visuel | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Exécuter des diagnostics ou un contrôle en amont | [Diagnostics](#🔟-diagnostics-et-preflight) |---

## 1️⃣ Install and Entry Modes

Installez avec `npx` :```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Contexte | Que se passe-t-il |
|:--------|:------------|
| 🖥️ ATS + pas d'arguments | Ouvre le flux d'**installation guidée**|
| ⚙️ Non-ATS + sans arguments | Installation non interactive sur `~/.gemini/antigravity/skills` |
| 🎨 `interface utilisateur omni-compétences npx` | Marque**Coquille visuelle d'encre**|
| 📝 `npx omni-skills ui --text` | Readline**texte de secours**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Commande | Descriptif |
|:--------|:---------------|
| `interface utilisateur` | 🎨 Hub de terminaux visuels |
| `trouver [requête]` | 🔎 Découverte du catalogue |
| `recatégoriser` | 🏷️ Gestion de la taxonomie |
| `installer [drapeaux]` | 📥 Installation de compétences/bundles |
| `config-mcp` | 🔌Configuration du client MCP |
| `mcp <stdio\|stream\|sse>` | 🔌 Modes du serveur MCP |
| `API` | 🌐API Catalogue |
| `a2a` | 🤖 Exécution A2A |
| `fumée` | 🧪 Sortie du contrôle en amont |
| `publier-vérifier` | 📦 Vérification de la publication du colis |
| `docteur` | 🩺 Diagnostic environnement |
| `aide` | ❓ Référence de commande |---

## 3️⃣ Install Flows

### Démarrage Rapide

```bash
npx omni-skills
npx omni-skills install --guided
```

> Le flux guidé vous permet de choisir :**client cible**→**package ou compétence**→**chemin personnalisé**→**aperçu avant exécution**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| Drapeau | Client |
|:-----|:-------|
| `--antigravité` | 🟣 Antigravité *(par défaut)* |
| `--claude` | 🟢Claude Code |
| `--curseur` | 🔵 Curseur |
| `--codex` | 🔴CLI Codex |
| `--gémeaux` | 🟡 CLI Gémeaux |
| `--kiro` | 🟠 Kiro |
| `--opencode` | ⚪ OpenCode |

> Cible d'installation par défaut (non interactive) : `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| Drapeau | Objectif |
|:-----|:--------|
| `--catégorie` | Filtrer par catégorie de taxonomie |
| `--outil` | Filtrer par outil pris en charge |
| `--risque` | Filtrer par niveau de risque |
| `--trier` | Trier les résultats (par exemple, « qualité ») |
| `--commande` | Ordre de tri |
| `--qualité-min` | Niveau de qualité minimum |
| `--min-meilleures-pratiques` | Note minimale des meilleures pratiques |
| `--niveau-min` | Niveau de maturité minimum |
| `--min-sécurité` | Score de sécurité minimum |
| `--statut-de-validation` | Filtrer par état de validation |
| `--état-de-sécurité` | Filtrer par état de sécurité |---

## 5️⃣ MCP Client Config

Utilisez `config-mcp` pour prévisualiser ou écrire une configuration MCP adaptée au client.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<détails>
<summary>🔌 <strong>Surface client compatible avec la configuration</strong></summary>

| Client | Cibles |
|:-------|:--------|
| Claude | Paramètres et cibles du bureau |
| Curseur | Utilisateur et espace de travail |
| Codex | Configuration TOML |
| Gémeaux | Utilisateur et espace de travail |
| Antigravité | Configuration utilisateur |
| Code Ouvert | Utilisateur et espace de travail |
| Clin | Cible de première classe |
| CLI copilote GitHub | Utilisateur et dépôt |
| Code kilo | Utilisateur, projet et espace de travail |
| Kiro | Utilisateur et espace de travail |
| Zed | Espace de travail |
| Code VS | Utilisateur, espace de travail et conteneur de développement |
| Continuer | Espace de travail YAML |
| Junie | Projet et utilisateur |
| Planche à voile | Configuration utilisateur |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**Le side-car local**ajoute : détection des clients, aperçu de l'installation, flux d'installation/suppression et écriture de la configuration MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Itinéraire | Objectif |
|:------|:--------|
| `GET /healthz` | Bilan de santé |
| `GET /openapi.json` | Spécification OpenAPI |
| `GET /v1/compétences` | Lister toutes les compétences |
| `GET /v1/recherche` | Rechercher dans le catalogue |
| `GET /v1/skills/:id/archives` | Liste des archives pour une compétence |
| `GET /v1/skills/:id/download/archive?format=zip` | Télécharger les archives de compétences |
| `GET /v1/skills/:id/download/archive/checksums` | Télécharger les sommes de contrôle |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Fonctionnalité | Statut |
|:--------|:-------|
| 🔎 Découverte sensible aux tâches | ✅ |
| 📋 Transfert du plan d'installation | ✅ |
| 🔄 Sondage | ✅ |
| 📡Diffusion | ✅ |
| ❌ Annulation | ✅ |
| 🔔 Configuration des notifications push | ✅ |
| 💾 Persistance | Mémoire, JSON et SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Fonctionnalités

| Fonctionnalité | Descriptif |
|:--------|:---------------|
| 🧭 Installation guidée | Choisissez un client ou un chemin personnalisé |
| 🔎 Rechercher + installer | Aucune mémorisation de drapeau nécessaire |
| 🔌Configuration MCP | Prévisualiser et écrire des flux |
| 🖥️ Lancement du service | Démarrage guidé MCP, API et A2A |
| 🕐 Récents | Installations récentes et relances de services |
| ⭐ Favoris | Compétences et bundles enregistrés |
| 💾 Préréglages | Préréglages d'installation et de service nommés |

>**Chemin d'état :**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Inspecte : l'état du dépôt, l'état de l'installation locale, la disponibilité de l'exécution et les problèmes d'environnement.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Valide : build, tests, sortie du package, démarrage du service, couverture du scanner et packaging de la version.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯Personnage | Commande | Objectif |
|:----------|:--------|:--------|
| 🆕 Nouvel utilisateur | `npx omni-compétences` | Première installation guidée |
| 🔧 Opérateur | `npx omni-compétences config-mcp --list-targets` | Configurer le MCP local |
| 🔧 Opérateur | `npx omni-compétences mcp stream --local` | Démarrer le side-car local |
| 📦Mainteneur | `npx omni-compétences fumée` | Valider une release |
| 🔍 Utilisateur expérimenté | `npx omni-skills trouve la sécurité --qualité de tri --qualité min 95` | Trouvez d'abord la meilleure compétence |---

## 📖 Related Documents

| Doc | Ce que cela couvre |
|:----|:--------------|
| 🚀 [Mise en route](./GETTING-STARTED.md) | Installez et vérifiez en moins de 2 minutes |
| 📗 [Guide d'utilisation](./USAGE.md) | Toutes les commandes, modèles et modes CLI |
| 📦 [Packs](./BUNDLES.md) | Collections de compétences organisées |
| 🔧 [Runbook système](../operations/RUNBOOK.md) | Référence opérationnelle |
| 🔌 [Side-car MCP local](../specs/LOCAL-MCP-SIDECAR.md) | Outils de système de fichiers et écriture de configuration |