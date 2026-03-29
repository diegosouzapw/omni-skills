# 🛡️ Security Policy (Română)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Dacă descoperiți o problemă de securitate în Omni Skills, nu deschideți mai întâi o problemă publică.**

Vă rugăm să raportați prin unul dintre aceste canale private:

| Canal | Cum |
|:--------|:----|
| 🔒 Aviz de securitate GitHub | [Deschideți un aviz privat](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧 Contact direct | Contactați direct menținătorii |### 📋 Include in Your Report

- 📁 Componenta sau calea afectată
- 🔄 Etape de reproducere
- ⚠️ Evaluarea impactului
- 🧪 Orice material de dovadă a conceptului necesar pentru a verifica problema

>**⏱️ Ne propunem să confirmăm rapoartele în termen de 48 de ore**și să acordăm prioritate remediărilor în funcție de impact.---

## 🎯 Scope

Această politică acoperă timpul de rulare și suprafețele de conținut ale depozitului:

| Componenta | Calea |
|:----------|:-----|
| 🖥️ CLI și programul de instalare | `instrumente/bin/` |
| 📚 Biblioteci partajate | `tools/lib/` |
| ⚙️ Construire și validare scripturi | `instrumente/scripturi/` |
| 📦 Artefacte de catalog generate | `dist/` |
| 🌐 Pachete API, MCP și A2A | `pachete/` |
| 🧠 Conținut de abilități | `skills/` — în special comenzi shell, acces la rețea, fluxuri de acreditări sau îndrumări sensibile la securitate |---

## Arhitectură

Depozitul se bazează pe următoarele controale de securitate:### 🧠 Skill-Level Controls

| Control | Descriere |
|:--------|:------------|
| 🏷️ Câmp de risc | Metadatele aptitudinilor includ un „nivel de risc” declarat |
| 📊 Punctajul | Validarea calculează scorurile de maturitate, cele mai bune practici, calitate și securitate |
| 🔍 Scanner static | Inspectează `SKILL.md`, fișierele împachetate și scripturile de ajutor |
| 🦠 Scanere optionale | Căutare hash ClamAV și VirusTotal (când este configurat) |### 🖥️ Runtime Controls

| Control | Descriere |
|:--------|:------------|
| 📁 Siguranța căii | Fluxurile de instalare utilizează verificări de siguranță ale căilor |
| 🔒 Lista de permise scrie | Scrierile secundare MCP locale constrânse de o listă de permis |
| 👁️ Setări implicite de funcționare uscată | Instrumentele orientate spre scriere sunt prestabilite pentru rulare uscată, dacă nu sunt dezactivate în mod explicit |
| 🔐 Autentificare și limite | Autentificare purtător/cheie API, autorizare runtime admin, limitare a ratei, liste permise CORS/IP |
| 📋 Audit | Înregistrare de audit, modul de întreținere și ID-uri de solicitare |### 📦 Release Controls

| Control | Descriere |
|:--------|:------------|
| ✅ Manifeste sume de control | Sume de control SHA-256 pentru arhivele generate |
| ✍️ Semnături | Verificarea semnăturii detașate în CI înainte de publicare |
| 🧪 Verificări de fum | Suprafețele de rulare livrate de exercițiu înainte de lansare |---

## 🔮 What Is Still Open

> Principala activitate de securitate rămasă este**nu**consolidarea liniei de bază. Elementele deschise sunt:

| Zona | Stare |
|:-----|:-------|
| 🏢 Guvernanța întreprinderii | Identitatea externă, politica gateway-ului și integrarea WAF deasupra controalelor curente în proces |
| 🔌 Scriitori de client MCP | Scriitori mai largi numai atunci când contractele de configurare publică sunt suficient de stabile |
| 📊 Rafinament scaner | Rafinament continuu, astfel încât abilitățile excepționale să rămână clar separate de cele pur și simplu bine structurate |---

## ⚠️ Risk Levels in Skills

Fiecare abilitate declară unul dintre aceste niveluri de „risc”:

| Nivel de risc | Înțeles |
|:-----------|:--------|
| 🟢 `sigur` | Nu se preconizează operațiuni distructive |
| 🟡 `atenție` | Poate modifica fișierele sau poate interacționa cu sisteme externe |
| 🔴 `ofensivă` | Testare de securitate sau fluxuri de lucru contradictorii care necesită autorizare explicită |
| ⛔ `critic` | Operațiuni cu impact ridicat sau la nivel de sistem |---

## 📋 Disclosure Notes

Deoarece Omni Skills furnizează ajutoare executabile, instrumente locale care știe sistemul de fișiere și scriitoare de configurare specifice clientului, aceste clase de vulnerabilități ar trebui tratate ca**prioritate mare**chiar dacă apar „numai locale”:

| Categoria | Exemple |
|:---------|:---------|
| 📁 Parcurs traseu | Escape director prin căile de instalare sau de configurare a competențelor |
| 🔗 Siguranța legăturii simbolice | Urmează linkul simbolic în timpul instalării sau extragerii arhivei |
| 🖥️ Execuția comenzii | Injectare arbitrară de comandă prin conținut de abilități sau scripturi |
| 📦 Verificarea arhivei | Ocolirea sumei de control sau verificarea semnăturii |
| 🔓 Auth bypass | Limitarea ratei sau ocolirea autentificării pe API/MCP |
| 🔌 Ocolirea listei de permise | Eludarea listei de permise pentru sidecar local |
| 🦠 Evaziunea scanerului | Clase fals-negative în scanere statice sau externe |