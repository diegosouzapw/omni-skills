# React Component Flattening Example

## Before

```text
src/features/checkout/
├── CheckoutPage.tsx
├── CheckoutForm.tsx
├── CheckoutValidator.ts
├── components/
│   ├── PaymentSection.tsx
│   └── AddressSection.tsx
└── hooks/
    └── useCheckout.ts
```

## Analysis

- `CheckoutPage.tsx` is probably the composition shell for the route.
- `CheckoutForm.tsx` may be either a valid root component or misplaced implementation depending on how it is consumed.
- `CheckoutValidator.ts` looks like shared utility logic rather than page-level composition.
- `components/` and `hooks/` are already leaf implementation areas.

## Safer recommendation

Do **not** flatten `components/` into the root just because the root also has code.

Instead:

- keep `CheckoutPage.tsx` if it is the route or composition shell
- move `CheckoutValidator.ts` into `shared/` if multiple files use it
- evaluate `CheckoutForm.tsx` by consumer graph:
  - keep it at root if it is the main feature-level component
  - move it under `components/` if it is just an implementation detail

## After

```text
src/features/checkout/
├── CheckoutPage.tsx
├── index.ts
├── shared/
│   └── CheckoutValidator.ts
├── components/
│   ├── CheckoutForm.tsx
│   ├── PaymentSection.tsx
│   └── AddressSection.tsx
└── hooks/
    └── useCheckout.ts
```

## Key lesson

A parent-level React file is not automatically misplaced. Composition shells and public exports are often correct at the feature root.
