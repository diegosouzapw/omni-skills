# Client Support Matrix (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Questo documento traccia la superficie pratica del cliente per Omni Skills attraverso tre input:

1. l'inventario del dashboard `9router` in `/home/diegosouzapw/dev/proxys/9router`
2. l'attuale implementazione del sidecar Omni Skills MCP
3. documentazione ufficiale attuale per ciascun cliente o IDE

È la fonte di verità operativa per decidere quali client ottengono il supporto `config-mcp` di prima classe, quali rimangono solo manuali e quali sono solo candidati.---

## Scope

Questa matrice riguarda la**configurazione del client per MCP**.

Non è la stessa cosa di:

- supporto per l'installazione delle competenze
- Compatibilità API
-Supporto A2A
- Protocolli ACP o altri non MCP

Alcuni prodotti nella matrice consumano MCP ma**non**hanno una “directory delle competenze” significativa, quindi ricevono solo il supporto del target di configurazione.---

## 9router Inventory

Il dashboard `9router` attualmente raggruppa questi strumenti CLI o client IDE:

- Codice Claude
- Codice OpenAI
- Droide di fabbrica
-OpenClaw
- Cursore
-Cline
- Codice chilo
- Continua
- Antigravità
- Copilota GitHub
- Codice aperto
-Kiro AI

Fonti locali:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Questi client ora hanno una storia stabile ed esplicita in Omni Skills tramite "config-mcp --target ...".

Totali dell'implementazione attuale:

-**7 client con possibilità di installazione**
-**16 client con funzionalità di configurazione**
-**33 target di configurazione di prima classe**
-**19 profili di configurazione**

| Cliente | Stato | Obiettivi di configurazione | Note |
|:-------|:-------|:-------|:------|
| Codice Claude | ✅ Prima classe | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Digitata la configurazione `mcpServers` con i controlli di autorizzazione/negazione specifici di Claude |
| Cursore | ✅ Prima classe | `cursore-area di lavoro`, `cursore-utente` | Destinazioni JSON `mcpServers` |
| Codice VS | ✅ Prima classe | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Utilizza `servers` root |
| Gemelli CLI | ✅ Prima classe | `gemini-utente`, `gemini-workspace` | Impostazioni JSON + controlli di autorizzazione/esclusione MCP globali |
| Antigravità | ✅ Prima classe | `utente-antigravità` | Destinazione JSON `mcpServers` |
| Kiro | ✅ Prima classe | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Campi disabilitati/approvati automaticamente specifici di Kiro |
| Codice CLI | ✅ Prima classe | `utente-codice` | Tabelle TOML `mcp_servers` |
| Continua | ✅ Prima classe | `continua-area di lavoro` | Documento del server YAML dedicato |
| Windsurf | ✅ Prima classe | `utente windsurf` | Destinazione JSON `mcpServers` con voci `serverUrl` |
| OpenCode | ✅ Prima classe | `opencode-workspace`, `opencode-user` | `opencode.json` / configurazione utente ufficiale utilizzando `mcp` |
| Cline | ✅ Prima classe | `cline-utente` | `cline_mcp_settings.json` con `mcpServers` |
| GitHub Copilot CLI | ✅ Prima classe | `copilot-utente`, `copilot-repo` | "mcp-config.json" o ".github/mcp.json" con ambito repository |
| Codice chilo | ✅ Prima classe | `kilo-user`, `kilo-project`, `kilo-workspace` | La CLI di Kilo utilizza `kilo.json`; l'integrazione dello spazio di lavoro utilizza `.kilocode/mcp.json` |
| Zed | ✅ Prima classe | `zed-workspace` | `.zed/settings.json` con `context_servers` |
| giugno | ✅ Prima classe | `progetto-junie`, `utente-junie` | `.junie/mcp/mcp.json` o `~/.junie/mcp/mcp.json` utilizzando `mcpServers` |
| Oca | ✅ Prima classe | `utente-oca` | `~/.config/goose/config.yaml` utilizzando un oggetto `extensions` di livello superiore per estensioni MCP persistenti |---

## Current Gaps

Questi client di "9router"**non**sono ancora obiettivi di scrittura di prima classe in Omni Skills:

| Cliente | Stato attuale | Perché |
|:-------|:------|:----|
| Droide di fabbrica | ⚠️ Solo manuale/personalizzato | Nessuna forma di configurazione MCP pubblica stabile trovata nei documenti primari durante questo passaggio |
| OpenClaw | ⚠️ Solo manuale/personalizzato | Stesso problema di Factory Droid |

