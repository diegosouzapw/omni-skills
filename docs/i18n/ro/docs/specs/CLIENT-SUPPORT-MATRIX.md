# Client Support Matrix (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Acest document urmărește suprafața practică a clientului pentru Omni Skills prin trei intrări:

1. inventarul tabloului de bord `9router` în `/home/diegosouzapw/dev/proxys/9router`
2. implementarea actuală a Omni Skills MCP sidecar
3. documentație oficială curentă pentru fiecare client sau IDE

Este sursa de lucru a adevărului pentru a decide care clienți primesc suport de primă clasă `config-mcp`, care rămân doar manual și care sunt doar candidați.---

## Scope

Această matrice este despre**configurarea clientului pentru MCP**.

Nu este la fel ca:

- suport pentru instalarea abilităților
- Compatibilitate API
- Suport A2A
- ACP sau alte protocoale non-MCP

Unele produse din matrice consumă MCP, dar**nu**au un „director de competențe” semnificativ, așa că primesc doar suport pentru config-target.---

## 9router Inventory

Tabloul de bord `9router` grupează în prezent aceste instrumente CLI sau clienți IDE:

- Claude Code
- OpenAI Codex
- Factory Droid
- OpenClaw
- Cursor
- Cline
- Cod Kilo
- Continuă
- Antigravitație
- GitHub Copilot
- OpenCode
- Kiro AI

Surse locale:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Acești clienți au acum o poveste stabilă și explicită în Omni Skills prin `config-mcp --target ...`.

Totalurile actuale de implementare:

-**7 clienți capabili de instalare**
-**16 clienți capabili de configurare**
-**33 de obiective de configurare de primă clasă**
-**19 profiluri de configurare**

