# Skill PR Workflow (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Dette er det kanoniske repository flow for pull-anmodninger, der tilføjer eller væsentligt opgraderer en eller flere native færdigheder.

Brug det når:

- tilføje en ny færdighed under `færdigheder/`
- uddybe et bundt med nye domænefærdigheder
- forsendelse af en større supportpakkeudvidelse
- validering af en filial med den private forstærker, før vedligeholdere slår den sammen## Target Outcome

En stærk indfødt færdighed PR lander med:

- en indfødt færdighed under `færdigheder/`
- nok indhold til, at den offentlige validator kan klassificere og indeksere det
- bestå offentlig validering og prøver
- automatisk forstærkerbehandling under PR
- en opfølgende `skills_omni/` PR, når forbedrede derivater offentliggøres
- Native indtag bevares på originalsproget, når det er nødvendigt
- kurateret forbedret output omskrevet til engelsk
- et envejs native-to-curated flow, der ikke fører `skills_omni/` tilbage til indtaget af native enhancers## Enhancer Outcome States

Den offentlige PR-forstærker rapporterer nu fire vedligeholder-synlige tilstande:

- 'afsluttet'
  Den forbedrede afledte blev genereret rent og er berettiget til ledsagende `skills_omni/`-udgivelse.
- `nedbrudt`
  Forstærkeren blev færdig, men den brugte en fallback-sti eller gav advarsler. Vedligeholdelsesgennemgang forventes stadig, før derivatet behandles som sundt.
- 'blokeret'
  Kørslen blev stoppet af infrastruktur- eller valideringsproblemer, såsom hosted OmniRoute preflight-fejl eller en kandidatvalideringsfejl, der skulle forhindre offentliggørelse.
- 'mislykkedes'
  Forstærkeren ramte en uventet runtime-fejl og har brug for en vedligeholdelsesundersøgelse.## Recommended Branch Shape

Opret en fokuseret gren:```bash
git checkout -b feat/<short-skill-theme>
```

Eksempler:

- `feat/incidence-observability-evals`
- `feat/devops-skill-pack`
- `feat/security-skill-pack`## Native Intake Rules

Den offentlige indtagsflade er bevidst tolerant.

Minimum:```text
skills/<skill>/
└── SKILL.md
```

Anbefalet, men ikke længere påkrævet til indtagelse:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Det oprindelige bidrag kan være groft, ufuldstændigt eller uden for den normale supportpakkestandard. Det er bevidst. `færdigheder/` er den native indtagsoverflade, ikke den kurerede afledte overflade.

Sprogpolitik:

- Native indtag under `færdigheder/` kan skrives på ethvert sprog
- Forstærkeren beholder det oprindelige snapshot som indsendt til herkomst
- den kurerede afledte under `skills_omni/` skal altid skrives på engelsk

Den skærpede redaktionelle bar gælder nu for:

- de genererede metadata og sikkerhedstjek
- den private forstærker anmeldelse
- den opfølgende kurerede afledte under `skills_omni/`## Authoring Sequence

1. Opret `skills/<skill>/SKILL.md`.
2. Tilføj frontmatter, hvis du kan, men manglende eller ufuldstændig frontmatter blokerer ikke længere det oprindelige indtag af sig selv.
3. Tilføj `agents/`, `references/`, `examples/` og `scripts/`, når du allerede har dem.
4. Opdater `data/bundles.json`, hvis færdigheden uddyber en eksisterende bundt.
5. Åbn PR. Repo-automatiseringen klarer nu resten.## Validation Sequence

Bidragydere kan køre denne nøjagtige sekvens, før de åbner PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Hvis ændringen også påvirker kørselstid eller pakkeadfærd, skal du også køre:```bash
npm run smoke
```

## What Happens Automatically During the PR

Når en PR åbner eller synkroniserer, og den kun berører native færdighedsindtagsfiler under `skills/` plus valgfri `data/bundles.json`, udløser den offentlige repo nu den private enhancer automatisk.

Aktuelt automatiseret flow:

1. Den offentlige 'Validate Skills'-workflow kører på PR og kontrollerer validering, build, genererede artefakter og tests.
2. Den offentlige 'Enhance PR Skills' arbejdsgang starter parallelt og behandler de ændrede indfødte færdigheder en efter en i 'live' mode.
3. Forstærkeren læser den oprindelige færdighed fra `skills/`, undersøger aktuelle bedste praksisser og skriver en anmeldt forbedret kandidat i det private arbejdsområde.
4. Forstærkeren beholder opstrøms indtagssnapshot på dets originalsprog, når det er nødvendigt, men omskriver det kurerede output på engelsk.
5. Forstærkerens indlæg går tilbage til kilde-PR.
6. Forstærkeren opdaterer PR-statuskommentaren efter hver behandlet færdighed med batchtotaler og den seneste tilstand.
7. Når den er færdig, materialiserer den den forbedrede afledte til `skills_omni/` og åbner eller opdaterer en ledsagende PR i den offentlige repo for kun `fuldførte` og `forringede` output.
8. Efter at PR er slået sammen til "main", genbehandler den private repo-bevidste poller alle ændrede indfødte færdigheder, genopfrisker "workspace/enhanced/skills/<skill>/", og holder den private forbedrede baseline på linje med den seneste offentlige oprindelige kilde.
9. Efter fletningen støder den offentlige udgivelsesworkflow til npm-pakkeversionen, regenererer katalogartefakter, udgiver en udgivelse og mærker den nye version automatisk.

