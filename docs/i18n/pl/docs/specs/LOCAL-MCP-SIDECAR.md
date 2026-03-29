# 🔌 Local MCP Sidecar (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Opcjonalne rozszerzenie trybu lokalnego dla `@omni-skills/server-mcp`, które dodaje narzędzia obsługujące system plików do wykrywania klientów, zarządzania umiejętnościami i generowania konfiguracji MCP.**---

## 📊 Status

| Funkcja | stan |
|:------------|:------|
| ✅ Narzędzia katalogowe tylko do odczytu | Wdrożono |
| ✅ Lokalne narzędzia obsługujące system plików | Wdrożono |
| ✅ 3 transporty (stdio/stream/sse) | Wdrożono |
| ✅ Pisze na liście dozwolonych | Wdrożono |
| ✅ Podgląd ustawień domyślnych przed zapisem | Wdrożono |
| ✅ Pisanie konfiguracji MCP z uwzględnieniem klienta | Wdrożono |
| ✅ Autoryzacja HTTP + ograniczenie szybkości | Wdrożono |
| ✅ Podpisy i sumy kontrolne w czasie wydania | Zaimplementowano dla wygenerowanych archiwów i udostępniono przez API/MCP |
| 🟡 Lokalne egzekwowanie podpisów w czasie zapisu | Jeszcze nie wdrożone; tryb lokalny wyświetla podgląd i zapisuje z zaufanej lokalnej kasy |
| 🟢 Aktualny zasięg klienta | 7 klientów z możliwością instalacji, 16 klientów z możliwością konfiguracji, 33 cele konfiguracji, 19 profili konfiguracji |---

## 🎯 Purpose

Tryb lokalny dodaje**narzędzia obsługujące system plików**do istniejącej powierzchni katalogu MCP tylko do odczytu. Użyj go, gdy agent musi:

- 🕵️ Wykryj kompatybilnych lokalnych klientów AI
- 📋 Sprawdź zainstalowane umiejętności
- 👁️ Podgląd instalacji lub demontażu umiejętności (praca na sucho)
- 📦 Zastosuj lokalną instalację lub usuwanie umiejętności
- ⚙️ Zapisz lokalny plik konfiguracyjny MCP po podglądzie

Celowo oddziela dwie kwestie:

-**Cele instalacji umiejętności**
  klienci ze stabilnym katalogiem umiejętności, który może używać `install_skills`
-**Cele konfiguracji MCP**
  klienci lub IDE ze stabilnym, udokumentowanym formatem konfiguracji MCP, nawet jeśli nie mają katalogu umiejętności---

## 🔌 Transports

| Transport | Protokół | Przypadek użycia |
|:--------------|:-------------|:-------------|
| `stdio` | Rura | Bezpośrednia integracja klienta |
| `strumień` | Przesyłany strumieniowo protokół HTTP | Nowocześni klienci HTTP |
| `sse` | Zdarzenia wysyłane przez serwer | Starsi klienci |---

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

> Wszystkie polecenia automatycznie ustawiają `OMNI_SKILLS_MCP_MODE=local`.---

## 🛠️ Local Tools

Po włączeniu trybu lokalnego dostępne stają się następujące dodatkowe narzędzia:

| Narzędzie | Opis | Domyślne |
|:---------|:------------|:------------|
| 🕵️ `wykryj_klientów` | Skanuj w poszukiwaniu klientów AI i ich ścieżek umiejętności/konfiguracji | — |
| 📋 `lista_zainstalowanych_umiejętności` | Sprawdź zainstalowane umiejętności dla konkretnego klienta | — |
| 📦 `umiejętności_instalacyjne` | Zainstaluj umiejętności w katalogu umiejętności klienta | 🔍 próba sucha |
| 🗑️ `usuń_umiejętności` | Usuń zainstalowane umiejętności z klienta | 🔍 próba sucha |
| ⚙️ `konfiguruj_klienta_mcp` | Napisz konfigurację MCP dla konkretnego klienta | 🔍 próba sucha |

> ⚠️ `install_skills`, `remove_skills` i `configure_client_mcp` domyślnie mają wartość**dryrun**, gdy pominięto `dry_run`.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Klient | Ścieżka |
|:-------|:-----|
| 🔵 Kod Claude'a | `~/.claude/umiejętności` |
| 🔵 Kursor | `~/.kursor/umiejętności` |
| 🟡 Bliźnięta CLI | `~/.gemini/umiejętności` |
| 🟣 Antygrawitacja | `~/.gemini/antygrawitacja/umiejętności` |
| 🟢 Kiro | `~/.kiro/umiejętności` |
| 🔴 Kodeks CLI | `~/.codex/umiejętności` lub `$CODEX_HOME/umiejętności` |
| ⚪ Otwarty kod | `<obszar roboczy>/.opencode/skills` |

Te 7 miejsc docelowych to obecnie jedyne miejsca docelowe instalacji najwyższej klasy.### ⚙️ MCP Config Files

