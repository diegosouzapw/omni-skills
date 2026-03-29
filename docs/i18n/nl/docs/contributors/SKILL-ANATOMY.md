# 🔬 Anatomy of a Well-Written Skill (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Structuur- en kwaliteitsverwachtingen voor een Omni Skills `SKILL.md` — het auteursformaat dat de hele catalogus aanstuurt.**---

## 📐 The Two Parts

Elke `SKILL.md` bestaat uit twee afzonderlijke secties:### 1️⃣ Frontmatter (YAML Metadata)

Machineleesbare metagegevens tussen `---` scheidingstekens. Het bevoegdheden:

- 📚 De vaardighedenindex en het genereren van catalogi
- 🔎 CLI zoeken en filteren
- ✅ Validatie en kwaliteitsscore
- 📊 Gegenereerde 'metadata.json'-classificatieartefacten
- 📋 Per vaardigheid manifesteert zich in `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Voor mensen leesbare (en voor agenten leesbare) instructies. Schrijf het alsof je**een senior ontwikkelaar**informeert over hoe een taak moet worden uitgevoerd – specifiek genoeg zodat een AI-agent deze kan volgen zonder te raden.---

## 📋 Frontmatter Reference

| Veld | Vereist | Typ | Beschrijving |
|:------|:---------|:-----|:------------|
| `naam` | ✅ | tekenreeks | Moet overeenkomen met de mapnaam, met kleine letters en afgebroken |
| `beschrijving` | ✅ | tekenreeks | Beschrijving van één regel (10-200 tekens) |
| `versie` | ⚡ | tekenreeks | Semantische versie voor de vaardigheid zelf (bijvoorbeeld `"0.1.1"`) |
| `categorie` | ⚡ | tekenreeks | Eén canonieke categorie uit de repo-taxonomie |
| `labels` | ⚡ | tekenreeks[] | Doorzoekbare tags voor ontdekking |
| `complexiteit` | ⚡ | tekenreeks | `beginner` · `gemiddeld` · `gevorderd` · `expert` |
| `risico` | ⚡ | tekenreeks | `veilig` · `voorzichtig` · `aanstootgevend` · `kritisch` |
| `gereedschap` | ⚡ | tekenreeks[] | Geteste AI-codeerassistenten |
| `bron` | ⚡ | tekenreeks | `omni-team` · `gemeenschap` · `officieel` |
| `auteur` | ⚡ | tekenreeks | Naamsvermelding |
| `datum_toegevoegd` | ⚡ | tekenreeks | ISO-datum |
| `datum_bijgewerkt` | ⚡ | tekenreeks | ISO-datum |

> ✅ = Altijd vereist · ⚡ = Vereist in strikte modus

De vaardigheidsversie is onafhankelijk van de npm-pakketversie. Het pakket is momenteel '0.1.3', maar bestaande vaardigheden kunnen op hun eigen semantische versie blijven staan.---

## 🏷️ Canonical Categories

De repo-taxonomie definieert momenteel**18 canonieke categorieën**:

| Categorie | Domein |
|:---------|:-------|
| 💻 `ontwikkeling` | Algemene softwareontwikkeling |
| 🎨`frontend` | Frontend-frameworks en gebruikersinterface |
| 🔧 `backend` | Backend-services en API's |
| 🌐 `fullstack-web` | End-to-end webontwikkeling |
| 🛠️`gereedschap` | Tools en hulpprogramma's voor ontwikkelaars |
| ⚙️ `cli-automatisering` | CLI-tools en automatiseringsscripts |
| 📊 `zakelijk` | Bedrijfsprocessen en strategie |
| 📐 `product` | Productbeheer en ontwerp |
| 🎯 `ontwerp` | Visueel en UX-design |
| 🤖 `data-ai` | Data-engineering en AI-toepassingen |
| 🧠`ai-agenten` | Ontwikkeling en patronen van AI-agenten |
| 📈 `machine-leren` | ML-modellen en training |
| 🔌`devops` | Infrastructuur en implementatie |
| 🛡️ `test-beveiliging` | Test- en beveiligingspraktijken |
| 📖 `documentatie` | Documentatie genereren en beheren |
| 🎬 `inhoud-media` | Contentcreatie en media |
| 💬 `communicatie` | Communicatiemiddelen en workflows |
| ❓ `ongecategoriseerd` | Standaard wanneer er geen overeenkomst is gevonden |

> Oudere labels zoals 'workflow', 'architectuur', 'infrastructuur', 'beveiliging' en 'testen' worden automatisch genormaliseerd via aliastoewijzing.---

## 📝 Body Structure

Een goed geschreven vaardigheidslichaam volgt deze hiërarchie:

### 📌 Overzicht (verplicht)
2-3 zinnen over**wat**de vaardigheid doet en**waarom**deze bestaat.

### 🎯 Wanneer te gebruiken (vereist)
Lijst met opsommingen van**specifieke scenario's**waarin deze vaardigheid van toepassing is.

### 📋 Kerninstructies (vereist)
Het**stapsgewijze proces**dat de agent moet volgen. Wees expliciet. Wees specifiek. Agenten werken het beste met duidelijke, ondubbelzinnige instructies.

### 💡 Voorbeelden (aanbevolen)
Concrete aanwijzingen, codeblokken of verwachte resultaten.**Hoe specifieker, hoe beter.**

### ✅ Beste praktijken (aanbevolen)
Gebruik de formattering ✅ Wel/❌ Niet voor snel scannen.

### 🔧 Probleemoplossing (optioneel)
Veelvoorkomende problemen en hun oplossingen.

### 🔗 Gerelateerde vaardigheden (optioneel)
Kruisverwijzingen naar complementaire vaardigheden.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Gericht op**één specifieke**workflow of domein
- 📌 Instructies zijn**duidelijk genoeg voor een AI**om te volgen zonder menselijke interpretatie
- 💡 Inclusief**concrete voorbeelden**met verwacht gedrag
- 🛡️ Heeft goede**foutafhandeling**begeleiding
- 📊 Produceert gezonde metadata: canonieke categorie, volwassenheid L2+, kwaliteit 70+
- 🧰 Verzendt een herbruikbaar ondersteuningspakket, niet alleen proza, idealiter via `references/`, `scripts/`, `examples/` en `agents/` waar van toepassing

Voor de sterkere scorepatronen die vaardigheden naar de hoogste niveaus duwen, zie [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Generiek advies dat op alles van toepassing kan zijn
- 🤷 Vage instructies zoals "schrijf goede code"
- 🚫 Geen voorbeelden of codeblokken
- ⚠️ Ontbrekende frontmaterievelden
- 📉 Lage kwaliteitsscore (lager dan 50)