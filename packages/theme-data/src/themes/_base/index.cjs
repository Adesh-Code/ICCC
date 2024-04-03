// Entrypoint for ICCC themes
// Determines the resulting data model of design token files

const borderRadii = require("../../primitives/border-radii.cjs");
const borderWidths = require("../../primitives/border-widths.cjs");
const colorPrimitives = require("../../primitives/colors.cjs");
const fontFamilies = require("../../primitives/font-families.cjs");
const {
  fontSizes,
  fontSizeFallbacks
} = require("../../primitives/font-sizes.cjs");
const fontWeights = require("../../primitives/font-weights.cjs");
const gradients = require("../../primitives/gradients.cjs");
const gridPrimitives = require("../../primitives/grid.cjs");
const gridTokens = require("./grid.cjs");
const letterSpacings = require("../../primitives/letter-spacings.cjs");
const lineHeights = require("../../primitives/line-heights.cjs");
const opacityPrimitives = require("../../primitives/opacities.cjs");
const opacityTokens = require("./opacities.cjs");
const spacings = require("../../primitives/spacings.cjs");
const transitionPrimitives = require("../../primitives/transitions.cjs");
const transitionTokens = require("./transitions.cjs");
const typography = require("./typography.cjs");

const addColorAttribute = (color) => ({
  ...color,
  attributes: { category: "color" }
});

const transformAll = (colors) =>
  Object.entries(colors).reduce((acc, [key, value]) => {
    acc[key] = Object.entries(value).reduce(
      (colorAcc, [colorKey, colorValue]) => {
        colorAcc[colorKey] = addColorAttribute(colorValue);
        return colorAcc;
      },
      {}
    );
    return acc;
  }, {});

const colors = transformAll(colorPrimitives);

const makeBaseTheme = (themeTokens) => ({
  primitives: {
    borderRadii,
    borderWidths,
    colors,
    fontFamilies,
    fontSizes,
    fontSizeFallbacks,
    fontWeights,
    grid: gridPrimitives,
    gradients,
    letterSpacings,
    lineHeights,
    opacities: opacityPrimitives,
    spacings,
    transitions: transitionPrimitives
  },
  tokens: {
    grid: gridTokens,
    opacities: opacityTokens,
    transitions: transitionTokens,
    typography,
    ...themeTokens
  }
});

module.exports = makeBaseTheme;
