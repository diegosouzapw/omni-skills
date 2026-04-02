# Electron Relaunch Snippets

## Initial launch

```javascript
var ELECTRON_ENTRY = '.';

electronApp = await electronLauncher.launch({
  args: [ELECTRON_ENTRY],
});
appWindow = await electronApp.firstWindow();
console.log(await appWindow.title());
```

## Renderer-only reload

```javascript
await appWindow.reload({ waitUntil: 'domcontentloaded' });
console.log('Renderer reloaded');
```

## Full relaunch after main-process or preload change

```javascript
await electronApp.close().catch(() => {});
electronApp = undefined;
appWindow = undefined;

electronApp = await electronLauncher.launch({
  args: [ELECTRON_ENTRY],
});
appWindow = await electronApp.firstWindow();
console.log('Electron relaunched:', await appWindow.title());
```
