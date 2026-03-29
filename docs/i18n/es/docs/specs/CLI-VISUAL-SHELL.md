# 🖥️ CLI Visual Shell Specification (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Contrato de comportamiento para la interfaz de usuario del terminal basado en Ink expuesta por `omni-skills ui`.**---

## 1. Scope

La cubierta visual es una superficie de producto guiada sobre la CLI existente y el motor de instalación.

No reemplaza:

- Uso experto de CLI basado en indicadores
- `herramientas/bin/install.js`
- el flujo de instalación de texto guiado
- Comportamiento en tiempo de ejecución API, MCP o A2A

Define:

- el comportamiento de `omni-skills ui`
- el contrato alternativo para `omni-skills ui --text`
- estado local y persistencia preestablecida
- vistas previas guiadas del lanzamiento del servicio
- repetibilidad para instalaciones y ejecuciones de servicios recientes---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` inicia el shell visual basado en Ink.

El shell visual es la principal experiencia de terminal para no expertos para:

- instalar flujos
- descubrimiento e instalación en primer lugar en el catálogo
- Inicio de MCP
- Inicio de API
- Inicio A2A
- médico y entrega de humo### 2.2 Text Fallback

`omni-skills ui --text` inicia la interfaz alternativa basada en readline.

Esto sigue siendo útil cuando:

- un terminal no puede renderizar correctamente el shell más rico
- el comportamiento en modo crudo está restringido
- se prefiere una reserva de texto mínima### 2.3 Handoff Rule

El shell visual no vuelve a implementar tiempos de ejecución de servicios ni escrituras de instalación directamente.

Después de la vista previa y la confirmación, sale limpiamente y entrega la ejecución al punto de entrada CLI existente con los argumentos y variables de entorno equivalentes.---

## 3. Home Screen Contract

La pantalla de inicio debe exponer:

- instalar habilidades
- buscar e instalar
- repetir instalaciones recientes cuando estén presentes
- ejecutar ajustes preestablecidos de instalación guardados cuando estén presentes
- iniciar un servicio
- repetir servicios recientes cuando estén presentes
- ejecutar ajustes preestablecidos de servicio guardados cuando estén presentes
- médico
- fumar
- salir

La pantalla de inicio también debería aparecer:

- disponibilidad actual del paquete publicado
- recuentos estatales locales para recientes, ajustes preestablecidos y favoritos---

## 4. Install Flow Contract

El flujo de instalación visual del shell debe admitir:

- selección de objetivos de clientes conocidos
- selección de ruta personalizada
- instalación completa de la biblioteca
- instalación con una sola habilidad
- instalación de un paquete
- buscar-luego-instalar
- vista previa antes de escribir
- ahorro preestablecido
- habilidad favorita o alternancia de paquetes

La vista previa debe mostrar:

- etiqueta de destino resuelta
- camino resuelto
- instalar alcance
- habilidad o paquete seleccionado cuando corresponda
- comando CLI equivalente---

## 5. Service Flow Contract

El caparazón visual debe guiar el inicio para:### 5.1 MCP

- transporte: `stdio`, `stream`, `sse`
- modo: `solo lectura` o `local`
- configuración de host/puerto para transportes de red
- vista previa de comando explícito### 5.2 API

- anfitrión
- puerto
- perfil básico o endurecido
- autenticación de clave API o portador reforzada
- parámetros de límite de velocidad reforzados
- habilitación del registro de auditoría
- vista previa de comando explícito### 5.3 A2A

- anfitrión
- puerto
- tipo de tienda: `memoria`, `json`, `sqlite`
- ruta de almacenamiento para modos duraderos
- ejecutor: `en línea`, `proceso`
- modo SQLite habilitado para cola
- intervalo de sondeo y duración del arrendamiento para el modo de arrendamiento compartido
- vista previa de comando explícito---

## 6. Local State Contract

El shell visual persiste en estado solo local en:```text
~/.omni-skills/state/ui-state.json
```

El estado actualmente incluye:

- instalaciones recientes
- lanzamientos de servicios recientes
- ajustes preestablecidos de instalación con nombre
- ajustes preestablecidos de servicio con nombre
- habilidades favoritas
- paquetes favoritos

El caparazón debe soportar:

- reproducir instalaciones recientes
- reproducir lanzamientos de servicios recientes
- reutilizar ajustes preestablecidos de instalación con nombre
- reutilizar ajustes preestablecidos de servicios con nombre---

## 7. Compatibility Contract

La capa visual es aditiva.

Estos flujos deben seguir siendo válidos y estables:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `instalación npx omni-skills --guiada`
- `npx omni-skills buscar figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `api npx omni-skills --puerto 3333`
- `npx omni-skills a2a --puerto 3335`

El caparazón visual nunca debe forzarse a seguir rutas de comando expertas explícitas.---

## 8. Safety Contract

El shell visual debe hacer explícitos los estados y las escrituras.

Debe:

- Vista previa de las instalaciones antes de la transferencia de escritura.
- Vista previa de los comandos de inicio del servicio antes de su ejecución.
- mantenga el material secreto fuera de las vistas previas de comandos de texto claro cuando sea práctico
- persistir el estado sólo localmente
- preservar el comportamiento CLI no interactivo fuera del caparazón visual