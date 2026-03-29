# 📊 Skill Classification and Metadata (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Ang lokal na classifier na nagbibigay ng marka sa bawat kasanayan sa panahon ng pagpapatunay at pagbuo, na bumubuo ng mga profile na nababasa ng machine para sa buong catalog.**---

## 📊 Status

| Output | Binuo |
|:-------|:----------|
| ✅ Root `metadata.json` | Buod sa buong repositoryo |
| ✅ Per-skill `skills/<skill>/metadata.json` | Mga indibidwal na klasipikasyon |
| ✅ Catalog `dist/catalog.json` | Nai-publish na catalog na may mga marka |
| ✅ Nagpapakita ng `dist/manifest/<skill>.json` | Per-skill machine-readable data |

Binuo ng: `python3 tools/scripts/validate_skills.py`

Kasalukuyang repository snapshot:

- 32 nai-publish na mga kasanayan
- average na marka ng kalidad `96.3`
- average na marka ng pinakamahusay na kasanayan `98.7`
- average na marka ng seguridad `95.0`
- kasalukuyang kalidad spread `94, 95, 96, 97, 100`
- kumalat ang kasalukuyang pinakamahuhusay na kagawian `98, 99, 100`---

## 🎯 Purpose

Binibigyan ng classifier ang bawat kasanayan ng**pare-parehong profile na nababasa ng makina**bago ito makarating sa catalog. Nagsasagawa ito ng apat na trabaho:

1. 📋**Parse**— YAML frontmatter at markdown body
2. 🏷️**I-normalize**— Mga label ng kategorya sa canonical taxonomy
3. 📊**Classify**— Maturity, pinakamahuhusay na kagawian, kalidad, at security scoring
4. 📁**Emit**— Mga artifact ng metadata na ginagamit ng mga build script, doc, at CI---

## 🏷️ Canonical Taxonomy

**18 canonical na kategorya**na may awtomatikong alias na pagmamapa:

| Kategorya | Domain | Mga Karaniwang Alyas |
|:---------|:-------|:----------------|
| 💻 `kaunlaran` | Pangkalahatang software dev | `coding`, `programming` |
| 🎨 `frontend` | Frontend at UI | `ui`, `web-design` |
| 🔧 `backend` | Backend at mga API | `server`, `api` |
| 🌐 `fullstack-web` | End-to-end na web | `web`, `full-stack` |
| 🛠️ `mga kasangkapan` | Tooling ng developer | `mga utility` |
| ⚙️ `cli-automation` | CLI at automation | `scripting`, `workflow` |
| 📊 `negosyo` | Diskarte sa negosyo | `diskarte` |
| 📐 `produkto` | Pamamahala ng produkto | `pm` |
| 🎯 `disenyo` | Visual at UX na disenyo | `ux` |
| 🤖 `data-ai` | Data at AI app | `data`, `analytics` |
| 🧠 `ai-agents` | Mga pattern ng ahente ng AI | `mga ahente` |
| 📈 `pag-aaral ng makina` | Mga modelo at pagsasanay ng ML | `ml` |
| 🔌 `devops` | Imprastraktura | `imprastraktura`, `ulap` |
| 🛡️ `pagsubok-seguridad` | Pagsubok at seguridad | `pagsubok`, `seguridad`, `qa` |
| 📖 `dokumentasyon` | Pamamahala ng doc | `docs` |
| 🎬 `content-media` | Paglikha ng nilalaman | `media`, `content` |
| 💬 `komunikasyon` | Mga tool sa komunikasyon | `chat` |
| ❓ `hindi nakategorya` | Default na fallback | — |

> Ang mga legacy na label tulad ng `workflow`, `architecture`, `infrastructure` ay awtomatikong na-normalize sa pamamagitan ng alias mapping.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Antas | Label | Pamantayan |
|:------|:------|:---------|
|**L1**| `metadata` | Frontmatter plus minimal na katawan |
|**L2**| `mga tagubilin` | Mahahalagang nakasulat na mga tagubilin |
|**L3**| `mga mapagkukunan` | Mga naka-bundle na script o mas mayaman na naka-package na mapagkukunan |

