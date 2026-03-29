# Skill PR Workflow (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Ito ang canonical repository flow para sa mga pull request na nagdaragdag o nag-a-upgrade ng isa o higit pang katutubong kasanayan.

Gamitin ito kapag:

- pagdaragdag ng bagong kasanayan sa ilalim ng `kasanayan/`
- pagpapalalim ng isang bundle na may mga bagong kasanayan sa domain
- nagpapadala ng mas malaking pagpapalawak ng support-pack
- pagpapatunay ng isang sangay sa pribadong enhancer bago ito pagsamahin ng mga maintainer## Target Outcome

Ang isang malakas na katutubong kasanayan PR ay dumarating sa:

- isang katutubong kasanayan sa ilalim ng `kasanayan/`
- sapat na nilalaman para sa pampublikong validator upang maiuri at ma-index ito
- pagpasa sa pampublikong pagpapatunay at mga pagsusulit
- awtomatikong pagpoproseso ng enhancer sa panahon ng PR
- isang follow-up na `skills_omni/` PR kapag na-publish ang mga pinahusay na derivatives
- katutubong paggamit na napanatili sa orihinal nitong wika kapag kinakailangan
- na-curate ang pinahusay na output na muling isinulat sa Ingles
- isang one-way na native-to-curated na daloy na hindi nagpapakain ng `skills_omni/` pabalik sa native enhancer intake## Enhancer Outcome States

Ang pampublikong PR enhancer ngayon ay nag-uulat ng apat na maintainer-visible na estado:

- `nakumpleto`
  Malinis na nabuo ang pinahusay na derivative at kwalipikado para sa kasamang publikasyong `skills_omni/`.
- `degraded`
  Natapos ang enhancer, ngunit gumamit ito ng fallback path o gumawa ng mga babala. Inaasahan pa rin ang pagsusuri ng maintainer bago ituring ang derivative bilang malusog.
- `naka-block`
  Nahinto ang pagtakbo dahil sa mga isyu sa imprastraktura o validation, gaya ng na-host na OmniRoute preflight failure o pagkabigo sa validation ng kandidato na dapat humadlang sa publikasyon.
- `bigo`
  Ang enhancer ay nagkaroon ng hindi inaasahang runtime error at nangangailangan ng pagsisiyasat ng maintainer.## Recommended Branch Shape

Lumikha ng isang nakatutok na sangay:```bash
git checkout -b feat/<short-skill-theme>
```

Mga halimbawa:

- `mga feat/insidente-observability-evals`
- `feat/devops-skill-pack`
- `feat/security-skill-pack`## Native Intake Rules

Ang ibabaw ng pampublikong paggamit ay sadyang pinahihintulutan.

pinakamababa:```text
skills/<skill>/
└── SKILL.md
```

Inirerekomenda ngunit hindi na kinakailangan para sa paggamit:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Ang katutubong kontribusyon ay maaaring magaspang, hindi kumpleto, o sa labas ng normal na pamantayan ng suporta-pack. Iyon ay sinasadya. Ang `skills/` ay ang native intake surface, hindi ang curated derivative surface.

Patakaran sa wika:

- ang katutubong paggamit sa ilalim ng `kasanayan/` ay maaaring isulat sa anumang wika
- pinapanatili ng enhancer ang native snapshot bilang isinumite para sa provenance
- ang curated derivative sa ilalim ng `skills_omni/` ay dapat palaging nakasulat sa English

Nalalapat na ngayon ang mas mahigpit na editorial bar sa:

- ang nabuong metadata at mga pagsusuri sa seguridad
- ang pagsusuri ng pribadong enhancer
- ang follow-up na na-curate na derivative sa ilalim ng `skills_omni/`## Authoring Sequence

1. Gumawa ng `skills/<skill>/SKILL.md`.
2. Magdagdag ng frontmatter kung magagawa mo, ngunit ang nawawala o hindi kumpletong frontmatter ay hindi na humaharang sa katutubong paggamit nang mag-isa.
3. Magdagdag ng `mga ahente/`, `mga sanggunian/`, `mga halimbawa/`, at `mga script/` kapag mayroon ka na.
4. I-update ang `data/bundles.json` kung pinalalim ng kasanayan ang isang umiiral nang bundle.
5. Buksan ang PR. Ginagawa na ngayon ng repo automation ang iba.## Validation Sequence

