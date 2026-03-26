import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_REPO_ROOT = path.resolve(__dirname, "..", "..", "..");
const DEFAULT_LIMIT = 20;

function resolveRepoRoot(repoRoot) {
  if (repoRoot) {
    return path.resolve(repoRoot);
  }

  if (process.env.OMNI_SKILLS_ROOT) {
    return path.resolve(process.env.OMNI_SKILLS_ROOT);
  }

  return DEFAULT_REPO_ROOT;
}

function readJson(jsonPath) {
  return JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
}

function loadBundleDefinitions(options = {}) {
  const { repoRoot } = getCatalogPaths(options);
  const bundlesPath = path.join(repoRoot, "data", "bundles.json");
  return readJson(bundlesPath);
}

function ensureNumber(value, fallback) {
  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function trimTrailingSlash(value) {
  return String(value || "").replace(/\/+$/, "");
}

function getPublicBaseUrl(options = {}) {
  const baseUrl =
    options.baseUrl ||
    process.env.OMNI_SKILLS_PUBLIC_BASE_URL ||
    process.env.OMNI_SKILLS_API_BASE_URL ||
    "";

  return trimTrailingSlash(baseUrl) || null;
}

function buildPublicUrl(pathname, options = {}) {
  const baseUrl = getPublicBaseUrl(options);
  if (!baseUrl) {
    return null;
  }

  return `${baseUrl}${pathname}`;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalizeText(value)
    .split(" ")
    .filter(Boolean);
}

function shellQuote(value) {
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}

function appendSelectionFlags(command, selection = {}) {
  const flags = [
    ...(selection.bundleIds || []).map((bundleId) => `--bundle ${shellQuote(bundleId)}`),
    ...(selection.skillIds || []).map((skillId) => `--skill ${shellQuote(skillId)}`),
  ];

  return flags.length > 0 ? `${command} ${flags.join(" ")}` : command;
}

function scoreSkill(skill, tokens, goalTokens = [], tool = "", category = "") {
  let score = 0;
  const haystacks = [
    skill.id,
    skill.slug,
    skill.display_name,
    skill.description,
    ...(skill.tags || []),
    skill.category,
  ].map(normalizeText);

  for (const token of tokens) {
    if (!token) continue;
    if (normalizeText(skill.id) === token || normalizeText(skill.slug) === token) {
      score += 10;
      continue;
    }
    if (haystacks.some((value) => value === token)) {
      score += 8;
      continue;
    }
    if (haystacks.some((value) => value.includes(token))) {
      score += 3;
    }
  }

  for (const token of goalTokens) {
    if (haystacks.some((value) => value.includes(token))) {
      score += 2;
    }
  }

  if (tool && (skill.tools || []).includes(tool)) {
    score += 4;
  }

  if (category && skill.category === category) {
    score += 3;
  }

  return score;
}

export function getCatalogPaths(options = {}) {
  const repoRoot = resolveRepoRoot(options.repoRoot);
  return {
    repoRoot,
    distDir: path.join(repoRoot, "dist"),
    catalogPath: path.join(repoRoot, "dist", "catalog.json"),
    manifestsDir: path.join(repoRoot, "dist", "manifests"),
    skillsIndexPath: path.join(repoRoot, "skills_index.json"),
  };
}

export function loadCatalog(options = {}) {
  const paths = getCatalogPaths(options);
  return readJson(paths.catalogPath);
}

export function loadSkillsIndex(options = {}) {
  const paths = getCatalogPaths(options);
  return readJson(paths.skillsIndexPath);
}

export function loadManifest(skillId, options = {}) {
  const paths = getCatalogPaths(options);
  const manifestPath = path.join(paths.manifestsDir, `${skillId}.json`);

  if (!fs.existsSync(manifestPath)) {
    return null;
  }

  return readJson(manifestPath);
}

export function loadAllManifests(options = {}) {
  const catalog = loadCatalog(options);
  return catalog.skills
    .map((skill) => loadManifest(skill.id, options))
    .filter(Boolean);
}

function resolveRepoFile(relativePath, options = {}) {
  const { repoRoot } = getCatalogPaths(options);
  const absolutePath = path.resolve(repoRoot, relativePath);
  const repoRootPrefix = `${repoRoot}${path.sep}`;

  if (absolutePath !== repoRoot && !absolutePath.startsWith(repoRootPrefix)) {
    return null;
  }

  return absolutePath;
}

export function resolveCatalogFile(options = {}) {
  return getCatalogPaths(options).catalogPath;
}

export function resolveManifestFile(skillId, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  return resolveRepoFile(manifest.paths.manifest, options);
}

export function resolveSkillEntrypointFile(skillId, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  return resolveRepoFile(manifest.entrypoint, options);
}

export function listSkillArtifacts(skillId, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  return (manifest.artifacts || []).map((artifact) => ({
    ...artifact,
    download_url: buildPublicUrl(
      `/v1/skills/${encodeURIComponent(skillId)}/download/artifact?path=${encodeURIComponent(
        artifact.path,
      )}`,
      options,
    ),
  }));
}

export function resolveSkillArtifactFile(skillId, artifactPath, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  const artifact = (manifest.artifacts || []).find((item) => item.path === artifactPath);
  if (!artifact) {
    return null;
  }

  const absolutePath = resolveRepoFile(artifact.path, options);
  if (!absolutePath || !fs.existsSync(absolutePath)) {
    return null;
  }

  return {
    artifact,
    absolutePath,
  };
}

export function getSkillPublicUrls(skillId, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  return {
    self: buildPublicUrl(`/v1/skills/${encodeURIComponent(skillId)}`, options),
    downloads: buildPublicUrl(`/v1/skills/${encodeURIComponent(skillId)}/downloads`, options),
    manifest: buildPublicUrl(`/v1/skills/${encodeURIComponent(skillId)}/download/manifest`, options),
    entrypoint: buildPublicUrl(`/v1/skills/${encodeURIComponent(skillId)}/download/entrypoint`, options),
    artifacts: buildPublicUrl(`/v1/skills/${encodeURIComponent(skillId)}/artifacts`, options),
  };
}

export function listSkills(options = {}) {
  const catalog = loadCatalog(options);
  let skills = [...catalog.skills];

  if (options.category) {
    skills = skills.filter((skill) => skill.category === options.category);
  }

  if (options.tool) {
    skills = skills.filter((skill) => (skill.tools || []).includes(options.tool));
  }

  if (options.risk) {
    skills = skills.filter((skill) => skill.risk === options.risk);
  }

  const queryTokens = tokenize(options.q || options.query || "");
  if (queryTokens.length > 0) {
    skills = skills
      .map((skill) => ({
        ...skill,
        _score: scoreSkill(skill, queryTokens, [], options.tool, options.category),
      }))
      .filter((skill) => skill._score > 0)
      .sort((left, right) => right._score - left._score || left.id.localeCompare(right.id))
      .map(({ _score, ...skill }) => skill);
  }

  const limit = ensureNumber(options.limit, DEFAULT_LIMIT);
  const offset = Math.max(0, Number.parseInt(String(options.offset || 0), 10) || 0);

  return {
    total: skills.length,
    offset,
    limit,
    results: skills.slice(offset, offset + limit),
  };
}

export function getSkill(skillId, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  const baseUrl = getPublicBaseUrl(options);
  if (!baseUrl) {
    return manifest;
  }

  return {
    ...manifest,
    links: getSkillPublicUrls(skillId, options),
  };
}

export function searchSkills(options = {}) {
  return listSkills(options);
}

export function compareSkills(skillIds, options = {}) {
  const manifests = skillIds
    .map((skillId) => loadManifest(skillId, options))
    .filter(Boolean);

  if (manifests.length === 0) {
    return {
      skills: [],
      shared: {
        categories: [],
        tools: [],
        tags: [],
      },
      differences: [],
    };
  }

  const shared = {
    categories:
      new Set(manifests.map((manifest) => manifest.category).filter(Boolean)).size === 1
        ? [...new Set(manifests.map((manifest) => manifest.category).filter(Boolean))]
        : [],
    tools: manifests
      .map((manifest) => new Set(manifest.compatibility.tools || []))
      .reduce((current, next) => {
        if (!current) return next;
        return new Set([...current].filter((tool) => next.has(tool)));
      }, null),
    tags: manifests
      .map((manifest) => new Set(manifest.tags || []))
      .reduce((current, next) => {
        if (!current) return next;
        return new Set([...current].filter((tag) => next.has(tag)));
      }, null),
  };

  return {
    skills: manifests.map((manifest) => ({
      id: manifest.id,
      display_name: manifest.display_name,
      description: manifest.description,
      category: manifest.category,
      tools: manifest.compatibility.tools || [],
      tags: manifest.tags || [],
      risk: manifest.risk,
      manifest_path: manifest.paths.manifest,
    })),
    shared: {
      categories: shared.categories,
      tools: [...(shared.tools || new Set())],
      tags: [...(shared.tags || new Set())],
    },
    differences: manifests.map((manifest) => ({
      id: manifest.id,
      unique_tools: (manifest.compatibility.tools || []).filter(
        (tool) => !(shared.tools || new Set()).has(tool),
      ),
      unique_tags: (manifest.tags || []).filter((tag) => !(shared.tags || new Set()).has(tag)),
    })),
  };
}

export function recommendSkills(options = {}) {
  const manifests = loadAllManifests(options);
  const goalTokens = tokenize(options.goal || "");
  const queryTokens = tokenize(options.q || options.query || "");
  const limit = ensureNumber(options.limit, 5);

  const results = manifests
    .map((manifest) => ({
      id: manifest.id,
      display_name: manifest.display_name,
      description: manifest.description,
      category: manifest.category,
      tags: manifest.tags || [],
      tools: manifest.compatibility.tools || [],
      manifest_path: manifest.paths.manifest,
      score: scoreSkill(
        manifest,
        queryTokens.length > 0 ? queryTokens : goalTokens,
        goalTokens,
        options.tool || "",
        options.category || "",
      ),
    }))
    .filter((skill) => {
      if (options.tool && !(skill.tools || []).includes(options.tool)) {
        return false;
      }

      if (options.category && skill.category !== options.category) {
        return false;
      }

      return true;
    })
    .sort((left, right) => right.score - left.score || left.id.localeCompare(right.id))
    .slice(0, limit);

  return {
    goal: options.goal || "",
    tool: options.tool || null,
    category: options.category || null,
    results,
  };
}

export function listBundles(options = {}) {
  const availableIds = new Set(loadCatalog(options).skills.map((skill) => skill.id));
  const bundleDefinitions = loadBundleDefinitions(options);

  return bundleDefinitions.map((bundle) => {
    const available_skill_ids = bundle.skill_ids.filter((skillId) => availableIds.has(skillId));
    const missing_skill_ids = bundle.skill_ids.filter((skillId) => !availableIds.has(skillId));
    return {
      ...bundle,
      available_skill_ids,
      missing_skill_ids,
      availability: {
        available: available_skill_ids.length,
        total: bundle.skill_ids.length,
      },
    };
  });
}

export function getClientInstallRecipe(client, options = {}) {
  const manifests = loadAllManifests(options);

  for (const manifest of manifests) {
    const match = (manifest.install.recipes || []).find((recipe) => recipe.tool === client);
    if (match) {
      return {
        client,
        recipe: match,
        source_skill_id: manifest.id,
      };
    }
  }

  return null;
}

export function buildInstallPlan(input = {}, options = {}) {
  const explicitSkillIds = Array.isArray(input.skill_ids) ? input.skill_ids : input.skillIds || [];
  const explicitBundleIds = Array.isArray(input.bundle_ids) ? input.bundle_ids : input.bundleIds || [];
  const bundleIndex = new Map(listBundles(options).map((bundle) => [bundle.id, bundle]));
  const selectedBundles = explicitBundleIds
    .map((bundleId) => bundleIndex.get(bundleId))
    .filter(Boolean);
  const expandedSkillIds = [...new Set([
    ...explicitSkillIds,
    ...selectedBundles.flatMap((bundle) => bundle.available_skill_ids || []),
  ])];
  const selectedSkills = expandedSkillIds
    .map((skillId) => loadManifest(skillId, options))
    .filter(Boolean);
  const validExplicitSkillIds = explicitSkillIds.filter((skillId) =>
    selectedSkills.some((skill) => skill.id === skillId),
  );
  const validExplicitBundleIds = selectedBundles.map((bundle) => bundle.id);

  const explicitTools = Array.isArray(input.tools) ? input.tools : [];
  const targetPath = input.target_path || input.targetPath || null;
  const dryRun = input.dry_run !== undefined ? Boolean(input.dry_run) : true;
  const hasResolvedSelection = validExplicitSkillIds.length > 0 || validExplicitBundleIds.length > 0;

  const inferredTools = [...new Set(
    selectedSkills.flatMap((skill) => (skill.compatibility.install_targets || []).map((target) => target.tool)),
  )];

  const tools = explicitTools.length > 0 ? explicitTools : inferredTools;
  const baseRecipes = targetPath
    ? [
        {
          tool: "custom-path",
          command: `npx omni-skills --path ${shellQuote(targetPath)}`,
          scope: "custom",
          default_path: targetPath,
          behavior: "Installs the full Omni Skills library into the selected custom path by default. Use --skill or --bundle to install only a subset.",
        },
      ]
    : tools
        .map((tool) => getClientInstallRecipe(tool, options))
        .filter(Boolean)
        .map((item) => item.recipe);
  const clientRecipes = baseRecipes.map((recipe) => ({
    ...recipe,
    command: appendSelectionFlags(recipe.command, {
      skillIds: validExplicitSkillIds,
      bundleIds: validExplicitBundleIds,
    }),
    behavior: hasResolvedSelection
      ? "Installs only the selected skills and bundle members into the selected target."
      : recipe.behavior,
  }));

  const warnings = [];
  const missingSkillIds = explicitSkillIds.filter(
    (skillId) => !selectedSkills.some((skill) => skill.id === skillId),
  );
  if (missingSkillIds.length > 0) {
    warnings.push(`Some requested skills were not found: ${missingSkillIds.join(", ")}.`);
  }

  const missingBundleIds = explicitBundleIds.filter((bundleId) => !bundleIndex.has(bundleId));
  if (missingBundleIds.length > 0) {
    warnings.push(`Some requested bundles were not found: ${missingBundleIds.join(", ")}.`);
  }

  if ((explicitSkillIds.length > 0 || explicitBundleIds.length > 0) && !hasResolvedSelection) {
    warnings.push("No requested skills or bundles could be resolved. Generated commands fall back to the default full-library install.");
  }

  const bundlesWithMissingSkills = selectedBundles.filter(
    (bundle) => Array.isArray(bundle.missing_skill_ids) && bundle.missing_skill_ids.length > 0,
  );
  for (const bundle of bundlesWithMissingSkills) {
    warnings.push(
      `Bundle '${bundle.id}' references unavailable skills: ${bundle.missing_skill_ids.join(", ")}.`,
    );
  }
  if (!targetPath && clientRecipes.length === 0) {
    warnings.push("No compatible install targets were resolved from the selected skills. Provide an explicit tool or target_path.");
  }

  return {
    dry_run: dryRun,
    selected_bundles: selectedBundles.map((bundle) => ({
      id: bundle.id,
      name: bundle.name,
      available_skill_ids: bundle.available_skill_ids,
      missing_skill_ids: bundle.missing_skill_ids,
    })),
    selected_skills: selectedSkills.map((skill) => ({
      id: skill.id,
      display_name: skill.display_name,
      manifest_path: skill.paths.manifest,
      checksums: skill.checksums,
      links: getSkillPublicUrls(skill.id, options),
    })),
    install_scope: hasResolvedSelection ? "selected-skills" : "full-library",
    target_path: targetPath,
    target_clients: targetPath ? ["custom-path"] : tools,
    commands: clientRecipes.map((recipe) => recipe.command),
    recipes: clientRecipes,
    warnings,
    downloads: {
      catalog: buildPublicUrl("/v1/catalog/download", options),
      artifacts_available: Boolean(getPublicBaseUrl(options)),
    },
    next_steps: clientRecipes.map((recipe) => ({
      action: "run-command",
      command: recipe.command,
      description: `Install Omni Skills into ${recipe.default_path}`,
    })),
  };
}

export function getHealthSnapshot(options = {}) {
  const catalog = loadCatalog(options);
  return {
    status: "ok",
    generated_at: catalog.generated_at,
    total_skills: catalog.total_skills,
    categories: catalog.categories,
  };
}
