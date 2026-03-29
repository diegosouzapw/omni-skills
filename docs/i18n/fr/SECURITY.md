# 🛡️ Security Policy (Français)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Si vous découvrez un problème de sécurité dans Omni Skills, n'ouvrez pas d'abord un problème public.**

Veuillez signaler via l'un de ces canaux privés :

| Chaîne | Comment |
|:--------|:----|
| 🔒 Avis de sécurité GitHub | [Ouvrir un avis privé](https://github.com/diegosouzapw/omni-skills/security/advisories/new) |
| 📧Contact direct | Contacter directement les responsables |### 📋 Include in Your Report

- 📁 Composant ou chemin concerné
- 🔄 Étapes de reproduction
- ⚠️ Analyse d'impact
- 🧪 Tout matériel de preuve de concept nécessaire pour vérifier le problème

>**⏱️ Nous visons à accuser réception des rapports dans les 48 heures**et à prioriser les correctifs en fonction de leur impact.---

## 🎯 Scope

Cette politique couvre les surfaces d'exécution et de contenu du référentiel :

| Composant | Chemin |
|:--------------|:----------|
| 🖥️ CLI et installateur | `outils/bin/` |
| 📚 Bibliothèques partagées | `outils/lib/` |
| ⚙️ Scripts de construction et de validation | `outils/scripts/` |
| 📦 Artefacts de catalogue générés | `dist/` |
| 🌐 Forfaits API, MCP et A2A | `paquets/` |
| 🧠 Contenu des compétences | `compétences/` — en particulier les commandes shell, l'accès au réseau, les flux d'informations d'identification ou les conseils sensibles à la sécurité |---

## Architecture

Le référentiel s'appuie sur les contrôles de sécurité suivants :### 🧠 Skill-Level Controls

| Contrôle | Descriptif |
|:--------|:---------------|
| 🏷️ Domaine de risque | Les métadonnées des compétences incluent un niveau de « risque » déclaré |
| 📊 Notation | La validation calcule les scores de maturité, de bonnes pratiques, de qualité et de sécurité |
| 🔍 Scanner statique | Inspecte `SKILL.md`, les fichiers packagés et les scripts d'assistance |
| 🦠 Scanners en option | Recherche de hachage ClamAV et VirusTotal (si configuré) |### 🖥️ Runtime Controls

| Contrôle | Descriptif |
|:--------|:---------------|
| 📁 Sécurité des chemins | Les flux d'installation utilisent les contrôles de sécurité du chemin |
| 🔒 La liste autorisée écrit | Les écritures du side-car MCP local sont limitées par une liste autorisée |
| 👁️ Valeurs par défaut du test à sec | Les outils orientés écriture sont exécutés par défaut à moins qu'ils ne soient explicitement désactivés |
| 🔐 Authentification et limites | Authentification du porteur/clé API, authentification de l'exécution de l'administrateur, limitation du débit, listes autorisées CORS/IP |
| 📋 Audit | Journalisation d'audit, mode de maintenance et ID de demande |### 📦 Release Controls

| Contrôle | Descriptif |
|:--------|:---------------|
| ✅ Manifestes de somme de contrôle | Sommes de contrôle SHA-256 pour les archives générées |
| ✍️ Signature | Vérification de signature détachée dans CI avant publication |
| 🧪 Contrôles anti-fumée | Surfaces d'exécution livrées par l'exercice avant la sortie |---

## 🔮 What Is Still Open

> Le principal travail de sécurité restant n'est**pas**le renforcement de la ligne de base. Les postes non soldés sont :

| Zone | Statut |
|:-----|:-------|
| 🏢 Gouvernance d'entreprise | Identité externe, politique de passerelle et intégration WAF au-dessus des contrôles en cours actuels |
| 🔌 Rédacteurs clients MCP | Écrivains plus larges uniquement lorsque les contrats de configuration publics sont suffisamment stables |
| 📊 Affinement du scanner | Un raffinement continu pour que les compétences exceptionnelles restent clairement séparées de celles simplement bien structurées |---

## ⚠️ Risk Levels in Skills

Chaque compétence déclare l'un de ces niveaux de « risque » :

| Niveau de risque | Signification |
|:----------|:--------|
| 🟢 'sûr' | Aucune opération destructrice prévue |
| 🟡 `attention` | Peut modifier des fichiers ou interagir avec des systèmes externes |
| 🔴 `offensif` | Tests de sécurité ou workflows contradictoires nécessitant une autorisation explicite |
| ⛔ `critique` | Opérations à fort impact ou au niveau du système |---

## 📋 Disclosure Notes

Étant donné qu'Omni Skills fournit des assistants exécutables, des outils locaux prenant en charge le système de fichiers et des rédacteurs de configuration spécifiques au client, ces classes de vulnérabilité doivent être traitées comme**haute priorité**même si elles apparaissent « locales uniquement » :

| Catégorie | Exemples |
|:--------|:---------|
| 📁 Parcours de chemin | Échappement du répertoire via les chemins d'installation ou de configuration des compétences |
| 🔗 Sécurité des liens symboliques | Lien symbolique suivant lors de l'installation ou de l'extraction d'archive |
| 🖥️ Command execution | Injection de commandes arbitraires via le contenu des compétences ou des scripts |
| 📦 Archive verification | Bypass of checksum or signature verification |
| 🔓 Contournement d'authentification | Limitation de débit ou contournement d'authentification sur API/MCP |
| 🔌 Contournement de la liste verte | Local sidecar allowlist circumvention |
| 🦠 Évasion du scanner | Classes de faux négatifs dans des scanners statiques ou externes |