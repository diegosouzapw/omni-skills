# 🧭 CLI UX Roadmap (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**O roteiro do produto para evoluir o Omni Skills de um instalador inicial para uma experiência de terminal guiada para usuários especialistas e não especialistas.**
> Escopo: pacote npm, experiência de instalação CLI, UI de terminal, fluxos de lançamento de serviço e integração visual.---

## 1. Problem Statement

A base atual do tempo de execução é sólida, mas a experiência inicial ainda é otimizada para usuários que já entendem:

- qual cliente eles desejam atingir
- qual seletor de instalação eles desejam usar
- como traduzir metas em `--skill`, `--bundle` ou `find`
- quando eles precisam de instalação somente CLI versus serviços MCP, API ou A2A

Hoje:

- O padrão `npx omni-skills` é Antigravidade
- isso é tecnicamente válido e compatível com versões anteriores
- mas não é ideal para usuários iniciantes ou operadores menos técnicos

A CLI já possui um modo interativo básico, mas ainda está mais próximo de um utilitário de desenvolvedor do que de uma superfície de produto guiada.

Este roteiro define o caminho para uma UX pública mais forte sem quebrar a atual interface baseada em sinalizadores.---

## 1.1 Delivery Status

O roteiro agora está amplamente implementado no estado atual do repositório.

Concluído:

- Fase 1: Seleção guiada do ponto de entrada
- Fase 2: Assistente de instalação guiada
- Fase 3: Terminal visual
- Fase 4: Centro de Serviços Visuais
- Fase 5: Perfis salvos e repetibilidade
- Fase 6: Endurecimento, Testes e Documentação---

## 2. Goals

- Preservar os fluxos de trabalho CLI especializados atuais
- Torne o ponto de entrada sem argumentos seguro e compreensível para usuários iniciantes
- Substitua padrões silenciosos em contextos interativos por seleção guiada
- Suporte a clientes de IA conhecidos e caminhos de instalação personalizados arbitrários
- Transforme a instalação, a descoberta e a inicialização do serviço em uma jornada de usuário coerente
- Forneça uma IU de terminal visual que pareça um produto, não apenas um script
- Mantenha o mecanismo de instalação, o catálogo e o tempo de execução do serviço reutilizáveis na interface do usuário---

## 3. Non-Goals

- Substituindo a CLI baseada em flag atual
- Removendo a Antigravidade como alvo padrão suportado
- Envio de uma UI da web como modo de entrega principal
- Refatoração dos próprios protocolos API, MCP ou A2A como parte deste trabalho de UX
- Substituindo a criação de `SKILL.md` por um painel de administração baseado em banco de dados---

## 4. Design Principles

### 4.1 Backward Compatibility First

Esses comandos devem continuar funcionando exatamente como funcionam hoje:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills encontrar figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Sessão de terminal interativa sem argumentos: experiência guiada aberta
- Invocação não interativa sem argumentos: preserva o comportamento padrão da instalação atual
- Comandos e sinalizadores explícitos sempre vencem a inferência da UI### 4.3 Reuse One Engine Across Modes

O seguinte deve compartilhar a mesma lógica interna:

- sinalizar primeiro CLI
- CLI em modo de texto guiado
- UI do terminal visual

Isso significa que a camada UX não deve possuir lógica de negócios. Deve orquestrar ações reutilizáveis.### 4.4 Preview Before Write

Todos os fluxos guiados que causam gravações devem exibir:

- alvo resolvido
- caminho resolvido
- habilidades ou pacotes selecionados
- comando CLI equivalente
- prompt de confirmação### 4.5 Visual Does Not Mean Implicit

Mesmo na UI mais rica, o sistema ainda deve tornar explícitos o estado e as ações:

- para onde vai a instalação
- o que será escrito
- qual transporte ou porto um serviço utilizará
- se um fluxo é somente leitura ou com capacidade de gravação local---

## 5. User Personas

### 5.1 Expert CLI User

Necessidades:

- comandos rápidos
- sem avisos forçados
- sinalizadores estáveis
- capacidade de script### 5.2 Guided Product User

Necessidades:

- escolhas claras
- nenhuma suposição de que a antigravidade é desejada
- suporte para instalações de caminho personalizado
- visualização de instalação compreensível
- distinção visível entre ações de instalação e tempo de execução do servidor### 5.3 Operator / Platform User

Necessidades:

- capacidade de lançar MCP, API e A2A visualmente
- padrões sensatos
- ajuste opcional de portas, transporte, persistência, modo executor, autenticação e modo local---

