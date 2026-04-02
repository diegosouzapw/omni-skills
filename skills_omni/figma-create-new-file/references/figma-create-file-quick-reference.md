# Figma Create File Quick Reference

## Purpose

Use this reference during execution when you need the shortest correct reminder for creating a blank Figma file.

## Accepted Inputs

### Required at execution time

- `planKey`
- `editorType`
- `fileName`

### Invocation defaults

- `editorType`: defaults to `design` when omitted
- `fileName`: defaults to `Untitled` when omitted

## Valid `editorType` Values

- `design`
- `figjam`

Do not infer or invent any other value.

## Plan Selection Rules

1. If the user provides a valid `planKey`, use it.
2. Otherwise call `whoami`.
3. If one plan is returned, use it.
4. If more than one plan is returned, ask the user to choose.
5. Do not guess among multiple plans.

## Minimal Create Payload

```json
{
  "planKey": "team:123456",
  "fileName": "Untitled",
  "editorType": "design"
}
```

## Expected Outputs

Capture and preserve:

- `file_key`
- `file_url`

## Location Expectation

A newly created file should appear in the selected workspace's Drafts area or equivalent draft location.

## Immediate Handoff Rule

If the next step is to inspect or edit the new file, pass `file_key` into the next Figma workflow instead of creating a second file.
