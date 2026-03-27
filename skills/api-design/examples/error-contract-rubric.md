# Error Contract Rubric

| Concern | Check |
| --- | --- |
| Validation | Field-level and request-level problems are distinct |
| Authorization | Missing auth and forbidden access are not conflated |
| Conflicts | Duplicate or stale writes explain what collided |
| Rate limits | Retry signals and headers are documented |

## Review prompts

- Can a client recover automatically from this error?
- Is the response envelope consistent with successful responses?
- Does the message expose only the context the client needs?
