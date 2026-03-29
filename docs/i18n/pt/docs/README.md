# 📖 Omni Skills — Documentation Hub (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**A referência central para usar, operar, ampliar e compreender a plataforma Omni Skills atual.**

Os arquivos da comunidade padrão ficam na raiz do repositório:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

| Área | Estado | Detalhes |
|:-----|:------|:-------|
| 🏗️**Tempo de execução**| ✅ Atual | CLI unificado, shell visual do Ink, API, MCP e A2A são fornecidos no mesmo pacote |
| 📦**Catálogo**| 📌 32 habilidades | 32 habilidades `L3` publicadas em 15 categorias de catálogo ativas e 7 pacotes totalmente apoiados |
| 🎯**Instalar**| ✅ Atual | Instalação TTY guiada, `--skill` e `--bundle` seletivos, suporte a caminho personalizado e instalação orientada por descoberta |
| 🌐**API**| ✅ Atual | API de registro somente leitura com autenticação, tempo de execução de administrador, limitação de taxa, listas de permissões CORS/IP, modo de manutenção e downloads |
| 🔌**MCP**| ✅ Atual | `stdio` · `stream` · `sse`, modo sidecar local, 7 clientes com capacidade de instalação, 16 clientes com capacidade de configuração, 33 alvos de configuração e 19 perfis de configuração |
| 🤖**A2A**| ✅ Atual | Tempo de execução local simples com durabilidade JSON/SQLite, retomada de reinicialização, streaming SSE, cancelamento, modo de executor externo e coordenação alugada opcional quando explicitamente habilitado |
| 🛡️**Segurança**| ✅ Atual | Scanner estático, ClamAV/VirusTotal opcional, artefatos de lançamento assinados, somas de verificação de arquivo e verificação de tempo de lançamento |
| 📋**Classificação**| ✅ Atual | Taxonomia canônica, maturidade, difusão de qualidade semântica, difusão de melhores práticas e pontuação de segurança |
| 📁**Arquivos**| ✅ Atual | Arquivos `.zip` e `.tar.gz` por habilidade com manifestos de soma de verificação SHA-256 |
| 🔐**Assinatura**| ✅ Atual | Assinaturas desanexadas aplicadas em tags de lançamento; fluxos de instalação local consomem os mesmos metadados de manifesto e soma de verificação |
| 🧬**Fluxo de ingestão**| ✅ Atual | As habilidades nativas ficam em `habilidades/`; A automação de relações públicas os analisa e propõe derivados aprimorados pelo Omni em `skills_omni/` |## 🔭 Current Project State

A trilha de fundação agora está no estado de projeto ativo, e a segunda onda de expansão de categoria já está no catálogo. O projeto agora deve ser lido como uma linha de base de trabalho com trilhas opcionais de expansão futura:

- public `v0.1.2` e private `v0.0.1` são o nível atual de lançamento estável
- o catálogo agora abrange 32 habilidades publicadas em 15 categorias ativas e 7 pacotes totalmente apoiados
- a ingestão nativa e a produção `skills_omni/` com curadoria estão operacionais, incluindo a ingestão nativa multilíngue e a produção com curadoria apenas em inglês
- superfícies de protocolo, automação de liberação e automação de aprimoramento privado estão em serviço, não em bootstrap

A expansão futura permanece planejada:

- aprofundar `design`, `ferramentas`, `data-ai` e `machine-learning`
- evite reabrir categorias inativas não nativas de código até que as faixas nativas de código atuais tenham maior profundidade
- manter intacto o piso de qualidade e o caminho de revisão do aprimorador ao fazer isso

Esse plano agora está dividido em:

