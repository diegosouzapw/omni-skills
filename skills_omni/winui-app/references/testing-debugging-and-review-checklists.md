# Testing, Debugging, and Review Checklists

Use this guide before handoff, merge, or “done” claims.

## Core checklist

- Environment assumptions are stated, not guessed
- Packaged vs unpackaged model is explicit
- Project builds successfully
- App actually launches and shows a usable top-level window
- Navigation and startup behavior match the request
- Light and dark themes remain usable
- Keyboard navigation and focus behavior were checked
- Accessible names/semantics were considered
- Narrow and wide layouts were reviewed
- CommunityToolkit additions, if any, are justified
- Deployment/runtime assumptions are called out when relevant

## Debugging discipline

- classify the problem before changing many variables
- use template comparison when the project has drifted far from a known-good state
- prefer evidence-led diagnosis over cleanup folklore
- hand off with context when the main problem leaves WinUI scope
