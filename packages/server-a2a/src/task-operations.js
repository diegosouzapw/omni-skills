import {
  buildInstallPlan,
  recommendSkills,
  searchSkills,
} from "../../catalog-core/src/index.js";

function summarizeSearchResult(result, query) {
  const total = Number(result?.total || 0);
  if (total === 0) {
    return `No published skills matched '${query}'.`;
  }
  if (total === 1) {
    return `Found 1 published skill for '${query}'.`;
  }
  return `Found ${total} published skills for '${query}'.`;
}

function summarizeRecommendation(result, goal) {
  const total = Array.isArray(result?.recommendations) ? result.recommendations.length : 0;
  if (total === 0) {
    return `No recommendations were produced for '${goal}'.`;
  }
  if (total === 1) {
    return `Recommended 1 skill stack candidate for '${goal}'.`;
  }
  return `Recommended ${total} skill stack candidates for '${goal}'.`;
}

function summarizeInstallPlan(result) {
  const skills = Array.isArray(result?.selected_skills) ? result.selected_skills.length : 0;
  const bundles = Array.isArray(result?.selected_bundles) ? result.selected_bundles.length : 0;
  return `Prepared a dry-run install plan with ${skills} skill(s) across ${bundles} bundle(s).`;
}

export function evaluateTaskOperation(operation, input = {}) {
  switch (operation) {
    case "discover-skills": {
      const query = (input.query || input.text || "").trim();
      if (!query) {
        return {
          type: "input-required",
          prompt:
            "Tell me what capability, workflow, or domain you want. For example: 'figma for cursor' or 'security review'.",
        };
      }

      const result = searchSkills({
        query,
        category: input.category,
        tool: input.tools?.[0],
        risk: input.risk,
        limit: input.limit || 10,
      });

      return {
        type: "result",
        title: "Skill Discovery Result",
        summary: summarizeSearchResult(result, query),
        payload: result,
      };
    }
    case "recommend-stack": {
      const goal = (input.goal || input.text || "").trim();
      if (!goal) {
        return {
          type: "input-required",
          prompt:
            "Describe the goal you want the stack to solve. For example: 'frontend design workflow for Cursor'.",
        };
      }

      const result = recommendSkills({
        goal,
        tool: input.tools?.[0],
        category: input.category,
        limit: input.limit || 5,
      });

      return {
        type: "result",
        title: "Recommended Skill Stack",
        summary: summarizeRecommendation(result, goal),
        payload: result,
      };
    }
    case "prepare-install-plan": {
      const skillIds = Array.isArray(input.skill_ids) ? input.skill_ids : [];
      const bundleIds = Array.isArray(input.bundle_ids) ? input.bundle_ids : [];
      const tools = Array.isArray(input.tools) ? input.tools : [];
      const hasSelection = skillIds.length > 0 || bundleIds.length > 0;
      if (!hasSelection) {
        return {
          type: "input-required",
          prompt:
            "Name at least one published skill or bundle before I can build the install plan. Example: 'omni-figma on cursor' or 'bundle full-stack'.",
        };
      }

      if (!input.target_path && tools.length === 0) {
        return {
          type: "input-required",
          prompt:
            "Which client should receive the install plan? Example: Cursor, Codex CLI, Claude Code, Gemini CLI, Antigravity, OpenCode, or provide a custom path.",
        };
      }

      const result = buildInstallPlan({
        skill_ids: skillIds,
        bundle_ids: bundleIds,
        tools,
        target_path: input.target_path,
        dry_run: true,
      });

      return {
        type: "result",
        title: "Install Plan",
        summary: summarizeInstallPlan(result),
        payload: result,
      };
    }
    default:
      return {
        type: "rejected",
        prompt: `Operation '${operation}' is not supported by the Omni Skills A2A agent.`,
      };
  }
}
