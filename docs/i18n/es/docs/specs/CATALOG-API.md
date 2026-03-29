# 🌐 Catalog API Surface (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**API HTTP de solo lectura para descubrimiento de habilidades, búsqueda, comparación, planificación de instalación y descargas de artefactos.**---

## 📊 Status

| Característica | Estado |
|:--------|:------|
| ✅ Puntos finales del catálogo | Implementado |
| ✅ Autenticación (portador + clave API) | Implementado |
| ✅ Autenticación en tiempo de ejecución del administrador | Implementado |
| ✅ Limitación de tarifa | Implementado |
| ✅ Registro de auditoría | Implementado |
| ✅ Listas permitidas de CORS e IP | Implementado |
| ✅ Modo mantenimiento | Implementado |
| ✅ Descargas de archivos | Implementado |
| ✅ Especificaciones de OpenAPI | Implementado |
| ⚠️ Backend de gobernanza | Línea base en proceso impulsada por el entorno; puerta de enlace externa o IdP sigue siendo opcional |---

## 🎯 Purpose

La API proporciona una superficie de estilo registro para:

- 📋 Listado y filtrado de habilidades por calidad, seguridad, categoría, riesgo y más
- 📌 Obtención de manifiestos de habilidades individuales
- 🔎 Búsqueda de texto completo y comparación de múltiples habilidades
- 📦 Listado de paquetes con disponibilidad
- 📐 Generación de plan de instalación de solo lectura
- 📥 Descarga de artefactos, archivos y manifiestos de suma de comprobación generados

Este mismo catálogo y superficie de manifiesto es también la base para:

- planificación de instalación de CLI local
- Respuestas de descubrimiento de solo lectura de MCP
- Descubrimiento A2A y transferencia del plan de instalación
- posibles catálogos privados con autenticación externa superpuesta---

## Inicio Rápido

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**Valores predeterminados**: `127.0.0.1:3333`---

## 🔐 Security Controls

Todos los controles de seguridad están controlados por el entorno y son opcionales:

| Controlar | Variables | Ejemplo |
|:--------|:---------|:--------|
| 🔑**Autenticación de portador**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `reemplázame` |
| 🗝️**Autenticación de clave API**| `OMNI_SKILLS_HTTP_API_KEYS` | `clave-a, clave-b` |
| 🛂**Autenticación de administrador**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `secreto de administrador` |
| 🚦**Limitación de tasa**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60`/`60000` |
| 📝**Registro de auditoría**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Formato de auditoría**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` o `texto` |
| 📄**Archivo de auditoría**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**Lista de permitidos CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**Lista de IP permitidas**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Proxy confiable**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `bucle invertido` |
| 🚧**Modo de mantenimiento**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Reintentar después**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Comportamiento:**
- 🟢 `/healthz` permanece**siempre sin autenticar**
- 🔒 Todas las demás rutas requieren autenticación cuando la autenticación está habilitada
- 🛂 `/admin/runtime` requiere el token de administrador cuando está habilitado
- 🚦 La limitación de velocidad está en proceso con los encabezados de respuesta `X-RateLimit-*`
- 🧾 Cada respuesta lleva `X-Request-Id`
- 🚧 El modo de mantenimiento devuelve `503` para rutas que no son de estado ni de administrador### ✅ Current governance decision

La dirección actual del proyecto es**reutilizar el mismo formato de catálogo para implementaciones públicas o privadas**y realizar capas de autenticación externamente cuando sea necesario.

Eso significa:

- el manifiesto y la forma de API permanecen compartidos
- Las implementaciones locales y autohospedadas pueden permanecer en la línea base en proceso
- La gobernanza alojada más avanzada puede pasar a una puerta de enlace externa o a una capa de autenticación empresarial más adelante sin bifurcar el modelo de datos.### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| Método | Camino | Descripción |
|:-------|:-----|:------------|
| `OBTENER` | `/ saludz` | Control de estado (no autenticado) |
| `OBTENER` | `/openapi.json` | Especificación dinámica de OpenAPI 3.1 |
| `OBTENER` | `/admin/tiempo de ejecución` | Instantánea de gobierno y tiempo de ejecución (autenticación de administrador cuando está habilitada) |### 📚 Catalog & Skills

