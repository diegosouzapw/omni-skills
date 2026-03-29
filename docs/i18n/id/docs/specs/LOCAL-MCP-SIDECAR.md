# 🔌 Local MCP Sidecar (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Ekstensi mode lokal opsional untuk `@omni-skills/server-mcp` yang menambahkan alat sadar sistem file untuk deteksi klien, manajemen keterampilan, dan pembuatan konfigurasi MCP.**---

## 📊 Status

| Fitur | Negara |
|:--------|:------|
| ✅ Alat katalog hanya baca | Diimplementasikan |
| ✅ Alat lokal yang sadar sistem file | Diimplementasikan |
| ✅ 3 angkutan (stdio/stream/sse) | Diimplementasikan |
| ✅ Penulisan yang diizinkan | Diimplementasikan |
| ✅ Pratinjau-sebelum-menulis default | Diimplementasikan |
| ✅ Penulisan konfigurasi MCP yang sadar klien | Diimplementasikan |
| ✅ Otentikasi HTTP + pembatasan kecepatan | Diimplementasikan |
| ✅ Tanda tangan dan checksum waktu rilis | Diimplementasikan untuk arsip yang dihasilkan dan ditampilkan oleh API/MCP |
| 🟡 Penegakan tanda tangan waktu tulis lokal | Belum ditegakkan; pratinjau mode lokal dan tulis dari checkout lokal tepercaya |
| 🟢 Cakupan klien saat ini | 7 klien berkemampuan instalasi, 16 klien berkemampuan konfigurasi, 33 target konfigurasi, 19 profil konfigurasi |---

## 🎯 Purpose

Mode lokal menambahkan**alat yang sadar sistem file**di atas permukaan katalog MCP hanya-baca yang ada. Gunakan saat agen perlu:

- 🕵️ Deteksi klien AI lokal yang kompatibel
- 📋 Periksa keterampilan yang terpasang
- 👁️ Pratinjau instalasi atau penghapusan keterampilan (dry-run)
- 📦 Terapkan instalasi atau penghapusan keterampilan lokal
- ⚙️ Tulis file konfigurasi MCP lokal setelah pratinjau

Ini sengaja memisahkan dua kekhawatiran:

-**target pemasangan keterampilan**
  klien dengan direktori keterampilan stabil yang dapat menggunakan `install_skills`
-**target konfigurasi MCP**
  klien atau IDE dengan format konfigurasi MCP terdokumentasi yang stabil, meskipun mereka tidak memiliki direktori keterampilan---

## 🔌 Transports

| Transportasi | Protokol | Kasus Penggunaan |
|:----------|:---------|:---------|
| `stdio` | Pipa | Integrasi klien langsung |
| `aliran` | HTTP yang dapat dialirkan | Klien HTTP modern |
| `sse` | Acara yang Dikirim Server | Klien lama |---

## 🚀 Enable Local Mode

### 📦 From repo:

```bash
npm run mcp:local
npm run mcp:stream:local
npm run mcp:sse:local
```

### 📦 Via CLI:

```bash
npm run cli -- mcp stdio --local
npm run cli -- mcp stream --local
npm run cli -- mcp sse --local
npm run cli -- config-mcp --list-targets
npm run cli -- config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npm run cli -- config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp
```

### 📦 From published package:

