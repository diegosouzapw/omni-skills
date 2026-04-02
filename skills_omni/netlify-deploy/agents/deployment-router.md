# Deployment Router Notes

Use `netlify-deploy` when the core task is linking or deploying a site with the Netlify CLI.

Route away when the primary problem becomes:

- framework-specific build debugging beyond deploy configuration
- CI/CD workflow design or provider-specific pipeline authoring
- DNS, custom domains, certificates, or nameserver work
- broad secret-governance or organizational environment-management policy

Keep any already-confirmed Netlify facts during handoff:

- auth method used
- linked site identity
- build command and publish directory
- whether preview deploy succeeded
- whether failure is config-related or environment-related
