# 🧩 CLI Guided Installer Specification (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Behaviorálna zmluva o skúsenostiach s riadenou inštaláciou v Omni Skills CLI.**---

## 1. Scope

Táto špecifikácia definuje správanie pri inštalácii so sprievodcom, ktoré je umiestnené nad existujúcim backendom inštalačného programu.

Nenahrádza:

- `tools/bin/install.js`
- prúdy aktuálnej expertnej vlajky
- manifesty selektívnej inštalácie

Definuje:

- ako sa vstúpi do režimu so sprievodcom
- ako sa vyberajú destinácie
- ako sa volí rozsah inštalácie
- aké informácie o náhľade sa musia zobraziť
- ako funguje potvrdenie a vykonanie---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI by malo prejsť do režimu riadenej inštalácie, keď:

- používateľ používa `omni-skills` bez argumentov v TTY
- používateľ spustí `omni-skills install` bez selektorov v TTY### 2.2 Forced Guided Entry

CLI by tiež malo podporovať explicitný režim so sprievodcom prostredníctvom vyhradenej možnosti, ako napríklad:

- `inštalácia omni-skills --guided`

Tento režim by mal fungovať aj vtedy, keď je vstup prepojený a nie je pripojený k TTY, pokiaľ je k dispozícii štandardný vstup.### 2.3 Non-Interactive Safety Rule

Pri vyvolaní bez TTY a bez výslovne požadovaného režimu so sprievodcom:

- zachovať aktuálne predvolené správanie
- neblokujte čakanie na výzvy---

## 3. Destination Model

Riadená inštalácia musí podporovať dve cieľové triedy:### 3.1 Known Client Target

Každý známy cieľ rieši:

- ľudsky čitateľný štítok
- interné ID nástroja
- nainštalovať príznak
- vyriešená cesta

Požadované známe ciele:

- Claude Code
- Kurzor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitácia
- OpenCode### 3.2 Custom Path Target

Režim vlastnej cesty musí:

- výzva na zadanie cesty
- vyriešiť „~“.
- normalizovať na absolútnu cestu
- zobraziť vyriešenú cestu v náhľade---

## 4. Install Scope Model

Riadená inštalácia musí podporovať:### 4.1 Full Library

Ekvivalent k aktuálnej inštalácii bez „--skill“ alebo „--bundle“.### 4.2 Single Skill

Umožňuje používateľovi vybrať jednu zverejnenú zručnosť.### 4.3 Single Bundle

Umožňuje používateľovi vybrať jeden spravovaný balík a vyriešiť zverejnené členy.### 4.4 Search Then Install

Umožňuje používateľovi:

- zadajte vyhľadávací dopyt
- kontrolovať výsledky
- vyberte si zručnosť alebo balík
- pokračovať do ukážky inštalácie---

## 5. Preview Contract

Pred spustením musí riadená inštalácia zobraziť:

- cieľový štítok
- cieľová cesta
- inštalovať rozsah
- zvolená zručnosť alebo balík, ak je to vhodné
- ekvivalentný príkaz CLI

Voliteľné, ale odporúčané:

- zhrnutie metadát vybraných zručností
- súhrn dostupnosti balíka---

## 6. Execution Contract

Po potvrdení:

- riadení delegáti inštalácie na existujúci backend inštalačného programu
- neimplementuje sa samotné zapísanie súboru

Ukážka príkazu a skutočné argumenty delegovaného inštalátora sa musia presne zhodovať.---

## 7. Result Contract

Po úspešnom spustení by mal výsledok inštalácie so sprievodcom zobrazovať:

- ukazovateľ úspechu
- konečná cieľová cesta
- príkaz, ktorý bol vykonaný
- ďalšia odporúčaná akcia

Príklad ďalších akcií:

- využiť zručnosť u vybraného klienta
- spustiť "doktor".
- spustite `mcp stream --local`---

## 8. Compatibility Contract

Nasledujúce ostávajú v platnosti a nezmenené:

- `všetko-zručnosti --kurzor --zručnosť omni-figma`
- „všetko-zručnosti – celý balík“.
- `všetko-zručnosti --cesta ./zručnosti`
- `omni-skills find figma --tool kurzor --install --yes`

Riadený režim pridáva správanie. Neodstraňuje existujúce správanie.