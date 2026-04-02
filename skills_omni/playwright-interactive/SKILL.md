---
name: "playwright-interactive"
description: "Playwright Interactive workflow skill. Use this skill when the user needs persistent Playwright or Electron interaction through js_repl for iterative local UI debugging, visual QA, and artifact-backed handoff without relaunching the whole stack on every turn."
version: "0.0.1"
category: "frontend"
tags:
  - "playwright-interactive"
  - "playwright"
  - "electron"
  - "js_repl"
  - "persistent-browser"
  - "ui-debugging"
  - "visual-qa"
  - "tracing"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/playwright-interactive"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Playwright Interactive Skill

## Overview

This skill packages the upstream `skills/.curated/playwright-interactive` workflow from `https://github.com/openai/skills.git` into a public, reviewable workflow kit while preserving its intent and provenance.

Use it to keep a persistent `js_repl` Playwright session alive across multiple iterations while debugging local web apps or Electron apps. It is strongest when the operator needs to reuse browser, context, page, or Electron window handles; distinguish renderer reloads from full relaunches; run functional and visual QA in the same live session; and hand off evidence such as screenshots, traces, and concise repro notes.

This skill is deliberately operational, not just descriptive. It preserves the imported workflow while adding clearer activation boundaries, safer execution notes, troubleshooting depth, and local reference material for mode selection, tracing, network inspection, and session reset decisions.

## When to Use This Skill

### Use this skill when

- You need a persistent Playwright session in `js_repl` instead of one-shot test execution.
- You are debugging a local web UI and want to keep the same browser, context, and page handles alive across edits.
- You are debugging an Electron app and need `firstWindow()` access plus deliberate renderer reload versus full app relaunch behavior.
- You need fast iterative UI debugging with real user-style input, visual inspection, and evidence capture.
- You need to verify user-visible claims before signoff, including viewport fit and post-interaction states.
- You expect to hand off the work and want the session mode, artifacts, and provenance to remain reviewable.

### Do not use this skill when

- The task is a simple deterministic Playwright test that should just be authored or run normally.
- The task is CI-first regression coverage rather than interactive local debugging.
- The work is primarily backend, architecture, or release troubleshooting that does not require a live browser or Electron session.
- You only need a one-time page check and do not benefit from persistent handles.
- The workspace or Electron app is untrusted. Launching Electron executes local app code.

## Preconditions and Safety Notes

- `js_repl` must be enabled before using this workflow.
- Start from the exact workspace you intend to debug. Verify the current working directory before running `npm install`, `npx playwright install ...`, or Electron launch commands.
- Use this workflow only against trusted local code. Electron launch runs local application code.
- Keep commands narrow and reversible. Prefer install, launch, reload, trace, and cleanup commands over broad shell automation.
- Capture only necessary screenshots, traces, or logs. Avoid retaining or emitting secrets, tokens, personal data, or internal-only content unless required and approved.
- `js_repl_reset` is a recovery tool, not normal cleanup. Resetting destroys your Playwright handles and current session state.
- If your runtime requires reduced sandboxing for local browser automation, treat that as a temporary tool constraint, not a general best practice.

If `js_repl` is missing, enable it in Codex config:

```toml
[features]
js_repl = true
```

You can also start a new session with `--enable js_repl`.

## Operating Table

| Mode / situation | Use when | Reuse strategy | Primary evidence | Common failure mode |
| --- | --- | --- | --- | --- |
| Desktop web, explicit viewport | Routine iteration, reproducible layout checks, stable screenshots | Reuse `browser`/`context`/`page`; recreate `context` if viewport, auth, or storage assumptions changed | Focused screenshots, optional trace, QA notes | Stale page state or brittle selectors |
| Mobile emulation | Touch behavior, narrow viewport, mobile layout checks | Reuse `mobileContext`/`mobilePage`; recreate on device-profile changes | Touch-path screenshots, viewport notes, optional trace | Desktop-only assumptions, missing touch readiness |
| Desktop web, native window | Validate launched window size, browser chrome interactions, host DPI behavior | Close old explicit-viewport context; create a fresh `viewport: null` context | Native-window screenshots, fit notes | CSS-vs-device-pixel mismatch, host-window variability |
| Electron app | Renderer debugging, startup validation, desktop-window behavior | Reuse `electronApp`/`appWindow` for renderer changes; relaunch for main/preload/startup changes | Screenshot artifacts, relaunch notes, optional trace-equivalent notes | Wrong relaunch path, unsupported Electron context patterns |
| Review / merge readiness | You need an auditable packet before handoff | Keep current session if still valid; summarize artifacts instead of rerunning everything | Packet template, provenance, screenshots, traces | Missing evidence or unclear reproduction |

