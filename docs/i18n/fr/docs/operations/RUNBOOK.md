# 🔧 System Runbook (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Le guide opérationnel complet pour créer, valider, servir, sécuriser et dépanner Omni Skills.**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

| Commande | Ce qu'il fait |
|:--------|:-------------|
| `npm run valider` | Valide `SKILL.md`, régénère `metadata.json`, calcule la taxonomie/maturité/qualité/sécurité |
| `npm run taxonomy:report` | Affiche les suggestions de dérive de catégorie sans réécrire les fichiers |
| `npm run verify:scanners` | Confirme la couverture du scanner enregistrée dans les métadonnées de compétences générées |
| `npm run release:notes` | Génère des notes de version personnalisées à partir des métadonnées, des bundles et de l'historique git |
| `npm exécuter build` | Régénère le catalogue/manifestes/archives/sommes de contrôle, vérifie la couverture du scanner et les archives, reconstruit `docs/CATALOG.md` |
| `test npm` | Suite Smoke complète pour les flux CLI, API, MCP, side-car et archive |---

## 🖥️ Visual Shell

La CLI publiée inclut désormais un shell d'opérateur basé sur Ink :```bash
npx omni-skills ui
```

Capacités actuelles :

- installation guidée pour les clients connus et les chemins personnalisés
- flux de recherche puis d'installation
- Assistant de lancement MCP
- Assistant de lancement d'API
- Assistant de lancement A2A
- installations récentes et relances de services
- préréglages d'installation et de service nommés

Chemin d'accès de l'état local :```text
~/.omni-skills/state/ui-state.json
```

Retomber:```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

Le scanner statique vérifie automatiquement toutes les compétences :

| Famille de règles | Exemples |
|:------------|:---------|
| 🎭 Injection rapide | Modèles d'exfiltration, remplacements d'instructions |
| 💣 Commandes destructrices | `rm -rf`, `format`, `mkfs` |
| 🔑 Chemins suspects | `/etc/shadow`, `~/.ssh`, fichiers d'informations d'identification |
| ⚠️ Primitives risquées | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Nécessite `clamscan` dans `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Recherche de hachage uniquement : les fichiers inconnus ne sont**pas téléchargés**par défaut.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Porte de libération stricte :```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Les archives sont produites automatiquement par `npm run build` :

| Sortie | Chemin |
|:-------|:-----|
| 📦ZIP | `dist/archives/<compétence>.zip` |
| 📦 Tarball | `dist/archives/<compétence>.tar.gz` |
| 🔒 Sommes de contrôle | `dist/archives/<compétence>.checksums.txt` |

