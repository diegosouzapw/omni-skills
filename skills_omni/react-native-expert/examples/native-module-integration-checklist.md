# Native Module Integration Checklist

Use this when adding a package or capability that may cross the Expo native boundary.

## Questions to answer

- Does this dependency require native code not available in Expo Go?
- Does it add or modify a config plugin?
- Does it require permissions declarations?
- Does it change `app.json` or `app.config.*` output?
- Does it require rebuilding an existing development build?

## Expected conclusion format

```text
Runtime decision:
- Expo Go sufficient: yes/no
- Development build required: yes/no
- Prebuild/rebuild required: yes/no

Why:
- <brief explanation>

Operator follow-up:
- <commands or rebuild notes, kept narrow and safe>
```
