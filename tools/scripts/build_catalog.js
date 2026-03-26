#!/usr/bin/env node

/**
 * Build docs/CATALOG.md from skills_index.json.
 * Groups skills by category and generates a browsable markdown catalog.
 */

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const INDEX_PATH = path.join(ROOT, "skills_index.json");
const CATALOG_PATH = path.join(ROOT, "docs", "CATALOG.md");

function main() {
  if (!fs.existsSync(INDEX_PATH)) {
    console.error("✗ skills_index.json not found. Run: npm run index");
    process.exit(1);
  }

  const index = JSON.parse(fs.readFileSync(INDEX_PATH, "utf-8"));
  const skills = index.skills || [];

  // Group by canonical category
  const byCategory = {};
  for (const skill of skills) {
    const cat = skill.canonical_category || skill.category || "uncategorized";
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(skill);
  }

  const CATEGORY_ICONS = {
    "ai-agents": "🧠",
    backend: "🗄️",
    business: "💼",
    communication: "💬",
    "content-media": "🎬",
    "data-ai": "🤖",
    development: "💻",
    design: "🎨",
    devops: "☁️",
    documentation: "📝",
    frontend: "🖼️",
    "fullstack-web": "🌐",
    "cli-automation": "⚙️",
    "machine-learning": "📈",
    product: "🧭",
    "testing-security": "🛡️",
    tools: "🧰",
    uncategorized: "📦",
  };

  let md = `# 📚 Omni Skills Catalog\n\n`;
  md += `> Auto-generated from \`skills_index.json\` — ${index.total_skills} skills across ${Object.keys(byCategory).length} categories.\n\n`;
  md += `Generated: ${index.generated_at}\n\n`;
  md += `---\n\n`;
  md += `## Table of Contents\n\n`;

  for (const cat of Object.keys(byCategory).sort()) {
    const icon = CATEGORY_ICONS[cat] || "📦";
    const count = byCategory[cat].length;
    md += `- [${icon} ${capitalize(cat)} (${count})](#${cat})\n`;
  }

  md += `\n---\n\n`;

  for (const cat of Object.keys(byCategory).sort()) {
    const icon = CATEGORY_ICONS[cat] || "📦";
    const catSkills = byCategory[cat].sort((a, b) => a.name.localeCompare(b.name));

    md += `## ${icon} ${capitalize(cat)}\n\n`;
    md += `| Skill | Description | Level | Best Practices | Quality |\n`;
    md += `| :---- | :---------- | :---- | :------------- | :------ |\n`;

    for (const s of catSkills) {
      const desc = (s.description || "").replace(/\|/g, "\\|").substring(0, 120);
      const level = s.skill_level ? `L${s.skill_level} ${s.skill_level_label || ""}`.trim() : "—";
      const bestPractices = Number.isFinite(s.best_practices_score) ? `${s.best_practices_score}/100` : "—";
      const quality = Number.isFinite(s.quality_score) ? `${s.quality_score}/100` : "—";
      md += `| [\`${s.name}\`](../${s.path}/SKILL.md) | ${desc} | ${level} | ${bestPractices} | ${quality} |\n`;
    }

    md += `\n`;
  }

  fs.writeFileSync(CATALOG_PATH, md, "utf-8");
  console.log(`✅ Generated ${CATALOG_PATH} (${index.total_skills} skills)`);
}

function capitalize(s) {
  return s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

main();
