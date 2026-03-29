# 🔧 System Runbook (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Der vollständige Betriebsleitfaden für den Aufbau, die Validierung, Bereitstellung, Sicherung und Fehlerbehebung von Omni Skills.**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

| Befehl | Was es tut |
|:--------|:-------------|
| `npm run validieren` | Validiert „SKILL.md“, generiert „metadata.json“ neu und berechnet Taxonomie/Reife/Qualität/Sicherheit |
| `npm run taxonomy:report` | Zeigt Vorschläge zur Kategoriedrift an, ohne Dateien neu zu schreiben |
| `npm run verify:scanners` | Bestätigt die in den generierten Skill-Metadaten aufgezeichnete Scannerabdeckung |
| `npm run release:notes` | Erzeugt benutzerdefinierte Versionshinweise aus Metadaten, Bundles und dem Git-Verlauf |
| `npm run build` | Erstellt Katalog/Manifeste/Archive/Prüfsummen neu, überprüft die Scannerabdeckung und -archive, erstellt „docs/CATALOG.md“ neu |
| `npm test` | Vollständige Smoke-Suite für CLI-, API-, MCP-, Sidecar- und Archivflüsse |---

## 🖥️ Visual Shell

Die veröffentlichte CLI enthält jetzt eine Ink-basierte Operator-Shell:```bash
npx omni-skills ui
```

Aktuelle Fähigkeiten:

- Geführte Installation für bekannte Clients und benutzerdefinierte Pfade
- Ablauf „Suchen und dann installieren“.
- MCP-Startassistent
- API-Startassistent
- A2A-Startassistent
- Aktuelle Installationen und Service-Neustarts
- Benannte Installations- und Servicevoreinstellungen

Lokaler Statuspfad:```text
~/.omni-skills/state/ui-state.json
```

Zurückgreifen:```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

Der statische Scanner prüft alle Fähigkeiten automatisch:

| Regelfamilie | Beispiele |
|:------------|:---------|
| 🎭 Sofortige Injektion | Exfiltrationsmuster, Befehlsüberschreibungen |
| 💣 Zerstörerische Befehle | `rm -rf`, `format`, `mkfs` |
| 🔑 Verdächtige Pfade | `/etc/shadow`, `~/.ssh`, Anmeldeinformationsdateien |
| ⚠️ Riskante Primitive | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Erfordert „clamscan“ in „PATH“.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Nur Hash-Suche – unbekannte Dateien werden standardmäßig**nicht hochgeladen**.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Strenges Release-Gate:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Archive werden automatisch durch „npm run build“ erstellt:

| Ausgabe | Pfad |
|:-------|:-----|
| 📦 PLZ | `dist/archives/<skill>.zip` |
| 📦 Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Prüfsummen | `dist/archives/<skill>.checksums.txt` |

„dist/“ wird absichtlich in diesem Repository festgeschrieben. Der generierte Katalog, die Manifeste, Bundles und Archive sind Laufzeiteingaben für CLI-Installationsabläufe, API-Downloadoberflächen, MCP-Vorschauen, A2A-Aufgabenübergabe, Smoke-Tests und Release-Überprüfung.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Optionale Überschreibung des öffentlichen Schlüssels:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Wenn kein öffentlicher Schlüssel angegeben wird, leitet der Build einen über „openssl“ in „dist/signing/“ ab.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Versionsrichtlinie:

- Patch-Inkremente bis „.10“.
- Nach „.10“ wird die nächste Version als „Minor“ eingestuft und der Patch auf „.0“ zurückgesetzt

Beispiele:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Szenario | Befehl |
|:---------|:--------|
| 📥 Standardinstallation (Antigravity) | „npx omni-skills“ |
| 🎯 Spezifische Fähigkeiten + Kunde | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Discovery → installieren | `npx omni-skills find figma --toolcursor --install --yes` |
| 📦 Bundle-Installation | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Installation überprüfen | „npx omni-skills doctor“ |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filter | Flagge | Beispiel |
|:-------|:-----|:--------|
| 📂 Kategorie | `--category` | `--category development` |
| 🖥️ Werkzeug | `--tool` | `--tool Cursor` |
| ⚠️ Risiko | `--risiko` | „--risikosicher“ |
| 📊 Sortieren | `--sort` | `--sort qualität\|best-practices\|level\|security\|name` |
| 🔄 Bestellen | `--order` | `--order asc\|desc` |
| ⭐ Mindestqualität | `--min-quality` | `--min-quality 80` |
| 📋 Min. Blutdruck | `--min-best-practices` | `--min-best-practices 60` |
| 🎯 Mindestniveau | `--min-level` | `--min-level 2` |
| 🛡️ Mindestsicherheit | `--min-security` | `--min-security 90` |
| ✅ Validierung | `--validation-status` | `--validation-status bestanden` |
| 🛡️ Sicherheit | `--security-status` | `--security-status bestanden` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Methode | Endpunkt | Zweck |
|:-------|:---------|:--------|
| `GET` | `/healthz` | Gesundheitscheck |
| `GET` | `/openapi.json` | OpenAPI 3.1-Spezifikation |
| `GET` | `/v1/skills` | Liste mit Filtern |
| `GET` | `/v1/search` | Volltextsuche |
| `GET` | `/v1/skills/:id/archives` | Archivverzeichnis |
| `GET` | `/v1/skills/:id/download/archive?format=zip` | Archiv herunterladen |
| `GET` | `/v1/skills/:id/download/archive/checksums` | Prüfsummenmanifest |### 🔐 Hosted API Hardening

| Funktion | Befehl |
|:--------|:--------|
| 🔑 Trägerauthentifizierung | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api` |
| 🗝️ API-Schlüsselauthentifizierung | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Admin-Laufzeitauthentifizierung | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 Ratenbegrenzung | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Audit-Protokollierung | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api` |
| 🌍 CORS-Zulassungsliste | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 IP-Zulassungsliste | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Wartungsmodus | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api` |
| 🔁 Vertrauenswürdiger Proxy | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🟢 „/healthz“ bleibt absichtlich geöffnet; Katalogrouten erfordern eine Authentifizierung, wenn sie aktiviert sind. „GET /admin/runtime“ erfordert bei der Konfiguration das Admin-Token und gibt den Live-Governance-Snapshot zurück.---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

