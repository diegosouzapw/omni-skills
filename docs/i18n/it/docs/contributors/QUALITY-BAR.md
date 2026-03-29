# ✅ Quality Bar (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Requisiti minimi e raccomandazioni affinché una competenza venga accettata nell'archivio Omni Skills.**

Per indicazioni sulla creazione mirate specificamente ai punteggi più alti, vedere [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

Punto di riferimento attuale per il catalogo pubblicato:

- 32 competenze pubblicate
- punteggio di qualità medio "96,3".
- punteggio medio delle migliori pratiche "98,7".
- punteggio di sicurezza medio "95,0".---

## 🔒 Required (Must Pass)

| # | Requisito | Come verificare |
|:--|:----|:------|
| 1️⃣ |**Prima pagina valida**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Descrizione chiara**| La frase di una riga deve spiegare cosa fa l'abilità (10+ caratteri) |
| 3️⃣ |**Il nome corrisponde alla directory**| Il campo `name:` ​​corrisponde esattamente al nome della cartella |
| 4️⃣ |**Sezione panoramica**| Breve spiegazione dello scopo nel corpo del ribasso |
| 5️⃣ |**Sezione Quando utilizzare**| Almeno 2 scenari di utilizzo specifici |
| 6️⃣ |**Istruzioni attuabili**| Contenuti passo passo che un agente AI può eseguire |
| 7️⃣ |**Metadati generati**| Il validatore emette `skills/<skill>/metadata.json` con successo |---

## ⭐ Recommended (Improves Score)

| # | Raccomandazione | Impatto del punteggio |
|:--|:-------|:-----|
| 8️⃣ |**Esempi**— almeno un esempio concreto con risultati attesi | 📈 Qualità +10-15 |
| 9️⃣ |**Best practices**— ✅ Guida per fare/❌ non fare | 📈 Migliori pratiche +5 |
| 🔟 |**Testato con uno strumento**: verificato con almeno un assistente di codifica AI | 📈 Qualità +5 |
| 1️⃣1️⃣ |**Tag**: tag ricercabili rilevanti per la scoperta | 📈 Migliori pratiche +10 |
| 1️⃣2️⃣ |**Categoria**— assegnato a una categoria canonica | 📈 Migliori pratiche +10 |
| 1️⃣3️⃣ |**Risoluzione dei problemi**: indicazioni concrete su "Sintomi" e "Soluzioni" | 📈 Migliori pratiche +5-10 |
| 1️⃣4️⃣ |**Risorse di supporto locale**— "riferimenti/", "script/" e, idealmente, "esempi/" collegati dalla competenza | 📈 Migliori pratiche +10 |
| 1️⃣5️⃣ |**Classificazione sana**— maturità L3, qualità 85+, migliori pratiche 90+ | 📈 Livello complessivo |
| 1️⃣6️⃣ |**Nessun risultato critico sulla sicurezza**: lo scanner statico risulta pulito | 🛡️ Sicurezza 100|---

## ❌ Reasons for Rejection

| Problema | Perché |
|:------|:----|
| ❌ Frontmatter mancante o non valido | Interrompe la pipeline di convalida |
| ❌ Il nome non corrisponde alla directory | Interrompe la generazione del catalogo |
| ❌ Descrizione vuota o banalmente breve | Gli utenti non possono scoprire la competenza |
| ❌ Nessun contenuto utilizzabile (solo link o stub) | Gli agenti non possono eseguire nulla |
| ❌ Duplicato senza netto miglioramento | Aggiungi valore, non clonare |
| ❌ Contenuti offensivi senza tag "rischio: offensivo" | Sicurezza e conformità |
| ❌ Risultati critici per la sicurezza | Pronta estrazione, comandi distruttivi, ecc. |---

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

| Dimensione | Eccellente | Buono | Ha bisogno di lavoro |
|:----------|:----------|:-----|:-----------|
| ⭐**Qualità**| 80+ (platino) | 60-79 (oro/argento) | <60 (bronzo/partente) |
| 📋**Best Practices**| 90+ (eccellente) | 70-89 (buono) | <70 (discreto/necessità di lavoro) |
| 🛡️**Sicurezza**| 95+ (indurito) | 80-94 (sicuro) | <80 (recensione necessaria) |
| 🎯**Maturità**| L3 (script+test) | L2 (istruzioni) | L1 (solo metadati) |---

## 🧭 What High Scores Require

Per raggiungere costantemente la fascia più alta, un'abilità dovrebbe includere:

- una descrizione efficace dell'argomento principale che spieghi sia**cosa**fa l'abilità sia**quando**dovrebbe essere utilizzata
- sezioni esplicite per "Quando utilizzare", "Flusso di lavoro", "Esempi", "Best practice", "Risoluzione dei problemi" e "Risorse aggiuntive"
- materiale di supporto locale in "riferimenti/", "script/" e idealmente "esempi/", collegato direttamente da "SKILL.md"
- metadati dell'agente in `agents/openai.yaml` quando la competenza deve essere richiamata direttamente nei client dell'agente
- una piccola tabella operativa o una mappa di esecuzione equivalente quando il flusso di lavoro ne trae vantaggio
- almeno un esempio eseguibile che punta a uno script di supporto locale o a un comando ripetibile
- risoluzione dei problemi scritta come "Sintomi" più "Soluzione", non avvisi generici
- profondità sufficiente per qualificarsi come "L3", non solo prosa ben formattata
- Maggiore profondità del flusso di lavoro, risorse decisionali e diversità del pacchetto di supporto se desideri una qualità di alto livello
- un pacchetto di supporto sufficientemente profondo da sembrare riutilizzabile, non solo presente per la copertura delle caselle di controllo
- almeno 4 famiglie di supporto significative o la profondità equivalente in file riutilizzabili se si desidera la fascia superiore in modo coerente