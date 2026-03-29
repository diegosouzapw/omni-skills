# 🤝 Contributing to Omni Skills (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills contém um catálogo de habilidades e as superfícies de tempo de execução criadas com base nesse catálogo.**
> As contribuições podem ter como alvo qualquer uma das áreas, mas ambas devem permanecer alinhadas com os artefatos gerados e o comportamento atual da CLI.---

## 📊 Repository Baseline

| Métrica | Valor |
|:-------|:------|
| 📦 Versão do pacote | `0.1.3` |
| 🧠 Habilidades publicadas | `32` |
| 📦 Pacotes totalmente garantidos | `7` |
| 🖥️ Clientes com capacidade de instalação | `7` |
| 🔌 Clientes com capacidade de configuração MCP | `16` |
| 🔄 Lançamentos automáticos | Habilitado em `principal` |---

## Importante

| O que | Onde |
|:-----|:------|
| 🧠 As habilidades são de autoria em | `habilidades/<nome-da-habilidade>/SKILL.md` |
| 📖 Modelos e orientações para colaboradores | `docs/contribuidores/` |
| 🧾 Fluxo canônico de relações públicas para novas habilidades | [Fluxo de trabalho de RP de habilidades](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Habilidades nativas recebidas em | `habilidades/` (qualquer idioma) |
| ✨ Derivados aprimorados com curadoria | `skills_omni/` (somente em inglês, automatizado) |
| 🚫 `skills_omni/` está protegido | Não está aberto a contribuições públicas diretas |
| 📖 Documentos de tempo de execução e arquitetura | `docs/` |
| 📄 Arquivos da comunidade | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Tipo | Área |
|:-----|:-----|
| 🧠 Adicione ou melhore uma habilidade | `habilidades/` |
| 📖 Atualizar orientação para contribuidores | `docs/contribuidores/` |
| 🖥️ Melhorar CLI, instalador ou scripts | `ferramentas/` |
| 📦 Melhorar o tempo de execução do catálogo ou pacotes de protocolo | `pacotes/` |
| 🧪 Aperte testes, verificações de fumaça ou libere documentos | Vários |---

## Início Rápido

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 Abra o PR com `Permitir edições dos mantenedores` habilitado.**---

## Documentação

Uma boa habilidade nativa de entrada deve:

- ✅ Resolva um problema específico de forma limpa
- ✅ Seja reutilizável em todos os projetos
- ✅ Inclua instruções que um agente pode realmente seguir
- ✅ Evite conteúdo vago ou redundante
- ✅ Declare frontmatter preciso e metadados de compatibilidade quando disponíveis
- ✅ Terreno com artefatos de classificação `metadata.json` gerados após a execução da automação### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 Dica:**Os pacotes de habilidades de nível de lançamento devem incluir `agents/`, `references/`, `examples/` e `scripts/`. Mas a superfície de entrada é intencionalmente permissiva – uma habilidade de entrada nativa mínima é permitida, e o pipeline intensificador gera a derivada mais forte.### 🌐 Language Policy

| Superfície | Idiomas aceitos |
|:--------|:-------------------|
| 📥 `habilidades/` (ingestão nativa) | Português, Inglês ou qualquer idioma |
| ✨ `skills_omni/` (saída selecionada) | Somente inglês |

> O aprimorador privado preserva a fonte nativa conforme enviada e reescreve o derivado com curadoria em inglês.

📖 Para a sequência completa de ramificação, validação e revisão do aprimorador, use [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Execute isto antes de abrir um PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<detalhes>
<summary>📋 <strong>O que <code>npm run valid</code> regenera</strong></summary>

- `metadados.json`
- `habilidades/<habilidade>/metadata.json`
- Mapeamento de taxonomia canônica
- Pontuações de maturidade, melhores práticas, qualidade e segurança
- Descobertas de segurança estática
- Status opcional do scanner ClamAV e VirusTotal (quando configurado)</details>

>**⚠️ Importante:**Validação é o contrato usado por CLI, API, MCP, A2A, manifestos, arquivos e automação de liberação. Trate os metadados gerados como parte da superfície de revisão, e não como resultados descartáveis.### 📥 Intake Policy

| Condição | Comportamento |
|:----------|:---------|
| Antecipação ausente/incompleta | ⚠️ Avisos (não bloqueia) |
| Descobertas críticas de segurança | 🚫 Bloqueia a ingestão |
| Erros de validação difícil | 🚫 Bloqueia a ingestão |
| Padrão editorial mais rígido | Aplicado no fluxo aprimorado de derivados, não na ingestão nativa |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<detalhes>
<summary>📋 <strong>O que o passe de fumaça valida</strong></summary>

- ✅ Validação de habilidades
- ✅ Geração de catálogo
- ✅ Geração de catálogo de documentos
- ✅ Conjunto de testes
- ✅ `pacote npm --dry-run`
- ✅ inicialização API
- ✅ Inicialização MCP em `stdio`, `stream` e `sse`
- ✅ Bota A2A
- ✅ Verificação de arquivo e expectativas de embalagem</details>

---

## 📋 Skill Frontmatter

Frontmatter é fortemente recomendado. Use o [Modelo de habilidade](docs/contributors/SKILL-TEMPLATE.md) como linha de base.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<detalhes>
<summary>🏷️ <strong>Categorias de taxonomia canônica</strong></summary>

| Categoria | Categoria |
|:--------|:---------|
| `desenvolvimento` | `frontend` |
| `back-end` | `fullstack-web` |
| `ferramentas` | `automação cli` |
| `negócio` | `produto` |
| `projeto` | `dados-ai` |
| `ai-agentes` | `aprendizado de máquina` |
| `devops` | `testando-segurança` |
| `documentação` | `conteúdo-mídia` |
| `comunicação` | `sem categoria` |</details>

>**ℹ️**A versão do Skill é independente da versão do pacote npm. Se uma habilidade nativa de entrada ainda não tiver frontmatter, ela será aceita com avisos e derivará metadados temporários do diretório, título e corpo do texto.---

## ⚙️ Runtime Contributions

Se você tocar em `packages/`, `tools/bin/`, `tools/lib/` ou criar scripts:

- 📦 Mantenha `dist/` e documentos alinhados com a implementação
- 🔄 Prefira reutilizar `packages/catalog-core` em vez de duplicar a lógica do catálogo
- 🔒 Mantenha o comportamento de gravação local atrás dos padrões de visualização ou simulação
- 🔌 Mantenha os redatores MCP disciplinados — adicione redatores de configuração de primeira classe apenas quando o cliente tiver um contrato de configuração pública estável
- 🛡️ Trate os avisos do scanner de segurança como parte da barra de revisão
- 🧪 Testes de atualização ao alterar comandos CLI, modos de transporte ou endpoints públicos### 🚧 Important Boundary

| Faça isso ✅ | Não faça isso 🚫 |
|:-----------|:-----------------|
| Envie trabalhos nativos em `skills/` | Abra PRs manuais que editam `skills_omni/` |
| Deixe a automação cuidar da execução do aprimorador | Adicione conteúdo selecionado diretamente |
| Concentre-se na qualidade legítima das habilidades | Ignore o fluxo automatizado de relações públicas complementares |

>**ℹ️**Quando uma habilidade nativa em `skills/` é atualizada, o aprimorador privado a reprocessa e atualiza a linha de base aprimorada.---

## 🔄 Enhancer Outcome States

Durante PRs públicos de habilidades nativas, o aprimorador relata um dos quatro estados:

| Estado | Significado |
|:------|:--------|
| ✅ `concluído` | Derivado aprimorado gerado de forma limpa, elegível para `skills_omni/` |
| ⚠️ `degradado` | Concluído com fallback ou movimento de pontuação mais fraco — inspecione com mais cuidado |
| 🚫 `bloqueado` | Interrompido por motivos de infraestrutura ou validação — impede a publicação automática |
| ❌ `falhou` | Erro inesperado — requer investigação do mantenedor |

>**📝 Colaboradores**não precisam corrigir problemas de infraestrutura do aprimorador. A responsabilidade é enviar uma habilidade nativa legítima e manter o repositório verde.---

## 🔄 Automatic Release Policy

Quando uma mudança chega a `main` e inclui:

- `habilidades/**`
- `habilidades_omni/**`
- `dados/bundles.json`

…o repositório emite um**lançamento do pacote automaticamente**.### 📋 Version Bump Rule

| De | Para | Regra |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Atualização +1 |
| `0.1.9` | `0.1.10` | Atualização +1 |
| `0.1.10` | `0.2.0` | Role para o próximo menor, redefina o patch |

> O fluxo de lançamento regenera catálogos/arquivos, confirma o aumento de versão, marca o lançamento, publica npm e cria o lançamento do GitHub automaticamente.---

## 📝 Commit Conventions

| Prefixo | Usar para |
|:-------|:--------|
| `façanha:` | Nova habilidade ou recurso |
| `consertar:` | Correção de bug |
| `documentos:` | Mudanças na documentação |
| `refatorar:` | Limpeza de código ou alterações de estrutura |
| `teste:` | Alterações de teste |
| `tarefa:` | Manutenção |---

## ❓ Need Help?

| Canal | Ligação |
|:--------|:-----|
| 💬 Perguntas | [Abra uma discussão](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Insetos | [Abra um problema](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Feedback antecipado | [Abra um rascunho de RP](https://github.com/diegosouzapw/omni-skills/pulls) |