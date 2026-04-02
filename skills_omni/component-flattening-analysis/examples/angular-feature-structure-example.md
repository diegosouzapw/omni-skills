# Angular Feature Structure Example

## Before

```text
src/app/orders/
├── orders.routes.ts
├── orders.component.ts
├── order-formatters.ts
├── create/
│   ├── create-order.component.ts
│   └── create-order.service.ts
└── history/
    └── order-history.component.ts
```

## Analysis

- `orders.routes.ts` is a routing surface, not orphaned implementation.
- `orders.component.ts` may be the feature shell component.
- `order-formatters.ts` is a strong shared-code candidate.
- `create/` and `history/` represent meaningful feature-area leaves.

## Recommendation

- Keep `orders.routes.ts` in place.
- Keep `orders.component.ts` if it acts as the feature shell.
- Move `order-formatters.ts` into a clearer shared location if desired:

```text
src/app/orders/
├── orders.routes.ts
├── orders.component.ts
├── shared/
│   └── order-formatters.ts
├── create/
│   ├── create-order.component.ts
│   └── create-order.service.ts
└── history/
    └── order-history.component.ts
```

## Avoid

- collapsing `create/` and `history/` into the parent merely to reduce nesting
- treating routing files as hierarchy violations
- flattening across Angular feature boundaries without architectural intent
