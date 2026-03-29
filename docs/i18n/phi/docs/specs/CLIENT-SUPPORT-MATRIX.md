# Client Support Matrix (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Sinusubaybayan ng dokumentong ito ang praktikal na client surface para sa Omni Skills sa tatlong input:

1. ang imbentaryo ng dashboard ng `9router` sa `/home/diegosouzapw/dev/proxys/9router`
2. ang kasalukuyang pagpapatupad ng sidecar ng Omni Skills MCP
3. kasalukuyang opisyal na dokumentasyon para sa bawat kliyente o IDE

Ito ang gumaganang pinagmumulan ng katotohanan para sa pagpapasya kung aling mga kliyente ang makakakuha ng first-class na suporta sa `config-mcp`, alin ang mananatiling manual-only, at alin ang mga kandidato lamang.---

## Scope

Ang matrix na ito ay tungkol sa**client configuration para sa MCP**.

Ito ay hindi katulad ng:

- suporta sa pag-install ng kasanayan
- Pagkatugma sa API
- Suporta sa A2A
- ACP o iba pang hindi MCP protocol

Ang ilang produkto sa matrix ay gumagamit ng MCP ngunit**walang**may makabuluhang "direktoryo ng mga kasanayan", kaya tumatanggap lang sila ng suporta sa config-target.---

## 9router Inventory

Kasalukuyang pinapangkat ng dashboard ng `9router` ang mga CLI tool o IDE client na ito:

- Claude Code
- OpenAI Codex
- Factory Droid
- OpenClaw
- Cursor
- Cline
- Kilo Code
- Magpatuloy
- Antigravity
- GitHub Copilot
- OpenCode
- Kiro AI

Mga lokal na mapagkukunan:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Ang mga kliyenteng ito ay mayroon na ngayong matatag, tahasang kuwento sa Omni Skills sa pamamagitan ng `config-mcp --target ...`.

Kasalukuyang mga kabuuan ng pagpapatupad:

-**7 kliyenteng may kakayahang mag-install**
-**16 na kliyenteng may kakayahang mag-config**
-**33 first-class na config target**
-**19 config profile**

