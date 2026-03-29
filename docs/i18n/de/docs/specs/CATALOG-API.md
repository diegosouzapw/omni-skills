# 🌐 Catalog API Surface (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**Schreibgeschützte HTTP-API für Skill-Erkennung, Suche, Vergleich, Installationsplanung und Artefakt-Downloads.**---

## 📊 Status

| Funktion | Staat |
|:--------|:------|
| ✅ Endpunkte katalogisieren | Implementiert |
| ✅ Auth (Bearer + API-Schlüssel) | Implementiert |
| ✅ Admin-Laufzeitauthentifizierung | Implementiert |
| ✅ Ratenbegrenzung | Implementiert |
| ✅ Audit-Protokollierung | Implementiert |
| ✅ CORS- und IP-Zulassungslisten | Implementiert |
| ✅ Wartungsmodus | Implementiert |
| ✅ Archiv-Downloads | Implementiert |
| ✅ OpenAPI-Spezifikation | Implementiert |
| ⚠️ Governance-Backend | Umgebungsgesteuerte, prozessinterne Baseline; externes Gateway oder IdP weiterhin optional |---

## 🎯 Purpose

Die API bietet eine Oberfläche im Registrierungsstil für:

- 📋 Auflisten und Filtern von Fähigkeiten nach Qualität, Sicherheit, Kategorie, Risiko und mehr
- 📌 Abrufen individueller Fertigkeitsmanifeste
- 🔎 Volltextsuche und Multi-Skill-Vergleich
- 📦 Bundle-Auflistung mit Verfügbarkeit
- 📐 Schreibgeschützte Installationsplangenerierung
- 📥 Herunterladen generierter Artefakte, Archive und Prüfsummenmanifeste

Derselbe Katalog und dieselbe Manifestoberfläche sind auch die Grundlage für:

- Lokale CLI-Installationsplanung
– schreibgeschützte MCP-Erkennungsantworten
- A2A-Erkennung und Übergabe des Installationsplans
- Potenzielle private Kataloge mit darüberliegender externer Authentifizierung---

## Schnellstart

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**Standardwerte**: `127.0.0.1:3333`---

## 🔐 Security Controls

Alle Sicherheitskontrollen sind umgebungsgesteuert und optional:

| Kontrolle | Variable | Beispiel |
|:--------|:---------|:--------|
| 🔑**Bearer-Authentifizierung**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `replace-me` |
| 🗝️**API-Schlüsselauthentifizierung**| `OMNI_SKILLS_HTTP_API_KEYS` | `key-a,key-b` |
| 🛂**Administrator-Authentifizierung**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-geheimnis` |
| 🚦**Ratenbegrenzung**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | „60“ / „60000“ |
| 📝**Audit-Protokollierung**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Auditformat**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | „json“ oder „text“ |
| 📄**Prüfdatei**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS-Zulassungsliste**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**IP-Zulassungsliste**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Vertrauenswürdiger Proxy**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | „Loopback“ |
| 🚧**Wartungsmodus**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Erneut versuchen nach**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | „300“ |

**Verhalten:**
- 🟢 `/healthz` bleibt**immer unauthentifiziert**
- 🔒 Alle anderen Routen erfordern eine Authentifizierung, wenn die Authentifizierung aktiviert ist
- 🛂 „/admin/runtime“ erfordert das Admin-Token, wenn es aktiviert ist
- 🚦 Die Ratenbegrenzung ist mit den Antwortheadern „X-RateLimit-*“ in Bearbeitung
- 🧾 Jede Antwort trägt „X-Request-Id“.
- 🚧 Der Wartungsmodus gibt „503“ für nicht gesundheitsbezogene und nicht verwaltete Routen zurück### ✅ Current governance decision

Die aktuelle Projektrichtung besteht darin,**dasselbe Katalogformat für öffentliche oder private Bereitstellungen wiederzuverwenden**und die Authentifizierung bei Bedarf extern zu schichten.

Das bedeutet:

- Das Manifest und die API-Form bleiben gemeinsam genutzt
– Selbstgehostete und lokale Bereitstellungen können auf der In-Process-Baseline bleiben
– Eine fortgeschrittenere gehostete Governance kann später auf ein externes Gateway oder eine Unternehmensauthentifizierungsschicht umgestellt werden, ohne das Datenmodell zu forken### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| Methode | Pfad | Beschreibung |
|:-------|:-----|:------------|
| `GET` | `/healthz` | Gesundheitscheck (nicht authentifiziert) |
| `GET` | `/openapi.json` | Dynamische OpenAPI 3.1-Spezifikation |
| `GET` | `/admin/runtime` | Governance- und Laufzeit-Snapshot (Administrator-Authentifizierung, wenn aktiviert) |### 📚 Catalog & Skills

| Methode | Pfad | Beschreibung |
|:-------|:-----|:------------|
| `GET` | `/v1/skills` | Fertigkeiten mit Filtern auflisten |
| `GET` | `/v1/skills/:id` | Holen Sie sich das individuelle Fähigkeitsmanifest |
| `GET` | `/v1/search` | Volltextsuche |
| `GET` | `/v1/compare?ids=id1,id2` | Vergleichen Sie mehrere Fähigkeiten |
| `GET` | `/v1/bundles` | Pakete mit Verfügbarkeit auflisten |
| `POST` | `/v1/install/plan` | Einen Installationsplan erstellen |### 🔎 List/Search Filters

| Filter | Beispiel |
|:-------|:--------|
| „Kategorie“ | `?category=development` |
| „Werkzeug“ | `?tool=cursor` |
| „Risiko“ | `?risk=safe` |
| `sortieren` | `?sort=quality\|best-practices\|level\|security\|name` |
| `Bestellung` | `?order=asc\|desc` |
| `min_quality` | `?min_quality=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `min_level` | `?min_level=2` |
| `min_security` | `?min_security=90` |
| `validation_status` | `?validation_status=bestanden` |
| `security_status` | `?security_status=passed` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

