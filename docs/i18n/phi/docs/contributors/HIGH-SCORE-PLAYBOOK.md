# 🏆 High-Score Skill Playbook (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Ano ang kailangan ng Omni Skills `SKILL.md` sa pagsasanay upang maabot ang mataas na maturity, pinakamahusay na kasanayan, kalidad, at mga marka ng seguridad.**---

## 🎯 Purpose

Ipinapaliwanag ng gabay na ito kung paano aktwal na ginagantimpalaan ng classifier ng repositoryo ang isang kasanayan.

Gamitin ito kapag gusto mong:

- may-akda ng isang bagong kasanayan na dumarating sa nangungunang mga banda ng pagmamarka
- pagbutihin ang isang umiiral na kasanayan na natigil sa `mahusay` o mababang `mahusay`
- unawain kung bakit ang isang kasanayang may disenteng pag-format ay hindi pa rin nagmamarka bilang isang pambihirang asset sa pagpapatakbo

Ito ang kasamang nakaharap sa contributor sa:

- [Quality Bar](QUALITY-BAR.md)
- [Skill Anatomy](SKILL-ANATOMY.md)
- [Pag-uuri ng Kasanayan](../specs/SKILL-CLASSIFICATION.md)

Kasalukuyang benchmark para sa live na catalog:

- 32 nai-publish na mga kasanayan
- kasalukuyang pagkalat ng kalidad: `94, 95, 96, 97, 100`
- kasalukuyang pinakamahuhusay na kagawian na kumakalat: `98, 99, 100`
- kasalukuyang nangungunang dulo: `omni-figma` sa `100/100` na kalidad at `100/100` na pinakamahusay na kagawian---

## 🧱 What High Scores Really Mean

Ang classifier ay**hindi**nagbibigay ng magandang markdown nang mag-isa.

Ang mga kasanayang may mataas na marka ay mga kasanayan na:

-**natutuklasan**: malinaw na sinasabi ng paglalarawan kung ano ang nagagawa ng kasanayan at kung kailan ito gagamitin
-**operational**: kasama sa kasanayan ang mga lokal na script, reference, at runnable na halimbawa
-**diagnostic**: tinutulungan nito ang ahente na makabawi kapag nagkamali
-**specific**: ito ay nakatutok sa isang workflow, hindi malawak na payo
-**ligtas**: iniiwasan nito ang mga mapanganib na pattern at nagpapadala ng malinis na output ng scanner

Sa pagsasagawa, ang pinakamalakas na kasanayan ay kumikilos nang higit na parang isang**maliit na nakabalot na workflow kit**kaysa sa isang simpleng markdown note.---

## 📋 Score Targets

Gamitin ang mga target na ito kapag nag-akda:

| Dimensyon | Malakas na Target | Pambihirang Target |
|:----------|:--------------|:-------------------|
| 🎯 Maturity | `L3` | `L3` na may maraming mapagkukunan ng suporta |
| 📋 Pinakamahuhusay na Kasanayan | `90+` | `96+` |
| ⭐ Kalidad | `85+` | `90+` |
| 🛡️ Seguridad | `95+` | `95+` na may zero na natuklasan |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Dapat gawing madaling uriin at madaling matuklasan ng iyong frontmatter ang kasanayan:

- Ang `pangalan` ay eksaktong tumutugma sa direktoryo
- Ipinapaliwanag ng `paglalarawan` ang parehong**ano**at**kailan**
- `category`, `tags`, `tools`, `complexity`, `risk`, `source`, `author`, at mga petsa ay naroroon lahat

Magandang paglalarawan ng hugis:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Hindi magandang hugis ng paglalarawan:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

Ang pinakamalakas na kasanayan ay patuloy na kinabibilangan ng mga seksyong ito:

- `## Pangkalahatang-ideya`
- `## Kailan Gagamitin ang Kakayahang Ito`
- `## Daloy ng Trabaho`
- `## Mga Halimbawa`
- `## Pinakamahuhusay na Kasanayan`
- `## Pag-troubleshoot`
- `## Karagdagang Mga Mapagkukunan`

Kung nawawala ang isa sa mga ito, maaari pa ring maging maganda ang marka, ngunit nagiging mas mahirap na magmukhang katangi-tangi.---

### 3. Runnable Local Support

Ang mga kasanayan sa nangungunang pagmamarka ay karaniwang kinabibilangan ng:

- `mga sanggunian/checklist.md`
- isa o higit pang helper script sa `scripts/`
- hindi bababa sa isang nagtrabahong halimbawa sa `mga halimbawa/`
- `agents/openai.yaml` kapag ang kasanayan ay inilaan para sa direktang pagtawag sa ahente
- mga direktang link mula sa `SKILL.md` sa mga lokal na file

