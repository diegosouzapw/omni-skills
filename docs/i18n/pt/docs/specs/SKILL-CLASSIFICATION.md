# 📊 Skill Classification and Metadata (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**O classificador local que pontua cada habilidade durante a validação e construção, gerando perfis legíveis por máquina para todo o catálogo.**---

## 📊 Status

| Saída | Gerado |
|:-------|:----------|
| ✅ Raiz `metadata.json` | Resumo de todo o repositório |
| ✅ Por habilidade `skills/<skill>/metadata.json` | Classificações individuais |
| ✅ Catálogo `dist/catalog.json` | Catálogo publicado com partituras |
| ✅ Manifestos `dist/manifests/<skill>.json` | Dados legíveis por máquina por habilidade |

Gerado por: `python3 tools/scripts/validate_skills.py`

Instantâneo do repositório atual:

- 32 habilidades publicadas
- pontuação média de qualidade `96,3`
- pontuação média de melhores práticas `98,7`
- pontuação média de segurança `95,0`
- spread de qualidade atual `94, 95, 96, 97, 100`
- spread de melhores práticas atuais `98, 99, 100`---

## 🎯 Purpose

O classificador fornece a cada habilidade um**perfil consistente legível por máquina**antes de chegar ao catálogo. Ele executa quatro trabalhos:

1. 📋**Analisar**— frontmatter YAML e corpo de remarcação
2. 🏷️**Normalizar**— Rótulos de categoria para taxonomia canônica
3. 📊**Classificar**— Pontuação de maturidade, melhores práticas, qualidade e segurança
4. 📁**Emit**— Artefatos de metadados consumidos por scripts de construção, documentos e CI---

## 🏷️ Canonical Taxonomy

**18 categorias canônicas**com mapeamento automático de alias:

| Categoria | Domínio | Aliases comuns |
|:--------|:-------|:---------------|
| 💻 `desenvolvimento` | Desenvolvimento geral de software | `codificação`, `programação` |
| 🎨 `frontend` | Front-end e IU | `ui`, `webdesign` |
| 🔧 `back-end` | Back-end e APIs | `servidor`, `api` |
| 🌐 `fullstack-web` | Web ponta a ponta | `web`, `pilha completa` |
| 🛠️ `ferramentas` | Ferramentas para desenvolvedores | `utilitários` |
| ⚙️ `automação cli` | CLI e automação | `scripting`, `fluxo de trabalho` |
| 📊 `negócios` | Estratégia empresarial | `estratégia` |
| 📐 `produto` | Gestão de produtos | `pm` |
| 🎯 `design` | Design visual e UX | `ux` |
| 🤖 `dados-ai` | Aplicativos de dados e IA | `dados`, `analítica` |
| 🧠 `agentes-ai` | Padrões de agente de IA | `agentes` |
| 📈 `aprendizado de máquina` | Modelos e treinamento de ML | `ml` |
| 🔌 `devops` | Infraestrutura | `infraestrutura`, `nuvem` |
| 🛡️ `testando-segurança` | Teste e segurança | `testing`, `segurança`, `qa` |
| 📖 `documentação` | Gestão de documentos | `docs` |
| 🎬 `content-media` | Criação de conteúdo | `mídia`, `conteúdo` |
| 💬 `comunicação` | Ferramentas de comunicação | `bate-papo` |
| ❓ `sem categoria` | Reserva padrão | — |

> Rótulos legados como `workflow`, `architecture`, `infraestrutura` são automaticamente normalizados através do mapeamento de alias.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Nível | Etiqueta | Critérios |
|:------|:------|:--------|
|**L1**| `metadados` | Frontmatter mais corpo mínimo |
|**L2**| `instruções` | Instruções escritas substanciais |
|**L3**| `recursos` | Scripts agrupados ou recursos empacotados mais ricos |

Sinais adicionais rastreados: `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

A heurística avalia:

| Sinal | O que verifica |
|:----------|:---------------|
| 📛 Qualidade de lesma | formatação do campo `nome` |
| 📝 Descrição | Clareza, extensão, informatividade |
| 📐 Estrutura | Seções e hierarquia do documento |
| 💡 Exemplos | Cercas de código e blocos de exemplo |
| 🔗 Referências | `referências/`, `scripts/` locais vinculados e auxiliares de pacote de suporte |
| 🧰 Operabilidade | Exemplos de scripts locais executáveis ​​e trechos concretos de fluxo de trabalho |
| 🧩 Profundidade do pacote de suporte | Várias famílias de suporte, arquivos reutilizáveis, metadados de agentes e ativos operacionais |
| 🩺 Solução de problemas | Pares explícitos de `Sintomas` e `Solução` |
| 📚 Cobertura | Seções `Quando usar`, `Práticas recomendadas`, `Solução de problemas` e `Recursos adicionais` |
| 🌐 Portabilidade | Redação independente de ferramentas |
| 📅 Frescura | Evitar datas codificadas |

**Nível atual**

| Nível | Faixa de pontuação |
|:-----|:-----------|
| `excelente` | 90-100 |
| `bom` | 70-89 |
| `justo` | 50-69 |
| `precisa de trabalho` | 0-49 |

O marcador é intencionalmente**semântico o suficiente para criar propagação**entre habilidades maduras. Uma habilidade com estrutura limpa pode pontuar bem, mas para atingir a faixa superior ela também precisa de sinais de profundidade como:

- vários exemplos, não apenas um
- vários casos de solução de problemas
- orientação de habilidades relacionadas
- pacotes de suporte local mais ricos
- mais de uma família de apoio além da prosa simples, idealmente incluindo `agentes/` ou `ativos/` onde acrescentam reutilização real
- uma seção dedicada `## Workflow` com etapas contáveis
- pelo menos uma pequena tabela operacional ou mapa de decisão quando melhorar a clareza da execução
- mais especificidade operacional do que um modelo simples
- profundidade de fluxo de trabalho mais clara e ativos de suporte à decisão
- profundidade do pacote de suporte que vai além de um arquivo `references/` e um script vinculado
- arquivos de suporte reutilizáveis suficientes para parecer um kit de fluxo de trabalho, não um complemento de uma única nota
- densidade operacional suficiente para separar um contorno polido de um kit de fluxo de trabalho reutilizável

