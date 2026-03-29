# 🧩 CLI Guided Installer Specification (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Поведінковий договір для досвіду керованого встановлення в Omni Skills CLI.**---

## 1. Scope

Ця специфікація визначає поведінку керованої інсталяції, яка знаходиться поверх існуючої версії інсталятора.

Він не замінює:

- `tools/bin/install.js`
- потоки поточного експертного прапора
- маніфести вибіркової інсталяції

Він визначає:

- як увійти в керований режим
- як вибираються напрямки
- як вибирається область встановлення
- яка інформація попереднього перегляду повинна відображатися
- як працює підтвердження та виконання---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

Інтерфейс командного рядка має перейти в режим керованого встановлення, коли:

- користувач запускає `omni-skills` без аргументів у TTY
- користувач запускає `omni-skills install` без селекторів у TTY### 2.2 Forced Guided Entry

Інтерфейс командного рядка також має підтримувати явний керований режим за допомогою спеціальної опції, наприклад:

- `omni-skills install --guided`

Цей режим має працювати, навіть якщо вхідний сигнал передається по каналу і не підключений до телетайпа, якщо доступний стандартний вхідний сигнал.### 2.3 Non-Interactive Safety Rule

Під час виклику без телетайпу та без явного запиту на керований режим:

- зберегти поточну поведінку за замовчуванням
- не блокувати очікування підказок---

## 3. Destination Model

Кероване встановлення має підтримувати два класи призначення:### 3.1 Known Client Target

Кожна відома ціль вирішує:

- зрозуміла етикетка
- внутрішній ідентифікатор інструменту
- встановити прапор
- розв'язаний шлях

Необхідні відомі цілі:

- Клод Код
- Курсор
- Gemini CLI
- Codex CLI
- Кіро
- Антигравітація
- OpenCode### 3.2 Custom Path Target

Режим спеціального шляху повинен:

- підказка шляху
- вирішити `~`
- нормалізувати до абсолютного шляху
- показати вирішений шлях у попередньому перегляді---

## 4. Install Scope Model

Кероване встановлення має підтримувати:### 4.1 Full Library

Еквівалент поточної інсталяції без `--skill` або `--bundle`.### 4.2 Single Skill

Дозволяє користувачеві вибрати один опублікований навик.### 4.3 Single Bundle

Дозволяє користувачеві вибрати один підібраний пакет і розпізнати опублікованих учасників.### 4.4 Search Then Install

Дозволяє користувачеві:

- ввести пошуковий запит
- перевірити результати
- вибрати навичку або набір
- перейти до попереднього перегляду встановлення---

## 5. Preview Contract

Перед виконанням керована інсталяція має відобразити:

- етикетка призначення
- шлях призначення
- обсяг установки
- вибраний навик або набір, якщо застосовно
- еквівалентна команда CLI

Необов’язково, але рекомендовано:

- резюме метаданих вибраних навичок
- підсумок доступності комплекту---

## 6. Execution Contract

Після підтвердження:

- делегати інсталяції з інструкціями до існуючого серверу інсталятора
- він не виконує повторне записування файлу

Попередній перегляд команди та фактичні делеговані аргументи інсталятора мають точно збігатися.---

## 7. Result Contract

Після успішного виконання в результаті керованого встановлення має відображатися:

- показник успішності
- кінцевий шлях призначення
- команда, яка була виконана
- наступна рекомендована дія

Приклад наступних дій:

- використовувати навик у обраному клієнті
- запустити `доктор`
- запустити `mcp stream --local`---

## 8. Compatibility Contract

Залишається чинним та незмінним:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bundle full-stack`
- `omni-skills --path ./skills`
- `omni-skills find figma --tool cursor --install --yes`

Керований режим додає поведінку. Це не усуває існуючу поведінку.