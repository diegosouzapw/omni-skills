# 🛡️ Security Validation and Distribution (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Сканирование безопасности, создание архива, дополнительная подпись и упаковка для распространения для каждого опубликованного навыка.**---

## 📊 Status

| Особенность | Государство |
|:--------|:------|
| ✅ Статический сканер безопасности | Всегда включено |
| ✅ Классификация метаданных по навыкам | Реализовано |
| ✅ Архивы по навыкам (zip/tar.gz) | Реализовано |
| ✅ Манифест контрольной суммы SHA-256 | Реализовано |
| ✅ ворота сканера CI на тегах выпуска | Реализовано |
| ✅ Рабочий процесс публикации npm из проверенного архива | Реализовано |
| ⚙️ Сканирование ClamAV | Дополнительный обогатитель |
| ⚙️ Поиск по хешу VirusTotal | Дополнительный обогатитель |
| ✅ Отдельная подпись | Реализовано |
| ✅ Подписание, принудительное CI | Реализовано в тегах выпуска |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Сканирует каждый навык во время проверки:

| Цель | Что сканируется |
|:-------|:-----------------|
| 📝 `SKILL.md` | Содержание основного навыка |
| 📄 Разметка/текстовые файлы | Пакетные справочные материалы и документация |
| ⚙️ Скрипты | Пакетные сценарии автоматизации |

**Семьи правил:**

| Правило | Примеры |
|:-----|:---------|
| 🎭**Быстрая инъекция**| Шаблоны эксфильтрации, переопределение инструкций |
| 💣**Деструктивные команды**| `rm -rf`, `format`, `del /s` |
| 🔑**Повышение привилегий**| `sudo`, `chmod 777`, шаблоны setuid |
| 📂**Подозрительные пути**| `/etc/shadow`, `~/.ssh`, файлы учетных данных |
| ⚠️**Рискованные примитивы**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Требуется `clamscan` в `PATH`
- Сканирует упакованные файлы на наличие известных вредоносных программ.
- Результаты записаны в метаданных навыков.---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Только поиск по хешу**— при обычной проверке загрузка файлов не производится.
- Неизвестные файлы остаются только локальными.
- Сохраняет сборку**детерминированной**и независимой от CI.### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Строгие ворота выпуска:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Этот шаг считывает сгенерированный файл `skills/*/metadata.json` и завершается неудачей, если необходимые сканеры не выполнили свои действия или не сообщили об обнаружениях.---

## 📊 Security Output Shape

Данные безопасности передаются в метаданные каждого навыка:```json
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

> Этот блок распространяется на манифесты и представления каталога, позволяя CLI, API и MCP**фильтровать и ранжировать по показателю безопасности**.---

## 📦 Archive Outputs

Каждый опубликованный навык генерирует:

| Файл | Формат |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP-архив |
| `dist/archives/<skill>.tar.gz` | Архив Tarball |
| `dist/archives/<skill>.checksums.txt` | Манифест контрольной суммы SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub Actions выпускает теги (`v*`):

1. убедитесь, что тег git соответствует `package.json`
2. установите и обновите ClamAV
3. декодировать ключ подписи выпуска из секретов GitHub.
4. запустите `npm run Release:verify`
5. упакуйте архив с помощью npm package.
6. опубликовать именно этот архив в npm с указанием источника
7. Создайте выпуск GitHub со специальными примечаниями и прикрепленными проверочными ресурсами.---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Если открытый ключ не указан, сборка извлекает его с помощью openssl и помещает его в dist/signing/.

Если этот параметр включен, файлы `.sig` создаются рядом с архивами и манифестом контрольной суммы.

В CI теги выпуска теперь требуют авторизации через:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` или `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- необязательный `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` или `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Ограничение | Статус |
|:-----------|:-------|
| VirusTotal загрузить отправку | Намеренно исключено из проверки по умолчанию |
| Подписание исполнения | Принудительно в тегах выпуска; локальные сборки все еще могут работать без подписи |
| Хостинговое управление | Имеются встроенная аутентификация, среда выполнения администратора, списки разрешений CORS/IP, режим обслуживания и ведение журнала аудита; внешние шлюзы остаются необязательными |