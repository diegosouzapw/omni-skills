# 🔧 System Runbook (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**La guía operativa completa para crear, validar, servir, proteger y solucionar problemas de Omni Skills.**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

| Comando | Qué hace |
|:--------|:-------------|
| `npm ejecutar validar` | Valida `SKILL.md`, regenera `metadata.json`, calcula taxonomía/madurez/calidad/seguridad |
| `npm ejecutar taxonomía: informe` | Muestra sugerencias de deriva de categorías sin reescribir archivos |
| `npm ejecutar verificar: escáneres` | Confirma la cobertura del escáner registrada en los metadatos de habilidades generados |
| `npm ejecutar lanzamiento: notas` | Genera notas de versión personalizadas a partir de metadatos, paquetes e historial de git |
| `npm ejecutar compilación` | Regenera catálogo/manifiestos/archivos/sumas de verificación, verifica la cobertura del escáner y los archivos, reconstruye `docs/CATALOG.md` |
| `prueba npm` | Suite de humo completa en CLI, API, MCP, sidecar y flujos de archivo |---

## 🖥️ Visual Shell

La CLI publicada ahora incluye un shell de operador basado en Ink:```bash
npx omni-skills ui
```

Capacidades actuales:

- instalación guiada para clientes conocidos y rutas personalizadas
- flujo de búsqueda e instalación
- Asistente de inicio de MCP
- Asistente de lanzamiento de API
- Asistente de lanzamiento de A2A
- instalaciones recientes y relanzamientos de servicios
- ajustes preestablecidos de instalación y servicio con nombre

Ruta estatal local:```text
~/.omni-skills/state/ui-state.json
```

Retroceder:```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

El escáner estático comprueba todas las habilidades automáticamente:

| Familia de reglas | Ejemplos |
|:------------|:---------|
| 🎭 Inyección inmediata | Patrones de exfiltración, anulación de instrucciones |
| 💣 Comandos destructivos | `rm -rf`, `formato`, `mkfs` |
| 🔑 Caminos sospechosos | `/etc/shadow`, `~/.ssh`, archivos de credenciales |
| ⚠️ Primitivas arriesgadas | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Requiere `clamscan` en `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Solo búsqueda de hash: los archivos desconocidos**no se cargan**de forma predeterminada.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Puerta de liberación estricta:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Los archivos se producen automáticamente mediante `npm run build`:

| Salida | Camino |
|:-------|:-----|
| 📦 CÓDIGO POSTAL | `dist/archives/<habilidad>.zip` |
| 📦 Tarball | `dist/archives/<habilidad>.tar.gz` |
| 🔒 Sumas de verificación | `dist/archives/<habilidad>.checksums.txt` |

