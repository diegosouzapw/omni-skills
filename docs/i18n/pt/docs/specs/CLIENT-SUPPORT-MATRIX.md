# Client Support Matrix (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Este documento rastreia a superfície prática do cliente para Omni Skills em três entradas:

1. o inventário do painel `9router` em `/home/diegosouzapw/dev/proxys/9router`
2. a atual implementação do sidecar Omni Skills MCP
3. Documentação oficial atual para cada cliente ou IDE

É a fonte de verdade para decidir quais clientes recebem suporte `config-mcp` de primeira classe, quais permanecem apenas manuais e quais são apenas candidatos.---

## Scope

Esta matriz é sobre**configuração do cliente para MCP**.

Não é o mesmo que:

- suporte à instalação de habilidades
- Compatibilidade de API
- Suporte A2A
- ACP ou outros protocolos não MCP

Alguns produtos na matriz consomem MCP, mas**não**possuem um “diretório de habilidades” significativo, portanto, recebem apenas suporte de destino de configuração.---

## 9router Inventory

O painel `9router` atualmente agrupa estas ferramentas CLI ou clientes IDE:

- Código Claude
- Código OpenAI
- Droid de fábrica
- OpenClaw
- Cursor
- Cline
- Código do quilo
- Continuar
- Antigravidade
- Copiloto GitHub
- Código aberto
-Kiro AI

Fontes locais:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Esses clientes agora têm uma história estável e explícita no Omni Skills via `config-mcp --target ...`.

Totais de implementação atuais:

-**7 clientes com capacidade de instalação**
-**16 clientes com capacidade de configuração**
-**33 alvos de configuração de primeira classe**
-**19 perfis de configuração**

