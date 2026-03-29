# Skill PR Workflow (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Dies ist der kanonische Repository-Ablauf für Pull-Requests, die eine oder mehrere native Fähigkeiten hinzufügen oder erheblich verbessern.

Verwenden Sie es, wenn:

- Hinzufügen einer neuen Fähigkeit unter „skills/“.
- Vertiefung eines Bündels mit neuen Domänenkenntnissen
- Versand einer größeren Support-Pack-Erweiterung
- Validieren eines Zweigs mit dem privaten Enhancer, bevor Betreuer ihn zusammenführen## Target Outcome

Eine ausgeprägte PR mit nativen Fähigkeiten bringt Folgendes mit sich:

- eine native Fertigkeit unter „skills/“.
- Genügend Inhalt, damit der öffentliche Prüfer ihn klassifizieren und indizieren kann
- Bestehen öffentlicher Validierungen und Tests
- Automatische Enhancer-Verarbeitung während der PR
- eine Folge-PR von „skills_omni/“, wenn erweiterte Derivate veröffentlicht werden
- Muttersprachliche Aufnahme wird bei Bedarf in der Originalsprache beibehalten
- kuratierte erweiterte Ausgabe, neu geschrieben ins Englische
- ein einseitiger Fluss von nativ zu kuratiert, der „skills_omni/“ nicht wieder in die Aufnahme nativer Enhancer einspeist## Enhancer Outcome States

Der öffentliche PR-Enhancer meldet jetzt vier für den Betreuer sichtbare Zustände:

- „abgeschlossen“.
  Das erweiterte Derivat wurde sauber generiert und ist für die Begleitveröffentlichung „skills_omni/“ geeignet.
- „degradiert“.
  Der Enhancer wurde beendet, verwendete jedoch einen Fallback-Pfad oder erzeugte Warnungen. Es wird weiterhin eine Überprüfung durch den Betreuer erwartet, bevor das Derivat als gesund eingestuft wird.
- „blockiert“.
  Die Ausführung wurde aufgrund von Infrastruktur- oder Validierungsproblemen gestoppt, z. B. einem gehosteten OmniRoute-Preflight-Fehler oder einem Kandidatenvalidierungsfehler, der die Veröffentlichung verhindern sollte.
- „fehlgeschlagen“.
  Der Enhancer ist auf einen unerwarteten Laufzeitfehler gestoßen und muss vom Betreuer untersucht werden.## Recommended Branch Shape

Erstellen Sie einen fokussierten Zweig:```bash
git checkout -b feat/<short-skill-theme>
```

Beispiele:

- „feat/incident-observability-evals“.
- `feat/devops-skill-pack`
- `feat/security-skill-pack`## Native Intake Rules

Die öffentliche Ansaugfläche ist bewusst freizügig gestaltet.

Minimum:```text
skills/<skill>/
└── SKILL.md
```

Empfohlen, aber zur Einnahme nicht mehr erforderlich:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Der native Beitrag kann grob oder unvollständig sein oder außerhalb des normalen Support-Pack-Standards liegen. Das ist Absicht. „skills/“ ist die native Aufnahmeoberfläche, nicht die kuratierte abgeleitete Oberfläche.

Sprachpolitik:

- Der muttersprachliche Eintrag unter „skills/“ kann in jeder beliebigen Sprache verfasst werden
– Der Enhancer behält den nativen Snapshot so bei, wie er zur Herkunft übermittelt wurde
- Die kuratierte Ableitung unter „skills_omni/“ muss immer in Englisch verfasst sein

Die strengeren Redaktionsbeschränkungen gelten nun für:

- die generierten Metadaten und Sicherheitsüberprüfungen
- die private Enhancer-Rezension
- das nachfolgend kuratierte Derivat unter „skills_omni/“.## Authoring Sequence

1. Erstellen Sie „skills/<skill>/SKILL.md“.
2. Fügen Sie Frontmatter hinzu, wenn Sie können, aber fehlendes oder unvollständiges Frontmatter blockiert die native Aufnahme nicht mehr von selbst.
3. Fügen Sie „agents/“, „references/“, „examples/“ und „scripts/“ hinzu, wenn Sie diese bereits haben.
4. Aktualisieren Sie „data/bundles.json“, wenn der Skill ein vorhandenes Bundle vertieft.
5. Öffnen Sie die PR. Den Rest erledigt nun die Repo-Automatisierung.## Validation Sequence

