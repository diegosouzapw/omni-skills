# 🖥️ CLI Visual Shell Specification (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Verhaltensvertrag für die von „omni-skills ui“ bereitgestellte Benutzeroberfläche des Ink-basierten Terminals.**---

## 1. Scope

Die visuelle Hülle ist eine geführte Produktoberfläche auf der vorhandenen CLI- und Installations-Engine.

Es ersetzt nicht:

- Experten-Flag-basierte CLI-Nutzung
- `tools/bin/install.js`
- Der geführte Textinstallationsablauf
- API-, MCP- oder A2A-Laufzeitverhalten

Es definiert:

- das Verhalten von „Omni-Skills UI“.
– der Fallback-Vertrag für „omni-skills ui --text“.
- Lokaler Status und voreingestellte Persistenz
- Geführte Vorschau auf den Start des Dienstes
- Wiederholbarkeit für aktuelle Installationen und Serviceläufe---

## 2. Entry Rules

### 2.1 Visual Mode

„omni-skills ui“ startet die Ink-basierte visuelle Shell.

Die visuelle Hülle ist das primäre Terminalerlebnis für Nicht-Experten für:

- Flows installieren
- Katalogbasierte Erkennung und Installation
- MCP-Start
- API-Start
- A2A-Startup
- Arzt- und Rauchübergabe### 2.2 Text Fallback

„omni-skills ui --text“ startet die readline-basierte Fallback-Schnittstelle.

Dies bleibt nützlich, wenn:

- Ein Terminal kann die umfangreichere Shell nicht korrekt rendern
- Das Verhalten im Rohmodus ist eingeschränkt
- Ein minimaler Text-Fallback wird bevorzugt### 2.3 Handoff Rule

Die visuelle Shell implementiert Dienstlaufzeiten oder Installationsschreibvorgänge nicht direkt neu.

Nach der Vorschau und Bestätigung wird der Vorgang sauber beendet und die Ausführung mit den entsprechenden Argumenten und Umgebungsvariablen an den vorhandenen CLI-Einstiegspunkt übergeben.---

## 3. Home Screen Contract

Der Startbildschirm muss Folgendes anzeigen:

- Fähigkeiten installieren
- finden und installieren
- Wiederholen Sie die letzten Installationen, sofern vorhanden
- Führen Sie gespeicherte Installationsvoreinstellungen aus, sofern vorhanden
- Starten Sie einen Dienst
- Wiederholen Sie die letzten Dienste, sofern vorhanden
- Gespeicherte Dienstvoreinstellungen ausführen, sofern vorhanden
- Arzt
- Rauch
- Ausstieg

Der Startbildschirm sollte außerdem angezeigt werden:

- Aktuelle veröffentlichte Bundle-Verfügbarkeit
- Lokale Statuszählungen für aktuelle Dateien, Voreinstellungen und Favoriten---

## 4. Install Flow Contract

Der visuelle Shell-Installationsablauf muss Folgendes unterstützen:

- Auswahl bekannter Kundenziele
- Benutzerdefinierte Pfadauswahl
- Vollständige Bibliotheksinstallation
- One-Skill-Installation
- One-Bundle-Installation
- Suchen-dann-installieren
- Vorschau vor dem Schreiben
- Voreingestelltes Speichern
- Lieblingsfertigkeit oder Bündelumschaltung

Die Vorschau muss Folgendes zeigen:

- Zielbezeichnung behoben
- gelöster Pfad
- Umfang installieren
- Gegebenenfalls ausgewählte Fertigkeit oder Bündel
- Äquivalenter CLI-Befehl---

## 5. Service Flow Contract

Die visuelle Shell muss den Start leiten für:### 5.1 MCP

- Transport: „stdio“, „stream“, „sse“.
- Modus: „schreibgeschützt“ oder „lokal“.
- Host-/Portkonfiguration für Netzwerktransporte
- explizite Befehlsvorschau### 5.2 API

- Gastgeber
- Hafen
- Grund- oder gehärtetes Profil
- Gehärtete Träger- oder API-Schlüsselauthentifizierung
- Gehärtete Geschwindigkeitsbegrenzungsparameter
- Aktivierung des Audit-Protokolls
- explizite Befehlsvorschau### 5.3 A2A

- Gastgeber
- Hafen
- Speichertyp: „Speicher“, „JSON“, „SQLite“.
- Speicherpfad für dauerhafte Modi
- Executor: „inline“, „process“.
- Warteschlangenfähiger SQLite-Modus
- Abfrageintervall und Lease-Dauer für den Shared-Lease-Modus
- explizite Befehlsvorschau---

## 6. Local State Contract

Die visuelle Shell behält den Nur-Lokal-Status bei:```text
~/.omni-skills/state/ui-state.json
```

Der Staat umfasst derzeit:

- Aktuelle Installationen
- aktuelle Serviceeinführungen
- Benannte Installationsvoreinstellungen
- Benannte Dienstvoreinstellungen
- Lieblingsfähigkeiten
- Lieblingspakete

Die Shell muss Folgendes unterstützen:

- Wiedergabe der letzten Installationen
- Wiedergabe der letzten Diensteinführungen
- Wiederverwendung benannter Installationsvoreinstellungen
- Wiederverwendung benannter Dienstvoreinstellungen---

## 7. Compatibility Contract

Die visuelle Hülle ist additiv.

Diese Flüsse müssen gültig und stabil bleiben:

- `npx omni-skills --cursor --skill omni-figma`
- „npx omni-skills --bundle devops“.
- „npx omni-skills install --guided“.
- `npx omni-skills find figma --toolcursor --install --yes`
- „npx omni-skills mcp stream --local“.
- „npx omni-skills api --port 3333“.
- „npx omni-skills a2a --port 3335“.

Die visuelle Shell darf sich niemals zu expliziten Expertenbefehlspfaden zwingen.---

## 8. Safety Contract

Die visuelle Shell sollte Status und Schreibvorgänge explizit machen.

Es muss:

- Vorschau der Installationen vor der Schreibübergabe
- Vorschau der Dienststartbefehle vor der Ausführung
- Halten Sie geheimes Material aus der Klartext-Befehlsvorschau fern, sofern dies praktisch ist
- Status nur lokal beibehalten
- Behalten Sie das nicht interaktive CLI-Verhalten außerhalb der visuellen Shell bei