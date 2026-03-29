# 📊 Skill Classification and Metadata (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**El clasificador local que califica cada habilidad durante la validación y la construcción, generando perfiles legibles por máquina para todo el catálogo.**---

## 📊 Status

| Salida | Generado |
|:-------|:----------|
| ✅ Raíz `metadata.json` | Resumen de todo el repositorio |
| ✅ Por habilidad `skills/<skill>/metadata.json` | Clasificaciones individuales |
| ✅ Catálogo `dist/catalog.json` | Catálogo publicado con partituras |
| ✅ Manifiestos `dist/manifests/<skill>.json` | Datos legibles por máquina por habilidad |

Generado por: `python3 tools/scripts/validate_skills.py`

Instantánea del repositorio actual:

- 32 habilidades publicadas
- puntuación de calidad media `96,3`
- puntuación media de mejores prácticas `98,7`
- puntuación de seguridad media `95,0`
- extensión de calidad actual `94, 95, 96, 97, 100`
- las mejores prácticas actuales se extienden `98, 99, 100`---

## 🎯 Purpose

El clasificador proporciona a cada habilidad un**perfil coherente legible por máquina**antes de llegar al catálogo. Realiza cuatro trabajos:

1. 📋**Parse**— Portada de YAML y cuerpo de rebajas
2. 🏷️**Normalizar**— Etiquetas de categoría para taxonomía canónica
3. 📊**Clasificar**: puntuación de madurez, mejores prácticas, calidad y seguridad
4. 📁**Emitir**: artefactos de metadatos consumidos por scripts de compilación, documentos y CI---

## 🏷️ Canonical Taxonomy

**18 categorías canónicas**con asignación automática de alias:

| Categoría | Dominio | Alias ​​comunes |
|:---------|:-------|:---------------|
| 💻 `desarrollo` | Desarrollo de software general | `codificación`, `programación` |
| 🎨 `interfaz` | Interfaz y interfaz de usuario | `ui`, `diseño web` |
| 🔧 `backend` | Backend y API | `servidor`, `api` |
| 🌐 `web completa` | Web de extremo a extremo | `web`, `pila completa` |
| 🛠️ `herramientas` | Herramientas para desarrolladores | `servicios públicos` |
| ⚙️ `cli-automatización` | CLI y automatización | `scripting`, `flujo de trabajo` |
| 📊 `negocios` | Estrategia empresarial | `estrategia` |
| 📐 `producto` | Gestión de productos | `pm` |
| 🎯 `diseño` | Diseño visual y UX | `ux` |
| 🤖 `datos-ai` | Aplicaciones de datos e inteligencia artificial | `datos`, `análisis` |
| 🧠 `agentes-ai` | Patrones de agentes de IA | `agentes` |
| 📈 `aprendizaje automático` | Modelos y capacitación de ML | `ml` |
| 🔌`devops` | Infraestructura | `infraestructura`, `nube` |
| 🛡️ `pruebas-seguridad` | Pruebas y seguridad | `pruebas`, `seguridad`, `qa` |
| 📖 `documentación` | Gestión de documentos | `docs` |
| 🎬 `contenido-medios` | Creación de contenido | `medios`, `contenido` |
| 💬 `comunicación` | Herramientas de comunicación | `chatear` |
| ❓ `sin categoría` | Reserva predeterminada | — |

> Las etiquetas heredadas como "flujo de trabajo", "arquitectura", "infraestructura" se normalizan automáticamente mediante el mapeo de alias.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Nivel | Etiqueta | Criterios |
|:------|:------|:---------|
|**L1**| `metadatos` | Frontmatter más cuerpo mínimo |
|**L2**| `instrucciones` | Instrucciones escritas sustanciales |
|**L3**| `recursos` | Scripts empaquetados o recursos empaquetados más completos |

Señales adicionales rastreadas: `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

La heurística evalúa:

| Señal | Qué comprueba |
|:-------|:---------------|
| 📛 Calidad de babosa | formato del campo `nombre` |
| 📝 Descripción | Claridad, extensión, contenido informativo |
| 📐 Estructura | Secciones y jerarquía del documento |
| 💡 Ejemplos | Vallas de código y bloques de ejemplo |
| 🔗 Referencias | `Referencias/`, `scripts/` y ayudantes del paquete de soporte locales vinculados |
| 🧰 Operatividad | Ejemplos de scripts locales ejecutables y fragmentos de flujo de trabajo concretos |
| 🧩 Profundidad del paquete de soporte | Múltiples familias de soporte, archivos reutilizables, metadatos de agentes y activos operativos |
| 🩺 Solución de problemas | Pares explícitos de "síntomas" y "solución" |
| 📚 Cobertura | Secciones `Cuándo utilizarlo`, `Prácticas recomendadas`, `Solución de problemas` y `Recursos adicionales` |
| 🌐 Portabilidad | Redacción independiente de las herramientas |
| 📅 Frescura | Evitación de fechas codificadas |

**Niveles actuales**

| Nivel | Rango de puntuación |
|:-----|:-----------|
| `excelente` | 90-100 |
| `bueno` | 70-89 |
| `justo` | 50-69 |
| `necesita trabajo` | 0-49 |

El anotador es intencionalmente**lo suficientemente semántico como para crear una distribución**entre las habilidades maduras. Una habilidad con una estructura limpia puede puntuar bien, pero para llegar a la banda superior también necesita señales profundas como:

- múltiples ejemplos, no solo uno
- múltiples casos de solución de problemas
- orientación de habilidades relacionadas
- paquetes de soporte local más completos
- más de una familia de apoyo más allá de la simple prosa, idealmente incluyendo `agentes/` o `activos/` donde agregan reutilización real
- una sección dedicada `## Flujo de trabajo` con pasos contables
- al menos una pequeña tabla operativa o mapa de decisiones cuando mejora la claridad de la ejecución
- más especificidad operativa que una plantilla simple
- profundidad del flujo de trabajo más clara y activos de apoyo a las decisiones
- profundidad del paquete de soporte que va más allá de un archivo `referencias/` y un script vinculado
- suficientes archivos de soporte reutilizables para que parezca un kit de flujo de trabajo, no un complemento de una sola nota
- suficiente densidad operativa para separar un contorno pulido de un kit de flujo de trabajo reutilizable