For a fast chooser, see [Mode selection cheatsheet](references/mode-selection-cheatsheet.md).

## Workflow

### 1. Confirm tool and workspace preconditions

1. Verify `js_repl` is enabled.
2. Confirm you are in the correct project directory.
3. Confirm the target is trusted local code, especially for Electron.
4. Decide whether the task is web or Electron, and whether you need desktop explicit viewport, mobile emulation, native-window validation, or both.
5. Start a brief QA inventory before touching the UI:
   - requested requirements
   - implemented user-visible behaviors
   - claims you expect to make in the final response

Anything you plan to claim at the end should map to at least one functional or visual check.

### 2. Bootstrap the workspace once

Run setup only from the workspace you intend to debug:

```bash
test -f package.json || npm init -y
npm install playwright
# Web-only, when browser binaries are not installed yet:
# npx playwright install chromium
# Electron-only, and only if this workspace is the Electron app:
# npm install --save-dev electron
node -e "import('playwright').then(() => console.log('playwright import ok')).catch((error) => { console.error(error); process.exit(1); })"
```

If you switch workspaces later, repeat setup there rather than assuming the previous cwd still applies.

### 3. Start the app outside the REPL when appropriate

- For local web apps, keep the dev server running in a persistent TTY session.
- Before `page.goto(...)`, verify the port is serving the expected app.
- Prefer `http://127.0.0.1:<port>` over `localhost` when diagnosing loopback issues.
- For Electron, keep any separate renderer dev server running first if the app depends on one.

### 4. Bootstrap persistent Playwright handles in `js_repl`

```javascript
var chromium;
var electronLauncher;
var browser;
var context;
var page;
var mobileContext;
var mobilePage;
var electronApp;
var appWindow;

try {
  ({ chromium, _electron: electronLauncher } = await import("playwright"));
  console.log("Playwright loaded");
} catch (error) {
  throw new Error(
    `Could not load playwright from the current js_repl cwd. Run the setup commands from this workspace first. Original error: ${error}`
  );
}
```

Use `var` for top-level shared bindings so later cells can reuse them.

### 5. Choose the right session mode

Use the smallest mode that answers the question reliably:

- Default to desktop web with an explicit viewport for deterministic iteration.
- Use mobile emulation for touch and narrow-layout debugging.
- Add a separate native-window pass when signoff depends on launched window size, browser chrome, or host display behavior.
- Treat Electron as native-window-style debugging from the start.
- If auth, storage state, viewport assumptions, or startup semantics changed, recreate the context instead of forcing reuse.

See [Reload vs relaunch matrix](references/reload-vs-relaunch-matrix.md) and [Storage state and session reset](references/storage-state-and-session-reset.md).

### 6. Start or reuse a web session

#### Desktop web context

```javascript
var TARGET_URL = "http://127.0.0.1:3000";

var resetWebHandles = function () {
  context = undefined;
  page = undefined;
  mobileContext = undefined;
  mobilePage = undefined;
};

var ensureWebBrowser = async function () {
  if (browser && !browser.isConnected()) {
    browser = undefined;
    resetWebHandles();
  }

  browser ??= await chromium.launch({ headless: false });
  return browser;
};

if (page?.isClosed()) page = undefined;

await ensureWebBrowser();
context ??= await browser.newContext({
  viewport: { width: 1600, height: 900 },
});
page ??= await context.newPage();

await page.goto(TARGET_URL, { waitUntil: "domcontentloaded" });
console.log("Loaded:", await page.title());
```

