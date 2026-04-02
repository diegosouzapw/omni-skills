# DOCX Troubleshooting Matrix

| Symptom | Likely cause | What to check | Recommended action |
| --- | --- | --- | --- |
| No PDF from `soffice` | LibreOffice missing, bad output dir, profile lock | `which soffice`, output dir, isolated profile | retry with explicit writable outdir and isolated profile |
| `pdftoppm` not found | Poppler missing | `which pdftoppm` | install Poppler and retry |
| Rendered layout differs | fonts missing, unsupported feature, environment drift | fonts, templates, advanced Word features | disclose risk and ask for Word-side review if exact parity is required |
| Styles changed after edit | direct formatting or fragile template structure | style names, numbering, section usage | reuse existing styles and make smaller edits |
| DOCX seems valid in Word but scripts fail | malformed package or unusual structure | package inspection output | triage package before more edits |
| Blank page images | failed PDF generation or wrong basename | PDF exists and opens, output path | rerun conversion in clean temp dir |
| Cannot install tools | restricted environment | package manager access, execution policy | continue with structural review only and disclose limits |

## Escalation guidance

Escalate or reroute when:

- exact Microsoft Word parity is mandatory
- the document relies on macros, OLE objects, or Word-specific review workflows
- package corruption requires specialized repair
- the real task is system setup rather than document work
