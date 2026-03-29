# 🧩 CLI Guided Installer Specification (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Contrato conductual para la experiencia de instalación guiada en Omni Skills CLI.**---

## 1. Scope

Esta especificación define el comportamiento de instalación guiada que se encuentra en la parte superior del backend del instalador existente.

No reemplaza:

- `herramientas/bin/install.js`
- flujos actuales de banderas de expertos
- manifiestos de instalación selectiva

Define:

- cómo se ingresa al modo guiado
- cómo se eligen los destinos
- cómo se elige el alcance de la instalación
- qué información de vista previa debe mostrarse
- cómo funcionan la confirmación y la ejecución---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

La CLI debe ingresar al modo de instalación guiada cuando:

- el usuario ejecuta `omni-skills` sin argumentos en un TTY
- el usuario ejecuta `omni-skills install` sin selectores en un TTY### 2.2 Forced Guided Entry

La CLI también debería admitir el modo guiado explícito a través de una opción dedicada, como por ejemplo:

- `instalación omni-skills --guiada`

Este modo debería funcionar incluso cuando la entrada está canalizada y no conectada a un TTY, siempre que la entrada estándar esté disponible.### 2.3 Non-Interactive Safety Rule

Cuando se invoca sin TTY y sin modo guiado solicitado explícitamente:

- preservar el comportamiento predeterminado actual
- no bloquear la espera de indicaciones---

## 3. Destination Model

La instalación guiada debe admitir dos clases de destino:### 3.1 Known Client Target

Cada objetivo conocido resuelve:

- etiqueta legible por humanos
- identificación de herramienta interna
- instalar bandera
- camino resuelto

Objetivos conocidos requeridos:

- Código Claude
- Cursores
- CLI de Géminis
- CLI del Códice
-Kiro
- Antigravedad
- Código abierto### 3.2 Custom Path Target

El modo de ruta personalizada debe:

- solicitar un camino
- resolver `~`
- normalizar a ruta absoluta
- mostrar la ruta resuelta en vista previa---

## 4. Install Scope Model

La instalación guiada debe admitir:### 4.1 Full Library

Equivalente a la instalación actual sin `--skill` o `--bundle`.### 4.2 Single Skill

Permite al usuario seleccionar una habilidad publicada.### 4.3 Single Bundle

Permite al usuario seleccionar un paquete seleccionado y resuelve los miembros publicados.### 4.4 Search Then Install

Permite al usuario:

- ingrese una consulta de búsqueda
- inspeccionar resultados
- elige una habilidad o paquete
- continuar en la vista previa de instalación---

## 5. Preview Contract

Antes de la ejecución, la instalación guiada debe mostrar:

- etiqueta de destino
- ruta de destino
- instalar alcance
- habilidad o paquete seleccionado si corresponde
- comando CLI equivalente

Opcional pero recomendado:

- resumen de metadatos de habilidades seleccionadas
- resumen de disponibilidad del paquete---

## 6. Execution Contract

Después de la confirmación:

- Instalación guiada delegados al backend del instalador existente.
- no vuelve a implementar el archivo y se escribe solo

La vista previa del comando y los argumentos reales del instalador delegado deben coincidir exactamente.---

## 7. Result Contract

Después de una ejecución exitosa, el resultado de la instalación guiada debería mostrar:

- indicador de éxito
- ruta de destino final
- comando que fue ejecutado
- siguiente acción recomendada

Ejemplo de siguientes acciones:

- usa la habilidad en el cliente seleccionado
- ejecutar "doctor"
- ejecutar `mcp stream --local`---

## 8. Compatibility Contract

Lo siguiente sigue siendo válido y sin cambios:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --paquete completo`
- `omni-skills --ruta ./skills`
- `omni-skills buscar figma --tool cursor --install --yes`

El modo guiado añade comportamiento. No elimina el comportamiento existente.