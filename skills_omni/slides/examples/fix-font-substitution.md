# Example: Fix Font Substitution

## Scenario

Rendered slides show different line breaks from the authoring expectation.

## Diagnostic command

```bash
python3 scripts/detect_font.py deck.pptx --json
```

## Response pattern

- confirm the intended theme font in source
- compare it with the detected fallback or substitute font
- reduce text density if the intended font is not available in the review environment
- rerender after changing font, box dimensions, or font size

## Expected outcome

The final render uses the intended font where available, or the layout is adjusted so fallback rendering still passes QA.
