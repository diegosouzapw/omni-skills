# 📋 Skill Manifest Specification (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**Il manifest JSON leggibile dalla macchina generato da ogni `SKILL.md` durante la pipeline di compilazione: il singolo contratto dati utilizzato da tutte le superfici di runtime.**---

## 📊 Status

| Caratteristica | Stato |
|:--------|:------|
| ✅ Generato automaticamente da SKILL.md | Implementato |
| ✅ Consumato da CLI, API, MCP, A2A | Implementato |
| ✅ Archivi con checksum | Implementato |
| ✅ Classificazione di sicurezza | Implementato |

>**Importante**: il manifest è un**artefatto di compilazione**. Autore dei contributori "SKILL.md": la pipeline deriva automaticamente il manifest JSON.---

## 🎯 Purpose

Il manifest esiste in modo che**tutte le superfici di runtime**consumino la stessa forma normalizzata:

| Superficie | Come utilizza i manifesti |
|:--------|:---------------------|
| 🖥️**CLI**| Ricerca, pianificazione dell'installazione, diagnostica medica |
| 🌐**API**| Risposte degli endpoint, filtraggio, collegamenti per il download |
| 🔌**MCP**| Risposte dello strumento, contenuto delle risorse |
| 🤖**A2A**| Carichi utili di scoperta e raccomandazione |---

## 📁 Output Locations

| Artefatto | Percorso |
|:---------|:-----|
| 📊 Metadati di root | `metadati.json` |
| 📊 Metadati per competenza | `skills/<skill>/metadata.json` |
| 📋Indice delle competenze | `skills_index.json` |
| 📚 Catalogo pubblicato | `dist/catalog.json` |
| 📌 Manifesto per abilità | `dist/manifests/<abilità>.json` |
| 📦 Archivio zip | `dist/archives/<competenza>.zip` |
| 📦 Archivio tarball | `dist/archives/<abilità>.tar.gz` |
| 🔒 Manifesto del checksum | `dist/archives/<competenza>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Campo | Descrizione |
|:------|:------------|
| `versione_schema` | Versione dello schema manifesto |
| `id` | Identificatore di abilità stabile dal campo `name` |
| "lumaca" | Slug della directory sotto `skills/` |
| `nome_visualizzato` | Titolo leggibile dall'uomo dalla prima intestazione |### 📝 Metadata

| Campo | Descrizione |
|:------|:------------|
| `descrizione` | Breve riassunto da frontmatter |
| "versione" | Versione della competenza, indipendente dalla versione del pacchetto npm |
| "categoria" | Categoria canonica (normalizzata) |
| `categoria_raw` | Categoria originale da frontmatter |
| `tassonomia` | Metadati della tassonomia completa con fallback dedotto |
| `tag` | Tag ricercabili |
| `complessità` | `principiante` · `intermedio` · `avanzato` · `esperto` |
| `rischio` | `sicuro` · `cautela` · `offensivo` · `critico` |
| "fonte" | `omni-team` · `comunità` · `ufficiale` |
| "autore" | Stringa di attribuzione |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Campo | Descrizione |
|:------|:------------|
| "punto di ingresso" | Percorso canonico `SKILL.md` |
| `percorsi.root` | Directory delle competenze all'interno del repository |
| `percorsi.manifest` | Percorso manifest generato in `dist/` |### 🖥️ Compatibility

| Campo | Descrizione |
|:------|:------------|
| "strumenti" | Identificatori degli strumenti da frontmatter |
| `install_targets` | Metadati di installazione per strumento |

Ciascuna destinazione di installazione include: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| Campo | Descrizione |
|:------|:------------|
| `sotto_risorse` | Sottodirectory delle competenze ("riferimenti", "agenti", "risorse") |
| `conta_artifatti` | Conteggio totale dei file nel pacchetto di competenze |
| `conteggio_riferimenti` | Conteggio documenti di riferimento |
| `conta_agenti` | Conteggio configurazioni agente |
| `conteggio_risorse` | Conteggio file di risorse |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Campo | Descrizione |
|:------|:------------|
| `strategia` | Strategia di installazione (ad esempio, `copy-skill-directory`) |
| `programma_installatore_corrente` | Comportamento di installazione leggibile dall'uomo |
| `ricette` | Ricette di installazione per client |### 📊 Classification

| Sezione | Campi |
|:--------|:-------|
| 🎯 `maturità` | `livello_competenza`, `etichetta_livello_competenza` |
| 📋 `miglior_pratiche` | `punteggio` (0-100) |
| ⭐ `qualità` | `punteggio` (0-100) |
| 🛡️ `sicurezza` | `punteggio`, `stato` |
| ✅ `convalida` | `stato` |### 📝 Content

Segnali derivati: `body_length`, `content_length`, `body_lines`, `word_count`, oltre a flag strutturali per esempi, sezioni di risoluzione dei problemi, ecc.### 📁 Artifacts

Array di ogni file spedito all'interno della directory delle abilità:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Tipi di artefatto**: `punto di ingresso` · `riferimento` · `agente` · `risorsa` · `licenza` · `supporto`### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

| Campo | Descrizione |
|:------|:------------|
| `punto_ingresso_sha256` | Hash di SKILL.md |
| `pacchetto_sha256` | Digest deterministico dall'elenco ordinato degli artefatti |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 📌 La versione del pacchetto del repository e la versione della competenza sono preoccupazioni diverse. Il pacchetto è attualmente "0.1.3", mentre le singole abilità portano le proprie versioni semantiche.---

## ⚠️ Compatibility Notes

| Regola | Motivazione |
|:-----|:----------|
| ✅ Deve rimanere derivabile da repo | Non è richiesta la creazione manuale di manifesti |
| ✅ È possibile aggiungere nuovi campi facoltativi | Compatibilità futura |
| ⚠️ I campi esistenti devono rimanere stabili | Compatibilità con le versioni precedenti |
| 🚫 Nessun manifesto scritto a mano | La derivazione in fase di compilazione è la fonte della verità |