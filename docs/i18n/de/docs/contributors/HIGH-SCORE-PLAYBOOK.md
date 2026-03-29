# 🏆 High-Score Skill Playbook (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Was ein Omni Skills „SKILL.md“ in der Praxis braucht, um eine hohe Reife, Best Practices, Qualität und Sicherheitswerte zu erreichen.**---

## 🎯 Purpose

In diesem Leitfaden wird erläutert, wie der Klassifikator des Repositorys eine Fertigkeit tatsächlich belohnt.

Verwenden Sie es, wenn Sie Folgendes möchten:

- Erstellen Sie eine neue Fertigkeit, die in den Bestenlisten landet
- Verbessern Sie eine vorhandene Fähigkeit, die bei „gut“ oder niedrig „ausgezeichnet“ feststeckt
- verstehen, warum ein Skill mit anständiger Formatierung immer noch nicht als außergewöhnlicher Betriebsvorteil punktet

Dies ist der Begleiter für Mitwirkende zu:

- [Qualitätsleiste](QUALITY-BAR.md)
- [Skill Anatomy](SKILL-ANATOMY.md)
- [Fertigkeitsklassifizierung](../specs/SKILL-CLASSIFICATION.md)

Aktueller Benchmark für den Live-Katalog:

- 32 veröffentlichte Fähigkeiten
- aktuelle Qualitätsverteilung: „94, 95, 96, 97, 100“.
- aktuelle Best-Practices-Spread: „98, 99, 100“.
- Aktuelles Top-End: „Omni-Figma“ in „100/100“-Qualität und „100/100“-Best Practices---

## 🧱 What High Scores Really Mean

Der Klassifikator belohnt**nicht**allein einen hübschen Abschlag.

Fähigkeiten mit hoher Punktzahl sind Fähigkeiten, die:

-**auffindbar**: Die Beschreibung sagt deutlich, was die Fertigkeit bewirkt und wann sie eingesetzt werden sollte
-**operational**: Der Skill umfasst lokale Skripte, Referenzen und ausführbare Beispiele
-**Diagnose**: Hilft dem Agenten bei der Wiederherstellung, wenn etwas schief geht
-**spezifisch**: Es konzentriert sich auf einen Arbeitsablauf und nicht auf allgemeine Ratschläge
-**sicher**: Es vermeidet riskante Muster und liefert eine saubere Scannerausgabe

In der Praxis verhalten sich die stärksten Fähigkeiten eher wie ein**klein verpacktes Workflow-Kit**als wie eine einfache Markdown-Notiz.---

## 📋 Score Targets

Verwenden Sie beim Verfassen diese Ziele:

| Dimension | Starkes Ziel | Außergewöhnliches Ziel |
|:----------|:--------------|:-------------------|
| 🎯 Reife | `L3` | „L3“ mit mehreren Supportressourcen |
| 📋 Best Practices | „90+“ | `96+` |
| ⭐ Qualität | „85+“ | „90+“ |
| 🛡️ Sicherheit | „95+“ | „95+“ mit null Befunden |---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Ihr Titel sollte es ermöglichen, die Fähigkeit leicht zu klassifizieren und leicht zu entdecken:

- „Name“ stimmt genau mit dem Verzeichnis überein
- „Beschreibung“ erklärt sowohl**was**als auch**wann**
- „Kategorie“, „Tags“, „Tools“, „Komplexität“, „Risiko“, „Quelle“, „Autor“ und Daten sind alle vorhanden

Gute Beschreibungsform:```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Schlechte Beschreibungsform:```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

Zu den stärksten Fähigkeiten gehören durchweg die folgenden Abschnitte:

- „## Übersicht“.
- „## Wann man diese Fähigkeit nutzt“.
- „## Arbeitsablauf“.
- „## Beispiele“.
- „## Best Practices“.
- „## Fehlerbehebung“.
- „## Zusätzliche Ressourcen“.

Wenn eines davon fehlt, kann die Punktzahl immer noch gut sein, aber es wird schwieriger, außergewöhnlich auszusehen.---

### 3. Runnable Local Support

Zu den Fähigkeiten mit der höchsten Punktzahl gehören in der Regel:

- `references/checklist.md`
- ein oder mehrere Hilfsskripte in „scripts/“.
- mindestens ein funktionierendes Beispiel in `examples/`
- „agents/openai.yaml“, wenn der Skill für den direkten Agentenaufruf vorgesehen ist
- Direkte Links von „SKILL.md“ zu diesen lokalen Dateien

