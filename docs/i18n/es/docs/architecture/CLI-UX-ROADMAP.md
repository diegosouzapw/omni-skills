# 🧭 CLI UX Roadmap (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**La hoja de ruta del producto para hacer evolucionar Omni Skills desde un instalador pionero a una experiencia de terminal guiada para usuarios expertos y no expertos.**
> Alcance: paquete npm, experiencia de instalación CLI, interfaz de usuario de terminal, flujos de lanzamiento de servicios e incorporación visual.---

## 1. Problem Statement

La base actual del tiempo de ejecución es sólida, pero la experiencia inicial aún está optimizada para los usuarios que ya comprenden:

- a qué cliente quieren dirigirse
- qué selector de instalación quieren usar
- cómo traducir objetivos a `--skill`, `--bundle` o `find`
- cuando necesitan una instalación solo CLI en lugar de servicios MCP, API o A2A

Hoy:

- `npx omni-skills` por defecto es Antigravity
- esto es técnicamente válido y compatible con versiones anteriores
- pero no es ideal para usuarios nuevos o operadores menos técnicos

La CLI ya tiene un modo interactivo básico, pero aún está más cerca de una utilidad para desarrolladores que de una superficie de producto guiada.

Esta hoja de ruta define el camino hacia una UX pública más sólida sin romper la interfaz actual basada en banderas.---

## 1.1 Delivery Status

La hoja de ruta ahora está implementada en gran medida en el estado actual del repositorio.

Completado:

- Fase 1: Selección guiada del punto de entrada
- Fase 2: Asistente de instalación guiada
- Fase 3: Shell de terminal visual
- Fase 4: Centro de servicios visuales
- Fase 5: Perfiles guardados y repetibilidad
- Fase 6: Endurecimiento, Pruebas y Documentación---

## 2. Goals

- Preservar los flujos de trabajo CLI expertos actuales
- Hacer que el punto de entrada sin argumentos sea seguro y comprensible para los usuarios nuevos
- Reemplace los valores predeterminados silenciosos en contextos interactivos con selección guiada
- Admite clientes de IA conocidos y rutas de instalación personalizadas arbitrarias
- Convierta la instalación, el descubrimiento y el inicio del servicio en un recorrido de usuario coherente
- Proporcionar una interfaz de usuario de terminal visual que parezca un producto, no solo un guión.
- Mantener el motor de instalación, el catálogo y el tiempo de ejecución del servicio reutilizables en la interfaz de usuario.---

## 3. Non-Goals

- Reemplazo de la CLI actual basada en banderas
- Eliminación de Antigravity como objetivo predeterminado compatible
- Envío de una interfaz de usuario web como modo de entrega principal
- Refactorización de los protocolos API, MCP o A2A como parte de este trabajo de UX
- Reemplazo de la creación de `SKILL.md` con un panel de administración respaldado por una base de datos---

## 4. Design Principles

### 4.1 Backward Compatibility First

Estos comandos deben seguir funcionando exactamente como lo hacen hoy:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills buscar figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `api npx omni-skills --puerto 3333`
- `npx omni-skills a2a --puerto 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Sesión de terminal interactiva sin argumentos: experiencia guiada abierta
- Invocación no interactiva sin argumentos: conserva el comportamiento predeterminado de instalación actual
- Los comandos y banderas explícitos siempre superan la inferencia de la interfaz de usuario.### 4.3 Reuse One Engine Across Modes

Lo siguiente debería compartir la misma lógica interna:

- CLI de bandera primero
- CLI en modo texto guiado
- interfaz de usuario de terminal visual

Eso significa que la capa UX no debe poseer la lógica empresarial. Debería orquestar acciones reutilizables.### 4.4 Preview Before Write

Todos los flujos guiados que provocan escrituras deben mostrar:

- objetivo resuelto
- camino resuelto
- habilidades o paquetes seleccionados
- comando CLI equivalente
- mensaje de confirmación### 4.5 Visual Does Not Mean Implicit

Incluso en la interfaz de usuario más rica, el sistema aún debería hacer explícitos el estado y las acciones:

- hacia dónde va la instalación
- lo que se escribirá
- qué transporte o puerto utilizará un servicio
- si un flujo es de solo lectura o con capacidad de escritura local---

## 5. User Personas

### 5.1 Expert CLI User

Necesidades:

- comandos rápidos
- sin indicaciones forzadas
- banderas estables
- capacidad de escritura### 5.2 Guided Product User

Necesidades:

- opciones claras
- no se supone que se desee la antigravedad
- soporte para instalaciones de rutas personalizadas
- vista previa de instalación comprensible
- distinción visible entre acciones de instalación y ejecución del servidor### 5.3 Operator / Platform User

Necesidades:

- capacidad de iniciar MCP, API y A2A visualmente
- valores predeterminados sensatos
- ajuste opcional de puertos, transporte, persistencia, modo ejecutor, autenticación y modo local---

## 6. Target UX Model

El producto debe exponer tres capas:### 6.1 Expert Mode

Comandos directos y banderas.

Ejemplos:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --puerto 3335`### 6.2 Guided Install Mode