```bash
npx omni-skills mcp stdio --local
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target goose-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

> Semua perintah menyetel `OMNI_SKILLS_MCP_MODE=local` secara otomatis.---

## 🛠️ Local Tools

Saat mode lokal diaktifkan, alat tambahan berikut akan tersedia:

| Alat | Deskripsi | Bawaan |
|:-----|:------------|:--------|
| 🕵️ `deteksi_klien` | Pindai klien AI dan jalur keahlian/konfigurasinya | — |
| 📋 `daftar_keterampilan_terinstal` | Periksa keterampilan yang diinstal untuk klien tertentu | — |
| 📦 `install_skills` | Instal keterampilan ke dalam direktori keterampilan klien | 🔍 lari kering |
| 🗑️ `hapus_keterampilan` | Hapus keterampilan yang diinstal dari klien | 🔍 lari kering |
| ⚙️ `konfigurasi_klien_mcp` | Tulis konfigurasi MCP untuk klien tertentu | 🔍 lari kering |

> ⚠️ `install_skills`, `remove_skills`, dan `configure_client_mcp` default ke**dry-run**ketika `dry_run` dihilangkan.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Klien | Jalur |
|:-------|:-----|
| 🔵 Kode Claude | `~/.claude/skills` |
| 🔵 Kursor | `~/.cursor/skills` |
| 🟡 Gemini CLI | `~/.gemini/skills` |
| 🟣 Antigravitasi | `~/.gemini/antigravity/skills` |
| 🟢 Kiro | `~/.kiro/skills` |
| 🔴 Kodeks CLI | `~/.codex/skills` atau `$CODEX_HOME/skills` |
| ⚪ Kode Terbuka | `<ruang kerja>/.opencode/skills` |

7 target ini adalah satu-satunya tujuan pemasangan kelas satu saat ini.### ⚙️ MCP Config Files

| Sasaran | Format |
|:-------|:-------|
| `~/.claude/settings.json` | Pengaturan Kode Claude JSON |
| `<ruang kerja>/.claude/settings.json` | Pengaturan proyek Claude JSON |
| `~/.claude.json` | Warisan Claude JSON (`mcpServers`) |
| `~/Perpustakaan/Dukungan Aplikasi/Claude/claude_desktop_config.json` | Claude Desktop JSON (khusus OS) |
| `~/.cursor/mcp.json` | JSON(`mcpServers`) |
| `<ruang kerja>/.cursor/mcp.json` | Ruang kerja kursor JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Pengguna Gemini JSON (`mcpServers`) |
| `<ruang kerja>/.gemini/settings.json` | Proyek Gemini JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | JSON Antigravitasi (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | Pengguna Kiro JSON (`mcpServers`) |
| `<ruang kerja>/.kiro/settings/mcp.json` | Proyek Kiro JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML(`[mcp_servers]`) |
| `<ruang kerja>/.mcp.json` | JSON(`mcpServers`) |
| `<ruang kerja>/opencode.json` | Ruang kerja OpenCode JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | Pengguna OpenCode JSON (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Kopilot CLI JSON (`mcpServers`) |
| `<ruang kerja>/.github/mcp.json` | Repositori GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo pengguna CLI JSON (`mcp`) |
| `<ruang kerja>/kilo.json` | Proyek Kilo CLI JSON (`mcp`) |
| `<ruang kerja>/.kilocode/mcp.json` | Ruang kerja Kode Kilo JSON (`mcpServers`) |
| `<ruang kerja>/.continue/mcpServers/omni-skills.yaml` | Lanjutkan ruang kerja YAML (`mcpServers`) |
| `<ruang kerja>/.junie/mcp/mcp.json` | Proyek Junie JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Pengguna Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Selancar Angin JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Angsa YAML (`ekstensi`) |
| `<ruang kerja>/.zed/settings.json` | Ruang kerja Zed JSON (`context_servers`) |
| `<ruang kerja>/.vscode/mcp.json` | JSON (`server`) |
| `~/.config/Code/User/mcp.json` | Pengguna Kode VS JSON (`server`) |
| `~/.config/Code - Orang Dalam/Pengguna/mcp.json` | Pengguna VS Code Insiders JSON (`server`) |
| `<ruang kerja>/.devcontainer/devcontainer.json` | JSON Kontainer Pengembang Bersarang (`customizations.vscode.mcp.servers`) |
| Akar klien `mcp.json` | JSON (format per klien) |

Itu memberikan sespan:

-**16 klien atau IDE berkemampuan konfigurasi**
-**33 jalur target kelas satu**
-**19 format profil**

Cakupan konfigurasi kelas satu saat ini mencakup:

- Kode Claude dan Desktop Claude
- Kursor
- Kode VS dan Kontainer Pengembang
- Gemini CLI
- Antigravitasi
- Kiro
- Kodeks CLI
- Lanjutkan
- Junie
- Selancar angin
- Angsa
- Kode Terbuka
- Klinik
- CLI Kopilot GitHub
- Kode Kilo
- Zed

Kandidat manual atau hanya cuplikan masih sengaja berada di luar kumpulan penulis kelas satu hingga kontrak konfigurasi publiknya cukup stabil.### 🧭 Expansion Policy

Omni Skills kini memperlakukan dukungan klien sebagai model tiga tingkat:

1.**mampu menginstal**
   Direktori keterampilan yang stabil tersedia, sehingga CLI dan sidecar dapat menginstal keterampilan secara langsung.
2.**mampu melakukan konfigurasi**
   Ada format konfigurasi MCP yang stabil dan terdokumentasi, sehingga `config-mcp` dapat melihat pratinjau dan menulis file kelas satu.
3.**manual atau hanya cuplikan**
   Produk ini jelas mendukung MCP dalam beberapa bentuk, namun dokumen publik belum membenarkan penulis otomatis yang aman.

Inilah sebabnya mengapa klien seperti JetBrains AI Assistant tetap manual/snippet saja, sementara Roo Code dan Postman tetap berada di luar kumpulan penulis kelas satu hingga kisah penggabungan otomatis yang aman cukup kuat untuk proyek ini.---

## 🔒 Allowlist Model

Sidecar lokal hanya menulis di bawah**daftar yang diizinkan secara eksplisit**.### 🟢 Default allowlist:

- Akar klien yang dikenal di bawah `$HOME`
- `~/.codeium` untuk konfigurasi pengguna Windsurf
- `~/.copilot` untuk GitHub Copilot CLI
- `~/.cline` untuk Cline CLI
- `~/.config/goose` untuk konfigurasi Angsa
- `~/.config/kilo` dan `~/.config/opencode` untuk konfigurasi CLI Kilo/OpenCode
- `$CODEX_HOME` (atau `~/.codex` jika tidak disetel)
- Akar ruang kerja saat ini
- `<ruang kerja>/.agen`
- `<ruang kerja>/.github`
- `<ruang kerja>/.kilocode`
- `<ruang kerja>/.opencode`
- `<ruang kerja>/.zed`
- `<ruang kerja>/.lanjut`
- `<ruang kerja>/.vscode`### ➕ Extend the allowlist:

```bash
export OMNI_SKILLS_LOCAL_ALLOWLIST=/absolute/path/one:/absolute/path/two
```

---

## ⚙️ Config Writing Examples

### 🔵 Claude Code / Project Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### 🔵 Cursor / Workspace JSON

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 🟡 Gemini CLI / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "headers": {
        "Authorization": "Bearer example"
      }
    }
  },
  "mcp": {
    "allowed": ["omni-skills"]
  }
}
```

