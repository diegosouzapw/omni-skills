# Client Support Matrix (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Dokumen ini melacak permukaan klien praktis untuk Omni Skills dalam tiga masukan:

1. inventaris dasbor `9router` di `/home/diegosouzapw/dev/proxys/9router`
2. implementasi sespan Omni Skills MCP saat ini
3. dokumentasi resmi terkini untuk setiap klien atau IDE

Ini adalah sumber kebenaran untuk memutuskan klien mana yang mendapatkan dukungan `config-mcp` kelas satu, mana yang tetap manual saja, dan mana yang hanya kandidat.---

## Scope

Matriks ini tentang**konfigurasi klien untuk MCP**.

Ini tidak sama dengan:

- dukungan instalasi keterampilan
- Kompatibilitas API
- Dukungan A2A
- ACP atau protokol non-MCP lainnya

Beberapa produk dalam matriks menggunakan MCP tetapi**tidak**memiliki “direktori keterampilan” yang berarti, sehingga produk tersebut hanya menerima dukungan target konfigurasi.---

## 9router Inventory

Dasbor `9router` saat ini mengelompokkan alat CLI atau klien IDE berikut:

- Kode Claude
- Kodeks OpenAI
- Pabrik Droid
- Cakar Terbuka
- Kursor
- Klinik
- Kode Kilo
- Lanjutkan
- Antigravitasi
- Kopilot GitHub
- Kode Terbuka
-Kiro AI

Sumber lokal:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Klien ini sekarang memiliki cerita yang stabil dan eksplisit di Omni Skills melalui `config-mcp --target ...`.

Total implementasi saat ini:

-**7 klien yang mampu menginstal**
-**16 klien berkemampuan konfigurasi**
-**33 target konfigurasi kelas satu**
-**19 profil konfigurasi**

| Klien | Status | Konfigurasi Target | Catatan |
|:-------|:-------|:---------------|:------|
| Kode Claude | ✅ Kelas satu | `ruang kerja`, `proyek-claude`, `pengaturan-pengguna-claude`, `pengguna-claude`, `warisan-pengguna-claude`, `desktop-claude` | Ketik konfigurasi `mcpServers` dengan kontrol izin/tolak khusus Claude |
| Kursor | ✅ Kelas satu | `ruang kerja kursor`, `pengguna kursor` | Target `mcpServers` JSON |
| Kode VS | ✅ Kelas satu | `vscode`, `vscode-pengguna`, `vscode-orang dalam-pengguna`, `devcontainer` | Menggunakan root `server` |
| CLI Gemini | ✅ Kelas satu | `pengguna gemini`, `ruang kerja gemini` | Pengaturan JSON + kontrol izin/kecualikan MCP global |
| Antigravitasi | ✅ Kelas satu | `pengguna antigravitasi` | Target `mcpServers` JSON |
| Kiro | ✅ Kelas satu | `pengguna-kiro`, `ruang kerja-kiro`, `warisan-pengguna-kiro` | Bidang khusus Kiro yang dinonaktifkan/disetujui otomatis |
| Kodeks CLI | ✅ Kelas satu | `pengguna codex` | Tabel TOML `mcp_servers` |
| Lanjutkan | ✅ Kelas satu | `lanjutkan-ruang kerja` | Dokumen server YAML khusus |
| selancar angin | ✅ Kelas satu | `pengguna selancar angin` | Target JSON `mcpServers` dengan entri `serverUrl` |
| Kode Terbuka | ✅ Kelas satu | `ruang kerja opencode`, `pengguna opencode` | `opencode.json` resmi/konfigurasi pengguna menggunakan `mcp` tingkat atas |
| Klinik | ✅ Kelas satu | `pengguna kecenderungan` | `cline_mcp_settings.json` dengan `mcpServers` |
| CLI Kopilot GitHub | ✅ Kelas satu | `pengguna kopilot`, `repo kopilot` | `mcp-config.json` atau `.github/mcp.json` dalam cakupan repo |
| Kode Kilo | ✅ Kelas satu | `kilo-pengguna`, `kilo-proyek`, `kilo-ruang kerja` | Kilo CLI menggunakan `kilo.json`; integrasi ruang kerja menggunakan `.kilocode/mcp.json` |
| Zed | ✅ Kelas satu | `ruang kerja-zed` | `.zed/settings.json` dengan `context_servers` |
| Juni | ✅ Kelas satu | `proyek-junie`, `pengguna-junie` | `.junie/mcp/mcp.json` atau `~/.junie/mcp/mcp.json` menggunakan `mcpServers` |
| Angsa | ✅ Kelas satu | `pengguna angsa` | `~/.config/goose/config.yaml` menggunakan objek `ekstensi` tingkat atas untuk ekstensi MCP yang persisten |---

## Current Gaps

Klien dari `9router` ini**belum**menjadi target penulis kelas satu di Omni Skills:

| Klien | Keadaan Saat Ini | Mengapa |
|:-------|:--------------|:----|
| Pabrik Droid | ⚠️ Hanya manual/custom | Tidak ditemukan bentuk konfigurasi MCP publik yang stabil di dokumen utama selama proses ini |
| OpenClaw | ⚠️ Hanya manual/custom | Masalah yang sama dengan Pabrik Droid |

Sidecar masih dapat digunakan dengan `--file` atau jalur khusus untuk pengguna tingkat lanjut, namun Omni Skills tidak boleh menciptakan penulis kelas satu tanpa dokumen konfigurasi publik yang stabil.

Dua produk yang berdekatan sekarang lebih dipahami, tetapi masih sengaja tidak menjadi penulis otomatis kelas satu:

| Klien | Keadaan Saat Ini | Mengapa |
|:-------|:--------------|:----|
| Asisten AI JetBrains | 🟡 Manual/cuplikan | Dukungan MCP resmi ada, namun alur kerja yang didokumentasikan lebih berbasis UI/didorong impor, bukan target file publik yang stabil |
| Tukang pos | 🟡 Manual/cuplikan | Dukungan MCP resmi ada, namun konfigurasi dikelola di dalam UX produk, bukan target file publik yang stabil |
| Kode Roo | 🟡 Kandidat | Dokumen MCP publik ada, namun kontrak jalur file lintas platform yang kuat masih memerlukan konfirmasi sebelum menambahkan penulis |---

## Support Policy

Omni Skills sekarang mengikuti aturan berikut:

1.**Mampu menginstal**jika ada direktori keterampilan yang stabil.
2.**Dapat melakukan konfigurasi**jika ada format file konfigurasi MCP publik yang stabil.
3.**Manual/hanya cuplikan**jika produk mendukung MCP tetapi kontrak publiknya mengutamakan UI, mengutamakan impor, atau masih terlalu tidak stabil.

Ini juga merupakan jawaban praktis terhadap salah satu pertanyaan arsitektur sebelumnya: proyek harus terus menumbuhkan penulis kelas satu hanya jika ada format publik yang stabil, dan jika tidak, bersandar pada kelompok ekspor kanonik yang lebih kecil ditambah resep dan cuplikan.### Canonical config families already in use

- JSON `mcpServer`
- `server` JSON
- JSON `server_konteks`
- YAML `mcpServer`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Klien / IDE | Rekomendasi | Alasan |
|:-------------|:---------------|:-------|
| Asisten AI JetBrains | 🟡 Simpan manual/cuplikan untuk saat ini | Dukungan resmi memang nyata, tetapi UX masih dikelola produk, bukan file-kontrak-dulu |
| Tukang pos | 🟡 Simpan manual/cuplikan untuk saat ini | Penyiapan resmi mengutamakan UI dan dikelola ruang kerja, bukan mengutamakan kontrak file |
| Kode Roo | 🟡 Selidiki selanjutnya | Menjanjikan dukungan MCP, tetapi keamanan penulis bergantung pada konfirmasi jalur konfigurasi yang lebih kuat |
| Obrolan Kopilot Kode VS | 🟢 Sudah dibahas secara tidak langsung | Lokasi file VS Code MCP yang mendasarinya sudah didukung |
| Zed ACP / Server Agen | 🟡 Jalur terpisah | Ini adalah wilayah ACP/agen-server, bukan hanya penulisan konfigurasi MCP |---

## Official Sources Used

Keputusan di atas diperiksa berdasarkan sumber utama saat ini:

- [MCP Kode Claude Antropis](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Kursor MCP](https://docs.cursor.com/tools)
- [Lanjutkan MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kode Kilo MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [Asisten AI JetBrains MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [File Konfigurasi Angsa](https://block.github.io/goose/docs/guides/config-files/)
- [Ekstensi Sesi Angsa](https://block.github.io/goose/docs/guides/session-extensions/)
- [Penyiapan MCP tukang pos](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Kode Roo MCP](https://docs.roocode.com/features/mcp)
- [Panduan Ekstensi MCP Kode VS](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Registrasi MCP Resmi](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Sespan Omni Skills saat ini sengaja membedakan tiga level dukungan:

-**klien yang mampu menginstal**
  - memiliki direktori keterampilan yang dikenal dan dapat menggunakan `install_skills`
-**klien berkemampuan konfigurasi**
  - memiliki target konfigurasi yang stabil dan dapat menggunakan `configure_client_mcp`
-**klien manual/cuplikan**
  - didokumentasikan, tetapi belum ada penulis file kelas satu yang aman

Pemisahan itu membuat produk tetap jujur.

Tidak semua produk berkemampuan MCP harus diperlakukan sebagai target pemasangan keterampilan.
Fase perluasan dianggap selesai untuk saat ini: penambahan di masa depan hanya akan dilakukan jika mereka melewati batas kontrak publik yang sama dengan yang sekarang dilewati oleh Goose, Junie, Continue, dan Windsurf.