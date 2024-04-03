const makeBaseTheme = require("../_base/index.cjs");
const buttonTokens = require("../_base/components/button.cjs");
const colorTokens = require("./colors.cjs");
const effectTokens = require("./effects.cjs");
const gradientTokens = require("./gradients.cjs");
const tabTokens = require("../_base/components/tab.cjs");
const tabsTokens = require("../_base/components/tabs.cjs");
const textLinkTokens = require("../_base/components/text-link.cjs");

const baseTheme = makeBaseTheme({
  ...buttonTokens,
  ...colorTokens,
  ...effectTokens,
  ...gradientTokens,
  ...tabTokens,
  ...tabsTokens,
  ...textLinkTokens
});

module.exports = baseTheme;
