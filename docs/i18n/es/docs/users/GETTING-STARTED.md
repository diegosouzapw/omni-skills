# 🚀 Getting Started (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Instala habilidades, verifica la configuración e invoca tu primera habilidad de IA en menos de 2 minutos.**---

## 📊 Current Catalog Status

| Métrica | Valor |
|:-------|:------|
| Habilidades publicadas |**32**en 15 categorías activas que incluyen arquitectura, diseño, seguridad, DevOps, ingeniería de inteligencia artificial y más |
| Paquetes definidos |**7**(todo totalmente respaldado por habilidades publicadas) |
| Clientes con capacidad de instalación |**7**(Código Claude, Cursor, CLI Gemini, CLI Codex, Kiro, Antigravity, OpenCode) |
| Clientes con capacidad de configuración MCP |**16**en 33 objetivos de configuración MCP de primera clase |---

## 📦 Step 1 — Install

### Inicio Rápido

```bash
npx omni-skills
```

En una terminal interactiva, esto ahora abre el instalador guiado en lugar de asumir silenciosamente un cliente.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Esto abre el centro de terminal de marca para instalación, descubrimiento, MCP, API y inicio de A2A.### 🎯 Default Install (Antigravity Outside TTY)

Fuera de un TTY, el instalador sin argumentos todavía tiene por defecto `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Los paquetes iniciales ahora están completamente respaldados, incluidos `devops` y `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Comprueba que las habilidades llegaron al lugar correcto:```bash
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

O utilice los diagnósticos integrados:```bash
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

Proporciona a los agentes herramientas del sistema de archivos para detectar clientes, instalar/eliminar habilidades y escribir configuraciones de MCP:```bash
npx omni-skills mcp stream --local
```

También puede configurar MCP para clientes que no son destinos de instalación de habilidades:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Expone el catálogo de habilidades como una API HTTP de solo lectura:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Descubrimiento, recomendación, planificación de instalación, sondeo y transmisión de agente a agente:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Una habilidad es un manual de rebajas estructurado (`SKILL.md`) que le brinda a un agente de IA:

| Componente | Propósito |
|:----------|:--------|
| 📋**Antecedentes**| Metadatos legibles por máquina (nombre, categoría, etiquetas, herramientas, riesgo) |
| 📝**Cuerpo**| Instrucciones, pasos, barandillas y ejemplos específicos de tareas |
| 📚**Referencias**| Documentos de soporte que el agente puede consultar durante la ejecución |
| 🎨**Activos**| Iconos, imágenes u otros recursos empaquetados |---

## ➡️ Next Steps

| Médico | Lo que aprenderás |
|:----|:------------------|
| 🧭 [Guía del usuario de CLI](CLI-USER-GUIDE.md) | Referencia completa de comandos para instalación, tiempo de ejecución, configuración y diagnóstico |
| 📗 [Guía de uso](USAGE.md) | Todos los comandos CLI, patrones de avisos y modos de ejecución |
| 📦 [Paquetes](PAQUETES.md) | Colecciones de habilidades seleccionadas y su disponibilidad |
| 📚 [Catálogo](../CATALOG.md) | Catálogo generado automáticamente de habilidades publicadas |
| 📖 [Centro de documentación](../README.md) | Mapa de documentación completa |
| 🔧 [Runbook del sistema](../operaciones/RUNBOOK.md) | Referencia operativa |