| Methode | Pfad | Beschreibung |
|:-------|:-----|:------------|
| `GET` | `/v1/catalog/download` | Vollständiger Katalog-Download |
| `GET` | `/v1/skills/:id/artifacts` | Fertigkeitsartefakte auflisten |
| `GET` | `/v1/skills/:id/archives` | Fertigkeitsarchive auflisten |
| `GET` | `/v1/skills/:id/downloads` | Alle verfügbaren Download-Links |
| `GET` | `/v1/skills/:id/download/manifest` | Fertigkeitsmanifest JSON |
| `GET` | `/v1/skills/:id/download/entrypoint` | Fertigkeit SKILL.md |
| `GET` | `/v1/skills/:id/download/artifact?path=<path>` | Spezifisches Artefakt |
| `GET` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Kompetenzarchiv |
| `GET` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Freistehende Signatur |
| `GET` | `/v1/skills/:id/download/archive/checksums` | SHA-256-Prüfsummen |---

## 🔗 Link Enrichment

Wenn Anfragen über die API verarbeitet werden, reichert der Server Manifeste, Artefaktlisten und Installationspläne automatisch mit absoluten URLs an, die vom Ursprung der eingehenden Anfrage abgeleitet werden. Dies ist eine Laufzeitanreicherung, nicht in „dist/manifests/*.json“ integriert.---

## 📋 Install Plan Notes

> ⚠️**Installationspläne sind Vorschauen, keine Remote-Schreibvorgänge.**

Die API wird niemals auf dem Computer des Aufrufers installiert. Es wird zurückgegeben:
- 📌 Ausgewählte Skill-Metadaten
- ⚠️ Warnungen für fehlende Bundle-Mitglieder
- 🖥️ Konkrete CLI-Befehle zur lokalen Ausführung
- 🔗 Öffentliche Download-URLs, wenn der Anfrageursprung verfügbar ist---

## 🔌 Relationship to MCP

Der MCP-Server verwendet bei der Konfiguration dieselben öffentlichen API-URLs wieder:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Dadurch können MCP-Installationsvorschauen konkrete Manifest- und Artefakt-URLs zurückgeben, anstatt nur lokale Repo-Pfade.---

## 🧭 Admin Runtime Snapshot

„GET /admin/runtime“ gibt einen Governance-Snapshot zurück, der für gehostete Diagnosen nützlich ist:

- Aktive Authentifizierungsmethoden
- Admin-Auth-Status
- Rate-Limit-Fenster und max
- CORS-Zulassungsliste
- IP-Zulassungsliste
- Wartungsmodusstatus
- Ziel und Format prüfen
- aktuelle Katalogsummen
- Anfrage-ID-Echo zur Rückverfolgbarkeit