# Deprecation Policy Template

Use this template for any shared token, component, or pattern entering deprecation.

## Required fields

- item being deprecated
- current phase and target phase
- replacement path
- reason for deprecation
- first version or date marked deprecated
- last supported version or planned sunset date
- affected consumers
- migration owner
- exceptions process
- communication channels used

## Recommended deprecation statement

`<item>` is now deprecated. Use `<replacement>` for new work. Existing consumers should migrate by `<target date or version>`. Support after that point is `<support status>`.

## Migration packet checklist

- replacement examples
- key behavior differences
- accessibility differences if any
- known edge cases
- rollout order
- tracking owner
- consumer acknowledgment if high risk

## Safety rule

Do not remove a widely used item in the same communication where consumers first learn that it is deprecated, unless there is a documented emergency reason.
