# Client Support Matrix (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Este documento rastrea la superficie práctica del cliente para Omni Skills a través de tres entradas:

1. el inventario del panel de control `9router` en `/home/diegosouzapw/dev/proxys/9router`
Segundo, la implementación actual del sidecar Omni Skills MCP
3. documentación oficial actual para cada cliente o IDE

Es la fuente de verdad para decidir qué clientes obtienen soporte `config-mcp` de primera clase, cuáles permanecen solo manuales y cuáles son solo candidatos.---

## Scope

Esta matriz trata sobre**configuración del cliente para MCP**.

No es lo mismo que:

- soporte de instalación de habilidades
- Compatibilidad API
- Soporte A2A
- ACP u otros protocolos que no sean MCP

Algunos productos en la matriz consumen MCP pero**no**tienen un "directorio de habilidades" significativo, por lo que solo reciben soporte de configuración de destino.---

## 9router Inventory

El panel `9router` actualmente agrupa estas herramientas CLI o clientes IDE:

- Código Claude
- Códice OpenAI
- Droide de fábrica
- Garra Abierta
- Cursores
- Clina
- Código de kilos
- Continuar
- Antigravedad
- Copiloto de GitHub
- Código abierto
- Kiro AI

Fuentes locales:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Estos clientes ahora tienen una historia estable y explícita en Omni Skills a través de `config-mcp --target...`.

Totales de implementación actuales:

-**7 clientes con capacidad de instalación**
-**16 clientes con capacidad de configuración**
-**33 objetivos de configuración de primera clase**
-**19 perfiles de configuración**

| Cliente | Estado | Objetivos de configuración | Notas |
|:-------|:-------|:---------------|:------|
| Código Claude | ✅ Primera clase | `espacio de trabajo`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Configuración `mcpServers` escrita con controles de permitir/denegar específicos de Claude |
| Cursores | ✅ Primera clase | `cursor-espacio de trabajo`, `cursor-usuario` | Objetivos JSON `mcpServers` |
| Código VS | ✅ Primera clase | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Utiliza la raíz de `servidores` |
| Géminis CLI | ✅ Primera clase | `gemini-usuario`, `gémini-espacio de trabajo` | Configuración JSON + controles globales de permitir/excluir MCP |
| Antigravedad | ✅ Primera clase | `usuario-antigravedad` | Destino JSON `mcpServers` |
| kiro | ✅ Primera clase | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Campos deshabilitados/aprobación automática específicos de Kiro |
| CLI del Códice | ✅ Primera clase | `códice-usuario` | Tablas TOML `mcp_servers` |
| Continuar | ✅ Primera clase | `continuar-espacio de trabajo` | Documento del servidor YAML dedicado |
| Windsurf | ✅ Primera clase | `usuario de windsurf` | Destino JSON `mcpServers` con entradas `serverUrl` |
| Código abierto | ✅ Primera clase | `espacio de trabajo de código abierto`, `usuario de código abierto` | `opencode.json` oficial/configuración de usuario usando `mcp` de nivel superior |
| Clina | ✅ Primera clase | `cline-usuario` | `cline_mcp_settings.json` con `mcpServers` |
| CLI del copiloto de GitHub | ✅ Primera clase | `copilot-usuario`, `copilot-repo` | `mcp-config.json` o `.github/mcp.json` con alcance de repositorio |
| Código kilo | ✅ Primera clase | `kilo-usuario`, `kilo-proyecto`, `kilo-espacio de trabajo` | Kilo CLI utiliza `kilo.json`; la integración del espacio de trabajo utiliza `.kilocode/mcp.json` |
| Zed | ✅ Primera clase | `espacio de trabajo zed` | `.zed/settings.json` con `context_servers` |
| junio | ✅ Primera clase | `proyecto-junie`, `usuario-junie` | `.junie/mcp/mcp.json` o `~/.junie/mcp/mcp.json` usando `mcpServers` |
| Ganso | ✅ Primera clase | `usuario de ganso` | `~/.config/goose/config.yaml` usando un objeto `extensions` de nivel superior para extensiones MCP persistentes |---

## Current Gaps

Estos clientes de `9router`**aún**no son objetivos de escritura de primera clase en Omni Skills:

| Cliente | Estado actual | Por qué |
|:-------|:--------------|:----|
| Droide de fábrica | ⚠️ Solo manual/personalizado | No se encontró ninguna forma de configuración de MCP pública estable en los documentos principales durante este paso |
| OpenClaw | ⚠️ Solo manual/personalizado | El mismo problema que Factory Droid |

