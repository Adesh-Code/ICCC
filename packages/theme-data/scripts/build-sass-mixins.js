/**
 * build-sass-mixins.js
 *
 * Publish mixins & maps to the `lib/build/scss` directory as part of the theme-data build process.
 */
import path from "path";
import fs from "fs";
import mkdirp from "mkdirp";
import util from "util";

const readFile = util.promisify(fs.readFile);
const readFiles = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);
const fileExists = util.promisify(fs.exists);
const writeDir = util.promisify(fs.mkdir);

const pathByType = {
  maps: path.join(process.cwd(), "src/scss/maps"),
  utilityMixins: path.join(process.cwd(), "src/scss/mixins/utilities"),
  componentMixins: path.join(process.cwd(), "src/scss/mixins/components")
};

const buildPathByType = {
  maps: path.join(process.cwd(), "lib/build/scss/variables"),
  mixins: path.join(process.cwd(), "lib/build/scss/mixins")
};

/**
 * Given an array of file paths, reads all the files and merges them
 * while keeping all the dependencies at the top of the output file
 * @returns merged file set with dependencies at the top
 */
const parseSassFileSets = async (fileSetPaths) => {
  let fileContents = "";
  let fileDependencies = "";
  // Track imported dependencies
  const importedDependencies = new Set();

  const filterDependencies = (line) => {
    if (line.substring(0, 4) === "@use") {
      // Check if this dependency has not been added yet
      if (!importedDependencies.has(line)) {
        fileDependencies += line + "\n";
        importedDependencies.add(line);
        return false;
      }
    }
    return true;
  };

  for (const fileSetPath of fileSetPaths) {
    const fileSet = await readFiles(fileSetPath, "utf8");

    for (const fileName of fileSet) {
      const file =
        fileName.substring(fileName.length - 4) === "scss"
          ? await readFile(path.join(fileSetPath, fileName), "utf8")
          : "";

      // For every @use line, save it to the dependencies and remove it from the file contents
      const fileWithoutDependency = file
        .split(/\r?\n/)
        .filter(filterDependencies)
        .join("\n");

      // Push the file contents
      fileContents += fileWithoutDependency;
    }
  }

  return fileDependencies + fileContents;
};

/**
 * Copies a set of folders to another location
 */
const copyFoldersToDestination = async (folders, destination) => {
  const dirExists = await fileExists(destination);

  if (!dirExists) {
    writeDir(destination);
  }

  for (const folder of folders) {
    const fileNames = await readFiles(folder, "utf8");
    for (const fileName of fileNames) {
      const file = await readFile(path.join(folder, fileName), "utf8");
      await writeFile(path.join(destination, fileName), file);
    }
  }
};

/**
 * Build the SASS mixins file.
 */
const writeSassMixins = async () => {
  // Ensure path exists.
  mkdirp.sync(buildPathByType.mixins);

  const mixins = await parseSassFileSets([
    pathByType.componentMixins,
    pathByType.utilityMixins
  ]);

  // make sure the utilities dependencies are in the lib
  await copyFoldersToDestination(
    [pathByType.utilityMixins],
    path.join(buildPathByType.mixins, "utilities")
  );

  // make sure the components dependencies are in the lib
  await copyFoldersToDestination(
    [pathByType.componentMixins],
    path.join(buildPathByType.mixins, "components")
  );

  // Use more generic file name as this could be used with different variable sets.
  const mixinFile = path.join(buildPathByType.mixins, "_dhig_mixins.scss");

  await writeFile(mixinFile, mixins);
};

/**
 * Build the SASS maps file.
 */
const writeSassMaps = async () => {
  // Ensure path exists.
  mkdirp.sync(buildPathByType.maps);

  const primitives = await parseSassFileSets([pathByType.maps]);

  // Use more generic file name as this could be used with different variable sets.
  const arrayFile = path.join(buildPathByType.maps, "_dhig_maps.scss");

  await writeFile(arrayFile, primitives);
};

writeSassMixins();
writeSassMaps();
