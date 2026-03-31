import * as React from 'react';

type AccordionContextValue = {
  openItem: string | null;
  setOpenItem: (id: string) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
AccordionContext.displayName = 'AccordionContext';

function useAccordionContext() {
  const value = React.useContext(AccordionContext);
  if (!value) {
    throw new Error('Accordion subcomponents must be used within <Accordion.Root>.');
  }
  return value;
}

function Root({ children }: { children: React.ReactNode }) {
  const [openItem, setOpenItemState] = React.useState<string | null>(null);

  const setOpenItem = React.useCallback((id: string) => {
    setOpenItemState((current) => (current === id ? null : id));
  }, []);

  const contextValue = React.useMemo(
    () => ({ openItem, setOpenItem }),
    [openItem, setOpenItem]
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

function Item({ id, children }: { id: string; children: React.ReactNode }) {
  return <div data-accordion-item={id}>{children}</div>;
}

function Trigger({ id, children }: { id: string; children: React.ReactNode }) {
  const { openItem, setOpenItem } = useAccordionContext();
  const expanded = openItem === id;

  return (
    <button type="button" aria-expanded={expanded} onClick={() => setOpenItem(id)}>
      {children}
    </button>
  );
}

function Content({ id, children }: { id: string; children: React.ReactNode }) {
  const { openItem } = useAccordionContext();
  if (openItem !== id) return null;
  return <div>{children}</div>;
}

export const Accordion = {
  Root,
  Item,
  Trigger,
  Content,
};
