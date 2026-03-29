# 📦 Curated Bundles (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Los paquetes son selectores de habilidades seleccionados que se encuentran en capas en la parte superior del catálogo.**Los siete paquetes iniciales ahora están completamente respaldados por habilidades publicadas.---

## ⚙️ How Bundles Work

`--bundle`**no**instala un paquete especial. Eso:

1. 📋 Expande la definición del paquete seleccionado
2. ✅ Instala solo los miembros actualmente disponibles en el catálogo
3. ✅ Crea un plan de instalación concreto a partir de los miembros del paquete publicados.```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Basado en el catálogo generado actualmente (`dist/bundles.json`):

| Paquete | Destinado a | Disponible | Miembros |
|:-------|:------------|:----------|:--------|
| 🧰**esenciales**| Cada desarrollador |**4/4**| `encontrar-habilidades` ✅ · `lluvia de ideas` ✅ · `arquitectura` ✅ · `depuración` ✅ |
| 🌐**pila completa**| Desarrolladores web y de aplicaciones |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**diseño**| Sistemas de diseño y accesibilidad |**4/4**| `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ |
| 🛡️**seguridad**| Ingenieros de seguridad |**4/4**| `auditor-de-seguridad` ✅ · `escáner-de-vulnerabilidad` ✅ · `respuesta-a-incidente` ✅ · `modelado-de-amenazas` ✅ |
| ⚙️**devops**| Plataforma e infraestructura |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖**ingeniero-ai**| Desarrolladores de LLM y ML |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss-mantenedor**| Mantenedores de OSS |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentación` ✅ |

> ✅ = Publicado e instalable---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Quieres un**punto de partida seleccionado**para un dominio
- Quieres planes de instalación que sean**seleccionados y específicos del dominio**
- Quiere una manera rápida de instalar un conjunto de trabajo completo para un rol### 🎯 Use `--skill` instead when:

- Quieres una**instalación mínima garantizada**
- Ya sabes la**habilidad exacta**que necesitas
- Quieres el**espacio más pequeño posible**en lugar de un conjunto de trabajo seleccionado---

## 💡 Practical Recommendations

| Gol | Comando |
|:-----|:--------|
| 🎯 Instalar una habilidad publicada específica | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Paquete inicial totalmente respaldado | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Paquete de sistemas de diseño | `npx omni-skills --cursor --bundle design` |
| 🔧 Paquete de flujo de trabajo OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Paquete de flujo de trabajo de seguridad | `npx omni-skills --cursor --bundle seguridad` |
| ⚙️ Paquete DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Paquete de ingeniero de IA | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Busca antes de decidir | `npx omni-skills encuentra figma` |
| 📋 Ver toda la disponibilidad de paquetes | `cat dist/bundles.json` |---

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

Utilice las herramientas `search_skills` o `preview_install` con parámetros de paquete.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
