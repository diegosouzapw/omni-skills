# Playwright Authentication and Secrets Guide

## Rules

- Use test accounts whenever possible.
- Pass credentials through environment variables.
- Use a fresh browser context for auth-sensitive work.
- Treat storage state, traces, screenshots, and videos as sensitive artifacts.

## Minimal credential pattern

```bash
TARGET_URL="http://localhost:3001" \
TEST_EMAIL="user@example.com" \
TEST_PASSWORD="<test-password>" \
cd "$SKILL_DIR" && node run.js /tmp/playwright-test-login.js
```

## Storage state cautions

Saved auth state may contain cookies or headers that grant access.

Do not:
- commit storage state files
- attach them to tickets casually
- reuse them across unrelated tasks without verifying freshness and permission

## Before sharing artifacts

Review for:
- session cookies or tokens
- personal data
- internal URLs
- account-specific dashboards
- secrets shown in forms or error messages
