# Test Artifact Review Checklist

Use this checklist before handoff or merge.

## Required artifacts

- latest screenshot(s)
- latest `render_game_to_text` output
- latest console error log
- latest page error log, if available

## Pass / fail questions

### 1. Screenshot sanity
- Is the expected screen actually visible?
- Are important sprites, text, or UI controls present?
- Is the image current for the latest run?

### 2. Text-state sanity
- Does `render_game_to_text` describe the same mode shown in the screenshot?
- Do positions, health, score, resources, and interactables match what is visible?
- Is the payload concise rather than a giant internal dump?

### 3. Error review
- Are there new console errors?
- Are there page errors?
- If errors remain, are they understood and explicitly accepted? If not, fail the check.

### 4. Interaction chain
- Were important controls exercised end-to-end?
- Were intermediate states and final outcomes both checked?
- Was the game reset between separate scenarios?

## Acceptance rule

Do not mark the change done if screenshot-visible state and text-state disagree.
