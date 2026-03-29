# 🧩 CLI Guided Installer Specification (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**Contrat comportemental pour l'expérience d'installation guidée dans la CLI Omni Skills.**---

## 1. Scope

Cette spécification définit le comportement d'installation guidée qui s'appuie sur le backend du programme d'installation existant.

Il ne remplace pas :

- `outils/bin/install.js`
- flux de drapeaux experts actuels
- manifestes d'installation sélectifs

Il définit :

- comment accéder au mode guidé
- comment les destinations sont choisies
- comment la portée de l'installation est choisie
- quelles informations d'aperçu doivent être affichées
- comment fonctionnent la confirmation et l'exécution---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

La CLI doit passer en mode d'installation guidée lorsque :

- l'utilisateur exécute "omni-skills" sans arguments dans un TTY
- l'utilisateur exécute une "installation omni-compétences" sans sélecteur dans un TTY### 2.2 Forced Guided Entry

La CLI doit également prendre en charge le mode guidé explicite via une option dédiée, telle que :

- `installation omni-compétences --guidée`

Ce mode devrait fonctionner même lorsque l'entrée est canalisée et non attachée à un TTY, tant qu'une entrée standard est disponible.### 2.3 Non-Interactive Safety Rule

Lorsqu'il est invoqué sans TTY et sans mode guidé explicitement demandé :

- conserver le comportement par défaut actuel
- ne bloque pas l'attente des invites---

## 3. Destination Model

L'installation guidée doit prendre en charge deux classes de destination :### 3.1 Known Client Target

Chaque cible connue se résout à :

- étiquette lisible par l'homme
- identifiant de l'outil interne
- installer le drapeau
- chemin résolu

Cibles connues requises :

-Claude Code
- Curseur
- CLI Gémeaux
-CLI du Codex
-Kiro
- Antigravité
-OpenCode### 3.2 Custom Path Target

Le mode chemin personnalisé doit :

- demander un chemin
- résoudre `~`
- normaliser au chemin absolu
- afficher le chemin résolu en aperçu---

## 4. Install Scope Model

L'installation guidée doit prendre en charge :### 4.1 Full Library

Équivalent à l'installation actuelle sans « --skill » ou « --bundle ».### 4.2 Single Skill

Permet à l'utilisateur de sélectionner une compétence publiée.### 4.3 Single Bundle

Permet à l'utilisateur de sélectionner un ensemble organisé et de résoudre les membres publiés.### 4.4 Search Then Install

Permet à l'utilisateur :

- saisissez une requête de recherche
- inspecter les résultats
- choisissez une compétence ou un pack
- continuer avec l'aperçu de l'installation---

## 5. Preview Contract

Avant l'exécution, l'installation guidée doit afficher :

- étiquette de destination
- chemin de destination
- installer la portée
- compétence ou pack sélectionné, le cas échéant
- commande CLI équivalente

Facultatif mais recommandé :

- résumé des métadonnées des compétences sélectionnées
- résumé de la disponibilité du forfait---

## 6. Execution Contract

Après validation :

- Délégués d'installation guidée vers le backend de l'installateur existant
- il ne réimplémente pas le fichier qui écrit lui-même

L’aperçu de la commande et les arguments du programme d’installation délégué réel doivent correspondre exactement.---

## 7. Result Contract

Après une exécution réussie, le résultat de l'installation guidée devrait afficher :

- indicateur de réussite
- chemin de destination finale
- commande qui a été exécutée
- prochaine action recommandée

Exemple d'actions suivantes :

- utiliser la compétence chez le client sélectionné
- lancez "docteur"
- exécutez `mcp stream --local`---

## 8. Compatibility Contract

Les éléments suivants restent valables et inchangés :

- `omni-compétences --cursor --skill omni-figma`
- `omni-compétences --bundle full-stack`
- `omni-skills --path ./skills`
- `omni-compétences trouver figma --tool curseur --install --yes`

Le mode guidé ajoute du comportement. Cela ne supprime pas le comportement existant.