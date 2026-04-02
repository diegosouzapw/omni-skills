# Setup and Project Selection

Use this guide when creating a new WinUI 3 app or when the current issue depends on the app model.

## Decide the app model early

### Prefer packaged when

- the workflow expects package identity
- Visual Studio deploy/F5 behavior is central
- distribution/install behavior should resemble Store-like deployment
- the feature area depends on packaged assumptions

### Prefer unpackaged when

- the user wants repeatable CLI build/run loops
- direct `.exe` execution is expected during development
- the task is local iteration without package-identity requirements

Record the choice before editing startup, deployment, notifications, activation, or file association behavior.

## New app naming guidance

- Use the user-provided app name when it is already a safe project/folder name.
- Otherwise derive a short PascalCase name and state what you chose.
- Create the project in the current workspace unless the user specified a location.
- Do not use `--force` unless the user explicitly approved overwrite behavior.

## Scaffold only with supported options

Baseline scaffold:

```powershell
dotnet new winui -o <AppName>
```

Unpackaged scaffold:

```powershell
dotnet new winui -o <AppName> --unpackaged
```

After scaffolding:

```powershell
cd <AppName>
dotnet build <AppName>.csproj
```

## Verification after scaffolding

Confirm:

- the expected project file exists
- the project builds
- the launch path matches the chosen app model
- a real top-level window appears when run

## Common mistakes

- Delaying the packaged vs unpackaged decision until after implementation
- Expecting packaged-only behaviors from an unpackaged app
- Expecting direct exe loops from a packaged deployment path
- Inventing undocumented template flags
