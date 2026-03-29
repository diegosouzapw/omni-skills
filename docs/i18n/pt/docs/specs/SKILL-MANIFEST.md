# 📋 Skill Manifest Specification (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**O manifesto JSON legível por máquina gerado a partir de cada `SKILL.md` durante o pipeline de construção — o contrato de dados único consumido por todas as superfícies de tempo de execução.**---

## 📊 Status

| Recurso | Estado |
|:--------|:------|
| ✅ Gerado automaticamente em SKILL.md | Implementado |
| ✅ Consumido por CLI, API, MCP, A2A | Implementado |
| ✅ Arquivos com somas de verificação | Implementado |
| ✅ Classificação de segurança | Implementado |

>**Importante**: o manifesto é um**artefato de compilação**. Autor colaborador `SKILL.md` — o pipeline deriva o manifesto JSON automaticamente.---

## 🎯 Purpose

O manifesto existe para que**todas as superfícies de tempo de execução**consumam a mesma forma normalizada:

| Superfície | Como usa manifestos |
|:--------|:---------------------|
| 🖥️**CLI**| Pesquisa, planejamento de instalação, diagnóstico médico |
| 🌐**API**| Respostas de endpoint, filtragem, links para download |
| 🔌**MCP**| Respostas de ferramentas, conteúdo de recursos |
| 🤖**A2A**| Cargas úteis de descoberta e recomendação |---

## 📁 Output Locations

| Artefato | Caminho |
|:--------|:-----|
| 📊 Metadados raiz | `metadados.json` |
| 📊 Metadados por habilidade | `habilidades/<habilidade>/metadata.json` |
| 📋 Índice de competências | `skills_index.json` |
| 📚 Catálogo publicado | `dist/catalog.json` |
| 📌 Manifesto por habilidade | `dist/manifests/<habilidade>.json` |
| 📦 Arquivo zip | `dist/archives/<habilidade>.zip` |
| 📦 Arquivo Tarball | `dist/archives/<habilidade>.tar.gz` |
| 🔒 Manifesto de soma de verificação | `dist/archives/<habilidade>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

| Campo | Descrição |
|:------|:------------|
| `versão_esquema` | Versão do esquema de manifesto |
| `id` | Identificador de habilidade estável do campo `nome` |
| `lesma` | Slug de diretório em `skills/` |
| `nome_exibição` | Título legível do primeiro título |### 📝 Metadata

| Campo | Descrição |
|:------|:------------|
| `descrição` | Breve resumo do frontmatter |
| `versão` | Versão Skill, independente da versão do pacote npm |
| `categoria` | Categoria canônica (normalizada) |
| `categoria_raw` | Categoria original do frontmatter |
| `taxonomia` | Metadados completos de taxonomia com substituto inferido |
| `etiquetas` | Tags pesquisáveis ​​|
| `complexidade` | `iniciante` · `intermediário` · `avançado` · `especialista` |
| `risco` | `seguro` · `cuidado` · `ofensivo` · `crítico` |
| `fonte` | `omni-team` · `comunidade` · `oficial` |
| `autor` | Sequência de atribuição |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

| Campo | Descrição |
|:------|:------------|
| `ponto de entrada` | Caminho canônico `SKILL.md` |
| `caminhos.root` | Diretório de habilidades dentro do repositório |
| `paths.manifest` | Caminho do manifesto gerado em `dist/` |### 🖥️ Compatibility

| Campo | Descrição |
|:------|:------------|
| `ferramentas` | Identificadores de ferramentas do frontmatter |
| `install_targets` | Metadados de instalação por ferramenta |

Cada destino de instalação inclui: `tool`, `scope`, `default_path`, `installer_flag`, `current_installer_behavior`, `invocation`### 📦 Resources

| Campo | Descrição |
|:------|:------------|
| `sub_recursos` | Subdiretórios de habilidades (`referências`, `agentes`, `ativos`) |
| `contagem_artefatos` | Contagem total de arquivos no pacote de habilidades |
| `referências_contagem` | Contagem de documentos de referência |
| `contagem_agentes` | Contagem de configuração do agente |
| `contagem_ativos` | Contagem de arquivos de ativos |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

| Campo | Descrição |
|:------|:------------|
| `estratégia` | Estratégia de instalação (por exemplo, `copy-skill-directory`) |
| `instalador_atual` | Comportamento de instalação legível por humanos |
| `receitas` | Receitas de instalação por cliente |### 📊 Classification

| Seção | Campos |
|:--------|:-------|
| 🎯 `maturidade` | `nível_de_habilidade`, `rótulo_de_nível_de_habilidade` |
| 📋 `melhores_práticas` | `pontuação` (0-100) |
| ⭐ `qualidade` | `pontuação` (0-100) |
| 🛡️ `segurança` | `pontuação`, `status` |
| ✅ `validação` | `estado` |### 📝 Content

Sinais derivados: `body_length`, `content_length`, `body_lines`, `word_count`, além de sinalizadores estruturais para exemplos, seções de solução de problemas, etc.### 📁 Artifacts

Array de cada arquivo enviado dentro do diretório de habilidades:```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**Tipos de artefato**: `ponto de entrada` · `referência` · `agente` · `ativo` · `licença` · `suporte`### 📦 Archives

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

| Campo | Descrição |
|:------|:------------|
| `ponto de entrada_sha256` | Hash de SKILL.md |
| `pacote_sha256` | Resumo determinístico da lista ordenada de artefatos |---

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

> 📌 A versão do pacote de repositório e a versão da habilidade são preocupações diferentes. O pacote é atualmente `0.1.3`, enquanto as habilidades individuais carregam suas próprias versões semânticas.---

## ⚠️ Compatibility Notes

| Regra | Justificativa |
|:-----|:----------|
| ✅ Deve permanecer derivável do repo | Não é necessária criação manual de manifesto |
| ✅ Novos campos opcionais podem ser adicionados | Compatibilidade futura |
| ⚠️ Os campos existentes devem permanecer estáveis ​​| Compatibilidade com versões anteriores |
| 🚫 Sem manifestos manuscritos | A derivação em tempo de construção é a fonte da verdade |