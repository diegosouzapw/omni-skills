# ✅ Quality Bar (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Exigences minimales et recommandations pour qu'une compétence soit acceptée dans le référentiel Omni Skills.**

Pour obtenir des conseils de création destinés spécifiquement aux meilleurs scores, consultez le [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

Benchmark actuel pour le catalogue publié :

- 32 compétences publiées
- score de qualité moyen « 96,3 »
- score moyen des meilleures pratiques « 98,7 »
- score de sécurité moyen « 95,0 »---

## 🔒 Required (Must Pass)

| # | Exigence | Comment vérifier |
|:--|:------------|:--------------|
| 1️⃣ |**Présentation valide**| `outils python3/scripts/validate_skills.py` |
| 2️⃣ |**Description claire**| Une seule ligne doit expliquer ce que fait la compétence (10+ caractères) |
| 3️⃣ |**Le nom correspond au répertoire**| Le champ `name:` ​​correspond exactement au nom du dossier |
| 4️⃣ |**Section Aperçu**| Brève explication de l'objectif dans le corps de la démarque |
| 5️⃣ |**Quand utiliser la section**| Au moins 2 scénarios d'utilisation spécifiques |
| 6️⃣ |**Instructions exploitables**| Contenu étape par étape qu'un agent IA peut exécuter |
| 7️⃣ |**Métadonnées générées**| Le validateur émet `skills/<skill>/metadata.json` avec succès |---

## ⭐ Recommended (Improves Score)

| # | Recommandation | Impact du score |
|:--|:--------------|:-------------|
| 8️⃣ |**Exemples**— au moins un exemple concret avec le résultat attendu | 📈 Qualité +10-15 |
| 9️⃣ |**Bonnes pratiques**— ✅ Faire / ❌ Ne pas guider | 📈 Meilleures pratiques +5 |
| 🔟 |**Testé avec un outil**— vérifié avec au moins un assistant de codage IA | 📈 Qualité +5 |
| 1️⃣1️⃣ |**Tags**— balises consultables pertinentes pour la découverte | 📈 Meilleures pratiques +10 |
| 1️⃣2️⃣ |**Catégorie**— attribuée à une catégorie canonique | 📈 Meilleures pratiques +10 |
| 1️⃣3️⃣ |**Dépannage**— conseils concrets sur les « Symptômes » et la « Solution » | 📈 Meilleures pratiques +5-10 |
| 1️⃣4️⃣ |**Actifs de support local**— `références/`, `scripts/` et idéalement `exemples/` liés à la compétence | 📈 Meilleures pratiques +10 |
| 1️⃣5️⃣ |**Classification saine**— maturité L3, qualité 85+, bonnes pratiques 90+ | 📈 Niveau global |
| 1️⃣6️⃣ |**Aucun résultat de sécurité critique**— le scanner statique passe au nettoyage | 🛡️ Sécurité 100 |---

## ❌ Reasons for Rejection

| Problème | Pourquoi |
|:------|:----|
| ❌ Frontmatter manquant ou invalide | Rompt le pipeline de validation |
| ❌ Le nom ne correspond pas au répertoire | Génération de catalogue de pauses |
| ❌ Description vide ou trivialement courte | Les utilisateurs ne peuvent pas découvrir la compétence |
| ❌ Aucun contenu exploitable (juste des liens ou des talons) | Les agents ne peuvent rien exécuter |
| ❌ Doublon sans nette amélioration | Ajoutez de la valeur, ne clonez pas |
| ❌ Contenu offensant sans balise `risque : offensant` | Sécurité et conformité |
| ❌ Résultats critiques en matière de sécurité | Exfiltration rapide, commandes destructrices, etc. |---

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

| Dimensions | Excellent | Bon | Besoin de travail |
|:----------|:----------|:-----|:-----------|
| ⭐**Qualité**| 80+ (platine) | 60-79 (or/argent) | <60 (bronze/démarreur) |
| 📋**Meilleures pratiques**| 90+ (excellent) | 70-89 (bon) | <70 (passable/besoin de travail) |
| 🛡️**Sécurité**| 95+ (durci) | 80-94 (sécurisé) | <80 (révision nécessaire) |
| 🎯**Maturité**| L3 (scripts+tests) | L2 (mode d'emploi) | L1 (métadonnées uniquement) |---

## 🧭 What High Scores Require

Pour atteindre le groupe supérieur de manière cohérente, une compétence doit inclure :

- une description claire qui explique à la fois**ce**que fait la compétence et**quand**elle doit être utilisée
- sections explicites pour « Quand utiliser », « Flux de travail », « Exemples », « Meilleures pratiques », « Dépannage » et « Ressources supplémentaires »
- du matériel de support local sous « références/ », « scripts/ » et idéalement « exemples/ », lié directement à partir de « SKILL.md »
- métadonnées de l'agent sous `agents/openai.yaml` lorsque la compétence est destinée à être invoquée directement dans les clients de l'agent
- une petite table opérationnelle ou map d'exécution équivalente lorsque le workflow en bénéficie
- au moins un exemple exécutable qui pointe vers un script d'assistance local ou une commande répétable
- dépannage écrit sous la forme « Symptômes » plus « Solution », pas d'avertissements génériques
- suffisamment de profondeur pour être qualifié de « L3 », pas seulement une prose bien formatée
- une plus grande profondeur de flux de travail, des actifs de décision et une diversité de packs de support si vous souhaitez une qualité de bande supérieure
- un pack de support suffisamment profond pour être réutilisable, et pas seulement présent pour la couverture des cases à cocher
- au moins 4 familles de supports significatives ou la profondeur équivalente dans les fichiers réutilisables si vous souhaitez que la bande supérieure soit cohérente