| Client | Stare | Configurare ținte | Note |
|:-------|:-------|:----------------|:------|
| Claude Cod | ✅ Clasa I | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Configurația scrisă `mcpServers` cu controale de autorizare/refuzare specifice lui Claude |
| Cursor | ✅ Clasa I | `cursor-spațiu de lucru`, `cursor-utilizator` | Țintele JSON `mcpServers` |
| Cod VS | ✅ Clasa I | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Utilizează rădăcina „server” |
| Gemeni CLI | ✅ Clasa I | `gemini-user`, `gemini-workspace` | Setări JSON + controale MCP globale de permite/exclude |
| Antigravitație | ✅ Clasa I | `antigravity-user` | Țintă JSON `mcpServers` |
| Kiro | ✅ Clasa I | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Câmpuri dezactivate/aprobate automat specifice Kiro |
| Codex CLI | ✅ Clasa I | `codex-user` | Tabele TOML `mcp_servers` |
| Continuare | ✅ Clasa I | `continuare-spațiu de lucru` | Document dedicat serverului YAML |
| Windsurf | ✅ Clasa I | `utilizator de windsurf` | Țintă JSON `mcpServers` cu intrări `serverUrl` |
| OpenCode | ✅ Clasa I | `opencode-workspace`, `opencode-user` | `opencode.json` / configurația utilizatorului oficial folosind `mcp` de nivel superior |
| Cline | ✅ Clasa I | `cline-user` | `cline_mcp_settings.json` cu `mcpServers` |
| GitHub Copilot CLI | ✅ Clasa I | `copilot-user`, `copilot-repo` | `mcp-config.json` sau `.github/mcp.json` în domeniul repo |
| Cod Kilo | ✅ Clasa I | `kilo-user`, `kilo-project`, `kilo-workspace` | Kilo CLI folosește `kilo.json`; integrarea spațiului de lucru folosește `.kilocode/mcp.json` |
| Zed | ✅ Clasa I | `zed-workspace` | `.zed/settings.json` cu `context_servers` |
| Junie | ✅ Clasa I | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` sau `~/.junie/mcp/mcp.json` folosind `mcpServers` |
| Gâscă | ✅ Clasa I | `gâscă-utilizator` | `~/.config/goose/config.yaml` folosind un obiect `extensions` de nivel superior pentru extensiile MCP persistente |---

## Current Gaps

Acești clienți de la `9router`**nu**sunt încă ținte de scriitor de primă clasă în Omni Skills:

| Client | Starea curentă | De ce |
|:-------|:--------------|:----|
| Factory Droid | ⚠️ Doar manual/personalizat | Nu s-a găsit nicio formă publică stabilă de configurare MCP în documentele principale în timpul acestei treceri |
| OpenClaw | ⚠️ Doar manual/personalizat | Aceeași problemă ca Factory Droid |

Sidecar-ul poate fi folosit în continuare cu „--file” sau căi personalizate pentru utilizatorii avansați, dar Omni Skills nu ar trebui să inventeze scriitori de primă clasă fără documente de configurare publice stabile.

Două produse adiacente sunt acum mai bine înțelese, dar totuși se opresc în mod intenționat înaintea scriitorilor automati de primă clasă:

| Client | Starea curentă | De ce |
|:-------|:--------------|:----|
| JetBrains AI Assistant | 🟡 Manual/fragment | Există suport oficial pentru MCP, dar fluxul de lucru documentat este mai degrabă bazat pe interfață de utilizare/condus pe import decât pe un fișier public țintă stabil |
| Poștaș | 🟡 Manual/fragment | Există suport oficial pentru MCP, dar configurația este gestionată în interiorul UX al produsului, mai degrabă decât într-un fișier public țintă stabil |
| Cod Roo | 🟡 Candidat | Există documente MCP publice, dar un contract puternic de cale de fișiere multiplatformă are nevoie de confirmare înainte de a adăuga un redactor |---

## Support Policy

Omni Skills urmează acum acest set de reguli:

1.**Capabil pentru instalare**dacă există un director de competențe stabil.
2.**Config-capable**dacă există un format public stabil de fișier de configurare MCP.
3.**Numai manual/fragment de informații**dacă produsul acceptă MCP, dar contractul public este pe primul loc pentru UI, pe import mai întâi sau încă prea instabil.

Acesta este, de asemenea, răspunsul practic la una dintre întrebările anterioare de arhitectură: proiectul ar trebui să continue să crească scriitori de primă clasă numai acolo unde există un format public stabil și, altfel, să se bazeze pe un set mai mic de familii de export canonice plus rețete și fragmente.### Canonical config families already in use

- JSON `mcpServers`
- `servere` JSON
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Client / IDE | Recomandare | Motivul |
|:--------------|:----------------|:-------|
| JetBrains AI Assistant | 🟡 Păstrează manualul/fragmentul pentru moment | Suportul oficial este real, dar UX este încă gestionat de produs, mai degrabă decât de fișier-contract-în primul rând |
| Poștaș | 🟡 Păstrează manualul/fragmentul pentru moment | Configurarea oficială este în primul rând UI și este gestionată mai degrabă de spațiul de lucru decât de fișier-contract |
| Cod Roo | 🟡 Investigați în continuare | Suport MCP promițător, dar siguranța scriitorului depinde de o confirmare mai puternică a căii de configurare |
| VS Code Copilot Chat | 🟢 Deja acoperit indirect | Locațiile de bază ale fișierelor VS Code MCP sunt deja acceptate |
| Zed ACP / Servere de agent | 🟡 Piesă separată | Acesta este teritoriul ACP/agent-server, nu doar scrierea configurației MCP |---

## Official Sources Used

Deciziile de mai sus au fost verificate cu sursele primare actuale:

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Continuați MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Fișiere de configurare Goose](https://block.github.io/goose/docs/guides/config-files/)
- [Extensii de sesiune Goose](https://block.github.io/goose/docs/guides/session-extensions/)
- [Configurare Postman MCP](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Cod Roo MCP](https://docs.roocode.com/features/mcp)
- [Ghid de extensii VS Code MCP](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Registrul MCP oficial](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Actualul sidecar Omni Skills distinge în mod intenționat trei niveluri de suport:

-**clienți capabili de instalare**
  - au un director de competențe cunoscut și pot folosi `install_skills`
-**clienți capabili de configurare**
  - au o țintă de configurare stabilă și pot folosi `configure_client_mcp`
-**clienți manual/fragment**
  - documentat, dar fără încă un redactor de fișiere sigur de primă clasă

Această separare menține produsul cinstit.

Nu orice produs compatibil MCP trebuie tratat ca o țintă de instalare a competențelor.
Faza de extindere este considerată finalizată deocamdată: adăugările viitoare ar trebui să aterizeze numai dacă eliberează aceeași bară de contract public pe care o șterg acum Goose, Junie, Continue și Windsurf.