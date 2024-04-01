"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeListSubheaderStyles = void 0;
var makeListSubheaderStyles = exports.makeListSubheaderStyles = function makeListSubheaderStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: primitives.colors.detail.transparent,
          color: tokens.colors["detail-2-transparent"],
          padding: "".concat(primitives.spacings["2"], " ").concat(primitives.spacings["3"], " ").concat(primitives.spacings["1"]),
          fontSize: primitives.fontSizes["1"],
          fontWeight: primitives.fontWeights["default"],
          lineHeight: primitives.lineHeights["compact"],
          margin: "".concat(primitives.spacings["0"], " ").concat(primitives.spacings["0"], " ").concat(primitives.spacings["1"])
        },
        gutters: {
          paddingLeft: primitives.spacings["3"],
          paddingRight: primitives.spacings["3"]
        }
      }
    }
  };
};