#### Mobile web context

```javascript
var MOBILE_TARGET_URL = typeof TARGET_URL === "string"
  ? TARGET_URL
  : "http://127.0.0.1:3000";

if (mobilePage?.isClosed()) mobilePage = undefined;

await ensureWebBrowser();
mobileContext ??= await browser.newContext({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
mobilePage ??= await mobileContext.newPage();

await mobilePage.goto(MOBILE_TARGET_URL, { waitUntil: "domcontentloaded" });
console.log("Loaded mobile:", await mobilePage.title());
```

#### Native-window web pass

```javascript
await ensureWebBrowser();

await page?.close().catch(() => {});
await context?.close().catch(() => {});
page = undefined;
context = undefined;

context = await browser.newContext({ viewport: null });
page = await context.newPage();

await page.goto(TARGET_URL, { waitUntil: "domcontentloaded" });
console.log("Loaded native window:", await page.title());
```

### 7. Start or reuse an Electron session

```javascript
var ELECTRON_ENTRY = ".";

if (appWindow?.isClosed()) appWindow = undefined;

if (!appWindow && electronApp) {
  await electronApp.close().catch(() => {});
  electronApp = undefined;
}

electronApp ??= await electronLauncher.launch({
  args: [ELECTRON_ENTRY],
});

appWindow ??= await electronApp.firstWindow();
console.log("Loaded Electron window:", await appWindow.title());
```

If the REPL cwd is not the Electron app workspace, pass an explicit `cwd` during launch.

### 8. Interact with locator-first patterns and explicit checks

Prefer user-facing locators and readiness checks over brittle selectors, sleeps, or direct DOM mutation for signoff.

```javascript
await page.getByRole("button", { name: /save/i }).click();
await page.getByText(/saved/i).waitFor();
```

```javascript
const submitButton = page.getByRole("button", { name: /submit/i });
await submitButton.click();
await page.getByRole("status").filter({ hasText: /done|success/i }).waitFor();
```

Use `evaluate(...)` for inspection or targeted diagnostics, not as your primary signoff path.

For more patterns, see [Locator-first debugging snippets](examples/locator-first-debugging-snippets.js.md).

### 9. Capture artifacts when behavior is unclear or handoff matters

Use selective artifacts, not everything by default:

- Focused screenshots for user-visible states
- Trace capture for hard-to-explain interaction timing or navigation issues
- Network inspection when the UI depends on failing or delayed API calls
- Concise evidence notes tied to the QA inventory

Start with [Trace debugging playbook](references/trace-debugging-playbook.md), [Network debug recipes](references/network-debug-recipes.md), and [Artifact handoff packet template](examples/artifact-handoff-packet-template.md).

### 10. Iterate with reload, context reset, or relaunch

Choose the smallest safe reset that matches the changed surface:

- Renderer-only web change: reload the page or existing pages.
- Renderer-only Electron change: reload `appWindow`.
- Auth or storage contamination: recreate the browser context.
- Viewport or device-mode change: recreate the context with the new mode.
- Electron main-process, preload, or startup change: fully relaunch the Electron app.

```javascript
var reloadWebContexts = async function () {
  for (const currentContext of [context, mobileContext]) {
    if (!currentContext) continue;
    for (const p of currentContext.pages()) {
      await p.reload({ waitUntil: "domcontentloaded" });
    }
  }
  console.log("Reloaded existing web tabs");
};
```

Renderer-only Electron reload:

```javascript
await appWindow.reload({ waitUntil: "domcontentloaded" });
console.log("Reloaded Electron window");
```

Electron full relaunch:

```javascript
await electronApp.close().catch(() => {});
electronApp = undefined;
appWindow = undefined;

electronApp = await electronLauncher.launch({
  args: [ELECTRON_ENTRY],
});

appWindow = await electronApp.firstWindow();
console.log("Relaunched Electron window:", await appWindow.title());
```

### 11. Run separate functional and visual QA passes

#### Functional QA

