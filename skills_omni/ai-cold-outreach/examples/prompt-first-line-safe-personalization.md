# Safe First-Line Personalization Prompts

Use these prompts to generate first lines grounded in verified business signals.

## Rules for every prompt

- only use facts present in the input
- do not invent results, relationships, or timing
- do not reference sensitive or personal traits
- avoid hype, flattery, and “I saw you were busy scaling” filler
- produce one sentence only
- keep it natural and specific

## Prompt 1: hiring signal

```text
Write 10 cold-email first lines for a VP Sales audience.
Use only these provided facts: company name, recent AE hiring count, team size, and segment.
Ground each line in the hiring signal.
Do not mention private browsing behavior, personal traits, or unverifiable pain.
Do not use clichés like “hope this finds you well” or “quick question.”
Return one sentence per option.
```

## Prompt 2: funding or expansion signal

```text
Generate 8 first-line options for a B2B SaaS prospect.
Use only the verified facts in the record: recent funding event, new market expansion, and role title.
Make each line specific but not creepy.
Do not claim they have a problem unless the fact directly supports it.
Keep each option under 22 words.
```

## Prompt 3: tech-stack change

```text
Create 6 first lines using only the confirmed technology-change signal in the input.
Do not guess their internal metrics.
Do not use praise unless it is tied to a real public event.
Make each line sound like a normal business observation.
```

## Prompt 4: no safe signal available

If the signal is weak, do not force personalization.

```text
Given this sparse lead record, decide whether safe personalization is possible.
If not, return: "No strong personalization signal available; use segment-level opener instead."
Otherwise, provide up to 3 first lines using only verified facts.
```
