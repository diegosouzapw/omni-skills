# Skill PR Workflow (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Dette er den kanoniske depotflyten for pull-forespørsler som legger til eller vesentlig oppgraderer én eller flere innfødte ferdigheter.

Bruk den når:

- legge til en ny ferdighet under `ferdigheter/`
- å utdype en bunt med nye domeneferdigheter
- sender en større utvidelse av støttepakken
- validere en filial med den private forsterkeren før vedlikeholdere slår den sammen## Target Outcome

En sterk innfødt ferdighet PR lander med:

- en innfødt ferdighet under `ferdigheter/`
- nok innhold til at den offentlige validatoren kan klassifisere og indeksere det
- bestå offentlig validering og tester
- automatisk forsterkerbehandling under PR
- en oppfølging av `skills_omni/` PR når forbedrede derivater publiseres
- native inntak bevart på originalspråket ved behov
- kuratert forbedret utgang skrevet om til engelsk
- en enveis native-to-kuratert flyt som ikke mater `skills_omni/` tilbake til native enhancer-inntaket## Enhancer Outcome States

Den offentlige PR-forsterkeren rapporterer nå fire vedlikeholder-synlige tilstander:

- `fullført`
  Den forbedrede derivativet ble generert rent og er kvalifisert for ledsagende `skills_omni/`-publisering.
- `degradert`
  Forsterkeren ble ferdig, men den brukte en reservebane eller ga advarsler. Vedlikeholdsvurdering forventes fortsatt før derivatet behandles som sunt.
- `blokkert`
  Kjøringen ble stoppet av infrastruktur- eller valideringsproblemer, for eksempel hosted OmniRoute preflight-feil eller en kandidatvalideringsfeil som skulle forhindre publisering.
- 'mislyktes'
  Forsterkeren traff en uventet kjøretidsfeil og trenger vedlikeholdsundersøkelse.## Recommended Branch Shape

Lag en fokusert gren:```bash
git checkout -b feat/<short-skill-theme>
```

Eksempler:

- `feat/hendelse-observasjons-evaler`
- `feat/devops-skill-pack`
- `feat/security-skill-pack`## Native Intake Rules

Den offentlige inntaksflaten er bevisst tillatt.

Minimum:```text
skills/<skill>/
└── SKILL.md
```

Anbefalt, men ikke lenger nødvendig for inntak:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Det innfødte bidraget kan være grovt, ufullstendig eller utenfor den vanlige støttepakkestandarden. Det er bevisst. `ferdigheter/` er den opprinnelige inntaksoverflaten, ikke den kurerte avledede overflaten.

Språkpolicy:

- innfødt inntak under `ferdigheter/` kan skrives på alle språk
- Forsterkeren beholder det opprinnelige øyeblikksbildet slik det er sendt inn for herkomst
- den kurerte avledningen under `skills_omni/` må alltid skrives på engelsk

Den strengere redaksjonelle linjen gjelder nå for:

- de genererte metadataene og sikkerhetskontrollene
- vurderingen av den private forsterkeren
- det oppfølgingskuraterte derivatet under `skills_omni/`## Authoring Sequence

1. Opprett `skills/<skill>/SKILL.md`.
2. Legg til frontmatter hvis du kan, men manglende eller ufullstendig frontmatter blokkerer ikke lenger naturlig inntak av seg selv.
3. Legg til `agenter/`, `referanser/`, `examples/` og `scripts/` når du allerede har dem.
4. Oppdater `data/bundles.json` hvis ferdigheten utdyper en eksisterende bunt.
5. Åpne PR. Repo-automatiseringen gjør nå resten.## Validation Sequence

Bidragsytere kan kjøre denne nøyaktige sekvensen før de åpner PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Hvis endringen også påvirker kjøretid eller pakkeatferd, kjør også:```bash
npm run smoke
```

## What Happens Automatically During the PR

Når en PR åpnes eller synkroniseres og den bare berører native ferdighetsinntaksfiler under `skills/` pluss valgfri `data/bundles.json`, utløser den offentlige repoen nå den private forsterkeren automatisk.

Nåværende automatisert flyt:

1. Den offentlige arbeidsflyten "Validate Skills" kjører på PR og sjekker validering, build, genererte artefakter og tester.
2. Den offentlige arbeidsflyten "Enhance PR Skills" starter parallelt og behandler de endrede innfødte ferdighetene en etter en i "live"-modus.
3. Forsterkeren leser den opprinnelige ferdigheten fra `skills/`, undersøker gjeldende beste praksis og skriver en anmeldt forbedret kandidat i det private arbeidsområdet.
4. Forsterkeren beholder øyeblikksbildet av oppstrøms inntak på originalspråket når det er nødvendig, men omskriver den kurerte utgangen på engelsk.
5. Forsterkerens innlegg går tilbake til kilde-PR.
6. Forsterkeren oppdaterer PR-statuskommentaren etter hver behandlet ferdighet med batchtotaler og siste tilstand.
7. Når den er ferdig, materialiserer den den forbedrede derivaten til `skills_omni/` og åpner eller oppdaterer en følgesvenn-PR i den offentlige repoen kun for `fullførte` og `degraderte` utganger.
8. Etter at PR-en er slått sammen til "main", behandler den private repo-bevisste poller eventuelle endrede opprinnelige ferdigheter, oppdaterer "workspace/enhanced/skills/<skill>/", og holder den private forbedrede grunnlinjen på linje med den siste offentlige opprinnelige kilden.
9. Etter sammenslåingen støter arbeidsflyten for offentlig utgivelse npm-pakkeversjonen, regenererer katalogartefakter, publiserer en utgivelse og merker den nye versjonen automatisk.

