# Auth, CORS, and Antiforgery Review Example

Use this example when browser requests fail or security rules are unclear.

## Review questions

- Is the caller a browser, server, or both?
- Is auth cookie-based, bearer-based, or mixed?
- Is CORS needed for this path at all?
- Does the browser flow require antiforgery protection?

## Example prompt

```text
Use @aspnet-core to review authentication, authorization, CORS, and antiforgery for these endpoints. Distinguish browser flows from API clients, keep CORS scoped to explicit origins, and identify any protections that are missing or unnecessarily broad.
```

## Expected result

- a scoped security review
- identified mismatches between caller type and protection model
- the smallest safe fixes
