# 📊 Skill Classification and Metadata (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Den lokale klassifikatoren som scorer alle ferdigheter under validering og bygging, genererer maskinlesbare profiler for hele katalogen.**---

## 📊 Status

| Utgang | Generert |
|:-------|:--------|
| ✅ Root `metadata.json` | Depotomfattende sammendrag |
| ✅ Per ferdighet `skills/<skill>/metadata.json` | Individuelle klassifiseringer |
| ✅ Katalog `dist/catalog.json` | Publisert katalog med partiturer |
| ✅ Manifesterer `dist/manifests/<skill>.json` | Maskinlesbare data per ferdighet |

Generert av: `python3 tools/scripts/validate_skills.py`

Gjeldende depotbilde:

- 32 publiserte ferdigheter
- gjennomsnittlig kvalitetspoeng «96,3».
- gjennomsnittlig poengsum for beste praksis «98,7».
- gjennomsnittlig sikkerhetsscore `95.0`
- gjeldende kvalitetsspredning `94, 95, 96, 97, 100`
- gjeldende beste fremgangsmåter spredt "98, 99, 100".---

## 🎯 Purpose

The classifier gives every skill a**consistent machine-readable profile**before it reaches the catalog. Den utfører fire jobber:

1. 📋**Parse**— YAML frontmatter and markdown body
2. 🏷️**Normalize**— Category labels to canonical taxonomy
3. 📊**Klassifiser**— Modenhet, beste praksis, kvalitet og sikkerhetspoeng
4. 📁**Emit**— Metadata artifacts consumed by build scripts, docs, and CI---

## 🏷️ Canonical Taxonomy

**18 kanoniske kategorier**med automatisk aliaskartlegging:

| Kategori | Domene | Vanlige aliaser |
|:---------|:-------|:-------------|
| 💻 `utvikling` | Generell programvareutvikler | `koding`, `programmering` |
| 🎨 `frontend` | Frontend & UI | `ui`, `web-design` |
| 🔧 `backend` | Backend og APIer | `server`, `api` |
| 🌐 `fullstack-web` | End-to-end web | `web`, `full-stack` |
| 🛠️ `verktøy` | Utviklerverktøy | `verktøy` |
| ⚙️ `cli-automatisering` | CLI og automatisering | `scripting`, `workflow` |
| 📊 `business` | Forretningsstrategi | `strategi` |
| 📐 `produkt` | Produktledelse | `pm` |
| 🎯 `design` | Visuelt og UX-design | `ux` |
| 🤖 `data-ai` | Data og AI-apper | `data`, `analytics` |
| 🧠 `ai-agenter` | AI-agentmønstre | `agenter` |
| 📈 `maskinlæring` | ML modeller og opplæring | `ml` |
| 🔌 `devops` | Infrastruktur | `infrastruktur`, `sky` |
| 🛡️ `testing-sikkerhet` | Testing og sikkerhet | `testing`, `sikkerhet`, `qa` |
| 📖 `dokumentasjon` | Dok management | `dokumenter` |
| 🎬 `innholdsmedia` | Oppretting av innhold | `media`, `innhold` |
| 💬 `kommunikasjon` | Kommunikasjonsverktøy | `chat` |
| ❓ `ukategorisert` | Standard reserve | — |

> Eldre etiketter som "arbeidsflyt", "arkitektur", "infrastruktur" normaliseres automatisk gjennom aliaskartleggingen.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Nivå | Etikett | Kriterier |
|:------|:------|:--------|
|**L1**| `metadata` | Frontmatter pluss minimal kropp |
|**L2**| `instruksjoner` | Betydelige skriftlige instruksjoner |
|**L3**| `ressurser` | Medfølgende skript eller rikere pakkede ressurser |

Ytterligere signaler som spores: "has_scripts", "has_extra_files".---

### 📋 Best Practices Score (0-100)

Heuristikken evaluerer:

| Signal | Hva det sjekker |
|:-------|:---------------|
| 📛 Sneglekvalitet | `navn` feltformatering |
| 📝 Beskrivelse | Klarhet, lengde, informativitet |
| 📐 Struktur | Dokumentseksjoner og hierarki |
| 💡 Eksempler | Kode gjerder og eksempelblokker |
| 🔗 Referanser | Koblet til lokale `referanser/`, `scripts/` og støttepakker |
| 🧰 Driftsdyktighet | Kjørbare lokale skripteksempler og konkrete arbeidsflytbiter |
| 🧩 Støttepakkedybde | Flere støttefamilier, gjenbrukbare filer, agentmetadata og driftsmidler |
| 🩺 Feilsøking | Eksplisitte "Symptomer" og "Løsning"-par |
| 📚 Dekning | `Når skal du bruke`, `Beste fremgangsmåter`, `Feilsøking` og `Ytterligere ressurser` seksjoner |
| 🌐 Bærbarhet | Verktøy-agnostisk ordlyd |
| 📅 Friskhet | Unngå hardkodede datoer |

**Nåværende nivå**

| Nivå | Poengområde |
|:-----|:--------|
| `utmerket` | 90-100 |
| `bra` | 70-89 |
| `rettferdig` | 50-69 |
| `behov-arbeid` | 0-49 |

