# 🚀 Getting Started (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Pasang kemahiran, sahkan persediaan dan gunakan kemahiran AI pertama anda dalam masa kurang dari 2 minit.**---

## 📊 Current Catalog Status

| Metrik | Nilai |
|:-------|:------|
| Kemahiran diterbitkan |**32**merentas 15 kategori aktif termasuk seni bina, reka bentuk, keselamatan, DevOps, kejuruteraan AI dan banyak lagi |
| Himpunan yang ditentukan |**7**(semuanya disokong sepenuhnya oleh kemahiran yang diterbitkan) |
| Pelanggan berkemampuan memasang |**7**(Kod Claude, Kursor, Gemini CLI, Codex CLI, Kiro, Antigraviti, OpenCode) |
| Pelanggan berkemampuan konfigurasi MCP |**16**merentas 33 sasaran konfigurasi MCP kelas pertama |---

## 📦 Step 1 — Install

### Mula Pantas

```bash
npx omni-skills
```

Dalam terminal interaktif, ini kini membuka pemasang berpandu dan bukannya secara senyap menganggap pelanggan.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Ini membuka hab terminal berjenama untuk pemasangan, penemuan, MCP, API dan permulaan A2A.### 🎯 Default Install (Antigravity Outside TTY)

Di luar TTY, pemasang no-arg masih lalai kepada `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Himpunan permulaan kini disokong sepenuhnya, termasuk `devops` dan `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Semak bahawa kemahiran mendarat di tempat yang betul:```bash
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

Atau gunakan diagnostik terbina dalam:```bash
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

Memberi alat sistem fail ejen untuk mengesan pelanggan, memasang/mengalih keluar kemahiran dan menulis konfigurasi MCP:```bash
npx omni-skills mcp stream --local
```

Anda juga boleh mengkonfigurasi MCP untuk pelanggan yang bukan sasaran pemasangan kemahiran:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Mendedahkan katalog kemahiran sebagai API HTTP baca sahaja:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Penemuan ejen-ke-ejen, pengesyoran, perancangan pemasangan, tinjauan pendapat dan penstriman:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Kemahiran ialah buku main turun nilai berstruktur (`SKILL.md`) yang memberikan ejen AI:

| Komponen | Tujuan |
|:----------|:--------|
| 📋**Materi Depan**| Metadata boleh dibaca mesin (nama, kategori, teg, alatan, risiko) |
| 📝**Badan**| Arahan, langkah, pagar dan contoh khusus tugasan |
| 📚**Rujukan**| Dokumen sokongan yang boleh dirujuk oleh ejen semasa pelaksanaan |
| 🎨**Aset**| Ikon, imej atau sumber berpakej lain |---

## ➡️ Next Steps

| Doc | Apa yang Anda Akan Pelajari |
|:----|:------------------|
| 🧭 [Panduan Pengguna CLI](PANDUAN- PENGGUNA CLI.md) | Rujukan arahan penuh untuk pemasangan, masa jalan, konfigurasi dan diagnostik |
| 📗 [Panduan Penggunaan](USAGE.md) | Semua arahan CLI, corak gesaan dan mod masa jalan |
| 📦 [BUNDLES](BUNDLES.md) | Koleksi kemahiran dipilih susun dan ketersediaannya |
| 📚 [Katalog](../CATALOG.md) | Katalog jana automatik kemahiran diterbitkan |
| 📖 [Hab ​​Dokumentasi](../README.md) | Peta dokumentasi penuh |
| 🔧 [Buku Jalanan Sistem](../operations/RUNBOOK.md) | Rujukan operasi |