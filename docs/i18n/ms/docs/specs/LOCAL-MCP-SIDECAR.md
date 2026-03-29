# 🔌 Local MCP Sidecar (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/LOCAL-MCP-SIDECAR.md) · 🇪🇸 [es](../../../es/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇷 [fr](../../../fr/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇪 [de](../../../de/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇹 [it](../../../it/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇺 [ru](../../../ru/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇯🇵 [ja](../../../ja/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇰🇷 [ko](../../../ko/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇦 [ar](../../../ar/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇳 [in](../../../in/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇹🇭 [th](../../../th/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇻🇳 [vi](../../../vi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇩 [id](../../../id/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇲🇾 [ms](../../../ms/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇱 [nl](../../../nl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇱 [pl](../../../pl/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇪 [sv](../../../sv/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇳🇴 [no](../../../no/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇩🇰 [da](../../../da/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇫🇮 [fi](../../../fi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇹 [pt](../../../pt/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇷🇴 [ro](../../../ro/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇭🇺 [hu](../../../hu/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇬 [bg](../../../bg/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇸🇰 [sk](../../../sk/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇮🇱 [he](../../../he/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇵🇭 [phi](../../../phi/docs/specs/LOCAL-MCP-SIDECAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/LOCAL-MCP-SIDECAR.md)

---


>**Pelanjutan mod tempatan pilihan untuk `@omni-skills/server-mcp` yang menambahkan alatan yang menyedari sistem fail untuk pengesanan klien, pengurusan kemahiran dan penjanaan konfigurasi MCP.**---

## 📊 Status

| Ciri | Negeri |
|:--------|:------|
| ✅ Alat katalog baca sahaja | Dilaksanakan |
| ✅ Alat tempatan yang sedar sistem fail | Dilaksanakan |
| ✅ 3 pengangkutan (stdio/stream/sse) | Dilaksanakan |
| ✅ Tulisan tersenarai dibenarkan | Dilaksanakan |
| ✅ Pratonton-sebelum-tulis lalai | Dilaksanakan |
| ✅ Penulisan konfigurasi MCP yang sedar pelanggan | Dilaksanakan |
| ✅ Pengesahan HTTP + pengehadan kadar | Dilaksanakan |
| ✅ Tandatangan masa keluaran dan jumlah semak | Dilaksanakan untuk arkib yang dijana dan dipaparkan oleh API/MCP |
| 🟡 Penguatkuasaan tandatangan masa tulis tempatan | Belum dikuatkuasakan lagi; pratonton mod tempatan dan menulis daripada pembayaran tempatan yang dipercayai |
| 🟢 Liputan pelanggan semasa | 7 pelanggan berkebolehan memasang, 16 pelanggan berkemampuan konfigurasi, 33 sasaran konfigurasi, 19 profil konfigurasi |---

## 🎯 Purpose

Mod setempat menambahkan**alat yang menyedari sistem fail**di atas permukaan katalog MCP baca sahaja sedia ada. Gunakannya apabila ejen perlu:

- 🕵️ Kesan pelanggan AI tempatan yang serasi
- 📋 Periksa kemahiran yang dipasang
- 👁️ Pratonton pemasangan atau pengalihan kemahiran (lari kering)
- 📦 Guna pemasangan atau penyingkiran kemahiran tempatan
- ⚙️ Tulis fail konfigurasi MCP tempatan selepas pratonton

Ia sengaja memisahkan dua kebimbangan:

-**sasaran pemasangan kemahiran**
  pelanggan dengan direktori kemahiran yang stabil yang boleh menggunakan `kemahiran_pasang`
-**Sasaran konfigurasi MCP**
  pelanggan atau IDE dengan format konfigurasi MCP terdokumentasi yang stabil, walaupun mereka tidak mempunyai direktori kemahiran---

## 🔌 Transports

| Pengangkutan | Protokol | Kes Penggunaan |
|:----------|:---------|:---------|
| `stdio` | Paip | Penyepaduan pelanggan langsung |
| `strim` | HTTP boleh strim | Pelanggan HTTP moden |
| `sse` | Acara Dihantar Pelayan | Pelanggan warisan |---

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

