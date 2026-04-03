import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('account settings page has no detected axe violations in configured scan', async ({ page }) => {
  await page.goto('http://localhost:3000/account/settings')

  await expect(page.getByRole('heading', { name: /account settings/i })).toBeVisible()

  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})

// Note:
// Passing this test means no issues were detected by this configured automated scan.
// It does not prove full WCAG compliance.