Dies ist wichtig, da der Klassifikator einen Skill mit**gebündeltem Unterstützungsmaterial**als umsetzbarer behandelt als einen, der nur nach außen zeigt.

Empfohlenes Minimum:```text
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

Beispiele mit hoher Punktzahl sind:

- Beton
- mit einem echten Zaun wie „Bash“ oder „Python“ eingegeben
- an ein lokales Skript oder einen wiederholbaren Befehl gebunden
- Repräsentant des Workflows

Gut:```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Schwach:```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

Der Scorer belohnt die Fehlerbehebung, die einem Agenten hilft, sich zu erholen, und nicht nur das Erkennen eines Problems.

Bevorzugtes Format:```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

Das ist stärker als eine vage Notiz wie:```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

Der Klassifikator unterscheidet nun zwischen einer Fertigkeit, die lediglich vollständig ist, und einer Fertigkeit, die wirklich tiefgreifend ist.

Signale, die helfen:

- mehrere konkrete Beispiele
- mehrere Fehlerbehebungsfälle
- Anleitung zu verwandten Fähigkeiten
- Umfangreichere Referenzpakete
- ein sichtbarer Abschnitt „## Workflow“ mit nummerierten Schritten, die der Punktezähler direkt zählen kann
- mindestens eine Betriebstabelle oder Ausführungskarte, die den Arbeitsablauf verdeutlicht
- mehr als ein Supportverzeichnis oder Asset-Typ
- Workflow-Abschnitte mit genügend Schritten als Leitfaden für die Ausführung
- Entscheidungsressourcen wie Checklisten, Rubriken, Matrizen, Pakete oder Playbooks
- Stärkere Support-Pack-Vielfalt über `references/`, `scripts/`, `agents/`, `examples/` oder `assets/`
- Genügend wiederverwendbare Hilfsdateien, um wie ein Bausatz auszusehen, kein einziger Helfer, der neben dem Preisnachlass versteckt ist
- mehr als eine einzelne Hilfsdatei, wenn der Workflow komplex genug ist, um ein Support-Paket zu rechtfertigen
- Genügend Körpertiefe, um Kompromisse und Fehlermodi abzudecken
- Verdichtete Bedienführung, da der Scorer nun ausgefeilte Formatierungen von wirklich wiederverwendbarer Workflow-Tiefe unterscheidet

Signale, die**nicht**viel helfen:

- Wiederholen derselben Anweisung mit anderen Worten
- generischer Fülltext
- Überschriften hinzufügen, ohne ihnen Substanz hinzuzufügen---

## 🧪 Fast Checklist Before You Commit

Verwenden Sie diese Checkliste, bevor Sie die Validierung ausführen:

- In der Beschreibung steht**was**und**wann**
- Die Fertigkeit konzentriert sich auf einen Arbeitsablauf
- „## Workflow“ ist vorhanden und enthält nummerierte oder mit Aufzählungszeichen versehene Schritte
- Es existiert mindestens ein lauffähiges Beispiel
- „references/“, „scripts/“ und idealerweise „examples/“ werden von „SKILL.md“ verlinkt
- „agents/openai.yaml“ ist vorhanden, wenn der Skill für den direkten Aufruf in Agent-Clients gedacht ist
- Zur Fehlerbehebung werden „Symptome“ und „Lösung“ verwendet
- Die Fertigkeit kann vernünftigerweise als „L3“ eingestuft werden
- Es sind keine riskanten Befehle oder verdächtigen Pfade vorhanden

Führen Sie dann Folgendes aus:```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- Die Beschreibung ist korrekt, aber zu allgemein
- Der Abschlag hat Abschnitte, aber keine operative Tiefe
- Beispiele deuten nicht auf lokale Helfer hin
- Fehlerbehebung vorhanden, aber nicht diagnostisch
- Es sind zu wenige Tags oder Werkzeugkennungen vorhanden
- Die Fertigkeit ist sicher und sauber, aber immer noch zu oberflächlich, um als außergewöhnlich zu gelten---

## 🧭 Practical Rule

Wenn sich Ihre Fähigkeiten wie folgt anfühlen:

- eine**Vorlage**: Es kann passieren
- ein**Ratgeber**: Es kann gut punkten
- ein**Workflow-Paket**: Es ist viel wahrscheinlicher, ganz oben zu punkten