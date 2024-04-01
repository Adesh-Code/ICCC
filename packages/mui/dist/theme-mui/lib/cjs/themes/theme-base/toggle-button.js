"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeToggleButtonStyles = void 0;
var makeToggleButtonStyles = exports.makeToggleButtonStyles = function makeToggleButtonStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: Object.assign(Object.assign({}, tokens.typography["body-copy-small"]), {
          color: tokens.colors["ink-on-background-60"],
          fontWeight: primitives.fontWeights.stout,
          padding: "4.5px ".concat(primitives.spacings["4"]),
          border: "none",
          boxSizing: "border-box",
          "&:hover": {
            backgroundColor: tokens.colors["hover-fill-subtle"]
          },
          "&:active": {
            backgroundColor: tokens.colors["pressed-fill-subtle"],
            border: "none"
          },
          "&.Mui-selected": {
            backgroundColor: tokens.colors["fill-elevation-2"],
            color: tokens.colors["ink-on-background"],
            "&:hover": {
              backgroundColor: tokens.colors["fill-elevation-2"]
            }
          },
          "&.Mui-disabled": {
            border: "none",
            color: tokens.colors["detail-1-transparent"]
          }
        }),
        sizeSmall: {
          fontSize: primitives.fontSizes["1"],
          padding: "3px ".concat(primitives.spacings["3"])
        }
      }
    }
  };
};