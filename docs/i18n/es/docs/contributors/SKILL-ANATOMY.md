# 🔬 Anatomy of a Well-Written Skill (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Estructura y expectativas de calidad para Omni Skills `SKILL.md`: el formato de creación que impulsa todo el catálogo.**---

## 📐 The Two Parts

Cada `SKILL.md` se compone de dos secciones distintas:### 1️⃣ Frontmatter (YAML Metadata)

Metadatos legibles por máquina entre delimitadores `---`. Potencia:

- 📚 El índice de habilidades y la generación del catálogo.
- 🔎 Búsqueda y filtrado CLI
- ✅ Validación y puntuación de calidad.
- 📊 Artefactos de clasificación `metadata.json` generados
- 📋 Manifiestos por habilidad en `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Instrucciones legibles por humanos (y legibles por agentes). Escríbalo como si estuviera**informando a un desarrollador sénior**sobre cómo realizar una tarea, lo suficientemente específica como para que un agente de IA pueda seguirla sin adivinar.---

## 📋 Frontmatter Reference

| Campo | Requerido | Tipo | Descripción |
|:------|:---------|:-----|:------------|
| `nombre` | ✅ | cadena | Debe coincidir con el nombre del directorio, con guiones en minúsculas |
| `descripción` | ✅ | cadena | Descripción de una línea (10-200 caracteres) |
| `versión` | ⚡ | cadena | Versión semántica de la habilidad en sí (por ejemplo, `"0.1.1"`) |
| `categoría` | ⚡ | cadena | Una categoría canónica de la taxonomía del repositorio |
| `etiquetas` | ⚡ | cadena[] | Etiquetas buscables para descubrimiento |
| `complejidad` | ⚡ | cadena | `principiante` · `intermedio` · `avanzado` · `experto` |
| `riesgo` | ⚡ | cadena | `seguro` · `precaución` · `ofensivo` · `crítico` |
| `herramientas` | ⚡ | cadena[] | Asistentes de codificación de IA probados |
| `fuente` | ⚡ | cadena | `omni-team` · `comunidad` · `oficial` |
| `autor` | ⚡ | cadena | Atribución |
| `fecha_agregada` | ⚡ | cadena | Fecha ISO |
| `fecha_actualizada` | ⚡ | cadena | Fecha ISO |

> ✅ = Siempre requerido · ⚡ = Requerido en modo estricto

La versión de la habilidad es independiente de la versión del paquete npm. El paquete es actualmente "0.1.3", pero las habilidades existentes pueden permanecer válidamente en su propia versión semántica.---

## 🏷️ Canonical Categories

La taxonomía del repositorio define actualmente**18 categorías canónicas**:

| Categoría | Dominio |
|:---------|:-------|
| 💻 `desarrollo` | Desarrollo de software general |
| 🎨 `interfaz` | Marcos frontend y UI |
| 🔧 `backend` | Servicios backend y API |
| 🌐 `web completa` | Desarrollo web de extremo a extremo |
| 🛠️ `herramientas` | Herramientas y utilidades para desarrolladores |
| ⚙️ `cli-automatización` | Herramientas CLI y scripts de automatización |
| 📊 `negocios` | Procesos y estrategia de negocio |
| 📐 `producto` | Gestión y diseño de producto |
| 🎯 `diseño` | Diseño visual y UX |
| 🤖 `datos-ai` | Aplicaciones de ingeniería de datos y IA |
| 🧠 `agentes-ai` | Desarrollo y patrones de agentes de IA |
| 📈 `aprendizaje automático` | Modelos y formación de ML |
| 🔌`devops` | Infraestructura y despliegue |
| 🛡️ `pruebas-seguridad` | Prácticas de prueba y seguridad |
| 📖 `documentación` | Generación y gestión de documentación |
| 🎬 `contenido-medios` | Creación de contenidos y medios |
| 💬 `comunicación` | Herramientas de comunicación y flujos de trabajo |
| ❓ `sin categoría` | Predeterminado cuando no se encuentra ninguna coincidencia |

> Las etiquetas heredadas como "flujo de trabajo", "arquitectura", "infraestructura", "seguridad" y "pruebas" se normalizan automáticamente mediante el mapeo de alias.---

## 📝 Body Structure

Un conjunto de habilidades bien redactado sigue esta jerarquía:

### 📌 Descripción general (obligatoria)
2 o 3 oraciones sobre**qué**hace la habilidad y**por qué**existe.

### 🎯 Cuándo usarlo (obligatorio)
Lista con viñetas de**escenarios específicos**donde se aplica esta habilidad.

### 📋 Instrucciones básicas (obligatorias)
El**proceso paso a paso**que debe seguir el agente. Sea explícito. Sea específico. Los agentes trabajan mejor con instrucciones claras e inequívocas.

### 💡 Ejemplos (recomendado)
Indicaciones concretas, bloques de código o resultados esperados.**Cuanto más específico, mejor.**

### ✅ Mejores prácticas (recomendadas)
Utilice el formato ✅ Hacer / ❌ No formatear para un escaneo rápido.

### 🔧 Solución de problemas (opcional)
Problemas comunes y sus soluciones.

### 🔗 Habilidades relacionadas (opcional)
Referencias cruzadas a habilidades complementarias.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Centrado en**un flujo de trabajo o dominio específico**
- 📌 Las instrucciones son**lo suficientemente claras para que una IA**las siga sin interpretación humana
- 💡 Incluye**ejemplos concretos**con comportamiento esperado
- 🛡️ Tiene una guía adecuada sobre**manejo de errores**
- 📊 Produce metadatos saludables: categoría canónica, madurez L2+, calidad 70+
- 🧰 Incluye un paquete de soporte reutilizable, no solo en prosa, idealmente en `referencias/`, `scripts/`, `ejemplos/` y `agentes/` cuando corresponda

Para conocer los patrones de puntuación más sólidos que llevan las habilidades a los niveles más altos, consulte [Libro de estrategias de puntuación más alta](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Consejos genéricos que podrían aplicarse a cualquier cosa.
- 🤷 Instrucciones vagas como "escribir buen código"
- 🚫 Sin ejemplos ni bloques de código
- ⚠️ Faltan campos iniciales
- 📉 Puntuación de calidad baja (por debajo de 50)