`dist/` se envía intencionalmente en este repositorio. El catálogo, los manifiestos, los paquetes y los archivos generados son entradas de tiempo de ejecución para flujos de instalación de CLI, superficies de descarga de API, vistas previas de MCP, transferencia de tareas A2A, pruebas de humo y verificación de versiones.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Anulación de clave pública opcional:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Si no se proporciona ninguna clave pública, la compilación deriva una a través de `openssl` en `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Política de versión:

- el parche aumenta hasta `.10`
- después de `.10`, la siguiente versión es menor y restablece el parche a `.0`

Ejemplos:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Escenario | Comando |
|:---------|:--------|
| 📥 Instalación predeterminada (Antigravity) | `npx omni-habilidades` |
| 🎯 Habilidad específica + cliente | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Descubrimiento → instalar | `npx omni-skills buscar figma --tool cursor --install --yes` |
| 📦 Instalación del paquete | `npx omni-skills --cursor --bundle esenciales` |
| 🩺 Verificar instalación | `médico omni-habilidades npx` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filtro | Bandera | Ejemplo |
|:-------|:-----|:--------|
| 📂 Categoría | `--categoría` | `--desarrollo de categorías` |
| 🖥️ Herramienta | `--herramienta` | `--cursor de herramienta` |
| ⚠️ Riesgo | `--riesgo` | `--riesgo seguro` |
| 📊 Ordenar | `--ordenar` | `--sort calidad\|mejores-practicas\|nivel\|seguridad\|nombre` |
| 🔄 Orden | `--orden` | `--order asc\|desc` |
| ⭐ Calidad mínima | `--calidad mínima` | `--calidad mínima 80` |
| 📋 PA mínima | `--min-mejores-practicas` | `--min-mejores-practicas 60` |
| 🎯 Nivel mínimo | `--nivel mínimo` | `--min-nivel 2` |
| 🛡️ Seguridad mínima | `--min-seguridad` | `--min-seguridad 90` |
| ✅ Validación | `--estado-de-validación` | `--estado de validación aprobado` |
| 🛡️ Seguridad | `--estado-de-seguridad` | `--estado de seguridad aprobado` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Método | Punto final | Propósito |
|:-------|:---------|:--------|
| `OBTENER` | `/ saludz` | Control de salud |
| `OBTENER` | `/openapi.json` | Especificaciones de OpenAPI 3.1 |
| `OBTENER` | `/v1/habilidades` | Lista con filtros |
| `OBTENER` | `/v1/búsqueda` | Búsqueda de texto completo |
| `OBTENER` | `/v1/skills/:id/archivos` | Listado de archivos |
| `OBTENER` | `/v1/skills/:id/descargar/archivo?formato=zip` | Descargar archivo |
| `OBTENER` | `/v1/skills/:id/descargar/archivo/sumas de comprobación` | Manifiesto de suma de comprobación |### 🔐 Hosted API Hardening

| Característica | Comando |
|:--------|:--------|
| 🔑 Autenticación de portador | `OMNI_SKILLS_HTTP_BEARER_TOKEN=reemplazarme npx omni-skills api` |
| 🗝️ Autenticación de clave API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Autenticación en tiempo de ejecución del administrador | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 Limitación de tasa | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Registro de auditoría | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 api de omni-habilidades npx` |
| 🌍 Lista de permitidos CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 Lista de IP permitidas | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Modo de mantenimiento | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 api de omni-habilidades npx` |
| 🔁 Proxy confiable | `OMNI_SKILLS_HTTP_TRUST_PROXY=api de omni-skills npx loopback` |

> 🟢 `/healthz` permanece abierto por diseño; las rutas del catálogo requieren autenticación cuando están habilitadas. `GET /admin/runtime` requiere el token de administrador cuando se configura y devuelve la instantánea de gobierno en vivo.---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

El sidecar ahora puede obtener una vista previa o escribir la configuración de MCP para:

- Configuración de usuario y proyecto de Claude.
- Configuración de escritorio de Claude
- Cline configuración de usuario
- Configuración del repositorio y usuario de GitHub Copilot CLI
- Usuario del cursor y configuración del espacio de trabajo.
- Configuración TOML del códice
- Configuración de proyecto y usuario de Gemini
- Configuración de proyecto y usuario de Kilo CLI
- Configuración del espacio de trabajo de Kilo
- Configuración de proyecto y usuario de Kiro
- Configuración de usuario y espacio de trabajo de OpenCode.
- Continuar la configuración YAML del espacio de trabajo
- Configuración de usuario de windsurf
- Configuración del espacio de trabajo de Zed
- espacio de trabajo `.mcp.json`
- Espacio de trabajo de VS Code y configuración de usuario
- Configuración del contenedor de desarrollo

`configure_client_mcp` también devuelve `recetas` por cliente para que los operadores obtengan la CLI equivalente o los pasos de configuración manual junto con la vista previa.### 🧾 MCP Config Preview and Write Flow

Utilice la CLI unificada cuando desee generar configuraciones sin llamar directamente a la herramienta MCP:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

El shell visual expone el mismo flujo de trabajo a través de:

- `npx omni-skills ui`
- `Servicios`
- `Configurar cliente MCP`

El comando permanece en modo de vista previa a menos que se pase `--write`.### 🔐 Hosted MCP Hardening

Las mismas variables de entorno que la API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Rutas protegidas**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` permanece abierto.---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

La ruta local predeterminada sigue siendo simple: primero:

- La persistencia `json` o `sqlite` se puede ejecutar con el sondeo de cola deshabilitado
- configure `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` solo cuando desee una conmutación por error de reclamo y arrendamiento de múltiples trabajadores
- mantener la coordinación de Redis como una opción alojada avanzada, no como la base### 🧱 Multi-Worker Lease Setup

Ejecute más de un nodo A2A en el mismo almacén SQLite para obtener una conmutación por error basada en arrendamiento:```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Si un trabajador muere mientras una tarea está "trabajando", otro trabajador puede reclamarla después de que expire el contrato de arrendamiento y continuar con la ejecución.### 🟥 Redis Coordination

Para implementaciones hospedadas o de múltiples nodos que no desean que la coordinación de colas esté vinculada al almacén SQLite compartido, cambie el coordinador a Redis:```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

