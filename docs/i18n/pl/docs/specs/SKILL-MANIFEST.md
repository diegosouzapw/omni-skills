# 📋 Skill Manifest Specification (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Manifest JSON do odczytu maszynowego wygenerowany z każdego pliku `SKILL.md` podczas potoku kompilacji — pojedynczy kontrakt danych wykorzystywany przez wszystkie powierzchnie wykonawcze.**---

## 📊 Status

| Funkcja | stan |
|:------------|:------|
| ✅ Wygenerowane automatycznie z SKILL.md | Wdrożono |
| ✅Wykorzystywany przez CLI, API, MCP, A2A | Wdrożono |
| ✅ Archiwa z sumami kontrolnymi | Wdrożono |
| ✅ Klasyfikacja bezpieczeństwa | Wdrożono |

>**Ważne**: Manifest jest**artefaktem kompilacji**. Autorzy współautorów `SKILL.md` — potok automatycznie generuje manifest JSON.---

## 🎯 Purpose

Manifest istnieje w taki sposób, że**wszystkie powierzchnie wykonawcze**mają ten sam znormalizowany kształt:

| Powierzchnia | Jak wykorzystuje manifesty |
|:------------|:----------------------------------|
| 🖥️**CLI**| Wyszukiwanie, planowanie instalacji, diagnostyka lekarska |
| 🌐**API**| Odpowiedzi punktów końcowych, filtrowanie, linki do pobierania |
| 🔌**MCP**| Odpowiedzi na narzędzia, zawartość zasobów |
| 🤖**A2A**| Ładunki służące do wykrywania i rekomendacji |---

## 📁 Output Locations

| Artefakt | Ścieżka |
|:--------------|:-----|
| 📊 Metadane roota | `metadane.json` |
| 📊 Metadane dotyczące umiejętności | `umiejętności/<umiejętność>/metadata.json` |
| 📋 Indeks umiejętności | `indeks_umiejętności.json` |
| 📚 Opublikowany katalog | `dist/katalog.json` |
| 📌 Manifest umiejętności | `dist/manifests/<umiejętność>.json` |
| 📦 Archiwum zip | `dist/archives/<umiejętność>.zip` |
| 📦 Archiwum Tarballa | `dist/archives/<umiejętność>.tar.gz` |
| 🔒 Manifest sumy kontrolnej | `dist/archives/<umiejętność>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Pole | Opis |
|:------|:------------|
| `wersja_schematu` | Wersja schematu manifestu |
| `id` | Stabilny identyfikator umiejętności z pola `name` |
| `ślimak` | Błąd w katalogu pod `skills/` |
| `nazwa_wyświetlana` | Czytelny dla człowieka tytuł z pierwszego nagłówka |### 📝 Metadata

| Pole | Opis |
|:------|:------------|
| `opis` | Krótkie podsumowanie z frontmatter |
| `wersja` | Wersja umiejętności niezależna od wersji pakietu npm |
| `kategoria` | Kategoria kanoniczna (znormalizowana) |
| `kategoria_surowa` | Oryginalna kategoria z frontmatter |
| „taksonomia” | Pełne metadane taksonomii z wywnioskowanymi rezerwami |
| `tagi` | Przeszukiwalne tagi |
| „złożoność” | `początkujący` · `średniozaawansowany` · `zaawansowany` · `ekspert` |
| „ryzyko” | „bezpieczny” · „ostrożność” · „obraźliwy” · „krytyczny” |
| `źródło` | `omni-team` · `społeczność` · `oficjalny` |
| `autor` | Ciąg przypisania |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Pole | Opis |
|:------|:------------|
| `punkt wejścia` | Kanoniczna ścieżka `SKILL.md` |
| `ścieżki.root` | Katalog umiejętności w repozytorium |
| `ścieżki.manifest` | Wygenerowano ścieżkę manifestu w `dist/` |### 🖥️ Compatibility

| Pole | Opis |
|:------|:------------|
| `narzędzia` | Identyfikatory narzędzi z frontmatter |
| `Cele_instalacji` | Metadane dotyczące instalacji poszczególnych narzędzi |

Każdy cel instalacji zawiera: `narzędzie`, `zakres`, `ścieżkę_domyślną`, `flagę_instalatora`, `bieżące zachowanie_instalatora`, `inwokację`### 📦 Resources

| Pole | Opis |
|:------|:------------|
| `pod_zasoby` | Podkatalogi umiejętności („referencje”, „agenci”, „aktywa”) |
| `liczba_artefaktów` | Całkowita liczba plików w pakiecie umiejętności |
| `liczba_odniesień` | Liczba dokumentów referencyjnych |
| `liczba_agentów` | Liczba konfiguracji agenta |
| `liczba_aktywów` | Liczba plików zasobów |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Pole | Opis |
|:------|:------------|
| `strategia` | Strategia instalacji (np. `kopiuj-katalog-umiejętności`) |
| `bieżący_instalator` | Zachowanie instalacji czytelne dla człowieka |
| „przepisy” | Przepisy dotyczące instalacji na klienta |### 📊 Classification

| Sekcja | Pola |
|:------------|:-------|
| 🎯 `dojrzałość` | `poziom_umiejętności`, `etykieta_poziomu umiejętności` |
| 📋 „najlepsze_praktyki” | `wynik` (0-100) |
| ⭐ `jakość` | `wynik` (0-100) |
| 🛡️ `bezpieczeństwo` | `wynik`, `status` |
| ✅`walidacja` | `stan` |### 📝 Content

Pochodne sygnały: `body_length`, `content_length`, `body_lines`, `word_count` oraz flagi strukturalne dla przykładów, sekcji rozwiązywania problemów itp.### 📁 Artifacts

Tablica każdego pliku dostarczonego do katalogu umiejętności:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Rodzaje artefaktów**: „punkt wejścia” · „referencja” · „agent” · „zasób” · „licencja” · „wsparcie”### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

| Pole | Opis |
|:------|:------------|
| `punkt wejścia_sha256` | Hash SKILL.md |
| `pakiet_sha256` | Deterministyczne podsumowanie z uporządkowanej listy artefaktów |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 📌 Wersja pakietu repozytorium i wersja umiejętności to różne kwestie. Pakiet ma obecnie wersję `0.1.3`, natomiast poszczególne umiejętności mają swoje własne wersje semantyczne.---

## ⚠️ Compatibility Notes

| Zasada | Uzasadnienie |
|:---------|:---------|
| ✅ Musi pozostać możliwy do uzyskania z repo | Nie jest wymagane ręczne tworzenie manifestu |
| ✅ Można dodać nowe opcjonalne pola | Kompatybilność w przód |
| ⚠️Istniejące pola muszą pozostać stabilne | Kompatybilność wsteczna |
| 🚫 Żadnych odręcznych manifestów | Wyprowadzenie w czasie kompilacji jest źródłem prawdy |