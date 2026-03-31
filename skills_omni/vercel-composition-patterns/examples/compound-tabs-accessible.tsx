import * as React from 'react';

type TabsContextValue = {
  selectedId: string;
  select: (id: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const value = React.useContext(TabsContext);
  if (!value) throw new Error('Tabs components must be used within <Tabs.Root>.');
  return value;
}

function Root({
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: React.ReactNode;
}) {
  const [selectedId, setSelectedId] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ selectedId, select: setSelectedId }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return <div role="tablist" aria-orientation="horizontal">{children}</div>;
}

function Tab({ id, children }: { id: string; children: React.ReactNode }) {
  const { selectedId, select } = useTabsContext();
  const selected = selectedId === id;
  const tabId = `tab-${id}`;
  const panelId = `panel-${id}`;

  return (
    <button
      id={tabId}
      role="tab"
      type="button"
      aria-selected={selected}
      aria-controls={panelId}
      tabIndex={selected ? 0 : -1}
      onClick={() => select(id)}
    >
      {children}
    </button>
  );
}

function Panel({ id, children }: { id: string; children: React.ReactNode }) {
  const { selectedId } = useTabsContext();
  const selected = selectedId === id;
  const tabId = `tab-${id}`;
  const panelId = `panel-${id}`;

  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={!selected}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export const Tabs = {
  Root,
  List,
  Tab,
  Panel,
};

/*
Review notes:
- Add arrow-key navigation if your widget requires full tabs keyboard behavior.
- Keep native buttons for tabs unless you have a strong reason not to.
- Verify role-based tests for tablist, tab, and tabpanel.
*/
