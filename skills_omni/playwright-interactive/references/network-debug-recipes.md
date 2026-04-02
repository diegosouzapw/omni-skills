# Network Debug Recipes

Use network inspection when UI state depends on backend readiness, API responses, or failed requests.

## Failed requests

```javascript
page.on('requestfailed', request => {
  console.log('FAILED', request.method(), request.url(), request.failure()?.errorText);
});
```

## Basic response inspection

```javascript
page.on('response', async response => {
  const url = response.url();
  if (!url.includes('/api/')) return;
  console.log('API', response.status(), url);
});
```

## Wait for an expected API response

```javascript
const responsePromise = page.waitForResponse(response =>
  response.url().includes('/api/items') && response.status() === 200
);

await page.getByRole('button', { name: /refresh/i }).click();
const response = await responsePromise;
console.log('Received', response.status(), response.url());
```

## Readiness diagnosis

Use this when the app shell loads but the real content never appears.

- Verify the expected API request was made.
- Verify the response status and timing.
- Confirm the UI state changed after the response.
- If the request never happened, the bug may be in client-side readiness, routing, or interaction flow.
