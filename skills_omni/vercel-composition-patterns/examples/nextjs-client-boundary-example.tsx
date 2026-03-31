// app/settings/page.tsx
import { SettingsTabsClient } from './settings-tabs-client';

export default async function SettingsPage() {
  const data = await getSettingsData();

  return (
    <section>
      <h1>Settings</h1>
      <SettingsTabsClient initialSection={data.initialSection} />
    </section>
  );
}

async function getSettingsData() {
  return { initialSection: 'profile' };
}

// app/settings/settings-tabs-client.tsx
'use client';

import * as React from 'react';

export function SettingsTabsClient({ initialSection }: { initialSection: string }) {
  const [current, setCurrent] = React.useState(initialSection);

  return (
    <div>
      <button type="button" onClick={() => setCurrent('profile')}>
        Profile
      </button>
      <button type="button" onClick={() => setCurrent('security')}>
        Security
      </button>
      <div>{current === 'profile' ? 'Profile content' : 'Security content'}</div>
    </div>
  );
}

/*
Use this split when a composition pattern needs hooks or context:
- server file loads data
- client file owns interactive state and providers
*/
