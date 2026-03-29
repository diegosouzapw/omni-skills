# 🌐 Catalog API Surface (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**API HTTP en lecture seule pour la découverte de compétences, la recherche, la comparaison, la planification d'installation et le téléchargement d'artefacts.**---

## 📊 Status

| Fonctionnalité | État |
|:--------|:------|
| ✅ Points de terminaison du catalogue | Mis en œuvre |
| ✅ Auth (porteur + clé API) | Mis en œuvre |
| ✅ Authentification de l'exécution de l'administrateur | Mis en œuvre |
| ✅ Limitation du débit | Mis en œuvre |
| ✅ Journalisation d'audit | Mis en œuvre |
| ✅ Listes autorisées CORS et IP | Mis en œuvre |
| ✅ Mode maintenance | Mis en œuvre |
| ✅ Téléchargements d'archives | Mis en œuvre |
| ✅ Spécification OpenAPI | Mis en œuvre |
| ⚠️ Backend de gouvernance | Base de référence en cours, axée sur l'environnement ; passerelle externe ou IdP toujours facultatif |---

## 🎯 Purpose

L'API fournit une surface de type registre pour :

- 📋 Répertorier et filtrer les compétences par qualité, sécurité, catégorie, risque, etc.
- 📌 Récupération des manifestes de compétences individuelles
- 🔎 Recherche en texte intégral et comparaison multi-compétences
- 📦 Liste des bundles avec disponibilité
- 📐 Génération de plan d'installation en lecture seule
- 📥 Téléchargement des artefacts générés, des archives et des manifestes de somme de contrôle

Ce même catalogue et surface de manifeste constitue également la base de :

- Planification de l'installation CLI locale
- Réponses de découverte MCP en lecture seule
- Découverte A2A et transfert du plan d'installation
- catalogues privés potentiels avec authentification externe superposée---

## Démarrage Rapide

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**Par défaut** : `127.0.0.1:3333`---

## 🔐 Security Controls

Tous les contrôles de sécurité sont pilotés par l'environnement et facultatifs :

| Contrôle | Variables | Exemple |
|:--------|:--------|:--------|
| 🔑**Authentification du porteur**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `remplace-moi` |
| 🗝️**Authentification par clé API**| `OMNI_SKILLS_HTTP_API_KEYS` | `clé-a, clé-b` |
| 🛂**Authentification administrateur**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-secret` |
| 🚦**Limitation de tarif**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | « 60 » / « 60 000 » |
| 📝**Journalisation d'audit**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | '1' |
| 🗂️**Format d'audit**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` ou `text` |
| 📄**Fichier d'audit**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**Liste autorisée CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**Liste autorisée IP**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Procuration de confiance**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `bouclage` |
| 🚧**Mode maintenance**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | '1' |
| ⏱️**Réessayez après**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | '300' |

**Comportement :**
- 🟢 `/healthz` reste**toujours non authentifié**
- 🔒 Toutes les autres routes nécessitent une authentification lorsque l'authentification est activée
- 🛂 `/admin/runtime` nécessite le jeton d'administrateur lorsqu'il est activé
- 🚦 La limitation du débit est en cours avec les en-têtes de réponse `X-RateLimit-*`
- 🧾 Chaque réponse porte `X-Request-Id`
- 🚧 Le mode maintenance renvoie « 503 » pour les routes non sanitaires et non administratives### ✅ Current governance decision

L'orientation actuelle du projet est de**réutiliser le même format de catalogue pour les déploiements publics ou privés**et d'effectuer une authentification en externe si nécessaire.

Cela signifie :

- la forme du manifeste et de l'API reste partagée
- Les déploiements auto-hébergés et locaux peuvent rester sur la base de référence en cours
- Une gouvernance hébergée plus avancée peut être migrée ultérieurement vers une passerelle externe ou une couche d'authentification d'entreprise sans bifurquer le modèle de données.### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| Méthode | Chemin | Descriptif |
|:-------|:-----|:------------|
| `OBTENIR` | `/santé` | Bilan de santé (non authentifié) |
| `OBTENIR` | `/openapi.json` | Spécification dynamique OpenAPI 3.1 |
| `OBTENIR` | `/admin/runtime` | Instantané de gouvernance et d'exécution (authentification de l'administrateur lorsqu'elle est activée) |### 📚 Catalog & Skills

