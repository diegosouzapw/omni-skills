const { chromium, request } = require('playwright')

const TARGET_URL = process.env.TARGET_URL
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN

if (!TARGET_URL) throw new Error('TARGET_URL is required')
if (!ALLOWED_ORIGIN) throw new Error('ALLOWED_ORIGIN is required')

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  const api = await request.newContext()

  try {
    await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded' })

    const hrefs = await page.locator('a[href]').evaluateAll((els) =>
      els.map((el) => el.getAttribute('href')).filter(Boolean)
    )

    const urls = [...new Set(hrefs.map((href) => new URL(href, location.href).toString()))]
      .filter((url) => url.startsWith(ALLOWED_ORIGIN))

    const results = []

    for (const url of urls) {
      let response
      try {
        response = await api.fetch(url, { method: 'HEAD', failOnStatusCode: false })
        if (response.status() === 405 || response.status() === 501) {
          response = await api.fetch(url, { method: 'GET', failOnStatusCode: false })
        }
        results.push({ url, status: response.status(), ok: response.ok() })
      } catch (error) {
        results.push({ url, error: error.message, ok: false })
      }
    }

    const broken = results.filter((r) => !r.ok)
    console.log(JSON.stringify({ checked: results.length, broken }, null, 2))
  } finally {
    await api.dispose()
    await browser.close()
  }
})()
