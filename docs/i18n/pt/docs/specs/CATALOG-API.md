# 🌐 Catalog API Surface (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**API HTTP somente leitura para descoberta de habilidades, pesquisa, comparação, planejamento de instalação e downloads de artefatos.**---

## 📊 Status

| Recurso | Estado |
|:--------|:------|
| ✅ Endpoints de catálogo | Implementado |
| ✅ Auth (portador + chave API) | Implementado |
| ✅ Autenticação de tempo de execução do administrador | Implementado |
| ✅ Limitação de taxa | Implementado |
| ✅ Registro de auditoria | Implementado |
| ✅ Listas de permissões CORS e IP | Implementado |
| ✅ Modo de manutenção | Implementado |
| ✅ Arquivo de downloads | Implementado |
| ✅ Especificação OpenAPI | Implementado |
| ⚠️ Back-end de governança | Linha de base em processo orientada pelo ambiente; gateway externo ou IdP ainda opcional |---

## 🎯 Purpose

A API fornece uma superfície estilo registro para:

- 📋 Listagem e filtragem de habilidades por qualidade, segurança, categoria, risco e muito mais
- 📌 Buscando manifestos de habilidades individuais
- 🔎 Pesquisa de texto completo e comparação de múltiplas habilidades
- 📦 Lista de pacotes com disponibilidade
- 📐 Geração de plano de instalação somente leitura
- 📥 Download de artefatos, arquivos e manifestos de soma de verificação gerados

Este mesmo catálogo e superfície de manifesto também são a base para:

- planejamento de instalação CLI local
- Respostas de descoberta somente leitura do MCP
- Descoberta A2A e transferência do plano de instalação
- potenciais catálogos privados com autenticação externa em camadas no topo---

## Início Rápido

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**Padrões**: `127.0.0.1:3333`---

## 🔐 Security Controls

Todos os controles de segurança são orientados pelo ambiente e opcionais:

| Controle | Variável | Exemplo |
|:--------|:---------|:--------|
| 🔑**Autorização do portador**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `substitua-me` |
| 🗝️**Autenticação de chave API**| `OMNI_SKILLS_HTTP_API_KEYS` | `chave-a,chave-b` |
| 🛂**Autorização de administrador**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-secret` |
| 🚦**Limitação de taxa**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Registro de auditoria**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Formato de auditoria**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` ou `texto` |
| 📄**Arquivo de auditoria**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**Lista de permissões CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**Lista de permissões de IP**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Proxy confiável**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `loopback` |
| 🚧**Modo de manutenção**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Tente novamente depois**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Comportamento:**
- 🟢 `/healthz` permanece**sempre não autenticado**
- 🔒 Todas as outras rotas requerem autenticação quando a autenticação está habilitada
- 🛂 `/admin/runtime` requer o token de administrador quando ativado
- 🚦 A limitação de taxa está em processo com cabeçalhos de resposta `X-RateLimit-*`
- 🧾 Cada resposta carrega `X-Request-Id`
- 🚧 O modo de manutenção retorna `503` para rotas não relacionadas à saúde e não administrativas### ✅ Current governance decision

A direção atual do projeto é**reutilizar o mesmo formato de catálogo para implantações públicas ou privadas**e camada de autenticação externamente quando necessário.

Isso significa:

- o manifesto e o formato da API permanecem compartilhados
- implantações locais e auto-hospedadas podem permanecer na linha de base do processo
- governança hospedada mais avançada pode migrar para um gateway externo ou camada de autenticação corporativa posteriormente sem bifurcar o modelo de dados### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| Método | Caminho | Descrição |
|:-------|:-----|:-----------|
| `OBTER` | `/saúde` | Exame de saúde (não autenticado) |
| `OBTER` | `/openapi.json` | Especificação dinâmica OpenAPI 3.1 |
| `OBTER` | `/admin/tempo de execução` | Instantâneo de governança e tempo de execução (autenticação de administrador quando ativado) |### 📚 Catalog & Skills

| Método | Caminho | Descrição |
|:-------|:-----|:-----------|
| `OBTER` | `/v1/habilidades` | Listar habilidades com filtros |
| `OBTER` | `/v1/habilidades/:id` | Obtenha manifesto de habilidades individuais |
| `OBTER` | `/v1/pesquisa` | Pesquisa de texto completo |
| `OBTER` | `/v1/compare?ids=id1,id2` | Compare múltiplas habilidades |
| `OBTER` | `/v1/pacotes` | Listar pacotes com disponibilidade |
| `POSTAR` | `/v1/instalar/plano` | Gere um plano de instalação |### 🔎 List/Search Filters

| Filtro | Exemplo |
|:-------|:--------|
| `categoria` | `?categoria=desenvolvimento` |
| `ferramenta` | `?ferramenta=cursor` |
| `risco` | `?risco=seguro` |
| `classificar` | `?sort=qualidade\|melhores práticas\|nível\|segurança\|nome` |
| `ordem` | `?order=asc\|desc` |
| `min_qualidade` | `?qualidade_min=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `nível_min` | `?min_level=2` |
| `min_segurança` | `?min_security=90` |
| `validação_status` | `?validação_status=passado` |
| `status_de_segurança` | `?status_de_segurança=passado` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

| Método | Caminho | Descrição |
|:-------|:-----|:-----------|
| `OBTER` | `/v1/catálogo/download` | Download do catálogo completo |
| `OBTER` | `/v1/habilidades/:id/artefatos` | Listar artefatos de habilidades |
| `OBTER` | `/v1/habilidades/:id/arquivos` | Listar arquivos de habilidades |
| `OBTER` | `/v1/habilidades/:id/downloads` | Todos os links de download disponíveis |
| `OBTER` | `/v1/skills/:id/download/manifest` | Manifesto de habilidade JSON |
| `OBTER` | `/v1/skills/:id/download/ponto de entrada` | Habilidade HABILIDADE.md |
| `OBTER` | `/v1/skills/:id/download/artifact?path=<caminho>` | Artefato específico |
| `OBTER` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Arquivo de habilidades |
| `OBTER` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Assinatura separada |
| `OBTER` | `/v1/skills/:id/download/archive/checksums` | Somas de verificação SHA-256 |---

## 🔗 Link Enrichment

Quando as solicitações são tratadas por meio da API, o servidor**enriquece automaticamente**manifestos, listagens de artefatos e planos de instalação com URLs absolutos derivados da origem da solicitação recebida. Este é um enriquecimento de tempo de execução, não incorporado em `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Planos de instalação são visualizações, não gravações remotas.**

A API nunca é instalada na máquina do chamador. Ele retorna:
- 📌 Metadados de habilidades selecionadas
- ⚠️ Avisos sobre membros ausentes do pacote
- 🖥️ Comandos CLI concretos para execução local
- 🔗 URLs de download público quando a origem da solicitação estiver disponível---

## 🔌 Relationship to MCP

O servidor MCP reutiliza as mesmas URLs de API públicas quando configurado:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Isso permite que as visualizações de instalação do MCP retornem URLs de manifesto e artefato concretos, em vez de apenas caminhos de repositório locais.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` retorna um instantâneo de governança útil para diagnósticos hospedados:

- métodos de autenticação ativos
- status de autenticação de administrador
- janela de limite de taxa e máximo
- Lista de permissões CORS
- Lista de permissões de IP
- estado do modo de manutenção
- destino e formato da auditoria
- totais atuais do catálogo
- solicitar eco de ID para rastreabilidade