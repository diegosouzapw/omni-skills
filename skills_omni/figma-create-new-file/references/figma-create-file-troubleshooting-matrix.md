# Figma Create File Troubleshooting Matrix

| Symptom | Likely cause | Verify | Recovery |
| --- | --- | --- | --- |
| Multiple plans returned | Workspace is ambiguous | Review the `whoami` plans list | Ask the user to choose the correct workspace before creation |
| Request fails on `editorType` | Unsupported file type value | Check whether the value is exactly `design` or `figjam` | Replace with a supported value and retry |
| File created but not visible | User is looking in the wrong workspace or area | Confirm selected `planKey` and use `file_url` directly | Point the user to the selected workspace's Drafts area and share the direct URL |
| Teammates cannot access file | Draft visibility or sharing not yet configured | Confirm the creator can open the file but collaborators cannot | Move to the sharing or organization workflow |
| Downstream tool cannot continue | `file_key` was not preserved | Check prior create output | Reuse the existing returned identifiers instead of creating another file |
| Empty or odd file name | Name was omitted or malformed | Trim the supplied name and inspect result | Ask for confirmation or use `Untitled` if omitted |
