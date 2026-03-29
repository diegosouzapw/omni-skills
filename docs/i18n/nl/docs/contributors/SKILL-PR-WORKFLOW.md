# Skill PR Workflow (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Dit is de canonieke repositorystroom voor pull-aanvragen die een of meer native vaardigheden toevoegen of substantieel upgraden.

Gebruik het wanneer:

- een nieuwe vaardigheid toevoegen onder `vaardigheden/`
- het verdiepen van een bundel met nieuwe domeinvaardigheden
- verzending van een grotere uitbreiding van het ondersteuningspakket
- het valideren van een branch met de privé-enhancer voordat de beheerders deze samenvoegen## Target Outcome

Een sterke inheemse vaardigheids-PR komt terecht met:

- een native vaardigheid onder `skills/`
- voldoende inhoud zodat de publieke validator deze kan classificeren en indexeren
- slagen voor publieke validatie en tests
- automatische versterkerverwerking tijdens het PR
- een vervolg-PR `skills_omni/` wanneer verbeterde derivaten worden gepubliceerd
- moedertaalopname, indien nodig in de oorspronkelijke taal bewaard
- samengestelde verbeterde output herschreven in het Engels
- een eenrichtingsstroom van native naar curated die `skills_omni/` niet terugvoert naar de inname van native versterkers## Enhancer Outcome States

De openbare PR-versterker rapporteert nu vier voor de beheerder zichtbare statussen:

- `voltooid`
  De verbeterde afgeleide is netjes gegenereerd en komt in aanmerking voor begeleidende publicatie `skills_omni/`.
- `gedegradeerd`
  De versterker is voltooid, maar gebruikt een terugvalpad of produceert waarschuwingen. Er wordt nog steeds een beoordeling door de beheerder verwacht voordat het derivaat als gezond wordt behandeld.
- `geblokkeerd`
  De uitvoering werd gestopt vanwege infrastructuur- of validatieproblemen, zoals een gehoste OmniRoute-preflightfout of een kandidaatvalidatiefout die publicatie zou moeten verhinderen.
- `mislukt`
  De versterker heeft een onverwachte runtimefout aangetroffen en moet door de beheerder worden onderzocht.## Recommended Branch Shape

Creëer een gerichte vertakking:```bash
git checkout -b feat/<short-skill-theme>
```

Voorbeelden:

- `feat/incident-observeerbaarheid-evals`
- `feat/devops-skill-pack`
- `feat/beveiligingsvaardigheidspakket`## Native Intake Rules

Het openbare inlaatoppervlak is opzettelijk tolerant.

Minimum:```text
skills/<skill>/
└── SKILL.md
```

Aanbevolen maar niet meer nodig voor inname:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

De native bijdrage kan grof, onvolledig zijn of buiten de normale ondersteuningspakketstandaard vallen. Dat is opzettelijk. `skills/` is het oorspronkelijke instroomoppervlak, niet het samengestelde afgeleide oppervlak.

Taalbeleid:

- native intake onder `vaardigheden/` mag in elke taal worden geschreven
- de versterker behoudt de oorspronkelijke momentopname zoals ingediend voor herkomst
- de samengestelde afgeleide onder `skills_omni/` moet altijd in het Engels zijn geschreven

De strengere redactionele balk is nu van toepassing op:

- de gegenereerde metadata en veiligheidscontroles
- de beoordeling van de particuliere versterker
- de daaropvolgende samengestelde afgeleide onder `skills_omni/`## Authoring Sequence

1. Maak `skills/<skill>/SKILL.md`.
2. Voeg frontmaterie toe als dat mogelijk is, maar ontbrekende of onvolledige frontmaterie blokkeert op zichzelf niet langer de native inname.
3. Voeg `agents/`, `references/`, `examples/` en `scripts/` toe als u deze al heeft.
4. Update `data/bundles.json` als de vaardigheid een bestaande bundel verdiept.
5. Open de PR. De repo-automatisering doet nu de rest.## Validation Sequence

