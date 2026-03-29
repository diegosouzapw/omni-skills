# 📗 Usage Guide (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Tout ce dont vous avez besoin pour appeler des compétences, exécuter des services et exploiter le runtime Omni Skills.**

Pour les flux de travail opérationnels complets, consultez le [🔧 System Runbook](../operations/RUNBOOK.md).
Pour la carte complète des commandes de l'utilisateur final, consultez le [🧭 Guide de l'utilisateur CLI](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Statut | Détails |
|:-------|:--------|
| ✅**Disponible maintenant**| 32 compétences publiées dans les domaines de la conception, de l'architecture, du débogage, de la documentation, des logiciels libres, de la sécurité, du DevOps, de l'ingénierie de l'IA, des données, des outils et des flux de travail d'apprentissage automatique |
| 📦**Forfaits**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` et `oss-maintainer` sont aujourd'hui entièrement pris en charge |
| 🔌**Portée MCP**| 7 clients capables d'installation, 16 clients capables de configuration, 33 cibles de configuration de première classe, 19 profils de configuration |
| 🤖**Durabilité A2A**| Durabilité locale de la mémoire, JSON ou SQLite, reprise du redémarrage, exécuteur de processus en option et coordination louée opt-in pour les travailleurs partagés |---

## 🖥️ Invocation by Client

| Client | Comment invoquer | Parcours de compétences |
|:-------|:-------------|:------------|
| 🔵**ClaudeCode**| `>> /nom-compétence aide-moi...` | `~/.claude/compétences/` |
| 🟡**CLI Gemini**| `Utilisez @skill-name pour...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Utilisez @skill-name pour...` | `~/.codex/skills/` |
| 🟢**Kiro**| Chargement automatique des compétences à la demande | `~/.kiro/skills/` |
| 🟣**Antigravité**| `Utilisez @skill-name pour...` | `~/.gemini/antigravity/skills/` |
| 🔵**Curseur**| `@skill-name` dans le chat | `~/.cursor/skills/` |
| ⚪**OpenCode**| `opencode run @skill-name` | `.opencode/compétences/` |
| ⬛**Copilote**| Coller manuellement le contenu des compétences | N/A |

Les clients tels que Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline et Kilo Code utilisent principalement le flux `config-mcp` plutôt qu'un répertoire de compétences.---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

>**📌 Remarques :**
> - Dans un terminal interactif, `npx omni-skills` ouvre désormais un flux d'installation guidée
> - `npx omni-skills ui` ouvre le shell visuel Ink avec les actions d'installation, de découverte et de lancement de service
> - le shell visuel conserve les installations récentes, les lancements de services récents, les favoris et les préréglages nommés dans `~/.omni-skills/state/ui-state.json`
> - En dehors d'un TTY, l'installation complète est toujours la valeur par défaut lorsqu'aucun sélecteur n'est fourni
> - `--skill` installe uniquement les compétences publiées sélectionnées
> - `--bundle` étend le bundle et installe les membres publiés déclarés dans le bundle organisé
> - `find` prend en charge plus de 12 indicateurs de filtre : `quality`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk`, et plus encore
> - `config-mcp` est le bon chemin pour les produits compatibles MCP qui ne disposent pas d'un répertoire de compétences de premier ordre---

## 🔌 Runtime Commands

La CLI est un outil d'opérations unifié, pas seulement un programme d'installation.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Le shell visuel prend en charge :

- installation guidée avec client connu ou sélection de chemin personnalisé
- rechercher puis installer sans mémoriser les drapeaux
- Aperçu guidé de la configuration du client MCP et flux d'écriture
- Démarrage guidé MCP, API et A2A
- installations récentes et relances de services
- préréglages d'installation et de service enregistrés
- compétences et packs préférés### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
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
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # | Astuce |
|:--|:----|
| 1️⃣ | Référencez la compétence par son nom dans votre invite |
| 2️⃣ | Fournissez l'artefact, le code ou le contexte de conception exact dont l'agent a besoin |
| 3️⃣ | Préférez `--skill` pour une empreinte d'installation minimale |
| 4️⃣ | Utilisez `doctor` et `smoke` avant de déboguer les problèmes d'empaquetage ou d'exécution |
| 5️⃣ | Utilisez les bundles comme installations de domaine organisées maintenant que les sept bundles de démarrage sont entièrement pris en charge |
| 6️⃣ | Utilisez `find --install --yes` pour la découverte + l'installation en un seul flux |
| 7️⃣ | Consultez le [runbook](../operations/RUNBOOK.md) pour l'authentification, les limites de débit, la signature et la vérification des variables d'environnement |