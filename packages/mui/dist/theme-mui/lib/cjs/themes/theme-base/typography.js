"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTypographyStyles = void 0;
var makeTypographyStyles = exports.makeTypographyStyles = function makeTypographyStyles(_ref) {
  var tokens = _ref.tokens;
  return {
    MuiTypography: {
      defaultProps: {
        component: "p"
      },
      styleOverrides: {
        root: {
          color: tokens.colors["text-on-background"]
        },
        colorPrimary: {
          color: tokens.colors["text-on-background"]
        },
        colorError: {
          color: tokens.colors["ink-error"]
        }
      }
    }
  };
};