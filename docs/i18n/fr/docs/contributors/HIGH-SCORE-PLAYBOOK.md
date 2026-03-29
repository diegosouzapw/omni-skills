# 🏆 High-Score Skill Playbook (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**De quoi un `SKILL.md` Omni Skills a-t-il besoin dans la pratique pour atteindre des scores élevés de maturité, de bonnes pratiques, de qualité et de sécurité.**---

## 🎯 Purpose

Ce guide explique comment le classificateur du référentiel récompense réellement une compétence.

Utilisez-le lorsque vous souhaitez :

- créez une nouvelle compétence qui atterrit dans les groupes les plus performants
- améliorer une compétence existante qui est bloquée en « bon » ou faible « excellent »
- comprendre pourquoi une compétence avec un formatage décent ne constitue toujours pas un atout opérationnel exceptionnel

Il s'agit du compagnon destiné aux contributeurs pour :

- [Barre de qualité](QUALITY-BAR.md)
- [Compétence Anatomie](SKILL-ANATOMY.md)
- [Classification des compétences](../specs/SKILL-CLASSIFICATION.md)

Benchmark actuel pour le catalogue live :

- 32 compétences publiées
- spread de qualité actuel : `94, 95, 96, 97, 100`
- répartition des meilleures pratiques actuelles : `98, 99, 100`
- haut de gamme actuel : "omni-figma" avec une qualité "100/100" et les meilleures pratiques "100/100"---

## 🧱 What High Scores Really Mean

Le classificateur ne récompense**pas**à lui seul une jolie démarque.

Les compétences à score élevé sont des compétences qui sont :

-**découvrable** : la description indique clairement ce que fait la compétence et quand l'utiliser
-**opérationnel** : la compétence comprend des scripts locaux, des références et des exemples exécutables
-**diagnostic** : il aide l'agent à récupérer lorsque les choses tournent mal
-**spécifique** : il se concentre sur un flux de travail et non sur des conseils généraux
-**sûr** : il évite les modèles à risque et fournit une sortie de scanner propre

Dans la pratique, les compétences les plus solides se comportent plus comme un**petit kit de workflow emballé**que comme une simple note de démarque.---

## 📋 Score Targets

Utilisez ces cibles lors de la création :

| Dimensions | Cible forte | Cible exceptionnelle |
|:--------------|:--------------|:-------------------|
| 🎯 Maturité | 'L3' | `L3` avec plusieurs ressources de support |
| 📋 Meilleures pratiques | « 90+ » | `96+` |
| ⭐ Qualité | `85+` | « 90+ » |
| 🛡️ Sécurité | '95+' | `95+` avec zéro résultat |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Votre contenu doit rendre la compétence facile à classer et à découvrir :

- `name` correspond exactement au répertoire
- `description` explique à la fois**quoi**et**quand**
- `category`, `tags`, `tools`, `complexity`, `risk`, `source`, `author` et les dates sont tous présents

Forme de bonne description :```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Forme de description incorrecte :```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

Les compétences les plus fortes incluent systématiquement ces sections :

- `## Aperçu`
- `## Quand utiliser cette compétence`
- `## Flux de travail`
- `## Exemples`
- `## Meilleures pratiques`
- `## Dépannage`
- `## Ressources supplémentaires`

S’il en manque un, le score peut toujours être bon, mais il devient plus difficile de paraître exceptionnel.---

### 3. Runnable Local Support

Les compétences les plus performantes comprennent généralement :

- `références/checklist.md`
- un ou plusieurs scripts d'assistance dans `scripts/`
- au moins un exemple concret dans `examples/`
- `agents/openai.yaml` lorsque la compétence est destinée à l'invocation directe d'un agent
- des liens directs de `SKILL.md` vers ces fichiers locaux

Cela est important car le classificateur traite une compétence avec du**matériel de support groupé**comme plus exploitable qu'une compétence qui pointe uniquement vers l'extérieur.

Minimum recommandé :```text
skills/<skill>/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── examples/
│   └── example.md
├── references/
│   └── checklist.md
└── scripts/
    └── render_<artifact>.py
```

---

### 4. Examples That Actually Help

Les exemples les plus performants sont :

- le béton
- tapé avec une vraie clôture telle que `bash` ou `python`
- lié à un script local ou à une commande répétable
- représentatif du flux de travail

Bon :```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Faible:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Le marqueur récompense le dépannage qui aide un agent à récupérer, et pas seulement à reconnaître un problème.

Format préféré :```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

C’est plus fort qu’une vague note comme :```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Le classificateur fait désormais la distinction entre une compétence simplement complète et une compétence véritablement profonde.

Signaux qui aident :

- plusieurs exemples concrets
- plusieurs cas de dépannage
- conseils en matière de compétences connexes
- des packs de référence plus riches
- une section `## Workflow` visible avec des étapes numérotées que le marqueur peut compter directement
- au moins un tableau opérationnel ou une carte d'exécution où il clarifie le flux de travail
- plus d'un répertoire de support ou type d'actif
- sections de flux de travail avec suffisamment d'étapes pour guider l'exécution
- des actifs de décision tels que des listes de contrôle, des rubriques, des matrices, des paquets ou des playbooks
- une plus grande diversité de packs de support à travers `references/`, `scripts/`, `agents/`, `examples/` ou `assets/`
- suffisamment de fichiers de support réutilisables pour ressembler à un kit, pas une seule aide nichée à côté de la démarque
- plus d'un seul fichier d'aide lorsque le flux de travail est suffisamment complexe pour justifier un pack de support
- suffisamment de profondeur de corps pour couvrir les compromis et les modes de défaillance
- un guidage opérationnel plus dense, car le correcteur distingue désormais un formatage soigné d'une profondeur de workflow véritablement réutilisable

Signaux qui n'aident**pas**beaucoup :

- répéter la même instruction avec des mots différents
- texte de remplissage générique
- ajouter des titres sans ajouter de substance en dessous---

## 🧪 Fast Checklist Before You Commit

Utilisez cette liste de contrôle avant d'exécuter la validation :

- la description indique**quoi**et**quand**
- la compétence est concentrée sur un flux de travail
- `## Workflow` existe et contient des étapes numérotées ou à puces
- il existe au moins un exemple exécutable
- `références/`, `scripts/` et idéalement `exemples/` sont liés à partir de `SKILL.md`
- `agents/openai.yaml` existe lorsque la compétence est destinée à être invoquée directement dans les clients agents
- le dépannage utilise « Symptômes » et « Solution »
- la compétence peut raisonnablement être classée comme « L3 »
- aucune commande risquée ou chemin suspect n'est présent

Puis exécutez :```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- la description est correcte mais trop générique
- la démarque comporte des sections mais pas de profondeur opérationnelle
- les exemples ne pointent pas vers les aides locales
- un dépannage existe mais n'est pas un diagnostic
- il y a trop peu de balises ou d'identifiants d'outils
- la compétence est sûre et propre mais encore trop superficielle pour être considérée comme exceptionnelle---

## 🧭 Practical Rule

Si votre compétence ressemble à :

- un**modèle**: ça peut passer
- un**guide** : il peut marquer de bons résultats
- un**package workflow** : il a beaucoup plus de chances d'obtenir un score au sommet