Mga karagdagang signal na sinusubaybayan: `may_mga_script`,`may_mga_dagdag na_file`---

### 📋 Best Practices Score (0-100)

Sinusuri ng heuristic:

| Signal | Ano ang Sinusuri Nito |
|:-------|:----------------|
| 📛 Kalidad ng slug | `pangalan` na pag-format ng field |
| 📝 Paglalarawan | Kaliwanagan, haba, kaalaman |
| 📐 Istraktura | Mga seksyon ng dokumento at hierarchy |
| 💡 Mga Halimbawa | Mga bakod ng code at mga halimbawang bloke |
| 🔗 Mga Sanggunian | Mga naka-link na lokal na `reference/`, `script/`, at support-pack helper |
| 🧰 Paggana | Runnable na mga halimbawa ng lokal na script at mga kongkretong snippet ng daloy ng trabaho |
| 🧩 Lalim ng suporta-pack | Maramihang pamilya ng suporta, magagamit muli na mga file, metadata ng ahente, at mga asset ng pagpapatakbo |
| 🩺 Pag-troubleshoot | Mga pares ng tahasang `Mga Sintomas` at `Solusyon` |
| 📚 Saklaw | Mga seksyong `Kailan Gagamitin`, `Pinakamahuhusay na Kasanayan`, `Pag-troubleshoot`, at `Mga Karagdagang Mapagkukunan` |
| 🌐 Portability | Tool-agnostic na salita |
| 📅 pagiging bago | Pag-iwas sa mga hardcoded na petsa |

**Kasalukuyang tiering**

| Tier | Saklaw ng Marka |
|:-----|:-----------|
| `mahusay` | 90-100 |
| `mabuti` | 70-89 |
| `makatarungan` | 50-69 |
| `kailangan-trabaho` | 0-49 |

Ang scorer ay sadyang**sapat na semantiko upang lumikha ng spread**sa mga mature na kasanayan. Ang isang kasanayang may malinis na istraktura ay maaaring makakuha ng mahusay, ngunit upang maabot ang tuktok na banda kailangan din nito ng mga malalim na signal tulad ng:

- maraming halimbawa, hindi lang isa
- maramihang mga kaso sa pag-troubleshoot
- kaugnay na gabay sa kasanayan
- mas mayamang mga lokal na support pack
- higit sa isang pamilyang sumusuporta sa kabila ng simpleng prosa, perpektong kasama ang `mga ahente/` o `mga asset/` kung saan nagdaragdag sila ng tunay na muling paggamit
- isang nakalaang seksyong `## Workflow` na may mga mabibilang na hakbang
- kahit isang maliit na talahanayan ng pagpapatakbo o mapa ng desisyon kapag pinahusay nito ang kalinawan ng pagpapatupad
- higit na pagtitiyak sa pagpapatakbo kaysa sa isang simpleng template
- mas malinaw na lalim ng daloy ng trabaho at mga asset ng suporta sa desisyon
- lalim ng support-pack na lampas sa isang `reference/` file at isang naka-link na script
- sapat na magagamit muli na mga file ng suporta upang makaramdam na parang isang workflow kit, hindi isang solong tala na add-on
- sapat na densidad ng pagpapatakbo upang paghiwalayin ang isang pinakintab na outline mula sa isang reusable workflow kit

Nangangahulugan iyon na ang isang kumpletong kasanayan sa istruktura ay maaari pa ring makarating sa mataas na 90s sa halip na `100` kung ang support pack nito ay mas makitid, ang mga asset ng pagpapasya nito ay mas manipis, o ang density ng pagpapatakbo nito ay mas mababa kaysa sa pinakamalakas na kasanayan sa catalog.---

### ⭐ Quality Score (0-100)

Pinagsasama ng heuristic:

