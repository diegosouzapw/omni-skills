# 🗺️ Agent-Native Roadmap (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**O plano de evolução da arquitetura para Omni Skills: do repositório do instalador ao tempo de execução de catálogo compartilhado alimentando CLI, API, MCP e A2A sem duplicação de lógica.**---

## 📊 Current Platform Areas

| Fase | Nome | Estado |
|:------|:-----|:-------|
| 1️⃣ | Contratos e Artefatos | ✅ Atual |
| 2️⃣ | API de catálogo somente leitura | ✅ Atual |
| 3️⃣ | Superfície de descoberta MCP | ✅ Atual |
| 4️⃣ | Instalação local e configuração do Surface | ✅ Atual |
| 5️⃣ | Orquestração A2A | ✅ Atual |### ✅ What Exists Today

- artefatos de catálogo legíveis por máquina em `dist/`
- API HTTP somente leitura com cobertura de endpoint para pesquisa, pacotes, comparação, planejamento de instalação e downloads
- Servidor MCP com `stdio`, HTTP streamable e transportes SSE
- sidecar local com gravações permitidas e fluxos `config-mcp`
- 7 clientes com capacidade de instalação, 16 clientes com capacidade de configuração, 33 alvos de configuração MCP e 19 perfis de configuração
- especialização mais profunda do pacote dentro de `full-stack`, `security`, `devops` e `ai-engineer` via `auth-flows`, `threat-modeling`, `release-engineering` e `context-engineering`
- arquivos por habilidade (`zip`, `tar.gz`) com checksums SHA-256 e assinaturas desanexadas em tags de lançamento
- Linha de base de governança de API: autenticação de portador/chave de API, autenticação de tempo de execução de administrador, limitação de taxa, registro de auditoria, listas de permissões CORS/IP, proxy confiável, modo de manutenção e IDs de solicitação
- Tempo de execução A2A com ciclo de vida de tarefa, durabilidade JSON/SQLite, retomada de reinicialização, streaming SSE, cancelamento, notificações push, executor de processo opcional e coordenação alugada opcional### 🔭 Future Expansion Areas

O roteiro principal agora descreve o escopo atual da plataforma. Os itens restantes são áreas de expansão futura, e não lacunas fundamentais:

- somente adições altamente seletivas de MCP deste ponto em diante, e somente onde os documentos públicos oficiais tornarem possível um escritor seguro
- pacotes de referência mais profundos e pontuação mais semântica para que o classificador continue separando habilidades excepcionais daquelas meramente refinadas
- governança hospedada pela empresa além da linha de base atual em processo, se o projeto posteriormente precisar de integração de gateway ou IdP
- especialização mais profunda nas faixas recentemente ativadas de `design`, `ferramentas`, `data-ai` e `machine-learning`
- polimento operacional contínuo em torno do aprimorador privado, mantendo seu modelo operacional formal: OmniRouter fixado em `cx/gpt-5.4`, nuvem hospedada em `mock` ou comprovação degradada e `live` confiável em LAN ou execução auto-hospedada
- lançamento contínuo e fortalecimento do fluxo de trabalho apenas como trabalho de qualidade de serviço, não como falta de base da plataforma## Future Catalog Expansion Track

As duas primeiras ondas de expansão da categoria pública chegaram agora:

- `design` → `design-systems-ops`, `auditoria de acessibilidade`, `design-token-governance`
- `ferramentas` → `autoria de servidor mcp`
- `data-ai` → `contratos de dados`
- `aprendizado de máquina` → `serviço de modelo`

A próxima etapa recomendada não é mais a ativação da categoria por si só. O objetivo é aprofundar essas trilhas recém-ativas de código nativo, para que pareçam superfícies de produtos duráveis, em vez de pontos de apoio para uma única habilidade.

Direção recomendada:

1. aprofundar o “design” com fluxos de trabalho de sistemas de design mais operacionais
2. aprofundar `ferramentas` com habilidades de autoria e orientadas a plugins
3. aprofundar o `data-ai` com habilidades de instrumentação e pipeline de implementação
4. aprofundar o “aprendizado de máquina” com habilidades operacionais de atendimento, treinamento e avaliação

Categorias adiadas intencionalmente, a menos que apareçam propostas fortes de código nativo:

- `negócios`
- `conteúdo-mídia`

