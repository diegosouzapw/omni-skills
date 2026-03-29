# 📗 Usage Guide (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

---


>**Wszystko, czego potrzebujesz, aby wywoływać umiejętności, uruchamiać usługi i obsługiwać środowisko wykonawcze Omni Skills.**

Aby zapoznać się z pełnymi operacyjnymi przepływami pracy, zobacz [🔧 System Runbook](../ Operations/RUNBOOK.md).
Aby zapoznać się z pełną mapą poleceń użytkownika końcowego, zobacz [🧭 Podręcznik użytkownika CLI](./CLI-USER-GUIDE.md).---

## 📊 Current Catalog Reality

| Stan | Szczegóły |
|:-------|:------------|
| ✅**Dostępne teraz**| 32 opublikowane umiejętności z zakresu projektowania, architektury, debugowania, dokumentacji, OSS, bezpieczeństwa, DevOps, inżynierii AI, danych, narzędzi i przepływów pracy związanych z uczeniem maszynowym |
| 📦**Pakiety**| `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer` i `oss-maintainer` są dziś w pełni wspierane |
| 🔌**Zasięg MCP**| 7 klientów z możliwością instalacji, 16 klientów z możliwością konfiguracji, 33 pierwszorzędne cele konfiguracyjne, 19 profili konfiguracyjnych |
| 🤖**Trwałość A2A**| Trwałość lokalna pamięci, JSON lub SQLite, wznawianie ponownego uruchamiania, opcjonalny wykonawca procesu i opcjonalna dzierżawiona koordynacja dla współdzielonych pracowników |---

## 🖥️ Invocation by Client

| Klient | Jak wywołać | Ścieżka umiejętności |
|:-------|:------------|:------------|
| 🔵**Kod Claude**| `>> /nazwa-umiejętności pomóż mi...` | `~/.claude/umiejętności/` |
| 🟡**Gemini CLI**| `Użyj @nazwa-umiejętności, aby...` | `~/.gemini/umiejętności/` |
| 🔴**Kodeks CLI**| `Użyj @nazwa-umiejętności, aby...` | `~/.codex/umiejętności/` |
| 🟢**Kiro**| Umiejętności ładują się automatycznie na żądanie | `~/.kiro/umiejętności/` |
| 🟣**Antygrawitacja**| `Użyj @nazwa-umiejętności, aby...` | `~/.gemini/antygrawitacja/umiejętności/` |
| 🔵**Kursor**| `@nazwa-umiejętności` na czacie | `~/.kursor/umiejętności/` |
| ⚪**OpenCode**| `uruchom kod open @nazwa-umiejętności` | `.opencode/umiejętności/` |
| ⬛**Drugi pilot**| Wklej ręcznie treść umiejętności | Nie dotyczy |

Klienci tacy jak Continuous, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline i Kilo Code używają przede wszystkim przepływu `config-mcp`, a nie katalogu umiejętności.---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

>**📌 Uwagi:**
> - W interaktywnym terminalu `npx omni-skills` otwiera teraz proces instalacji z przewodnikiem
> - `npx omni-skills ui` otwiera wizualną powłokę Ink z akcjami instalacji, wykrywania i uruchamiania usług
> - powłoka wizualna przechowuje ostatnie instalacje, ostatnie uruchomienia usług, ulubione i nazwane ustawienia wstępne w `~/.omni-skills/state/ui-state.json`
> - Poza TTY, pełna instalacja jest nadal domyślna, jeśli nie podano selektora
> - `--skill` instaluje tylko wybrane opublikowane umiejętności
> - `--bundle` rozwija pakiet i instaluje opublikowane elementy zadeklarowane w wybranym pakiecie
> - `find` obsługuje ponad 12 flag filtrów: `jakość`, `najlepsze_practices`, `poziom_umiejętności`, `bezpieczeństwo`, `kategoria`, `narzędzie`, `ryzyko` i inne
> - `config-mcp` to właściwa ścieżka dla produktów obsługujących MCP, które nie mają pierwszorzędnego katalogu umiejętności---

## 🔌 Runtime Commands

Interfejs CLI to ujednolicone narzędzie operacyjne, a nie tylko instalator.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Powłoka wizualna obsługuje:

- instalacja z przewodnikiem ze znanym klientem lub wyborem niestandardowej ścieżki
- wyszukaj, a następnie zainstaluj bez zapamiętywania flag
- kierowany podgląd konfiguracji klienta MCP i przepływy zapisu
- Uruchamianie z przewodnikiem MCP, API i A2A
- ostatnie instalacje i ponowne uruchomienie usług
- zapisane ustawienia wstępne instalacji i usług
- ulubione umiejętności i pakiety### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # | Wskazówka |
|:--|:----|
| 1️⃣ | Odwołaj się do nazwy umiejętności w wierszu zachęty |
| 2️⃣ | Podaj dokładny artefakt, kod lub kontekst projektu, którego potrzebuje agent |
| 3️⃣ | Preferuj `--skill`, aby instalacja zajmowała minimalną ilość miejsca |
| 4️⃣ | Użyj „doktora” i „dymu” przed debugowaniem problemów z pakietem lub wykonaniem |
| 5️⃣ | Używaj pakietów jako wyselekcjonowanych instalacji domeny teraz, gdy wszystkie siedem pakietów startowych ma pełne wsparcie |
| 6️⃣ | Użyj `find --install --yes` do wykrywania i instalacji w jednym procesie |
| 7️⃣ | Zobacz [runbook](../ Operations/RUNBOOK.md), aby uzyskać informacje na temat uwierzytelniania, limitów szybkości, podpisywania i weryfikacji środowisk środowiskowych |