Maaaring patakbuhin ng mga kontribyutor ang eksaktong sequence na ito bago buksan ang PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Kung nakakaapekto rin ang pagbabago sa runtime o pag-uugali ng packaging, patakbuhin din ang:```bash
npm run smoke
```

## What Happens Automatically During the PR

Kapag nagbukas o nagsi-sync ang isang PR at hinawakan lang nito ang mga native na skill intake file sa ilalim ng `skills/` plus opsyonal na `data/bundles.json`, ang pampublikong repo ngayon ay awtomatikong nagti-trigger sa pribadong enhancer.

Kasalukuyang awtomatikong daloy:

1. Ang pampublikong `Validate Skills` workflow ay tumatakbo sa PR at sinusuri ang validation, build, nabuong artifacts, at mga pagsubok.
2. Ang pampublikong `Enhance PR Skills` workflow ay nagsisimula nang magkatulad at pinoproseso ang mga binagong katutubong kasanayan nang paisa-isa sa `live` na mode.
3. Ang enhancer ay nagbabasa ng katutubong kasanayan mula sa `skills/`, nagsasaliksik ng kasalukuyang pinakamahuhusay na kagawian, at nagsusulat ng sinuri na pinahusay na kandidato sa pribadong workspace.
4. Pinapanatili ng enhancer ang upstream intake snapshot sa orihinal nitong wika kapag kinakailangan, ngunit muling isinusulat ang na-curate na output sa English.
5. Ang enhancer ay nagpo-post ng progreso pabalik sa pinagmulang PR.
6. Ina-update ng enhancer ang komento sa status ng PR pagkatapos ng bawat naprosesong kasanayan na may mga kabuuan ng batch at ang pinakabagong estado.
7. Kapag natapos na ito, gagawin nitong `skills_omni/` ang pinahusay na derivative at nagbubukas o nag-a-update ng kasamang PR sa pampublikong repo para sa mga `completed` at `degraded` na output lang.
8. Pagkatapos pagsamahin ang PR sa `pangunahin`, muling ipoproseso ng pribadong repo-aware na poller ang anumang nabagong katutubong kasanayan, nire-refresh ang `workspace/enhanced/skills/<skill>/`, at pinapanatili ang pribadong pinahusay na baseline na nakahanay sa pinakabagong pampublikong katutubong pinagmulan.
9. Pagkatapos ng pagsasanib, ang daloy ng trabaho ng pampublikong release ay bumagsak sa bersyon ng npm package, muling bumubuo ng mga artifact ng catalog, nag-publish ng isang release, at awtomatikong nagta-tag sa bagong bersyon.

Limitasyon sa rate:

- kasalukuyang nagpoproseso ang PR enhancer**1 kasanayan kada minuto**
- Ang isang PR na may 40 katutubong bagong kasanayan ay maaaring manatili sa Enhancer queue nang humigit-kumulang 40 minuto
- ipinapakita ng PR na gumagana bilang isang in-progress na CI run kasama ang isang progress comment na nagsusulong ng kasanayan sa pamamagitan ng kasanayan

Hindi kailangang patakbuhin nang manu-mano ng contributor ang enhancer.## No-Loop Rule For `skills_omni/`

Ang na-curate na ibabaw ay sadyang one-way:

- pumapasok ang native input sa pamamagitan ng `skills/`
- sinusuri ng pribadong enhancer ang native input na iyon
- ang na-curate na output ay iminungkahi sa `skills_omni/`
- Ang `skills_omni/` ay hindi na muling itinuturing bilang katutubong paggamit
- ang mga susunod na katutubong update ay muling pumapasok sa pamamagitan ng `mga kasanayan/` at pinapalitan ang pribadong pinahusay na baseline pagkatapos muling iproseso

Ipinapatupad na ngayon ng repositoryo ang hangganang iyon:

- ang mga direktang pampublikong PR na nagbabago sa `skills_omni/` ay tinatanggihan
- tanging ang mga kasamang PR na awtorisado ng automation mula sa pamilya ng sangay ng `skills-omni/pr-*` ang tinatanggap doon
- ang mga pinaghalong PR na sumusubok na baguhin ang parehong `skills/` at `skills_omni/` ay tinatanggihan## Automatic Versioning After Merge

Nagsasama-sama sa `pangunahin` ang pagkakaroon ng kasanayan sa awtomatikong daloy ng trabaho sa pagpapalabas ng repositoryo.

Kasalukuyang patakaran sa bersyon ng package:

