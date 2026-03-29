# 📖 Omni Skills — Documentation Hub (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**La referencia central para usar, operar, ampliar y comprender la plataforma Omni Skills actual.**

Los archivos comunitarios estándar se encuentran en la raíz del repositorio:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

| Área | Estado | Detalles |
|:-----|:------|:--------|
| 🏗️**Tiempo de ejecución**| ✅ Actual | CLI unificada, Ink visual shell, API, MCP y A2A se envían desde el mismo paquete |
| 📦**Catálogo**| 📌 32 habilidades | 32 habilidades "L3" publicadas en 15 categorías de catálogo activas y 7 paquetes totalmente respaldados |
| 🎯**Instalar**| ✅ Actual | Instalación TTY guiada, `--skill` y `--bundle` selectivos, compatibilidad con rutas personalizadas e instalación basada en descubrimiento |
| 🌐**API**| ✅ Actual | API de registro de solo lectura con autenticación, tiempo de ejecución de administrador, limitación de velocidad, listas permitidas de CORS/IP, modo de mantenimiento y descargas |
| 🔌**MCP**| ✅ Actual | `stdio` · `stream` · `sse`, modo sidecar local, 7 clientes con capacidad de instalación, 16 clientes con capacidad de configuración, 33 destinos de configuración y 19 perfiles de configuración |
| 🤖**A2A**| ✅ Actual | Tiempo de ejecución local simple con durabilidad JSON/SQLite, reanudación de reinicio, transmisión SSE, cancelación, modo de ejecutor externo y coordinación arrendada opcional cuando se habilita explícitamente |
| 🛡️**Seguridad**| ✅ Actual | Escáner estático, ClamAV/VirusTotal opcional, artefactos de lanzamiento firmados, sumas de verificación de archivos y verificación del tiempo de lanzamiento |
| 📋**Clasificación**| ✅ Actual | Taxonomía canónica, madurez, difusión de calidad semántica, difusión de mejores prácticas y puntuación de seguridad |
| 📁**Archivos**| ✅ Actual | Archivos `.zip` y `.tar.gz` por habilidad con manifiestos de suma de comprobación SHA-256 |
| 🔐**Firma**| ✅ Actual | Firmas separadas aplicadas en las etiquetas de autorización; los flujos de instalación local consumen los mismos metadatos de manifiesto y suma de comprobación |
| 🧬**Flujo de admisión**| ✅ Actual | Las habilidades nativas aparecen bajo `skills/`; La automatización de relaciones públicas los revisa y propone derivados Omni-mejorados en `skills_omni/` |## 🔭 Current Project State

La pista fundamental ahora se encuentra en el estado de proyecto activo y la segunda ola de expansión de categoría ya está en el catálogo. El proyecto ahora debe leerse como una base de trabajo con futuras vías de expansión opcionales:

- la `v0.1.2` pública y la `v0.0.1` privada son el piso de lanzamiento estable actual
- el catálogo ahora cubre 32 habilidades publicadas en 15 categorías activas y 7 paquetes totalmente respaldados
- La entrada nativa y la salida seleccionada `skills_omni/` están operativas, incluida la entrada nativa multilingüe y la salida seleccionada solo en inglés.
- Las superficies de protocolo, la automatización de versiones y la automatización de mejoras privadas están en servicio, no en arranque.

La expansión futura sigue siendo planificada:

- profundizar en el "diseño", las "herramientas", la "ai de datos" y el "aprendizaje automático"
- evitar reabrir categorías inactivas que no sean de código nativo hasta que las pistas actuales de código nativo tengan mayor profundidad
- mantener intacta la ruta de revisión del piso de calidad y del mejorador mientras lo hace

Ese plan ahora se divide en:

- la primera ola de expansión completada en [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- la segunda ola de expansión completada en [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- y el trabajo pendiente prospectivo en [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Estas cuestiones de arquitectura ya no están “abiertas” en la práctica y ahora se tratan como decisiones de proyecto:

1.**La distribución se mantiene primero en el manifiesto más los archivos firmados**
   El manifiesto legible por máquina sigue siendo el contrato consumido por CLI, API, MCP y A2A. Los archivos firmados por habilidad son la superficie de descarga y lanzamiento que se encuentra encima de ese contrato.
2.**Los catálogos privados o premium deben reutilizar el mismo esquema de manifiesto**
   La autenticación y la política deben tener capas externas, no bifurcando la forma del manifiesto o del catálogo.
3.**La configuración de MCP debería converger en algunas familias de exportación canónicas**
   Omni Skills ahora estandariza alrededor de JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` y TOML `[mcp_servers]`, manteniendo escritores personalizados solo cuando los documentos oficiales del cliente requieren una estructura diferente.

Esas decisiones se alinean con la documentación oficial actual de MCP y del cliente, que incluye:

- Registro oficial de MCP y guía de soporte de extensión en `modelcontextprotocol.io`
- Documentos OpenAI Docs MCP y Codex CLI en `developers.openai.com` y `platform.openai.com`
- Extensión VS Code MCP y documentos del producto en `code.visualstudio.com`
- documentos de cliente para Claude Code, Cursor, Continuar, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman y JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Médico | Lo que aprenderás |
|:----|:------------------|
| 📘 [Comenzando](usuarios/GETTING-STARTED.md) | Instale, verifique e invoque su primera habilidad |
| 🧭 [Guía del usuario de CLI](usuarios/CLI-USER-GUIDE.md) | Referencia de comandos completa y patrones de uso de CLI en el mundo real |
| 📗 [Guía de uso](usuarios/USAGE.md) | Comandos CLI, modos de instalación, comandos de tiempo de ejecución y flujos de configuración de MCP |
| 📦 [Paquetes](usuarios/BUNDLES.md) | Paquetes seleccionados y su disponibilidad actual |
| 📚 [Catálogo](CATALOG.md) | Catálogo generado automáticamente de habilidades publicadas |
| 🔧 [Runbook del sistema](operaciones/RUNBOOK.md) | Construya, proporcione, proteja y solucione problemas del tiempo de ejecución |### 🏗️ If You Want to **Understand** the Runtime

| Médico | Lo que aprenderás |
|:----|:------------------|
| 🗺️ [Hoja de ruta nativa del agente](arquitectura/AGENT-NATIVE-ROADMAP.md) | Evolución de la arquitectura, decisiones cerradas y áreas de expansión restantes |
| 🧭 [Hoja de ruta CLI UX](arquitectura/CLI-UX-ROADMAP.md) | Plano histórico y forma actual del CLI guiado y visual |
| 📐 [ADR-0001: Fundación del espacio de trabajo](arquitectura/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Monorepo central y decisión de tiempo de ejecución compartido |
| 🔬 [Análisis de base de código](arquitectura/CODEBASE-ANALYSIS.md) | Composición actual del tiempo de ejecución, recuentos y límites del sistema |
| 🌐 [Superficie API del catálogo](specs/CATALOG-API.md) | Puntos finales HTTP, filtrado, gobernanza y descargas |
| 🧩 [Instalador guiado por CLI](specs/CLI-GUIDED-INSTALLER.md) | Contrato comportamental para el instalador guiado |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Ink visual shell, modelo de estado y centro de servicios |
| 🔌 [Sidecar MCP local](specs/LOCAL-MCP-SIDECAR.md) | Herramientas compatibles con el sistema de archivos, modelo de lista permitida y escritura de configuración |
| 🧭 [Matriz de soporte al cliente](specs/CLIENT-SUPPORT-MATRIX.md) | Clientes CLI e IDE compatibles, escritores, destinos manuales y referencias de origen |
| 📊 [Clasificación de habilidades](specs/SKILL-CLASSIFICATION.md) | Taxonomía, heurísticas de puntuación y artefactos de metadatos |
| 🛡️ [Validación de seguridad](specs/SECURITY-VALIDATION.md) | Escáneres, archivos, firmas y verificación de autorización |
| 📋 [Especificación de manifiesto de habilidad](specs/SKILL-MANIFEST.md) | Formato de manifiesto legible por máquina y contrato de compatibilidad |### 🤝 If You Want to **Contribute**

| Médico | Lo que aprenderás |
|:----|:------------------|
| 📝 [Guía de contribución](../CONTRIBUTING.md) | Expectativas del flujo de trabajo del repositorio y de las solicitudes de extracción |
| 🧾 [Flujo de trabajo de relaciones públicas de habilidades](colaboradores/SKILL-PR-WORKFLOW.md) | Admisión nativa, procesamiento automático de potenciadores, publicación de `skills_omni/` y expectativas de los revisores |
| 📄 [Plantilla de habilidades](colaboradores/SKILL-TEMPLATE.md) | Starter `SKILL.md` con frontmatter y estructura actuales |
| 🔬 [Anatomía de habilidades](colaboradores/SKILL-ANATOMY.md) | Estructura y expectativas de calidad de una habilidad |
| ✅ [Barra de calidad](colaboradores/QUALITY-BAR.md) | Criterios de aceptación del repositorio |
| 🏆 [Libro de jugadas de puntuación alta](colaboradores/HIGH-SCORE-PLAYBOOK.md) | Qué impulsa la alta madurez, calidad, mejores prácticas y puntuaciones de seguridad |
| 📋 [Tareas pendientes](tasks/README.md) | Cartera de ejecución detallada de las obras públicas y privadas restantes |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

El binario "omni-skills" publicado es el punto de entrada público unificado.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

Para obtener la superficie de comando completa del usuario final, utilice la [Guía del usuario de CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

La canalización de compilación emite los archivos legibles por máquina que controlan cada superficie de tiempo de ejecución:

| Artefacto | Propósito |
|:---------|:--------|
| `metadatos.json` | Validación de todo el repositorio y resumen de puntuación |
| `skills_index.json` | Índice de habilidades normalizado de repositorio local |
| `dist/catalog.json` | Catálogo publicado para búsqueda y listado |
| `dist/bundles.json` | Definiciones de paquetes con disponibilidad |
| `dist/manifests/<habilidad>.json` | Manifiesto legible por máquina por habilidad |
| `dist/archives/<habilidad>.zip` | Archivo de habilidades (zip) |
| `dist/archives/<habilidad>.tar.gz` | Archivo de habilidades (tarball) |
| `dist/archives/<habilidad>.checksums.txt` | Manifiesto de suma de comprobación SHA-256 |

`dist/` permanece comprometido a propósito. Estos artefactos generados son parte del contrato de instalación, API, MCP, A2A, humo y lanzamiento.### 🌐 API

```bash
npx omni-skills api --port 3333
```

API de registro de solo lectura para habilidades, paquetes, comparación, planificación de instalación y descargas de artefactos.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

El sidecar local ahora admite escritura de configuración MCP de primera clase para:

- Código Claude
- Cursores
- Código VS y contenedores de desarrollo
- CLI de Géminis
- Antigravedad
-Kiro
- CLI del Códice
- Continuar
- windsurf
- Código abierto
- Clina
- CLI del copiloto de GitHub
- Código de kilos
-Zed
- ganso### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Ciclo de vida de las tareas, transmisión, persistencia, recuperación de reinicio y orquestación local simple. La ejecución arrendada compartida está disponible cuando se habilita explícitamente; Redis sigue siendo una opción alojada avanzada, no la ruta local predeterminada.---

## 🗂️ Repository Map

| Camino | Propósito |
|:-----|:--------|
| 📂 `habilidades/` | Habilidades de autor canónico |
| 📖 `docs/usuarios/` | Documentación para el usuario final |
| 🤝 `docs/colaboradores/` | Plantillas y orientación para colaboradores |
| 🏗️ `docs/arquitectura/` | Hoja de ruta, ADR y análisis técnico |
| 🔧 `docs/operaciones/` | Runbooks operativos |
| 📋 `docs/especificaciones/` | Contratos de tiempo de ejecución, protocolo y artefactos |
| 📚 `docs/CATALOG.md` | Catálogo de habilidades generado |
| 📦 `dist/` | Artefactos generados legibles por máquina |
| 🧠 `paquetes/catalog-core/` | Tiempo de ejecución del catálogo compartido |
| 🌐 `paquetes/api-servidor/` | API HTTP de sólo lectura |
| 🔌 `paquetes/servidor-mcp/` | Servidor MCP y sidecar local |
| 🤖 `paquetes/servidor-a2a/` | Servidor A2A y tiempo de ejecución de tareas |
| 🖥️ `herramientas/bin/` | Puntos de entrada CLI |
| 📚 `herramientas/lib/` | Instalador y ayudantes de UI |
| ⚙️ `herramientas/scripts/` | Validación, generación, verificación y pruebas |---

## 🧪 Release Validation

```bash
npm run smoke
```

El recorrido de humo valida:

- ✅ validación de habilidades y generación de metadatos
- ✅ herramientas de recategorización de taxonomía
- ✅ generación de artefactos de catálogo
- ✅ descuento de catálogo generado
- ✅ generación y verificación de archivos
- ✅ conjunto de pruebas automatizadas
- ✅ `paquete npm --ejecución en seco`
- ✅ Arranque y salud de API
- ✅ Arranque MCP en `stdio`, `stream` y `sse`
- ✅ Arranque A2A, sondeo, transmisión SSE, cancelación y ciclo de vida de configuración push