Il sidecar può ancora essere utilizzato con `--file` o percorsi personalizzati per utenti avanzati, ma Omni Skills non dovrebbe inventare scrittori di prima classe senza documenti di configurazione pubblici stabili.

Due prodotti adiacenti sono ora meglio compresi, ma ancora intenzionalmente si fermano al di sotto degli scrittori automatici di prima classe:

| Cliente | Stato attuale | Perché |
|:-------|:------|:----|
| Assistente AI JetBrains | 🟡 Manuale/snippet | Esiste il supporto MCP ufficiale, ma il flusso di lavoro documentato è basato sull'interfaccia utente/sull'importazione anziché su una destinazione stabile di file pubblici |
| Postino | 🟡 Manuale/snippet | Esiste il supporto MCP ufficiale, ma la configurazione è gestita all'interno dell'UX del prodotto anziché in un file pubblico stabile di destinazione |
| Codice Roo | 🟡 Candidato | Esistono documenti MCP pubblici, ma un solido contratto di percorso file multipiattaforma necessita ancora di conferma prima di aggiungere uno scrittore |---

## Support Policy

Omni Skills ora segue questo set di regole:

1.**Installabile**se esiste una directory stabile delle competenze.
2.**Con funzionalità di configurazione**se esiste un formato di file di configurazione MCP pubblico stabile.
3.**Solo manuale/snippet**se il prodotto supporta MCP ma il contratto pubblico è incentrato sull'interfaccia utente, sull'importazione o ancora troppo instabile.

Questa è anche la risposta pratica a una delle domande architettoniche precedenti: il progetto dovrebbe continuare a far crescere scrittori di prima classe solo dove esiste un formato pubblico stabile, e altrimenti appoggiarsi a un insieme più piccolo di famiglie canoniche di esportazione oltre a ricette e snippet.### Canonical config families already in use

- JSON "mcpServers".
- "server" JSON
- JSON `context_servers`
- YAML "mcpServers".
- TOML "[mcp_servers]".### Additional candidates worth watching

| Cliente/IDE | Raccomandazione | Motivo |
|:-------------|:-------|:-------|
| Assistente AI JetBrains | 🟡 Conserva il manuale/snippet per ora | Il supporto ufficiale è reale, ma la UX è ancora gestita dal prodotto anziché dal contratto file |
| Postino | 🟡 Conserva il manuale/snippet per ora | La configurazione ufficiale è basata innanzitutto sull'interfaccia utente e sullo spazio di lavoro anziché sul contratto file |
| Codice Roo | 🟡 Investiga dopo | Promette il supporto MCP, ma la sicurezza dello scrittore dipende da una conferma più forte del percorso di configurazione |
| Chat del copilota VS Code | 🟢 Già trattato indirettamente | I percorsi dei file MCP VS Code sottostanti sono già supportati |
| Server ACP/agente Zed | 🟡 Traccia separata | Questo è il territorio ACP/agent-server, non solo la scrittura della configurazione MCP |---

## Official Sources Used

Le decisioni di cui sopra sono state verificate rispetto alle attuali fonti primarie:

- [Codice Claude antropico MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [MCP CLI del codice OpenAI](https://platform.openai.com/docs/codex/cli)
- [Cursore MCP](https://docs.cursor.com/tools)
- [Continua MCP](https://docs.continue.dev/customize/tools)
- [KiroMCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [ClineMCP](https://docs.cline.bot/mcp)
- [Codice Kilo MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [MCP CLI di GitHub Copilot](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [ZedMCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [File di configurazione di Goose](https://block.github.io/goose/docs/guides/config-files/)
- [Estensioni sessione Goose](https://block.github.io/goose/docs/guides/session-extensions/)
- [Configurazione MCP di Postman](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Codice Roo MCP](https://docs.roocode.com/features/mcp)
- [Guida all'estensione MCP di VS Code](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Registro MCP ufficiale](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

L'attuale sidecar di Omni Skills distingue intenzionalmente tre livelli di supporto:

-**client con capacità di installazione**
  - avere una directory delle competenze conosciuta e poter utilizzare `install_skills`
-**client con capacità di configurazione**
  - avere un target di configurazione stabile e poter utilizzare `configure_client_mcp`
-**client manuali/snippet**
  - documentato, ma senza ancora uno scrittore di file sicuro di prima classe

Questa separazione mantiene il prodotto onesto.

Non tutti i prodotti compatibili con MCP dovrebbero essere trattati come obiettivi di installazione di competenze.
La fase di espansione è considerata completata per ora: le aggiunte future dovrebbero arrivare solo se superano lo stesso limite di contratto pubblico che Goose, Junie, Continue e Windsurf ora superano.