| Cel | Formatuj |
|:-------|:------------|
| `~/.claude/settings.json` | Ustawienia kodu Claude'a JSON |
| `<obszar roboczy>/.claude/settings.json` | Ustawienia projektu Claude JSON |
| `~/.claude.json` | Starsza wersja Claude JSON (`mcpServers`) |
| `~/Library/Application Support/Claude/claude_desktop_config.json` | Claude Desktop JSON (specyficzny dla systemu operacyjnego) |
| `~/.cursor/mcp.json` | JSON („mcpServers”) |
| `<obszar roboczy>/.cursor/mcp.json` | Obszar roboczy kursora JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Użytkownik Gemini JSON (`mcpServers`) |
| `<obszar roboczy>/.gemini/settings.json` | Projekt Gemini JSON (`mcpServers`) |
| `~/.gemini/antygrawitacja/mcp.json` | Antygrawitacja JSON (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Użytkownik Kiro JSON (`mcpServers`) |
| `<obszar roboczy>/.kiro/settings/mcp.json` | Projekt Kiro JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<obszar roboczy>/.mcp.json` | JSON („mcpServers”) |
| `<obszar roboczy>/opencode.json` | Obszar roboczy OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | JSON użytkownika OpenCode (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<obszar roboczy>/.github/mcp.json` | Repozytorium GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo użytkownik CLI JSON (`mcp`) |
| `<obszar roboczy>/kilo.json` | Projekt Kilo CLI JSON (`mcp`) |
| `<obszar roboczy>/.kilocode/mcp.json` | Obszar roboczy Kilo Code JSON (`mcpServers`) |
| `<obszar roboczy>/.continue/mcpServers/omni-skills.yaml` | Kontynuuj obszar roboczy YAML (`mcpServers`) |
| `<obszar roboczy>/.junie/mcp/mcp.json` | Projekt Junie JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Użytkownik Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Goose YAML („rozszerzenia”) |
| `<obszar roboczy>/.zed/settings.json` | Obszar roboczy Zed JSON (`serwery_kontekstu`) |
| `<obszar roboczy>/.vscode/mcp.json` | JSON („serwery”) |
| `~/.config/Code/User/mcp.json` | Użytkownik VS Code JSON („serwery”) |
| `~/.config/Code - Insiders/User/mcp.json` | Użytkownik VS Code Insiders JSON („serwery”) |
| `<obszar roboczy>/.devcontainer/devcontainer.json` | Zagnieżdżony kontener deweloperski JSON (`customizations.vscode.mcp.servers`) |
| Katalog główny klienta `mcp.json` | JSON (format dla klienta) |

To daje wózek boczny:

-**16 klientów lub IDE z możliwością konfiguracji**
-**33 najwyższej klasy ścieżki docelowe**
-**19 profili formatu**

Aktualne zakresy konfiguracji najwyższej klasy:

- Claude Code i Claude Desktop
- Kursor
- Kontenery kodu VS i deweloperów
- Gemini CLI
- Antygrawitacja
- Kiro
- Kodeks CLI
- Kontynuuj
- Juni
- Windsurfing
- Gęś
- Otwarty kod
- Cline
— Interfejs wiersza polecenia GitHub Copilot
- Kod Kilo
- Zeda

Kandydaci ręczni lub zawierający tylko fragmenty nadal celowo znajdują się poza zestawem modułów zapisujących pierwszej klasy, dopóki ich publiczne kontrakty konfiguracyjne nie będą wystarczająco stabilne.### 🧭 Expansion Policy

Omni Skills traktuje teraz obsługę klienta jako model trzypoziomowy:

1.**Możliwość instalacji**
   Istnieje stabilny katalog umiejętności, więc CLI i przyczepka mogą bezpośrednio instalować umiejętności.
2.**możliwość konfiguracji**
   Istnieje stabilny, udokumentowany format konfiguracji MCP, więc `config-mcp` może przeglądać i zapisywać pliki najwyższej klasy.
3.**instrukcja lub tylko fragment**
   Produkt wyraźnie obsługuje MCP w jakiejś formie, ale publiczna dokumentacja nie uzasadnia jeszcze bezpiecznego automatycznego zapisu.

To dlatego klienci tacy jak JetBrains AI Assistant pozostają w trybie ręcznym/tylko we fragmentach, podczas gdy Roo Code i Postman pozostają poza pierwszorzędnym zestawem pisarzy, dopóki ich historia bezpiecznego automatycznego łączenia nie będzie wystarczająco silna dla tego projektu.---

## 🔒 Allowlist Model

Lokalny pomocnik pisze wyłącznie na**jawnej liście dozwolonych**.### 🟢 Default allowlist:

- Znane korzenie klienta w `$HOME`
- `~/.codeium` dla konfiguracji użytkownika Windsurfingu
- `~/.copilot` dla GitHub Copilot CLI
- `~/.cline` dla Cline CLI
- `~/.config/goose` dla konfiguracji Goose
- `~/.config/kilo` i `~/.config/opencode` dla konfiguracji Kilo/OpenCode CLI
- `$CODEX_HOME` (lub `~/.codex` jeśli nieustawiony)
- Bieżący katalog główny obszaru roboczego
- `<obszar roboczy>/.agents`
- `<obszar roboczy>/.github`
- `<obszar roboczy>/.kilocode`
- `<przestrzeń robocza>/.opencode`
- `<obszar roboczy>/.zed`
- `<obszar roboczy>/.kontynuuj`
- `<obszar roboczy>/.vscode`### ➕ Extend the allowlist:

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

Opakowanie CLI obsługiwane przez przyczepkę umożliwia generowanie konfiguracji MCP bez bezpośrednich wywołań JSON-RPC:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Domyślne zachowanie to tylko podgląd. `--write` stosuje konfigurację do ustalonej ścieżki docelowej na liście dozwolonych.### 🌊 Windsurf

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

Narzędzie `configure_client_mcp` może także zapisać ustawienia specyficzne dla Claude'a, gdy przekażesz:

- `dozwolone_serwery_mcp`
- `odmówiono_serwerom_mcp`
- `odmowa_uprawnień`
- `włącz_wszystkie_projekty_mcp_serwery`### 💜 VS Code sandboxing

W przypadku celów VS Code i Dev Container `configure_client_mcp` może również zapisać:

- `Włączona piaskownica`
- `sandbox.system plików.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `typ.debug.dev`

Odpowiada to bieżącym wytycznym VS Code dotyczącym piaskownicy lokalnych serwerów stdio MCP.### 🧰 Cross-Client Entry Options

`configure_client_mcp` obsługuje teraz bogatsze metadane wpisów w obsługiwanych profilach:

- „nagłówki”.
- `środowisko`
- `plik_środowiska`
- `cwd`
- `limit czasu_ms`
- `opis`
- `uwzględnij_narzędzia`
- `wyklucz_narzędzia`
- „niepełnosprawny”.
- „zaufanie”.

Opcje specyficzne dla profilu:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Bliźnięta: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `wyłączone_narzędzia`, `auto_zatwierdzanie`
- Kod VS i kontenery deweloperskie: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` zwraca `przepisy` obok podglądu lub zastosowanej konfiguracji.

Te przepisy są blokami wskazówek świadomymi klienta, na przykład:

- `claude mcp dodaj ... --scope użytkownik|projekt`
- `gemini mcp dodaj ... --scope użytkownik|projekt`
- `kodeks mcp dodaj ...`
- przepisy na ręczną edycję plików dla Cursor, VS Code, Kiro i Claude Desktop

Ogólna strategia jest teraz celowo konserwatywna:

- jeśli to możliwe, użyj ponownie małego zestawu kanonicznych rodzin konfiguracji
- przechowuj pisarze na zamówienie tylko wtedy, gdy oficjalne dokumenty wymagają odrębnego kształtu
- unikaj wymyślania automatycznych programów piszących dla nieudokumentowanych celów---

## 🔐 Hosted HTTP Hardening

Transporty HTTP obsługują te same elementy sterujące oparte na env, co interfejs API katalogu:

| Zmienna | Cel |
|:--------------|:------------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Uwierzytelnianie tokena okaziciela |
| `OMNI_SKILLS_HTTP_API_KEYS` | Klucze API oddzielone przecinkami |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspekcja środowiska wykonawczego dostępna tylko dla administratora |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Maksymalna liczba żądań na okno |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Okno limitu szybkości w ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Włącz rejestrowanie audytu |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Zapisz dziennik audytu do pliku |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Ogranicz źródła przeglądarki |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Ogranicz dozwolone źródłowe adresy IP |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Zwróć „503” dla tras innych niż administracyjne i niezwiązanych ze stanem zdrowia |

> 🟢 `/healthz` pozostaje otwarty. `/mcp`, `/sse` i `/messages` wymagają uwierzytelnienia, gdy są włączone. `/admin/runtime` wymaga tokena administratora po skonfigurowaniu.---

## 🌍 Official Docs That Shape Support Decisions

Bieżący zestaw pisarzy i granice dostępne wyłącznie ręcznie zostały sprawdzone w oparciu o oficjalne dokumenty produktu, w tym:

- Antropiczny kod Claude'a MCP
- OpenAI Codex CLI i OpenAI Docs MCP
- Dokumentacja kursora MCP
- Kontynuuj dokumentację MCP
- Dokumentacja Kiro MCP
- Dokumentacja OpenCode MCP
- Dokumentacja Cline MCP
- Dokumentacja Kilo Code MCP
- Dokumentacja CLI GitHub Copilot
- Dokumentacja Zeda MCP
- Dokumentacja VS Code MCP
- Dokumentacja JetBrains AI Assistant MCP

Dzięki tym dokumentom niektórzy klienci otrzymują najwyższej klasy automatyczne narzędzia do pisania, podczas gdy inni na razie korzystają wyłącznie z fragmentów.