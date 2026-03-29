# Client Support Matrix (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇪🇸 [es](../../../es/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇪 [de](../../../de/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇹 [it](../../../it/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇳 [in](../../../in/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇹🇭 [th](../../../th/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇩 [id](../../../id/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇳🇴 [no](../../../no/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇩🇰 [da](../../../da/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇮🇱 [he](../../../he/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLIENT-SUPPORT-MATRIX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLIENT-SUPPORT-MATRIX.md)

---


Dokumen ini menjejaki permukaan klien praktikal untuk Kemahiran Omni merentas tiga input:

1. inventori papan pemuka `9router` dalam `/home/diegosouzapw/dev/proxys/9router`
2. pelaksanaan sidecar MCP Kemahiran Omni semasa
3. dokumentasi rasmi semasa untuk setiap pelanggan atau IDE

Ia adalah sumber kebenaran yang berfungsi untuk memutuskan pelanggan mana yang mendapat sokongan `config-mcp` kelas pertama, yang mana kekal manual sahaja, dan yang mana hanya calon.---

## Scope

Matriks ini adalah mengenai**konfigurasi pelanggan untuk MCP**.

Ia tidak sama dengan:

- sokongan pemasangan kemahiran
- Keserasian API
- Sokongan A2A
- ACP atau protokol bukan MCP lain

Sesetengah produk dalam matriks menggunakan MCP tetapi**tidak**mempunyai "direktori kemahiran" yang bermakna, jadi mereka hanya menerima sokongan sasaran konfigurasi.---

## 9router Inventory

Papan pemuka `9router` pada masa ini mengumpulkan alatan CLI atau klien IDE ini:

- Kod Claude
- OpenAI Codex
- Droid kilang
- OpenClaw
- Kursor
- Cline
- Kod Kilo
- Teruskan
- Antigraviti
- Copilot GitHub
- OpenCode
- Kiro AI

Sumber tempatan:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)---

## First-Class Support

Pelanggan ini kini mempunyai cerita yang stabil dan jelas dalam Kemahiran Omni melalui `config-mcp --target ...`.

Jumlah pelaksanaan semasa:

-**7 pelanggan berkebolehan memasang**
-**16 pelanggan berkebolehan konfigurasi**
-**33 sasaran konfigurasi kelas pertama**
-**19 profil konfigurasi**

| Pelanggan | Status | Sasaran Konfigurasi | Nota |
|:-------|:-------|:----------------|:------|
| Kod Claude | ✅ Kelas pertama | `ruang kerja`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-user-legacy`, `claude-desktop` | Konfigurasi `mcpServers` ditaip dengan kawalan membenarkan/menafikan khusus Claude |
| Kursor | ✅ Kelas pertama | `kursor-ruang kerja`, `kursor-pengguna` | Sasaran `mcpServers` JSON |
| Kod VS | ✅ Kelas pertama | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Menggunakan akar `pelayan` |
| Gemini CLI | ✅ Kelas pertama | `gemini-user`, `gemini-workspace` | Tetapan JSON + MCP global membenarkan/kecualikan kawalan |
| Antigraviti | ✅ Kelas pertama | `pengguna antigraviti` | Sasaran `mcpServers` JSON |
| Kiro | ✅ Kelas pertama | `pengguna-kiro`, `ruang-kerja-kiro`, `warisan-pengguna-kiro` | Medan dilumpuhkan/autoluluskan khusus Kiro |
| Codex CLI | ✅ Kelas pertama | `pengguna codex` | Jadual `mcp_servers` TOML |
| Teruskan | ✅ Kelas pertama | `teruskan-ruang kerja` | Dokumen pelayan YAML khusus |
| Luncur Angin | ✅ Kelas pertama | `pengguna luncur angin` | Sasaran `mcpServers` JSON dengan entri `serverUrl` |
| OpenCode | ✅ Kelas pertama | `opencode-workspace`, `opencode-user` | Konfigurasi `opencode.json` / pengguna rasmi menggunakan `mcp` peringkat atas |
| Cline | ✅ Kelas pertama | `pengguna cline` | `cline_mcp_settings.json` dengan `mcpServers` |
| GitHub Copilot CLI | ✅ Kelas pertama | `pengguna-kopilot`, `pengguna-kopilot` | `mcp-config.json` atau repo-scoped `.github/mcp.json` |
| Kod Kilo | ✅ Kelas pertama | `pengguna kilo`, `projek kilo`, `ruang kerja kilo` | Kilo CLI menggunakan `kilo.json`; penyepaduan ruang kerja menggunakan `.kilocode/mcp.json` |
| Zed | ✅ Kelas pertama | `zed-workspace` | `.zed/settings.json` dengan `context_servers` |
| Junie | ✅ Kelas pertama | `junie-project`, `junie-user` | `.junie/mcp/mcp.json` atau `~/.junie/mcp/mcp.json` menggunakan `mcpServers` |
| Angsa | ✅ Kelas pertama | `pengguna angsa` | `~/.config/goose/config.yaml` menggunakan objek `extensions` peringkat atas untuk sambungan MCP yang berterusan |---

## Current Gaps

Pelanggan daripada `9router` ini**belum**lagi menjadi sasaran penulis kelas pertama dalam Kemahiran Omni:

| Pelanggan | Keadaan Semasa | Mengapa |
|:-------|:--------------|:----|
| Droid Kilang | ⚠️ Manual/custom sahaja | Tiada bentuk konfigurasi MCP awam yang stabil ditemui dalam dokumen utama semasa pas ini |
| OpenClaw | ⚠️ Manual/custom sahaja | Isu yang sama seperti Factory Droid |

Kereta sisi masih boleh digunakan dengan `--fail` atau laluan tersuai untuk pengguna lanjutan, tetapi Kemahiran Omni tidak seharusnya mencipta penulis kelas pertama tanpa dokumen konfigurasi awam yang stabil.

Dua produk bersebelahan kini lebih difahami, tetapi masih dengan sengaja menghalang penulis automatik kelas pertama:

| Pelanggan | Keadaan Semasa | Mengapa |
|:-------|:--------------|:----|
| Penolong AI JetBrains | 🟡 Manual/coretan | Sokongan MCP rasmi wujud, tetapi aliran kerja yang didokumenkan adalah dipacu UI/didorong import dan bukannya sasaran fail awam yang stabil |
| Posmen | 🟡 Manual/coretan | Sokongan MCP rasmi wujud, tetapi konfigurasi diuruskan dalam UX produk dan bukannya sasaran fail awam yang stabil |
| Kod Roo | 🟡 Calon | Dokumen MCP awam wujud, tetapi kontrak laluan fail merentas platform yang kukuh masih memerlukan pengesahan sebelum menambah penulis |---

## Support Policy

Kemahiran Omni kini mengikut set peraturan ini:

1.**Mampu memasang**jika direktori kemahiran yang stabil wujud.
2.**Config-mampu**jika format fail konfigurasi MCP awam yang stabil wujud.
3.**Manual/coretan sahaja**jika produk menyokong MCP tetapi kontrak awam diutamakan UI, diutamakan import atau masih terlalu tidak stabil.

Ini juga merupakan jawapan praktikal kepada salah satu soalan seni bina yang terdahulu: projek itu harus terus mengembangkan penulis kelas pertama hanya apabila format awam yang stabil wujud, dan sebaliknya bersandar pada set keluarga eksport kanonik yang lebih kecil serta resipi dan coretan.### Canonical config families already in use

- JSON `mcpServers`
- `pelayan` JSON
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`### Additional candidates worth watching

