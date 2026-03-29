# 🧭 Omni Skills CLI User Guide (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**La superficie CLI pública completa enviada por `omni-skills`.**

Utilice esta guía cuando desee:

| Gol | Área de mando |
|:-----|:-------------|
| 📥 Instalar habilidades o paquetes | [Flujos de instalación](#3️⃣-flujos-de instalación) |
| 🔎 Busca en el catálogo | [Descubrimiento de catálogo](#4️⃣-descubrimiento-de-catalogo) |
| 🔌 Configurar clientes MCP | [Configuración del cliente MCP](#5️⃣-mcp-client-config) |
| 🖥️ Inicie servicios MCP, API o A2A | [Servidor MCP](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Utilice el terminal visual | [Concha visual](#9️⃣-concha-visual) |
| 🧪 Ejecutar diagnóstico o verificación previa | [Diagnóstico](#🔟-diagnóstico-y-verificación-previa) |---

## 1️⃣ Install and Entry Modes

Instalar con `npx`:```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Contexto | Qué pasa |
|:--------|:------------|
| 🖥️ TTY + sin argumentos | Abre el flujo de**instalación guiada**|
| ⚙️ Sin TTY + sin argumentos | Instalación no interactiva en `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Marca**Cáscara visual de tinta**|
| 📝 `npx omni-skills ui --text` | Readline**respaldo de texto**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Comando | Descripción |
|:--------|:-----------|
| `ui` | 🎨 Centro de terminales visuales |
| `buscar [consulta]` | 🔎 Descubrimiento del catálogo |
| `recategorizar` | 🏷️ Gestión de taxonomía |
| `instalar [banderas]` | 📥 Instalación de habilidad/paquete |
| `config-mcp` | 🔌 Configuración del cliente MCP |
| `mcp <stdio\|corriente\|sse>` | 🔌 Modos de servidor MCP |
| `api` | 🌐 API de catálogo |
| `a2a` | 🤖 Tiempo de ejecución A2A |
| `humo` | 🧪 Verificación previa del lanzamiento |
| `comprobación de publicación` | 📦 Consulta de publicación del paquete |
| `médico` | 🩺 Diagnóstico ambiental |
| `ayuda` | ❓ Referencia de comando |---

## 3️⃣ Install Flows

### Inicio Rápido

```bash
npx omni-skills
npx omni-skills install --guided
```

> El flujo guiado le permite elegir:**cliente de destino**→**paquete o habilidad**→**ruta personalizada**→**vista previa antes de la ejecución**### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| Bandera | Cliente |
|:-----|:-------|
| `--antigravedad` | 🟣 Antigravedad *(predeterminado)* |
| `--claude` | 🟢 Código Claude |
| `--cursor` | 🔵Cursor |
| `--códice` | 🔴 CLI del Códice |
| `--géminis` | 🟡 Géminis CLI |
| `--kiro` | 🟠Kiro |
| `--código abierto` | ⚪ Código abierto |

> Destino de instalación predeterminado (no interactivo): `~/.gemini/antigravity/skills`---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| Bandera | Propósito |
|:-----|:--------|
| `--categoría` | Filtrar por categoría de taxonomía |
| `--herramienta` | Filtrar por herramienta compatible |
| `--riesgo` | Filtrar por nivel de riesgo |
| `--ordenar` | Ordenar resultados (por ejemplo, "calidad") |
| `--orden` | Orden de clasificación |
| `--calidad mínima` | Puntuación de calidad mínima |
| `--min-mejores-practicas` | Puntuación mínima de mejores prácticas |
| `--nivel mínimo` | Nivel mínimo de madurez |
| `--min-seguridad` | Puntuación mínima de seguridad |
| `--estado-de-validación` | Filtrar por estado de validación |
| `--estado-de-seguridad` | Filtrar por estado de seguridad |---

## 5️⃣ MCP Client Config

Utilice `config-mcp` para obtener una vista previa o escribir la configuración de MCP compatible con el cliente.### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<detalles>
<summary>🔌 <strong>Superficie de cliente con capacidad de configuración</strong></summary>

| Cliente | Objetivos |
|:-------|:--------|
| Claudio | Configuraciones y destinos de escritorio |
| Cursores | Usuario y espacio de trabajo |
| Códice | Configuración TOML |
| Géminis | Usuario y espacio de trabajo |
| Antigravedad | Configuración de usuario |
| Código abierto | Usuario y espacio de trabajo |
| Clina | Objetivo de primera clase |
| CLI del copiloto de GitHub | Usuario y repositorio |
| Código kilo | Usuario, proyecto y espacio de trabajo |
| kiro | Usuario y espacio de trabajo |
| Zed | Espacio de trabajo |
| Código VS | Usuario, espacio de trabajo y contenedor de desarrollo |
| Continuar | Espacio de trabajo YAML |
| junio | Proyecto y usuario |
| Windsurf | Configuración de usuario |</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

>**Sidecar local**agrega: detección de clientes, vista previa de instalación, flujos de instalación/eliminación y escritura de configuración de MCP.---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Ruta | Propósito |
|:------|:--------|
| `GET /salud` | Control de salud |
| `OBTENER /openapi.json` | Especificaciones de OpenAPI |
| `OBTENER /v1/habilidades` | Listar todas las habilidades |
| `OBTENER /v1/buscar` | Buscar en el catálogo |
| `OBTENER /v1/skills/:id/archives` | Listar archivos para una habilidad |
| `GET /v1/skills/:id/descargar/archivo?format=zip` | Descargar archivo de habilidades |
| `GET /v1/skills/:id/descargar/archivo/sumas de comprobación` | Descargar sumas de comprobación |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Característica | Estado |
|:--------|:-------|
| 🔎 Descubrimiento basado en tareas | ✅ |
| 📋 Traspaso del plan de instalación | ✅ |
| 🔄 Encuestas | ✅ |
| 📡 Transmisión | ✅ |
| ❌ Cancelación | ✅ |
| 🔔 Configuración de notificaciones push | ✅ |
| 💾 Persistencia | Memoria, JSON y SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### Funcionalidades

| Característica | Descripción |
|:--------|:-----------|
| 🧭 Instalación guiada | Elija cliente o ruta personalizada |
| 🔎 Buscar + instalar | No es necesario memorizar la bandera |
| 🔌 Configuración MCP | Vista previa y escritura de flujos |
| 🖥️ Lanzamiento del servicio | Inicio guiado por MCP, API y A2A |
| 🕐 Recientes | Instalaciones recientes y relanzamientos de servicios |
| ⭐ Favoritos | Habilidades y paquetes guardados |
| 💾 Preajustes | Ajustes preestablecidos de instalación y servicio con nombre |

>**Ruta del estado:**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Inspecciona: estado del repositorio, estado de instalación local, disponibilidad del tiempo de ejecución y problemas ambientales.### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Valida: compilación, pruebas, salida del paquete, inicio del servicio, cobertura del escáner y empaquetado de lanzamiento.---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯Persona | Comando | Propósito |
|:-----------|:--------|:--------|
| 🆕 Nuevo usuario | `npx omni-habilidades` | Instalación guiada por primera vez |
| 🔧 Operador | `npx omni-skills config-mcp --list-targets` | Configurar MCP local |
| 🔧 Operador | `npx omni-skills mcp stream --local` | Iniciar sidecar local |
| 📦 Mantenedor | `npx omni-skills humo` | Validar una versión |
| 🔍 Usuario avanzado | `npx omni-skills encuentra seguridad --sort calidad --min-quality 95` | Encuentra la mejor habilidad primero |---

## 📖 Related Documents

| Médico | Qué cubre |
|:----|:--------------|
| 🚀 [Comenzando](./GETTING-STARTED.md) | Instale y verifique en menos de 2 minutos |
| 📗 [Guía de uso](./USAGE.md) | Todos los comandos, patrones y modos de CLI |
| 📦 [Paquetes](./BUNDLES.md) | Colecciones de habilidades seleccionadas |
| 🔧 [Runbook del sistema](../operaciones/RUNBOOK.md) | Referencia operativa |
| 🔌 [Sidecar MCP local](../specs/LOCAL-MCP-SIDECAR.md) | Herramientas del sistema de archivos y escritura de configuración |