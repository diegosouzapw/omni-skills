# Testing Compound Components

Prefer tests that assert user-visible behavior and semantics.

## Example

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from './tabs';

test('switches visible panels when a tab is clicked', async () => {
  const user = userEvent.setup();

  render(
    <Tabs.Root defaultValue="account">
      <Tabs.List>
        <Tabs.Tab id="account">Account</Tabs.Tab>
        <Tabs.Tab id="security">Security</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="account">Account panel</Tabs.Panel>
      <Tabs.Panel id="security">Security panel</Tabs.Panel>
    </Tabs.Root>
  );

  expect(screen.getByRole('tab', { name: 'Account' })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('tabpanel', { name: /account/i })).toBeVisible();

  await user.click(screen.getByRole('tab', { name: 'Security' }));

  expect(screen.getByRole('tab', { name: 'Security' })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('tabpanel', { name: /security/i })).toBeVisible();
});
```

## Review checklist

- Query by role, label, or accessible name where possible.
- Prefer real interactions over direct state manipulation.
- Verify disabled, controlled, and default states if supported.
- Add a regression test before refactoring brittle child logic.
- Confirm accessibility semantics after composition changes.
