# 📦 Curated Bundles (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**I bundle sono selettori di abilità curati posizionati sopra il catalogo.**Tutti e sette i bundle iniziali sono ora completamente supportati dalle abilità pubblicate.---

## ⚙️ How Bundles Work

`--bundle`**non**installa un pacchetto speciale. Esso:

1. 📋 Espande la definizione del pacchetto selezionato
2. ✅ Installa solo i membri attualmente disponibili nel catalogo
3. ✅ Crea un piano di installazione concreto dai membri del bundle pubblicati```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

In base al catalogo attualmente generato (`dist/bundles.json`):

| Pacchetto | Destinato a | Disponibile | Membri |
|:-------|:------------|:----------|:--------|
| 🧰**essenziale**| Ogni sviluppatore |**4/4**| `trovare competenze` ✅ · `brainstorming` ✅ · `architettura` ✅ · `debugging` ✅ |
| 🌐**stack completo**| Sviluppatori web e app |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**design**| Sistemi di progettazione e accessibilità |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**sicurezza**| Ingegneri della sicurezza |**4/4**| `revisore della sicurezza` ✅ · `scanner delle vulnerabilità` ✅ · `risposta agli incidenti` ✅ · `modellazione delle minacce` ✅ |
| ⚙️**devops**| Piattaforma e infrastrutture |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ai-ingegnere**| Sviluppatori LLM e ML |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-maintainer**| Manutentori OSS |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = Pubblicato e installabile---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Desideri un**punto di partenza curato**per un dominio
- Desideri piani di installazione che rimangano**accurati e specifici del dominio**
- Desideri un modo rapido per installare un set di lavoro completo per un ruolo### 🎯 Use `--skill` instead when:

- Desideri un'**installazione minima garantita**
- Conosci già le**capacità esatte**di cui hai bisogno
- Vuoi il**minimo ingombro possibile**invece di un set di lavoro curato---

## 💡 Practical Recommendations

| Obiettivo | Comando |
|:-----|:--------|
| 🎯 Installa una competenza specifica pubblicata | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Pacchetto iniziale completamente supportato | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Pacchetto sistemi di progettazione | `npx omni-skills --cursor --bundle design` |
| 🔧 Pacchetto flusso di lavoro OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Pacchetto flusso di lavoro di sicurezza | `npx omni-skills --cursor --bundle security` |
| ⚙️ Pacchetto DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Pacchetto ingegnere AI | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Cerca prima di decidere | `npx omni-skills trova figma` |
| 📋 Scopri tutta la disponibilità dei bundle | `cat dist/bundles.json` |---

## 🔍 Inspecting Bundles

### 📁 View Generated Bundle Data

```bash
cat dist/bundles.json
```

### 🌐 Query via API

```bash
curl http://127.0.0.1:3333/v1/bundles
```

### 🔌 Query via MCP

Utilizza gli strumenti "search_skills" o "preview_install" con i parametri del bundle.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