Der Sidecar kann jetzt eine Vorschau der MCP-Konfiguration anzeigen oder diese schreiben für:

- Claude Benutzer- und Projekteinstellungen
- Claude Desktop-Konfiguration
- Cline-Benutzerkonfiguration
– GitHub Copilot CLI-Benutzer- und Repository-Konfiguration
- Cursor-Benutzer- und Arbeitsbereichskonfiguration
- Codex TOML-Konfiguration
- Gemini-Benutzer- und Projekteinstellungen
- Kilo CLI-Benutzer- und Projektkonfiguration
- Kilo-Arbeitsbereichskonfiguration
- Kiro-Benutzer- und Projekteinstellungen
- OpenCode-Benutzer- und Arbeitsbereichskonfiguration
- Fahren Sie mit der YAML-Konfiguration des Arbeitsbereichs fort
- Windsurf-Benutzerkonfiguration
- Zed-Arbeitsbereichskonfiguration
- Arbeitsbereich „.mcp.json“.
- VS Code-Arbeitsbereich und Benutzerkonfiguration
- Dev-Container-Konfiguration

„configure_client_mcp“ gibt auch „Rezepte“ pro Client zurück, sodass Bediener die entsprechenden CLI- oder manuellen Einrichtungsschritte zusammen mit der Vorschau erhalten.### 🧾 MCP Config Preview and Write Flow

Verwenden Sie die einheitliche CLI, wenn Sie eine Konfiguration generieren möchten, ohne das MCP-Tool direkt aufzurufen:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Die visuelle Shell stellt denselben Workflow bereit durch:

- „npx omni-skills ui“.
- „Dienstleistungen“.
- „MCP-Client konfigurieren“.

Der Befehl bleibt im Vorschaumodus, es sei denn, „--write“ wird übergeben.### 🔐 Hosted MCP Hardening

