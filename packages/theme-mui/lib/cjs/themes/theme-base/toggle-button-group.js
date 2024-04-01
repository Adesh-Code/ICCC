"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeToggleButtonGroupStyles = void 0;
var makeToggleButtonGroupStyles = exports.makeToggleButtonGroupStyles = function makeToggleButtonGroupStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  var borderRadius = primitives.borderRadii.medium;
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colors["detail-1-20"],
          outline: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["detail-1-40"]),
          outlineOffset: "-1px",
          borderRadius: "calc(".concat(borderRadius, " + 1px)"),
          padding: 0,
          '& [class*="MuiToggleButtonGroup-grouped"]': {
            textTransform: "none",
            transitionTimingFunction: "".concat(tokens.transitions["state-activate"].transitionTimingFunction),
            transitionDuration: "".concat(tokens.transitions["state-activate"].transitionDuration),
            "&:not(:last-of-type)": {
              marginLeft: 0,
              border: "".concat(primitives.borderWidths.medium, " solid ").concat(primitives.colors.detail.transparent),
              borderRadius: borderRadius,
              "&:after": {
                content: "''",
                borderLeft: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["row-divider"]),
                height: "calc(100% - (".concat(borderRadius, " * 3))"),
                position: "absolute",
                right: "-2px",
                zIndex: 0
              },
              "&:focus-visible": {
                transitionTimingFunction: "".concat(tokens.transitions["state-activate"].transitionTimingFunction),
                transitionDuration: "".concat(tokens.transitions["state-activate"].transitionDuration),
                border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-focus"]),
                "&:after": {
                  height: 0,
                  borderLeft: "none"
                }
              },
              "&:active": {
                transitionTimingFunction: "".concat(tokens.transitions["state-activate"].transitionTimingFunction),
                transitionDuration: "".concat(tokens.transitions["state-activate"].transitionDuration),
                "&:after": {
                  borderLeft: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["row-divider"]),
                  height: "calc(100% - (".concat(borderRadius, " * 3))")
                }
              },
              "&:hover": {
                transitionTimingFunction: "".concat(tokens.transitions["state-blur"].transitionTimingFunction),
                transitionDuration: "".concat(tokens.transitions["state-blur"].transitionDuration)
              },
              "&.Mui-selected": {
                borderRadius: borderRadius,
                boxShadow: "none",
                border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-on-background"]),
                "&:after": {
                  height: 0,
                  borderLeft: "0px solid ".concat(tokens.colors["row-divider"])
                },
                "&:focus-visible": {
                  transitionTimingFunction: "".concat(tokens.transitions["state-activate"].transitionTimingFunction),
                  transitionDuration: "".concat(tokens.transitions["state-activate"].transitionDuration),
                  boxShadow: "0px 0px 0px 1px ".concat(tokens.colors.background, ", 0px 0px 0px 2px ").concat(tokens.colors["ink-focus"])
                },
                "&:active": {
                  transitionTimingFunction: "".concat(tokens.transitions["state-activate"].transitionTimingFunction),
                  transitionDuration: "".concat(tokens.transitions["state-activate"].transitionDuration),
                  boxShadow: "none"
                }
              }
            },
            "&:not(:first-of-type)": {
              marginLeft: 0,
              border: "".concat(primitives.borderWidths.medium, " solid ").concat(primitives.colors.detail.transparent),
              borderRadius: borderRadius,
              "&:focus-visible": {
                transitionTimingFunction: "".concat(tokens.transitions["state-activate"].transitionTimingFunction),
                transitionDuration: "".concat(tokens.transitions["state-activate"].transitionDuration),
                border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-focus"]),
                "&:after": {
                  height: 0,
                  borderLeft: "none"
                }
              },
              "&:active": {
                transitionTimingFunction: "".concat(tokens.transitions["state-activate"].transitionTimingFunction),
                transitionDuration: "".concat(tokens.transitions["state-activate"].transitionDuration),
                "&:after": {
                  borderLeft: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["row-divider"]),
                  height: "calc(100% - (".concat(borderRadius, " * 3))")
                }
              },
              "&:hover": {
                transitionTimingFunction: "".concat(tokens.transitions["state-blur"].transitionTimingFunction),
                transitionDuration: "".concat(tokens.transitions["state-blur"].transitionDuration)
              },
              "&.Mui-selected": {
                borderRadius: borderRadius,
                boxShadow: "none",
                border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-on-background"]),
                "&:after": {
                  height: 0,
                  borderLeft: "0px solid ".concat(tokens.colors["row-divider"])
                },
                "&:focus-visible": {
                  transitionTimingFunction: "".concat(tokens.transitions["state-activate"].transitionTimingFunction),
                  transitionDuration: "".concat(tokens.transitions["state-activate"].transitionDuration),
                  boxShadow: "0px 0px 0px 1px ".concat(tokens.colors.background, ", 0px 0px 0px 2px ").concat(tokens.colors["ink-focus"])
                },
                "&:active": {
                  transitionTimingFunction: "".concat(tokens.transitions["state-activate"].transitionTimingFunction),
                  transitionDuration: "".concat(tokens.transitions["state-activate"].transitionDuration),
                  boxShadow: "none"
                }
              }
            }
          }
        }
      }
    }
  };
};