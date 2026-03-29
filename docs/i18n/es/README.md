# 🧠 Omni Skills (Español)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**El catálogo de habilidades que se instala solo.**<br/>
CLI · API · MCP · A2A: todo desde un único comando `npx`.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Instalar en 1 min](#-installation) · [🛠️ Elige tu herramienta](#-elige-tu-herramienta) · [📖 Guía CLI](docs/users/CLI-USER-GUIDE.md) · [📦 Paquetes](docs/users/BUNDLES.md) · [🔌 Runtime](#-runtime-surfaces) · [💡 Por qué Omni Habilidades](#-por qué-omni-habilidades)</div>

---

<div align="center">

### Resumen

</div>

| | Métrica | Valor |
|:--|:-------|:------|
| 📦 |**Habilidades publicadas**| `32` en 15 categorías activas |
| 🎯 |**Paquetes**| `7` paquetes seleccionados totalmente respaldados |
| 🖥️ |**Instalar Clientes**| `7` asistentes de codificación de IA con capacidad de instalación |
| 🔌 |**Clientes MCP**| `16` Clientes con capacidad de configuración MCP |
| 🔐 |**Resultado seleccionado**| `32` derivados ingleses mejorados en `skills_omni/` |
| 📋 |**Versión actual**| `v0.1.2` |---

## Inicio Rápido

>**¿Buscó habilidades de codificación de IA, habilidades de Claude Code, habilidades de cursor, habilidades de Codex CLI, habilidades de Gemini CLI, habilidades de antigravedad o bibliotecas `SKILL.md` instalables?**
> Estás en el lugar correcto.### 1️⃣ What is this?

Omni Skills es un**catálogo de habilidades instalable y tiempo de ejecución**para asistentes de codificación de IA. En esencia, es un repositorio público de guías reutilizables `SKILL.md`, pero a diferencia de las colecciones de habilidades simples, el repositorio**es**la capa de distribución y tiempo de ejecución.

<detalles>
<summary>📋 <strong>Qué incluye</strong></summary>

| Componente | Descripción |
|:----------|:-----------|
| 🧠**Habilidades**| Guías seleccionadas basadas en `SKILL.md` para asistentes de IA |
| 📦**Manifiestos**| Manifiestos, paquetes y archivos JSON generados |
| 🧭**Instalación guiada**| Flujos de instalación de terminales visuales y TTY interactivos |
| 🌐**API de catálogo**| API HTTP de solo lectura para búsqueda, descubrimiento y descargas |
| 🔌**Servidor MCP**| Herramientas de descubrimiento, recomendación y configuración sensible al cliente |
| 🤖**Tiempo de ejecución A2A**| Orquestación de tareas de agente a agente |
| ✨**Tubería de mejora**| Private Enhancer publica derivados seleccionados en inglés en `skills_omni/` |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *"Utilice `@brainstorming` para planificar un MVP de SaaS."*
>
> 💬 *"Utilice `@api-design` para revisar este diseño de endpoint."*
>
> 💬 *"Utilice `@debugging` para aislar esta regresión."*### 5️⃣ Start with a bundle

| 🎯 Objetivo | Paquete | Comando |
|:---------|:-------|:--------|
| Ingeniería general | `esenciales` | `npx omni-habilidades --paquete esencial` |
| Entrega de producto + aplicación | `pila completa` | `npx omni-skills --bundle full-stack` |
| Sistemas de diseño | `diseño` | `npx omni-skills --diseño de paquete` |
| Revisión de seguridad | `seguridad` | `npx omni-skills --paquete de seguridad` |
| Infra y lanzamiento | `devops` | `npx omni-skills --bundle devops` |
| Solicitudes de Maestría en Derecho | `ai-ingeniero` | `npx omni-skills --bundle ai-engineer` |
| Mantenimiento de OSS | `oss-mantenedor` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Antes de comparar paquetes o elegir una ruta de instalación, es útil comprender estos cinco componentes básicos:

| Concepto | Lo que significa |
|:--------|:-------------|
| 🧠**Habilidades**| Guías reutilizables `SKILL.md` que le enseñan a un asistente cómo ejecutar bien un flujo de trabajo |
| 📦**Artefactos del catálogo**| JSON generado y resultados de archivo que permiten buscar, comparar, descargar e instalar |
| 🔌**Configuración MCP**| Configuración del lado del cliente para que los asistentes descubran Omni Skills a través de herramientas MCP |
| 🤖**Tiempo de ejecución A2A**| Orquestación de agente a agente para descubrimiento, recomendación y transferencia de planes de instalación |
| ✨**Salida seleccionada**| `skills_omni/` — la superficie mejorada con mantenimiento omnidireccional, separada de la entrada nativa aguas arriba |

>**📝 Política nativa/curada:**
> - `skills/` acepta entrada nativa en cualquier idioma
> - `skills_omni/` siempre está seleccionado y publicado en inglés
> - `skills_omni/` es una superficie unidireccional y no regresa a la ingesta nativa---

## 💡 Why Omni Skills

>**No sólo "otro repositorio con habilidades en carpetas".**
> Omni Skills tiene un contrato más sólido y una superficie de tiempo de ejecución más amplia.

| Si quieres… | 📁 Repositorio de habilidades típicas | ✨ Habilidades Omni |
|:-------------|:----------------------|:--------------|
| Instalar en un asistente real | Copia manual o script personalizado | `npx omni-skills`, instalación guiada, interfaz de usuario visual, `--skill` y `--bundle` selectivos |
| Buscar y comparar habilidades | Explorar rebajas manualmente | Catálogo generado, filtrado, planificación de paquetes, búsqueda, comparación y recomendación |
| Utilice los mismos datos en todas las herramientas | Lógica separada por herramienta | Manifiestos y catálogo compartidos para CLI, API, MCP y A2A |
| Configurar clientes MCP | Archivos de edición manual | `config-mcp`, vistas previas del sidecar local, recetas generadas y escrituras en la lista permitida |
| Liberaciones de confianza | Embalaje de mejor esfuerzo | Sumas de verificación, archivos firmados, verificación de escáner, lanzamiento de CI y verificación previa de publicación |
| Curar la ingesta comunitaria | Lo que sea que aterrice permanece como está | Ingesta nativa en `skills/`, derivados seleccionados en inglés en `skills_omni/` con atribución |---

## 🖥️ Compatibility and Invocation

Estas habilidades siguen el modelo `SKILL.md` y pueden usarse como un repositorio normal, pero el paquete también las instala y configura en una amplia superficie:

>**7**clientes con capacidad de instalación ·**16**clientes con capacidad de configuración MCP### 🎯 Install-Capable Clients

| Herramienta | Tipo | Ejemplo de invocación | Ruta de instalación |
|:-----|:-----|:-------------------|:-------------|
| 🟢**Código Claude**| CLI | `Utilice la lluvia de ideas para planificar una función` | `~/.claude/skills` |
| 🔵**Cursor**| IDE | `@brainstorming ayúdame a planificar una función` | `~/.cursor/skills` |
| 🟡**Géminis CLI**| CLI | `Utilice la lluvia de ideas para planificar una función` | `~/.gemini/skills` |
| 🔴**Códice CLI**| CLI | `Utilice la lluvia de ideas para planificar una función` | `~/.codex/skills` |
| 🟠**Kiro**| CLI/IDE | `Utilice la lluvia de ideas para planificar una función` | `~/.kiro/skills` |
| 🟣**Antigravedad**| IDE | `Utilice @brainstorming para planificar una función` | `~/.gemini/antigravity/skills` |
| ⚪**Código abierto**| CLI | `ejecución de código abierto @brainstorming` | `<espacio de trabajo>/.opencode/skills` |

<detalles>
<summary>🔌 <strong>Cobertura de configuración MCP más amplia (16 clientes)</strong></summary>

Estos destinos son parte de la superficie de configuración de MCP compatible, incluso cuando no son destinos de instalación para directorios de habilidades:

| Cliente o Superficie | Tipo de soporte | Notas |
|:------------------|:------------|:------|
| Configuración y escritorio de Claude | Configuración de MCP | Configuración, escritorio y flujos relacionados con proyectos |
| Código VS | Configuración de MCP | Destinos de usuario, espacio de trabajo, información privilegiada y contenedor de desarrollo |
| Géminis | Configuración de MCP | Configuración de usuario y espacio de trabajo |
| Clina | Configuración de MCP | Objetivo de configuración de primera clase |
| CLI del copiloto de GitHub | Configuración de MCP | Destinos de configuración de usuario y repositorio |
| Continuar | Configuración de MCP | Generación de YAML en el espacio de trabajo |
| Windsurf | Configuración de MCP | Destino de configuración de usuario |
| Zed | Configuración de MCP | Destino de configuración del espacio de trabajo |
| Ganso | Configuración de MCP | Destino de configuración del usuario con receta generada |
| Código kilo | Configuración de MCP | Destinos de usuario, proyecto y espacio de trabajo |
| junio | Configuración de MCP | Objetivos de configuración de proyecto y usuario |</details>

---

## Instalar

<tabla>
<tr>
<td ancho="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

| Herramienta | Instalar comando | Primer uso |
|:-----|:---------------|:----------|
| 🟢 Código Claude | `npx omni-habilidades --claude` | `Utilice la lluvia de ideas para planificar una función` |
| 🔵Cursor | `npx omni-habilidades --cursor` | `@brainstorming ayúdame a planificar una función` |
| 🟡 Géminis CLI | `npx omni-habilidades --gemini` | `Utilice la lluvia de ideas para planificar una función` |
| 🔴 CLI del Códice | `npx omni-habilidades --codex` | `Utilice la lluvia de ideas para planificar una función` |
| 🟣 Antigravedad | `npx omni-skills --antigravity` *(predeterminado)* | `Utilice @brainstorming para planificar una función` |
| 🟠Kiro | `npx omni-habilidades --kiro` | `Utilice la lluvia de ideas para planificar una función` |
| ⚪ Código abierto | `npx omni-skills --opencode` | `ejecución de código abierto @brainstorming` |
| 📂 Ruta personalizada | `npx omni-skills --path ./mis-skills` | Depende de su herramienta |

> 📖**¿No estás seguro de por dónde empezar?**
> - [🚀 Introducción](docs/users/GETTING-STARTED.md): instalación y verificación en menos de 2 minutos
> - [🧭 Guía del usuario de CLI](docs/users/CLI-USER-GUIDE.md) — referencia completa de comandos
> - [📗 Guía de uso](docs/users/USAGE.md) — indicaciones, patrones y modos de ejecución---

## 🔌 Runtime Surfaces

Omni Skills no es sólo una biblioteca de habilidades. Expone**cuatro superficies de tiempo de ejecución**que consumen el mismo catálogo generado:

| Superficie | Estado | Qué hace | Ejemplo |
|:--------|:------|:-------------|:--------|
| 🖥️**CLI**| ✅ Disponible | Buscar, instalar, diagnosticar, interfaz de usuario visual, servicios de arranque, comprobaciones de humo | `médico omni-habilidades npx` |
| 🌐**API de catálogo**| ✅ Disponible | Catálogo de solo lectura, búsqueda, paquetes, comparación, planes de instalación, descargas | `npx omni-skills api --puerto 3333` |
| 🔌**MCP**| ✅ Disponible | Descubrimiento, recomendación, vista previa de instalación, sidecar local, flujos de configuración | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅ Disponible | Ciclo de vida de tareas, transferencia, sondeo, streaming, cancelación, persistencia | `npx omni-skills a2a --puerto 3335` |

<detalles>
<summary>🖥️ <strong>Comandos de operador y shell visual</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<detalles>
<summary>🔌 <strong>Transportes y configuración de MCP</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

| Métrica | Contar |
|:-------|:------|
| 🧠 Habilidades publicadas |**32**|
| 📂 Categorías activas |**15**|
| 📦 Paquetes totalmente respaldados |**7**|
| ✨ Derivados curados |**32**en `skills_omni/` |### 📦 Bundle Availability

| Paquete | Habilidades | Miembros |
|:-------|:-------|:--------|
| 🧰 `esenciales` |**4/4**✅ | `encontrar-habilidades` · `lluvia de ideas` · `arquitectura` · `depuración` |
| 🌐 `pila completa` |**5/5**✅ | `diseño-frontend` · `diseño-api` · `diseño-base de datos` · `omni-figma` · `auth-flows` |
| 🎨 `diseño` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `accessibility-audit` · `design-token-governance` |
| 🛡️ `seguridad` |**4/4**✅ | `auditor-de-seguridad` · `escáner-de-vulnerabilidad` · `respuesta-a-incidente` · `modelado-de-amenazas` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `observability-review` · `release-engineering` |
| 🤖 `ai-ingeniero` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contratos` · `model-serving` |
| 🔧 `oss-mantenedor` |**4/4**✅ | `find-skills` · `create-pr` · `changelog` · `documentación` |### ✨ Native Intake → Curated Output

| Superficie | Propósito | Idioma |
|:--------|:--------|:---------|
| 📥 `habilidades/` | Ingesta nativa | Cualquier idioma |
| ✨ `skills_omni/` | Salida omnimantenida seleccionada | Siempre inglés |

>**ℹ️**Los cambios en las habilidades nativas son reprocesados ​​por el potenciador privado y actualizados en la línea de base seleccionada. Esto hace que `skills_omni/` sea una**superficie de catálogo mantenida**, no una segunda copia.---

## 🛡️ Security and Release Posture

> Omni Skills ofrece una historia de lanzamiento y verificación más sólida que un simple repositorio de rebajas.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<detalles>
<summary>📋 <strong>Qué valida el pipeline</strong></summary>

- ✅ Validación de habilidades y generación de metadatos.
- ✅ Herramientas de normalización y recategorización de taxonomía
- ✅ Generación de catálogos y archivos.
- ✅ Pruebas automatizadas
- ✅ Rutas de arranque API, MCP y A2A
- ✅ Verificación de archivos
- ✅ Paquete de verificación previa con `npm pack --dry-run`</details>

<detalles>
<summary>🔐 <strong>Postura de liberación</strong></summary>

| Controlar | Descripción |
|:--------|:-----------|
| 🔒 Sumas de comprobación SHA-256 | Manifiestos de suma de comprobación para todos los archivos |
| ✍️ Artefactos firmados | Firmas separadas en artefactos de lanzamiento |
| 🤖 Impulsado por CI | Verificación de lanzamiento en CI antes de la publicación |
| 🦠 Puertas del escáner | Flujo de lanzamiento controlado por ClamAV y VirusTotal |
| 📦 Lanzamiento de GitHub | Generación automatizada de versiones de GitHub |
| 📋 publicación npm | Solo desde archivo tar verificado |
| 🔄 Lanzamiento automático | Al calificar, la habilidad se fusiona con `principal` |

**La liberación automática se activa solo cuando cambia una combinación:**
- `habilidades/*/**`
- `habilidades_omni/*/**`
- `datos/paquetes.json`

Los cambios solo en documentos**no**activan la publicación del paquete.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Médico | Lo que aprenderás |
|:----|:-----------------|
| 🚀 [Comenzando](docs/users/GETTING-STARTED.md) | Instalar, verificar e invocar en menos de 2 minutos |
| 🧭 [Guía del usuario de CLI](docs/users/CLI-USER-GUIDE.md) | Referencia de comando completa y patrones del mundo real |
| 📗 [Guía de uso](docs/users/USAGE.md) | Comandos CLI, modos de instalación, tiempo de ejecución y configuración de MCP |
| 📦 [Paquetes](docs/users/BUNDLES.md) | Paquetes seleccionados y disponibilidad |
| 📚 [Catálogo](docs/CATALOG.md) | Catálogo generado automáticamente de habilidades publicadas |
| 🔧 [Runbook del sistema](docs/operaciones/RUNBOOK.md) | Construir, servir, proteger y solucionar problemas |### 🏗️ For Architects

| Médico | Lo que aprenderás |
|:----|:-----------------|
| 🗺️ [Hoja de ruta nativa del agente](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Evolución de la arquitectura y áreas restantes |
| 📐 [ADR-0001: Fundación del espacio de trabajo](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Decisión central monorepo |
| 🔬 [Análisis de base de código](docs/architecture/CODEBASE-ANALYSIS.md) | Composición del tiempo de ejecución y límites del sistema |
| 🌐 [API de catálogo](docs/specs/CATALOG-API.md) | Puntos finales HTTP, filtrado, gobernanza y descargas |
| 🧩 [Instalador guiado por CLI](docs/specs/CLI-GUIDED-INSTALLER.md) | Contrato comportamental para el instalador guiado |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Modelo de estado y caparazón visual de tinta |
| 🔌 [Sidecar MCP local](docs/specs/LOCAL-MCP-SIDECAR.md) | Herramientas del sistema de archivos y modelo de lista de permitidos |
| 📊 [Matriz de soporte al cliente](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Referencia completa de clientes y escritores |
| 🏷️ [Clasificación de habilidades](docs/specs/SKILL-CLASSIFICATION.md) | Taxonomía, puntuación y metadatos |
| 🛡️ [Validación de seguridad](docs/specs/SECURITY-VALIDATION.md) | Escáneres, archivos y firmas |
| 📋 [Manifiesto de habilidades](docs/specs/SKILL-MANIFEST.md) | Formato de manifiesto legible por máquina |### 🤝 For Contributors

| Médico | Lo que aprenderás |
|:----|:-----------------|
| 📝 [Guía contribuyente](CONTRIBUTING.md) | Flujo de trabajo del repositorio y expectativas de relaciones públicas |
| 🧾 [Flujo de trabajo de relaciones públicas de habilidades](docs/contributors/SKILL-PR-WORKFLOW.md) | Ingesta nativa, procesamiento de potenciadores, expectativas del revisor |
| 📄 [Plantilla de habilidades](docs/contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` con frontmatter y estructura |
| 🔬 [Anatomía de habilidades](docs/contributors/SKILL-ANATOMY.md) | Estructura y expectativas de calidad |
| ✅ [Barra de calidad](docs/contributors/QUALITY-BAR.md) | Criterios de aceptación |
| 🏆 [Libro de estrategias de puntuación alta](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Qué impulsa las puntuaciones altas |---

## 🗂️ Repository Layout

| Camino | Propósito |
|:-----|:--------|
| 📂 `habilidades/` | Habilidades de autor canónico y admisión nativa |
| ✨ `skills_omni/` | Derivados mejorados y mantenidos por Omni seleccionados |
| 📖 `docs/` | Documentación de usuario, colaborador, arquitectura, operaciones y especificaciones |
| 📦 `dist/` | Manifiestos, paquetes, catálogos y archivos generados |
| 📁 `datos/` | Definiciones de paquetes y datos de respaldo estáticos |
| 🧠 `paquetes/catalog-core/` | Tiempo de ejecución del catálogo compartido |
| 🌐 `paquetes/api-servidor/` | API HTTP de sólo lectura |
| 🔌 `paquetes/servidor-mcp/` | Servidor MCP y sidecar local |
| 🤖 `paquetes/servidor-a2a/` | Tiempo de ejecución A2A y orquestación de tareas |
| 🖥️ `herramientas/bin/` | Puntos de entrada CLI |
| 📚 `herramientas/lib/` | Instalador y ayudantes de UI |
| ⚙️ `herramientas/scripts/` | Scripts de validación, generación, lanzamiento y prueba |

>**ℹ️**`dist/` tiene una versión intencional porque los artefactos generados son parte del contrato de instalación, API, MCP, A2A, smoke y lanzamiento.---

## 🤝 Contributing

Omni Skills acepta la ingesta de habilidades nativas ascendentes en "habilidades/".

| Regla | Detalles |
|:-----|:--------|
| 📥 Ingesta nativa | Puede ser aproximado, escrito en cualquier idioma |
| ✨ Salida curada | `skills_omni/` reservado para derivados Omni creados por automatización |
| 🚫 Ediciones manuales | Se rechazan las ediciones manuales públicas de `skills_omni/` |
| 🔄 Reprocesamiento | El potenciador privado reprocesa los cambios nativos y actualiza la línea de base seleccionada |

> 📖**Comience con:**[Guía de contribución](CONTRIBUTING.md) · [Flujo de trabajo de relaciones públicas de habilidades](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Tipo | Licencia |
|:-----|:--------|
| 💻 Código y herramientas | [Licencia MIT](LICENCIA) |
| 📝 Documentación y contenido de habilidades | [CC BY 4.0](LICENCIA-CONTENIDO) |---

<div align="center">

**Hecho con 🧠 por el equipo Omni Skills**

[⭐ Destacar este repositorio](https://github.com/diegosouzapw/omni-skills) · [🐛 Informar un error](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Discusiones](https://github.com/diegosouzapw/omni-skills/discussions)</div>