- Use real user input APIs for signoff.
- Cover the primary end-to-end flow.
- Exercise meaningful controls and state changes from the QA inventory.
- Add at least a short exploratory pass after scripted checks.
- Confirm visible outcomes, not just internal state.

#### Visual QA

- Verify each user-visible claim in the state where it matters.
- Inspect the initial viewport before scrolling.
- Check dense, post-interaction, or transition states when relevant.
- Treat clipping, overlap, unreadable text, weak contrast, and unstable overlays as real defects.
- Capture the screenshot of the actual state you are evaluating.

#### Viewport fit

Use screenshots as primary evidence. Numeric checks support them but do not overrule obvious clipping.

```javascript
console.log(await page.evaluate(() => ({
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  clientWidth: document.documentElement.clientWidth,
  clientHeight: document.documentElement.clientHeight,
  scrollWidth: document.documentElement.scrollWidth,
  scrollHeight: document.documentElement.scrollHeight,
  canScrollX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  canScrollY: document.documentElement.scrollHeight > document.documentElement.clientHeight,
})));
```

For Electron:

```javascript
console.log(await appWindow.evaluate(() => ({
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  clientWidth: document.documentElement.clientWidth,
  clientHeight: document.documentElement.clientHeight,
  scrollWidth: document.documentElement.scrollWidth,
  scrollHeight: document.documentElement.scrollHeight,
  canScrollX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  canScrollY: document.documentElement.scrollHeight > document.documentElement.clientHeight,
})));
```

If a specific region matters, add `getBoundingClientRect()` checks for that region rather than relying only on document metrics.

### 12. Clean up only when finished

```javascript
if (electronApp) {
  await electronApp.close().catch(() => {});
}

if (mobileContext) {
  await mobileContext.close().catch(() => {});
}

if (context) {
  await context.close().catch(() => {});
}

if (browser) {
  await browser.close().catch(() => {});
}

browser = undefined;
context = undefined;
page = undefined;
mobileContext = undefined;
mobilePage = undefined;
electronApp = undefined;
appWindow = undefined;

console.log("Playwright session closed");
```

Do not assume exiting the terminal or agent session implicitly closes Electron or browser processes.

## Examples

### Example 1: Ask for persistent local UI debugging

```text
Use @playwright-interactive to debug the local app in a persistent js_repl session. Keep browser handles alive across edits, use locator-first interactions, and attach screenshots plus a concise handoff note.
```

### Example 2: Verify Playwright is installed in the current workspace

```bash
node -e "import('playwright').then(() => console.log('playwright import ok')).catch((error) => { console.error(error); process.exit(1); })"
```

Expected output:

```text
playwright import ok
```

### Example 3: Capture a trace during an unclear interaction

See [Interactive trace capture snippets](examples/interactive-trace-capture.js.md).

Typical flow:

```javascript
await context.tracing.start({ screenshots: true, snapshots: true });
// reproduce the issue
await context.tracing.stop({ path: 'artifacts/trace.zip' });
```

### Example 4: Record a network-driven failure symptom

See [Network inspection snippets](examples/network-inspection-snippets.js.md).

```javascript
page.on('requestfailed', request => {
  console.log('FAILED', request.method(), request.url(), request.failure()?.errorText);
});
```

### Example 5: Relaunch Electron after a main-process change

See [Electron relaunch snippets](examples/electron-relaunch-snippets.js.md).

```javascript
await electronApp.close().catch(() => {});
electronApp = await electronLauncher.launch({ args: [ELECTRON_ENTRY] });
appWindow = await electronApp.firstWindow();
```

### Example 6: Build a handoff packet

Use [Artifact handoff packet template](examples/artifact-handoff-packet-template.md) to summarize:

- environment and mode used
- repro steps
- evidence captured
- claims verified
- known gaps or uncertainty

## Screenshot Guidance for Model-Bound Images

If you plan to emit a screenshot through `codex.emitImage(...)` for model interpretation, use CSS-normalized captures by default so returned coordinates stay aligned with Playwright CSS pixels.

Important caveats:

