# ✅ Quality Bar (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

> Translation snapshot for **Awesome Omni Skills** `v0.9.0`.
> Source: `docs/contributors/QUALITY-BAR.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/contributors/QUALITY-BAR.md; version=0.9.0; release=v0.9.0; english_snapshot=2026-04-02T00:00:00+00:00 -->

> **Minimum requirements and recommendations for a skill to be accepted into the Awesome Omni Skills repository.**

For authoring guidance aimed specifically at top-band scores, see [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

Current benchmark for the native catalog:

<!-- generated:quality-bar-benchmark:start -->
- 155 published native skills, plus 80 curated English derivatives in `skills_omni/`
- average quality score `97.7`
- average best-practices score `99.7`
- average security score `88.0`
- validation mix `127` passed, `28` warn, `0` failed
<!-- generated:quality-bar-benchmark:end -->

---

## 🔒 Required (Must Pass)

| # | Requirement | How to Verify |
|:--|:------------|:--------------|
| 1️⃣ | **Valid frontmatter** | `python3 tools/scripts/validate_skills.py` |
| 2️⃣ | **Clear description** | One-liner must explain what the skill does (10+ chars) |
| 3️⃣ | **Name matches directory** | `name:` field matches the folder name exactly |
| 4️⃣ | **Overview section** | Brief explanation of purpose in the markdown body |
| 5️⃣ | **When to Use section** | At least 2 specific usage scenarios |
| 6️⃣ | **Actionable instructions** | Step-by-step content an AI agent can execute |
| 7️⃣ | **Generated metadata** | Validator emits `skills/<skill>/metadata.json` successfully |

---

## ⭐ Recommended (Improves Score)

| # | Recommendation | Score Impact |
|:--|:---------------|:-------------|
| 8️⃣ | **Examples** — at least one concrete example with expected output | 📈 Quality +10-15 |
| 9️⃣ | **Best practices** — ✅ Do / ❌ Don't guidance | 📈 Best Practices +5 |
| 🔟 | **Tested with a tool** — verified with at least one AI coding assistant | 📈 Quality +5 |
| 1️⃣1️⃣ | **Tags** — relevant searchable tags for discovery | 📈 Best Practices +10 |
| 1️⃣2️⃣ | **Category** — assigned to one canonical category | 📈 Best Practices +10 |
| 1️⃣3️⃣ | **Troubleshooting** — concrete `Symptoms` and `Solution` guidance | 📈 Best Practices +5-10 |
| 1️⃣4️⃣ | **Local support assets** — `references/`, `scripts/`, and ideally `examples/` linked from the skill | 📈 Best Practices +10 |
| 1️⃣5️⃣ | **Healthy classification** — maturity L3, quality 85+, best practices 90+ | 📈 Overall tier |
| 1️⃣6️⃣ | **No critical security findings** — static scanner passes clean | 🛡️ Security 100 |

---

## ❌ Reasons for Rejection

| Issue | Why |
|:------|:----|
| ❌ Missing or invalid frontmatter | Breaks validation pipeline |
| ❌ Name doesn't match directory | Breaks catalog generation |
| ❌ Empty or trivially short description | Users can't discover the skill |
| ❌ No actionable content (just links or stubs) | Agents can't execute anything |
| ❌ Duplicate without clear improvement | Add value, don't clone |
| ❌ Offensive content without `risk: offensive` tag | Safety and compliance |
| ❌ Critical security findings | Prompt exfiltration, destructive commands, etc. |

---

## 🧪 Verify Locally

```bash
# Run validation
npm run validate

# Check your scores
cat skills/<your-skill>/metadata.json | jq '.quality, .best_practices, .security'

# Full build + smoke check
npm run build
npm run smoke
```

---

## 📊 Score Reference

| Dimension | Excellent | Good | Needs Work |
|:----------|:----------|:-----|:-----------|
| ⭐ **Quality** | 80+ (platinum) | 60-79 (gold/silver) | <60 (bronze/starter) |
| 📋 **Best Practices** | 90+ (excellent) | 70-89 (good) | <70 (fair/needs-work) |
| 🛡️ **Security** | 95+ (hardened) | 80-94 (secure) | <80 (review needed) |
| 🎯 **Maturity** | L3 (scripts+tests) | L2 (instructions) | L1 (metadata only) |

---

## 🧭 What High Scores Require

To reach the top band consistently, a skill should include:

- a strong frontmatter description that explains both **what** the skill does and **when** it should be used
- explicit sections for `When to Use`, `Workflow`, `Examples`, `Best Practices`, `Troubleshooting`, and `Additional Resources`
- local support material under `references/`, `scripts/`, and ideally `examples/`, linked directly from `SKILL.md`
- agent metadata under `agents/openai.yaml` when the skill is meant to be invoked directly in agent clients
- a small operational table or equivalent execution map when the workflow benefits from it
- at least one runnable example that points to a local helper script or repeatable command
- troubleshooting written as `Symptoms` plus `Solution`, not generic warnings
- enough depth to qualify as `L3`, not just well-formatted prose
- stronger workflow depth, decision assets, and support-pack diversity if you want top-band quality
- a support pack that is deep enough to feel reusable, not just present for checkbox coverage
- at least 4 meaningful support families or the equivalent depth in reusable files if you want the top band consistently
