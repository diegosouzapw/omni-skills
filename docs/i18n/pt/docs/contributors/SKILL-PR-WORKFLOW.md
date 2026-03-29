# Skill PR Workflow (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Este é o fluxo de repositório canônico para solicitações pull que adicionam ou atualizam substancialmente uma ou mais habilidades nativas.

Use-o quando:

- adicionando uma nova habilidade em `skills/`
- aprofundar um pacote com novas habilidades de domínio
- envio de uma expansão maior do pacote de suporte
- validar um branch com o aprimorador privado antes que os mantenedores o fundam## Target Outcome

Uma forte habilidade nativa de relações públicas resulta em:

- uma habilidade nativa em `skills/`
- conteúdo suficiente para o validador público classificá-lo e indexá-lo
- passar na validação e testes públicos
- processamento automático de intensificador durante o PR
- um PR `skills_omni/` de acompanhamento quando derivativos aprimorados são publicados
- ingestão nativa preservada em seu idioma original quando necessário
- produção aprimorada com curadoria reescrita em inglês
- um fluxo unidirecional de nativo para curadoria que não alimenta `skills_omni/` de volta à ingestão do intensificador nativo## Enhancer Outcome States

O intensificador de PR público agora relata quatro estados visíveis para o mantenedor:

- `concluído`
  A derivada aprimorada foi gerada de forma limpa e é elegível para publicação complementar `skills_omni/`.
- `degradado`
  O intensificador foi concluído, mas usou um caminho alternativo ou produziu avisos. A revisão do mantenedor ainda é esperada antes de tratar o derivado como saudável.
- `bloqueado`
  A execução foi interrompida por problemas de infraestrutura ou validação, como uma falha de simulação do OmniRoute hospedado ou uma falha de validação de candidato que deveria impedir a publicação.
- `falhou`
  O aprimorador atingiu um erro de tempo de execução inesperado e precisa de investigação do mantenedor.## Recommended Branch Shape

Crie um branch focado:```bash
git checkout -b feat/<short-skill-theme>
```

Exemplos:

- `feat/incident-observability-evals`
- `feat/devops-skill-pack`
- `feat/pacote de habilidades de segurança`## Native Intake Rules

A superfície de entrada pública é intencionalmente permissiva.

Mínimo:```text
skills/<skill>/
└── SKILL.md
```

Recomendado, mas não é mais necessário para ingestão:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

A contribuição nativa pode ser aproximada, incompleta ou fora do padrão normal do pacote de suporte. Isso é deliberado. `habilidades/` é a superfície de entrada nativa, não a superfície derivada com curadoria.

Política linguística:

- a entrada nativa em `skills/` pode ser escrita em qualquer idioma
- o aprimorador mantém o instantâneo nativo conforme enviado para proveniência
- o derivado curado em `skills_omni/` deve sempre ser escrito em inglês

A barra editorial mais rigorosa agora se aplica a:

- os metadados gerados e verificações de segurança
- a revisão do intensificador privado
- o derivado com curadoria de acompanhamento em `skills_omni/`## Authoring Sequence

1. Crie `habilidades/<habilidade>/SKILL.md`.
2. Adicione frontmatter se puder, mas frontmatter ausente ou incompleto não bloqueia mais a entrada nativa por si só.
3. Adicione `agents/`, `references/`, `examples/` e `scripts/` quando já os tiver.
4. Atualize `data/bundles.json` se a habilidade aprofundar um pacote existente.
5. Abra o PR. A automação do repositório agora faz o resto.## Validation Sequence

Os contribuidores podem executar esta sequência exata antes de abrir o PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Se a alteração também afetar o tempo de execução ou o comportamento do empacotamento, execute também:```bash
npm run smoke
```

## What Happens Automatically During the PR

Quando um PR abre ou sincroniza e toca apenas nos arquivos de entrada de habilidades nativas em `skills/` mais o opcional `data/bundles.json`, o repositório público agora aciona o aprimorador privado automaticamente.

Fluxo automatizado atual:

1. O fluxo de trabalho público `Validar habilidades` é executado no PR e verifica a validação, construção, artefatos gerados e testes.
2. O fluxo de trabalho público `Enhance PR Skills` começa em paralelo e processa as habilidades nativas alteradas, uma por uma, no modo `live`.
3. O aprimorador lê a habilidade nativa de `skills/`, pesquisa as melhores práticas atuais e escreve um candidato aprimorado revisado no espaço de trabalho privado.
4. O aprimorador mantém o instantâneo de entrada upstream em seu idioma original quando necessário, mas reescreve a saída selecionada em inglês.
5. O intensificador posta o progresso de volta ao PR de origem.
6. O aprimorador atualiza o comentário de status do PR após cada habilidade processada com os totais do lote e o estado mais recente.
7. Quando termina, ele materializa a derivada aprimorada em `skills_omni/` e abre ou atualiza um PR complementar no repositório público apenas para resultados `concluídos` e `degradados`.
8. Depois que o PR é mesclado em `main`, o pesquisador privado com reconhecimento de repositório reprocessa quaisquer habilidades nativas alteradas, atualiza `workspace/enhanced/skills/<skill>/` e mantém a linha de base privada aprimorada alinhada com a fonte nativa pública mais recente.
9. Após a mesclagem, o fluxo de trabalho de lançamento público altera a versão do pacote npm, regenera os artefatos do catálogo, publica um lançamento e marca a nova versão automaticamente.

Limite de taxa:

- o intensificador de RP atualmente processa**1 habilidade por minuto**
- um PR com 40 novas habilidades nativas pode, portanto, permanecer na fila do aprimorador por cerca de 40 minutos
- o PR mostra esse trabalho como uma execução de IC em andamento, além de um comentário de progresso que avança habilidade por habilidade

O contribuidor não precisa executar o aprimorador manualmente.## No-Loop Rule For `skills_omni/`

A superfície selecionada é intencionalmente unidirecional:

- a entrada nativa entra através de `skills/`
- o aprimorador privado analisa essa entrada nativa
- a produção selecionada é proposta em `skills_omni/`
- `skills_omni/` nunca mais é tratado como consumo nativo
- atualizações nativas posteriores ainda entram novamente por meio de `skills/` e substituem a linha de base aprimorada privada após o reprocessamento

O repositório agora impõe esse limite:

- PRs públicos diretos que modificam `skills_omni/` são rejeitados
- apenas PRs complementares de autoria de automação da família de ramos `skills-omni/pr-*` são aceitos lá
- PRs mistos que tentam alterar `skills/` e `skills_omni/` de uma só vez são rejeitados## Automatic Versioning After Merge

As mesclagens de habilidades com `main` agora acionam o fluxo de trabalho de liberação do repositório automaticamente.

Política de versão do pacote atual:

- incrementos de patch em `+1` para cada mesclagem qualificada
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- depois de `.10`, o pacote passa para o próximo menor e reinicia o patch
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Caminhos atuais do gatilho de lançamento:

- `habilidades/**`
- `habilidades_omni/**`
- `dados/bundles.json`

Esse trabalho de liberação automática:

1. calcula a próxima versão do pacote a partir de `package.json`
2. colisões `package.json` e `package-lock.json`
3. regenera `metadata.json`, `skills_index.json`, `dist/` e `docs/CATALOG.md`
4. executa o pipeline de verificação de liberação estrito
5. envia a versão de volta para `main`
6. cria uma tag Git para a nova versão
7. publica artefatos npm e GitHub Release

Observação importante sobre a implementação:

- O GitHub registra apenas um novo arquivo de fluxo de trabalho como um fluxo de trabalho de repositório ativo depois que esse arquivo atinge a ramificação padrão.
- Até que `Enhance PR Skills` chegue a `main`, os contribuidores poderão ler o processo documentado, mas o GitHub ainda não executará esse fluxo de trabalho automaticamente em PRs públicos.
- Depois que o fluxo de trabalho é mesclado em `main`, o comportamento descrito acima se torna o caminho de entrada padrão para futuros PRs de habilidades nativas.## Native vs Enhanced

Este repositório agora tem duas superfícies distintas:

- `habilidades/`
  Ingestão nativa. Isso preserva a contribuição original conforme enviada.
- `habilidades_omni/`
  Saída derivada omni-aprimorada proposta por automação e mantida pela Omni Skills Team.

Regras de atribuição para `skills_omni/`:

- a derivada aprimorada torna-se Omni-mantida
- o contribuidor original e a habilidade nativa original permanecem creditados
- cada diretório aprimorado mantém um arquivo `ATTRIBUTION.md` com o caminho upstream, PR, autor e contexto de origem
- cada diretório aprimorado é apenas uma saída selecionada e não deve ser reenviado para o caminho de entrada do aprimorador nativo
- espera-se que cada diretório aprimorado tenha saída no idioma inglês, mesmo quando a fonte nativa upstream não foi## Manual Maintainer Commands

A automação cobre a ingestão normal de PR, mas os mantenedores ainda podem executar o intensificador privado manualmente quando necessário.

Lote contra uma diferença de ramificação:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Revisão de habilidade única:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Resultados esperados do melhorador por habilidade:

- `espaço de trabalho/entrada/original/<run-id>/<skill>/`
- `espaço de trabalho/candidatos aprimorados/<run-id>/<skill>/`
- `espaço de trabalho/reports/<run-id>/research.json`
- `espaço de trabalho/reports/<run-id>/rewrite.json`
- `espaço de trabalho/reports/<run-id>/validation.json`
- `espaço de trabalho/reports/<run-id>/score-delta.json`
- `espaço de trabalho/reports/<run-id>/review.md`
- `espaço de trabalho/reports/<run-id>/research-prompt.md`
- `espaço de trabalho/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

O órgão de relações públicas deve declarar:

- quais habilidades foram adicionadas ou atualizadas
- quais pacotes ou fluxos de trabalho eles aprofundam
- qual validação foi executada
- se o intensificador automatizado foi executado
- se ele abriu ou atualizou um PR complementar `skills_omni/`
- quaisquer notas excepcionais do mantenedor sobre atribuição ou limpeza de acompanhamento## Reviewer Checklist

- a ingestão nativa é legítima e não maliciosa
- metadados e manifestos gerados foram atualizados
- as atualizações do pacote são intencionais
- validação pública e resultados de construção são verdes
- o comentário do status do aprimorador corresponde às habilidades reais alteradas e ao estado do resultado final
- qualquer PR complementar `skills_omni/` preserva a atribuição corretamente## Example PR Scope

Um exemplo forte de RP pode adicionar um conjunto temático como:

- uma habilidade de observabilidade ou DevOps
- um incidente ou habilidade de segurança
- uma avaliação de IA ou habilidade de solicitação

Isso é grande o suficiente para exercitar o pontuador, o aprimorador automático, o fluxo de publicação `skills_omni/`, os pacotes e o modelo de atribuição sem transformar o PR em uma reescrita completa do catálogo.