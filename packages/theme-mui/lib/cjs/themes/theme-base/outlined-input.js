"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeOutlinedInputStyles = void 0;
var makeOutlinedInputStyles = exports.makeOutlinedInputStyles = function makeOutlinedInputStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          boxShadow: tokens.effects["field-default"],
          borderRadius: "".concat(primitives.borderRadii.medium, " ").concat(primitives.borderRadii.medium, " 0 0"),
          outline: "none",
          '&:not(.Mui-disabled) [class*="MuiOutlinedInput-input"]:before': {
            left: 0,
            right: 0,
            bottom: 0,
            display: "block",
            height: "100%",
            content: "''",
            position: "absolute"
          },
          '& [class*="MuiSelect-icon"], [class*="MuiNativeSelect-icon"]': {
            color: tokens.colors["ink-on-background"],
            marginRight: primitives.spacings["1"]
          },
          "&.Mui-error": {
            boxShadow: tokens.effects["field-error"],
            '&:hover, & [class*="MuiOutlinedInput-input"]:focus-visible:before': {
              boxShadow: tokens.effects["field-error"]
            },
            "&.Mui-focused": {
              boxShadow: tokens.effects["field-error"]
            }
          },
          "&.Mui-disabled": {
            opacity: tokens.opacities.disabled,
            "& .MuiSvgIcon-root": {
              color: "inherit"
            }
          }
        },
        input: {
          padding: "calc(".concat(primitives.spacings["5"], "/2) ").concat(primitives.spacings["3"]),
          height: "auto",
          "&.Mui-error": {
            "&:focus:before": {
              boxShadow: "none"
            },
            "&:hover:before": {
              boxShadow: "0px 2px 0px 0px ".concat(primitives.colors.detail.transparent)
            }
          },
          "&[aria-expanded='true']": {
            borderBottomWidth: primitives.borderWidths.none,
            borderRadius: "".concat(primitives.borderRadii.medium, " ").concat(primitives.borderRadii.medium, " 0 0"),
            boxShadow: tokens.effects["focus-ring-thin"],
            "&:before": {
              boxShadow: "0px 2px 0px 0px ".concat(primitives.colors.accent.iris)
            },
            "&.Mui-error": {
              boxShadow: "none",
              "&:before": {
                boxShadow: "0px 2px 0px 0px ".concat(primitives.colors.detail.transparent)
              }
            }
          },
          "&:hover:before": {
            borderBottomWidth: primitives.borderWidths.none,
            boxShadow: "0px 1px 0px 0px ".concat(tokens.colors["ink-hover"]),
            transitionTimingFunction: tokens.transitions["state-blur"].transitionTimingFunction,
            transitionDuration: tokens.transitions["state-blur"].transitionDuration
          },
          "&:focus:before, &:focus-visible:before": {
            borderBottomWidth: primitives.borderWidths.none,
            borderRadius: "".concat(primitives.borderRadii.medium, " ").concat(primitives.borderRadii.medium, " 0 0"),
            boxShadow: tokens.effects["focus-ring-thin"]
          }
        },
        notchedOutline: {
          border: 0,
          borderRadius: "".concat(primitives.borderRadii.medium, " ").concat(primitives.borderRadii.medium, " 0 0")
        }
      }
    }
  };
};