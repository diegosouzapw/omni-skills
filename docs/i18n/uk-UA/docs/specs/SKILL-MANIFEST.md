# 📋 Skill Manifest Specification (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Маніфест JSON, що зчитується машиною, створений з кожного `SKILL.md` під час конвеєра збірки — єдиного контракту даних, який використовується всіма поверхнями середовища виконання.**---

## 📊 Status

| Особливість | Держава |
|:--------|:------|
| ✅ Автоматично створено з SKILL.md | Реалізовано |
| ✅ Споживається CLI, API, MCP, A2A | Реалізовано |
| ✅ Архіви з контрольними сумами | Реалізовано |
| ✅ Клас безпеки | Реалізовано |

>**Важливо**: маніфест є**артефактом збірки**. Автор автора `SKILL.md` — конвеєр автоматично отримує маніфест JSON.---

## 🎯 Purpose

Маніфест існує так, що**всі поверхні середовища виконання**мають однакову нормалізовану форму:

| Поверхня | Як він використовує маніфести |
|:--------|:--------------------|
| 🖥️**CLI**| Пошук, монтаж планування, лікар діагностика |
| 🌐**API**| Відповіді кінцевої точки, фільтрація, посилання для завантаження |
| 🔌**MCP**| Відповіді інструменту, вміст ресурсу |
| 🤖**A2A**| Корисне навантаження виявлення та рекомендації |---

## 📁 Output Locations

| Артефакт | Шлях |
|:---------|:-----|
| 📊 Кореневі метадані | `metadata.json` |
| 📊 Метадані навичок | `skills/<skill>/metadata.json` |
| 📋 Індекс навичок | `skills_index.json` |
| 📚 Опублікований каталог | `dist/catalog.json` |
| 📌 Маніфест навичок | `dist/manifests/<skill>.json` |
| 📦 Zip-архів | `dist/archives/<skill>.zip` |
| 📦 Архів tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Маніфест контрольної суми | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Поле | Опис |
|:------|:------------|
| `схема_версії` | Версія схеми маніфесту |
| `id` | Стабільний ідентифікатор навичок із поля `name` |
| `слимак` | Служба каталогу в `skills/` |
| `display_name` | Зрозумілий заголовок з першого заголовка |### 📝 Metadata

| Поле | Опис |
|:------|:------------|
| `опис` | Коротке резюме від frontmatter |
| `версія` | Версія навичок, незалежна від версії пакета npm |
| `категорія` | Канонічна категорія (нормована) |
| `необроблена_категорія` | Оригінальна категорія від frontmatter |
| `таксономія` | Повні метадані таксономії з імовірним резервним |
| `теги` | Пошукові теги |
| `складність` | `початківець` · `середній` · `просунутий` · `експерт` |
| `ризик` | `безпечно` · `обережно` · `образливо` · `критично` |
| `джерело` | `омні-команда` · `спільнота` · `офіційний` |
| `автор` | Рядок атрибуції |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Поле | Опис |
|:------|:------------|
| `точка входу` | Канонічний шлях `SKILL.md` |
| `paths.root` | Каталог навичок у сховищі |
| `paths.manifest` | Згенерований шлях маніфесту в `dist/` |### 🖥️ Compatibility

| Поле | Опис |
|:------|:------------|
| `інструменти` | Ідентифікатори інструментів із Frontmatter |
| `install_targets` | Метадані встановлення кожного інструменту |

Кожна ціль встановлення включає: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| Поле | Опис |
|:------|:------------|
| `суб_ресурси` | Підкаталоги навичок (`посилання`, `агенти`, `активи`) |
| `число_артефактів` | Загальна кількість файлів у пакеті навичок |
| `кількість_посилань` | Кількість довідкових документів |
| `агентів_кількість` | Кількість конфігурацій агента |
| `assets_count` | Кількість файлів активів |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Поле | Опис |
|:------|:------------|
| `стратегія` | Стратегія встановлення (наприклад, `copy-skill-directory`) |
| `поточний_інсталятор` | Зрозуміла поведінка встановлення |
| `рецепти` | Рецепти інсталяції для кожного клієнта |### 📊 Classification

| Розділ | Поля |
|:--------|:-------|
| 🎯 `зрілість` | `skill_level`, `skill_level_label` |
| 📋 `best_practices` | `оцінка` (0-100) |
| ⭐ `якість` | `оцінка` (0-100) |
| 🛡️ `безпека` | `оцінка`, `статус` |
| ✅ `перевірка` | `статус` |### 📝 Content

Похідні сигнали: `body_length`, `content_length`, `body_lines`, `word_count`, а також структурні позначки для прикладів, розділів усунення несправностей тощо.### 📁 Artifacts

Масив кожного файлу, надісланого в каталог навичок:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Типи артефактів**: `точка входу` · `посилання` · `агент` · `актив` · `ліцензія` · `підтримка`### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

| Поле | Опис |
|:------|:------------|
| `entrypoint_sha256` | Хеш SKILL.md |
| `package_sha256` | Детермінований дайджест із упорядкованого списку артефактів |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 📌 Версія пакета репозиторію та версія навичок – різні проблеми. Пакет наразі `0.1.3`, тоді як окремі навички мають власні семантичні версії.---

## ⚠️ Compatibility Notes

| Правило | Обґрунтування |
|:-----|:----------|
| ✅ Повинен залишатися похідним від репо | Створення маніфесту вручну не потрібно |
| ✅ Можна додавати нові необов’язкові поля | Пряма сумісність |
| ⚠️ Існуючі поля мають залишатися стабільними | Зворотна сумісність |
| 🚫 Немає рукописних маніфестів | Виведення часу створення є джерелом істини |