# 🖥️ CLI Visual Shell Specification (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-VISUAL-SHELL.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-VISUAL-SHELL.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-VISUAL-SHELL.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-VISUAL-SHELL.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-VISUAL-SHELL.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-VISUAL-SHELL.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-VISUAL-SHELL.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-VISUAL-SHELL.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-VISUAL-SHELL.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-VISUAL-SHELL.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-VISUAL-SHELL.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-VISUAL-SHELL.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-VISUAL-SHELL.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-VISUAL-SHELL.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-VISUAL-SHELL.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-VISUAL-SHELL.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-VISUAL-SHELL.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-VISUAL-SHELL.md)

---


>**Contrat comportemental pour l'interface utilisateur du terminal basé sur Ink exposé par « interface utilisateur omni-compétences ».**---

## 1. Scope

Le shell visuel est une surface de produit guidée au-dessus de la CLI et du moteur d'installation existants.

Il ne remplace pas :

- Utilisation de la CLI basée sur un indicateur expert
- `outils/bin/install.js`
- le flux d'installation du texte guidé
- Comportement d'exécution API, MCP ou A2A

Il définit :

- le comportement des `interface utilisateur omni-compétences`
- le contrat de secours pour `omni-skills ui --text`
- état local et persistance prédéfinie
- aperçus guidés du lancement du service
- répétabilité pour les installations récentes et les exécutions de services---

## 2. Entry Rules

### 2.1 Visual Mode

`omni-skills ui` lance le shell visuel basé sur Ink.

Le shell visuel est la principale expérience de terminal non expert pour :

- installer les flux
- découverte et installation en premier sur le catalogue
- Démarrage MCP
- Démarrage des API
- Démarrage A2A
- médecin et transfert de fumée### 2.2 Text Fallback

`omni-skills ui --text` lance l'interface de secours basée sur readline.

Cela reste utile lorsque :

- un terminal ne peut pas restituer correctement le shell le plus riche
- le comportement en mode brut est contraint
- un texte de secours minimal est préférable### 2.3 Handoff Rule

Le shell visuel ne réimplémente pas directement les environnements d’exécution de service ni les écritures d’installation.

Après aperçu et confirmation, il se termine proprement et confie l'exécution au point d'entrée CLI existant avec les arguments et variables d'environnement équivalents.---

## 3. Home Screen Contract

L'écran d'accueil doit exposer :

- installer des compétences
- trouver et installer
- répéter les installations récentes lorsqu'elles sont présentes
- exécuter les préréglages d'installation enregistrés lorsqu'ils sont présents
- démarrer un service
- répéter les services récents lorsqu'ils sont présents
- exécuter les préréglages de service enregistrés lorsqu'ils sont présents
- docteur
- de la fumée
- sortir

L'écran d'accueil devrait également apparaître :

- disponibilité actuelle du bundle publié
- L'état local compte pour les récents, les préréglages et les favoris---

## 4. Install Flow Contract

Le flux d’installation du shell visuel doit prendre en charge :

- sélection de cibles clients connues
- sélection de chemin personnalisé
- installation complète de la bibliothèque
- installation à une seule compétence
- installation en un seul paquet
- rechercher puis installer
- prévisualiser avant d'écrire
- sauvegarde des préréglages
- compétence préférée ou basculement de pack

L'aperçu doit montrer :

- étiquette cible résolue
- chemin résolu
- installer la portée
- compétence ou pack sélectionné, le cas échéant
- commande CLI équivalente---

## 5. Service Flow Contract

Le shell visuel doit guider le démarrage pour :### 5.1 MCP

- transport : `stdio`, `stream`, `sse`
- mode : `lecture seule` ou `local`
- configuration hôte/port pour les transports réseau
- aperçu explicite des commandes### 5.2 API

- hôte
-port
- profil basique ou durci
- support renforcé ou authentification par clé API
- paramètres de limite de débit renforcés
- activation du journal d'audit
- aperçu explicite des commandes### 5.3 A2A

- hôte
-port
- type de magasin : `memory`, `json`, `sqlite`
- chemin de stockage pour les modes durables
- exécuteur : `inline`, `process`
- mode SQLite activé par la file d'attente
- intervalle d'interrogation et durée du bail pour le mode de bail partagé
- aperçu explicite des commandes---

## 6. Local State Contract

Le shell visuel conserve l'état local uniquement dans :```text
~/.omni-skills/state/ui-state.json
```

L'État comprend actuellement :

- installations récentes
- lancements récents de services
- préréglages d'installation nommés
- préréglages de service nommés
- compétences préférées
- forfaits préférés

La coque doit supporter :

- rejouer les installations récentes
- rejouer les lancements de services récents
- réutilisation des préréglages d'installation nommés
- réutilisation des préréglages de service nommés---

## 7. Compatibility Contract

La coque visuelle est additive.

Ces flux doivent rester valides et stables :

- `npx omni-skills --cursor --skill omni-figma`
- `npx omni-skills --bundle devops`
- `installation npx omni-skills --guided`
- `npx omni-skills trouver figma --tool curseur --install --yes`
- `flux mcp npx omni-compétences --local`
- `API npx omni-skills --port 3333`
- `npx omni-compétences a2a --port 3335`

Le shell visuel ne doit jamais s’imposer dans des chemins de commandes experts explicites.---

## 8. Safety Contract

Le shell visuel doit rendre l'état et l'écriture explicites.

Il doit :

- prévisualiser les installations avant le transfert d'écriture
- prévisualiser les commandes de lancement du service avant l'exécution
- garder les éléments secrets hors des aperçus de commandes en texte clair lorsque cela est possible
- conserver l'état localement uniquement
- préserver le comportement CLI non interactif en dehors du shell visuel