# 🏆 High-Score Skill Playbook (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Czego w praktyce potrzebuje umiejętność Omni Skills `SKILL.md`, aby osiągnąć wysoką dojrzałość, najlepsze praktyki, jakość i wyniki w zakresie bezpieczeństwa.**---

## 🎯 Purpose

W tym przewodniku wyjaśniono, w jaki sposób klasyfikator repozytorium faktycznie nagradza umiejętność.

Użyj go, jeśli chcesz:

- autor nowej umiejętności, która ląduje w pasmach o najwyższej punktacji
- udoskonalić istniejącą umiejętność, która utknęła w stanie „dobrym” lub niskim „doskonałym”.
- zrozumieć, dlaczego umiejętność z przyzwoitym formatowaniem nadal nie jest oceniana jako wyjątkowy atut operacyjny

To jest pomocnik skierowany do współtwórców:

- [Pasek jakości](QUALITY-BAR.md)
- [Anatomia umiejętności](SKILL-ANATOMY.md)
- [Klasyfikacja umiejętności](../specs/SKILL-CLASSIFICATION.md)

Aktualny benchmark dla katalogu na żywo:

- 32 opublikowane umiejętności
- bieżąca rozpiętość jakości: `94, 95, 96, 97, 100`
- rozpiętość aktualnych najlepszych praktyk: `98, 99, 100`
- aktualny top-end: `omni-figma` w jakości `100/100` i najlepszych praktykach `100/100`---

## 🧱 What High Scores Really Mean

Klasyfikator**nie**nagradza samej przeceny.

Umiejętności wysoko punktowane to umiejętności, które są:

-**wykrywalne**: opis wyraźnie mówi, co robi umiejętność i kiedy jej używać
-**operacyjny**: umiejętność obejmuje lokalne skrypty, odniesienia i możliwe do uruchomienia przykłady
-**diagnostyka**: pomaga agentowi odzyskać siły, gdy coś pójdzie nie tak
-**konkretny**: koncentruje się na jednym przepływie pracy, a nie na ogólnych poradach
-**bezpieczny**: pozwala uniknąć ryzykownych wzorców i zapewnia czysty wydruk skanera

W praktyce najsilniejsze umiejętności zachowują się bardziej jak**mały zestaw do przepływu pracy**w pakiecie niż zwykła notatka o przecenach.---

## 📋 Score Targets

Użyj tych celów podczas tworzenia:

| Wymiar | Silny cel | Wyjątkowy Cel |
|:--------------|:-------------|:---------------------------------|
| 🎯 Dojrzałość | `L3` | `L3` z wieloma zasobami wsparcia |
| 📋 Najlepsze praktyki | `90+` | `96+` |
| ⭐ Jakość | `85+` | `90+` |
| 🛡️ Bezpieczeństwo | `95+` | `95+` z zerowymi wynikami |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Twój frontmanter powinien sprawić, że umiejętność będzie łatwa do sklasyfikowania i łatwa do odkrycia:

- `name` dokładnie pasuje do katalogu
- „opis” wyjaśnia zarówno**co**, jak i**kiedy**
- „kategoria”, „tagi”, „narzędzia”, „złożoność”, „ryzyko”, „źródło”, „autor” i daty są obecne

Dobry kształt opisu:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Zły kształt opisu:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

Najsilniejsze umiejętności konsekwentnie obejmują te sekcje:

- `## Przegląd`
- `## Kiedy używać tej umiejętności`
- `## Przepływ pracy`
- `## Przykłady`
- `## Najlepsze praktyki`
- `## Rozwiązywanie problemów`
- `## Dodatkowe zasoby`

Jeśli brakuje jednego z nich, wynik może być nadal dobry, ale trudniej będzie wyglądać wyjątkowo.---

### 3. Runnable Local Support

Do najwyżej ocenianych umiejętności zaliczają się zazwyczaj:

- `referencje/lista kontrolna.md`
- jeden lub więcej skryptów pomocniczych w `scripts/`
- przynajmniej jeden działający przykład w `examples/`
- `agents/openai.yaml`, gdy umiejętność jest przeznaczona do bezpośredniego wywoływania agenta
- bezpośrednie linki z `SKILL.md` do tych plików lokalnych

Ma to znaczenie, ponieważ klasyfikator traktuje umiejętność z**dołączonymi materiałami pomocniczymi**jako bardziej wykonalną niż umiejętność, która wskazuje jedynie na zewnątrz.

