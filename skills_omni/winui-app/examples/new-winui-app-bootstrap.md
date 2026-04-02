# Example: New WinUI App Bootstrap

## Scenario

The user wants a new WinUI 3 app and has not yet decided whether packaged or unpackaged is better.

## Suggested flow

1. Ask whether they need package identity or Store-like deployment behavior.
2. If not, ask whether they prefer repeatable CLI loops and direct exe-style local iteration.
3. Record the chosen app model.
4. Verify the template exists.
5. Scaffold with only supported options.
6. Build.
7. Launch and confirm a real top-level window appears.

## Minimal command path

```powershell
dotnet new list winui
dotnet new winui -o SampleDeskApp --unpackaged
cd SampleDeskApp
dotnet build SampleDeskApp.csproj
```

## What to report back

- chosen app model and why
- whether the scaffold succeeded
- whether the build succeeded
- whether launch verification showed a real usable window
