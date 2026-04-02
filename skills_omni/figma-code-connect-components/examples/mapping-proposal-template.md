# Mapping Proposal Template

Use this template before any `send_code_connect_mappings` call.

```text
I found the following Code Connect candidates:

1. Figma: Button
   - nodeId: 42:15
   - proposed source: src/components/Button.tsx
   - proposed componentName: Button
   - proposed label: React
   - rationale: The exported `Button` component exposes `variant` and `size` props that match the Figma properties.

2. Figma: Badge
   - nodeId: 42:18
   - proposed source: src/components/Badge.tsx
   - proposed componentName: Badge
   - proposed label: React
   - rationale: The file exports `Badge` and its status variants align with the Figma component set.

Please confirm one of the following:
- approve all
- approve only specific items
- reject all
- provide corrected file paths or component names
```

## Rules

- Do not imply approval if the user has not explicitly approved.
- If there are close alternatives, include them briefly.
- If one component has no safe match, say so and leave it out of the proposed batch.
