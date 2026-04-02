# Example: Controlled vs Uncontrolled Compound API

Use this pattern when a reusable component must work in both app-managed and self-managed modes.

```tsx
type AccordionProps = {
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
  children: React.ReactNode;
};

export function Accordion({
  value,
  defaultValue = null,
  onValueChange,
  children,
}: AccordionProps) {
  const [internalValue, setInternalValue] = React.useState<string | null>(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  function setValue(nextValue: string | null) {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onValueChange?.(nextValue);
  }

  return (
    <AccordionContext.Provider value={{ value: currentValue, setValue }}>
      {children}
    </AccordionContext.Provider>
  );
}
```

## Contract

- If `value` is provided, the parent owns state.
- If only `defaultValue` is provided, the component owns initial state.
- `onValueChange` reports transitions in both modes.
- Internal state should not compete with controlled props.

## Review question

If a parent changes `value`, does the visible UI follow that prop immediately? If not, the component is mixing ownership models incorrectly.
