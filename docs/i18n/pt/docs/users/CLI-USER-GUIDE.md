# 🧭 Omni Skills CLI User Guide (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**A superfície CLI pública completa fornecida por `omni-skills`.**

Use este guia quando quiser:

| Meta | Área de Comando |
|:-----|:------------|
| 📥 Instalar habilidades ou pacotes | [Fluxos de instalação](#3️⃣-fluxos de instalação) |
| 🔎 Pesquise no catálogo | [Descoberta de catálogo](#4️⃣-descoberta de catálogo) |
| 🔌 Configurar clientes MCP | [Configuração do cliente MCP](#5️⃣-mcp-client-config) |
| 🖥️ Iniciar serviços MCP, API ou A2A | [Servidor MCP](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Use o terminal visual | [Concha Visual](#9️⃣-concha visual) |
| 🧪 Executar diagnóstico ou simulação | [Diagnóstico](#🔟-diagnóstico e comprovação) |---

## 1️⃣ Install and Entry Modes

Instale com `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Contexto | O que acontece |
|:--------|:------------|
| 🖥️ TTY + sem argumentos | Abre o fluxo de**instalação guiada**|
| ⚙️ Não TTY + sem argumentos | Instalação não interativa em `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Marca**Concha visual de tinta**|
| 📝 `npx omni-skills ui --text` | Readline**substituição de texto**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Comando | Descrição |
|:--------|:-----------|
| `ui` | 🎨 Hub terminal visual |
| `encontrar [consulta]` | 🔎 Descoberta de catálogo |
| `recategorizar` | 🏷️ Gestão de taxonomia |
| `instalar [sinalizadores]` | 📥 Instalação de habilidade/pacote |
| `config-mcp` | 🔌 Configuração do cliente MCP |
| `mcp <stdio\|stream\|sse>` | 🔌 Modos de servidor MCP |
| `api` | 🌐 API de catálogo |
| `a2a` | 🤖 Tempo de execução A2A |
| `fumaça` | 🧪 Pré-voo de lançamento |
| `publicar-verificar` | 📦 Verificação de publicação do pacote |
| `médico` | 🩺 Diagnóstico ambiental |
| `ajuda` | ❓ Referência de comando |---

## 3️⃣ Install Flows

### Início Rápido

```bash
npx omni-skills
npx omni-skills install --guided
```

> O fluxo guiado permite que você escolha:**cliente alvo**→**pacote ou habilidade**→**caminho personalizado**→**visualização antes da execução**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| Bandeira | Cliente |
|:-----|:-------|
| `--antigravidade` | 🟣 Antigravidade *(padrão)* |
| `--claude` | 🟢 Código Cláudio |
| `--cursor` | 🔵Cursor |
| `--codex` | 🔴 Codex CLI |
| `--gêmeos` | 🟡 Gêmeos CLI |
| `--kiro` | 🟠Kiro |
| `--opencode` | ⚪ OpenCode |

> Destino de instalação padrão (não interativo): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| Bandeira | Finalidade |
|:-----|:--------|
| `--categoria` | Filtrar por categoria de taxonomia |
| `--ferramenta` | Filtrar por ferramenta compatível |
| `--risco` | Filtrar por nível de risco |
| `--classificar` | Classificar resultados (por exemplo, `qualidade`) |
| `--ordem` | Ordem de classificação |
| `--min-qualidade` | Índice de qualidade mínimo |
| `--min-melhores-práticas` | Pontuação mínima de melhores práticas |
| `--nível mínimo` | Nível mínimo de maturidade |
| `--min-segurança` | Pontuação mínima de segurança |
| `--status de validação` | Filtrar por estado de validação |
| `--status de segurança` | Filtrar por estado de segurança |---

## 5️⃣ MCP Client Config

Use `config-mcp` para visualizar ou gravar a configuração do MCP com reconhecimento de cliente.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<detalhes>
<summary>🔌 <strong>Superfície de cliente com capacidade de configuração</strong></summary>

| Cliente | Alvos |
|:-------|:--------|
| Cláudio | Configurações e destinos de desktop |
| Cursor | Usuário e espaço de trabalho |
| Códice | Configuração TOML |
| Gêmeos | Usuário e espaço de trabalho |
| Antigravidade | Configuração do usuário |
| Código aberto | Usuário e espaço de trabalho |
| Cline | Alvo de primeira classe |
| CLI do GitHub Copilot | Usuário e repositório |
| Código do quilo | Usuário, projeto e espaço de trabalho |
| Kiro | Usuário e espaço de trabalho |
| Zé | Espaço de trabalho |
| Código VS | Usuário, espaço de trabalho e contêiner de desenvolvimento |
| Continuar | Espaço de trabalho YAML |
| Junho | Projeto e usuário |
| Windsurf | Configuração do usuário |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**Sidecar local**adiciona: detecção de cliente, visualização de instalação, instalação/remoção de fluxos e gravação de configuração MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Rota | Finalidade |
|:------|:--------|
| `OBTER /healthz` | Exame de saúde |
| `OBTER /openapi.json` | Especificação OpenAPI |
| `OBTER /v1/habilidades` | Listar todas as habilidades |
| `OBTER /v1/pesquisar` | Pesquise no catálogo |
| `GET /v1/skills/:id/archives` | Listar arquivos para uma habilidade |
| `GET /v1/skills/:id/download/archive?format=zip` | Baixe o arquivo de habilidades |
| `GET /v1/skills/:id/download/archive/checksums` | Baixar somas de verificação |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Recurso | Estado |
|:--------|:-------|
| 🔎 Descoberta com reconhecimento de tarefas | ✅ |
| 📋 Transferência do plano de instalação | ✅ |
| 🔄 Votação | ✅ |
| 📡 Transmissão | ✅ |
| ❌ Cancelamento | ✅ |
| 🔔 Configuração de notificação push | ✅ |
| 💾 Persistência | Memória, JSON e SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Funcionalidades

| Recurso | Descrição |
|:--------|:-----------|
| 🧭 Instalação guiada | Escolha cliente ou caminho personalizado |
| 🔎 Pesquisar + instalar | Não é necessária memorização de bandeira |
| 🔌 Configuração MCP | Visualizar e gravar fluxos |
| 🖥️ Lançamento do serviço | Inicialização guiada por MCP, API e A2A |
| 🕐 Recentes | Instalações recentes e relançamentos de serviços |
| ⭐ Favoritos | Habilidades e pacotes salvos |
| 💾 Predefinições | Predefinições nomeadas de instalação e serviço |

>**Caminho do estado:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Inspeciona: estado do repositório, estado da instalação local, disponibilidade de tempo de execução e problemas ambientais.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Valida: construção, testes, saída de pacote, inicialização de serviço, cobertura de scanner e pacote de lançamento.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Pessoa | Comando | Finalidade |
|:-----------|:--------|:--------|
| 🆕 Novo usuário | `npx omni-habilidades` | Instalação guiada pela primeira vez |
| 🔧 Operador | `npx omni-skills config-mcp --list-targets` | Configurar o MCP local |
| 🔧 Operador | `npx omni-skills mcp stream --local` | Iniciar sidecar local |
| 📦 Mantenedor | `npx omni-skills smoke` | Validar uma versão |
| 🔍 Usuário avançado | `npx omni-skills encontram segurança --sort qualidade --min-qualidade 95` | Encontre a melhor habilidade primeiro |---

## 📖 Related Documents

| Documento | O que cobre |
|:----|:-------------|
| 🚀 [Primeiros passos](./GETTING-STARTED.md) | Instale e verifique em menos de 2 minutos |
| 📗 [Guia de uso](./USAGE.md) | Todos os comandos, padrões e modos CLI |
| 📦 [Pacotes](./BUNDLES.md) | Coleções de habilidades selecionadas |
| 🔧 [Runbook do sistema](../operações/RUNBOOK.md) | Referência operacional |
| 🔌 [Sidecar MCP local](../specs/LOCAL-MCP-SIDECAR.md) | Ferramentas de sistema de arquivos e gravação de configuração |