Bijdragers kunnen deze exacte reeks uitvoeren voordat ze de PR openen:```bash
npm run validate
npm run build
npm test
git diff --check
```

Als de wijziging ook van invloed is op het runtime- of verpakkingsgedrag, voert u ook het volgende uit:```bash
npm run smoke
```

## What Happens Automatically During the PR

Wanneer een PR wordt geopend of gesynchroniseerd en alleen native vaardigheidsinnamebestanden onder `skills/` plus optioneel `data/bundles.json` aanraakt, activeert de publieke repository nu automatisch de privé-versterker.

Huidige geautomatiseerde stroom:

1. De openbare 'Validate Skills'-workflow draait op de PR en controleert validatie, build, gegenereerde artefacten en tests.
2. De openbare workflow 'PR-vaardigheden verbeteren' start parallel en verwerkt de gewijzigde native vaardigheden één voor één in de 'live'-modus.
3. De verbeteraar leest de native vaardigheid uit `skills/`, onderzoekt de huidige best practices en schrijft een beoordeelde verbeterde kandidaat in de privéwerkruimte.
4. De versterker bewaart de momentopname van de upstream-inname in de oorspronkelijke taal wanneer dat nodig is, maar herschrijft de samengestelde output in het Engels.
5. De versterker boekt voortgang terug naar de bron-PR.
6. De versterker werkt het PR-statuscommentaar na elke verwerkte vaardigheid bij met batchtotalen en de laatste status.
7. Wanneer het klaar is, materialiseert het de verbeterde afgeleide in `skills_omni/` en opent of werkt het een begeleidende PR in de openbare opslagplaats bij, alleen voor `voltooide` en `gedegradeerde` outputs.
8. Nadat de PR is samengevoegd in `main`, verwerkt de private repo-aware poller alle gewijzigde native skills opnieuw, vernieuwt `workspace/enhanced/skills/<skill>/` en houdt de private verbeterde basislijn afgestemd op de nieuwste publieke native bron.
9. Na de samenvoeging stoot de werkstroom voor openbare releases de npm-pakketversie tegen, genereert catalogusartefacten opnieuw, publiceert een release en tagt de nieuwe versie automatisch.

Tarieflimiet:

- de PR-versterker verwerkt momenteel**1 vaardigheid per minuut**
- een PR met 40 native nieuwe vaardigheden kan daarom ongeveer 40 minuten in de wachtrij voor verbeteringen blijven staan
- de PR laat zien dat het werk een lopende CI-run is, plus een voortgangscommentaar dat vaardigheid voor vaardigheid vooruitgaat

De bijdrager hoeft de verbeteraar niet handmatig uit te voeren.## No-Loop Rule For `skills_omni/`

Het samengestelde oppervlak is opzettelijk eenrichtingsverkeer:

- native invoer komt binnen via `skills/`
- de privéversterker beoordeelt die native input
- samengestelde uitvoer wordt voorgesteld in `skills_omni/`
- `skills_omni/` wordt nooit meer als native intake behandeld
- latere native updates komen nog steeds opnieuw binnen via `skills/` en vervangen de privé verbeterde basislijn na herverwerking

De repository dwingt nu die grens af:

- directe publieke PR's die `skills_omni/` wijzigen, worden afgewezen
- alleen door automatisering geschreven begeleidende PR's uit de takfamilie `skills-omni/pr-*` worden daar geaccepteerd
- gemengde PR's die zowel `skills/` als `skills_omni/` in één keer proberen te veranderen, worden afgewezen## Automatic Versioning After Merge

Samenvoegingen met vaardigheden naar 'main' activeren nu automatisch de workflow voor het vrijgeven van de repository.

Huidig pakketversiebeleid:

- patch wordt verhoogd met `+1` voor elke kwalificerende samenvoeging
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- na `.10` rolt het pakket naar de volgende minor en reset de patch
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Huidige release-triggerpaden:

- `vaardigheden/**`
- `vaardigheden_omni/**`
- `data/bundels.json`

