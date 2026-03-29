# 📋 Skill Manifest Specification (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Машиночитаемый манифест JSON, создаваемый из каждого `SKILL.md` во время конвейера сборки — единый контракт данных, используемый всеми поверхностями среды выполнения.**---

## 📊 Status

| Особенность | Государство |
|:--------|:------|
| ✅ Автоматически генерируется из SKILL.md | Реализовано |
| ✅ Используется CLI, API, MCP, A2A | Реализовано |
| ✅ Архивы с контрольными суммами | Реализовано |
| ✅ Классификация безопасности | Реализовано |

>**Важно**: манифест представляет собой**артефакт сборки**. Автор участников `SKILL.md` — конвейер автоматически извлекает манифест JSON.---

## 🎯 Purpose

Манифест существует для того, чтобы**все поверхности времени выполнения**имели одну и ту же нормализованную форму:

| Поверхность | Как он использует манифесты |
|:--------|:---------------------|
| 🖥️**CLI**| Поиск, планирование установки, диагностика врача |
| 🌐**API**| Ответы конечных точек, фильтрация, ссылки для скачивания |
| 🔌**MCP**| Ответы на инструмент, содержание ресурса |
| 🤖**A2A**| Полезные данные для обнаружения и рекомендаций |---

## 📁 Output Locations

| Артефакт | Путь |
|:---------|:-----|
| 📊 Корневые метаданные | `метаданные.json` |
| 📊 Метаданные по навыкам | `skills/<skill>/metadata.json` |
| 📋 Индекс навыков | `skills_index.json` |
| 📚 Издан каталог | `dist/catalog.json` |
| 📌 Манифест каждого навыка | `dist/manifests/<skill>.json` |
| 📦 Zip-архив | `dist/archives/<skill>.zip` |
| 📦 Архив Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Манифест контрольной суммы | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Поле | Описание |
|:------|:------------|
| `версия_схемы` | Версия схемы манифеста |
| `идентификатор` | Стабильный идентификатор навыка из поля `name` |
| `слизняк` | Пустой каталог под `skills/` |
| `отображаемое_имя` | Читабельный заголовок из первого заголовка |### 📝 Metadata

| Поле | Описание |
|:------|:------------|
| `описание` | Краткое резюме из темы |
| `версия` | Версия навыка, независимая от версии пакета npm |
| `категория` | Каноническая категория (нормализованная) |
| `raw_category` | Оригинальная категория из фронтмена |
| `таксономия` | Полные метаданные таксономии с предполагаемым резервным вариантом |
| `теги` | Теги с возможностью поиска |
| `сложность` | `начинающий` · `средний` · `продвинутый` · `эксперт` |
| `риск` | `безопасный` · `осторожно` · `наступательный` · `критический` |
| `источник` | `омни-команда` · `сообщество` · `официальный` |
| `автор` | Строка атрибуции |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Поле | Описание |
|:------|:------------|
| `точка входа` | Канонический путь `SKILL.md` |
| `paths.root` | Каталог навыков внутри репо |
| `paths.manifest` | Сгенерированный путь манифеста в `dist/` |### 🖥️ Compatibility

| Поле | Описание |
|:------|:------------|
| `инструменты` | Идентификаторы инструментов из заголовка |
| `install_targets` | Метаданные установки для каждого инструмента |

Каждая цель установки включает в себя: «инструмент», «область», «путь_по умолчанию», «флаг_установщика», «текущее_установочное_поведение», «вызов».### 📦 Resources

| Поле | Описание |
|:------|:------------|
| `sub_resources` | Подкаталоги навыков («ссылки», «агенты», «активы») |
| `артефакты_количество` | Общее количество файлов в пакете навыков |
| `references_count` | Количество справочных документов |
| `agents_count` | Количество конфигураций агента |
| `assets_count` | Количество файлов активов |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Поле | Описание |
|:------|:------------|
| `стратегия` | Стратегия установки (например, `copy-skill-directory`) |
| `текущий_установщик` | Удобочитаемое поведение при установке |
| `рецепты` | Рецепты установки для каждого клиента |### 📊 Classification

| Раздел | Поля |
|:--------|:-------|
| 🎯 `зрелость` | `skill_level`, `skill_level_label` |
| 📋 `лучшие_практики` | `счет` (0-100) |
| ⭐ `качество` | `счет` (0-100) |
| 🛡️ `безопасность` | `оценка`, `статус` |
| ✅ `проверка` | `статус` |### 📝 Content

Производные сигналы: «body_length», «content_length», «body_lines», «word_count», а также структурные флаги для примеров, разделов по устранению неполадок и т. д.### 📁 Artifacts

Массив всех файлов, находящихся в каталоге навыков:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Виды артефактов**: «точка входа» · «ссылка» · «агент» · «актив» · «лицензия» · «поддержка»### 📦 Archives

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

| Поле | Описание |
|:------|:------------|
| `entrypoint_sha256` | Хэш SKILL.md |
| `package_sha256` | Детерминированный дайджест из упорядоченного списка артефактов |---

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

> 📌 Версия пакета репозитория и версия навыка — это разные вещи. В настоящее время пакет имеет версию 0.1.3, а отдельные навыки имеют свои собственные семантические версии.---

## ⚠️ Compatibility Notes

| Правило | Обоснование |
|:-----|:----------|
| ✅ Должно оставаться производным от репо | Создание манифеста вручную не требуется |
| ✅ Можно добавить новые необязательные поля | Прямая совместимость |
| ⚠️Существующие месторождения должны оставаться стабильными | Обратная совместимость |
| 🚫 Никаких рукописных манифестов | Вывод во время сборки — источник истины |