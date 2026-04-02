# Skill Validation Triage

Use this guide when `scripts/quick_validate.py` reports errors.

## Common failure: invalid frontmatter

**Symptoms:** YAML parse errors or missing required fields.

**Likely causes:**

- malformed YAML
- missing `name`
- missing `description`
- invalid quoting or indentation

**Fix:**

- correct the YAML syntax
- ensure `name` and `description` are present
- keep values simple and machine-parseable

## Common failure: name does not match directory

**Symptoms:** Validator reports a mismatch between skill name and folder name.

**Likely causes:**

- directory renamed without updating frontmatter
- frontmatter edited without renaming the folder

**Fix:**

- make `name:` exactly match the directory name
- avoid case differences and punctuation mismatches

## Common failure: invalid slug or naming rule

**Symptoms:** Validator reports unsupported characters or poor formatting.

**Likely causes:**

- uppercase letters
- spaces or underscores
- punctuation in the name

**Fix:**

- convert to lowercase hyphen-case
- remove unsupported characters
- keep the name concise

## Common failure: missing structure

**Symptoms:** The skill validates poorly or scores lower because the body lacks expected sections.

**Likely causes:**

- missing `Overview`
- missing `When to Use This Skill`
- missing actionable workflow

**Fix:**

- add the required sections
- ensure the workflow contains executable steps, not only concepts

## Common failure: linked support files missing

**Symptoms:** `SKILL.md` references local files that do not exist.

**Likely causes:**

- files renamed or deleted
- stale links after restructuring

**Fix:**

- either restore the files or update the links
- re-run validation after link cleanup
