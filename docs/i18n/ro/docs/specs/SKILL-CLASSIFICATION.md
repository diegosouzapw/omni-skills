# 📊 Skill Classification and Metadata (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Clasificatorul local care punctează fiecare abilitate în timpul validării și creării, generând profiluri care pot fi citite de mașină pentru întregul catalog.**---

## 📊 Status

| Ieșire | Generat |
|:-------|:-----------|
| ✅ Root `metadata.json` | Rezumat la nivelul depozitului |
| ✅ `skills/<skill>/metadata.json` per abilitate | Clasificări individuale |
| ✅ Catalog `dist/catalog.json` | Catalog publicat cu scoruri |
| ✅ Manifestă `dist/manifests/<skill>.json` | Date care pot fi citite de mașină pentru fiecare competență |

Generat de: `python3 tools/scripts/validate_skills.py`

Instantaneu actual al depozitului:

- 32 de aptitudini publicate
- scor mediu de calitate `96.3`
- scor mediu la cele mai bune practici `98,7`
- scor mediu de securitate `95.0`
- spread de calitate curent `94, 95, 96, 97, 100`
- răspândirea celor mai bune practici actuale `98, 99, 100`---

## 🎯 Purpose

Clasificatorul oferă fiecărei aptitudini un**profil coerent, care poate fi citit de mașină**înainte de a ajunge în catalog. Îndeplinește patru sarcini:

1. 📋**Analizare**— materialul frontal YAML și corpul de reducere
2. 🏷️**Normalizare**— Etichete de categorii la taxonomia canonică
3. 📊**Clasificare**— Maturitate, cele mai bune practici, calitate și scor de securitate
4. 📁**Emit**— Artefacte metadate consumate de scripturi de compilare, documente și CI---

## 🏷️ Canonical Taxonomy

**18 categorii canonice**cu mapare automată a aliasului:

| Categoria | Domeniu | Aliasuri comune |
|:----------|:-------|:----------------|
| 💻 `dezvoltare` | Dezvoltare software general | `codificare`, `programare` |
| 🎨 `frontend` | Frontend și UI | `ui`, `web-design` |
| 🔧 `backend` | Backend și API-uri | `server`, `api` |
| 🌐 `fullstack-web` | Web de la capăt la capăt | `web`, `full-stack` |
| 🛠️ `instrumente` | Instrumente pentru dezvoltatori | `utilități` |
| ⚙️ `cli-automation` | CLI și automatizare | `scripting`, `workflow` |
| 📊 `afaceri` | Strategia de afaceri | `strategie` |
| 📐 `produs` | Managementul produsului | `pm` |
| 🎯 `design` | Design vizual și UX | `ux` |
| 🤖 `data-ai` | Aplicații de date și inteligență artificială | `date`, `analitice` |
| 🧠 `ai-agents` | Modele de agent AI | `agenți` |
| 📈 `învățare automată` | Modele ML și antrenament | `ml` |
| 🔌 `devops` | Infrastructură | `infrastructură`, `nor` |
| 🛡️ `testare-securitate` | Testare și securitate | `testare`, `securitate`, `qa` |
| 📖 `documentație` | Managementul documentelor | `docs` |
| 🎬 `content-media` | Creare de conținut | `media`, `conținut` |
| 💬 `comunicare` | Instrumente de comunicare | `chat` |
| ❓ `necategorizat` | Ajutor implicit | — |

> Etichetele vechi precum `flux de lucru`, `arhitectură`, `infrastructură` sunt normalizate automat prin maparea aliasului.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Nivel | Etichetă | Criterii |
|:-------|:------|:---------|
|**L1**| `metadate` | Frontmatter plus minimal body |
|**L2**| `instrucțiuni` | Instrucțiuni scrise substanțiale |
|**L3**| `resurse` | Scripturi grupate sau resurse pachete mai bogate |

Semnale suplimentare urmărite: `has_scripts`, `has_extra_files`---

### 📋 Best Practices Score (0-100)

Euristica evaluează:

| Semnal | Ce verifică |
|:-------|:---------------|
| 📛 Calitate melc | Formatarea câmpului `nume` |
| 📝 Descriere | Claritate, lungime, caracter informativ |
| 📐 Structura | Secțiunile și ierarhia documentului |
| 💡 Exemple | Cod garduri și exemple de blocuri |
| 🔗 Referințe | `Referințe/`, `scripturi/` și ajutoare pentru pachetul de suport conectate |
| 🧰 Operabilitate | Exemple de scripturi locale rulabile și fragmente concrete de flux de lucru |
| 🧩 Adâncimea pachetului de suport | Familii de asistență multiple, fișiere reutilizabile, metadate ale agenților și active operaționale |
| 🩺 Depanare | Perechi explicite „Simptome” și „Soluție” |
| 📚 Acoperire | Secțiunile `Când se utilizează`, `Cele mai bune practici`, `Depanare` și `Resurse suplimentare` |
| 🌐 Portabilitate | Formulare independentă de instrument |
| 📅 Prospețime | Evitarea datelor hardcoded |

**Tiring actual**

