# Client Support Matrix (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Ce document suit la surface client pratique pour Omni Skills à travers trois entrées :

1. l'inventaire du tableau de bord `9router` dans `/home/diegosouzapw/dev/proxys/9router`
2. la mise en œuvre actuelle du side-car Omni Skills MCP
3. documentation officielle actuelle pour chaque client ou IDE

C'est la source de vérité qui permet de décider quels clients bénéficient d'un support `config-mcp` de première classe, lesquels restent uniquement manuels et lesquels ne sont que des candidats.---

## Scope

Cette matrice concerne la**configuration client pour MCP**.

Ce n'est pas la même chose que :

- assistance à l'installation des compétences
- Compatibilité API
- Prise en charge A2A
- ACP ou autres protocoles non-MCP

Certains produits de la matrice consomment MCP mais n'ont**pas**de « répertoire de compétences » significatif, ils ne reçoivent donc que la prise en charge de la cible de configuration.---

## 9router Inventory

Le tableau de bord `9router` regroupe actuellement ces outils CLI ou clients IDE :

-Claude Code
-Codex OpenAI
- Droïde d'usine
-OpenClaw
- Curseur
-Cliné
- Code kilo
- Continuer
- Antigravité
- Copilote GitHub
-OpenCode
- Kiro IA

Sources locales :

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Ces clients disposent désormais d'une histoire stable et explicite dans Omni Skills via `config-mcp --target ...`.

Totaux actuels de mise en œuvre :

-**7 clients pouvant être installés**
-**16 clients compatibles avec la configuration**
-**33 cibles de configuration de première classe**
-**19 profils de configuration**

| Client | Statut | Cibles de configuration | Remarques |
|:-------|:-------|:---------------|:------|
| Claude Code | ✅ Première classe | `espace de travail`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Configuration tapée `mcpServers` avec contrôles d'autorisation/refus spécifiques à Claude |
| Curseur | ✅ Première classe | `curseur-espace de travail`, `curseur-utilisateur` | Cibles JSON `mcpServers` |
| Code VS | ✅ Première classe | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Utilise la racine des « serveurs » |
| CLI Gémeaux | ✅ Première classe | `gemini-user`, `gemini-workspace` | Paramètres JSON + contrôles globaux d'autorisation/exclusion MCP |
| Antigravité | ✅ Première classe | `utilisateur antigravité` | Cible JSON `mcpServers` |
| Kiro | ✅ Première classe | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Champs désactivés/auto-approuvés spécifiques à Kiro |
| Codex CLI | ✅ Première classe | `utilisateur-codex` | Tables TOML `mcp_servers` |
| Continuer | ✅ Première classe | `continuer-espace de travail` | Document du serveur YAML dédié |
| Planche à voile | ✅ Première classe | `utilisateur de planche à voile` | Cible JSON `mcpServers` avec entrées `serverUrl` |
| Code Ouvert | ✅ Première classe | `opencode-workspace`, `opencode-user` | `opencode.json` officiel/configuration utilisateur utilisant `mcp` de niveau supérieur |
| Clin | ✅ Première classe | `cline-utilisateur` | `cline_mcp_settings.json` avec `mcpServers` |
| CLI copilote GitHub | ✅ Première classe | `copilot-user`, `copilot-repo` | `mcp-config.json` ou `.github/mcp.json` |
| Code kilo | ✅ Première classe | `kilo-user`, `kilo-project`, `kilo-workspace` | Kilo CLI utilise « kilo.json » ; l'intégration de l'espace de travail utilise `.kilocode/mcp.json` |
| Zed | ✅ Première classe | `zed-espace de travail` | `.zed/settings.json` avec `context_servers` |
| Junie | ✅ Première classe | `projet-junie`, `utilisateur-junie` | `.junie/mcp/mcp.json` ou `~/.junie/mcp/mcp.json` en utilisant `mcpServers` |
| Oie | ✅ Première classe | `utilisateur d'oie` | `~/.config/goose/config.yaml` utilisant un objet `extensions` de niveau supérieur pour les extensions MCP persistantes |---

## Current Gaps

Ces clients de `9router` ne sont**pas**encore des cibles d'écriture de premier ordre dans Omni Skills :

