# 📦 Curated Bundles (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Bundles sind kuratierte Fertigkeitsauswahlen, die über dem Katalog liegen.**Alle sieben Starterpakete werden jetzt vollständig durch veröffentlichte Fertigkeiten unterstützt.---

## ⚙️ How Bundles Work

„--bundle“ installiert**kein**spezielles Paket. Es:

1. 📋 Erweitert die ausgewählte Bundle-Definition
2. ✅ Installiert nur die derzeit im Katalog verfügbaren Mitglieder
3. ✅ Erstellt einen konkreten Installationsplan aus veröffentlichten Bundle-Mitgliedern```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Basierend auf dem aktuell generierten Katalog („dist/bundles.json“):

| Bündel | Bestimmt für | Verfügbar | Mitglieder |
|:-------|:------------|:----------|:--------|
| 🧰**Das Wesentliche**| Jeder Entwickler |**4/4**| „Find-Skills“ ✅ · „Brainstorming“ ✅ · „Architektur“ ✅ · „Debugging“ ✅ |
| 🌐**Full-Stack**| Web- und App-Entwickler |**5/5**| „Frontend-Design“ ✅ · „API-Design“ ✅ · „Datenbank-Design“ ✅ · „Omni-Figma“ ✅ · „Auth-Flows“ ✅ |
| 🎨**Design**| Designsysteme und Barrierefreiheit |**4/4**| „frontend-design“ ✅ · „omni-figma“ ✅ · „design-systems-ops“ ✅ · „accessibility-audit“ ✅ |
| 🛡️**Sicherheit**| Sicherheitsingenieure |**4/4**| „Sicherheitsprüfer“ ✅ · „Schwachstellenscanner“ ✅ · „Vorfallreaktion“ ✅ · „Bedrohungsmodellierung“ ✅ |
| ⚙️**Entwickler**| Plattform & Infrastruktur |**5/5**| „docker-expert“ ✅ · „kubernetes“ ✅ · „terraform“ ✅ · „observability-review“ ✅ · „release-engineering“ ✅ |
| 🤖**KI-Ingenieur**| LLM- und ML-Entwickler |**5/5**| „rag-engineer“ ✅ · „prompt-engineer“ ✅ · „llm-patterns“ ✅ · „eval-design“ ✅ · „context-engineering“ ✅ |
| 🔧**oss-maintainer**| OSS-Betreuer |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = Veröffentlicht und installierbar---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Sie möchten einen**kuratierten Ausgangspunkt**für eine Domain
- Sie möchten Installationspläne, die**kuratiert und domänenspezifisch**bleiben
- Sie möchten schnell einen vollständigen Arbeitssatz für eine Rolle installieren### 🎯 Use `--skill` instead when:

- Sie möchten eine**garantierte Minimalinstallation**
- Sie kennen bereits die**genaue Fähigkeit**, die Sie benötigen
- Sie möchten den**kleinstmöglichen Platzbedarf**anstelle eines kuratierten Arbeitssatzes---

## 💡 Practical Recommendations

| Ziel | Befehl |
|:-----|:--------|
| 🎯 Installieren Sie einen bestimmten veröffentlichten Skill | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Vollständig abgesichertes Starterpaket | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Design-Systempaket | `npx omni-skills --cursor --bundle design` |
| 🔧 OSS-Workflow-Bundle | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Sicherheits-Workflow-Paket | `npx omni-skills --cursor --bundle security` |
| ⚙️ DevOps-Bundle | `npx omni-skills --cursor --bundle devops` |
| 🤖 KI-Ingenieur-Paket | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Suchen Sie, bevor Sie sich entscheiden | `npx omni-skills find figma` |
| 📋 Alle Bundle-Verfügbarkeiten anzeigen | `cat dist/bundles.json` |---

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

Verwenden Sie die Tools „search_skills“ oder „preview_install“ mit Bundle-Parametern.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
