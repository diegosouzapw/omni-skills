# 🔌 Local MCP Sidecar (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Extension facultative en mode local pour `@omni-skills/server-mcp` qui ajoute des outils prenant en charge le système de fichiers pour la détection des clients, la gestion des compétences et la génération de configuration MCP.**---

## 📊 Status

| Fonctionnalité | État |
|:--------|:------|
| ✅ Outils de catalogue en lecture seule | Mis en œuvre |
| ✅ Outils locaux prenant en charge le système de fichiers | Mis en œuvre |
| ✅ 3 transports (stdio/stream/sse) | Mis en œuvre |
| ✅ Écritures autorisées | Mis en œuvre |
| ✅ Paramètres par défaut de prévisualisation avant écriture | Mis en œuvre |
| ✅ Écriture de configuration MCP adaptée au client | Mis en œuvre |
| ✅ Authentification HTTP + limitation de débit | Mis en œuvre |
| ✅ Signatures temporelles et sommes de contrôle de sortie | Implémenté pour les archives générées et affiché par API/MCP |
| 🟡 Application locale de la signature rythmique d'écriture | Pas encore appliqué ; le mode local prévisualise et écrit à partir de la caisse locale de confiance |
| 🟢 Couverture client actuelle | 7 clients capables d'installation, 16 clients capables de configuration, 33 cibles de configuration, 19 profils de configuration |---

## 🎯 Purpose

Le mode local ajoute des**outils compatibles avec le système de fichiers**en plus de la surface du catalogue MCP en lecture seule existante. Utilisez-le lorsqu'un agent a besoin de :

- 🕵️ Détecter les clients IA locaux compatibles
- 📋 Inspecter les compétences installées
- 👁️ Aperçu de l'installation ou de la suppression des compétences (essai à sec)
- 📦 Appliquer l'installation ou la suppression des compétences locales
- ⚙️ Écrivez un fichier de configuration MCP local après l'aperçu

Il sépare délibérément deux préoccupations :

-**cibles d'installation de compétences**
  clients avec un répertoire de compétences stable pouvant utiliser `install_skills`
-**Cibles de configuration MCP**
  clients ou IDE avec un format de configuration MCP documenté stable, même s'ils ne disposent pas d'un répertoire de compétences---

## 🔌 Transports

| Transports | Protocole | Cas d'utilisation |
|:--------------|:---------|:---------|
| `stdio` | Tuyau | Intégration client directe |
| `flux` | HTTP diffusable | Clients HTTP modernes |
| `sse` | Événements envoyés par le serveur | Clients existants |---

## 🚀 Enable Local Mode

### 📦 From repo:

```bash
npm run mcp:local
npm run mcp:stream:local
npm run mcp:sse:local
```

### 📦 Via CLI:

```bash
npm run cli -- mcp stdio --local
npm run cli -- mcp stream --local
npm run cli -- mcp sse --local
npm run cli -- config-mcp --list-targets
npm run cli -- config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp
```

### 📦 From published package:

```bash
npx omni-skills mcp stdio --local
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

> Toutes les commandes définissent automatiquement `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Lorsque le mode local est activé, ces outils supplémentaires deviennent disponibles :

| Outil | Descriptif | Par défaut |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | Rechercher les clients IA et leurs chemins de compétences/configuration | — |
| 📋 `list_installed_skills` | Inspecter les compétences installées pour un client spécifique | — |
| 📦 `install_skills` | Installer des compétences dans le répertoire de compétences d'un client | 🔍 essai à sec |
| 🗑️ `remove_skills` | Supprimer les compétences installées d'un client | 🔍 essai à sec |
| ⚙️ `configure_client_mcp` | Écrire la configuration MCP pour un client spécifique | 🔍 essai à sec |