> Semua arahan menetapkan `OMNI_SKILLS_MCP_MODE=local` secara automatik.---

## 🛠️ Local Tools

Apabila mod setempat didayakan, alatan tambahan ini tersedia:

| Alat | Penerangan | Lalai |
|:-----|:------------|:--------|
| 🕵️ `kesan_pelanggan` | Imbas untuk klien AI dan laluan kemahiran/konfigurasi mereka | — |
| 📋 `senarai_kemahiran_dipasang` | Periksa kemahiran yang dipasang untuk pelanggan tertentu | — |
| 📦 `kemahiran_pasang` | Pasang kemahiran ke dalam direktori kemahiran pelanggan | 🔍 larian kering |
| 🗑️ `buang_kemahiran` | Alih keluar kemahiran yang dipasang daripada klien | 🔍 larian kering |
| ⚙️ `configure_client_mcp` | Tulis konfigurasi MCP untuk pelanggan tertentu | 🔍 larian kering |

> ⚠️ `kemahiran_pasang`, `buang_kemahiran` dan `configure_client_mcp` lalai kepada**dry-run**apabila `dry_run` diabaikan.---

## 🎯 Supported Targets

### 📂 Skills Directories

| Pelanggan | Laluan |
|:-------|:-----|
| 🔵 Kod Claude | `~/.claude/skills` |
| 🔵 Kursor | `~/.kursor/kemahiran` |
| 🟡 Gemini CLI | `~/.gemini/skills` |
| 🟣 Antigraviti | `~/.gemini/antigravity/skills` |
| 🟢 Kiro | `~/.kiro/kemahiran` |
| 🔴 Codex CLI | `~/.codex/skills` atau `$CODEX_HOME/skills` |
| ⚪ Kod Terbuka | `<ruang kerja>/.opencode/skills` |

7 sasaran ini adalah satu-satunya destinasi pemasangan kelas pertama hari ini.### ⚙️ MCP Config Files

| Sasaran | Format |
|:-------|:-------|
| `~/.claude/settings.json` | Tetapan Kod Claude JSON |
| `<ruang kerja>/.claude/settings.json` | Tetapan projek Claude JSON |
| `~/.claude.json` | Claude JSON (`mcpServers`) |
| `~/Perpustakaan/Sokongan Aplikasi/Claude/claude_desktop_config.json` | Claude Desktop JSON (khusus OS) |
| `~/.cursor/mcp.json` | JSON (`mcpServers`) |
| `<ruang kerja>/.cursor/mcp.json` | Kursor ruang kerja JSON (`mcpServers`) |
| `~/.gemini/settings.json` | Pengguna Gemini JSON (`mcpServers`) |
| `<ruang kerja>/.gemini/settings.json` | Projek Gemini JSON (`mcpServers`) |
| `~/.gemini/antigravity/mcp.json` | JSON Antigraviti (`mcpServers`) |
| `~/.kiro/settings/mcp.json` | JSON pengguna Kiro (`mcpServers`) |
| `<ruang kerja>/.kiro/settings/mcp.json` | Projek Kiro JSON (`mcpServers`) |
| `~/.codex/config.toml` | TOML (`[mcp_servers]`) |
| `<ruang kerja>/.mcp.json` | JSON (`mcpServers`) |
| `<ruang kerja>/opencode.json` | OpenCode ruang kerja JSON (`mcp`) |
| `~/.config/opencode/opencode.json` | JSON pengguna OpenCode (`mcp`) |
| `~/.cline/data/settings/cline_mcp_settings.json` | Cline JSON (`mcpServers`) |
| `~/.copilot/mcp-config.json` | GitHub Copilot CLI JSON (`mcpServers`) |
| `<ruang kerja>/.github/mcp.json` | Repositori GitHub Copilot JSON (`mcpServers`) |
| `~/.config/kilo/kilo.json` | Kilo CLI pengguna JSON (`mcp`) |
| `<ruang kerja>/kilo.json` | Projek Kilo CLI JSON (`mcp`) |
| `<ruang kerja>/.kilocode/mcp.json` | Ruang kerja Kilo Code JSON (`mcpServers`) |
| `<workspace>/.continue/mcpServers/omni-skills.yaml` | Teruskan ruang kerja YAML (`mcpServers`) |
| `<ruang kerja>/.junie/mcp/mcp.json` | Projek Junie JSON (`mcpServers`) |
| `~/.junie/mcp/mcp.json` | Pengguna Junie JSON (`mcpServers`) |
| `~/.codeium/windsurf/mcp_config.json` | Windsurf JSON (`mcpServers`) |
| `~/.config/goose/config.yaml` | Angsa YAML (`sambungan`) |
| `<ruang kerja>/.zed/settings.json` | Ruang kerja Zed JSON (`context_servers`) |
| `<ruang kerja>/.vscode/mcp.json` | JSON (`pelayan`) |
| `~/.config/Code/User/mcp.json` | Pengguna Kod VS JSON (`pelayan`) |
| `~/.config/Code - Insiders/User/mcp.json` | VS Code Insiders pengguna JSON (`pelayan`) |
| `<ruang kerja>/.devcontainer/devcontainer.json` | Nested Dev Container JSON (`customizations.vscode.mcp.servers`) |
| Akar pelanggan `mcp.json` | JSON (format setiap pelanggan) |

