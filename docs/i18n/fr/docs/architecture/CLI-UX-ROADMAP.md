# 🧭 CLI UX Roadmap (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CLI-UX-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CLI-UX-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CLI-UX-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CLI-UX-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/CLI-UX-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/CLI-UX-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/CLI-UX-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CLI-UX-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/CLI-UX-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/CLI-UX-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CLI-UX-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CLI-UX-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CLI-UX-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CLI-UX-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CLI-UX-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/CLI-UX-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CLI-UX-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CLI-UX-ROADMAP.md)

---


>**La feuille de route du produit pour faire évoluer Omni Skills d'un installateur de premier plan vers une expérience de terminal guidée pour les utilisateurs experts et non experts.**
> Portée : package npm, expérience d'installation CLI, interface utilisateur du terminal, flux de lancement de service et intégration visuelle.---

## 1. Problem Statement

La base d'exécution actuelle est solide, mais l'expérience d'entrée est toujours optimisée pour les utilisateurs qui comprennent déjà :

- quel client ils souhaitent cibler
- quel sélecteur d'installation ils souhaitent utiliser
- comment traduire les objectifs en `--skill`, `--bundle` ou `find`
- lorsqu'ils ont besoin d'une installation CLI uniquement par rapport aux services MCP, API ou A2A

Aujourd'hui :

- `npx omni-skills` est par défaut Antigravité
- ceci est techniquement valide et rétrocompatible
- mais ce n'est pas idéal pour les nouveaux utilisateurs ou les opérateurs moins techniques

La CLI dispose déjà d'un mode interactif de base, mais elle reste plus proche d'un utilitaire de développement que d'une surface de produit guidée.

Cette feuille de route définit la voie vers une UX publique plus forte sans rompre avec l'interface actuelle basée sur les drapeaux.---

## 1.1 Delivery Status

La feuille de route est désormais largement mise en œuvre dans l’état actuel du référentiel.

Terminé :

- Phase 1 : Sélection guidée du point d'entrée
- Phase 2 : Assistant d'installation guidée
- Phase 3 : Shell du terminal visuel
- Phase 4 : Hub de services visuels
- Phase 5 : Profils enregistrés et répétabilité
- Phase 6 : Durcissement, Tests et Documentation---

## 2. Goals

- Préserver les flux de travail CLI experts actuels
- Rendre le point d'entrée sans argument sûr et compréhensible pour les nouveaux utilisateurs
- Remplacez les valeurs par défaut silencieuses dans des contextes interactifs avec une sélection guidée
- Prise en charge des clients IA connus et des chemins d'installation personnalisés arbitraires
- Transformez l'installation, la découverte et le démarrage du service en un parcours utilisateur cohérent
- Fournir une interface utilisateur de terminal visuel qui ressemble à un produit, pas seulement à un script
- Gardez le moteur d'installation, le catalogue et le runtime de service réutilisables sous l'interface utilisateur---

## 3. Non-Goals

- Remplacement de la CLI actuelle basée sur les indicateurs
- Suppression de l'antigravité en tant que cible par défaut prise en charge
- Expédition d'une interface utilisateur Web comme mode de livraison principal
- Refactoring des protocoles API, MCP ou A2A eux-mêmes dans le cadre de ce travail UX
- Remplacement de la création `SKILL.md` par un panneau d'administration basé sur une base de données---

## 4. Design Principles

### 4.1 Backward Compatibility First

Ces commandes doivent continuer à fonctionner exactement comme elles le font aujourd’hui :

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `npx omni-skills trouver figma --tool curseur --install --yes`
- `flux mcp npx omni-compétences --local`
- `API npx omni-skills --port 3333`
- `npx omni-compétences a2a --port 3335`### 4.2 Guided by Default in TTY, Explicit by Default in Automation

- Session de borne interactive sans argument : expérience guidée ouverte
- Invocation non interactive sans arguments : conserver le comportement par défaut de l'installation actuelle
- Les commandes et les indicateurs explicites l'emportent toujours sur l'inférence de l'interface utilisateur### 4.3 Reuse One Engine Across Modes

Les éléments suivants doivent partager la même logique interne :

- CLI avec drapeau en premier
- CLI guidée en mode texte
- interface utilisateur du terminal visuel

Cela signifie que la couche UX ne doit pas posséder de logique métier. Il doit orchestrer des actions réutilisables.### 4.4 Preview Before Write

Tous les flux guidés qui provoquent des écritures doivent afficher :

- cible résolue
- chemin résolu
- compétences ou bundles sélectionnés
- commande CLI équivalente
- invite de confirmation### 4.5 Visual Does Not Mean Implicit

Même dans l’interface utilisateur la plus riche, le système doit toujours rendre explicites l’état et les actions :

- où va l'installation
- ce qui sera écrit
- quel transport ou port un service utilisera
- si un flux est en lecture seule ou en écriture locale---

## 5. User Personas

### 5.1 Expert CLI User

Besoins :

- commandes rapides
- pas d'invites forcées
- drapeaux stables
- scriptabilité### 5.2 Guided Product User

Besoins :

