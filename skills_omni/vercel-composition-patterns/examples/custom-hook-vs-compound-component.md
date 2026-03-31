# Custom Hook vs Compound Component

## Use a custom hook when

- the reusable value is behavior, not structure
- consumers should own rendering completely
- different products or pages will present the same logic in different markup

Example:

```tsx
function useSelectableList(items: string[]) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectedItem = items[selectedIndex] ?? null;
  return { selectedIndex, selectedItem, setSelectedIndex };
}
```

This hook can power a menu, tabs, cards, or a command palette without forcing one UI API.

## Use a compound component when

- multiple exported subcomponents must coordinate around one shared state model
- consumers benefit from a structured family such as `Tabs.Root`, `Tabs.List`, `Tabs.Tab`, `Tabs.Panel`
- the relationship between subparts is part of the API contract

## Warning sign

If your compound component mostly exists to hide stateful logic and consumers still need to control markup heavily, the abstraction may want to be a hook plus small primitives instead.
