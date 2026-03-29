# Skill PR Workflow (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Questo è il flusso del repository canonico per le richieste pull che aggiungono o aggiornano sostanzialmente una o più competenze native.

Usalo quando:

- aggiunta di una nuova abilità sotto "skills/".
- approfondire un bundle con nuove competenze di dominio
- spedizione di un'espansione del pacchetto di supporto più ampia
- convalidare un ramo con il potenziatore privato prima che i manutentori lo uniscano## Target Outcome

Una forte abilità PR nativa arriva con:

- una competenza nativa in `skills/`
- contenuto sufficiente affinché il validatore pubblico possa classificarlo e indicizzarlo
- superamento di validazioni e test pubblici
- elaborazione automatica del potenziatore durante il PR
- un PR successivo `skills_omni/` quando vengono pubblicati derivati migliorati
- apporto nativo conservato nella sua lingua originale quando necessario
- output migliorato curato e riscritto in inglese
- un flusso unidirezionale da nativo a curato che non reimmette `skills_omni/` nell'assunzione di potenziatori nativi## Enhancer Outcome States

Il potenziatore delle PR pubbliche ora riporta quattro stati visibili al manutentore:

- "completato".
  Il derivato migliorato è stato generato in modo pulito ed è idoneo per la pubblicazione complementare `skills_omni/`.
- "degradato".
  Il potenziatore è terminato, ma ha utilizzato un percorso di fallback o ha prodotto avvisi. È ancora prevista la revisione da parte del manutentore prima di considerare il derivato come sano.
- "bloccato".
  L'esecuzione è stata interrotta da problemi di infrastruttura o di convalida, ad esempio un errore di preflight di OmniRoute ospitato o un errore di convalida del candidato che dovrebbe impedire la pubblicazione.
- "fallito".
  Il potenziatore ha riscontrato un errore di runtime imprevisto e necessita di un'indagine da parte del manutentore.## Recommended Branch Shape

Crea un ramo focalizzato:```bash
git checkout -b feat/<short-skill-theme>
```

Esempi:

- "Valutazioni di osservabilità di imprese/incidenti".
- `feat/devops-skill-pack`
- "pacchetto abilità/abilità di sicurezza".## Native Intake Rules

La superficie di presa pubblica è volutamente permissiva.

Minimo:```text
skills/<skill>/
└── SKILL.md
```

Consigliato ma non più richiesto per l'assunzione:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Il contributo nativo può essere approssimativo, incompleto o esterno al normale standard del pacchetto di supporto. Questo è intenzionale. "competenze/" è la superficie di assunzione nativa, non la superficie derivata curata.

Politica linguistica:

- L'assunzione da parte di madrelingua sotto "competenze/" può essere scritta in qualsiasi lingua
- Il potenziatore mantiene l'istantanea nativa come inviata per provenienza
- il derivato curato sotto `skills_omni/` deve essere sempre scritto in inglese

La restrizione editoriale più rigorosa ora si applica a:

- i metadati generati e i controlli di sicurezza
- la revisione del potenziatore privato
- il derivato curato di follow-up in `skills_omni/`## Authoring Sequence

1. Crea `skills/<skill>/SKILL.md`.
2. Aggiungi frontmatter se puoi, ma il frontmatter mancante o incompleto non blocca più da solo l'assunzione nativa.
3. Aggiungi `agents/`, `references/`, `examples/` e `scripts/` quando li hai già.
4. Aggiorna `data/bundles.json` se la competenza approfondisce un bundle esistente.
5. Apri il PR. L'automazione del repository ora fa il resto.## Validation Sequence

I contributori possono eseguire questa sequenza esatta prima di aprire il PR:```bash
npm run validate
npm run build
npm test
git diff --check
```

Se la modifica influisce anche sul runtime o sul comportamento del pacchetto, esegui anche:```bash
npm run smoke
```

## What Happens Automatically During the PR

Quando un PR si apre o si sincronizza e tocca solo i file di acquisizione delle competenze native in "skills/" più "data/bundles.json" facoltativo, il repository pubblico ora attiva automaticamente il potenziatore privato.

Flusso automatizzato attuale:

1. Il flusso di lavoro pubblico "Convalida competenze" viene eseguito sul PR e controlla la convalida, la creazione, gli artefatti generati e i test.
2. Il flusso di lavoro pubblico "Enhance PR Skills" inizia in parallelo ed elabora le competenze native modificate una per una in modalità "live".
3. Il potenziatore legge la competenza nativa da "skills/", ricerca le migliori pratiche attuali e scrive un candidato potenziato recensito nell'area di lavoro privata.
4. Il potenziatore mantiene l'istantanea dell'assunzione upstream nella sua lingua originale quando necessario, ma riscrive l'output curato in inglese.
5. Il potenziatore invia i progressi al PR di origine.
6. Il potenziatore aggiorna il commento sullo stato PR dopo ogni abilità elaborata con i totali batch e lo stato più recente.
7. Al termine, materializza la derivata migliorata in "skills_omni/" e apre o aggiorna un PR complementare nel repository pubblico solo per gli output "completati" e "degradati".
8. Dopo che il PR è stato unito a "main", il poller privato sensibile al repository rielabora qualsiasi competenza nativa modificata, aggiorna "workspace/enhanced/skills/<skill>/" e mantiene la linea di base migliorata privata allineata con l'ultima fonte nativa pubblica.
9. Dopo l'unione, il flusso di lavoro del rilascio pubblico aumenta la versione del pacchetto npm, rigenera gli artefatti del catalogo, pubblica un rilascio e contrassegna automaticamente la nuova versione.

