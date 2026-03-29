# 🔬 Anatomy of a Well-Written Skill (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Structură și așteptări de calitate pentru un Omni Skills `SKILL.md` — formatul de autor care alimentează întregul catalog.**---

## 📐 The Two Parts

Fiecare `SKILL.md` este compus din două secțiuni distincte:### 1️⃣ Frontmatter (YAML Metadata)

Metadate care pot fi citite de mașină între delimitatorii `---`. Acesta dă putere:

- 📚 Indexul de competențe și generarea de catalog
- 🔎 Căutare și filtrare CLI
- ✅ Validare și punctaj de calitate
- 📊 Artefacte de clasificare `metadata.json` generate
- 📋 Per-abilitate se manifestă în `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Instrucțiuni care pot fi citite de oameni (și care pot fi citite de agenți). Scrieți-l ca și cum ați**informați un dezvoltator senior**despre cum să efectuați o sarcină - suficient de specific încât un agent AI să o poată urmări fără să ghicească.---

## 📋 Frontmatter Reference

| Câmp | Necesar | Tip | Descriere |
|:------|:----------|:-----|:-------------|
| `nume` | ✅ | șir | Trebuie să se potrivească cu numele directorului, cu minuscule |
| `descriere` | ✅ | șir | Descriere pe un rând (10-200 de caractere) |
| `versiune` | ⚡ | șir | Versiune semantică pentru abilitate în sine (de exemplu, `"0.1.1"`) |
| `categorie` | ⚡ | șir | O categorie canonică din taxonomia repo |
| `etichete` | ⚡ | șir[] | Etichete de căutare pentru descoperire |
| `complexitate` | ⚡ | șir | `începător` · `intermediar` · `avansat` · `expert` |
| `risc` | ⚡ | șir | `sigur` · `atenție` · `ofensiv` · `critic` |
| `instrumente` | ⚡ | șir[] | Asistenți de codare AI testați |
| `sursa` | ⚡ | șir | `omni-echipă` · `comunitate` · `oficial` |
| `autor` | ⚡ | șir | Atribuire |
| `data_adăugată` | ⚡ | șir | data ISO |
| `data_actualizat` | ⚡ | șir | data ISO |

> ✅ = Întotdeauna necesar · ⚡ = Necesar în modul strict

Versiunea skill este independentă de versiunea pachetului npm. Pachetul este în prezent `0.1.3`, dar abilitățile existente pot rămâne valabil pe propria lor versiune semantică.---

## 🏷️ Canonical Categories

Taxonomia repo definește în prezent**18 categorii canonice**:

| Categoria | Domeniu |
|:---------|:-------|
| 💻 `dezvoltare` | Dezvoltare generală de software |
| 🎨 `frontend` | Cadre frontale și interfață de utilizare |
| 🔧 `backend` | Servicii de backend și API-uri |
| 🌐 `fullstack-web` | Dezvoltare web end-to-end |
| 🛠️ `instrumente` | Instrumente și utilități pentru dezvoltatori |
| ⚙️ `cli-automation` | Instrumente CLI și scripturi de automatizare |
| 📊 `afaceri` | Procese și strategie de afaceri |
| 📐 `produs` | Management și design de produs |
| 🎯 `design` | Design vizual și UX |
| 🤖 `data-ai` | Inginerie de date și aplicații AI |
| 🧠 `ai-agents` | Dezvoltarea și modelele agenților AI |
| 📈 `învățare automată` | Modele ML și antrenament |
| 🔌 `devops` | Infrastructură și implementare |
| 🛡️ `testare-securitate` | Practici de testare și securitate |
| 📖 `documentație` | Generarea și managementul documentației |
| 🎬 `content-media` | Creare de conținut și media |
| 💬 `comunicare` | Instrumente de comunicare și fluxuri de lucru |
| ❓ `necategorizat` | Implicit când nu se găsește nicio potrivire |

> Etichetele vechi precum `flux de lucru`, `arhitectură`, `infrastructură`, `securitate` și `testare` sunt normalizate automat prin maparea aliasului.---

## 📝 Body Structure

Un corp de abilități bine scris urmează această ierarhie:

### 📌 Prezentare generală (obligatoriu)
2-3 propoziții despre**ce**face abilitatea și**de ce**există.

### 🎯 Când se utilizează (obligatoriu)
Lista marcatoare a**scenariilor specifice**în care se aplică această abilitate.

### 📋 Instrucțiuni de bază (obligatoriu)
**Procesul pas cu pas**pe care agentul ar trebui să-l urmeze. Fii explicit. Fii specific. Agenții funcționează cel mai bine cu instrucțiuni clare, fără ambiguitate.

### 💡 Exemple (recomandat)
Solicitări concrete, blocuri de cod sau rezultate așteptate.**Cu cât este mai specific, cu atât mai bine.**

### ✅ Cele mai bune practici (recomandat)
Utilizați ✅ Nu / ❌ Nu formatați pentru o scanare rapidă.

### 🔧 Depanare (Opțional)
Probleme comune și soluțiile lor.

### 🔗 Abilități conexe (opțional)
Referințe încrucișate la abilități complementare.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Concentrat pe**un singur flux de lucru sau domeniu specific
- 📌 Instrucțiunile sunt**suficient de clare pentru ca un AI**să le urmeze fără interpretare umană
- 💡 Include**exemple concrete**cu comportament așteptat
- 🛡️ Are îndrumări adecvate pentru**tratarea erorilor**
- 📊 Produce metadate sănătoase: categorie canonică, maturitate L2+, calitate 70+
- 🧰 Livrează un pachet de asistență reutilizabil, nu numai proză, în mod ideal prin „referințe/”, „scripte/”, „exemple/” și „agenți/” acolo unde este cazul

Pentru modelele de scor mai puternice care împing abilitățile în cele mai înalte benzi, consultați [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Sfaturi generice care s-ar putea aplica la orice
- 🤷 Instrucțiuni vagi precum „scrieți un cod bun”
- 🚫 Fără exemple sau blocuri de cod
- ⚠️ Lipsesc câmpuri de primă importanță
- 📉 Scor de calitate scăzut (sub 50)