`dist/` est intentionnellement validé dans ce référentiel. Le catalogue, les manifestes, les bundles et les archives générés sont des entrées d'exécution pour les flux d'installation CLI, les surfaces de téléchargement d'API, les aperçus MCP, le transfert de tâches A2A, les tests de fumée et la vérification des versions.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Remplacement de clé publique facultatif :```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Si aucune clé publique n'est fournie, la construction en dérive une via `openssl` dans `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Politique de version :

- le patch s'incrémente jusqu'à `.10`
- après `.10`, la prochaine version devient mineure et réinitialise le patch à `.0`

Exemples :

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Scénario | Commande |
|:--------|:--------|
| 📥 Installation par défaut (Antigravity) | `npx omni-compétences` |
| 🎯 Compétence spécifique + client | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Découverte → installer | `npx omni-skills trouver figma --tool curseur --install --yes` |
| 📦 Installation groupée | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Vérifier l'installation | `médecin omni-compétences npx` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filtrer | Drapeau | Exemple |
|:-------|:-----|:--------|
| 📂 Catégorie | `--catégorie` | `--développement de catégories` |
| 🖥️ Outil | `--outil` | `--curseur outil` |
| ⚠️ Risque | `--risque` | `--risque sûr` |
| 📊 Trier | `--trier` | `--qualité de tri\|meilleures pratiques\|niveau\|sécurité\|nom` |
| 🔄 Commande | `--commande` | `--order asc\|desc` |
| ⭐ Qualité minimale | `--qualité-min` | `--qualité min 80` |
| 📋 BP min | `--min-meilleures-pratiques` | `--min-meilleures-pratiques 60` |
| 🎯 Niveau minimum | `--niveau-min` | `--min-niveau 2` |
| 🛡️ Sécurité minimale | `--min-sécurité` | `--min-sécurité 90` |
| ✅Validation | `--statut-de-validation` | `--statut de validation réussi` |
| 🛡️ Sécurité | `--état-de-sécurité` | `--statut de sécurité réussi` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Méthode | Point de terminaison | Objectif |
|:-------|:--------|:--------|
| `OBTENIR` | `/santé` | Bilan de santé |
| `OBTENIR` | `/openapi.json` | Spécification OpenAPI 3.1 |
| `OBTENIR` | `/v1/compétences` | Liste avec filtres |
| `OBTENIR` | `/v1/recherche` | Recherche en texte intégral |
| `OBTENIR` | `/v1/skills/:id/archives` | Liste des archives |
| `OBTENIR` | `/v1/skills/:id/download/archive?format=zip` | Télécharger les archives |
| `OBTENIR` | `/v1/skills/:id/download/archive/checksums` | Manifeste de somme de contrôle |### 🔐 Hosted API Hardening

| Fonctionnalité | Commande |
|:--------|:--------|
| 🔑 Authentification au porteur | `OMNI_SKILLS_HTTP_BEARER_TOKEN=remplacez-moi npx omni-skills api` |
| 🗝️ Authentification par clé API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Authentification de l'exécution de l'administrateur | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=API admin-secret npx omni-skills` |
| 🚦 Limitation du taux | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx API omni-compétences` |
| 📝 Journalisation d'audit | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 API omni-compétences npx` |
| 🌍Liste autorisée CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com API omni-skills npx` |
| 🧱 Liste blanche IP | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 API omni-compétences npx` |
| 🚧 Mode maintenance | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 API omni-compétences npx` |
| 🔁 Proxy de confiance | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🟢 `/healthz` reste ouvert de par sa conception ; Les itinéraires du catalogue nécessitent une authentification lorsqu'ils sont activés. `GET /admin/runtime` nécessite le jeton d'administrateur une fois configuré et renvoie l'instantané de gouvernance en direct.---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

Le side-car peut désormais prévisualiser ou écrire la configuration MCP pour :

- Paramètres utilisateur et projet Claude
- Configuration du bureau Claude
- Cline la configuration utilisateur
- Configuration de l'utilisateur et du référentiel GitHub Copilot CLI
- Configuration de l'utilisateur et de l'espace de travail du curseur
- Configuration du Codex TOML
- Paramètres utilisateur et projet Gemini
- Configuration utilisateur et projet Kilo CLI
- Configuration de l'espace de travail Kilo
- Paramètres utilisateur et projet Kiro
- Configuration des utilisateurs et de l'espace de travail OpenCode
- Continuer la configuration YAML de l'espace de travail
- Configuration utilisateur Windsurf
- Configuration de l'espace de travail Zed
- espace de travail `.mcp.json`
- Espace de travail VS Code et configuration utilisateur
- Configuration du conteneur de développement

`configure_client_mcp` renvoie également des `recettes` par client afin que les opérateurs obtiennent les étapes de configuration CLI ou manuelles équivalentes avec l'aperçu.### 🧾 MCP Config Preview and Write Flow

Utilisez la CLI unifiée lorsque vous souhaitez générer une configuration sans appeler directement l'outil MCP :```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Le shell visuel expose le même flux de travail via :

- `interface utilisateur omni-compétences npx`
- 'Prestations'
- `Configurer le client MCP`

La commande reste en mode aperçu à moins que `--write` soit passé.### 🔐 Hosted MCP Hardening

Mêmes variables d'environnement que l'API :```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Routes protégées** : `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` reste ouvert.---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

Le chemin local par défaut reste simple :

- La persistance `json` ou `sqlite` peut s'exécuter avec l'interrogation de la file d'attente désactivée
- définissez `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` uniquement lorsque vous souhaitez une réclamation multi-travailleurs et un basculement de bail
- conserver la coordination Redis en tant qu'option hébergée avancée, et non en tant que référence### 🧱 Multi-Worker Lease Setup

Exécutez plusieurs nœuds A2A sur le même magasin SQLite pour obtenir un basculement basé sur le bail :```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Si un travailleur décède alors qu'une tâche est en cours, un autre travailleur peut la récupérer après l'expiration du bail et poursuivre son exécution.### 🟥 Redis Coordination

Pour les déploiements hébergés ou multi-nœuds qui ne souhaitent pas que la coordination de file d'attente soit liée au magasin SQLite partagé, basculez le coordinateur sur Redis :```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Dans ce mode :

