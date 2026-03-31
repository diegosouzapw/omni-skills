# Example: Cache and Revalidation Decision Matrix

Use this matrix to explain intended route behavior before changing fetch settings.

| Situation | Likely intent | Review direction |
| --- | --- | --- |
| Marketing page with infrequent updates | Mostly static | Favor static generation or infrequent revalidation |
| Product list refreshed every few minutes | Fresh but cacheable | Use explicit revalidation rather than fully dynamic rendering |
| User-specific dashboard | Per-request or personalized | Dynamic behavior may be correct |
| Admin mutation updates downstream content | Event-driven freshness | Review invalidation and revalidation triggers |
| Route became slow after adding request-scoped data | Accidentally dynamic | Re-check whether that dependency belongs on the critical path |

## Review note

Do not solve every freshness complaint by turning the whole route dynamic. State the intended freshness model first.
