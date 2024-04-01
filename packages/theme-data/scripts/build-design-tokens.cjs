// Libraries
const StyleDictionary = require("style-dictionary");

// Configurations
const { config, themes } = require("../src/design-tokens-config.cjs");

const buildTheme = ({ theme }) => {
  const styleDictionary = StyleDictionary.extend(config({ theme }));

  // Clean up old assets
  styleDictionary.cleanAllPlatforms();

  // Build new assets
  styleDictionary.buildAllPlatforms();
};

buildTheme({ theme: themes.LIGHT });
buildTheme({ theme: themes.DARK });