> ⚠️ `install_skills`, `remove_skills` et `configure_client_mcp` sont par défaut**dry-run**lorsque `dry_run` est omis.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Client | Chemin |
|:-------|:-----|
| 🔵Claude Code | `~/.claude/compétences` |
| 🔵 Curseur | `~/.cursor/compétences` |
| 🟡 CLI Gémeaux | `~/.gemini/compétences` |
| 🟣 Antigravité | `~/.gemini/antigravité/compétences` |
| 🟢 Kiro | `~/.kiro/compétences` |
| 🔴CLI Codex | `~/.codex/skills` ou `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<espace de travail>/.opencode/skills` |

Ces 7 cibles sont aujourd’hui les seules destinations d’installation de premier ordre.### ⚙️ MCP Config Files

| Cible | Formater |
|:-------|:-------|
| `~/.claude/settings.json` | Claude Paramètres du code JSON |
| `<espace de travail>/.claude/settings.json` | Paramètres du projet Claude JSON |
| `~/.claude.json` | Héritage Claude JSON (`mcpServers`) |
| `~/Bibliothèque/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (spécifique au système d'exploitation) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<espace de travail>/.cursor/mcp.json` | Espace de travail du curseur JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Utilisateur Gemini JSON (`mcpServers`) |
| `<espace de travail>/.gemini/settings.json` | Projet Gemini JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | Antigravité JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Utilisateur Kiro JSON (`mcpServers`) |
| `<espace de travail>/.kiro/settings/mcp.json` | Projet Kiro JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<espace de travail>/.mcp.json` | JSON (`mcpServers`) |
| `<espace de travail>/opencode.json` | Espace de travail OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | Utilisateur OpenCode JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<espace de travail>/.github/mcp.json` | Dépôt GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI utilisateur JSON (`mcp`) |
| `<espace de travail>/kilo.json` | Projet Kilo CLI JSON (`mcp`) |
| `<espace de travail>/.kilocode/mcp.json` | Espace de travail Kilo Code JSON (`mcpServers`) |
| `<espace de travail>/.continue/mcpServers/omni-skills.yaml` | Continuer l'espace de travail YAML (`mcpServers`) |
| `<espace de travail>/.junie/mcp/mcp.json` | Projet Junie JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Utilisateur Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Planche à voile JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`extensions`) |
| `<espace de travail>/.zed/settings.json` | Espace de travail Zed JSON (`context_servers`) |
| `<espace de travail>/.vscode/mcp.json` | JSON (`serveurs`) |
| `~/.config/Code/User/mcp.json` | Utilisateur VS Code JSON (`serveurs`) |
| `~/.config/Code - Insiders/Utilisateur/mcp.json` | Utilisateur VS Code Insiders JSON (`serveurs`) |
| `<espace de travail>/.devcontainer/devcontainer.json` | Conteneur de développement imbriqué JSON (`customizations.vscode.mcp.servers`) |
| Racine du client `mcp.json` | JSON (format par client) |

Cela donne le side-car :

-**16 clients ou IDE compatibles avec la configuration**
-**33 chemins cibles de première classe**
-**19 profils de format**

La couverture actuelle de la configuration de première classe s’étend :

- Claude Code et Claude Desktop
- Curseur
- VS Code et conteneurs de développement
- CLI Gémeaux
- Antigravité
-Kiro
-CLI du Codex
- Continuer
- Junie
- Planche à voile
- Oie
-OpenCode
-Cliné
- CLI Copilote GitHub
- Code kilo
-Zed

Les candidats manuels ou contenant uniquement des extraits de code sont toujours intentionnellement en dehors de l'ensemble des rédacteurs de première classe jusqu'à ce que leurs contrats de configuration publics soient suffisamment stables.### 🧭 Expansion Policy

Omni Skills traite désormais le support client comme un modèle à trois niveaux :

1.**capable d'installation**
   Un répertoire de compétences stable existe, afin que la CLI et le side-car puissent installer directement les compétences.
