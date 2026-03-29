# 🚀 Getting Started (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Installez les compétences, vérifiez la configuration et invoquez votre première compétence IA en moins de 2 minutes.**---

## 📊 Current Catalog Status

| Métrique | Valeur |
|:-------|:------|
| Compétences publiées |**32**dans 15 catégories actives, notamment l'architecture, la conception, la sécurité, le DevOps, l'ingénierie de l'IA et bien plus encore |
| Forfaits définis |**7**(tous entièrement soutenus par des compétences publiées) |
| Clients pouvant être installés |**7**(Claude Code, Curseur, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| Clients compatibles avec la configuration MCP |**16**sur 33 cibles de configuration MCP de première classe |---

## 📦 Step 1 — Install

### Démarrage Rapide

```bash
npx omni-skills
```

Dans un terminal interactif, cela ouvre désormais le programme d'installation guidé au lieu de supposer silencieusement un client.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Cela ouvre le hub de terminaux de marque pour l'installation, la découverte, le MCP, l'API et le démarrage A2A.### 🎯 Default Install (Antigravity Outside TTY)

En dehors d'un ATS, le programme d'installation sans argument est toujours par défaut « ~/.gemini/antigravity/skills ».### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
npx omni-skills --codex --bundle ai-engineer
```

> ✅ Les bundles de démarrage sont désormais entièrement pris en charge, y compris `devops` et `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Vérifiez que les compétences sont arrivées au bon endroit :```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

Ou utilisez les diagnostics intégrés :```bash
npx omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

Donne aux agents des outils de système de fichiers pour détecter les clients, installer/supprimer des compétences et écrire des configurations MCP :```bash
npx omni-skills mcp stream --local
```

Vous pouvez également configurer MCP pour les clients qui ne sont pas des cibles d'installation de compétences :```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Expose le catalogue de compétences en tant qu'API HTTP en lecture seule :```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Découverte, recommandation, planification d'installation, interrogation et streaming d'agent à agent :```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Une compétence est un playbook de démarque structuré (`SKILL.md`) qui donne à un agent IA :

| Composant | Objectif |
|:--------------|:--------|
| 📋**Première question**| Métadonnées lisibles par machine (nom, catégorie, balises, outils, risque) |
| 📝**Corps**| Instructions, étapes, garde-corps et exemples spécifiques à une tâche |
| 📚**Références**| Documents de support que l'agent peut consulter pendant l'exécution |
| 🎨**Actifs**| Icônes, images ou autres ressources packagées |---

## ➡️ Next Steps

| Doc | Ce que vous apprendrez |
|:----|:------------------|
| 🧭 [Guide de l'utilisateur CLI](CLI-USER-GUIDE.md) | Référence complète des commandes pour l'installation, l'exécution, la configuration et les diagnostics |
| 📗 [Guide d'utilisation](USAGE.md) | Toutes les commandes CLI, modèles d'invite et modes d'exécution |
| 📦 [Packs](BUNDLES.md) | Collections de compétences organisées et leur disponibilité |
| 📚 [Catalogue](../CATALOG.md) | Catalogue généré automatiquement des compétences publiées |
| 📖 [Centre de documentation](../README.md) | Carte de la documentation complète |
| 🔧 [Runbook système](../operations/RUNBOOK.md) | Référence opérationnelle |