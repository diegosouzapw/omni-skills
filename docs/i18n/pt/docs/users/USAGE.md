# 📗 Usage Guide (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Tudo o que você precisa para invocar habilidades, executar serviços e operar o tempo de execução do Omni Skills.**

Para fluxos de trabalho operacionais completos, consulte o [🔧 System Runbook](../operações/RUNBOOK.md).
Para obter o mapa completo de comandos do usuário final, consulte o [🧭 Guia do usuário CLI](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Estado | Detalhes |
|:-------|:--------|
| ✅**Disponível agora**| 32 habilidades publicadas em design, arquitetura, depuração, documentos, OSS, segurança, DevOps, engenharia de IA, dados, ferramentas e fluxos de trabalho de aprendizado de máquina |
| 📦**Pacotes**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` e `oss-maintainer` são totalmente suportados hoje |
| 🔌**Alcance do MCP**| 7 clientes com capacidade de instalação, 16 clientes com capacidade de configuração, 33 alvos de configuração de primeira classe, 19 perfis de configuração |
| 🤖**Durabilidade A2A**| Durabilidade local de memória, JSON ou SQLite, retomada de reinicialização, executor de processo opcional e coordenação alugada opcional para trabalhadores compartilhados |---

## 🖥️ Invocation by Client

| Cliente | Como invocar | Caminho de Habilidades |
|:-------|:-------------|:------------|
| 🔵**Código Claude**| `>> /nome-da-habilidade me ajude...` | `~/.claude/skills/` |
| 🟡**Gêmeos CLI**| `Use @nome-habilidade para...` | `~/.gemini/skills/` |
| 🔴**Codex CLI**| `Use @nome-habilidade para...` | `~/.codex/skills/` |
| 🟢**Kiro**| Carregamento automático de habilidades sob demanda | `~/.kiro/skills/` |
| 🟣**Antigravidade**| `Use @nome-habilidade para...` | `~/.gemini/antigravity/skills/` |
| 🔵**Cursor**| `@skill-name` no bate-papo | `~/.cursor/skills/` |
| ⚪**OpenCode**| `opencode executado @skill-name` | `.opencode/habilidades/` |
| ⬛**Copiloto**| Colar o conteúdo da habilidade manualmente | N/A |

Clientes como Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline e Kilo Code usam principalmente o fluxo `config-mcp` em vez de um diretório de habilidades.---

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

>**📌 Notas:**
> - Em um terminal interativo, `npx omni-skills` agora abre um fluxo de instalação guiada
> - `npx omni-skills ui` abre o shell visual do Ink com ações de instalação, descoberta e inicialização de serviço
> - o shell visual persiste em instalações recentes, lançamentos recentes de serviços, favoritos e predefinições nomeadas em `~/.omni-skills/state/ui-state.json`
> - Fora de um TTY, a instalação completa ainda é o padrão quando nenhum seletor é fornecido
> - `--skill` instala apenas as habilidades publicadas selecionadas
> - `--bundle` expande o pacote e instala os membros publicados declarados no pacote selecionado
> - `find` suporta mais de 12 sinalizadores de filtro: `quality`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk` e mais
> - `config-mcp` é o caminho certo para produtos compatíveis com MCP que não possuem um diretório de habilidades de primeira classe---

## 🔌 Runtime Commands

A CLI é uma ferramenta de operações unificadas, não apenas um instalador.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

O shell visual suporta:

- instalação guiada com cliente conhecido ou seleção de caminho personalizado
- pesquise e instale sem memorizar sinalizadores
- visualização guiada da configuração do cliente MCP e fluxos de gravação
- Inicialização guiada por MCP, API e A2A
- instalações recentes e relançamentos de serviços
- predefinições de instalação e serviço salvas
- habilidades e pacotes favoritos### 🩺 Diagnostics

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

| # | Dica |
|:--|:----|
| 1️⃣ | Faça referência à habilidade pelo nome em seu prompt |
| 2️⃣ | Forneça o artefato, código ou contexto de design exato que o agente precisa |
| 3️⃣ | Prefira `--skill` para uma instalação mínima |
| 4️⃣ | Use `doctor` e `smoke` antes de depurar problemas de empacotamento ou tempo de execução |
| 5️⃣ | Use pacotes como instalações de domínio selecionadas agora que todos os sete pacotes iniciais têm suporte completo |
| 6️⃣ | Use `find --install --yes` para descoberta + instalação em um fluxo |
| 7️⃣ | Consulte o [runbook](../operações/RUNBOOK.md) para autenticação, limites de taxa, assinatura e verificação env vars |