Målscoreren er bevisst**semantisk nok til å skape spredning**på tvers av modne ferdigheter. En ferdighet med ren struktur kan score bra, men for å nå toppbåndet trenger den også dybdesignaler som:

- Flere eksempler, ikke bare ett
- flere feilsøkingssaker
- relatert ferdighetsveiledning
- rikere lokale støttepakker
- mer enn én støttefamilie utover vanlig prosa, ideelt inkludert «agenter/» eller «assets/» der de legger til reell gjenbruk
- en dedikert "## Workflow"-seksjon med tellbare trinn
- minst én liten operasjonstabell eller beslutningskart når det forbedrer klarheten i utførelsen
- mer operasjonell spesifisitet enn en vanlig mal
- klarere arbeidsflytdybde og beslutningsstøttemidler
- Støttepakkedybde som går utover én `referanse/`-fil og ett koblet skript
- nok gjenbrukbare støttefiler til å føles som et arbeidsflytsett, ikke et enkeltnotat-tillegg
- nok operasjonstetthet til å skille en polert kontur fra et gjenbrukbart arbeidsflytsett

Det betyr at en strukturelt komplett ferdighet fortsatt kan lande på 90-tallet i stedet for "100" hvis støttepakken er smalere, dens beslutningsressurser er tynnere eller dens operasjonelle tetthet er lavere enn de sterkeste ferdighetene i katalogen.---

### ⭐ Quality Score (0-100)

Heuristikken kombinerer:

| Signal | Vekt |
|:-------|:-------|
| 📝 Helhet i kroppen | Middels høy |
| 📋 Beskrivelse presisjon | Middels |
| 📊 Metadata fullstendighet | Middels |
| 📅 Nylig (`date_updated`) | Middels |
| 📦 Pakkede ressurser | Middels |
| 📋 Bidrag til beste praksis | Middels |
| 🧠 Semantisk dybde | Middels høy |
| 🛠️ Operasjonell dybde | Middels |
| 📚 Støttepakke-rikdom | Middels |

**Kvalitetsnivåer:**

| Nivå | Poengområde |
|:-----|:--------|
| 💎 `platina` | 80+ |
| 🥇 `gull` | 65-79 |
| 🥈 `sølv` | 50-64 |
| 🥉 `bronse` | 35-49 |
| 🌱 `starter` | 0-34 |---

### 🛡️ Security Score (0-100)

Sikkerhetslaget kombinerer:

| Skanner | Alltid aktivert | Hva det gjør |
|:--------|:--------------|:-------------|
| 🔍**Statisk**| ✅ Ja | Skanner SKILL.md, pakkede filer og skript |
| 🦠**ClamAV**| ⚙️ Valgfritt | Skanning av skadelig programvare via `clamscan` |
| 🔒**VirusTotal**| ⚙️ Valgfritt | Hash-oppslag (ingen opplasting) |

**Statiske skannerregelfamilier:**
- 🎭 Raske injeksjons- og eksfiltrasjonsmønstre
- 💣 Destruktive skallkommandoer
- 🔑 Mistenkelig legitimasjon eller OS-baner
- ⚠️ Risikable skriptprimitiver (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Sikkerhetsutdataform:**```json
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

| Seksjon | Felter |
|:--------|:-------|
| 🆔 Identitet | `id`, `slug`, `display_name` |
| 🏷️ Taksonomi | `raw_category`, `canonical_category`, `inferred_category` |
| 📋 Forfatter | koder, verktøy, kompleksitet, risiko, kilde, forfatter |
| 📅 Datoer og stier | `date_added`, `date_updated`, baner |
| 📊 Ressurser | Fil- og referansetellere |
| 📝 Innholdssignaler | Ordtelling, kroppslengde, strukturelle flagg |
| 🧠 Semantisk dybde | Arbeidsflyttrinn, eksempler, feilsøkingsdybde, beslutningsressurser, støttekoblingsfamilier |
| 🧩 Støttepakkestruktur | Antall støttefiler, tilknyttede familier, `agenter/`, `assets/` og gjenbrukbare eksempler |
| 🎯 Forfall | Nivå, etikett, skript/filer flagg |
| 📋 Beste praksis | Poengsum og nivå |
| ⭐ Kvalitet | Poeng, nivå og semantisk fordeling |
| 🛡️ Sikkerhet | Poengsum, nivå, status, funn |
| ✅ Validering | Status, feil, advarsler |### Root (`metadata.json`)

| Seksjon | Felter |
|:--------|:-------|
| 📊 Sammendrag | Antall, gjennomsnitt, kategorifordeling |
| 🏷️ Taksonomi | Kategori teller |
| 🎯 Distribusjon | Ferdighetsnivå, kvalitetsnivå, sikkerhetsnivå |
| ✅ Validering | Status teller |
| 📋 Liste over ferdigheter | Kompakte sammendrag per ferdighet |---

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

Dette konfigurerer `git` til å bruke `.githooks/pre-commit`, som regenererer metadata og katalogartefakter før commit og iscenesetter de genererte filene automatisk.