# 🧭 CLI UX Roadmap (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**Foaia de parcurs pentru produse pentru evoluția abilităților Omni de la un program de instalare de vârf într-o experiență de terminal ghidată atât pentru utilizatorii experți, cât și pentru cei neexperți.**
> Domeniu de aplicare: pachet npm, experiență de instalare CLI, interfață de utilizare a terminalului, fluxuri de lansare a serviciilor și integrare vizuală.---

## 1. Problem Statement

Fundația actuală a timpului de rulare este puternică, dar experiența de intrare este încă optimizată pentru utilizatorii care înțeleg deja:

- ce client doresc să-l vizeze
- ce selector de instalare doresc să folosească
- cum să traduceți obiectivele în `--skill`, `--bundle` sau `find`
- atunci când au nevoie de instalare numai CLI față de servicii MCP, API sau A2A

Astăzi:

- `npx omni-skills` este implicit Antigravity
- acest lucru este valid din punct de vedere tehnic și compatibil cu versiunea inversă
- dar nu este ideal pentru utilizatorii debutanți sau operatorii mai puțin tehnici

CLI are deja un mod interactiv de bază, dar este încă mai aproape de un utilitar pentru dezvoltatori decât de o suprafață de produs ghidată.

Această foaie de parcurs definește calea către un UX public mai puternic, fără a întrerupe interfața actuală bazată pe flag.---

## 1.1 Delivery Status

Foaia de parcurs este acum implementată în mare măsură în starea actuală a depozitului.

Finalizat:

- Faza 1: Selectarea punctului de intrare ghidat
- Faza 2: Expert de instalare ghidată
- Faza 3: Visual Terminal Shell
- Faza 4: Centru de servicii vizuale
- Faza 5: Profiluri salvate și repetabilitate
- Faza 6: Întărire, teste și documentare---

## 2. Goals

- Păstrați fluxurile de lucru actuale ale expertului CLI
- Faceți punctul de intrare fără argumente sigur și ușor de înțeles pentru utilizatorii începători
- Înlocuiți setările implicite silențioase în contexte interactive cu selecția ghidată
- Sprijină clienți AI cunoscuți și căi de instalare personalizate arbitrare
- Transformă instalarea, descoperirea și pornirea de service într-o călătorie coerentă a utilizatorului
- Furnizați o interfață vizuală a terminalului care se simte ca un produs, nu doar un script
- Păstrați motorul de instalare, catalogul și timpul de execuție a serviciului reutilizabile în interfața de utilizare---

## 3. Non-Goals

- Înlocuirea actualului CLI bazat pe flag
- Eliminarea antigravitației ca țintă implicită acceptată
- Livrarea unei interfețe de utilizare web ca mod de livrare principal
- Refactorizarea protocoalelor API, MCP sau A2A ca parte a acestei lucrări UX
- Înlocuirea creației `SKILL.md` cu un panou de administrare susținut de baze de date---

## 4. Design Principles

### 4.1 Backward Compatibility First

Aceste comenzi trebuie să continue să funcționeze exact așa cum funcționează astăzi:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills find figma --tool cursor --install --yes`
- `npx omni-skills mcp stream --local`
- `npx omni-skills api --port 3333`
- `npx omni-skills a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Sesiune terminală interactivă fără argumente: experiență ghidată deschisă
- Invocare non-interactivă fără argumente: păstrează comportamentul implicit de instalare curent
- Comenzile și steaguri explicite câștigă întotdeauna inferența UI### 4.3 Reuse One Engine Across Modes

Următoarele ar trebui să aibă aceeași logică internă:

- flag-first CLI
- CLI în modul text ghidat
- UI terminal vizual

Aceasta înseamnă că stratul UX nu trebuie să dețină logica de afaceri. Ar trebui să orchestreze acțiuni reutilizabile.### 4.4 Preview Before Write

Toate fluxurile ghidate care provoacă scrieri ar trebui să afișeze:

- ținta rezolvată
- calea rezolvată
- competențe sau pachete selectate
- comandă CLI echivalentă
- prompt de confirmare### 4.5 Visual Does Not Mean Implicit

Chiar și în interfața de utilizare mai bogată, sistemul ar trebui să explice în continuare starea și acțiunile:

- unde merge instalarea
- ce se va scrie
- ce transport sau port va folosi un serviciu
- dacă un flux este doar pentru citire sau capabil de scriere locală---

## 5. User Personas

### 5.1 Expert CLI User

Nevoi:

- comenzi rapide
- fără solicitări forțate
- steaguri stabile
- scriptabilitate### 5.2 Guided Product User

Nevoi:

- alegeri clare
- nicio presupunere că Antigravitația este dorită
- suport pentru instalări de căi personalizate
- previzualizare de instalare ușor de înțeles
- distincție vizibilă între acțiunile de instalare și de rulare a serverului### 5.3 Operator / Platform User

