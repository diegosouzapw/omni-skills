# Client Support Matrix (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


This document tracks the practical client surface for Omni Skills across three inputs:

1. the `9router` dashboard inventory in `/home/diegosouzapw/dev/proxys/9router`
2. the current Omni Skills MCP sidecar implementation
3. current official documentation for each client or IDE

It is the working source of truth for deciding which clients get first-class `config-mcp` support, which ones stay manual-only, and which ones are only candidates.

---

## Scope

This matrix is about **client configuration for MCP**.

It is not the same as:

- skill installation support
- API compatibility
- A2A support
- ACP or other non-MCP protocols

Some products in the matrix consume MCP but do **not** have a meaningful “skills directory”, so they only receive config-target support.

---

## 9router Inventory

The `9router` dashboard currently groups these CLI tools or IDE clients:

- Claude Code
- OpenAI Codex
- Factory Droid
- OpenClaw
- Cursor
- Cline
- Kilo Code
- Continue
- Antigravity
- GitHub Copilot
- OpenCode
- Kiro AI

Local sources:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)

---

## First-Class Support

These clients now have a stable, explicit story in Omni Skills via `config-mcp --target ...`.

Current implementation totals:

- **7 install-capable clients**
- **16 config-capable clients**
- **33 first-class config targets**
- **19 config profiles**

| Client | Status | Config Targets | Notes |
|:-------|:-------|:---------------|:------|
| Claude Code | ✅ First-class | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Typed `mcpServers` config with Claude-specific allow/deny controls |
| Cursor | ✅ First-class | `cursor-workspace`, `cursor-user` | JSON `mcpServers` targets |
| VS Code | ✅ First-class | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Uses `servers` root |
| Gemini CLI | ✅ First-class | `gemini-user`, `gemini-workspace` | JSON settings + global MCP allow/exclude controls |
| Antigravity | ✅ First-class | `antigravity-user` | JSON `mcpServers` target |
| Kiro | ✅ First-class | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Kiro-specific disabled/auto-approve fields |
| Codex CLI | ✅ First-class | `codex-user` | TOML `mcp_servers` tables |
| Continue | ✅ First-class | `continue-workspace` | Dedicated YAML server document |
| Windsurf | ✅ First-class | `windsurf-user` | JSON `mcpServers` target with `serverUrl` entries |
| OpenCode | ✅ First-class | `opencode-workspace`, `opencode-user` | Official `opencode.json` / user config using top-level `mcp` |
| Cline | ✅ First-class | `cline-user` | `cline_mcp_settings.json` with `mcpServers` |
| GitHub Copilot CLI | ✅ First-class | `copilot-user`, `copilot-repo` | `mcp-config.json` or repo-scoped `.github/mcp.json` |
| Kilo Code | ✅ First-class | `kilo-user`, `kilo-project`, `kilo-workspace` | Kilo CLI uses `kilo.json`; workspace integration uses `.kilocode/mcp.json` |
| Zed | ✅ First-class | `zed-workspace` | `.zed/settings.json` with `context_servers` |
| Junie | ✅ First-class | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` or `~/.junie/mcp/mcp.json` using `mcpServers` |
| Goose | ✅ First-class | `goose-user` | `~/.config/goose/config.yaml` using a top-level `extensions` object for persistent MCP extensions |

---

## Current Gaps

These clients from `9router` are **not** yet first-class writer targets in Omni Skills:

| Client | Current State | Why |
|:-------|:--------------|:----|
| Factory Droid | ⚠️ Manual/custom only | No stable public MCP config shape found in primary docs during this pass |
| OpenClaw | ⚠️ Manual/custom only | Same issue as Factory Droid |

The sidecar can still be used with `--file` or custom paths for advanced users, but Omni Skills should not invent first-class writers without stable public config docs.

Two adjacent products are now better understood, but still intentionally stop short of first-class automatic writers:

| Client | Current State | Why |
|:-------|:--------------|:----|
| JetBrains AI Assistant | 🟡 Manual/snippet | Official MCP support exists, but the documented workflow is UI-driven/import-driven rather than a stable public file target |
| Postman | 🟡 Manual/snippet | Official MCP support exists, but configuration is managed inside product UX rather than a stable public file target |
| Roo Code | 🟡 Candidate | Public MCP docs exist, but a strong cross-platform file-path contract still needs confirmation before adding a writer |

---

## Support Policy

Omni Skills now follows this rule set:

1. **Install-capable** if a stable skills directory exists.
2. **Config-capable** if a stable public MCP config file format exists.
3. **Manual/snippet-only** if the product supports MCP but the public contract is UI-first, import-first, or still too unstable.

This is also the practical answer to one of the earlier architecture questions: the project should keep growing first-class writers only where a stable public format exists, and otherwise lean on a smaller set of canonical export families plus recipes and snippets.

### Canonical config families already in use

- JSON `mcpServers`
- JSON `servers`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`

### Additional candidates worth watching

| Client / IDE | Recommendation | Reason |
|:-------------|:---------------|:-------|
| JetBrains AI Assistant | 🟡 Keep manual/snippet for now | Official support is real, but the UX is still product-managed rather than file-contract-first |
| Postman | 🟡 Keep manual/snippet for now | Official setup is UI-first and workspace-managed rather than file-contract-first |
| Roo Code | 🟡 Investigate next | Promising MCP support, but writer safety depends on stronger config-path confirmation |
| VS Code Copilot Chat | 🟢 Already covered indirectly | The underlying VS Code MCP file locations are already supported |
| Zed ACP / Agent Servers | 🟡 Separate track | This is ACP/agent-server territory, not just MCP config writing |

---

## Official Sources Used

The decisions above were checked against current primary sources:

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Continue MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Goose Configuration Files](https://block.github.io/goose/docs/guides/config-files/)
- [Goose Session Extensions](https://block.github.io/goose/docs/guides/session-extensions/)
- [Postman MCP setup](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP Extension Guide](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Official MCP Registry](https://prod.registry.modelcontextprotocol.io/)

---

## Implementation Notes

The current Omni Skills sidecar intentionally distinguishes three support levels:

- **install-capable clients**
  - have a known skills directory and can use `install_skills`
- **config-capable clients**
  - have a stable config target and can use `configure_client_mcp`
- **manual/snippet clients**
  - documented, but without a safe first-class file writer yet

That separation keeps the product honest.

Not every MCP-capable product should be treated as a skill-install target.
The expansion phase is considered complete for now: future additions should only land if they clear the same public-contract bar that Goose, Junie, Continue, and Windsurf now clear.
