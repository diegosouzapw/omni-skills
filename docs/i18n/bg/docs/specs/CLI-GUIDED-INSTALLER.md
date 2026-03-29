# 🧩 CLI Guided Installer Specification (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Поведенчески договор за инсталационния опит в Omni Skills CLI.**---

## 1. Scope

Тази спецификация дефинира поведението на управлявано инсталиране, което се намира върху съществуващия бекенд на инсталатора.

Не замества:

- `tools/bin/install.js`
- текущият експертен флаг тече
- манифести за селективно инсталиране

Той определя:

- как се влиза в ръководен режим
- как се избират дестинациите
- как се избира обхватът на инсталиране
- каква информация за предварителен преглед трябва да се показва
- как работят потвърждаването и изпълнението---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI трябва да влезе в режим на насочено инсталиране, когато:

- потребителят изпълнява `omni-skills` без аргументи в TTY
- потребителят изпълнява `omni-skills install` без селектори в TTY### 2.2 Forced Guided Entry

CLI трябва също да поддържа изричен ръководен режим чрез специална опция, като например:

- `omni-skills install --guided`

Този режим трябва да работи дори когато въвеждането е предадено и не е свързано към TTY, стига да е наличен стандартен вход.### 2.3 Non-Interactive Safety Rule

Когато се извиква без TTY и без изрично заявен режим с насочване:

- запазване на текущото поведение по подразбиране
- не блокирайте изчакване за подкани---

## 3. Destination Model

Насочваното инсталиране трябва да поддържа два класа местоназначение:### 3.1 Known Client Target

Всяка известна цел се решава на:

- четлив етикет
- вътрешен идентификатор на инструмента
- флаг за инсталиране
- разрешен път

Необходими известни цели:

- Клод Код
- Курсор
- Gemini CLI
- Codex CLI
- Киро
- Антигравитация
- OpenCode### 3.2 Custom Path Target

Персонализираният режим на път трябва:

- подкана за път
- разрешаване на `~`
- нормализиране до абсолютен път
- показва разрешения път в предварителен преглед---

## 4. Install Scope Model

Насочваното инсталиране трябва да поддържа:### 4.1 Full Library

Еквивалент на текущата инсталация без `--skill` или `--bundle`.### 4.2 Single Skill

Позволява на потребителя да избере едно публикувано умение.### 4.3 Single Bundle

Позволява на потребителя да избере един подбран пакет и разрешава публикувани членове.### 4.4 Search Then Install

Позволява на потребителя:

- въведете заявка за търсене
- проверка на резултатите
- изберете умение или пакет
- продължете към предварителен преглед на инсталирането---

## 5. Preview Contract

Преди изпълнение инсталацията с указания трябва да показва:

- етикет на местоназначението
- дестинационен път
- обхват на инсталиране
- избрано умение или пакет, ако е приложимо
- еквивалентна CLI команда

По избор, но препоръчително:

- резюме на избраните метаданни за умения
- обобщена информация за наличността на пакета---

## 6. Execution Contract

След потвърждение:

- делегати за насочено инсталиране към съществуващия бекенд на инсталатора
- не изпълнява повторно записите на файлове

Визуализацията на командата и действителните делегирани аргументи на инсталатора трябва да съвпадат точно.---

## 7. Result Contract

След успешно изпълнение резултатът от насочваната инсталация трябва да показва:

- индикатор за успех
- път на крайна дестинация
- команда, която е изпълнена
- следващо препоръчително действие

Примерни следващи действия:

- използвайте умението в избрания клиент
- стартирайте `лекар`
- стартирайте `mcp stream --local`---

## 8. Compatibility Contract

Следното остава валидно и непроменено:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bundle full-stack`
- `omni-skills --path ./skills`
- `omni-skills find figma --tool cursor --install --yes`

Насочваният режим добавя поведение. Не премахва съществуващото поведение.