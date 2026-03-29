# 🧠 Omni Skills (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Ang katalogo ng kasanayan na nag-i-install mismo.**<br/>
CLI · API · MCP · A2A — lahat mula sa iisang command na `npx`.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ I-install sa loob ng 1 min](#-installation) · [🛠️ Piliin ang iyong tool](#-choose-your-tool) · [📖 CLI Guide](docs/users/CLI-USER-GUIDE.md) · [📦 Bundle](docs/users/BUNDLES.md) · [🔌-runtime] Omni Skills](#-why-omni-skills)</div>

---

<div align="center">

### Pangkalahatang-ideya

</div>

| | Sukatan | Halaga |
|:--|:-------|:------|
| 📦 |**Mga Na-publish na Kasanayan**| `32` sa 15 aktibong kategorya |
| 🎯 |**Mga Bundle**| `7` na ganap na naka-back na na-curate na mga bundle |
| 🖥️ |**Mag-install ng Mga Kliyente**| Mga katulong sa AI coding na may kakayahang mag-install ng `7` |
| 🔌 |**Mga Kliyente ng MCP**| `16` MCP config-capable na mga kliyente |
| 🔐 |**Curated Output**| `32` pinahusay na English derivatives sa `skills_omni/` |
| 📋 |**Kasalukuyang Paglabas**| `v0.1.2` |---

## Mabilis na Simula

>**Naghahanap ng mga kasanayan sa AI coding, mga kasanayan sa Claude Code, mga kasanayan sa Cursor, mga kasanayan sa Codex CLI, mga kasanayan sa Gemini CLI, mga kasanayan sa Antigravity, o na-install na mga library ng `SKILL.md`?**
> Nasa tamang lugar ka.### 1️⃣ What is this?

Ang Omni Skills ay isang**nai-install na catalog ng kasanayan at runtime**para sa mga AI coding assistant. Sa kaibuturan nito, isa itong pampublikong repository ng magagamit muli na `SKILL.md` na mga playbook — ngunit hindi tulad ng mga simpleng koleksyon ng kasanayan, ang repo**ay**ang distribution at runtime layer.

<mga detalye>
<summary>📋 <strong>Ano ang kasama</strong></summary>

| Bahagi | Paglalarawan |
|:----------|:-----------|
| 🧠**Mga Kasanayan**| Mga na-curate na playbook na nakabatay sa `SKILL.md` para sa mga AI assistant |
| 📦**Mga Manifest**| Mga nabuong JSON na manifest, bundle, at archive |
| 🧭**May Gabay na Pag-install**| Mga daloy ng pag-install ng interactive na TTY at visual terminal |
| 🌐**Catalog API**| Read-only HTTP API para sa paghahanap, pagtuklas, at pag-download |
| 🔌**MCP Server**| Discovery, rekomendasyon, at client-aware config tooling |
| 🤖**A2A Runtime**| Orkestrasyon ng gawain ng ahente-sa-agent |
| ✨**Pipeline ng Enhancement**| Ini-publish ng pribadong enhancer ang mga na-curate na English derivatives sa `skills_omni/` |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *"Gamitin ang `@brainstorming` para magplano ng SaaS MVP."*
>
> 💬 *"Gamitin ang `@api-design` para suriin ang disenyo ng endpoint na ito."*
>
> 💬 *"Gamitin ang `@debugging` para ihiwalay ang regression na ito."*### 5️⃣ Start with a bundle

| 🎯 Layunin | Bundle | Utos |
|:---------|:-------|:--------|
| Pangkalahatang engineering | `mahahalaga` | `npx omni-skills --bundle essentials` |
| Paghahatid ng produkto + app | `full-stack` | `npx omni-skills --bundle full-stack` |
| Mga sistema ng disenyo | `disenyo` | `npx omni-skills --bundle design` |
| Pagsusuri sa seguridad | `seguridad` | `npx omni-skills --bundle security` |
| Infra at release | `devops` | `npx omni-skills --bundle devops` |
| LLM application | `ai-engineer` | `npx omni-skills --bundle ai-engineer` |
| Pagpapanatili ng OSS | `oss-maintainer` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Bago maghambing ng mga bundle o pumili ng path ng pag-install, nakakatulong ang pag-unawa sa limang building block na ito:

| Konsepto | Ano ang ibig sabihin nito |
|:--------|:-------------|
| 🧠**Mga Kasanayan**| Muling magagamit na mga playbook ng `SKILL.md` na nagtuturo sa isang assistant kung paano magsagawa ng maayos na daloy ng trabaho |
| 📦**Mga Artifact ng Catalog**| Nakabuo ng JSON at mga output ng archive na nagpapagana sa paghahanap, paghahambing, pag-download, at pag-install |
| 🔌**MCP Config**| Configuration sa panig ng kliyente para sa mga katulong na tumuklas ng Omni Skills sa pamamagitan ng mga tool ng MCP |
| 🤖**A2A Runtime**| Ahente-to-agent orchestration para sa pagtuklas, rekomendasyon, at handoff ng install-plan |
| ✨**Curated Output**| `skills_omni/` — ang Omni-maintained enhanced surface, hiwalay sa native upstream intake |

>**📝 Native/Curated na patakaran:**
> - Tumatanggap ang `skills/` ng native upstream intake sa anumang wika
> - Ang `skills_omni/` ay palaging na-curate at na-publish sa English
> - Ang `skills_omni/` ay isang one-way surface at hindi bumabalik sa native intake---

## 💡 Why Omni Skills

>**Hindi lang "isa pang repositoryo na may mga kasanayan sa mga folder."**
> Ang Omni Skills ay may mas malakas na kontrata at mas malawak na runtime surface.

| Kung gusto mo... | 📁 Repo ng mga tipikal na kasanayan | ✨ Omni Skills |
|:-------------|:----------------------|:--------------|
| I-install sa isang tunay na katulong | Manu-manong kopya o custom na script | `npx omni-skills`, may gabay na pag-install, visual UI, selective `--skill` at `--bundle` |
| Maghanap at maghambing ng mga kasanayan | Manu-manong mag-browse ng markdown | Binuo ng catalog, pag-filter, pagpaplano ng bundle, paghahanap, paghahambing, at rekomendasyon |
| Gamitin ang parehong data sa mga tool | Paghiwalayin ang lohika bawat tool | Mga nakabahaging manifest at catalog para sa CLI, API, MCP, at A2A |
| I-configure ang mga MCP client | Hand-edit na mga file | `config-mcp`, mga preview ng lokal na sidecar, mga nabuong recipe, at mga pinahihintulutang pagsusulat |
| Trust release | Best-effort packaging | Mga checksum, nilagdaang archive, pag-verify ng scanner, paglabas ng CI, at pag-publish ng preflight |
| I-curate ang paggamit ng komunidad | Anuman ang mga lupain ay mananatiling tulad ng | Native intake sa `skills/`, na-curate na English derivatives sa `skills_omni/` na may attribution |---

## 🖥️ Compatibility and Invocation

Ang mga kasanayang ito ay sumusunod sa modelong `SKILL.md` at maaaring gamitin bilang isang normal na imbakan, ngunit ini-install at kino-configure din ng package ang mga ito sa isang malawak na lugar:

>**7**mga kliyenteng may kakayahang mag-install ·**16**mga kliyenteng may kakayahang mag-config ng MCP### 🎯 Install-Capable Clients

| Tool | Uri | Halimbawa ng Panawagan | I-install ang Path |
|:-----|:-----|:-------------------|:------------|
| 🟢**Claude Code**| CLI | `Gumamit ng brainstorming upang magplano ng feature` | `~/.claude/skills` |
| 🔵**Cursor**| IDE | `@brainstorming tulungan mo akong magplano ng feature` | `~/.cursor/skills` |
| 🟡**Gemini CLI**| CLI | `Gumamit ng brainstorming upang magplano ng feature` | `~/.gemini/skills` |
| 🔴**Codex CLI**| CLI | `Gumamit ng brainstorming upang magplano ng feature` | `~/.codex/skills` |
| 🟠**Kiro**| CLI / IDE | `Gumamit ng brainstorming upang magplano ng feature` | `~/.kiro/skills` |
| 🟣**Antigravity**| IDE | `Gamitin ang @brainstorming para magplano ng feature` | `~/.gemini/antigravity/skills` |
| ⚪**OpenCode**| CLI | `opencode run @brainstorming` | `<workspace>/.opencode/skills` |

<mga detalye>
<summary>🔌 <strong>Mas malawak na MCP Configuration Coverage (16 na kliyente)</strong></summary>

Ang mga target na ito ay bahagi ng suportadong MCP configuration surface, kahit na hindi sila nag-install ng mga target para sa mga direktoryo ng kasanayan:

| Kliyente o Ibabaw | Uri ng Suporta | Mga Tala |
|:------------------|:------------|:------|
| Mga setting at desktop ni Claude | MCP config | Mga setting, desktop, at mga daloy ng kaalaman sa proyekto |
| VS Code | MCP config | Mga target ng user, workspace, insider, at Dev Container |
| Gemini | MCP config | Mga setting ng user at workspace |
| Cline | MCP config | First-class na config target |
| GitHub Copilot CLI | MCP config | Mga target ng user at repo config |
| Magpatuloy | MCP config | Workspace YAML generation |
| Windsurf | MCP config | Target ng config ng user |
| Zed | MCP config | Target ng config ng workspace |
| Gansa | MCP config | Target ng user config na may nabuong recipe |
| Kilo Code | MCP config | Mga target ng user, proyekto, at workspace |
| Junie | MCP config | Mga target ng project at user config |</details>

---

## I-install

<talahanayan>
<tr>
<td width="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

| Tool | I-install ang Command | Unang Paggamit |
|:-----|:----------------|:----------|
| 🟢 Claude Code | `npx omni-skills --claude` | `Gumamit ng brainstorming upang magplano ng feature` |
| 🔵 Cursor | `npx omni-skills --cursor` | `@brainstorming tulungan mo akong magplano ng feature` |
| 🟡 Gemini CLI | `npx omni-skills --gemini` | `Gumamit ng brainstorming upang magplano ng feature` |
| 🔴 Codex CLI | `npx omni-skills --codex` | `Gumamit ng brainstorming upang magplano ng feature` |
| 🟣 Antigravity | `npx omni-skills --antigravity` *(default)* | `Gamitin ang @brainstorming para magplano ng feature` |
| 🟠 Kiro | `npx omni-skills --kiro` | `Gumamit ng brainstorming upang magplano ng feature` |
| ⚪ OpenCode | `npx omni-skills --opencode` | `opencode run @brainstorming` |
| 📂 Pasadyang landas | `npx omni-skills --path ./my-skills` | Depende sa iyong tool |

> 📖**Hindi sigurado kung saan magsisimula?**
> - [🚀 Pagsisimula](docs/users/GETTING-STARTED.md) — i-install at i-verify sa loob ng wala pang 2 minuto
> - [🧭 CLI User Guide](docs/users/CLI-USER-GUIDE.md) — buong command reference
> - [📗 Gabay sa Paggamit](docs/users/USAGE.md) — mga prompt, pattern, at runtime mode---

## 🔌 Runtime Surfaces

Ang Omni Skills ay hindi lamang isang library ng mga kasanayan. Inilalantad nito ang**apat na runtime surface**na gumagamit ng parehong nabuong catalog:

| Ibabaw | Estado | Ano ang ginagawa nito | Halimbawa |
|:--------|:------|:-------------|:--------|
| 🖥️**CLI**| ✅ Magagamit | Maghanap, mag-install, mag-diagnose, visual UI, boot services, smoke checks | `npx omni-skills doctor` |
| 🌐**Catalog API**| ✅ Magagamit | Read-only na catalog, paghahanap, mga bundle, paghambingin, pag-install ng mga plano, pag-download | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Magagamit | Pagtuklas, rekomendasyon, preview ng pag-install, lokal na sidecar, mga daloy ng config | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅ Magagamit | Lifecycle ng gawain, handoff, botohan, streaming, pagkansela, pagtitiyaga | `npx omni-skills a2a --port 3335` |

<mga detalye>
<summary>🖥️ <strong>Visual shell at operator command</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<mga detalye>
<summary>🔌 <strong>MCP transports and config</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

| Sukatan | Bilangin |
|:-------|:------|
| 🧠 Nai-publish na mga kasanayan |**32**|
| 📂 Mga aktibong kategorya |**15**|
| 📦 Ganap na naka-back na mga bundle |**7**|
| ✨ Mga na-curate na derivative |**32**sa `skills_omni/` |### 📦 Bundle Availability

| Bundle | Mga Kasanayan | Mga miyembro |
|:-------|:-------|:--------|
| 🧰 `mahahalaga` |**4/4**✅ | `find-skills` · `brainstorming` · `architecture` · `debugging` |
| 🌐 `full-stack` |**5/5**✅ | `frontend-design` · `api-design` · `database-design` · `omni-figma` · `auth-flows` |
| 🎨 `disenyo` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `accessibility-audit` · `design-token-governance` |
| 🛡️ `seguridad` |**4/4**✅ | `security-auditor` · `vulnerability-scanner` · `incident-response` · `threat-modeling` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `observability-review` · `release-engineering` |
| 🤖 `ai-engineer` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contracts` · `model-serving` |
| 🔧 `oss-maintainer` |**4/4**✅ | `find-skills` · `create-pr` · `changelog` · `documentation` |### ✨ Native Intake → Curated Output

| Ibabaw | Layunin | Wika |
|:--------|:--------|:---------|
| 📥 `kasanayan/` | katutubong paggamit | Anumang wika |
| ✨ `skills_omni/` | Na-curate na Omni-maintained na output | Laging English |

>**ℹ️**Ang mga pagbabago sa katutubong kasanayan ay muling pinoproseso ng pribadong enhancer at nire-refresh sa na-curate na baseline. Ginagawa nitong ang `skills_omni/` isang**pinapanatiling ibabaw ng catalog**, hindi isang pangalawang kopya.---

## 🛡️ Security and Release Posture

> Nagpapadala ang Omni Skills ng mas malakas na kuwento ng release at pag-verify kaysa sa isang plain markdown na repository.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<mga detalye>
<summary>📋 <strong>Ano ang pinapatunayan ng pipeline</strong></summary>

- ✅ Pagpapatunay ng kasanayan at pagbuo ng metadata
- ✅ Taxonomy normalization at recategorization tooling
- ✅ Pagbuo ng katalogo at archive
- ✅ Mga awtomatikong pagsubok
- ✅ Mga boot path ng API, MCP, at A2A
- ✅ Pag-verify ng archive
- ✅ Package preflight na may `npm pack --dry-run`</details>

<mga detalye>
<summary>🔐 <strong>Bitawan ang postura</strong></summary>

| Kontrolin | Paglalarawan |
|:--------|:-----------|
| 🔒 SHA-256 na mga checksum | Checksum manifests para sa lahat ng archive |
| ✍️ Mga nilagdaang artifact | Mga hiwalay na lagda sa mga artifact na inilabas |
| 🤖 CI-enforced | Ilabas ang pag-verify sa CI bago ang publikasyon |
| 🦠 Mga gate ng scanner | ClamAV at VirusTotal-gated na daloy ng release |
| 📦 GitHub Release | Automated GitHub Release generation |
| 📋 npm publication | Mula sa na-verify na tarball lamang |
| 🔄 Auto release | Sa qualifying skill ay nagsasama sa `pangunahin` |

**Nagti-trigger lang ang auto-release kapag nagbago ang isang pagsasanib:**
- `kasanayan/*/**`
- `skills_omni/*/**`
- `data/bundles.json`

Doc-only na mga pagbabago**huwag**trigger ang package publication.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Doc | Ano ang Matututuhan Mo |
|:----|:-----------------|
| 🚀 [Pagsisimula](docs/users/GETTING-STARTED.md) | I-install, i-verify, at i-invoke sa loob ng 2 minuto |
| 🧭 [CLI User Guide](docs/users/CLI-USER-GUIDE.md) | Buong command reference at real-world pattern |
| 📗 [Gabay sa Paggamit](docs/users/USAGE.md) | Mga CLI command, install mode, runtime, at MCP config |
| 📦 [Mga Bundle](docs/users/BUNDLES.md) | Mga na-curate na bundle at availability |
| 📚 [Catalog](docs/CATALOG.md) | Awtomatikong nabuong catalog ng mga nai-publish na kasanayan |
| 🔧 [System Runbook](docs/operations/RUNBOOK.md) | Bumuo, maghatid, mag-secure, at mag-troubleshoot |### 🏗️ For Architects

| Doc | Ano ang Matututuhan Mo |
|:----|:-----------------|
| 🗺️ [Agent-Native Roadmap](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Ebolusyon ng arkitektura at mga natitirang lugar |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo desisyon |
| 🔬 [Pagsusuri ng Codebase](docs/architecture/CODEBASE-ANALYSIS.md) | Komposisyon ng runtime at mga hangganan ng system |
| 🌐 [Catalog API](docs/specs/CATALOG-API.md) | Mga endpoint ng HTTP, pag-filter, pamamahala, at pag-download |
| 🧩 [CLI Guided Installer](docs/specs/CLI-GUIDED-INSTALLER.md) | Kontrata sa pag-uugali para sa ginabayang installer |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Ink visual shell at state model |
| 🔌 [Lokal na MCP Sidecar](docs/specs/LOCAL-MCP-SIDECAR.md) | Mga tool sa filesystem at modelo ng allowlist |
| 📊 [Client Support Matrix](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Buong sanggunian ng kliyente at manunulat |
| 🏷️ [Pag-uuri ng Kasanayan](docs/specs/SKILL-CLASSIFICATION.md) | Taxonomy, pagmamarka, at metadata |
| 🛡️ [Pagpapatunay ng Seguridad](docs/specs/SECURITY-VALIDATION.md) | Mga scanner, archive, at lagda |
| 📋 [Skill Manifest](docs/specs/SKILL-MANIFEST.md) | Nababasa ng machine na format ng manifest |### 🤝 For Contributors

| Doc | Ano ang Matututuhan Mo |
|:----|:-----------------|
| 📝 [Contributing Guide](CONTRIBUTING.md) | Repo workflow at mga inaasahan sa PR |
| 🧾 [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) | Native intake, enhancer processing, reviewer expectations |
| 📄 [Skill Template](docs/contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` na may frontmatter at structure |
| 🔬 [Skill Anatomy](docs/contributors/SKILL-ANATOMY.md) | Mga inaasahan sa istraktura at kalidad |
| ✅ [Quality Bar](docs/contributors/QUALITY-BAR.md) | Pamantayan sa pagtanggap |
| 🏆 [High-Score Playbook](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Ano ang nagtutulak ng matataas na marka |---

## 🗂️ Repository Layout

| Landas | Layunin |
|:-----|:--------|
| 📂 `kasanayan/` | Mga kasanayan sa pagkakasulat ng kanonikal at katutubong paggamit |
| ✨ `skills_omni/` | Na-curate ang Omni-maintained enhanced derivatives |
| 📖 `docs/` | User, contributor, arkitektura, pagpapatakbo, at spec na dokumentasyon |
| 📦 `dist/` | Mga nabuong manifest, bundle, catalog, at archive |
| 📁 `data/` | Mga kahulugan ng bundle at static na sumusuporta sa data |
| 🧠 `mga pakete/catalog-core/` | Nakabahaging catalog runtime |
| 🌐 `mga pakete/server-api/` | Read-only HTTP API |
| 🔌 `mga pakete/server-mcp/` | MCP server at lokal na sidecar |
| 🤖 `mga pakete/server-a2a/` | A2A runtime at orkestrasyon ng gawain |
| 🖥️ `mga tool/bin/` | CLI entrypoints |
| 📚 `mga tool/lib/` | Installer at UI helpers |
| ⚙️ `mga tool/script/` | Pagpapatunay, pagbuo, pagpapalabas, at mga script ng pagsubok |

>**ℹ️**Ang `dist/` ay sadyang naka-bersyon dahil ang mga nabuong artifact ay bahagi ng pag-install, API, MCP, A2A, usok, at kontrata sa pagpapalabas.---

## 🤝 Contributing

Tumatanggap ang Omni Skills ng katutubong upstream na paggamit ng kasanayan sa ilalim ng `mga kasanayan/`.

| Panuntunan | Mga Detalye |
|:-----|:--------|
| 📥 Native intake | Maaaring magaspang, isinulat sa anumang wika |
| ✨ Na-curate na output | `skills_omni/` nakalaan para sa automation-authored Omni derivatives |
| 🚫 Mga manu-manong pag-edit | Ang mga pampublikong manu-manong pag-edit sa `skills_omni/` ay tinanggihan |
| 🔄 Pinoproseso muli | Pinoproseso muli ng pribadong enhancer ang mga katutubong pagbabago at nire-refresh ang na-curate na baseline |

> 📖**Magsimula sa:**[Contributing Guide](CONTRIBUTING.md) · [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Uri | Lisensya |
|:-----|:--------|
| 💻 Code at tooling | [MIT License](LICENSE) |
| 📝 Dokumentasyon at nilalaman ng kasanayan | [CC BY 4.0](LICENSE-CONTENT) |---

<div align="center">

**Ginawa gamit ang 🧠 ng Omni Skills Team**

[⭐ Lagyan ng star ang repo na ito](https://github.com/diegosouzapw/omni-skills) · [🐛 Mag-ulat ng bug](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Mga Talakayan](https://github.com/diegosouzapw/diomnision-skills)lls</div>
