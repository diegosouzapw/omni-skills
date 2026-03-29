# 📋 Skill Manifest Specification (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Манифестът за машинно четене на JSON, генериран от всеки `SKILL.md` по време на конвейера за изграждане — единният договор за данни, използван от всички повърхности за изпълнение.**---

## 📊 Status

| Характеристика | състояние |
|:--------|:------|
| ✅ Автоматично генерирано от SKILL.md | Внедрено |
| ✅ Използва се от CLI, API, MCP, A2A | Внедрено |
| ✅ Архив с контролни суми | Внедрено |
| ✅ Класификация за сигурност | Внедрено |

>**Важно**: Манифестът е**артефакт за компилация**. Сътрудник автор `SKILL.md` — тръбопроводът автоматично извлича JSON манифеста.---

## 🎯 Purpose

Манифестът съществува, така че**всички повърхности по време на изпълнение**консумират една и съща нормализирана форма:

| Повърхност | Как използва манифестите |
|:--------|:--------------------|
| 🖥️**CLI**| Търсене, планиране на инсталиране, лекарска диагностика |
| 🌐**API**| Отговори на крайни точки, филтриране, връзки за изтегляне |
| 🔌**MCP**| Отговори на инструмента, съдържание на ресурс |
| 🤖**A2A**| Полезни товари за откриване и препоръки |---

## 📁 Output Locations

| Артефакт | Път |
|:---------|:-----|
| 📊 Основни метаданни | `metadata.json` |
| 📊 Метаданни за всяко умение | `skills/<skill>/metadata.json` |
| 📋 Индекс на умения | `skills_index.json` |
| 📚 Публикуван каталог | `dist/catalog.json` |
| 📌 Манифест за всяко умение | `dist/manifests/<skill>.json` |
| 📦 Zip архив | `dist/archives/<skill>.zip` |
| 📦 Архив на тарбол | `dist/archives/<skill>.tar.gz` |
| 🔒 Манифест на контролна сума | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Поле | Описание |
|:------|:------------|
| `схема_версия` | Версия на схемата на манифеста |
| `id` | Стабилен идентификатор на умение от полето `име` |
| `охлюв` | Охлюв на директория под `skills/` |
| `показвано_име` | Четимо заглавие от първото заглавие |### 📝 Metadata

| Поле | Описание |
|:------|:------------|
| `описание` | Кратко резюме от frontmatter |
| `версия` | Версия на умения, независима от версията на пакета npm |
| `категория` | Канонична категория (нормализирана) |
| `сурова_категория` | Оригинална категория от frontmatter |
| `таксономия` | Пълни метаданни за таксономия с изведен резервен вариант |
| `тагове` | Етикети за търсене |
| `сложност` | `начинаещ` · `средно напреднал` · `напреднал` · `експерт` |
| `риск` | `безопасно` · `внимание` · `офанзивно` · `критично` |
| `източник` | `омни-отбор` · `общност` · `официален` |
| `автор` | Низ за приписване |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Поле | Описание |
|:------|:------------|
| `входна точка` | Каноничен път `SKILL.md` |
| `paths.root` | Директория на умения в репо |
| `paths.manifest` | Генериран манифестен път в `dist/` |### 🖥️ Compatibility

| Поле | Описание |
|:------|:------------|
| `инструменти` | Идентификатори на инструменти от frontmatter |
| `install_targets` | Метаданни за инсталиране на инструмент |

Всяка цел за инсталиране включва: `инструмент`, `обхват`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| Поле | Описание |
|:------|:------------|
| `под_ресурси` | Поддиректории на умения (`референции`, `агенти`, `активи`) |
| `брой_артефакти` | Общ брой файлове в пакета с умения |
| `брой_препратки` | Брой референтни документи |
| `брой_агенти` | Брой конфигурации на агент |
| `брой_активи` | Брой файлове с активи |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Поле | Описание |
|:------|:------------|
| `стратегия` | Стратегия за инсталиране (напр. `copy-skill-directory`) |
| `текущ_инсталатор` | Човешко четимо поведение при инсталиране |
| `рецепти` | Рецепти за инсталиране на клиент |### 📊 Classification

| Раздел | Полета |
|:--------|:-------|
| 🎯 `зрялост` | `ниво_на_умение`, `етикет_ниво_на_умение` |
| 📋 `най-добри_практики` | `резултат` (0-100) |
| ⭐ `качество` | `резултат` (0-100) |
| 🛡️ `сигурност` | `резултат`, `статус` |
| ✅ `валидиране` | `състояние` |### 📝 Content

Изведени сигнали: `body_length`, `content_length`, `body_lines`, `word_count`, плюс структурни флагове за примери, секции за отстраняване на проблеми и др.### 📁 Artifacts

Масив от всеки файл, изпратен в директорията на уменията:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Видове артефакти**: `входна точка` · `референция` · `агент` · `актив` · `лиценз` · `поддръжка`### 📦 Archives

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
| `entrypoint_sha256` | Хеш на SKILL.md |
| `package_sha256` | Детерминистичен дайджест от подреден списък с артефакти |---

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

> 📌 Версията на пакета за хранилище и версията на уменията са различни проблеми. Пакетът в момента е `0.1.3`, докато отделните умения носят свои собствени семантични версии.---

## ⚠️ Compatibility Notes

| Правило | Обосновка |
|:-----|:----------|
| ✅ Трябва да остане изведено от репо | Не се изисква ръчно създаване на манифест |
| ✅ Могат да се добавят нови незадължителни полета | Предна съвместимост |
| ⚠️ Съществуващите полета трябва да останат стабилни | Обратна съвместимост |
| 🚫 Без ръкописни манифести | Деривацията по време на изграждане е източникът на истината |