En este modo:

- la persistencia aún vive en JSON o SQLite
- la reclamación de tareas y la propiedad del arrendamiento se trasladan a Redis
- múltiples nodos A2A pueden compartir una cola sin depender de la coordinación a nivel de fila de SQLite### 📡 Endpoints

| Método | Camino | Propósito |
|:-------|:-----|:--------|
| `OBTENER` | `/ saludz` | Control de salud |
| `OBTENER` | `/.well-known/agent.json` | Tarjeta de agente (descubrimiento A2A) |
| `POST` | `/a2a` | Punto final JSON-RPC para tareas y streaming |### 🧭 Supported JSON-RPC Methods

| Método | Propósito |
|:-------|:--------|
| `mensaje/enviar` | Iniciar o continuar una tarea |
| `mensaje/transmisión` | Iniciar una tarea y transmitir actualizaciones de SSE |
| `tareas/obtener` | Encuesta una instantánea de la tarea |
| `tareas/cancelar` | Cancelar una tarea activa |
| `tareas/volver a suscribir` | Reanudar actualizaciones de SSE para una tarea existente |
| `tareas/pushNotificationConfig/set` | Registrar un webhook push |
| `tareas/pushNotificationConfig/get` | Leer una configuración push |
| `tareas/pushNotificationConfig/list` | Listar configuraciones push para una tarea |
| `tareas/pushNotificationConfig/delete` | Eliminar una configuración push |### 📡 Task Lifecycle

El tiempo de ejecución actual admite estos estados de tareas:

- `enviado`
- `trabajando`
- `entrada requerida`
- `completado`
- `cancelado`
- `fallido`

Las tareas persisten en un archivo JSON o en un almacén SQLite y se recargan al reiniciar. Las tareas completadas e interrumpidas permanecen disponibles. Las tareas que todavía estaban "enviadas" o "funcionando" durante el apagado se recuperan con metadatos de reinicio explícitos y se reanudan automáticamente de forma predeterminada.### 🧪 Example: Start a Task