Gleiche Umgebungsvariablen wie die API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Geschützte Routen**: „POST /mcp“ · „GET /sse“ · „POST /messages“ · „GET /admin/runtime“.

> 🟢 `/healthz` bleibt geöffnet.---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

Der standardmäßige lokale Pfad bleibt zunächst einfach:

- „JSON“- oder „SQLite“-Persistenz kann mit deaktivierter Warteschlangenabfrage ausgeführt werden
- Legen Sie „OMNI_SKILLS_A2A_QUEUE_ENABLED=1“ nur fest, wenn Sie ein Multi-Worker-Anspruchs- und Lease-Failover wünschen
- Behalten Sie die Redis-Koordination als erweiterte gehostete Option bei, nicht als Basis### 🧱 Multi-Worker Lease Setup

Führen Sie mehr als einen A2A-Knoten für denselben SQLite-Speicher aus, um ein leasebasiertes Failover zu erhalten:```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Wenn ein Worker stirbt, während eine Aufgabe „in Arbeit“ ist, kann ein anderer Worker sie nach Ablauf der Lease zurückfordern und mit der Ausführung fortfahren.### 🟥 Redis Coordination

Für gehostete Bereitstellungen oder Bereitstellungen mit mehreren Knoten, bei denen die Warteschlangenkoordination nicht an den gemeinsam genutzten SQLite-Speicher gebunden sein soll, stellen Sie den Koordinator auf Redis um:```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

In diesem Modus:

- Die Persistenz bleibt in JSON oder SQLite bestehen
- Aufgabenbeanspruchung und Leasing-Eigentumsübertragung zu Redis
– Mehrere A2A-Knoten können eine Warteschlange gemeinsam nutzen, ohne auf die SQLite-Koordination auf Zeilenebene angewiesen zu sein### 📡 Endpoints

| Methode | Pfad | Zweck |
|:-------|:-----|:--------|
| `GET` | `/healthz` | Gesundheitscheck |
| `GET` | `/.well-known/agent.json` | Agentenkarte (A2A-Erkennung) |
| `POST` | `/a2a` | JSON-RPC-Endpunkt für Aufgaben und Streaming |### 🧭 Supported JSON-RPC Methods

| Methode | Zweck |
|:-------|:--------|
| `Nachricht/senden` | Eine Aufgabe starten oder fortsetzen |
| `Nachricht/Stream` | Starten Sie eine Aufgabe und streamen Sie SSE-Updates |
| `tasks/get` | Einen Aufgaben-Snapshot abfragen |
| `Aufgaben/Abbrechen` | Eine aktive Aufgabe abbrechen |
| `Aufgaben/erneut abonnieren` | SSE-Updates für eine vorhandene Aufgabe fortsetzen |
| `tasks/pushNotificationConfig/set` | Registrieren Sie einen Push-Webhook |
| `tasks/pushNotificationConfig/get` | Lesen Sie eine Push-Konfiguration |
| `tasks/pushNotificationConfig/list` | Push-Konfigurationen für eine Aufgabe auflisten |
| `tasks/pushNotificationConfig/delete` | Eine Push-Konfiguration entfernen |### 📡 Task Lifecycle

Die aktuelle Laufzeit unterstützt diese Aufgabenzustände:

- „eingereicht“.
- „arbeiten“.
- „Eingabe erforderlich“.
- „abgeschlossen“.
- „abgesagt“.
- „fehlgeschlagen“.

Aufgaben werden entweder in einer JSON-Datei oder einem SQLite-Speicher gespeichert und beim Neustart neu geladen. Abgeschlossene und unterbrochene Aufgaben bleiben verfügbar. Aufgaben, die während des Herunterfahrens noch „übermittelt“ wurden oder „funktionierten“, werden mit expliziten Neustart-Metadaten wiederhergestellt und standardmäßig automatisch fortgesetzt.### 🧪 Example: Start a Task

