# Network Inspection Snippets

## Log failed requests

```javascript
page.on('requestfailed', request => {
  console.log('FAILED', request.method(), request.url(), request.failure()?.errorText);
});
```

## Log API responses

```javascript
page.on('response', async response => {
  if (!response.url().includes('/api/')) return;
  console.log('API', response.status(), response.url());
});
```

## Wait for a specific response during a click flow

```javascript
const responsePromise = page.waitForResponse(response =>
  response.url().includes('/api/search') && response.status() === 200
);

await page.getByRole('button', { name: /search/i }).click();
const response = await responsePromise;
console.log('OK', response.url());
```
