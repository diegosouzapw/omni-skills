# 📦 Curated Bundles (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Himpunan ialah pemilih kemahiran dipilih susun di atas katalog.**Kesemua tujuh himpunan permulaan kini disokong sepenuhnya oleh kemahiran yang diterbitkan.---

## ⚙️ How Bundles Work

`--bundle` tidak**tidak**memasang pakej khas. Ia:

1. 📋 Mengembangkan definisi berkas yang dipilih
2. ✅ Memasang hanya ahli yang terdapat dalam katalog pada masa ini
3. ✅ Membina pelan pemasangan konkrit daripada ahli bundle yang diterbitkan```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Berdasarkan katalog terjana semasa (`dist/bundles.json`):

| Himpunan | Bertujuan Untuk | Tersedia | Ahli |
|:-------|:------------|:----------|:--------|
| 🧰**keperluan penting**| Setiap pembangun |**4/4**| `mencari-kemahiran` ✅ · `percambahan fikiran` ✅ · `seni bina` ✅ · `menyahpepijat` ✅ |
| 🌐**tindanan penuh**| Pembangun web & apl |**5/5**| `depan-reka bentuk` ✅ · `api-reka bentuk` ✅ · `pangkalan data-reka bentuk` ✅ · `omni-figma` ✅ · `auth-aliran` ✅ |
| 🎨**reka bentuk**| Sistem reka bentuk & kebolehcapaian |**4/4**| `depan-reka bentuk` ✅ · `omni-figma` ✅ · `reka bentuk-sistem-ops` ✅ · `kebolehcapaian-audit` ✅ |
| 🛡️**keselamatan**| Jurutera keselamatan |**4/4**| `security-auditor` ✅ · `vulnerability-scanner` ✅ · `insiden-response` ✅ · `threat-modeling` ✅ |
| ⚙️**devops**| Platform & infra |**5/5**| `pakar-docker` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ai-jurutera**| Pembangun LLM & ML |**5/5**| `jurutera kain buruk` ✅ · `jurutera-prompt` ✅ · `corak-llm` ✅ · `reka bentuk eval` ✅ · `kejuruteraan konteks` ✅ |
| 🔧**oss-maintainer**| Penyelenggara OSS |**4/4**| `mencari-kemahiran` ✅ · `buat-pr` ✅ · `changelog` ✅ · `dokumentasi` ✅ |

> ✅ = Diterbitkan dan boleh dipasang---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Anda mahukan**titik permulaan yang dipilih susun**untuk domain
- Anda mahu memasang pelan yang kekal**disusun dan khusus domain**
- Anda mahukan cara pantas untuk memasang set kerja lengkap untuk sesuatu peranan### 🎯 Use `--skill` instead when:

- Anda mahukan**pemasangan minimum yang dijamin**
- Anda sudah tahu**kemahiran tepat**yang anda perlukan
- Anda mahukan**jejak terkecil mungkin**dan bukannya set kerja yang dipilih susun---

## 💡 Practical Recommendations

| Matlamat | Perintah |
|:-----|:--------|
| 🎯 Pasang kemahiran diterbitkan khusus | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Bungkusan permulaan yang disokong sepenuhnya | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Himpunan sistem reka bentuk | `npx omni-skills --cursor --bundle design` |
| 🔧 Himpunan aliran kerja OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Himpunan aliran kerja keselamatan | `npx omni-skills --cursor --bundle security` |
| ⚙️ Himpunan DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Himpunan jurutera AI | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Cari sebelum membuat keputusan | `npx omni-skills find figma` |
| 📋 Lihat semua ketersediaan berkas | `cat dist/bundles.json` |---

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

Gunakan alat `search_skills` atau `preview_install` dengan parameter bundle.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