Mahalaga ito dahil itinuturing ng classifier ang isang kasanayan na may**naka-bundle na materyal ng suporta**bilang mas naaaksyunan kaysa sa isa na tumuturo lamang palabas.

Inirerekomendang minimum:```text
skills/<skill>/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── examples/
│   └── example.md
├── references/
│   └── checklist.md
└── scripts/
    └── render_<artifact>.py
```

---

### 4. Examples That Actually Help

Ang mga halimbawa ng mataas na marka ay:

- kongkreto
- nai-type gamit ang totoong bakod gaya ng `bash` o `python`
- nakatali sa isang lokal na script o repeatable command
- kinatawan ng daloy ng trabaho

mabuti:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

mahina:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Ang scorer ay nagbibigay ng gantimpala sa pag-troubleshoot na tumutulong sa isang ahente na mabawi, hindi lamang makilala ang isang problema.

Gustong format:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Ito ay mas malakas kaysa sa hindi malinaw na tala tulad ng:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Tinutukoy na ngayon ng classifier ang pagitan ng isang kasanayang kumpleto lamang at isa na talagang malalim.

Mga signal na makakatulong:

- maramihang mga konkretong halimbawa
- maramihang mga kaso sa pag-troubleshoot
- gabay na may kaugnayan sa kasanayan
- mas mayamang reference pack
- isang nakikitang seksyong `## Workflow` na may bilang na mga hakbang na direktang mabibilang ng scorer
- kahit man lang isang operational table o execution map kung saan nililinaw nito ang workflow
- higit sa isang direktoryo ng suporta o uri ng asset
- mga seksyon ng daloy ng trabaho na may sapat na mga hakbang upang gabayan ang pagpapatupad
- mga asset ng desisyon gaya ng mga checklist, rubrics, matrice, packet, o playbook
- mas malakas na pagkakaiba-iba ng support-pack sa mga `reference/`, `script/`, `agents/`, `examples/`, o `assets/`
- sapat na magagamit muli na mga file ng suporta upang magmukhang isang kit, walang isang katulong na nakatago sa tabi ng markdown
- higit sa isang file ng helper kapag ang daloy ng trabaho ay sapat na kumplikado upang bigyang-katwiran ang isang support pack
- sapat na lalim ng katawan upang masakop ang mga tradeoff at mga mode ng pagkabigo
- mas siksik na patnubay sa pagpapatakbo, dahil ang scorer ay nakikilala na ngayon ang pinakintab na pag-format mula sa tunay na magagamit muli na lalim ng daloy ng trabaho

Mga signal na**hindi**nakakatulong nang malaki:

- pag-uulit ng parehong pagtuturo sa iba't ibang salita
- generic na filler text
- pagdaragdag ng mga heading nang walang pagdaragdag ng substance sa ilalim ng mga ito---

## 🧪 Fast Checklist Before You Commit

Gamitin ang checklist na ito bago patakbuhin ang pagpapatunay:

- ang paglalarawan ay nagsasabing**ano**at**kailan**
- ang kasanayan ay nakatuon sa isang daloy ng trabaho
- Umiiral ang `## Workflow` at naglalaman ng mga may numero o naka-bullet na hakbang
- mayroon man lang isang runnable na halimbawa
- Ang `mga sanggunian/`, `mga script/`, at pinakamainam na `mga halimbawa/` ay naka-link mula sa `SKILL.md`
- Umiiral ang `agents/openai.yaml` kapag ang kasanayan ay para sa direktang invocation sa mga kliyenteng ahente
- Ang pag-troubleshoot ay gumagamit ng `Mga Sintomas` at `Solusyon`
- ang kasanayan ay maaaring makatwirang maiuri bilang `L3`
- walang mga mapanganib na utos o kahina-hinalang landas

Pagkatapos ay tumakbo:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- tama ang paglalarawan ngunit masyadong generic
- may mga seksyon ang markdown ngunit walang lalim ng pagpapatakbo
- ang mga halimbawa ay hindi tumuturo sa mga lokal na katulong
- umiiral ang pag-troubleshoot ngunit hindi diagnostic
- masyadong kakaunti ang mga tag o tool identifier
- ang kasanayan ay ligtas at malinis ngunit napakababaw pa rin upang mabilang na katangi-tangi---

## 🧭 Practical Rule

Kung ang iyong kakayahan ay parang:

- isang**template**: maaaring pumasa ito
- isang**gabay**: maaari itong makakuha ng mahusay
- isang**workflow package**: ito ay mas malamang na makakuha ng puntos sa tuktok