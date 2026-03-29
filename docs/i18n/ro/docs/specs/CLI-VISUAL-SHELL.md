# 🖥️ CLI Visual Shell Specification (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Contract comportamental pentru interfața de utilizare a terminalului bazată pe cerneală expusă de „omni-skills ui”.**---

## 1. Scope

Învelișul vizual este o suprafață de produs ghidată deasupra CLI-ului existent și a motorului de instalare.

Nu înlocuiește:

- Utilizare expert CLI bazată pe flag
- `tools/bin/install.js`
- fluxul de instalare a textului ghidat
- Comportamentul de rulare API, MCP sau A2A

Acesta definește:

- comportamentul `omni-skills ui`
- contractul de rezervă pentru `omni-skills ui --text`
- stare locală și persistență prestabilită
- previzualizări ghidate de lansare a serviciului
- repetabilitate pentru instalările recente și rulările de service---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` lansează shell-ul vizual bazat pe cerneală.

Visual shell-ul este experiența principală a terminalului non-expert pentru:

- instalarea fluxurilor
- catalog-prima descoperire și instalare
- Pornire MCP
- Pornire API
- Pornire A2A
- doctor și transfer de fum### 2.2 Text Fallback

`omni-skills ui --text` lansează interfața de rezervă bazată pe readline.

Acesta rămâne util atunci când:

- un terminal nu poate reda corect shell-ul mai bogat
- comportamentul în modul brut este constrâns
- este de preferat un text minim de rezervă### 2.3 Handoff Rule

Visual shell nu reimplementează timpii de execuție ai serviciului sau scrierile de instalare direct.

După previzualizare și confirmare, iese curat și predă execuția către punctul de intrare CLI existent cu argumentele și variabilele de mediu echivalente.---

## 3. Home Screen Contract

Ecranul de start trebuie să expună:

- abilități de instalare
- găsiți și instalați
- repetați instalările recente când sunt prezente
- rulați setările de instalare salvate atunci când sunt prezente
- începe un serviciu
- repetați serviciile recente când sunt prezente
- rulați presetările de serviciu salvate atunci când sunt prezente
- doctor
- fum
- iesire

Ecranul de start ar trebui, de asemenea, să apară:

- disponibilitatea actuală a pachetului publicat
- contează statul local pentru recente, presetări și favorite---

## 4. Install Flow Contract

Fluxul de instalare vizual shell trebuie să accepte:

- selecția țintei clientului cunoscut
- selecție personalizată a căii
- instalarea bibliotecii complete
- instalare cu o singură abilitate
- instalare cu un singur pachet
- căutare-apoi-instalare
- previzualizare înainte de scriere
- salvare presetată
- abilitate preferată sau comutare pachet

Previzualizarea trebuie să arate:

- eticheta țintă rezolvată
- calea rezolvată
- instalați domeniul de aplicare
- abilitate sau pachet selectat, atunci când este cazul
- comandă CLI echivalentă---

## 5. Service Flow Contract

Învelișul vizual trebuie să ghideze pornirea pentru:### 5.1 MCP

- transport: `stdio`, `stream`, `sse`
- modul: `numai citire` sau `local`
- configurare gazdă/port pentru transporturi în rețea
- previzualizare explicită a comenzii### 5.2 API

- gazdă
- port
- profil de bază sau călit
- purtător întărit sau autentificare cheie API
- parametrii de viteză-limită întăriți
- activarea jurnalului de audit
- previzualizare explicită a comenzii### 5.3 A2A

- gazdă
- port
- tip magazin: `memory`, `json`, `sqlite`
- calea de stocare pentru moduri durabile
- executor: `inline`, `process`
- modul SQLite activat pentru coadă
- interval de sondaj și durata de închiriere pentru modul de închiriere partajată
- previzualizare explicită a comenzii---

## 6. Local State Contract

Învelișul vizual persistă în starea doar locală în:```text
~/.omni-skills/state/ui-state.json
```

Statul include în prezent:

- instalări recente
- lansări recente de servicii
- presetări de instalare denumite
- presetări de servicii denumite
- aptitudini preferate
- pachete preferate

Carcasa trebuie să suporte:

- reluarea instalărilor recente
- reluarea lansărilor recente de servicii
- reutilizarea presetărilor de instalare numite
- reutilizarea setărilor prestabilite de servicii denumite---

## 7. Compatibility Contract

Învelișul vizual este aditiv.

Aceste fluxuri trebuie să rămână valabile și stabile:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills install --guided`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`

Shell-ul vizual nu trebuie niciodată să se forțeze în căi explicite de comandă expert.---

## 8. Safety Contract

Shell-ul vizual ar trebui să facă starea și scrierile explicite.

Acesta trebuie:

- previzualizați instalările înainte de transferul scrisului
- previzualizați comenzile de lansare a serviciului înainte de execuție
- păstrați materialul secret în afara previzualizărilor comenzilor în text clar, acolo unde este practic
- persistă starea numai la nivel local
- păstrați comportamentul CLI non-interactiv în afara shell-ului vizual