2.**compatible avec la configuration**
   Un format de configuration MCP stable et documenté existe, afin que « config-mcp » puisse prévisualiser et écrire un fichier de première classe.
3.**manuel ou extrait uniquement**
   Le produit prend clairement en charge MCP sous une forme ou une autre, mais la documentation publique ne justifie pas encore un graveur automatique sûr.

C'est pourquoi des clients tels que JetBrains AI Assistant restent uniquement manuels/extraits, tandis que Roo Code et Postman restent en dehors du jeu d'écrivains de première classe jusqu'à ce que leur histoire de fusion automatique sécurisée soit suffisamment solide pour ce projet.---

## 🔒 Allowlist Model

Le side-car local écrit uniquement sous une**liste autorisée explicite**.### 🟢 Default allowlist:

- Racines clients connues sous `$HOME`
- `~/.codeium` pour la configuration utilisateur Windsurf
- `~/.copilot` pour la CLI GitHub Copilot
- `~/.cline` pour la CLI Cline
- `~/.config/goose` pour la configuration Goose
- `~/.config/kilo` et `~/.config/opencode` pour la configuration CLI Kilo/OpenCode
- `$CODEX_HOME` (ou `~/.codex` s'il n'est pas défini)
- Racine actuelle de l'espace de travail
- `<espace de travail>/.agents`
- `<espace de travail>/.github`
- `<espace de travail>/.kilocode`
- `<espace de travail>/.opencode`
- `<espace de travail>/.zed`
- `<espace de travail>/.continue`
- `<espace de travail>/.vscode`### ➕ Extend the allowlist:

```bash
export OMNI_SKILLS_LOCAL_ALLOWLIST=/absolute/path/one:/absolute/path/two
```

---

## ⚙️ Config Writing Examples

### 🔵 Claude Code / Project Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### 🔵 Cursor / Workspace JSON

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 🟡 Gemini CLI / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "headers": {
        "Authorization": "Bearer example"
      }
    }
  },
  "mcp": {
    "allowed": ["omni-skills"]
  }
}
```

### 🟢 Kiro / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "disabledTools": ["install_skills"],
      "autoApprove": ["search_skills", "get_skill"]
    }
  }
}
```

### 🟣 Antigravity

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚪ OpenCode

```json
{
  "mcp": {
    "omni-skills": {
      "type": "local",
      "command": ["/path/to/node", "/path/to/packages/server-mcp/src/server.js"],
      "environment": {
        "OMNI_SKILLS_MCP_MODE": "local"
      },
      "enabled": true
    }
  }
}
```

### 🟢 Cline

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "streamable-http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚫ GitHub Copilot CLI

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "tools": ["*"]
    }
  }
}
```

### 🔴 Kilo Code

```json
{
  "mcp": {
    "omni-skills": {
      "type": "remote",
      "url": "http://127.0.0.1:3334/mcp",
      "enabled": true
    }
  }
}
```

### 🟢 Continue

```yaml
name: 'Omni Skills'
version: '0.1.3'
schema: 'v1'
mcpServers:
  - name: 'omni-skills'
    transport:
      type: 'streamable-http'
      url: 'http://127.0.0.1:3334/mcp'
```

### 🧭 CLI Contract

Le wrapper CLI soutenu par side-car maintient la génération de configuration MCP accessible sans appels JSON-RPC directs :```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Le comportement par défaut est uniquement en aperçu. `--write` applique la configuration au chemin cible résolu sous la liste autorisée.### 🌊 Windsurf