Esse histórico de expansão agora é rastreado em:

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Manter o fluxo de trabalho atual `npx omni-skills` funcionando
- ✅ Introduzir uma fonte de verdade legível por máquina para habilidades
- ✅ Apoie a descoberta, recomendação e planejamento de instalação por agentes
- ✅ Separe as preocupações do catálogo remoto das gravações do sistema de arquivos local
- ✅ Reutilize os mesmos metadados em CLI, API, MCP e A2A---

## 🚫 Non-Goals

- ❌ Instalação remota na máquina do usuário a partir de um servidor hospedado
- ❌ Substitua `SKILL.md` como formato de autoria canônico
- ❌ Exigir que os colaboradores escrevam manifestos à mão
- ❌ Transforme o projeto em uma plataforma de filas hospedadas pesadas por padrão---

## 🏗️ Target Architecture

Um**núcleo de catálogo**com três superfícies de protocolo:

| Superfície | Melhor para | Modo |
|:--------|:---------|:-----|
| 🌐**API REST**| Acesso a registros, integrações de UI, consumidores terceiros | Somente leitura |
| 🔌**MCP**| Descoberta de agentes, visualizações de instalação, gravação de configurações, receitas de cliente | Somente leitura + gravações locais |
| 🤖**A2A**| Orquestração entre agentes e transferência de plano de instalação | Ciclo de vida da tarefa com durabilidade local simples |### ⚙️ Core Principle

>**Todos os protocolos consomem a mesma família de artefatos gerados.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

O manifesto permanece o contrato compartilhado. Os arquivos são artefatos de distribuição sobrepostos a esse contrato, e não um substituto para ele.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Usado por API hospedada e servidores MCP remotos.

| ✅ Permitido | ❌Não permitido |
|:-----------|:---------------|
| Habilidades de pesquisa | Escreva no sistema de arquivos do chamador |
| Buscar manifestos | Alterar configuração do cliente local |
| Comparar habilidades | Inferir estado arbitrário da máquina |
| Recomendar pacotes | — |
| Crie planos de instalação | — |### 2️⃣ Local Installer Mode

Usado pela CLI e pelo arquivo secundário do MCP.

| ✅ Permitido |
|:-----------|
| Detectar clientes locais de IA |
| Inspecione as habilidades instaladas |
| Visualizar operações de arquivo |
| Instalar ou remover diretórios de habilidades |
| Escreva a configuração local do MCP após a visualização |

> 📌 Este continua sendo o único modo em que ocorrem gravações reais do sistema operacional.---

## 📐 Protocol Split

### 🌐 REST API

Melhor para acesso ao registro, pesquisa, comparação, downloads de versões e planejamento de instalação.

**Endpoints**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Melhor para descoberta baseada em ferramentas, recomendações imediatas, visualizações de instalação e configuração de MCP específica do cliente.

**Ferramentas somente leitura**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Ferramentas locais**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Melhor para transferência de descoberta, fluxos de trabalho de plano de instalação e execução retomável de tarefas de agente.

**Operações atuais**: `discover-skills` · `recommend-stack` · `prepare-install-plan`---

## 🛡️ Security Model

| Princípio | Implementação |
|:----------|:---------------|
| 🔒 Os serviços hospedados são somente leitura | API e MCP remoto não gravam no sistema de arquivos do chamador |
| 📂 As gravações permanecem locais | Somente sidecar CLI e MCP |
| 👁️ Visualize antes de escrever | Padrões de teste em mutações locais |
| 🔑 A integridade é explícita | Somas de verificação SHA-256 para artefatos gerados |
| ✍️ Liberar confiança é explícito | Assinaturas desanexadas aplicadas em tags de lançamento |
| ⚠️ O risco surge | Metadados de risco e segurança se propagam para todas as superfícies de tempo de execução |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- arquitetura de destino documentada
- esquema de manifesto definido
- metadados, catálogos, manifestos, pacotes e arquivos gerados### Phase 2: Catalog Service

- API HTTP somente leitura com Express 5
- pesquisa, filtragem, pesquisa de manifesto, listagem de pacotes, comparação e downloads
- Linha de base de governança hospedada orientada pelo ambiente### Phase 3: MCP Discovery

- integração oficial `@modelcontextprotocol/sdk`
- transportes `stdio`, HTTP streamable e SSE
- ferramentas, recursos e prompts somente leitura apoiados pelo catálogo compartilhado### Phase 4: Local Install and Config Surface

