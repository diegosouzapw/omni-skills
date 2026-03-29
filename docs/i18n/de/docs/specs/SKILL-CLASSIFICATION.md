# 📊 Skill Classification and Metadata (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Der lokale Klassifikator, der jede Fähigkeit während der Validierung und Erstellung bewertet und maschinenlesbare Profile für den gesamten Katalog generiert.**---

## 📊 Status

| Ausgabe | Generiert |
|:-------|:----------|
| ✅ Root „metadata.json“ | Repositoryweite Zusammenfassung |
| ✅ Pro Skill `skills/<skill>/metadata.json` | Einzelklassifizierungen |
| ✅ Katalog „dist/catalog.json“ | Veröffentlichter Katalog mit Partituren |
| ✅ Manifestiert „dist/manifests/<skill>.json“ | Maschinenlesbare Daten pro Fähigkeit |

Erstellt von: `python3 tools/scripts/validate_skills.py`

Aktueller Repository-Snapshot:

- 32 veröffentlichte Fähigkeiten
- durchschnittlicher Qualitätsfaktor „96,3“.
- durchschnittliche Best-Practices-Bewertung „98,7“.
- durchschnittliche Sicherheitsbewertung „95,0“.
- aktuelle Qualitätsverteilung „94, 95, 96, 97, 100“.
- aktuelle Best-Practices-Spread „98, 99, 100“.---

## 🎯 Purpose

Der Klassifikator verleiht jeder Fertigkeit ein**konsistentes maschinenlesbares Profil**, bevor sie den Katalog erreicht. Es erfüllt vier Aufgaben:

1. 📋**Parse**– YAML-Frontmatter und Markdown-Body
2. 🏷️**Normalisieren**– Kategoriebezeichnungen zur kanonischen Taxonomie
3. 📊**Klassifizieren**– Reife, Best Practices, Qualität und Sicherheitsbewertung
4. 📁**Emit**– Metadatenartefakte, die von Build-Skripten, Dokumenten und CI verbraucht werden---

## 🏷️ Canonical Taxonomy

**18 kanonische Kategorien**mit automatischer Alias-Zuordnung:

| Kategorie | Domäne | Allgemeine Aliase |
|:---------|:-------|:---------------|
| 💻 `Entwicklung` | Allgemeine Softwareentwicklung | „Codierung“, „Programmierung“ |
| 🎨 `Frontend` | Frontend und Benutzeroberfläche | `ui`, `web-design` |
| 🔧 `Backend` | Backend & APIs | „Server“, „API“ |
| 🌐 `fullstack-web` | End-to-End-Web | `web`, `full-stack` |
| 🛠️ `Werkzeuge` | Entwicklertools | „Dienstprogramme“ |
| ⚙️ `cli-automatisierung` | CLI & Automatisierung | „Skripting“, „Workflow“ |
| 📊 „Geschäft“ | Geschäftsstrategie | „Strategie“ |
| 📐 „Produkt“ | Produktmanagement | `pm` |
| 🎯 „Design“ | Visuelles und UX-Design | `ux` |
| 🤖 `data-ai` | Daten- und KI-Apps | „Daten“, „Analysen“ |
| 🧠 „KI-Agenten“ | KI-Agentenmuster | „Agenten“ |
| 📈 „maschinelles Lernen“ | ML-Modelle & Training | `ml` |
| 🔌 `devops` | Infrastruktur | „Infrastruktur“, „Cloud“ |
| 🛡️ `testing-security` | Tests und Sicherheit | „Testen“, „Sicherheit“, „QA“ |
| 📖 `Dokumentation` | Dokumentenverwaltung | `Dokumente` |
| 🎬 „Inhaltsmedien“ | Inhaltserstellung | „Medien“, „Inhalt“ |
| 💬 „Kommunikation“ | Kommunikationstools | `chatten` |
| ❓ „nicht kategorisiert“ | Standard-Fallback | — |