- a primeira onda de expansão concluída em [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- a segunda onda de expansão concluída em [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- e o backlog prospectivo em [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Estas questões de arquitetura não estão mais “abertas” na prática e agora são tratadas como decisões de projeto:

1.**A distribuição permanece com o manifesto primeiro e os arquivos assinados**
   O manifesto legível por máquina continua sendo o contrato consumido por CLI, API, MCP e A2A. Arquivos assinados por habilidade são a superfície de download e lançamento em camadas sobre esse contrato.
2.**Catálogos privados ou premium devem reutilizar o mesmo esquema de manifesto**
   A autenticação e a política devem ser colocadas em camadas externamente, e não por meio da bifurcação do manifesto ou da forma do catálogo.
3.**A configuração do MCP deve convergir em algumas famílias de exportação canônicas**
   Omni Skills agora padroniza JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` e TOML `[mcp_servers]`, enquanto mantém escritores personalizados apenas onde os documentos oficiais do cliente exigem uma estrutura diferente.

Essas decisões estão alinhadas com a documentação oficial atual do MCP e do cliente, incluindo:

- Registro oficial do MCP e orientação de suporte à extensão em `modelcontextprotocol.io`
- Documentos OpenAI Docs MCP e Codex CLI em `developers.openai.com` e `platform.openai.com`
- Extensão VS Code MCP e documentação do produto em `code.visualstudio.com`
- documentos de cliente para Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman e JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Documento | O que você aprenderá |
|:----|:------------------|
| 📘 [Primeiros passos](users/GETTING-STARTED.md) | Instale, verifique e invoque sua primeira habilidade |
| 🧭 [Guia do usuário CLI](users/CLI-USER-GUIDE.md) | Referência completa de comandos e padrões de uso CLI do mundo real |
| 📗 [Guia de uso](users/USAGE.md) | Comandos CLI, modos de instalação, comandos de tempo de execução e fluxos de configuração do MCP |
| 📦 [Pacotes](users/BUNDLES.md) | Pacotes selecionados e sua disponibilidade atual |
| 📚 [Catálogo](CATALOG.md) | Catálogo gerado automaticamente de habilidades publicadas |
| 🔧 [Runbook do Sistema](operações/RUNBOOK.md) | Crie, forneça, proteja e solucione problemas do tempo de execução |### 🏗️ If You Want to **Understand** the Runtime

| Documento | O que você aprenderá |
|:----|:------------------|
| 🗺️ [Roteiro Agente-Nativo](arquitetura/AGENT-NATIVE-ROADMAP.md) | Evolução da arquitetura, decisões fechadas e restantes áreas de expansão |
| 🧭 [Roteiro CLI UX](arquitetura/CLI-UX-ROADMAP.md) | Plano histórico e formato atual do CLI guiado e visual |
| 📐 [ADR-0001: Fundação do espaço de trabalho](arquitetura/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Monorepo principal e decisão em tempo de execução compartilhado |
| 🔬 [Análise de base de código](arquitetura/CODEBASE-ANALYSIS.md) | Composição atual do tempo de execução, contagens e limites do sistema |
| 🌐 [Superfície da API de catálogo](specs/CATALOG-API.md) | Endpoints HTTP, filtragem, governança e downloads |
| 🧩 [Instalador guiado CLI](specs/CLI-GUIDED-INSTALLER.md) | Contrato comportamental para o instalador guiado |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Shell visual de tinta, modelo de estado e hub de serviço |
| 🔌 [Sidecar MCP local](specs/LOCAL-MCP-SIDECAR.md) | Ferramentas com reconhecimento de sistema de arquivos, modelo de lista de permissões e gravação de configuração |
| 🧭 [Matriz de Suporte ao Cliente](specs/CLIENT-SUPPORT-MATRIX.md) | Clientes CLI e IDE suportados, gravadores, destinos manuais e referências de origem |
| 📊 [Classificação de habilidades](specs/SKILL-CLASSIFICATION.md) | Taxonomia, heurística de pontuação e artefatos de metadados |
| 🛡️ [Validação de segurança](specs/SECURITY-VALIDATION.md) | Scanners, arquivos, assinaturas e verificação de liberação |
| 📋 [Especificações do manifesto de habilidade](specs/SKILL-MANIFEST.md) | Formato de manifesto legível por máquina e contrato de compatibilidade |### 🤝 If You Want to **Contribute**

| Documento | O que você aprenderá |
|:----|:------------------|
| 📝 [Guia de contribuição](../CONTRIBUTING.md) | Fluxo de trabalho do repositório e expectativas de pull request |
| 🧾 [Fluxo de trabalho de RP de habilidades](contribuidores/SKILL-PR-WORKFLOW.md) | Ingestão nativa, processamento automático de aprimoramento, publicação `skills_omni/` e expectativas do revisor |
| 📄 [Modelo de habilidade](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` com frontmatter e estrutura atuais |
| 🔬 [Anatomia das Habilidades](contribuidores/SKILL-ANATOMY.md) | Estrutura e expectativas de qualidade para uma habilidade |
| ✅ [Barra de Qualidade](contribuidores/QUALITY-BAR.md) | Critérios de aceitação do repositório |
| 🏆 [Manual de alta pontuação](contributors/HIGH-SCORE-PLAYBOOK.md) | O que impulsiona altas pontuações de maturidade, qualidade, práticas recomendadas e segurança |
| 📋 [Backlog de tarefas](tasks/README.md) | Atrasos detalhados na execução dos restantes trabalhos públicos e privados |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

O binário `omni-skills` publicado é o ponto de entrada público unificado.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

Para obter a superfície de comando completa do usuário final, use o [Guia do usuário CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

O pipeline de build emite os arquivos legíveis por máquina que orientam cada superfície de tempo de execução:

| Artefato | Finalidade |
|:--------|:--------|
| `metadados.json` | Validação em todo o repositório e resumo da pontuação |
| `skills_index.json` | Índice de habilidade normalizada repo-local |
| `dist/catalog.json` | Catálogo publicado para pesquisa e listagem |
| `dist/bundles.json` | Definições de pacote com disponibilidade |
| `dist/manifests/<habilidade>.json` | Manifesto legível por máquina por habilidade |
| `dist/archives/<habilidade>.zip` | Arquivo de habilidades (zip) |
| `dist/archives/<habilidade>.tar.gz` | Arquivo de habilidades (tarball) |
| `dist/archives/<habilidade>.checksums.txt` | Manifesto de soma de verificação SHA-256 |

`dist/` permanece comprometido de propósito. Esses artefatos gerados fazem parte do contrato de instalação, API, MCP, A2A, smoke e release.### 🌐 API

```bash
npx omni-skills api --port 3333
```

API de registro somente leitura para habilidades, pacotes, comparação, planejamento de instalação e downloads de artefatos.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

O sidecar local agora suporta gravação de configuração MCP de primeira classe para:

- Código Claude
- Cursor
- Código VS e contêineres de desenvolvimento
- CLI Gêmeos
- Antigravidade
-Kiro
- Codex CLI
- Continuar
- Windsurf
- Código aberto
- Cline
- GitHub Copilot CLI
- Código do quilo
-Zed
- Ganso### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Ciclo de vida de tarefas, streaming, persistência, recuperação de reinicialização e orquestração local simples. A execução arrendada compartilhada está disponível quando explicitamente habilitada; O Redis continua sendo uma opção hospedada avançada, não o caminho local padrão.---

## 🗂️ Repository Map

| Caminho | Finalidade |
|:-----|:--------|
| 📂 `habilidades/` | Habilidades de autoria canônica |
| 📖 `docs/usuários/` | Documentação do usuário final |
| 🤝 `docs/contribuidores/` | Modelos e orientações para contribuidores |
| 🏗️ `docs/arquitetura/` | Roteiro, ADRs e análise técnica |
| 🔧 `docs/operações/` | Runbooks operacionais |
| 📋 `docs/especificações/` | Contratos de tempo de execução, protocolo e artefato |
| 📚 `docs/CATALOG.md` | Catálogo de habilidades gerado |
| 📦 `dist/` | Artefatos legíveis por máquina gerados |
| 🧠 `pacotes/catalog-core/` | Tempo de execução do catálogo compartilhado |
| 🌐 `pacotes/server-api/` | API HTTP somente leitura |
| 🔌 `pacotes/servidor-mcp/` | Servidor MCP e sidecar local |
| 🤖 `pacotes/servidor-a2a/` | Servidor A2A e tempo de execução de tarefas |
| 🖥️ `ferramentas/bin/` | Pontos de entrada CLI |
| 📚 `ferramentas/lib/` | Ajudantes de instalador e UI |
| ⚙️ `ferramentas/scripts/` | Validação, geração, verificação e testes |---

## 🧪 Release Validation

```bash
npm run smoke
```

A corrida de fumaça valida:

- ✅ validação de habilidades e geração de metadados
- ✅ ferramentas de recategorização de taxonomia
- ✅ geração de artefato de catálogo
- ✅ remarcação de catálogo gerada
- ✅ geração e verificação de arquivo
- ✅ conjunto de testes automatizados
- ✅ `pacote npm --dry-run`
- ✅ Inicialização e integridade da API
- ✅ Inicialização MCP em `stdio`, `stream` e `sse`
- ✅ Inicialização A2A, polling, streaming SSE, cancelamento e ciclo de vida push-config