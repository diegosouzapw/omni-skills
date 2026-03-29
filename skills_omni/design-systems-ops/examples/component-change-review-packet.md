# Example: Component Change Review Packet

## Change summary

- Component: `Dropdown`
- Change: refresh visual states and default spacing, plus rename `dense` to `compact`
- Change class: behavior-changing
- Proposed phase: Stable

## Authority by layer

- Design intent: Figma component set
- Shipping API: React package
- Executable examples: Storybook stories
- Consumer guidance: docs site

## Drift findings

- Storybook still shows `dense`
- Docs examples do not mention `compact`
- Production app `admin-console` uses local focus ring override

## Accessibility review

- Keyboard behavior: no intended change
- Focus state: changed visually, requires review evidence
- State coverage in stories: incomplete for error plus open state
- Decision: stage until state coverage is added

## Consumer impact

- `admin-console`: medium risk, migration needed
- `ops-dashboard`: low risk, additive spacing only
- `marketing-site`: no impact

## Migration notes

- Add temporary support for `dense` with warning in docs
- Publish `compact` examples
- Document local override risk for consumers

## Decision

Stage release. Do not mark fully approved until stories, docs, and focus evidence are aligned.
