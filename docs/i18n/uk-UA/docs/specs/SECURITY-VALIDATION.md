# 🛡️ Security Validation and Distribution (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Сканування безпеки, створення архіву, необов’язковий підпис і розповсюджувальна упаковка для кожного опублікованого навику.**---

## 📊 Status

| Особливість | Держава |
|:--------|:------|
| ✅ Статичний сканер безпеки | Завжди ввімкнено |
| ✅ Класифікація метаданих за навичками | Реалізовано |
| ✅ Архіви навичок (zip/tar.gz) | Реалізовано |
| ✅ Маніфести контрольної суми SHA-256 | Реалізовано |
| ✅ Шлюз сканера CI на тегах випуску | Реалізовано |
| ✅ Робочий процес публікації npm із перевіреного архіву | Реалізовано |
| ⚙️ Сканування ClamAV | Факультативний збагачувач |
| ⚙️ Хеш-пошук VirusTotal | Факультативний збагачувач |
| ✅ Відокремлений підпис | Реалізовано |
| ✅ Примусове підписання CI | Реалізовані теги випуску |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Сканує всі навички під час перевірки:

| Цільовий | Що сканується |
|:-------|:----------------|
| 📝 `SKILL.md` | Основний зміст уміння |
| 📄 Розмітка/текстові файли | Пакетні посилання та документи |
| ⚙️ Скрипти | Пакетні сценарії автоматизації |

**Контрольні сім’ї:**

| Правило | Приклади |
|:-----|:---------|
| 🎭**Швидке введення**| Шаблони ексфільтрації, перевизначення інструкцій |
| 💣**Руйнівні команди**| `rm -rf`, `format`, `del /s` |
| 🔑**Підвищення привілеїв**| `sudo`, `chmod 777`, шаблони setuid |
| 📂**Підозрілі шляхи**| `/etc/shadow`, `~/.ssh`, файли облікових даних |
| ⚠️**Ризиковані примітиви**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Вимагає `clamscan` в `PATH`
- Сканує запаковані файли на наявність відомого шкідливого програмного забезпечення
- Результати, записані в метаданих навичок---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Тільки хеш-пошук**— файл не завантажується під час звичайної перевірки
— Невідомі файли залишаються лише локальними
- Зберігає збірку**детермінованою**та незалежною від CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Ворота суворого випуску:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Цей крок читає згенерований `skills/*/metadata.json` і не виконується, якщо потрібні сканери не виконали або не повідомили про виявлення.---

## 📊 Security Output Shape

Дані безпеки передаються в метаданих кожного навику:```json
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

> Цей блок поширюється на маніфести та перегляди каталогу, що дозволяє CLI, API та MCP**фільтрувати та ранжувати за показником безпеки**.---

## 📦 Archive Outputs

Кожен опублікований навик генерує:

| Файл | Формат |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP архів |
| `dist/archives/<skill>.tar.gz` | Архів tarball |
| `dist/archives/<skill>.checksums.txt` | Маніфест контрольної суми SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Теги випуску GitHub Actions (`v*`):

1. Переконайтеся, що тег git відповідає `package.json`
2. встановіть і оновіть ClamAV
3. декодуйте ключ підпису випуску з секретів GitHub
4. запустіть `npm run release:verify`
5. запакуйте архів за допомогою `npm pack`
6. опублікуйте цей точний архів у npm із зазначенням походження
7. Створіть випуск GitHub із спеціальними примітками та доданими активами перевірки---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Якщо відкритий ключ не надано, збірка отримує його за допомогою `openssl` і розміщує його в `dist/signing/`.

Якщо ввімкнено, файли `.sig` видають поряд з архівами та маніфестом контрольної суми.

У CI теги випуску тепер вимагають підпису через:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` або `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- необов'язково `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` або `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Обмеження | Статус |
|:-----------|:-------|
| VirusTotal завантаження | Навмисно виключено з перевірки за замовчуванням |
| Підписання виконавчого | Теги, що застосовуються при випуску; локальні збірки все ще можуть працювати без підпису |
| Розміщене управління | Вбудована автентифікація, час виконання адміністратора, дозволені списки CORS/IP, режим обслуговування та журнал аудиту є на місці; зовнішні шлюзи залишаються необов'язковими |