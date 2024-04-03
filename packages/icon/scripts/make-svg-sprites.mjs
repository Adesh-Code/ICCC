import { readFileSync, writeFileSync } from "fs";
import glob from "glob";
import mkdirp from "mkdirp";
import path from "path";
import readdirp from "readdirp";
import SvgSpriter from "svg-sprite";
import SvgParser from "svg-parser";

// Workaround for __dirname not being defined by default
const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

const { parse } = SvgParser;

const destination = path.resolve(__dirname, "../lib/build/svg");

/**
 * Creates an SVG sprite
 *
 * @param {Object} options
 * @param {Array<{assets: Object[], prefix: string}>} options.assetGroups - A list of SVGs to include in the sprite, and their corresponding prefixes
 * @param {string} options.spriteName - Name of the sprite
 */
const compileSprite = async ({ assetGroups, spriteName }) => {
  let activePrefix; // this is needed to switch prefixes for spriter depending on asset group

  const spriter = new SvgSpriter({
    mode: {
      symbol: {
        inline: true,
        sprite: spriteName
      }
    },
    shape: {
      id: {
        generator: (name, file) => `${activePrefix}${file.stem}`
      }
    }
  });

  const manifest = [];

  for (const { assets, prefix } of assetGroups) {
    activePrefix = prefix;

    for (const filename of assets) {
      const content = readFileSync(filename, {
        encoding: "utf-8"
      });

      const basename = path.basename(filename);
      const parsed = parse(content);

      const { height, width } = parsed.children[0].properties;

      manifest.push({
        asset: basename,
        id: `${prefix}${path.parse(basename).name}`,
        dimensions: {
          height,
          width
        }
      });

      await spriter.add(filename, null, content);
    }
  }

  // Create destination folder
  mkdirp.sync(destination);

  // Write sprite listto disk
  writeFileSync(
    `${destination}/${spriteName}.json`,
    JSON.stringify(manifest, null, 4),
    "utf8"
  );

  // Compile the sprite and write to disk
  spriter.compile((_error, result) => {
    Object.keys(result).forEach((mode) => {
      Object.keys(result[mode]).forEach((resource) => {
        const basename = path.basename(result[mode][resource].path);
        const filename = path.resolve(destination, basename);
        writeFileSync(filename, result[mode][resource].contents);
      });
    });
  });
};

const getDirectories = (source) => {
  const assetGroups = [];

  readdirp(source, { type: "directories", depth: 10 }).on("data", (entry) => {
    const assets = glob.sync(
      path.resolve(__dirname, `../src/assets/${entry.path}/*.svg`)
    );

    const spriteName = entry.path.replace("/", "--");
    if (assets.length) {
      const assetGroup = { assets, prefix: `dhig--${spriteName}--` };
      assetGroups.push(assetGroup);

      compileSprite({
        assetGroups: [assetGroup],
        spriteName
      });
    }
  });
};

getDirectories(path.resolve(__dirname, "../src/assets"));
