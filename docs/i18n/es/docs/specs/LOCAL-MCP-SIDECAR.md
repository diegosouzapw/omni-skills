# 🔌 Local MCP Sidecar (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Extensión opcional en modo local para `@omni-skills/server-mcp` que agrega herramientas compatibles con el sistema de archivos para la detección de clientes, administración de habilidades y generación de configuraciones de MCP.**---

## 📊 Status

| Característica | Estado |
|:--------|:------|
| ✅ Herramientas de catálogo de solo lectura | Implementado |
| ✅ Herramientas locales compatibles con el sistema de archivos | Implementado |
| ✅ 3 transportes (stdio/stream/sse) | Implementado |
| ✅ Escrituras permitidas | Implementado |
| ✅ Vista previa de los valores predeterminados antes de escribir | Implementado |
| ✅ Escritura de configuración MCP consciente del cliente | Implementado |
| ✅ Autenticación HTTP + limitación de velocidad | Implementado |
| ✅ Firmas de tiempo de liberación y sumas de verificación | Implementado para archivos generados y mostrado por API/MCP |
| 🟡 Aplicación local de la firma con hora de escritura | Aún no aplicado; vista previa en modo local y escritura desde el pago local confiable |
| 🟢 Cobertura actual de clientes | 7 clientes con capacidad de instalación, 16 clientes con capacidad de configuración, 33 destinos de configuración, 19 perfiles de configuración |---

## 🎯 Purpose

El modo local agrega**herramientas compatibles con el sistema de archivos**encima de la superficie del catálogo MCP de solo lectura existente. Úselo cuando un agente necesite:

- 🕵️ Detectar clientes de IA locales compatibles
- 📋 Inspeccionar las habilidades instaladas
- 👁️ Vista previa de instalación o eliminación de habilidades (ejecución en seco)
- 📦 Aplicar instalación o eliminación de habilidades locales
- ⚙️ Escriba un archivo de configuración MCP local después de la vista previa

Separa deliberadamente dos preocupaciones:

-**objetivos de instalación de habilidades**
  clientes con un directorio de habilidades estable que puede usar `install_skills`
-**Objetivos de configuración de MCP**
  Clientes o IDE con un formato de configuración MCP estable y documentado, incluso si no tienen un directorio de habilidades.---

## 🔌 Transports

| Transporte | Protocolo | Caso de uso |
|:----------|:---------|:---------|
| `stdio` | Tubería | Integración directa de clientes |
| `corriente` | HTTP transmitible | Clientes HTTP modernos |
| `sse` | Eventos enviados por el servidor | Clientes heredados |---

## 🚀 Enable Local Mode

### 📦 From repo:

```bash
npm run mcp:local
npm run mcp:stream:local
npm run mcp:sse:local
```

### 📦 Via CLI:

```bash
npm run cli -- mcp stdio --local
npm run cli -- mcp stream --local
npm run cli -- mcp sse --local
npm run cli -- config-mcp --list-targets
npm run cli -- config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp
```

### 📦 From published package:

