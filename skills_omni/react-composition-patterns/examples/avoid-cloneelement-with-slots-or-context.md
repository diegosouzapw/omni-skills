# Example: Avoid `cloneElement` with Slots or Context

## Fragile approach

```tsx
import { Children, cloneElement, isValidElement } from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    return cloneElement(child, { compact: true });
  });
}
```

## Why this is fragile

- It assumes direct children can be rewritten safely.
- Wrappers or fragments can change behavior unexpectedly.
- Consumers do not see the real contract from the call site.

## Safer slot-style approach

```tsx
type CardProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export function Card({ header, footer, children }: CardProps) {
  return (
    <section>
      {header ? <div>{header}</div> : null}
      <div>{children}</div>
      {footer ? <div>{footer}</div> : null}
    </section>
  );
}
```

## Safer compound approach

```tsx
export function Card({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

Card.Header = function CardHeader({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
};

Card.Body = function CardBody({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
};

Card.Footer = function CardFooter({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
};
```
