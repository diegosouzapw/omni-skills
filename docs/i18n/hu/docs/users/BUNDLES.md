# 📦 Curated Bundles (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**A csomagok a katalógus tetején rétegzett készségválasztók.**Most már mind a hét kezdőcsomagot teljes mértékben támogatják a közzétett készségek.---

## ⚙️ How Bundles Work

A `--bundle`**nem**telepít speciális csomagot. Ez:

1. 📋 Kibővíti a kiválasztott köteg definícióját
2. ✅ Csak a katalógusban jelenleg elérhető tagokat telepíti
3. ✅ Konkrét telepítési tervet készít a közzétett csomagtagokból```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Az aktuálisan létrehozott katalógus (`dist/bundles.json`) alapján:

| Csomag | Célja | Elérhető | Tagok |
|:-------|:-------------|:-----------|:---------|
| 🧰**essentials**| Minden fejlesztő |**4/4**| `készségek keresése` ✅ · `agyalás` ✅ · `architektúra` ✅ · `hibakeresés` ✅ |
| 🌐**full-stack**| Webes és alkalmazásfejlesztők |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `adatbázis-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**design**| Tervezési rendszerek és hozzáférhetőség |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**biztonság**| Biztonsági mérnökök |**4/4**| `biztonsági ellenőr` ✅ · `sebezhetőség-szkenner` ✅ · `incidens-reagálás` ✅ · `fenyegetés-modellezés` ✅ |
| ⚙️**devops**| Platform és infra |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraforma` ✅ · `megfigyelhetőség-felülvizsgálat` ✅ · `kiadási tervezés` ✅ |
| 🤖**ai-mérnök**| LLM és ML fejlesztők |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-karbantartó**| OSS karbantartók |**4/4**| `készségek keresése` ✅ · `create-pr` ✅ · `módosítási napló` ✅ · `dokumentáció' ✅ |

> ✅ = Megjelent és telepíthető---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

-**kurált kezdőpontot**szeretne egy domainhez
- Olyan telepítési terveket szeretne, amelyek**kurátorok és domainspecifikusak maradnak**
- Gyors módot szeretne egy szerepkör teljes működő készletének telepítésére### 🎯 Use `--skill` instead when:

-**garantált minimális telepítést szeretne**
- Már ismeri azt a**pontos készséget**, amelyre szüksége van
- A**lehetőleg legkisebb helyigényt**szeretné egy összeállított működő készlet helyett---

## 💡 Practical Recommendations

| Cél | Parancs |
|:-----|:---------|
| 🎯 Telepítsen egy adott közzétett készséget | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Teljesen alátámasztott kezdőcsomag | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Tervezőrendszer-csomag | `npx omni-skills --cursor --bundle design` |
| 🔧 OSS munkafolyamat-csomag | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Biztonsági munkafolyamat-csomag | `npx omni-skills --cursor --bundle security` |
| ⚙️ DevOps csomag | `npx omni-skills --cursor --bundle devops` |
| 🤖 AI mérnöki csomag | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Döntés előtt keressen | `npx omni-skills find figma` |
| 📋 Az összes elérhető csomag megtekintése | `cat dist/bundles.json` |---

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

Használja a "search_skills" vagy "preview_install" eszközöket a csomagparaméterekkel.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
