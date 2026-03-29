# 🧩 CLI Guided Installer Specification (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Contrato comportamental para a experiência de instalação guiada no Omni Skills CLI.**---

## 1. Scope

Esta especificação define o comportamento da instalação guiada que se baseia no back-end do instalador existente.

Não substitui:

- `tools/bin/install.js`
- fluxos atuais de sinalizadores de especialistas
- manifestos de instalação seletiva

Ele define:

- como o modo guiado é inserido
- como os destinos são escolhidos
- como o escopo de instalação é escolhido
- quais informações de visualização devem ser exibidas
- como funcionam a confirmação e a execução---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

A CLI deverá entrar no modo de instalação guiada quando:

- o usuário executa `omni-skills` sem argumentos em um TTY
- o usuário executa `omni-skills install` sem seletores em um TTY### 2.2 Forced Guided Entry

A CLI também deve suportar o modo guiado explícito por meio de uma opção dedicada, como:

- `instalação omni-skills --guided`

Este modo deve funcionar mesmo quando a entrada é canalizada e não está conectada a um TTY, desde que a entrada padrão esteja disponível.### 2.3 Non-Interactive Safety Rule

Quando invocado sem um TTY e sem modo guiado solicitado explicitamente:

- preservar o comportamento padrão atual
- não bloqueie a espera por avisos---

## 3. Destination Model

A instalação guiada deve oferecer suporte a duas classes de destino:### 3.1 Known Client Target

Cada alvo conhecido resolve para:

- etiqueta legível por humanos
- ID da ferramenta interna
- instalar sinalizador
- caminho resolvido

Alvos conhecidos necessários:

- Código Claude
- Cursor
- CLI Gêmeos
- Codex CLI
-Kiro
- Antigravidade
- Código aberto### 3.2 Custom Path Target

O modo de caminho personalizado deve:

- solicitar um caminho
- resolver `~`
- normalizar para caminho absoluto
- mostra o caminho resolvido na visualização---

## 4. Install Scope Model

A instalação guiada deve suportar:### 4.1 Full Library

Equivalente à instalação atual sem `--skill` ou `--bundle`.### 4.2 Single Skill

Permite que o usuário selecione uma habilidade publicada.### 4.3 Single Bundle

Permite que o usuário selecione um pacote selecionado e resolva os membros publicados.### 4.4 Search Then Install

Permite ao usuário:

- insira uma consulta de pesquisa
- inspecionar resultados
- escolha uma habilidade ou pacote
- continue na visualização da instalação---

## 5. Preview Contract

Antes da execução, a instalação guiada deve exibir:

- etiqueta de destino
- caminho de destino
- instalar escopo
- habilidade ou pacote selecionado, se aplicável
- comando CLI equivalente

Opcional, mas recomendado:

- resumo de metadados de habilidades selecionadas
- resumo de disponibilidade do pacote---

## 6. Execution Contract

Após confirmação:

- delegados de instalação guiados para o back-end do instalador existente
- ele não reimplementa a gravação do arquivo sozinho

A visualização do comando e os argumentos reais do instalador delegado devem corresponder exatamente.---

## 7. Result Contract

Após a execução bem-sucedida, o resultado da instalação guiada deverá mostrar:

- indicador de sucesso
- caminho de destino final
- comando que foi executado
- próxima ação recomendada

Exemplo de próximas ações:

- use a habilidade no cliente selecionado
- execute `doutor`
- execute `mcp stream --local`---

## 8. Compatibility Contract

O seguinte permanece válido e inalterado:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bundle pilha completa`
- `omni-skills --path ./skills`
- `omni-skills encontrar figma --tool cursor --install --yes`

O modo guiado adiciona comportamento. Ele não remove o comportamento existente.