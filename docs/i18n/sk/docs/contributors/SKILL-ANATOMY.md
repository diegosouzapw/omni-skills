# 🔬 Anatomy of a Well-Written Skill (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Očakávania štruktúry a kvality pre Omni Skills `SKILL.md` – formát na tvorbu obsahu, ktorý poháňa celý katalóg.**---

## 📐 The Two Parts

Každý súbor `SKILL.md` sa skladá z dvoch samostatných častí:### 1️⃣ Frontmatter (YAML Metadata)

Strojovo čitateľné metadáta medzi oddeľovačmi `---`. Posilňuje:

- 📚 Index zručností a generovanie katalógu
- 🔎 Vyhľadávanie a filtrovanie CLI
- ✅ Validácia a hodnotenie kvality
- 📊 Generované artefakty klasifikácie `metadata.json`
- 📋 Každá zručnosť sa prejavuje v `dist/manifesty/`### 2️⃣ Body (Markdown Instructions)

Inštrukcie čitateľné pre ľudí (a čitateľné pre agentov). Napíšte to, ako keby ste**informovali staršieho vývojára**o tom, ako vykonať úlohu – dostatočne špecifickú na to, aby ju agent AI mohol sledovať bez hádania.---

## 📋 Frontmatter Reference

| Pole | povinné | Typ | Popis |
|:------|:---------|:-----|:------------|
| "meno" | ✅ | reťazec | Musí sa zhodovať s názvom adresára s malými pomlčkami |
| "popis" | ✅ | reťazec | Jednoriadkový popis (10 – 200 znakov) |
| "verzia" | ⚡ | reťazec | Sémantická verzia pre samotnú zručnosť (napr. `"0.1.1"`) |
| "kategória" | ⚡ | reťazec | Jedna kanonická kategória z repo taxonómie |
| "značky" | ⚡ | reťazec[] | Vyhľadávateľné značky na objavovanie |
| "zložitosť" | ⚡ | reťazec | `začiatočník` · `stredne pokročilý` · `pokročilý` · `expert` |
| "riziko" | ⚡ | reťazec | "bezpečný" · "opatrnosť" · "urážlivý" · "kritický" |
| "nástroje" | ⚡ | reťazec[] | Testovaní asistenti kódovania AI |
| "zdroj" | ⚡ | reťazec | `všetím` · `komunita` · `oficiálny` |
| "autor" | ⚡ | reťazec | Pripisovanie |
| `dátum_pridania` | ⚡ | reťazec | Dátum ISO |
| `date_updated` | ⚡ | reťazec | Dátum ISO |

> ✅ = Vyžaduje sa vždy · ⚡ = Vyžaduje sa v prísnom režime

Verzia zručností je nezávislá od verzie balíka npm. Balík je momentálne `0.1.3`, ale existujúce zručnosti môžu platne zostať na svojej vlastnej sémantickej verzii.---

## 🏷️ Canonical Categories

Repo taxonómia v súčasnosti definuje**18 kanonických kategórií**:

| Kategória | Doména |
|:---------|:-------|
| 💻 "vývoj" | Všeobecný vývoj softvéru |
| 🎨 `frontend` | Frontendové rámce a používateľské rozhranie |
| 🔧 `backend` | Backendové služby a API |
| 🌐 `fullstack-web` | End-to-end vývoj webu |
| 🛠️ `nástroje` | Vývojárske nástroje a nástroje |
| ⚙️ `cli-automatizácia` | Nástroje CLI a automatizačné skripty |
| 📊 "podnikanie" | Obchodné procesy a stratégia |
| 📐 "produkt" | Produktový manažment a dizajn |
| 🎯 `dizajn` | Vizuálny a UX dizajn |
| 🤖 `data-ai` | Dátové inžinierstvo a aplikácie AI |
| 🧠 `ai-agenti` | Vývoj a vzory agentov AI |
| 📈 `strojové učenie` | Modely ML a školenia |
| 🔌 "devops" | Infraštruktúra a rozmiestnenie |
| 🛡️ "testovanie-bezpečnosť" | Testovacie a bezpečnostné postupy |
| 📖 "dokumentácia" | Tvorba a správa dokumentácie |
| 🎬 `obsah-médiá` | Tvorba obsahu a médiá |
| 💬 "komunikácia" | Komunikačné nástroje a pracovné postupy |
| ❓ „nezaradené“ | Predvolené, keď sa nenájde žiadna zhoda |

> Staršie označenia ako „workflow“, „architektúra“, „infraštruktúra“, „zabezpečenie“ a „testovanie“ sa automaticky normalizujú pomocou mapovania aliasov.---

## 📝 Body Structure

Dobre napísané telo zručností sa riadi touto hierarchiou:

### 📌 Prehľad (povinné)
2-3 vety o tom,**čo**daná zručnosť robí a**prečo**existuje.

### 🎯 Kedy použiť (povinné)
Zoznam**špecifických scenárov**, kde sa táto zručnosť uplatňuje.

### 📋 Základné pokyny (povinné)
**proces krok za krokom**, ktorý by mal agent dodržiavať. Buďte explicitní. Buďte konkrétni. Agenti najlepšie fungujú s jasnými a jednoznačnými pokynmi.

### 💡 Príklady (odporúčané)
Konkrétne výzvy, bloky kódu alebo očakávané výstupy.**Čím konkrétnejšie, tým lepšie.**

### ✅ Osvedčené postupy (odporúčané)
Na rýchle skenovanie použite ✅ Robiť / ❌ Neformátovať.

### 🔧 Riešenie problémov (voliteľné)
Bežné problémy a ich riešenia.

### 🔗 Súvisiace zručnosti (voliteľné)
Krížové odkazy na doplnkové zručnosti.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Zamerané na**jeden konkrétny**pracovný postup alebo doménu
- 📌 Pokyny sú**dostatočne jasné na to, aby ich AI**mohla nasledovať bez ľudského výkladu
- 💡 Zahŕňa**konkrétne príklady**s očakávaným správaním
- 🛡️ Má správne pokyny na**spracovanie chýb**
- 📊 Vytvára zdravé metadáta: kanonická kategória, zrelosť L2+, kvalita 70+
- 🧰 Zasiela opakovane použiteľný balík podpory, nielen prózu, ideálne cez `referencie/`, `skripty/`, `príklady/` a `agenti/` tam, kde je to vhodné

Pre silnejšie vzory bodovania, ktoré posúvajú zručnosti do najvyšších pásiem, si pozrite [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Všeobecná rada, ktorá sa môže vzťahovať na čokoľvek
- 🤷 Nejasné pokyny ako „napíš dobrý kód“
- 🚫 Žiadne príklady ani bloky kódu
- ⚠️ Chýbajúce frontmatterové polia
- 📉 Nízke skóre kvality (menej ako 50)