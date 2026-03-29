# 📦 Curated Bundles (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**Os pacotes são seletores de habilidades selecionados e colocados no topo do catálogo.**Todos os sete pacotes iniciais agora são totalmente respaldados por habilidades publicadas.---

## ⚙️ How Bundles Work

`--bundle`**não**instala um pacote especial. Isto:

1. 📋 Expande a definição de pacote selecionado
2. ✅ Instala apenas os membros atualmente disponíveis no catálogo
3. ✅ Cria um plano de instalação concreto a partir de membros do pacote publicados```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Com base no catálogo gerado atualmente (`dist/bundles.json`):

| Pacote | Destinado a | Disponível | Membros |
|:-------|:-----------|:----------|:--------|
| 🧰**essenciais**| Cada desenvolvedor |**4/4**| `encontrar habilidades` ✅ · `brainstorming` ✅ · `arquitetura` ✅ · `depuração` ✅ |
| 🌐**pilha completa**| Desenvolvedores de web e aplicativos |**5/5**| `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-fiigma` ✅ · `auth-flows` ✅ |
| 🎨**design**| Sistemas de design e acessibilidade |**4/4**| `frontend-design` ✅ · `omni-fiigma` ✅ · `design-systems-ops` ✅ · `auditoria de acessibilidade` ✅ |
| 🛡️**segurança**| Engenheiros de segurança |**4/4**| `auditor de segurança` ✅ · `scanner de vulnerabilidade` ✅ · `resposta a incidentes` ✅ · `modelagem de ameaças` ✅ |
| ⚙️**devops**| Plataforma e infra |**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `revisão de observabilidade` ✅ · `engenharia de lançamento` ✅ |
| 🤖**engenheiro de IA**| Desenvolvedores de LLM e ML |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**mantenedor de osso**| Mantenedores de OSS |**4/4**| `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentação` ✅ |

> ✅ = Publicado e instalável---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- Você deseja um**ponto de partida selecionado**para um domínio
- Você deseja instalar planos que permaneçam**com curadoria e específicos do domínio**
- Você deseja uma maneira rápida de instalar um conjunto de trabalho completo para uma função### 🎯 Use `--skill` instead when:

- Você deseja uma**instalação mínima garantida**
- Você já sabe a**habilidade exata**que precisa
- Você deseja a**menor área ocupada possível**em vez de um conjunto de trabalho selecionado---

## 💡 Practical Recommendations

| Meta | Comando |
|:-----|:--------|
| 🎯 Instale uma habilidade específica publicada | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Pacote inicial totalmente apoiado | `npx omni-skills --cursor --bundle full-stack` |
| 🎨 Pacote de sistemas de design | `npx omni-skills --cursor --bundle design` |
| 🔧 Pacote de fluxo de trabalho OSS | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Pacote de fluxo de trabalho de segurança | `npx omni-skills --cursor --bundle segurança` |
| ⚙️ Pacote DevOps | `npx omni-skills --cursor --bundle devops` |
| 🤖 Pacote de engenheiro de IA | `npx omni-skills --codex --bundle ai-engineer` |
| 🔎 Pesquise antes de decidir | `npx omni-skills encontrar figma` |
| 📋 Ver disponibilidade de todos os pacotes | `cat dist/bundles.json` |---

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

Use as ferramentas `search_skills` ou `preview_install` com parâmetros de pacote configurável.### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```
