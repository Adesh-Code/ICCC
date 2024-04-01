"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFormHelperTextStyles = void 0;
var makeFormHelperTextStyles = exports.makeFormHelperTextStyles = function makeFormHelperTextStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: Object.assign(Object.assign({
          marginTop: primitives.spacings["1"],
          color: tokens.colors["ink-on-background-60"]
        }, tokens.typography["short-copy-small"]), {
          display: "flex",
          alignItems: "flex-start",
          "& > svg": {
            paddingRight: primitives.spacings["1"]
          },
          "&.Mui-error": {
            fontWeight: primitives.fontWeights.stout,
            opacity: 1
          }
        }),
        contained: {
          marginLeft: 0,
          marginRight: 0
        }
      }
    }
  };
};