# 🚀 Getting Started (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Instale habilidades, verifique a configuração e invoque sua primeira habilidade de IA em menos de 2 minutos.**---

## 📊 Current Catalog Status

| Métrica | Valor |
|:-------|:------|
| Habilidades publicadas |**32**em 15 categorias ativas, incluindo arquitetura, design, segurança, DevOps, engenharia de IA e muito mais |
| Pacotes definidos |**7**(todos totalmente respaldados por habilidades publicadas) |
| Clientes com capacidade de instalação |**7**(Código Claude, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravidade, OpenCode) |
| Clientes com capacidade de configuração MCP |**16**em 33 destinos de configuração MCP de primeira classe |---

## 📦 Step 1 — Install

### Início Rápido

```bash
npx omni-skills
```

Em um terminal interativo, isso agora abre o instalador guiado em vez de assumir silenciosamente um cliente.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Isso abre o hub do terminal de marca para instalação, descoberta, MCP, API e inicialização A2A.### 🎯 Default Install (Antigravity Outside TTY)

Fora de um TTY, o instalador sem argumentos ainda usa como padrão `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
npx omni-skills --codex --bundle ai-engineer
```

> ✅ Os pacotes iniciais agora são totalmente suportados, incluindo `devops` e `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Verifique se as habilidades chegaram ao lugar certo:```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

Ou use os diagnósticos integrados:```bash
npx omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

Fornece aos agentes ferramentas de sistema de arquivos para detectar clientes, instalar/remover habilidades e escrever configurações de MCP:```bash
npx omni-skills mcp stream --local
```

Também é possível configurar o MCP para clientes que não são destinos de instalação de habilidades:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Expõe o catálogo de habilidades como uma API HTTP somente leitura:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Descoberta, recomendação, planejamento de instalação, pesquisa e streaming entre agentes:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Uma habilidade é um manual de redução estruturado (`SKILL.md`) que fornece a um agente de IA:

| Componente | Finalidade |
|:----------|:--------|
| 📋**Princípio**| Metadados legíveis por máquina (nome, categoria, tags, ferramentas, risco) |
| 📝**Corpo**| Instruções, etapas, proteções e exemplos específicos da tarefa |
| 📚**Referências**| Documentos de apoio que o agente pode consultar durante a execução |
| 🎨**Ativos**| Ícones, imagens ou outros recursos empacotados |---

## ➡️ Next Steps

| Documento | O que você aprenderá |
|:----|:------------------|
| 🧭 [Guia do usuário CLI](CLI-USER-GUIDE.md) | Referência completa de comandos para instalação, tempo de execução, configuração e diagnóstico |
| 📗 [Guia de uso](USAGE.md) | Todos os comandos CLI, padrões de prompt e modos de tempo de execução |
| 📦 [Pacotes](BUNDLES.md) | Coleções de habilidades selecionadas e sua disponibilidade |
| 📚 [Catálogo](../CATALOG.md) | Catálogo gerado automaticamente de habilidades publicadas |
| 📖 [Centro de Documentação](../README.md) | Mapa completo da documentação |
| 🔧 [Runbook do sistema](../operações/RUNBOOK.md) | Referência operacional |