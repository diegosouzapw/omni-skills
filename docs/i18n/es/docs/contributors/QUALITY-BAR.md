# ✅ Quality Bar (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Requisitos mínimos y recomendaciones para que una habilidad sea aceptada en el repositorio de Omni Skills.**

Para obtener orientación sobre la creación dirigida específicamente a las puntuaciones más altas, consulte [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

Punto de referencia actual para el catálogo publicado:

- 32 habilidades publicadas
- puntuación de calidad media `96,3`
- puntuación media de mejores prácticas `98,7`
- puntuación de seguridad media `95,0`---

## 🔒 Required (Must Pass)

| # | Requisito | Cómo verificar |
|:--|:------------|:--------------|
| 1️⃣ |**Presentación válida**| `herramientas/scripts/validate_skills.py de Python3` |
| 2️⃣ |**Borrar descripción**| Una sola línea debe explicar qué hace la habilidad (más de 10 caracteres) |
| 3️⃣ |**El nombre coincide con el directorio**| El campo `nombre:` coincide exactamente con el nombre de la carpeta |
| 4️⃣ |**Sección de descripción general**| Breve explicación del propósito en el cuerpo de rebajas |
| 5️⃣ |**Sección Cuándo usar**| Al menos 2 escenarios de uso específicos |
| 6️⃣ |**Instrucciones prácticas**| Contenido paso a paso que un agente de IA puede ejecutar |
| 7️⃣ |**Metadatos generados**| El validador emite `skills/<skill>/metadata.json` con éxito |---

## ⭐ Recommended (Improves Score)

| # | Recomendación | Impacto en la puntuación |
|:--|:---------------|:-------------|
| 8️⃣ |**Ejemplos**: al menos un ejemplo concreto con el resultado esperado | 📈 Calidad +10-15 |
| 9️⃣ |**Mejores prácticas**— ✅ Hacer / ❌ No hacer | 📈 Mejores prácticas +5 |
| 🔟 |**Probado con una herramienta**: verificado con al menos un asistente de codificación de IA | 📈 Calidad +5 |
| 1️⃣1️⃣ |**Etiquetas**: etiquetas relevantes de búsqueda para descubrimiento | 📈 Mejores prácticas +10 |
| 1️⃣2️⃣ |**Categoría**— asignada a una categoría canónica | 📈 Mejores prácticas +10 |
| 1️⃣3️⃣ |**Solución de problemas**: orientación concreta sobre "síntomas" y "soluciones" | 📈 Mejores prácticas +5-10 |
| 1️⃣4️⃣ |**Activos de soporte local**: `referencias/`, `scripts/` e idealmente `ejemplos/` vinculados desde la habilidad | 📈 Mejores prácticas +10 |
| 1️⃣5️⃣ |**Clasificación saludable**: madurez L3, calidad 85+, mejores prácticas 90+ | 📈 Nivel general |
| 1️⃣6️⃣ |**No hay hallazgos críticos de seguridad**: el escáner estático pasa limpio | 🛡️ Seguridad 100 |---

## ❌ Reasons for Rejection

| Problema | Por qué |
|:------|:----|
| ❌ Portada faltante o no válida | Rompe el proceso de validación |
| ❌ El nombre no coincide con el directorio | Rompe la generación de catálogos |
| ❌ Descripción vacía o trivialmente breve | Los usuarios no pueden descubrir la habilidad |
| ❌ No hay contenido procesable (solo enlaces o resguardos) | Los agentes no pueden ejecutar nada |
| ❌ Duplicado sin mejora clara | Añade valor, no clones |
| ❌ Contenido ofensivo sin etiqueta `riesgo: ofensivo` | Seguridad y cumplimiento |
| ❌ Hallazgos críticos de seguridad | Exfiltración inmediata, órdenes destructivas, etc. |---

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

| Dimensión | Excelente | Bueno | Necesita trabajo |
|:----------|:----------|:-----|:-----------|
| ⭐**Calidad**| 80+ (platino) | 60-79 (oro/plata) | <60 (bronce/titular) |
| 📋**Mejores prácticas**| 90+ (excelente) | 70-89 (bueno) | <70 (regular/necesita trabajo) |
| 🛡️**Seguridad**| 95+ (endurecido) | 80-94 (seguro) | <80 (se necesita revisión) |
| 🎯**Madurez**| L3 (guiones+pruebas) | L2 (instrucciones) | L1 (solo metadatos) |---

## 🧭 What High Scores Require

Para alcanzar la banda superior de manera consistente, una habilidad debe incluir:

- una descripción sólida del tema central que explique**qué**hace la habilidad y**cuándo**debe usarse
- secciones explícitas para "Cuándo utilizar", "Flujo de trabajo", "Ejemplos", "Mejores prácticas", "Solución de problemas" y "Recursos adicionales"
- material de soporte local en `referencias/`, `scripts/` e idealmente `ejemplos/`, vinculado directamente desde `SKILL.md`
- metadatos del agente en `agents/openai.yaml` cuando la habilidad debe invocarse directamente en los clientes del agente
- una pequeña tabla operativa o un mapa de ejecución equivalente cuando el flujo de trabajo se beneficie de ello
- al menos un ejemplo ejecutable que apunte a un script auxiliar local o un comando repetible
- solución de problemas escrita como "Síntomas" más "Solución", no advertencias genéricas
- suficiente profundidad para calificar como "L3", no solo prosa bien formateada
- mayor profundidad de flujo de trabajo, activos de decisión y diversidad de paquetes de soporte si desea calidad de banda superior
- un paquete de soporte que es lo suficientemente profundo como para sentirse reutilizable, no solo presente para cubrir las casillas de verificación
- al menos 4 familias de soporte significativas o la profundidad equivalente en archivos reutilizables si desea la banda superior de manera consistente