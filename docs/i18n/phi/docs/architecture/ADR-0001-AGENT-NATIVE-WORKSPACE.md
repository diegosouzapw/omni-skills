# 📐 ADR-0001: Agent-Native Workspace Foundation (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Ang pangunahing desisyon sa arkitektura na humubog sa istruktura ng monorepo workspace.**---

## 📊 Status

✅**Tinanggap**— kasalukuyang direksyon ng workspace at aktibong hugis ng repositoryo.---

## 🔍 Context

Nagsimula ang Omni Skills bilang isang**installer-first**repository. Iyon ay sapat na upang ipamahagi ang nilalamang `SKILL.md`, ngunit hindi sapat upang ilantad ang catalog sa mga ahente sa pamamagitan ng mga lumalabas na protocol-native.

Kailangan namin ng isang pundasyon na maaaring suportahan:

| Kinakailangan | Protocol |
|:------------|:---------|
| 🌐 Read-only HTTP catalog API | pahinga |
| 🔌 Read-only na MCP server | Model Context Protocol |
| 🤖 A2A surface na nakaharap sa ahente | Ahente-sa-Agent |
| 📂 Lokal na pag-install ng mga sidecar | Mga tool sa filesystem |

**Critical constraint**: Iwasang i-reparsing ang repo file nang hiwalay sa bawat bagong serbisyo.---

## ✅ Decision

Mag-adopt ng**workspace-oriented monorepo**na may nakabahaging catalog core at mga protocol-specific na package:

| Package | Layunin |
|:--------|:--------|
| 📦 `omni-skills` (ugat) | CLI installer at repo script |
| 🧠 `@omni-skills/catalog-core` | Nakabahaging pag-load, paghahanap, paghahambing, mga bundle, mga plano sa pag-install |
| 🌐 `@omni-skills/server-api` | Read-only REST API |
| 🔌 `@omni-skills/server-mcp` | MCP na may stdio/stream/sse + local sidecar mode |
| 🤖 `@omni-skills/server-a2a` | A2A task runtime na may Agent Card, polling, SSE, at push config |### 📁 Shared Data Sources

Binabasa ng core ng catalog ang mga nabuong artifact mula sa:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Kinalabasan | Epekto |
|:--------|:-------|
| 🔗**Kontrata ng nakabahaging data**| Ang API, MCP, at A2A ay gumagamit ng parehong mga artifact |
| 🖥️**Pinag-isang CLI**| Inilalantad ng isang binary ang pag-install, shell ng UI, API, MCP, A2A, mga diagnostic, at usok |
| 🧩**Protocol isolation**| Ang mga bagong surface ay umuulit nang hindi nakakabit sa mga installer internals |
| 🔌**Lokal na sidecar**| Gumagana ang MCP mode na may kakayahang sumulat sa likod ng isang allowlist, na may mga recipe na alam ng kliyente |
| 📦**Single-package runtime**| Ang na-publish na npm package ay nagdadala ng mga protocol surface, validation tooling, at mga nabuong artifact nang magkasama |---

## ⚠️ Negative Consequences

| Tradeoff | Pagbabawas |
|:---------|:-----------|
| 🔄**Pagdoble ng metadata**| Python build + JavaScript runtime → kalaunan ay pinagsama-sama |
| 🏗️**A2A complexity**| Umiiral na ngayon ang matibay na lifecycle, ngunit ang mga adapter ng koordinasyon ay nagdaragdag ng lalim ng pagpapatakbo |
| 📦**Pag-align ng Catalog**| Nangangailangan ang selective install ng mga command, manifest, at docs upang manatiling naka-synchronize |
| 📋**Bundle metadata gaps**| Maaaring malampasan ng mga bundle ang nai-publish na mga kasanayan, na nangangailangan ng tahasang mga babala ng nawawalang miyembro |---

## ➡️ Follow-Up Items

| # | Aksyon | Katayuan |
|:--|:-------|:-------|
| 1️⃣ | Remote na pagpapatotoo ng MCP at paglilimita sa rate | ✅ Tapos na |
| 2️⃣ | Pinahusay na pagsusulat ng MCP config na partikular sa kliyente | ✅ Present ngayon para sa Claude, Cursor, Codex, Gemini, Kiro, VS Code, at Dev Containers |
| 3️⃣ | Mga nilagdaang artifact o per-skill archive | ✅ Ipakita ngayon na may CI enforcement sa mga release tag |
| 4️⃣ | A2A task runtime → matibay na orkestra | ✅ Present ngayon na may JSON/SQLite persistence, external executors, opt-in lease coordination, at opsyonal na advanced Redis coordination |
| 5️⃣ | Palawakin ang naka-publish na catalog para sa mas malawak na saklaw ng bundle | ✅ Present ngayon para sa kasalukuyang pitong na-curate na starter bundle |