| Método | Camino | Descripción |
|:-------|:-----|:------------|
| `OBTENER` | `/v1/habilidades` | Listar habilidades con filtros |
| `OBTENER` | `/v1/habilidades/:id` | Obtener manifiesto de habilidades individuales |
| `OBTENER` | `/v1/búsqueda` | Búsqueda de texto completo |
| `OBTENER` | `/v1/compare?ids=id1,id2` | Compara múltiples habilidades |
| `OBTENER` | `/v1/paquetes` | Listar paquetes con disponibilidad |
| `POST` | `/v1/instalar/plan` | Generar un plan de instalación |### 🔎 List/Search Filters

| Filtro | Ejemplo |
|:-------|:--------|
| `categoría` | `?categoría=desarrollo` |
| `herramienta` | `?herramienta=cursor` |
| `riesgo` | `?riesgo=seguro` |
| `ordenar` | `?sort=calidad\|mejores prácticas\|nivel\|seguridad\|nombre` |
| `orden` | `?orden=asc\|desc` |
| `calidad_mín` | `?min_calidad=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `nivel_mínimo` | `?min_level=2` |
| `min_seguridad` | `?min_security=90` |
| `estado_validación` | `?validation_status=aprobado` |
| `estado_seguridad` | `?security_status=aprobado` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

| Método | Camino | Descripción |
|:-------|:-----|:------------|
| `OBTENER` | `/v1/catalogo/descargar` | Descarga del catálogo completo |
| `OBTENER` | `/v1/skills/:id/artefactos` | Listar artefactos de habilidades |
| `OBTENER` | `/v1/skills/:id/archivos` | Listar archivos de habilidades |
| `OBTENER` | `/v1/skills/:id/descargas` | Todos los enlaces de descarga disponibles |
| `OBTENER` | `/v1/skills/:id/descargar/manifiesto` | Manifiesto de habilidad JSON |
| `OBTENER` | `/v1/skills/:id/descarga/punto de entrada` | Habilidad HABILIDAD.md |
| `OBTENER` | `/v1/skills/:id/descarga/artifact?ruta=<ruta>` | Artefacto específico |
| `OBTENER` | `/v1/skills/:id/descargar/archivo?format=zip\|tar.gz` | Archivo de habilidades |
| `OBTENER` | `/v1/skills/:id/descargar/archivo/firma?format=zip\|tar.gz` | Firma separada |
| `OBTENER` | `/v1/skills/:id/descargar/archivo/sumas de comprobación` | Sumas de comprobación SHA-256 |---

## 🔗 Link Enrichment

Cuando las solicitudes se manejan a través de la API, el servidor**enriquece automáticamente**manifiestos, listados de artefactos y planes de instalación con URL absolutas derivadas del origen de la solicitud entrante. Esto es un enriquecimiento del tiempo de ejecución, no integrado en `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Los planes de instalación son vistas previas, no escrituras remotas.**

La API nunca se instala en la máquina de la persona que llama. Devuelve:
- 📌 Metadatos de habilidades seleccionadas
- ⚠️ Advertencias para miembros faltantes del paquete
- 🖥️ Comandos CLI concretos para ejecutar localmente
- 🔗 URL de descarga públicas cuando el origen de la solicitud esté disponible---

## 🔌 Relationship to MCP

El servidor MCP reutiliza las mismas URL de API públicas cuando se configura:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Esto permite que las vistas previas de instalación de MCP devuelvan URL de artefactos y manifiestos concretos en lugar de solo rutas de repositorio locales.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` devuelve una instantánea de gobierno útil para diagnósticos alojados:

- métodos de autenticación activos
- estado de autenticación de administrador
- ventana de límite de tasa y máx.
- Lista de permitidos CORS
- Lista de IP permitidas
- estado del modo de mantenimiento
- destino y formato de la auditoría
- totales del catálogo actual
- Solicitud de eco de ID para trazabilidad