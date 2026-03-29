# 📦 Curated Bundles (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Paket adalah pilihan keterampilan yang dikurasi dan ditempatkan di atas katalog.**Ketujuh paket pemula kini sepenuhnya didukung oleh keterampilan yang diterbitkan.---

## ⚙️ How Bundles Work

`--bundle`**tidak**menginstal paket khusus. Itu:

1. 📋 Memperluas definisi bundel yang dipilih
2. ✅ Menginstal hanya anggota yang saat ini tersedia di katalog
3. ✅ Membuat rencana pemasangan konkrit dari anggota bundel yang diterbitkan```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Berdasarkan katalog yang dihasilkan saat ini (`dist/bundles.json`):

| Paket | Ditujukan Untuk | Tersedia | Anggota |
|:-------|:------------|:----------|:--------|
| 🧰**penting**| Setiap pengembang |**4/4**| `temukan-keterampilan` ✅ · `brainstorming` ✅ · `arsitektur` ✅ · `debugging` ✅ |
| 🌐**tumpukan penuh**| Pengembang web & aplikasi |**5/5**| `desain-frontend` ✅ · `desain-api` ✅ · `desain-database` ✅ · `omni-figma` ✅ · `arus autentikasi` ✅ |
| 🎨**desain**| Sistem desain & aksesibilitas |**4/4**| `desain-frontend` ✅ · `omni-figma` ✅ · `operasi-sistem-desain` ✅ · `audit aksesibilitas` ✅ |
| 🛡️**keamanan**| Insinyur keamanan |**4/4**| `auditor-keamanan` ✅ · `pemindai kerentanan` ✅ · `respon-insiden` ✅ · `pemodelan ancaman` ✅ |
| ⚙️**pengembangan**| Platform & infra |**5/5**| `buruh pelabuhan-ahli` ✅ · `kubernetes` ✅ · `terraform` ✅ · `tinjauan-observabilitas` ✅ · `rekayasa rilis` ✅ |
| 🤖**insinyur ai**| Pengembang LLM & ML |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**pemelihara oss**| Pengelola OSS |**4/4**| `temukan-keterampilan` ✅ · `buat-pr` ✅ · `log perubahan` ✅ · `dokumentasi` ✅ |

> ✅ = Diterbitkan dan dapat diinstal---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Anda menginginkan**titik awal yang dikurasi**untuk sebuah domain
- Anda ingin menginstal paket yang tetap**terkurasi dan spesifik untuk domain**
- Anda menginginkan cara cepat untuk menginstal set kerja lengkap untuk suatu peran### 🎯 Use `--skill` instead when:

- Anda ingin**instalasi minimal terjamin**
- Anda sudah mengetahui**keterampilan sebenarnya**yang Anda perlukan
- Anda menginginkan**jejak sekecil mungkin**alih-alih kumpulan kerja yang dikurasi---

## 💡 Practical Recommendations

| Sasaran | Perintah |
|:-----|:--------|
| 🎯 Instal keterampilan khusus yang diterbitkan | `npx keterampilan omni --kursor --keterampilan omni-figma` |
| 📦 Paket starter yang didukung penuh | `npx omni-skill --cursor --bundle full-stack` |
| 🎨 Paket sistem desain | `npx omni-skills --kursor --desain bundel` |
| 🔧 Paket alur kerja OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Paket alur kerja keamanan | `npx omni-skills --cursor --bundle security` |
| ⚙️ Paket DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Paket insinyur AI | `npx keterampilan omni --codex --bundle ai-engineer` |
| 🔎 Cari sebelum memutuskan | `npx keterampilan omni temukan figma` |
| 📋 Lihat semua ketersediaan bundel | `cat dist/bundles.json` |---

## 🔍 Inspecting Bundles

### 📁 View Generated Bundle Data

```bash
cat dist/bundles.json
```

### 🌐 Query via API

```bash
curl http://127.0.0.1:3333/v1/bundles
```

### 🔌 Query via MCP

Gunakan alat `search_skills` atau `preview_install` dengan parameter bundel.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
