# Pattern Selection Matrix

Use this matrix when the right React composition pattern is not obvious.

| Smell or goal | Preferred pattern | Why this is usually the best choice | Escalate to | Avoid by default |
| --- | --- | --- | --- | --- |
| A component has a few clear options | Plain props | Lowest complexity and simplest API | Explicit variants if combinations become invalid | Context |
| A parent provides framing while callers provide nested UI | `children` | Native composition; readable call sites | Named slots if multiple child regions need clarity | Render props for simple nesting |
| Several booleans represent mutually exclusive modes | Explicit variants or constrained variant prop | Removes impossible states and clarifies intent | Separate subcomponents if modes diverge heavily | More booleans |
| Sibling descendants must coordinate open state, selected value, active step, etc. | Compound components with context | Gives descendants shared state without prop drilling | Reducer-backed provider when logic grows | Child rewriting |
| Consumers need access to state + callbacks but must fully control rendered markup | Render prop | Keeps logic inside while allowing rendering outside | Headless hook if the repo pattern prefers hooks | Render props for basic wrappers |
| Current implementation counts, filters, or rewrites children | Explicit slots or context-backed subcomponents | More explicit, less brittle under wrappers/fragments | Render prop if caller needs render control | `Children` / `cloneElement` as the first choice |
| Public API needs focus or measurement access | Ref prop; `useImperativeHandle` only if necessary | Narrow imperative escape hatch | Dedicated focus management abstraction | Large imperative method sets |
| Internal transitions are getting hard to reason about | Reducer + provider contract | Makes events and state transitions explicit | State machine or separate architectural skill if far more complex | Many cross-coupled `useState` setters |

## Quick routing rules

- If ordinary props solve it, stop there.
- If the need is structural, use `children`.
- If the need is coordination across descendants, use context-backed compounds.
- If the need is consumer render control, use a render prop.
- If the design depends on inspecting or rewriting arbitrary children, pause and justify why simpler patterns do not work.

## Validation prompts

Ask these before finalizing the pattern choice:

1. Can invalid API states still be expressed?
2. Does the pattern force consumers to learn hidden structure?
3. Would wrappers, fragments, or reordered children break the API?
4. Is state ownership obvious from the public contract?
5. Does the pattern fit the current React version in the repo?
6. Is there a simpler pattern that preserves clarity?
