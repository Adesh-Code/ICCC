"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeButtonGroupStyles = void 0;
var makeButtonGroupStyles = exports.makeButtonGroupStyles = function makeButtonGroupStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
        variant: "contained"
      },
      styleOverrides: {
        root: {
          '& [class*="MuiButton-root"]': Object.assign(Object.assign({
            alignItems: "center"
          }, tokens.transitions["state-blur"]), {
            '& [class*="MuiSvgIcon-root"]': {
              height: primitives.spacings["5"],
              width: primitives.spacings["5"]
            },
            "&:hover, &:focus, &:active, &:focus-visible": Object.assign({
              minWidth: "unset"
            }, tokens.transitions["state-activate"]),
            "&:first-of-type": {
              borderTopRightRadius: primitives.borderRadii.none,
              borderBottomRightRadius: primitives.borderRadii.none
            },
            "&:last-of-type": {
              borderTopLeftRadius: primitives.borderRadii.none,
              borderBottomLeftRadius: primitives.borderRadii.none
            },
            "&:not(:first-of-type)": {
              "&:hover, &:focus, &:active": {
                minWidth: "unset"
              }
            },
            "&:not(:last-of-type)": {
              "&:hover, &:focus, &:active": {
                minWidth: "unset"
              }
            },
            "&:not(:first-of-type):not(:last-of-type)": {
              borderRadius: primitives.borderRadii.none
            },
            '&[class*="MuiButton-sizeSmall"]': {
              padding: "5px ".concat(primitives.spacings["3"])
            },
            '&[class*="MuiButton-sizeMedium"]': {
              padding: "9px ".concat(primitives.spacings["5"])
            }
          }),
          '& [class*="MuiButtonGroup-grouped"]': {
            minWidth: "unset",
            "&:hover": {
              boxShadow: tokens.effects["halo-hover"]
            },
            "&:focus": {
              boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.detail.transparent)
            },
            "&:focus:focus-visible": {
              boxShadow: "0px 0px 0px 1px ".concat(tokens.colors.background, ", 0px 0px 0px 3px ").concat(tokens.colors["ink-focus"])
            },
            "&:active, &:focus:active": {
              boxShadow: tokens.effects["halo-pressed"]
            },
            "&:not(:last-of-type):hover": {
              borderRight: "".concat(primitives.borderWidths.medium, " solid ").concat(primitives.colors.detail.transparent)
            }
          },
          '& + [class*="MuiPopper-root"]': {
            zIndex: 1,
            '& [class*="MuiPaper-root"]': {
              marginTop: primitives.spacings["1"],
              boxShadow: tokens.effects["elevation-0-popover"],
              backgroundColor: tokens.colors["fill-elevation-0"],
              '& [class*="MuiList-root"]': {
                padding: "".concat(primitives.spacings["3"], " ").concat(primitives.spacings["0"])
              }
            }
          }
        },
        contained: {
          '& [class*="MuiButton-root"]': {
            "& svg": {
              color: tokens.colors["ink-on-fill-primary"]
            },
            "&:not(:last-of-type)": {
              marginRight: "1px"
            }
          }
        },
        outlined: {
          '& [class*="MuiButton-root"]': {
            "& svg": {
              color: tokens.colors["ink-on-background"]
            },
            "&:not(:last-of-type)": {
              borderRightColor: primitives.colors.detail.transparent
            }
          }
        }
      }
    }
  };
};