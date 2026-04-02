const { chromium } = require('playwright')

const TARGET_URL = process.env.TARGET_URL
const TEST_EMAIL = process.env.TEST_EMAIL
const TEST_PASSWORD = process.env.TEST_PASSWORD
const HEADLESS = process.env.HEADLESS !== 'false'
const ARTIFACT_DIR = '/tmp/playwright-artifacts'

if (!TARGET_URL) throw new Error('TARGET_URL is required')
if (!TEST_EMAIL) throw new Error('TEST_EMAIL is required')
if (!TEST_PASSWORD) throw new Error('TEST_PASSWORD is required')

;(async () => {
  const fs = require('fs')
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true })

  const browser = await chromium.launch({ headless: HEADLESS })
  const context = await browser.newContext()
  const page = await context.newPage()

  try {
    await page.goto(`${TARGET_URL.replace(/\/$/, '')}/login`, { waitUntil: 'domcontentloaded' })

    await page.getByLabel(/email/i).fill(TEST_EMAIL)
    await page.getByLabel(/password/i).fill(TEST_PASSWORD)
    await page.getByRole('button', { name: /sign in|log in/i }).click()

    await page.waitForURL(/dashboard|account|home/i, { timeout: 15000 })
    console.log('Login flow reached post-login URL:', page.url())

    await page.screenshot({
      path: `${ARTIFACT_DIR}/login-success.png`,
      fullPage: true,
    })
  } catch (error) {
    await page.screenshot({
      path: `${ARTIFACT_DIR}/login-failure.png`,
      fullPage: true,
    })
    console.error('Login flow failed:', error.message)
    throw error
  } finally {
    await context.close()
    await browser.close()
  }
})()
