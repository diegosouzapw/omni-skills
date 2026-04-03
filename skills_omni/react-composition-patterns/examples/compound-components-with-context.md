# Example: Compound Components with Context

Use this pattern when descendants need shared state and coordinated behavior.

```tsx
import React, { createContext, useContext, useMemo, useState } from 'react';

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs subcomponents must be used within <Tabs>.');
  }
  return context;
}

type TabsProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
};

export function Tabs({ value, defaultValue = 'overview', onValueChange, children }: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const setValue = (nextValue: string) => {
    if (!isControlled) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  const contextValue = useMemo(
    () => ({ value: currentValue, setValue }),
    [currentValue]
  );

  return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
}

Tabs.List = function TabsList({ children }: { children: React.ReactNode }) {
  return <div role="tablist">{children}</div>;
};

Tabs.Trigger = function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const { value: currentValue, setValue } = useTabsContext();
  const selected = currentValue === value;

  return (
    <button role="tab" aria-selected={selected} onClick={() => setValue(value)}>
      {children}
    </button>
  );
};

Tabs.Panel = function TabsPanel({ value, children }: { value: string; children: React.ReactNode }) {
  const { value: currentValue } = useTabsContext();
  if (currentValue !== value) return null;
  return <div role="tabpanel">{children}</div>;
};
```

## Why this is safer than child rewriting

- Shared state is explicit.
- Subcomponents can validate provider usage.
- Wrappers and fragments are less likely to break the API.
- Controlled and uncontrolled behavior can be documented clearly.