Itu memberikan kereta sampingan:

-**16 pelanggan atau IDE berkebolehan konfigurasi**
-**33 laluan sasaran kelas pertama**
-**19 format profil**

Jangkauan liputan konfigurasi kelas pertama semasa:

- Claude Code dan Claude Desktop
- Kursor
- Kod VS dan Bekas Dev
- Gemini CLI
- Antigraviti
- Kiro
- Codex CLI
- Teruskan
- Junie
- Luncur Angin
- Angsa
- OpenCode
- Cline
- GitHub Copilot CLI
- Kod Kilo
- Zed

Calon manual atau coretan sahaja masih berada di luar set penulis kelas pertama sehingga kontrak konfigurasi awam mereka cukup stabil.### 🧭 Expansion Policy

Omni Skills kini menganggap sokongan pelanggan sebagai model tiga peringkat:

1.**boleh pasang**
   Direktori kemahiran yang stabil wujud, jadi CLI dan sidecar boleh memasang kemahiran secara langsung.
2.**boleh konfigurasi**
   Format konfigurasi MCP yang stabil dan didokumenkan wujud, jadi `config-mcp` boleh pratonton dan menulis fail kelas pertama.
3.**manual atau coretan sahaja**
   Produk ini jelas menyokong MCP dalam beberapa bentuk, tetapi dokumen awam belum lagi membenarkan penulis automatik yang selamat.

Inilah sebabnya mengapa pelanggan seperti JetBrains AI Assistant kekal manual/coretan sahaja, manakala Roo Code dan Postman kekal di luar set penulis kelas pertama sehingga cerita gabungan automatik selamat mereka cukup kuat untuk projek ini.---

## 🔒 Allowlist Model

Kereta sampingan tempatan hanya menulis di bawah**senarai dibenarkan yang jelas**.### 🟢 Default allowlist:

- Akar pelanggan yang diketahui di bawah `$HOME`
- `~/.codeium` untuk konfigurasi pengguna Windsurf
- `~/.copilot` untuk GitHub Copilot CLI
- `~/.cline` untuk Cline CLI
- `~/.config/goose` untuk konfigurasi Goose
- `~/.config/kilo` dan `~/.config/opencode` untuk konfigurasi Kilo/OpenCode CLI
- `$CODEX_HOME` (atau `~/.codex` jika tidak ditetapkan)
- Akar ruang kerja semasa
- `<ruang kerja>/.ejen`
- `<ruang kerja>/.github`
- `<ruang kerja>/.kilocode`
- `<ruang kerja>/.opencode`
- `<ruang kerja>/.zed`
- `<ruang kerja>/.teruskan`
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

Pembalut CLI yang disokong kereta sisi memastikan penjanaan konfigurasi MCP boleh diakses tanpa panggilan JSON-RPC langsung:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Tingkah laku lalai ialah pratonton sahaja. `--write` menggunakan konfigurasi pada laluan sasaran yang diselesaikan di bawah senarai yang dibenarkan.### 🌊 Windsurf

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

