# JS/TS Alias-Aware Analysis Example

## Scenario

A TypeScript frontend repo has this structure:

```text
src/features/survey/
├── index.ts
├── SurveyPage.tsx
├── SurveyValidator.ts
├── SurveyFormatter.ts
├── templates/
│   ├── EmailTemplate.tsx
│   └── SmsTemplate.tsx
└── hooks/
    └── useSurvey.ts
```

Imports use aliases:

```ts
import { SurveyPage } from '@/features/survey'
import { SurveyValidator } from '@/features/survey/SurveyValidator'
import { EmailTemplate } from '@/features/survey/templates/EmailTemplate'
```

## Analysis

### Candidate files in the feature root

| File | First impression | Better classification | Why |
| --- | --- | --- | --- |
| `index.ts` | root-level file | public API surface | barrel export, do not move casually |
| `SurveyPage.tsx` | root-level implementation | composition / route / layout shell | likely owns page composition |
| `SurveyValidator.ts` | root-level file | shared utility | consumed by multiple children |
| `SurveyFormatter.ts` | root-level file | shared utility | formatting helper, not page shell |

## Recommendation

- Keep `index.ts` in place.
- Keep `SurveyPage.tsx` in place if it is the page/composition shell.
- Move `SurveyValidator.ts` and `SurveyFormatter.ts` into a shared utilities area if that improves clarity, for example:

```text
src/features/survey/
├── index.ts
├── SurveyPage.tsx
├── shared/
│   ├── SurveyValidator.ts
│   └── SurveyFormatter.ts
├── templates/
│   ├── EmailTemplate.tsx
│   └── SmsTemplate.tsx
└── hooks/
    └── useSurvey.ts
```

## Verification focus

- update alias-based imports
- re-check barrel exports in `index.ts`
- run typecheck and build
- verify route/page loading still works
