# 🔬 Codebase Deep Analysis (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Komprehensibong teknikal na pagsusuri ng kasalukuyang arkitektura ng Omni Skills, runtime surface, at build pipeline.**
> Huling nasuri: 2026-03-28---

## 📊 Project Overview

| Katangian | Halaga |
|:----------|:------|
|**Pangalan**| `omni-skills` |
|**Bersyon ng package**| `0.1.3` |
|**Mga bersyon ng kasanayan**| Per-skill at independiyente mula sa bersyon ng package. Maraming naka-publish na kasanayan ay `0.0.1` pa rin habang ang package ay `0.1.2`. |
|**Lisensya**| MIT (code) + CC BY 4.0 (nilalaman) |
|**NPM**| `npx omni-skills` |
|**Na-publish na mga kasanayan**| 32 |
|**Mga tinukoy na bundle**| 7, lahat ay ganap na sinusuportahan ng nai-publish na mga kasanayan |
|**Mga kategorya ng aktibong catalog**| 15 aktibong bucket sa 18 mga kategorya ng canonical taxonomy |
|**Pangunahing runtime/build LOC na na-sample sa ibaba**| 13,600+ |
|**Mga dependency sa produksyon**| 7 (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Kasalukuyang snapshot ng pag-uuri sa antas ng repositoryo mula sa `metadata.json`:

- average na marka ng kalidad: `96.3`
- average na marka ng pinakamahusay na kasanayan: `98.7`
- average na marka ng seguridad: `95.0`
- lahat ng 32 nai-publish na kasanayan ay napapatunayan bilang `L3.'

Kasalukuyang release baseline:

- paglabas ng pampublikong repositoryo: `v0.1.2`
- paglabas ng pribadong enhancer: `v0.0.1`
- parehong aktibo at berde ang public release automation at private release automation---

## 🏗️ Architecture Overview

Ang repository ay sumusunod sa isang**workspace monorepo**pattern na may isang nakabahaging catalog core at maraming runtime surface.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

Ang disenyo ay sadyang**artifact-driven**:

1. ang mga kasanayan ay isinulat bilang `SKILL.md` kasama ang mga lokal na support pack
2. pinapatunayan, inuuri, ina-archive, at ginagawang normal ng build ang mga ito
3. ang mga nabuong artifact ay naging kontrata para sa CLI, API, MCP, at A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4,500+ LOC na pinagsama**— ang pangunahing pampublikong interface para sa parehong eksperto at may gabay na paggamit.

| Utos | Function |
|:--------|:---------|
| 🔎 `hanapin ang [query]` | Paghahanap ng katalogo ng buong teksto na may mga filter na nakakaalam ng marka |
| 📦 `i-install` | Ginagabayan o nakabatay sa flag na pag-install sa mga kilalang kliyente o mga custom na path |
| 🧾 `config-mcp` | I-preview o isulat ang client-aware na MCP config |
| 🔌 `mcp <transport>` | Sinisimulan ang MCP server sa `stdio`, `stream`, o `sse` |
| 🌐 `api` | Sinisimulan ang catalog API |
| 🤖 `a2a` | Sinisimulan ang A2A runtime |
| 🧪 `usok` | Ilabas ang pagpapatunay bago ang paglipad |
| 🩺 `doktor` | Mga lokal na diagnostic |
| 🖥️ `ui` | Ink visual shell na may install, discovery, config, at service hub |
| 🏷️ `recategorize` | Taxonomy drift inspeksyon at muling pagsulat |

Ang CLI ay hindi na isang installer lamang. Ito ang tool sa pampublikong pagpapatakbo para sa buong platform.## 🧭 Future Expansion Direction

Ang pampublikong runtime ay hindi na naka-block sa foundational work, at ang pangalawang kategorya na wave ay nakarating na. Ang susunod na kapaki-pakinabang na catalog work ay depth, hindi higit na category-count chasing.

Ang mga bagong na-activate na code-native na track ay nasa catalog na ngayon:

- `design` sa pamamagitan ng `design-systems-ops`, `accessibility-audit`, at `design-token-governance`
- `mga tool` sa pamamagitan ng `mcp-server-authoring`
- `data-ai` sa pamamagitan ng `data-contracts`
- `machine-learning` sa pamamagitan ng `model-serving`

Inirerekomenda ang susunod na direksyon:

1. palalimin ang `design`, `tools`, `data-ai`, at `machine-learning`
2. panatilihing ipagpaliban ang `negosyo` at `content-media` maliban kung may lalabas na malinaw na code-native na panukala
3. pangalagaan ang kasalukuyang kalidad na palapag sa halip na muling buksan ang pressure sa activation ng kategorya

Ang expansion wave na iyon ay naitala na ngayon sa [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— nag-i-install ng mga kasanayan sa 7 katulong na may kakayahang mag-install.

| Bandila | Target | Default na Path |
|:-----|:-------|:-------------|
| `--claude` | Claude Code | `~/.claude/skills` |
| `--cursor` | Cursor | `~/.cursor/skills` |
| `--gemini` | Gemini CLI | `~/.gemini/skills` |
| `--codex` | Codex CLI | `~/.codex/skills` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--antigravity` | Antigravity | `~/.gemini/antigravity/skills` |
| `--opencode` | OpenCode | `<workspace>/.opencode/skills` |

Sinusuportahan nito ang:

- full-library install
- mga piling pag-install ayon sa `--skill`
- na-curate na mga pag-install ng `--bundle`
- may gabay na TTY at visual na daloy ng UI
- mga custom na target na landas### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— nakabahaging runtime layer para sa CLI, API, MCP, at A2A.

| I-export | Paglalarawan |
|:-------|:------------|
| 🔎 `Mga Kasanayan sa Paghahanap()` | Maghanap gamit ang weighted text matching at filter support |
| 📋 `listSkills()` | Multi-axis na pag-filter ayon sa kalidad, pinakamahusay na kagawian, antas, seguridad, panganib, tool, at kategorya |
| 📌 `getSkill()` | Manifest resolution at mga pinayamang pampublikong URL |
| ⚖️ `compareSkills()` | Magkatabing paghahambing |
| 💡 `recommendSkills()` | Rekomendasyon na batay sa layunin |
| 📦 `buildInstallPlan()` | I-install ang pagbuo ng plano na may mga babala at gabay na alam ng kliyente |
| 🗂️ `listBundles()` | Na-curate na listahan ng bundle na may availability |
| 📁 `listSkillArchives()` | Pag-archive at resolution ng lagda |

Ito ang tunay na pinagmumulan ng runtime truth pagkatapos ng henerasyon.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— buong pagpapatupad ng MCP gamit ang opisyal na SDK.

**Mga Transportasyon**

- `stdio`
- streamable HTTP
- SSE

**Mga tool na laging naka-read-only**

- `kasanayan_sa paghahanap`
- `Kumuha ng_kasanayan`
- `compare_skills`
- `recommend_skills`
- `preview_install`

**Mga tool sa lokal na mode**

- `detect_clients`
- `list_installed_skills`
- `install_skills`
- `remove_skills`
- `configure_client_mcp`

Ang ibabaw ng MCP ay sadyang nahati sa pagitan ng:

- remote/read-only na paggamit ng catalog
- paggamit ng sidecar na lokal/may kakayahang sumulat### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1,943 LOC**— filesystem-aware na layer ng MCP para sa pag-detect ng kliyente, pamamahala ng kasanayan, at pagsulat ng MCP config.

Kasalukuyang praktikal na suporta:

-**7 kliyenteng may kakayahang mag-install**
-**16 na kliyenteng may kakayahang mag-config**
-**33 config target**
-**19 config profile**

Mga kliyenteng may kakayahang mag-install:

- Claude Code
- Cursor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravity
- OpenCode

Kasama sa mga kliyente at target na may kakayahang i-configure ang:

- Mga setting ng Claude, Claude Desktop, at config ng proyekto ni Claude
- Cursor user at workspace config
- VS Code workspace, user, insider, at config ng Dev Container
- Mga setting ng user at workspace ng Gemini
- Antigravity user config
- Kiro user, workspace, at mga legacy path
- Codex CLI TOML config
- OpenCode user at workspace config
- Mga setting ng cline
- GitHub Copilot CLI user at repo config
- Kilo user, proyekto, at workspace config
- Ipagpatuloy ang workspace YAML
- Windsurf user config
- Zed workspace config
- Kumpig ng gumagamit ng gansa

Ang sidecar ay sadyang tapat tungkol sa mga hangganan:

- nagsusulat lamang ito sa loob ng isang allowlist
- nag-preview ito bilang default
- pinapanatili nito ang mga unang-class na manunulat lamang kung saan inilalantad ng mga opisyal na doc ang isang matatag na format
- hindi ito nagpapanggap na ang bawat produkto na may kakayahang MCP ay isa ring target na pag-install ng kasanayan### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC na pinagsama**— read-only na registry API at middleware ng pamamahala.

Mahahalagang endpoint:

- `/healthz`
- `/openapi.json`
- `/admin/runtime`
- `/v1/skills`
- `/v1/skills/:id`
- `/v1/search`
- `/v1/compare`
- `/v1/mga bundle`
- `/v1/install/plan`
- `/v1/skills/:id/download/*`

Naipatupad na ang baseline ng pamamahala:

- tagapagdala ng token auth
- API-key auth
- pagpapatunay ng token ng admin
- in-process na paglilimita sa rate
- humiling ng mga ID
- pag-log ng audit
- Mga pinapayagang listahan ng CORS
- Mga IP allowlist
- magtiwala sa pangangasiwa ng proxy
- mode ng pagpapanatili### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1,857 LOC na pinagsama-sama sa pangunahing server, runtime, at mga file ng coordinator**— JSON-RPC 2.0 task lifecycle para sa mga daloy ng trabaho ng agent-to-agent.

Mga sinusuportahang pamamaraan:

- `mensahe/ipadala`
- `mensahe/stream`
- `mga gawain / makuha`
- `mga gawain/kansela`
- `mga gawain/resubscribe`
- `tasks/pushNotificationConfig/*`

Mga kasalukuyang operasyon:

- `discover-skills`
- `recommend-stack`
- `prepare-install-plan`

Modelo ng tibay at koordinasyon:

- memorya, JSON, o SQLite lokal na pagtitiyaga
- i-restart ang resume
- opsyonal na panlabas na tagapagpatupad ng proseso
- opt-in na naupahan na koordinasyon ng pila para sa mga shared SQLite na manggagawa
- opsyonal na redis-backed na koordinasyon bilang advanced na naka-host na landas

Ang pangunahing pagpipiliang arkitektura dito ay**simple-first local operation**. Ang Redis ay umiiral bilang isang advanced na opsyon, ngunit ang default na path ng produkto ay nananatiling lokal at dependency-light.---

## ⚙️ Build Pipeline

| Script | Wika | Layunin |
|:-------|:---------|:--------|
| 📊 `skill_metadata.py` | Python | Pagpapatunay, taxonomy, pagmamarka, at static na pag-scan sa seguridad |
| ✅ `validate_skills.py` | Python | Pagbuo ng metadata bawat kasanayan at para sa buod ng ugat |
| 📑 `generate_index.py` | Python | Index ng mga kasanayan, manifest, archive, lagda, at checksum |
| 🏗️ `build_catalog.js` | Node.js | Panghuling `dist/catalog.json` at `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Python | Pag-audit at muling pagsulat ng kategoryang kanonikal |
| 🔍 `verify_archives.py` | Python | Pag-verify ng archive at lagda |

Dalawang detalye ang mahalaga sa pagpapatakbo:

1. Ang `dist/` ay bahagi ng runtime contract at sadyang ginawa
2. sapat na deterministiko ang build para suportahan ang pag-verify ng CI at pagpirma ng release---

## 📦 Published Catalog

Ang kasalukuyang pampublikong catalog ay sumasaklaw sa 32 kasanayan:

-**Pagtuklas at pagpaplano**: `find-skills`, `brainstorming`, `architecture`, `debugging`
-**Mga design system at accessibility**: `design-systems-ops`, `accessibility-audit`
-**Paghahatid ng produkto at full-stack**: `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
-**Seguridad**: `security-auditor`, `vulnerability-scanner`, `incident-response`, `threat-modeling`
-**OSS maintainer workflows**: `documentation`, `changelog`, `create-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering`
-**AI engineering**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Ang lahat ng pitong bundle ay ganap na naka-back:

- `mahahalaga` → `4/4`
- `full-stack` → `5/5`
- `design` → `4/4`
- `seguridad` → `4/4`
- `devops` → `5/5`
- `ai-engineer` → `5/5`
- `oss-maintainer` → `4/4`

Kasalukuyang pagkalat ng marka mula sa nabuong katalogo:

- mga marka ng kalidad: `94, 95, 96, 97, 100`
- mga marka ng pinakamahusay na kasanayan: `98, 99, 100`
- marka ng seguridad: lahat ng nai-publish na kasanayan sa kasalukuyan ay `95`

High end ng kinatawan:

- `omni-figma` → `quality 100`, `best_practices 100`
- `accessibility-audit` → `quality 99`, `best_practices 100`
- `auth-flows` → `quality 97`, `best_practices 99`
- `design-systems-ops` → `quality 97`, `best_practices 99`
- `release-engineering` → `quality 97`, `best_practices 99`
- `threat-modeling` → `quality 97`, `best_practices 99`
- `context-engineering` → `quality 97`, `best_practices 99`

Kinatawan sa ibabang dulo sa loob ng kasalukuyang nangungunang banda:

- `architecture` → `quality 94`, `best_practices 98`
- `changelog` → `quality 94`, `best_practices 98`
- `create-pr` → `quality 95`, `best_practices 98`

Ito ay sinadya. Tinutukoy na ngayon ng scorer ang "mahusay" mula sa "katangi-tangi" sa halip na i-flatte ang buong catalog sa itaas.---

## 🌟 Strengths

1.**Artifact-unang disenyo**
   Ang bawat runtime surface ay gumagamit ng parehong nabuong catalog at mga manifest.
2.**Malawak na saklaw ng protocol**
   Ang CLI, API, MCP, at A2A ay magkakasamang nabubuhay nang hindi hinahati ang modelo ng data.
3.**Malakas na lokal na produkto na ergonomya**
   Ang guided install, visual shell, `config-mcp`, at dry-run default ay ginagawang magagamit ang proyekto nang higit sa mga power user.
4.**Tapat na postura ng seguridad**
   Ang mga pinahihintulutang lokal na pagsusulat, static na pag-scan, pag-sign, mga checksum, at pag-verify ng release ay tahasan lahat.
5.**Healthy MCP reach**
   Sinusuportahan na ngayon ng proyekto ang malawak na hanay ng mga kasalukuyang kliyenteng may kakayahang MCP nang hindi nagpapanggap na matatag ang mga hindi dokumentadong target.---

## 🔮 Opportunities

1.**Mas malalim na saklaw ng bundle**
   Ang susunod na hakbang ay ang pagdadalubhasa sa loob ng mga umiiral nang bundle, hindi lamang malawak na saklaw.
2.**Mas mayamang scorer semantics**
   Mayroon pa ring puwang upang suriin ang lalim ng reference-pack at kalidad ng daloy ng trabaho nang mas semantically.
3.**Higit pang mga kliyenteng manunulat lamang kung saan makatwiran**
   Ang pagpapalawak ay dapat manatiling disiplinado at nakatali sa matatag na opisyal na mga dokumento.
4.**Pagbubulok ng Validator**
   Ang `skill_metadata.py` ay isa pa ring malaking module at makikinabang sa internal decomposition sa paglipas ng panahon.
5.**Pagtaas ng naka-host na pamamahala**
   Ang kasalukuyang in-process na baseline ay sapat na para sa self-hosting, ngunit ang pag-deploy ng enterprise ay sa kalaunan ay gusto ng external na gateway at pagsasama ng pagkakakilanlan.