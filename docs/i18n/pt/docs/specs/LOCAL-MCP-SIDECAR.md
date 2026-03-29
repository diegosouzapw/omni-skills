# 🔌 Local MCP Sidecar (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Extensão de modo local opcional para `@omni-skills/server-mcp` que adiciona ferramentas com reconhecimento de sistema de arquivos para detecção de cliente, gerenciamento de habilidades e geração de configuração MCP.**---

## 📊 Status

| Recurso | Estado |
|:--------|:------|
| ✅ Ferramentas de catálogo somente leitura | Implementado |
| ✅ Ferramentas locais com reconhecimento de sistema de arquivos | Implementado |
| ✅ 3 transportes (stdio/stream/sse) | Implementado |
| ✅ Gravações permitidas na lista | Implementado |
| ✅ Padrões de visualização antes de escrever | Implementado |
| ✅ Escrita de configuração MCP com reconhecimento de cliente | Implementado |
| ✅ Autenticação HTTP + limitação de taxa | Implementado |
| ✅ Assinaturas e somas de verificação no momento da liberação | Implementado para arquivos gerados e divulgados por API/MCP |
| 🟡 Aplicação local de assinatura de horário de gravação | Ainda não aplicado; visualizações e gravações no modo local do checkout local confiável |
| 🟢 Cobertura de clientes atuais | 7 clientes com capacidade de instalação, 16 clientes com capacidade de configuração, 33 alvos de configuração, 19 perfis de configuração |---

## 🎯 Purpose

O modo local adiciona**ferramentas com reconhecimento de sistema de arquivos**sobre a superfície do catálogo MCP somente leitura existente. Use-o quando um agente precisar:

- 🕵️ Detecte clientes de IA locais compatíveis
- 📋 Inspecione as habilidades instaladas
- 👁️ Pré-visualização da instalação ou remoção da habilidade (simulação)
- 📦 Aplicar instalação ou remoção de habilidade local
- ⚙️ Escreva um arquivo de configuração MCP local após a visualização

Ele separa deliberadamente duas preocupações:

-**alvos de instalação de habilidades**
  clientes com um diretório de habilidades estável que pode usar `install_skills`
-**Alvos de configuração do MCP**
  clientes ou IDEs com um formato de configuração MCP estável e documentado, mesmo que não tenham um diretório de habilidades---

## 🔌 Transports

| Transporte | Protocolo | Caso de uso |
|:----------|:------------|:--------|
| `stdio` | Tubo | Integração direta do cliente |
| `fluxo` | HTTP streamável | Clientes HTTP modernos |
| `se` | Eventos enviados pelo servidor | Clientes legados |---

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

> Todos os comandos são definidos `OMNI_SKILLS_MCP_MODE=local` automaticamente.---

## 🛠️ Local Tools

Quando o modo local está ativado, estas ferramentas extras ficam disponíveis:

| Ferramenta | Descrição | Padrão |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | Procurar clientes de IA e seus caminhos de habilidade/configuração | — |
| 📋 `list_installed_skills` | Inspecione as habilidades instaladas para um cliente específico | — |
| 📦 `install_skills` | Instalar habilidades no diretório de habilidades de um cliente | 🔍 teste |
| 🗑️ `remove_skills` | Remover habilidades instaladas de um cliente | 🔍 teste |
| ⚙️ `configure_client_mcp` | Escreva a configuração do MCP para um cliente específico | 🔍 teste |

> ⚠️ `install_skills`, `remove_skills` e `configure_client_mcp` são padronizados como**dry-run**quando `dry_run` é omitido.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Cliente | Caminho |
|:-------|:-----|
| 🔵 Código Cláudio | `~/.claude/skills` |
| 🔵Cursor | `~/.cursor/skills` |
| 🟡 Gêmeos CLI | `~/.gemini/skills` |
| 🟣 Antigravidade | `~/.gemini/antigravity/skills` |
| 🟢Kiro | `~/.kiro/skills` |
| 🔴 Codex CLI | `~/.codex/skills` ou `$CODEX_HOME/skills` |
| ⚪ OpenCode | `<espaço de trabalho>/.opencode/skills` |

Esses 7 destinos são os únicos destinos de instalação de primeira classe atualmente.### ⚙️ MCP Config Files

