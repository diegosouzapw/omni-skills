# Skill PR Workflow (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Ez a kanonikus adattárfolyamat olyan lekérési kérésekhez, amelyek egy vagy több natív készségeket adnak hozzá vagy jelentősen frissítenek.

Akkor használja, ha:

- új készség hozzáadása a `készségek/` alatt
- egy csomag elmélyítése új domain készségekkel
- nagyobb támasztócsomag-bővítés szállítása
- egy ág érvényesítése a privát bővítővel, mielőtt a karbantartók összevonják## Target Outcome

Az erős natív PR-készség a következőket jelenti:

- natív készség a `készségek/` alatt
- elegendő tartalom ahhoz, hogy a nyilvános érvényesítő osztályozza és indexelje
- nyilvános hitelesítés és tesztek teljesítése
- automatikus fokozó feldolgozás a PR során
- egy követő `skills_omni/` PR, ha továbbfejlesztett származékokat tesznek közzé
- az anyanyelvi bevitelt szükség esetén eredeti nyelven megőrizzük
- kurátora továbbfejlesztett kimenet angolra átírva
- egyirányú, natív-válogatott áramlás, amely nem táplálja vissza a `skills_omni/` natív javítóanyag-bevitelt## Enhancer Outcome States

A nyilvános PR-javító most négy karbantartó által látható állapotról számol be:

- "befejezve".
  A továbbfejlesztett származékot tisztán generáltuk, és alkalmas a „skills_omni/” kísérő közzétételre.
- `leépült`
  A javító befejeződött, de tartalék útvonalat használt, vagy figyelmeztetéseket produkált. A származék egészségesként való kezelése előtt továbbra is a fenntartó felülvizsgálata várható.
- `blokkolva`
  A futtatást infrastrukturális vagy érvényesítési problémák leállították, például a hostolt OmniRoute előzetes ellenőrzési hibája vagy egy jelölt ellenőrzési hiba, amely megakadályozhatja a közzétételt.
- `nem sikerült`
  A javító váratlan futásidejű hibát észlelt, és karbantartói vizsgálatra van szükség.## Recommended Branch Shape

Hozzon létre egy fókuszált ágat:```bash
git checkout -b feat/<short-skill-theme>
```

Példák:

- "feat/incidens-observability-evals".
- `feat/devops-skill-pack`
- "feat/security-skill-pack".## Native Intake Rules

A közbefogadó felület szándékosan megengedő.

Minimális:```text
skills/<skill>/
└── SKILL.md
```

Fogyasztásához ajánlott, de már nem szükséges:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

A natív hozzájárulás lehet durva, hiányos vagy kívül esik a normál támogatási csomag szabványán. Ez szándékos. A `skills/` a natív beviteli felület, nem a kurált származékos felület.

Nyelvi politika:

- az anyanyelvi bevitel a `skills/` alatt bármilyen nyelven írható
- az erősítő megőrzi a natív pillanatképet a származás céljából benyújtott állapotban
- a „skills_omni/” alatti kurált származékot mindig angolul kell írni

A szigorúbb szerkesztői korlát a következőkre vonatkozik:

- a generált metaadatok és biztonsági ellenőrzések
- a privát fokozó áttekintése
- a „skills_omni/” alatti utólagos kurált származék## Authoring Sequence

1. Hozzon létre `skills/<skill>/SKILL.md`.
2. Adjon hozzá frontmattert, ha tudja, de a hiányzó vagy hiányos frontanyag már nem akadályozza meg önmagában a natív felvételt.
3. Adja hozzá az "agents/", "references/", "examples/" és "scripts/" elemeket, ha már rendelkezik velük.
4. Frissítse a "data/bundles.json" fájlt, ha a készség elmélyíti egy meglévő csomagot.
5. Nyissa meg a PR-t. A repo automatizálás most elvégzi a többit.## Validation Sequence

A közreműködők pontosan ezt a sorrendet futtathatják a PR megnyitása előtt:```bash
npm run validate
npm run build
npm test
git diff --check
```

Ha a változás a futásidőt vagy a csomagolási viselkedést is érinti, futtassa a következőket is:```bash
npm run smoke
```

## What Happens Automatically During the PR

