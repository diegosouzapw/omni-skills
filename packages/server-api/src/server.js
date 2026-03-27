import express from "express";
import {
  buildInstallPlan,
  compareSkills,
  getHealthSnapshot,
  getSkill,
  getSkillPublicUrls,
  listBundles,
  listSkillArchives,
  listSkills,
  listSkillArtifacts,
  resolveCatalogFile,
  resolveSkillArchiveChecksumsFile,
  resolveSkillArchiveFile,
  resolveSkillArchiveSignatureFile,
  resolveManifestFile,
  resolveSkillArtifactFile,
  resolveSkillEntrypointFile,
  searchSkills,
} from "../../catalog-core/src/index.js";
import {
  applyExpressHttpRuntime,
  createHttpCorsMiddleware,
  createHttpRuntimeMiddleware,
  getHttpRuntimeSnapshot,
} from "./http-runtime.js";

const app = express();
const PORT = Number.parseInt(process.env.PORT || "3333", 10);
const HOST = process.env.HOST || "127.0.0.1";

applyExpressHttpRuntime(app);
app.use(createHttpCorsMiddleware());
app.use(express.json({ limit: "1mb" }));
app.use(createHttpRuntimeMiddleware({
  allowAnonymousPaths: ["/healthz"],
  adminPaths: ["/admin/runtime"],
}));

function requestBaseUrl(req) {
  return `${req.protocol}://${req.get("host")}`;
}

app.get("/healthz", (_req, res) => {
  res.json({
    ...getHealthSnapshot(),
    http: getHttpRuntimeSnapshot(),
  });
});

app.get("/admin/runtime", (req, res) => {
  res.json({
    request_id: req.omniRequestId || null,
    http: getHttpRuntimeSnapshot({ detailed: true }),
    runtime: {
      host: HOST,
      port: PORT,
      base_url: requestBaseUrl(req),
    },
    catalog: {
      total_skills: listSkills({ limit: 1 }).total,
      bundles: listBundles().length,
    },
  });
});

app.get("/openapi.json", (req, res) => {
  const origin = requestBaseUrl(req);
  res.json({
    openapi: "3.1.0",
    info: {
      title: "Omni Skills Catalog API",
      version: "0.1.0",
      description: "Read-only API for skill discovery, manifests, bundles, and install planning.",
    },
    servers: [{ url: origin }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
        apiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "x-api-key",
        },
      },
    },
    paths: {
      "/healthz": { get: { summary: "Health check" } },
      "/admin/runtime": { get: { summary: "Admin-only runtime and governance snapshot" } },
      "/v1/catalog/download": { get: { summary: "Download the generated catalog JSON" } },
      "/v1/skills": { get: { summary: "List skills" } },
      "/v1/skills/{id}": { get: { summary: "Get a skill manifest" } },
      "/v1/skills/{id}/artifacts": { get: { summary: "List skill artifacts" } },
      "/v1/skills/{id}/archives": { get: { summary: "List skill archives and signatures" } },
      "/v1/skills/{id}/downloads": { get: { summary: "Get download links for a skill" } },
      "/v1/skills/{id}/download/manifest": { get: { summary: "Download a skill manifest" } },
      "/v1/skills/{id}/download/entrypoint": { get: { summary: "Download a skill entrypoint" } },
      "/v1/skills/{id}/download/artifact": { get: { summary: "Download a skill artifact by path" } },
      "/v1/skills/{id}/download/archive": { get: { summary: "Download a skill archive by format" } },
      "/v1/skills/{id}/download/archive/signature": { get: { summary: "Download a detached archive signature by format" } },
      "/v1/skills/{id}/download/archive/checksums": { get: { summary: "Download archive checksum manifest" } },
      "/v1/search": { get: { summary: "Search skills" } },
      "/v1/compare": { get: { summary: "Compare skills" } },
      "/v1/bundles": { get: { summary: "List curated bundles" } },
      "/v1/install/plan": { post: { summary: "Build an install plan" } },
    },
  });
});

app.get("/v1/catalog/download", (_req, res) => {
  res.download(resolveCatalogFile(), "catalog.json");
});

app.get("/v1/skills", (req, res) => {
  res.json(listSkills(req.query));
});

app.get("/v1/skills/:id", (req, res) => {
  const skill = getSkill(req.params.id, { baseUrl: requestBaseUrl(req) });
  if (!skill) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.json(skill);
});

