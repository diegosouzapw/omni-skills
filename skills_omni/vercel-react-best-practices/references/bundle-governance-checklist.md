# Bundle Governance Checklist

Use this checklist when initial JS, hydration, or route responsiveness is poor.

## 1. Check client boundary sprawl

- Which files are marked with `'use client'`?
- Is a large page or layout client-side only because of a small interactive child?
- Can interactive logic be isolated into smaller client islands?

## 2. Inspect dependency shape

Look for:

- heavy libraries imported in client components
- broad barrel imports when direct imports are possible
- shared utilities that accidentally pull in large transitive dependencies
- admin or editor dependencies loaded on user-facing routes

## 3. Apply lazy loading where it helps

Good candidates:

- modals
- charts
- editors
- maps
- rarely used settings panels
- below-the-fold interactive widgets

Avoid lazy loading:

- tiny components with no meaningful bundle impact
- critical above-the-fold content that must render immediately

## 4. Review third-party scripts

For each script or embed, ask:

- Is it necessary?
- Can it load after the main content?
- Is Next Script strategy being used appropriately?
- Is placement safe and aligned with framework guidance?

## 5. Protect hydration performance

- Avoid pushing server-only work into client components.
- Avoid shipping large serialized props.
- Avoid broad context providers that force large subtrees to hydrate and re-render together.

## Review output

A strong review should identify:

- what is inflating initial JS
- what should move back to the server
- what can be lazy loaded safely
- what third-party code should be deferred or removed
