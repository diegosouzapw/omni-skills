# Skill PR Workflow (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Acesta este fluxul de depozit canonic pentru cererile de extragere care adaugă sau actualizează substanțial una sau mai multe abilități native.

Folosiți-l când:

- adăugarea unei noi abilități sub `skills/`
- aprofundarea unui pachet cu noi competențe de domeniu
- livrarea unei expansiuni de pachet de suport mai mare
- validarea unei ramuri cu amplificatorul privat înainte ca întreținătorii să o fuzioneze## Target Outcome

O abilitate nativă puternică de PR ajunge cu:

- o abilitate nativă sub `skills/`
- conținut suficient pentru ca validatorul public să îl clasifice și să îl indexeze
- promovarea validării publice și a testelor
- procesarea automată a intensificatorului în timpul PR
- o continuare a `skills_omni/` PR atunci când sunt publicate derivate îmbunătățite
- aportul nativ păstrat în limba sa originală atunci când este necesar
- ieșire îmbunătățită organizată, rescrisă în engleză
- un flux unidirecțional de la nativ la curatat, care nu alimentează `skills_omni/` înapoi în aportul de amplificator nativ## Enhancer Outcome States

Amplificatorul public de PR raportează acum patru stări vizibile de întreținător:

- `terminat`
  Derivatul îmbunătățit a fost generat în mod curat și este eligibil pentru publicarea însoțitoare `skills_omni/`.
- `degradat`
  Amplificatorul s-a terminat, dar a folosit o cale de rezervă sau a produs avertismente. Revizuirea menținătorului este încă așteptată înainte de a trata derivatul ca sănătos.
- `blocat`
  Execuția a fost oprită de probleme de infrastructură sau de validare, cum ar fi eșecul găzduirii OmniRoute preflight sau un eșec de validare a candidatului care ar trebui să împiedice publicarea.
- `eșuat`
  Amplificatorul a lovit o eroare de rulare neașteptată și are nevoie de investigație de întreținere.## Recommended Branch Shape

Creați o ramură concentrată:```bash
git checkout -b feat/<short-skill-theme>
```

Exemple:

- `evaluări-observabilitate-feat/incident-observability`
- `feat/devops-skill-pack`
- `pachet-feat/security-skill-pack`## Native Intake Rules

Suprafața de admisie publică este în mod intenționat permisivă.

Minim:```text
skills/<skill>/
└── SKILL.md
```

Recomandat, dar nu mai este necesar pentru aport:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Contribuția nativă poate fi brută, incompletă sau în afara standardului normal al pachetului de asistență. Asta este deliberat. `skills/` este suprafața de aport nativă, nu suprafața derivată curată.

Politica lingvistică:

- aportul nativ la „aptitudini/” poate fi scris în orice limbă
- amplificatorul păstrează instantaneul nativ așa cum este transmis pentru proveniență
- derivatul curatat sub `skills_omni/` trebuie să fie întotdeauna scris în engleză

Bara editorială mai strictă se aplică acum pentru:

- metadatele generate și verificările de securitate
- revizuirea amplificatorului privat
- derivatul curatat de urmărire sub `skills_omni/`## Authoring Sequence

1. Creați `skills/<skill>/SKILL.md`.
2. Adăugați frontmatter dacă puteți, dar frontmatter-ul lipsă sau incomplet nu mai blochează aportul nativ de la sine.
3. Adăugați `agents/`, `references/`, `examples/` și `scripts/` când le aveți deja.
4. Actualizați `data/bundles.json` dacă abilitățile aprofundează un pachet existent.
5. Deschideți PR. Automatizarea repo face acum restul.## Validation Sequence

Colaboratorii pot rula această secvență exactă înainte de a deschide PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Dacă modificarea afectează și timpul de execuție sau comportamentul de ambalare, rulați și:```bash
npm run smoke
```

## What Happens Automatically During the PR

Când un PR se deschide sau se sincronizează și atinge doar fișierele native de aport de abilități sub `skills/` plus opțional `data/bundles.json`, repo-ul public declanșează acum amplificatorul privat automat.

Flux curent automat:

1. Fluxul de lucru public „Validare abilități” rulează pe PR și verifică validarea, construirea, artefactele generate și testele.
2. Fluxul de lucru public `Îmbunătățirea abilităților de PR` începe în paralel și procesează abilitățile native modificate una câte una în modul `live`.
3. Amplificatorul citește abilitățile native din `skills/`, cercetează cele mai bune practici actuale și scrie un candidat îmbunătățit revizuit în spațiul de lucru privat.
4. Amplificatorul păstrează instantaneul de admisie din amonte în limba sa originală atunci când este necesar, dar rescrie rezultatul organizat în engleză.
5. Postările de îmbunătățire progresează înapoi la PR sursă.
6. Amplificatorul actualizează comentariul privind starea PR după fiecare abilitate procesată cu totalul lotului și cea mai recentă stare.
7. Când se termină, materializează derivatul îmbunătățit în `skills_omni/` și deschide sau actualizează un PR însoțitor în repo public numai pentru ieșirile `terminate` și `degradate`.
8. După ce PR este fuzionat în `principal`, poller-ul privat conștient de repo reprocesează orice abilități native modificate, reîmprospătează `workspace/enhanced/skills/<skill>/` și păstrează linia de bază îmbunătățită privată aliniată cu cea mai recentă sursă nativă publică.
9. După îmbinare, fluxul de lucru pentru lansarea publică elimină versiunea pachetului npm, regenerează artefactele de catalog, publică o versiune și etichetează noua versiune automat.

