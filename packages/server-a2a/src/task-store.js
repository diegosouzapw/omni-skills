import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

function ensureParentDirectory(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

class MemoryTaskStore {
  constructor() {
    this.kind = "memory";
    this.path = null;
  }

  loadTasks() {
    return [];
  }

  saveTasks(_records) {}
}

class JsonTaskStore {
  constructor(filePath) {
    this.kind = "json";
    this.path = filePath;
  }

  loadTasks() {
    if (!this.path || !fs.existsSync(this.path)) {
      return [];
    }
    const payload = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    return Array.isArray(payload?.tasks) ? payload.tasks : [];
  }

  saveTasks(records) {
    ensureParentDirectory(this.path);
    const payload = {
      schema_version: "2026-03-27",
      generated_at: new Date().toISOString(),
      tasks: records,
    };
    const temporaryPath = `${this.path}.tmp`;
    fs.writeFileSync(temporaryPath, JSON.stringify(payload, null, 2), "utf-8");
    fs.renameSync(temporaryPath, this.path);
  }
}

class SqliteTaskStore {
  constructor(filePath) {
    this.kind = "sqlite";
    this.path = filePath;

    const require = createRequire(import.meta.url);
    const sqliteModule = require("node:sqlite");
    this.DatabaseSync = sqliteModule.DatabaseSync;
    ensureParentDirectory(this.path);
    this.db = new this.DatabaseSync(this.path);
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS tasks (
        id TEXT PRIMARY KEY,
        payload TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `);
  }

  loadTasks() {
    const statement = this.db.prepare("SELECT payload FROM tasks ORDER BY updated_at ASC");
    return statement.all().map((row) => JSON.parse(row.payload));
  }

  saveTasks(records) {
    const ids = new Set(records.map((record) => record.id));
    const transaction = this.db.transaction((items) => {
      const upsert = this.db.prepare(`
        INSERT INTO tasks (id, payload, updated_at)
        VALUES (?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          payload = excluded.payload,
          updated_at = excluded.updated_at
      `);
      for (const record of items) {
        upsert.run(record.id, JSON.stringify(record), new Date().toISOString());
      }

      const existing = this.db.prepare("SELECT id FROM tasks").all();
      const remove = this.db.prepare("DELETE FROM tasks WHERE id = ?");
      for (const row of existing) {
        if (!ids.has(row.id)) {
          remove.run(row.id);
        }
      }
    });

    transaction(records);
  }
}

export function createTaskStore({
  enabled = true,
  storeType = process.env.OMNI_SKILLS_A2A_STORE_TYPE || "json",
  persistencePath,
} = {}) {
  if (!enabled) {
    return new MemoryTaskStore();
  }

  const normalized = String(storeType || "json").trim().toLowerCase();
  if (normalized === "memory") {
    return new MemoryTaskStore();
  }

  if (normalized === "sqlite") {
    return new SqliteTaskStore(persistencePath);
  }

  return new JsonTaskStore(persistencePath);
}