| Nivelul | Gama de scor |
|:-----|:-----------|
| `excelent` | 90-100 |
| `bine` | 70-89 |
| `just` | 50-69 |
| `trebuie-muncă` | 0-49 |

Marcatorul este în mod intenționat**suficient de semantic pentru a crea răspândire**între abilitățile mature. O abilitate cu structură curată poate nota bine, dar pentru a ajunge la banda de sus are nevoie și de semnale de adâncime, cum ar fi:

- mai multe exemple, nu doar unul
- mai multe cazuri de depanare
- îndrumarea abilităților aferente
- pachete de suport local mai bogate
- mai mult de o familie de sprijin dincolo de proza simplă, în mod ideal, incluzând „agenți/” sau „active/” în cazul în care adaugă reutilizare reală
- o secțiune dedicată „## Workflow” cu pași numărați
- cel puțin un mic tabel operațional sau hartă de decizie atunci când îmbunătățește claritatea execuției
- mai multă specificitate operațională decât un șablon simplu
- profunzime mai clară a fluxului de lucru și active de sprijin pentru decizii
- Adâncimea pachetului de suport care depășește un fișier „referințe/” și un script legat
- suficiente fișiere de suport reutilizabile pentru a se simți ca un kit de flux de lucru, nu un supliment cu o singură notă
- suficientă densitate operațională pentru a separa un contur lustruit de un kit de flux de lucru reutilizabil

Asta înseamnă că o abilitate completă din punct de vedere structural poate ajunge în anii 90 în loc de `100` dacă pachetul său de suport este mai restrâns, activele sale de decizie sunt mai subțiri sau densitatea operațională este mai mică decât cele mai puternice abilități din catalog.---

### ⭐ Quality Score (0-100)

Euristica combină:

| Semnal | Greutate |
|:-------|:-------|
| 📝 Completitudinea corpului | Mediu-înalt |
| 📋 Precizia descrierii | Mediu |
| 📊 Completitudinea metadatelor | Mediu |
| 📅 Recent (`date_updated`) | Mediu |
| 📦 Resurse ambalate | Mediu |
| 📋 Contribuția celor mai bune practici | Mediu |
| 🧠 Profunzime semantică | Mediu-înalt |
| 🛠️ Adâncime operațională | Mediu |
| 📚 Bogăție pachet suport | Mediu |

**Niveluri de calitate:**

| Nivelul | Gama de scor |
|:-----|:-----------|
| 💎 `platină` | 80+ |
| 🥇 `aur` | 65-79 |
| 🥈 `argint` | 50-64 |
| 🥉 `bronz` | 35-49 |
| 🌱 `starter` | 0-34 |---

### 🛡️ Security Score (0-100)

Stratul de securitate combină:

| Scaner | Întotdeauna activat | Ce face |
|:--------|:----------------|:--------------|
| 🔍**Static**| ✅ Da | Scanează SKILL.md, fișierele ambalate și scripturile |
| 🦠**ClamAV**| ⚙️ Opțional | Scanare malware prin `clamscan` |
| 🔒**VirusTotal**| ⚙️ Opțional | Căutare hash (fără încărcare) |

**Familii de reguli de scanare statică:**
- 🎭 Modele de injecție și exfiltrare prompte
- 💣 Comenzi shell distructive
- 🔑 Acreditări suspecte sau căi ale sistemului de operare
- ⚠️ Primitive de script riscante (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Forma de ieșire de securitate:**```json
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

| Sectiunea | Câmpuri |
|:--------|:-------|
| 🆔 Identitate | `id`, `slug`, `display_name` |
| 🏷️ Taxonomie | `categorie_brută`, `categorie_canonică`, `categorie_dedusă` |
| 📋 Autor | etichete, instrumente, complexitate, risc, sursă, autor |
| 📅 Date și trasee | `data_added`, `data_updated`, căi |
| 📊 Resurse | Contoare de fișiere și referințe |
| 📝 Semnale de conținut | Număr de cuvinte, lungimea corpului, steagurile structurale |
| 🧠 Profunzime semantică | Etape ale fluxului de lucru, exemple, profunzime de depanare, elemente de decizie, familii de legături de asistență |
| 🧩 Structura pachetului de suport | Numărări de fișiere de asistență, familii legate, `agenți/`, `active/` și exemple reutilizabile |
| 🎯 Maturitate | Indicatori de nivel, etichetă, scripturi/fișiere |
| 📋 Cele mai bune practici | Scor și nivel |
| ⭐ Calitate | Scor, nivel și defalcare semantică |
| 🛡️ Securitate | Scor, nivel, stare, constatări |
| ✅ Validare | Stare, erori, avertismente |### Root (`metadata.json`)

| Sectiunea | Câmpuri |
|:--------|:-------|
| 📊 Rezumat | Numărări, medii, distribuție pe categorii |
| 🏷️ Taxonomie | Număr de categorii |
| 🎯 Distribuție | Nivel de calificare, nivel de calitate, nivel de securitate |
| ✅ Validare | Starea contează |
| 📋 Lista de aptitudini | Rezumate compacte pe abilitate |---

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

Aceasta configurează `git` să folosească `.githooks/pre-commit`, care regenerează metadatele și artefactele de catalog înainte de comitere și pune în scenă fișierele generate automat.