# 🚀 Getting Started (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Mag-install ng mga kasanayan, i-verify ang pag-setup, at gamitin ang iyong unang kasanayan sa AI sa loob ng wala pang 2 minuto.**---

## 📊 Current Catalog Status

| Sukatan | Halaga |
|:-------|:------|
| Na-publish na mga kasanayan |**32**sa 15 aktibong kategorya kabilang ang arkitektura, disenyo, seguridad, DevOps, AI-engineering, at higit pa |
| Tinukoy na mga bundle |**7**(lahat ay ganap na sinusuportahan ng mga nai-publish na kasanayan) |
| Mga kliyenteng may kakayahang mag-install |**7**(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| MCP config-capable na mga kliyente |**16**sa 33 first-class na MCP config target |---

## 📦 Step 1 — Install

### Mabilis na Simula

```bash
npx omni-skills
```

Sa isang interactive na terminal, binubuksan nito ngayon ang ginabayang installer sa halip na tahimik na ipagpalagay ang isang kliyente.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Binubuksan nito ang branded na terminal hub para sa pag-install, pagtuklas, MCP, API, at A2A startup.### 🎯 Default Install (Antigravity Outside TTY)

Sa labas ng TTY, ang no-arg installer ay nagde-default pa rin sa `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
npx omni-skills --codex --bundle ai-engineer
```

> ✅ Ang mga starter bundle ay ganap na ngayong naka-back, kabilang ang `devops` at `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Suriin kung ang mga kasanayan ay nakarating sa tamang lugar:```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

O gamitin ang mga built-in na diagnostic:```bash
npx omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

Nagbibigay ng mga tool sa filesystem ng mga ahente upang matukoy ang mga kliyente, mag-install/mag-alis ng mga kasanayan, at magsulat ng mga MCP config:```bash
npx omni-skills mcp stream --local
```

Maaari mo ring i-configure ang MCP para sa mga kliyente na hindi mga target sa pag-install ng kasanayan:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Inilalantad ang catalog ng kasanayan bilang isang read-only na HTTP API:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Pagtuklas ng ahente-sa-agent, rekomendasyon, pagpaplano ng pag-install, pagboto, at streaming:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Ang kasanayan ay isang structured markdown playbook (`SKILL.md`) na nagbibigay sa isang ahente ng AI:

| Bahagi | Layunin |
|:----------|:--------|
| 📋**Frontmatter**| Metadata na nababasa ng makina (pangalan, kategorya, mga tag, tool, panganib) |
| 📝**Katawan**| Mga tagubiling partikular sa gawain, mga hakbang, mga guardrail, at mga halimbawa |
| 📚**Mga Sanggunian**| Mga sumusuportang dokumento na maaaring konsultahin ng ahente sa panahon ng pagpapatupad |
| 🎨**Mga Asset**| Mga icon, larawan, o iba pang naka-package na mapagkukunan |---

## ➡️ Next Steps

| Doc | Ano ang Matututuhan Mo |
|:----|:------------------|
| 🧭 [CLI User Guide](CLI-USER-GUIDE.md) | Buong command reference para sa pag-install, runtime, config, at diagnostics |
| 📗 [Gabay sa Paggamit](USAGE.md) | Lahat ng CLI command, prompt pattern, at runtime mode |
| 📦 [Mga Bundle](BUNDLES.md) | Mga na-curate na koleksyon ng kasanayan at ang kanilang kakayahang magamit |
| 📚 [Catalog](../CATALOG.md) | Awtomatikong nabuong catalog ng mga nai-publish na kasanayan |
| 📖 [Documentation Hub](../README.md) | Buong dokumentasyong mapa |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Sanggunian sa pagpapatakbo |