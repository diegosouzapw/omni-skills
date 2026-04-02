const { chromium } = require('playwright')

const TARGET_URL = process.env.TARGET_URL
const ARTIFACT_DIR = '/tmp/playwright-artifacts'

if (!TARGET_URL) throw new Error('TARGET_URL is required')

;(async () => {
  const fs = require('fs')
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true })

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  await context.tracing.start({ screenshots: true, snapshots: true })
  const page = await context.newPage()

  try {
    await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded' })
    await page.getByRole('main').waitFor({ timeout: 10000 })
    console.log('Flow succeeded')
  } catch (error) {
    await page.screenshot({ path: `${ARTIFACT_DIR}/failure.png`, fullPage: true })
    await context.tracing.stop({ path: `${ARTIFACT_DIR}/trace.zip` })
    console.error('Flow failed:', error.message)
    throw error
  }

  await context.tracing.stop({ path: `${ARTIFACT_DIR}/trace.zip` })
  await context.close()
  await browser.close()
})()
