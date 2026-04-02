# Locator-First Debugging Snippets

Prefer these patterns over brittle selectors or direct DOM mutation for signoff.

## Click a visible button by role

```javascript
await page.getByRole('button', { name: /save/i }).click();
```

## Fill an input by label

```javascript
await page.getByLabel(/email/i).fill('user@example.com');
```

## Wait for visible success text

```javascript
await page.getByText(/saved successfully/i).waitFor();
```

## Scope inside a region

```javascript
const dialog = page.getByRole('dialog');
await dialog.getByRole('button', { name: /confirm/i }).click();
```

## Use bounding box only after stable targeting

```javascript
const locator = page.getByRole('img', { name: /preview/i });
const box = await locator.boundingBox();
console.log(box);
```
