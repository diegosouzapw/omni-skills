# TikTok Spark Ads Runbook

Use this runbook for planning or troubleshooting creator amplification through TikTok Spark Ads.

## What Spark Ads are for

Spark Ads allow promotion of eligible organic TikTok posts using the original post identity, subject to TikTok's current requirements and ad authorization flow.

## Preflight prerequisites

Before planning scale, confirm:

- the creator has published or will publish an eligible organic post
- the creator is willing to authorize ad use
- the brand knows the intended authorization duration
- the post contains acceptable disclosures when sponsorship exists
- the creative avoids policy-sensitive claims or misleading edits

## Setup sequence

1. Confirm the exact TikTok account and post that will be used.
2. Ask the creator to generate the current ad authorization for that post using TikTok's current UI.
3. Record the authorization duration and expiry date.
4. In TikTok Ads Manager, import or apply the authorization according to TikTok's current Spark Ads workflow.
5. Verify the post appears correctly before launching spend.
6. Keep a backup plan for organic-only validation if authorization fails.

## Common failure modes

### Authorization code is invalid or expired

Check:

- whether the code has expired
- whether the creator issued the code for the correct post
- whether the code was copied accurately
- whether the creator changed settings after generating the code

Fix:

- request a fresh authorization
- verify duration and intended usage window

### Post is not eligible or not visible

Check:

- whether the post is published and available
- whether the post type or settings limit ad use
- whether the account and post identity match the intended campaign

Fix:

- re-confirm the exact post
- have the creator republish or re-authorize if appropriate
- validate with current TikTok help documentation if the UI has changed

### Ad is rejected after authorization

Check:

- claim language
- disclosure quality
- restricted category issues
- misleading edits or synthetic media concerns

Fix:

- resolve the policy issue before iterating more creative
- do not assume authorization overrides policy review

## Operator notes

- Treat TikTok UI labels as changeable; confirm against current help-center guidance.
- Record which creator, post, authorization date, and expiry belong to each campaign.
- Do not continue scaling advice when the authorization path itself is broken.
