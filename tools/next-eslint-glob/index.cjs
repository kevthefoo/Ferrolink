const { globSync: tinyGlobSync } = require("tinyglobby");
const { isAbsolute } = require("node:path");

// Only the globSync API used by @next/eslint-plugin-next is supported.
// fast-glob does not expand literal directories or append directory slashes.
exports.globSync = (patterns, options = {}) =>
  tinyGlobSync(patterns, {
    ...options,
    expandDirectories: false,
    absolute: options.absolute ?? (typeof patterns === "string" && isAbsolute(patterns)),
  }).map((path) =>
    path.length > 1 ? path.replace(/\/$/, "") : path,
  );
