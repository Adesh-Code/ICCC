"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeButtonStyles = void 0;
var makeButtonStyles = exports.makeButtonStyles = function makeButtonStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  var getButtonStyles = function getButtonStyles(_ref2) {
    var size = _ref2.size,
      variant = _ref2.variant;
    var button = tokens.button;
    // Rewrite font size value to incorporate root font size factor
    var fontSize = size === "dense" ? primitives.fontSizes[2] : primitives.fontSizes[3];
    return Object.assign(Object.assign({}, button[variant][size].default), {
      alignItems: "flex-start",
      fontSize: fontSize,
      "&:hover": Object.assign(Object.assign({}, button[variant][size].hover), {
        fontSize: fontSize
      }),
      "&.Mui-disabled": Object.assign(Object.assign({}, button[variant][size].disabled), {
        fontSize: fontSize
      }),
      "&:focus-visible": Object.assign(Object.assign({}, button[variant][size].focus), {
        fontSize: fontSize
      }),
      "&:focus:active": Object.assign(Object.assign({}, button[variant][size].pressed), {
        fontSize: fontSize
      }),
      "&:active": Object.assign(Object.assign({}, button[variant][size].pressed), {
        fontSize: fontSize
      })
    });
  };
  var linkPseudoStateOverrides = {
    textUnderlineOffset: "0.375em",
    transition: "text-decoration-color ".concat(primitives.transitions.duration["1"], " ").concat(primitives.transitions.easing.smooth)
  };
  var linkDenseOverrides = {
    paddingTop: primitives.spacings["1"],
    paddingBottom: primitives.spacings["1"],
    paddingLeft: primitives.spacings["0"],
    paddingRight: primitives.spacings["0"],
    fontSize: primitives.fontSizes[2]
  };
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides: {
        outlined: getButtonStyles({
          size: "defaultSize",
          variant: "outlined"
        }),
        outlinedSizeSmall: getButtonStyles({
          size: "dense",
          variant: "outlined"
        }),
        contained: getButtonStyles({
          size: "defaultSize",
          variant: "contained"
        }),
        containedSizeSmall: getButtonStyles({
          size: "dense",
          variant: "contained"
        }),
        text: getButtonStyles({
          size: "defaultSize",
          variant: "text"
        }),
        textSizeSmall: getButtonStyles({
          size: "dense",
          variant: "text"
        }),
        startIcon: {
          "& svg": {
            color: "inherit"
          }
        },
        endIcon: {
          "& svg": {
            color: "inherit"
          }
        },
        iconSizeMedium: {
          "& > *:first-of-type": {
            fontSize: "inherit"
          }
        },
        root: {
          '& [class*="MuiTouchRipple-root"]': {
            display: "none"
          },
          "&:has([class*='MuiButton-endIcon'])": {
            textAlign: "right"
          },
          "&:has([class*='MuiButton-startIcon'])": {
            textAlign: "left"
          },
          "&[class*='MuiButton-link-button']": Object.assign(Object.assign({}, getButtonStyles({
            size: "defaultSize",
            variant: "link-button"
          })), {
            "&:hover": Object.assign(Object.assign({
              boxShadow: "none"
            }, tokens.textLink.hoverState), linkPseudoStateOverrides),
            "&:active, &:focus:active": Object.assign(Object.assign({
              boxShadow: "none"
            }, tokens.textLink.pressedState), linkPseudoStateOverrides),
            "& [class*='MuiButton-startIcon']": {
              marginRight: primitives.spacings["1"],
              marginLeft: 0
            }
          }),
          "&[class*='MuiButton-link-buttonSizeSmall']": Object.assign(Object.assign(Object.assign({}, getButtonStyles({
            size: "dense",
            variant: "link-button"
          })), {
            lineHeight: primitives.lineHeights.default,
            "&:hover": Object.assign(Object.assign(Object.assign({
              boxShadow: "none"
            }, tokens.textLink.hoverState), linkPseudoStateOverrides), linkDenseOverrides),
            "&:active, &:focus:active": Object.assign(Object.assign(Object.assign({
              boxShadow: "none"
            }, tokens.textLink.pressedState), linkPseudoStateOverrides), linkDenseOverrides),
            "&:focus-visible": Object.assign(Object.assign({}, linkDenseOverrides), {
              lineHeight: primitives.lineHeights.default,
              "&:hover": {
                outline: "".concat(primitives.borderWidths.large, " solid ").concat(tokens.colors["ink-focus"]),
                outlineOffset: "1px"
              }
            })
          }), linkDenseOverrides)
        }
      }
    },
    MuiLoadingButton: {
      defaultProps: {
        loadingPosition: "start",
        variant: "contained"
      },
      styleOverrides: {
        root: {
          textAlign: "left",
          "&[class*='MuiLoadingButton-loading']": {
            opacity: "0.6"
          },
          "&[class*='MuiButton-link-button'].Mui-disabled": {
            padding: "".concat(primitives.spacings["1"], " 0px ").concat(primitives.spacings["1"], " ").concat(primitives.spacings["1"]),
            opacity: "0.6"
          },
          "&:has([class*='MuiLoadingButton-loadingIndicatorEnd'])": {
            textAlign: "right"
          },
          '& [class*="MuiLoadingButton-loadingIndicator"]': {
            '& [class*="DhigCircularProgress--foreground"]': {
              color: "inherit"
            }
          }
        },
        loadingIndicator: {
          position: "static",
          marginTop: "3px",
          "& svg": {
            color: "inherit"
          }
        },
        loadingIndicatorStart: {
          marginRight: primitives.spacings["2"],
          marginLeft: "-".concat(primitives.spacings["1"])
        },
        loadingIndicatorEnd: {
          marginRight: "-".concat(primitives.spacings["1"]),
          marginLeft: primitives.spacings["2"]
        }
      }
    }
  };
};