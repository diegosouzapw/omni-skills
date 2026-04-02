# Linux Wayland and X11 Notes

## Why this matters

Linux screenshot behavior differs significantly between X11 and Wayland. A command that works on X11 may be restricted, mediated, or unavailable on Wayland.

## Quick check

```bash
printf '%s\n' "${XDG_SESSION_TYPE:-unknown}"
```

## Environment guidance

| Environment | What to expect |
| --- | --- |
| X11 | Classic tools such as `scrot` and ImageMagick `import` are more likely to work as expected |
| Wayland | Desktop or portal mediation may apply; window and region capture may behave differently |
| Sandboxed desktop/app context | Portal-driven capture may be required, and direct screen access may be limited |

## Helper backend order

The packaged helper prefers:

1. `scrot`
2. `gnome-screenshot`
3. `import`

## Verification commands

```bash
command -v scrot || true
command -v gnome-screenshot || true
command -v import || true
```

## Practical guidance

- If a screenshot is blank or black on Wayland, suspect session restrictions first.
- If region capture is required, verify that the selected backend supports it in the current environment.
- If no supported backend is installed, ask the user to install one before retrying.
- Do not assume window targeting works the same on all desktops.

## Safe expectation setting

When Linux behavior is environment-dependent, say so clearly and report what was attempted.
