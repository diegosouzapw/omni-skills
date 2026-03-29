# 🔬 Anatomy of a Well-Written Skill (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Struktur- und Qualitätserwartungen an Omni Skills „SKILL.md“ – das Autorenformat, das dem gesamten Katalog zugrunde liegt.**---

## 📐 The Two Parts

Jedes „SKILL.md“ besteht aus zwei unterschiedlichen Abschnitten:### 1️⃣ Frontmatter (YAML Metadata)

Maschinenlesbare Metadaten zwischen „---“-Trennzeichen. Es ermöglicht:

- 📚 Der Kompetenzindex und die Katalogerstellung
- 🔎 CLI-Suche und Filterung
- ✅ Validierung und Qualitätsbewertung
- 📊 Generierte Klassifizierungsartefakte „metadata.json“.
- 📋 Pro Fertigkeit manifestiert sich in „dist/manifests/“.### 2️⃣ Body (Markdown Instructions)

Von Menschen (und Agenten) lesbare Anweisungen. Schreiben Sie es so, als ob Sie**einen leitenden Entwickler**in die Ausführung einer Aufgabe einweisen würden – spezifisch genug, dass ein KI-Agent ihr folgen kann, ohne zu raten.---

## 📋 Frontmatter Reference

| Feld | Erforderlich | Geben Sie | ein Beschreibung |
|:------|:---------|:-----|:------------|
| `Name` | ✅ | Zeichenfolge | Muss mit dem Verzeichnisnamen übereinstimmen, mit Kleinbuchstaben und Bindestrich |
| `Beschreibung` | ✅ | Zeichenfolge | Einzeilige Beschreibung (10–200 Zeichen) |
| `Version` | ⚡ | Zeichenfolge | Semantische Version für den Skill selbst (z. B. „0.1.1“) |
| „Kategorie“ | ⚡ | Zeichenfolge | Eine kanonische Kategorie aus der Repo-Taxonomie |
| `Tags` | ⚡ | string[] | Durchsuchbare Tags zur Entdeckung |
| „Komplexität“ | ⚡ | Zeichenfolge | „Anfänger“ · „Mittelstufe“ · „Fortgeschritten“ · „Experte“ |
| „Risiko“ | ⚡ | Zeichenfolge | „sicher“ · „Vorsicht“ · „beleidigend“ · „kritisch“ |
| `Werkzeuge` | ⚡ | string[] | Getestete KI-Codierungsassistenten |
| „Quelle“ | ⚡ | Zeichenfolge | „Omni-Team“ · „Community“ · „offiziell“ |
| „Autor“ | ⚡ | Zeichenfolge | Namensnennung |
| `date_added` | ⚡ | Zeichenfolge | ISO-Datum |
| `date_updated` | ⚡ | Zeichenfolge | ISO-Datum |

> ✅ = Immer erforderlich · ⚡ = Im strikten Modus erforderlich

Die Skill-Version ist unabhängig von der npm-Paketversion. Das Paket ist derzeit „0.1.3“, aber vorhandene Fähigkeiten können gültig in ihrer eigenen semantischen Version verbleiben.---

## 🏷️ Canonical Categories

Die Repo-Taxonomie definiert derzeit**18 kanonische Kategorien**:

| Kategorie | Domäne |
|:---------|:-------|
| 💻 `Entwicklung` | Allgemeine Softwareentwicklung |
| 🎨 `Frontend` | Frontend-Frameworks und UI |
| 🔧 `Backend` | Backend-Dienste und APIs |
| 🌐 `fullstack-web` | End-to-End-Webentwicklung |
| 🛠️ `Werkzeuge` | Entwicklertools und Dienstprogramme |
| ⚙️ `cli-automatisierung` | CLI-Tools und Automatisierungsskripte |
| 📊 „Geschäft“ | Geschäftsprozesse und Strategie |
| 📐 „Produkt“ | Produktmanagement und Design |
| 🎯 „Design“ | Visuelles und UX-Design |
| 🤖 `data-ai` | Datentechnik und KI-Anwendungen |
| 🧠 „KI-Agenten“ | Entwicklung und Muster von KI-Agenten |
| 📈 „maschinelles Lernen“ | ML-Modelle und Training |
| 🔌 `devops` | Infrastruktur und Bereitstellung |
| 🛡️ `testing-security` | Test- und Sicherheitspraktiken |
| 📖 `Dokumentation` | Dokumentationserstellung und -verwaltung |
| 🎬 „Inhaltsmedien“ | Content-Erstellung und Medien |
| 💬 „Kommunikation“ | Kommunikationstools und Arbeitsabläufe |
| ❓ „nicht kategorisiert“ | Standard, wenn keine Übereinstimmung gefunden wird |

> Ältere Bezeichnungen wie „Workflow“, „Architektur“, „Infrastruktur“, „Sicherheit“ und „Testen“ werden durch Alias-Mapping automatisch normalisiert.---

## 📝 Body Structure

Ein gut geschriebener Kompetenzkörper folgt dieser Hierarchie:

### 📌 Übersicht (erforderlich)
2-3 Sätze darüber,**was**die Fertigkeit bewirkt und**warum**sie existiert.

### 🎯 Verwendungszweck (erforderlich)
Aufzählung von**spezifischen Szenarios**, in denen diese Fähigkeit Anwendung findet.

### 📋 Kernanweisungen (erforderlich)
Der**Schritt-für-Schritt-Prozess**, dem der Agent folgen sollte. Seien Sie explizit. Seien Sie konkret. Agenten arbeiten am besten mit klaren, eindeutigen Anweisungen.

### 💡 Beispiele (empfohlen)
Konkrete Eingabeaufforderungen, Codeblöcke oder erwartete Ausgaben.**Je spezifischer, desto besser.**

### ✅ Best Practices (empfohlen)
Verwenden Sie zum schnellen Scannen die Formatierung ✅ Do/❌ Don't.

### 🔧 Fehlerbehebung (optional)
Häufige Probleme und ihre Lösungen.

### 🔗 Verwandte Fähigkeiten (optional)
Querverweise auf ergänzende Kompetenzen.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Konzentriert sich auf**einen bestimmten**Workflow oder eine bestimmte Domäne
- 📌 Die Anweisungen sind**klar genug, dass eine KI sie ohne menschliche Interpretation befolgen kann
- 💡 Enthält**konkrete Beispiele**mit erwartetem Verhalten
- 🛡️ Verfügt über eine ordnungsgemäße**Fehlerbehandlung**-Anleitung
- 📊 Erzeugt gesunde Metadaten: kanonische Kategorie, Reifegrad L2+, Qualität 70+
- 🧰 Versendet ein wiederverwendbares Support-Paket, nicht nur Prosa, idealerweise über „references/“, „scripts/“, „examples/“ und „agents/“, wo angemessen

Informationen zu den stärkeren Bewertungsmustern, die Fähigkeiten in die höchsten Bereiche bringen, finden Sie im [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Allgemeiner Rat, der auf alles zutreffen kann
- 🤷 Vage Anweisungen wie „Guten Code schreiben“
- 🚫 Keine Beispiele oder Codeblöcke
- ⚠️ Fehlende Frontmatter-Felder
- 📉 Niedriger Qualitätsfaktor (unter 50)