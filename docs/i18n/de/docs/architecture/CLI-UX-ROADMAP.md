# 🧭 CLI UX Roadmap (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Die Produkt-Roadmap für die Weiterentwicklung von Omni Skills von einem Flag-First-Installer zu einem geführten Terminal-Erlebnis für erfahrene und nicht erfahrene Benutzer.**
> Umfang: NPM-Paket, CLI-Installationserfahrung, Terminal-Benutzeroberfläche, Service-Startabläufe und visuelles Onboarding.---

## 1. Problem Statement

Die aktuelle Laufzeitbasis ist stark, aber das Einstiegserlebnis ist immer noch für Benutzer optimiert, die Folgendes bereits verstehen:

- welchen Kunden sie ansprechen möchten
- welchen Installationsselektor sie verwenden möchten
- wie man Ziele in „--skill“, „--bundle“ oder „find“ übersetzt
- wenn sie eine reine CLI-Installation im Vergleich zu MCP-, API- oder A2A-Diensten benötigen

Heute:

- „npx omni-skills“ ist standardmäßig auf Antigravity eingestellt
- Dies ist technisch gültig und abwärtskompatibel
- Es ist jedoch nicht ideal für Erstbenutzer oder weniger technisch versierte Bediener

Die CLI verfügt bereits über einen grundlegenden interaktiven Modus, ähnelt aber immer noch eher einem Entwicklerdienstprogramm als einer geführten Produktoberfläche.

Diese Roadmap definiert den Weg zu einer stärkeren öffentlichen UX, ohne die aktuelle Flag-basierte Schnittstelle zu beschädigen.---

## 1.1 Delivery Status

Die Roadmap ist mittlerweile im aktuellen Repository-Zustand weitgehend umgesetzt.

Abgeschlossen:

- Phase 1: Geführte Einstiegspunktauswahl
- Phase 2: Geführter Installationsassistent
- Phase 3: Visual Terminal Shell
- Phase 4: Visual Service Hub
- Phase 5: Gespeicherte Profile und Wiederholbarkeit
- Phase 6: Härtung, Tests und Dokumentation---

## 2. Goals

- Behalten Sie die aktuellen Experten-CLI-Workflows bei
- Machen Sie den Einstiegspunkt ohne Argumente für Erstbenutzer sicher und verständlich
- Ersetzen Sie stille Standardeinstellungen in interaktiven Kontexten durch geführte Auswahl
- Unterstützt bekannte KI-Clients und beliebige benutzerdefinierte Installationspfade
- Verwandeln Sie Installation, Erkennung und Service-Boot in eine zusammenhängende Benutzerreise
- Stellen Sie eine visuelle Terminal-Benutzeroberfläche bereit, die sich wie ein Produkt und nicht nur wie ein Skript anfühlt
– Halten Sie die Installations-Engine, den Katalog und die Service-Laufzeit unter der Benutzeroberfläche wiederverwendbar---

## 3. Non-Goals

– Ersetzen der aktuellen Flag-basierten CLI
– Antigravity als unterstütztes Standardziel entfernen
- Bereitstellung einer Web-Benutzeroberfläche als primären Bereitstellungsmodus
- Refactoring der API-, MCP- oder A2A-Protokolle selbst im Rahmen dieser UX-Arbeit
- Ersetzen der „SKILL.md“-Erstellung durch ein datenbankgestütztes Admin-Panel---

## 4. Design Principles

### 4.1 Backward Compatibility First

Diese Befehle müssen weiterhin genauso funktionieren wie heute:

- `npx omni-skills --cursor --skill omni-figma`
- „npx omni-skills --bundle devops“.
- `npx omni-skills find figma --toolcursor --install --yes`
- „npx omni-skills mcp stream --local“.
- „npx omni-skills api --port 3333“.
- „npx omni-skills a2a --port 3335“.### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Interaktive Terminalsitzung ohne Argumente: offene, geführte Erfahrung
- Nicht interaktiver Aufruf ohne Argumente: Behält das aktuelle Standardverhalten der Installation bei
- Explizite Befehle und Flags gewinnen immer gegenüber UI-Inferenzen### 4.3 Reuse One Engine Across Modes

Folgendes sollte die gleiche interne Logik haben:

- Flag-First-CLI
- geführte Textmodus-CLI
- Visuelle Terminal-Benutzeroberfläche

