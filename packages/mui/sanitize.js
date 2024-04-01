// Libraries
const fs = require("fs").promises;

// Utilities
const packageJson = require("./package.json");

/**
 * @description
 * Sanitization utility for extracting essential package.json information from individual MUI wrapper packages.
 *
 * The goal of this minimal package.json is only to act as a compatibility mechanism for JS systems or bundlers which can't rely on exports for references to module access.
 *
 * @example
 * // webpack 4
 * import Accordion from '@iccc/mui/dist/accordion';
 * -> utilizes accordion/package.json 'main'
 *  -> returns './dist/index.js'
 *
 * // webpack 5
 * import Accordion from '@iccc/mui/accordion';
 * -> utiliize root/package.json 'exports'
 *  -> returns './dist/index.js`
 */
const sanitizePackageJson = (pkg) => {
  fs.readFile(`./dist/${pkg}/package.json`)
    .then((body) => JSON.parse(body))
    .then((json) => {
      const { main, module, types, sideEffects } = json;
      return { main, module, types, sideEffects };
    })
    .then((json) => JSON.stringify(json))
    .then((body) => fs.writeFile(`./dist/${pkg}/package.json`, body))
    .catch((error) => console.warn(error));
};

packageJson.nx.implicitDependencies.forEach((pkg) => {
  pkg = pkg.split("/")[1];
  if (pkg !== "ref-app") {
    sanitizePackageJson(pkg);
  }
});
