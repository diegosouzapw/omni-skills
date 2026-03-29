# 📋 Skill Manifest Specification (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**El manifiesto JSON legible por máquina generado a partir de cada `SKILL.md` durante el proceso de compilación: el contrato de datos único consumido por todas las superficies de tiempo de ejecución.**---

## 📊 Status

| Característica | Estado |
|:--------|:------|
| ✅ Generado automáticamente desde SKILL.md | Implementado |
| ✅ Consumido por CLI, API, MCP, A2A | Implementado |
| ✅ Archivos con sumas de verificación | Implementado |
| ✅ Clasificación de seguridad | Implementado |

>**Importante**: El manifiesto es un**artefacto de compilación**. Autor de los colaboradores `SKILL.md`: la canalización deriva el manifiesto JSON automáticamente.---

## 🎯 Purpose

El manifiesto existe para que**todas las superficies de tiempo de ejecución**consuman la misma forma normalizada:

| Superficie | Cómo utiliza los manifiestos |
|:--------|:---------------------|
| 🖥️**CLI**| Búsqueda, planificación de instalación, diagnóstico médico |
| 🌐**API**| Respuestas de endpoints, filtrado, enlaces de descarga |
| 🔌**MCP**| Respuestas de herramientas, contenidos de recursos |
| 🤖**A2A**| Cargas útiles de descubrimiento y recomendación |---

## 📁 Output Locations

| Artefacto | Camino |
|:---------|:-----|
| 📊 Metadatos raíz | `metadatos.json` |
| 📊 Metadatos por habilidad | `habilidades/<habilidad>/metadata.json` |
| 📋 Índice de habilidades | `skills_index.json` |
| 📚 Catálogo publicado | `dist/catalog.json` |
| 📌 Manifiesto por habilidad | `dist/manifests/<habilidad>.json` |
| 📦 Archivo zip | `dist/archives/<habilidad>.zip` |
| 📦 Archivo Tarball | `dist/archives/<habilidad>.tar.gz` |
| 🔒 Manifiesto de suma de comprobación | `dist/archives/<habilidad>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Campo | Descripción |
|:------|:------------|
| `versión_esquema` | Versión del esquema de manifiesto |
| `identificación` | Identificador de habilidad estable del campo "nombre" |
| `babosa` | Barra de directorio en `skills/` |
| `nombre_mostrado` | Título legible por humanos del primer título |### 📝 Metadata

| Campo | Descripción |
|:------|:------------|
| `descripción` | Breve resumen de frontmatter |
| `versión` | Versión de habilidad, independiente de la versión del paquete npm |
| `categoría` | Categoría canónica (normalizada) |
| `categoría_bruta` | Categoría original de frontmatter |
| `taxonomía` | Metadatos de taxonomía completa con respaldo inferido |
| `etiquetas` | Etiquetas buscables |
| `complejidad` | `principiante` · `intermedio` · `avanzado` · `experto` |
| `riesgo` | `seguro` · `precaución` · `ofensivo` · `crítico` |
| `fuente` | `omni-team` · `comunidad` · `oficial` |
| `autor` | Cadena de atribución |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Campo | Descripción |
|:------|:------------|
| `punto de entrada` | Ruta canónica `SKILL.md` |
| `rutas.raíz` | Directorio de habilidades dentro del repositorio |
| `rutas.manifest` | Ruta de manifiesto generada en `dist/` |### 🖥️ Compatibility

| Campo | Descripción |
|:------|:------------|
| `herramientas` | Identificadores de herramientas de frontmatter |
| `install_targets` | Metadatos de instalación por herramienta |

Cada destino de instalación incluye: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocación`### 📦 Resources

| Campo | Descripción |
|:------|:------------|
| `sub_recursos` | Subdirectorios de habilidades (`referencias`, `agentes`, `activos`) |
| `recuento_artefactos` | Recuento total de archivos en el paquete de habilidades |
| `referencias_count` | Recuento de documentos de referencia |
| `recuento_agentes` | Recuento de configuración del agente |
| `recuento_activos` | Recuento de archivos de activos |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Campo | Descripción |
|:------|:------------|
| `estrategia` | Estrategia de instalación (por ejemplo, `copiar-directorio-de-habilidades`) |
| `instalador_actual` | Comportamiento de instalación legible por humanos |
| `recetas` | Recetas de instalación por cliente |### 📊 Classification

| Sección | Campos |
|:--------|:-------|
| 🎯 `madurez` | `skill_level`, `skill_level_label` |
| 📋 `mejores_practicas` | `puntuación` (0-100) |
| ⭐ `calidad` | `puntuación` (0-100) |
| 🛡️ `seguridad` | `puntuación`, `estado` |
| ✅ `validación` | `estado` |### 📝 Content

Señales derivadas: `body_length`, `content_length`, `body_lines`, `word_count`, además de indicadores estructurales para ejemplos, secciones de solución de problemas, etc.### 📁 Artifacts

Matriz de cada archivo enviado dentro del directorio de habilidades:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Tipos de artefactos**: `punto de entrada` · `referencia` · `agente` · `activo` · `licencia` · `soporte`### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

| Campo | Descripción |
|:------|:------------|
| `entrypoint_sha256` | Hash de SKILL.md |
| `paquete_sha256` | Resumen determinista de la lista ordenada de artefactos |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 📌 La versión del paquete del repositorio y la versión de la habilidad son preocupaciones diferentes. El paquete es actualmente "0.1.3", mientras que las habilidades individuales tienen sus propias versiones semánticas.---

## ⚠️ Compatibility Notes

| Regla | Justificación |
|:-----|:----------|
| ✅ Debe seguir siendo derivable del repositorio | No se requiere creación manual de manifiestos |
| ✅ Se pueden agregar nuevos campos opcionales | Compatibilidad con versiones anteriores |
| ⚠️ Los campos existentes deben permanecer estables | Compatibilidad con versiones anteriores |
| 🚫 No se permiten manifiestos escritos a mano | La derivación en tiempo de construcción es la fuente de la verdad |