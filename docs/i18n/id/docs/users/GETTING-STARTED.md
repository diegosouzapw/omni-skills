# 🚀 Getting Started (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**Instal keterampilan, verifikasi pengaturan, dan aktifkan keterampilan AI pertama Anda dalam waktu kurang dari 2 menit.**---

## 📊 Current Catalog Status

| Metrik | Nilai |
|:-------|:------|
| Keterampilan yang dipublikasikan |**32**dalam 15 kategori aktif termasuk arsitektur, desain, keamanan, DevOps, rekayasa AI, dan banyak lagi |
| Bundel yang ditentukan |**7**(semuanya didukung sepenuhnya oleh keterampilan yang diterbitkan) |
| Klien yang mampu menginstal |**7**(Kode Claude, Kursor, Gemini CLI, Codex CLI, Kiro, Antigravitasi, OpenCode) |
| Klien berkemampuan konfigurasi MCP |**16**di 33 target konfigurasi MCP kelas satu |---

## 📦 Step 1 — Install

### Mulai Cepat

```bash
npx omni-skills
```

Di terminal interaktif, ini sekarang membuka penginstal yang dipandu alih-alih mengasumsikan klien secara diam-diam.### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

Ini akan membuka hub terminal bermerek untuk penginstalan, penemuan, MCP, API, dan startup A2A.### 🎯 Default Install (Antigravity Outside TTY)

Di luar TTY, penginstal no-arg masih menggunakan default `~/.gemini/antigravity/skills`.### 🖱️ Focused Install — One Skill, One Client

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

> ✅ Paket starter kini didukung penuh, termasuk `devops` dan `ai-engineer`.### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Periksa apakah keterampilan berada di tempat yang tepat:```bash
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

Atau gunakan diagnostik bawaan:```bash
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

Memberikan alat sistem file kepada agen untuk mendeteksi klien, menginstal/menghapus keterampilan, dan menulis konfigurasi MCP:```bash
npx omni-skills mcp stream --local
```

Anda juga dapat mengonfigurasi MCP untuk klien yang bukan merupakan target pemasangan keterampilan:```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Mengekspos katalog keterampilan sebagai API HTTP hanya-baca:```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Penemuan agen-ke-agen, rekomendasi, perencanaan instalasi, polling, dan streaming:```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

Keterampilan adalah pedoman penurunan harga terstruktur (`SKILL.md`) yang memberikan agen AI:

| Komponen | Tujuan |
|:----------|:--------|
| 📋**Materi Depan**| Metadata yang dapat dibaca mesin (nama, kategori, tag, alat, risiko) |
| 📝**Tubuh**| Petunjuk, langkah, pagar pembatas, dan contoh khusus tugas |
| 📚**Referensi**| Dokumen pendukung yang dapat dikonsultasikan oleh agen selama eksekusi |
| 🎨**Aset**| Ikon, gambar, atau sumber daya terpaket lainnya |---

## ➡️ Next Steps

| Dok | Apa yang Akan Anda Pelajari |
|:----|:------------------|
| 🧭 [Panduan Pengguna CLI](CLI-USER-GUIDE.md) | Referensi perintah lengkap untuk instalasi, runtime, konfigurasi, dan diagnostik |
| 📗 [Panduan Penggunaan](USAGE.md) | Semua perintah CLI, pola prompt, dan mode runtime |
| 📦 [Paket](BUNDLES.md) | Koleksi keterampilan yang dikurasi dan ketersediaannya |
| 📚 [Katalog](../CATALOG.md) | Katalog keterampilan yang diterbitkan secara otomatis |
| 📖 [Pusat Dokumentasi](../README.md) | Peta dokumentasi lengkap |
| 🔧 [Sistem Runbook](../operations/RUNBOOK.md) | Referensi operasional |