Satsgrense:

- PR-forsterkeren behandler for øyeblikket**1 ferdighet per minutt**
- en PR med 40 innfødte nye ferdigheter kan derfor holde seg i enhancer-køen i omtrent 40 minutter
- PR viser at det fungerer som et pågående CI-løp pluss en fremdriftskommentar som fremmer ferdighet for ferdighet

Bidragsyteren trenger ikke å kjøre forsterkeren manuelt.## No-Loop Rule For `skills_omni/`

Den kurerte overflaten er med hensikt enveis:

- innfødte inndata kommer inn gjennom `ferdigheter/`
- den private forsterkeren vurderer den innfødte input
- kurert utgang foreslås i `skills_omni/`
- `skills_omni/` blir aldri behandlet som naturlig inntak igjen
- senere native oppdateringer kommer fortsatt inn igjen gjennom `skills/` og erstatter den private forbedrede grunnlinjen etter reprosessering

Depotet håndhever nå denne grensen:

- direkte offentlige PR-er som endrer `skills_omni/`, avvises
- bare automasjonsforfattede ledsager-PR-er fra `skills-omni/pr-*`-grenfamilien aksepteres der
- blandede PR-er som prøver å endre både "ferdigheter/" og "ferdigheter_omni/" på en gang, blir avvist## Automatic Versioning After Merge

Ferdighetsbærende smelter sammen til "hoved" og utløser nå arbeidsflyten for utgivelsen av depotet automatisk.

Gjeldende pakkeversjonspolicy:

- Patch øker med `+1` for hver kvalifiserende sammenslåing
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- etter `.10` ruller pakken til neste mindre og tilbakestiller patchen
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Utløserbaner for nåværende utgivelse:

- `ferdigheter/**`
- `ferdigheter_omni/**`
- `data/bundles.json`

Den automatiske utgivelsesjobben:

1. beregner neste pakkeversjon fra `package.json`
2. bumper `package.json` og `package-lock.json`
3. regenererer `metadata.json`, `skills_index.json`, `dist/` og `docs/CATALOG.md`
4. kjører pipeline for streng utgivelsesbekreftelse
5. setter versjonsbump tilbake til "main".
6. oppretter en Git-tag for den nye versjonen
7. publiserer npm og GitHub Release-artefakter

Viktig utrullingsmerknad:

- GitHub registrerer bare en ny arbeidsflytfil som en aktiv arkivarbeidsflyt etter at filen når standardgrenen.
- Inntil `Enhance PR Skills` lander på `main`, kan bidragsytere lese den dokumenterte prosessen, men GitHub vil ikke kjøre den arbeidsflyten automatisk på offentlige PR-er ennå.
- Etter at arbeidsflyten er slått sammen til "main", blir oppførselen beskrevet ovenfor standard inntaksvei for fremtidige innfødte ferdighets-PR-er.## Native vs Enhanced

Denne repoen har nå to distinkte overflater:

- `ferdigheter/`
  Native inntak. Dette bevarer det opprinnelige bidraget slik det er sendt inn.
- `ferdigheter_omni/`
  Omni-forbedret derivatutgang foreslått av automatisering og vedlikeholdt av Omni Skills Team.

Attribusjonsregler for `skills_omni/`:

- den forbedrede derivativet blir Omni-vedlikeholdt
- den opprinnelige bidragsyteren og oppstrøms opprinnelige ferdigheter forblir kreditert
- hver forbedrede katalog beholder en `ATTRIBUTION.md`-fil med oppstrømsbanen, PR, forfatter og kildekontekst
- hver forbedrede katalog er kun kuratert utdata og må ikke sendes inn på nytt til den opprinnelige enhancer-inntaksbanen
- Hver forbedret katalog forventes å være engelskspråklig utdata selv når oppstrøms opprinnelige kilde ikke var det## Manual Maintainer Commands

Automatiseringen dekker normalt PR-inntak, men vedlikeholdere kan fortsatt kjøre den private forsterkeren manuelt ved behov.

Batch mot en grendiff:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Enkeltferdighetsanmeldelse:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Forventede forbedringsutganger per ferdighet:

- `arbeidsområde/innkommende/original/<run-id>/<ferdighet>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

PR-organet bør opplyse:

- hvilke ferdigheter som ble lagt til eller oppgradert
- hvilke bunter eller arbeidsflyter de utdyper
- hvilken validering kjørte
- om den automatiske forsterkeren kjørte
- om den åpnet eller oppdaterte en `skills_omni/`-kompanjong-PR
- eventuelle eksepsjonelle vedlikeholdsnotater om attribusjon eller oppfølgingsopprydding## Reviewer Checklist

- innfødt inntak er legitimt og ikke-ondsinnet
- genererte metadata og manifester ble oppdatert
- pakkeoppdateringer er tilsiktet
- Offentlig validering og byggeresultater er grønne
- Forsterkerstatuskommentaren samsvarer med de faktiske endrede ferdighetene og sluttresultatet
- enhver `skills_omni/` følgesvenn-PR bevarer attribusjonen riktig## Example PR Scope

Et sterkt eksempel på PR kan legge til et tematisk sett som:

- én observerbarhet eller DevOps-ferdighet
- én hendelse eller sikkerhetsferdighet
- én AI-evaluering eller oppfordringsevne

Det er stort nok til å trene målscoreren, den automatiske forsterkeren, «skills_omni/»-publiseringsflyten, bunter og attribusjonsmodellen uten å gjøre PR til en fullstendig katalogomskriving.