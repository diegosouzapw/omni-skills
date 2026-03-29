# 🗺️ Agent-Native Roadmap (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**El plan de evolución de la arquitectura para Omni Skills: desde el repositorio del instalador primero hasta el tiempo de ejecución del catálogo compartido que impulsa CLI, API, MCP y A2A sin duplicar la lógica.**---

## 📊 Current Platform Areas

| Fase | Nombre | Estado |
|:------|:-----|:-------|
| 1️⃣ | Contratos y artefactos | ✅ Actual |
| 2️⃣ | API de catálogo de solo lectura | ✅ Actual |
| 3️⃣ | Superficie de descubrimiento MCP | ✅ Actual |
| 4️⃣ | Superficie de instalación y configuración local | ✅ Actual |
| 5️⃣ | Orquestación A2A | ✅ Actual |### ✅ What Exists Today

- artefactos de catálogo legibles por máquina en `dist/`
- API HTTP de solo lectura con cobertura de terminales para búsqueda, paquetes, comparación, planificación de instalación y descargas
- Servidor MCP con transportes `stdio`, HTTP transmisible y SSE
- sidecar local con escrituras permitidas y flujos `config-mcp`
- 7 clientes con capacidad de instalación, 16 clientes con capacidad de configuración, 33 destinos de configuración de MCP y 19 perfiles de configuración
- especialización de paquetes más profunda dentro de `full-stack`, `security`, `devops` y `ai-engineer` a través de `auth-flows`, `threat-modeling`, `release-engineering` y `context-engineering`
- archivos por habilidad (`zip`, `tar.gz`) con sumas de verificación SHA-256 y firmas separadas en etiquetas de lanzamiento
- Línea base de gobernanza de API: autenticación de portador/clave de API, autenticación de tiempo de ejecución de administrador, limitación de velocidad, registro de auditoría, listas permitidas de CORS/IP, proxy de confianza, modo de mantenimiento e ID de solicitud
- Tiempo de ejecución A2A con ciclo de vida de tareas, durabilidad JSON/SQLite, reanudación de reinicio, transmisión SSE, cancelación, notificaciones automáticas, ejecutor de procesos opcional y coordinación de arrendamiento opcional### 🔭 Future Expansion Areas

La hoja de ruta principal ahora describe el alcance actual de la plataforma. Los elementos restantes son áreas de expansión futura, no brechas fundamentales:

- solo adiciones de MCP altamente selectivas a partir de este momento, y solo cuando los documentos públicos oficiales hagan posible un escritor seguro
- paquetes de referencia más profundos y puntuación más semántica para que el clasificador siga separando las habilidades excepcionales de las simplemente pulidas
- Gobernanza alojada en la empresa más allá de la línea base actual en proceso, si el proyecto posteriormente necesita integración de puerta de enlace o IdP.
- especialización más profunda en las áreas de "diseño", "herramientas", "datos-ai" y "aprendizaje automático" recientemente activadas
- Pulido operativo continuo en torno al potenciador privado manteniendo su modelo operativo formal: OmniRouter anclado a `cx/gpt-5.4`, nube alojada en `simulacro` o verificación previa degradada y `en vivo` confiable en LAN o ejecución autohospedada
- lanzamiento continuo y fortalecimiento del flujo de trabajo solo como trabajo de calidad de servicio, no como base de plataforma faltante## Future Catalog Expansion Track

Las dos primeras oleadas de expansión de categorías públicas ya han llegado:

- `diseño` → `diseño-sistemas-ops`, `auditoría-accesibilidad`, `diseño-token-gobernanza`
- `herramientas` → `mcp-server-authoring`
- `datos-ai` → `contratos-datos`
- `aprendizaje automático` → `servicio de modelos`

El siguiente paso recomendado ya no es la activación de categorías por sí misma. Se trata de profundizar estas pistas de código nativo recientemente activas para que se sientan como superficies de productos duraderas en lugar de puntos de apoyo de una sola habilidad.

Dirección recomendada:

1. profundizar el "diseño" con flujos de trabajo de sistemas de diseño más operativos
2. profundizar en las "herramientas" con habilidades de creación y orientadas a complementos
3. profundizar la "ai de datos" con habilidades de instrumentación y canalización de implementación
4. Profundizar el "aprendizaje automático" con habilidades operativas de servicio, capacitación y evaluación.

Categorías aplazadas intencionalmente a menos que aparezcan propuestas sólidas de código nativo:

- `negocio`
- `contenido-medios`

