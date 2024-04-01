"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFormLabelStyles = void 0;
var makeFormLabelStyles = exports.makeFormLabelStyles = function makeFormLabelStyles(_ref) {
  var tokens = _ref.tokens;
  return {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: tokens.colors["ink-on-background"]
          },
          "&.Mui-disabled": {
            color: tokens.colors["ink-on-background"]
          }
        },
        asterisk: {
          display: "none"
        }
      }
    }
  };
};