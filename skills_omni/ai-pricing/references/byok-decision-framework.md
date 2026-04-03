# BYOK Decision Framework

Use this when a prospect or customer asks for bring-your-own-key or bring-your-own-provider-account packaging.

## What BYOK is really about

BYOK is not only a margin choice. It is usually a mix of:
- procurement requirements
- data-governance expectations
- vendor concentration concerns
- security review preferences
- cost allocation or cloud-commit utilization

## Options to compare

| Option | Description | Benefits | Risks |
| --- | --- | --- | --- |
| Managed | You provide and manage AI access | Simple UX, strong observability, easier support | Lower margin control if provider costs rise |
| BYOK | Customer supplies the AI key or provider account | Can reduce your inference burden, can unlock enterprise deals | More support complexity, weaker observability, fragmented UX |
| Hybrid enterprise | Managed by default, BYOK available only on specific plans | Flexible for enterprise, preserves simpler core product | More packaging complexity |

## Qualification questions

Ask:
- Is BYOK required by multiple real enterprise opportunities or only one prospect?
- Is the blocker procurement, security, legal, or cost allocation?
- Would BYOK materially accelerate deal closure?
- What product capabilities break or degrade under BYOK?
- What usage visibility would you lose?
- Can support still diagnose failures quickly?
- Will customers expect lower price if they bring the key?
- Does BYOK create plan fragmentation that hurts the core roadmap?

## Recommendation logic

### Recommend managed-first when
- most customers do not require BYOK
- product simplicity and support efficiency matter most
- observability is important to quality and support
- the buyer is not blocked on governance or procurement

### Recommend BYOK for enterprise-only when
- enterprise demand is real and repeated
- procurement or governance blocks deals without it
- support and product teams accept the complexity
- enterprise pricing can absorb the added packaging and support cost

### Avoid BYOK when
- it is driven by one anecdotal request
- it weakens core product quality or support too much
- it creates hidden implementation and operating burden with limited revenue upside

## Pricing implications to document

If BYOK is offered, define:
- whether platform fees still apply
- whether support scope changes
- whether feature availability differs from managed plans
- whether usage visibility and reporting are limited
- whether enterprise minimums or setup fees apply

## Decision summary template

- Demand pattern:
- Primary blocker solved by BYOK:
- Product / support costs introduced by BYOK:
- Margin impact:
- Recommended packaging: managed / BYOK enterprise-only / hybrid / no BYOK
- Conditions required before launch:
