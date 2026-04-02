# Handoff Router

Use this note when the task is no longer primarily a Figma design implementation workflow.

## Route to `@figma` when

- MCP setup is missing
- OAuth or connection recovery is required
- the user wants general Figma exploration rather than implementation
- the task is mostly about raw file inspection or tool troubleshooting

## Route to `@accessibility` when

- the implementation uncovered deeper accessibility concerns that require dedicated review
- the user wants WCAG-focused auditing beyond normal implementation checks
- focus management, keyboard flow, or semantic remediation becomes the main work item

## Route to a frontend testing or visual regression skill when

- the design implementation is complete and now needs screenshot comparison or regression automation
- the team wants durable parity checks in CI rather than one-time visual review

## Route to a design-system or token-management skill when

- the main blocker is token architecture
- many components need shared variant redesign
- the work has expanded beyond one implementation into system-level component governance

## Handoff note template

```text
This started as a Figma implementation task, but the main blocker is now <blocker>. Handing off to <skill> with preserved context: target node, fetched screenshot/context, component mapping decisions so far, token mismatches, and any known accessibility or asset issues.
```
