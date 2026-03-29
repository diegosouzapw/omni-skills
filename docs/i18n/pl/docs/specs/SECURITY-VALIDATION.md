# 🛡️ Security Validation and Distribution (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Skanowanie bezpieczeństwa, generowanie archiwum, opcjonalne podpisywanie i pakowanie dystrybucyjne dla każdej opublikowanej umiejętności.**---

## 📊 Status

| Funkcja | stan |
|:------------|:------|
| ✅Statyczny skaner bezpieczeństwa | Zawsze włączone |
| ✅ Klasyfikacja metadanych według umiejętności | Wdrożono |
| ✅ Archiwa umiejętności (zip/tar.gz) | Wdrożono |
| ✅ Manifest sumy kontrolnej SHA-256 | Wdrożono |
| ✅ Brama skanera CI na znacznikach wydania | Wdrożono |
| ✅ npm publikuj przepływ pracy ze zweryfikowanego archiwum tar | Wdrożono |
| ⚙️ Skanowanie ClamAV | Opcjonalny wzbogacacz |
| ⚙️ Wyszukiwanie skrótu VirusTotal | Opcjonalny wzbogacacz |
| ✅Podpis wolnostojący | Wdrożono |
| ✅ Podpisywanie wymuszone przez CI | Zaimplementowano w tagach wydania |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Skanuje każdą umiejętność podczas walidacji:

| Cel | Co zostaje zeskanowane |
|:-------|:--------------------------------|
| 📝 `UMIEJĘTNOŚĆ.md` | Główna treść umiejętności |
| 📄 Pliki Markdown/tekstowe | Pakiety referencji i dokumentów |
| ⚙️ Skrypty | Pakiety skryptów automatyzacji |

**Rodziny reguł:**

| Zasada | Przykłady |
|:---------|:---------|
| 🎭**Szybki zastrzyk**| Wzorce eksfiltracji, obejście instrukcji |
| 💣**Niszczycielskie polecenia**| `rm -rf`, `format`, `del /s` |
| 🔑**Eskalacja uprawnień**| `sudo`, `chmod 777`, wzorce setuid |
| 📂**Podejrzane ścieżki**| `/etc/shadow`, `~/.ssh`, pliki uwierzytelniające |
| ⚠️**Ryzykowne prymitywy**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Wymaga `clamscan` w `PATH`
- Skanuje spakowane pliki w poszukiwaniu znanego złośliwego oprogramowania
- Wyniki zapisane w metadanych umiejętności---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Tylko wyszukiwanie skrótu**— brak przesyłania plików podczas normalnej walidacji
- Nieznane pliki pozostają tylko lokalne
- Utrzymuje kompilację**deterministyczną**i niezależną od CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Ścisła bramka zwalniająca:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Ten krok odczytuje wygenerowany plik `skills/*/metadata.json` i kończy się niepowodzeniem, jeśli wymagane skanery nie wykonały lub nie zgłosiły wykrycia.---

## 📊 Security Output Shape

Dane bezpieczeństwa są emitowane w metadanych każdej umiejętności:```json
{
  "security": {
    "score": 100,
    "tier": "hardened",
    "status": "passed",
    "findings_count": 0,
    "findings": [],
    "signals": {
      "scanned_files": 3,
      "script_files": 0,
      "binary_like_files": 0
    },
    "scanners": {
      "static": { "enabled": true, "status": "completed" },
      "clamav": { "enabled": false, "status": "disabled" },
      "virustotal": { "enabled": false, "status": "disabled" }
    }
  }
}
```

> Ten blok jest propagowany do manifestów i widoków katalogu, umożliwiając CLI, API i MCP**filtrowanie i rankingowanie według wyniku bezpieczeństwa**.---

## 📦 Archive Outputs

Każda opublikowana umiejętność generuje:

| Plik | Formatuj |
|:---------|:-------|
| `dist/archives/<umiejętność>.zip` | Archiwum ZIP |
| `dist/archives/<umiejętność>.tar.gz` | Archiwum Tarballa |
| `dist/archives/<umiejętność>.checksums.txt` | Manifest sumy kontrolnej SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Tagi wydań akcji GitHub (`v*`) są teraz:

1. sprawdź, czy tag git pasuje do `package.json`
2. zainstaluj i odśwież ClamAV
3. odkoduj klucz podpisywania wersji z sekretów GitHub
4. uruchom `npm run release:verify`
5. spakuj archiwum tar za pomocą `npm pack`
6. opublikuj dokładnie to archiwum tar w npm z pochodzeniem
7. utwórz wersję GitHub z niestandardowymi notatkami i dołączonymi zasobami weryfikacyjnymi---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Jeśli nie podano klucza publicznego, kompilacja wyprowadza go z `openssl` i umieszcza go w `dist/signing/`.

Po włączeniu obok archiwów i manifestu sumy kontrolnej emitowane są pliki `.sig`.

W CI tagi wersji wymagają teraz podpisania:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` lub `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- opcjonalnie `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` lub `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Ograniczenie | Stan |
|:---------------|:-------|
| Przesyłanie plików VirusTotal | Celowo wykluczone z domyślnej walidacji |
| Egzekwowanie podpisu | Wymuszone w przypadku znaczników wydania; kompilacje lokalne mogą nadal działać bez znaku |
| Zarządzanie hostowane | Wbudowane uwierzytelnianie, środowisko wykonawcze administratora, listy dozwolonych CORS/IP, tryb konserwacji i rejestrowanie audytu są dostępne; bramy zewnętrzne pozostają opcjonalne |