Limita ratei:

- intensificatorul PR procesează în prezent**1 abilitate pe minut**
- un PR cu 40 de abilități native noi poate rămâne, prin urmare, în coada de amplificare timp de aproximativ 40 de minute
- PR arată că lucrarea ca rulare CI în desfășurare plus un comentariu de progres care avansează abilitate cu abilitate

Contribuitorul nu trebuie să ruleze manual enhancer.## No-Loop Rule For `skills_omni/`

Suprafața curată este în mod intenționat unidirecțională:

- inputul nativ intră prin `skills/`
- amplificatorul privat analizează această intrare nativă
- ieșirea organizată este propusă în `skills_omni/`
- `skills_omni/` nu este niciodată tratat ca aport nativ din nou
- actualizările native ulterioare încă revin prin `skills/` și înlocuiesc linia de bază îmbunătățită privată după reprocesare

Depozitul aplică acum această limită:

- PR-urile publice directe care modifică `skills_omni/` sunt respinse
- sunt acceptate acolo numai PR-uri însoțitoare din familia de ramuri `skills-omni/pr-*` create de automatizare
- PR-urile mixte care încearcă să schimbe atât `skills/` cât și `skills_omni/` sunt respinse## Automatic Versioning After Merge

Îmbinările cu abilități cu „principal” declanșează acum fluxul de lucru pentru lansarea depozitului în mod automat.

Politica actuală privind versiunea pachetului:

- patch-uri crește cu `+1` pentru fiecare îmbinare calificată
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- după `.10`, pachetul trece la următorul minor și resetează patch-ul
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Căile de declanșare a lansării curente:

- `deprinderi/**`
- `skills_omni/**`
- `data/bundles.json`

Acea sarcină de eliberare automată:

1. calculează următoarea versiune de pachet din `package.json`
2. denivelări `package.json` și `package-lock.json`
3. regenerează `metadata.json`, `skills_index.json`, `dist/` și `docs/CATALOG.md`
4. rulează conducta de verificare strictă a eliberării
5. commite versiunea bump înapoi la `principal`
6. creează o etichetă Git pentru noua versiune
7. publică artefacte npm și GitHub Release

Notă importantă de lansare:

- GitHub înregistrează un nou fișier de flux de lucru ca flux de lucru de depozit activ numai după ce acel fișier ajunge în ramura implicită.
- Până când `Enhance PR Skills` ajunge pe `principal`, colaboratorii pot citi procesul documentat, dar GitHub nu va executa încă fluxul de lucru automat pe PR-urile publice.
- După ce fluxul de lucru este îmbinat în „principal”, comportamentul descris mai sus devine calea implicită de admisie pentru viitoarele PR-uri de competențe native.## Native vs Enhanced

Acest repo are acum două suprafețe distincte:

- `aptitudini/`
  Aportul nativ. Aceasta păstrează contribuția inițială așa cum a fost transmisă.
- `skills_omni/`
  Ieșire derivată Omni-enhanced propusă de automatizare și întreținută de Omni Skills Team.

Reguli de atribuire pentru `skills_omni/`:

- derivatul îmbunătățit devine Omni-menținut
- contribuitorul inițial și aptitudinile native din amonte rămân creditate
- fiecare director îmbunătățit păstrează un fișier `ATTRIBUTION.md` cu calea în amonte, PR, autor și contextul sursă
- fiecare director îmbunătățit este numai ieșire curată și nu trebuie retrimis în calea de admisie a amplificatorului nativ
- se așteaptă ca fiecare director îmbunătățit să fie în limba engleză chiar și atunci când sursa nativă din amonte nu a fost## Manual Maintainer Commands

Automatizarea acoperă aportul normal de PR, dar întreținerii pot încă rula amplificatorul privat manual atunci când este necesar.

Lot față de o diferență de ramură:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Examinare cu o singură abilitate:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Rezultatele de îmbunătățire așteptate pe abilitate:

- `workspace/incoming/original/<run-id>/<skill>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

Organismul de PR ar trebui să precizeze:

- ce abilități au fost adăugate sau îmbunătățite
- ce pachete sau fluxuri de lucru aprofundează
- ce validare a rulat
- dacă a funcționat amplificatorul automat
- dacă a deschis sau a actualizat un PR însoțitor `skills_omni/`
- orice notă excepțională a menținătorului despre atribuire sau curățare ulterioară## Reviewer Checklist

- aportul nativ este legitim și non-raucios
- metadatele generate și manifestele au fost reîmprospătate
- actualizările pachetului sunt intenționate
- validarea publică și rezultatele de construcție sunt ecologice
- comentariul privind starea amplificatorului se potrivește cu abilitățile reale modificate și cu starea rezultatului final
- orice PR însoțitor `skills_omni/` păstrează atribuirea corect## Example PR Scope

Un exemplu puternic de PR poate adăuga un set tematic precum:

- o abilitate de observabilitate sau DevOps
- un incident sau abilitate de securitate
- o abilitate de evaluare sau de incitare AI

Este suficient de mare pentru a exercita scorul, amplificatorul automat, fluxul de publicare `skills_omni/`, pachetele și modelul de atribuire, fără a transforma PR într-o rescrie completă a catalogului.