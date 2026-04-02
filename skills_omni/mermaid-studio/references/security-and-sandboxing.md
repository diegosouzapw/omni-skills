# Security and Sandboxing

Use this guide when rendering Mermaid from untrusted sources or when working in CI, containers, or restricted environments.

## Trust boundary

Treat Mermaid input and Mermaid configuration from untrusted users or repositories as untrusted content.

Why this matters:

- Mermaid rendering may involve HTML labels and browser-context behavior.
- Mermaid CLI uses a headless browser stack.
- Rendering exceptions made for convenience can weaken safety assumptions.

## Safe defaults

- Keep Mermaid security-related settings conservative unless there is a clear documented need.
- Avoid loosening `securityLevel` by default.
- Only enable `htmlLabels` when needed and understood.
- Do not add arbitrary scripts or external resources to rendering workflows.

## Sandboxing guidance

Browser sandbox failures are common in CI/container setups.

Preferred order:

1. Use the documented packaged setup.
2. Confirm required environment dependencies are present.
3. Troubleshoot missing libraries, fonts, or Chromium launch issues.
4. Use no-sandbox workarounds only in constrained trusted environments and record why the exception was necessary.

## Do not assume

- that rendering untrusted Mermaid is equivalent to parsing plain text only
- that all renderers honor the same security settings
- that a local workaround is acceptable for shared CI by default

## Minimum incident notes to capture

- who supplied the Mermaid source
- whether config/frontmatter was user-provided
- whether HTML labels were enabled
- whether the run occurred locally or in shared CI
- exact sandbox or browser-launch error text