```bash
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

Das Repository verfügt nun über zwei Workflows:

| Arbeitsablauf | Auslöser | Zweck |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR zu „main“ | Erstellen, testen und bestätigen Sie, dass generierte Artefakte festgeschrieben werden |
| `release.yml` | Markieren Sie Push „v*“ oder manuellen Versand | Führen Sie Release-Grade-Scanner aus, überprüfen Sie das Versions-Tag, signieren Sie Artefakte, verpacken Sie den Tarball, veröffentlichen Sie ihn auf npm und erstellen Sie das GitHub-Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Geheimnis | Verwendet von | Zweck |
|:-------|:--------|:--------|
| `VT_API_KEY` oder `VIRUSTOTAL` | `release.yml` | VirusTotal-Hash-Suchen in Release-Builds erforderlich |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` oder `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Erforderlicher privater Schlüssel für die Signierung getrennter Archive in CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` oder `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Optionale Überschreibung des öffentlichen Schlüssels; ansonsten vom privaten Schlüssel | abgeleitet
| `NPM_TOKEN` | `publish-npm`-Job | Authentifizieren Sie „npm Publish“ für Tag-Releases |### 🦠 Release Scanner Policy

„release.yml“ legt Folgendes fest oder bereitet Folgendes vor:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ Secrets.VT_API_KEY || Secrets.VIRUSTOTAL }}`
- „OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH“ aus dem temporären Läuferspeicher

Das bedeutet, dass jede Tag-basierte Veröffentlichung:

- ClamAV auf dem Runner installieren und aktualisieren
- Metadaten mit aktiviertem ClamAV neu generieren
- Metadaten mit aktiviertem VirusTotal neu generieren
- CI-Signaturschlüsselmaterial in den temporären Läuferspeicher dekodieren
- Übergeben Sie „npm run verify:scanners:strict“.
- Übergeben Sie „npm run verify:archives:strict“.
- Bestehen Sie Tests und Paketüberprüfungen vor der Veröffentlichung von npm
- Generieren Sie benutzerdefinierte Versionshinweise aus Katalogmetadaten und dem Git-Verlauf
- Erstellen Sie nach der Veröffentlichung ein GitHub-Release mit angehängten Release-Assets---

## 1️⃣1️⃣ Environment Variables Reference

