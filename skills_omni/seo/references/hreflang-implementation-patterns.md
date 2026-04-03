# Hreflang implementation patterns

Use `hreflang` only for alternate localized versions of the same page intent.

## Rules

- Each localized page should include a self-reference.
- Alternate references should be reciprocal.
- Locale codes must be valid, such as `en`, `en-GB`, `es`, `es-MX`.
- Use `x-default` for a fallback or selector page where appropriate.
- Canonical tags should not collapse all locales onto one URL unless that is truly the intended canonical strategy.

## Subfolder example

```html
<link rel="alternate" hreflang="en" href="https://example.com/products/blue-widget" />
<link rel="alternate" hreflang="en-GB" href="https://example.com/uk/products/blue-widget" />
<link rel="alternate" hreflang="fr" href="https://example.com/fr/produits/widget-bleu" />
<link rel="alternate" hreflang="x-default" href="https://example.com/products/blue-widget" />
```

## Subdomain example

```html
<link rel="alternate" hreflang="en" href="https://en.example.com/page" />
<link rel="alternate" hreflang="de" href="https://de.example.com/page" />
<link rel="alternate" hreflang="x-default" href="https://www.example.com/language-selector" />
```

## ccTLD example

```html
<link rel="alternate" hreflang="en-US" href="https://example.com/page" />
<link rel="alternate" hreflang="en-GB" href="https://example.co.uk/page" />
<link rel="alternate" hreflang="de-DE" href="https://example.de/seite" />
```

## Common failures

- Missing return links
- Invalid locale codes
- Connecting non-equivalent pages
- Canonical pointing to another locale
- One locale omitted from the reciprocal set
