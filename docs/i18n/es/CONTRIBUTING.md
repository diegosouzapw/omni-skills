# 🤝 Contributing to Omni Skills (Español)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills contiene un catálogo de habilidades y las superficies de tiempo de ejecución creadas sobre ese catálogo.**
> Las contribuciones pueden apuntar a cualquiera de las áreas, pero ambas deben permanecer alineadas con los artefactos generados y el comportamiento actual de la CLI.---

## 📊 Repository Baseline

| Métrica | Valor |
|:-------|:------|
| 📦 Versión del paquete | `0.1.3` |
| 🧠 Habilidades publicadas | `32` |
| 📦 Paquetes totalmente respaldados | `7` |
| 🖥️ Clientes con capacidad de instalación | `7` |
| 🔌 Clientes con capacidad de configuración MCP | `16` |
| 🔄 Lanzamientos automáticos | Habilitado en `principal` |---

## Importante

| Qué | Dónde |
|:-----|:------|
| 🧠 Las habilidades están escritas en | `habilidades/<nombre-habilidad>/SKILL.md` |
| 📖 Plantillas y orientación para colaboradores | `docs/colaboradores/` |
| 🧾 Flujo de relaciones públicas canónico para nuevas habilidades | [Flujo de trabajo de relaciones públicas de habilidades](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Las habilidades entrantes nativas aterrizan en | `skills/` (cualquier idioma) |
| ✨ Derivados mejorados seleccionados | `skills_omni/` (solo en inglés, automatizado) |
| 🚫 `skills_omni/` está protegido | No abierto a contribuciones públicas directas |
| 📖 Documentos de arquitectura y tiempo de ejecución | `docs/` |
| 📄 Archivos comunitarios | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Tipo | Área |
|:-----|:-----|
| 🧠 Agregar o mejorar una habilidad | `habilidades/` |
| 📖 Actualizar la guía para contribuyentes | `docs/colaboradores/` |
| 🖥️ Mejorar CLI, instalador o scripts | `herramientas/` |
| 📦 Mejorar el tiempo de ejecución del catálogo o los paquetes de protocolos | `paquetes/` |
| 🧪 Reforzar las pruebas, los controles de humo o liberar documentos | Varios |---

## Inicio Rápido

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 Abra el PR con "Permitir ediciones de los mantenedores" habilitado.**---

## Documentación

Una buena habilidad entrante nativa debería:

- ✅ Resolver un problema específico de forma limpia
- ✅ Ser reutilizable en todos los proyectos
- ✅ Incluir instrucciones que un agente pueda seguir
- ✅ Evite contenidos vagos o redundantes
- ✅ Declarar metadatos de compatibilidad y front-matter precisos cuando estén disponibles
- ✅ Terreno con artefactos de clasificación `metadata.json` generados después de ejecutar la automatización### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 Consejo:**Los paquetes de habilidades de nivel de lanzamiento deben incluir `agentes/`, `referencias/`, `ejemplos/` y `scripts/`. Pero la superficie de entrada es intencionalmente permisiva: se permite una habilidad entrante nativa mínima y la tubería del potenciador genera el derivado más fuerte.### 🌐 Language Policy

| Superficie | Idiomas aceptados |
|:--------|:-------------------|
| 📥 `habilidades/` (ingesta nativa) | Portugués, inglés o cualquier idioma |
| ✨ `skills_omni/` (producción seleccionada) | Sólo inglés |

> El potenciador privado conserva la fuente nativa tal como se envió y reescribe el derivado seleccionado en inglés.

📖 Para ver la secuencia completa de rama, validación y revisión de potenciadores, utilice [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Ejecute esto antes de abrir un PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<detalles>
<summary>📋 <strong>Lo que <code>npm run validar</code> regenera</strong></summary>

- `metadatos.json`
- `habilidades/<habilidad>/metadata.json`
- Mapeo de taxonomía canónica
- Puntuaciones de madurez, mejores prácticas, calidad y seguridad.
- Hallazgos de seguridad estática
- Estado del escáner ClamAV y VirusTotal opcional (cuando está configurado)</details>

>**⚠️ Importante:**La validación es el contrato utilizado por CLI, API, MCP, A2A, manifiestos, archivos y automatización de versiones. Trate los metadatos generados como parte de la superficie de revisión, no como resultados desechables.### 📥 Intake Policy

| Condición | Comportamiento |
|:----------|:---------|
| Portada faltante/incompleta | ⚠️ Advertencias (no bloquea) |
| Hallazgos críticos de seguridad | 🚫 Bloquea la ingesta |
| Errores de validación difíciles | 🚫 Bloquea la ingesta |
| Norma editorial más estricta | Se aplica en el flujo de derivados mejorado, no en la entrada nativa |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<detalles>
<summary>📋 <strong>Qué valida el pase de humo</strong></summary>

- ✅ Validación de habilidades
- ✅ Generación de catálogo
- ✅ Generación de catálogo de documentos.
- ✅ Conjunto de pruebas
- ✅ `paquete npm --ejecución en seco`
- ✅ Arranque API
- ✅ Arranque MCP en `stdio`, `stream` y `sse`
- ✅ Bota A2A
- ✅ Verificación de archivos y expectativas de embalaje.</details>

---

## 📋 Skill Frontmatter

Se recomienda encarecidamente Frontmatter. Utilice [Plantilla de habilidades](docs/contributors/SKILL-TEMPLATE.md) como base.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<detalles>
<summary>🏷️ <strong>Categorías de taxonomía canónica</strong></summary>

| Categoría | Categoría |
|:---------|:---------|
| `desarrollo` | `frontera` |
| `backend` | `fullstack-web` |
| `herramientas` | `cli-automatización` |
| `negocio` | `producto` |
| `diseño` | `datos-ai` |
| `agentes-ai` | `aprendizaje automático` |
| `devops` | `pruebas-seguridad` |
| `documentación` | `medios de contenido` |
| `comunicación` | `sin categoría` |</details>

>**ℹ️**La versión de habilidad es independiente de la versión del paquete npm. Si una habilidad entrante nativa aún no tiene contenido inicial, se aceptará con advertencias y derivará metadatos temporales del directorio, el título y el texto del cuerpo.---

## ⚙️ Runtime Contributions

Si tocas `packages/`, `tools/bin/`, `tools/lib/` o compilas scripts:

- 📦 Mantenga `dist/` y docs alineados con la implementación
- 🔄 Prefiero reutilizar `packages/catalog-core` en lugar de duplicar la lógica del catálogo
- 🔒 Mantenga el comportamiento de escritura local detrás de los valores predeterminados de vista previa o ejecución en seco
- 🔌 Mantenga disciplinados a los escritores de MCP: solo agregue escritores de configuración de primera clase cuando el cliente tenga un contrato de configuración pública estable
- 🛡️ Trate las advertencias del escáner de seguridad como parte de la barra de revisión
- 🧪 Actualice las pruebas al cambiar comandos CLI, modos de transporte o puntos finales públicos### 🚧 Important Boundary

| Haz esto ✅ | No hagas esto 🚫 |
|:-----------|:-----------------|
| Envíe el trabajo nativo en `skills/` | Abra PR manuales que editen `skills_omni/` |
| Deje que la automatización se encargue de la ejecución del potenciador | Agregue contenido seleccionado directamente |
| Centrarse en la calidad legítima de las habilidades | Evite el flujo de relaciones públicas complementario automatizado |

>**ℹ️**Cuando se actualiza una habilidad nativa en `skills/`, el potenciador privado la reprocesa y actualiza la línea base mejorada.---

## 🔄 Enhancer Outcome States

Durante las relaciones públicas públicas de habilidades nativas, el potenciador informa uno de cuatro estados:

| Estado | Significado |
|:------|:--------|
| ✅ `completado` | Derivado mejorado generado limpiamente, elegible para `skills_omni/` |
| ⚠️ `degradado` | Completado con retroceso o movimiento de puntuación más débil: inspeccione con más cuidado |
| 🚫 `bloqueado` | Detenido por motivos de infraestructura o validación: impide la publicación automática |
| ❌ `fallido` | Error inesperado: requiere investigación del mantenedor |

>**📝 Los colaboradores**no necesitan solucionar problemas de infraestructura del potenciador. La responsabilidad es enviar una habilidad nativa legítima y mantener el repositorio verde.---

## 🔄 Automatic Release Policy

Cuando un cambio llega a "principal" e incluye:

- `habilidades/**`
- `habilidades_omni/**`
- `datos/paquetes.json`

…el repositorio emite una**liberación del paquete automáticamente**.### 📋 Version Bump Rule

| Desde | A | Regla |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Parche +1 |
| `0.1.9` | `0.1.10` | Parche +1 |
| `0.1.10` | `0.2.0` | Pasar al siguiente menor, restablecer el parche |

> El flujo de lanzamiento regenera catálogos/archivos, confirma el aumento de versión, etiqueta el lanzamiento, publica npm y crea el lanzamiento de GitHub automáticamente.---

## 📝 Commit Conventions

| Prefijo | Usar para |
|:-------|:--------|
| `hazaña:` | Nueva habilidad o característica |
| `arreglar:` | Corrección de errores |
| `docs:` | Cambios en la documentación |
| `refactorizar:` | Limpieza de código o cambios de estructura |
| `prueba:` | Cambios de prueba |
| `tarea:` | Mantenimiento |---

## ❓ Need Help?

| Canal | Enlace |
|:--------|:-----|
| 💬 Preguntas | [Abrir una discusión](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Errores | [Abrir una incidencia](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Comentarios tempranos | [Abrir un borrador de relaciones públicas](https://github.com/diegosouzapw/omni-skills/pulls) |