Se activa cuando:

- el usuario ejecuta `npx omni-skills` en un TTY sin argumentos
- el usuario ejecuta `npx omni-skills install` sin selectores concretos
- el usuario opta explícitamente por el modo guiado

El flujo de instalación guiada debe recorrer:

1. cliente de destino o ruta personalizada
2. tipo de instalación
3. selección de habilidades o paquetes
4. vista previa
5. confirmación
6. ejecución
7. próximos pasos### 6.3 Visual Operations Hub

Provocado por:

- `npx omni-skills ui`

Esta debería convertirse en la “pantalla de inicio” para usuarios y operadores no expertos.

Acciones principales:

- instalar habilidades
- descubrir habilidades
- iniciar MCP
- iniciar API
- iniciar A2A
- ejecutar doctor
- realizar controles de humo---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Resultado:

- `npx omni-skills` en TTY ya no asume silenciosamente Antigravity
- se solicita a los usuarios que elijan un cliente o una ruta personalizada

Requisitos:

- preservar el comportamiento de instalación predeterminado que no es TTY
- agregar selector de objetivos
- admite captura de ruta personalizada### Phase 2: Guided Install Wizard

Resultado:

- la instalación se convierte en un flujo totalmente guiado

Requisitos:

- selección del modo de instalación:
  - biblioteca completa
  - una habilidad
  - un paquete
  - buscar y luego instalar
- instalar vista previa
- representación de comando equivalente
- confirmación y ejecución### Phase 3: Visual Terminal Shell

Resultado:

- la interfaz de usuario de texto básica actual se convierte en una aplicación de terminal de marca

Requisitos:

- diseño más rico
- marca y logotipo del proyecto
- mejor paso a paso y tarjetas
- navegación basada en teclado
- Implementación de terminal React vía Ink### Phase 4: Visual Service Hub

Resultado:

- MCP, API y A2A se pueden iniciar desde la interfaz de usuario visual

Requisitos:

- flujo MCP guiado
- flujo API guiado
- flujo A2A guiado
- modo visible y vistas previas de configuración### Phase 5: Saved Profiles and Repeatability

Resultado:

- Los ajustes preestablecidos de instalación o servicio comunes se pueden reutilizar

Requisitos:

- recordar objetivos recientes
- ajustes preestablecidos de servicio guardados
- comandos recientes
- paquetes o habilidades favoritos### Phase 6: Hardening, Tests, and Documentation

Resultado:

- la UX se convierte en una interfaz pública mantenida, no en una conveniencia ad hoc

Requisitos:

- cobertura de humo
- pruebas de regresión
- actualizaciones de documentos
- guía del operador
- revisión de compatibilidad del paquete---

## 8. Proposed Command Model

### Stable Commands

- `omni-habilidades`
- `instalación de omni-habilidades`
- `hallazgo de omni-habilidades`
- `ui-ui de habilidades omni`
- `omni-habilidades mcp`
- `api de omni-habilidades`
- `omni-habilidades a2a`
- `médico omni-habilidades`
- `humo de omnihabilidades`### Recommended Behavior

| Invocación | Comportamiento |
|:-----------|:---------|
| `omni-skills` en TTY, sin argumentos | Entrada de instalación guiada |
| `omni-skills` en no TTY, sin argumentos | Instalación predeterminada actual de Antigravity |
| `instalación omni-skills` en TTY, sin selectores | Asistente de instalación guiada |
| `instalación omni-skills --guiada` | Flujo de instalación guiado por la fuerza |
| `omni-habilidades ui` | Abra el centro de operaciones visuales |
| banderas explícitas | Ejecutar directamente sin desviarse del flujo guiado |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Opciones:

- Código Claude
- Cursores
- CLI de Géminis
- CLI del Códice
-Kiro
- Antigravedad
- Código abierto
- Ruta personalizada

Salida:

- destino conocido seleccionado O ruta de sistema de archivos personalizada### Step 2: Choose Install Type

Opciones:

- biblioteca completa
- una habilidad publicada
- un paquete
- buscar y luego instalar

Salida:

- instalar alcance### Step 3: Resolve Selection

Dependiendo del tipo de instalación:

- biblioteca completa: sin selector adicional
- habilidad: listar o elegir una habilidad
- paquete: enumera o elige un paquete
- búsqueda: solicitar consulta, mostrar habilidades y paquetes coincidentes### Step 4: Preview

