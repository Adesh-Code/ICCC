"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDividerStyles = void 0;
var makeDividerStyles = exports.makeDividerStyles = function makeDividerStyles(_ref) {
  var tokens = _ref.tokens;
  return {
    MuiDivider: {
      defaultProps: {
        light: true
      },
      styleOverrides: {
        root: {
          backgroundColor: tokens.colors["divider-1"]
        },
        light: {
          backgroundColor: tokens.colors["divider-0"]
        }
      }
    }
  };
};