Nevoi:

- capacitatea de a lansa vizual MCP, API și A2A
- implicite sănătoase
- reglaj opțional de porturi, transport, persistență, mod executor, autentificare și mod local---

## 6. Target UX Model

Produsul ar trebui să expună trei straturi:### 6.1 Expert Mode

Comenzi directe și steaguri.

Exemple:

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills mcp stream --local`
- `npx omni-skills a2a --port 3335`### 6.2 Guided Install Mode

Declanșat când:

- utilizatorul rulează `npx omni-skills` într-un TTY fără argumente
- utilizatorul rulează `npx omni-skills install` fără selectoare concrete
- utilizatorul optează în mod explicit pentru modul ghidat

Fluxul de instalare ghidat ar trebui să treacă prin:

1. client țintă sau cale personalizată
2. tip de instalare
3. selecția abilităților sau a pachetului
4. previzualizare
5. confirmare
6. executare
7. pașii următori### 6.3 Visual Operations Hub

Declanșat de:

- `npx omni-skills ui`

Acesta ar trebui să devină „ecranul de start” pentru utilizatorii și operatorii neexperți.

Acțiuni de bază:

- abilități de instalare
- descoperi abilități
- porniți MCP
- porniți API-ul
- porniți A2A
- alerg doctor
- efectuați controale de fum---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Rezultat:

- `npx omni-skills` în TTY nu mai presupune în tăcere Antigravitația
- utilizatorilor li se solicită să aleagă un client sau o cale personalizată

Cerințe:

- păstrați comportamentul de instalare implicit non-TTY
- adăugați selector de țintă
- suportă capturarea căii personalizate### Phase 2: Guided Install Wizard

Rezultat:

- instalarea devine un flux complet ghidat

Cerințe:

- selectarea modului de instalare:
  - bibliotecă completă
  - o abilitate
  - un pachet
  - caută apoi instalează
- previzualizarea instalării
- redare echivalentă a comenzii
- confirmare si executare### Phase 3: Visual Terminal Shell

Rezultat:

- interfața actuală de utilizare a textului de bază devine o aplicație de terminal de marcă

Cerințe:

- aspect mai bogat
- branding și logo al proiectului
- stepper și carduri mai bune
- navigare cu tastatură
- Reacționați implementarea terminalului prin Ink### Phase 4: Visual Service Hub

Rezultat:

- MCP, API și A2A pot fi pornite din interfața de utilizare vizuală

Cerințe:

- flux MCP ghidat
- flux API ghidat
- flux A2A ghidat
- modul vizibil și previzualizări de configurare### Phase 5: Saved Profiles and Repeatability

Rezultat:

- setările comune de instalare sau service pot fi reutilizate

Cerințe:

- amintiți-vă obiectivele recente
- presetări de servicii salvate
- comenzi recente
- pachete sau abilități preferate### Phase 6: Hardening, Tests, and Documentation

Rezultat:

- UX-ul devine o interfață publică întreținută, nu o comoditate ad-hoc

Cerințe:

- acoperire de fum
- teste de regresie
- actualizări de documente
- îndrumarea operatorului
- revizuirea compatibilității pachetului---

## 8. Proposed Command Model

### Stable Commands

- `omni-abilități`
- `instalare omni-skills`
- `Omni-skills find`
- `omni-skills ui`
- `omni-skills mcp`
- `omni-skills api`
- `omni-skills a2a`
- `medic omni-skills`
- `fumul omni-skills`### Recommended Behavior

| Invocare | Comportament |
|:-----------|:---------|
| „omni-skills” în TTY, fără argumente | Intrare de instalare ghidată |
| `Omni-skills` în non-TTY, fără argumente | Instalare implicită curentă Antigravity |
| `Omni-skills install` în TTY, fără selectoare | Asistent de instalare ghidată |
| `Omni-skills install --guided` | Flux de instalare ghidat forțat |
| `omni-skills ui` | Deschideți hub-ul de operațiuni vizuale |
| steaguri explicite | Execută direct fără o ocolire în fluxul ghidat |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Opțiuni:

- Claude Code
- Cursor
- Gemeni CLI
- Codex CLI
- Kiro
- Antigravitație
- OpenCode
- Cale personalizată

Ieșire:

- ținta cunoscută selectată SAU calea personalizată a sistemului de fișiere### Step 2: Choose Install Type

Opțiuni:

- bibliotecă completă
- o abilitate publicată
- un pachet
- caută apoi instalează

Ieșire:

- instalați domeniul de aplicare### Step 3: Resolve Selection

În funcție de tipul de instalare:

- bibliotecă completă: fără selector suplimentar
- abilitate: enumerați sau alegeți o abilitate
- pachet: enumerați sau alegeți un pachet
- căutare: solicitare de interogare, afișare abilități de potrivire și pachete### Step 4: Preview

Afișare:

- ținta selectată
- calea rezolvată
- abilitate sau pachet selectat
- comandă CLI echivalentă
- dacă debitul este selectiv sau complet instalat### Step 5: Confirm

Utilizatorul confirmă:

- da → executa
- nu → anulați sau reveniți### Step 6: Result

Afișare:

- succes/eşec
- calea de destinatie
- sugestie pentru pasul următor---

## 10. Information Architecture for the Visual Operations Hub

Centrul de operațiuni ar trebui să expună:### 10.1 Install

- flux de instalare ghidat
- căutare de abilități sau pachete
- cale personalizată### 10.2 Discover

- căutare în catalog
- filtre
- previzualizați metadatele
- instalați transferul### 10.3 MCP

Opțiuni:

- transport: stdio, stream, sse
- pornit/oprit modul local
- gazdă
- port### 10.4 API

Opțiuni:

- gazdă
- port
- autentificare opțională
- limită de tarif opțională### 10.5 A2A

Opțiuni:

- gazdă
- port
- tipul de stocare: memorie, json, sqlite
- executor: inline, proces
- opțiuni de închiriere când coada sqlite este activată### 10.6 Diagnostics

- doctor
- fum---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Actualul `tools/bin/cli.js` amestecă:

- analizarea comenzilor
- prezentare
- solicitări interactive
- orchestrație de acțiune
- boot de service

Noua structură ar trebui să mute logica reutilizabilă în:

- `tools/lib/cli-actions/`
- `tools/lib/install-flow/`
- `tools/lib/service-flow/`
- `tools/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` ar trebui să rămână backend-ul capabil de scriere.

Interfața de utilizare ghidată ar trebui să apeleze backend-ul de instalare existent, mai degrabă decât să dubleze logica de instalare.### 11.3 Keep Find/Search Reusable

Expertul de instalare ghidată ar trebui să refolosească aceeași logică de căutare de bază de catalog și CLI care deja pornește:

- `găsește`
- instalați previzualizări
- rezoluție pachet### 11.4 Prepare for Ink Without Forcing It Early

Prima livrare poate rămâne în instrucțiuni în modul text.

Dar arhitectura ar trebui să păstreze o cusătură clară, astfel încât fluxul de text să poată fi redat ulterior prin Ink.---

## 12. Risks

### 12.1 Breaking Existing Automation

Atenuare:

- deschideți automat numai interfața de utilizare ghidată în TTY
- păstrați implicit curent în non-TTY
- păstrează fluxurile de semnalizare explicite### 12.2 Letting UI Own Business Logic

Atenuare:

- mutați orchestrația în module de acțiune reutilizabile
- păstrați logica de pornire a instalatorului și a serviciului sub nivelul UI### 12.3 Ink Migration Too Early

Atenuare:

- trimiteți mai întâi fluxul ghidat în stiva actuală de terminale Node
- apoi migrați la Ink odată ce semantica fluxului este stabilă### 12.4 Incomplete Service UX

Atenuare:

- expediați mai întâi vrăjitorul de instalare
- apoi lansarea serviciului ghidat de straturi---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` în TTY nu se mai instalează imediat
- utilizatorul poate alege clientul țintă sau calea personalizată
- invocarea fără arg non-TTY încă funcționează ca înainte### Phase 2