- mga pagtaas ng patch ng `+1` para sa bawat qualifying merge
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- pagkatapos ng `.10`, i-roll ang package sa susunod na minor at ni-reset ang patch
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Kasalukuyang release trigger path:

- `kasanayan/**`
- `skills_omni/**`
- `data/bundles.json`

Ang awtomatikong pagpapalabas na trabaho:

1. kinakalkula ang susunod na bersyon ng package mula sa `package.json`
2. bumps `package.json` at `package-lock.json`
3. muling bumubuo ng `metadata.json`, `skills_index.json`, `dist/`, at `docs/CATALOG.md`
4. nagpapatakbo ng mahigpit na release verification pipeline
5. commits ang bersyon bump pabalik sa `main`
6. lumilikha ng Git tag para sa bagong bersyon
7. nag-publish ng npm at GitHub Release artifact

Mahalagang tala sa paglulunsad:

- Nagrerehistro lang ang GitHub ng bagong workflow file bilang aktibong repository workflow pagkatapos maabot ng file na iyon ang default na branch.
- Hanggang sa mapunta ang `Pahusayin ang Mga Kasanayan sa PR` sa `pangunahin`, mababasa ng mga contributor ang dokumentadong proseso, ngunit hindi pa awtomatikong isasagawa ng GitHub ang daloy ng trabaho na iyon sa mga pampublikong PR.
- Pagkatapos pagsamahin ang daloy ng trabaho sa `pangunahin`, ang gawi na inilarawan sa itaas ay magiging default na landas ng paggamit para sa hinaharap na mga native na kasanayan PR.## Native vs Enhanced

Ang repo na ito ay mayroon na ngayong dalawang natatanging surface:

- `kasanayan/`
  katutubong paggamit. Pinapanatili nito ang orihinal na kontribusyon tulad ng isinumite.
- `skills_omni/`
  Omni-enhanced derivative output na iminungkahi ng automation at pinapanatili ng Omni Skills Team.

Mga panuntunan sa pagpapatungkol para sa `skills_omni/`:

- ang pinahusay na derivative ay nagiging Omni-maintained
- ang orihinal na nag-ambag at upstream na katutubong kasanayan ay nananatiling kredito
- bawat pinahusay na direktoryo ay nagpapanatili ng `ATTRIBUTION.md` na file na may upstream na landas, PR, may-akda, at konteksto ng pinagmulan
- Ang bawat pinahusay na direktoryo ay na-curate na output lamang at hindi dapat isumiteng muli sa native enhancer intake path
- ang bawat pinahusay na direktoryo ay inaasahang maging English-language na output kahit na ang upstream na katutubong pinagmulan ay hindi## Manual Maintainer Commands

Sinasaklaw ng automation ang normal na paggamit ng PR, ngunit maaari pa ring patakbuhin ng mga maintainer ang pribadong enhancer nang manu-mano kapag kinakailangan.

Batch laban sa isang branch diff:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Single-skill na pagsusuri:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Mga inaasahang enhancer na output sa bawat kasanayan:

- `workspace/incoming/original/<run-id>/<skill>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

Dapat sabihin ng PR body:

- anong mga kasanayan ang idinagdag o na-upgrade
- kung aling mga bundle o workflow ang pinalalim nila
- anong validation ang tumakbo
- kung tumakbo ang automated enhancer
- kung ito man ay nagbukas o nag-update ng isang `skills_omni/` na kasamang PR
- anumang pambihirang mga tala ng maintainer tungkol sa attribution o follow-up na paglilinis## Reviewer Checklist

- Ang katutubong paggamit ay lehitimo at hindi nakakapinsala
- na-refresh ang nabuong metadata at mga manifest
- Sinadya ang mga update sa bundle
- Ang pampublikong pagpapatunay at mga output ng build ay berde
- tumutugma ang komento sa status ng enhancer sa aktwal na binagong mga kasanayan at estado ng panghuling resulta
- anumang `skills_omni/` na kasamang PR ay nagpapanatili ng attribution nang tama## Example PR Scope

Ang isang malakas na halimbawa ng PR ay maaaring magdagdag ng isang pampakay na hanay tulad ng:

- isang observability o DevOps na kasanayan
- isang insidente o kasanayan sa seguridad
- isang pagsusuri sa AI o kasanayan sa pagdikta

Iyon ay sapat na malaki para magamit ang scorer, awtomatikong enhancer, `skills_omni/` publishing flow, bundle, at attribution model nang hindi ginagawang full catalog rewrite ang PR.