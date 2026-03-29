# 📦 Curated Bundles (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Paketit ovat kuratoituja taitojen valitsimia, jotka on sijoitettu luettelon päälle.**Kaikki seitsemän aloituspakettia ovat nyt täysin julkaistujen taitojen tukena.---

## ⚙️ How Bundles Work

"--bundle"**ei**asenna erikoispakettia. Se:

1. 📋 Laajentaa valitun nipun määritelmän
2. ✅ Asentaa vain luettelossa tällä hetkellä saatavilla olevat jäsenet
3. ✅ Rakentaa konkreettisen asennussuunnitelman julkaistuista nippujäsenistä```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Perustuu nykyiseen luotuun luetteloon (`dist/bundles.json`):

| Paketti | Tarkoitettu | Saatavilla | Jäsenet |
|:-------|:-------------|:-----------|:---------|
| 🧰**essentials**| Jokainen kehittäjä |**4/4**| `löydä-taidot` ✅ · `aivoriihi` ✅ · `arkkitehtuuri` ✅ · `virheenkorjaus` ✅ |
| 🌐**täysi pino**| Verkko- ja sovelluskehittäjät |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `tietokannan suunnittelu` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**design**| Suunnittelujärjestelmät ja esteettömyys |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**turvallisuus**| Turvainsinöörit |**4/4**| `turvatarkastaja` ✅ · `haavoittuvuusskanneri` ✅ · `tapahtumareagointi` ✅ · `uhkamallinnus` ✅ |
| ⚙️**devops**| Alusta & infra |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `havainnointi-arviointi` ✅ · `release-engineering` ✅ |
| 🤖**ai-insinööri**| LLM- ja ML-kehittäjät |**5/5**| `rag-insinööri` ✅ · `prompt-insinööri` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-maintainer**| OSS-ylläpitäjät |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `muutosloki` ✅ · `dokumentaatio` ✅ |

> ✅ = Julkaistu ja asennettavissa---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Haluat**kuroidun aloituspisteen**verkkotunnukselle
- Haluat asennussuunnitelmia, jotka pysyvät**kuroituina ja verkkotunnuskohtaisina**
- Haluat nopean tavan asentaa täydellinen työsarja roolia varten### 🎯 Use `--skill` instead when:

- Haluat**taatun minimaalisen asennuksen**
- Tiedät jo tarvitsemasi**tarkan taidon**
- Haluat**pienimmän mahdollisen jalanjäljen**kuratoidun työsarjan sijaan---

## 💡 Practical Recommendations

| Tavoite | Komento |
|:-----|:--------|
| 🎯 Asenna tietty julkaistu taito | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Täysin tuettu aloituspaketti | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Suunnittelujärjestelmäpaketti | `npx omni-skills --cursor --bundle design` |
| 🔧 OSS-työnkulkupaketti | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Suojauksen työnkulkupaketti | `npx omni-skills --cursor --bundle security` |
| ⚙️ DevOps-paketti | `npx omni-skills --cursor --bundle devops` |
| 🤖 AI-insinööripaketti | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Hae ennen päätöksentekoa | `npx omni-skills find figma` |
| 📋 Katso kaikki paketin saatavuus | `cat dist/bundles.json` |---

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

Käytä "search_skills"- tai "preview_install" -työkaluja nippuparametreilla.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
