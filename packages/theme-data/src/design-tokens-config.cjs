// Libraries
const StyleDictionary = require("style-dictionary");

const chroma = require("chroma-js");

const themes = {
  LIGHT: "light",
  DARK: "dark"
};

StyleDictionary.registerTransform({
  name: "name/kebab-camelCase",
  type: "name",
  transformer: ({ path }) => path.join("-")
});

// Stolen from https://github.com/amzn/style-dictionary/blob/main/examples/advanced/transitive-transforms/sd.config.js
StyleDictionary.registerTransform({
  name: "color/rgba",
  type: "value",
  transitive: true,
  matcher: (token) => token.attributes.category === "color" && token.modify,
  transformer: (token) => {
    const { value, modify = [], opacity } = token;
    let color = chroma(value);
    modify.forEach(({ type, amount }) => {
      color = color[type](amount);
    });
    return opacity === 1
      ? `rgb(${color.rgb().join(", ")})`
      : `rgb(${color.rgba().join(", ")})`;
  }
});

StyleDictionary.registerFilter({
  name: "isComponentToken",
  matcher: (token) =>
    token.path.some((key) =>
      ["button", "tab", "tabs", "textLink"].includes(key)
    )
});

StyleDictionary.registerFilter({
  name: "isDesignToken",
  matcher: (token) =>
    !token.path.some((key) =>
      ["button", "tab", "tabs", "textLink"].includes(key)
    )
});

const config = ({ theme }) => ({
  source: [`src/themes/${theme}/index.cjs`],
  platforms: {
    web: {
      transformGroup: "web",
      transforms: ["color/css", "color/rgba"],
      buildPath: `lib/build/json/${theme}/`,
      files: [
        {
          destination: "design-tokens.json",
          format: "json/nested",
          filter: "isDesignToken"
        }
      ]
    },
    component: {
      transformGroup: "web",
      transforms: ["color/css", "color/rgba"],
      buildPath: `lib/build/json/${theme}/`,
      files: [
        {
          destination: "component-tokens.json",
          format: "json/nested",
          filter: "isComponentToken"
        }
      ]
    },
    scss: {
      transformGroup: "scss",
      transforms: ["name/kebab-camelCase", "color/rgba"],
      buildPath: `lib/build/scss/${theme}/`,
      files: [
        {
          destination: "design-tokens.scss",
          format: "scss/variables"
        }
      ]
    },
    less: {
      transformGroup: "less",
      transforms: ["name/kebab-camelCase"],
      buildPath: `lib/build/less/${theme}/`,
      files: [
        {
          destination: "design-tokens.less",
          format: "less/variables"
        }
      ]
    }
  }
});

module.exports = {
  themes,
  config
};