- des choix clairs
- aucune hypothèse selon laquelle l'antigravité est souhaitée
- prise en charge des installations de chemin personnalisé
- aperçu d'installation compréhensible
- distinction visible entre les actions d'installation et d'exécution du serveur### 5.3 Operator / Platform User

Besoins :

- possibilité de lancer visuellement MCP, API et A2A
- valeurs par défaut saines
- réglage facultatif des ports, du transport, de la persistance, du mode exécuteur, de l'authentification et du mode local---

## 6. Target UX Model

Le produit doit exposer trois couches :### 6.1 Expert Mode

Commandes directes et drapeaux.

Exemples :

- `npx omni-skills --cursor --skill omni-figma`
- `flux mcp npx omni-compétences --local`
- `npx omni-compétences a2a --port 3335`### 6.2 Guided Install Mode

Déclenché lorsque :

- l'utilisateur exécute `npx omni-skills` dans un TTY sans arguments
- l'utilisateur exécute `npx omni-skills install` sans sélecteur concret
- l'utilisateur opte explicitement pour le mode guidé

Le flux d'installation guidée doit parcourir :

1. client cible ou chemin personnalisé
2. Type d'installation
3. sélection de compétences ou de packs
4. aperçu
5.confirmation
6. exécution
7. prochaines étapes### 6.3 Visual Operations Hub

Déclenché par :

- `interface utilisateur omni-compétences npx`

Cela devrait devenir « l’écran d’accueil » pour les utilisateurs et opérateurs non experts.

Actions principales :

- installer des compétences
- découvrir des compétences
- démarrer MCP
- démarrer l'API
- démarrer A2A
- cours docteur
- effectuer des contrôles de fumée---

## 7. Phased Delivery Plan

### Phase 1: Guided Entrypoint Selection

Résultat :

- `npx omni-skills` dans TTY n'assume plus silencieusement l'antigravité
- les utilisateurs sont invités à choisir un client ou un chemin personnalisé

Exigences :

- préserver le comportement d'installation par défaut non TTY
- ajouter un sélecteur de cible
- prise en charge de la capture de chemin personnalisé### Phase 2: Guided Install Wizard

Résultat :

- l'installation devient un flux entièrement guidé

Exigences :

- sélection du mode d'installation :
  - bibliothèque complète
  - une compétence
  - un paquet
  - rechercher puis installer
- installer l'aperçu
- rendu de commande équivalent
- confirmation et exécution### Phase 3: Visual Terminal Shell

Résultat :

- l'interface utilisateur textuelle de base actuelle devient une application de terminal de marque

Exigences :

- mise en page plus riche
- branding et logo du projet
- meilleur stepper et cartes
- navigation pilotée par clavier
- Implémentation du terminal React via Ink### Phase 4: Visual Service Hub

Résultat :

- MCP, API et A2A peuvent être démarrés à partir de l'interface utilisateur visuelle

Exigences :

- flux MCP guidé
- flux API guidé
- flux A2A guidé
- mode visible et aperçus de configuration### Phase 5: Saved Profiles and Repeatability

Résultat :

- Les préréglages d'installation ou de service communs peuvent être réutilisés

Exigences :

- mémoriser les cibles récentes
- préréglages de service enregistrés
- commandes récentes
- packs ou compétences préférés### Phase 6: Hardening, Tests, and Documentation

Résultat :

- l'UX devient une interface publique maintenue, et non une commodité ad hoc

Exigences :

- couverture de fumée
- tests de régression
- mises à jour de la documentation
- guidage de l'opérateur
- examen de la compatibilité des packages---

## 8. Proposed Command Model

### Stable Commands

- `omni-compétences`
- `installation omni-compétences`
- `trouver des compétences omni-compétences`
- `interface utilisateur omni-compétences`
- `mcp omni-compétences`
- `API omni-compétences`
- `omni-compétences a2a`
- `médecin omni-compétences`
- « fumée omni-compétences »### Recommended Behavior

| Invocation | Comportement |
|:----------|:---------|
| `omni-compétences` dans TTY, pas d'arguments | Entrée d'installation guidée |
| `omni-compétences` en non-ATS, pas d'arguments | Installation par défaut actuelle d'Antigravity |
| `installation omni-compétences` dans TTY, pas de sélecteur | Assistant d'installation guidée |
| `installation omni-compétences --guided` | Flux d'installation guidé par la force |
| `interface utilisateur omni-compétences` | Ouvrez le hub des opérations visuelles |
| drapeaux explicites | Exécuter directement sans passer par le flux guidé |---

## 9. Information Architecture for the Guided Install Flow

### Step 1: Choose Destination

Possibilités :

-Claude Code
- Curseur
- CLI Gémeaux
-CLI du Codex
-Kiro
- Antigravité
-OpenCode
- Chemin personnalisé

Sortie :

- cible connue sélectionnée OU chemin du système de fichiers personnalisé### Step 2: Choose Install Type

Possibilités :

- bibliothèque complète
- une compétence publiée
- un paquet
- rechercher puis installer

Sortie :