### 🟢 Kiro / User Settings

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "disabledTools": ["install_skills"],
      "autoApprove": ["search_skills", "get_skill"]
    }
  }
}
```

### 🟣 Antigravity

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚪ OpenCode

```json
{
  "mcp": {
    "omni-skills": {
      "type": "local",
      "command": ["/path/to/node", "/path/to/packages/server-mcp/src/server.js"],
      "environment": {
        "OMNI_SKILLS_MCP_MODE": "local"
      },
      "enabled": true
    }
  }
}
```

### 🟢 Cline

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "streamable-http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚫ GitHub Copilot CLI

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp",
      "tools": ["*"]
    }
  }
}
```

### 🔴 Kilo Code

```json
{
  "mcp": {
    "omni-skills": {
      "type": "remote",
      "url": "http://127.0.0.1:3334/mcp",
      "enabled": true
    }
  }
}
```

### 🟢 Continue

```yaml
name: 'Omni Skills'
version: '0.1.3'
schema: 'v1'
mcpServers:
  - name: 'omni-skills'
    transport:
      type: 'streamable-http'
      url: 'http://127.0.0.1:3334/mcp'
```

### 🧭 CLI Contract

CLI wrapper yang didukung sespan membuat pembuatan konfigurasi MCP dapat diakses tanpa panggilan JSON-RPC langsung:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Perilaku default hanya untuk pratinjau. `--write` menerapkan konfigurasi ke jalur target yang diselesaikan dalam daftar yang diizinkan.### 🌊 Windsurf

