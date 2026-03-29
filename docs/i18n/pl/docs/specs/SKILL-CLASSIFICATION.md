# 📊 Skill Classification and Metadata (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Lokalny klasyfikator, który ocenia każdą umiejętność podczas walidacji i kompilacji, generując profile do odczytu maszynowego dla całego katalogu.**---

## 📊 Status

| Wyjście | Wygenerowano |
|:-------|:--------------|
| ✅ Zrootuj `metadata.json` | Podsumowanie całego repozytorium |
| ✅ Dla umiejętności `skills/<skill>/metadata.json` | Klasyfikacje indywidualne |
| ✅ Katalog `dist/catalog.json` | Opublikowany katalog z partyturami |
| ✅ Manifesty `dist/manifests/<skill>.json` | Dane do odczytu maszynowego dotyczące poszczególnych umiejętności |

Wygenerowane przez: `python3 Tools/scripts/validate_skills.py`

Bieżący zrzut repozytorium:

- 32 opublikowane umiejętności
- średni wynik jakości `96,3`
- średni wynik najlepszych praktyk `98,7`
- średni wynik bezpieczeństwa `95,0`
- bieżąca rozpiętość jakościowa `94, 95, 96, 97, 100`
- aktualne najlepsze praktyki rozprzestrzeniają się `98, 99, 100`---

## 🎯 Purpose

Klasyfikator nadaje każdej umiejętności**spójny profil do odczytu maszynowego**, zanim dotrze ona do katalogu. Wykonuje cztery zadania:

1. 📋**Parse**— treść YAML i treść przeceny
2. 🏷️**Normalizuj**— etykiety kategorii zgodnie z taksonomią kanoniczną
3. 📊**Klasyfikuj**— ocena dojrzałości, najlepszych praktyk, jakości i bezpieczeństwa
4. 📁**Emit**— artefakty metadanych wykorzystywane przez skrypty kompilacji, dokumenty i CI---

## 🏷️ Canonical Taxonomy

**18 kategorii kanonicznych**z automatycznym mapowaniem aliasów:

| Kategoria | Domena | Typowe aliasy |
|:--------------|:-------|:-------------------|
| 💻 `rozwój` | Ogólny programista | `kodowanie`, `programowanie` |
| 🎨 `frontend` | Frontend i interfejs użytkownika | `ui`, `projektowanie stron internetowych` |
| 🔧 `backend` | Backend i interfejsy API | `serwer`, `api` |
| 🌐 `fullstack-web` | Kompleksowa sieć | `web`, `pełny stos` |
| 🛠️ `narzędzia` | Narzędzia programistyczne | „narzędzia” |
| ⚙️ `cli-automatyzacja` | Interfejs wiersza polecenia i automatyzacja | `skrypt`, `przepływ pracy` |
| 📊 `biznes` | Strategia biznesowa | `strategia` |
| 📐 `produkt` | Zarządzanie produktem | `po południu` |
| 🎯 „projekt” | Projekt wizualny i UX | `ux` |
| 🤖 `dane-ai` | Aplikacje do danych i sztucznej inteligencji | `dane`, `analityka` |
| 🧠 `ai-agenci` | Wzorce agentów AI | „agenci” |
| 📈 „uczenie maszynowe” | Modele i szkolenia ML | `ml` |
| 🔌 `devops` | Infrastruktura | `infrastruktura`, `chmura` |
| 🛡️ `testowanie bezpieczeństwa` | Testowanie i bezpieczeństwo | `testowanie`, `bezpieczeństwo`, `qa` |
| 📖 `dokumentacja` | Zarządzanie dokumentami | `dokumenty` |
| 🎬 `treść-media` | Tworzenie treści | `media`, `treść` |
| 💬 „komunikacja” | Narzędzia komunikacji | `czat` |
| ❓ `bez kategorii` | Domyślny powrót | — |