| Méthode | Chemin | Descriptif |
|:-------|:-----|:------------|
| `OBTENIR` | `/v1/compétences` | Répertorier les compétences avec des filtres |
| `OBTENIR` | `/v1/compétences/:id` | Obtenez un manifeste de compétences individuelles |
| `OBTENIR` | `/v1/recherche` | Recherche en texte intégral |
| `OBTENIR` | `/v1/compare?ids=id1,id2` | Comparez plusieurs compétences |
| `OBTENIR` | `/v1/bundles` | Liste des forfaits avec disponibilité |
| `POST` | `/v1/install/plan` | Générer un plan d'installation |### 🔎 List/Search Filters

| Filtrer | Exemple |
|:-------|:--------|
| `catégorie` | `?category=développement` |
| `outil` | `?tool=curseur` |
| 'risque' | `?risque=sûr` |
| `trier` | `?sort=qualité\|meilleures pratiques\|niveau\|sécurité\|nom` |
| `commander` | `?order=asc\|desc` |
| `min_qualité` | `?min_qualité=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `min_level` | `?min_level=2` |
| `min_sécurité` | `?min_security=90` |
| `statut_validation` | `?validation_status=passed` |
| `statut_sécurité` | `?security_status=passed` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

| Méthode | Chemin | Descriptif |
|:-------|:-----|:------------|
| `OBTENIR` | `/v1/catalogue/téléchargement` | Téléchargement du catalogue complet |
| `OBTENIR` | `/v1/skills/:id/artefacts` | Liste des artefacts de compétences |
| `OBTENIR` | `/v1/skills/:id/archives` | Liste des archives de compétences |
| `OBTENIR` | `/v1/skills/:id/downloads` | Tous les liens de téléchargement disponibles |
| `OBTENIR` | `/v1/skills/:id/download/manifest` | Manifeste de compétences JSON |
| `OBTENIR` | `/v1/skills/:id/download/entrypoint` | Compétence SKILL.md |
| `OBTENIR` | `/v1/skills/:id/download/artifact?path=<chemin>` | Artefact spécifique |
| `OBTENIR` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Archives de compétences |
| `OBTENIR` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Signature détachée |
| `OBTENIR` | `/v1/skills/:id/download/archive/checksums` | Sommes de contrôle SHA-256 |---

## 🔗 Link Enrichment

Lorsque les demandes sont traitées via l'API, le serveur**enrichit automatiquement**les manifestes, les listes d'artefacts et les plans d'installation avec des URL absolues dérivées de l'origine de la demande entrante. Il s'agit d'un enrichissement d'exécution, non intégré à `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Les plans d'installation sont des aperçus, pas des écritures à distance.**

L'API ne s'installe jamais sur la machine de l'appelant. Il renvoie :
- 📌 Métadonnées de compétences sélectionnées
- ⚠️ Avertissements pour les membres manquants du bundle
- 🖥️ Commandes CLI concrètes à exécuter localement
- 🔗 URL de téléchargement publiques lorsque l'origine de la demande est disponible---

## 🔌 Relationship to MCP

Le serveur MCP réutilise les mêmes URL d'API publiques lorsqu'il est configuré :```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Cela permet aux aperçus d'installation MCP de renvoyer des URL de manifeste et d'artefact concrètes au lieu de uniquement des chemins de dépôt locaux.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` renvoie un instantané de gouvernance utile pour les diagnostics hébergés :

- méthodes d'authentification actives
- statut d'administrateur-auth
- fenêtre de limite de débit et max
- Liste autorisée CORS
- Liste d'autorisation IP
- état du mode maintenance
- destination et format de l'audit
- totaux du catalogue actuel
- ID de demande faisant écho pour la traçabilité