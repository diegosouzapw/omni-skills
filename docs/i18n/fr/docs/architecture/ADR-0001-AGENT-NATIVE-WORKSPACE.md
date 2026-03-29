# 📐 ADR-0001: Agent-Native Workspace Foundation (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**La décision architecturale clé qui a façonné la structure de l'espace de travail monorepo.**---

## 📊 Status

✅**Accepté**— direction actuelle de l'espace de travail et forme du référentiel actif.---

## 🔍 Context

Omni Skills a démarré en tant que référentiel**installateur d'abord**. C'était suffisant pour distribuer le contenu « SKILL.md », mais pas suffisant pour exposer le catalogue aux agents via des surfaces de protocole natif.

Nous avions besoin d’une fondation capable de soutenir :

| Exigence | Protocole |
|:------------|:---------|
| 🌐 API du catalogue HTTP en lecture seule | REPOS |
| 🔌 Serveur MCP en lecture seule | Protocole de contexte de modèle |
| 🤖 Surface A2A face à l'agent | Agent à agent |
| 📂 Side-cars d'installation locale | Outils de système de fichiers |

**Contrainte critique** : évitez d'analyser les fichiers de dépôt indépendamment dans chaque nouveau service.---

## ✅ Decision

Adoptez un**monorepo orienté espace de travail**avec un noyau de catalogue partagé et des packages spécifiques au protocole :

| Forfait | Objectif |
|:--------|:--------|
| 📦 `omni-compétences` (racine) | Programme d'installation CLI et scripts de dépôt |
| 🧠 `@omni-skills/catalog-core` | Chargement partagé, recherche, comparaison, bundles, plans d'installation |
| 🌐 `@omni-skills/server-api` | API REST en lecture seule |
| 🔌 `@omni-skills/server-mcp` | MCP avec stdio/stream/sse + mode side-car local |
| 🤖 `@omni-skills/server-a2a` | Exécution de tâches A2A avec carte d'agent, interrogation, SSE et configuration push |### 📁 Shared Data Sources

Le noyau du catalogue lit les artefacts générés à partir de :
- `dist/catalog.json`
- `dist/manifests/<compétence>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Résultat | Impact |
|:--------|:-------|
| 🔗**Contrat de données partagées**| API, MCP et A2A consomment les mêmes artefacts |
| 🖥️**CLI unifiée**| Un binaire expose l'installation, le shell de l'interface utilisateur, l'API, MCP, A2A, les diagnostics et la fumée |
| 🧩**Isolement du protocole**| Les nouvelles surfaces itèrent sans couplage aux composants internes de l'installateur |
| 🔌**Side-car local**| Fonctionnement du mode MCP compatible en écriture derrière une liste blanche, avec des recettes adaptées au client |
| 📦**Exécution d'un seul package**| Le package npm publié regroupe les surfaces de protocole, les outils de validation et les artefacts générés |---

## ⚠️ Negative Consequences

| Compromis | Atténuation |
|:---------|:-----------|
| 🔄**Duplication des métadonnées**| Python build + JavaScript runtime → éventuellement consolider |
| 🏗️**Complexité A2A**| Un cycle de vie durable existe désormais, mais les adaptateurs de coordination ajoutent de la profondeur opérationnelle |
| 📦**Alignement du catalogue**| L'installation sélective nécessite que les commandes, les manifestes et les documents restent synchronisés |
| 📋**Lacunes dans les métadonnées du regroupement**| Les bundles peuvent dépasser les compétences publiées, nécessitant des avertissements explicites concernant les membres manquants |---

## ➡️ Follow-Up Items

| # | Actions | Statut |
|:--|:-------|:-------|
| 1️⃣ | Authentification MCP à distance et limitation de débit | ✅ Terminé |
| 2️⃣ | Amélioration de l'écriture de la configuration MCP spécifique au client | ✅ Présent aujourd'hui pour Claude, Cursor, Codex, Gemini, Kiro, VS Code et Dev Containers |
| 3️⃣ | Artefacts de version signés ou archives par compétence | ✅ Présentez aujourd'hui l'application de CI sur les balises de version |
| 4️⃣ | Exécution de tâches A2A → orchestration durable | ✅ Présentez aujourd'hui avec la persistance JSON/SQLite, les exécuteurs externes, la coordination opt-in des baux et la coordination Redis avancée en option |
| 5️⃣ | Élargir le catalogue publié pour une couverture groupée plus large | ✅ Présentez aujourd'hui les sept packs de démarrage actuellement sélectionnés |