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

  // Group by category
  const byCategory = {};
  for (const skill of skills) {
    const cat = skill.category || "uncategorized";
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(skill);
  }

  const CATEGORY_ICONS = {
    architecture: "🏗️",
    business: "💼",
    "data-ai": "🤖",
    development: "💻",
    general: "📋",
    infrastructure: "☁️",
    security: "🛡️",
    testing: "🧪",
    workflow: "⚙️",
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
    md += `| Skill | Description | Complexity | Risk |\n`;
    md += `| :---- | :---------- | :--------- | :--- |\n`;

    for (const s of catSkills) {
      const complexity = s.complexity || "—";
      const risk = s.risk || "—";
      const desc = (s.description || "").replace(/\|/g, "\\|").substring(0, 120);
      md += `| [\`${s.name}\`](../${s.path}/SKILL.md) | ${desc} | ${complexity} | ${risk} |\n`;
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
