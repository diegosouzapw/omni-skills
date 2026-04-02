# Export and Embed Notes

This skill's primary artifact is a `.excalidraw` source file.

Use export helpers or preview generation only as secondary workflow steps.

## Preferred artifact order

1. `.excalidraw` source
2. optional SVG preview
3. optional PNG preview

## When export helpers are useful

Use programmatic export when:

- reviewers need a quick visual preview
- you are embedding a rendered diagram in documentation
- you need a deterministic review image in addition to the editable source

## When raw source is enough

Raw `.excalidraw` is enough when:

- the user wants an editable diagram
- downstream tools already support Excalidraw open/import
- the main goal is scene fidelity rather than publication format

## If coding against the Excalidraw package

Prefer official restoration/export utilities over ad hoc assumptions.

Useful capability areas documented by Excalidraw include:

- scene restoration
- file restoration
- loading from blob
- export to blob, canvas, or SVG

## Cautions

- do not treat exported PNG/SVG as the source of truth
- do not claim full schema validation if you only performed a basic JSON check
- do not load libraries by invented identifiers; use known local or trusted available assets only
