# 🧩 CLI Guided Installer Specification (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Verhaltensvertrag für die geführte Installation in der Omni Skills CLI.**---

## 1. Scope

Diese Spezifikation definiert das geführte Installationsverhalten, das auf dem vorhandenen Installationsprogramm-Backend aufbaut.

Es ersetzt nicht:

- `tools/bin/install.js`
- aktuelle Experten-Flag-Flows
- Selektive Installationsmanifeste

Es definiert:

- wie der geführte Modus aufgerufen wird
- wie Reiseziele ausgewählt werden
– Wie der Installationsbereich ausgewählt wird
- welche Vorschauinformationen angezeigt werden müssen
- wie Bestätigung und Ausführung funktionieren---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

Die CLI sollte in den geführten Installationsmodus wechseln, wenn:

– Der Benutzer führt „Omni-Skills“ ohne Argumente in einem TTY aus
– Der Benutzer führt „Omni-Skills-Installation“ ohne Selektoren in einem TTY aus### 2.2 Forced Guided Entry

Die CLI sollte auch den expliziten geführten Modus über eine dedizierte Option unterstützen, wie zum Beispiel:

- „omni-skills install --guided“.

Dieser Modus sollte auch dann funktionieren, wenn die Eingabe über eine Pipeline erfolgt und nicht an ein TTY angeschlossen ist, solange die Standardeingabe verfügbar ist.### 2.3 Non-Interactive Safety Rule

Beim Aufruf ohne TTY und ohne explizite Anforderung des geführten Modus:

- Behalten Sie das aktuelle Standardverhalten bei
- Blockieren Sie nicht das Warten auf Eingabeaufforderungen---

## 3. Destination Model

Die geführte Installation muss zwei Zielklassen unterstützen:### 3.1 Known Client Target

Jedes bekannte Ziel wird wie folgt aufgelöst:

- Für Menschen lesbares Etikett
- interne Werkzeug-ID
- Flagge installieren
- gelöster Pfad

Erforderliche bekannte Ziele:

- Claude Code
- Cursor
- Gemini-CLI
- Codex-CLI
- Kiro
- Antigravitation
- OpenCode### 3.2 Custom Path Target

Der benutzerdefinierte Pfadmodus muss:

- Aufforderung zur Eingabe eines Pfads
- „~“ auflösen
- Auf absoluten Pfad normalisieren
- Den aufgelösten Pfad in der Vorschau anzeigen---

## 4. Install Scope Model

Die geführte Installation muss Folgendes unterstützen:### 4.1 Full Library

Entspricht der aktuellen Installation ohne „--skill“ oder „--bundle“.### 4.2 Single Skill

Ermöglicht dem Benutzer die Auswahl eines veröffentlichten Skills.### 4.3 Single Bundle

Ermöglicht dem Benutzer die Auswahl eines kuratierten Bundles und löst veröffentlichte Mitglieder auf.### 4.4 Search Then Install

Ermöglicht dem Benutzer:

- Geben Sie eine Suchanfrage ein
- Ergebnisse prüfen
- Wählen Sie eine Fertigkeit oder ein Bündel
- Fahren Sie mit der Installationsvorschau fort---

## 5. Preview Contract

Vor der Ausführung muss bei der geführten Installation Folgendes angezeigt werden:

- Zieletikett
- Zielpfad
- Umfang installieren
- Gegebenenfalls ausgewählte Fertigkeit oder Bündel
- Äquivalenter CLI-Befehl

Optional, aber empfohlen:

- Zusammenfassung der ausgewählten Skill-Metadaten
- Zusammenfassung der Bundle-Verfügbarkeit---

## 6. Execution Contract

Nach der Bestätigung:

- Geführte Installationsdelegierte zum vorhandenen Installer-Backend
- Es führt keine Neuimplementierung von Dateischreibvorgängen durch

Die Befehlsvorschau und die tatsächlichen Argumente des delegierten Installationsprogramms müssen genau übereinstimmen.---

## 7. Result Contract

Nach erfolgreicher Ausführung sollte das Ergebnis der geführten Installation Folgendes anzeigen:

- Erfolgsindikator
- endgültiger Zielpfad
- Befehl, der ausgeführt wurde
- nächste empfohlene Aktion

Beispiel für nächste Aktionen:

- Verwenden Sie den Skill im ausgewählten Client
- Führen Sie „Doktor“ aus
- Führen Sie „mcp stream --local“ aus---

## 8. Compatibility Contract

Es bleiben weiterhin gültig und unverändert:

- `omni-skills --cursor --skill omni-figma`
- „omni-skills --bundle full-stack“.
- „omni-skills --path ./skills“.
- „Omni-Skills finden figma --tool Cursor --install --yes“.

Der geführte Modus fügt Verhalten hinzu. Vorhandenes Verhalten wird dadurch nicht entfernt.