```json
{
  "mcpServers": {
    "omni-skills": {
      "serverUrl": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚡ Zed

```json
{
  "context_servers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 💜 VS Code

```json
{
  "servers": {
    "omni-skills": {
      "type": "stdio",
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 📦 Dev Container

```json
{
  "customizations": {
    "vscode": {
      "mcp": {
        "servers": {
          "omni-skills": {
            "type": "stdio",
            "command": "/path/to/node",
            "args": ["/path/to/packages/server-mcp/src/server.js"],
            "env": {
              "OMNI_SKILLS_MCP_MODE": "local"
            }
          }
        }
      }
    }
  }
}
```

### 🔴 Codex TOML

```toml
[mcp_servers.omni-skills]
url = "http://127.0.0.1:3334/mcp"
```

### 📋 Generic stdio

```json
{
  "mcpServers": {
    "omni-skills": {
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 🔵 Claude allow/deny lists

L'outil `configure_client_mcp` peut également écrire des paramètres spécifiques à Claude lorsque vous transmettez :

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissions_deny`
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

Pour les cibles VS Code et Dev Container, `configure_client_mcp` peut également écrire :

- `sandboxEnabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Cela correspond aux instructions actuelles de VS Code pour le sandboxing des serveurs MCP stdio locaux.### 🧰 Cross-Client Entry Options

`configure_client_mcp` prend désormais en charge des métadonnées d'entrée plus riches dans les profils pris en charge :

- `en-têtes`
- `env`
- `env_file`
- `cwd`
- `timeout_ms`
- 'description'
- `include_tools`
- `exclude_tools`
- 'désactivé'
- 'confiance'

Options spécifiques au profil :

- Claude : `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gémeaux : `mcp_allowed_servers`, `mcp_exclusive_servers`
- Kiro : `disabled_tools`, `auto_approve`
- VS Code et conteneurs de développement : `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` renvoie `recettes` à côté de l'aperçu ou de la configuration appliquée.

Ces recettes sont des blocs de guidage adaptés au client, par exemple :

- `claude mcp add ... --scope utilisateur|projet`
- `gemini mcp add ... --scope utilisateur|projet`
- `codex mcp ajouter...`
- recettes d'édition manuelle de fichiers pour Cursor, VS Code, Kiro et Claude Desktop

La stratégie globale est désormais volontairement conservatrice :

- réutiliser un petit ensemble de familles de configuration canoniques lorsque cela est possible
- conserver les rédacteurs sur mesure uniquement lorsque les documents officiels nécessitent une forme distincte
- éviter d'inventer des rédacteurs automatiques pour des cibles non documentées---

## 🔐 Hosted HTTP Hardening

Les transports HTTP prennent en charge les mêmes contrôles basés sur l'environnement que l'API du catalogue :

| Variables | Objectif |
|:--------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Authentification du jeton du porteur |
| `OMNI_SKILLS_HTTP_API_KEYS` | Clés API séparées par des virgules |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspection du runtime réservée aux administrateurs |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Nombre maximum de requêtes par fenêtre |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Fenêtre de limite de débit en ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Activer la journalisation d'audit |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Écrire le journal d'audit dans un fichier |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Restreindre les origines du navigateur |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Restreindre les adresses IP sources autorisées |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Renvoie « 503 » pour les routes non administratives et non sanitaires |

> 🟢 `/healthz` reste ouvert. `/mcp`, `/sse` et `/messages` nécessitent une authentification lorsqu'ils sont activés. `/admin/runtime` nécessite le jeton d'administrateur une fois configuré.---

## 🌍 Official Docs That Shape Support Decisions

L'ensemble d'écrivains actuel et les limites du manuel uniquement ont été vérifiés par rapport à la documentation officielle du produit, notamment :

- Anthropique Claude Code MCP
- CLI OpenAI Codex et OpenAI Docs MCP
- Documentation Curseur MCP
- Continuer les documents MCP
- Documents Kiro MCP
- Documents OpenCode MCP
- Documents Cline MCP
- Documents Kilo Code MCP
- Documentation GitHub Copilot CLI
- Documents Zed MCP
- Documentation VS Code MCP
- Documentation MCP de JetBrains AI Assistant

Ces documents expliquent pourquoi certains clients reçoivent des rédacteurs automatiques de première classe, tandis que d'autres restent pour le moment uniquement des extraits de code.