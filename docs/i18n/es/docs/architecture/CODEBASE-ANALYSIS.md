# 🔬 Codebase Deep Analysis (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Análisis técnico integral de la arquitectura actual de Omni Skills, las superficies de tiempo de ejecución y el proceso de compilación.**
> Último analizado: 2026-03-28---

## 📊 Project Overview

| Atributo | Valor |
|:----------|:------|
|**Nombre**| `omni-habilidades` |
|**Versión del paquete**| `0.1.3` |
|**Versiones de habilidades**| Por habilidad e independiente de la versión del paquete. Muchas habilidades publicadas todavía son "0.0.1" mientras que el paquete es "0.1.2". |
|**Licencia**| MIT (código) + CC BY 4.0 (contenido) |
|**MNP**| `npx omni-habilidades` |
|**Habilidades publicadas**| 32 |
|**Paquetes definidos**| 7, todo totalmente respaldado por habilidades publicadas |
|**Categorías de catálogo activas**| 15 depósitos activos de 18 categorías de taxonomía canónica |
|**Tiempo de ejecución principal/LOC de compilación que se muestra a continuación**| 13.600+ |
|**Dependencias de producción**| 7 (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Instantánea de clasificación actual a nivel de repositorio de `metadata.json`:

- puntuación de calidad media: `96,3`
- puntuación media de mejores prácticas: `98,7`
- puntuación media de seguridad: `95,0`
- las 32 habilidades publicadas se validan como "L3"

Línea base de lanzamiento actual:

- versión del repositorio público: `v0.1.2`
- lanzamiento de potenciador privado: `v0.0.1`
- La automatización de lanzamientos públicos y la automatización de lanzamientos privados son activas y verdes.---

## 🏗️ Architecture Overview

El repositorio sigue un patrón**monorepo de espacio de trabajo**con un núcleo de catálogo compartido y múltiples superficies de tiempo de ejecución.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

El diseño está intencionalmente**basado en artefactos**:

1. Las habilidades están creadas como `SKILL.md` más paquetes de soporte local
2. la compilación los valida, clasifica, archiva y normaliza
3. Los artefactos generados se convierten en el contrato para CLI, API, MCP y A2A.---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**Más de 4500 LOC combinados**: la interfaz pública principal para uso experto y guiado.

| Comando | Función |
|:--------|:---------|
| 🔎 `buscar [consulta]` | Búsqueda de catálogos de texto completo con filtros basados ​​en puntuaciones |
| 📦 `instalar` | Instalación guiada o basada en indicadores en clientes conocidos o rutas personalizadas |
| 🧾 `config-mcp` | Obtenga una vista previa o escriba la configuración de MCP compatible con el cliente |
| 🔌 `mcp <transporte>` | Inicia el servidor MCP en `stdio`, `stream` o `sse` |
| 🌐`api` | Inicia la API del catálogo |
| 🤖 `a2a` | Inicia el tiempo de ejecución de A2A |
| 🧪 `humo` | Validación de verificación previa de lanzamiento |
| 🩺 `médico` | Diagnóstico local |
| 🖥️ `ui` | Ink visual shell con centro de instalación, descubrimiento, configuración y servicio |
| 🏷️ `recategorizar` | Inspección y reescritura de la deriva de la taxonomía |

La CLI ya no es sólo un instalador. Es la herramienta de operaciones públicas para toda la plataforma.## 🧭 Future Expansion Direction

El tiempo de ejecución público ya no está bloqueado para el trabajo fundacional y la ola de segunda categoría ya ha llegado. El próximo trabajo útil del catálogo es la profundidad, no más búsqueda de recuentos de categorías.

Pistas con código nativo recién activadas ahora en el catálogo:

- `diseño` a través de `design-systems-ops`, `accessibility-audit` y `design-token-governance`
- `herramientas` a través de `mcp-server-authoring`
- `data-ai` mediante `contratos de datos`
- "aprendizaje automático" a través del "servicio de modelos"

Siguiente dirección recomendada:

Primero, profundizar en el "diseño", las "herramientas", la "ai de datos" y el "aprendizaje automático".
2. mantener aplazados los "negocios" y los "medios de contenido" a menos que aparezca una propuesta claramente nativa del código.
3. preservar el piso de calidad actual en lugar de reabrir la presión de activación de categoría

Esa ola de expansión ahora está registrada en [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**: instala habilidades en 7 asistentes con capacidad de instalación.

| Bandera | Objetivo | Ruta predeterminada |
|:-----|:-------|:-------------|
| `--claude` | Código Claude | `~/.claude/skills` |
| `--cursor` | Cursores | `~/.cursor/skills` |
| `--géminis` | Géminis CLI | `~/.gemini/skills` |
| `--códice` | CLI del Códice | `~/.codex/skills` |
| `--kiro` | kiro | `~/.kiro/skills` |
| `--antigravedad` | Antigravedad | `~/.gemini/antigravity/skills` |
| `--código abierto` | Código abierto | `<espacio de trabajo>/.opencode/skills` |

Soporta:

- instalaciones de biblioteca completa
- instalaciones selectivas mediante `--skill`
- instalaciones seleccionadas por `--bundle`
- flujos de interfaz de usuario visual y TTY guiados
- rutas de destino personalizadas### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**: capa de tiempo de ejecución compartida para CLI, API, MCP y A2A.

| Exportar | Descripción |
|:-------|:------------|
| 🔎 `buscarHabilidades()` | Búsqueda con coincidencia de texto ponderado y soporte de filtro |
| 📋 `listaHabilidades()` | Filtrado multieje por calidad, mejores prácticas, nivel, seguridad, riesgo, herramienta y categoría |
| 📌 `getSkill()` | Resolución de manifiesto más URL públicas enriquecidas |
| ⚖️ `compararHabilidades()` | Comparación lado a lado |
| 💡 `recomendarHabilidades()` | Recomendación basada en objetivos |
| 📦 `buildInstallPlan()` | Instalar generación de planes con advertencias y orientación para el cliente |
| 🗂️ `listaBundles()` | Listado de paquetes seleccionados con disponibilidad |
| 📁 `listSkillArchives()` | Resolución de archivo y firma |

Esta es la verdadera fuente única de verdad en tiempo de ejecución tras generación.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**: implementación completa de MCP utilizando el SDK oficial.

**Transportes**

-`estdio`
- HTTP transmitible
- ESS

**Herramientas de solo lectura siempre activas**

- `habilidades de búsqueda`
- `get_skill`
- `comparar_habilidades`
- `recomendar_habilidades`
-`vista previa_instalación`

**Herramientas en modo local**

- `detectar_clientes`
- `lista_habilidades_instaladas`
-`instalar_habilidades`
- `eliminar_habilidades`
- `configurar_cliente_mcp`

La superficie MCP se divide deliberadamente entre:

- uso del catálogo remoto/de solo lectura
- uso de sidecar local/con capacidad de escritura### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1,943 LOC**: capa MCP compatible con el sistema de archivos para detección de clientes, administración de habilidades y escritura de configuraciones MCP.

Soporte práctico actual:

-**7 clientes con capacidad de instalación**
-**16 clientes con capacidad de configuración**
-**33 objetivos de configuración**
-**19 perfiles de configuración**

Clientes con capacidad de instalación:

- Código Claude
- Cursores
- CLI de Géminis
- CLI del Códice
-Kiro
- Antigravedad
- Código abierto

Los clientes y destinos compatibles con la configuración incluyen:

- Configuración de Claude, escritorio de Claude y configuración del proyecto de Claude
- Usuario del cursor y configuración del espacio de trabajo.
- Espacio de trabajo de VS Code, usuario, información privilegiada y configuración del contenedor de desarrollo
- Configuración de usuario y espacio de trabajo de Gemini
- Configuración de usuario antigravedad
- Usuario de Kiro, espacio de trabajo y rutas heredadas
- Configuración TOML del Codex CLI
- Configuración de usuario y espacio de trabajo de OpenCode.
- Configuración de línea
- Configuración de repositorio y usuario de GitHub Copilot CLI
- Configuración de usuario, proyecto y espacio de trabajo de Kilo
- Continuar espacio de trabajo YAML
- Configuración de usuario de windsurf
- Configuración del espacio de trabajo de Zed
- Configuración de usuario de ganso

El sidecar es intencionalmente honesto acerca de los límites:

- escribe sólo dentro de una lista de permitidos
- obtiene una vista previa por defecto
- mantiene escritores de primera clase sólo cuando los documentos oficiales exponen un formato estable
- no pretende que todos los productos compatibles con MCP sean también un objetivo de instalación de habilidades### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC combinado**: API de registro de solo lectura más middleware de gobernanza.

Puntos finales importantes:

- `/salud`
-`/openapi.json`
- `/admin/tiempo de ejecución`
- `/v1/habilidades`
- `/v1/habilidades/:id`
- `/v1/búsqueda`
- `/v1/comparar`
- `/v1/paquetes`
- `/v1/instalar/plan`
- `/v1/skills/:id/descargar/*`

Línea base de gobernanza ya implementada:

- autenticación de token de portador
- autenticación de clave API
- autenticación de token de administrador
- limitación de velocidad en proceso
- solicitar identificaciones
- registro de auditoría
- Listas de permitidos CORS
- Listas de IP permitidas
- manejo de proxy de confianza
- modo de mantenimiento### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1857 LOC combinados en el servidor principal, el tiempo de ejecución y los archivos del coordinador**: ciclo de vida de tareas JSON-RPC 2.0 para flujos de trabajo de agente a agente.

Métodos admitidos:

- `mensaje/enviar`
- `mensaje/transmisión`
- `tareas/obtener`
- `tareas/cancelar`
- `tareas/volver a suscribir`
- `tareas/pushNotificationConfig/*`

Operaciones actuales:

- `descubrir-habilidades`
- `pila de recomendaciones`
- `preparar-plan-instalar`

Modelo de durabilidad y coordinación:

- persistencia local de memoria, JSON o SQLite
- reiniciar currículum
- ejecutor de proceso externo opcional
- Coordinación de colas alquiladas opcionales para trabajadores SQLite compartidos.
- Coordinación opcional respaldada por Redis como ruta alojada avanzada

La elección arquitectónica clave aquí es**primera operación local simple**. Redis existe como una opción avanzada, pero la ruta predeterminada del producto sigue siendo local y con poca dependencia.---

## ⚙️ Build Pipeline

| Guión | Idioma | Propósito |
|:-------|:---------|:--------|
| 📊 `skill_metadata.py` | Pitón | Validación, taxonomía, puntuación y escaneo de seguridad estático |
| ✅ `validar_skills.py` | Pitón | Generación de metadatos por habilidad y para el resumen raíz |
| 📑 `generate_index.py` | Pitón | Índice de habilidades, manifiestos, archivos, firmas y sumas de verificación |
| 🏗️ `build_catalog.js` | Nodo.js | Final `dist/catalog.json` y `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Pitón | Auditoría y reescritura de categorías canónicas |
| 🔍 `verify_archives.py` | Pitón | Verificación de archivo y firma |

Dos detalles son importantes desde el punto de vista operativo:

1. `dist/` es parte del contrato de ejecución y está comprometido intencionalmente
2. la compilación es lo suficientemente determinista como para admitir la verificación de CI y la firma de lanzamiento---

## 📦 Published Catalog

El catálogo público actual abarca 32 habilidades:

-**Descubrimiento y planificación**: `encontrar habilidades`, `lluvia de ideas`, `arquitectura`, `depuración`
-**Sistemas de diseño y accesibilidad**: `design-systems-ops`, `accessibility-audit`
-**Entrega de productos y pila completa**: `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
-**Seguridad**: `auditor de seguridad`, `escáner de vulnerabilidades`, `respuesta a incidentes`, `modelado de amenazas`
-**Flujos de trabajo del mantenedor de OSS**: `documentación`, `registro de cambios`, `create-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering`
-**Ingeniería de IA**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Los siete paquetes están totalmente respaldados:

- `esenciales` → `4/4`
- `pila completa` → `5/5`
- `diseño` → `4/4`
- `seguridad` → `4/4`
- `devops` → `5/5`
- `ai-ingeniero` → `5/5`
- `oss-mantenedor` → `4/4`

Puntuación actual repartida desde el catálogo generado:

- puntuaciones de calidad: `94, 95, 96, 97, 100`
- puntuaciones de mejores prácticas: `98, 99, 100`
- puntuación de seguridad: todas las habilidades publicadas actualmente "95"

Gama alta representativa:

- `omni-figma` → `calidad 100`, `mejores_practicas 100`
- `auditoría de accesibilidad` → `calidad 99`, `mejores_prácticas 100`
- `flujos de autenticación` → `calidad 97`, `mejores prácticas 99`
- `operaciones-de-sistemas-de-diseño` → `calidad 97`, `mejores_prácticas 99`
- `ingeniería de lanzamiento` → `calidad 97`, `mejores_prácticas 99`
- `modelado de amenazas` → `calidad 97`, `mejores_prácticas 99`
- `ingeniería de contexto` → `calidad 97`, `mejores_prácticas 99`

Extremo inferior representativo dentro de la banda superior actual:

- `arquitectura` → `calidad 94`, `mejores_practicas 98`
- `registro de cambios` → `calidad 94`, `mejores_practicas 98`
- `create-pr` → `calidad 95`, `mejores_practicas 98`

Esto es intencional. El anotador ahora distingue “excelente” de “excepcional” en lugar de aplanar todo el catálogo en la parte superior.---

## 🌟 Strengths

1.**Diseño que prioriza el artefacto**
   Cada superficie de tiempo de ejecución consume el mismo catálogo y manifiestos generados.
2.**Amplia cobertura de protocolo**
   CLI, API, MCP y A2A coexisten sin fragmentar el modelo de datos.
3.**Sólida ergonomía de producto local**
   La instalación guiada, el shell visual, `config-mcp` y los valores predeterminados de ejecución en seco hacen que el proyecto sea utilizable más allá de los usuarios avanzados.
4.**Postura de seguridad honesta**
   Las escrituras locales permitidas, el escaneo estático, la firma, las sumas de verificación y la verificación de versiones son todos explícitos.
5.**Alcance de MCP saludable**
   El proyecto ahora admite un amplio conjunto de clientes actuales con capacidad MCP sin pretender que los objetivos indocumentados sean estables.---

## 🔮 Opportunities

1.**Cobertura de paquete más profunda**
   El siguiente paso es la especialización dentro de los paquetes existentes, no sólo una amplia cobertura.
2.**Semántica de anotador más rica**
   Todavía hay espacio para evaluar la profundidad del paquete de referencia y la calidad del flujo de trabajo de manera más semántica.
3.**Más escritores de clientes solo cuando esté justificado**
   La expansión debe ser disciplinada y atada a documentos oficiales estables.
4.**Descomposición del validador**
   `skill_metadata.py` sigue siendo un módulo grande y se beneficiaría de la descomposición interna con el tiempo.
5.**Escalada de gobernanza alojada**
   La línea base actual en proceso es suficiente para el autohospedaje, pero la implementación empresarial eventualmente requeriría puerta de enlace externa e integración de identidad.