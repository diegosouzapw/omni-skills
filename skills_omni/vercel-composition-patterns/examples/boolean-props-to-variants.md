# Boolean Props to Variants

## Before

This API allows contradictory combinations and pushes complexity onto consumers.

```tsx
<Button isPrimary isDanger isCompact isInline>
  Delete
</Button>
```

Problems:

- `isPrimary` and `isDanger` may conflict
- more booleans create combinatorial growth
- consumers must learn precedence rules

## After

Use explicit variants and sizes for mutually exclusive states.

```tsx
type ButtonProps = {
  variant?: 'primary' | 'danger' | 'ghost';
  size?: 'compact' | 'default';
  inline?: boolean;
  children: React.ReactNode;
};

<Button variant="danger" size="compact" inline>
  Delete
</Button>
```

## When to split into subcomponents instead

If the behavior is materially different, a wrapper can be clearer than a variant.

```tsx
<DangerButton size="compact">Delete</DangerButton>
```

Use a separate component when the semantic intent is stable and repeated often.

## Review prompt

Ask:

> Can any two public booleans be set at the same time in a way that makes no product sense?

If yes, redesign the API before merging.