- Raw native-window screenshots can come back in device pixels.
- `scale: "css"` is usually correct for standard web screenshots, but native-window Chromium and Electron may still require explicit normalization.
- Do not use `appWindow.context().newPage()` or `electronApp.context().newPage()` as an Electron scratch page.
- For Electron, capture in the main process and resize there.

Shared helpers:

```javascript
var emitJpeg = async function (bytes) {
  await codex.emitImage({
    bytes,
    mimeType: "image/jpeg",
    detail: "original",
  });
};

var emitWebJpeg = async function (surface, options = {}) {
  await emitJpeg(await surface.screenshot({
    type: "jpeg",
    quality: 85,
    scale: "css",
    ...options,
  }));
};

var clickCssPoint = async function ({ surface, x, y, clip }) {
  await surface.mouse.click(clip ? clip.x + x : x, clip ? clip.y + y : y);
};

var tapCssPoint = async function ({ page, x, y, clip }) {
  await page.touchscreen.tap(clip ? clip.x + x : x, clip ? clip.y + y : y);
};
```

### Web CSS-normalized capture

```javascript
await emitWebJpeg(page);
```

### Electron CSS-normalized capture

```javascript
var emitElectronScreenshotCssScaled = async function ({ electronApp, clip, quality = 85 } = {}) {
  const bytes = await electronApp.evaluate(async ({ BrowserWindow }, { clip, quality }) => {
    const win = BrowserWindow.getAllWindows()[0];
    const image = clip ? await win.capturePage(clip) : await win.capturePage();

    const target = clip
      ? { width: clip.width, height: clip.height }
      : (() => {
          const [width, height] = win.getContentSize();
          return { width, height };
        })();

    const resized = image.resize({
      width: target.width,
      height: target.height,
      quality: "best",
    });

    return resized.toJPEG(quality);
  }, { clip, quality });

  await emitJpeg(bytes);
};
```

Use raw screenshot emission only when device-pixel fidelity matters more than CSS-coordinate alignment.

## Best Practices

### Do

- Prefer persistent handle reuse when the debugging question spans multiple edits.
- Prefer locator-first interactions such as `getByRole(...)`, `getByText(...)`, and `locator(...)` over brittle implementation-coupled selectors.
- Use explicit readiness checks and user-visible outcomes instead of fixed sleeps.
- Recreate a browser context when auth, cookies, local storage, viewport mode, or startup assumptions changed.
- Capture traces selectively for unclear timing, navigation, or state-transition issues.
- Keep a QA inventory tied to the claims you intend to sign off on.
- Preserve provenance, session mode, and artifact paths in the final handoff.
- Keep `js_repl` cells short and focused so recovery is easier when one step fails.

### Don't

- Do not use this workflow as a replacement for simple one-shot tests.
- Do not treat `evaluate(...)`-driven state changes as signoff-quality user interaction.
- Do not rely on `js_repl_reset` as routine cleanup.
- Do not assume page-level scroll metrics prove viewport fit.
- Do not keep reusing a contaminated context when the real fix is to recreate it.
- Do not use unsupported Electron context patterns such as scratch-page creation through the Electron context.
- Do not capture or emit screenshots, traces, or logs containing secrets unless necessary and approved.

## Troubleshooting

### Problem: `Cannot find module 'playwright'`

**Symptoms:** The import fails immediately in `js_repl`, or bootstrap throws before any browser launches.
**Solution:** Run the one-time setup in the current workspace and re-run the import check. Make sure you are in the intended project directory, not a parent or sibling folder.

### Problem: Playwright is installed but the browser executable is missing

**Symptoms:** Launch fails even though the package imports correctly.
**Solution:** Install the required browser binary for the current workspace, for example `npx playwright install chromium` for the Chromium flows used here.

### Problem: `page.goto(...)` fails with connection refused or loads the wrong app

**Symptoms:** `ERR_CONNECTION_REFUSED`, blank page, stale route, or the wrong local service appears.
**Solution:** Confirm the dev server is running in a persistent TTY session, recheck the port, prefer `127.0.0.1`, and verify that the route you are loading is the route you just changed.

### Problem: Clicks or typing intermittently fail

