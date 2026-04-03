import fs from 'node:fs';
import process from 'node:process';

const reportPath = process.argv[2];

if (!reportPath) {
  console.error('Usage: node examples/parse-lhr-report.mjs <report.json>');
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

const perfScore = Math.round(((report.categories?.performance?.score) || 0) * 100);
const metrics = [
  'first-contentful-paint',
  'largest-contentful-paint',
  'cumulative-layout-shift',
  'total-blocking-time',
];

console.log(`Report: ${reportPath}`);
console.log(`Performance score: ${perfScore}`);

for (const metric of metrics) {
  const audit = report.audits?.[metric];
  if (audit) {
    console.log(`${metric}: ${audit.displayValue || audit.numericValue || 'n/a'}`);
  }
}

const failedAudits = Object.values(report.audits || {})
  .filter((audit) => audit && audit.score !== null && typeof audit.score === 'number' && audit.score < 0.9)
  .slice(0, 10)
  .map((audit) => `- ${audit.id}: ${audit.title} (${audit.displayValue || audit.score})`);

if (failedAudits.length) {
  console.log('Notable audits below 0.9:');
  for (const line of failedAudits) console.log(line);
}
