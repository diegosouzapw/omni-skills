# ✅ Quality Bar (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Minimálne požiadavky a odporúčania pre zručnosť, ktorá sa má prijať do úložiska Omni Skills.**

Pokyny pre tvorbu zamerané špecificky na skóre najlepších kapiel nájdete v [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

Aktuálny benchmark pre publikovaný katalóg:

- 32 publikovaných zručností
- priemerné skóre kvality `96,3`
- priemerné skóre najlepších postupov `98,7`
- priemerné skóre bezpečnosti `95,0`---

## 🔒 Required (Must Pass)

| # | Požiadavka | Ako overiť |
|:--|:------------|:--------------|
| 1️⃣ |**Platný frontmatter**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Jasný popis**| Jeden riadok musí vysvetľovať, čo zručnosť robí (10+ znakov) |
| 3️⃣ |**Názov zodpovedá adresáru**| Pole `name:` ​​presne zodpovedá názvu priečinka |
| 4️⃣ |**Prehľadová časť**| Krátke vysvetlenie účelu v zrážkovom orgáne |
| 5️⃣ |**Sekcia Kedy použiť**| Aspoň 2 špecifické scenáre použitia |
| 6️⃣ |**Postupné pokyny**| Obsah krok za krokom, ktorý môže agent AI spustiť |
| 7️⃣ |**Vygenerované metadáta**| Validátor úspešne vygeneruje `skills/<skill>/metadata.json` |---

## ⭐ Recommended (Improves Score)

| # | Odporúčanie | Vplyv skóre |
|:--|:---------------|:-------------|
| 8️⃣ |**Príklady**— aspoň jeden konkrétny príklad s očakávaným výstupom | 📈 Kvalita +10-15 |
| 9️⃣ |**Osvedčené postupy**— ✅ Robiť / ❌ Neuvádzať | 📈 Najlepšie postupy +5 |
| 🔟 |**Testované pomocou nástroja**– overené aspoň jedným asistentom kódovania AI | 📈 Kvalita +5 |
| 1️⃣1️⃣ |**Značky**— relevantné vyhľadávateľné značky na objavenie | 📈 Najlepšie postupy +10 |
| 1️⃣2️⃣ |**Kategória**– priradená k jednej kanonickej kategórii | 📈 Najlepšie postupy +10 |
| 1️⃣3️⃣ |**Odstraňovanie problémov**– konkrétne pokyny k „príznakom“ a „riešeniu“ | 📈 Najlepšie postupy +5-10 |
| 1️⃣4️⃣ |**Miestne podporné prostriedky**— `odkazy/`, `skripty/` a ideálne `príklady/` prepojené zo zručnosti | 📈 Najlepšie postupy +10 |
| 1️⃣5️⃣ |**Zdravá klasifikácia**– zrelosť L3, kvalita 85+, osvedčené postupy 90+ | 📈 Celková úroveň |
| 1️⃣6️⃣ |**Žiadne kritické bezpečnostné zistenia**— statický skener prejde čistým | 🛡️ Bezpečnosť 100 |---

## ❌ Reasons for Rejection

| Vydanie | Prečo |
|:------|:----|
| ❌ Chýbajúci alebo neplatný frontmatter | Prerušenia overovacieho potrubia |
| ❌ Názov sa nezhoduje s adresárom | Prestávky na generovanie katalógu |
| ❌ Prázdny alebo triviálne krátky popis | Používatelia nemôžu objaviť zručnosť |
| ❌ Žiadny akčný obsah (iba odkazy alebo útržky) | Agenti nemôžu nič vykonať |
| ❌ Duplikát bez jasného zlepšenia | Pridajte hodnotu, neklonujte |
| ❌ Urážlivý obsah bez značky `riziko: urážlivý` | Bezpečnosť a súlad |
| ❌ Kritické bezpečnostné zistenia | Rýchla exfiltrácia, deštruktívne príkazy atď. |---

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

| Rozmer | Vynikajúce | Dobrý | Potrebuje prácu |
|:----------|:----------|:-----|:-----------|
| ⭐**Kvalita**| 80+ (platina) | 60-79 (zlato/striebro) | <60 (bronz/štartér) |
| 📋**Osvedčené postupy**| 90+ (výborne) | 70-89 (dobré) | <70 (spravodlivá práca/práca podľa potrieb) |
| 🛡️**Bezpečnosť**| 95+ (kalené) | 80-94 (zabezpečené) | <80 (potrebná kontrola) |
| 🎯**Dospelosť**| L3 (skriptá+testy) | L2 (návod) | L1 (iba metaúdaje) |---

## 🧭 What High Scores Require

Ak chcete neustále dosahovať najvyššie pásmo, zručnosť by mala zahŕňať:

- silný popis frontmattera, ktorý vysvetľuje**čo**daná zručnosť robí a**kedy**by sa mala použiť
- explicitné sekcie pre „Kedy použiť“, „Pracovný postup“, „Príklady“, „Osvedčené postupy“, „Riešenie problémov“ a „Ďalšie zdroje“
- miestny podporný materiál pod `references/`, `scripts/` a ideálne `examples/`, prepojený priamo z `SKILL.md`
- metadáta agenta pod `agents/openai.yaml`, keď sa má zručnosť vyvolať priamo v klientoch agentov
- malá operačná tabuľka alebo ekvivalentná mapa vykonávania, keď to pracovný tok využíva
- aspoň jeden spustiteľný príklad, ktorý ukazuje na lokálny pomocný skript alebo opakovateľný príkaz
- Riešenie problémov napísané ako "Príznaky" plus "Riešenie", nie všeobecné upozornenia
- dostatočná hĺbka na to, aby sa dal kvalifikovať ako „L3“, nie len dobre naformátovaná próza
- väčšia hĺbka pracovného toku, možnosti rozhodovania a rozmanitosť balíkov podpory, ak chcete špičkovú kvalitu
- podporný balík, ktorý je dostatočne hlboký na to, aby bol opakovane použiteľný, nielen na pokrytie začiarkavacích políčok
- aspoň 4 zmysluplné podporné rodiny alebo ekvivalentnú hĺbku v opakovane použiteľných súboroch, ak chcete, aby bol horný pás konzistentný