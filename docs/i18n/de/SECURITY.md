# 🛡️ Security Policy (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Wenn Sie ein Sicherheitsproblem in Omni Skills entdecken, öffnen Sie zunächst kein öffentliches Problem.**

Bitte melden Sie sich über einen dieser privaten Kanäle:

| Kanal | Wie |
|:--------|:----|
| 🔒 GitHub-Sicherheitshinweis | [Ein privates Advisory eröffnen](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧 Direkter Kontakt | Kontaktieren Sie die Betreuer direkt |### 📋 Include in Your Report

- 📁 Betroffene Komponente oder Pfad
- 🔄 Reproduktionsschritte
- ⚠️ Folgenabschätzung
- 🧪 Jegliches Proof-of-Concept-Material, das zur Überprüfung des Problems erforderlich ist

>**⏱️ Unser Ziel ist es, Meldungen innerhalb von 48 Stunden zu bestätigen**und Korrekturen entsprechend ihrer Auswirkung zu priorisieren.---

## 🎯 Scope

Diese Richtlinie gilt für die Laufzeit- und Inhaltsoberflächen des Repositorys:

| Komponente | Pfad |
|:----------|:-----|
| 🖥️ CLI und Installationsprogramm | `tools/bin/` |
| 📚 Gemeinsam genutzte Bibliotheken | `tools/lib/` |
| ⚙️ Build- und Validierungsskripte | `tools/scripts/` |
| 📦 Generierte Katalogartefakte | `dist/` |
| 🌐 API-, MCP- und A2A-Pakete | `Pakete/` |
| 🧠 Kompetenzinhalte | „Skills/“ – insbesondere Shell-Befehle, Netzwerkzugriff, Anmeldeinformationsflüsse oder sicherheitsrelevante Anleitungen |---

## Architektur

Das Repository ist auf die folgenden Sicherheitskontrollen angewiesen:### 🧠 Skill-Level Controls

| Kontrolle | Beschreibung |
|:--------|:-----------|
| 🏷️ Risikofeld | Fertigkeitsmetadaten enthalten eine deklarierte „Risikostufe“ |
| 📊 Wertung | Die Validierung berechnet Reifegrad, Best Practices, Qualität und Sicherheitswerte |
| 🔍 Statischer Scanner | Überprüft „SKILL.md“, gepackte Dateien und Hilfsskripte |
| 🦠 Optionale Scanner | ClamAV- und VirusTotal-Hash-Suche (sofern konfiguriert) |### 🖥️ Runtime Controls

| Kontrolle | Beschreibung |
|:--------|:-----------|
| 📁 Wegsicherung | Flows installieren, Pfadsicherheitsprüfungen verwenden |
| 🔒 Zulassungsliste schreibt | Lokale MCP-Sidecar-Schreibvorgänge werden durch eine Zulassungsliste eingeschränkt |
| 👁️ Probelauf-Standardeinstellungen | Schreiborientierte Tools führen standardmäßig einen Trockenlauf durch, sofern sie nicht ausdrücklich deaktiviert sind |
| 🔐 Authentifizierung & Limits | Inhaber-/API-Schlüsselauthentifizierung, Administrator-Laufzeitauthentifizierung, Ratenbegrenzung, CORS/IP-Zulassungslisten |
| 📋 Prüfung | Audit-Protokollierung, Wartungsmodus und Anforderungs-IDs |### 📦 Release Controls

| Kontrolle | Beschreibung |
|:--------|:-----------|
| ✅ Prüfsummenmanifeste | SHA-256-Prüfsummen für generierte Archive |
| ✍️ Unterschriften | Separate Signaturprüfung im CI vor Veröffentlichung |
| 🧪 Rauchkontrollen | Ausgelieferte Laufzeitoberflächen vor der Veröffentlichung trainieren |---

## 🔮 What Is Still Open

> Die wichtigste verbleibende Sicherheitsarbeit besteht**nicht**in der grundlegenden Härtung. Die offenen Posten sind:

| Bereich | Status |
|:-----|:-------|
| 🏢 Unternehmensführung | Externe Identität, Gateway-Richtlinie und WAF-Integration über den aktuellen prozessinternen Kontrollen |
| 🔌 MCP-Kundenautoren | Breitere Autoren nur, wenn öffentliche Konfigurationsverträge stabil genug sind |
| 📊 Scannerverfeinerung | Kontinuierliche Verfeinerung, damit außergewöhnliche Fähigkeiten klar von nur gut strukturierten unterschieden werden |---

## ⚠️ Risk Levels in Skills

Jede Fertigkeit deklariert eine dieser „Risikostufen“:

| Risikostufe | Bedeutung |
|:-----------|:--------|
| 🟢 „sicher“ | Keine destruktiven Vorgänge zu erwarten |
| 🟡 `Vorsicht` | Kann Dateien ändern oder mit externen Systemen interagieren |
| 🔴 „offensiv“ | Sicherheitstests oder gegnerische Arbeitsabläufe, die eine explizite Autorisierung erfordern |
| ⛔ `kritisch` | Eingriffe mit großer Auswirkung oder auf Systemebene |---

## 📋 Disclosure Notes

Da Omni Skills ausführbare Hilfsprogramme, dateisystemfähige lokale Tools und clientspezifische Konfigurationsschreiber bereitstellt, sollten diese Schwachstellenklassen als**hohe Priorität**behandelt werden, auch wenn sie „nur lokal“ erscheinen:

| Kategorie | Beispiele |
|:---------|:---------|
| 📁 Pfaddurchquerung | Verzeichnis-Escape über Skill-Installations- oder Konfigurationspfade |
| 🔗 Symlink-Sicherheit | Symlink folgt während der Installation oder Archivextraktion |
| 🖥️ Befehlsausführung | Beliebige Befehlsinjektion über Skill-Inhalte oder Skripte |
| 📦 Archivüberprüfung | Umgehung der Prüfsummen- oder Signaturprüfung |
| 🔓 Authentifizierungsumgehung | Ratenbegrenzung oder Authentifizierungsumgehung auf API/MCP |
| 🔌 Umgehung der Zulassungsliste | Umgehung der lokalen Sidecar-Zulassungsliste |
| 🦠 Scanner-Umgehung | Falsch-negative Klassen in statischen oder externen Scannern |