- la persistance existe toujours en JSON ou SQLite
- la revendication de tâches et la propriété du bail sont transférées vers Redis
- plusieurs nœuds A2A peuvent partager une file d'attente sans dépendre de la coordination au niveau des lignes SQLite### 📡 Endpoints

| Méthode | Chemin | Objectif |
|:-------|:-----|:--------|
| `OBTENIR` | `/santé` | Bilan de santé |
| `OBTENIR` | `/.well-known/agent.json` | Carte d'agent (découverte A2A) |
| `POST` | `/a2a` | Point de terminaison JSON-RPC pour les tâches et le streaming |### 🧭 Supported JSON-RPC Methods

| Méthode | Objectif |
|:-------|:--------|
| `message/envoyer` | Démarrer ou continuer une tâche |
| `message/flux` | Démarrer une tâche et diffuser les mises à jour SSE |
| `tâches/obtenir` | Interroger un instantané de tâche |
| `tâches/annuler` | Annuler une tâche active |
| `tâches/réabonnement` | Reprendre les mises à jour SSE pour une tâche existante |
| `tâches/pushNotificationConfig/set` | Enregistrer un webhook push |
| `tâches/pushNotificationConfig/get` | Lire une configuration push |
| `tâches/pushNotificationConfig/list` | Liste des configurations push pour une tâche |
| `tâches/pushNotificationConfig/delete` | Supprimer une configuration push |### 📡 Task Lifecycle

Le runtime actuel prend en charge ces états de tâches :

- `soumis`
- 'travailler'
- `entrée requise`
- 'terminé'
- 'annulé'
- 'échoué'

Les tâches sont conservées dans un fichier JSON ou dans un magasin SQLite et rechargées au redémarrage. Les tâches terminées et interrompues restent disponibles. Les tâches qui étaient encore « soumises » ou « en cours de travail » lors de l'arrêt sont récupérées avec des métadonnées de redémarrage explicites et sont reprises automatiquement par défaut.### 🧪 Example: Start a Task

```bash
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

Le référentiel dispose désormais de deux workflows :

| Flux de travail | Déclencheur | Objectif |
|:--------|:--------|:--------|
| `valider.yml` | Push/PR vers « principal » | Créer, tester et confirmer que les artefacts générés sont validés |
| `version.yml` | Tag push `v*` ou envoi manuel | Exécutez des analyseurs de niveau version, vérifiez la balise de version, signez les artefacts, emballez l'archive tar, publiez sur npm et créez la version GitHub |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Secrets | Utilisé par | Objectif |
|:-------|:--------|:--------|
| `VT_API_KEY` ou `VIRUSTOTAL` | `version.yml` | Exiger des recherches de hachage VirusTotal dans les versions |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` ou `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `version.yml` | Clé privée requise pour la signature des archives détachées dans CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` ou `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `version.yml` | Remplacement de clé publique en option ; autrement dérivé de la clé privée |
| `NPM_TOKEN` | Travail `publier-npm` | Authentifier `npm submit` pour les versions de balises |### 🦠 Release Scanner Policy

`release.yml` définit ou prépare :

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || secrets.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` du stockage temporaire du coureur

Cela signifie que chaque version basée sur des balises doit :

- installer et actualiser ClamAV sur le runner
- régénérer les métadonnées avec ClamAV activé
- régénérer les métadonnées avec VirusTotal activé
- décoder le matériel de clé de signature CI dans le stockage temporaire du coureur
- passez `npm run verify:scanners:strict`
- passez `npm run verify:archives:strict`
- réussir les tests et la vérification des packages avant la publication npm
- générer des notes de version personnalisées à partir des métadonnées du catalogue et de l'historique git
- créer une version GitHub avec les ressources de version attachées après la publication---

## 1️⃣1️⃣ Environment Variables Reference

