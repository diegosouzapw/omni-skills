# 🔧 System Runbook (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**O guia operacional completo para criar, validar, servir, proteger e solucionar problemas do Omni Skills.**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

| Comando | O que faz |
|:--------|:-------------|
| `npm executar validar` | Valida `SKILL.md`, regenera `metadata.json`, calcula taxonomia/maturidade/qualidade/segurança |
| `npm run taxonomy:report` | Mostra sugestões de desvio de categoria sem reescrever arquivos |
| `npm executar verificação:scanners` | Confirma a cobertura do scanner registrada nos metadados de habilidades gerados |
| `npm run release:notas` | Gera notas de versão personalizadas a partir de metadados, pacotes e histórico do git |
| `npm executar compilação` | Regenera catálogos/manifestos/arquivos/somas de verificação, verifica a cobertura do scanner e arquivos, reconstrói `docs/CATALOG.md` |
| `teste npm` | Conjunto completo de fumaça em fluxos CLI, API, MCP, sidecar e arquivo |---

## 🖥️ Visual Shell

A CLI publicada agora inclui um shell de operador baseado em Ink:```bash
npx omni-skills ui
```

Capacidades atuais:

- instalação guiada para clientes conhecidos e caminhos personalizados
- fluxo de pesquisa e instalação
- Assistente de inicialização do MCP
- Assistente de inicialização da API
- Assistente de inicialização A2A
- instalações recentes e relançamentos de serviços
- predefinições nomeadas de instalação e serviço

Caminho do estado local:```text
~/.omni-skills/state/ui-state.json
```

Cair pra trás:```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

O scanner estático verifica todas as habilidades automaticamente:

| Família Regra | Exemplos |
|:------------|:--------|
| 🎭 Injeção imediata | Padrões de exfiltração, substituições de instruções |
| 💣 Comandos destrutivos | `rm -rf`, `formato`, `mkfs` |
| 🔑 Caminhos suspeitos | `/etc/shadow`, `~/.ssh`, arquivos de credenciais |
| ⚠️ Primitivos arriscados | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Requer `clamscan` em `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Somente pesquisa de hash — arquivos desconhecidos**não são carregados**por padrão.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Portão de liberação estrito:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Os arquivos são produzidos automaticamente por `npm run build`:

| Saída | Caminho |
|:-------|:-----|
| 📦 CEP | `dist/archives/<habilidade>.zip` |
| 📦 Tarball | `dist/archives/<habilidade>.tar.gz` |
| 🔒 Somas de verificação | `dist/archives/<habilidade>.checksums.txt` |