| Client | État actuel | Pourquoi |
|:-------|:--------------|:----|
| Droïde d'usine | ⚠️ Manuel/personnalisé uniquement | Aucune forme de configuration MCP publique stable trouvée dans la documentation principale lors de cette passe |
| OpenClaw | ⚠️ Manuel/personnalisé uniquement | Même problème que Factory Droid |

Le side-car peut toujours être utilisé avec `--file` ou des chemins personnalisés pour les utilisateurs avancés, mais Omni Skills ne devrait pas inventer des rédacteurs de première classe sans des documents de configuration publics stables.

Deux produits adjacents sont désormais mieux compris, mais restent intentionnellement en deçà des graveurs automatiques de premier ordre :

| Client | État actuel | Pourquoi |
|:-------|:--------------|:----|
| Assistant IA JetBrains | 🟡 Manuel/extrait | La prise en charge officielle de MCP existe, mais le flux de travail documenté est piloté par l'interface utilisateur/l'importation plutôt que par une cible de fichier public stable |
| Facteur | 🟡 Manuel/extrait | La prise en charge officielle de MCP existe, mais la configuration est gérée dans l'UX du produit plutôt que dans une cible de fichier public stable |
| Code Roo | 🟡 Candidat | Des documents MCP publics existent, mais un contrat de chemin de fichier multiplateforme solide doit encore être confirmé avant d'ajouter un rédacteur |---

## Support Policy

Omni Skills suit désormais cet ensemble de règles :

1.**Capable d'installation**s'il existe un répertoire de compétences stable.
2.**Capable de configuration**s'il existe un format de fichier de configuration MCP public stable.
3.**Manuel/extrait uniquement**si le produit prend en charge MCP mais que le contrat public privilégie l'interface utilisateur, l'importation en premier ou est encore trop instable.

C'est également la réponse pratique à l'une des questions d'architecture antérieures : le projet devrait continuer à développer des écrivains de première classe uniquement là où un format public stable existe, et autrement s'appuyer sur un ensemble plus restreint de familles d'exportation canoniques ainsi que des recettes et des extraits de code.### Canonical config families already in use

-JSON `mcpServers`
- "Serveurs" JSON
-JSON `context_servers`
-YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Client/EDI | Recommandation | Raison |
|:-------------|:--------------|:-------|
| Assistant IA JetBrains | 🟡 Conservez le manuel/l'extrait pour le moment | Le support officiel est réel, mais l'UX est toujours géré par le produit plutôt que par le contrat sur fichier |
| Facteur | 🟡 Conservez le manuel/l'extrait pour le moment | La configuration officielle est d'abord gérée par l'interface utilisateur et l'espace de travail plutôt que par le contrat de fichier |
| Code Roo | 🟡 Enquêter ensuite | Prise en charge MCP prometteuse, mais la sécurité du rédacteur dépend d'une confirmation plus forte du chemin de configuration |
| Chat copilote VS Code | 🟢 Déjà couvert indirectement | Les emplacements de fichiers VS Code MCP sous-jacents sont déjà pris en charge |
| Zed ACP/Serveurs d'agents | 🟡 Piste séparée | Il s'agit du territoire ACP/agent-serveur, pas seulement de l'écriture de la configuration MCP |---

## Official Sources Used

Les décisions ci-dessus ont été vérifiées par rapport aux sources primaires actuelles :

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Curseur MCP](https://docs.cursor.com/tools)
- [Continuer MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Fichiers de configuration Goose](https://block.github.io/goose/docs/guides/config-files/)
- [Extensions de session Goose](https://block.github.io/goose/docs/guides/session-extensions/)
- [Configuration de Postman MCP](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [Guide d'extension VS Code MCP](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Registre MCP officiel](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Le side-car Omni Skills actuel distingue intentionnellement trois niveaux de support :

-**clients pouvant être installés**
  - avoir un répertoire de compétences connu et pouvoir utiliser `install_skills`
-**Clients compatibles avec la configuration**
  - avoir une cible de configuration stable et pouvoir utiliser `configure_client_mcp`
-**Clients manuels/extraits**
  - documenté, mais sans encore un rédacteur de fichiers sûr et de première classe

Cette séparation maintient le produit honnête.

Tous les produits compatibles MCP ne doivent pas être traités comme une cible d'installation de compétences.
La phase d'expansion est considérée comme terminée pour le moment : les futurs ajouts ne devraient atterrir que s'ils franchissent la même barre de contrats publics que Goose, Junie, Continue et Windsurf franchissent désormais.