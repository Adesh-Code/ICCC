"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _themeBase = require("./theme-base");
var _componentTokens = _interopRequireDefault(require("@iccc/theme-data/lib/build/json/dark/component-tokens.json"));
var _designTokens = _interopRequireDefault(require("@iccc/theme-data/lib/build/json/dark/design-tokens.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* TODO: [Typescript] remove ignores once theme-data is migrated */
// @ts-ignore

// @ts-ignore

var themeOptions = {
  paletteMode: "dark",
  themeData: Object.assign(Object.assign({}, _designTokens.default), {
    tokens: Object.assign(Object.assign({}, _designTokens.default.tokens), _componentTokens.default.tokens)
  })
};
var theme = (0, _themeBase.getThemeBase)(themeOptions);
var _default = exports.default = theme;