```bash
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
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

El repositorio ahora tiene dos flujos de trabajo:

| Flujo de trabajo | Gatillo | Propósito |
|:---------|:--------|:--------|
| `validar.yml` | Empujar/PR a `principal` | Construir, probar y confirmar que los artefactos generados estén confirmados |
| `liberación.yml` | Etiqueta push `v*` o envío manual | Ejecute escáneres de versión, verifique la etiqueta de versión, firme artefactos, empaquete el tarball, publique en npm y cree GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Secreto | Utilizado por | Propósito |
|:-------|:--------|:--------|
| `VT_API_KEY` o `VIRUSTOTAL` | `liberación.yml` | Requerir búsquedas de hash de VirusTotal en las versiones de lanzamiento |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` o `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `liberación.yml` | Clave privada requerida para la firma de archivos separados en CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` o `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `liberación.yml` | Anulación de clave pública opcional; de otro modo derivado de la clave privada |
| `NPM_TOKEN` | Trabajo `publicar-npm` | Autenticar `npm Publish` para lanzamientos de etiquetas |### 🦠 Release Scanner Policy

`release.yml` establece o prepara:

-`OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secretos.VT_API_KEY || secretos.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` del almacenamiento temporal del corredor

Eso significa que cada lanzamiento basado en etiquetas debe:

- instalar y actualizar ClamAV en el corredor
- regenerar metadatos con ClamAV habilitado
- regenerar metadatos con VirusTotal habilitado
- decodificar el material clave de firma de CI en el almacenamiento temporal del corredor
- pase `npm run verificar: escáneres: estricto`
- pase `npm run verificar:archivos:estricto`
- pasar pruebas y verificación de paquetes antes de la publicación de npm
- generar notas de versión personalizadas a partir de los metadatos del catálogo y el historial de git
- crear una versión de GitHub con recursos de versión adjuntos después de la publicación---

## 1️⃣1️⃣ Environment Variables Reference

| Variables | Propósito | Predeterminado |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Anular la ruta raíz del catálogo | Detectado automáticamente |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Rutas de escritura adicionales permitidas | Raíces de clientes conocidos |
| `OMNI_SKILLS_MCP_MODE` | Establecer en `local` para sidecar | Remoto |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Bandera alternativa para modo local | `0` |
| `OMNI_SKILLS_API_BASE_URL` | URL de API pública para MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | URL base pública | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Token de autenticación de portador | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Claves API separadas por comas | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Token de autenticación de tiempo de ejecución de administrador | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Solicitudes máximas por ventana | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Ventana de límite de velocidad (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Habilitar el registro de auditoría | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | Salida de auditoría `json` o `text` | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Ruta de archivo de registro de auditoría opcional | salida estándar |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Lista de permitidos de origen CORS separados por comas | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Lista de IP permitidas o CIDR separadas por comas | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Configuración de proxy de confianza expresa | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Habilitar respuestas de mantenimiento | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Mantenimiento `Reintentar después` segundos | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Retraso de tarea asincrónica simulada | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | almacén de tareas `json`, `sqlite` o `memory` | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Archivo de almacén de tareas A2A personalizado | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Habilite el sondeo de cola compartida para trabajadores que tienen en cuenta el arrendamiento | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | Coordinador `store`, `sqlite`, `local` o `redis` | `tienda` |
| `OMNI_SKILLS_A2A_REDIS_URL` | URL de Redis para coordinación externa | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Prefijo de clave de Redis para metadatos de cola | `omni-habilidades:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Intervalo de votación en cola para trabajadores arrendados | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Duración del contrato de arrendamiento antes de que otro trabajador pueda reclamar una tarea | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Identificador de trabajador estable para arrendamiento y diagnóstico | Nombre de host + PID + sufijo aleatorio |
| `OMNI_SKILLS_A2A_EXECUTOR` | Ejecutor de tareas `en línea` o `proceso` | `en línea` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Anular el comando de trabajador externo | Nodo binario |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | Matriz JSON de argumentos de trabajadores externos | `["paquetes/servidor-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Reanudar las tareas enviadas/trabajando recuperadas al arrancar | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Permitir webhooks que no sean HTTPS fuera de localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Habilitar escaneo ClamAV | `0` |
| `VT_API_KEY` | Clave API de VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Clave privada para firmar | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Anulación de clave pública | Derivado automático |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. Reconstruir con `npm run build`
2. Vuelva a ejecutar `npm run verificar: archivos`
3. Si la firma está habilitada, confirme la clave pública y la disponibilidad de "openssl".### 🦠 Release Workflow Fails on Scanner Coverage

- Confirmar que `VT_API_KEY` existe en los secretos del repositorio
- Confirmar que `freshclam` tuvo éxito en el corredor
- Reconstruir localmente con `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Vuelva a ejecutar `npm run verificar: escáneres: estricto`### 📦 npm Publish Fails in CI

- Confirmar que `NPM_TOKEN` existe en los secretos del repositorio
- Confirme que la etiqueta Git coincida exactamente con la versión `package.json`
- Verifique que el archivo tar cargado por `release-verify` exista en los artefactos del flujo de trabajo### ✍️ Release Signing Fails in CI

- Confirmar que `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` o `OMNI_SKILLS_SIGN_PRIVATE_KEY` existe en los secretos del repositorio
- Si proporciona una clave pública secreta, confirme que coincida con la clave privada
- Confirme que `openssl` esté disponible y que la clave privada tenga formato PEM
- Reconstruir localmente con `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Vuelva a ejecutar `npm run verificar: archivos: estricto`### 🔒 API/MCP Returns `401 Unauthorized`

- Verifique `OMNI_SKILLS_HTTP_BEARER_TOKEN` o `OMNI_SKILLS_HTTP_API_KEYS`
- Incluir el encabezado `Autorización: Portador <token>` o `x-api-key`### 🚦 API/MCP Returns `429 Too Many Requests`

- Aumentar `OMNI_SKILLS_RATE_LIMIT_MAX`
- Ampliar `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Reducir el tráfico en ráfagas de clientes o sondas.### 🛂 API/MCP Admin Runtime Returns `401`

- Verificar `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Enviar `x-admin-token: <token>` o `Autorización: Portador <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Deshabilitar `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Utilice `/healthz` para sondas de vida durante el mantenimiento.
- Utilice `/admin/runtime` con el token de administrador para el diagnóstico del operador### 🌍 Browser Requests Fail CORS Validation

- Verificar `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Incluya el esquema y el host exactos, por ejemplo `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Verificar `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Verificar `OMNI_SKILLS_A2A_REDIS_URL`
- Verifique la conectividad de Redis desde cada nodo
- Inspeccione `/healthz` para ver la instantánea de `coordinación`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
