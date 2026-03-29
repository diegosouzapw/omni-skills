# 🛡️ Security Validation and Distribution (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Analyse de sécurité, génération d'archives, signature facultative et package de distribution pour chaque compétence publiée.**---

## 📊 Status

| Fonctionnalité | État |
|:--------|:------|
| ✅ Scanner de sécurité statique | Toujours activé |
| ✅ Classification des métadonnées par compétence | Mis en œuvre |
| ✅ Archives par compétence (zip/tar.gz) | Mis en œuvre |
| ✅ Manifestes de somme de contrôle SHA-256 | Mis en œuvre |
| ✅ Porte du scanner CI sur les étiquettes de libération | Mis en œuvre |
| ✅ Workflow de publication npm à partir d'une archive tar vérifiée | Mis en œuvre |
| ⚙️ Numérisation ClamAV | Enrichisseur en option |
| ⚙️ Recherche de hachage VirusTotal | Enrichisseur en option |
| ✅ Signature détachée | Mis en œuvre |
| ✅ Signature renforcée par CI | Implémenté sur les balises de version |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Scanne chaque compétence lors de la validation :

| Cible | Ce qui est analysé |
|:-------|:-----------------|
| 📝 `SKILL.md` | Contenu de la compétence principale |
| 📄 Fichiers Markdown/texte | Références et documents packagés |
| ⚙️ Scénarios | Scripts d'automatisation packagés |

**Familles de règles :**

| Règle | Exemples |
|:-----|:---------|
| 🎭**Injection rapide**| Modèles d'exfiltration, remplacements d'instructions |
| 💣**Commandes destructrices**| `rm -rf`, `format`, `del /s` |
| 🔑**Augmentation de privilèges**| `sudo`, `chmod 777`, modèles setuid |
| 📂**Chemins suspects**| `/etc/shadow`, `~/.ssh`, fichiers d'informations d'identification |
| ⚠️**Primitives risquées**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Nécessite `clamscan` dans `PATH`
- Analyse les fichiers packagés à la recherche de logiciels malveillants connus
- Résultats enregistrés dans les métadonnées des compétences---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Recherche de hachage uniquement**— aucun téléchargement de fichier pendant la validation normale
- Les fichiers inconnus restent locaux uniquement
- Maintient la construction**déterministe**et indépendante du CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Porte de libération stricte :```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Cette étape lit `skills/*/metadata.json` généré et échoue si les scanners requis ne se sont pas exécutés ou n'ont pas signalé de détections.---

## 📊 Security Output Shape

Les données de sécurité sont émises dans les métadonnées de chaque compétence :```json
{
  "security": {
    "score": 100,
    "tier": "hardened",
    "status": "passed",
    "findings_count": 0,
    "findings": [],
    "signals": {
      "scanned_files": 3,
      "script_files": 0,
      "binary_like_files": 0
    },
    "scanners": {
      "static": { "enabled": true, "status": "completed" },
      "clamav": { "enabled": false, "status": "disabled" },
      "virustotal": { "enabled": false, "status": "disabled" }
    }
  }
}
```

> Ce bloc est propagé dans les manifestes et les vues de catalogue, permettant à CLI, API et MCP de**filtrer et classer par score de sécurité**.---

## 📦 Archive Outputs

Chaque compétence publiée génère :

| Fichier | Formater |
|:-----|:-------|
| `dist/archives/<compétence>.zip` | Archives ZIP |
| `dist/archives/<compétence>.tar.gz` | Archives tarball |
| `dist/archives/<compétence>.checksums.txt` | Manifeste de somme de contrôle SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Balises de version GitHub Actions (`v*`) maintenant :

1. vérifiez que la balise git correspond à `package.json`
2. installer et actualiser ClamAV
3. décoder la clé de signature de version à partir des secrets GitHub
4. exécutez `npm run release:verify`
5. emballez l'archive tar avec `npm pack`
6. publier cette archive tar exacte sur npm avec sa provenance
7. créez une version GitHub avec des notes personnalisées et des éléments de vérification joints---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Si aucune clé publique n'est fournie, la construction en dérive une avec `openssl` et la place dans `dist/signing/`.

Lorsqu'ils sont activés, les fichiers « .sig » sont émis à côté des archives et du manifeste de somme de contrôle.

Dans CI, les balises de version nécessitent désormais la signature via :

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` ou `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- facultatif `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` ou `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Limitation | Statut |
|:----------|:-------|
| Soumission de téléchargement VirusTotal | Intentionnellement exclu de la validation par défaut |
| Exécution de la signature | Appliqué sur les balises de version ; les builds locales peuvent toujours s'exécuter sans signature |
| Gouvernance hébergée | L'authentification intégrée, le runtime d'administration, les listes d'autorisation CORS/IP, le mode maintenance et la journalisation d'audit sont en place ; les passerelles externes restent facultatives |