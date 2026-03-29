# 📦 Curated Bundles (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Pakiety to wybrane selektory umiejętności umieszczone na górze katalogu.**Wszystkie siedem pakietów startowych jest teraz w pełni wspieranych przez opublikowane umiejętności.---

## ⚙️ How Bundles Work

`--bundle`**nie**instaluje specjalnego pakietu. To:

1. 📋 Rozwija wybraną definicję paczki
2. ✅ Instaluje tylko członków aktualnie dostępnych w katalogu
3. ✅ Tworzy konkretny plan instalacji na podstawie opublikowanych członków pakietu```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Na podstawie aktualnie wygenerowanego katalogu (`dist/bundles.json`):

| Pakiet | Przeznaczone dla | Dostępne | Członkowie |
|:-------|:------------|:------------|:------------|
| 🧰**niezbędne**| Każdy programista |**4/4**| `find-skills` ✅ · `burza mózgów` ✅ · `architektura` ✅ · `debugowanie` ✅ |
| 🌐**pełny stos**| Twórcy stron internetowych i aplikacji |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**projekt**| Projektowanie systemów i dostępności |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `audyt-dostępności` ✅ |
| 🛡️**bezpieczeństwo**| Inżynierowie bezpieczeństwa |**4/4**| `audytor bezpieczeństwa` ✅ · `skaner podatności` ✅ · `reakcja na incydenty` ✅ · `modelowanie zagrożeń` ✅ |
| ⚙️**devops**| Platforma i infrastruktura |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `przegląd-obserwowalności` ✅ · `release-engineering` ✅ |
| 🤖**inżynier AI**| Twórcy LLM i ML |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**opiekun-oss**| Opiekunowie OSS |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `dokumentacja` ✅ |

> ✅ = Opublikowano i można zainstalować---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Chcesz**wyselekcjonowanego punktu początkowego**dla domeny
- Chcesz planów instalacji, które będą**wyselekcjonowane i specyficzne dla domeny**
- Chcesz szybko zainstalować kompletny zestaw roboczy dla roli### 🎯 Use `--skill` instead when:

- Chcesz**gwarantowanej minimalnej instalacji**
- Znasz już**dokładną umiejętność**, której potrzebujesz
- Chcesz mieć**najmniejszą możliwą powierzchnię**zamiast wybranego zestawu roboczego---

## 💡 Practical Recommendations

| Cel | Polecenie |
|:---------|:------------|
| 🎯 Zainstaluj określoną opublikowaną umiejętność | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Pakiet startowy z pełnym wsparciem | `npx omni-skills --cursor --bundle pełny stos` |
| 🎨 Pakiet systemów projektowania | `npx omni-skills --cursor --bundle design` |
| 🔧 Pakiet przepływu pracy OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Pakiet przepływu pracy dotyczący bezpieczeństwa | `npx omni-skills --cursor --bundle security` |
| ⚙️ Pakiet DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Pakiet inżyniera AI | `npx omni-skills --codex --bundle AI-engineer` |
| 🔎 Wyszukaj, zanim podejmiesz decyzję | `npx omni-umiejętności znajdź figmę` |
| 📋 Zobacz całą dostępność pakietu | `cat dist/bundles.json` |---

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

Użyj narzędzi `search_skills` lub `preview_install` z parametrami pakietu.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
