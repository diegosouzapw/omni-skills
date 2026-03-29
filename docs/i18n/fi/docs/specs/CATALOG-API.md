# 🌐 Catalog API Surface (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**Vain luku -muotoinen HTTP-sovellusliittymä taitojen löytämiseen, etsimiseen, vertailuun, asennuksen suunnitteluun ja artefaktien lataamiseen.**---

## 📊 Status

| Ominaisuus | valtio |
|:--------|:------|
| ✅ Katalogin päätepisteet | Toteutettu |
| ✅ Auth (siirtotie + API-avain) | Toteutettu |
| ✅ Admin runtime auth | Toteutettu |
| ✅ Nopeutta rajoittava | Toteutettu |
| ✅ Tarkastuksen kirjaus | Toteutettu |
| ✅ CORS- ja IP-sallitut luettelot | Toteutettu |
| ✅ Huoltotila | Toteutettu |
| ✅ Arkiston lataukset | Toteutettu |
| ✅ OpenAPI-spesif | Toteutettu |
| ⚠️ Hallintotausta | Env-ohjattu, prosessinaikainen lähtötaso; ulkoinen yhdyskäytävä tai IdP edelleen valinnainen |---

## 🎯 Purpose

API tarjoaa rekisterityylisen pinnan:

- 📋 Listaus- ja suodatustaidot laadun, turvallisuuden, kategorian, riskin ja muiden mukaan
- 📌 Yksilöllisten taitojen ilmentymien hakeminen
- 🔎 Koko tekstihaku ja monitaitojen vertailu
- 📦 Pakettilistaus saatavuudella
- 📐 Vain luku -asennussuunnitelman luominen
- 📥 Luotujen artefaktien, arkistojen ja tarkistussummaluetteloiden lataaminen

Tämä sama luettelo ja manifestipinta on myös perusta:

- paikallinen CLI-asennuksen suunnittelu
- MCP-vain luku -etsintävastaukset
- A2A-etsintä ja asennussuunnitelman kanavanvaihto
- mahdolliset yksityiset luettelot, joiden päälle on kerrostettu ulkoinen todennus---

## Pikakäynnistys

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

**Oletusasetukset**: `127.0.0.1:3333`---

## 🔐 Security Controls

Kaikki turvatarkastukset ovat env-ohjattuja ja valinnaisia:

| Ohjaus | Muuttuja | Esimerkki |
|:--------|:---------|:---------|
| 🔑**Kantajatodistus**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | "korvaa minut" |
| 🗝️**API-avaimen todennus**| `OMNI_SKILLS_HTTP_API_KEYS` | `avain-a,avain-b` |
| 🛂**Järjestelmänvalvojan todennus**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-secret` |
| 🚦**Rajoittava hinta**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | "60" / "60000" |
| 📝**Tarkastuksen kirjaus**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | "1" |
| 🗂️**Tarkastuksen muoto**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | "json" tai "teksti" |
| 📄**Tarkastustiedosto**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS-sallitut**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS' | `https://app.example.com,https://*.example.org` |
| 🧱**IP-sallittu luettelo**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | "127.0.0.1/32,10.0.0.0/8" |
| 🔁**Luotettu välityspalvelin**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | "palautus" |
| 🚧**Ylläpitotila**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | "1" |
| ⏱️**Yritä uudelleen**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS' | "300" |

**Käyttäytyminen:**
- 🟢 `/healthz` pysyy**aina todentamattomana**
- 🔒 Kaikki muut reitit vaativat todennusta, kun todennus on käytössä
- 🛂 "/admin/runtime" vaatii järjestelmänvalvojan tunnuksen, kun se on käytössä
- 🚦 Nopeuden rajoitus on käynnissä `X-RateLimit-*` vastausotsikoilla
- 🧾 Jokaisessa vastauksessa on "X-Request-Id".
- 🚧 Ylläpitotila palauttaa "503" ei-terveys- ja ei-järjestelmänvalvojareiteille### ✅ Current governance decision

Nykyinen projektin suunta on**käyttää samaa luettelomuotoa uudelleen julkisiin tai yksityisiin käyttöönotuksiin**ja tasoittaa todennusta tarvittaessa ulkoisesti.

Se tarkoittaa:

- manifesti ja API-muoto pysyvät jaettuna
- Itseisännöidyt ja paikalliset käyttöönotot voivat pysyä prosessin aikana
- Edistyneempi isännöity hallinto voi siirtyä ulkoiseen yhdyskäytävään tai yrityksen todennuskerrokseen myöhemmin ilman tietomallia### 🔐 Full hardened example:

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

