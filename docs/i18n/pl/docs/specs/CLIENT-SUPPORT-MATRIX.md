# Client Support Matrix (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Ten dokument śledzi praktyczną powierzchnię klienta dla umiejętności Omni na podstawie trzech danych wejściowych:

1. inwentarz panelu `9router` w `/home/diegosouzapw/dev/proxys/9router`
2. bieżąca implementacja wózka bocznego Omni Skills MCP
3. aktualna oficjalna dokumentacja dla każdego klienta lub IDE

Jest to działające źródło prawdy przy podejmowaniu decyzji, którzy klienci otrzymają pierwszorzędne wsparcie `config-mcp`, którzy pozostaną wyłącznie ręczni, a którzy będą tylko kandydatami.---

## Scope

Ta macierz dotyczy**konfiguracji klienta dla MCP**.

To nie to samo, co:

- wsparcie w zakresie instalacji
- Kompatybilność API
- Wsparcie A2A
- Protokoły ACP lub inne protokoły inne niż MCP

Niektóre produkty w macierzy zużywają MCP, ale**nie**mają znaczącego „katalogu umiejętności”, więc otrzymują jedynie wsparcie konfiguracji docelowej.---

## 9router Inventory

Pulpit nawigacyjny 9router grupuje obecnie następujące narzędzia CLI lub klientów IDE:

- Claude Code
- Kodeks OpenAI
- Droid fabryczny
- Otwarty Klaw
- Kursor
- Cline
- Kod Kilo
- Kontynuuj
- Antygrawitacja
- Drugi pilot GitHuba
- Otwarty kod
- Kiro SI

Źródła lokalne:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Ci klienci mają teraz stabilną, przejrzystą historię w Omni Skills poprzez `config-mcp --target ...`.

Aktualne sumy wdrożeń:

-**7 klientów z możliwością instalacji**
-**16 klientów z możliwością konfiguracji**
-**33 pierwszorzędne cele konfiguracyjne**
-**19 profili konfiguracyjnych**

| Klient | Stan | Konfiguracja celów | Notatki |
|:-------|:-------|:-------------|:------|
| Kod Claude'a | ✅Pierwsza klasa | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Wpisano konfigurację `mcpServers` z kontrolkami zezwalania/odmawiania specyficznymi dla Claude'a |
| Kursor | ✅Pierwsza klasa | `obszar roboczy kursora`, `użytkownik kursora` | Cele JSON `mcpServers` |
| Kod VS | ✅Pierwsza klasa | `vscode`, `użytkownik-vscode`, `użytkownik-vscode-insiders`, `devcontainer` | Używa katalogu głównego |
| Bliźnięta CLI | ✅Pierwsza klasa | `użytkownik-gemini`, `przestrzeń-robocza gemini` | Ustawienia JSON + globalna kontrola zezwalania/wykluczania MCP |
| Antygrawitacja | ✅Pierwsza klasa | `użytkownik antygrawitacji` | Cel JSON `mcpServers` |
| Kiro | ✅Pierwsza klasa | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Pola specyficzne dla Kiro wyłączone/automatyczne zatwierdzanie |
| Kodeks CLI | ✅Pierwsza klasa | `użytkownik kodeksu` | Tabele TOML `mcp_servers` |
| Kontynuuj | ✅Pierwsza klasa | `kontynuuj obszar roboczy` | Dokument dedykowanego serwera YAML |
| Windsurfing | ✅Pierwsza klasa | `użytkownik windsurfingu` | Cel JSON `mcpServers` z wpisami `serverUrl` |
| Otwarty kod | ✅Pierwsza klasa | `obszar roboczy opencode`, `użytkownik opencode` | Oficjalna konfiguracja `opencode.json` / użytkownika przy użyciu `mcp` najwyższego poziomu |
| Cline | ✅Pierwsza klasa | `użytkownik cline` | `cline_mcp_settings.json` z `mcpServers` |
| GitHub Copilot CLI | ✅Pierwsza klasa | `użytkownik drugiego pilota`, `repozytorium drugiego pilota` | `mcp-config.json` lub `.github/mcp.json` o zasięgu repo |
| Kod Kilo | ✅Pierwsza klasa | `kilo-użytkownik`, `kilo-projekt`, `kilo-przestrzeń robocza` | Kilo CLI używa `kilo.json`; integracja obszaru roboczego wykorzystuje `.kilocode/mcp.json` |
| Zed | ✅Pierwsza klasa | `przestrzeń robocza zed` | `.zed/settings.json` z `serwerami_kontekstu` |
| Junie | ✅Pierwsza klasa | `junie-projekt`, `junie-użytkownik` | `.junie/mcp/mcp.json` lub `~/.junie/mcp/mcp.json` przy użyciu `mcpServers` |
| Gęś | ✅Pierwsza klasa | `użytkownik gęsi` | `~/.config/goose/config.yaml` używając obiektu `rozszerzeń` najwyższego poziomu dla trwałych rozszerzeń MCP |---

## Current Gaps

Ci klienci `9router` nie są**jeszcze**pierwszorzędnymi celami pisarzy w Omni Skills:

