"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const crypto = require("node:crypto");

const DEFAULT_STATE_PATH = path.join(
  os.homedir(),
  ".omni-skills",
  "state",
  "ui-state.json",
);

const RECENT_LIMIT = 8;
const PRESET_LIMIT = 12;

function defaultState() {
  return {
    version: 1,
    last_updated_at: null,
    recentInstalls: [],
    recentServices: [],
    installPresets: [],
    servicePresets: [],
    favorites: {
      skills: [],
      bundles: [],
    },
  };
}

function ensureStateDir(filePath = DEFAULT_STATE_PATH) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function readJsonFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function dedupeEntries(entries, keyBuilder, limit) {
  const seen = new Set();
  const deduped = [];
  for (const entry of entries) {
    const key = keyBuilder(entry);
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    deduped.push(entry);
    if (deduped.length >= limit) {
      break;
    }
  }
  return deduped;
}

function normalizeState(input = {}) {
  const baseline = defaultState();
  return {
    ...baseline,
    ...input,
    recentInstalls: Array.isArray(input.recentInstalls) ? input.recentInstalls : baseline.recentInstalls,
    recentServices: Array.isArray(input.recentServices) ? input.recentServices : baseline.recentServices,
    installPresets: Array.isArray(input.installPresets) ? input.installPresets : baseline.installPresets,
    servicePresets: Array.isArray(input.servicePresets) ? input.servicePresets : baseline.servicePresets,
    favorites: {
      skills: Array.isArray(input.favorites?.skills) ? input.favorites.skills : baseline.favorites.skills,
      bundles: Array.isArray(input.favorites?.bundles) ? input.favorites.bundles : baseline.favorites.bundles,
    },
  };
}

function loadCliState(filePath = DEFAULT_STATE_PATH) {
  if (!fs.existsSync(filePath)) {
    return normalizeState();
  }

  try {
    return normalizeState(readJsonFile(filePath));
  } catch (_error) {
    return normalizeState();
  }
}

function saveCliState(state, filePath = DEFAULT_STATE_PATH) {
  ensureStateDir(filePath);
  const normalized = normalizeState({
    ...state,
    last_updated_at: new Date().toISOString(),
  });
  fs.writeFileSync(filePath, `${JSON.stringify(normalized, null, 2)}\n`, "utf-8");
  return normalized;
}

function recentInstallKey(entry) {
  return JSON.stringify({
    tool: entry.tool || "",
    targetPath: entry.targetPath || "",
    skillId: entry.skillId || "",
    bundleId: entry.bundleId || "",
    scope: entry.scope || "",
  });
}

function recentServiceKey(entry) {
  return JSON.stringify({
    service: entry.service || "",
    transport: entry.transport || "",
    mode: entry.mode || "",
    host: entry.host || "",
    port: entry.port || "",
    storeType: entry.storeType || "",
    executorMode: entry.executorMode || "",
  });
}

function recordRecentInstall(state, entry) {
  const stamped = {
    id: entry.id || crypto.randomUUID(),
    created_at: entry.created_at || new Date().toISOString(),
    ...entry,
  };
  return {
    ...state,
    recentInstalls: dedupeEntries(
      [stamped, ...(state.recentInstalls || [])],
      recentInstallKey,
      RECENT_LIMIT,
    ),
  };
}

function recordRecentService(state, entry) {
  const stamped = {
    id: entry.id || crypto.randomUUID(),
    created_at: entry.created_at || new Date().toISOString(),
    ...entry,
  };
  return {
    ...state,
    recentServices: dedupeEntries(
      [stamped, ...(state.recentServices || [])],
      recentServiceKey,
      RECENT_LIMIT,
    ),
  };
}

function saveInstallPreset(state, name, entry) {
  const preset = {
    id: entry.id || crypto.randomUUID(),
    name: String(name || "").trim(),
    created_at: entry.created_at || new Date().toISOString(),
    ...entry,
  };
  return {
    ...state,
    installPresets: dedupeEntries(
      [preset, ...(state.installPresets || []).filter((item) => item.name !== preset.name)],
      (item) => item.name,
      PRESET_LIMIT,
    ),
  };
}

function saveServicePreset(state, name, entry) {
  const preset = {
    id: entry.id || crypto.randomUUID(),
    name: String(name || "").trim(),
    created_at: entry.created_at || new Date().toISOString(),
    ...entry,
  };
  return {
    ...state,
    servicePresets: dedupeEntries(
      [preset, ...(state.servicePresets || []).filter((item) => item.name !== preset.name)],
      (item) => item.name,
      PRESET_LIMIT,
    ),
  };
}

function toggleFavoriteSkill(state, skillId) {
  const normalized = String(skillId || "").trim();
  if (!normalized) {
    return state;
  }

  const hasSkill = state.favorites.skills.includes(normalized);
  return {
    ...state,
    favorites: {
      ...state.favorites,
      skills: hasSkill
        ? state.favorites.skills.filter((item) => item !== normalized)
        : [...state.favorites.skills, normalized].sort(),
    },
  };
}

function toggleFavoriteBundle(state, bundleId) {
  const normalized = String(bundleId || "").trim();
  if (!normalized) {
    return state;
  }

  const hasBundle = state.favorites.bundles.includes(normalized);
  return {
    ...state,
    favorites: {
      ...state.favorites,
      bundles: hasBundle
        ? state.favorites.bundles.filter((item) => item !== normalized)
        : [...state.favorites.bundles, normalized].sort(),
    },
  };
}

module.exports = {
  DEFAULT_STATE_PATH,
  defaultState,
  loadCliState,
  saveCliState,
  recordRecentInstall,
  recordRecentService,
  saveInstallPreset,
  saveServicePreset,
  toggleFavoriteSkill,
  toggleFavoriteBundle,
};
