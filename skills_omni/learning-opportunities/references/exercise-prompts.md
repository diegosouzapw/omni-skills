# Exercise Prompt Library

Use these prompts as patterns. Customize the file path, symbol, or migration step.

## Consent gate

- `Would you like a 1-3 minute learning exercise on this change, or should I keep shipping?`
- `I can explain this directly, or give you a short exercise so you can build the mental model yourself. Which do you prefer?`

## Predict then observe

- `In <file>, what do you think happens when <condition>? (Take your best guess.)`
- `Before we run it, what output do you expect from <function> when <input>?`

## Generate then compare

- `Before I show the implementation, how would you structure <responsibility>?`
- `How would you separate <concern A> from <concern B> in this handler?`

## Teach it back

- `Explain how <component> works as if I'm a new teammate.`
- `In your own words, what is this function responsible for, and what should it never do?`

## Transfer prompt

- `We used this pattern here. Where else in the codebase would it help?`
- `If you wanted to reuse this approach in <other area>, what would stay the same?`

## Error analysis

- `If someone removed this check, what do you think would break first?`
- `If this migration skipped backfilling old rows, what consequence would you expect?`

## Decline and resume

- `No problem — I'll keep moving and give you the short version as I go.`
- `Got it. I'll stay in delivery mode and only explain what's necessary.`
