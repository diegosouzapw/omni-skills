# Skill PR Workflow (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Toto je kanonický tok úložiska pre požiadavky na stiahnutie, ktoré pridávajú alebo podstatne inovujú jednu alebo viac natívnych zručností.

Použite ho, keď:

- pridanie novej zručnosti pod `skills/`
- prehĺbenie balíka nových doménových zručností
- odoslanie väčšieho rozšírenia balíka podpory
- overenie vetvy so súkromným zlepšovačom predtým, ako ju správcovia zlúčia## Target Outcome

Silná natívna zručnosť PR prináša:

- prirodzená zručnosť pod `skills/`
- dostatok obsahu na to, aby ho verejný overovateľ klasifikoval a indexoval
- absolvovanie verejnej validácie a testov
- automatické spracovanie zosilňovača počas PR
- nadväzujúce `skills_omni/` PR po zverejnení vylepšených derivátov
- pôvodný príjem v prípade potreby zachovaný v pôvodnom jazyku
- kurátorsky vylepšený výstup prepísaný do angličtiny
- jednosmerný tok od natívneho k kurátoru, ktorý neprivádza `skills_omni/` späť do príjmu natívneho zosilňovača## Enhancer Outcome States

Verejný zosilňovač PR teraz hlási štyri stavy viditeľné pre správcu:

- "dokončené".
  Vylepšený derivát bol vygenerovaný čisto a je vhodný na publikáciu `skills_omni/`.
- "degradovaný".
  Vylepšovač skončil, ale použil záložnú cestu alebo vytvoril varovania. Stále sa očakáva kontrola zo strany správcu predtým, ako bude derivát považovať za zdravý.
- "zablokované".
  Spustenie zastavili problémy s infraštruktúrou alebo overením, ako napríklad zlyhanie predletovej kontroly hostiteľa OmniRoute alebo zlyhanie overenia kandidáta, ktoré by malo zabrániť zverejneniu.
- "nepodarilo sa".
  Vylepšovač narazil na neočakávanú chybu behu a potrebuje vyšetrovanie správcom.## Recommended Branch Shape

Vytvorte zameranú vetvu:```bash
git checkout -b feat/<short-skill-theme>
```

Príklady:

- `výkon/incident-observability-evals`
- „balíček zručností/devops“.
- „balíček výkonov/bezpečnostných zručností“.## Native Intake Rules

Plocha verejného odberu je zámerne povolená.

minimum:```text
skills/<skill>/
└── SKILL.md
```

Odporúčané, ale už nie potrebné na príjem:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Natívny príspevok môže byť hrubý, neúplný alebo mimo bežného štandardu balíka podpory. To je zámerné. `skills/` je prirodzený vstupný povrch, nie povrch kurovaného derivátu.

Jazykové pravidlá:

- natívny príjem pod `skills/` môže byť napísaný v akomkoľvek jazyku
- zosilňovač uchová natívnu snímku tak, ako bola predložená na určenie pôvodu
- spravovaný derivát pod `skills_omni/` musí byť vždy napísaný v angličtine

Prísnejšia redakčná hranica teraz platí pre:

- vytvorené metaúdaje a bezpečnostné kontroly
- recenzia súkromného zosilňovača
- nadväzujúci kurátorský derivát pod `skills_omni/`## Authoring Sequence

1. Vytvorte `skills/<skill>/SKILL.md`.
2. Pridajte frontmatter, ak môžete, ale chýbajúci alebo neúplný frontmatter už sám o sebe neblokuje pôvodný príjem.
3. Pridajte `agents/`, `references/`, `examples/` a `scripts/`, keď ich už máte.
4. Ak zručnosť prehĺbi existujúci balík, aktualizujte súbor `data/bundles.json`.
5. Otvorte PR. O zvyšok sa teraz postará repo automatizácia.## Validation Sequence

Prispievatelia môžu pred otvorením PR spustiť presnú postupnosť:```bash
npm run validate
npm run build
npm test
git diff --check
```