| Variable | Zweck | Standard |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Katalogstammpfad überschreiben | Automatisch erkannt |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Zusätzlich zulässige Schreibpfade | Bekannte Kundenwurzeln |
| `OMNI_SKILLS_MCP_MODE` | Für Sidecar | auf „local“ setzen Fernbedienung |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Alt-Flag für lokalen Modus | `0` |
| `OMNI_SKILLS_API_BASE_URL` | Öffentliche API-URL für MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Öffentliche Basis-URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Inhaberauthentifizierungstoken | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Durch Kommas getrennte API-Schlüssel | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Admin-Laufzeit-Authentifizierungstoken | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max. Anfragen pro Fenster | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Ratenbegrenzungsfenster (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Audit-Protokollierung aktivieren | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | „json“- oder „text“-Prüfungsausgabe | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Optionaler Pfad der Prüfprotokolldatei | Standardausgabe |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Durch Kommas getrennte CORS-Ursprungs-Zulassungsliste | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Durch Kommas getrennte IP- oder CIDR-Zulassungsliste | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Express-Trust-Proxy-Einstellung | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Wartungsantworten aktivieren | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Wartung „Retry-After“ Sekunden | „300“ |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Simulierte asynchrone Aufgabenverzögerung | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | „json“, „sqlite“ oder „memory“ Aufgabenspeicher | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Benutzerdefinierte A2A-Aufgabenspeicherdatei | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Aktivieren Sie die Abfrage gemeinsamer Warteschlangen für Lease-fähige Worker | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | „store“, „sqlite“, „local“ oder „redis“-Koordinator | `speichern` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis-URL für externe Koordination | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Redis-Schlüsselpräfix für Warteschlangenmetadaten | `omni-skills:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Warteschlangenabfrageintervall für Lease-Worker | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Leihdauer, bevor ein anderer Arbeitnehmer eine Aufgabe zurückfordern kann | „4000“ |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Stabile Arbeiterkennung für Leasingbesitz und Diagnose | Hostname + PID + zufälliges Suffix |
| `OMNI_SKILLS_A2A_EXECUTOR` | „Inline“- oder „Process“-Task-Executor | „inline“ |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Externen Worker-Befehl überschreiben | Knoten binär |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON-Array externer Worker-Argumente | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Wiederhergestellte gesendete/laufende Aufgaben beim Booten fortsetzen | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Nicht-HTTPS-Webhooks außerhalb von localhost | zulassen `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | ClamAV-Scanning aktivieren | `0` |
| `VT_API_KEY` | VirusTotal-API-Schlüssel | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Privater Schlüssel zum Signieren | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Überschreibung des öffentlichen Schlüssels | Automatisch abgeleitet |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. Mit „npm run build“ neu erstellen
2. Führen Sie „npm run verify:archives“ erneut aus
3. Wenn das Signieren aktiviert ist, bestätigen Sie die Verfügbarkeit des öffentlichen Schlüssels und von „openssl“.### 🦠 Release Workflow Fails on Scanner Coverage

– Bestätigen Sie, dass „VT_API_KEY“ in den Repository-Geheimnissen vorhanden ist
- Bestätigen Sie, dass „freshclam“ auf dem Läufer erfolgreich war
- Lokal mit „OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build“ neu erstellen
- Führen Sie „npm run verify:scanners:strict“ erneut aus### 📦 npm Publish Fails in CI

– Bestätigen Sie, dass „NPM_TOKEN“ in den Repository-Geheimnissen vorhanden ist
– Bestätigen Sie, dass das Git-Tag genau mit der Version „package.json“ übereinstimmt
– Überprüfen Sie, ob der von „release-verify“ hochgeladene Tarball in den Workflow-Artefakten vorhanden ist### ✍️ Release Signing Fails in CI

– Bestätigen Sie, dass „OMNI_SKILLS_SIGN_PRIVATE_KEY_B64“ oder „OMNI_SKILLS_SIGN_PRIVATE_KEY“ in den Repository-Geheimnissen vorhanden ist
- Wenn Sie ein öffentliches Schlüsselgeheimnis angeben, bestätigen Sie, dass es mit dem privaten Schlüssel übereinstimmt
- Bestätigen Sie, dass „openssl“ verfügbar ist und der private Schlüssel PEM-formatiert ist
- Lokal neu erstellen mit „OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build“.
- Führen Sie „npm run verify:archives:strict“ erneut aus### 🔒 API/MCP Returns `401 Unauthorized`

- Überprüfen Sie „OMNI_SKILLS_HTTP_BEARER_TOKEN“ oder „OMNI_SKILLS_HTTP_API_KEYS“.
- Fügen Sie den Header „Authorization: Bearer <token>“ oder „x-api-key“ ein### 🚦 API/MCP Returns `429 Too Many Requests`

- Erhöhen Sie „OMNI_SKILLS_RATE_LIMIT_MAX“.
- Erweitern Sie „OMNI_SKILLS_RATE_LIMIT_WINDOW_MS“.
- Reduzieren Sie den Burst-Verkehr von Clients oder Sonden### 🛂 API/MCP Admin Runtime Returns `401`

- Überprüfen Sie „OMNI_SKILLS_HTTP_ADMIN_TOKEN“.
- Senden Sie „x-admin-token: <token>“ oder „Authorization: Bearer <admin-token>“.### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Deaktivieren Sie „OMNI_SKILLS_HTTP_MAINTENANCE_MODE“.
- Verwenden Sie „/healthz“ für Lebendigkeitsprüfungen während der Wartung
- Verwenden Sie „/admin/runtime“ mit dem Admin-Token für die Bedienerdiagnose### 🌍 Browser Requests Fail CORS Validation

- Überprüfen Sie „OMNI_SKILLS_HTTP_ALLOWED_ORIGINS“.
- Geben Sie das genaue Schema und den Host an, zum Beispiel „https://app.example.com“.### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Überprüfen Sie „OMNI_SKILLS_A2A_COORDINATION_TYPE=redis“.
- Überprüfen Sie „OMNI_SKILLS_A2A_REDIS_URL“.
- Überprüfen Sie die Redis-Konnektivität von jedem Knoten aus
- Untersuchen Sie „/healthz“ auf den „coordination“-Snapshot### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```
