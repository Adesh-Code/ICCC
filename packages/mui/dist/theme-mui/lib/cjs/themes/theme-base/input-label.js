"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeInputLabelStyles = void 0;
var makeInputLabelStyles = exports.makeInputLabelStyles = function makeInputLabelStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: Object.assign(Object.assign({
          marginBottom: primitives.spacings["1"],
          color: tokens.colors["ink-on-background"]
        }, tokens.typography["smallprint"]), {
          maxWidth: "100%",
          "& .DhigInputLabel--hintText, &:not(.Mui-required) > [class*='MuiTypography']": {
            paddingLeft: primitives.spacings["2"],
            color: tokens.colors["ink-on-background-60"]
          },
          "&.Mui-error": {
            color: tokens.colors["ink-on-background"]
          },
          "&.Mui-disabled": {
            opacity: tokens.opacities.disabled
          }
        }),
        formControl: {
          "&[class*='MuiInputLabel-root']": {
            position: "relative",
            left: "auto",
            top: "auto",
            transform: "none"
          }
        },
        shrink: {
          transform: "none",
          transformOrigin: "unset"
        },
        filled: {
          transform: "none",
          '&[class*="MuiInputLabel-shrink"]': {
            transform: "none"
          },
          marginLeft: primitives.spacings["2"]
        },
        outlined: {
          transform: "none",
          '&[class*="MuiInputLabel-shrink"]': {
            transform: "none"
          }
        }
      }
    }
  };
};