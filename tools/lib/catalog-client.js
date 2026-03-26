"use strict";

const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");

const DEFAULT_REF = "main";
const DEFAULT_RAW_BASE = "https://raw.githubusercontent.com/diegosouzapw/omni-skills";

function resolveSourceRoot() {
  const sourceRoot = process.env.OMNI_SKILLS_SOURCE_ROOT;
  return sourceRoot ? path.resolve(sourceRoot) : null;
}

function resolveRawBase() {
  return (process.env.OMNI_SKILLS_RAW_BASE_URL || DEFAULT_RAW_BASE).replace(/\/+$/, "");
}

function fetchBuffer(url, redirects = 4) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https:") ? https : http;

    const request = client.get(
      url,
      {
        headers: {
          "User-Agent": "omni-skills-installer/1.0.0",
          "Accept": "*/*",
        },
      },
      (response) => {
        if (
          response.statusCode &&
          response.statusCode >= 300 &&
          response.statusCode < 400 &&
          response.headers.location &&
          redirects > 0
        ) {
          response.resume();
          const nextUrl = new URL(response.headers.location, url).toString();
          fetchBuffer(nextUrl, redirects - 1).then(resolve, reject);
          return;
        }

        if (response.statusCode !== 200) {
          response.resume();
          reject(new Error(`Request failed for ${url} with status ${response.statusCode}`));
          return;
        }

        const chunks = [];
        response.on("data", (chunk) => chunks.push(chunk));
        response.on("end", () => resolve(Buffer.concat(chunks)));
      },
    );

    request.on("error", reject);
  });
}

function readRelativeFile(relativePath) {
  const sourceRoot = resolveSourceRoot();
  if (!sourceRoot) {
    return null;
  }

  const absolutePath = path.resolve(sourceRoot, relativePath);
  return fs.readFileSync(absolutePath);
}

async function getRelativeFile(relativePath, ref = DEFAULT_REF) {
  const localBuffer = readRelativeFile(relativePath);
  if (localBuffer) {
    return localBuffer;
  }

  const rawBase = resolveRawBase();
  const url = `${rawBase}/${encodeURIComponent(ref).replace(/%2F/g, "/")}/${relativePath}`;
  return fetchBuffer(url);
}

async function getRelativeJson(relativePath, ref = DEFAULT_REF) {
  const buffer = await getRelativeFile(relativePath, ref);
  return JSON.parse(buffer.toString("utf-8"));
}

async function writeRelativeFile(relativePath, destinationPath, ref = DEFAULT_REF) {
  const buffer = await getRelativeFile(relativePath, ref);
  fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
  fs.writeFileSync(destinationPath, buffer);
}

async function fetchCatalog(ref = DEFAULT_REF) {
  return getRelativeJson("dist/catalog.json", ref);
}

async function fetchManifest(skillId, ref = DEFAULT_REF) {
  return getRelativeJson(`dist/manifests/${skillId}.json`, ref);
}

async function fetchBundles(ref = DEFAULT_REF) {
  return getRelativeJson("dist/bundles.json", ref);
}

module.exports = {
  DEFAULT_REF,
  fetchCatalog,
  fetchManifest,
  fetchBundles,
  writeRelativeFile,
};