Limite di tariffa:

- Il potenziatore PR attualmente elabora**1 abilità al minuto**
- un PR con 40 nuove abilità native potrà quindi rimanere nella coda dei potenziatori per circa 40 minuti
- Il PR mostra il lavoro come un'esecuzione della CI in corso più un commento sullo stato di avanzamento che fa avanzare abilità per abilità

Il contributore non ha bisogno di eseguire manualmente il potenziatore.## No-Loop Rule For `skills_omni/`

La superficie curata è intenzionalmente unidirezionale:

- L'input nativo entra tramite `skills/`
- il potenziatore privato esamina l'input nativo
- L'output curato è proposto in `skills_omni/`
- `skills_omni/` non verrà mai più trattato come assunzione nativa
- Gli aggiornamenti nativi successivi rientrano comunque tramite `skills/` e sostituiscono la baseline migliorata privata dopo la rielaborazione

Il repository ora applica questo limite:

- I PR pubblici diretti che modificano `skills_omni/` vengono rifiutati
- qui sono accettati solo PR associati creati dall'automazione della famiglia di rami `skills-omni/pr-*`
- I PR misti che tentano di modificare contemporaneamente sia `skills/` che `skills_omni/` vengono rifiutati## Automatic Versioning After Merge

Le unioni di competenze con "principale" ora attivano automaticamente il flusso di lavoro di rilascio del repository.

Criteri relativi alla versione corrente del pacchetto:

- La patch aumenta di "+1" per ogni fusione qualificante
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- dopo ".10", il pacchetto passa al minore successivo e reimposta la patch
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Percorsi di attivazione della versione corrente:

- "competenze/**".
- `skills_omni/**`
- "dati/bundles.json".

Quel lavoro di rilascio automatico:

1. calcola la versione successiva del pacchetto da `package.json`
2. bumps `package.json` e `package-lock.json`
3. rigenera `metadata.json`, `skills_index.json`, `dist/` e `docs/CATALOG.md`
4. esegue la rigorosa pipeline di verifica del rilascio
5. conferma il bump della versione su "main".
6. crea un tag Git per la nuova versione
7. pubblica gli artefatti di npm e GitHub Release

Nota importante sull'implementazione:

- GitHub registra un nuovo file del flusso di lavoro come flusso di lavoro del repository attivo solo dopo che il file ha raggiunto il ramo predefinito.
- Fino a quando "Enhance PR Skills" non arriva su "main", i contributori possono leggere il processo documentato, ma GitHub non eseguirà ancora quel flusso di lavoro automaticamente sui PR pubblici.
- Dopo che il flusso di lavoro è stato unito a "principale", il comportamento sopra descritto diventa il percorso di assunzione predefinito per i futuri PR con competenze native.## Native vs Enhanced

Questo repository ora ha due superfici distinte:

- "capacità/".
  Assunzione nativa. Ciò preserva il contributo originale così come inviato.
- `skills_omni/`
  Output derivato omni-potenziato proposto dall'automazione e gestito da Omni Skills Team.

Regole di attribuzione per `skills_omni/`:

- il derivato potenziato diventa Omni-mantenuto
- restano accreditati il contributore originale e la competenza nativa a monte
- ciascuna directory migliorata mantiene un file `ATTRIBUTION.md` con il percorso upstream, PR, autore e contesto di origine
- Ogni directory migliorata è solo un output curato e non deve essere reinviata nel percorso di assunzione del potenziatore nativo
- si prevede che ogni directory migliorata sia in lingua inglese anche quando la fonte nativa upstream non lo era## Manual Maintainer Commands

L'automazione copre il normale apporto di PR, ma i manutentori possono comunque eseguire manualmente il potenziatore privato quando necessario.

Batch contro una differenza di ramo:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Revisione per singola abilità:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Risultati di potenziamento previsti per abilità:

- `workspace/incoming/original/<run-id>/<skill>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- "workspace/reports/<run-id>/research.json`
- "workspace/reports/<run-id>/rewrite.json`
- "workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

L’organismo PR dovrebbe dichiarare:

- quali competenze sono state aggiunte o aggiornate
- quali pacchetti o flussi di lavoro approfondiscono
- quale convalida è stata eseguita
- se il potenziatore automatizzato è stato eseguito
- se ha aperto o aggiornato un PR associato `skills_omni/`
- eventuali note eccezionali del manutentore sull'attribuzione o sulla pulizia successiva## Reviewer Checklist

- l'assunzione nativa è legittima e non dolosa
- i metadati e i manifest generati sono stati aggiornati
- Gli aggiornamenti del bundle sono intenzionali
- La convalida pubblica e gli output di compilazione sono verdi
- il commento sullo stato del potenziatore corrisponde alle effettive abilità modificate e allo stato del risultato finale
- Qualsiasi PR compagno `skills_omni/` preserva correttamente l'attribuzione## Example PR Scope

Un buon esempio di PR può aggiungere un set tematico come:

- una competenza di osservabilità o DevOps
- un incidente o una competenza di sicurezza
- una valutazione dell'intelligenza artificiale o un'abilità di suggerimento

Si tratta di un volume sufficientemente ampio da poter esercitare lo scorer, il potenziatore automatico, il flusso di pubblicazione di `skills_omni/`, i bundle e il modello di attribuzione senza trasformare il PR in una riscrittura completa del catalogo.