| Cliente | Estado | Destinos de configuração | Notas |
|:-------|:-------|:---------------|:------|
| Código Cláudio | ✅ Primeira classe | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Configuração `mcpServers` digitada com controles de permissão/negação específicos de Claude |
| Cursor | ✅ Primeira classe | `cursor-workspace`, `cursor-user` | Destinos JSON `mcpServers` |
| Código VS | ✅ Primeira classe | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Usa raiz de `servidores` |
| Gêmeos CLI | ✅ Primeira classe | `gemini-user`, `gemini-workspace` | Configurações JSON + controles globais de permissão/exclusão de MCP |
| Antigravidade | ✅ Primeira classe | `usuário de antigravidade` | Destino JSON `mcpServers` |
| Kiro | ✅ Primeira classe | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Campos específicos de Kiro desabilitados/aprovação automática |
| CLI do Codex | ✅ Primeira classe | `usuário do codex` | Tabelas TOML `mcp_servers` |
| Continuar | ✅ Primeira classe | `continuar-espaço de trabalho` | Documento de servidor YAML dedicado |
| Windsurf | ✅ Primeira classe | `usuário de windsurf` | Destino JSON `mcpServers` com entradas `serverUrl` |
| Código aberto | ✅ Primeira classe | `opencode-workspace`, `opencode-user` | Configuração oficial `opencode.json` / usuário usando `mcp` de nível superior |
| Cline | ✅ Primeira classe | `cline-usuário` | `cline_mcp_settings.json` com `mcpServers` |
| CLI do GitHub Copilot | ✅ Primeira classe | `copilot-user`, `copilot-repo` | `mcp-config.json` ou `.github/mcp.json` com escopo de repositório |
| Código do quilo | ✅ Primeira classe | `kilo-user`, `kilo-project`, `kilo-workspace` | Kilo CLI usa `kilo.json`; integração do espaço de trabalho usa `.kilocode/mcp.json` |
| Zé | ✅ Primeira classe | `zed-espaço de trabalho` | `.zed/settings.json` com `context_servers` |
| Junho | ✅ Primeira classe | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` ou `~/.junie/mcp/mcp.json` usando `mcpServers` |
| Ganso | ✅ Primeira classe | `usuário-ganso` | `~/.config/goose/config.yaml` usando um objeto `extensions` de nível superior para extensões MCP persistentes |---

## Current Gaps

Esses clientes do `9router`**ainda não**são alvos de escritores de primeira classe no Omni Skills:

| Cliente | Estado Atual | Por que |
|:-------|:-------------|:----|
| Droid de fábrica | ⚠️ Somente manual/personalizado | Nenhuma forma de configuração pública estável do MCP foi encontrada nos documentos primários durante esta passagem |
| OpenClaw | ⚠️ Somente manual/personalizado | Mesmo problema do Factory Droid |

O sidecar ainda pode ser usado com `--file` ou caminhos personalizados para usuários avançados, mas Omni Skills não deve inventar escritores de primeira classe sem documentos de configuração públicos estáveis.

Dois produtos adjacentes são agora melhor compreendidos, mas ainda ficam intencionalmente aquém dos gravadores automáticos de primeira classe:

| Cliente | Estado Atual | Por que |
|:-------|:-------------|:----|
| Assistente de IA JetBrains | 🟡 Manual/trecho | Existe suporte oficial para MCP, mas o fluxo de trabalho documentado é orientado pela interface do usuário/orientado pela importação, em vez de um destino de arquivo público estável |
| Carteiro | 🟡 Manual/trecho | Existe suporte oficial para MCP, mas a configuração é gerenciada dentro da UX do produto, em vez de um destino de arquivo público estável |
| Código Roo | 🟡 Candidato | Existem documentos MCP públicos, mas um contrato forte de caminho de arquivo entre plataformas ainda precisa de confirmação antes de adicionar um gravador |---

## Support Policy

Omni Skills agora segue este conjunto de regras:

1.**Capaz de instalação**se existir um diretório de habilidades estável.
2.**Capaz de configuração**se existir um formato de arquivo de configuração MCP público estável.
3.**Manual/somente snippet**se o produto suportar MCP, mas o contrato público priorizar a interface do usuário, importar primeiro ou ainda muito instável.

Esta é também a resposta prática a uma das questões anteriores de arquitectura: o projecto deveria continuar a desenvolver escritores de primeira classe apenas onde existisse um formato público estável e, caso contrário, apoiar-se num conjunto mais pequeno de famílias canónicas de exportação, além de receitas e fragmentos.### Canonical config families already in use

- JSON `mcpServers`
- JSON `servidores`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Cliente/IDE | Recomendação | Razão |
|:------------|:---------------|:-------|
| Assistente de IA JetBrains | 🟡 Mantenha o manual/snippet por enquanto | O suporte oficial é real, mas a UX ainda é gerenciada pelo produto, e não pelo contrato de arquivo primeiro |
| Carteiro | 🟡 Mantenha o manual/snippet por enquanto | A configuração oficial prioriza a interface do usuário e é gerenciada pelo espaço de trabalho, em vez de contratar primeiro o arquivo |
| Código Roo | 🟡 Investigue a seguir | Suporte MCP promissor, mas a segurança do gravador depende de uma confirmação mais forte do caminho de configuração |
| Bate-papo do copiloto do código VS | 🟢 Já coberto indiretamente | Os locais de arquivo MCP subjacentes do VS Code já são suportados |
| Zed ACP / Servidores Agentes | 🟡 Faixa separada | Este é o território ACP/agente-servidor, não apenas a gravação de configuração do MCP |---

## Official Sources Used

As decisões acima foram verificadas em relação às fontes primárias atuais:

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Continuar MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [MCP assistente de IA da JetBrains](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Arquivos de configuração do Goose](https://block.github.io/goose/docs/guides/config-files/)
- [Extensões de sessão Goose](https://block.github.io/goose/docs/guides/session-extensions/)
- [Configuração do Postman MCP](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Código Roo MCP](https://docs.roocode.com/features/mcp)
- [Guia de extensão MCP do VS Code](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Registro oficial do MCP](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

O atual sidecar Omni Skills distingue intencionalmente três níveis de suporte:

-**clientes com capacidade de instalação**
  - tem um diretório de habilidades conhecido e pode usar `install_skills`
-**clientes com capacidade de configuração**
  - tem um alvo de configuração estável e pode usar `configure_client_mcp`
-**clientes manuais/snippet**
  - documentado, mas ainda sem um gravador de arquivos seguro de primeira classe

Essa separação mantém o produto honesto.

Nem todo produto compatível com MCP deve ser tratado como um alvo de instalação de habilidades.
A fase de expansão é considerada concluída por enquanto: adições futuras só devem chegar se passarem pela mesma barra de contrato público que Goose, Junie, Continue e Windsurf agora ultrapassam.