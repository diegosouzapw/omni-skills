# ✅ Quality Bar (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Minimalne wymagania i zalecenia dotyczące umiejętności, które mają zostać przyjęte do repozytorium Omni Skills.**

Wskazówki dotyczące tworzenia utworów, których celem jest uzyskanie najlepszych wyników, można znaleźć w [Poradniku najlepszych wyników](HIGH-SCORE-PLAYBOOK.md).

Aktualny benchmark dla opublikowanego katalogu:

- 32 opublikowane umiejętności
- średni wynik jakości `96,3`
- średni wynik najlepszych praktyk `98,7`
- średni wynik bezpieczeństwa `95,0`---

## 🔒 Required (Must Pass)

| # | Wymóg | Jak zweryfikować |
|:--|:------------|:-------------|
| 1️⃣ |**Ważny temat**| `python3 narzędzia/skrypty/validate_skills.py` |
| 2️⃣ |**Przejrzysty opis**| Jedna linijka musi wyjaśniać, do czego służy dana umiejętność (ponad 10 znaków) |
| 3️⃣ |**Nazwa pasuje do katalogu**| Pole `name:` ​​odpowiada dokładnie nazwie folderu |
| 4️⃣ |**Sekcja przeglądowa**| Krótkie wyjaśnienie celu treści przeceny |
| 5️⃣ |**Kiedy używać sekcji**| Co najmniej 2 konkretne scenariusze użycia |
| 6️⃣ |**Przydatne instrukcje**| Treść krok po kroku, którą agent AI może wykonać |
| 7️⃣ |**Wygenerowane metadane**| Walidator pomyślnie emituje `skills/<skill>/metadata.json` |---

## ⭐ Recommended (Improves Score)

| # | Zalecenie | Wpływ wyniku |
|:--|:--------------|:------------|
| 8️⃣ |**Przykłady**— co najmniej jeden konkretny przykład z oczekiwanymi wynikami | 📈 Jakość +10-15 |
| 9️⃣ |**Dobre praktyki**— ✅ Zrób / ❌ Nie udzielaj wskazówek | 📈 Najlepsze praktyki +5 |
| 🔟 |**Testowano za pomocą narzędzia**— zweryfikowano za pomocą co najmniej jednego asystenta kodowania AI | 📈 Jakość +5 |
| 1️⃣1️⃣ |**Tagi**— odpowiednie tagi, które można przeszukiwać w celu odkrycia | 📈 Najlepsze praktyki +10 |
| 1️⃣2️⃣ |**Kategoria**— przypisana do jednej kategorii kanonicznej | 📈 Najlepsze praktyki +10 |
| 1️⃣3️⃣ |**Rozwiązywanie problemów**— konkretne wskazówki dotyczące „objawów” i „rozwiązań” | 📈 Najlepsze praktyki +5-10 |
| 1️⃣4️⃣ |**Lokalne zasoby wsparcia**— `referencje/`, `skrypty/`, a najlepiej `przykłady/` połączone z umiejętnością | 📈 Najlepsze praktyki +10 |
| 1️⃣5️⃣ |**Klasyfikacja zdrowa**— dojrzałość L3, jakość 85+, najlepsze praktyki 90+ ​​| 📈 Ogólny poziom |
| 1️⃣6️⃣ |**Brak krytycznych ustaleń dotyczących bezpieczeństwa**— skaner statyczny przechodzi pomyślnie | 🛡️ Bezpieczeństwo 100 |---

## ❌ Reasons for Rejection

| Wydanie | Dlaczego |
|:------|:--------|
| ❌ Brakujący lub nieprawidłowy tytuł | Przerywa potok walidacji |
| ❌ Nazwa nie pasuje do katalogu | Przerywa generowanie katalogu |
| ❌ Pusty lub banalnie krótki opis | Użytkownicy nie mogą odkryć umiejętności |
| ❌ Brak treści, które można wykorzystać (tylko linki lub fragmenty) | Agenci nie mogą niczego wykonać |
| ❌ Duplikat bez wyraźnej poprawy | Dodaj wartość, nie klonuj |
| ❌ Obraźliwe treści bez tagu `ryzyko: obraźliwe` | Bezpieczeństwo i zgodność |
| ❌ Krytyczne ustalenia dotyczące bezpieczeństwa | Natychmiastowa eksfiltracja, niszczycielskie rozkazy itp. |---

## 🧪 Verify Locally

```bash
# Run validation
npm run validate

# Check your scores
cat skills/<your-skill>/metadata.json | jq '.quality, .best_practices, .security'

# Full build + smoke check
npm run build
npm run smoke
```

---

## 📊 Score Reference

| Wymiar | Znakomity | Dobrze | Potrzebuje pracy |
|:---------------|:----------|:----------|:----------------|
| ⭐**Jakość**| 80+ (platyna) | 60-79 (złoto/srebro) | <60 (brąz/starter) |
| 📋**Dobre praktyki**| 90+ (doskonały) | 70-89 (dobrze) | <70 (dostateczny/potrzebny) |
| 🛡️**Bezpieczeństwo**| 95+ (hartowany) | 80-94 (bezpieczne) | <80 (potrzebna recenzja) |
| 🎯**Dojrzałość**| L3 (skrypty+testy) | L2 (instrukcje) | L1 (tylko metadane) |---

## 🧭 What High Scores Require

Aby konsekwentnie osiągać najwyższy poziom, umiejętność powinna obejmować:

- mocny opis, który wyjaśnia zarówno**co**umiejętność, jak i**kiedy**należy jej użyć
- wyraźne sekcje dotyczące „Kiedy używać”, „Przebieg pracy”, „Przykłady”, „Najlepsze praktyki”, „Rozwiązywanie problemów” i „Dodatkowe zasoby”
- lokalne materiały pomocnicze w `references/`, `scripts/`, a najlepiej `examples/`, powiązane bezpośrednio z `SKILL.md`
- metadane agenta w `agents/openai.yaml`, gdy umiejętność ma być wywoływana bezpośrednio w klientach agenta
- mała tabela operacyjna lub równoważna mapa wykonania, gdy przepływ pracy na tym skorzysta
- co najmniej jeden możliwy do uruchomienia przykład, który wskazuje na lokalny skrypt pomocniczy lub powtarzalne polecenie
- rozwiązywanie problemów zapisywane jako „Symptomy” plus „Rozwiązanie”, a nie ogólne ostrzeżenia
- wystarczająca głębokość, aby zakwalifikować się jako „L3”, a nie tylko dobrze sformatowaną prozę
- większa głębokość przepływu pracy, zasoby decyzyjne i różnorodność pakietów wsparcia, jeśli chcesz najwyższej jakości pasma
- pakiet wsparcia, który jest wystarczająco głęboki, aby można go było ponownie wykorzystać, a nie tylko obecny w celu pokrycia pola wyboru
- co najmniej 4 znaczące rodziny wsparcia lub równoważna głębokość w plikach wielokrotnego użytku, jeśli chcesz konsekwentnie górnego pasma