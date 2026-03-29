# 📗 Usage Guide (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Todo lo que necesita para invocar habilidades, ejecutar servicios y operar el tiempo de ejecución de Omni Skills.**

Para conocer los flujos de trabajo operativos completos, consulte el [🔧 System Runbook](../operaciones/RUNBOOK.md).
Para obtener el mapa completo de comandos del usuario final, consulte la [🧭 Guía del usuario de CLI](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Estado | Detalles |
|:-------|:--------|
| ✅**Disponible ahora**| 32 habilidades publicadas en diseño, arquitectura, depuración, documentación, OSS, seguridad, DevOps, ingeniería de inteligencia artificial, datos, herramientas y flujos de trabajo de aprendizaje automático |
| 📦**Paquetes**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` y `oss-maintainer` están totalmente respaldados hoy |
| 🔌**Alcance de MCP**| 7 clientes con capacidad de instalación, 16 clientes con capacidad de configuración, 33 objetivos de configuración de primera clase, 19 perfiles de configuración |
| 🤖**Durabilidad A2A**| Durabilidad local de memoria, JSON o SQLite, reanudación de reinicio, ejecutor de procesos opcional y coordinación arrendada opcional para trabajadores compartidos |---

## 🖥️ Invocation by Client

| Cliente | Cómo invocar | Ruta de habilidades |
|:-------|:-------------|:------------|
| 🔵**Código Claude**| `>> /skill-name ayúdame...` | `~/.claude/skills/` |
| 🟡**Géminis CLI**| `Utilice @ nombre-habilidad para...` | `~/.gemini/skills/` |
| 🔴**Códice CLI**| `Utilice @ nombre-habilidad para...` | `~/.codex/skills/` |
| 🟢**Kiro**| Carga automática de habilidades bajo demanda | `~/.kiro/skills/` |
| 🟣**Antigravedad**| `Utilice @ nombre-habilidad para...` | `~/.gemini/antigravity/skills/` |
| 🔵**Cursor**| `@skill-name` en el chat | `~/.cursor/skills/` |
| ⚪**Código abierto**| `ejecución de código abierto @ nombre-habilidad` | `.opencode/skills/` |
| ⬛**Copiloto**| Pegar el contenido de la habilidad manualmente | N/A |

Clientes como Continuar, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline y Kilo Code utilizan principalmente el flujo `config-mcp` en lugar de un directorio de habilidades.---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

>**📌 Notas:**
> - En una terminal interactiva, `npx omni-skills` ahora abre un flujo de instalación guiado
> - `npx omni-skills ui` abre el shell visual Ink con acciones de instalación, descubrimiento y lanzamiento de servicios
> - el shell visual conserva las instalaciones recientes, los lanzamientos de servicios recientes, los favoritos y los ajustes preestablecidos con nombre en `~/.omni-skills/state/ui-state.json`
> - Fuera de un TTY, la instalación completa sigue siendo la opción predeterminada cuando no se proporciona ningún selector
> - `--skill` instala solo las habilidades publicadas seleccionadas
> - `--bundle` expande el paquete e instala los miembros publicados declarados en el paquete seleccionado
> - `find` admite más de 12 indicadores de filtro: `calidad`, `mejores_prácticas`, `skill_level`, `seguridad`, `categoría`, `herramienta`, `riesgo` y más
> - `config-mcp` es la ruta correcta para productos compatibles con MCP que no tienen un directorio de habilidades de primera clase---

## 🔌 Runtime Commands

La CLI es una herramienta de operaciones unificadas, no solo un instalador.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

El shell visual admite:

- instalación guiada con cliente conocido o selección de ruta personalizada
- buscar y luego instalar sin memorizar banderas
- vista previa guiada de configuración del cliente MCP y flujos de escritura
- Inicio guiado por MCP, API y A2A
- instalaciones recientes y relanzamientos de servicios
- ajustes preestablecidos de instalación y servicio guardados
- habilidades y paquetes favoritos### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # | Consejo |
|:--|:----|
| 1️⃣ | Haga referencia a la habilidad por su nombre en su mensaje |
| 2️⃣ | Proporcionar el artefacto, código o contexto de diseño exacto que el agente necesita |
| 3️⃣ | Prefiera `--skill` para una instalación mínima |
| 4️⃣ | Utilice `doctor` y `smoke` antes de depurar problemas de empaquetado o de tiempo de ejecución |
| 5️⃣ | Utilice paquetes como instalaciones de dominio seleccionadas ahora que los siete paquetes iniciales cuentan con respaldo completo |
| 6️⃣ | Utilice `find --install --yes` para descubrimiento + instalación en un solo flujo |
| 7️⃣ | Consulte el [runbook](../operaciones/RUNBOOK.md) para conocer las variables de entorno de autenticación, límites de velocidad, firma y verificación |