app.get("/v1/skills/:id/artifacts", (req, res) => {
  const artifacts = listSkillArtifacts(req.params.id, { baseUrl: requestBaseUrl(req) });
  const skill = getSkill(req.params.id, { baseUrl: requestBaseUrl(req) });
  if (!artifacts || !skill) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.json({
    id: req.params.id,
    links: skill.links,
    artifacts,
    checksums: skill.checksums,
  });
});

app.get("/v1/skills/:id/archives", (req, res) => {
  const archives = listSkillArchives(req.params.id, { baseUrl: requestBaseUrl(req) });
  const skill = getSkill(req.params.id, { baseUrl: requestBaseUrl(req) });
  if (!archives || !skill) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.json({
    id: req.params.id,
    links: skill.links,
    archives,
    archive_checksums: skill.archive_checksums,
  });
});

app.get("/v1/skills/:id/downloads", (req, res) => {
  const skill = getSkill(req.params.id, { baseUrl: requestBaseUrl(req) });
  const artifacts = listSkillArtifacts(req.params.id, { baseUrl: requestBaseUrl(req) });
  const links = getSkillPublicUrls(req.params.id, { baseUrl: requestBaseUrl(req) });

  if (!skill || !artifacts || !links) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.json({
    id: req.params.id,
    links,
    checksums: skill.checksums,
    artifacts,
    archives: listSkillArchives(req.params.id, { baseUrl: requestBaseUrl(req) }),
    archive_checksums: skill.archive_checksums,
  });
});

app.get("/v1/skills/:id/download/manifest", (req, res) => {
  const manifestFile = resolveManifestFile(req.params.id);
  if (!manifestFile) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.download(manifestFile, `${req.params.id}.manifest.json`);
});

app.get("/v1/skills/:id/download/entrypoint", (req, res) => {
  const entrypointFile = resolveSkillEntrypointFile(req.params.id);
  if (!entrypointFile) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.download(entrypointFile, `${req.params.id}.SKILL.md`);
});

app.get("/v1/skills/:id/download/artifact", (req, res) => {
  const artifactPath = String(req.query.path || "");
  const resolved = resolveSkillArtifactFile(req.params.id, artifactPath);
  if (!artifactPath || !resolved) {
    res.status(404).json({ error: `Artifact '${artifactPath}' not found for skill '${req.params.id}'.` });
    return;
  }

  res.download(resolved.absolutePath, resolved.artifact.path.split("/").at(-1));
});

app.get("/v1/skills/:id/download/archive", (req, res) => {
  const format = String(req.query.format || "zip");
  const resolved = resolveSkillArchiveFile(req.params.id, format);
  if (!resolved) {
    res.status(404).json({ error: `Archive '${format}' not found for skill '${req.params.id}'.` });
    return;
  }

  res.download(resolved.absolutePath, resolved.archive.file_name);
});

app.get("/v1/skills/:id/download/archive/signature", (req, res) => {
  const format = String(req.query.format || "zip");
  const resolved = resolveSkillArchiveSignatureFile(req.params.id, format);
  if (!resolved) {
    res.status(404).json({ error: `Signature '${format}' not found for skill '${req.params.id}'.` });
    return;
  }

  res.download(resolved.absolutePath, resolved.archive.signature.path.split("/").at(-1));
});

app.get("/v1/skills/:id/download/archive/checksums", (req, res) => {
  const resolved = resolveSkillArchiveChecksumsFile(req.params.id);
  if (!resolved) {
    res.status(404).json({ error: `Archive checksums not found for skill '${req.params.id}'.` });
    return;
  }

  res.download(
    resolved.absolutePath,
    resolved.archive_checksums.file_name || `${req.params.id}.checksums.txt`,
  );
});

app.get("/v1/search", (req, res) => {
  res.json(searchSkills(req.query));
});

app.get("/v1/compare", (req, res) => {
  const ids = String(req.query.ids || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  res.json(compareSkills(ids));
});

app.get("/v1/bundles", (_req, res) => {
  res.json({ bundles: listBundles() });
});

app.post("/v1/install/plan", (req, res) => {
  res.json(buildInstallPlan(req.body || {}, { baseUrl: requestBaseUrl(req) }));
});

app.listen(PORT, HOST, () => {
  console.log(`Omni Skills API listening at http://${HOST}:${PORT}`);
});
