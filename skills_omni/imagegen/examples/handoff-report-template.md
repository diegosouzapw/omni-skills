# Handoff Report Template

Use this template when delivering a final generated or edited image.

```text
Image task summary:
- Requested outcome: <short summary>
- Mode used: built-in image workflow | explicit CLI fallback
- Operation type: generate | edit

Final asset:
- Saved path: <workspace-relative or user-specified path>
- Filename: <final filename>
- Format: <png/jpg/etc>

Prompt summary:
- Final prompt or spec: <copy the final version>
- Input image roles: <if any>
- Invariants preserved: <if edit>

Validation:
- Subject fidelity: pass/fail
- Text accuracy: pass/fail/not applicable
- Transparency/background quality: pass/fail/not applicable
- Crop/aspect suitability: pass/fail
- Workspace placement confirmed: pass/fail

Remaining caveats:
- <anything the user should review next>
```

If the asset is preview-only, say so explicitly. If the asset is project-bound, always include the final saved path.
