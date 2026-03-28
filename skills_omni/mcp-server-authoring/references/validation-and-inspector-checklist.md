# Validation And Inspector Checklist

Use this checklist to validate the server at the protocol level.

## Lifecycle checks

- [ ] Server responds to initialize correctly
- [ ] Advertised capabilities match actual implementation
- [ ] Unsupported features fail clearly rather than silently
- [ ] Shutdown behavior is documented

## Surface checks

- [ ] Tools are listed as expected
- [ ] Resource URIs and templates resolve as documented
- [ ] Prompts can be retrieved with stable arguments
- [ ] Read-only vs write-capable behavior is documented accurately

## Contract checks

- [ ] Tool input validation rejects malformed arguments cleanly
- [ ] Tool results follow a stable shape
- [ ] Error classes are distinguishable in logs and client behavior
- [ ] Timeout and cancellation behavior are defined

## Transport checks

- [ ] Each target transport has at least one smoke test
- [ ] Remote transport paths were tested through real intermediaries when relevant
- [ ] Mixed-client transport assumptions are recorded in the compatibility matrix

## Client checks

- [ ] At least one smoke test was run for each target client or client class
- [ ] Unsupported client features are documented explicitly
- [ ] Client-specific launch/config steps are separated from the protocol contract

## Evidence to retain

- capability snapshot
- sample request/response captures
- failed-case notes for unsupported scenarios
- compatibility matrix revision used for release