> Starsze etykiety, takie jak „przepływ pracy”, „architektura”, „infrastruktura” są automatycznie normalizowane poprzez mapowanie aliasów.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Poziom | Etykieta | Kryteria |
|:------|:------|:------------|
|**L1**| `metadane` | Frontmateria plus minimalna obudowa |
|**L2**| „instrukcje” | Istotne pisemne instrukcje |
|**L3**| `zasoby` | Dołączone skrypty lub bogatsze zasoby w pakiecie |

Dodatkowe śledzone sygnały: `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

Heurystyka ocenia:

| Sygnał | Co sprawdza |
|:-------|:--------------|
| 📛 Jakość ślimaków | formatowanie pola `nazwa` |
| 📝 Opis | Przejrzystość, długość, informatywność |
| 📐 Struktura | Sekcje i hierarchia dokumentu |
| 💡 Przykłady | Ogrodzenia kodowe i przykładowe bloki |
| 🔗 Referencje | Powiązane lokalne `references/`, `scripts/` i pomocnicy pakietu wsparcia |
| 🧰 Operatywność | Przykłady możliwych do uruchomienia skryptów lokalnych i konkretne fragmenty przepływu pracy |
| 🧩 Głębokość pakietu wsparcia | Wiele rodzin wsparcia, pliki wielokrotnego użytku, metadane agentów i zasoby operacyjne |
| 🩺 Rozwiązywanie problemów | Wyraźne pary „Objawy” i „Rozwiązanie” |
| 📚 Zasięg | Sekcje „Kiedy stosować”, „Najlepsze praktyki”, „Rozwiązywanie problemów” i „Dodatkowe zasoby” |
| 🌐 Przenośność | Sformułowanie niezależne od narzędzi |
| 📅 Świeżość | Unikanie zakodowanych na stałe dat |

**Aktualne poziomy**

| Poziom | Zakres punktacji |
|:---------|:----------|
| „doskonały” | 90-100 |
| „dobrze” | 70-89 |
| „sprawiedliwy” | 50-69 |
| „potrzebuje pracy” | 0-49 |

Strzelec celowo**jest wystarczająco semantyczny, aby stworzyć rozproszenie**pomiędzy dojrzałymi umiejętnościami. Umiejętność o czystej strukturze może osiągać dobre wyniki, ale aby osiągnąć najwyższy poziom, potrzebuje również sygnałów głębi, takich jak:

- wiele przykładów, a nie tylko jeden
- wiele przypadków rozwiązywania problemów
- wskazówki dotyczące umiejętności
- bogatsze lokalne pakiety wsparcia
- więcej niż jedna rodzina wsparcia wykraczająca poza zwykłą prozę, najlepiej obejmująca „agentów/” lub „aktywa/”, gdzie dodają rzeczywiste ponowne wykorzystanie
- dedykowana sekcja `## Workflow` z policzalnymi krokami
- co najmniej jedna mała tabela operacyjna lub mapa decyzyjna, gdy poprawia to przejrzystość wykonania
- większa specyfika operacyjna niż zwykły szablon
- wyraźniejsza głębia przepływu pracy i zasoby wspierające podejmowanie decyzji
- głębokość pakietu wsparcia wykraczająca poza jeden plik `references/` i jeden połączony skrypt
- wystarczająca ilość plików pomocniczych wielokrotnego użytku, aby sprawiać wrażenie zestawu do przepływu pracy, a nie dodatku zawierającego jedną notatkę
- wystarczająca gęstość operacyjna, aby oddzielić dopracowany kontur od zestawu przepływu pracy wielokrotnego użytku

Oznacza to, że strukturalnie kompletna umiejętność może nadal znajdować się w wysokich 90. zamiast „100”, jeśli jej pakiet wsparcia jest węższy, jej zasoby decyzyjne są cieńsze lub jej gęstość operacyjna jest niższa niż w przypadku najsilniejszych umiejętności w katalogu.---

### ⭐ Quality Score (0-100)

Heurystyka łączy w sobie:

| Sygnał | Waga |
|:-------|:------------|
| 📝Kompletność ciała | Średnio-wysoki |
| 📋 Precyzja opisu | Średni |
| 📊 Kompletność metadanych | Średni |
| 📅 Aktualność (`data_aktualizacji`) | Średni |
| 📦 Zasoby w pakiecie | Średni |
| 📋 Wkład w najlepsze praktyki | Średni |
| 🧠 Głębia semantyczna | Średnio-wysoki |
| 🛠️Głębokość operacyjna | Średni |
| 📚 Bogactwo pakietu wsparcia | Średni |

**Poziomy jakości:**

| Poziom | Zakres punktacji |
|:---------|:----------|
| 💎 `platyna` | 80+ |
| 🥇 `złoto` | 65-79 |
| 🥈 `srebro` | 50-64 |
| 🥉 `brąz` | 35-49 |
| 🌱 `rozrusznik` | 0-34 |---

### 🛡️ Security Score (0-100)

Warstwa bezpieczeństwa łączy w sobie:

| Skaner | Zawsze włączone | Co to robi |
|:------------|:--------------|:-------------|
| 🔍**Statyczny**| ✅Tak | Skanuje SKILL.md, spakowane pliki i skrypty |
| 🦠**ClamAV**| ⚙️ Opcjonalnie | Skanowanie złośliwego oprogramowania za pomocą programu `clamscan` |
| 🔒**VirusTotal**| ⚙️ Opcjonalnie | Wyszukiwanie skrótu (bez przesyłania) |

**Rodziny reguł skanera statycznego:**
- 🎭 Szybkie wzorce iniekcji i eksfiltracji
- 💣 Niszczycielskie polecenia powłoki
- 🔑 Podejrzane ścieżki danych uwierzytelniających lub systemu operacyjnego
- ⚠️ Ryzykowne skrypty podstawowe (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Kształt wyjścia bezpieczeństwa:**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

| Sekcja | Pola |
|:------------|:-------|
| 🆔 Tożsamość | `id`, `slug`, `nazwa_wyświetlana` |
| 🏷️ Taksonomia | `kategoria_surowa`, `kategoria_kanoniczna`, `kategoria_wnioskowana` |
| 📋 Autorstwo | tagi, narzędzia, złożoność, ryzyko, źródło, autor |
| 📅 Daty i ścieżki | `data_dodania`, `data_aktualizacji`, ścieżki |
| 📊 Zasoby | Liczniki plików i referencji |
| 📝 Sygnały treści | Liczba słów, długość ciała, flagi strukturalne |
| 🧠 Głębia semantyczna | Etapy przepływu pracy, przykłady, głębokość rozwiązywania problemów, zasoby decyzyjne, rodziny łączy wsparcia |
| 🧩 Struktura pakietu wsparcia | Liczba plików pomocniczych, połączone rodziny, `agenci/`, `assets/` i przykłady wielokrotnego użytku |
| 🎯 Dojrzałość | Poziom, etykieta, flagi skryptów/plików |
| 📋 Najlepsze praktyki | Wynik i poziom |
| ⭐ Jakość | Wynik, poziom i podział semantyczny |
| 🛡️ Bezpieczeństwo | Wynik, poziom, status, ustalenia |
| ✅ Walidacja | Stan, błędy, ostrzeżenia |### Root (`metadata.json`)

| Sekcja | Pola |
|:------------|:-------|
| 📊 Podsumowanie | Liczba, średnie, rozkład kategorii |
| 🏷️ Taksonomia | Kategoria się liczy |
| 🎯 Dystrybucja | Poziom umiejętności, poziom jakości, poziom bezpieczeństwa |
| ✅ Walidacja | Stan się liczy |
| 📋 Lista umiejętności | Kompaktowe podsumowania umiejętności |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

To konfiguruje `git` do używania `.githooks/pre-commit`, który regeneruje metadane i artefakty katalogu przed zatwierdzeniem i automatycznie przygotowuje wygenerowane pliki.