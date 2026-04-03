# Contact Verification and Routing Checklist

Use this before routing contacts to CRM or outbound systems.

## Verification checks

- [ ] Email syntax valid
- [ ] Domain has valid MX / mail handling
- [ ] Verification result is recent enough for policy
- [ ] Catch-all status evaluated
- [ ] Role-account status evaluated
- [ ] Risk classification assigned

## Eligibility checks

- [ ] Suppression / opt-out state known
- [ ] Do-not-contact rules applied
- [ ] Workflow use case allows outreach to this record class
- [ ] No stronger first-party value would be overwritten incorrectly

## Routing outcomes

### Route to approved outbound

Use only if:

- verification is recent
- not suppressed
- not invalid
- not high-risk beyond policy

### Route to CRM only

Use if:

- useful for account intelligence or future review
- not approved for direct outreach yet

### Hold for manual review

Use if:

- provider disagreement is material
- verification is borderline
- title/company match appears inconsistent

### Reject

Use if:

- invalid
- suppressed
- disallowed by policy
- no defensible provenance for key routing fields
