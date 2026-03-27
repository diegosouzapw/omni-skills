# ✅ Quality Bar

> **Minimum requirements and recommendations for a skill to be accepted into the Omni Skills repository.**

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
| 1️⃣3️⃣ | **Healthy classification** — maturity L2+, quality 70+, best practices 60+ | 📈 Overall tier |
| 1️⃣4️⃣ | **No critical security findings** — static scanner passes clean | 🛡️ Security 100 |

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
| 📋 **Best Practices** | 70+ (excellent) | 50-69 (good) | <50 (fair) |
| 🛡️ **Security** | 95+ (hardened) | 80-94 (secure) | <80 (review needed) |
| 🎯 **Maturity** | L3 (scripts+tests) | L2 (instructions) | L1 (metadata only) |