- installer la portée### Step 3: Resolve Selection

Selon le type d'installation :

- bibliothèque complète : pas de sélecteur supplémentaire
- compétence : lister ou choisir une compétence
- bundle : lister ou choisir un bundle
- recherche : inviter une requête, afficher les compétences et les offres correspondantes### Step 4: Preview

Affichage :

- cible sélectionnée
- chemin résolu
- compétence ou pack sélectionné
- commande CLI équivalente
- si le flux est sélectif ou complet### Step 5: Confirm

L'utilisateur confirme :

- oui → exécuter
- non → abandonner ou revenir en arrière### Step 6: Result

Affichage :

- succès/échec
- chemin de destination
- suggestion d'étape suivante---

## 10. Information Architecture for the Visual Operations Hub

Le hub des opérations doit exposer :### 10.1 Install

- flux d'installation guidé
- recherche de compétences ou de bundles
- chemin personnalisé### 10.2 Discover

- recherche de catalogue
- filtres
- prévisualiser les métadonnées
- installer le transfert### 10.3 MCP

Possibilités :

- transport : stdio, stream, sse
- activation/désactivation du mode local
- hôte
-port### 10.4 API

Possibilités :

- hôte
-port
- authentification facultative
- limite de taux facultative### 10.5 A2A

Possibilités :

- hôte
-port
- type de magasin : mémoire, json, sqlite
- exécuteur : en ligne, processus
- options de location lorsque la file d'attente SQLite est activée### 10.6 Diagnostics

- docteur
- de la fumée---

## 11. Architecture Changes Needed

### 11.1 Extract CLI Action Layer

Les mélanges `tools/bin/cli.js` actuels :

- analyse des commandes
- présentation
- invites interactives
- orchestration des actions
- démarrage de service

La nouvelle structure devrait déplacer la logique réutilisable vers :

- `outils/lib/cli-actions/`
- `outils/lib/install-flow/`
- `outils/lib/service-flow/`
- `outils/lib/ui-models/`### 11.2 Keep Installer Engine Separate

`tools/bin/install.js` doit rester le backend capable d'écrire.

L'interface utilisateur guidée doit appeler le backend du programme d'installation existant plutôt que de dupliquer la logique d'installation.### 11.3 Keep Find/Search Reusable

L'assistant d'installation guidée doit réutiliser la même logique de recherche de catalogue et de CLI déjà utilisée :

- 'trouver'
- installer les aperçus
- résolution du paquet### 11.4 Prepare for Ink Without Forcing It Early

La première livraison peut rester en mode texte.

Mais l’architecture doit conserver une continuité claire afin que le flux de texte puisse ensuite être restitué via Ink.---

## 12. Risks

### 12.1 Breaking Existing Automation

Atténuation :

- ouvrir uniquement l'interface utilisateur guidée automatiquement dans TTY
- conserver les valeurs par défaut actuelles en mode non TTY
- préserver les flux de drapeaux explicites### 12.2 Letting UI Own Business Logic

Atténuation :

- déplacer l'orchestration vers des modules d'action réutilisables
- conserver la logique de démarrage de l'installateur et du service sous la couche d'interface utilisateur### 12.3 Ink Migration Too Early

Atténuation :

- expédier d'abord le flux guidé dans la pile de terminaux Node actuelle
- puis migrer vers Ink une fois la sémantique du flux stable### 12.4 Incomplete Service UX

Atténuation :

- expédier d'abord l'assistant d'installation
- puis lancement du service guidé par couche---

## 13. Acceptance Criteria by Phase

### Phase 1

- `npx omni-skills` dans TTY ne s'installe plus immédiatement
- l'utilisateur peut choisir le client cible ou un chemin personnalisé
- L'invocation non-TTY sans argument fonctionne toujours comme avant### Phase 2

- L'installation guidée prend en charge la bibliothèque complète, les compétences, l'ensemble et la recherche puis l'installation
- l'aperçu est toujours affiché avant l'écriture
- l'équivalent de la commande est affiché### Phase 3

- L'interface utilisateur du terminal de marque existe
- l'interface utilisateur est plus structurée visuellement que les menus simples en ligne
- la navigation est conviviale au clavier### Phase 4

- les utilisateurs peuvent démarrer MCP, API et A2A à partir du hub visuel
- Les principales options d'exécution sont configurables sous forme guidée### Phase 5

- les préférences récentes ou enregistrées sont réutilisables
- les flux répétés nécessitent moins d'invites### Phase 6

- la couverture de fumée reflète les nouveaux points d'entrée UX
- la documentation décrit le mode guidé et le comportement de l'assistant de service---

## 14. Execution Order

Cette feuille de route doit être mise en œuvre dans cet ordre :

1. Sélection guidée du point d'entrée
2. Assistant d'installation guidée
3. Coque du terminal visuel
4. Centre de services visuels
5. Profils enregistrés et répétabilité
6. Durcissement, tests et polissage des documents

Le travail de mise en œuvre doit lire le fichier de tâche concerné avant de commencer chaque tâche afin que le travail CLI reste aligné sur le plan et ne dérive pas.