Isso significa que uma habilidade estruturalmente completa ainda pode chegar a 90 em vez de 100 se seu pacote de suporte for mais restrito, seus ativos de decisão forem mais escassos ou sua densidade operacional for menor do que as habilidades mais fortes do catálogo.---

### ⭐ Quality Score (0-100)

A heurística combina:

| Sinal | Peso |
|:-------|:-------|
| 📝 Completude corporal | Médio-alto |
| 📋 Precisão da descrição | Médio |
| 📊 Completude de metadados | Médio |
| 📅 Tempo para retorno (`date_updated`) | Médio |
| 📦 Recursos empacotados | Médio |
| 📋 Contribuição de melhores práticas | Médio |
| 🧠 Profundidade semântica | Médio-alto |
| 🛠️ Profundidade operacional | Médio |
| 📚 Riqueza do pacote de suporte | Médio |

**Níveis de qualidade:**

| Nível | Faixa de pontuação |
|:-----|:-----------|
| 💎 `platina` | 80+ |
| 🥇 `ouro` | 65-79 |
| 🥈 `prata` | 50-64 |
| 🥉 `bronze` | 35-49 |
| 🌱 `iniciante` | 0-34 |---

### 🛡️ Security Score (0-100)

A camada de segurança combina:

| Scanner | Sempre ativado | O que faz |
|:--------|:---------------|:------------|
| 🔍**Estático**| ✅ Sim | Verifica SKILL.md, arquivos compactados e scripts |
| 🦠**ClamAV**| ⚙️ Opcional | Verificação de malware via `clamscan` |
| 🔒**VírusTotal**| ⚙️ Opcional | Pesquisa de hash (sem upload) |

**Famílias de regras de scanner estáticas:**
- 🎭 Padrões imediatos de injeção e exfiltração
- 💣 Comandos de shell destrutivos
- 🔑 Credenciais ou caminhos de sistema operacional suspeitos
- ⚠️ Primitivos de script arriscados (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Forma de saída de segurança:**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

| Seção | Campos |
|:--------|:-------|
| 🆔 Identidade | `id`, `slug`, `nome_display` |
| 🏷️ Taxonomia | `categoria_raw`, `categoria_canônica`, `categoria_inferida` |
| 📋 Autoria | tags, ferramentas, complexidade, risco, fonte, autor |
| 📅 Datas e caminhos | `date_added`, `date_updated`, caminhos |
| 📊 Recursos | Contadores de arquivos e referências |
| 📝 Sinais de conteúdo | Contagem de palavras, comprimento do corpo, sinalizadores estruturais |
| 🧠 Profundidade semântica | Etapas do fluxo de trabalho, exemplos, profundidade de solução de problemas, ativos de decisão, famílias de links de suporte |
| 🧩 Estrutura do pacote de suporte | Contagens de arquivos de suporte, famílias vinculadas, `agentes/`, `assets/` e exemplos reutilizáveis ​​|
| 🎯Maturidade | Sinalizadores de nível, rótulo, scripts/arquivos |
| 📋 Melhores práticas | Pontuação e nível |
| ⭐ Qualidade | Pontuação, nível e divisão semântica |
| 🛡️ Segurança | Pontuação, nível, status, descobertas |
| ✅ Validação | Status, erros, avisos |### Root (`metadata.json`)

| Seção | Campos |
|:--------|:-------|
| 📊 Resumo | Contagens, médias, distribuição de categorias |
| 🏷️ Taxonomia | Contagens de categorias |
| 🎯 Distribuição | Nível de habilidade, nível de qualidade, nível de segurança |
| ✅ Validação | Contagens de status |
| 📋 Lista de habilidades | Resumos compactos por habilidade |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

Isso configura o `git` para usar `.githooks/pre-commit`, que regenera metadados e artefatos de catálogo antes do commit e prepara os arquivos gerados automaticamente.