| Klient | Stan obecny | Dlaczego |
|:-------|:-------------|:--------|
| Droid fabryczny | ⚠️ Tylko ręczne/niestandardowe | Podczas tego przebiegu nie znaleziono stabilnego publicznego kształtu konfiguracji MCP w dokumentach głównych |
| OpenClaw | ⚠️ Tylko ręczne/niestandardowe | Ten sam problem, co Droid fabryczny |

W przypadku zaawansowanych użytkowników przyczepy bocznej nadal można używać z `--file` lub ścieżkami niestandardowymi, ale Omni Skills nie powinno wymyślać pierwszorzędnych autorów bez stabilnych publicznych dokumentów konfiguracyjnych.

Dwa sąsiednie produkty są teraz lepiej poznane, ale nadal celowo powstrzymują się od pierwszorzędnych automatycznych pisarzy:

| Klient | Stan obecny | Dlaczego |
|:-------|:-------------|:--------|
| Asystent AI JetBrains | 🟡 Podręcznik/fragment | Istnieje oficjalna obsługa MCP, ale udokumentowany przepływ pracy opiera się na interfejsie użytkownika/imporcie, a nie na stabilnym docelowym pliku publicznym |
| Listonosz | 🟡 Podręcznik/fragment | Istnieje oficjalna obsługa MCP, ale konfiguracją zarządza się w UX produktu, a nie w stabilnym pliku docelowym |
| Kod Roo | 🟡 Kandydat | Istnieją publiczne dokumenty MCP, ale silna międzyplatformowa umowa dotycząca ścieżki pliku nadal wymaga potwierdzenia przed dodaniem autora |---

## Support Policy

Umiejętności Omni podlegają teraz następującym zestawom zasad:

1.**Możliwość instalacji**, jeśli istnieje stabilny katalog umiejętności.
2.**Możliwość konfiguracji**, jeśli istnieje stabilny publiczny format pliku konfiguracyjnego MCP.
3.**Tylko instrukcja/fragment**, jeśli produkt obsługuje MCP, ale zamówienie publiczne skupia się na interfejsie użytkownika, importuje lub jest nadal zbyt niestabilne.

Jest to także praktyczna odpowiedź na jedno z wcześniejszych pytań dotyczących architektury: projekt powinien w dalszym ciągu zatrudniać najwyższej klasy autorów tylko tam, gdzie istnieje stabilny format publiczny, a poza tym opierać się na mniejszym zestawie kanonicznych rodzin eksportowych oraz przepisach i fragmentach.### Canonical config families already in use

- JSON „mcpServers”.
- „Serwery” JSON
- JSON `serwery_kontekstu`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Klient/IDE | Zalecenie | Powód |
|:-------------|:--------------|:-------|
| Asystent AI JetBrains | 🟡 Zachowaj na razie instrukcję/fragment | Oficjalne wsparcie jest prawdziwe, ale UX nadal jest zarządzany przez produkt, a nie najpierw na podstawie umowy |
| Listonosz | 🟡 Zachowaj na razie instrukcję/fragment | Oficjalna konfiguracja opiera się przede wszystkim na interfejsie użytkownika i zarządzaniu obszarem roboczym, a nie na pierwszym kontrakcie plikowym |
| Kod Roo | 🟡 Zbadaj dalej | Obiecująca obsługa MCP, ale bezpieczeństwo zapisu zależy od silniejszego potwierdzenia ścieżki konfiguracji |
| Czat drugiego pilota VS Code | 🟢 Już omówione pośrednio | Podstawowe lokalizacje plików MCP VS Code są już obsługiwane |
| Zed ACP / Serwery agentów | 🟡 Oddzielny utwór | To jest terytorium ACP/agent-serwer, a nie tylko zapisywanie konfiguracji MCP |---

## Official Sources Used

Powyższe decyzje zostały sprawdzone w oparciu o aktualne źródła pierwotne:

— [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Kursor MCP](https://docs.cursor.com/tools)
- [Kontynuuj MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Kod MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
— [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Pliki konfiguracyjne Goose](https://block.github.io/goose/docs/guides/config-files/)
- [Rozszerzenia sesji Goose](https://block.github.io/goose/docs/guides/session-extensions/)
- [Konfiguracja Postman MCP](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Kod Roo MCP](https://docs.roocode.com/features/mcp)
- [Przewodnik rozszerzeń MCP VS Code](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Oficjalny rejestr MCP](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Obecny wózek boczny Omni Skills celowo rozróżnia trzy poziomy wsparcia:

-**Klienci z możliwością instalacji**
  - mieć znany katalog umiejętności i potrafić używać `install_skills`
-**Klienci z możliwością konfiguracji**
  - mają stabilny cel konfiguracji i mogą używać `configure_client_mcp`
-**Klienci instrukcji/fragmentów**
  - udokumentowane, ale jeszcze bez bezpiecznego, pierwszorzędnego narzędzia do zapisywania plików

To oddzielenie sprawia, że produkt jest uczciwy.

Nie każdy produkt obsługujący MCP powinien być traktowany jako cel wymagający umiejętności instalacji.
Fazę ekspansji uważa się na razie za zakończoną: przyszłe dodatki powinny wylądować tylko wtedy, gdy wypełnią ten sam pasek zamówień publicznych, który teraz wyczyszczą Goose, Junie, Kontynuuj i Windsurf.