# Skill PR Workflow (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Jest to kanoniczny przepływ repozytorium dla żądań ściągnięcia, które dodają lub znacząco ulepszają jedną lub więcej umiejętności natywnych.

Użyj go, gdy:

- dodanie nowej umiejętności w zakładce `umiejętności/`
- pogłębienie pakietu o nowe umiejętności dziedzinowe
- wysyłka większego rozszerzenia pakietu wsparcia
- sprawdzanie gałęzi za pomocą prywatnego wzmacniacza przed połączeniem jej przez opiekunów## Target Outcome

Silna natywna umiejętność PR obejmuje:

- natywna umiejętność w zakładce `umiejętności/`
- wystarczająca ilość treści, aby publiczny walidator mógł ją sklasyfikować i zaindeksować
- przejście publicznej walidacji i testów
- automatyczne przetwarzanie wzmacniaczy podczas PR
- dalszy PR `skills_omni/` w przypadku publikacji ulepszonych instrumentów pochodnych
- rodzime spożycie, w razie potrzeby zachowane w oryginalnym języku
- wybrane ulepszone wyniki przepisane na język angielski
- jednokierunkowy przepływ natywny do wyselekcjonowanego, który nie zasila `skills_omni/` z powrotem do spożycia natywnych wzmacniaczy## Enhancer Outcome States

Publiczny wzmacniacz PR zgłasza teraz cztery stany widoczne dla opiekuna:

- „ukończone”.
  Ulepszona pochodna została wygenerowana czysto i kwalifikuje się do publikacji towarzyszącej `skills_omni/`.
- „zdegradowany”.
  Wzmacniacz zakończył działanie, ale użył ścieżki awaryjnej lub wygenerował ostrzeżenia. Nadal oczekuje się przeglądu przez konserwatora przed uznaniem instrumentu pochodnego za zdrowy.
- „zablokowany”.
  Przebieg został zatrzymany z powodu problemów z infrastrukturą lub walidacją, takich jak błąd wstępnej inspekcji hostowanego OmniRoute lub błąd sprawdzania poprawności kandydata, który powinien uniemożliwić publikację.
- „nie udało się”.
  Wzmacniacz napotkał nieoczekiwany błąd w czasie wykonywania i wymaga sprawdzenia przez opiekuna.## Recommended Branch Shape

Utwórz skupioną gałąź:```bash
git checkout -b feat/<short-skill-theme>
```

Przykłady:

- `ocena-obserwowalności wyczynów/incydentów'
- `feat/devops-pakiet umiejętności`
- `pakiet umiejętności/wyczynów bezpieczeństwa`## Native Intake Rules

Powierzchnia wlotu publicznego jest celowo liberalna.

Minimum:```text
skills/<skill>/
└── SKILL.md
```

Zalecane, ale nie wymagane do spożycia:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Natywny wkład może być przybliżony, niekompletny lub wykraczać poza normalny standard pakietu wsparcia. To jest zamierzone. „umiejętności/” to natywna powierzchnia odbioru, a nie wyselekcjonowana powierzchnia pochodna.

Polityka językowa:

- rodzime spożycie w rubryce `umiejętności/` może być zapisane w dowolnym języku
- wzmacniacz zachowuje natywną migawkę w postaci przesłanej w celu sprawdzenia pochodzenia
- wyselekcjonowana wersja pochodna pod `skills_omni/` musi zawsze być napisana w języku angielskim

Bardziej rygorystyczny pasek redakcyjny ma teraz zastosowanie do:

- wygenerowane metadane i kontrole bezpieczeństwa
- prywatna recenzja wzmacniacza
- następna pochodna wybrana w ramach `skills_omni/`## Authoring Sequence

1. Utwórz `skills/<skill>/SKILL.md`.
2. Dodaj frontmater, jeśli możesz, ale brakujący lub niekompletny frontmater nie blokuje już sam w sobie natywnego spożycia.
3. Dodaj `agents/`, `references/`, `examples/` i `scripts/`, jeśli już je masz.
4. Zaktualizuj plik `data/bundles.json`, jeśli umiejętność pogłębia istniejący pakiet.
5. Otwórz PR. Automatyzacja repo zajmie się teraz resztą.## Validation Sequence

Współautorzy mogą uruchomić dokładnie tę sekwencję przed otwarciem PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Jeśli zmiana wpływa również na środowisko wykonawcze lub zachowanie opakowania, uruchom także:```bash
npm run smoke
```

## What Happens Automatically During the PR

Kiedy PR otwiera się lub synchronizuje i dotyczy tylko natywnych plików pobierania umiejętności w obszarze `skills/` plus opcjonalny plik `data/bundles.json`, publiczne repozytorium teraz automatycznie uruchamia prywatny wzmacniacz.

Aktualny zautomatyzowany przepływ:

1. Publiczny przepływ pracy „Weryfikuj umiejętności” działa na PR i sprawdza walidację, kompilację, wygenerowane artefakty i testy.
2. Publiczny przepływ pracy „Wzmocnij umiejętności PR” rozpoczyna się równolegle i przetwarza zmienione umiejętności natywne jedna po drugiej w trybie „na żywo”.
3. Osoba wzmacniająca odczytuje natywną umiejętność z „umiejętności/”, bada aktualne najlepsze praktyki i zapisuje sprawdzonego ulepszonego kandydata w prywatnej przestrzeni roboczej.
4. W razie potrzeby moduł wzmacniający przechowuje migawkę poboru danych w oryginalnym języku, ale przepisuje wyselekcjonowane dane wyjściowe w języku angielskim.
5. Wzmacniacz publikuje postęp z powrotem do źródłowego PR.
6. Wzmacniacz aktualizuje komentarz statusu PR po każdej przetworzonej umiejętności, podając sumę partii i najnowszy stan.
7. Po zakończeniu materializuje ulepszoną pochodną w `skills_omni/` i otwiera lub aktualizuje towarzyszący PR w publicznym repo tylko dla „ukończonych” i „zdegradowanych” wyników.
8. Po połączeniu PR z `main`, prywatny moduł odpytujący obsługujący repo ponownie przetwarza wszelkie zmienione umiejętności natywne, odświeża `workspace/enhanced/skills/<skill>/` i utrzymuje ulepszoną prywatną linię bazową zgodną z najnowszym publicznym natywnym źródłem.
9. Po połączeniu przepływ pracy dotyczący wydania publicznego podbija wersję pakietu npm, ponownie generuje artefakty katalogu, publikuje wydanie i automatycznie oznacza nową wersję.

Limit stawki:

- wzmacniacz PR aktualnie przetwarza**1 umiejętność na minutę**
- PR z 40 natywnymi nowymi umiejętnościami może zatem pozostać w kolejce ulepszeń przez około 40 minut
- PR pokazuje, że działa jako proces CI w toku, plus komentarz dotyczący postępu, który rozwija umiejętność po umiejętności

Kontrybutor nie musi ręcznie uruchamiać wzmacniacza.## No-Loop Rule For `skills_omni/`

Wyselekcjonowana powierzchnia jest celowo jednokierunkowa:

- natywne wejście wchodzi poprzez `skills/`
- prywatny wzmacniacz sprawdza natywne dane wejściowe
- wyselekcjonowane wyniki są proponowane w `skills_omni/`
- `skills_omni/` nigdy więcej nie będzie traktowane jako natywne
- późniejsze aktualizacje natywne nadal są ponownie wprowadzane poprzez `umiejętności/` i zastępują prywatną ulepszoną linię bazową po ponownym przetworzeniu

Repozytorium wymusza teraz tę granicę:

- bezpośrednie publiczne PR modyfikujące `skills_omni/` są odrzucane
- akceptowane są tam tylko PR towarzyszące autorstwa automatyzacji z rodziny gałęzi `skills-omni/pr-*`
- mieszane PR, które próbują zmienić jednocześnie `skills/` i `skills_omni/` są odrzucane## Automatic Versioning After Merge

Łączenie umiejętności z „głównym” uruchamia teraz automatycznie proces wydawania repozytorium.

Aktualne zasady dotyczące wersji pakietu:

- przyrost łatki o `+1` dla każdego kwalifikującego się połączenia
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- po `.10` pakiet przechodzi do następnego mniejszego i resetuje łatkę
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Ścieżki wyzwalacza bieżącej wersji:

- `umiejętności/**`
- `umiejętności_omni/**`
- `data/bundles.json`

To zadanie automatycznego zwalniania:

1. oblicza następną wersję pakietu z `package.json`
2. podbija `package.json` i `package-lock.json`
3. regeneruje `metadata.json`, `skills_index.json`, `dist/` i `docs/CATALOG.md`
4. prowadzi proces ścisłej weryfikacji wydania
5. zatwierdza zmianę wersji z powrotem na `main`
6. tworzy tag Git dla nowej wersji
7. publikuje artefakty wydania npm i GitHub

Ważna uwaga dotycząca wdrożenia:

- GitHub rejestruje nowy plik przepływu pracy jako przepływ pracy aktywnego repozytorium dopiero wtedy, gdy plik ten dotrze do gałęzi domyślnej.
- Dopóki opcja „Wzmocnij umiejętności PR” nie znajdzie się na liście „głównej”, współautorzy mogą czytać udokumentowany proces, ale GitHub nie wykona jeszcze automatycznie tego przepływu pracy w przypadku publicznych PR.
- Po połączeniu przepływu pracy z „głównym”, zachowanie opisane powyżej staje się domyślną ścieżką przyjmowania przyszłych wymagań PR dotyczących umiejętności natywnych.## Native vs Enhanced

To repozytorium ma teraz dwie różne powierzchnie:

- `umiejętności/`
  Natywne spożycie. Dzięki temu oryginalny wkład zostanie zachowany w formie przesłanej.
- `umiejętności_omni/`
  Omni-ulepszone produkty pochodne zaproponowane przez automatyzację i utrzymywane przez zespół Omni Skills.

Reguły przypisania dla `skills_omni/`:

- ulepszona pochodna staje się Omni-utrzymywana
- oryginalny współtwórca i natywne umiejętności wyższego szczebla pozostają uznane
- każdy rozszerzony katalog przechowuje plik `ATTRIBUTION.md` ze ścieżką źródłową, PR, autorem i kontekstem źródłowym
- każdy ulepszony katalog jest wyłącznie produktem wyjściowym i nie można go ponownie przesłać do ścieżki pobierania natywnego wzmacniacza
- oczekuje się, że każdy rozszerzony katalog będzie generowany w języku angielskim, nawet jeśli pierwotne źródło źródłowe nie było## Manual Maintainer Commands

Automatyzacja obejmuje normalne pobieranie PR, ale opiekunowie mogą nadal ręcznie uruchamiać prywatny wzmacniacz, jeśli zajdzie taka potrzeba.

Partia względem różnicy gałęzi:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Przegląd pojedynczej umiejętności:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Oczekiwane produkty wzmacniające na umiejętność:

- `obszar roboczy/przychodzący/oryginalny/<id-run>/<umiejętność>/`
- `workspace/enhanced-canndidates/<run-id>/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

Organ PR powinien określić:

- jakie umiejętności zostały dodane lub ulepszone
- jakie pakiety lub przepływy pracy pogłębiają
- jaka weryfikacja została przeprowadzona
- czy automatyczny wzmacniacz działał
- czy otworzył lub zaktualizował PR towarzyszący `skills_omni/`
- wszelkie wyjątkowe notatki opiekuna dotyczące przypisania lub dalszego czyszczenia## Reviewer Checklist

- pobranie natywne jest legalne i nie jest złośliwe
- odświeżono wygenerowane metadane i manifesty
- aktualizacje pakietów są zamierzone
- wyniki publicznej walidacji i kompilacji są zielone
- komentarz dotyczący statusu wzmacniacza odpowiada faktycznie zmienionym umiejętnościom i stanowi końcowego wyniku
- dowolny PR towarzyszący `skills_omni/` poprawnie zachowuje atrybucję## Example PR Scope

Dobry przykład PR może dodać zestaw tematyczny taki jak:

- jedna obserwowalność lub umiejętność DevOps
- jeden incydent lub umiejętność bezpieczeństwa
- jedna umiejętność oceny lub podpowiedzi AI

Jest wystarczająco duży, aby korzystać z funkcji oceniania, automatycznego wzmacniacza, przepływu publikacji „skills_omni/”, pakietów i modelu atrybucji bez konieczności przekształcania PR w pełne przepisanie katalogu.