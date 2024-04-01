// Libraries
const { exec } = require("node:child_process");
// Utilities
const packageJson = require("./package.json");

/**
 * @description
 * Library synchronization utility for extracting all library dependencies and their outputs from individual MUI wrapper packages.
 * Relies on commandline rsync.
 *
 * Algorithm: An optimistic bottom-up travesal, navigating through only nx dependencies (guaranteed directories) and excluding all development files.
 */
const syncPackages = () => {
  const library = packageJson.nx.implicitDependencies
    .filter((pkg) => !pkg.includes("ref-app"))
    .map((pkg) => `../${pkg.split("/")[1]}`)
    .join(" ");

  exec(
    `rsync -azP --prune-empty-dirs --exclude-from=./exclude.txt ${library} dist`,
    (err, output) => {
      if (err) console.error(err);
      console.log(output);
    }
  );
};

syncPackages();
