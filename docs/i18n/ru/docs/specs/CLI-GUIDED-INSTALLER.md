# 🧩 CLI Guided Installer Specification (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Поведенческий контракт для пошаговой установки в Omni Skills CLI.**---

## 1. Scope

Эта спецификация определяет поведение управляемой установки, которая находится поверх существующей серверной части установщика.

Он не заменяет:

- `инструменты/bin/install.js`
- текущие экспертные флаги
- манифесты выборочной установки

Он определяет:

- как войти в управляемый режим
- как выбираются направления
- как выбирается область установки
- какая информация предварительного просмотра должна отображаться
- как работает подтверждение и исполнение---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

Интерфейс командной строки должен перейти в режим управляемой установки, если:

- пользователь запускает `omni-skills` без аргументов в TTY
- пользователь запускает установку omni-skills без селекторов в телетайпе.### 2.2 Forced Guided Entry

Интерфейс командной строки также должен поддерживать явный управляемый режим через специальную опцию, например:

- `установка omni-skills --guided`

Этот режим должен работать, даже если ввод передается по конвейеру и не подключен к TTY, пока доступен стандартный ввод.### 2.3 Non-Interactive Safety Rule

При вызове без TTY и без явного запроса управляемого режима:

- сохранить текущее поведение по умолчанию
- не блокировать ожидание подсказок---

## 3. Destination Model

Управляемая установка должна поддерживать два класса назначения:### 3.1 Known Client Target

Каждая известная цель решает:

- читаемая человеком этикетка
- внутренний идентификатор инструмента
- установить флаг
- решенный путь

Требуемые известные цели:

- Клод Код
- Курсор
- интерфейс командной строки Близнецов
- Интерфейс командной строки Кодекса
- Киро
- Антигравитация
- Открытый код### 3.2 Custom Path Target

Режим пользовательского пути должен:

- подсказать путь
- разрешить `~`
- нормализовать до абсолютного пути
- показать разрешенный путь в предварительном просмотре---

## 4. Install Scope Model

Управляемая установка должна поддерживать:### 4.1 Full Library

Эквивалент текущей установки без `--skill` или `--bundle`.### 4.2 Single Skill

Позволяет пользователю выбрать один опубликованный навык.### 4.3 Single Bundle

Позволяет пользователю выбрать один курируемый пакет и разрешить опубликованных участников.### 4.4 Search Then Install

Позволяет пользователю:

- введите поисковый запрос
- проверить результаты
- выберите навык или пакет
- продолжить предварительный просмотр установки---

## 5. Preview Contract

Перед выполнением управляемая установка должна отобразить:

- метка назначения
- путь назначения
- установить прицел
- выбранный навык или пакет, если применимо
- эквивалентная команда CLI

Необязательно, но рекомендуется:

- сводка метаданных выбранных навыков
- сводка о доступности пакета---

## 6. Execution Contract

После подтверждения:

- направляемые делегаты установки к существующему серверу установщика
- он не переопределяет запись в файл сам

Предварительный просмотр команды и фактические аргументы делегированного установщика должны точно совпадать.---

## 7. Result Contract

После успешного выполнения результат управляемой установки должен показать:

- показатель успеха
- конечный путь назначения
- команда, которая была выполнена
- следующее рекомендуемое действие

Пример следующих действий:

- использовать навык в выбранном клиенте
- запустить `доктор`
- запустите `mcpstream --local`---

## 8. Compatibility Contract

Следующие положения остаются действительными и неизменными:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bundle full-stack`
- `omni-skills --path ./skills`
- `omni-skills find Figma --tool курсор --install --yes`

Управляемый режим добавляет поведение. Это не удаляет существующее поведение.