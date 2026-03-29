# Skill PR Workflow (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Il s'agit du flux de référentiel canonique pour les demandes d'extraction qui ajoutent ou mettent à niveau substantiellement une ou plusieurs compétences natives.

Utilisez-le quand :

- ajout d'une nouvelle compétence sous `compétences/`
- approfondir un bundle avec de nouvelles compétences de domaine
- expédition d'une plus grande extension du support-pack
- valider une branche avec l'enhancer privé avant que les responsables ne la fusionnent## Target Outcome

Un PR à compétences natives fortes atterrit avec :

- une compétence native sous `compétences/`
- suffisamment de contenu pour que le validateur public puisse le classer et l'indexer
- réussir la validation publique et les tests
- traitement automatique de l'enhancer pendant le PR
- un PR de suivi `skills_omni/` lorsque des produits dérivés améliorés sont publiés
- apport natif conservé dans sa langue d'origine en cas de besoin
- sortie améliorée organisée réécrite en anglais
- un flux unidirectionnel natif vers organisé qui ne réinjecte pas `skills_omni/` dans l'apport d'amplificateurs natifs## Enhancer Outcome States

L'amplificateur de relations publiques public signale désormais quatre états visibles par le responsable :

- 'terminé'
  Le dérivé amélioré a été généré proprement et est éligible pour la publication complémentaire `skills_omni/`.
- 'dégradé'
  L'amplificateur a terminé, mais il a utilisé un chemin de secours ou généré des avertissements. Un examen par le responsable est toujours attendu avant de traiter le dérivé comme sain.
- 'bloqué'
  L'exécution a été interrompue par des problèmes d'infrastructure ou de validation, tels qu'un échec du contrôle en amont d'OmniRoute hébergé ou un échec de validation de candidat qui devrait empêcher la publication.
- 'échoué'
  L'amplificateur a rencontré une erreur d'exécution inattendue et nécessite une enquête du responsable.## Recommended Branch Shape

Créez une branche ciblée :```bash
git checkout -b feat/<short-skill-theme>
```

Exemples :

- `évaluations d'observabilité des exploits/incidents`
- `feat/devops-skill-pack`
- `feat/security-skill-pack`## Native Intake Rules

La surface d'entrée du public est volontairement permissive.

Minimum:```text
skills/<skill>/
└── SKILL.md
```

