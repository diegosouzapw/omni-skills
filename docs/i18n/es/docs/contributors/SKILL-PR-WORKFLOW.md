# Skill PR Workflow (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Este es el flujo de repositorio canónico para solicitudes de extracción que agregan o mejoran sustancialmente una o más habilidades nativas.

Úselo cuando:

- agregar una nueva habilidad en `skills/`
- profundizar un paquete con nuevas habilidades de dominio
- envío de una expansión de paquete de soporte más grande
- validar una rama con el potenciador privado antes de que los mantenedores la fusionen## Target Outcome

Una fuerte habilidad nativa de relaciones públicas aterriza con:

- una habilidad nativa en `skills/`
- contenido suficiente para que el validador público lo clasifique e indexe
- pasar validaciones y pruebas públicas
- procesamiento potenciador automático durante el PR
- un PR de seguimiento `skills_omni/` cuando se publiquen derivados mejorados
- ingesta nativa conservada en su idioma original cuando sea necesario
- salida mejorada seleccionada y reescrita al inglés
- un flujo unidireccional de nativo a curado que no devuelve `skills_omni/` a la ingesta de potenciador nativo## Enhancer Outcome States

El potenciador de relaciones públicas públicas ahora informa cuatro estados visibles para el mantenedor:

- `completado`
  El derivado mejorado se generó limpiamente y es elegible para la publicación complementaria `skills_omni/`.
- `degradado`
  El potenciador finalizó, pero utilizó una ruta alternativa o produjo advertencias. Aún se espera la revisión del mantenedor antes de tratar el derivado como saludable.
- `bloqueado`
  La ejecución se detuvo por problemas de infraestructura o de validación, como una falla de verificación previa de OmniRoute alojado o una falla de validación de candidato que debería impedir la publicación.
- `fallido`
  El potenciador sufrió un error de ejecución inesperado y necesita una investigación por parte del mantenedor.## Recommended Branch Shape

Crea una rama enfocada:```bash
git checkout -b feat/<short-skill-theme>
```

Ejemplos:

- `hazaña/evaluaciones-de-observabilidad-de-incidentes`
- `feat/devops-skill-pack`
- `hazaña/paquete-de-habilidades-de-seguridad`## Native Intake Rules

La superficie de entrada de público es intencionadamente permisiva.

Mínimo:```text
skills/<skill>/
└── SKILL.md
```

Recomendado pero ya no es necesario para su ingesta:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

La contribución nativa puede ser aproximada, incompleta o estar fuera del estándar normal del paquete de soporte. Eso es deliberado. `skills/` es la superficie de entrada nativa, no la superficie derivada curada.

Política lingüística:

- la entrada nativa en `skills/` puede estar escrita en cualquier idioma
- el potenciador mantiene la instantánea nativa tal como se envió para su procedencia
- el derivado seleccionado en `skills_omni/` siempre debe estar escrito en inglés

La barra editorial más estricta ahora se aplica a:

- los metadatos generados y los controles de seguridad
- la revisión del potenciador privado
- el derivado seleccionado de seguimiento en `skills_omni/`## Authoring Sequence

1. Cree `habilidades/<habilidad>/SKILL.md`.
2. Agregue material preliminar si puede, pero el material inicial faltante o incompleto ya no bloquea la entrada nativa por sí solo.
3. Agregue `agents/`, `references/`, `examples/` y `scripts/` cuando ya los tenga.
4. Actualice `data/bundles.json` si la habilidad profundiza un paquete existente.
5. Abra el PR. La automatización del repositorio ahora hace el resto.## Validation Sequence

Los contribuyentes pueden ejecutar esta secuencia exacta antes de abrir el PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Si el cambio también afecta el tiempo de ejecución o el comportamiento del empaquetado, ejecute también:```bash
npm run smoke
```

## What Happens Automatically During the PR

Cuando un PR se abre o se sincroniza y solo toca los archivos de admisión de habilidades nativas en `skills/` más `data/bundles.json` opcional, el repositorio público ahora activa el potenciador privado automáticamente.

Flujo automatizado actual:

1. El flujo de trabajo público "Validar habilidades" se ejecuta en el PR y verifica la validación, la compilación, los artefactos generados y las pruebas.
2. El flujo de trabajo público "Mejorar las habilidades de relaciones públicas" comienza en paralelo y procesa las habilidades nativas modificadas una por una en modo "en vivo".
3. El potenciador lee la habilidad nativa de `skills/`, investiga las mejores prácticas actuales y escribe un candidato mejorado revisado en el espacio de trabajo privado.
4. El potenciador mantiene la instantánea de entrada ascendente en su idioma original cuando es necesario, pero reescribe la salida seleccionada en inglés.
5. El potenciador publica el progreso en el PR de origen.
6. El potenciador actualiza el comentario de estado de PR después de cada habilidad procesada con los totales de lote y el estado más reciente.
7. Cuando finaliza, materializa el derivado mejorado en `skills_omni/` y abre o actualiza un PR complementario en el repositorio público solo para salidas `completas` y `degradadas`.
8. Después de que el PR se fusiona con `main`, el sondeador privado con reconocimiento de repositorio reprocesa cualquier habilidad nativa modificada, actualiza `workspace/enhanced/skills/<skill>/` y mantiene la línea de base privada mejorada alineada con la fuente nativa pública más reciente.
9. Después de la fusión, el flujo de trabajo de la versión pública modifica la versión del paquete npm, regenera los artefactos del catálogo, publica una versión y etiqueta la nueva versión automáticamente.

Límite de tarifa:

- El potenciador de relaciones públicas actualmente procesa**1 habilidad por minuto**
- un PR con 40 nuevas habilidades nativas puede permanecer en la cola de mejora durante unos 40 minutos
- el PR muestra que funciona como una ejecución de CI en progreso más un comentario de progreso que avanza habilidad por habilidad

El colaborador no necesita ejecutar el potenciador manualmente.## No-Loop Rule For `skills_omni/`

La superficie curada es intencionalmente unidireccional:

- la entrada nativa ingresa a través de `skills/`
- el potenciador privado revisa esa entrada nativa
- La salida seleccionada se propone en `skills_omni/`
- `skills_omni/` nunca más se trata como ingesta nativa
- Las actualizaciones nativas posteriores aún vuelven a ingresar a través de `skills/` y reemplazan la línea base privada mejorada después del reprocesamiento.

El repositorio ahora impone ese límite:

- Se rechazan los RP públicos directos que modifican `skills_omni/`
- allí solo se aceptan relaciones públicas complementarias creadas por automatización de la familia de sucursales `skills-omni/pr-*`
- Los RP mixtos que intentan cambiar tanto `skills/` como `skills_omni/` a la vez son rechazados## Automatic Versioning After Merge

Las fusiones de habilidades con "principal" ahora activan automáticamente el flujo de trabajo de lanzamiento del repositorio.

Política de versión actual del paquete:

- el parche incrementa en `+1` por cada fusión calificada
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- después de `.10`, el paquete pasa al siguiente menor y restablece el parche
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Rutas de activación de la versión actual:

- `habilidades/**`
- `habilidades_omni/**`
- `datos/paquetes.json`

Ese trabajo de liberación automática:

1. calcula la siguiente versión del paquete desde `package.json`
2. elimina `package.json` y `package-lock.json`
3. regenera `metadata.json`, `skills_index.json`, `dist/` y `docs/CATALOG.md`
Cuarto, ejecuta el estricto proceso de verificación de versiones.
5. confirma la versión mejorada a "principal"
6. crea una etiqueta Git para la nueva versión
7. publica artefactos de npm y GitHub Release

Nota importante sobre la implementación:

- GitHub solo registra un nuevo archivo de flujo de trabajo como flujo de trabajo del repositorio activo después de que ese archivo llega a la rama predeterminada.
- Hasta que "Enhance PR Skills" llegue a "principal", los contribuyentes pueden leer el proceso documentado, pero GitHub no ejecutará ese flujo de trabajo automáticamente en los RP públicos todavía.
- Después de que el flujo de trabajo se fusiona con "principal", el comportamiento descrito anteriormente se convierte en la ruta de entrada predeterminada para futuros RP de habilidades nativas.## Native vs Enhanced

Este repositorio ahora tiene dos superficies distintas:

- `habilidades/`
  Ingesta nativa. Esto conserva la contribución original tal como se presentó.
- `habilidades_omni/`
  Salida derivada omnimejorada propuesta por automatización y mantenida por Omni Skills Team.

Reglas de atribución para `skills_omni/`:

- el derivado mejorado pasa a ser omnimantenido
- el colaborador original y la habilidad nativa ascendente permanecen acreditados
- cada directorio mejorado mantiene un archivo `ATTRIBUTION.md` con la ruta ascendente, PR, autor y contexto de origen
- Cada directorio mejorado es solo una salida seleccionada y no debe volver a enviarse a la ruta de entrada del potenciador nativo.
- Se espera que cada directorio mejorado tenga una salida en inglés incluso cuando la fuente nativa ascendente no lo fuera## Manual Maintainer Commands

La automatización cubre la ingesta normal de relaciones públicas, pero los mantenedores aún pueden ejecutar el potenciador privado manualmente cuando sea necesario.

Lote contra una diferencia de rama:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Revisión de una sola habilidad:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Resultados esperados del potenciador por habilidad:

- `espacio de trabajo/entrante/original/<id-ejecución>/<habilidad>/`
- `espacio de trabajo/candidatos-mejorados/<id-ejecución>/<habilidad>/`
- `espacio de trabajo/reports/<run-id>/research.json`
- `espacio de trabajo/reports/<run-id>/rewrite.json`
- `espacio de trabajo/reports/<run-id>/validation.json`
- `espacio de trabajo/reports/<run-id>/score-delta.json`
- `espacio de trabajo/informes/<id-ejecución>/review.md`
- `espacio de trabajo/informes/<id-ejecución>/research-prompt.md`
- `espacio de trabajo/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

El organismo de relaciones públicas debe declarar:

- qué habilidades se agregaron o mejoraron
- qué paquetes o flujos de trabajo profundizan
- qué validación se ejecutó
- si se ejecutó el potenciador automático
- si abrió o actualizó un PR complementario `skills_omni/`
- cualquier nota excepcional del mantenedor sobre atribución o limpieza de seguimiento## Reviewer Checklist

- la ingesta nativa es legítima y no maliciosa
- Se actualizaron los metadatos y manifiestos generados.
- las actualizaciones del paquete son intencionales
- la validación pública y los resultados de construcción son verdes
- el comentario del estado del potenciador coincide con las habilidades cambiadas reales y el estado del resultado final
- cualquier PR complementario `skills_omni/` conserva la atribución correctamente## Example PR Scope

Un buen ejemplo de relaciones públicas puede agregar un conjunto temático como:

- una habilidad de observabilidad o DevOps
- un incidente o habilidad de seguridad
- una evaluación de IA o habilidad de indicación

Esto es lo suficientemente grande como para ejercitar el puntaje, el potenciador automático, el flujo de publicación `skills_omni/`, los paquetes y el modelo de atribución sin convertir las relaciones públicas en una reescritura completa del catálogo.