Pantalla:

- objetivo seleccionado
- camino resuelto
- habilidad o paquete seleccionado
- comando CLI equivalente
- si el flujo es selectivo o de instalación completa### Step 5: Confirm

El usuario confirma:

- si → ejecutar
- no → cancelar o regresar### Step 6: Result

Pantalla:

- éxito/fracaso
- ruta de destino
- sugerencia del siguiente paso---

## 10. Information Architecture for the Visual Operations Hub

El centro de operaciones debe exponer:### 10.1 Install

- flujo de instalación guiado
- búsqueda de habilidades o paquetes
- ruta personalizada### 10.2 Discover

- búsqueda de catálogo
- filtros
- vista previa de metadatos
- instalar transferencia### 10.3 MCP

Opciones:

- transporte: stdio, stream, sse
- modo local encendido/apagado
- anfitrión
- puerto### 10.4 API

Opciones:

- anfitrión
- puerto
- autenticación opcional
- límite de tarifa opcional### 10.5 A2A

Opciones:

- anfitrión
- puerto
- tipo de tienda: memoria, json, sqlite
- ejecutor: en línea, proceso
- opciones de arrendamiento cuando la cola sqlite está habilitada### 10.6 Diagnostics

- médico
- fumar---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Las mezclas actuales de `tools/bin/cli.js`:

- análisis de comandos
- presentación
- indicaciones interactivas
- orquestación de acciones
- arranque de servicio

La nueva estructura debería trasladar la lógica reutilizable a:

- `herramientas/lib/cli-actions/`
- `herramientas/lib/install-flow/`
- `herramientas/lib/flujo-servicio/`
- `herramientas/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` debe seguir siendo el backend con capacidad de escritura.

La interfaz de usuario guiada debe llamar al backend del instalador existente en lugar de duplicar la lógica de instalación.### 11.3 Keep Find/Search Reusable

El asistente de instalación guiada debería reutilizar la misma lógica de búsqueda de CLI y núcleo de catálogo que ya se encuentra activa:

- `encontrar`
- instalar vistas previas
- resolución del paquete### 11.4 Prepare for Ink Without Forcing It Early

La primera entrega puede permanecer en mensajes en modo texto.

Pero la arquitectura debe mantener una unión clara para que el flujo de texto pueda representarse posteriormente mediante Ink.---

## 12. Risks

### 12.1 Breaking Existing Automation

Mitigación:

- solo abre la interfaz de usuario guiada automáticamente en TTY
- preservar el valor predeterminado actual en no TTY
- preservar los flujos de banderas explícitos### 12.2 Letting UI Own Business Logic

Mitigación:

- mover la orquestación a módulos de acción reutilizables
- mantener la lógica de inicio del servicio e instalador debajo de la capa UI### 12.3 Ink Migration Too Early

Mitigación:

- primero enviar el flujo guiado en la pila de terminales del Nodo actual
- luego migre a Ink una vez que la semántica de flujo sea estable### 12.4 Incomplete Service UX

Mitigación:

- enviar primero el asistente de instalación
- luego lanzamiento del servicio guiado por capas---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` en TTY ya no se instala inmediatamente
- el usuario puede elegir el cliente de destino o la ruta personalizada
- La invocación sin TTY y sin argumentos sigue funcionando como antes.### Phase 2

- la instalación guiada admite biblioteca completa, habilidad, paquete y búsqueda e instalación
- la vista previa siempre se muestra antes de escribir
- se muestra el equivalente del comando### Phase 3

- existe una interfaz de usuario de terminal de marca
- la interfaz de usuario está más estructurada visualmente que los menús simples de línea de lectura
- la navegación es compatible con el teclado### Phase 4

- los usuarios pueden iniciar MCP, API y A2A desde el centro visual
- las principales opciones de tiempo de ejecución se pueden configurar de forma guiada### Phase 5

- las preferencias recientes o guardadas son reutilizables
- los flujos repetidos requieren menos indicaciones### Phase 6

- la cobertura de humo refleja los nuevos puntos de entrada de UX
- Los documentos describen el modo guiado y el comportamiento del asistente de servicio.---

## 14. Execution Order

Esta hoja de ruta debe implementarse en este orden:

1. Selección guiada del punto de entrada
2. Asistente de instalación guiada
3. Carcasa del terminal visual
4. Centro de servicios visuales
5. Perfiles guardados y repetibilidad.
6. Endurecimiento, pruebas y pulido de documentos.

El trabajo de implementación debe leer el archivo de tarea relevante antes de comenzar cada tarea para que el trabajo de CLI se mantenga alineado con el plan y no se desvíe.