`dist/` foi confirmado intencionalmente neste repositório. O catálogo, manifestos, pacotes configuráveis ​​e arquivos gerados são entradas de tempo de execução para fluxos de instalação CLI, superfícies de download de API, visualizações de MCP, transferência de tarefas A2A, testes de fumaça e verificação de liberação.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Substituição de chave pública opcional:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Se nenhuma chave pública for fornecida, a compilação deriva uma via `openssl` em `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Política de versão:

- incrementos de patch até `.10`
- depois de `.10`, a próxima versão será secundária e redefinirá o patch para `.0`

Exemplos:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Cenário | Comando |
|:--------|:--------|
| 📥 Instalação padrão (Antigravidade) | `npx omni-habilidades` |
| 🎯 Habilidade específica + cliente | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Descoberta → instalar | `npx omni-skills encontrar figma --tool cursor --install --yes` |
| 📦 Instalação do pacote | `npx omni-skills --cursor --bundle Essentials` |
| 🩺 Verifique a instalação | `npx omni-skills doctor` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filtro | Bandeira | Exemplo |
|:-------|:-----|:--------|
| 📂 Categoria | `--categoria` | `--desenvolvimento de categoria` |
| 🖥️ Ferramenta | `--ferramenta` | `--cursor de ferramenta` |
| ⚠️ Risco | `--risco` | `--risco seguro` |
| 📊 Classificar | `--classificar` | `--classificar qualidade\|melhores práticas\|nível\|segurança\|nome` |
| 🔄 Encomendar | `--ordem` | `--ordenar asc\|desc` |
| ⭐ Qualidade mínima | `--min-qualidade` | `--min-qualidade 80` |
| 📋 PA mínima | `--min-melhores-práticas` | `--min-melhores práticas 60` |
| 🎯 Nível mínimo | `--nível mínimo` | `--nível mínimo 2` |
| 🛡️ Segurança mínima | `--min-segurança` | `--min-segurança 90` |
| ✅ Validação | `--status de validação` | `--status de validação aprovado` |
| 🛡️ Segurança | `--status de segurança` | `--status de segurança aprovado` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Método | Ponto final | Finalidade |
|:-------|:--------|:--------|
| `OBTER` | `/saúde` | Exame de saúde |
| `OBTER` | `/openapi.json` | Especificação OpenAPI 3.1 |
| `OBTER` | `/v1/habilidades` | Lista com filtros |
| `OBTER` | `/v1/pesquisa` | Pesquisa de texto completo |
| `OBTER` | `/v1/habilidades/:id/arquivos` | Listagem de arquivo |
| `OBTER` | `/v1/skills/:id/download/archive?format=zip` | Baixar arquivo |
| `OBTER` | `/v1/skills/:id/download/archive/checksums` | Manifesto de soma de verificação |### 🔐 Hosted API Hardening

| Recurso | Comando |
|:--------|:--------|
| 🔑 Autenticação do portador | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api` |
| 🗝️ Autenticação de chave API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Autenticação de tempo de execução do administrador | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 Limitação de taxa | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Registro de auditoria | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 API npx omni-skills` |
| 🌍 Lista de permissões CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 Lista de permissões de IP | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Modo manutenção | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api` |
| 🔁Proxy confiável | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🟢 `/healthz` permanece aberto por design; as rotas do catálogo exigem autenticação quando habilitadas. `GET /admin/runtime` requer o token de administrador quando configurado e retorna o instantâneo de governança ao vivo.---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

O sidecar agora pode visualizar ou gravar a configuração do MCP para:

- Configurações do usuário e do projeto Claude
- Configuração do Claude Desktop
- Configuração do usuário Cline
- Configuração de usuário e repositório do GitHub Copilot CLI
- Configuração do usuário do cursor e do espaço de trabalho
- Configuração do Codex TOML
- Configurações de usuário e projeto do Gemini
- Usuário Kilo CLI e configuração do projeto
- Configuração do espaço de trabalho Kilo
- Configurações de usuário e projeto Kiro
- Configuração de usuário e espaço de trabalho OpenCode
- Continuar a configuração YAML do espaço de trabalho
- Configuração do usuário do Windsurf
- Configuração do espaço de trabalho Zed
- espaço de trabalho `.mcp.json`
- Espaço de trabalho do VS Code e configuração do usuário
- Configuração do contêiner de desenvolvimento

`configure_client_mcp` também retorna `receitas` por cliente para que os operadores obtenham a CLI equivalente ou etapas de configuração manual junto com a visualização.### 🧾 MCP Config Preview and Write Flow

Use a CLI unificada quando desejar a geração de configuração sem chamar a ferramenta MCP diretamente:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

O shell visual expõe o mesmo fluxo de trabalho por meio de:

- `npx omni-skills ui`
- `Serviços`
- `Configurar cliente MCP`

O comando permanece no modo de visualização, a menos que `--write` seja passado.### 🔐 Hosted MCP Hardening

Mesmos ambientes da API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Rotas protegidas**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` permanece aberto.---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

O caminho local padrão permanece simples:

- A persistência `json` ou `sqlite` pode ser executada com a pesquisa de fila desativada
- defina `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` somente quando desejar reivindicação de vários trabalhadores e failover de arrendamento
- manter a coordenação do Redis como uma opção hospedada avançada, não como linha de base### 🧱 Multi-Worker Lease Setup

Execute mais de um nó A2A no mesmo armazenamento SQLite para obter failover baseado em arrendamento:```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Se um trabalhador morrer enquanto uma tarefa estiver `funcionando`, outro trabalhador poderá recuperá-la após o término do arrendamento e continuar a execução.### 🟥 Redis Coordination