```bash
npx omni-skills mcp stdio --local
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

> Todos los comandos configuran `OMNI_SKILLS_MCP_MODE=local` automáticamente.---

## 🛠️ Local Tools

Cuando el modo local está habilitado, estas herramientas adicionales estarán disponibles:

| Herramienta | Descripción | Predeterminado |
|:-----|:------------|:--------|
| 🕵️ `detectar_clientes` | Escanear en busca de clientes de IA y sus rutas de habilidades/configuración | — |
| 📋 `list_installed_skills` | Inspeccionar habilidades instaladas para un cliente específico | — |
| 📦 `install_skills` | Instalar habilidades en el directorio de habilidades de un cliente | 🔍 funcionamiento en seco |
| 🗑️ `remove_skills` | Eliminar habilidades instaladas de un cliente | 🔍 funcionamiento en seco |
| ⚙️ `configure_client_mcp` | Escriba la configuración de MCP para un cliente específico | 🔍 funcionamiento en seco |

> ⚠️ `install_skills`, `remove_skills` y `configure_client_mcp` tienen como valor predeterminado**dry-run**cuando se omite `dry_run`.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Cliente | Camino |
|:-------|:-----|
| 🔵 Código Claude | `~/.claude/skills` |
| 🔵Cursor | `~/.cursor/skills` |
| 🟡 Géminis CLI | `~/.gemini/skills` |
| 🟣 Antigravedad | `~/.gemini/antigravity/skills` |
| 🟢Kiro | `~/.kiro/skills` |
| 🔴 CLI del Códice | `~/.codex/skills` o `$CODEX_HOME/skills` |
| ⚪ Código abierto | `<espacio de trabajo>/.opencode/skills` |

Estos 7 destinos son los únicos destinos de instalación de primera clase en la actualidad.### ⚙️ MCP Config Files

| Objetivo | Formato |
|:-------|:-------|
| `~/.claude/settings.json` | Configuración de Claude Code JSON |
| `<espacio de trabajo>/.claude/settings.json` | Configuración del proyecto Claude JSON |
| `~/.claude.json` | Claude JSON heredado (`mcpServers`) |
| `~/Biblioteca/Soporte de aplicaciones/Claude/claude_desktop_config.json` | Claude Desktop JSON (específico del sistema operativo) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<espacio de trabajo>/.cursor/mcp.json` | Espacio de trabajo del cursor JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Usuario Gemini JSON (`mcpServers`) |
| `<espacio de trabajo>/.gemini/settings.json` | Proyecto Gemini JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | JSON antigravedad (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Usuario de Kiro JSON (`mcpServers`) |
| `<espacio de trabajo>/.kiro/settings/mcp.json` | Proyecto Kiro JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<espacio de trabajo>/.mcp.json` | JSON (`mcpServers`) |
| `<espacio de trabajo>/opencode.json` | Espacio de trabajo OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | Usuario OpenCode JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<espacio de trabajo>/.github/mcp.json` | Repositorio de GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI usuario JSON (`mcp`) |
| `<espacio de trabajo>/kilo.json` | Proyecto Kilo CLI JSON (`mcp`) |
| `<espacio de trabajo>/.kilocode/mcp.json` | Espacio de trabajo de Kilo Code JSON (`mcpServers`) |
| `<espacio de trabajo>/.continue/mcpServers/omni-skills.yaml` | Continuar espacio de trabajo YAML (`mcpServers`) |
| `<espacio de trabajo>/.junie/mcp/mcp.json` | Proyecto Junie JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Usuario Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Ganso YAML (`extensiones`) |
| `<espacio de trabajo>/.zed/settings.json` | Espacio de trabajo Zed JSON (`context_servers`) |
| `<espacio de trabajo>/.vscode/mcp.json` | JSON (`servidores`) |
| `~/.config/Code/User/mcp.json` | Usuario de VS Code JSON (`servidores`) |
| `~/.config/Code - Insiders/User/mcp.json` | Usuario de VS Code Insiders JSON (`servidores`) |
| `<espacio de trabajo>/.devcontainer/devcontainer.json` | JSON de contenedor de desarrollo anidado (`customizations.vscode.mcp.servers`) |
| Raíz del cliente `mcp.json` | JSON (formato por cliente) |

Eso le da al sidecar:

-**16 clientes o IDE con capacidad de configuración**
-**33 rutas de destino de primera clase**
-**19 perfiles de formato**

La cobertura actual de configuración de primera clase abarca:

- Código Claude y Escritorio Claude
- Cursores
- Código VS y contenedores de desarrollo
- CLI de Géminis
- Antigravedad
-Kiro
- CLI del Códice
- Continuar
-junie
- windsurf
- ganso
- Código abierto
- Clina
- CLI del copiloto de GitHub
- Código de kilos
-Zed

Los candidatos manuales o de solo fragmentos todavía están intencionalmente fuera del conjunto de escritores de primera clase hasta que sus contratos de configuración pública sean lo suficientemente estables.### 🧭 Expansion Policy

Omni Skills ahora trata la atención al cliente como un modelo de tres niveles:

1.**capacidad de instalación**
   Existe un directorio de habilidades estable, por lo que la CLI y el sidecar pueden instalar habilidades directamente.
2.**compatible con configuración**
   Existe un formato de configuración MCP estable y documentado, por lo que `config-mcp` puede obtener una vista previa y escribir un archivo de primera clase.
3.**manual o solo fragmento**
   El producto claramente admite MCP de alguna forma, pero los documentos públicos aún no justifican un escritor automático seguro.

Esta es la razón por la que clientes como JetBrains AI Assistant siguen siendo manuales/solo fragmentos, mientras que Roo Code y Postman permanecen fuera del conjunto de escritores de primera clase hasta que su historia de fusión automática segura sea lo suficientemente sólida para este proyecto.---

## 🔒 Allowlist Model

El sidecar local solo escribe en una**lista permitida explícita**.### 🟢 Default allowlist:

- Raíces de clientes conocidas en `$HOME`
- `~/.codeium` para configuración de usuario de Windsurf
- `~/.copilot` para la CLI de GitHub Copilot
- `~/.cline` para Cline CLI
- `~/.config/goose` para la configuración de Goose
- `~/.config/kilo` y `~/.config/opencode` para la configuración CLI de Kilo/OpenCode
- `$CODEX_HOME` (o `~/.codex` si no está configurado)
- Raíz del espacio de trabajo actual
- `<espacio de trabajo>/.agentes`
- `<espacio de trabajo>/.github`
- `<espacio de trabajo>/.kilocode`
- `<espacio de trabajo>/.opencode`
- `<espacio de trabajo>/.zed`
- `<espacio de trabajo>/.continuar`
- `<espacio de trabajo>/.vscode`### ➕ Extend the allowlist:

```bash
export OMNI_SKILLS_LOCAL_ALLOWLIST=/absolute/path/one:/absolute/path/two
```

---

## ⚙️ Config Writing Examples

### 🔵 Claude Code / Project Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### 🔵 Cursor / Workspace JSON

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 🟡 Gemini CLI / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "headers": {
        "Authorization": "Bearer example"
      }
    }
  },
  "mcp": {
    "allowed": ["omni-skills"]
  }
}
```

### 🟢 Kiro / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "disabledTools": ["install_skills"],
      "autoApprove": ["search_skills", "get_skill"]
    }
  }
}
```

