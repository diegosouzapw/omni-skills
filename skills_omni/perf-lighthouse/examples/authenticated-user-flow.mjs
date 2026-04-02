import fs from 'node:fs/promises';
import process from 'node:process';
import puppeteer from 'puppeteer';
import {startFlow} from 'lighthouse';

const url = process.argv[2] || 'https://example.com';

const browser = await puppeteer.launch({headless: true});
try {
  const page = await browser.newPage();

  // Replace the steps below with app-specific authentication and navigation.
  await page.goto(url, {waitUntil: 'networkidle0'});

  const flow = await startFlow(page, {
    name: 'authenticated-or-multi-step-flow',
  });

  await flow.navigate(url, {stepName: 'initial-load'});

  // Example interaction placeholder.
  // await page.click('[data-test="open-dashboard"]');
  // await page.waitForNetworkIdle();
  // await flow.snapshot({stepName: 'dashboard-loaded'});

  const reportHtml = await flow.generateReport();
  await fs.mkdir('./artifacts', {recursive: true});
  await fs.writeFile('./artifacts/user-flow-report.html', reportHtml);
  console.log('Saved user flow report to ./artifacts/user-flow-report.html');
} finally {
  await browser.close();
}