```json
{
  "mcpServers": {
    "omni-skills": {
      "serverUrl": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

### ⚡ Zed

```json
{
  "context_servers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

### 💜 VS Code

```json
{
  "servers": {
    "omni-skills": {
      "type": "stdio",
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 📦 Dev Container

```json
{
  "customizations": {
    "vscode": {
      "mcp": {
        "servers": {
          "omni-skills": {
            "type": "stdio",
            "command": "/path/to/node",
            "args": ["/path/to/packages/server-mcp/src/server.js"],
            "env": {
              "OMNI_SKILLS_MCP_MODE": "local"
            }
          }
        }
      }
    }
  }
}
```

### 🔴 Codex TOML

```toml
[mcp_servers.omni-skills]
url = "http://127.0.0.1:3334/mcp"
```

### 📋 Generic stdio

```json
{
  "mcpServers": {
    "omni-skills": {
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

### 🔵 Claude allow/deny lists

Alat `configure_client_mcp` juga dapat menulis pengaturan khusus Claude ketika Anda meneruskan:

- `diizinkan_mcp_server`
- `ditolak_mcp_server`
- `izin_tolak`
- `aktifkan_all_project_mcp_servers`### 💜 VS Code sandboxing

Untuk target VS Code dan Dev Container, `configure_client_mcp` juga dapat menulis:

- `kotak pasir Diaktifkan`
- `kotak pasir.filesystem.allowWrite`
- `kotak pasir.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Ini memetakan ke panduan VS Code saat ini untuk melakukan sandboxing pada server stdio MCP lokal.### 🧰 Cross-Client Entry Options

`configure_client_mcp` sekarang mendukung metadata entri yang lebih kaya di seluruh profil yang didukung:

- `header`
- `env`
- `env_file`
- `cwd`
- `batas waktu_ms`
- `deskripsi`
- `termasuk_alat`
- `kecualikan_alat`
- `dinonaktifkan`
- `kepercayaan`

Opsi khusus profil:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gemini: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `disabled_tools`, `auto_approve`
- Kode VS dan Kontainer Pengembang: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` mengembalikan `resep` bersama pratinjau atau konfigurasi yang diterapkan.

Resep-resep ini adalah blok panduan yang sadar klien, misalnya:

- `claude mcp tambahkan ... --lingkup pengguna|proyek`
- `gemini mcp tambahkan ... --lingkup pengguna|proyek`
- `codex mcp tambahkan ...`
- resep edit file manual untuk Cursor, VS Code, Kiro, dan Claude Desktop

Strategi keseluruhan sekarang sengaja dibuat konservatif:

- gunakan kembali sekumpulan kecil keluarga konfigurasi kanonik jika memungkinkan
- simpan penulis yang dipesan lebih dahulu hanya jika dokumen resmi memerlukan bentuk yang berbeda
- hindari menciptakan penulis otomatis untuk target yang tidak terdokumentasi---

## 🔐 Hosted HTTP Hardening

Transportasi HTTP mendukung kontrol berbasis env yang sama dengan API katalog:

| Variabel | Tujuan |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Otentikasi token pembawa |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kunci API yang dipisahkan koma |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspeksi waktu proses khusus admin |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Permintaan maksimal per jendela |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Jendela batas kecepatan dalam ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Aktifkan pencatatan audit |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Tulis log audit ke file |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Batasi asal browser |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Batasi IP sumber yang diizinkan |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Kembalikan `503` untuk rute non-admin, non-kesehatan |

> 🟢 `/healthz` tetap terbuka. `/mcp`, `/sse`, dan `/messages` memerlukan autentikasi saat diaktifkan. `/admin/runtime` memerlukan token admin saat dikonfigurasi.---

## 🌍 Official Docs That Shape Support Decisions

Kumpulan penulis saat ini dan batasan manual saja diperiksa berdasarkan dokumen produk resmi, termasuk:

- MCP Kode Claude Antropis
- OpenAI Codex CLI dan OpenAI Docs MCP
- Dokumen MCP kursor
- Lanjutkan dokumen MCP
- Dokumen Kiro MCP
- Dokumen OpenCode MCP
- Dokumen Cline MCP
- Dokumen MCP Kode Kilo
- Dokumen GitHub Copilot CLI
- Dokumen Zed MCP
- Dokumen VS Code MCP
- Dokumen MCP Asisten AI JetBrains

Dokumen-dokumen itulah yang menjadi alasan mengapa beberapa klien menerima penulis otomatis kelas satu sementara yang lain tetap hanya menggunakan cuplikan untuk saat ini.