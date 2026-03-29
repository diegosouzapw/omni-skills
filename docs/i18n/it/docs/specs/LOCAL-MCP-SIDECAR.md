# 🔌 Local MCP Sidecar (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Estensione opzionale in modalità locale per `@omni-skills/server-mcp` che aggiunge strumenti compatibili con il file system per il rilevamento del client, la gestione delle competenze e la generazione della configurazione MCP.**---

## 📊 Status

| Caratteristica | Stato |
|:--------|:------|
| ✅ Strumenti del catalogo di sola lettura | Implementato |
| ✅ Strumenti locali compatibili con il filesystem | Implementato |
| ✅ 3 trasporti (stdio/stream/sse) | Implementato |
| ✅ Scritture consentite | Implementato |
| ✅ Impostazioni predefinite di anteprima prima della scrittura | Implementato |
| ✅ Scrittura della configurazione MCP in base al cliente | Implementato |
| ✅ Autenticazione HTTP + limitazione della velocità | Implementato |
| ✅ Firme temporali e checksum di rilascio | Implementato per gli archivi generati e visualizzati da API/MCP |
| 🟡 Applicazione della firma locale in fase di scrittura | Non ancora applicato; la modalità locale esegue l'anteprima e scrive dal checkout locale attendibile |
| 🟢 Copertura clienti attuale | 7 client con funzionalità di installazione, 16 client con funzionalità di configurazione, 33 destinazioni di configurazione, 19 profili di configurazione |---

## 🎯 Purpose

La modalità locale aggiunge**strumenti compatibili con il filesystem**oltre alla superficie del catalogo MCP di sola lettura esistente. Usalo quando un agente ha bisogno di:

- 🕵️ Rileva client AI locali compatibili
- 📋 Ispeziona le competenze installate
- 👁️ Anteprima dell'installazione o della rimozione delle competenze (prova)
- 📦 Applicare l'installazione o la rimozione delle competenze locali
- ⚙️ Scrivi un file di configurazione MCP locale dopo l'anteprima

Separa deliberatamente due preoccupazioni:

-**obiettivi di installazione delle competenze**
  client con una directory delle competenze stabile che può utilizzare "install_skills".
-**Obiettivi di configurazione MCP**
  client o IDE con un formato di configurazione MCP stabile e documentato, anche se non dispongono di una directory delle competenze---

## 🔌 Transports

| Trasporti | Protocollo | Caso d'uso |
|:----------|:---------|:---------|
| `stdio` | Tubo | Integrazione diretta del cliente |
| "flusso" | HTTP streaming | Client HTTP moderni |
| `sse` | Eventi inviati dal server | Clienti legacy |---

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