- Instalarea ghidată acceptă bibliotecă completă, abilități, pachet și căutare-apoi-instalare
- previzualizarea este întotdeauna afișată înainte de scriere
- este afișat echivalentul comenzii### Phase 3

- există o interfață de utilizare a terminalului de marcă
- interfața de utilizare este mai structurată vizual decât meniurile simple readline
- navigarea este prietenoasă cu tastatura### Phase 4

- utilizatorii pot porni MCP, API și A2A din hub-ul vizual
- opțiunile majore de rulare sunt configurabile sub formă ghidată### Phase 5

- preferințele recente sau salvate sunt reutilizabile
- fluxurile repetate necesită mai puține solicitări### Phase 6

- acoperirea de fum reflectă noile puncte de intrare UX
- documentele descriu modul ghidat și comportamentul asistentului de service---

## 14. Execution Order

Această foaie de parcurs trebuie implementată în această ordine:

1. Selectare ghidată a punctului de intrare
2. Expert de instalare ghidată
3. Shell terminal vizual
4. Centru de servicii vizuale
5. Profiluri salvate și repetabilitate
6. Întărirea, testele și lustruirea documentelor

Lucrarea de implementare ar trebui să citească fișierul de sarcini relevant înainte de a începe fiecare sarcină, astfel încât activitatea CLI să rămână aliniată cu planul și să nu se derive.