### 🟣 Antigravity

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚪ OpenCode

```json
{
  "mcp": {
    "omni-skills": {
      "type": "local",
      "command": ["/path/to/node", "/path/to/packages/server-mcp/src/server.js"],
      "environment": {
        "OMNI_SKILLS_MCP_MODE": "local"
      },
      "enabled": true
    }
  }
}
```

### 🟢 Cline

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "streamable-http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚫ GitHub Copilot CLI

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "tools": ["*"]
    }
  }
}
```

### 🔴 Kilo Code

```json
{
  "mcp": {
    "omni-skills": {
      "type": "remote",
      "url": "http://127.0.0.1:3334/mcp",
      "enabled": true
    }
  }
}
```

### 🟢 Continue

```yaml
name: 'Omni Skills'
version: '0.1.3'
schema: 'v1'
mcpServers:
  - name: 'omni-skills'
    transport:
      type: 'streamable-http'
      url: 'http://127.0.0.1:3334/mcp'
```

### 🧭 CLI Contract

El contenedor CLI respaldado por sidecar mantiene accesible la generación de configuración de MCP sin llamadas directas JSON-RPC:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

El comportamiento predeterminado es solo de vista previa. `--write` aplica la configuración a la ruta de destino resuelta en la lista de permitidos.### 🌊 Windsurf

```json
{
  "mcpServers": {
    "omni-skills": {
      "serverUrl": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚡ Zed

```json
{
  "context_servers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 💜 VS Code

```json
{
  "servers": {
    "omni-skills": {
      "type": "stdio",
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 📦 Dev Container

```json
{
  "customizations": {
    "vscode": {
      "mcp": {
        "servers": {
          "omni-skills": {
            "type": "stdio",
            "command": "/path/to/node",
            "args": ["/path/to/packages/server-mcp/src/server.js"],
            "env": {
              "OMNI_SKILLS_MCP_MODE": "local"
            }
          }
        }
      }
    }
  }
}
```

### 🔴 Codex TOML

```toml
[mcp_servers.omni-skills]
url = "http://127.0.0.1:3334/mcp"
```

### 📋 Generic stdio

```json
{
  "mcpServers": {
    "omni-skills": {
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 🔵 Claude allow/deny lists

La herramienta `configure_client_mcp` también puede escribir configuraciones específicas de Claude cuando pasas:

- `servidores_mcp_permitidos`
- `servidores_mcp_denegados`
- `permisos_denegar`
- `enable_all_project_mcp_servers`### 💜 VS Code sandboxing

Para objetivos VS Code y Dev Container, `configure_client_mcp` también puede escribir:

- `sandboxEnabled`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
-`dev.watch`
- `dev.debug.tipo`

Esto se corresponde con la guía actual de VS Code para proteger servidores stdio MCP locales.### 🧰 Cross-Client Entry Options

`configure_client_mcp` ahora admite metadatos de entrada más completos en los perfiles admitidos:

- `encabezados`
- `entorno`
- `archivo_env`
- `cwd`
-`tiempo de espera_ms`
- `descripción`
- `incluir_herramientas`
- `excluir_herramientas`
- `deshabilitado`
- `confianza`

Opciones específicas del perfil:

- Claude: `servidores_mcp_permitidos`, `servidores_mcp_denied`, `permissions_deny`, `enable_all_project_mcp_servers`
- Géminis: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- Código VS y contenedores de desarrollo: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` devuelve `recetas` junto con la vista previa o la configuración aplicada.

Estas recetas son bloques de orientación conscientes del cliente, por ejemplo:

- `claude mcp agregar... --scope usuario|proyecto`
- `gemini mcp agregar... --scope usuario|proyecto`
- `codex mcp agregar...`
- recetas de edición manual de archivos para Cursor, VS Code, Kiro y Claude Desktop

La estrategia general es ahora intencionadamente conservadora:

- reutilizar un pequeño conjunto de familias de configuraciones canónicas siempre que sea posible
- mantenga escritores personalizados solo cuando los documentos oficiales requieran una forma distinta
- evitar inventar escritores automáticos para objetivos indocumentados---

## 🔐 Hosted HTTP Hardening

Los transportes HTTP admiten los mismos controles basados en entorno que la API del catálogo:

| Variables | Propósito |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Autenticación de token de portador |
| `OMNI_SKILLS_HTTP_API_KEYS` | Claves API separadas por comas |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspección en tiempo de ejecución solo para administradores |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Solicitudes máximas por ventana |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Ventana de límite de velocidad en ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Habilitar el registro de auditoría |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Escribir registro de auditoría en un archivo |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Restringir los orígenes del navegador |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Restringir las IP de origen permitidas |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Devuelve `503` para rutas que no son de administración ni de salud |

> 🟢 `/healthz` permanece abierto. `/mcp`, `/sse` y `/messages` requieren autenticación cuando están habilitados. `/admin/runtime` requiere el token de administrador cuando se configura.---

## 🌍 Official Docs That Shape Support Decisions

El conjunto de escritores actual y los límites exclusivos del manual se compararon con los documentos oficiales del producto, que incluyen:

- Código Antrópico Claude MCP
- OpenAI Codex CLI y OpenAI Docs MCP
- Cursor documentos MCP
- Continuar con los documentos de MCP
- Documentos de Kiro MCP
-Documentos OpenCode MCP
- Documentos de Cline MCP
- Documentos de Kilo Code MCP
- Documentos de la CLI de GitHub Copilot
- Documentos de Zed MCP
-Documentos VS Code MCP
- Documentos MCP del asistente de IA de JetBrains

Esos documentos son la razón por la que algunos clientes reciben escritores automáticos de primera clase, mientras que otros permanecen solo con fragmentos por ahora.