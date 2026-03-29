# 📐 ADR-0001: Agent-Native Workspace Foundation (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**A principal decisão arquitetônica que moldou a estrutura do espaço de trabalho monorepo.**---

## 📊 Status

✅**Aceito**— direção atual do espaço de trabalho e formato do repositório ativo.---

## 🔍 Context

Omni Skills começou como um repositório**instalador primeiro**. Isso foi suficiente para distribuir o conteúdo `SKILL.md`, mas não o suficiente para expor o catálogo aos agentes por meio de superfícies nativas de protocolo.

Precisávamos de uma base que pudesse apoiar:

| Requisito | Protocolo |
|:------------|:--------|
| 🌐 API de catálogo HTTP somente leitura | REST |
| 🔌 Servidor MCP somente leitura | Protocolo de Contexto do Modelo |
| 🤖 Superfície A2A voltada para o agente | Agente para Agente |
| 📂 Sidecars de instalação local | Ferramentas de sistema de arquivos |

**Restrição crítica**: evite analisar novamente os arquivos repo de forma independente em cada novo serviço.---

## ✅ Decision

Adote um**monorepo orientado ao espaço de trabalho**com um núcleo de catálogo compartilhado e pacotes específicos de protocolo:

| Pacote | Finalidade |
|:--------|:--------|
| 📦 `omni-habilidades` (raiz) | Instalador CLI e scripts de repositório |
| 🧠 `@omni-skills/catalog-core` | Carregamento compartilhado, pesquisa, comparação, pacotes, planos de instalação |
| 🌐 `@omni-skills/server-api` | API REST somente leitura |
| 🔌 `@omni-skills/server-mcp` | MCP com stdio/stream/sse + modo sidecar local |
| 🤖 `@omni-skills/server-a2a` | Tempo de execução de tarefa A2A com placa de agente, polling, SSE e configuração push |### 📁 Shared Data Sources

O núcleo do catálogo lê artefatos gerados de:
- `dist/catalog.json`
- `dist/manifests/<habilidade>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Resultado | Impacto |
|:--------|:-------|
| 🔗**Contrato de dados compartilhados**| API, MCP e A2A consomem os mesmos artefatos |
| 🖥️**CLI unificado**| Um binário expõe instalação, shell de UI, API, MCP, A2A, diagnóstico e fumaça |
| 🧩**Isolamento de protocolo**| Novas superfícies iteram sem acoplamento às partes internas do instalador |
| 🔌**Carro lateral local**| Trabalhando no modo MCP com capacidade de gravação atrás de uma lista de permissões, com receitas conscientes do cliente |
| 📦**Tempo de execução de pacote único**| O pacote npm publicado reúne as superfícies do protocolo, as ferramentas de validação e os artefatos gerados |---

## ⚠️ Negative Consequences

| Troca | Mitigação |
|:--------|:-----------|
| 🔄**Duplicação de metadados**| Construção Python + tempo de execução JavaScript → eventualmente consolidar |
| 🏗️**Complexidade A2A**| Agora existe um ciclo de vida durável, mas os adaptadores de coordenação acrescentam profundidade operacional |
| 📦**Alinhamento de catálogo**| A instalação seletiva requer comandos, manifestos e documentos para permanecerem sincronizados |
| 📋**Agrupar lacunas de metadados**| Os pacotes podem ultrapassar as habilidades publicadas, exigindo avisos explícitos de membros ausentes |---

## ➡️ Follow-Up Items

| # | Ação | Estado |
|:--|:-------|:-------|
| 1️⃣ | Autenticação MCP remota e limitação de taxa | ✅ Concluído |
| 2️⃣ | Gravação de configuração MCP específica do cliente aprimorada | ✅ Presente hoje para Claude, Cursor, Codex, Gemini, Kiro, VS Code e Dev Containers |
| 3️⃣ | Artefatos de liberação assinados ou arquivos por habilidade | ✅ Presente hoje com aplicação de CI em tags de lançamento |
| 4️⃣ | Tempo de execução de tarefa A2A → orquestração durável | ✅ Presente hoje com persistência JSON/SQLite, executores externos, coordenação de locação opcional e coordenação Redis avançada opcional |
| 5️⃣ | Expanda o catálogo publicado para uma cobertura mais ampla de pacotes | ✅ Apresente hoje os atuais sete pacotes iniciais com curadoria |