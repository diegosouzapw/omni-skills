# DOCX Workflow Guide

Use this guide when you need a compact operational playbook for `.docx` work.

## Decision flow

1. **Is the input really DOCX?**
   - If no, route to the correct format skill.
2. **Does layout fidelity matter?**
   - If yes, plan for render-and-review before handoff.
3. **Is the file suspicious or failing in automation?**
   - If yes, inspect the package before editing.
4. **Can the task be handled semantically?**
   - Prefer `python-docx` for headings, paragraphs, tables, images, and routine edits.
5. **Are rendering tools available?**
   - If yes, convert DOCX -> PDF -> page images.
   - If no, disclose that visual fidelity is unverified.

## Recommended operator loop

1. Inspect request and file.
2. Validate prerequisites if visual QA is needed.
3. Inspect package if corruption is suspected.
4. Make semantic edits.
5. Render output.
6. Review pages.
7. Record risks and hand off.

## Output conventions

- Intermediate files: `tmp/docs/`
- Final artifacts in this repo: `output/doc/`
- Use stable, descriptive names for before/after review packets.

## Handoff note template

- Edited with: `python-docx` / manual semantic workflow
- Visual review performed: yes / no
- Render method: bundled script / LibreOffice + Poppler / unavailable
- Residual risks: fonts, advanced Word-only features, environment differences, unverified layout