Alat `configure_client_mcp` juga boleh menulis tetapan khusus Claude apabila anda lulus:

- `pelayan_mcp_dibenarkan`
- `denied_mcp_servers`
- `menafikan_kebenaran`
- `dayakan_semua_projek_mcp_servers`### 💜 VS Code sandboxing

Untuk sasaran VS Code dan Dev Container, `configure_client_mcp` juga boleh menulis:

- `kotak pasir Didayakan`
- `sandbox.filesystem.allowWrite`
- `sandbox.network.allowHosts`
- `dev.watch`
- `dev.debug.type`

Ini memetakan kepada panduan Kod VS semasa untuk kotak pasir pelayan MCP stdio tempatan.### 🧰 Cross-Client Entry Options

`configure_client_mcp` kini menyokong metadata kemasukan yang lebih kaya merentas profil yang disokong:

- `pengepala`
- `env`
- `env_file`
- `cwd`
- `masa_ms`
- `penerangan`
- `include_tools`
- `exclude_tools`
- `kurang upaya`
- `amanah`

Pilihan khusus profil:

- Claude: `allowed_mcp_servers`, `denied_mcp_servers`, `permissions_deny`, `enable_all_project_mcp_servers`
- Gemini: `mcp_allowed_servers`, `mcp_excluded_servers`
- Kiro: `alat_dilumpuhkan`, `auto_approve`
- Kod VS dan Bekas Dev: `dev_watch`, `dev_debug_type`### 📋 Generated Recipes

`configure_client_mcp` mengembalikan `resipi` bersama pratonton atau konfigurasi yang digunakan.

Resipi ini adalah blok panduan sedar pelanggan, contohnya:

- `claude mcp tambah ... --pengguna skop|projek`
- `gemini mcp tambah ... --pengguna skop|projek`
- `codex mcp add ...`
- resipi manual edit fail untuk Kursor, Kod VS, Kiro dan Claude Desktop

Strategi keseluruhan kini sengaja konservatif:

- gunakan semula set kecil keluarga konfigurasi kanonik jika boleh
- simpan penulis yang ditempah khas hanya apabila dokumen rasmi memerlukan bentuk yang berbeza
- elakkan mencipta penulis automatik untuk sasaran tidak berdokumen---

## 🔐 Hosted HTTP Hardening

Pengangkutan HTTP menyokong kawalan dipacu env yang sama seperti API katalog:

| Pembolehubah | Tujuan |
|:---------|:--------|
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Pengesahan token pembawa |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kekunci API dipisahkan koma |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Introspeksi masa jalan pentadbir sahaja |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Permintaan maksimum setiap tetingkap |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Tetingkap had kadar dalam ms |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Dayakan pengelogan audit |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Tulis log audit pada fail |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Hadkan asal usul penyemak imbas |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Hadkan IP sumber yang dibenarkan |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Kembalikan `503` untuk laluan bukan pentadbir, bukan kesihatan |

> 🟢 `/healthz` tetap dibuka. `/mcp`, `/sse` dan `/messages` memerlukan pengesahan apabila didayakan. `/admin/runtime` memerlukan token pentadbir apabila dikonfigurasikan.---

## 🌍 Official Docs That Shape Support Decisions

Set penulis semasa dan sempadan manual sahaja telah disemak terhadap dokumen produk rasmi, termasuk:

- Kod Claude Anthropic MCP
- OpenAI Codex CLI dan OpenAI Docs MCP
- Dokumen MCP kursor
- Teruskan dokumen MCP
- Dokumen Kiro MCP
- Dokumen OpenCode MCP
- Dokumen Cline MCP
- Dokumen MCP Kod Kilo
- Dokumen CLI Copilot GitHub
- Dokumen Zed MCP
- Dokumen MCP Kod VS
- Dokumen MCP Penolong JetBrains AI

Dokumen tersebut adalah sebab sesetengah pelanggan menerima penulis automatik kelas pertama manakala yang lain kekal coretan sahaja buat masa ini.