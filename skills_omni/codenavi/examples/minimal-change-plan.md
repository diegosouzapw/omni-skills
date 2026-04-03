# Minimal Change Plan Example

```text
Mission: Fix coupon validation schema mismatch
Scope: src/services/coupon.ts, tests/coupon.test.ts

Approach:
1. Confirm current response schema in docs and existing tests
   → files: docs/, tests/coupon.test.ts
   → verify: field name evidence captured in notes
2. Update property access in coupon service
   → files: src/services/coupon.ts
   → verify: targeted test passes
3. Search for remaining outdated field usage
   → files: src/services/, tests/
   → verify: no stale references remain

Risks:
- Another consumer may still expect the old shape

Fallback:
- Stop after recon and ask for guidance if the external contract is still ambiguous
```
