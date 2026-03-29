# 🛡️ Security Policy (Español)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Si descubre un problema de seguridad en Omni Skills, no abra primero un problema público.**

Por favor reporte a través de uno de estos canales privados:

| Canal | Cómo |
|:--------|:----|
| 🔒 Aviso de seguridad de GitHub | [Abrir un aviso privado](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧 Contacto directo | Póngase en contacto directamente con los mantenedores |### 📋 Include in Your Report

- 📁 Componente o ruta afectada
- 🔄 Pasos de reproducción
- ⚠️ Evaluación de impacto
- 🧪 Cualquier material de prueba de concepto necesario para verificar el problema.

>**⏱️ Nuestro objetivo es reconocer los informes dentro de las 48 horas**y priorizar las correcciones según el impacto.---

## 🎯 Scope

Esta política cubre el tiempo de ejecución y las superficies de contenido del repositorio:

| Componente | Camino |
|:----------|:-----|
| 🖥️ CLI e instalador | `herramientas/bin/` |
| 📚 Bibliotecas compartidas | `herramientas/lib/` |
| ⚙️ Scripts de compilación y validación | `herramientas/scripts/` |
| 📦 Artefactos de catálogo generados | `dist/` |
| 🌐 Paquetes API, MCP y A2A | `paquetes/` |
| 🧠 Contenido de habilidades | `skills/`: especialmente comandos de shell, acceso a la red, flujos de credenciales u orientación sensible a la seguridad |---

## Arquitectura

El repositorio se basa en los siguientes controles de seguridad:### 🧠 Skill-Level Controls

| Controlar | Descripción |
|:--------|:-----------|
| 🏷️ Campo de riesgo | Los metadatos de habilidades incluyen un nivel de "riesgo" declarado |
| 📊 Puntuación | La validación calcula puntuaciones de madurez, mejores prácticas, calidad y seguridad |
| 🔍 Escáner estático | Inspecciona `SKILL.md`, archivos empaquetados y scripts auxiliares |
| 🦠 Escáneres opcionales | Búsqueda de hash de ClamAV y VirusTotal (cuando está configurado) |### 🖥️ Runtime Controls

| Controlar | Descripción |
|:--------|:-----------|
| 📁 Seguridad en el camino | Instalar flujos utilizar controles de seguridad en el camino |
| 🔒 Escrituras en la lista permitida | Escrituras locales de sidecar MCP restringidas por una lista de permitidos |
| 👁️ Valores predeterminados de ejecución en seco | Las herramientas orientadas a escritura se ejecutan en seco de forma predeterminada a menos que se deshabiliten explícitamente |
| 🔐 Autenticación y límites | Autenticación de portador/clave API, autenticación de tiempo de ejecución de administrador, limitación de velocidad, listas permitidas de CORS/IP |
| 📋 Auditoría | Registro de auditoría, modo de mantenimiento e ID de solicitud |### 📦 Release Controls

| Controlar | Descripción |
|:--------|:-----------|
| ✅ Manifiestos de suma de comprobación | Sumas de comprobación SHA-256 para archivos generados |
| ✍️ Firmas | Verificación de firma separada en CI antes de la publicación |
| 🧪 Controles de humo | Ejercicio envió superficies de tiempo de ejecución antes del lanzamiento |---

## 🔮 What Is Still Open

> El principal trabajo de seguridad pendiente**no**es el fortalecimiento de la línea base. Los elementos abiertos son:

| Área | Estado |
|:-----|:-------|
| 🏢 Gobernanza empresarial | Identidad externa, política de puerta de enlace e integración WAF por encima de los controles actuales en el proceso |
| 🔌 Redactores de clientes de MCP | Redactores más amplios sólo cuando los contratos de configuración pública son lo suficientemente estables |
| 📊 Refinamiento del escáner | Refinamiento continuo para que las habilidades excepcionales permanezcan claramente separadas de las simplemente bien estructuradas |---

## ⚠️ Risk Levels in Skills

Cada habilidad declara uno de estos niveles de "riesgo":

| Nivel de riesgo | Significado |
|:-----------|:--------|
| 🟢 `seguro` | No se esperan operaciones destructivas |
| 🟡 `precaución` | Puede modificar archivos o interactuar con sistemas externos |
| 🔴 `ofensivo` | Pruebas de seguridad o flujos de trabajo contradictorios que requieren autorización explícita |
| ⛔ `crítico` | Operaciones de alto impacto o a nivel de sistema |---

## 📋 Disclosure Notes

Debido a que Omni Skills incluye ayudas ejecutables, herramientas locales compatibles con el sistema de archivos y escritores de configuraciones específicas del cliente, estas clases de vulnerabilidad deben tratarse como**alta prioridad**incluso si aparecen "solo locales":

| Categoría | Ejemplos |
|:---------|:---------|
| 📁 Recorrido del camino | Escape de directorio a través de rutas de instalación o configuración de habilidades |
| 🔗 Seguridad de enlaces simbólicos | Seguimiento de enlaces simbólicos durante la instalación o extracción de archivos |
| 🖥️ Ejecución de comandos | Inyección de comandos arbitrarios a través de contenido de habilidades o scripts |
| 📦 Verificación de archivos | Omisión de suma de control o verificación de firma |
| 🔓 Omisión de autenticación | Limitación de velocidad o omisión de autenticación en API/MCP |
| 🔌 Omisión de lista permitida | Elusión de la lista de permitidos de sidecar local |
| 🦠 Evasión del escáner | Clases de falsos negativos en escáneres estáticos o externos |