| Menetelmä | Polku | Kuvaus |
|:-------|:-----|:-------------|
| "HAKU" | "/healthz" | Terveystarkastus (todistamaton) |
| "HAKU" | `/openapi.json` | Dynaaminen OpenAPI 3.1 -spesifikaatio |
| "HAKU" | `/admin/runtime' | Hallinta- ja suorituksenaikainen tilannekuva (järjestelmänvalvojan todennus, kun käytössä) |### 📚 Catalog & Skills

| Menetelmä | Polku | Kuvaus |
|:-------|:-----|:-------------|
| "HAKU" | "/v1/skills" | Listaa taidot suodattimilla |
| "HAKU" | `/v1/skills/:id` | Hanki henkilökohtainen taitoluettelo |
| "HAKU" | "/v1/search" | Kokotekstihaku |
| "HAKU" | `/v1/vertaa?ids=id1,id2` | Vertaa useita taitoja |
| "HAKU" | "/v1/niput" | Listaa niput saatavuudella |
| `POSTI` | `/v1/install/plan` | Luo asennussuunnitelma |### 🔎 List/Search Filters

| Suodatin | Esimerkki |
|:-------|:---------|
| "luokka" | `?category=development` |
| "työkalu" | `?tool=kursori` |
| "riski" | `?riski=turvallinen` |
| "lajitella" | `?sort=quality\|best-practices\|taso\|turvallisuus\|nimi` |
| "tilaa" | `?order=asc\|desc` |
| "min_laatu" | `?min_laatu=80` |
| `min_parhaat_käytännöt` | `?min_best_practices=60` |
| `min_taso` | `?min_taso=2` |
| `min_turvallisuus` | `?min_security=90` |
| `validation_status` | `?validation_status=passed` |
| `turvallisuuden_tila` | `?security_status=passed` |### 📦 Install Plan Body

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

| Menetelmä | Polku | Kuvaus |
|:-------|:-----|:-------------|
| "HAKU" | `/v1/catalog/download' | Lataa koko luettelo |
| "HAKU" | `/v1/skills/:id/artefacts' | Listaa taitoartefaktit |
| "HAKU" | `/v1/skills/:id/archives' | Listaa taitoarkistot |
| "HAKU" | `/v1/skills/:id/downloads' | Kaikki saatavilla olevat latauslinkit |
| "HAKU" | "/v1/skills/:id/download/manifest" | Taitoluettelo JSON |
| "HAKU" | `/v1/skills/:id/download/entrypoint' | Taito SKILL.md |
| "HAKU" | `/v1/skills/:id/download/artifact?path=<polku>` | Tietty artefakti |
| "HAKU" | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Taitoarkisto |
| "HAKU" | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz" | Irrotettu allekirjoitus |
| "HAKU" | `/v1/skills/:id/download/archive/checksums' | SHA-256 tarkistussummat |---

## 🔗 Link Enrichment

Kun pyyntöjä käsitellään API:n kautta, palvelin**rikastaa automaattisesti**luetteloita, artefaktiluetteloita ja asennussuunnitelmia absoluuttisilla URL-osoitteilla, jotka on johdettu saapuvan pyynnön alkuperästä. Tämä on suorituksenaikainen lisäys, jota ei ole koottu dist/manifests/*.json-tiedostoon.---

## 📋 Install Plan Notes

> ⚠️**Asennussuunnitelmat ovat esikatseluita, eivät etäkirjoituksia.**

API ei koskaan asennu soittajan koneelle. Se palauttaa:
- 📌 Valitut taitojen metatiedot
- ⚠️ Varoitukset puuttuvista nipun jäsenistä
- 🖥️ Konkreettiset CLI-komennot paikallisesti suoritettaviksi
- 🔗 Julkiset lataus-URL-osoitteet, kun pyynnön alkuperä on saatavilla---

## 🔌 Relationship to MCP

MCP-palvelin käyttää uudelleen samoja julkisia API-URL-osoitteita, kun se on määritetty:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Tämän ansiosta MCP-asennuksen esikatselut voivat palauttaa konkreettisia luettelo- ja artefakti-URL-osoitteita vain paikallisten repopolkujen sijaan.---

## 🧭 Admin Runtime Snapshot

"GET /admin/runtime" palauttaa hallinnan tilannevedoksen, joka on hyödyllinen isännöidylle diagnostiikalle:

- aktiiviset todennusmenetelmät
- admin-auth tila
- nopeusrajoitusikkuna ja max
- CORS-sallitut lista
- IP sallittujen luettelo
- huoltotilan tila
- tarkastuksen kohde ja muoto
- nykyisen luettelon kokonaismäärät
- Pyydä tunnus kaikua jäljitettävyyttä varten