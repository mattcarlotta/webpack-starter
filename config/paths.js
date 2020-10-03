const { resolve } = require("path");
const { currentDirectory } = require("./envs");

// =============================================================== //
// WEBPACK PATHS                                                   //
// =============================================================== //

const resolvePath = path => resolve(currentDirectory, path);

/* directory folders can now be referenced with "~" */
const alias = {
  "~components": resolvePath("src/components/"),
  "~images": resolvePath("src/images/"),
  "~pages": resolvePath("src/pages/"),
  "~root": resolvePath("src/root/index"),
  "~routes": resolvePath("src/routes/index"),
  "~styles": resolvePath("src/styles/"),
  "~utils": resolvePath("src/utils/"),
};

module.exports = {
  /* project root directory */
  root: resolvePath(""),
  /* project publicPath */
  publicPath: "/",
  /* compiled build output path (/dist) */
  outputPath: resolvePath("dist"),
  /* path to public folder (./public) */
  publicFolder: resolvePath("public"),
  /* entry point to the application index (./src/index.js) */
  entryPath: resolvePath("src/index.js"),
  /* path to index.html (build/index.html) */
  templatePath: resolvePath("public/index.html"),
  /* path to favicon.ico (build/favicon.ico) */
  faviconPath: resolvePath("public/favicon.ico"),
  /*  path to local styles (/src) */
  localCSS: resolvePath("src"),
  /* path to the globals.scss file (src/styles/globals/globals.scss) */
  globalCSS: resolvePath("src/styles/globals"),
  /* analyzed client assets (next/analyze/client.html) */
  analyzePath: "./analyze/client.html",
  /* compiled fonts build path (build/assets) */
  fontsFolder: "assets",
  /* compiled CSS build path (build/css) */
  cssFolder: "css",
  /* compiled JS build path (build/js) */
  jsFolder: "js",
  /* webpack aliased folders */
  alias,
};
