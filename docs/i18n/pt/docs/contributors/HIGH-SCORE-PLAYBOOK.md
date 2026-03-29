# 🏆 High-Score Skill Playbook (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**O que um Omni Skills `SKILL.md` precisa na prática para atingir altas pontuações de maturidade, práticas recomendadas, qualidade e segurança.**---

## 🎯 Purpose

Este guia explica como o classificador do repositório realmente recompensa uma habilidade.

Use-o quando quiser:

- crie uma nova habilidade que chegue às faixas de maior pontuação
- melhorar uma habilidade existente que está presa em “bom” ou baixo “excelente”
- entender por que uma habilidade com formatação decente ainda não está sendo pontuada como um ativo operacional excepcional

Este é o complemento voltado para o colaborador para:

- [Barra de qualidade](QUALITY-BAR.md)
- [Anatomia da habilidade](SKILL-ANATOMY.md)
- [Classificação de habilidades](../specs/SKILL-CLASSIFICATION.md)

Referência atual para o catálogo ativo:

- 32 habilidades publicadas
- spread de qualidade atual: `94, 95, 96, 97, 100`
- spread atual das melhores práticas: `98, 99, 100`
- topo de linha atual: `omni-fiigma` com qualidade `100/100` e melhores práticas `100/100`---

## 🧱 What High Scores Really Mean

O classificador**não**recompensa apenas descontos consideráveis.

Habilidades de alta pontuação são habilidades que são:

-**detectável**: a descrição diz claramente o que a habilidade faz e quando usá-la
-**operacional**: a habilidade inclui scripts locais, referências e exemplos executáveis
-**diagnóstico**: ajuda o agente a se recuperar quando algo dá errado
-**específico**: concentra-se em um fluxo de trabalho, não em conselhos amplos
-**seguro**: evita padrões arriscados e fornece saída limpa do scanner

Na prática, as habilidades mais fortes se comportam mais como um**pequeno kit de fluxo de trabalho**do que como uma simples nota de desconto.---

## 📋 Score Targets

Use estes destinos ao criar:

| Dimensão | Alvo Forte | Alvo Excepcional |
|:----------|:-------------|:----------------------|
| 🎯Maturidade | `L3` | `L3` com múltiplos recursos de suporte |
| 📋 Melhores Práticas | `90+` | `96+` |
| ⭐ Qualidade | `85+` | `90+` |
| 🛡️ Segurança | `95+` | `95+` com zero descobertas |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Seu frontmatter deve tornar a habilidade fácil de classificar e descobrir:

- `name` corresponde exatamente ao diretório
- `descrição` explica**o que**e**quando**
- `categoria`, `tags`, `ferramentas`, `complexidade`, `risco`, `fonte`, `autor` e datas estão todos presentes

Boa forma de descrição:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Formato de descrição incorreto:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

As habilidades mais fortes incluem consistentemente estas seções:

- `## Visão geral`
- `## Quando usar esta habilidade`
- `## Fluxo de trabalho`
- `## Exemplos`
- `## Melhores Práticas`
- `## Solução de problemas`
- `## Recursos Adicionais`

Se um deles estiver faltando, a pontuação ainda pode ser boa, mas fica mais difícil parecer excepcional.---

### 3. Runnable Local Support

As habilidades de maior pontuação geralmente incluem:

- `referências/checklist.md`
- um ou mais scripts auxiliares em `scripts/`
- pelo menos um exemplo trabalhado em `examples/`
- `agents/openai.yaml` quando a habilidade é destinada à invocação direta do agente
- links diretos de `SKILL.md` para esses arquivos locais

Isso é importante porque o classificador trata uma habilidade com**material de suporte agrupado**como mais acionável do que aquela que apenas aponta para fora.

Mínimo recomendado:```text
skills/<skill>/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── examples/
│   └── example.md
├── references/
│   └── checklist.md
└── scripts/
    └── render_<artifact>.py
```

---

### 4. Examples That Actually Help

Exemplos de pontuação alta são:

- concreto
- digitado com uma cerca real, como `bash` ou `python`
- vinculado a um script local ou comando repetível
- representante do fluxo de trabalho

Bom:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Fraco:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

O marcador recompensa a solução de problemas que ajuda um agente a se recuperar, e não apenas a reconhecer um problema.

Formato preferido:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Isso é mais forte do que uma nota vaga como:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

O classificador agora distingue entre uma habilidade meramente completa e outra genuinamente profunda.

Sinais que ajudam:

- vários exemplos concretos
- vários casos de solução de problemas
- orientação de habilidades relacionadas
- pacotes de referência mais ricos
- uma seção `## Workflow` visível com etapas numeradas que o marcador pode contar diretamente
- pelo menos uma tabela operacional ou mapa de execução onde esclarece o fluxo de trabalho
- mais de um diretório de suporte ou tipo de ativo
- seções de fluxo de trabalho com etapas suficientes para orientar a execução
- ativos de decisão, como listas de verificação, rubricas, matrizes, pacotes ou manuais
- maior diversidade de pacotes de suporte em `references/`, `scripts/`, `agents/`, `examples/` ou `assets/`
- arquivos de suporte reutilizáveis suficientes para parecer um kit, nem um único auxiliar colocado ao lado da redução
- mais de um único arquivo auxiliar quando o fluxo de trabalho é complexo o suficiente para justificar um pacote de suporte
- profundidade corporal suficiente para cobrir compensações e modos de falha
- orientação operacional mais densa, porque o marcador agora distingue a formatação refinada da profundidade do fluxo de trabalho genuinamente reutilizável

Sinais que**não**ajudam muito:

- repetir a mesma instrução com palavras diferentes
- texto de preenchimento genérico
- adicionar títulos sem adicionar substância abaixo deles---

## 🧪 Fast Checklist Before You Commit

Use esta lista de verificação antes de executar a validação:

- a descrição diz**o que**e**quando**
- a habilidade está focada em um fluxo de trabalho
- `## Workflow` existe e contém etapas numeradas ou com marcadores
- existe pelo menos um exemplo executável
- `references/`, `scripts/` e, idealmente, `examples/` estão vinculados a `SKILL.md`
- `agents/openai.yaml` existe quando a habilidade se destina à invocação direta em clientes agentes
- a solução de problemas usa `Sintomas` e `Solução`
- a habilidade pode ser razoavelmente classificada como `L3`
- nenhum comando arriscado ou caminhos suspeitos estão presentes

Então execute:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- a descrição está correta, mas muito genérica
- a marcação tem seções, mas não tem profundidade operacional
- os exemplos não apontam para ajudantes locais
- a solução de problemas existe, mas não é diagnóstica
- há poucas tags ou identificadores de ferramentas
- a habilidade é segura e limpa, mas ainda muito superficial para ser considerada excepcional---

## 🧭 Practical Rule

Se sua habilidade parece:

- um**modelo**: pode passar
- um**guia**: pode ter uma boa pontuação
- um**pacote de fluxo de trabalho**: é muito mais provável que você obtenha uma pontuação no topo