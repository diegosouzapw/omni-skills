# 📐 ADR-0001: Agent-Native Workspace Foundation (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**La decisión arquitectónica clave que dio forma a la estructura del espacio de trabajo de monorepo.**---

## 📊 Status

✅**Aceptado**: dirección actual del espacio de trabajo y forma del repositorio activo.---

## 🔍 Context

Omni Skills comenzó como un repositorio**primero el instalador**. Eso fue suficiente para distribuir contenido `SKILL.md`, pero no suficiente para exponer el catálogo a agentes a través de superficies nativas del protocolo.

Necesitábamos una fundación que pudiera apoyar:

| Requisito | Protocolo |
|:------------|:---------|
| 🌐 API de catálogo HTTP de solo lectura | DESCANSO |
| 🔌 Servidor MCP de solo lectura | Protocolo de contexto modelo |
| 🤖 Superficie A2A orientada al agente | De agente a agente |
| 📂 Sidecares de instalación local | Herramientas del sistema de archivos |

**Restricción crítica**: evite volver a analizar los archivos de repositorio de forma independiente en cada nuevo servicio.---

## ✅ Decision

Adopte un**monorepo orientado al espacio de trabajo**con un núcleo de catálogo compartido y paquetes específicos del protocolo:

| Paquete | Propósito |
|:--------|:--------|
| 📦 `omni-skills` (raíz) | Instalador CLI y scripts de repositorio |
| 🧠 `@omni-skills/catalog-core` | Carga compartida, búsqueda, comparación, paquetes, planes de instalación |
| 🌐 `@omni-skills/server-api` | API REST de solo lectura |
| 🔌 `@omni-skills/servidor-mcp` | MCP con modo stdio/stream/sse + sidecar local |
| 🤖 `@omni-skills/server-a2a` | Tiempo de ejecución de tareas A2A con tarjeta de agente, sondeo, SSE y configuración push |### 📁 Shared Data Sources

El núcleo del catálogo lee los artefactos generados de:
-`dist/catalog.json`
- `dist/manifestos/<habilidad>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Resultado | Impacto |
|:--------|:-------|
| 🔗**Contrato de datos compartidos**| API, MCP y A2A consumen los mismos artefactos |
| 🖥️**CLI unificada**| Un binario expone la instalación, el shell de la interfaz de usuario, la API, el MCP, el A2A, el diagnóstico y el humo |
| 🧩**Protocolo de aislamiento**| Nuevas superficies se iteran sin acoplamiento a las partes internas del instalador |
| 🔌**Sidecar local**| Modo MCP con capacidad de escritura en funcionamiento detrás de una lista de permitidos, con recetas compatibles con el cliente |
| 📦**Tiempo de ejecución de paquete único**| El paquete npm publicado incluye las superficies del protocolo, las herramientas de validación y los artefactos generados juntos |---

## ⚠️ Negative Consequences

| Compensación | Mitigación |
|:---------|:-----------|
| 🔄**Duplicación de metadatos**| Compilación de Python + tiempo de ejecución de JavaScript → eventualmente consolidar |
| 🏗️**Complejidad A2A**| Ahora existe un ciclo de vida duradero, pero los adaptadores de coordinación añaden profundidad operativa |
| 📦**Alineación del catálogo**| La instalación selectiva requiere que los comandos, manifiestos y documentos permanezcan sincronizados |
| 📋**Agrupar lagunas de metadatos**| Los paquetes pueden superar las habilidades publicadas y requieren advertencias explícitas sobre los miembros faltantes |---

## ➡️ Follow-Up Items

| # | Acción | Estado |
|:--|:-------|:-------|
| 1️⃣ | Autenticación MCP remota y limitación de velocidad | ✅ Hecho |
| 2️⃣ | Escritura de configuración MCP específica del cliente mejorada | ✅ Presente hoy para Claude, Cursor, Codex, Gemini, Kiro, VS Code y Dev Containers |
| 3️⃣ | Artefactos de lanzamiento firmados o archivos por habilidad | ✅ Presente hoy con la aplicación de la CI en las etiquetas de liberación |
| 4️⃣ | Tiempo de ejecución de tareas A2A → orquestación duradera | ✅ Presente hoy con persistencia JSON/SQLite, ejecutores externos, coordinación de arrendamiento opcional y coordinación avanzada de Redis opcional |
| 5️⃣ | Ampliar el catálogo publicado para una cobertura de paquetes más amplia | ✅ Presente hoy para los siete paquetes iniciales seleccionados actuales |