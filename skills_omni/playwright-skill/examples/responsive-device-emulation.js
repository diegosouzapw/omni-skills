const { chromium, devices } = require('playwright')

const TARGET_URL = process.env.TARGET_URL
const ARTIFACT_DIR = '/tmp/playwright-artifacts'

if (!TARGET_URL) throw new Error('TARGET_URL is required')

;(async () => {
  const fs = require('fs')
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true })

  const browser = await chromium.launch({ headless: true })

  const runs = [
    {
      name: 'desktop',
      contextOptions: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'mobile-iphone-13',
      contextOptions: devices['iPhone 13'],
    },
  ]

  for (const run of runs) {
    const context = await browser.newContext(run.contextOptions)
    const page = await context.newPage()
    await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded' })
    await page.screenshot({
      path: `${ARTIFACT_DIR}/${run.name}.png`,
      fullPage: true,
    })
    console.log(`Saved ${run.name} screenshot`)
    await context.close()
  }

  await browser.close()
})()