Mitwirkende können genau diese Sequenz ausführen, bevor sie die PR öffnen:```bash
npm run validate
npm run build
npm test
git diff --check
```

Wenn sich die Änderung auch auf das Laufzeit- oder Verpackungsverhalten auswirkt, führen Sie außerdem Folgendes aus:```bash
npm run smoke
```

## What Happens Automatically During the PR

Wenn ein PR geöffnet oder synchronisiert wird und nur native Skill-Aufnahmedateien unter „skills/“ plus optional „data/bundles.json“ berührt, löst das öffentliche Repo jetzt automatisch den privaten Enhancer aus.

Aktueller automatisierter Ablauf:

1. Der öffentliche Workflow „Validate Skills“ wird auf dem PR ausgeführt und prüft Validierung, Build, generierte Artefakte und Tests.
2. Der öffentliche „Enhance PR Skills“-Workflow startet parallel und verarbeitet die geänderten Native Skills nacheinander im „Live“-Modus.
3. Der Enhancer liest den nativen Skill aus „skills/“, recherchiert aktuelle Best Practices und schreibt einen überprüften erweiterten Kandidaten im privaten Arbeitsbereich.
4. Der Enhancer behält den Upstream-Aufnahme-Snapshot bei Bedarf in seiner Originalsprache bei, schreibt die kuratierte Ausgabe jedoch in Englisch um.
5. Der Enhancer meldet den Fortschritt zurück an die Quell-PR.
6. Der Enhancer aktualisiert den PR-Statuskommentar nach jedem verarbeiteten Skill mit den Chargensummen und dem neuesten Status.
7. Wenn es fertig ist, materialisiert es die erweiterte Ableitung in „skills_omni/“ und öffnet oder aktualisiert eine begleitende PR im öffentlichen Repo nur für „abgeschlossene“ und „degradierte“ Ausgaben.
8. Nachdem die PR in „main“ zusammengeführt wurde, verarbeitet der private Repo-fähige Poller alle geänderten nativen Fähigkeiten erneut, aktualisiert „workspace/enhanced/skills/<skill>/“ und hält die private erweiterte Basislinie an der neuesten öffentlichen nativen Quelle ausgerichtet.
9. Nach der Zusammenführung erhöht der öffentliche Release-Workflow die npm-Paketversion, generiert Katalogartefakte neu, veröffentlicht ein Release und markiert die neue Version automatisch.

Ratenlimit:

- Der PR-Enhancer verarbeitet derzeit**1 Skill pro Minute**
- Ein PR mit 40 nativen neuen Fähigkeiten kann daher etwa 40 Minuten in der Enhancer-Warteschlange bleiben
- Die PR zeigt die Arbeit als laufenden CI-Lauf sowie einen Fortschrittskommentar, der die Fertigkeit für Fertigkeit voranbringt

Der Mitwirkende muss den Enhancer nicht manuell ausführen.## No-Loop Rule For `skills_omni/`

Die kuratierte Oberfläche ist bewusst einseitig:

- Native Eingaben werden über „skills/“ eingegeben
– Der private Enhancer überprüft diese native Eingabe
- Die kuratierte Ausgabe wird in „skills_omni/“ vorgeschlagen
- „skills_omni/“ wird nie wieder als native Aufnahme behandelt
- Spätere native Updates werden immer noch über „skills/“ erneut eingegeben und ersetzen die private erweiterte Baseline nach der erneuten Verarbeitung

Das Repository erzwingt nun diese Grenze:

- Direkte öffentliche PRs, die „skills_omni/“ ändern, werden abgelehnt
- Dort werden nur von der Automatisierung erstellte Begleit-PRs aus der Zweigfamilie „skills-omni/pr-*“ akzeptiert
- Gemischte PRs, die versuchen, sowohl „skills/“ als auch „skills_omni/“ gleichzeitig zu ändern, werden abgelehnt## Automatic Versioning After Merge

Skill-tragende Zusammenführungen zu „main“ lösen jetzt automatisch den Repository-Release-Workflow aus.

Aktuelle Paketversionsrichtlinie:

- Der Patch wird für jede qualifizierende Zusammenführung um „+1“ erhöht
- „0.0.1“ → „0.0.2“ → ... → „0.0.10“.
- Nach „.10“ rollt das Paket zum nächsten Nebenpaket und setzt den Patch zurück
- „0.0.10“ → „0.1.0“.
- „0.1.10“ → „0.2.0“.

Aktuelle Release-Triggerpfade:

- `Fähigkeiten/**`
- `skills_omni/**`
- „data/bundles.json“.

Dieser automatische Freigabejob:

1. Berechnet die nächste Paketversion aus „package.json“.
2. Bumps „package.json“ und „package-lock.json“.
3. generiert „metadata.json“, „skills_index.json“, „dist/“ und „docs/CATALOG.md“ neu
4. führt die strikte Release-Überprüfungspipeline aus
5. Überträgt die Versionsänderung zurück auf „main“.
6. Erstellt ein Git-Tag für die neue Version
7. veröffentlicht npm- und GitHub-Release-Artefakte

Wichtiger Rollout-Hinweis:

– GitHub registriert eine neue Workflow-Datei erst dann als aktiven Repository-Workflow, wenn diese Datei den Standardzweig erreicht.
– Bis „Enhance PR Skills“ auf „main“ landet, können Mitwirkende den dokumentierten Prozess lesen, aber GitHub führt diesen Workflow noch nicht automatisch für öffentliche PRs aus.
- Nachdem der Workflow in „main“ zusammengeführt wurde, wird das oben beschriebene Verhalten zum Standardaufnahmepfad für zukünftige PRs für native Fertigkeiten.## Native vs Enhanced

Dieses Repo hat jetzt zwei unterschiedliche Oberflächen:

- `Fähigkeiten/`
  Native Aufnahme. Dadurch bleibt der ursprünglich eingereichte Beitrag erhalten.
- `skills_omni/`
  Omni-erweiterte abgeleitete Ausgabe, vorgeschlagen durch Automatisierung und verwaltet vom Omni Skills Team.

Zuordnungsregeln für „skills_omni/“:

- Das erweiterte Derivat wird omniverwaltet
- Der ursprüngliche Mitwirkende und die vorgelagerten nativen Fähigkeiten bleiben angerechnet
- Jedes erweiterte Verzeichnis enthält eine Datei „ATTRIBUTION.md“ mit dem Upstream-Pfad, PR, Autor und Quellkontext
– Jedes erweiterte Verzeichnis ist nur eine kuratierte Ausgabe und darf nicht erneut an den nativen Enhancer-Aufnahmepfad übermittelt werden
- Von jedem erweiterten Verzeichnis wird erwartet, dass es eine englischsprachige Ausgabe hat, selbst wenn dies bei der nativen Originalquelle nicht der Fall war## Manual Maintainer Commands

Die Automatisierung deckt die normale PR-Aufnahme ab, Betreuer können den privaten Enhancer jedoch bei Bedarf weiterhin manuell ausführen.

Batch gegen einen Branch-Diff:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Überprüfung einzelner Fertigkeiten:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Erwartete Enhancer-Ausgaben pro Fertigkeit:

- `workspace/incoming/original/<run-id>/<skill>/`
- `workspace/enhanced-candidates/<run-id>/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`## PR Body Expectations

Die PR-Stelle sollte Folgendes angeben:

- welche Fähigkeiten hinzugefügt oder verbessert wurden
- welche Bündel oder Arbeitsabläufe sie vertiefen
- welche Validierung ausgeführt wurde
- ob der automatisierte Enhancer ausgeführt wurde
– ob eine Companion-PR „skills_omni/“ geöffnet oder aktualisiert wurde
- alle außergewöhnlichen Betreuernotizen zur Namensnennung oder zur anschließenden Bereinigung## Reviewer Checklist

- Die einheimische Aufnahme ist legitim und nicht böswillig
- Generierte Metadaten und Manifeste wurden aktualisiert
- Bundle-Updates sind beabsichtigt
- Öffentliche Validierungs- und Build-Ausgaben sind grün
- Der Kommentar zum Enhancer-Status entspricht den tatsächlich geänderten Fähigkeiten und dem endgültigen Ergebnisstatus
- Bei jeder „skills_omni/“-Companion-PR bleibt die Quellenangabe korrekt erhalten## Example PR Scope

Eine starke Beispiel-PR kann einen thematischen Satz hinzufügen, wie zum Beispiel:

- eine Observability- oder DevOps-Fähigkeit
- ein Vorfall oder eine Sicherheitskompetenz
- eine KI-Bewertungs- oder Aufforderungsfähigkeit

Das ist groß genug, um den Scorer, den automatischen Enhancer, den Veröffentlichungsablauf „skills_omni/“, die Bundles und das Attributionsmodell zu nutzen, ohne die PR in eine vollständige Neufassung des Katalogs umzuwandeln.