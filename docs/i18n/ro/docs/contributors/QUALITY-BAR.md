# ✅ Quality Bar (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Cerințe minime și recomandări pentru ca o abilitate să fie acceptată în depozitul Omni Skills.**

Pentru îndrumări de autor care vizează în mod special scorurile de top, consultați [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

Benchmark actual pentru catalogul publicat:

- 32 de aptitudini publicate
- scor mediu de calitate `96.3`
- scor mediu la cele mai bune practici `98,7`
- scor mediu de securitate `95.0`---

## 🔒 Required (Must Pass)

| # | Cerință | Cum se verifică |
|:--|:-------------|:---------------|
| 1️⃣ |**Materia prima validă**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Descriere clară**| One-liner trebuie să explice ce face abilitate (10+ caractere) |
| 3️⃣ |**Numele se potrivește cu directorul**| Câmpul `name:` ​​se potrivește exact cu numele folderului |
| 4️⃣ |**Secțiunea de prezentare generală**| Scurtă explicație a scopului în corpul de reducere |
| 5️⃣ |**Când să utilizați secțiunea**| Cel puțin 2 scenarii de utilizare specifice |
| 6️⃣ |**Instrucțiuni acționabile**| Conținut pas cu pas pe care un agent AI îl poate executa |
| 7️⃣ |**Metadate generate**| Validatorul emite `skills/<skill>/metadata.json` cu succes |---

## ⭐ Recommended (Improves Score)

| # | Recomandare | Scor Impact |
|:--|:----------------|:--------------|
| 8️⃣ |**Exemple**— cel puțin un exemplu concret cu rezultatul așteptat | 📈 Calitate +10-15 |
| 9️⃣ |**Cele mai bune practici**— ✅ Faceți / ❌ Nu îndrumați | 📈 Cele mai bune practici +5 |
| 🔟 |**Testat cu un instrument**— verificat cu cel puțin un asistent de codare AI | 📈 Calitate +5 |
| 1️⃣1️⃣ |**Etichete**— etichete relevante care pot fi căutate pentru descoperire | 📈 Cele mai bune practici +10 |
| 1️⃣2️⃣ |**Categorie**— atribuită unei categorii canonice | 📈 Cele mai bune practici +10 |
| 1️⃣3️⃣ |**Depanare**— îndrumări concrete privind „Simptome” și „Soluție” | 📈 Cele mai bune practici +5-10 |
| 1️⃣4️⃣ |**Active de asistență locală**— `referințe/`, `scripturi/` și, în mod ideal, `exemple/` legate de abilitate | 📈 Cele mai bune practici +10 |
| 1️⃣5️⃣ |**Clasificare sănătoasă**— maturitate L3, calitate 85+, cele mai bune practici 90+ ​​| 📈 Nivelul general |
| 1️⃣6️⃣ |**Fără constatări critice de securitate**— scannerul static trece curat | 🛡️ Securitate 100 |---

## ❌ Reasons for Rejection

| Problemă | De ce |
|:------|:----|
| ❌ Lipsă sau subiect invalid | Întrerupe conducta de validare |
| ❌ Numele nu se potrivește cu directorul | Se întrerupe generarea catalogului |
| ❌ Descriere goală sau trivial scurtă | Utilizatorii nu pot descoperi abilitatea |
| ❌ Fără conținut posibil (doar link-uri sau stub-uri) | Agenții nu pot executa nimic |
| ❌ Duplicați fără îmbunătățiri clare | Adăugați valoare, nu clonați |
| ❌ Conținut ofensator fără etichetă `risc: ofensive` | Siguranță și conformitate |
| ❌ Constatări critice de securitate | Exfiltrare promptă, comenzi distructive etc. |---

## 🧪 Verify Locally

```bash
# Run validation
npm run validate

# Check your scores
cat skills/<your-skill>/metadata.json | jq '.quality, .best_practices, .security'

# Full build + smoke check
npm run build
npm run smoke
```

---

## 📊 Score Reference

| Dimensiune | Excelent | Bun | Are nevoie de muncă |
|:----------|:----------|:-----|:------------|
| ⭐**Calitate**| 80+ (platină) | 60-79 (aur/argint) | <60 (bronz/starter) |
| 📋**Cele mai bune practici**| 90+ (excelent) | 70-89 (bine) | <70 (echitabil/trebuie-muncă) |
| 🛡️**Securitate**| 95+ (călit) | 80-94 (securizat) | <80 (e nevoie de revizuire) |
| 🎯**Maturitate**| L3 (scripte+teste) | L2 (instrucțiuni) | L1 (numai metadate) |---

## 🧭 What High Scores Require

Pentru a ajunge consecvent în clasa de vârf, o abilitate ar trebui să includă:

- o descriere puternică care explică atât**ce**face abilitate, cât și**când**ar trebui utilizată
- secțiuni explicite pentru `Când se utilizează`, `Flux de lucru`, `Exemple`, `Cele mai bune practici`, `Depanare` și `Resurse suplimentare`
- material suport local sub `referințe/`, `scripturi/` și, în mod ideal, `exemple/`, legat direct de la `SKILL.md`
- metadatele agentului sub `agents/openai.yaml` când skill-ul este menit să fie invocat direct în clienții agent
- un mic tabel operațional sau o hartă de execuție echivalentă atunci când fluxul de lucru beneficiază de el
- cel puțin un exemplu rulabil care indică un script de ajutor local sau o comandă repetabilă
- depanare scrisă ca „Simptome” plus „Soluție”, nu avertismente generice
- suficientă profunzime pentru a fi calificată drept `L3`, nu doar proză bine formatată
- profunzime mai puternică a fluxului de lucru, active de decizie și diversitate a pachetului de asistență dacă doriți o calitate de bandă de top
- un pachet de suport care este suficient de adânc pentru a fi reutilizabil, nu doar prezent pentru acoperirea casetei de selectare
- cel puțin 4 familii de sprijin semnificative sau adâncimea echivalentă în fișiere reutilizabile dacă doriți ca banda de sus în mod constant