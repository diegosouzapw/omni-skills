# 📖 Omni Skills — Documentation Hub (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Ang pangunahing sanggunian para sa paggamit, pagpapatakbo, pagpapalawak, at pag-unawa sa kasalukuyang platform ng Omni Skills.**

Ang mga karaniwang file ng komunidad ay nakatira sa root ng repositoryo:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT)---

## 📊 Status Snapshot

| Lugar | Estado | Mga Detalye |
|:-----|:------|:--------|
| 🏗️**Rtime**| ✅ Kasalukuyan | Pinag-isang CLI, Ink visual shell, API, MCP, at A2A lahat ay nagpapadala mula sa parehong pakete |
| 📦**Catalog**| 📌 32 kasanayan | 32 nai-publish na mga kasanayan sa `L3` sa 15 aktibong kategorya ng catalog at 7 fully backed na bundle |
| 🎯**I-install**| ✅ Kasalukuyan | May gabay na pag-install ng TTY, selective na `--skill` at `--bundle`, suporta sa custom na path, at pag-install na hinimok ng pagtuklas |
| 🌐**API**| ✅ Kasalukuyan | Read-only na registry API na may auth, admin runtime, paglilimita sa rate, CORS/IP allowlist, maintenance mode, at mga pag-download |
| 🔌**MCP**| ✅ Kasalukuyan | `stdio` · `stream` · `sse`, lokal na sidecar mode, 7 client na may kakayahang mag-install, 16 na client na may kakayahang mag-config, 33 target na config, at 19 na profile ng config |
| 🤖**A2A**| ✅ Kasalukuyan | Simple-first local runtime na may JSON/SQLite durability, restart resume, SSE streaming, cancellation, external executor mode, at optional leased coordination kapag tahasang pinagana |
| 🛡️**Seguridad**| ✅ Kasalukuyan | Static scanner, opsyonal na ClamAV/VirusTotal, mga signed release artifact, archive checksum, at release-time na pag-verify |
| 📋**Pag-uuri**| ✅ Kasalukuyan | Canonical taxonomy, maturity, semantic quality spread, best-practices spread, at security scoring |
| 📁**Mga Archive**| ✅ Kasalukuyan | Per-skill na `.zip` at `.tar.gz` na mga archive na may SHA-256 checksum manifests |
| 🔐**Pagpirma**| ✅ Kasalukuyan | Mga hiwalay na lagda na ipinapatupad sa mga tag ng paglabas; ginagamit ng mga lokal na daloy ng pag-install ang parehong manifest at checksum metadata |
| 🧬**Daloy ng Intake**| ✅ Kasalukuyan | Napunta sa ilalim ng `kasanayan/` ang mga katutubong kasanayan; Sinusuri sila ng PR automation at nagmumungkahi ng mga derivatives na pinahusay ng Omni sa ilalim ng `skills_omni/` |## 🔭 Current Project State

Ang foundation track ay naninirahan na ngayon sa aktibong estado ng proyekto, at ang pangalawang wave ng pagpapalawak ng kategorya ay nasa catalog na. Ang proyekto ay dapat na ngayong basahin bilang isang gumaganang baseline na may opsyonal na mga track sa pagpapalawak sa hinaharap:

- pampublikong `v0.1.2` at pribadong `v0.0.1` ang kasalukuyang stable release floor
- Saklaw na ngayon ng catalog ang 32 nai-publish na mga kasanayan sa 15 aktibong kategorya at 7 ganap na naka-back na mga bundle
- parehong operational ang native intake at na-curate na `skills_omni/` output, kabilang ang multilingual native intake at English-only curated na output
- nasa serbisyo ang mga protocol surface, release automation, at pribadong enhancement automation, hindi sa bootstrap

Ang pagpapalawak sa hinaharap ay mananatiling sinadya:

- palalimin ang `design`, `tools`, `data-ai`, at `machine-learning`
- iwasang muling buksan ang mga natutulog na non-code-native na kategorya hanggang ang kasalukuyang code-native na track ay magkaroon ng mas malalim na lalim
- panatilihing buo ang kalidad ng floor at enhancer review path habang ginagawa ito

Ang planong iyon ay nahahati na ngayon sa:

- ang nakumpletong unang expansion wave sa [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- ang nakumpletong pangalawang expansion wave sa [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- at ang inaasam-asam na backlog sa [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Ang mga tanong sa arkitektura na ito ay hindi na "bukas" sa pagsasanay at itinuturing na ngayon bilang mga desisyon ng proyekto:

1.**Nananatiling manifest-first ang pamamahagi kasama ang mga nilagdaang archive**
   Ang manifest na nababasa ng makina ay nananatiling kontratang ginagamit ng CLI, API, MCP, at A2A. Ang mga signed per-skill archive ay ang pag-download at release surface na naka-layer sa ibabaw ng kontratang iyon.
2.**Ang mga pribado o premium na catalog ay dapat na muling gamitin ang parehong manifest schema**
   Ang auth at patakaran ay dapat na layered sa labas, hindi sa pamamagitan ng pag-forking ng manifest o catalog na hugis.
3.**Ang MCP config ay dapat magsama-sama sa ilang canonical export na pamilya**
   Ang Omni Skills ay nag-standardize na ngayon sa JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions`, at TOML `[mcp_servers]`, habang pinapanatili ang mga pasadyang manunulat lamang kung saan ang opisyal na structure ng doc ng kliyente ay nangangailangan ng ibang doc ng istruktura ng kliyente.

Ang mga desisyong iyon ay umaayon sa kasalukuyang opisyal na MCP at dokumentasyon ng kliyente, kabilang ang:

- opisyal na MCP Registry at gabay sa suporta ng extension sa `modelcontextprotocol.io`
- OpenAI Docs MCP at Codex CLI docs sa `developers.openai.com` at `platform.openai.com`
- VS Code MCP extension at mga dokumento ng produkto sa `code.visualstudio.com`
- mga client doc para sa Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman, at JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Ano ang Matututuhan Mo |
|:----|:------------------|
| 📘 [Pagsisimula](mga user/GETTING-STARTED.md) | I-install, i-verify, at gamitin ang iyong unang kasanayan |
| 🧭 [CLI User Guide](users/CLI-USER-GUIDE.md) | Buong command reference at real-world na mga pattern ng paggamit ng CLI |
| 📗 [Gabay sa Paggamit](mga user/USAGE.md) | Mga CLI command, install mode, runtime command, at MCP config flows |
| 📦 [Mga Bundle](mga user/BUNDLES.md) | Mga na-curate na bundle at ang kanilang kasalukuyang availability |
| 📚 [Catalog](CATALOG.md) | Awtomatikong nabuong catalog ng mga nai-publish na kasanayan |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Buuin, ihatid, i-secure, at i-troubleshoot ang runtime |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Ano ang Matututuhan Mo |
|:----|:------------------|
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Ebolusyon ng arkitektura, mga saradong desisyon, at natitirang mga lugar ng pagpapalawak |
| 🧭 [CLI UX Roadmap](architecture/CLI-UX-ROADMAP.md) | Makasaysayang plano at kasalukuyang hugis ng guided at visual na CLI |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo at shared-runtime na desisyon |
| 🔬 [Pagsusuri ng Codebase](arkitektura/CODEBASE-ANALYSIS.md) | Kasalukuyang komposisyon ng runtime, mga bilang, at mga hangganan ng system |
| 🌐 [Catalog API Surface](specs/CATALOG-API.md) | Mga endpoint ng HTTP, pag-filter, pamamahala, at pag-download |
| 🧩 [CLI Guided Installer](specs/CLI-GUIDED-INSTALLER.md) | Kontrata sa pag-uugali para sa ginabayang installer |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Ink visual shell, state model, at service hub |
| 🔌 [Lokal na MCP Sidecar](specs/LOCAL-MCP-SIDECAR.md) | Mga tool sa filesystem-aware, allowlist model, at config writing |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Mga sinusuportahang CLI at IDE na kliyente, manunulat, manu-manong target, at source reference |
| 📊 [Skill Classification](specs/SKILL-CLASSIFICATION.md) | Taxonomy, scoring heuristics, at metadata artifacts |
| 🛡️ [Pagpapatunay ng Seguridad](specs/SECURITY-VALIDATION.md) | Mga scanner, archive, lagda, at pag-verify ng release |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Nababasa ng machine na manifest format at kontrata sa pagiging tugma |### 🤝 If You Want to **Contribute**

| Doc | Ano ang Matututuhan Mo |
|:----|:------------------|
| 📝 [Contributing Guide](../CONTRIBUTING.md) | Repo workflow at pull request na inaasahan |
| 🧾 [Skill PR Workflow](contributors/SKILL-PR-WORKFLOW.md) | Native intake, awtomatikong pagpoproseso ng enhancer, `skills_omni/` publishing, at mga inaasahan ng reviewer |
| 📄 [Skill Template](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` na may kasalukuyang frontmatter at structure |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Istruktura at kalidad ng mga inaasahan para sa isang kasanayan |
| ✅ [Quality Bar](contributors/QUALITY-BAR.md) | Pamantayan sa pagtanggap para sa repositoryo |
| 🏆 [High-Score Playbook](contributors/HIGH-SCORE-PLAYBOOK.md) | Ano ang nagtutulak ng mataas na maturity, kalidad, pinakamahusay na kagawian, at mga marka ng seguridad |
| 📋 [Tasks Backlog](tasks/README.md) | Detalyadong implementasyon backlog para sa natitirang pampubliko at pribadong gawain |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Ang na-publish na binary na `omni-skills` ay ang pinag-isang pampublikong entry point.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

Para sa kumpletong end-user command surface, gamitin ang [CLI User Guide](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Ang build pipeline ay naglalabas ng mga file na nababasa ng makina na nagtutulak sa bawat runtime surface:

| Artifact | Layunin |
|:---------|:--------|
| `metadata.json` | Pagpapatunay sa buong repositoryo at buod ng marka |
| `skills_index.json` | Repo-local normalized skill index |
| `dist/catalog.json` | Nai-publish na catalog para sa paghahanap at listahan |
| `dist/bundles.json` | Mga kahulugan ng bundle na may kakayahang magamit |
| `dist/manifests/<skill>.json` | Per-skill machine-readable manifest |
| `dist/archives/<skill>.zip` | Archive ng kasanayan (zip) |
| `dist/archives/<skill>.tar.gz` | Archive ng kasanayan (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifest |

Ang `dist/` ay nananatiling nakatuon sa layunin. Ang mga nabuong artifact na ito ay bahagi ng pag-install, API, MCP, A2A, usok, at kontrata sa pagpapalabas.### 🌐 API

```bash
npx omni-skills api --port 3333
```

Read-only na registry API para sa mga kasanayan, bundle, paghahambing, pagpaplano sa pag-install, at pag-download ng artifact.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Sinusuportahan na ngayon ng lokal na sidecar ang first-class na MCP config writing para sa:

- Claude Code
- Cursor
- VS Code at Dev Container
- Gemini CLI
- Antigravity
- Kiro
- Codex CLI
- Magpatuloy
- Windsurf
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilo Code
- Zed
- Gansa### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Lifecycle ng gawain, streaming, pagtitiyaga, i-restart ang pagbawi, at simple-unang lokal na orkestrasyon. Available ang shared leased execution kapag tahasang pinagana; Ang Redis ay nananatiling isang advanced na naka-host na opsyon, hindi ang default na lokal na landas.---

## 🗂️ Repository Map

| Landas | Layunin |
|:-----|:--------|
| 📂 `kasanayan/` | Mga kasanayan sa pagkakaakda ng kanonikal |
| 📖 `mga doc/user/` | Dokumentasyon ng end-user |
| 🤝 `mga doc/contributor/` | Mga template at gabay ng contributor |
| 🏗️ `docs/architecture/` | Roadmap, ADR, at teknikal na pagsusuri |
| 🔧 `docs/operations/` | Mga operational runbook |
| 📋 `docs/specs/` | Runtime, protocol, at mga kontrata ng artifact |
| 📚 `docs/CATALOG.md` | Binuo na katalogo ng kasanayan |
| 📦 `dist/` | Mga nabuong artifact na nababasa ng makina |
| 🧠 `mga pakete/catalog-core/` | Nakabahaging catalog runtime |
| 🌐 `mga pakete/server-api/` | Read-only HTTP API |
| 🔌 `mga pakete/server-mcp/` | MCP server at lokal na sidecar |
| 🤖 `mga pakete/server-a2a/` | A2A server at task runtime |
| 🖥️ `mga tool/bin/` | CLI entry point |
| 📚 `mga tool/lib/` | Installer at UI helpers |
| ⚙️ `mga tool/script/` | Pagpapatunay, pagbuo, pagpapatunay, at mga pagsubok |---

## 🧪 Release Validation

```bash
npm run smoke
```

Ang smoke run ay nagpapatunay:

- ✅ pagpapatunay ng kasanayan at pagbuo ng metadata
- ✅ taxonomy recategorization tooling
- ✅ pagbuo ng artifact ng katalogo
- ✅ nabuong markdown ng katalogo
- ✅ pagbuo ng archive at pag-verify
- ✅ automated na test suite
- ✅ `npm pack --dry-run`
- ✅ API boot at kalusugan
- ✅ MCP boot sa `stdio`, `stream`, at `sse`
- ✅ A2A boot, polling, SSE streaming, cancellation, at push-config lifecycle