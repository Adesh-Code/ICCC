"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFormControlLabelStyles = void 0;
var makeFormControlLabelStyles = exports.makeFormControlLabelStyles = function makeFormControlLabelStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          "&.Mui-disabled": {
            opacity: tokens.opacities.disabled,
            '& [class*="MuiCheckbox-root"]': {
              "&.Mui-disabled": {
                opacity: tokens.opacities.default
              }
            }
          },
          "&.Mui-error": {
            '& [class*="MuiFormControlLabel-label"]': {
              color: tokens.colors["ink-error"]
            },
            '& [class*="MuiCheckbox-root"]': {
              "& > svg": {
                outline: "".concat(primitives.borderWidths.large, " solid ").concat(tokens.colors["ink-error"]),
                outlineOffset: primitives.borderWidths.medium,
                borderRadius: primitives.borderRadii.small
              }
            }
          },
          '& [class*="MuiFormControlLabel-label"][class*="MuiTypography-smallprint"]': {
            fontSize: primitives.fontSizes[1]
          }
        },
        label: {
          "&.Mui-disabled": {
            color: tokens.colors["ink-on-background"]
          }
        }
      }
    }
  };
};