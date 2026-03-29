# 🔬 Codebase Deep Analysis (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Análise técnica abrangente da arquitetura atual do Omni Skills, superfícies de tempo de execução e pipeline de construção.**
> Última análise: 28/03/2026---

## 📊 Project Overview

| Atributo | Valor |
|:----------|:------|
|**Nome**| `omni-competências` |
|**Versão do pacote**| `0.1.3` |
|**Versões de habilidade**| Por habilidade e independente da versão do pacote. Muitas habilidades publicadas ainda são `0.0.1` enquanto o pacote é `0.1.2`. |
|**Licença**| MIT (código) + CC BY 4.0 (conteúdo) |
|**NPM**| `npx omni-habilidades` |
|**Habilidades publicadas**| 32 |
|**Pacotes definidos**| 7, todos totalmente respaldados por competências publicadas |
|**Categorias de catálogo ativas**| 15 grupos ativos de 18 categorias de taxonomia canônica |
|**LOC primário de tempo de execução/construção amostrado abaixo**| 13.600+ |
|**Dependências de produção**| 7 (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Instantâneo de classificação atual em nível de repositório de `metadata.json`:

- índice de qualidade médio: `96,3`
- pontuação média de melhores práticas: `98,7`
- pontuação média de segurança: `95,0`
- todas as 32 habilidades publicadas são validadas como `L3`

Linha de base da versão atual:

- lançamento do repositório público: `v0.1.2`
- versão do aprimorador privado: `v0.0.1`
- a automação de lançamento público e a automação de lançamento privado são ativas e verdes---

## 🏗️ Architecture Overview

O repositório segue um padrão**monorepo de espaço de trabalho**com um núcleo de catálogo compartilhado e várias superfícies de tempo de execução.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

O design é intencionalmente**orientado por artefatos**:

1. as habilidades são criadas como `SKILL.md` mais pacotes de suporte locais
2. a construção os valida, classifica, arquiva e normaliza
3. os artefatos gerados tornam-se o contrato para CLI, API, MCP e A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**Mais de 4.500 LOC combinados**— a principal interface pública para uso especializado e guiado.

| Comando | Função |
|:--------|:---------|
| 🔎 `encontrar [consulta]` | Pesquisa de catálogo de texto completo com filtros com reconhecimento de pontuação |
| 📦 `instalar` | Instalação guiada ou baseada em sinalizadores em clientes conhecidos ou caminhos personalizados |
| 🧾 `config-mcp` | Visualizar ou gravar configuração MCP com reconhecimento de cliente |
| 🔌 `mcp <transporte>` | Inicia o servidor MCP em `stdio`, `stream` ou `sse` |
| 🌐 `api` | Inicia a API do catálogo |
| 🤖 `a2a` | Inicia o tempo de execução A2A |
| 🧪 `fumaça` | Liberar validação de comprovação |
| 🩺 `médico` | Diagnóstico local |
| 🖥️ `ui` | Shell visual do Ink com hub de instalação, descoberta, configuração e serviço |
| 🏷️ `recategorizar` | Inspeção e reescrita de deriva de taxonomia |

A CLI não é mais apenas um instalador. É a ferramenta de operações públicas para toda a plataforma.## 🧭 Future Expansion Direction

O tempo de execução público não está mais bloqueado no trabalho fundamental e a onda da segunda categoria já chegou. O próximo trabalho útil do catálogo é a profundidade, não mais a busca pela contagem de categorias.

Faixas nativas de código recentemente ativadas agora no catálogo:

- `design` via `design-systems-ops`, `auditoria de acessibilidade` e `design-token-governance`
- `ferramentas` via `mcp-server-authoring`
- `data-ai` via `contratos de dados`
- `aprendizado de máquina` via `serviço de modelo`

Próxima direção recomendada:

1. aprofundar `design`, `ferramentas`, `data-ai` e `aprendizado de máquina`
2. manter 'negócios' e 'mídia de conteúdo' adiados, a menos que apareça uma proposta claramente nativa do código
3. preservar o atual piso de qualidade em vez de reabrir a pressão de ativação da categoria

Essa onda de expansão agora está registrada em [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— instala habilidades em 7 assistentes com capacidade de instalação.

| Bandeira | Alvo | Caminho padrão |
|:-----|:-------|:------------|
| `--claude` | Código Cláudio | `~/.claude/skills` |
| `--cursor` | Cursor | `~/.cursor/skills` |
| `--gêmeos` | Gêmeos CLI | `~/.gemini/skills` |
| `--codex` | CLI do Codex | `~/.codex/skills` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--antigravidade` | Antigravidade | `~/.gemini/antigravity/skills` |
| `--opencode` | Código aberto | `<espaço de trabalho>/.opencode/skills` |

Suporta:

- instalações de biblioteca completa
- instalações seletivas por `--skill`
- instalações selecionadas por `--bundle`
- TTY guiado e fluxos de UI visual
- caminhos de destino personalizados### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— camada de tempo de execução compartilhada para CLI, API, MCP e A2A.

| Exportar | Descrição |
|:-------|:-----------|
| 🔎 `searchSkills()` | Pesquisa com correspondência de texto ponderada e suporte a filtros |
| 📋 `listSkills()` | Filtragem multieixo por qualidade, melhores práticas, nível, segurança, risco, ferramenta e categoria |
| 📌 `getSkill()` | Resolução de manifesto mais URLs públicos enriquecidos |
| ⚖️ `compareSkills()` | Comparação lado a lado |
| 💡 `recomendarHabilidades()` | Recomendação baseada em objetivos |
| 📦 `buildInstallPlan()` | Instale a geração do plano com avisos e orientações voltadas ao cliente |
| 🗂️ `listBundles()` | Listagem de pacotes selecionados com disponibilidade |
| 📁 `listSkillArchives()` | Resolução de arquivo e assinatura |

Esta é a verdadeira fonte única de verdade do tempo de execução após geração.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— implementação completa do MCP usando o SDK oficial.

**Transportes**

- `stdio`
- HTTP streamável
- SSE

**Ferramentas somente leitura sempre ativas**

- `habilidades_de_pesquisa`
- `get_skill`
- `comparar_habilidades`
- `recomendar_habilidades`
- `preview_install`

**Ferramentas de modo local**

- `detect_clients`
- `list_installed_skills`
- `instalar_habilidades`
- `remove_skills`
- `configure_client_mcp`

A superfície MCP é deliberadamente dividida entre:

- uso de catálogo remoto/somente leitura
- uso de sidecar local/com capacidade de gravação### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1.943 LOC**— camada MCP com reconhecimento de sistema de arquivos para detecção de cliente, gerenciamento de habilidades e gravação de configuração MCP.

Apoio prático atual:

-**7 clientes com capacidade de instalação**
-**16 clientes com capacidade de configuração**
-**33 alvos de configuração**
-**19 perfis de configuração**

Clientes com capacidade de instalação:

- Código Claude
- Cursor
- CLI Gêmeos
- Codex CLI
-Kiro
- Antigravidade
- Código aberto

Os clientes e destinos com capacidade de configuração incluem:

- Configurações do Claude, Claude Desktop e configuração do projeto Claude
- Configuração do usuário do cursor e do espaço de trabalho
- Configuração do espaço de trabalho do VS Code, usuário, insiders e Dev Container
- Configurações de usuário e espaço de trabalho do Gemini
- Configuração do usuário antigravidade
- Usuário Kiro, espaço de trabalho e caminhos legados
- Configuração do Codex CLI TOML
- Configuração de usuário e espaço de trabalho OpenCode
- Configurações de linha
- Configuração de usuário e repositório do GitHub Copilot CLI
- Configuração de usuário, projeto e espaço de trabalho do Kilo
- Continuar espaço de trabalho YAML
- Configuração do usuário do Windsurf
- Configuração do espaço de trabalho Zed
- Configuração do usuário Goose

O sidecar é intencionalmente honesto quanto aos limites:

- escreve apenas dentro de uma lista de permissões
- visualiza por padrão
- mantém escritores de primeira classe apenas onde os documentos oficiais expõem um formato estável
- não pretende que todo produto compatível com MCP também seja um alvo de instalação de habilidades### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC combinado**— API de registro somente leitura mais middleware de governança.

Pontos de extremidade importantes:

- `/saúde`
- `/openapi.json`
- `/admin/tempo de execução`
- `/v1/habilidades`
- `/v1/habilidades/:id`
- `/v1/pesquisar`
- `/v1/comparar`
- `/v1/pacotes`
- `/v1/install/plan`
- `/v1/habilidades/:id/download/*`

Linha de base de governança já implementada:

- autenticação de token ao portador
- Autenticação de chave API
- autenticação de token de administrador
- limitação de taxa em processo
- solicitar IDs
- registro de auditoria
- Listas de permissões CORS
- Listas de permissões de IP
- confiança no tratamento de proxy
- modo de manutenção### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1.857 LOC combinados nos arquivos do servidor principal, do tempo de execução e do coordenador**— Ciclo de vida de tarefas JSON-RPC 2.0 para fluxos de trabalho entre agentes.

Métodos suportados:

- `mensagem/enviar`
- `mensagem/stream`
- `tarefas/obter`
- `tarefas/cancelar`
- `tarefas/nova inscrição`
- `tarefas/pushNotificationConfig/*`

Operações atuais:

- `descobrir habilidades`
- `pilha recomendada`
- `preparar-instalar-plano`

Modelo de durabilidade e coordenação:

- persistência local de memória, JSON ou SQLite
- reiniciar currículo
- executor de processo externo opcional
- coordenação de fila alugada opcional para trabalhadores SQLite compartilhados
- coordenação opcional apoiada por Redis como um caminho hospedado avançado

A principal escolha arquitetônica aqui é**operação local simples**. O Redis existe como uma opção avançada, mas o caminho do produto padrão permanece local e com pouca dependência.---

## ⚙️ Build Pipeline

| Roteiro | Idioma | Finalidade |
|:-------|:--------|:--------|
| 📊 `skill_metadata.py` | Pitão | Validação, taxonomia, pontuação e verificação de segurança estática |
| ✅ `validate_skills.py` | Pitão | Geração de metadados por habilidade e para o resumo raiz |
| 📑 `generate_index.py` | Pitão | Índice de habilidades, manifestos, arquivos, assinaturas e somas de verificação |
| 🏗️ `build_catalog.js` | Node.js | Final `dist/catalog.json` e `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Pitão | Auditoria e reescrita de categoria canônica |
| 🔍 `verify_archives.py` | Pitão | Verificação de arquivo e assinatura |

Dois detalhes são importantes operacionalmente:

1. `dist/` faz parte do contrato de tempo de execução e foi comprometido intencionalmente
2. a construção é determinística o suficiente para suportar verificação de CI e assinatura de versão---

## 📦 Published Catalog

O catálogo público atual abrange 32 habilidades:

-**Descoberta e planejamento**: `encontrar habilidades`, `brainstorming`, `arquitetura`, `depuração`
-**Sistemas de design e acessibilidade**: `design-systems-ops`, `accessibility-audit`
-**Entrega de produtos e pilha completa**: `frontend-design`, `api-design`, `database-design`, `omni-fiigma`, `auth-flows`
-**Segurança**: `auditor de segurança`, `scanner de vulnerabilidade`, `resposta a incidentes`, `modelagem de ameaças`
-**Fluxos de trabalho do mantenedor OSS**: `documentation`, `changelog`, `create-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering`
-**Engenharia de IA**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Todos os sete pacotes são totalmente suportados:

- `essencial` → `4/4`
- `pilha completa` → `5/5`
- `projeto` → `4/4`
- `segurança` → `4/4`
- `devops` → `5/5`
- `engenheiro de IA` → `5/5`
- `oss-mantenedor` → `4/4`

Distribuição da pontuação atual do catálogo gerado:

- índices de qualidade: `94, 95, 96, 97, 100`
- pontuações de melhores práticas: `98, 99, 100`
- pontuação de segurança: todas as habilidades publicadas atualmente `95`

Alta qualidade representativa:

- `omni-fiigma` → `qualidade 100`, `best_practices 100`
- `auditoria de acessibilidade` → `qualidade 99`, `best_practices 100`
- `auth-flows` → `qualidade 97`, `best_practices 99`
- `design-systems-ops` → `qualidade 97`, `best_practices 99`
- `engenharia de lançamento` → `qualidade 97`, `best_practices 99`
- `modelagem de ameaças` → `qualidade 97`, `best_practices 99`
- `engenharia de contexto` → `qualidade 97`, `best_practices 99`

Extremidade inferior representativa dentro da banda superior atual:

- `arquitetura` → `qualidade 94`, `melhores práticas 98`
- `changelog` → `qualidade 94`, `best_practices 98`
- `create-pr` → `qualidade 95`, `best_practices 98`

Isso é intencional. O marcador agora distingue “excelente” de “excepcional” em vez de nivelar todo o catálogo no topo.---

## 🌟 Strengths

1.**Design que prioriza o artefato**
   Cada superfície de tempo de execução consome o mesmo catálogo e manifestos gerados.
2.**Ampla cobertura de protocolo**
   CLI, API, MCP e A2A coexistem sem fragmentar o modelo de dados.
3.**Forte ergonomia de produto local**
   Instalação guiada, shell visual, `config-mcp` e padrões de simulação tornam o projeto utilizável por usuários avançados.
4.**Postura honesta de segurança**
   Gravações locais permitidas, verificação estática, assinatura, somas de verificação e verificação de liberação são todas explícitas.
5.**Alcance saudável do MCP**
   O projeto agora oferece suporte a um amplo conjunto de clientes atuais com capacidade de MCP, sem fingir que os alvos não documentados são estáveis.---

## 🔮 Opportunities

1.**Cobertura de pacote mais profunda**
   O próximo passo é a especialização dentro dos pacotes existentes, e não apenas uma ampla cobertura.
2.**Semântica mais rica do marcador**
   Ainda há espaço para avaliar a profundidade do pacote de referências e a qualidade do fluxo de trabalho de forma mais semântica.
3.**Mais redatores de clientes somente quando justificado**
   A expansão deve permanecer disciplinada e vinculada a documentos oficiais estáveis.
4.**Decomposição do validador**
   `skill_metadata.py` ainda é um módulo grande e se beneficiaria da decomposição interna ao longo do tempo.
5.**Escalonamento de governança hospedado**
   A linha de base atual em processo é suficiente para auto-hospedagem, mas a implantação empresarial eventualmente exigiria gateway externo e integração de identidade.