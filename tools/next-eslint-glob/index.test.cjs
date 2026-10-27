const assert = require("node:assert/strict");
const { mkdtempSync, mkdirSync, writeFileSync, rmSync } = require("node:fs");
const { tmpdir } = require("node:os");
const { join } = require("node:path");
const { test } = require("node:test");
const { getRootDirs } = require("@next/eslint-plugin-next/dist/utils/get-root-dirs");

test("Next.js rootDir globs retain fast-glob directory behavior", () => {
  const cwd = mkdtempSync(join(tmpdir(), "next-eslint-glob-"));
  const previousCwd = process.cwd();
  try {
    mkdirSync(join(cwd, "apps/web/nested"), { recursive: true });
    mkdirSync(join(cwd, "apps/admin"), { recursive: true });
    writeFileSync(join(cwd, "apps/file.js"), "");
    process.chdir(cwd);
    const roots = (rootDir) =>
      getRootDirs({ cwd, settings: { next: { rootDir } } }).sort();

    assert.deepEqual(roots(undefined), [cwd]);
    assert.deepEqual(roots("apps/web"), ["apps/web"]);
    assert.deepEqual(roots("apps/*"), ["apps/admin", "apps/web"]);
    assert.deepEqual(roots("apps/{admin,web}"), ["apps/admin", "apps/web"]);
    assert.deepEqual(roots(["apps/web", "apps/admin"]), ["apps/admin", "apps/web"]);
    assert.deepEqual(roots("apps/file.js"), []);
    assert.deepEqual(roots("missing-*"), []);
    assert.deepEqual(roots(join(cwd, "apps/web")), [join(cwd, "apps/web")]);
  } finally {
    process.chdir(previousCwd);
    rmSync(cwd, { recursive: true, force: true });
  }
});
