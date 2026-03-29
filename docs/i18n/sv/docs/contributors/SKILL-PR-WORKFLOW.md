# Skill PR Workflow (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Detta är det kanoniska arkivflödet för pull-förfrågningar som lägger till eller väsentligt uppgraderar en eller flera inhemska färdigheter.

Använd den när:

- lägga till en ny färdighet under `färdigheter/`
- att fördjupa en bunt med nya domänkunskaper
- skicka en större supportpaket-expansion
- validera en filial med den privata förstärkaren innan underhållare slår samman den## Target Outcome

En stark inhemsk skicklighet PR landar med:

- en infödd färdighet under `färdigheter/`
- tillräckligt med innehåll för den offentliga valideraren att klassificera och indexera det
- godkänd offentlig validering och tester
- automatisk förstärkarbearbetning under PR
- en uppföljning av `skills_omni/` PR när förbättrade derivat publiceras
- inhemskt intag bevarat på originalspråket vid behov
- Kurerad förbättrad produktion omskriven till engelska
- ett enkelriktat inbyggt till kurerat flöde som inte matar tillbaka `skills_omni/` till intag av naturligt förstärkare## Enhancer Outcome States

Den offentliga PR-förstärkaren rapporterar nu fyra tillstånd som är synliga för underhållare:

- `avslutad`
  Den förbättrade derivatan genererades rent och är kvalificerad för kompletterande `skills_omni/`-publicering.
- `försämrad`
  Förstärkaren avslutades, men den använde en reservväg eller gav varningar. Underhållarens granskning förväntas fortfarande innan derivatet behandlas som hälsosamt.
- "blockerad".
  Körningen stoppades av infrastruktur- eller valideringsproblem, som värdfel i OmniRoute preflight eller ett kandidatvalideringsfel som borde förhindra publicering.
- "misslyckades".
  Förstärkaren träffade ett oväntat körtidsfel och behöver underhållsundersökning.## Recommended Branch Shape

Skapa en fokuserad gren:```bash
git checkout -b feat/<short-skill-theme>
```

Exempel:

- `feat/incident-observability-evals`
- `feat/devops-skill-pack`
- `feat/security-skill-pack`## Native Intake Rules

Den offentliga intagsytan är avsiktligt tillåtande.

Minimum:```text
skills/<skill>/
└── SKILL.md
```

Rekommenderas men inte längre krävs för intag:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Det ursprungliga bidraget kan vara grovt, ofullständigt eller utanför den normala supportpaketstandarden. Det är medvetet. `skills/` är den ursprungliga intagsytan, inte den kurerade derivatytan.

Språkpolicy:

- infödda intag under `färdigheter/` kan skrivas på vilket språk som helst
- förstärkaren behåller den ursprungliga ögonblicksbilden som den skickas in för proveniens
- den kurerade derivatan under `skills_omni/` måste alltid skrivas på engelska

Den strängare redaktionella baren gäller nu för:

- genererad metadata och säkerhetskontroller
- recensionen av den privata förstärkaren
- den uppföljningskurerade derivatan under `skills_omni/`## Authoring Sequence

1. Skapa `skills/<skill>/SKILL.md`.
2. Lägg till frontmatter om du kan, men saknad eller ofullständig frontmatter blockerar inte längre inbyggt intag av sig självt.
3. Lägg till `agenter/`, `referenser/`, `exempel/` och `scripts/` när du redan har dem.
4. Uppdatera `data/bundles.json` om färdigheten fördjupar ett befintligt paket.
5. Öppna PR. Repoautomatiseringen sköter nu resten.## Validation Sequence

Bidragsgivare kan köra denna exakta sekvens innan de öppnar PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Om ändringen också påverkar körtid eller paketeringsbeteende, kör också:```bash
npm run smoke
```

## What Happens Automatically During the PR

När en PR öppnas eller synkroniseras och den bara rör infödda färdighetsintagsfiler under `skills/` plus valfria `data/bundles.json`, utlöser nu den offentliga repo den privata förstärkaren automatiskt.

Aktuellt automatiserat flöde:

1. Det offentliga arbetsflödet "Validera färdigheter" körs på PR och kontrollerar validering, byggande, genererade artefakter och tester.
2. Det offentliga arbetsflödet "Enhance PR Skills" startar parallellt och bearbetar de ändrade inhemska färdigheterna en efter en i "live"-läge.
3. Förstärkaren läser den ursprungliga färdigheten från `skills/`, undersöker aktuella bästa praxis och skriver en recenserad förbättrad kandidat i den privata arbetsytan.
4. Förstärkaren behåller ögonblicksbilden för uppströms intag på originalspråket vid behov, men skriver om den kurerade utdata på engelska.
5. Förstärkarens inlägg går tillbaka till käll-PR.
6. Förstärkaren uppdaterar PR-statuskommentaren efter varje bearbetad färdighet med batchsummor och det senaste tillståndet.
7. När den är klar, materialiserar den den förbättrade derivatan till `skills_omni/` och öppnar eller uppdaterar en kompletterande PR i den offentliga repan endast för `fullbordade` och `degraderade` utdata.
8. Efter att PR har slagits samman till `main`, omarbetar den privata repo-medvetna pollaren alla ändrade inhemska färdigheter, uppdaterar `workspace/enhanced/skills/<skill>/` och håller den privata förbättrade baslinjen i linje med den senaste offentliga inhemska källan.
9. Efter sammanslagningen stöter arbetsflödet för den offentliga utgåvan npm-paketversionen, återskapar katalogartefakter, publicerar en utgåva och taggar den nya versionen automatiskt.