Das bedeutet, dass die UX-Schicht keine eigene Geschäftslogik besitzen darf. Es sollte wiederverwendbare Aktionen orchestrieren.### 4.4 Preview Before Write

Alle geführten Abläufe, die Schreibvorgänge verursachen, sollten Folgendes anzeigen:

- Ziel aufgelöst
- gelöster Pfad
- ausgewählte Fähigkeiten oder Pakete
- Äquivalenter CLI-Befehl
- Bestätigungsaufforderung### 4.5 Visual Does Not Mean Implicit

Auch in der umfangreicheren Benutzeroberfläche sollte das System Status und Aktionen immer noch explizit machen:

- wohin die Installation geht
- was wird geschrieben
- welchen Transport oder Port ein Dienst nutzen wird
– ob ein Flow schreibgeschützt oder lokal schreibbar ist---

## 5. User Personas

### 5.1 Expert CLI User

Bedürfnisse:

- schnelle Befehle
- keine erzwungenen Eingabeaufforderungen
- stabile Flaggen
- Skriptfähigkeit### 5.2 Guided Product User

Bedürfnisse:

- klare Entscheidungen
- Keine Annahme, dass Antigravitation erwünscht ist
- Unterstützung für benutzerdefinierte Pfadinstallationen
- Verständliche Installationsvorschau
- Sichtbare Unterscheidung zwischen Installations- und Server-Laufzeitaktionen### 5.3 Operator / Platform User

Bedürfnisse:

- Möglichkeit, MCP, API und A2A visuell zu starten
- vernünftige Standardeinstellungen
– optionale Optimierung von Ports, Transport, Persistenz, Executor-Modus, Authentifizierung und lokalem Modus---

## 6. Target UX Model

Das Produkt sollte drei Schichten freilegen:### 6.1 Expert Mode

Direkte Befehle und Flags.

Beispiele:

- `npx omni-skills --cursor --skill omni-figma`
- „npx omni-skills mcp stream --local“.
- „npx omni-skills a2a --port 3335“.### 6.2 Guided Install Mode

Wird ausgelöst, wenn:

– Der Benutzer führt „npx omni-skills“ in einem TTY ohne Argumente aus
– Der Benutzer führt „npx omni-skills install“ ohne konkrete Selektoren aus
- Der Benutzer entscheidet sich ausdrücklich für den geführten Modus

Der geführte Installationsablauf sollte Folgendes durchlaufen:

1. Zielclient oder benutzerdefinierter Pfad
2. Installationstyp
3. Fertigkeits- oder Bündelauswahl
4. Vorschau
5. Bestätigung
6. Ausführung
7. Nächste Schritte### 6.3 Visual Operations Hub

Ausgelöst durch:

- „npx omni-skills ui“.

Dies soll zum „Startbildschirm“ für nicht fachkundige Benutzer und Bediener werden.

Kernaktionen:

- Fähigkeiten installieren
- Fähigkeiten entdecken
- MCP starten
- API starten
- A2A starten
- Arzt leiten
- Führen Sie Rauchkontrollen durch---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Ergebnis:

- „Npx-Omni-Skills“ in TTY gehen nicht mehr stillschweigend von Antigravitation aus
– Benutzer werden aufgefordert, einen Client oder einen benutzerdefinierten Pfad auszuwählen

Anforderungen:

- Behalten Sie das Nicht-TTY-Standardinstallationsverhalten bei
- Zielselektor hinzufügen
- Unterstützung der benutzerdefinierten Pfaderfassung### Phase 2: Guided Install Wizard

Ergebnis:

- Die Installation wird zu einem vollständig geführten Ablauf

Anforderungen:

- Auswahl des Installationsmodus:
  - Vollständige Bibliothek
  - eine Fähigkeit
  - ein Bündel
  - Suchen und dann installieren
- Vorschau installieren
- Äquivalente Befehlswiedergabe
- Bestätigung und Ausführung### Phase 3: Visual Terminal Shell

Ergebnis:

- Die aktuelle einfache Text-Benutzeroberfläche wird zu einer Marken-Terminalanwendung

Anforderungen:

- Reichhaltigeres Layout
- Projekt-Branding und Logo
- besserer Stepper und bessere Karten
- Tastaturgesteuerte Navigation
- Reagieren Sie auf die Terminalimplementierung über Ink### Phase 4: Visual Service Hub

