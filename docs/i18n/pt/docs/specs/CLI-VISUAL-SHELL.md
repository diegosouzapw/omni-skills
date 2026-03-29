# 🖥️ CLI Visual Shell Specification (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Contrato comportamental para a UI do terminal baseado em Ink exposto por `omni-skills ui`.**---

## 1. Scope

O shell visual é uma superfície de produto guiada sobre a CLI existente e o mecanismo de instalação.

Não substitui:

- uso de CLI baseado em sinalizador especializado
- `tools/bin/install.js`
- o fluxo de instalação de texto guiado
- Comportamento de tempo de execução API, MCP ou A2A

Ele define:

- o comportamento de `omni-skills ui`
- o contrato substituto para `omni-skills ui --text`
- estado local e persistência predefinida
- visualizações guiadas de lançamento de serviços
- repetibilidade para instalações recentes e execuções de serviço---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` lança o shell visual baseado em Ink.

O shell visual é a principal experiência de terminal não especializado para:

- instalar fluxos
- primeira descoberta e instalação do catálogo
- inicialização do MCP
- inicialização da API
- Inicialização A2A
- médico e transferência de fumaça### 2.2 Text Fallback

`omni-skills ui --text` inicia a interface de fallback baseada em readline.

Isso continua útil quando:

- um terminal não pode renderizar o shell mais rico corretamente
- o comportamento do modo bruto é restrito
- é preferível um substituto mínimo de texto### 2.3 Handoff Rule

O shell visual não reimplementa tempos de execução de serviço ou gravações de instalação diretamente.

Após a visualização e confirmação, ele sai de forma limpa e entrega a execução ao ponto de entrada CLI existente com os argumentos e variáveis ​​de ambiente equivalentes.---

## 3. Home Screen Contract

A tela inicial deve expor:

- instalar habilidades
- encontrar e instalar
- repetir instalações recentes quando presentes
- execute predefinições de instalação salvas quando presentes
- iniciar um serviço
- repetir serviços recentes quando presentes
- execute predefinições de serviço salvas quando presentes
- médico
- fumaça
- saída

A tela inicial também deve aparecer:

- disponibilidade atual do pacote publicado
- contagens de estado local para recentes, predefinições e favoritos---

## 4. Install Flow Contract

O fluxo de instalação do shell visual deve oferecer suporte a:

- seleção de alvo de cliente conhecido
- seleção de caminho personalizado
- instalação completa da biblioteca
- instalação com uma habilidade
- instalação de um pacote
- pesquise e instale
- visualizar antes de escrever
- salvamento predefinido
- habilidade favorita ou alternância de pacote

A visualização deve mostrar:

- rótulo de destino resolvido
- caminho resolvido
- instalar escopo
- habilidade ou pacote selecionado quando aplicável
- comando CLI equivalente---

## 5. Service Flow Contract

O shell visual deve orientar a inicialização para:### 5.1 MCP

- transporte: `stdio`, `stream`, `sse`
- modo: `somente leitura` ou `local`
- configuração de host/porta para transportes de rede
- visualização explícita do comando### 5.2 API

- anfitrião
- porto
- perfil básico ou endurecido
- portador reforçado ou autenticação de chave API
- parâmetros de limite de taxa reforçados
- ativação do log de auditoria
- visualização explícita do comando### 5.3 A2A

- anfitrião
- porto
- tipo de armazenamento: `memory`, `json`, `sqlite`
- armazenar caminho para modos duráveis
- executor: `inline`, `process`
- modo SQLite habilitado para fila
- intervalo de pesquisa e duração da locação para modo de locação compartilhada
- visualização explícita do comando---

## 6. Local State Contract

O shell visual persiste no estado somente local em:```text
~/.omni-skills/state/ui-state.json
```

O estado atualmente inclui:

- instalações recentes
- lançamentos recentes de serviços
- predefinições de instalação nomeadas
- predefinições de serviço nomeadas
- habilidades favoritas
- pacotes favoritos

O shell deve suportar:

- reproduzindo instalações recentes
- reproduzindo lançamentos de serviços recentes
- reutilizando predefinições de instalação nomeadas
- reutilizando predefinições de serviço nomeadas---

## 7. Compatibility Contract

A concha visual é aditiva.

Esses fluxos devem permanecer válidos e estáveis:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `instalação npx omni-skills --guided`
- `npx omni-skills encontrar figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

O shell visual nunca deve forçar-se a seguir caminhos de comando especializados explícitos.---

## 8. Safety Contract

O shell visual deve tornar o estado e escrever explícitos.

Deve:

- visualizar instalações antes da transferência de gravação
- visualizar comandos de inicialização do serviço antes da execução
- mantenha o material secreto fora das visualizações de comandos em texto simples, quando for prático
- persiste o estado apenas localmente
- preservar o comportamento CLI não interativo fora do shell visual