Prisgräns:

- PR-förstärkaren bearbetar för närvarande**1 färdighet per minut**
- en PR med 40 infödda nya färdigheter kan därför stanna i enhancer-kön i cirka 40 minuter
- PR visar att det fungerar som en pågående CI-körning plus en framstegskommentar som främjar färdighet för färdighet

Bidragsgivaren behöver inte köra förstärkaren manuellt.## No-Loop Rule For `skills_omni/`

Den kurerade ytan är avsiktligt enkelriktad:

- Inbyggd inmatning kommer in via `skills/`
- den privata förstärkaren granskar den inbyggda ingången
- kurerad utdata föreslås i `skills_omni/`
- `skills_omni/` behandlas aldrig som naturligt intag igen
- senare inbyggda uppdateringar kommer fortfarande in igen genom `skills/` och ersätter den privata förbättrade baslinjen efter ombearbetning

Förvaret upprätthåller nu den gränsen:

- Direkta offentliga PR som ändrar `skills_omni/` avvisas
- endast automationsförfattade följeslagare från grenfamiljen `skills-omni/pr-*` accepteras där
- blandade PR som försöker ändra både `skills/` och `skills_omni/` på en gång avvisas## Automatic Versioning After Merge

Färdighetsbärande slås samman till "main" och utlöser nu arbetsflödet för repository release automatiskt.

Aktuell paketversionspolicy:

- Patch ökar med "+1" för varje kvalificerad sammanslagning
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- efter `.10` rullar paketet till nästa mindre och återställer patchen
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Aktuella utlösningsvägar:

- `färdigheter/**`
- `skills_omni/**`
- `data/bundles.json`

Det där automatiska släppjobbet:

1. beräknar nästa paketversion från `package.json`
2. stöter på `package.json` och `package-lock.json`
3. regenererar `metadata.json`, `skills_index.json`, `dist/` och `docs/CATALOG.md`
4. kör pipeline för strikt releaseverifiering
5. commits version bump tillbaka till `main`
6. skapar en Git-tagg för den nya versionen
7. publicerar artefakter för npm och GitHub Release

Viktig information om lanseringen:

- GitHub registrerar bara en ny arbetsflödesfil som ett aktivt arkivarbetsflöde efter att filen når standardgrenen.
- Tills `Enhance PR Skills` landar på `main` kan bidragsgivare läsa den dokumenterade processen, men GitHub kommer inte att köra det arbetsflödet automatiskt på offentliga PR ännu.
- Efter att arbetsflödet har slagits samman till "main", blir beteendet som beskrivs ovan standardintagsvägen för framtida inhemska kompetens-PRs.## Native vs Enhanced

Denna repo har nu två distinkta ytor:

- `färdigheter/`
  Inhemskt intag. Detta bevarar det ursprungliga bidraget som inlämnat.
- `skills_omni/`
  Omni-förbättrad derivatutdata som föreslås av automatisering och underhålls av Omni Skills Team.

Tillskrivningsregler för `skills_omni/`:

- den förbättrade derivatan blir Omni-maintained
- Den ursprungliga bidragsgivaren och uppströms infödda färdigheter förblir krediterade
- varje förbättrad katalog behåller en `ATTRIBUTION.md`-fil med uppströmssökvägen, PR, författare och källkontext
- varje förbättrad katalog är endast kurerad utdata och får inte skickas in igen till den ursprungliga förstärkarens intagsväg
- Varje förbättrad katalog förväntas vara engelskspråkig även när den ursprungliga källan uppströms inte var det## Manual Maintainer Commands

Automatiseringen täcker normalt PR-intag, men underhållare kan fortfarande köra den privata förstärkaren manuellt vid behov.

Batch mot en grendiff:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Enskildhetsrecension:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Förväntade förstärkarresultat per färdighet:

- `workspace/incoming/original/<run-id>/<skill>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

PR-organet bör ange:

- vilka färdigheter som lagts till eller uppgraderats
- vilka buntar eller arbetsflöden de fördjupar
- vilken validering körde
- om den automatiska förstärkaren körde
- om det öppnade eller uppdaterade en "skills_omni/"-kompanjons-PR
- Eventuella exceptionella anteckningar från underhållaren om tillskrivning eller uppföljning av städning## Reviewer Checklist

- Inhemskt intag är legitimt och icke skadligt
- genererad metadata och manifest uppdaterades
- paketuppdateringar är avsiktliga
- Offentlig validering och byggresultat är gröna
- Förstärkarstatuskommentaren matchar de faktiska ändrade färdigheterna och slutresultatet
- alla "skills_omni/"-kompanjons-PR bevarar tillskrivningen korrekt## Example PR Scope

Ett starkt exempel på PR kan lägga till en tematisk uppsättning som:

- en observerbarhet eller DevOps-färdighet
- en incident eller säkerhetsförmåga
- en AI-utvärdering eller uppmaningsförmåga

Det är tillräckligt stort för att utöva poängsättaren, den automatiska förstärkaren, `skills_omni/` publiceringsflödet, buntarna och tillskrivningsmodellen utan att förvandla PR till en fullständig katalogomskrivning.