| Pelanggan / IDE | Pengesyoran | Sebab |
|:-------------|:----------------|:-------|
| Penolong AI JetBrains | 🟡 Simpan manual/coretan buat masa ini | Sokongan rasmi adalah nyata, tetapi UX masih diuruskan produk dan bukannya fail-kontrak-dahulukan |
| Posmen | 🟡 Simpan manual/coretan buat masa ini | Persediaan rasmi adalah mengutamakan UI dan diuruskan ruang kerja dan bukannya fail-kontrak-dahulukan |
| Kod Roo | 🟡 Siasat seterusnya | Menjanjikan sokongan MCP, tetapi keselamatan penulis bergantung pada pengesahan laluan konfigurasi yang lebih kukuh |
| Sembang Copilot Kod VS | 🟢 Sudah dilindungi secara tidak langsung | Lokasi fail MCP VS Code yang mendasari sudah disokong |
| Zed ACP / Pelayan Ejen | 🟡 Trek berasingan | Ini adalah wilayah ACP/ejen-pelayan, bukan hanya penulisan konfigurasi MCP |---

## Official Sources Used

Keputusan di atas telah disemak berdasarkan sumber utama semasa:

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [MCP Kursor](https://docs.cursor.com/tools)
- [Teruskan MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [Pembantu AI JetBrains MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Junie MCP](https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html)
- [Fail Konfigurasi Angsa](https://block.github.io/goose/docs/guides/config-files/)
- [Sambungan Sesi Goose](https://block.github.io/goose/docs/guides/session-extensions/)
- [Persediaan MCP Posmen](https://learning.postman.com/docs/postman-ai/ai-requests/add-mcp-servers/)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)
- [Panduan Sambungan MCP Kod VS](https://code.visualstudio.com/api/extension-guides/ai/mcp)
- [Pendaftaran MCP Rasmi](https://prod.registry.modelcontextprotocol.io/)---

## Implementation Notes

Kereta sampingan Omni Skills semasa dengan sengaja membezakan tiga tahap sokongan:

-**pelanggan yang mampu memasang**
  - mempunyai direktori kemahiran yang diketahui dan boleh menggunakan `kemahiran_pasang`
-**pelanggan berkemampuan konfigurasi**
  - mempunyai sasaran konfigurasi yang stabil dan boleh menggunakan `configure_client_mcp`
-**pelanggan manual/coretan**
  - didokumenkan, tetapi tanpa penulis fail kelas pertama yang selamat lagi

Pemisahan itu memastikan produk itu jujur.

Bukan setiap produk berkemampuan MCP harus dianggap sebagai sasaran pemasangan kemahiran.
Fasa pengembangan dianggap selesai buat masa ini: penambahan pada masa hadapan hanya akan mendarat jika mereka mengosongkan bar kontrak awam yang sama yang Goose, Junie, Continue, dan Windsurf kini jelas.