| Signal | Timbang |
|:-------|:-------|
| 📝 Pagkakumpleto ng katawan | Katamtaman-mataas |
| 📋 Katumpakan ng paglalarawan | Katamtaman |
| 📊 Pagkakumpleto ng metadata | Katamtaman |
| 📅 Recency (`petsa_na-update`) | Katamtaman |
| 📦 Naka-package na mapagkukunan | Katamtaman |
| 📋 Kontribusyon ng pinakamahuhusay na kagawian | Katamtaman |
| 🧠 Lalim ng semantiko | Katamtaman-mataas |
| 🛠️ Lalim ng pagpapatakbo | Katamtaman |
| 📚 Suporta-pack kayamanan | Katamtaman |

**Mga tier ng kalidad:**

| Tier | Saklaw ng Marka |
|:-----|:-----------|
| 💎 `platinum` | 80+ |
| 🥇 `ginto` | 65-79 |
| 🥈 `pilak` | 50-64 |
| 🥉 `tanso` | 35-49 |
| 🌱 `starter` | 0-34 |---

### 🛡️ Security Score (0-100)

Pinagsasama ang layer ng seguridad:

| Scanner | Palaging Pinagana | Ano ang Ginagawa Nito |
|:--------|:-----------------|:-------------|
| 🔍**Static**| ✅ Oo | Ini-scan ang SKILL.md, mga naka-package na file, at mga script |
| 🦠**ClamAV**| ⚙️ Opsyonal | Pag-scan ng malware sa pamamagitan ng `clamscan` |
| 🔒**VirusTotal**| ⚙️ Opsyonal | Hash lookup (walang upload) |

**Mga pamilya ng panuntunan ng static scanner:**
- 🎭 Mga pattern ng agarang pag-iniksyon at pag-exfiltration
- 💣 Mga mapanirang shell command
- 🔑 Mga kahina-hinalang kredensyal o OS path
- ⚠️ Mapanganib na mga primitive ng script (`shell=True`, `pickle.load`, `eval`, `extractall`)

**Hugis ng output ng seguridad:**```json
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

| Seksyon | Mga Patlang |
|:--------|:-------|
| 🆔 Pagkakakilanlan | `id`, `slug`, `display_name` |
| 🏷️ Taxonomy | `raw_category`, `canonical_category`, `inferred_category` |
| 📋 Pag-akda | mga tag, tool, kumplikado, panganib, pinagmulan, may-akda |
| 📅 Mga petsa at landas | `date_added`, `date_updated`, mga path |
| 📊 Mga Mapagkukunan | Mga file at reference counter |
| 📝 Mga signal ng nilalaman | Bilang ng salita, haba ng katawan, mga watawat ng istruktura |
| 🧠 Lalim ng semantiko | Mga hakbang sa daloy ng trabaho, mga halimbawa, lalim ng pag-troubleshoot, mga asset ng desisyon, mga pamilya ng link ng suporta |
| 🧩 Istraktura ng support-pack | Mga bilang ng file ng suporta, mga naka-link na pamilya, `mga ahente/`, `mga asset/`, at mga halimbawang magagamit muli |
| 🎯 Maturity | Mga flag, label, script/files |
| 📋 Pinakamahuhusay na kagawian | Iskor at tier |
| ⭐ Kalidad | Score, tier, at semantic breakdown |
| 🛡️ Seguridad | Iskor, tier, katayuan, mga natuklasan |
| ✅ Pagpapatunay | Katayuan, mga error, mga babala |### Root (`metadata.json`)

| Seksyon | Mga Patlang |
|:--------|:-------|
| 📊 Buod | Mga bilang, average, pamamahagi ng kategorya |
| 🏷️ Taxonomy | Mga bilang ng kategorya |
| 🎯 Pamamahagi | Antas ng kasanayan, antas ng kalidad, antas ng seguridad |
| ✅ Pagpapatunay | Bilang ng katayuan |
| 📋 Listahan ng mga kasanayan | Compact per-skill na mga buod |---

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

Kino-configure nito ang `git` na gumamit ng `.githooks/pre-commit`, na nagre-regenerate ng metadata at mga artifact ng catalog bago i-commit at awtomatikong itinatanghal ang mga nabuong file.