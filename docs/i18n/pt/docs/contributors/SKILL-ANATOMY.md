# 🔬 Anatomy of a Well-Written Skill (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Expectativas de estrutura e qualidade para um Omni Skills `SKILL.md` — o formato de autoria que alimenta todo o catálogo.**---

## 📐 The Two Parts

Cada `SKILL.md` é composto por duas seções distintas:### 1️⃣ Frontmatter (YAML Metadata)

Metadados legíveis por máquina entre delimitadores `---`. Ele capacita:

- 📚 O índice de habilidades e geração de catálogo
- 🔎 Pesquisa e filtragem CLI
- ✅ Validação e pontuação de qualidade
- 📊 Artefatos de classificação `metadata.json` gerados
- 📋 Manifestos por habilidade em `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Instruções legíveis por humanos (e legíveis por agentes). Escreva como se você estivesse**instruindo um desenvolvedor sênior**sobre como executar uma tarefa – específico o suficiente para que um agente de IA possa segui-lo sem adivinhar.---

## 📋 Frontmatter Reference

| Campo | Obrigatório | Tipo | Descrição |
|:------|:---------|:-----|:------------|
| `nome` | ✅ | corda | Deve corresponder ao nome do diretório, hifenizado em minúsculas |
| `descrição` | ✅ | corda | Descrição em uma linha (10-200 caracteres) |
| `versão` | ⚡ | corda | Versão semântica da habilidade em si (por exemplo, `"0.1.1"`) |
| `categoria` | ⚡ | corda | Uma categoria canônica da taxonomia repo |
| `etiquetas` | ⚡ | string[] | Tags pesquisáveis ​​para descoberta |
| `complexidade` | ⚡ | corda | `iniciante` · `intermediário` · `avançado` · `especialista` |
| `risco` | ⚡ | corda | `seguro` · `cuidado` · `ofensivo` · `crítico` |
| `ferramentas` | ⚡ | string[] | Assistentes de codificação de IA testados |
| `fonte` | ⚡ | corda | `omni-team` · `comunidade` · `oficial` |
| `autor` | ⚡ | corda | Atribuição |
| `data_adicionada` | ⚡ | corda | Data ISO |
| `data_atualizado` | ⚡ | corda | Data ISO |

> ✅ = Sempre obrigatório · ⚡ = Obrigatório no modo estrito

A versão da habilidade é independente da versão do pacote npm. O pacote é atualmente `0.1.3`, mas as habilidades existentes podem permanecer validamente em sua própria versão semântica.---

## 🏷️ Canonical Categories

A taxonomia do repositório define atualmente**18 categorias canônicas**:

| Categoria | Domínio |
|:--------|:-------|
| 💻 `desenvolvimento` | Desenvolvimento geral de software |
| 🎨 `frontend` | Estruturas de front-end e UI |
| 🔧 `back-end` | Serviços de back-end e APIs |
| 🌐 `fullstack-web` | Desenvolvimento web ponta a ponta |
| 🛠️ `ferramentas` | Ferramentas e utilitários para desenvolvedores |
| ⚙️ `automação cli` | Ferramentas CLI e scripts de automação |
| 📊 `negócios` | Processos e estratégia de negócios |
| 📐 `produto` | Gestão e design de produto |
| 🎯 `design` | Design visual e UX |
| 🤖 `dados-ai` | Engenharia de dados e aplicações de IA |
| 🧠 `agentes-ai` | Desenvolvimento e padrões de agentes de IA |
| 📈 `aprendizado de máquina` | Modelos e treinamento de ML |
| 🔌 `devops` | Infraestrutura e implantação |
| 🛡️ `testando-segurança` | Práticas de teste e segurança |
| 📖 `documentação` | Geração e gerenciamento de documentação |
| 🎬 `content-media` | Criação de conteúdo e mídia |
| 💬 `comunicação` | Ferramentas de comunicação e fluxos de trabalho |
| ❓ `sem categoria` | Padrão quando nenhuma correspondência é encontrada |

> Rótulos legados como `workflow`, `architecture`, `infrastructure`, `security` e `testing` são automaticamente normalizados através do mapeamento de alias.---

## 📝 Body Structure

Um corpo de habilidades bem escrito segue esta hierarquia:

### 📌 Visão geral (obrigatório)
2 a 3 frases sobre**o que**a habilidade faz e**por que**ela existe.

### 🎯 Quando usar (obrigatório)
Lista com marcadores de**cenários específicos**onde esta habilidade se aplica.

### 📋 Instruções básicas (obrigatórias)
O**processo passo a passo**que o agente deve seguir. Seja explícito. Seja específico. Os agentes trabalham melhor com instruções claras e inequívocas.

### 💡 Exemplos (recomendado)
Prompts concretos, blocos de código ou resultados esperados.**Quanto mais específico, melhor.**

### ✅ Melhores Práticas (Recomendado)
Use ✅ Do / ❌ Don't format para digitalização rápida.

### 🔧 Solução de problemas (opcional)
Problemas comuns e suas soluções.

### 🔗 Habilidades relacionadas (opcional)
Referências cruzadas a competências complementares.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Focado em**um fluxo de trabalho ou domínio específico**
- 📌 As instruções são**claras o suficiente para uma IA**seguir sem interpretação humana
- 💡 Inclui**exemplos concretos**com comportamento esperado
- 🛡️ Tem orientação adequada de**tratamento de erros**
- 📊 Produz metadados saudáveis: categoria canônica, maturidade L2+, qualidade 70+
- 🧰 Envia um pacote de suporte reutilizável, não apenas em prosa, de preferência em `referências/`, `scripts/`, `exemplos/` e `agentes/` quando apropriado

Para padrões de pontuação mais fortes que levam as habilidades às faixas mais altas, consulte [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Conselhos genéricos que podem ser aplicados a qualquer coisa
- 🤷 Instruções vagas como "escreva um bom código"
- 🚫 Sem exemplos ou blocos de código
- ⚠️ Campos frontmatter ausentes
- 📉 Baixo índice de qualidade (abaixo de 50)