> Legacy-Bezeichnungen wie „Workflow“, „Architektur“ und „Infrastruktur“ werden durch die Alias-Zuordnung automatisch normalisiert.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Ebene | Etikett | Kriterien |
|:------|:------|:---------|
|**L1**| „Metadaten“ | Frontmatter plus minimaler Körper |
|**L2**| `Anweisungen` | Umfangreiche schriftliche Anweisungen |
|**L3**| „Ressourcen“ | Gebündelte Skripte oder umfangreichere Paketressourcen |

Zusätzliche verfolgte Signale: „has_scripts“, „has_extra_files“.---

### 📋 Best Practices Score (0-100)

Die Heuristik wertet aus:

| Signal | Was es prüft |
|:-------|:---------------|
| 📛 Schneckenqualität | Formatierung des Feldes „Name“ |
| 📝 Beschreibung | Klarheit, Länge, Informationsgehalt |
| 📐 Struktur | Dokumentabschnitte und Hierarchie |
| 💡 Beispiele | Code-Zäune und Beispielblöcke |
| 🔗 Referenzen | Verknüpfte lokale „references/“, „scripts/“ und Support-Pack-Helfer |
| 🧰 Bedienbarkeit | Beispiele für ausführbare lokale Skripte und konkrete Workflow-Schnipsel |
| 🧩 Support-Pack-Tiefe | Mehrere Supportfamilien, wiederverwendbare Dateien, Agentenmetadaten und Betriebsressourcen |
| 🩺 Fehlerbehebung | Explizite Paare aus „Symptomen“ und „Lösung“ |
| 📚 Abdeckung | Abschnitte „Wann zu verwenden“, „Best Practices“, „Fehlerbehebung“ und „Zusätzliche Ressourcen“ |
| 🌐 Portabilität | Tool-agnostische Formulierung |
| 📅 Frische | Vermeidung fest codierter Daten |

**Aktuelle Einstufung**

| Stufe | Bewertungsbereich |
|:-----|:-----------|
| „ausgezeichnet“ | 90-100 |
| „gut“ | 70-89 |
| „fair“ | 50-69 |
| `braucht-arbeit` | 0-49 |

Der Scorer ist absichtlich**semantisch genug, um eine Streuung**über ausgereifte Fähigkeiten zu schaffen. Eine Fertigkeit mit sauberer Struktur kann gut punkten, aber um das obere Band zu erreichen, braucht sie auch Tiefensignale wie:

- mehrere Beispiele, nicht nur eines
- mehrere Fehlerbehebungsfälle
- entsprechende Kompetenzberatung
- Umfangreichere lokale Supportpakete
- mehr als eine Unterstützungsfamilie, die über die reine Prosa hinausgeht, idealerweise einschließlich „agents/“ oder „assets/“, wo sie eine echte Wiederverwendung ermöglichen
- ein spezieller Abschnitt „## Workflow“ mit zählbaren Schritten
- mindestens eine kleine operative Tabelle oder Entscheidungskarte, wenn dadurch die Klarheit der Ausführung verbessert wird
- mehr operative Spezifität als eine einfache Vorlage
- klarere Workflow-Tiefe und Entscheidungsunterstützungsressourcen
- Support-Pack-Tiefe, die über eine `references/`-Datei und ein verknüpftes Skript hinausgeht
- Genügend wiederverwendbare Unterstützungsdateien, um sich wie ein Workflow-Kit und nicht wie ein Einzelnotiz-Add-on anzufühlen
- Genug Betriebsdichte, um eine ausgefeilte Gliederung von einem wiederverwendbaren Workflow-Kit zu trennen

Das bedeutet, dass ein strukturell vollständiger Skill immer noch in den oberen 90ern statt bei „100“ landen kann, wenn sein Unterstützungspaket schmaler ist, seine Entscheidungsressourcen dünner sind oder seine Betriebsdichte geringer ist als die der stärksten Skills im Katalog.---