Die automatische vrijgavetaak:

1. berekent de volgende pakketversie uit `package.json`
2. bumpt `package.json` en `package-lock.json`
3. regenereert `metadata.json`, `skills_index.json`, `dist/` en `docs/CATALOG.md`
4. voert de pijplijn voor strikte releaseverificatie uit
5. zet de versie terug naar `main`
6. maakt een Git-tag voor de nieuwe versie
7. publiceert npm- en GitHub Release-artefacten

Belangrijke implementatieopmerking:

- GitHub registreert een nieuw workflowbestand pas als een actieve repositoryworkflow nadat dat bestand de standaardvertakking heeft bereikt.
- Totdat 'Enhance PR Skills' op 'main' terechtkomt, kunnen bijdragers het gedocumenteerde proces lezen, maar GitHub zal die workflow nog niet automatisch uitvoeren op openbare PR's.
- Nadat de workflow is samengevoegd in 'main', wordt het hierboven beschreven gedrag het standaard intakepad voor toekomstige PR's voor native vaardigheden.## Native vs Enhanced

Deze repository heeft nu twee verschillende oppervlakken:

- `vaardigheden/`
  Inheemse inname. Hierdoor blijft de oorspronkelijke bijdrage zoals ingediend behouden.
- `vaardigheden_omni/`
  Omni-verbeterde afgeleide output voorgesteld door automatisering en onderhouden door het Omni Skills Team.

Toeschrijvingsregels voor `skills_omni/`:

- de verbeterde afgeleide wordt Omni-onderhouden
- de oorspronkelijke contribuant en de upstream native vaardigheid blijven gecrediteerd
- elke verbeterde map houdt een `ATTRIBUTION.md`-bestand bij met het upstream-pad, PR, auteur en broncontext
- elke verbeterde directory bestaat uitsluitend uit samengestelde uitvoer en mag niet opnieuw worden ingediend in het oorspronkelijke pad voor de inname van verbeteringen
- van elke verbeterde directory wordt verwacht dat deze Engelstalige uitvoer heeft, zelfs als de upstream-native bron dat niet was## Manual Maintainer Commands

De automatisering dekt de normale PR-inname, maar beheerders kunnen de privéversterker nog steeds handmatig uitvoeren wanneer dat nodig is.

Batch tegen een vertakkingsverschil:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Beoordeling van één vaardigheid:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Verwachte verbeteringsresultaten per vaardigheid:

- `werkruimte/inkomend/origineel/<run-id>/<skill>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `werkruimte/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `werkruimte/rapporten/<run-id>/rewrite-prompt.md`## PR Body Expectations

De PR-instantie moet het volgende vermelden:

- welke vaardigheden zijn toegevoegd of geüpgraded
- welke bundels of workflows ze verdiepen
- welke validatie is uitgevoerd
- of de geautomatiseerde versterker actief was
- of het een `skills_omni/` begeleidende PR heeft geopend of bijgewerkt
- eventuele uitzonderlijke opmerkingen van de beheerder over attributie of vervolgopschoning## Reviewer Checklist

- inheemse inname is legitiem en niet-kwaadwillig
- gegenereerde metadata en manifesten zijn vernieuwd
- bundelupdates zijn opzettelijk
- publieke validatie en build-outputs zijn groen
- het commentaar op de status van de verbeteraar komt overeen met de feitelijk gewijzigde vaardigheden en de uiteindelijke uitkomststatus
- elke `skills_omni/` begeleidende PR behoudt de attributie correct## Example PR Scope

Een sterk voorbeeld van PR kan een thematische set toevoegen, zoals:

- één observatie- of DevOps-vaardigheid
- één incident- of beveiligingsvaardigheid
- één AI-evaluatie of aanwijzingsvaardigheid

Dat is groot genoeg om de scorer, automatische versterker, `skills_omni/` publicatiestroom, bundels en attributiemodel uit te oefenen zonder de PR om te zetten in een volledige herschrijving van de catalogus.