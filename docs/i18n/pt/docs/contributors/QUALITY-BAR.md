# ✅ Quality Bar (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Requisitos mínimos e recomendações para que uma habilidade seja aceita no repositório Omni Skills.**

Para orientação de autoria voltada especificamente para pontuações de banda superior, consulte [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

Referência atual para o catálogo publicado:

- 32 habilidades publicadas
- pontuação média de qualidade `96,3`
- pontuação média de melhores práticas `98,7`
- pontuação média de segurança `95,0`---

## 🔒 Required (Must Pass)

| # | Requisito | Como verificar |
|:--|:--------|:---------|
| 1️⃣ |**Matéria válida**| `ferramentas python3/scripts/validate_skills.py` |
| 2️⃣ |**Descrição clara**| Uma linha deve explicar o que a habilidade faz (mais de 10 caracteres) |
| 3️⃣ |**Nome corresponde ao diretório**| O campo `name:` ​​corresponde exatamente ao nome da pasta |
| 4️⃣ |**Seção de visão geral**| Breve explicação da finalidade no corpo de redução |
| 5️⃣ |**Seção Quando usar**| Pelo menos 2 cenários de utilização específicos |
| 6️⃣ |**Instruções acionáveis**| Conteúdo passo a passo que um agente de IA pode executar |
| 7️⃣ |**Metadados gerados**| Validador emite `skills/<skill>/metadata.json` com sucesso |---

## ⭐ Recommended (Improves Score)

| # | Recomendação | Impacto na pontuação |
|:--|:---------------|:------------|
| 8️⃣ |**Exemplos**— pelo menos um exemplo concreto com resultados esperados | 📈 Qualidade +10-15 |
| 9️⃣ |**Melhores práticas**— ✅ Faça / ❌ Não faça orientação | 📈 Melhores Práticas +5 |
| 🔟 |**Testado com uma ferramenta**— verificado com pelo menos um assistente de codificação de IA | 📈 Qualidade +5 |
| 1️⃣1️⃣ |**Tags**— tags pesquisáveis ​​relevantes para descoberta | 📈 Melhores Práticas +10 |
| 1️⃣2️⃣ |**Categoria**— atribuída a uma categoria canônica | 📈 Melhores Práticas +10 |
| 1️⃣3️⃣ |**Solução de problemas**— orientações concretas sobre “sintomas” e “soluções” | 📈 Melhores Práticas +5-10 |
| 1️⃣4️⃣ |**Recursos de suporte local**— `referências/`, `scripts/` e, idealmente, `exemplos/` vinculados à habilidade | 📈 Melhores Práticas +10 |
| 1️⃣5️⃣ |**Classificação saudável**— maturidade L3, qualidade 85+, melhores práticas 90+ | 📈 Nível geral |
| 1️⃣6️⃣ |**Nenhuma descoberta crítica de segurança**— scanner estático passa limpo | 🛡️ Segurança 100 |---

## ❌ Reasons for Rejection

| Edição | Por que |
|:------|:----|
| ❌ Frontmatter ausente ou inválido | Quebra pipeline de validação |
| ❌ O nome não corresponde ao diretório | Quebra geração de catálogo |
| ❌ Descrição vazia ou trivialmente curta | Os usuários não conseguem descobrir a habilidade |
| ❌ Nenhum conteúdo acionável (apenas links ou esboços) | Os agentes não podem executar nada |
| ❌ Duplicar sem melhoria clara | Agregue valor, não clone |
| ❌ Conteúdo ofensivo sem etiqueta `risco: ofensivo` | Segurança e conformidade |
| ❌ Descobertas críticas de segurança | Exfiltração imediata, comandos destrutivos, etc. |---

## 🧪 Verify Locally

```bash
# Run validation
npm run validate

# Check your scores
cat skills/<your-skill>/metadata.json | jq '.quality, .best_practices, .security'

# Full build + smoke check
npm run build
npm run smoke
```

---

## 📊 Score Reference

| Dimensão | Excelente | Bom | Precisa de trabalho |
|:----------|:----------|:-----|:----------|
| ⭐**Qualidade**| 80+ (platina) | 60-79 (ouro/prata) | <60 (bronze/iniciante) |
| 📋**Práticas recomendadas**| 90+ (excelente) | 70-89 (bom) | <70 (justo/precisa de trabalho) |
| 🛡️**Segurança**| 95+ (endurecido) | 80-94 (seguro) | <80 (revisão necessária) |
| 🎯**Maturidade**| L3 (scripts+testes) | L2 (instruções) | L1 (somente metadados) |---

## 🧭 What High Scores Require

Para alcançar a faixa superior de forma consistente, uma habilidade deve incluir:

- uma descrição forte do frontmatter que explique**o que**a habilidade faz e**quando**ela deve ser usada
- seções explícitas para `Quando usar`, `Fluxo de trabalho`, `Exemplos`, `Práticas recomendadas`, `Solução de problemas` e `Recursos adicionais`
- material de suporte local em `references/`, `scripts/` e, idealmente, `examples/`, vinculados diretamente de `SKILL.md`
- metadados do agente em `agents/openai.yaml` quando a habilidade deve ser invocada diretamente nos clientes do agente
- uma pequena tabela operacional ou mapa de execução equivalente quando o fluxo de trabalho se beneficiar dela
- pelo menos um exemplo executável que aponta para um script auxiliar local ou comando repetível
- solução de problemas escrita como `Sintomas` mais `Solução`, não avisos genéricos
- profundidade suficiente para se qualificar como `L3`, não apenas prosa bem formatada
- maior profundidade de fluxo de trabalho, ativos de decisão e diversidade de pacotes de suporte se você deseja qualidade de banda superior
- um pacote de suporte que é profundo o suficiente para parecer reutilizável, e não apenas presente para cobertura de caixa de seleção
- pelo menos 4 famílias de suporte significativas ou a profundidade equivalente em arquivos reutilizáveis se você quiser a banda superior de forma consistente