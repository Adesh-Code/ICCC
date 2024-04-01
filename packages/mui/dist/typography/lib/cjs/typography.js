"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
// Libraries

// Components

/**
 * @description iccc/typography
 *
 * @see Digital HIG Storybook: {@link https://storybook.digital-help-dev.autodesk.com/iccc/current/index.html?path=/docs/components-typography--api}
 */
var Typography = /*#__PURE__*/_react.default.forwardRef(function (_a, ref) {
  var children = _a.children,
    color = _a.color,
    style = _a.style,
    _a$tabularNumeric = _a.tabularNumeric,
    tabularNumeric = _a$tabularNumeric === void 0 ? false : _a$tabularNumeric,
    _a$variant = _a.variant,
    variant = _a$variant === void 0 ? 'body-copy-medium' : _a$variant,
    otherProps = __rest(_a, ["children", "color", "style", "tabularNumeric", "variant"]);
  /**
   * Utility for color processing: Default color set in theme data. Header variant type overrides this, and color prop overrides that.
   */
  var processColorStyle = function processColorStyle(theme) {
    var colorStyle = null;
    if (variant && (variant.includes("display") || variant.includes("headline"))) {
      colorStyle = theme.tokens.colors["ink-on-background"];
    }
    if (color) {
      colorStyle = theme.tokens.colors[color];
    }
    return colorStyle;
  };
  return /*#__PURE__*/_react.default.createElement(_Typography.default, Object.assign({
    ref: ref,
    variant: variant
  }, otherProps, {
    sx: [{
      color: function color(theme) {
        return processColorStyle(theme);
      }
    }, tabularNumeric && {
      fontVariantNumeric: "tabular-nums"
    }, style, otherProps.sx]
  }), children);
});
Typography.__docgenInfo = {
  "description": "@description iccc/typography\n\n@see Digital HIG Storybook: {@link https://storybook.digital-help-dev.autodesk.com/iccc/current/index.html?path=/docs/components-typography--api}",
  "methods": [],
  "displayName": "Typography"
};
var _default = exports.default = Typography;