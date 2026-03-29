# 🧩 CLI Guided Installer Specification (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Contract comportamental pentru experiența de instalare ghidată în CLI Omni Skills.**---

## 1. Scope

Această specificație definește comportamentul de instalare ghidată care se află deasupra backend-ului de instalare existent.

Nu înlocuiește:

- `tools/bin/install.js`
- fluxurile curente de steag expert
- manifeste de instalare selective

Acesta definește:

- cum se intră în modul ghidat
- cum sunt alese destinațiile
- cum se alege domeniul de aplicare
- ce informații de previzualizare trebuie afișate
- cum funcționează confirmarea și execuția---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI ar trebui să intre în modul de instalare ghidată atunci când:

- utilizatorul rulează „omni-skills” fără argumente într-un TTY
- utilizatorul rulează „omni-skills install” fără selectoare într-un TTY### 2.2 Forced Guided Entry

CLI ar trebui să accepte, de asemenea, modul ghidat explicit printr-o opțiune dedicată, cum ar fi:

- `Omni-skills install --guided`

Acest mod ar trebui să funcționeze chiar și atunci când intrarea este canalizată și nu este atașată la un TTY, atâta timp cât intrarea standard este disponibilă.### 2.3 Non-Interactive Safety Rule

Când este invocat fără un TTY și fără modul ghidat solicitat în mod explicit:

- păstrează comportamentul implicit curent
- nu blocați așteptarea solicitărilor---

## 3. Destination Model

Instalarea ghidată trebuie să accepte două clase de destinație:### 3.1 Known Client Target

Fiecare țintă cunoscută se rezolvă la:

- etichetă care poate fi citită de om
- ID-ul instrumentului intern
- instalați steag
- calea rezolvată

Țintele cunoscute obligatorii:

- Claude Code
- Cursor
- Gemeni CLI
- Codex CLI
- Kiro
- Antigravitație
- OpenCode### 3.2 Custom Path Target

Modul cale personalizată trebuie să:

- solicitarea unei căi
- rezolvă `~`
- normalizarea la calea absolută
- arată calea rezolvată în previzualizare---

## 4. Install Scope Model

Instalarea ghidată trebuie să accepte:### 4.1 Full Library

Echivalent cu instalarea curentă fără `--skill` sau `--bundle`.### 4.2 Single Skill

Permite utilizatorului să selecteze o abilitate publicată.### 4.3 Single Bundle

Permite utilizatorului să selecteze un pachet organizat și să rezolve membrii publicati.### 4.4 Search Then Install

Permite utilizatorului:

- introduceți o interogare de căutare
- inspectați rezultatele
- alegeți o abilitate sau un pachet
- continuați în previzualizarea instalării---

## 5. Preview Contract

Înainte de execuție, instalarea ghidată trebuie să afișeze:

- eticheta destinatiei
- calea de destinatie
- instalați domeniul de aplicare
- abilitate selectată sau pachet, dacă este cazul
- comandă CLI echivalentă

Opțional, dar recomandat:

- rezumatul metadatelor abilităților selectate
- rezumatul disponibilității pachetului---

## 6. Execution Contract

Dupa confirmare:

- delegați de instalare ghidați către backend-ul de instalare existent
- nu reimplementează fișierul scrie singur

Previzualizarea comenzii și argumentele reale de instalare delegate trebuie să se potrivească exact.---

## 7. Result Contract

După execuția cu succes, rezultatul instalării ghidate ar trebui să arate:

- indicator de succes
- traseul de destinație finală
- comanda care a fost executată
- următoarea acțiune recomandată

Exemple de acțiuni următoare:

- utilizați skill-ul în clientul selectat
- alerga `doctor`
- rulați `mcp stream --local`---

## 8. Compatibility Contract

Următoarele rămân valabile și neschimbate:

- `omni-skills --cursor --skill omni-figma`
- `omni-skills --bundle full-stack`
- `omni-skills --path ./skills`
- `omni-skills find figma --tool cursor --install --yes`

Modul ghidat adaugă comportament. Nu elimină comportamentul existent.