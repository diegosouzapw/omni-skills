# 🛡️ Security Validation and Distribution (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Análisis de seguridad, generación de archivos, firma opcional y paquete de distribución para cada habilidad publicada.**---

## 📊 Status

| Característica | Estado |
|:--------|:------|
| ✅ Escáner de seguridad estático | Siempre habilitado |
| ✅ Clasificación de metadatos por habilidad | Implementado |
| ✅ Archivos por habilidad (zip/tar.gz) | Implementado |
| ✅ Manifiestos de suma de comprobación SHA-256 | Implementado |
| ✅ Puerta del escáner CI en etiquetas de liberación | Implementado |
| ✅ npm publica flujo de trabajo desde tarball verificado | Implementado |
| ⚙️ Escaneo ClamAV | Enriquecedor opcional |
| ⚙️ Búsqueda de hash de VirusTotal | Enriquecedor opcional |
| ✅ Firma independiente | Implementado |
| ✅ Firma impuesta por CI | Implementado en etiquetas de lanzamiento |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Escanea cada habilidad durante la validación:

| Objetivo | Qué se escanea |
|:-------|:-----------------|
| 📝 `HABILIDAD.md` | Contenido de habilidades principales |
| 📄 Archivos de texto/rebajas | Referencias y documentos empaquetados |
| ⚙️ Guiones | Scripts de automatización empaquetados |

**Familias de reglas:**

| Regla | Ejemplos |
|:-----|:---------|
| 🎭**Inyección inmediata**| Patrones de exfiltración, anulación de instrucciones |
| 💣**Comandos destructivos**| `rm -rf`, `formato`, `del /s` |
| 🔑**Escalada de privilegios**| `sudo`, `chmod 777`, patrones setuid |
| 📂**Rutas sospechosas**| `/etc/shadow`, `~/.ssh`, archivos de credenciales |
| ⚠️**Primitivas arriesgadas**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Requiere `clamscan` en `PATH`
- Analiza archivos empaquetados en busca de malware conocido
- Resultados registrados en metadatos de habilidades---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Solo búsqueda de hash**: no se cargan archivos durante la validación normal
- Los archivos desconocidos siguen siendo sólo locales
- Mantiene la compilación**determinista**e independiente de CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Puerta de liberación estricta:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Este paso lee `skills/*/metadata.json` generado y falla si los escáneres requeridos no se ejecutaron o informaron detecciones.---

## 📊 Security Output Shape

Los datos de seguridad se emiten en los metadatos de cada habilidad:```json
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

> Este bloque se propaga a manifiestos y vistas de catálogo, lo que permite que CLI, API y MCP**filtren y clasifiquen por puntuación de seguridad**.---

## 📦 Archive Outputs

Cada habilidad publicada genera:

| Archivo | Formato |
|:-----|:-------|
| `dist/archives/<habilidad>.zip` | Archivo ZIP |
| `dist/archives/<habilidad>.tar.gz` | Archivo Tarball |
| `dist/archives/<habilidad>.checksums.txt` | Manifiesto de suma de comprobación SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Las etiquetas de lanzamiento de GitHub Actions (`v*`) ahora:

1. verificar que la etiqueta git coincida con `package.json`
2. instalar y actualizar ClamAV
3. decodificar la clave de firma de lanzamiento de los secretos de GitHub
4. ejecute `npm run release:verificar`
5. empaquetar el tarball con `npm pack`
6. publicar ese tarball exacto en npm con procedencia
7. cree una versión de GitHub con notas personalizadas y recursos de verificación adjuntos---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Si no se proporciona ninguna clave pública, la compilación deriva una con `openssl` y la coloca en `dist/signing/`.

Cuando está habilitado, los archivos `.sig` se emiten junto a los archivos y al manifiesto de suma de comprobación.

En CI, las etiquetas de lanzamiento ahora requieren iniciar sesión a través de:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` o `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- opcional `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` o `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Limitación | Estado |
|:-----------|:-------|
| Envío de carga de VirusTotal | Excluido intencionalmente de la validación predeterminada |
| Aplicación de la firma | Se aplica en las etiquetas de lanzamiento; las compilaciones locales aún pueden ejecutarse sin firmar |
| Gobernanza alojada | Se cuenta con autenticación incorporada, tiempo de ejecución de administración, listas permitidas de CORS/IP, modo de mantenimiento y registro de auditoría; las puertas de enlace externas siguen siendo opcionales |