| Variables | Objectif | Par défaut |
|:--------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Remplacer le chemin racine du catalogue | Détecté automatiquement |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Chemins d'écriture supplémentaires autorisés | Racines de clients connues |
| `OMNI_SKILLS_MCP_MODE` | Défini sur « local » pour le side-car | À distance |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Indicateur Alt pour le mode local | `0` |
| `OMNI_SKILLS_API_BASE_URL` | URL de l'API publique pour MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | URL de base publique | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Jeton d'authentification du porteur | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Clés API séparées par des virgules | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Jeton d'authentification d'exécution de l'administrateur | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Nombre maximum de requêtes par fenêtre | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Fenêtre de limite de débit (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Activer la journalisation d'audit | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | Sortie d'audit `json` ou `text` | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Chemin du fichier journal d'audit facultatif | sortie standard |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Liste autorisée d'origine CORS séparée par des virgules | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Liste blanche d'adresses IP ou CIDR séparées par des virgules | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Paramètre de proxy de confiance express | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Activer les réponses de maintenance | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Maintenance `Réessayer-Après` secondes | '300' |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Délai de tâche asynchrone simulé | '80' |
| `OMNI_SKILLS_A2A_STORE_TYPE` | Magasin de tâches `json`, `sqlite` ou `memory` | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Fichier de magasin de tâches A2A personnalisé | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Activer l'interrogation de la file d'attente partagée pour les travailleurs prenant en charge le bail | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | coordinateur `store`, `sqlite`, `local` ou `redis` | `magasin` |
| `OMNI_SKILLS_A2A_REDIS_URL` | URL Redis pour la coordination externe | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Préfixe de clé Redis pour les métadonnées de la file d'attente | `omni-compétences :a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Intervalle d'interrogation de la file d'attente pour les travailleurs loués | '250' |
| `OMNI_SKILLS_A2A_LEASE_MS` | Durée du bail avant qu'un autre travailleur puisse récupérer une tâche | '4000' |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Identifiant de travailleur stable pour la propriété du bail et les diagnostics | Nom d'hôte + PID + suffixe aléatoire |
| `OMNI_SKILLS_A2A_EXECUTOR` | Exécuteur de tâches `inline` ou `process` | `en ligne` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Remplacer la commande du travailleur externe | Nœud binaire |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | Tableau JSON d’arguments de travailleurs externes | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Reprendre les tâches soumises/de travail récupérées au démarrage | '1' |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Autoriser les webhooks non HTTPS en dehors de localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Activer l'analyse ClamAV | `0` |
| `VT_API_KEY` | Clé API VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Clé privée pour signer | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Remplacement de clé publique | Dérivé automatiquement |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. Reconstruire avec `npm run build`
2. Réexécutez `npm run verify:archives`
3. Si la signature est activée, confirmez la clé publique et la disponibilité d'openssl### 🦠 Release Workflow Fails on Scanner Coverage

- Confirmez que `VT_API_KEY` existe dans les secrets du référentiel
- Confirmer que `freshclam` a réussi sur le coureur
- Reconstruire localement avec `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Réexécutez `npm run verify:scanners:strict`### 📦 npm Publish Fails in CI

- Confirmez que `NPM_TOKEN` existe dans les secrets du référentiel
- Confirmez que la balise Git correspond exactement à la version `package.json`
- Vérifiez que l'archive téléchargée par `release-verify` existe dans les artefacts du workflow### ✍️ Release Signing Fails in CI

- Confirmez que `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` ou `OMNI_SKILLS_SIGN_PRIVATE_KEY` existe dans les secrets du référentiel
- Si vous fournissez une clé publique secrète, confirmez qu'elle correspond à la clé privée
- Confirmez que « openssl » est disponible et que la clé privée est au format PEM
- Reconstruire localement avec `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Réexécutez `npm run verify:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- Vérifiez `OMNI_SKILLS_HTTP_BEARER_TOKEN` ou `OMNI_SKILLS_HTTP_API_KEYS`
- Inclure l'en-tête `Authorization: Bearer <token>` ou `x-api-key`### 🚦 API/MCP Returns `429 Too Many Requests`

- Augmenter `OMNI_SKILLS_RATE_LIMIT_MAX`
- Élargir `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Réduire le trafic en rafale des clients ou des sondes### 🛂 API/MCP Admin Runtime Returns `401`

- Vérifiez `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Envoyer `x-admin-token : <token>` ou `Authorization : Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Désactiver `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Utilisez `/healthz` pour les sondes de vivacité pendant la maintenance
- Utilisez `/admin/runtime` avec le jeton d'administrateur pour les diagnostics de l'opérateur### 🌍 Browser Requests Fail CORS Validation

- Vérifiez `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Incluez le schéma et l'hôte exacts, par exemple `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Vérifiez `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Vérifiez `OMNI_SKILLS_A2A_REDIS_URL`
- Vérifiez la connectivité Redis à partir de chaque nœud
- Inspectez `/healthz` pour l'instantané `coordination`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
