# Common Remediations

## Replace clickable div with button

### Avoid

```html
<div class="icon-button" onclick="openMenu()">Menu</div>
```

### Prefer

```html
<button type="button" class="icon-button" aria-expanded="false" aria-controls="site-menu">
  Menu
</button>
```

## Associate labels with inputs

### Avoid

```html
<span>Email</span>
<input type="email" placeholder="Email" />
```

### Prefer

```html
<label for="email">Email</label>
<input id="email" name="email" type="email" autocomplete="email" />
```

## Dialog focus return

### Avoid
- opening a modal without moving focus
- closing a modal and leaving focus on `body`

### Prefer
- move focus to a meaningful control inside the dialog on open
- restore focus to the triggering control on close when appropriate

## Error association

### Avoid

```html
<input id="postal-code" aria-invalid="true" />
<p>Invalid postal code</p>
```

### Prefer

```html
<label for="postal-code">Postal code</label>
<input id="postal-code" aria-invalid="true" aria-describedby="postal-code-error" />
<p id="postal-code-error">Enter a valid postal code.</p>
```
