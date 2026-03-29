# 🔬 Anatomy of a Well-Written Skill (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Struktur og kvalitetsforventninger til en Omni Skills `SKILL.md` — forfatterformatet, der driver hele kataloget.**---

## 📐 The Two Parts

Hver "SKILL.md" er sammensat af to adskilte sektioner:### 1️⃣ Frontmatter (YAML Metadata)

Maskinlæsbare metadata mellem `---` afgrænsere. Det magter:

- 📚 Færdighedsindekset og kataloggenerering
- 🔎 CLI-søgning og -filtrering
- ✅ Validering og kvalitetsscoring
- 📊 Genererede 'metadata.json' klassifikationsartefakter
- 📋 Per-skill manifesterer sig i `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Menneskelæselige (og agentlæsbare) instruktioner. Skriv det, som om du**briefer en seniorudvikler**om, hvordan man udfører en opgave - specifik nok til, at en AI-agent kan følge den uden at gætte.---

## 📋 Frontmatter Reference

| Felt | Påkrævet | Skriv | Beskrivelse |
|:------|:--------|:-----|:------|
| `navn` | ✅ | streng | Skal matche mappenavnet, med små bogstaver |
| `beskrivelse` | ✅ | streng | Beskrivelse på én linje (10-200 tegn) |
| `version` | ⚡ | streng | Semantisk version for selve færdigheden (f.eks. `"0.1.1"`) |
| `kategori` | ⚡ | streng | Én kanonisk kategori fra repo-taksonomien |
| `tags` | ⚡ | streng[] | Søgbare tags til opdagelse |
| `kompleksitet` | ⚡ | streng | `begynder` · `mellemliggende` · `avanceret` · `ekspert` |
| `risiko` | ⚡ | streng | `sikker` · `caution` · `offensiv` · `kritisk` |
| `værktøjer` | ⚡ | streng[] | Testede AI-kodningsassistenter |
| `kilde` | ⚡ | streng | `omni-team` · `community` · `officielt` |
| `forfatter` | ⚡ | streng | Tilskrivning |
| `date_added` | ⚡ | streng | ISO-dato |
| `dato_opdateret` | ⚡ | streng | ISO-dato |

> ✅ = Altid påkrævet · ⚡ = Påkrævet i streng tilstand

Færdighedsversionen er uafhængig af npm-pakkeversionen. Pakken er i øjeblikket `0.1.3`, men eksisterende færdigheder kan gyldigt forblive på deres egen semantiske version.---

## 🏷️ Canonical Categories

Repo-taksonomien definerer i øjeblikket**18 kanoniske kategorier**:

| Kategori | Domæne |
|:--------|:-------|
| 💻 `udvikling` | Generel softwareudvikling |
| 🎨 `frontend` | Frontend-rammer og brugergrænseflade |
| 🔧 `backend` | Backend-tjenester og API'er |
| 🌐 `fullstack-web` | End-to-end webudvikling |
| 🛠️ `værktøjer` | Udviklerværktøj og hjælpeprogrammer |
| ⚙️ `cli-automatisering` | CLI-værktøjer og automatiseringsscripts |
| 📊 `forretning` | Forretningsprocesser og strategi |
| 📐 `produkt` | Produktstyring og design |
| 🎯 `design` | Visuelt og UX design |
| 🤖 `data-ai` | Datateknik og AI-applikationer |
| 🧠 `ai-agenter` | AI agent udvikling og mønstre |
| 📈 `maskine-læring` | ML modeller og uddannelse |
| 🔌 `devops` | Infrastruktur og implementering |
| 🛡️ `test-sikkerhed` | Test- og sikkerhedspraksis |
| 📖 `dokumentation` | Generering og administration af dokumentation |
| 🎬 `indhold-medier` | Indholdsskabelse og medier |
| 💬 `kommunikation` | Kommunikationsværktøjer og arbejdsgange |
| ❓ `ukategoriseret` | Standard, når der ikke findes noget match |

> Ældre etiketter som "workflow", "arkitektur", "infrastruktur", "sikkerhed" og "testning" normaliseres automatisk gennem alias mapping.---

## 📝 Body Structure

Et velskrevet færdighedsorgan følger dette hierarki:

### 📌 Oversigt (påkrævet)
2-3 sætninger om**hvad**færdigheden gør og**hvorfor**den eksisterer.

### 🎯 Hvornår skal bruges (påkrævet)
Punktliste over**specifikke scenarier**, hvor denne færdighed gælder.

### 📋 Grundlæggende instruktioner (påkrævet)
Den**trinvise proces**, som agenten skal følge. Vær eksplicit. Vær specifik. Agenter fungerer bedst med klare, utvetydige instruktioner.

### 💡 Eksempler (anbefales)
Konkrete prompter, kodeblokke eller forventede output.**Jo mere specifik, jo bedre.**

### ✅ Bedste praksis (anbefales)
Brug ✅ Gør / ❌ Formater ikke til hurtig scanning.

### 🔧 Fejlfinding (valgfrit)
Fælles problemer og deres løsninger.

### 🔗 Relaterede færdigheder (valgfrit)
Krydsreferencer til komplementære færdigheder.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Fokuseret på**én specifik**arbejdsgang eller domæne
- 📌 Instruktionerne er**klare nok til, at en AI**kan følges uden menneskelig fortolkning
- 💡 Indeholder**konkrete eksempler**med forventet adfærd
- 🛡️ Har korrekt**fejlhåndtering**vejledning
- 📊 Producerer sunde metadata: kanonisk kategori, modenhed L2+, kvalitet 70+
- 🧰 Sender en genbrugelig supportpakke, ikke kun prosa, ideelt på tværs af `referencer/`, `scripts/`, `eksempler/` og `agenter/`, hvor det er relevant

Se [High-Score-Playbook](HIGH-SCORE-PLAYBOOK.md) for de stærkere scoringsmønstre, der skubber færdigheder ind i de højeste bånd.### ❌ Bad Skill

- 🌫️ Generisk rådgivning, der kunne gælde alt
- 🤷 Vage instruktioner som "skriv god kode"
- 🚫 Ingen eksempler eller kodeblokke
- ⚠️ Mangler frontmatter felter
- 📉 Lav kvalitetsscore (under 50)