Eso significa que una habilidad estructuralmente completa aún puede ubicarse en los 90 en lugar de "100" si su paquete de soporte es más limitado, sus activos de decisión son más delgados o su densidad operativa es menor que las habilidades más sólidas del catálogo.---

### ⭐ Quality Score (0-100)

La heurística combina:

| Señal | Peso |
|:-------|:-------|
| 📝 Completitud corporal | Medio-alto |
| 📋 Descripción precisión | Medio |
| 📊 Integridad de los metadatos | Medio |
| 📅 Recencia (`date_updated`) | Medio |
| 📦 Recursos empaquetados | Medio |
| 📋 Contribución de mejores prácticas | Medio |
| 🧠 Profundidad semántica | Medio-alto |
| 🛠️ Profundidad operativa | Medio |
| 📚 Riqueza del paquete de soporte | Medio |

**Niveles de calidad:**

| Nivel | Rango de puntuación |
|:-----|:-----------|
| 💎 `platino` | 80+ |
| 🥇 `oro` | 65-79 |
| 🥈 `plata` | 50-64 |
| 🥉 `bronce` | 35-49 |
| 🌱 `iniciador` | 0-34 |---

### 🛡️ Security Score (0-100)

La capa de seguridad combina:

| Escáner | Siempre habilitado | Qué hace |
|:--------|:---------------|:-------------|
| 🔍**Estático**| ✅ Sí | Analiza SKILL.md, archivos empaquetados y scripts |
| 🦠**AlmejaAV**| ⚙️ Opcional | Escaneo de malware mediante `clamscan` |
| 🔒**VirusTotal**| ⚙️ Opcional | Búsqueda de hash (sin carga) |

**Familias de reglas de escáner estático:**
- 🎭 Patrones rápidos de inyección y exfiltración
- 💣 Comandos de shell destructivos
- 🔑 Rutas de acceso a credenciales o sistemas operativos sospechosas
- ⚠️ Primitivas de script arriesgadas (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Forma de salida de seguridad:**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

| Sección | Campos |
|:--------|:-------|
| 🆔 Identidad | `id`, `slug`, `display_name` |
| 🏷️ Taxonomía | `categoría_raw`, `categoría_canónica`, `categoría_inferida` |
| 📋 Autoría | etiquetas, herramientas, complejidad, riesgo, fuente, autor |
| 📅 Fechas y caminos | `fecha_añadida`, `fecha_actualizada`, rutas |
| 📊 Recursos | Contadores de archivos y referencias |
| 📝 Señales de contenido | Recuento de palabras, longitud del cuerpo, indicadores estructurales |
| 🧠 Profundidad semántica | Pasos del flujo de trabajo, ejemplos, profundidad de la resolución de problemas, activos de decisión, familias de enlaces de soporte |
| 🧩 Estructura del paquete de soporte | Recuentos de archivos de soporte, familias vinculadas, `agentes/`, `activos/` y ejemplos reutilizables |
| 🎯 Madurez | Banderas de nivel, etiqueta, scripts/archivos |
| 📋 Mejores prácticas | Puntuación y nivel |
| ⭐ Calidad | Puntuación, nivel y desglose semántico |
| 🛡️ Seguridad | Puntuación, nivel, estado, resultados |
| ✅ Validación | Estado, errores, advertencias |### Root (`metadata.json`)

| Sección | Campos |
|:--------|:-------|
| 📊 Resumen | Conteos, promedios, distribución de categorías |
| 🏷️ Taxonomía | Recuentos de categorías |
| 🎯 Distribución | Nivel de habilidad, nivel de calidad, nivel de seguridad |
| ✅ Validación | El estado cuenta |
| 📋 Lista de habilidades | Resúmenes compactos por habilidad |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

Esto configura `git` para usar `.githooks/pre-commit`, que regenera metadatos y artefactos de catálogo antes de confirmar y prepara los archivos generados automáticamente.