Satsgrænse:

- PR-forstærkeren behandler i øjeblikket**1 færdighed i minuttet**
- en PR med 40 indfødte nye færdigheder kan derfor blive i enhancer-køen i omkring 40 minutter
- PR'en viser, at arbejdet som et igangværende CI-løb plus en fremskridtskommentar, der fremmer færdighed for færdighed

Bidragyderen behøver ikke at køre forstærkeren manuelt.## No-Loop Rule For `skills_omni/`

Den kurerede overflade er bevidst envejs:

- native input kommer ind gennem `skills/`
- den private forstærker anmelder det native input
- kurateret output foreslås i `skills_omni/`
- `skills_omni/` behandles aldrig som naturligt indtag igen
- senere indbyggede opdateringer kommer stadig ind igen gennem `skills/` og erstatter den private forbedrede baseline efter genbehandling

Depotet håndhæver nu denne grænse:

- direkte offentlige PR'er, der ændrer `skills_omni/`, afvises
- kun automatiseringsautoriserede ledsagende PR'er fra `skills-omni/pr-*`-grenfamilien accepteres der
- blandede PR'er, der forsøger at ændre både `skills/` og `skills_omni/` på én gang, afvises## Automatic Versioning After Merge

Færdighedsbærende fusionerer til "main" og udløser nu repository release workflow automatisk.

Aktuel pakkeversionspolitik:

- patch-stigninger med `+1` for hver kvalificerende fletning
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- efter `.10` ruller pakken til den næste minor og nulstiller patch
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Aktuelle udgivelsesudløserstier:

- `færdigheder/**`
- `skills_omni/**`
- `data/bundles.json`

Det automatiske frigivelsesjob:

1. beregner den næste pakkeversion fra `package.json`
2. bumps `package.json` og `package-lock.json`
3. genskaber `metadata.json`, `skills_index.json`, `dist/` og `docs/CATALOG.md`
4. kører den strenge udgivelsesbekræftelsespipeline
5. begår versionsbump tilbage til 'main'
6. opretter et Git-tag til den nye version
7. udgiver npm og GitHub Release artefakter

Vigtig udrulningsnote:

- GitHub registrerer kun en ny workflow-fil som en aktiv repository workflow, efter at den fil når standardgrenen.
- Indtil `Enhance PR Skills` lander på `main`, kan bidragydere læse den dokumenterede proces, men GitHub vil ikke udføre det workflow automatisk på offentlige PR'er endnu.
- Efter at arbejdsgangen er flettet ind i "main", bliver den ovenfor beskrevne adfærd standardindtagsstien for fremtidige indfødte færdigheds-PR'er.## Native vs Enhanced

Denne repo har nu to adskilte overflader:

- `færdigheder/`
  Native indtag. Dette bevarer det oprindelige bidrag som indsendt.
- `skills_omni/`
  Omni-forbedret afledt output foreslået af automatisering og vedligeholdt af Omni Skills Team.

Tilskrivningsregler for `skills_omni/`:

- den forbedrede afledte bliver Omni-vedligeholdt
- den oprindelige bidragyder og opstrøms oprindelige færdighed forbliver krediteret
- hver forbedret mappe beholder en `ATTRIBUTION.md`-fil med opstrømsstien, PR, forfatter og kildekontekst
- hver forbedret mappe er kun kurateret output og må ikke genindsendes til den native enhancer-indtagssti
- hver forbedret mappe forventes at være engelsksproget output, selv når den oprindelige opstrøms kilde ikke var det## Manual Maintainer Commands

Automatiseringen dækker normalt PR-indtag, men vedligeholdere kan stadig køre den private enhancer manuelt, når det er nødvendigt.

Batch mod en grendiff:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Single-skill anmeldelse:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Forventede enhancer-output pr. færdighed:

- `workspace/incoming/original/<run-id>/<skill>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

PR-organet skal oplyse:

- hvilke færdigheder der blev tilføjet eller opgraderet
- hvilke bundter eller arbejdsgange de uddyber
- hvilken validering kørte
- om den automatiske forstærker kørte
- om det åbnede eller opdaterede en `skills_omni/` companion PR
- eventuelle usædvanlige vedligeholderbemærkninger om tilskrivning eller opfølgende oprydning## Reviewer Checklist

- Native indtag er legitimt og ikke-ondsindet
- genererede metadata og manifester blev opdateret
- pakkeopdateringer er bevidste
- Offentlig validering og byggeoutput er grønne
- Forstærkerstatuskommentaren matcher de faktiske ændrede færdigheder og endelige resultattilstand
- enhver `skills_omni/` ledsager PR bevarer tilskrivningen korrekt## Example PR Scope

Et stærkt eksempel på PR kan tilføje et tematisk sæt som:

- én observerbarhed eller DevOps-færdighed
- én hændelse eller sikkerhedsfærdighed
- én AI-evaluering eller tilskyndelsesevne

Det er stort nok til at udøve scoreren, den automatiske forstærker, `skills_omni/` publiceringsflow, bundter og tilskrivningsmodellen uden at omdanne PR til en komplet katalogomskrivning.