El sidecar aún se puede usar con `--file` o rutas personalizadas para usuarios avanzados, pero Omni Skills no debería inventar escritores de primera clase sin documentos de configuración públicos estables.

Ahora se comprenden mejor dos productos adyacentes, pero aún así, intencionadamente, no llegan a los escritores automáticos de primera clase:

| Cliente | Estado actual | Por qué |
|:-------|:--------------|:----|
| Asistente de IA de JetBrains | 🟡 Manual/fragmento | Existe soporte oficial de MCP, pero el flujo de trabajo documentado se basa en la interfaz de usuario/importación en lugar de un destino de archivo público estable |
| cartero | 🟡 Manual/fragmento | Existe soporte oficial de MCP, pero la configuración se administra dentro de la UX del producto en lugar de un destino de archivo público estable |
| Código Roo | 🟡 Candidato | Existen documentos públicos de MCP, pero un fuerte contrato de ruta de archivo multiplataforma aún necesita confirmación antes de agregar un escritor |---

## Support Policy

Omni Skills ahora sigue este conjunto de reglas:

1.**Capaz de instalación**si existe un directorio de habilidades estable.
2.**Capaz de configuración**si existe un formato de archivo de configuración MCP público estable.
3.**Manual/solo fragmento**si el producto es compatible con MCP pero el contrato público tiene como prioridad la interfaz de usuario, la importación primero o aún es demasiado inestable.

Esta es también la respuesta práctica a una de las preguntas de arquitectura anteriores: el proyecto debería seguir generando escritores de primera clase solo donde exista un formato público estable y, en caso contrario, apoyarse en un conjunto más pequeño de familias de exportación canónicas además de recetas y fragmentos.### Canonical config families already in use

- JSON `mcpServers`
- JSON `servidores`
- JSON `servidores_contexto`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Cliente/IDE | Recomendación | Razón |
|:-------------|:---------------|:-------|
| Asistente de IA de JetBrains | 🟡 Mantenga el manual/fragmento por ahora | El soporte oficial es real, pero la UX sigue siendo administrada por el producto en lugar de priorizar el contrato de archivo |
| cartero | 🟡 Mantenga el manual/fragmento por ahora | La configuración oficial es primero la interfaz de usuario y el espacio de trabajo está administrado en lugar de ser el contrato de archivos primero |
| Código Roo | 🟡 Investiga a continuación | Compatibilidad con MCP prometedora, pero la seguridad del escritor depende de una confirmación más sólida de la ruta de configuración |
| Chat de copiloto de VS Code | 🟢 Ya cubierto indirectamente | Las ubicaciones de los archivos MCP de VS Code subyacentes ya son compatibles |
| Zed ACP/Servidores de agentes | 🟡 Pista separada | Este es territorio ACP/agente-servidor, no solo escritura de configuración MCP |---

## Official Sources Used

Las decisiones anteriores se compararon con fuentes primarias actuales:

- [Código Antrópico Claude MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Continuar MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [MCP de código abierto](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Código Kilo MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
-[ZedMCP](https://zed.dev/docs/ai/mcp)
- [Asistente MCP de IA de JetBrains](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Archivos de configuración de Goose](https://block.github.io/goose/docs/guides/config-files/)
- [Extensiones de sesión de Goose](https://block.github.io/goose/docs/guides/session-extensions/)
- [Configuración de Postman MCP](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Código Roo MCP](https://docs.roocode.com/features/mcp)
- [Guía de extensión MCP de VS Code](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Registro oficial de MCP](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

El sidecar actual de Omni Skills distingue intencionalmente tres niveles de soporte:

-**clientes con capacidad de instalación**
  - tener un directorio de habilidades conocido y poder usar `install_skills`
-**clientes con capacidad de configuración**
  - tener un objetivo de configuración estable y poder usar `configure_client_mcp`
-**clientes manuales/fragmentos**
  - documentado, pero aún sin un escritor de archivos seguro de primera clase

Esa separación mantiene el producto honesto.

No todos los productos compatibles con MCP deben tratarse como un objetivo de instalación de habilidades.
La fase de expansión se considera completa por ahora: las futuras incorporaciones solo deberían aterrizar si superan la misma barrera de contrato público que ahora superan Goose, Junie, Continuar y Windsurf.