### ⭐ Quality Score (0-100)

Die Heuristik kombiniert:

| Signal | Gewicht |
|:-------|:-------|
| 📝 Körpervollständigkeit | Mittelhoch |
| 📋 Beschreibungsgenauigkeit | Mittel |
| 📊 Vollständigkeit der Metadaten | Mittel |
| 📅 Aktualität (`date_updated`) | Mittel |
| 📦 Verpackte Ressourcen | Mittel |
| 📋 Best Practices-Beitrag | Mittel |
| 🧠 Semantische Tiefe | Mittelhoch |
| 🛠️ Operative Tiefe | Mittel |
| 📚 Umfangreiches Support-Paket | Mittel |

**Qualitätsstufen:**

| Stufe | Bewertungsbereich |
|:-----|:-----------|
| 💎 `Platin` | 80+ |
| 🥇 `Gold` | 65-79 |
| 🥈 `Silber` | 50-64 |
| 🥉 `Bronze` | 35-49 |
| 🌱 „Starter“ | 0-34 |---

### 🛡️ Security Score (0-100)

Die Sicherheitsschicht vereint:

| Scanner | Immer aktiviert | Was es tut |
|:--------|:---------------|:-------------|
| 🔍**Statisch**| ✅ Ja | Scannt SKILL.md, gepackte Dateien und Skripte |
| 🦠**ClamAV**| ⚙️ Optional | Malware-Scan über „clamscan“ |
| 🔒**VirusTotal**| ⚙️ Optional | Hash-Suche (kein Upload) |

**Regelfamilien für statische Scanner:**
- 🎭 Schnelle Injektions- und Exfiltrationsmuster
- 💣 Zerstörerische Shell-Befehle
- 🔑 Verdächtige Anmeldeinformations- oder Betriebssystempfade
- ⚠️ Riskante Skriptprimitive (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Form der Sicherheitsausgabe:**```json
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

| Abschnitt | Felder |
|:--------|:-------|
| 🆔 Identität | `id`, `slug`, `display_name` |
| 🏷️ Taxonomie | „raw_category“, „canonical_category“, „inferred_category“ |
| 📋 Autoren | Tags, Tools, Komplexität, Risiko, Quelle, Autor |
| 📅 Termine & Wege | `date_added`, `date_updated`, Pfade |
| 📊 Ressourcen | Datei- und Referenzzähler |
| 📝 Inhaltssignale | Wortanzahl, Körperlänge, Strukturflags |
| 🧠 Semantische Tiefe | Workflow-Schritte, Beispiele, Fehlerbehebungstiefe, Entscheidungsressourcen, Support-Link-Familien |
| 🧩 Support-Pack-Struktur | Anzahl der Supportdateien, verknüpfte Familien, „agents/“, „assets/“ und wiederverwendbare Beispiele |
| 🎯 Reife | Level-, Label-, Skript-/Dateiflags |
| 📋 Best Practices | Punktzahl und Rang |
| ⭐ Qualität | Bewertung, Rang und semantische Aufschlüsselung |
| 🛡️ Sicherheit | Punktzahl, Rang, Status, Ergebnisse |
| ✅ Validierung | Status, Fehler, Warnungen |### Root (`metadata.json`)

| Abschnitt | Felder |
|:--------|:-------|
| 📊 Zusammenfassung | Zählungen, Durchschnittswerte, Kategorienverteilung |
| 🏷️ Taxonomie | Kategorie zählt |
| 🎯 Verteilung | Fähigkeitsniveau, Qualitätsstufe, Sicherheitsstufe |
| ✅ Validierung | Status zählt |
| 📋 Liste der Fähigkeiten | Kompakte Zusammenfassungen pro Fähigkeit |---

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

Dadurch wird „git“ für die Verwendung von „.githooks/pre-commit“ konfiguriert, das Metadaten und Katalogartefakte vor dem Commit neu generiert und die generierten Dateien automatisch bereitstellt.