Ergebnis:

– MCP, API und A2A können über die visuelle Benutzeroberfläche gestartet werden

Anforderungen:

- Geführter MCP-Fluss
- Geführter API-Fluss
- Geführter A2A-Fluss
- Sichtbarer Modus und Konfigurationsvorschauen### Phase 5: Saved Profiles and Repeatability

Ergebnis:

- Gemeinsame Installations- oder Servicevoreinstellungen können wiederverwendet werden

Anforderungen:

- Erinnern Sie sich an aktuelle Ziele
- Gespeicherte Dienstvoreinstellungen
- Aktuelle Befehle
- Lieblingspakete oder -fähigkeiten### Phase 6: Hardening, Tests, and Documentation

Ergebnis:

- Die UX wird zu einer gepflegten öffentlichen Schnittstelle und nicht zu einer Ad-hoc-Annehmlichkeit

Anforderungen:

- Rauchabdeckung
- Regressionstests
- Dokumentaktualisierungen
- Bedienerführung
- Überprüfung der Paketkompatibilität---

## 8. Proposed Command Model

### Stable Commands

- „Omni-Fähigkeiten“.
- „Omni-Skills-Installation“.
- „Omni-Skills finden“.
- „Omni-Skills-Benutzeroberfläche“.
- „omni-skills mcp“.
- „Omni-Skills-API“.
- „Omni-Skills a2a“.
- „Arzt mit all seinen Fähigkeiten“.
- „Omni-Skills-Rauch“.### Recommended Behavior

| Aufruf | Verhalten |
|:-----------|:---------|
| „Omni-Skills“ in TTY, keine Argumente | Eintrag zur geführten Installation |
| „Omni-Skills“ in Nicht-TTY, keine Argumente | Aktuelle Antigravity-Standardinstallation |
| „Omni-Skills-Installation“ in TTY, keine Selektoren | Geführter Installationsassistent |
| `omni-skills install --guided` | Zwangsgesteuerter Installationsablauf |
| „Omni-Skills-Benutzeroberfläche“ | Öffnen Sie den Visual Operations Hub |
| explizite Flags | Direkte Ausführung ohne Umweg über den geführten Ablauf |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Optionen:

- Claude Code
- Cursor
- Gemini-CLI
- Codex-CLI
- Kiro
- Antigravitation
- OpenCode
- Benutzerdefinierter Pfad

Ausgabe:

- Ausgewählter bekannter Ziel- ODER benutzerdefinierter Dateisystempfad### Step 2: Choose Install Type

Optionen:

- Vollständige Bibliothek
- eine veröffentlichte Fertigkeit
- ein Bündel
- Suchen und dann installieren

Ausgabe:

- Umfang installieren### Step 3: Resolve Selection

Abhängig vom Installationstyp:

- Vollständige Bibliothek: kein zusätzlicher Selektor
- Fertigkeit: Listen Sie eine Fertigkeit auf oder wählen Sie sie aus
- Bundle: Listen Sie ein Bundle auf oder wählen Sie es aus
- Suche: Eingabeaufforderung, passende Fähigkeiten und Pakete anzeigen### Step 4: Preview

Anzeige:

- ausgewähltes Ziel
- gelöster Pfad
- ausgewählte Fertigkeit oder Bündel
- Äquivalenter CLI-Befehl
– ob der Fluss selektiv oder vollständig installiert ist### Step 5: Confirm

Benutzer bestätigt:

- ja → ausführen
- nein → abbrechen oder zurückgehen### Step 6: Result

Anzeige:

- Erfolg/Misserfolg
- Zielpfad
- Vorschlag für den nächsten Schritt---

## 10. Information Architecture for the Visual Operations Hub

Der Operations Hub sollte Folgendes offenlegen:### 10.1 Install

- Geführter Installationsablauf
- Skill- oder Bundle-Suche
- Benutzerdefinierter Pfad### 10.2 Discover

- Katalogsuche
- Filter
- Vorschau der Metadaten
- Übergabe installieren### 10.3 MCP

Optionen:

- Transport: stdio, stream, sse
- Lokaler Modus ein/aus
- Gastgeber
- Hafen### 10.4 API

Optionen:

- Gastgeber
- Hafen
- optionale Authentifizierung
- optionale Ratenbegrenzung### 10.5 A2A

Optionen:

- Gastgeber
- Hafen
- store type: memory, json, sqlite
- executor: inline, process
- lease options when sqlite queue is enabled### 10.6 Diagnostics

- Arzt
- Rauch---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Die aktuellen „tools/bin/cli.js“-Mischungen:

- Befehlsanalyse
- Präsentation
- interaktive Eingabeaufforderungen
- Aktionsorchestrierung
- Servicestart

Die neue Struktur sollte wiederverwendbare Logik verschieben in:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

„tools/bin/install.js“ sollte das schreibfähige Backend bleiben.

Die geführte Benutzeroberfläche sollte das vorhandene Installationsprogramm-Backend aufrufen, anstatt die Installationslogik zu duplizieren.### 11.3 Keep Find/Search Reusable

Der geführte Installationsassistent sollte denselben Katalogkern und dieselbe CLI-Suchlogik wiederverwenden, die bereits Folgendes unterstützt:

- `finden`
- Vorschauen installieren
- Bundle-Auflösung### 11.4 Prepare for Ink Without Forcing It Early

Bei der ersten Zustellung können Eingabeaufforderungen im Textmodus verbleiben.

Die Architektur sollte jedoch eine klare Naht aufweisen, damit der Textfluss später über Ink gerendert werden kann.---

## 12. Risks

### 12.1 Breaking Existing Automation

Schadensbegrenzung:

- Öffnen Sie die geführte Benutzeroberfläche nur automatisch in TTY
- Behalten Sie die aktuelle Standardeinstellung in Nicht-TTY bei
- Behalten Sie explizite Flagflüsse bei### 12.2 Letting UI Own Business Logic

Schadensbegrenzung:

- Verlagerung der Orchestrierung auf wiederverwendbare Aktionsmodule
- Behalten Sie die Installations- und Service-Boot-Logik unterhalb der UI-Ebene### 12.3 Ink Migration Too Early

Schadensbegrenzung:

- Versenden Sie zunächst den geführten Fluss im aktuellen Knoten-Terminal-Stack
- Migrieren Sie dann zu Ink, sobald die Flusssemantik stabil ist### 12.4 Incomplete Service UX

Schadensbegrenzung:

- Zuerst den Installationsassistenten ausliefern
- dann schichtgeführter Dienststart---

## 13. Acceptance Criteria by Phase

### Phase 1

- „npx omni-skills“ in TTY wird nicht mehr sofort installiert
- Der Benutzer kann den Zielclient oder einen benutzerdefinierten Pfad wählen
- Nicht-TTY-No-Argument-Aufrufe funktionieren weiterhin wie zuvor### Phase 2

- Die geführte Installation unterstützt die vollständige Bibliothek, den Skill, das Bundle und die Suche-dann-Installation
- Vor dem Schreiben wird immer eine Vorschau angezeigt
- Befehlsäquivalent wird angezeigt### Phase 3

- Es gibt eine gebrandete Terminal-Benutzeroberfläche
- Die Benutzeroberfläche ist visuell strukturierter als einfache Readline-Menüs
- Die Navigation ist tastaturfreundlich### Phase 4

– Benutzer können MCP, API und A2A vom Visual Hub aus starten
- Die wichtigsten Laufzeitoptionen sind in geführter Form konfigurierbar### Phase 5

- Zuletzt verwendete oder gespeicherte Einstellungen sind wiederverwendbar
- Wiederholte Abläufe erfordern weniger Eingabeaufforderungen### Phase 6

- Die Rauchabdeckung spiegelt die neuen UX-Einstiegspunkte wider
– Dokumente beschreiben das Verhalten des geführten Modus und des Dienstassistenten---

## 14. Execution Order

Diese Roadmap muss in dieser Reihenfolge umgesetzt werden:

1. Geführte Einstiegspunktauswahl
2. Geführter Installationsassistent
3. Visuelle Terminal-Shell
4. Visueller Service-Hub
5. Gespeicherte Profile und Wiederholbarkeit
6. Härten, Tests und Dokumentationspolitur

Die Implementierungsarbeit sollte vor Beginn jeder Aufgabe die entsprechende Aufgabendatei lesen, damit die CLI-Arbeit mit dem Plan übereinstimmt und nicht abweicht.