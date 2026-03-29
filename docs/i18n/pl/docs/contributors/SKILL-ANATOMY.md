# 🔬 Anatomy of a Well-Written Skill (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Oczekiwania dotyczące struktury i jakości umiejętności Omni Skills `SKILL.md` — format autorski, na którym opiera się cały katalog.**---

## 📐 The Two Parts

Każdy plik `SKILL.md` składa się z dwóch odrębnych sekcji:### 1️⃣ Frontmatter (YAML Metadata)

Metadane do odczytu maszynowego pomiędzy ogranicznikami „---”. Uprawnia:

- 📚 Indeks umiejętności i generowanie katalogu
- 🔎 Wyszukiwanie i filtrowanie CLI
- ✅ Walidacja i punktacja jakości
- 📊 Wygenerowano artefakty klasyfikacji `metadata.json`
- 📋 Poszczególne umiejętności manifestują się w `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Instrukcje czytelne dla człowieka (i agenta). Napisz to tak, jakbyś**informował starszego programistę**o tym, jak wykonać zadanie — na tyle szczegółowo, aby agent AI mógł go śledzić bez zgadywania.---

## 📋 Frontmatter Reference

| Pole | Wymagane | Wpisz | Opis |
|:------|:------------|:---------|:------------|
| `imię` | ✅ | ciąg | Musi odpowiadać nazwie katalogu, rozdzielonej małymi literami |
| `opis` | ✅ | ciąg | Opis jednowierszowy (10-200 znaków) |
| `wersja` | ⚡ | ciąg | Wersja semantyczna samej umiejętności (np. `"0.1.1") |
| `kategoria` | ⚡ | ciąg | Jedna kategoria kanoniczna z taksonomii repo |
| `tagi` | ⚡ | ciąg[] | Przeszukiwalne tagi do odkrycia |
| „złożoność” | ⚡ | ciąg | `początkujący` · `średniozaawansowany` · `zaawansowany` · `ekspert` |
| „ryzyko” | ⚡ | ciąg | „bezpieczny” · „ostrożność” · „obraźliwy” · „krytyczny” |
| `narzędzia` | ⚡ | ciąg[] | Przetestowani asystenci kodowania AI |
| `źródło` | ⚡ | ciąg | `omni-team` · `społeczność` · `oficjalny` |
| `autor` | ⚡ | ciąg | Atrybucja |
| `data_dodania` | ⚡ | ciąg | Data ISO |
| `data_aktualizacji` | ⚡ | ciąg | Data ISO |

> ✅ = Zawsze wymagane · ⚡ = Wymagane w trybie ścisłym

Wersja umiejętności jest niezależna od wersji pakietu npm. Pakiet ma obecnie wersję `0.1.3`, ale istniejące umiejętności mogą pozostać w swojej własnej wersji semantycznej.---

## 🏷️ Canonical Categories

Taksonomia repo definiuje obecnie**18 kategorii kanonicznych**:

| Kategoria | Domena |
|:-------------|:-------|
| 💻 `rozwój` | Ogólne tworzenie oprogramowania |
| 🎨 `frontend` | Frameworki frontendowe i interfejs użytkownika |
| 🔧 `backend` | Usługi backendu i interfejsy API |
| 🌐 `fullstack-web` | Kompleksowe tworzenie stron internetowych |
| 🛠️ `narzędzia` | Narzędzia programistyczne i narzędzia |
| ⚙️ `cli-automatyzacja` | Narzędzia CLI i skrypty automatyzacji |
| 📊 `biznes` | Procesy i strategia biznesowa |
| 📐 `produkt` | Zarządzanie produktem i projektowanie |
| 🎯 „projekt” | Projekt wizualny i UX |
| 🤖 `dane-ai` | Inżynieria danych i aplikacje AI |
| 🧠 `ai-agenci` | Rozwój i wzorce agentów AI |
| 📈 „uczenie maszynowe” | Modele i szkolenia ML |
| 🔌 `devops` | Infrastruktura i wdrożenie |
| 🛡️ `testowanie bezpieczeństwa` | Praktyki testowania i bezpieczeństwa |
| 📖 `dokumentacja` | Tworzenie i zarządzanie dokumentacją |
| 🎬 `treść-media` | Tworzenie treści i media |
| 💬 „komunikacja” | Narzędzia komunikacji i przepływy pracy |
| ❓ `bez kategorii` | Domyślnie, gdy nie znaleziono dopasowania |

> Starsze etykiety, takie jak „przepływ pracy”, „architektura”, „infrastruktura”, „bezpieczeństwo” i „testowanie” są automatycznie normalizowane poprzez mapowanie aliasów.---

## 📝 Body Structure

Dobrze napisany zbiór umiejętności jest zgodny z następującą hierarchią:

### 📌 Przegląd (wymagany)
2-3 zdania na temat**co**robi dana umiejętność i**dlaczego**istnieje.

### 🎯 Kiedy używać (wymagane)
Wypunktowana lista**konkretnych scenariuszy**, w których ma zastosowanie ta umiejętność.

### 📋 Podstawowe instrukcje (wymagane)
**Proces krok po kroku**, którego powinien przestrzegać agent. Bądź wyraźny. Bądź konkretny. Agenci działają najlepiej, jeśli mają jasne i jednoznaczne instrukcje.

### 💡 Przykłady (zalecane)
Konkretne podpowiedzi, bloki kodu lub oczekiwane wyniki.**Im bardziej szczegółowe, tym lepiej.**

### ✅ Najlepsze praktyki (zalecane)
Użyj opcji ✅ Wykonaj / ❌ Nie formatuj, aby przyspieszyć skanowanie.

### 🔧 Rozwiązywanie problemów (opcjonalnie)
Typowe problemy i ich rozwiązania.

### 🔗 Powiązane umiejętności (opcjonalnie)
Odsyłacze do umiejętności uzupełniających.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Koncentruje się na**jednym konkretnym**przepływie pracy lub domenie
- 📌 Instrukcje są**wystarczająco jasne, aby sztuczna inteligencja**mogła je zastosować bez ludzkiej interpretacji
- 💡 Zawiera**konkretne przykłady**z oczekiwanym zachowaniem
- 🛡️ Zawiera odpowiednie wskazówki dotyczące**obsługi błędów**
- 📊 Tworzy zdrowe metadane: kategoria kanoniczna, dojrzałość L2+, jakość 70+
- 🧰 Dostarcza pakiet wsparcia wielokrotnego użytku, nie tylko prozę, najlepiej w postaci `referencji/`, `skryptów/`, `przykładów/` i `agentów/` tam, gdzie to konieczne

Aby zapoznać się z silniejszymi wzorcami punktacji, które przesuwają umiejętności do najwyższych przedziałów, zobacz [Poradnik najlepszych wyników](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Ogólne porady, które mogą dotyczyć wszystkiego
- 🤷 Niejasne instrukcje, takie jak „napisz dobry kod”
- 🚫 Brak przykładów i bloków kodu
- ⚠️ Brakujące pola frontmaterii
- 📉 Niski wynik jakości (poniżej 50)