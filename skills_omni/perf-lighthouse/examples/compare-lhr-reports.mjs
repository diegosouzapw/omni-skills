import fs from 'node:fs';
import process from 'node:process';

const baselinePath = process.argv[2];
const candidatePath = process.argv[3];

if (!baselinePath || !candidatePath) {
  console.error('Usage: node examples/compare-lhr-reports.mjs <baseline.json> <candidate.json>');
  process.exit(1);
}

const baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf8'));
const candidate = JSON.parse(fs.readFileSync(candidatePath, 'utf8'));

const metrics = [
  'first-contentful-paint',
  'largest-contentful-paint',
  'cumulative-layout-shift',
  'total-blocking-time',
];

for (const metric of metrics) {
  const base = baseline.audits?.[metric]?.numericValue;
  const current = candidate.audits?.[metric]?.numericValue;

  if (typeof base !== 'number' || typeof current !== 'number') {
    console.log(`SKIP ${metric}: missing in one of the reports`);
    continue;
  }

  const diff = current - base;
  const pct = base === 0 ? 'n/a' : `${((diff / base) * 100).toFixed(1)}%`;
  const better = current <= base;
  console.log(`${better ? 'OK' : 'REGRESSION'} ${metric}: ${base.toFixed(2)} -> ${current.toFixed(2)} (${pct})`);
}
