# Testing Library Accessible Query Examples

Prefer queries that match how users find elements.

## Prefer role + accessible name

```ts
screen.getByRole('button', { name: /save changes/i })
screen.getByRole('textbox', { name: /email address/i })
screen.getByRole('dialog', { name: /delete account/i })
```

## Prefer label text for form controls

```ts
screen.getByLabelText(/password/i)
```

## Avoid test IDs when an accessible query exists

```ts
// weaker
screen.getByTestId('submit-button')

// stronger
screen.getByRole('button', { name: /submit/i })
```

These patterns help catch missing labels, broken names, and incorrect roles earlier.