Ese historial de expansión ahora se rastrea en:

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Mantener funcionando el flujo de trabajo actual de `npx omni-skills`
- ✅ Introducir una fuente de verdad legible por máquina para las habilidades
- ✅ Admite descubrimiento, recomendación y planificación de instalación por parte de agentes
- ✅ Separe las preocupaciones del catálogo remoto de las escrituras del sistema de archivos local
- ✅ Reutilizar los mismos metadatos en CLI, API, MCP y A2A---

## 🚫 Non-Goals

- ❌ Instalación remota en la máquina del usuario desde un servidor alojado
- ❌ Reemplazar `SKILL.md` como formato de creación canónico
- ❌ Requerir que los contribuyentes escriban manifiestos a mano
- ❌ Convierta el proyecto en una plataforma de cola alojada pesada de forma predeterminada---

## 🏗️ Target Architecture

Un**núcleo de catálogo**con tres superficies de protocolo:

| Superficie | Mejor para | Modo |
|:--------|:---------|:-----|
| 🌐**API REST**| Acceso al registro, integraciones de UI, consumidores externos | Sólo lectura |
| 🔌**MCP**| Descubrimiento de agentes, vistas previas de instalación, redacción de configuraciones, recetas de clientes | Sólo lectura + escrituras locales |
| 🤖**A2A**| Orquestación de agente a agente y transferencia de planes de instalación | Ciclo de vida de la tarea con durabilidad local simple y primero |### ⚙️ Core Principle

>**Todos los protocolos consumen la misma familia de artefactos generados.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

El manifiesto sigue siendo el contrato compartido. Los archivos son artefactos de distribución que se superponen a ese contrato, no un reemplazo del mismo.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Utilizado por API alojadas y servidores MCP remotos.

| ✅ Permitido | ❌ No permitido |
|:-----------|:---------------|
| Habilidades de búsqueda | Escribir en el sistema de archivos de la persona que llama |
| Obtener manifiestos | Mutar la configuración del cliente local |
| Comparar habilidades | Inferir el estado arbitrario de la máquina |
| Recomendar paquetes | — |
| Construir planos de instalación | — |### 2️⃣ Local Installer Mode

Utilizado por la CLI y el sidecar MCP.

| ✅ Permitido |
|:-----------|
| Detectar clientes locales de IA |
| Inspeccionar las habilidades instaladas |
| Vista previa de operaciones de archivos |
| Instalar o eliminar directorios de habilidades |
| Escriba la configuración de MCP local después de la vista previa |

> 📌 Este sigue siendo el único modo en el que se realizan escrituras reales en el sistema operativo.---

## 📐 Protocol Split

### 🌐 REST API

Lo mejor para acceso al registro, búsqueda, comparación, descargas versionadas y planificación de instalación.

**Puntos finales**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Lo mejor para descubrimiento basado en herramientas, recomendaciones rápidas, vistas previas de instalación y configuración de MCP específica del cliente.

**Herramientas de solo lectura**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Herramientas locales**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Lo mejor para transferencia de descubrimiento, flujos de trabajo de planes de instalación y ejecución de tareas de agente reanudables.

**Operaciones actuales**: `descubrir-habilidades` · `recomendar-apilar` · `preparar-instalar-plan`---

## 🛡️ Security Model

| Principio | Implementación |
|:----------|:-----------------------|
| 🔒 Los servicios alojados son de solo lectura | API y MCP remoto no escriben en el sistema de archivos de la persona que llama |
| 📂 Escribe quédate local | Solo sidecar CLI y MCP |
| 👁️ Vista previa antes de escribir | Valores predeterminados de ensayo sobre mutaciones locales |
| 🔑 La integridad es explícita | Sumas de comprobación SHA-256 para artefactos generados |
| ✍️ Liberar confianza es explícito | Firmas separadas aplicadas en las etiquetas de autorización |
| ⚠️ El riesgo sale a la luz | Los metadatos de riesgo y seguridad se propagan a cada superficie de ejecución |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- arquitectura de destino documentada
- esquema manifiesto definido
- metadatos, catálogos, manifiestos, paquetes y archivos generados### Phase 2: Catalog Service

- API HTTP de solo lectura con Express 5
- búsqueda, filtrado, búsqueda de manifiestos, listado de paquetes, comparación y descargas
- línea base de gobernanza alojada basada en entorno### Phase 3: MCP Discovery

- integración oficial `@modelcontextprotocol/sdk`
- Transportes `stdio`, HTTP streaming y SSE
- herramientas, recursos e indicaciones de solo lectura respaldados por el catálogo compartido### Phase 4: Local Install and Config Surface