Para implantações hospedadas ou de vários nós que não desejam coordenação de fila vinculada ao armazenamento SQLite compartilhado, mude o coordenador para Redis:```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Neste modo:

- a persistência ainda existe em JSON ou SQLite
- reivindicação de tarefas e mudança de propriedade de arrendamento para Redis
- vários nós A2A podem compartilhar uma fila sem depender da coordenação em nível de linha SQLite### 📡 Endpoints

| Método | Caminho | Finalidade |
|:-------|:-----|:--------|
| `OBTER` | `/saúde` | Exame de saúde |
| `OBTER` | `/.bem conhecido/agent.json` | Cartão de Agente (descoberta A2A) |
| `POSTAR` | `/a2a` | Endpoint JSON-RPC para tarefas e streaming |### 🧭 Supported JSON-RPC Methods

| Método | Finalidade |
|:-------|:--------|
| `mensagem/enviar` | Iniciar ou continuar uma tarefa |
| `mensagem/fluxo` | Iniciar uma tarefa e transmitir atualizações de SSE |
| `tarefas/obter` | Pesquisar um instantâneo de tarefa |
| `tarefas/cancelar` | Cancelar uma tarefa ativa |
| `tarefas/nova inscrição` | Retomar atualizações de SSE para uma tarefa existente |
| `tarefas/pushNotificationConfig/set` | Registre um webhook push |
| `tarefas/pushNotificationConfig/get` | Leia uma configuração push |
| `tarefas/pushNotificationConfig/list` | Listar configurações push para uma tarefa |
| `tarefas/pushNotificationConfig/delete` | Remover uma configuração push |### 📡 Task Lifecycle

O tempo de execução atual oferece suporte a estes estados de tarefa:

- `enviado`
- `trabalhando`
- `entrada obrigatória`
- `concluído`
- `cancelado`
- `falhou`

As tarefas são persistidas em um arquivo JSON ou em um armazenamento SQLite e recarregadas na reinicialização. As tarefas concluídas e interrompidas permanecem disponíveis. As tarefas que ainda foram `enviadas` ou `funcionando` durante o desligamento são recuperadas com metadados de reinicialização explícitos e são retomadas automaticamente por padrão.### 🧪 Example: Start a Task

```bash
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
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

O repositório agora tem dois fluxos de trabalho:

| Fluxo de trabalho | Gatilho | Finalidade |
|:--------|:--------|:--------|
| `validar.yml` | Push/PR para `principal` | Construir, testar e confirmar se os artefatos gerados foram confirmados |
| `release.yml` | Tag push `v*` ou envio manual | Execute scanners de nível de lançamento, verifique a tag de versão, assine artefatos, empacote o tarball, publique no npm e crie o GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Segredo | Usado por | Finalidade |
|:-------|:-------|:--------|
| `VT_API_KEY` ou `VIRUSTOTAL` | `release.yml` | Exigir pesquisas de hash do VirusTotal em compilações de lançamento |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` ou `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Chave privada necessária para assinatura de arquivo desanexado no CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` ou `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Substituição opcional de chave pública; caso contrário, derivado da chave privada |
| `NPM_TOKEN` | trabalho `publish-npm` | Autenticar `npmpublish` para lançamentos de tags |### 🦠 Release Scanner Policy

