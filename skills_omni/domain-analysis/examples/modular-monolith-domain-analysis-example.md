# Example: Modular Monolith Domain Analysis

## Scope

A single repository contains modules for `billing`, `catalog`, `identity`, `notifications`, and `admin`.

## Evidence Summary

- `src/billing/invoice_service.ts` — invoice generation, payment reconciliation, refund rules
- `src/billing/subscription_change_handler.ts` — plan change workflow
- `src/catalog/product.ts` — product metadata and availability terms
- `src/identity/user_account.ts` — authentication and account lifecycle
- `src/notifications/email_sender.ts` — delivery mechanics, templated messaging
- `docs/billing-workflows.md` — business language for subscriptions, invoices, dunning

## Glossary and Term Collisions

| Term | Meaning | Context | Evidence | Confidence |
| --- | --- | --- | --- | --- |
| Account | login-bearing identity record | Identity | `src/identity/user_account.ts` | High |
| Account | billing account responsible for payment obligations | Billing | `src/billing/account_balance.ts` | High |
| Plan | commercial subscription tier | Billing | `subscription_change_handler.ts` | High |
| Product | sellable catalog item | Catalog | `src/catalog/product.ts` | High |

## Candidate Subdomains

### Billing
- Classification: Supporting
- Business capability: manage subscriptions, invoices, refunds, payment state
- Key concepts: Invoice, Subscription, BillingAccount, Refund
- Key workflows/events: invoice issued, payment captured, plan changed
- Evidence: billing services, workflow docs, invoice models
- Classification rationale: business-specific and important, but not the main differentiator for this example company
- Cohesion: 9/10
- Confidence: High

### Catalog
- Classification: Core
- Business capability: define and manage the products that drive customer value
- Key concepts: Product, Offer, AvailabilityRule
- Key workflows/events: product published, offer updated
- Evidence: catalog models, product rules, admin publishing flow
- Classification rationale: product definition is the competitive center of the business in this example
- Cohesion: 8/10
- Confidence: High

### Identity
- Classification: Generic
- Business capability: authenticate users and manage credentials
- Key concepts: UserAccount, Credential, Session
- Key workflows/events: sign-in, password reset, account locked
- Evidence: identity models and auth handlers
- Classification rationale: essential but broadly standardized
- Cohesion: 8/10
- Confidence: Medium

### Notifications
- Classification: Generic
- Business capability: deliver email and message notifications
- Key concepts: Template, Delivery, Recipient
- Key workflows/events: email queued, delivery failed
- Evidence: delivery services and templates
- Classification rationale: common cross-cutting capability, not differentiating
- Cohesion: 6/10
- Confidence: Medium

## Proposed Bounded Contexts

### Billing Context
- Purpose: subscription and payment obligations
- Ubiquitous language: invoice, subscription, refund, dunning, billing account
- Included concepts: invoice, refund, subscription state
- Excluded concepts: login credentials, product editorial metadata
- Invariant boundary: invoice/payment state consistency
- Term conflicts with other contexts: `Account`
- Dependencies: needs product pricing inputs from Catalog, user identity references from Identity
- Confidence: High

### Catalog Context
- Purpose: product and offer management
- Ubiquitous language: product, offer, availability, publication
- Included concepts: product definitions, offer rules
- Excluded concepts: payments, sessions
- Invariant boundary: product and offer publication rules
- Term conflicts with other contexts: none strong
- Dependencies: minimal outbound to Notifications for publication notices
- Confidence: High

## Context Map

| From | To | Relationship | Integration | Rationale | Confidence |
| --- | --- | --- | --- | --- | --- |
| Billing | Catalog | Published Language | pricing/product contract | Billing needs catalog-defined commercial inputs | Medium |
| Billing | Identity | Conformist | account reference API | Billing consumes identity references but does not own auth semantics | Medium |
| Catalog | Notifications | Open Host Service | notification API | Catalog triggers announcements without adopting notification model internally | Low |

## Service-Boundary Options

### Billing Context
- Recommendation: Separate internal module with explicit interface
- Why: strong language and workflow cohesion
- Operational caveats: keep in monolith until transactional boundaries and ownership pressures justify a service split

### Catalog Context
- Recommendation: Candidate for future service split
- Why: likely strategic center with coherent model
- Operational caveats: only if team ownership and deployment maturity are present

### Identity Context
- Recommendation: Keep in modular monolith for now
- Why: capability is distinct but current implementation is tightly integrated with app session flow
- Operational caveats: externalization may add disproportionate complexity