- sidecar local con escrituras permitidas
- detección de 7 clientes con capacidad de instalación
- escritura de configuración para 16 clientes con capacidad de configuración en 33 objetivos y 19 perfiles de configuración
- flujos `config-mcp` guiados en la CLI y el shell visual
- soporte estable para Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continuar, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose y Dev Containers### Phase 5: A2A Orchestration

- tarjeta de agente en `/.well-known/agent.json`
- `mensaje/enviar`, `mensaje/transmisión`, `tareas/obtener`, `tareas/cancelar`, `tareas/volver a suscribir` y métodos de configuración de notificaciones push
- Persistencia JSON y SQLite con recuperación de reinicio
- ejecutor de proceso externo opcional
- Opción de ejecución arrendada entre trabajadores para SQLite y coordinación avanzada opcional de Redis.
- los primeros valores predeterminados simples se mantienen en la memoria, JSON o SQLite sin dependencias externas### Current Enhancer Operating Decision

El modelo "en vivo" soportado por el potenciador privado ahora es explícito:

- La automatización de relaciones públicas alojada ejecuta un intento "en vivo" controlado previamente
- si la puerta de enlace pública de OmniRoute está bloqueada o es inestable, el PR se marca como "bloqueado" con un motivo orientado al operador en lugar de fallar de forma opaca
- la ruta canónica confiable "en vivo" sigue siendo LAN o ejecución de servicio local
- Las ejecuciones privadas programadas de GitHub permanecen "simuladas" de forma predeterminada a menos que un operador solicite explícitamente "en vivo"---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Decisión**: mantener el manifiesto como contrato compartido y mantener los archivos firmados por habilidad como superficie de distribución.

**Por qué**:
- CLI, API, MCP y A2A ya consumen la forma del manifiesto normalizado
- los archivos son ideales para descargar y verificar, pero deficientes como único contrato de descubrimiento
- esto mantiene la creación simple y la distribución verificable### 2. Private or Premium Catalogs

**Decisión**: reutilizar el mismo formato de manifiesto y catálogo, y aplicar capas de autenticación o política externamente.

**Por qué**:
- evita bifurcar el modelo de datos
- coincide con el enfoque actual de gobernanza API/MCP
- sigue siendo compatible con la dirección del ecosistema MCP en torno a las credenciales del cliente OAuth y la autorización administrada por la empresa### 3. Client Writer Strategy

**Decisión**: converger en un pequeño conjunto de familias de exportación canónicas y mantener solo escritores personalizados cuando los documentos oficiales del cliente lo requieran.

**Familias canónicas ahora en uso**:
- JSON `mcpServers`
- JSON `servidores`
- JSON `servidores_contexto`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**Por qué**:
- mantiene la implementación mantenible
- todavía admite necesidades específicas del cliente, como la configuración de Claude, Continuar YAML, Zed `context_servers` y Codex TOML
- evita inventar escritores frágiles para clientes sin documentos de configuración públicos estables---

## 🌍 Research Notes Behind Those Decisions

Las decisiones actuales se compararon con los documentos oficiales del ecosistema:

- el ecosistema MCP ahora documenta extensiones opcionales, como credenciales de cliente OAuth y autorización administrada por la empresa, que admite la externalización de la autenticación alojada en lugar de bifurcar el formato del catálogo.
- OpenAI documenta un servidor MCP de documentos públicos y patrones de configuración de Codex MCP que se alinean con el manifiesto compartido más la estrategia cliente-escritor.
- VS Code documenta soporte MCP de primera clase y una guía de extensión, que refuerza el mantenimiento de su escritor dedicado basado en "servidores".
- JetBrains AI Assistant documenta la configuración de MCP a través de la experiencia de usuario del producto en lugar de un contrato de archivo multiplataforma estable, lo que permite mantenerlo en territorio manual/fragmento por ahora---

## 🔮 Longer-Term Decision Points

Sólo quedan realmente abiertas unas pocas cuestiones estratégicas:

1. Si algún cliente más allá de la matriz actual realmente supera el listón de la escritura de primera clase, o si los productos restantes deben seguir siendo manuales/solo fragmentos.
2. ¿Cuándo, si es que alguna vez, debería trasladarse la gobernanza alojada detrás de una puerta de enlace externa o un IdP empresarial en lugar de la línea base actual en el proceso?
3. ¿Hasta dónde debe llegar el evaluador al evaluar la profundidad y la calidad operativa del paquete de referencia antes de que se vuelva demasiado obstinado para los contribuyentes?