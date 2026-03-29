# 🔬 Anatomy of a Well-Written Skill (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Mga inaasahan sa istruktura at kalidad para sa isang Omni Skills `SKILL.md` — ang format ng pag-akda na nagpapagana sa buong catalog.**---

## 📐 The Two Parts

Ang bawat `SKILL.md` ay binubuo ng dalawang natatanging seksyon:### 1️⃣ Frontmatter (YAML Metadata)

Metadata na nababasa ng machine sa pagitan ng mga `---` delimiter. Pinapalakas nito ang:

- 📚 Ang index ng mga kasanayan at pagbuo ng katalogo
- 🔎 CLI paghahanap at pag-filter
- ✅ Pagpapatunay at pagmamarka ng kalidad
- 📊 Nakabuo ng mga artifact ng klasipikasyon ng `metadata.json`
- 📋 Per-skill manifests sa `dist/manifests/`### 2️⃣ Body (Markdown Instructions)

Nababasa ng tao (at nababasa ng ahente) na mga tagubilin. Isulat ito na parang**nagsasanay ka sa isang senior developer**tungkol sa kung paano magsagawa ng isang gawain — sapat na tiyak na masusundan ito ng isang ahente ng AI nang hindi hinuhulaan.---

## 📋 Frontmatter Reference

| Patlang | Kinakailangan | Uri | Paglalarawan |
|:------|:---------|:-----|:------------|
| `pangalan` | ✅ | string | Dapat tumugma sa pangalan ng direktoryo, lowercase-hyphenated |
| `paglalarawan` | ✅ | string | Isang linyang paglalarawan (10-200 character) |
| `bersyon` | ⚡ | string | Semantic na bersyon para sa mismong kasanayan (hal., `"0.1.1"`) |
| `kategorya` | ⚡ | string | Isang kanonikal na kategorya mula sa repo taxonomy |
| `mga tag` | ⚡ | string[] | Mga nahahanap na tag para sa pagtuklas |
| `kumplikado` | ⚡ | string | `beginner` · `intermediate` · `advanced` · `expert` |
| `panganib` | ⚡ | string | `ligtas` · `pag-iingat` · `nakakasakit` · `kritikal` |
| `mga kasangkapan` | ⚡ | string[] | Mga nasubok na AI coding assistant |
| `pinagmulan` | ⚡ | string | `omni-team` · `komunidad` · `opisyal` |
| `may-akda` | ⚡ | string | Pagpapatungkol |
| `date_added` | ⚡ | string | Petsa ng ISO |
| `petsa_na-update` | ⚡ | string | Petsa ng ISO |

> ✅ = Laging kailangan · ⚡ = Kinakailangan sa strict mode

Ang bersyon ng kasanayan ay independiyente mula sa bersyon ng npm package. Ang package ay kasalukuyang `0.1.3`, ngunit ang mga umiiral na kasanayan ay maaaring wastong manatili sa kanilang sariling semantic na bersyon.---

## 🏷️ Canonical Categories

Ang repo taxonomy ay kasalukuyang tumutukoy sa**18 canonical na kategorya**:

| Kategorya | Domain |
|:---------|:-------|
| 💻 `kaunlaran` | Pangkalahatang software development |
| 🎨 `frontend` | Frontend frameworks at UI |
| 🔧 `backend` | Mga serbisyo at API ng backend |
| 🌐 `fullstack-web` | End-to-end na web development |
| 🛠️ `mga kasangkapan` | Tooling at mga utility ng developer |
| ⚙️ `cli-automation` | CLI tool at automation script |
| 📊 `negosyo` | Mga proseso at diskarte sa negosyo |
| 📐 `produkto` | Pamamahala ng produkto at disenyo |
| 🎯 `disenyo` | Visual at UX na disenyo |
| 🤖 `data-ai` | Data engineering at AI application |
| 🧠 `ai-agents` | Pag-unlad at mga pattern ng ahente ng AI |
| 📈 `pag-aaral ng makina` | Mga modelo ng ML at pagsasanay |
| 🔌 `devops` | Imprastraktura at deployment |
| 🛡️ `pagsubok-seguridad` | Mga kasanayan sa pagsubok at seguridad |
| 📖 `dokumentasyon` | Pagbuo at pamamahala ng dokumentasyon |
| 🎬 `content-media` | Paglikha ng nilalaman at media |
| 💬 `komunikasyon` | Mga tool sa komunikasyon at daloy ng trabaho |
| ❓ `hindi nakategorya` | Default kapag walang nakitang tugma |

> Ang mga legacy na label tulad ng `workflow`, `architecture`, `infrastructure`, `security`, at `testing` ay awtomatikong na-normalize sa pamamagitan ng alias mapping.---

## 📝 Body Structure

Ang isang mahusay na nakasulat na katawan ng kasanayan ay sumusunod sa hierarchy na ito:

### 📌 Pangkalahatang-ideya (Kinakailangan)
2-3 pangungusap sa**ano**ang nagagawa ng kasanayan at**bakit**ito umiiral.

### 🎯 Kailan Gagamitin (Kinakailangan)
Bullet list ng**mga partikular na sitwasyon**kung saan naaangkop ang kasanayang ito.

### 📋 Mga Pangunahing Tagubilin (Kinakailangan)
Ang**step-by-step na proseso**na dapat sundin ng ahente. Maging tahasan. Maging tiyak. Pinakamahusay na gumagana ang mga ahente sa malinaw, hindi malabo na mga tagubilin.

### 💡 Mga Halimbawa (Inirerekomenda)
Mga konkretong prompt, mga bloke ng code, o inaasahang mga output.**Kung mas tiyak, mas mabuti.**

### ✅ Pinakamahuhusay na Kasanayan (Inirerekomenda)
Gamitin ang ✅ Gawin / ❌ Huwag i-format para sa mabilisang pag-scan.

### 🔧 Pag-troubleshoot (Opsyonal)
Mga karaniwang isyu at ang kanilang mga solusyon.

### 🔗 Mga Kaugnay na Kasanayan (Opsyonal)
Mga cross-reference sa mga pantulong na kasanayan.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Nakatuon sa**isang partikular na**workflow o domain
- 📌 Ang mga tagubilin ay**sapat na malinaw para sundin ng AI**nang walang interpretasyon ng tao
- 💡 May kasamang**mga konkretong halimbawa**na may inaasahang pag-uugali
- 🛡️ May tamang**error handling**guidance
- 📊 Gumagawa ng malusog na metadata: canonical na kategorya, maturity L2+, kalidad 70+
- 🧰 Nagpapadala ng reusable na support pack, hindi lamang prosa, mas mabuti sa `reference/`, `scripts/`, `examples/`, at `agents/` kung naaangkop

Para sa mas malakas na pattern ng pagmamarka na nagtutulak ng mga kasanayan sa pinakamataas na banda, tingnan ang [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).### ❌ Bad Skill

- 🌫️ Pangkalahatang payo na maaaring naaangkop sa anumang bagay
- 🤷 Malabong mga tagubilin tulad ng "magsulat ng magandang code"
- 🚫 Walang mga halimbawa o mga bloke ng code
- ⚠️ Nawawalang frontmatter field
- 📉 Mababang marka ng kalidad (mababa sa 50)