| Kliyente | Katayuan | Mga Config Target | Mga Tala |
|:-------|:-------|:----------------|:------|
| Claude Code | ✅ First-class | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Nag-type ng config ng `mcpServers` na may mga kontrol na payagan/deny na partikular sa Claude |
| Cursor | ✅ First-class | `cursor-workspace`, `cursor-user` | Mga target na `mcpServers` ng JSON |
| VS Code | ✅ First-class | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Gumagamit ng `servers` root |
| Gemini CLI | ✅ First-class | `gemini-user`, `gemini-workspace` | Mga setting ng JSON + global MCP allow/exclude controls |
| Antigravity | ✅ First-class | `antigravity-user` | JSON `mcpServers` target |
| Kiro | ✅ First-class | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Kiro-specific disabled/auto-approve fields |
| Codex CLI | ✅ First-class | `codex-user` | TOML `mcp_servers` tables |
| Magpatuloy | ✅ First-class | `tuloy-workspace` | Nakatuon na dokumento ng server ng YAML |
| Windsurf | ✅ First-class | `windsurf-user` | Target ng `mcpServers` ng JSON na may mga entry na `serverUrl` |
| OpenCode | ✅ First-class | `opencode-workspace`, `opencode-user` | Opisyal na `opencode.json` / user config gamit ang top-level na `mcp` |
| Cline | ✅ First-class | `cline-user` | `cline_mcp_settings.json` na may `mcpServers` |
| GitHub Copilot CLI | ✅ First-class | `copilot-user`, `copilot-repo` | `mcp-config.json` o repo-scoped `.github/mcp.json` |
| Kilo Code | ✅ First-class | `kilo-user`, `kilo-project`, `kilo-workspace` | Gumagamit ang Kilo CLI ng `kilo.json`; Gumagamit ang pagsasama ng workspace ng `.kilocode/mcp.json` |
| Zed | ✅ First-class | `zed-workspace` | `.zed/settings.json` na may `context_servers` |
| Junie | ✅ First-class | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` o `~/.junie/mcp/mcp.json` gamit ang `mcpServers` |
| Gansa | ✅ First-class | `goose-user` | `~/.config/goose/config.yaml` gamit ang isang top-level na `extensions` object para sa patuloy na mga extension ng MCP |---

## Current Gaps

Ang mga kliyenteng ito mula sa `9router` ay**hindi pa**mga target ng manunulat sa unang klase sa Omni Skills:

| Kliyente | Kasalukuyang Estado | Bakit |
|:-------|:--------------|:----|
| Factory Droid | ⚠️ Manual/custom lang | Walang nakitang matatag na pampublikong MCP config na hugis sa mga pangunahing doc sa panahon ng pass na ito |
| OpenClaw | ⚠️ Manual/custom lang | Parehong isyu sa Factory Droid |

Magagamit pa rin ang sidecar sa `--file` o mga custom na path para sa mga advanced na user, ngunit hindi dapat mag-imbento ng mga first-class na manunulat ang Omni Skills na walang mga stable na pampublikong config doc.

Ang dalawang magkatabing produkto ay mas nauunawaan na ngayon, ngunit sinasadya pa rin na huminto sa mga unang-class na awtomatikong manunulat:

| Kliyente | Kasalukuyang Estado | Bakit |
|:-------|:--------------|:----|
| JetBrains AI Assistant | 🟡 Manwal/snippet | Umiiral ang opisyal na suporta sa MCP, ngunit ang nakadokumentong daloy ng trabaho ay UI-driven/import-driven sa halip na isang stable na pampublikong target ng file |
| Postman | 🟡 Manwal/snippet | Umiiral ang opisyal na suporta sa MCP, ngunit pinamamahalaan ang configuration sa loob ng UX ng produkto sa halip na isang matatag na target ng pampublikong file |
| Roo Code | 🟡 Kandidato | Ang mga pampublikong MCP doc ay umiiral, ngunit ang isang malakas na cross-platform na file-path na kontrata ay nangangailangan pa rin ng kumpirmasyon bago magdagdag ng isang manunulat |---

## Support Policy

Sinusunod na ngayon ng Omni Skills ang set ng panuntunang ito:

1.**Install-capable**kung mayroong isang matatag na direktoryo ng mga kasanayan.
2.**Config-capable**kung mayroong isang matatag na pampublikong MCP config file format.
3.**Manual/snippet-only**kung sinusuportahan ng produkto ang MCP ngunit ang pampublikong kontrata ay UI-first, import-first, o masyadong hindi matatag.

Ito rin ang praktikal na sagot sa isa sa mga naunang tanong sa arkitektura: ang proyekto ay dapat na patuloy na lumaki ang mga first-class na manunulat lamang kung saan umiiral ang isang matatag na pampublikong format, at kung hindi man ay sumandal sa isang mas maliit na hanay ng mga canonical export na pamilya kasama ang mga recipe at snippet.### Canonical config families already in use

- JSON `mcpServers`
- JSON `mga server`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Kliyente / IDE | Rekomendasyon | Dahilan |
|:-------------|:-----------------|:-------|
| JetBrains AI Assistant | 🟡 Panatilihin ang manual/snippet sa ngayon | Ang opisyal na suporta ay totoo, ngunit ang UX ay pinamamahalaan pa rin ng produkto kaysa sa file-contract-first |
| Postman | 🟡 Panatilihin ang manual/snippet sa ngayon | Ang opisyal na setup ay UI-first at workspace-managed sa halip na file-contract-first |
| Roo Code | 🟡 Susunod na siyasatin | Nangangako ng suporta sa MCP, ngunit ang kaligtasan ng manunulat ay nakasalalay sa mas malakas na kumpirmasyon ng config-path |
| VS Code Copilot Chat | 🟢 Nasasakupan na nang hindi direktang | Ang pinagbabatayan na mga lokasyon ng file ng VS Code MCP ay suportado na |
| Zed ACP / Mga Server ng Ahente | 🟡 Hiwalay na track | Ito ay ACP/agent-server territory, hindi lang MCP config writing |---

## Official Sources Used

Ang mga desisyon sa itaas ay sinuri laban sa kasalukuyang mga pangunahing mapagkukunan:

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Magpatuloy sa MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Goose Configuration Files](https://block.github.io/goose/docs/guides/config-files/)
- [Mga Extension ng Goose Session](https://block.github.io/goose/docs/guides/session-extensions/)
- [Pag-set up ng Postman MCP](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [VS Code MCP Extension Guide](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Opisyal na Registry ng MCP](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Ang kasalukuyang sidecar ng Omni Skills ay sadyang nakikilala ang tatlong antas ng suporta:

-**mga kliyenteng may kakayahang mag-install**
  - may kilalang direktoryo ng mga kasanayan at maaaring gumamit ng `install_skills`
-**mga kliyenteng may kakayahang mag-config**
  - magkaroon ng isang matatag na target ng config at maaaring gumamit ng `configure_client_mcp`
-**manual/snippet client**
  - dokumentado, ngunit wala pang ligtas na first-class na file writer

Ang paghihiwalay na iyon ay nagpapanatili sa produkto na tapat.

Hindi lahat ng produkto na may kakayahang MCP ay dapat ituring bilang target sa pag-install ng kasanayan.
Itinuturing na kumpleto ang yugto ng pagpapalawak sa ngayon: ang mga pagdaragdag sa hinaharap ay dapat lang dumarating kung na-clear nila ang parehong pampublikong-contract bar na naalis na ngayon ng Goose, Junie, Continue, at Windsurf.