## 6. Target UX Model

O produto deve expor três camadas:### 6.1 Expert Mode

Comandos diretos e sinalizadores.

Exemplos:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Acionado quando:

- o usuário executa `npx omni-skills` em um TTY sem argumentos
- o usuário executa `npx omni-skills install` sem seletores concretos
- o usuário opta explicitamente pelo modo guiado

O fluxo de instalação guiada deve percorrer:

1. cliente alvo ou caminho personalizado
2. tipo de instalação
3. seleção de habilidade ou pacote
4. visualização
5. confirmação
6. execução
7. próximos passos### 6.3 Visual Operations Hub

Acionado por:

- `npx omni-skills ui`

Esta deve se tornar a “tela inicial” para usuários e operadores não especialistas.

Ações principais:

- instalar habilidades
- descobrir habilidades
- iniciar o MCP
- iniciar API
- iniciar A2A
- corre doutor
- executar verificações de fumaça---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Resultado:

- `npx omni-skills` em TTY não assume mais antigravidade silenciosamente
- os usuários são solicitados a escolher um cliente ou caminho personalizado

Requisitos:

- preservar o comportamento de instalação padrão não TTY
- adicionar seletor de alvo
- suporte para captura de caminho personalizado### Phase 2: Guided Install Wizard

Resultado:

- a instalação se torna um fluxo totalmente guiado

Requisitos:

- seleção do modo de instalação:
  - biblioteca completa
  - uma habilidade
  - um pacote
  - pesquise e instale
- instalar visualização
- renderização de comando equivalente
- confirmação e execução### Phase 3: Visual Terminal Shell

Resultado:

- a interface de texto básica atual se torna um aplicativo de terminal de marca

Requisitos:

- layout mais rico
- marca e logotipo do projeto
- melhor stepper e cartões
- navegação orientada por teclado
- Implementação do terminal React via Ink### Phase 4: Visual Service Hub

Resultado:

- MCP, API e A2A podem ser iniciados a partir da UI visual

Requisitos:

- fluxo MCP guiado
- fluxo de API guiado
- fluxo A2A guiado
- modo visível e visualizações de configuração### Phase 5: Saved Profiles and Repeatability

Resultado:

- predefinições comuns de instalação ou serviço podem ser reutilizadas

Requisitos:

- lembre-se de alvos recentes
- predefinições de serviço salvas
- comandos recentes
- pacotes ou habilidades favoritas### Phase 6: Hardening, Tests, and Documentation

Resultado:

- a UX se torna uma interface pública mantida, não uma conveniência ad hoc

Requisitos:

- cobertura de fumaça
- testes de regressão
- atualizações de documentos
- orientação do operador
- revisão de compatibilidade de pacotes---

## 8. Proposed Command Model

### Stable Commands

- `omni-habilidades`
- `instalação omni-skills`
- `encontrar omni-habilidades`
- `ui-habilidades omni`
- `omni-skills mcp`
- `API omni-skills`
- `omni-habilidades a2a`
- `médico omni-habilidades`
- `fumaça omni-habilidades`### Recommended Behavior

| Invocação | Comportamento |
|:-----------|:---------|
| `omni-skills` em TTY, sem argumentos | Entrada de instalação guiada |
| `omni-skills` em não-TTY, sem argumentos | Instalação padrão atual do Antigravity |
| `omni-skills install` em TTY, sem seletores | Assistente de instalação guiada |
| `instalação omni-skills --guided` | Forçar fluxo de instalação guiada |
| `omni-skills ui` | Abra o hub de operações visuais |
| sinalizadores explícitos | Execute diretamente sem desviar para o fluxo guiado |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Opções:

- Código Claude
- Cursor
- CLI Gêmeos
- Codex CLI
-Kiro
- Antigravidade
- Código aberto
- Caminho personalizado

Saída:

- destino conhecido selecionado OU caminho do sistema de arquivos personalizado### Step 2: Choose Install Type

Opções:

- biblioteca completa
- uma habilidade publicada
- um pacote
- pesquise e instale

Saída:

- instalar escopo### Step 3: Resolve Selection

Dependendo do tipo de instalação:

- biblioteca completa: sem seletor adicional
- habilidade: liste ou escolha uma habilidade
- pacote: liste ou escolha um pacote
- pesquisa: solicita consulta, mostra habilidades e pacotes correspondentes### Step 4: Preview

Exibição:

- alvo selecionado
- caminho resolvido
- habilidade ou pacote selecionado
- comando CLI equivalente
- se o fluxo é seletivo ou de instalação completa### Step 5: Confirm

O usuário confirma:

- sim → executar
- não → abortar ou voltar### Step 6: Result

Exibição:

- sucesso/fracasso
- caminho de destino
- sugestão de próximo passo---

## 10. Information Architecture for the Visual Operations Hub

O hub de operações deve expor:### 10.1 Install

- fluxo de instalação guiado
- pesquisa de habilidade ou pacote
- caminho personalizado### 10.2 Discover

- pesquisa de catálogo
- filtros
- visualizar metadados
- instalar transferência### 10.3 MCP

Opções:

- transporte: estúdio, stream, sse
- modo local ligado/desligado
- anfitrião
- porto### 10.4 API

Opções:

- anfitrião
- porto
- autenticação opcional
- limite de taxa opcional### 10.5 A2A

Opções:

- anfitrião
- porto
- tipo de armazenamento: memória, json, sqlite
- executor: embutido, processo
- opções de locação quando a fila sqlite está habilitada### 10.6 Diagnostics

- médico
- fumaça---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

As misturas `tools/bin/cli.js` atuais:

- análise de comando
- apresentação
- prompts interativos
- orquestração de ação
- inicialização de serviço

A nova estrutura deve mover a lógica reutilizável para:

- `ferramentas/lib/cli-actions/`
- `ferramentas/lib/install-flow/`
- `ferramentas/lib/service-flow/`
- `ferramentas/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` deve permanecer o backend com capacidade de gravação.

A UI guiada deve chamar o back-end do instalador existente em vez de duplicar a lógica de instalação.### 11.3 Keep Find/Search Reusable

O assistente de instalação guiada deve reutilizar o mesmo núcleo de catálogo e lógica de pesquisa CLI que já está ativando:

- `encontrar`
- instalar visualizações
- resolução de pacote### 11.4 Prepare for Ink Without Forcing It Early

A primeira entrega pode permanecer em prompts em modo texto.

Mas a arquitetura deve manter uma costura clara para que o fluxo do texto possa ser renderizado posteriormente via Ink.---

## 12. Risks

### 12.1 Breaking Existing Automation

Mitigação:

- abra apenas a UI guiada automaticamente em TTY
- preservar o padrão atual em não-TTY
- preservar fluxos de sinalização explícitos### 12.2 Letting UI Own Business Logic

Mitigação:

- mover a orquestração para módulos de ação reutilizáveis
- mantenha a lógica de inicialização do instalador e do serviço abaixo da camada da UI### 12.3 Ink Migration Too Early

Mitigação:

- primeiro envie o fluxo guiado na pilha de terminais do nó atual
- então migrar para o Ink quando a semântica do fluxo estiver estável### 12.4 Incomplete Service UX

Mitigação:

- envie o assistente de instalação primeiro
- em seguida, lançamento do serviço guiado por camada---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` no TTY não é mais instalado imediatamente
- o usuário pode escolher o cliente alvo ou caminho personalizado
- a invocação não-TTY no-arg ainda funciona como antes### Phase 2

- a instalação guiada oferece suporte a biblioteca completa, habilidade, pacote e pesquisa e instalação
- a visualização é sempre mostrada antes da gravação
- o equivalente do comando é exibido### Phase 3

- Existe interface de usuário de terminal de marca
- a IU é mais estruturada visualmente do que menus de linha de leitura simples
- a navegação é amigável ao teclado### Phase 4

- os usuários podem iniciar MCP, API e A2A a partir do hub visual
- as principais opções de tempo de execução são configuráveis de forma guiada### Phase 5

- preferências recentes ou salvas são reutilizáveis
- fluxos repetidos recebem menos solicitações### Phase 6

- a cobertura de fumaça reflete os novos pontos de entrada UX
- os documentos descrevem o modo guiado e o comportamento do assistente de serviço---

## 14. Execution Order

Este roteiro deve ser implementado nesta ordem:

1. Seleção guiada de ponto de entrada
2. Assistente de instalação guiada
3. Invólucro do terminal visual
4. Centro de serviços visuais
5. Perfis salvos e repetibilidade
6. Endurecimento, testes e polimento de documentos

O trabalho de implementação deve ler o arquivo de tarefa relevante antes de iniciar cada tarefa para que o trabalho da CLI permaneça alinhado com o plano e não se desvie.