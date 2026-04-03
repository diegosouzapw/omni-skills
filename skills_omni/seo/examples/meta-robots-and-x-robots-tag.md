# Meta robots and X-Robots-Tag examples

## Indexable HTML page

```html
<meta name="robots" content="index,follow" />
```

## Prevent indexing of an HTML page

```html
<meta name="robots" content="noindex,follow" />
```

## Limit snippets

```html
<meta name="robots" content="max-snippet:120,max-image-preview:large" />
```

## Prevent indexing of a PDF via HTTP header

```text
X-Robots-Tag: noindex
```

## Prevent indexing of an image via HTTP header

```text
X-Robots-Tag: noindex
```

## Important reminder

`robots.txt` controls crawling access, while `noindex` controls indexing. They are related but not interchangeable.
