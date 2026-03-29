# 🔬 Anatomy of a Well-Written Skill (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Struktur och kvalitetsförväntningar för en Omni Skills `SKILL.md` — författarformatet som driver hela katalogen.**---

## 📐 The Two Parts

Varje `SKILL.md` består av två distinkta sektioner:### 1️⃣ Frontmatter (YAML Metadata)

Maskinläsbar metadata mellan `---` avgränsare. Den driver:

- 📚 Kompetensindex och kataloggenerering
- 🔎 CLI-sökning och filtrering
- ✅ Validering och kvalitetspoäng
- 📊 Genererade "metadata.json" klassificeringsartefakter
- 📋 Per-skill manifesteras i `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Människoläsbara (och agentläsbara) instruktioner. Skriv det som om du**briefar en senior utvecklare**om hur man utför en uppgift – tillräckligt specifikt för att en AI-agent kan följa den utan att gissa.---

## 📋 Frontmatter Reference

| Fält | Krävs | Skriv | Beskrivning |
|:------|:--------|:-----|:------|
| `namn` | ✅ | sträng | Måste matcha katalognamnet, gemener |
| `beskrivning` | ✅ | sträng | Enradsbeskrivning (10-200 tecken) |
| `version` | ⚡ | sträng | Semantisk version för själva färdigheten (t.ex. `"0.1.1"`) |
| `kategori` | ⚡ | sträng | En kanonisk kategori från repo-taxonomien |
| `taggar` | ⚡ | sträng[] | Sökbara taggar för upptäckt |
| `komplexitet` | ⚡ | sträng | `nybörjare` · `mellanliggande` · `avancerad` · `expert` |
| `risk` | ⚡ | sträng | `safe` · `caution` · `offensiv` · `kritisk` |
| `verktyg` | ⚡ | sträng[] | Testade AI-kodningsassistenter |
| `källa` | ⚡ | sträng | `omni-team` · `community` · `officiell` |
| `författare` | ⚡ | sträng | Tillskrivning |
| `date_added` | ⚡ | sträng | ISO-datum |
| `date_updated` | ⚡ | sträng | ISO-datum |

> ✅ = Alltid obligatoriskt · ⚡ = Krävs i strikt läge

Skicklighetsversionen är oberoende av npm-paketversionen. Paketet är för närvarande `0.1.3`, men befintliga färdigheter kan giltigt förbli i sin egen semantiska version.---

## 🏷️ Canonical Categories

Repo-taxonomien definierar för närvarande**18 kanoniska kategorier**:

| Kategori | Domän |
|:--------|:-------|
| 💻 `utveckling` | Allmän mjukvaruutveckling |
| 🎨 `frontend` | Frontend-ramverk och UI |
| 🔧 `backend` | Backend-tjänster och API:er |
| 🌐 `fullstack-web` | End-to-end webbutveckling |
| 🛠️ `verktyg` | Utvecklarverktyg och verktyg |
| ⚙️ `cli-automation` | CLI-verktyg och automatiseringsskript |
| 📊 `affärer` | Affärsprocesser och strategi |
| 📐 `produkt` | Produktledning och design |
| 🎯 `design` | Visuell och UX-design |
| 🤖 `data-ai` | Datateknik och AI-tillämpningar |
| 🧠 `ai-agenter` | AI-agentutveckling och mönster |
| 📈 `maskininlärning` | ML modeller och utbildning |
| 🔌 `devops` | Infrastruktur och utbyggnad |
| 🛡️ `test-säkerhet` | Test- och säkerhetsrutiner |
| 📖 `dokumentation` | Generering och hantering av dokumentation |
| 🎬 `innehåll-media` | Skapande av innehåll och media |
| 💬 `kommunikation` | Kommunikationsverktyg och arbetsflöden |
| ❓ `okategoriserad` | Standard när ingen matchning hittas |

> Äldre etiketter som "arbetsflöde", "arkitektur", "infrastruktur", "säkerhet" och "testning" normaliseras automatiskt genom aliasmapping.---

## 📝 Body Structure

En välskriven färdighetskropp följer denna hierarki:

### 📌 Översikt (obligatoriskt)
2-3 meningar om**vad**färdigheten gör och**varför**den finns.

### 🎯 När ska användas (obligatoriskt)
Punktlista med**specifika scenarier**där denna färdighet gäller.

### 📋 Grundinstruktioner (obligatoriskt)
Den**steg-för-steg-process**som agenten bör följa. Var tydlig. Var specifik. Agenter fungerar bäst med tydliga, entydiga instruktioner.

### 💡 Exempel (rekommenderas)
Konkreta uppmaningar, kodblock eller förväntade utdata.**Ju mer specifik, desto bättre.**

### ✅ Bästa metoder (rekommenderas)
Använd ✅ Gör / ❌ Formatera inte för snabb skanning.

### 🔧 Felsökning (valfritt)
Vanliga frågor och deras lösningar.

### 🔗 Relaterade färdigheter (valfritt)
Korsreferenser till kompletterande färdigheter.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Fokuserad på**ett specifikt**arbetsflöde eller domän
- 📌 Instruktionerna är**tillräckligt tydliga för en AI**att följa utan mänsklig tolkning
- 💡 Innehåller**konkreta exempel**med förväntat beteende
- 🛡️ Har korrekt**felhantering**vägledning
- 📊 Producerar hälsosam metadata: kanonisk kategori, mognad L2+, kvalitet 70+
- 🧰 Skickar ett återanvändbart supportpaket, inte bara prosa, helst över "referenser/", "skript/", "exempel/" och "agenter/" där så är lämpligt

För de starkare poängmönstren som driver färdigheter till de högsta banden, se [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Generiska råd som kan gälla vad som helst
- 🤷 Vaga instruktioner som "skriv bra kod"
- 🚫 Inga exempel eller kodblock
- ⚠️ Frontmatterfält saknas
- 📉 Lågt kvalitetspoäng (under 50)