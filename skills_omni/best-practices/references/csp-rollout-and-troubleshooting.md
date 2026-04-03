# CSP Rollout and Troubleshooting

Use this guide when adding or tightening CSP in a way that could break production behavior.

## Recommended rollout sequence

1. Inventory inline scripts, inline styles, eval-like usage, third-party origins, and embedded frames.
2. Draft a minimal policy that matches actual needs.
3. Deploy as `Content-Security-Policy-Report-Only` first.
4. Review violations and remove unnecessary sources.
5. Replace inline code with nonce or hash handling where possible.
6. Move to enforced CSP after verification.

## Safer pattern example

```text
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-random123';
  style-src 'self' 'nonce-random123';
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'self';
  form-action 'self';
```

## Common failure modes

### Inline scripts stop working

**Likely cause:** missing nonce or hash, or reliance on permissive inline execution.  
**Fix:** move code out of inline blocks or apply a per-response nonce consistently in markup and header generation.

### Third-party script is blocked

**Likely cause:** origin not listed, or the script injects further resources unexpectedly.  
**Fix:** verify whether the dependency is truly needed before allowlisting it. If needed, scope the allowance as narrowly as possible.

### Styles break after enforcement

**Likely cause:** inline styles or style attributes are still in use.  
**Fix:** move styles into stylesheet files or use a nonce/hash approach where necessary.

### Nonce mismatch

**Likely cause:** server, template, and cache layers are not using the same nonce value per response.  
**Fix:** trace header generation and rendered markup together; ensure one nonce value is applied consistently for that response.

## Rollback guidance

If production behavior is broken:

- revert from enforced CSP to `Report-Only`
- keep evidence of blocked resources
- narrow the diagnosis before widening the policy
- avoid permanent permissive exceptions added under pressure without documentation

## Review questions

- Does the policy reflect actual resource needs?
- Are nonces or hashes generated and applied correctly?
- Are dangerous exceptions being added as shortcuts?
- Is the team prepared to monitor violations after rollout?
