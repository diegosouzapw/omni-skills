# Eval Design Checklist

## Change Definition

- The exact prompt, model, tool, or workflow change is stated
- Blocking failure modes are listed explicitly

## Dataset Coverage

- Happy-path cases exist
- Edge or adversarial cases exist
- Refusal or escalation behavior is represented when relevant
- Hard cases are preserved across revisions

## Scoring Contract

- Rubric axes are short and clear
- Automatic thresholds are separated from manual review
- Reviewer instructions are explicit

## Release Gate

- Pass threshold exists
- Manual-review criteria exist
- Blocking cases are named
- Coverage gaps are acknowledged