Zalecane minimum:```text
skills/<skill>/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── examples/
│   └── example.md
├── references/
│   └── checklist.md
└── scripts/
    └── render_<artifact>.py
```

---

### 4. Examples That Actually Help

Przykładami, które uzyskały wysoką liczbę punktów są:

- beton
- wpisane z prawdziwym płotem, takim jak `bash` lub `python`
- powiązany z lokalnym skryptem lub powtarzalnym poleceniem
- przedstawiciel przepływu pracy

Dobrze:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Słaby:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Osoba strzelająca nagradza rozwiązywanie problemów, które pomagają agentowi odzyskać siły, a nie tylko rozpoznać problem.

Preferowany format:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

To jest silniejsze niż niejasna notatka typu:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Klasyfikator rozróżnia teraz umiejętność jedynie kompletną od umiejętności naprawdę głębokiej.

Sygnały, które pomagają:

- wiele konkretnych przykładów
- wiele przypadków rozwiązywania problemów
- poradnictwo dotyczące powiązanych umiejętności
- bogatsze pakiety referencyjne
- widoczna sekcja „## Przebieg pracy” z ponumerowanymi krokami, które sekretarz może bezpośrednio policzyć
- co najmniej jedna tabela operacyjna lub mapa wykonania, gdzie wyjaśnia przepływ pracy
- więcej niż jeden katalog wsparcia lub typ zasobu
- sekcje przepływu pracy z wystarczającą liczbą kroków do kierowania wykonaniem
- zasoby decyzyjne, takie jak listy kontrolne, rubryki, macierze, pakiety lub podręczniki
- większa różnorodność pakietów wsparcia w `referencjach/`, `skryptach/`, `agentach/`, `przykładach/` lub `zasobach/`
- wystarczająca ilość plików pomocniczych wielokrotnego użytku, aby wyglądać jak zestaw, a nie pojedynczy pomocnik schowany obok przeceny
- więcej niż jeden plik pomocniczy, gdy przepływ pracy jest na tyle złożony, że uzasadnia zastosowanie pakietu wsparcia
- wystarczająca głębokość korpusu, aby uwzględnić kompromisy i tryby awarii
- gęstsze wskazówki operacyjne, ponieważ osoba oceniająca odróżnia teraz dopracowane formatowanie od głębokości przepływu pracy, którą można naprawdę ponownie wykorzystać

Sygnały, które**nie**bardzo pomagają:

- powtarzanie tej samej instrukcji innymi słowami
- ogólny tekst wypełniający
- dodawanie nagłówków bez dodawania treści pod nimi---

## 🧪 Fast Checklist Before You Commit

Skorzystaj z tej listy kontrolnej przed uruchomieniem sprawdzania poprawności:

- opis mówi**co**i**kiedy**
- umiejętność skupia się na jednym przepływie pracy
- `## Przepływ pracy` istnieje i zawiera kroki ponumerowane lub wypunktowane
- istnieje co najmniej jeden możliwy do uruchomienia przykład
- `references/`, `scripts/`, a najlepiej `examples/` są powiązane z `SKILL.md`
- `agents/openai.yaml` istnieje, gdy umiejętność jest przeznaczona do bezpośredniego wywoływania u klientów agentów
- rozwiązywanie problemów wykorzystuje `Symptomy` i `Rozwiązanie`
- umiejętność można rozsądnie sklasyfikować jako „L3”.
- nie ma żadnych ryzykownych poleceń ani podejrzanych ścieżek

Następnie uruchom:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- opis jest poprawny, ale zbyt ogólny
- przecena ma sekcje, ale nie ma głębokości operacyjnej
- przykłady nie wskazują na lokalnych pomocników
- Rozwiązywanie problemów istnieje, ale nie ma charakteru diagnostycznego
- jest za mało tagów lub identyfikatorów narzędzi
- umiejętność jest bezpieczna i czysta, ale wciąż zbyt płytka, aby można ją było uznać za wyjątkową---

## 🧭 Practical Rule

Jeśli Twoje umiejętności przypominają:

-**szablon**: może przejść
-**przewodnik**: może uzyskać dobry wynik
-**pakiet przepływu pracy**: znacznie większe prawdopodobieństwo zdobycia czołowej pozycji