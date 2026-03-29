# 🧠 Omni Skills (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**O catálogo de habilidades que se instala sozinho.**<br/>
CLI · API · MCP · A2A — tudo a partir de um único comando `npx`.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Instale em 1 min](#-installation) · [🛠️ Escolha sua ferramenta](#-choose-your-tool) · [📖 Guia CLI](docs/users/CLI-USER-GUIDE.md) · [📦 Bundles](docs/users/BUNDLES.md) · [🔌 Tempo de execução](#-runtime-surfaces) · [💡 Por que Omni Habilidades](#-por que-omni-habilidades)</div>

---

<div align="center">

### Visão Geral

</div>

| | Métrica | Valor |
|:--|:-------|:------|
| 📦 |**Habilidades publicadas**| `32` em 15 categorias ativas |
| 🎯 |**Pacotes**| `7` pacotes com curadoria totalmente apoiados |
| 🖥️ |**Instalar clientes**| `7` assistentes de codificação de IA com capacidade de instalação |
| 🔌 |**Clientes MCP**| `16` Clientes com capacidade de configuração MCP |
| 🔐 |**Saída selecionada**| `32` derivados ingleses aprimorados em `skills_omni/` |
| 📋 |**Lançamento Atual**| `v0.1.2` |---

## Início Rápido

>**Procurou habilidades de codificação de IA, habilidades de Claude Code, habilidades de cursor, habilidades Codex CLI, habilidades Gemini CLI, habilidades antigravidade ou bibliotecas `SKILL.md` instaláveis?**
> Você está no lugar certo.### 1️⃣ What is this?

Omni Skills é um**catálogo de habilidades instaláveis ​​e tempo de execução**para assistentes de codificação de IA. Em sua essência, é um repositório público de manuais `SKILL.md` reutilizáveis ​​- mas, diferentemente das coleções simples de habilidades, o repositório**é**a camada de distribuição e tempo de execução.

<detalhes>
<summary>📋 <strong>O que está incluído</strong></summary>

| Componente | Descrição |
|:----------|:-----------|
| 🧠**Habilidades**| Curadoria de manuais baseados em `SKILL.md` para assistentes de IA |
| 📦**Manifestos**| Manifestos, pacotes e arquivos JSON gerados |
| 🧭**Instalação guiada**| Fluxos de instalação de terminal visual e TTY interativo |
| 🌐**API de catálogo**| API HTTP somente leitura para pesquisa, descoberta e downloads |
| 🔌**Servidor MCP**| Ferramentas de descoberta, recomendação e configuração com reconhecimento de cliente |
| 🤖**Tempo de execução A2A**| Orquestração de tarefas entre agentes |
| ✨**Pipeline de melhorias**| Aprimorador privado publica derivados em inglês com curadoria em `skills_omni/` |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *"Use `@brainstorming` para planejar um MVP SaaS."*
>
> 💬 *"Use `@api-design` para revisar o design deste endpoint."*
>
> 💬 *"Use `@debugging` para isolar esta regressão."*### 5️⃣ Start with a bundle

| 🎯 Gol | Pacote | Comando |
|:--------|:-------|:--------|
| Engenharia geral | `essencial` | `npx omni-skills --bundle Essentials` |
| Entrega de produto + aplicativo | `pilha completa` | `npx omni-skills --bundle full-stack` |
| Sistemas de design | `projeto` | `npx omni-skills --bundle design` |
| Revisão de segurança | `segurança` | `npx omni-skills --bundle segurança` |
| Infra e liberação | `devops` | `npx omni-skills --bundle devops` |
| Aplicações LLM | `ai-engenheiro` | `npx omni-skills --bundle ai-engineer` |
| Manutenção de OSS | `oss-mantenedor` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Antes de comparar pacotes ou escolher um caminho de instalação, compreender estes cinco blocos de construção ajuda:

| Conceito | O que significa |
|:--------|:-------------|
| 🧠**Habilidades**| Manuais `SKILL.md` reutilizáveis ​​que ensinam um assistente como executar bem um fluxo de trabalho |
| 📦**Artefatos do Catálogo**| JSON gerado e saídas de arquivo permitindo pesquisa, comparação, download e instalação |
| 🔌**Configuração MCP**| Configuração do lado do cliente para assistentes descobrirem Omni Skills por meio de ferramentas MCP |
| 🤖**Tempo de execução A2A**| Orquestração entre agentes para descoberta, recomendação e transferência de plano de instalação |
| ✨**Saída selecionada**| `skills_omni/` — a superfície aprimorada mantida pelo Omni, separada da entrada upstream nativa |

>**📝 Política nativa/com curadoria:**
> - `skills/` aceita entrada de upstream nativo em qualquer idioma
> - `skills_omni/` é sempre curado e publicado em inglês
> - `skills_omni/` é uma superfície unidirecional e não retorna à ingestão nativa---

## 💡 Why Omni Skills

>**Não apenas "outro repositório com habilidades em pastas."**
> Omni Skills tem um contrato mais forte e uma superfície de tempo de execução mais ampla.

| Se você quiser… | 📁 Repositório de habilidades típicas | ✨ Habilidades Omni |
|:------------|:----------------------|:-------------|
| Instale em um assistente real | Cópia manual ou script personalizado | `npx omni-skills`, instalação guiada, UI visual, seletivo `--skill` e `--bundle` |
| Pesquise e compare habilidades | Navegue pela redução manualmente | Catálogo gerado, filtragem, planejamento de pacotes, pesquisa, comparação e recomendação |
| Use os mesmos dados em todas as ferramentas | Lógica separada por ferramenta | Manifestos e catálogo compartilhados para CLI, API, MCP e A2A |
| Configurar clientes MCP | Editar arquivos manualmente | `config-mcp`, visualizações de sidecar locais, receitas geradas e gravações na lista de permissões |
| Lançamentos de confiança | Embalagem de melhor esforço | Somas de verificação, arquivos assinados, verificação de scanner, liberação de CI e pré-impressão de publicação |
| Curar a ingestão da comunidade | Quaisquer terras permanecem como estão | Ingestão nativa em `skills/`, curadoria de derivados do inglês em `skills_omni/` com atribuição |---

## 🖥️ Compatibility and Invocation

Essas habilidades seguem o modelo `SKILL.md` e podem ser usadas como um repositório normal, mas o pacote também as instala e configura em uma ampla superfície:

>**7**clientes com capacidade de instalação ·**16**clientes com capacidade de configuração do MCP### 🎯 Install-Capable Clients

| Ferramenta | Tipo | Exemplo de invocação | Caminho de instalação |
|:-----|:-----|:-------------------|:------------|
| 🟢**Código Claude**| CLI | `Use o brainstorming para planejar um recurso` | `~/.claude/skills` |
| 🔵**Cursor**| IDE | `@brainstorming me ajude a planejar um recurso` | `~/.cursor/skills` |
| 🟡**Gêmeos CLI**| CLI | `Use o brainstorming para planejar um recurso` | `~/.gemini/skills` |
| 🔴**Codex CLI**| CLI | `Use o brainstorming para planejar um recurso` | `~/.codex/skills` |
| 🟠**Kiro**| CLI/IDE | `Use o brainstorming para planejar um recurso` | `~/.kiro/skills` |
| 🟣**Antigravidade**| IDE | `Use @brainstorming para planejar um recurso` | `~/.gemini/antigravity/skills` |
| ⚪**OpenCode**| CLI | `opencode executado @brainstorming` | `<espaço de trabalho>/.opencode/skills` |

<detalhes>
<summary>🔌 <strong>Cobertura mais ampla de configuração MCP (16 clientes)</strong></summary>

Esses destinos fazem parte da superfície de configuração do MCP suportada, mesmo quando não são destinos de instalação para diretórios de habilidades:

| Cliente ou Surface | Tipo de suporte | Notas |
|:------------------|:-----------|:------|
| Configurações e área de trabalho do Claude | Configuração MCP | Configurações, área de trabalho e fluxos com reconhecimento de projeto |
| Código VS | Configuração MCP | Alvos de usuário, espaço de trabalho, insiders e Dev Container |
| Gêmeos | Configuração MCP | Configurações de usuário e espaço de trabalho |
| Cline | Configuração MCP | Destino de configuração de primeira classe |
| CLI do GitHub Copilot | Configuração MCP | Destinos de configuração de usuário e repositório |
| Continuar | Configuração MCP | Geração YAML do espaço de trabalho |
| Windsurf | Configuração MCP | Destino de configuração do usuário |
| Zé | Configuração MCP | Destino de configuração do espaço de trabalho |
| Ganso | Configuração MCP | Destino de configuração do usuário com receita gerada |
| Código do quilo | Configuração MCP | Destinos de usuário, projeto e espaço de trabalho |
| Junho | Configuração MCP | Destinos de configuração do projeto e do usuário |</details>

---

## Instalar

<tabela>
<tr>
<td largura="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

| Ferramenta | Comando de instalação | Primeiro uso |
|:-----|:---------------|:----------|
| 🟢 Código Cláudio | `npx omni-skills --claude` | `Use o brainstorming para planejar um recurso` |
| 🔵Cursor | `npx omni-skills --cursor` | `@brainstorming me ajude a planejar um recurso` |
| 🟡 Gêmeos CLI | `npx omni-skills --gemini` | `Use o brainstorming para planejar um recurso` |
| 🔴 Codex CLI | `npx omni-skills --codex` | `Use o brainstorming para planejar um recurso` |
| 🟣 Antigravidade | `npx omni-skills --antigravity` *(padrão)* | `Use @brainstorming para planejar um recurso` |
| 🟠Kiro | `npx omni-skills --kiro` | `Use o brainstorming para planejar um recurso` |
| ⚪ OpenCode | `npx omni-skills --opencode` | `opencode executado @brainstorming` |
| 📂 Caminho personalizado | `npx omni-skills --path ./my-skills` | Depende da sua ferramenta |

> 📖**Não sabe por onde começar?**
> - [🚀 Primeiros passos](docs/users/GETTING-STARTED.md) — instale e verifique em menos de 2 minutos
> - [🧭 Guia do usuário CLI](docs/users/CLI-USER-GUIDE.md) — referência completa do comando
> - [📗 Guia de uso](docs/users/USAGE.md) — prompts, padrões e modos de tempo de execução---

## 🔌 Runtime Surfaces

Omni Skills não é apenas uma biblioteca de habilidades. Ele expõe**quatro superfícies de tempo de execução**que consomem o mesmo catálogo gerado:

| Superfície | Estado | O que faz | Exemplo |
|:--------|:------|:-------------|:--------|
| 🖥️**CLI**| ✅ Disponível | Encontre, instale, diagnostique, UI visual, serviços de inicialização, verificações de fumaça | `npx omni-skills doctor` |
| 🌐**API de catálogo**| ✅ Disponível | Catálogo somente leitura, pesquisa, pacotes, comparação, planos de instalação, downloads | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Disponível | Descoberta, recomendação, visualização de instalação, sidecar local, fluxos de configuração | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅ Disponível | Ciclo de vida da tarefa, transferência, votação, streaming, cancelamento, persistência | `npx omni-skills a2a --port 3335` |

<detalhes>
<summary>🖥️ <strong>Comandos visuais do shell e do operador</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<detalhes>
<summary>🔌 <strong>Transportes e configuração do MCP</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

| Métrica | Contagem |
|:-------|:------|
| 🧠 Habilidades publicadas |**32**|
| 📂 Categorias ativas |**15**|
| 📦 Pacotes totalmente garantidos |**7**|
| ✨ Derivados com curadoria |**32**em `skills_omni/` |### 📦 Bundle Availability

| Pacote | Habilidades | Membros |
|:-------|:-------|:--------|
| 🧰 `essenciais` |**4/4**✅ | `encontrar habilidades` · `brainstorming` · `arquitetura` · `depuração` |
| 🌐 `pilha completa` |**5/5**✅ | `frontend-design` · `api-design` · `database-design` · `omni-figma` · `auth-flows` |
| 🎨 `design` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `auditoria de acessibilidade` · `design-token-governance` |
| 🛡️ `segurança` |**4/4**✅ | `auditor de segurança` · `scanner de vulnerabilidade` · `resposta a incidentes` · `modelagem de ameaças` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `revisão de observabilidade` · `engenharia de lançamento` |
| 🤖 `engenheiro de IA` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `engenharia de contexto` · `contratos de dados` · `model-serving` |
| 🔧 `oss-mantenedor` |**4/4**✅ | `find-skills` · `create-pr` · `changelog` · `documentação` |### ✨ Native Intake → Curated Output

| Superfície | Finalidade | Idioma |
|:--------|:--------|:--------|
| 📥 `habilidades/` | Ingestão nativa | Qualquer idioma |
| ✨ `skills_omni/` | Saída com curadoria omni-mantida | Sempre Inglês |

>**ℹ️**As alterações nas habilidades nativas são reprocessadas pelo aprimorador privado e atualizadas na linha de base selecionada. Isso torna `skills_omni/` uma**superfície de catálogo mantida**, não uma segunda cópia.---

## 🛡️ Security and Release Posture

> Omni Skills oferece uma história de lançamento e verificação mais forte do que um repositório de descontos simples.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<detalhes>
<summary>📋 <strong>O que o pipeline valida</strong></summary>

- ✅ Validação de habilidades e geração de metadados
- ✅ Ferramentas de normalização e recategorização de taxonomia
- ✅ Geração de catálogo e arquivo
- ✅ Testes automatizados
- ✅ Caminhos de inicialização API, MCP e A2A
- ✅ Verificação de arquivo
- ✅ Pré-comprovação de pacote com `npm pack --dry-run`</details>

<detalhes>
<summary>🔐 <strong>Postura de liberação</strong></summary>

| Controle | Descrição |
|:--------|:-----------|
| 🔒 Somas de verificação SHA-256 | Manifestos de soma de verificação para todos os arquivos |
| ✍️ Artefatos assinados | Assinaturas separadas em artefatos de lançamento |
| 🤖 Aplicado por CI | Verificação de liberação no CI antes da publicação |
| 🦠 Portões com scanner | Fluxo de liberação controlado por ClamAV e VirusTotal |
| 📦 Lançamento do GitHub | Geração automatizada de lançamento do GitHub |
| 📋 publicação npm | Apenas do tarball verificado |
| 🔄 Liberação automática | Na qualificação, a habilidade é mesclada com `principal` |

**A liberação automática é acionada apenas quando uma mesclagem é alterada:**
- `habilidades/*/**`
- `skills_omni/*/**`
- `dados/bundles.json`

Alterações somente em documentos**não**acionam a publicação do pacote.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Documento | O que você aprenderá |
|:----|:-----------------|
| 🚀 [Primeiros passos](docs/users/GETTING-STARTED.md) | Instale, verifique e invoque em menos de 2 minutos |
| 🧭 [Guia do usuário CLI](docs/users/CLI-USER-GUIDE.md) | Referência completa de comandos e padrões do mundo real |
| 📗 [Guia de uso](docs/users/USAGE.md) | Comandos CLI, modos de instalação, tempo de execução e configuração do MCP |
| 📦 [Pacotes](docs/users/BUNDLES.md) | Pacotes selecionados e disponibilidade |
| 📚 [Catálogo](docs/CATALOG.md) | Catálogo gerado automaticamente de habilidades publicadas |
| 🔧 [Runbook do sistema](docs/operações/RUNBOOK.md) | Crie, forneça, proteja e solucione problemas |### 🏗️ For Architects

| Documento | O que você aprenderá |
|:----|:-----------------|
| 🗺️ [Roteiro Agent-Native](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Evolução da arquitetura e restantes áreas |
| 📐 [ADR-0001: Fundação do espaço de trabalho](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Decisão principal do monorepo |
| 🔬 [Análise de base de código](docs/architecture/CODEBASE-ANALYSIS.md) | Composição do tempo de execução e limites do sistema |
| 🌐 [API de catálogo](docs/specs/CATALOG-API.md) | Endpoints HTTP, filtragem, governança e downloads |
| 🧩 [Instalador guiado CLI](docs/specs/CLI-GUIDED-INSTALLER.md) | Contrato comportamental para o instalador guiado |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Shell visual de tinta e modelo de estado |
| 🔌 [Sidecar MCP local](docs/specs/LOCAL-MCP-SIDECAR.md) | Ferramentas de sistema de arquivos e modelo de lista de permissões |
| 📊 [Matriz de Suporte ao Cliente](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Referência completa do cliente e escritor |
| 🏷️ [Classificação de habilidades](docs/specs/SKILL-CLASSIFICATION.md) | Taxonomia, pontuação e metadados |
| 🛡️ [Validação de segurança](docs/specs/SECURITY-VALIDATION.md) | Scanners, arquivos e assinaturas |
| 📋 [Manifesto de habilidade](docs/specs/SKILL-MANIFEST.md) | Formato de manifesto legível por máquina |### 🤝 For Contributors

| Documento | O que você aprenderá |
|:----|:-----------------|
| 📝 [Guia de contribuição](CONTRIBUTING.md) | Fluxo de trabalho do Repo e expectativas de RP |
| 🧾 [Fluxo de trabalho de RP de habilidades](docs/contributors/SKILL-PR-WORKFLOW.md) | Ingestão nativa, processamento de intensificadores, expectativas do revisor |
| 📄 [Modelo de habilidade](docs/contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` com frontmatter e estrutura |
| 🔬 [Anatomia das Habilidades](docs/contributors/SKILL-ANATOMY.md) | Expectativas de estrutura e qualidade |
| ✅ [Barra de qualidade](docs/contributors/QUALITY-BAR.md) | Critérios de aceitação |
| 🏆 [Manual de alta pontuação](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | O que impulsiona pontuações altas |---

## 🗂️ Repository Layout

| Caminho | Finalidade |
|:-----|:--------|
| 📂 `habilidades/` | Habilidades canônicas de autoria e ingestão nativa |
| ✨ `skills_omni/` | Derivados aprimorados mantidos pela Omni com curadoria |
| 📖 `docs/` | Documentação de usuário, contribuidor, arquitetura, operações e especificações |
| 📦 `dist/` | Manifestos, pacotes, catálogos e arquivos gerados |
| 📁 `dados/` | Definições de pacotes e dados de suporte estáticos |
| 🧠 `pacotes/catalog-core/` | Tempo de execução do catálogo compartilhado |
| 🌐 `pacotes/server-api/` | API HTTP somente leitura |
| 🔌 `pacotes/servidor-mcp/` | Servidor MCP e sidecar local |
| 🤖 `pacotes/servidor-a2a/` | Tempo de execução A2A e orquestração de tarefas |
| 🖥️ `ferramentas/bin/` | Pontos de entrada CLI |
| 📚 `ferramentas/lib/` | Ajudantes de instalador e UI |
| ⚙️ `ferramentas/scripts/` | Scripts de validação, geração, liberação e teste |

>**ℹ️**`dist/` é versionado intencionalmente porque os artefatos gerados fazem parte do contrato de instalação, API, MCP, A2A, smoke e lançamento.---

## 🤝 Contributing

Omni Skills aceita o consumo de habilidades upstream nativas em `skills/`.

| Regra | Detalhes |
|:-----|:--------|
| 📥 Ingestão nativa | Pode ser grosseiro, escrito em qualquer idioma |
| ✨ Produção selecionada | `skills_omni/` reservado para derivados Omni de autoria de automação |
| 🚫 Edições manuais | Edições manuais públicas em `skills_omni/` são rejeitadas |
| 🔄 Reprocessamento | O aprimorador privado reprocessa alterações nativas e atualiza a linha de base selecionada |

> 📖**Comece com:**[Guia de contribuição](CONTRIBUTING.md) · [Fluxo de trabalho de RP de habilidades](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Tipo | Licença |
|:-----|:--------|
| 💻 Código e ferramentas | [Licença MIT](LICENÇA) |
| 📝 Documentação e conteúdo de habilidade | [CC BY 4.0](CONTEÚDO DA LICENÇA) |---

<div align="center">

**Feito com 🧠 pela equipe Omni Skills**

[⭐ Marque este repositório com estrela](https://github.com/diegosouzapw/omni-skills) · [🐛 Relatar um bug](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Discussões](https://github.com/diegosouzapw/omni-skills/discussions)</div>