| Alvo | Formato |
|:-------|:-------|
| `~/.claude/settings.json` | Configurações do código Claude JSON |
| `<espaço de trabalho>/.claude/settings.json` | Configurações do projeto Claude JSON |
| `~/.claude.json` | Legado Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (específico do sistema operacional) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<espaço de trabalho>/.cursor/mcp.json` | Espaço de trabalho do cursor JSON (`mcpServers`) |
| `~/.gemini/settings.json` | JSON do usuário Gemini (`mcpServers`) |
| `<espaço de trabalho>/.gemini/settings.json` | Projeto Gemini JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | JSON antigravidade (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | JSON do usuário Kiro (`mcpServers`) |
| `<espaço de trabalho>/.kiro/settings/mcp.json` | Projeto Kiro JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<espaço de trabalho>/.mcp.json` | JSON (`mcpServers`) |
| `<espaço de trabalho>/opencode.json` | Espaço de trabalho OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | JSON do usuário OpenCode (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<espaço de trabalho>/.github/mcp.json` | Repositório GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Usuário Kilo CLI JSON (`mcp`) |
| `<espaço de trabalho>/kilo.json` | Projeto Kilo CLI JSON (`mcp`) |
| `<espaço de trabalho>/.kilocode/mcp.json` | Espaço de trabalho Kilo Code JSON (`mcpServers`) |
| `<espaço de trabalho>/.continue/mcpServers/omni-skills.yaml` | Continuar espaço de trabalho YAML (`mcpServers`) |
| `<espaço de trabalho>/.junie/mcp/mcp.json` | Projeto Junie JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Usuário Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Ganso YAML (`extensões`) |
| `<espaço de trabalho>/.zed/settings.json` | Espaço de trabalho Zed JSON (`context_servers`) |
| `<espaço de trabalho>/.vscode/mcp.json` | JSON (`servidores`) |
| `~/.config/Code/User/mcp.json` | Usuário do VS Code JSON (`servidores`) |
| `~/.config/Code - Insiders/User/mcp.json` | JSON do usuário do VS Code Insiders (`servidores`) |
| `<espaço de trabalho>/.devcontainer/devcontainer.json` | JSON de contêiner de desenvolvimento aninhado (`customizations.vscode.mcp.servers`) |
| Raiz do cliente `mcp.json` | JSON (formato por cliente) |

Isso dá ao sidecar:

-**16 clientes ou IDEs com capacidade de configuração**
-**33 caminhos de destino de primeira classe**
-**19 perfis de formato**

A cobertura atual de configuração de primeira classe abrange:

- Claude Código e Claude Desktop
- Cursor
- Código VS e contêineres de desenvolvimento
- CLI Gêmeos
- Antigravidade
-Kiro
- Codex CLI
- Continuar
- Junho
- Windsurf
- Ganso
- Código aberto
- Cline
- GitHub Copilot CLI
- Código do quilo
-Zed

Candidatos manuais ou apenas de snippet ainda estão intencionalmente fora do conjunto de gravadores de primeira classe até que seus contratos de configuração pública estejam estáveis o suficiente.### 🧭 Expansion Policy

Omni Skills agora trata o suporte ao cliente como um modelo de três níveis:

1.**capaz de instalar**
   Existe um diretório de habilidades estável, para que a CLI e o arquivo secundário possam instalar habilidades diretamente.
2.**capaz de configuração**
   Existe um formato de configuração MCP estável e documentado, então `config-mcp` pode visualizar e gravar um arquivo de primeira classe.
3.**manual ou apenas trecho**
   O produto claramente oferece suporte ao MCP de alguma forma, mas os documentos públicos ainda não justificam um gravador automático seguro.

É por isso que clientes como JetBrains AI Assistant permanecem apenas manuais/snippet, enquanto Roo Code e Postman permanecem fora do conjunto de escritores de primeira classe até que sua história de mesclagem automática segura seja forte o suficiente para este projeto.---

## 🔒 Allowlist Model

O arquivo secundário local grava apenas em uma**lista de permissões explícita**.### 🟢 Default allowlist:

- Raízes de clientes conhecidas em `$HOME`
- `~/.codeium` para configuração do usuário do Windsurf
- `~/.copilot` para GitHub Copilot CLI
- `~/.cline` para Cline CLI
- `~/.config/goose` para configuração do Goose
- `~/.config/kilo` e `~/.config/opencode` para configuração CLI do Kilo/OpenCode
- `$CODEX_HOME` (ou `~/.codex` se não definido)
- Raiz atual do espaço de trabalho
- `<espaço de trabalho>/.agentes`
- `<espaço de trabalho>/.github`
- `<espaço de trabalho>/.kilocode`
- `<espaço de trabalho>/.opencode`
- `<espaço de trabalho>/.zed`
- `<espaço de trabalho>/.continue`
- `<espaço de trabalho>/.vscode`### ➕ Extend the allowlist:

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

O wrapper CLI apoiado por sidecar mantém a geração de configuração MCP acessível sem chamadas diretas JSON-RPC:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

O comportamento padrão é somente visualização. `--write` aplica a configuração ao caminho de destino resolvido na lista de permissões.### 🌊 Windsurf

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

A ferramenta `configure_client_mcp` também pode escrever configurações específicas do Claude quando você passa:

- `allowed_mcp_servers`
- `denied_mcp_servers`
- `permissões_deny`
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

Para destinos VS Code e Dev Container, `configure_client_mcp` também pode escrever:

- `sandboxEnabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Isso é mapeado para a orientação atual do VS Code para sandbox de servidores MCP stdio locais.### 🧰 Cross-Client Entry Options

`configure_client_mcp` agora suporta metadados de entrada mais ricos em perfis suportados:

- `cabeçalhos`
- `env`
- `env_file`
- `cwd`
- `tempo limite_ms`
- `descrição`
- `incluir_ferramentas`
- `excluir_ferramentas`
- `desativado`
- `confiança`

Opções específicas do perfil:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gêmeos: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- Código VS e contêineres de desenvolvimento: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` retorna `receitas` junto com a visualização ou configuração aplicada.

Estas receitas são blocos de orientação conscientes do cliente, por exemplo:

- `claude mcp add ... --scope usuário|projeto`
- `gemini mcp add ... --scope usuário|projeto`
- `codex mcp adicionar ...`
- receitas manuais de edição de arquivos para Cursor, VS Code, Kiro e Claude Desktop

A estratégia global é agora intencionalmente conservadora:

- reutilize um pequeno conjunto de famílias de configuração canônicas sempre que possível
- manter redatores personalizados apenas quando os documentos oficiais exigirem um formato distinto
- evite inventar gravadores automáticos para alvos não documentados---

## 🔐 Hosted HTTP Hardening

Os transportes HTTP suportam os mesmos controles controlados por ambiente que a API do catálogo:

| Variável | Finalidade |
|:--------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Autenticação do token ao portador |
| `OMNI_SKILLS_HTTP_API_KEYS` | Chaves de API separadas por vírgula |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspecção de tempo de execução somente para administrador |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Máximo de solicitações por janela |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Janela de limite de taxa em ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Habilitar registro de auditoria |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Gravar log de auditoria em um arquivo |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Restringir origens do navegador |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Restringir IPs de origem permitidos |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Retornar `503` para rotas não administrativas e não relacionadas à saúde |

> 🟢 `/healthz` permanece aberto. `/mcp`, `/sse` e ​​`/messages` requerem autenticação quando ativados. `/admin/runtime` requer o token de administrador quando configurado.---

## 🌍 Official Docs That Shape Support Decisions

O conjunto atual de gravadores e os limites somente manuais foram verificados em relação aos documentos oficiais do produto, incluindo:

- Código Antrópico Claude MCP
- OpenAI Codex CLI e OpenAI Docs MCP
- Documentos do Cursor MCP
- Continuar documentos do MCP
- Documentos Kiro MCP
- Documentos OpenCode MCP
- Documentos Cline MCP
- Documentos Kilo Code MCP
- Documentos da CLI do GitHub Copilot
- Documentos Zed MCP
- Documentos do VS Code MCP
- Documentos MCP do JetBrains AI Assistant

É por esses documentos que alguns clientes recebem gravadores automáticos de primeira classe, enquanto outros permanecem apenas com snippets por enquanto.