- sidecar local com gravações permitidas
- detecção para 7 clientes com capacidade de instalação
- gravação de configuração para 16 clientes com capacidade de configuração em 33 alvos e 19 perfis de configuração
- fluxos `config-mcp` guiados na CLI e no shell visual
- suporte estável para Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose e Dev Containers### Phase 5: A2A Orchestration

- cartão do agente em `/.well-known/agent.json`
- `message/send`, `message/stream`, `tasks/get`, `tasks/cancel`, `tasks/resubscribe` e métodos de configuração de notificação push
- Persistência JSON e SQLite com recuperação de reinicialização
- executor de processo externo opcional
- opção de execução alugada entre trabalhadores para SQLite e coordenação avançada opcional de Redis
- padrões simples mantidos na memória, JSON ou SQLite sem dependências externas### Current Enhancer Operating Decision

O modelo `live` suportado pelo intensificador privado agora é explícito:

- a automação de relações públicas hospedada executa uma tentativa `ao vivo` controlada por comprovação
- se o gateway OmniRoute público estiver bloqueado ou instável, o PR será marcado como 'bloqueado' com um motivo voltado para o operador, em vez de falhar de forma opaca
- o caminho canônico confiável `live` permanece LAN ou execução de serviço local
- execuções privadas agendadas do GitHub permanecem `mock` por padrão, a menos que um operador solicite explicitamente `live`---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Decisão**: manter o manifesto como contrato compartilhado e manter os arquivos assinados por habilidade como superfície de distribuição.

**Por que**:
- CLI, API, MCP e A2A já consomem o formato de manifesto normalizado
- os arquivos são ideais para download e verificação, mas são ruins como o único contrato de descoberta
- isso mantém a criação simples e a distribuição verificável### 2. Private or Premium Catalogs

**Decisão**: reutilizar o mesmo manifesto e formato de catálogo e colocar autenticação ou política em camadas externamente.

**Por que**:
- evita bifurcar o modelo de dados
- corresponde à atual abordagem de governança API/MCP
- permanece compatível com a direção do ecossistema MCP em torno de credenciais de cliente OAuth e autorização gerenciada pela empresa### 3. Client Writer Strategy

**Decisão**: convergir para um pequeno conjunto de famílias de exportação canônicas e manter apenas redatores personalizados onde os documentos oficiais do cliente assim o exigirem.

**Famílias canônicas agora em uso**:
- JSON `mcpServers`
- JSON `servidores`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**Por que**:
- mantém a implementação sustentável
- ainda suporta necessidades específicas do cliente, como configurações de Claude, Continue YAML, Zed `context_servers` e Codex TOML
- evita inventar escritores frágeis para clientes sem documentos de configuração públicos estáveis---

## 🌍 Research Notes Behind Those Decisions

As decisões atuais foram verificadas em relação aos documentos oficiais do ecossistema:

- o ecossistema MCP agora documenta extensões opcionais, como credenciais de cliente OAuth e autorização gerenciada pela empresa, que oferece suporte à externalização de autenticação hospedada em vez de bifurcar o formato de catálogo
- OpenAI documenta um servidor MCP de documentos públicos e padrões de configuração Codex MCP que se alinham com o manifesto compartilhado mais a estratégia cliente-escritor
- O VS Code documenta suporte MCP de primeira classe e um guia de extensão, que reforça a manutenção de seu gravador baseado em `servidores` dedicados
- O JetBrains AI Assistant documenta a configuração do MCP por meio da experiência do usuário do produto, em vez de um contrato de arquivo de plataforma cruzada estável, que suporta mantê-lo em território manual/snippet por enquanto---

## 🔮 Longer-Term Decision Points

Apenas algumas questões estratégicas permanecem genuinamente em aberto:

1. Se algum cliente além da matriz atual realmente supera os padrões de redação de primeira classe ou se os produtos restantes devem permanecer manuais/somente trechos
2. Quando, se é que alguma vez, a governança hospedada deverá passar para trás de um gateway externo ou IdP corporativo, em vez da atual linha de base em processo?
3. Até que ponto o avaliador deve ir na avaliação da profundidade e da qualidade operacional do pacote de referência antes que este se torne demasiado opinativo para os contribuidores?