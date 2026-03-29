# 🤝 Contributing to Omni Skills (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills zawiera zarówno katalog umiejętności, jak i środowisko wykonawcze zbudowane na podstawie tego katalogu.**
> Wkłady mogą dotyczyć dowolnego obszaru, ale oba muszą być zgodne z wygenerowanymi artefaktami i bieżącym zachowaniem CLI.---

## 📊 Repository Baseline

| Metryczne | Wartość |
|:-------|:------|
| 📦 Wersja pakietu | `0.1.3` |
| 🧠 Opublikowane umiejętności | `32` |
| 📦 Pakiety z pełnym wsparciem | `7` |
| 🖥️ Klienci z możliwością instalacji | `7` |
| 🔌 Klienci z możliwością konfiguracji MCP | `16` |
| 🔄 Zwolnienia automatyczne | Włączone na `main` |---

## Ważne

| Co | Gdzie |
|:-----|:------|
| 🧠 Umiejętności są tworzone w | `skills/<nazwa-umiejętności>/SKILL.md` |
| 📖 Szablony i wskazówki dla współtwórców | `docs/contributors/` |
| 🧾 Kanoniczny przepływ PR dla nowych umiejętności | [Przebieg pracy PR umiejętności](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Natywne umiejętności przychodzące znajdują się pod | `umiejętności/` (dowolny język) |
| ✨ Wyselekcjonowane ulepszone instrumenty pochodne | `skills_omni/` (tylko w języku angielskim, automatyczne) |
| 🚫 `skills_omni/` jest chronione | Niedostępne dla bezpośredniego wkładu publicznego |
| 📖 Dokumentacja środowiska wykonawczego i architektury | `dokumenty/` |
| 📄 Pliki społeczności | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Wpisz | Powierzchnia |
|:-----|:-----|
| 🧠 Dodaj lub ulepsz umiejętność | `umiejętności/` |
| 📖 Zaktualizuj wskazówki dla współtwórców | `docs/contributors/` |
| 🖥️ Ulepsz CLI, instalator lub skrypty | `narzędzia/` |
| 📦 Ulepsz środowisko wykonawcze katalogu lub pakiety protokołów | `pakiety/` |
| 🧪 Zaostrz testy, kontrole dymu lub udostępnij dokumenty | Różne |---

## Szybki start

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 Otwórz PR z włączoną opcją „Zezwalaj na edycję przez opiekunów”.**---

## Dokumentacja

Dobra rodzima umiejętność przychodząca powinna:

- ✅ Rozwiąż konkretny problem w sposób czysty
- ✅ Można je ponownie wykorzystać w różnych projektach
- ✅ Dołącz instrukcje, których agent może faktycznie przestrzegać
- ✅ Unikaj niejasnych lub zbędnych treści
- ✅ Zadeklaruj dokładne metadane dotyczące frontu i zgodności, jeśli są dostępne
- ✅ Wyląduj z wygenerowanymi artefaktami klasyfikacji `metadata.json` po uruchomieniu automatyzacji### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 Wskazówka:**pakiety umiejętności w wersji Release powinny zawierać `agenty/`, `referencje/`, `przykłady/` i `skrypty/`. Jednak powierzchnia wlotowa jest celowo liberalna — dozwolona jest minimalna natywna umiejętność przychodząca, a rurociąg wzmacniający generuje silniejszą pochodną.### 🌐 Language Policy

| Powierzchnia | Akceptowane języki |
|:------------|:---------------------------------|
| 📥 `umiejętności/` (pobór natywny) | Portugalski, angielski lub dowolny język |
| ✨ `skills_omni/` (wybrane wyniki) | Tylko angielski |

> Prywatny wzmacniacz zachowuje natywne źródło w postaci przesłanej i przepisuje wyselekcjonowaną wersję pochodną w języku angielskim.

📖 Aby uzyskać pełną sekwencję gałęzi, walidacji i przeglądu ulepszeń, użyj [Przepływ pracy Skill PR](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Uruchom to przed otwarciem PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<szczegóły>
<summary>📋 <strong>Co <code>npm run valid</code> regeneruje</strong></summary>

- `metadane.json`
- `umiejętności/<umiejętność>/metadata.json`
- Mapowanie taksonomii kanonicznej
- Dojrzałość, najlepsze praktyki, jakość i wyniki bezpieczeństwa
- Statyczne ustalenia dotyczące bezpieczeństwa
- Opcjonalny status skanera ClamAV i VirusTotal (jeśli jest skonfigurowany)</details>

>**⚠️ Ważne:**Walidacja to umowa używana przez CLI, API, MCP, A2A, manifesty, archiwa i automatyzację wydań. Traktuj wygenerowane metadane jako część powierzchni recenzji, a nie jednorazowe dane wyjściowe.### 📥 Intake Policy

| Stan | Zachowanie |
|:---------------|:-------------|
| Brakujący/niekompletny tytuł | ⚠️Ostrzeżenia (nie blokuje) |
| Krytyczne ustalenia dotyczące bezpieczeństwa | 🚫 Blokuje przyjmowanie |
| Błędy twardej walidacji | 🚫 Blokuje przyjmowanie |
| Bardziej rygorystyczne standardy redakcyjne | Egzekwowane w zwiększonym przepływie instrumentów pochodnych, a nie w przypadku natywnego spożycia |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<szczegóły>
<summary>📋 <strong>Co potwierdza przepustka dymna</strong></summary>

- ✅Weryfikacja umiejętności
- ✅ Generowanie katalogów
- ✅ Generowanie katalogu dokumentów
- ✅ Zestaw testów
- ✅`npm pack --dry-run`
- ✅ Bootowanie API
- ✅ Bootowanie MCP w `stdio`, `stream` i `sse`
- ✅Rozruch A2A
- ✅Weryfikacja archiwum i oczekiwania dotyczące pakowania</details>

---

## 📋 Skill Frontmatter

Zdecydowanie zaleca się Frontmatter. Użyj [szablonu umiejętności](docs/contributors/SKILL-TEMPLATE.md) jako linii bazowej.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<szczegóły>
<summary>🏷️ <strong>Kategorie taksonomii kanonicznej</strong></summary>

| Kategoria | Kategoria |
|:--------------|:-------------|
| „rozwój” | `frontend` |
| `backend` | `fullstack-web` |
| `narzędzia` | `automatyzacja cli` |
| „biznes” | `produkt` |
| „projekt” | `dane-ai` |
| `ai-agenci` | „uczenie maszynowe” |
| `devops` | `testowanie bezpieczeństwa` |
| `dokumentacja` | `treść-media` |
| `komunikacja` | `bez kategorii` |</details>

>**ℹ️**Wersja umiejętności jest niezależna od wersji pakietu npm. Jeśli natywna przychodząca umiejętność nie ma jeszcze frontmattera, zostanie zaakceptowana z ostrzeżeniami i uzyska tymczasowe metadane z katalogu, tytułu i treści.---

## ⚙️ Runtime Contributions

Jeśli dotkniesz `packages/`, `tools/bin/`, `tools/lib/` lub zbudujesz skrypty:

- 📦 Zachowaj zgodność `dist/` i dokumentów z implementacją
- 🔄 Wolę ponownie używać `pakietów/rdzenia katalogu` zamiast powielać logikę katalogu
- 🔒 Zachowaj zachowanie lokalnego zapisu poza domyślnymi ustawieniami podglądu lub próbnymi
- 🔌 Dbaj o dyscyplinę osób piszących MCP — dodawaj najwyższej klasy autorów konfiguracji tylko wtedy, gdy klient ma stabilną publiczną umowę dotyczącą konfiguracji
- 🛡️ Traktuj ostrzeżenia skanera bezpieczeństwa jako część paska przeglądu
- 🧪 Aktualizuj testy przy zmianie poleceń CLI, trybów transportu lub publicznych punktów końcowych### 🚧 Important Boundary

| Zrób to ✅ | Nie rób tego 🚫 |
|:---------------|:--------------------------------|
| Prześlij pracę natywną w obszarze `umiejętności/` | Otwórz ręczne PR, które edytują `skills_omni/` |
| Pozwól, aby automatyzacja obsługiwała działanie wzmacniacza | Dodaj bezpośrednio wybraną treść |
| Skoncentruj się na uzasadnionej jakości umiejętności | Pomiń zautomatyzowany przepływ PR towarzyszący |

>**ℹ️**Kiedy natywna umiejętność w `umiejętnościach/` zostanie zaktualizowana, prywatny wzmacniacz przetwarza ją ponownie i odświeża ulepszoną linię bazową.---

## 🔄 Enhancer Outcome States

Podczas publicznych PR dotyczących umiejętności natywnych wzmacniacz zgłasza jeden z czterech stanów:

| stan | Znaczenie |
|:------|:------------|
| ✅`ukończone` | Ulepszona instrument pochodny wygenerowany czysto, kwalifikujący się do `skills_omni/` |
| ⚠️ `zdegradowany` | Zakończono cofaniem się lub słabszym ruchem punktów — sprawdź dokładniej |
| 🚫 `zablokowany` | Zatrzymany ze względów związanych z infrastrukturą lub walidacją — uniemożliwia automatyczną publikację |
| ❌ `nieudane` | Nieoczekiwany błąd — wymaga sprawdzenia przez opiekuna |

>**📝 Współtwórcy**nie muszą naprawiać problemów z infrastrukturą wzmacniaczy. Obowiązkiem jest przesłanie uzasadnionej umiejętności natywnej i utrzymanie repo w kolorze zielonym.---

## 🔄 Automatic Release Policy

Kiedy zmiana wyląduje na `main` i obejmuje:

- `umiejętności/**`
- `umiejętności_omni/**`
- `data/bundles.json`

…repozytorium automatycznie wydaje**wydanie pakietu**.### 📋 Version Bump Rule

| Od | Do | Zasada |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Łatka +1 |
| `0.1.9` | `0.1.10` | Łatka +1 |
| `0.1.10` | `0.2.0` | Przejdź do następnego drobnego, zresetuj łatkę |

> Przepływ wydania ponownie generuje katalog/archiwa, zatwierdza zmianę wersji, oznacza wydanie, publikuje npm i automatycznie tworzy wydanie GitHub.---

## 📝 Commit Conventions

| Przedrostek | Użyj dla |
|:-------|:------------|
| `wyczyn:` | Nowa umiejętność lub funkcja |
| `poprawka:` | Poprawka błędu |
| `dokumenty:` | Zmiany w dokumentacji |
| `refaktor:` | Oczyszczanie kodu lub zmiany w strukturze |
| `test:` | Zmiany testowe |
| `obowiązek:` | Konserwacja |---

## ❓ Need Help?

| Kanał | Link |
|:------------|:-----|
| 💬 Pytania | [Otwórz dyskusję](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Błędy | [Otwórz problem](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Wczesna informacja zwrotna | [Otwórz wersję roboczą żądania PR](https://github.com/diegosouzapw/omni-skills/pulls) |