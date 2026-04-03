# Example: Refactor Boolean Props to Explicit Variants

## Before

```tsx
type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  ghost?: boolean;
  loading?: boolean;
  children: React.ReactNode;
};

export function Button({
  primary,
  secondary,
  danger,
  ghost,
  loading,
  children,
}: ButtonProps) {
  const className = [
    primary && 'btn-primary',
    secondary && 'btn-secondary',
    danger && 'btn-danger',
    ghost && 'btn-ghost',
  ]
    .filter(Boolean)
    .join(' ');

  return <button className={className} disabled={loading}>{children}</button>;
}
```

## Problems

- Invalid combinations are easy to express.
- The caller has to guess precedence.
- Each new style adds another branch and more API ambiguity.

## After

```tsx
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

type ButtonProps = {
  variant?: ButtonVariant;
  loading?: boolean;
  children: React.ReactNode;
};

export function Button({
  variant = 'primary',
  loading = false,
  children,
}: ButtonProps) {
  return (
    <button className={`btn-${variant}`} disabled={loading}>
      {children}
    </button>
  );
}
```

## When to go further

If each variant starts needing different structure or behavior, split into explicit components or compound subcomponents instead of overloading one component forever.