`release.yml` define ou prepara:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ segredos.VT_API_KEY || segredos.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` do armazenamento temporário do executor

Isso significa que todo lançamento baseado em tags deve:

- instale e atualize o ClamAV no runner
- regenerar metadados com ClamAV habilitado
- regenerar metadados com VirusTotal ativado
- decodificar o material da chave de assinatura CI no armazenamento temporário do executor
- passe `npm run verify:scanners:strict`
- passe `npm run verify:archives:strict`
- passar nos testes e verificação do pacote antes da publicação do npm
- gerar notas de versão personalizadas a partir de metadados de catálogo e histórico do git
- crie uma versão do GitHub com recursos de versão anexados após a publicação---

## 1️⃣1️⃣ Environment Variables Reference

| Variável | Finalidade | Padrão |
|:--------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Substituir caminho raiz do catálogo | Detectado automaticamente |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Caminhos de gravação extras permitidos | Raízes de clientes conhecidas |
| `OMNI_SKILLS_MCP_MODE` | Defina como `local` para sidecar | Remoto |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Sinalizador Alt para modo local | `0` |
| `OMNI_SKILLS_API_BASE_URL` | URL da API pública para MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | URL base pública | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Token de autenticação do portador | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Chaves de API separadas por vírgula | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Token de autenticação do tempo de execução do administrador | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Máximo de solicitações por janela | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Janela de limite de taxa (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Habilitar registro de auditoria | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | Saída de auditoria `json` ou `text` | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Caminho opcional do arquivo de log de auditoria | saída padrão |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Lista de permissões de origem CORS separada por vírgula | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Lista de permissões de IP ou CIDR separados por vírgula | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Configuração de proxy de confiança expressa | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Habilitar respostas de manutenção | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Manutenção `Retry-After` segundos | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Atraso simulado de tarefa assíncrona | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | armazenamento de tarefas `json`, `sqlite` ou `memory` | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Arquivo de armazenamento de tarefas A2A personalizado | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Habilitar sondagem de fila compartilhada para trabalhadores com reconhecimento de leasing | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | coordenador `store`, `sqlite`, `local` ou `redis` | `loja` |
| `OMNI_SKILLS_A2A_REDIS_URL` | URL Redis para coordenação externa | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Prefixo da chave Redis para metadados da fila | `omni-habilidades:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Intervalo de pesquisa de fila para trabalhadores arrendados | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Duração do arrendamento antes que outro trabalhador possa recuperar uma tarefa | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Identificador de trabalhador estável para propriedade de arrendamento e diagnóstico | Nome do host + PID + sufixo aleatório |
| `OMNI_SKILLS_A2A_EXECUTOR` | executor de tarefa `inline` ou `process` | `inline` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Substituir comando do trabalhador externo | Nó binário |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | Matriz JSON de argumentos de trabalhadores externos | `["pacotes/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Retomar tarefas enviadas/de trabalho recuperadas na inicialização | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Permitir webhooks não HTTPS fora do localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Habilitar verificação do ClamAV | `0` |
| `VT_API_KEY` | Chave de API do VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Chave privada para assinatura | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Substituição de chave pública | Derivado automaticamente |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. Reconstrua com `npm run build`
2. Execute novamente `npm run verify:archives`
3. Se a assinatura estiver habilitada, confirme a chave pública e a disponibilidade do `openssl`### 🦠 Release Workflow Fails on Scanner Coverage

- Confirme se `VT_API_KEY` existe nos segredos do repositório
- Confirme que `freshclam` foi bem-sucedido no runner
- Reconstrua localmente com `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Execute novamente `npm run verify:scanners:strict`### 📦 npm Publish Fails in CI

- Confirme que `NPM_TOKEN` existe nos segredos do repositório
- Confirme se a tag Git corresponde exatamente à versão `package.json`
- Verifique se o tarball carregado por `release-verify` existe nos artefatos do fluxo de trabalho### ✍️ Release Signing Fails in CI

- Confirme se `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` ou `OMNI_SKILLS_SIGN_PRIVATE_KEY` existe nos segredos do repositório
- Se você fornecer um segredo de chave pública, confirme se ele corresponde à chave privada
- Confirme se `openssl` está disponível e se a chave privada está no formato PEM
- Reconstrua localmente com `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Execute novamente `npm run verify:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- Verifique `OMNI_SKILLS_HTTP_BEARER_TOKEN` ou `OMNI_SKILLS_HTTP_API_KEYS`
- Incluir o cabeçalho `Authorization: Bearer <token>` ou `x-api-key`### 🚦 API/MCP Returns `429 Too Many Requests`

- Aumentar `OMNI_SKILLS_RATE_LIMIT_MAX`
- Ampliar `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Reduza o tráfego intermitente de clientes ou sondas### 🛂 API/MCP Admin Runtime Returns `401`

- Verifique `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Enviar `x-admin-token: <token>` ou `Autorização: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Desativar `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Use `/healthz` para testes de atividade durante a manutenção
- Use `/admin/runtime` com o token de administrador para diagnóstico do operador### 🌍 Browser Requests Fail CORS Validation

- Verifique `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Inclua o esquema e o host exatos, por exemplo `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Verifique `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Verifique `OMNI_SKILLS_A2A_REDIS_URL`
- Verifique a conectividade Redis de cada nó
- Inspecione `/healthz` para o instantâneo de `coordenação`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