> Tutti i comandi impostano automaticamente `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Quando la modalità locale è abilitata, questi strumenti aggiuntivi diventano disponibili:

| Strumento | Descrizione | Predefinito |
|:-----|:------------|:--------|
| 🕵️ `detect_clients` | Cerca i client AI e i loro percorsi di abilità/configurazione | — |
| 📋 `list_installed_skills` | Ispezionare le competenze installate per un cliente specifico | — |
| 📦 `install_skills` | Installa le competenze nella directory delle competenze di un cliente | 🔍prova |
| 🗑️ `remove_skills` | Rimuovere le competenze installate da un client | 🔍prova |
| ⚙️ `configure_client_mcp` | Scrivi la configurazione MCP per un client specifico | 🔍prova |

> ⚠️ `install_skills`, `remove_skills` e `configure_client_mcp` vengono impostati automaticamente su**dry-run**quando `dry_run` viene omesso.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Cliente | Percorso |
|:-------|:-----|
| 🔵 Codice Claude | `~/.claude/skills` |
| 🔵 Cursore | `~/.cursore/competenze` |
| 🟡Gemini CLI | `~/.gemini/skills` |
| 🟣 Antigravità | `~/.gemini/antigravity/skills` |
| 🟢 Kiro | `~/.kiro/skills` |
| 🔴 Codice CLI | `~/.codex/skills` o `$CODEX_HOME/skills` |
| ⚪ Codice aperto | `<area di lavoro>/.opencode/skills` |

Questi 7 target sono oggi le uniche destinazioni di installazione di prima classe.### ⚙️ MCP Config Files

| Obiettivo | Formato |
|:-------|:-------|
| `~/.claude/settings.json` | Impostazioni del codice Claude JSON |
| `<area di lavoro>/.claude/settings.json` | Impostazioni del progetto Claude JSON |
| `~/.claude.json` | Legacy Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (specifico del sistema operativo) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<area di lavoro>/.cursor/mcp.json` | Area di lavoro cursore JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Utente Gemini JSON (`mcpServers`) |
| `<area di lavoro>/.gemini/settings.json` | Progetto Gemini JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | JSON antigravità (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Utente Kiro JSON (`mcpServers`) |
| `<area di lavoro>/.kiro/settings/mcp.json` | Progetto Kiro JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML(`[mcp_servers]`) |
| `<area di lavoro>/.mcp.json` | JSON (`mcpServers`) |
| `<area di lavoro>/opencode.json` | Area di lavoro OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | Utente OpenCode JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<area di lavoro>/.github/mcp.json` | Repository GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo Utente CLI JSON (`mcp`) |
| `<area di lavoro>/kilo.json` | Progetto CLI Kilo JSON (`mcp`) |
| `<area di lavoro>/.kilocode/mcp.json` | Area di lavoro Kilo Code JSON (`mcpServers`) |
| `<area di lavoro>/.continue/mcpServers/omni-skills.yaml` | Continua l'area di lavoro YAML (`mcpServers`) |
| `<area di lavoro>/.junie/mcp/mcp.json` | Progetto Junie JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Utente Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML (`estensioni`) |
| `<area di lavoro>/.zed/settings.json` | Area di lavoro Zed JSON (`context_servers`) |
| `<area di lavoro>/.vscode/mcp.json` | JSON ("server") |
| `~/.config/Code/User/mcp.json` | Utente VS Code JSON ("server") |
| `~/.config/Code - Insiders/User/mcp.json` | Utente VS Code Insider JSON ("server") |
| `<area di lavoro>/.devcontainer/devcontainer.json` | JSON del contenitore di sviluppo annidato (`customizations.vscode.mcp.servers`) |
| Radice client `mcp.json` | JSON (formato per cliente) |

Questo dà al sidecar:

-**16 client o IDE con funzionalità di configurazione**
-**33 percorsi target di prima classe**
-**19 profili di formato**

L'attuale copertura della configurazione di prima classe si estende:

- Codice Claude e Desktop Claude
- Cursore
- VS Code e contenitori di sviluppo
-Gemelli CLI
- Antigravità
- Kiro
- Codice CLI
- Continua
- Junie
- Windsurf
- Oca
- Codice aperto
-Cline
- CLI di GitHub Copilot
- Codice chilo
- Zed

I candidati manuali o solo snippet sono ancora intenzionalmente al di fuori del set di scrittori di prima classe finché i loro contratti di configurazione pubblica non saranno sufficientemente stabili.### 🧭 Expansion Policy

Omni Skills ora tratta l'assistenza clienti come un modello a tre livelli:

1.**con possibilità di installazione**
   Esiste una directory stabile delle competenze, quindi la CLI e il sidecar possono installare direttamente le competenze.
2.**con funzionalità di configurazione**
   Esiste un formato di configurazione MCP stabile e documentato, quindi `config-mcp` può visualizzare in anteprima e scrivere un file di prima classe.
3.**solo manuale o snippet**
   Il prodotto supporta chiaramente MCP in qualche forma, ma i documenti pubblici non giustificano ancora uno scrittore automatico sicuro.

Questo è il motivo per cui client come JetBrains AI Assistant rimangono solo manuali/snippet, mentre Roo Code e Postman rimangono fuori dal set di scrittori di prima classe finché la loro storia di unione automatica sicura non sarà abbastanza forte per questo progetto.---

## 🔒 Allowlist Model

Il sidecar locale scrive solo in una**lista consentita esplicita**.### 🟢 Default allowlist:

- Root client conosciuti in "$HOME".
- "~/.codeium" per la configurazione utente di Windsurf
- "~/.copilot" per la CLI di GitHub Copilot
- "~/.cline" per Cline CLI
- `~/.config/goose` per la configurazione di Goose
- `~/.config/kilo` e `~/.config/opencode` per la configurazione CLI di Kilo/OpenCode
- `$CODEX_HOME` (o `~/.codex` se non impostato)
- Radice dell'area di lavoro corrente
- "<area di lavoro>/.agents`
- "<area di lavoro>/.github`
- "<area di lavoro>/.kilocode`
- "<area di lavoro>/.opencode`
- `<area di lavoro>/.zed`
- "<area di lavoro>/.continua".
- "<area di lavoro>/.vscode`### ➕ Extend the allowlist:

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

Il wrapper CLI supportato dal sidecar mantiene la generazione della configurazione MCP accessibile senza chiamate dirette JSON-RPC:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Il comportamento predefinito è di sola anteprima. `--write` applica la configurazione al percorso di destinazione risolto nella lista consentita.### 🌊 Windsurf

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

Lo strumento `configure_client_mcp` può anche scrivere impostazioni specifiche di Claude quando passi:

- `allowed_mcp_servers`
- `denied_mcp_servers`
- "permessi_negati".
- "enable_all_project_mcp_servers".### 💜 VS Code sandboxing

Per le destinazioni VS Code e Dev Container, `configure_client_mcp` può anche scrivere:

- "sandboxAbilitato".
- `sandbox.filesystem.allowWrite`
- "sandbox.network.allowHosts".
- "orologio.dev".
- `dev.debug.type`

Ciò si associa alle attuali indicazioni del codice VS per il sandboxing dei server MCP stdio locali.### 🧰 Cross-Client Entry Options

`configure_client_mcp` ora supporta metadati di ingresso più ricchi tra i profili supportati:

- "intestazioni".
- "env".
- "file_env".
- "cwd".
- "timeout_ms".
- "descrizione".
- "include_tools".
- "exclude_tools".
- "disabilitato".
- "fiducia".

Opzioni specifiche del profilo:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gemelli: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- VS Code e contenitori di sviluppo: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` restituisce "recipes" insieme all'anteprima o alla configurazione applicata.

Queste ricette sono blocchi guida sensibili al cliente, ad esempio:

- `claude mcp add ... --scope utente|progetto`
- `gemini mcp add ... --scope utente|progetto`
- `codice mcp aggiungi ...`
- ricette di modifica manuale dei file per Cursor, VS Code, Kiro e Claude Desktop

La strategia complessiva è ora intenzionalmente conservativa:

- riutilizzare un piccolo insieme di famiglie di configurazione canoniche ove possibile
- mantenere gli scrittori su misura solo quando i documenti ufficiali richiedono una forma distinta
- evitare di inventare scrittori automatici per obiettivi privi di documenti---

## 🔐 Hosted HTTP Hardening

I trasporti HTTP supportano gli stessi controlli guidati da ambiente dell'API del catalogo:

| Variabile | Scopo |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Autenticazione token portatore |
| `OMNI_SKILLS_HTTP_API_KEYS` | Chiavi API separate da virgole |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspezione runtime solo amministratore |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Richieste massime per finestra |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Finestra del limite di velocità in ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Abilita registrazione di controllo |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Scrivi il registro di controllo in un file |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Limita le origini del browser |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Limita gli IP di origine consentiti |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Restituisce "503" per percorsi non amministrativi e non sanitari |

> 🟢 `/healthz` rimane aperto. `/mcp`, `/sse` e ​​`/messages` richiedono l'autenticazione quando abilitati. `/admin/runtime` richiede il token amministratore quando configurato.---

## 🌍 Official Docs That Shape Support Decisions

L'attuale set di autori e i limiti dei soli manuali sono stati verificati rispetto ai documenti ufficiali del prodotto, tra cui:

- Codice Claude antropico MCP
- CLI OpenAI Codex e MCP OpenAI Docs
- Documenti MCP del cursore
- Continua documenti MCP
- Documenti Kiro MCP
- Documenti MCP OpenCode
- Documenti Cline MCP
- Documenti MCP del codice Kilo
- Documenti CLI di GitHub Copilot
- Documenti Zed MCP
- Documenti MCP del codice VS
- Documenti MCP dell'Assistente AI JetBrains

Questi documenti sono il motivo per cui alcuni clienti ricevono scrittori automatici di prima classe mentre altri per ora rimangono solo snippet.