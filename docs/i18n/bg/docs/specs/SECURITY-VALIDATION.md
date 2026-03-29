# 🛡️ Security Validation and Distribution (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Сканиране за защита, генериране на архив, незадължително подписване и пакетиране за разпространение за всяко публикувано умение.**---

## 📊 Status

| Характеристика | състояние |
|:--------|:------|
| ✅ Статичен скенер за сигурност | Винаги активиран |
| ✅ Класификация на метаданни за всяко умение | Внедрено |
| ✅ Архиви на умения (zip/tar.gz) | Внедрено |
| ✅ Манифести на контролна сума SHA-256 | Внедрено |
| ✅ CI скенер gate на етикети за освобождаване | Внедрено |
| ✅ npm публикуване на работен процес от проверен архив | Внедрено |
| ⚙️ ClamAV сканиране | Допълнителен обогатител |
| ⚙️ Хеш търсене на VirusTotal | Допълнителен обогатител |
| ✅ Отделно подписване | Внедрено |
| ✅ Наложено подписване с CI | Внедрено при етикети за освобождаване |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Сканира всяко умение по време на валидиране:

| Цел | Какво се сканира |
|:-------|:----------------|
| 📝 `SKILL.md` | Основно съдържание на умения |
| 📄 Markdown/текстови файлове | Пакетирани препратки и документи |
| ⚙️ Скриптове | Пакетирани скриптове за автоматизация |

**Управляващи семейства:**

| Правило | Примери |
|:-----|:---------|
| 🎭**Бързо инжектиране**| Модели на ексфилтрация, отмяна на инструкции |
| 💣**Разрушителни команди**| `rm -rf`, `формат`, `del /s` |
| 🔑**Ескалация на привилегии**| `sudo`, `chmod 777`, setuid модели |
| 📂**Подозрителни пътища**| `/etc/shadow`, `~/.ssh`, идентификационни файлове |
| ⚠️**Рискови примитиви**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Изисква `clamscan` в `PATH`
- Сканира пакетираните файлове за известен зловреден софтуер
- Резултати, записани в метаданни за умения---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Само хеш търсене**— без качване на файл по време на нормално валидиране
- Неизвестните файлове остават само локални
- Поддържа изграждането**детерминистично**и независимо от CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Врата за строго освобождаване:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Тази стъпка чете генерирания `skills/*/metadata.json` и се проваля, ако необходимите скенери не са изпълнили или са докладвали откривания.---

## 📊 Security Output Shape

Данните за сигурност се излъчват в метаданните на всяко умение:```json
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

> Този блок се разпространява в манифести и изгледи на каталог, позволявайки на CLI, API и MCP да**филтрират и класират по резултат за сигурност**.---

## 📦 Archive Outputs

Всяко публикувано умение генерира:

| Файл | Формат |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP архив |
| `dist/archives/<skill>.tar.gz` | Архив на tarball |
| `dist/archives/<skill>.checksums.txt` | Манифест на контролната сума на SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Етикети за освобождаване на GitHub Actions (`v*`) сега:

1. проверете дали етикетът git съвпада с `package.json`
2. инсталирайте и обновете ClamAV
3. декодирайте ключа за подписване на изданието от тайните на GitHub
4. изпълнете `npm run release:verify`
5. пакетирайте архива с `npm pack`
6. публикувайте този точен tarball в npm с произход
7. създайте издание на GitHub с персонализирани бележки и прикачени активи за проверка---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Ако не е предоставен публичен ключ, компилацията извлича такъв с `openssl` и го поставя в `dist/signing/`.

Когато е активирано, `.sig` файловете се излъчват до архивите и манифеста на контролната сума.

В CI етикетите за освобождаване вече изискват подписване чрез:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` или `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- по избор `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` или `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Ограничение | Статус |
|:-----------|:-------|
| Изпращане на качване на VirusTotal | Умишлено изключен от проверката по подразбиране |
| Принудително подписване | Наложени етикети при освобождаване; локалните компилации все още могат да работят неподписани |
| Хоствано управление | Вградено удостоверяване, администраторско време за изпълнение, CORS/IP разрешени списъци, режим на поддръжка и регистриране на одит са налице; външните шлюзове остават незадължителни |