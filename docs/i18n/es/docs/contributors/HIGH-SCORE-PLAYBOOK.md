# 🏆 High-Score Skill Playbook (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Lo que un Omni Skills `SKILL.md` necesita en la práctica para alcanzar puntuaciones de alta madurez, mejores prácticas, calidad y seguridad.**---

## 🎯 Purpose

Esta guía explica cómo el clasificador del repositorio realmente recompensa una habilidad.

Úsalo cuando quieras:

- crea una nueva habilidad que llegue a las bandas de mayor puntuación
- mejorar una habilidad existente que está estancada en "bueno" o bajo "excelente"
- comprender por qué una habilidad con un formato decente todavía no se considera un activo operativo excepcional

Este es el complemento orientado a los contribuyentes para:

- [Barra de calidad](QUALITY-BAR.md)
- [Anatomía de habilidades](SKILL-ANATOMY.md)
- [Clasificación de habilidades](../specs/SKILL-CLASSIFICATION.md)

Punto de referencia actual para el catálogo en vivo:

- 32 habilidades publicadas
- diferencial de calidad actual: `94, 95, 96, 97, 100`
- Difusión de mejores prácticas actuales: `98, 99, 100`
- gama alta actual: `omni-figma` con calidad `100/100` y mejores prácticas `100/100`---

## 🧱 What High Scores Really Mean

El clasificador**no**recompensa las rebajas por sí solo.

Las habilidades de alta puntuación son habilidades que son:

-**descubrible**: la descripción dice claramente qué hace la habilidad y cuándo usarla
-**operacional**: la habilidad incluye scripts locales, referencias y ejemplos ejecutables
-**diagnóstico**: ayuda al agente a recuperarse cuando las cosas van mal
-**específico**: se centra en un flujo de trabajo, no en consejos amplios
-**seguro**: evita patrones riesgosos y ofrece resultados limpios del escáner

En la práctica, las habilidades más sólidas se comportan más como un**pequeño kit de flujo de trabajo empaquetado**que como una simple nota de rebajas.---

## 📋 Score Targets

Utilice estos destinos al crear:

| Dimensión | Objetivo fuerte | Objetivo excepcional |
|:----------|:--------------|:-------------------|
| 🎯 Madurez | `L3` | `L3` con múltiples recursos de soporte |
| 📋 Mejores prácticas | `90+` | `96+` |
| ⭐ Calidad | `85+` | `90+` |
| 🛡️ Seguridad | `95+` | `95+` sin resultados |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Su frontmatter debe hacer que la habilidad sea fácil de clasificar y fácil de descubrir:

- `nombre` coincide exactamente con el directorio
- La `descripción` explica**qué**y**cuándo**
- `categoría`, `etiquetas`, `herramientas`, `complejidad`, `riesgo`, `fuente`, `autor` y fechas están presentes

Buena descripción forma:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Mala descripción forma:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

Las habilidades más fuertes incluyen consistentemente estas secciones:

- `## Descripción general`
- `## Cuándo usar esta habilidad`
- `## Flujo de trabajo`
- `## Ejemplos`
- `## Mejores prácticas`
- `## Solución de problemas`
- `## Recursos adicionales`

Si falta uno de estos, la puntuación aún puede ser buena, pero resulta más difícil parecer excepcional.---

### 3. Runnable Local Support

Las habilidades de mayor puntuación suelen incluir:

- `referencias/checklist.md`
- uno o más scripts auxiliares en `scripts/`
- al menos un ejemplo resuelto en `examples/`
- `agents/openai.yaml` cuando la habilidad está destinada a la invocación directa del agente
- enlaces directos desde `SKILL.md` a esos archivos locales

Esto es importante porque el clasificador trata una habilidad con**material de apoyo incluido**como más procesable que una que solo apunta hacia afuera.

Mínimo recomendado:```text
skills/<skill>/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── examples/
│   └── example.md
├── references/
│   └── checklist.md
└── scripts/
    └── render_<artifact>.py
```

---

### 4. Examples That Actually Help

Ejemplos de puntuación alta son:

- concreto
- escrito con una valla real como `bash` o `python`
- vinculado a un script local o comando repetible
- representante del flujo de trabajo

Bueno:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Débil:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

El evaluador premia la resolución de problemas que ayuda a un agente a recuperarse, no solo a reconocer un problema.

Formato preferido:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Esto es más fuerte que una nota vaga como:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

El clasificador ahora distingue entre una habilidad que es simplemente completa y una que es genuinamente profunda.

Señales que ayudan:

- múltiples ejemplos concretos
- múltiples casos de solución de problemas
- orientación sobre habilidades relacionadas
- paquetes de referencia más ricos
- una sección visible `## Flujo de trabajo` con pasos numerados que el anotador puede contar directamente
- al menos una tabla operativa o mapa de ejecución donde se aclare el flujo de trabajo
- más de un directorio de soporte o tipo de activo
- secciones de flujo de trabajo con suficientes pasos para guiar la ejecución
- activos de decisión como listas de verificación, rúbricas, matrices, paquetes o guías
- Mayor diversidad de paquetes de soporte entre `referencias/`, `scripts/`, `agentes/`, `ejemplos/` o `activos/`
- suficientes archivos de soporte reutilizables para que parezcan un kit, ni un solo ayudante escondido al lado de la rebaja
- más de un archivo auxiliar cuando el flujo de trabajo es lo suficientemente complejo como para justificar un paquete de soporte
- suficiente profundidad del cuerpo para cubrir compensaciones y modos de falla
- orientación operativa más densa, porque el goleador ahora distingue el formato pulido de la profundidad del flujo de trabajo genuinamente reutilizable

Señales que**no**ayudan mucho:

- repetir la misma instrucción con diferentes palabras
- texto de relleno genérico
- agregar títulos sin agregar sustancia debajo de ellos---

## 🧪 Fast Checklist Before You Commit

Utilice esta lista de verificación antes de ejecutar la validación:

- la descripción dice**qué**y**cuándo**
- la habilidad se centra en un flujo de trabajo
- `## Workflow` existe y contiene pasos numerados o con viñetas
- existe al menos un ejemplo ejecutable
- `referencias/`, `scripts/` e idealmente `ejemplos/` están vinculados desde `SKILL.md`
- `agents/openai.yaml` existe cuando la habilidad está destinada a la invocación directa en clientes de agentes
- la solución de problemas utiliza "Síntomas" y "Solución"
- la habilidad puede clasificarse razonablemente como "L3"
- no hay comandos riesgosos ni rutas sospechosas presentes

Luego ejecuta:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- la descripción es correcta pero demasiado genérica
- la rebaja tiene secciones pero no profundidad operativa
- los ejemplos no apuntan a ayudantes locales
- existe solución de problemas pero no es un diagnóstico
- hay muy pocas etiquetas o identificadores de herramientas
- la habilidad es segura y limpia, pero aún es demasiado superficial para considerarla excepcional---

## 🧭 Practical Rule

Si tu habilidad se siente como:

- una**plantilla**: puede pasar
- una**guía**: puede obtener una buena puntuación
- un**paquete de flujo de trabajo**: es mucho más probable que obtenga una puntuación alta