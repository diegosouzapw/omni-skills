# Playwright Selector and Waiting Guide

## Preferred locator order

Use the most user-facing stable locator available:

1. `getByRole()`
2. `getByLabel()`
3. `getByPlaceholder()`
4. `getByText()`
5. stable test id
6. stable CSS selector as fallback
7. XPath only as a last resort

## Why

Playwright performs actionability checks and auto-waiting. Locator-based interactions are usually more resilient than raw selectors and manual sleeps.

## Preferred patterns

```javascript
await page.getByLabel('Email').fill(TEST_EMAIL)
await page.getByLabel('Password').fill(TEST_PASSWORD)
await page.getByRole('button', { name: /sign in/i }).click()
```

```javascript
await page.getByRole('heading', { name: /dashboard/i }).waitFor()
```

## Avoid as a default

```javascript
await page.waitForTimeout(1000)
```

Use fixed timeouts only for temporary debugging, not normal automation.

## Common recovery moves

- If the element exists but cannot be clicked, check overlays, disabled state, animation, or detachment.
- If the selector is flaky, narrow the locator to a section, dialog, or form.
- If the app is dynamic, assert on the user-visible result instead of internal implementation details.
