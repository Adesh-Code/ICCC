"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAlertStyles = void 0;
var _cross = _interopRequireDefault(require("@iccc/icon/lib/build/icons/cross"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* TODO: [Typescript] remove ignore once icon is migrated */
// @ts-ignore

var makeAlertStyles = exports.makeAlertStyles = function makeAlertStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiAlert: {
      defaultProps: {
        severity: "info",
        variant: "outlined",
        slots: {
          closeIcon: _cross.default
        }
      },
      styleOverrides: {
        root: Object.assign(Object.assign({
          borderRadius: primitives.borderRadii.none,
          color: tokens.colors["ink-on-background"]
        }, tokens.typography["short-copy-small"]), {
          padding: "2px ".concat(primitives.spacings["4"]),
          fontWeight: primitives.fontWeights.stout
        }),
        standard: {
          '& [class*="MuiAlert-action"] > button > svg': {
            color: tokens.colors["ink-on-background"]
          },
          '& [class*="MuiAlert-action"] > button': Object.assign(Object.assign({
            backgroundColor: tokens.colors["fade-gradient-transparent"]
          }, tokens.transitions["state-blur"]), {
            "&:hover": Object.assign({
              backgroundColor: tokens.colors["hover-fill-subtle"]
            }, tokens.transitions["state-activate"]),
            "&:active": Object.assign({
              backgroundColor: tokens.colors["pressed-fill-subtle"]
            }, tokens.transitions["state-activate"])
          })
        },
        standardInfo: {
          backgroundColor: tokens.colors["fill-engage-slight"],
          '& [class*="MuiAlert-action"] > button': {
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.iris, ", 0px 0px 0px 3px ").concat(tokens.colors["fill-primary"])
            }
          }
        },
        standardError: {
          backgroundColor: tokens.colors["fill-alert-slight"],
          '& [class*="MuiAlert-action"] > button': {
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.clay, ", 0px 0px 0px 3px ").concat(tokens.colors["fill-primary"])
            }
          }
        },
        standardSuccess: {
          backgroundColor: tokens.colors["fill-success-slight"],
          '& [class*="MuiAlert-action"] > button': {
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.plant, ", 0px 0px 0px 3px ").concat(tokens.colors["fill-primary"])
            }
          }
        },
        standardWarning: {
          backgroundColor: tokens.colors["fill-warning-slight"],
          '& [class*="MuiAlert-action"] > button': {
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.gold, ", 0px 0px 0px 3px ").concat(tokens.colors["fill-primary"])
            }
          }
        },
        outlined: {
          padding: "1px ".concat(primitives.spacings["4"]),
          '& [class*="MuiAlert-action"] > button > svg': {
            color: tokens.colors["ink-on-background"]
          },
          '& [class*="MuiAlert-action"] > button': Object.assign(Object.assign({
            backgroundColor: tokens.colors["fade-gradient-transparent"]
          }, tokens.transitions["state-blur"]), {
            "&:hover": Object.assign({
              backgroundColor: tokens.colors["hover-fill-subtle"]
            }, tokens.transitions["state-activate"]),
            "&:active": Object.assign({
              backgroundColor: tokens.colors["pressed-fill-subtle"]
            }, tokens.transitions["state-activate"])
          })
        },
        outlinedInfo: {
          border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["fill-engage"]),
          backgroundColor: tokens.colors["fill-engage-slight"],
          '& [class*="MuiAlert-action"] > button': {
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.iris, ", 0px 0px 0px 3px ").concat(tokens.colors["fill-primary"])
            }
          }
        },
        outlinedError: {
          border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["fill-alert"]),
          backgroundColor: tokens.colors["fill-alert-slight"],
          '& [class*="MuiAlert-action"] > button': {
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.clay, ", 0px 0px 0px 3px ").concat(tokens.colors["fill-primary"])
            }
          }
        },
        outlinedSuccess: {
          border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["fill-success"]),
          backgroundColor: tokens.colors["fill-success-slight"],
          '& [class*="MuiAlert-action"] > button': {
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.plant, ", 0px 0px 0px 3px ").concat(tokens.colors["fill-primary"])
            }
          }
        },
        outlinedWarning: {
          border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["fill-warning"]),
          backgroundColor: tokens.colors["fill-warning-slight"],
          '& [class*="MuiAlert-action"] > button': {
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.gold, ", 0px 0px 0px 3px ").concat(tokens.colors["fill-primary"])
            }
          }
        },
        filled: {
          '[class*="MuiAlert-icon"] svg': {
            color: "inherit"
          }
        },
        filledInfo: {
          backgroundColor: tokens.colors["fill-engage"],
          color: tokens.colors["ink-on-fill-engage"],
          '& [class*="MuiAlert-action"] > button > svg': {
            color: tokens.colors["ink-on-fill-engage"]
          },
          '& [class*="MuiAlert-action"] > button': Object.assign(Object.assign({
            backgroundColor: tokens.colors["fade-gradient-transparent"]
          }, tokens.transitions["state-blur"]), {
            "&:hover": Object.assign({
              backgroundColor: "rgba(255, 255, 255, 0.12)"
            }, tokens.transitions["state-activate"]),
            "&:active": Object.assign({
              backgroundColor: "rgba(255, 255, 255, 0.16)"
            }, tokens.transitions["state-activate"]),
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.iris, ", 0px 0px 0px 3px ").concat(primitives.colors.primary.white)
            }
          })
        },
        filledError: {
          backgroundColor: tokens.colors["fill-alert"],
          color: tokens.colors["ink-on-fill-alert"],
          '& [class*="MuiAlert-action"] > button > svg': {
            color: tokens.colors["ink-on-fill-alert"]
          },
          '& [class*="MuiAlert-action"] > button': Object.assign(Object.assign({
            backgroundColor: tokens.colors["fade-gradient-transparent"]
          }, tokens.transitions["state-blur"]), {
            "&:hover": Object.assign({
              backgroundColor: "rgba(255, 255, 255, 0.12)"
            }, tokens.transitions["state-activate"]),
            "&:active": Object.assign({
              backgroundColor: "rgba(255, 255, 255, 0.16)"
            }, tokens.transitions["state-activate"]),
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.clay, ", 0px 0px 0px 3px ").concat(primitives.colors.primary.white)
            }
          })
        },
        filledSuccess: {
          backgroundColor: tokens.colors["fill-success"],
          color: tokens.colors["ink-on-fill-success"],
          '& [class*="MuiAlert-action"] > button > svg': {
            color: tokens.colors["ink-on-fill-success"]
          },
          '& [class*="MuiAlert-action"] > button': Object.assign(Object.assign({
            backgroundColor: tokens.colors["fade-gradient-transparent"]
          }, tokens.transitions["state-blur"]), {
            "&:hover": Object.assign({
              backgroundColor: "rgba(0, 0, 0, 0.03)"
            }, tokens.transitions["state-activate"]),
            "&:active": Object.assign({
              backgroundColor: "rgba(0, 0, 0, 0.15)"
            }, tokens.transitions["state-activate"]),
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.plant, ", 0px 0px 0px 3px ").concat(primitives.colors.primary.black)
            }
          })
        },
        filledWarning: {
          backgroundColor: tokens.colors["fill-warning"],
          color: tokens.colors["ink-on-fill-warning"],
          '& [class*="MuiAlert-action"] > button > svg': {
            color: tokens.colors["ink-on-fill-warning"]
          },
          '& [class*="MuiAlert-action"] > button': Object.assign(Object.assign({
            backgroundColor: tokens.colors["fade-gradient-transparent"]
          }, tokens.transitions["state-blur"]), {
            "&:hover": Object.assign({
              backgroundColor: "rgba(0, 0, 0, 0.03)"
            }, tokens.transitions["state-activate"]),
            "&:active": Object.assign({
              backgroundColor: "rgba(0, 0, 0, 0.15)"
            }, tokens.transitions["state-activate"]),
            "&:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.accent.gold, ", 0px 0px 0px 3px ").concat(primitives.colors.primary.black)
            }
          })
        },
        action: {
          paddingLeft: primitives.spacings["1"],
          "& button svg": {
            height: primitives.spacings["5"],
            width: primitives.spacings["5"]
          }
        },
        message: {
          lineHeight: "1.25",
          margin: "10px 0",
          padding: primitives.spacings["0"],
          paddingTop: "1px",
          overflow: "hidden"
        },
        icon: {
          "& svg": {
            height: primitives.spacings["6"],
            width: primitives.spacings["6"]
          }
        }
      }
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: Object.assign(Object.assign({
          color: "inherit"
        }, tokens.typography["headline-smaller"]), {
          marginBottom: primitives.spacings["1"],
          lineHeight: primitives.lineHeights.compact
        })
      }
    }
  };
};