Ak zmena ovplyvňuje aj runtime alebo správanie balenia, spustite aj:```bash
npm run smoke
```

## What Happens Automatically During the PR

Keď sa PR otvorí alebo zosynchronizuje a dotkne sa iba natívnych súborov príjmu zručností pod `skills/` plus voliteľného `data/bundles.json`, verejné úložisko teraz automaticky spustí súkromný vylepšenie.

Aktuálny automatický tok:

1. Verejný pracovný postup `Validate Skills` beží na PR a kontroluje validáciu, zostavenie, generované artefakty a testy.
2. Verejný pracovný postup `Enhance PR Skills` začína paralelne a spracováva zmenené natívne zručnosti jednu po druhej v `živom` režime.
3. Vylepšovač prečíta natívnu zručnosť z `skills/`, preskúma aktuálne osvedčené postupy a napíše recenzovaného vylepšeného kandidáta v súkromnom pracovnom priestore.
4. Zosilňovač v prípade potreby uchováva snímku príjmu v pôvodnom jazyku, ale prepíše upravený výstup do angličtiny.
5. Vylepšovač odošle postup späť do zdroja PR.
6. Vylepšovač aktualizuje komentár stavu PR po každej spracovanej zručnosti s celkovými súčtami dávok a najnovším stavom.
7. Keď skončí, zhmotní vylepšený derivát do `skills_omni/` a otvorí alebo aktualizuje sprievodné PR vo verejnom repo pre `dokončené` a `degradované` výstupy.
8. Po zlúčení PR do `main`, súkromný repo-aware poler znovu spracuje všetky zmenené natívne zručnosti, obnoví `workspace/vylepšené/zručnosti/<skill>/` a udržiava súkromnú vylepšenú základnú líniu v súlade s najnovším verejným natívnym zdrojom.
9. Po zlúčení pracovný tok verejných verzií obnoví verziu balíka npm, regeneruje artefakty katalógu, publikuje vydanie a automaticky označí novú verziu.

Limit sadzby:

- PR zosilňovač momentálne spracováva**1 zručnosť za minútu**
- PR so 40 natívnymi novými zručnosťami môže preto zostať vo fronte zosilňovača asi 40 minút
- PR ukazuje, že práca ako prebiehajúca CI plus komentár k pokroku, ktorý posúva zručnosti vpred

Prispievateľ nemusí spúšťať vylepšenie manuálne.## No-Loop Rule For `skills_omni/`

Ošetrený povrch je zámerne jednosmerný:

- natívny vstup vstupuje cez `skills/`
- súkromné recenzie vylepšovačov natívneho vstupu
- kurátorský výstup je navrhnutý do `skills_omni/`
- `skills_omni/` sa už nikdy nepovažuje za prirodzený príjem
- neskoršie natívne aktualizácie stále znova vstupujú cez `skills/` a po opätovnom spracovaní nahrádzajú súkromný vylepšený základ

Úložisko teraz presadzuje túto hranicu:

- priame verejné PR, ktoré modifikujú `skills_omni/`, sú odmietnuté
- akceptujú sa tam iba sprievodné PR autorizované pre automatizáciu z rodiny pobočiek `skills-omni/pr-*`
- zmiešané PR, ktoré sa pokúšajú zmeniť súčasne `skills/` aj `skills_omni/`, sú odmietnuté## Automatic Versioning After Merge

Zlúčenia nesúce zručnosti do `main` teraz automaticky spúšťajú pracovný postup vydania úložiska.

Aktuálna politika verzie balíka:

- oprava sa zvýši o `+1` pre každé kvalifikačné zlúčenie
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- po `.10` sa balík presunie na ďalšiu vedľajšiu a obnoví opravu
- "0.0.10" → "0.1.0".
- "0.1.10" → "0.2.0".

Cesty spúšťača aktuálneho vydania:

- „zručnosti/**“.
- `skills_omni/**`
- `data/bundles.json`

Táto úloha automatického uvoľnenia:

1. vypočíta ďalšiu verziu balíka z `package.json`
2. Narazí na `package.json` a `package-lock.json`
3. regeneruje `metadata.json`, `skills_index.json`, `dist/` a `docs/CATALOG.md`
4. prevádzkuje prísne overovací kanál
5. potvrdí zmenu verzie späť na `main`
6. vytvorí značku Git pre novú verziu
7. zverejňuje artefakty npm a GitHub Release

Dôležitá poznámka k uvedeniu:

- GitHub zaregistruje nový súbor pracovného toku ako aktívny pracovný tok úložiska až potom, čo tento súbor dosiahne predvolenú vetvu.
- Kým sa `Enhance PR Skills` nedostane na `main`, prispievatelia si môžu prečítať zdokumentovaný proces, ale GitHub zatiaľ nevykoná tento pracovný postup automaticky na verejných PR.
- Po zlúčení pracovného toku do „hlavného“ sa správanie opísané vyššie stane predvolenou cestou prijímania budúcich natívnych PR zručností.## Native vs Enhanced

Toto úložisko má teraz dva odlišné povrchy:

- „zručnosti/“.
  Natívny príjem. Tým sa zachová pôvodný príspevok tak, ako bol predložený.
- `skills_omni/`
  Omni-vylepšený odvodený výstup navrhnutý automatizáciou a udržiavaný tímom Omni Skills Team.

Pravidlá pripisovania pre `skills_omni/`:

- vylepšený derivát sa stáva Omni-udržovaným
- pôvodný prispievateľ a pôvodná natívna zručnosť zostávajú pripočítané
- každý vylepšený adresár uchováva súbor `ATTRIBUTION.md` s upstream cestou, PR, autorom a kontextom zdroja
- každý vylepšený adresár je len kurátorským výstupom a nesmie byť znovu zaslaný do natívnej cesty prijímania zosilňovača
- od každého vylepšeného adresára sa očakáva, že bude výstupom v anglickom jazyku, a to aj v prípade, že pôvodný pôvodný zdroj nebol## Manual Maintainer Commands

Automatizácia pokrýva bežný príjem PR, ale správcovia môžu v prípade potreby stále spustiť súkromný zosilňovač manuálne.

Dávka oproti rozdielu vetvy:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Prehľad jednej zručnosti:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Očakávané výstupy zosilňovača na zručnosť:

- `workspace/incoming/original/<run-id>/<skill>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<id-spustenia>/rewrite-prompt.md`## PR Body Expectations

Orgán PR by mal uviesť:

- aké zručnosti boli pridané alebo vylepšené
- ktoré zväzky alebo pracovné postupy prehlbujú
- aké overenie prebiehalo
- či sa spustil automatický zosilňovač
- či otvoril alebo aktualizoval sprievodné PR `skills_omni/`
- akékoľvek výnimočné poznámky správcu týkajúce sa pripisovania alebo následného čistenia## Reviewer Checklist

- natívny príjem je legitímny a nie škodlivý
- vygenerované metadáta a manifesty boli obnovené
- aktualizácie balíkov sú zámerné
- verejná validácia a stavebné výstupy sú zelené
- komentár stavu zosilňovača zodpovedá skutočne zmeneným zručnostiam a konečnému stavu výsledku
- každý sprievodný PR `skills_omni/` správne zachováva uvedenie zdroja## Example PR Scope

Silný príklad PR môže pridať tematický súbor, ako napríklad:

- jedna pozorovateľnosť alebo zručnosť DevOps
- jeden incident alebo bezpečnostná zručnosť
- jedna schopnosť hodnotenia AI alebo nabádania

To je dostatočne veľké na to, aby sa uplatňoval skórovač, automatický zlepšovač, tok publikovania `skills_omni/`, balíky a model pripisovania bez toho, aby sa PR zmenilo na úplné prepísanie katalógu.