Amikor egy PR megnyílik vagy szinkronizálódik, és csak a „skills/” és az opcionális „data/bundles.json” alatti natív készségfelvételi fájlokat érinti, a nyilvános repo mostantól automatikusan elindítja a privát javítót.

Jelenlegi automatizált áramlás:

1. A nyilvános `Validate Skills` munkafolyamat fut a PR-on, és ellenőrzi az érvényesítést, az összeállítást, a generált melléktermékeket és a teszteket.
2. Párhuzamosan elindul a nyilvános `Enhance PR Skills` munkafolyamat, és egyenként dolgozza fel a megváltozott natív készségeket "élő" módban.
3. A javító beolvassa a natív készségeket a „skills/”-ből, felkutatja a jelenlegi legjobb gyakorlatokat, és felülvizsgált továbbfejlesztett jelöltet ír a privát munkaterületen.
4. A javító megőrzi az upstream bemeneti pillanatképet az eredeti nyelven, ha szükséges, de átírja a kurált kimenetet angolra.
5. Az erősítő bejegyzések visszahaladnak a forrás PR-hoz.
6. A javító minden feldolgozott képesség után frissíti a PR állapot megjegyzését a kötegösszegekkel és a legújabb állapottal.
7. Amikor befejeződik, a továbbfejlesztett származékot a `skills_omni/`-ben materializálja, és megnyit vagy frissít egy társ PR-t a nyilvános repóban csak a "befejezett" és "degraded" kimenetekhez.
8. Miután a PR-t egyesítették a "main"-ba, a privát repo-tudatos lekérdező újrafeldolgozza a megváltozott natív készségeket, frissíti a "workspace/enhanced/skills/<skill>/" fájlt, és a privát továbbfejlesztett alapvonalat a legújabb nyilvános natív forráshoz igazítja.
9. Az egyesítés után a nyilvános kiadás munkafolyamata összeomlik az npm csomag verziójával, újragenerálja a katalógus melléktermékeit, közzétesz egy kiadást, és automatikusan megcímkézi az új verziót.

Díjkorlát:

- a PR-fokozó jelenleg**1 képességet dolgoz fel percenként**
- egy 40 natív új képességgel rendelkező PR ezért körülbelül 40 percig maradhat az erősítő sorban
- a PR azt mutatja, hogy a munka folyamatban lévő CI-futásként plusz egy előrehaladási megjegyzés, amely készségről készségre fejleszti

A közreműködőnek nem kell manuálisan futtatnia a javítót.## No-Loop Rule For `skills_omni/`

A kurált felület szándékosan egyirányú:

- a natív bemenet a `skills/`-n keresztül lép be
- a privát javító értékeli a natív bemenetet
- a kurált kimenetet a `skills_omni/` paraméterben javasoljuk
- A „skills_omni/” soha többé nem kezeli natív bevitelként
- a későbbi natív frissítések továbbra is újra belépnek a `skills/`-en keresztül, és lecserélik a privát, továbbfejlesztett alapvonalat az újrafeldolgozás után

Az adattár most ezt a határt érvényesíti:

- A „skills_omni/” paramétert módosító közvetlen nyilvános PR-ek elutasításra kerülnek
- ott csak a `skills-omni/pr-*` ágcsaládból az automatizálás által írt társ PR-ok fogadhatók el
- a vegyes PR-ek, amelyek egyszerre próbálják megváltoztatni a `skills/` és a `skills_omni/` értéket, elutasításra kerülnek## Automatic Versioning After Merge

A szakértelmet hordozó összevonások a "fő"-be most automatikusan elindítják a lerakat kiadási munkafolyamatát.

A csomag jelenlegi verziójára vonatkozó szabályzat:

- a javítások `+1`-gyel növelhetők minden egyes minősített egyesítésnél
- "0.0.1" → "0.0.2" → ... → "0.0.10"
- ".10" után a csomag a következő kisebbre gurul, és visszaállítja a javítást
- "0.0.10" → "0.1.0".
- "0.1.10" → "0.2.0".

Jelenlegi kiadás aktiválási útvonalai:

- `készségek/**`
- `skills_omni/**`
- `data/bundles.json`

Ez az automatikus kiadási feladat:

