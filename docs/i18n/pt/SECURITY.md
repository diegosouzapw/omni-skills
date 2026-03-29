# 🛡️ Security Policy (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Se você descobrir um problema de segurança no Omni Skills, não abra um problema público primeiro.**

Por favor, denuncie através de um destes canais privados:

| Canal | Como |
|:--------|:----|
| 🔒 Aviso de segurança do GitHub | [Abra uma consultoria privada](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧 Contato direto | Entre em contato diretamente com os mantenedores |### 📋 Include in Your Report

- 📁 Componente ou caminho afetado
- 🔄 Etapas de reprodução
- ⚠️ Avaliação de impacto
- 🧪 Qualquer material de prova de conceito necessário para verificar o problema

>**⏱️ Nosso objetivo é receber denúncias em até 48 horas**e priorizar as correções de acordo com o impacto.---

## 🎯 Scope

Esta política abrange o tempo de execução e as superfícies de conteúdo do repositório:

| Componente | Caminho |
|:----------|:-----|
| 🖥️ CLI e instalador | `ferramentas/bin/` |
| 📚 Bibliotecas compartilhadas | `ferramentas/lib/` |
| ⚙️ Scripts de construção e validação | `ferramentas/scripts/` |
| 📦 Artefatos de catálogo gerados | `dist/` |
| 🌐 Pacotes API, MCP e A2A | `pacotes/` |
| 🧠 Conteúdo de habilidade | `skills/` — especialmente comandos shell, acesso à rede, fluxos de credenciais ou orientações sensíveis à segurança |---

## Arquitetura

O repositório depende dos seguintes controles de segurança:### 🧠 Skill-Level Controls

| Controle | Descrição |
|:--------|:-----------|
| 🏷️ Campo de risco | Os metadados de competências incluem um nível de «risco» declarado |
| 📊 Pontuação | A validação calcula pontuações de maturidade, melhores práticas, qualidade e segurança |
| 🔍 Scanner estático | Inspeciona `SKILL.md`, arquivos empacotados e scripts auxiliares |
| 🦠 Scanners opcionais | Pesquisa de hash ClamAV e VirusTotal (quando configurado) |### 🖥️ Runtime Controls

| Controle | Descrição |
|:--------|:-----------|
| 📁 Segurança de caminho | Instalar fluxos usar verificações de segurança de caminho |
| 🔒 Gravações na lista de permissões | Gravações secundárias do MCP local restritas por uma lista de permissões |
| 👁️ Padrões de simulação | As ferramentas orientadas para gravação são padronizadas para simulação, a menos que sejam explicitamente desativadas |
| 🔐 Autenticação e limites | Autenticação de portador/chave de API, autenticação de tempo de execução de administrador, limitação de taxa, listas de permissões CORS/IP |
| 📋 Auditoria | Registro de auditoria, modo de manutenção e IDs de solicitação |### 📦 Release Controls

| Controle | Descrição |
|:--------|:-----------|
| ✅ Manifestos de soma de verificação | Somas de verificação SHA-256 para arquivos gerados |
| ✍️ Assinaturas | Verificação de assinatura separada em CI antes da publicação |
| 🧪 Verificações de fumaça | Exercício enviado superfícies de tempo de execução antes do lançamento |---

## 🔮 What Is Still Open

> O principal trabalho de segurança restante**não**é o fortalecimento da linha de base. As partidas em aberto são:

| Área | Estado |
|:-----|:-------|
| 🏢 Governança empresarial | Identidade externa, política de gateway e integração WAF acima dos controles atuais em processo |
| 🔌 Escritores de clientes MCP | Escritores mais amplos somente quando os contratos de configuração pública são estáveis ​​o suficiente |
| 📊 Refinamento do scanner | Refinamento contínuo para que competências excepcionais fiquem claramente separadas das meramente bem estruturadas |---

## ⚠️ Risk Levels in Skills

Cada habilidade declara um destes níveis de “risco”:

| Nível de risco | Significado |
|:-----------|:--------|
| 🟢 `seguro` | Não são esperadas operações destrutivas |
| 🟡 `cuidado` | Pode modificar arquivos ou interagir com sistemas externos |
| 🔴 `ofensivo` | Testes de segurança ou fluxos de trabalho adversários que exigem autorização explícita |
| ⛔ `crítico` | Operações de alto impacto ou em nível de sistema |---

## 📋 Disclosure Notes

Como o Omni Skills fornece auxiliares executáveis, ferramentas locais com reconhecimento de sistema de arquivos e gravadores de configuração específicos do cliente, essas classes de vulnerabilidade devem ser tratadas como**alta prioridade**mesmo que pareçam "somente locais":

| Categoria | Exemplos |
|:--------|:---------|
| 📁 Percurso de caminho | Escape de diretório por meio de instalação de habilidade ou caminhos de configuração |
| 🔗 Segurança do link simbólico | Link simbólico seguinte durante instalação ou extração de arquivo |
| 🖥️ Execução de comandos | Injeção arbitrária de comandos por meio de conteúdo de habilidade ou scripts |
| 📦 Verificação de arquivo | Ignorar soma de verificação ou verificação de assinatura |
| 🔓 Desvio de autenticação | Limitação de taxa ou desvio de autenticação em API/MCP |
| 🔌 Ignorar lista de permissões | Evasão da lista de permissões de sidecar local |
| 🦠 Evasão do scanner | Classes de falso-negativo em scanners estáticos ou externos |