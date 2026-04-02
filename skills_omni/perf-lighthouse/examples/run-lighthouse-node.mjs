import fs from 'node:fs/promises';
import process from 'node:process';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const url = process.argv[2];
const outputPath = process.argv[3] || './artifacts/lhr.json';

if (!url) {
  console.error('Usage: node examples/run-lighthouse-node.mjs <url> [output-path]');
  process.exit(1);
}

let chrome;

try {
  chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });

  const result = await lighthouse(url, {
    port: chrome.port,
    output: 'json',
    logLevel: 'info',
    onlyCategories: ['performance'],
    formFactor: 'mobile',
    throttlingMethod: 'devtools',
  });

  await fs.mkdir(new URL('.', `file://${process.cwd()}/${outputPath}`).pathname, { recursive: true }).catch(() => {});
  await fs.writeFile(outputPath, result.report);

  const score = Math.round((result.lhr.categories.performance.score || 0) * 100);
  const lcp = result.lhr.audits['largest-contentful-paint']?.displayValue || 'n/a';
  const cls = result.lhr.audits['cumulative-layout-shift']?.displayValue || 'n/a';

  console.log(`Saved report to ${outputPath}`);
  console.log(`Performance score: ${score}`);
  console.log(`LCP: ${lcp}`);
  console.log(`CLS: ${cls}`);
} finally {
  if (chrome) {
    await chrome.kill();
  }
}
