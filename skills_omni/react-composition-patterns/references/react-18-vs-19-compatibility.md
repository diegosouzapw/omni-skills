# React 18 vs React 19 Compatibility Notes

Use this note when examples, migrations, or reviews involve both React 18 and React 19 code.

## Context providers

### React 18

```jsx
<ThemeContext.Provider value={theme}>
  <Page />
</ThemeContext.Provider>
```

### React 19

```jsx
<ThemeContext value={theme}>
  <Page />
</ThemeContext>
```

## Reading context

For client components, `useContext()` remains the normal API for reading context values.

```jsx
const theme = useContext(ThemeContext);
```

Do not replace this guidance with a blanket rule to use `use()` instead. `use()` has specific supported use cases and is not a general composition-pattern substitute for `useContext()`.

## Refs

### React 18 common pattern

```jsx
const Input = forwardRef(function Input(props, ref) {
  return <input {...props} ref={ref} />;
});
```

### React 19 direction

In React 19, refs can be passed as props in many cases, which reduces the need for `forwardRef` in future-facing codebases.

```jsx
function Input({ ref, ...props }) {
  return <input {...props} ref={ref} />;
}
```

## Practical migration guidance

- Do not partially modernize examples if the project is still on React 18.
- Match the syntax already supported by the installed React version and tooling.
- If the codebase is mixed or in migration, annotate examples clearly.
- If using imperative handles, keep the public API small regardless of version.

## Safe review language

Use language like:

- "In React 19, this can be simplified to..."
- "If this repo is still on React 18, keep the current provider syntax..."
- "`useContext()` remains the standard client-side context reader here..."

Avoid language like:

- "Replace `useContext()` with `use()` everywhere."
- "`forwardRef` is already invalid."
- "All providers should use the React 19 shorthand now."
