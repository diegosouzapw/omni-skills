# Multi-Component Batch Example

User request:

```text
Connect components in this frame: https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Components?node-id=10-50
```

## 1. Suggestion phase

Operator calls `get_code_connect_suggestions` with:

```text
fileKey = pR8mNv5KqXzGwY2JtCfL4D
nodeId  = 10:50
```

Returned unmapped components:

- ProductCard at `10:51`
- Badge at `10:52`
- CustomWidget at `10:53`

## 2. Codebase matching phase

Candidate matches:

- ProductCard → `src/components/ProductCard.tsx`, export `ProductCard`, label `React`
- Badge → `src/components/Badge.tsx`, export `Badge`, label `React`
- CustomWidget → no safe match found

## 3. Approval prompt

```text
I found the following Code Connect candidates:

1. Figma: ProductCard
   - nodeId: 10:51
   - proposed source: src/components/ProductCard.tsx
   - proposed componentName: ProductCard
   - proposed label: React
   - rationale: The exported component matches the Figma card variants and appears to be the canonical implementation.

2. Figma: Badge
   - nodeId: 10:52
   - proposed source: src/components/Badge.tsx
   - proposed componentName: Badge
   - proposed label: React
   - rationale: The exported Badge component supports the same status-style variants shown in Figma.

I could not safely match CustomWidget at nodeId 10:53.

Please confirm:
- approve all
- approve only specific items
- reject all
- provide corrected file paths or component names
```

## 4. Partial approval

User response:

```text
Approve ProductCard only. Skip Badge for now.
```

## 5. Write phase

Only the approved mapping is sent:

```text
send_code_connect_mappings(
  fileKey="pR8mNv5KqXzGwY2JtCfL4D",
  nodeId="10:50",
  mappings=[
    { nodeId: "10:51", componentName: "ProductCard", source: "src/components/ProductCard.tsx", label: "React" }
  ]
)
```

## 6. Final summary

```text
Code Connect Summary:
- Successfully connected: 1
  - ProductCard (10:51) → src/components/ProductCard.tsx
- Skipped by user choice: 1
  - Badge (10:52)
- Not connected: 1
  - CustomWidget (10:53) - No safe code match found
```
