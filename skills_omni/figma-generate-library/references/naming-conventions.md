# Naming Conventions Reference

Match existing conventions when they are coherent. If starting fresh, use deterministic names that align with code.

## Variables

Use slash-separated names such as:

```text
color/bg/primary
color/text/secondary
color/border/default
spacing/xs
spacing/sm
spacing/md
radius/sm
radius/md
typography/body/font-size
```

Primitive examples:

```text
blue/50
blue/100
gray/900
```

## Components

Use stable public names such as:

```text
Button
Input
Card
Avatar
Badge
Checkbox
Toggle
```

## Variants

Use property/value naming:

```text
Size=Medium, Style=Primary, State=Default
```

## Pages

Use obvious page names and separators where needed, for example:
- `Foundations`
- `Components`
- `---`

## Rules

- preserve code names where possible
- do not silently rename implementation concepts
- keep casing and separators consistent
- prefer clarity over clever abbreviations
- use deterministic names to support idempotent retries and cleanup