1. kiszámítja a következő csomagverziót a "package.json" fájlból
2. kiütközik a `package.json` és a `package-lock.json`
3. újragenerálja a "metadata.json", "skills_index.json", "dist/" és "docs/CATALOG.md" fájlokat
4. futtatja a szigorú kiadás-ellenőrzési folyamatot
5. visszaállítja a verziót a `main`-ba
6. létrehoz egy Git címkét az új verzióhoz
7. közzéteszi az npm és a GitHub Release műtermékeket

Fontos közzétételi megjegyzés:

- A GitHub csak azután regisztrál egy új munkafolyamat-fájlt aktív lerakat munkafolyamatként, miután a fájl eléri az alapértelmezett ágat.
- Amíg az "Enhance PR Skills" meg nem jelenik a "főoldalon", a közreműködők elolvashatják a dokumentált folyamatot, de a GitHub még nem hajtja végre automatikusan ezt a munkafolyamatot nyilvános PR-eken.
- Miután a munkafolyamatot egyesítette a "fő"-vel, a fent leírt viselkedés lesz a jövőbeli natív készség-PR-k alapértelmezett beviteli útvonala.## Native vs Enhanced

Ennek a repónak most két különböző felülete van:

- `készségek/`
  Natív bevitel. Ez megőrzi az eredeti hozzájárulást a benyújtott formában.
- „skills_omni/”.
  Az automatizálás által javasolt és az Omni Skills Team által karbantartott, sokoldalúan továbbfejlesztett származtatott kimenet.

A „skills_omni/” hozzárendelési szabályai:

- a továbbfejlesztett származék Omni-karbantartottá válik
- az eredeti közreműködő és az upstream natív készség továbbra is jóváírásra kerül
- minden továbbfejlesztett könyvtár tartalmaz egy "ATTRIBUTION.md" fájlt az upstream elérési úttal, PR-vel, szerzővel és forráskontextussal
- minden továbbfejlesztett könyvtár csak kiválasztott kimenet, és nem küldhető újra a natív javító beviteli útvonalára
- minden továbbfejlesztett könyvtárnak angol nyelvű kimenetnek kell lennie, még akkor is, ha az upstream natív forrás nem volt az## Manual Maintainer Commands

Az automatizálás lefedi a normál PR-felvételt, de a karbantartók továbbra is manuálisan futtathatják a privát javítót, ha szükséges.

Köteg egy ágdiff ellen:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Egykészséges értékelés:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Várható javító teljesítmények készségenként:

- `munkaterület/bejövő/eredeti/<futásazonosító>/<készség>/`
- `munkaterület/enhanced-candidates/<futásazonosító>/<készség>/`
- `workspace/reports/<run-id>/research.json`
- `munkaterület/reports/<futásazonosító>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `munkaterület/reports/<futásazonosító>/score-delta.json`
- `munkaterület/reports/<futásazonosító>/review.md`
- `munkaterület/reports/<futásazonosító>/research-prompt.md`
- `munkaterület/reports/<futásazonosító>/rewrite-prompt.md`## PR Body Expectations

A PR-testületnek közölnie kell:

- milyen készségeket adtak hozzá vagy fejlesztettek
- mely kötegeket vagy munkafolyamatokat mélyítik el
- milyen érvényesítés futott
- futott-e az automatizált fokozó
- megnyitott-e vagy frissített-e egy `skills_omni/` társ PR-t
- bármilyen kivételes karbantartói megjegyzés a hozzárendelésről vagy az utólagos tisztításról## Reviewer Checklist

- a natív bevitel jogos és nem rosszindulatú
- a generált metaadatok és jegyzékek frissültek
- A csomagfrissítések szándékosak
- a nyilvános érvényesítés és a build kimenetei zöldek
- a javító státusz megjegyzése megegyezik a tényleges megváltozott képességekkel és a végeredmény állapotával
- bármely `skills_omni/` társ PR megfelelően megőrzi a hozzárendelést## Example PR Scope

Egy erős példa PR olyan tematikus készletet adhat hozzá, mint például:

- egy megfigyelhetőség vagy DevOps készség
- egy esemény vagy biztonsági készség
- egy mesterséges intelligencia értékelés vagy felszólítás

Ez elég nagy a pontozó, az automatikus javító, a „skills_omni/” közzétételi folyamat, a kötegek és a hozzárendelési modell gyakorlásához anélkül, hogy a PR-t teljes katalógus-újraírássá változtatná.