Recommandé mais n'est plus obligatoire pour l'apport :```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

La contribution native peut être approximative, incomplète ou en dehors du standard normal du support pack. C'est délibéré. « skills/ » est la surface d'admission native, pas la surface dérivée organisée.

Politique linguistique :

- les apports natifs sous « compétences / » peuvent être rédigés dans n'importe quelle langue
- l'amplificateur conserve l'instantané natif tel que soumis pour provenance
- le dérivé organisé sous `skills_omni/` doit toujours être rédigé en anglais

La barre éditoriale plus stricte s’applique désormais à :

- les métadonnées générées et les contrôles de sécurité
- la revue des rehausseurs privés
- le dérivé organisé de suivi sous `skills_omni/`## Authoring Sequence

1. Créez `skills/<skill>/SKILL.md`.
2. Ajoutez du frontmatter si vous le pouvez, mais le frontmatter manquant ou incomplet ne bloque plus l'apport natif à lui seul.
3. Ajoutez `agents/`, `references/`, `examples/` et `scripts/` lorsque vous les avez déjà.
4. Mettez à jour `data/bundles.json` si la compétence approfondit un bundle existant.
5. Ouvrez le PR. L’automatisation du repo fait désormais le reste.## Validation Sequence

Les contributeurs peuvent exécuter cette séquence exacte avant d'ouvrir le PR :```bash
npm run validate
npm run build
npm test
git diff --check
```

Si le changement affecte également le comportement d'exécution ou d'empaquetage, exécutez également :```bash
npm run smoke
```

## What Happens Automatically During the PR

Lorsqu'un PR s'ouvre ou se synchronise et qu'il ne touche que les fichiers d'acquisition de compétences natifs sous « skills/ » plus facultatif « data/bundles.json », le dépôt public déclenche désormais automatiquement l'amplificateur privé.

Flux automatisé actuel :

1. Le workflow public « Valider les compétences » s'exécute sur le PR et vérifie la validation, la construction, les artefacts générés et les tests.
2. Le workflow public « Améliorer les compétences en relations publiques » démarre en parallèle et traite les compétences natives modifiées une par une en mode « live ».
3. L'amplificateur lit la compétence native à partir de « compétences/ », recherche les meilleures pratiques actuelles et rédige un candidat amélioré révisé dans l'espace de travail privé.
4. L'amplificateur conserve l'instantané d'admission en amont dans sa langue d'origine lorsque cela est nécessaire, mais réécrit la sortie organisée en anglais.
5. Les publications de l'amplificateur reviennent au PR source.
6. L'amplificateur met à jour le commentaire sur l'état du PR après chaque compétence traitée avec les totaux des lots et le dernier état.
7. Une fois terminé, il matérialise le dérivé amélioré dans « skills_omni/ » et ouvre ou met à jour un PR compagnon dans le référentiel public pour les sorties « terminées » et « dégradées » uniquement.
8. Une fois le PR fusionné dans « main », l'interrogeur privé prenant en compte les dépôts retraite toutes les compétences natives modifiées, actualise « workspace/enhanced/skills/<skill>/ » et maintient la base de référence privée améliorée alignée sur la dernière source publique native.
9. Après la fusion, le flux de travail de publication publique remplace la version du package npm, régénère les artefacts du catalogue, publie une version et marque automatiquement la nouvelle version.

Limite de taux :

- l'amplificateur de relations publiques traite actuellement**1 compétence par minute**
- un PR avec 40 nouvelles compétences natives peut donc rester dans la file d'attente des Enhancers pendant environ 40 minutes
- le PR montre ce travail comme une exécution de CI en cours plus un commentaire de progression qui fait progresser compétence par compétence

Le contributeur n'a pas besoin d'exécuter l'amplificateur manuellement.## No-Loop Rule For `skills_omni/`

La surface organisée est intentionnellement à sens unique :

- l'entrée native entre via `compétences/`
- l'amplificateur privé examine cette entrée native
- une sortie organisée est proposée dans `skills_omni/`
- `skills_omni/` n'est plus jamais traité comme un apport natif
- les mises à jour natives ultérieures réintègrent toujours via `skills/` et remplacent la ligne de base améliorée privée après le retraitement

Le référentiel applique désormais cette limite :

- les PR publics directs qui modifient `skills_omni/` sont rejetés
- seuls les PR compagnons créés automatiquement et de la famille de branches `skills-omni/pr-*` y sont acceptés
- les PR mixtes qui tentent de modifier à la fois `skills/` et `skills_omni/` sont rejetés## Automatic Versioning After Merge

Les fusions de compétences avec « main » déclenchent désormais automatiquement le flux de travail de publication du référentiel.

Politique de version actuelle du package :

- le patch s'incrémente de « +1 » pour chaque fusion admissible
- `0.0.1` → `0.0.2` → ... → `0.0.10`
- après `.10`, le paquet passe au mineur suivant et réinitialise le patch
- `0.0.10` → `0.1.0`
- `0.1.10` → `0.2.0`

Chemins de déclenchement de la version actuelle :

- `compétences/**`
- `skills_omni/**`
- `data/bundles.json`

Ce travail de libération automatique :

1. calcule la prochaine version du package à partir de `package.json`
2. cogne `package.json` et `package-lock.json`
3. régénère `metadata.json`, `skills_index.json`, `dist/` et `docs/CATALOG.md`
4. exécute le pipeline de vérification stricte des versions
5. valide le retour de version dans « main »
6. crée une balise Git pour la nouvelle version
7. publie les artefacts npm et GitHub Release

Remarque importante sur le déploiement :

- GitHub enregistre uniquement un nouveau fichier de workflow en tant que workflow de référentiel actif une fois que ce fichier atteint la branche par défaut.
- Jusqu'à ce que « Enhance PR Skills » arrive sur « main », les contributeurs peuvent lire le processus documenté, mais GitHub n'exécutera pas encore ce flux de travail automatiquement sur les PR publics.
- Une fois le flux de travail fusionné dans « principal », le comportement décrit ci-dessus devient le chemin d'admission par défaut pour les futurs PR de compétences natives.## Native vs Enhanced

Ce dépôt comporte désormais deux surfaces distinctes :

- `compétences/`
  Apport natif. Cela préserve la contribution originale telle que soumise.
- `skills_omni/`
  Sortie dérivée omni-améliorée proposée par l'automatisation et maintenue par Omni Skills Team.

Règles d'attribution pour `skills_omni/` :

- le dérivé amélioré devient Omni-maintenu
- le contributeur original et la compétence native en amont restent crédités
- chaque répertoire amélioré conserve un fichier `ATTRIBUTION.md` avec le chemin en amont, le PR, l'auteur et le contexte source
- chaque répertoire amélioré est uniquement une sortie organisée et ne doit pas être soumis à nouveau dans le chemin d'admission de l'amplificateur natif
- chaque répertoire amélioré devrait être une sortie en langue anglaise même si la source native en amont ne l'était pas## Manual Maintainer Commands

L'automatisation couvre l'apport normal de relations publiques, mais les responsables peuvent toujours exécuter l'amplificateur privé manuellement en cas de besoin.

Lot contre un différentiel de branche :```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Bilan d'une seule compétence :```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Résultats d’amélioration attendus par compétence :

- `espace de travail/incoming/original/<run-id>/<skill>/`
- `espace de travail/candidats améliorés/<run-id>/<compétence>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `espace de travail/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

L’organisme de relations publiques doit déclarer :

- quelles compétences ont été ajoutées ou améliorées
- quels bundles ou workflows ils approfondissent
- quelle validation a été effectuée
- si l'amplificateur automatisé a été exécuté
- s'il a ouvert ou mis à jour un PR compagnon `skills_omni/`
- toute note exceptionnelle du responsable concernant l'attribution ou le nettoyage de suivi## Reviewer Checklist

- l'apport natif est légitime et non malveillant
- les métadonnées et les manifestes générés ont été actualisés
- les mises à jour du bundle sont intentionnelles
- la validation publique et les résultats de construction sont verts
- le commentaire sur le statut de l'amplificateur correspond aux compétences réellement modifiées et à l'état du résultat final
- tout PR compagnon `skills_omni/` préserve correctement l'attribution## Example PR Scope

Un bon exemple de PR peut ajouter un ensemble thématique tel que :

- une compétence d'observabilité ou DevOps
- une compétence incident ou sécurité
- une évaluation de l'IA ou une compétence d'incitation

C'est suffisamment grand pour exercer le buteur, l'améliorateur automatique, le flux de publication `skills_omni/`, les offres groupées et le modèle d'attribution sans transformer le PR en une réécriture complète du catalogue.