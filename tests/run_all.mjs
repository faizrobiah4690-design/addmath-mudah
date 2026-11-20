import { parseCliArgs } from './lib/loader.mjs';
import { runTier1 } from './test_content_integrity.mjs';
import { runTier2 } from './test_boundary_cases.mjs';
import { runBrowserTiers } from './test_browser_e2e.mjs';
import { runTier5 } from './test_tier5_adversarial.mjs';

const { strict, tiers } = parseCliArgs();
const wantTier = (n) => !tiers || tiers.includes(n);

const startedAt = Date.now();
const results = [];

console.log(`AddMath Mudah E2E Test Suite — Mode: ${strict ? 'STRICT (M6 Gate)' : 'BASELINE'} | Tiers: ${tiers ? tiers.join(',') : '1,2,3,4,5'}`);

if (wantTier(1)) {
  results.push(await runTier1({ strict }));
}
if (wantTier(2)) {
  results.push(await runTier2({ strict }));
}
if (wantTier(3) || wantTier(4)) {
  results.push(await runBrowserTiers({ strict, runTier3: wantTier(3), runTier4: wantTier(4) }));
}
if (wantTier(5)) {
  results.push(await runTier5({ strict }));
}

const elapsedSec = ((Date.now() - startedAt) / 1000).toFixed(2);
const totalPass = results.reduce((a, r) => a + r.testPass, 0);
const totalWarn = results.reduce((a, r) => a + r.testWarn, 0);
const totalFail = results.reduce((a, r) => a + r.testFail, 0);
const totalAssertionsPass = results.reduce((a, r) => a + r.totalPass, 0);
const totalAssertionsWarn = results.reduce((a, r) => a + r.totalWarn, 0);
const totalAssertionsFail = results.reduce((a, r) => a + r.totalFail, 0);

console.log('\n============================================================');
console.log(`FINAL E2E SUMMARY (${strict ? 'STRICT' : 'BASELINE'}) — ${elapsedSec}s`);
for (const r of results) {
  const status = r.totalFail > 0 ? 'FAIL' : r.totalWarn > 0 ? 'WARN' : 'PASS';
  console.log(
    `  [${status}] ${r.suiteName} -> tests(P:${r.testPass} W:${r.testWarn} F:${r.testFail}) assertions(P:${r.totalPass} W:${r.totalWarn} F:${r.totalFail})`
  );
}
console.log(
  `OVERALL: tests [PASS=${totalPass}, WARN=${totalWarn}, FAIL=${totalFail}] | assertions [pass=${totalAssertionsPass}, warn=${totalAssertionsWarn}, fail=${totalAssertionsFail}]`
);
console.log('============================================================');

const exitOk = totalAssertionsFail === 0 && (!strict || totalAssertionsWarn === 0);
process.exit(exitOk ? 0 : 1);
