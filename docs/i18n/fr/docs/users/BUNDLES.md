# 📦 Curated Bundles (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Les bundles sont des sélecteurs de compétences organisés en haut du catalogue.**Les sept packs de démarrage sont désormais entièrement soutenus par des compétences publiées.---

## ⚙️ How Bundles Work

`--bundle` n'installe**pas**de package spécial. Il :

1. 📋 Développe la définition du bundle sélectionné
2. ✅ Installe uniquement les membres actuellement disponibles dans le catalogue
3. ✅ Construit un plan d'installation concret à partir des membres du bundle publiés```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Basé sur le catalogue généré actuel (`dist/bundles.json`) :

| Paquet | Destiné à | Disponible | Membres |
|:-------|:------------|:--------------|:--------|
| 🧰**essentiels**| Chaque développeur |**4/4**| `trouver des compétences` ✅ · `brainstorming` ✅ · `architecture` ✅ · `débogage` ✅ |
| 🌐**full-stack**| Développeurs Web et applications |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**conception**| Systèmes de conception et accessibilité |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**sécurité**| Ingénieurs en sécurité |**4/4**| `auditeur de sécurité` ✅ · `scanner de vulnérabilité` ✅ · `réponse aux incidents` ✅ · `modélisation des menaces` ✅ |
| ⚙️**devops**| Plateforme et infrastructure |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ingénieur ai**| Développeurs LLM et ML |**5/5**| `rag-ingénieur` ✅ · `prompt-ingénieur` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-mainteneur**| Mainteneurs OSS |**4/4**| `trouver des compétences` ✅ · `créer-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = Publié et installable---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Vous voulez un**point de départ organisé**pour un domaine
- Vous souhaitez des plans d'installation qui restent**organisés et spécifiques au domaine**
- Vous souhaitez un moyen rapide d'installer un ensemble de travail complet pour un rôle### 🎯 Use `--skill` instead when:

- Vous souhaitez une**installation minimale garantie**
- Vous connaissez déjà la**compétence exacte**dont vous avez besoin
- Vous voulez la**plus petite empreinte possible**au lieu d'un ensemble de travail organisé---

## 💡 Practical Recommendations

| Objectif | Commande |
|:-----|:--------|
| 🎯 Installer une compétence publiée spécifique | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Pack de démarrage entièrement pris en charge | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Offre groupée de systèmes de conception | `npx omni-skills --cursor --bundle design` |
| 🔧 Offre groupée de flux de travail OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Offre groupée de workflows de sécurité | `npx omni-skills --cursor --bundle security` |
| ⚙️ Offre groupée DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Offre groupée d'ingénieurs en IA | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Recherchez avant de vous décider | `npx omni-compétences trouver figma` |
| 📋 Voir toutes les disponibilités des forfaits | `cat dist/bundles.json` |---

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

Utilisez les outils `search_skills` ou `preview_install` avec les paramètres du bundle.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
