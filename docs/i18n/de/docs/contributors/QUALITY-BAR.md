# ✅ Quality Bar (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Mindestanforderungen und Empfehlungen für die Aufnahme einer Fertigkeit in das Omni Skills-Repository.**

Anleitungen zum Verfassen, die speziell auf Spitzenwerte abzielen, finden Sie im [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

Aktueller Benchmark für den veröffentlichten Katalog:

- 32 veröffentlichte Fähigkeiten
- durchschnittlicher Qualitätsfaktor „96,3“.
- durchschnittliche Best-Practices-Bewertung „98,7“.
- durchschnittliche Sicherheitsbewertung „95,0“.---

## 🔒 Required (Must Pass)

| # | Anforderung | So überprüfen Sie |
|:--|:------------|:--------------|
| 1️⃣ |**Gültige Titelangabe**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Klare Beschreibung**| Einzeiler muss erklären, was der Skill bewirkt (10+ Zeichen) |
| 3️⃣ |**Name stimmt mit Verzeichnis überein**| Das Feld „name:“ entspricht genau dem Ordnernamen |
| 4️⃣ |**Übersichtsbereich**| Kurze Erläuterung des Zwecks im Abschriftentext |
| 5️⃣ |**Abschnitt „Wann zu verwenden“**| Mindestens 2 spezifische Nutzungsszenarien |
| 6️⃣ |**Umsetzbare Anweisungen**| Schritt-für-Schritt-Inhalte, die ein KI-Agent ausführen kann |
| 7️⃣ |**Generierte Metadaten**| Validator gibt „skills/<skill>/metadata.json“ erfolgreich aus |---

## ⭐ Recommended (Improves Score)

| # | Empfehlung | Score Impact |
|:--|:---------------|:-------------|
| 8️⃣ |**Beispiele**– mindestens ein konkretes Beispiel mit erwarteter Ausgabe | 📈 Qualität +10-15 |
| 9️⃣ |**Best Practices**– ✅ Do/❌ Don't-Anleitung | 📈 Best Practices +5 |
| 🔟 |**Getestet mit einem Tool**– verifiziert mit mindestens einem KI-Codierungsassistenten | 📈 Qualität +5 |
| 1️⃣1️⃣ |**Tags**– relevante durchsuchbare Tags zur Entdeckung | 📈 Best Practices +10 |
| 1️⃣2️⃣ |**Kategorie**– einer kanonischen Kategorie zugeordnet | 📈 Best Practices +10 |
| 1️⃣3️⃣ |**Fehlerbehebung**– konkrete „Symptome“ und „Lösungshinweise“ | 📈 Best Practices +5-10 |
| 1️⃣4️⃣ |**Lokale Supportressourcen**– „references/“, „scripts/“ und idealerweise „examples/“, verlinkt über den Skill | 📈 Best Practices +10 |
| 1️⃣5️⃣ |**Gesunde Klassifizierung**– Reifegrad L3, Qualität 85+, Best Practices 90+ | 📈 Gesamtstufe |
| 1️⃣6️⃣ |**Keine kritischen Sicherheitsbefunde**– statischer Scanner besteht sauber | 🛡️ Sicherheit 100 |---

## ❌ Reasons for Rejection

| Problem | Warum |
|:------|:----|
| ❌ Fehlende oder ungültige Titelangabe | Unterbricht die Validierungspipeline |
| ❌ Name stimmt nicht mit Verzeichnis überein | Unterbricht die Kataloggenerierung |
| ❌ Leere oder trivial kurze Beschreibung | Benutzer können den Skill | nicht entdecken
| ❌ Keine umsetzbaren Inhalte (nur Links oder Stubs) | Agenten können nichts ausführen |
| ❌ Duplizieren ohne deutliche Verbesserung | Mehrwert schaffen, nicht klonen |
| ❌ Anstößige Inhalte ohne „Risiko: anstößig“-Tag | Sicherheit und Compliance |
| ❌ Kritische Sicherheitsergebnisse | Sofortige Exfiltration, zerstörerische Befehle usw. |---

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

| Dimension | Ausgezeichnet | Gut | Braucht Arbeit |
|:----------|:----------|:-----|:-----------|
| ⭐**Qualität**| 80+ (Platin) | 60-79 (Gold/Silber) | <60 (Bronze/Starter) |
| 📋**Best Practices**| 90+ (ausgezeichnet) | 70-89 (gut) | <70 (fair/muss bearbeitet werden) |
| 🛡️**Sicherheit**| 95+ (gehärtet) | 80-94 (sicher) | <80 (Überprüfung erforderlich) |
| 🎯**Reife**| L3 (Skripte+Tests) | L2 (Anleitung) | L1 (nur Metadaten) |---

## 🧭 What High Scores Require

Um dauerhaft das Top-Band zu erreichen, sollte eine Fertigkeit Folgendes umfassen:

- eine aussagekräftige Beschreibung, die erklärt,**was**die Fertigkeit bewirkt und**wann**sie verwendet werden sollte
- explizite Abschnitte für „Verwendungszweck“, „Workflow“, „Beispiele“, „Best Practices“, „Fehlerbehebung“ und „Zusätzliche Ressourcen“.
- Lokales Supportmaterial unter „references/“, „scripts/“ und idealerweise „examples/“, direkt verlinkt von „SKILL.md“.
- Agent-Metadaten unter „agents/openai.yaml“, wenn der Skill direkt in Agent-Clients aufgerufen werden soll
- eine kleine Betriebstabelle oder eine gleichwertige Ausführungskarte, wenn der Arbeitsablauf davon profitiert
– mindestens ein ausführbares Beispiel, das auf ein lokales Hilfsskript oder einen wiederholbaren Befehl verweist
- Fehlerbehebung in Form von „Symptomen“ plus „Lösung“, nicht als allgemeine Warnungen
- Genug Tiefe, um als „L3“ zu gelten, nicht nur als gut formatierte Prosa
- Stärkere Workflow-Tiefe, Entscheidungsressourcen und Support-Pack-Vielfalt, wenn Sie erstklassige Qualität wünschen
- ein Support-Paket, das tief genug ist, um wiederverwendbar zu sein, und nicht nur zur Abdeckung von Kontrollkästchen vorhanden ist
- mindestens 4 aussagekräftige Stützfamilien oder die entsprechende Tiefe in wiederverwendbaren Dateien, wenn Sie das obere Band konsistent wünschen