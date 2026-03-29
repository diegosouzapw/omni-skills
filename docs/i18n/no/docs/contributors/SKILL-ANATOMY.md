# 🔬 Anatomy of a Well-Written Skill (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Forventninger til struktur og kvalitet for en Omni Skills `SKILL.md` – forfatterformatet som driver hele katalogen.**---

## 📐 The Two Parts

Hver "SKILL.md" er sammensatt av to forskjellige seksjoner:### 1️⃣ Frontmatter (YAML Metadata)

Maskinlesbare metadata mellom `---` skilletegn. Den driver:

- 📚 Kompetanseindeksen og kataloggenerering
- 🔎 CLI-søk og filtrering
- ✅ Validering og kvalitetsscoring
- 📊 Genererte "metadata.json" klassifiseringsartefakter
- 📋 Per-ferdighet manifesterer seg i `dist/manifester/`### 2️⃣ Body (Markdown Instructions)

Menneskelesbare (og agentlesbare) instruksjoner. Skriv det som om du**briefer en seniorutvikler**om hvordan du utfører en oppgave – spesifikt nok til at en AI-agent kan følge den uten å gjette.---

## 📋 Frontmatter Reference

| Felt | Påkrevd | Skriv inn | Beskrivelse |
|:------|:--------|:-----|:------|
| `navn` | ✅ | streng | Må samsvare med katalognavn, små bokstaver |
| `beskrivelse` | ✅ | streng | En-linje beskrivelse (10-200 tegn) |
| `versjon` | ⚡ | streng | Semantisk versjon for selve ferdigheten (f.eks. `"0.1.1"`) |
| `kategori` | ⚡ | streng | Én kanonisk kategori fra repo-taksonomien |
| `tags` | ⚡ | streng[] | Søkbare tagger for oppdagelse |
| `kompleksitet` | ⚡ | streng | `nybegynner` · `mellomliggende` · `avansert` · `ekspert` |
| `risiko` | ⚡ | streng | `safe` · `caution` · `offensive` · `kritisk` |
| `verktøy` | ⚡ | streng[] | Testede AI-kodingsassistenter |
| `kilde` | ⚡ | streng | `omni-team` · `community` · `offisiell` |
| `forfatter` | ⚡ | streng | Attribusjon |
| `dato_added` | ⚡ | streng | ISO-dato |
| `dato_oppdatert` | ⚡ | streng | ISO-dato |

> ✅ = Alltid nødvendig · ⚡ = Påkrevd i streng modus

Ferdighetsversjonen er uavhengig av npm-pakkeversjonen. Pakken er for øyeblikket `0.1.3`, men eksisterende ferdigheter kan gyldig forbli på sin egen semantiske versjon.---

## 🏷️ Canonical Categories

Repo-taksonomien definerer for tiden**18 kanoniske kategorier**:

| Kategori | Domene |
|:---------|:-------|
| 💻 `utvikling` | Generell programvareutvikling |
| 🎨 `frontend` | Frontend-rammeverk og brukergrensesnitt |
| 🔧 `backend` | Backend-tjenester og API-er |
| 🌐 `fullstack-web` | End-to-end webutvikling |
| 🛠️ `verktøy` | Utviklerverktøy og verktøy |
| ⚙️ `cli-automatisering` | CLI-verktøy og automatiseringsskript |
| 📊 `business` | Forretningsprosesser og strategi |
| 📐 `produkt` | Produktledelse og design |
| 🎯 `design` | Visuelt og UX-design |
| 🤖 `data-ai` | Datateknikk og AI-applikasjoner |
| 🧠 `ai-agenter` | AI agent utvikling og mønstre |
| 📈 `maskinlæring` | ML modeller og opplæring |
| 🔌 `devops` | Infrastruktur og distribusjon |
| 🛡️ `testing-sikkerhet` | Testing og sikkerhetspraksis |
| 📖 `dokumentasjon` | Generering og administrasjon av dokumentasjon |
| 🎬 `innholdsmedia` | Innholdsskaping og media |
| 💬 `kommunikasjon` | Kommunikasjonsverktøy og arbeidsflyter |
| ❓ `ukategorisert` | Standard når ingen treff blir funnet |

> Eldre etiketter som "arbeidsflyt", "arkitektur", "infrastruktur", "sikkerhet" og "testing" normaliseres automatisk gjennom aliaskartlegging.---

## 📝 Body Structure

En velskrevet ferdighetskropp følger dette hierarkiet:

### 📌 Oversikt (obligatorisk)
2-3 setninger om**hva**ferdigheten gjør og**hvorfor**den eksisterer.

### 🎯 Når skal brukes (obligatorisk)
Punktliste over**spesifikke scenarier**der denne ferdigheten gjelder.

### 📋 Kjerneinstruksjoner (påkrevd)
**trinn-for-trinn-prosessen**agenten bør følge. Vær eksplisitt. Vær spesifikk. Agenter fungerer best med klare, entydige instruksjoner.

### 💡 Eksempler (anbefalt)
Konkrete meldinger, kodeblokker eller forventede utganger.**Jo mer spesifikk, jo bedre.**

### ✅ Beste praksis (anbefalt)
Bruk ✅ Gjør / ❌ Ikke formater for rask skanning.

### 🔧 Feilsøking (valgfritt)
Vanlige problemer og deres løsninger.

### 🔗 Relaterte ferdigheter (valgfritt)
Kryssreferanser til komplementære ferdigheter.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Fokusert på**én spesifikk**arbeidsflyt eller domene
- 📌 Instruksjonene er**klare nok til at en AI**kan følges uten menneskelig tolkning
- 💡 Inkluderer**konkrete eksempler**med forventet oppførsel
- 🛡️ Har skikkelig**feilhåndtering**veiledning
- 📊 Produserer sunne metadata: kanonisk kategori, modenhet L2+, kvalitet 70+
- 🧰 Sender en gjenbrukbar støttepakke, ikke bare prosa, ideelt på tvers av `referanser/`, `scripts/`, `eksempler/` og `agenter/` der det er aktuelt

Se [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md) for de sterkere scoringsmønstrene som presser ferdigheter inn i de høyeste båndene.### ❌ Bad Skill

- 🌫️ Generiske råd som kan gjelde alt
- 🤷 Vage instruksjoner som "skriv god kode"
- 🚫 Ingen eksempler eller kodeblokker
- ⚠️ Mangler frontmatter-felter
- 📉 Lav kvalitetspoengsum (under 50)