**Symptoms:** Actions appear to do nothing, target elements are detached, hidden, moving, or covered.
**Solution:** Replace brittle waits and raw selectors with locator-first actions and explicit readiness checks. Investigate overlays, transitions, or disabled states rather than adding arbitrary sleeps.

### Problem: Navigation or load state is wrong after reload

**Symptoms:** The page reloads but is still on the wrong route, incomplete state, or stale content.
**Solution:** Add route-specific readiness checks, verify the app really served the updated route, and prefer explicit URL or UI-state validation over assuming `domcontentloaded` alone is enough.

### Problem: Popup or new tab opened and the old page handle is no longer the active flow

**Symptoms:** The visible user flow moved into a new page, but your old `page` handle no longer reflects reality.
**Solution:** Capture the new page from the browser context and continue the session with the correct handle. Do not keep debugging the original page if the app actually transitioned elsewhere.

### Problem: State contamination between iterations

**Symptoms:** Auth, cookies, local storage, or session state makes the issue non-reproducible or hides the real behavior.
**Solution:** Recreate the browser context rather than resetting the whole REPL. Preserve the browser process if useful, but start from a fresh context for deterministic reruns.

### Problem: Electron launch hangs, exits, or never becomes usable

**Symptoms:** `_electron.launch(...)` times out, the app exits immediately, or `firstWindow()` never stabilizes.
**Solution:** Confirm the local `electron` dependency, verify the entry path and cwd, and make sure any renderer dev server is already running before launch.

### Problem: Electron screenshot or scratch-page workflow fails with `Target.createTarget` or similar errors

**Symptoms:** `browserContext.newPage: Protocol error (Target.createTarget): Not supported` or similar Electron context failures.
**Solution:** Do not use `appWindow.context().newPage()` or `electronApp.context().newPage()` as a scratch page. Use the Electron-specific capture path described in the screenshot guidance.

### Problem: `Identifier has already been declared`

**Symptoms:** Re-running cells fails because handles or helpers were redeclared.
**Solution:** Reuse top-level `var` bindings, pick a new helper name, or wrap a one-off block in braces. Reset the REPL only if the kernel is actually stuck.

### Problem: `js_repl` timed out or reset mid-session

**Symptoms:** Existing handles disappear, long cells fail, or the kernel drops state.
**Solution:** Re-run bootstrap, rebuild only the handles you need, and keep subsequent cells shorter and more focused.

## Related Skills

- `@doc` - Switch when the main task becomes documenting repro steps, release notes, or review artifacts rather than browser debugging itself.
- `@aspnet-core` - Switch when the root cause is backend startup, routing, auth, or API behavior rather than frontend interaction.
- `@chatgpt-apps` - Switch when the real work is app integration or product behavior outside direct Playwright session debugging.
- `@develop-web-game` - Switch when the UI issue is primarily game-loop, rendering, or gameplay architecture rather than general browser automation.

When handing off, keep the current repro steps, mode used, screenshots, traces, and unresolved uncertainty so the next skill starts with evidence instead of re-discovery.

## Additional Resources

### Execution resources

- [Mode selection cheatsheet](references/mode-selection-cheatsheet.md)
- [Reload vs relaunch matrix](references/reload-vs-relaunch-matrix.md)
- [Trace debugging playbook](references/trace-debugging-playbook.md)
- [Network debug recipes](references/network-debug-recipes.md)
- [Storage state and session reset](references/storage-state-and-session-reset.md)
- [Locator-first debugging snippets](examples/locator-first-debugging-snippets.js.md)
- [Interactive trace capture snippets](examples/interactive-trace-capture.js.md)
- [Network inspection snippets](examples/network-inspection-snippets.js.md)
- [Electron relaunch snippets](examples/electron-relaunch-snippets.js.md)
- [Artifact handoff packet template](examples/artifact-handoff-packet-template.md)

### Import and provenance resources

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported reference notes preserved from upstream

The imported bootstrap, session setup, QA checklists, viewport-fit notes, dev-server notes, and cleanup guidance remain part of this skill's intended operating model. The sections above curate them into a more explicit decision workflow without changing the original identity or scope.
