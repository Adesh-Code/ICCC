"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCardStyles = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var makeCardStyles = exports.makeCardStyles = function makeCardStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          '&[class*="MuiPaper-root"]': {
            backgroundColor: tokens.colors.background,
            color: tokens.colors["text-on-background"]
          },
          backgroundColor: tokens.colors.background,
          boxShadow: tokens.effects["container-0"],
          opacity: primitives.opacities.opaque,
          "& .DhigCard--divider": {
            padding: "".concat(primitives.spacings["0"], " ").concat(primitives.spacings["6"]),
            margin: "".concat(primitives.spacings["6"], " ").concat(primitives.spacings["0"])
          },
          "&.MuiCard--quiet": {
            backgroundColor: primitives.colors.detail.transparent,
            boxShadow: "none",
            '& > [class*="MuiCardMedia-root"]': {
              borderRadius: primitives.borderRadii.large
            },
            '& > [class*="MuiCardContent-root"]': {
              paddingBottom: primitives.spacings["0"],
              paddingTop: primitives.spacings["6"],
              paddingLeft: primitives.spacings["0"],
              paddingRight: primitives.spacings["0"]
            },
            '& > [class*="MuiCardActions-root"]': {
              padding: primitives.spacings["0"]
            },
            "& .DhigCard--divider": {
              padding: primitives.spacings["0"]
            },
            "&.MuiCard--framed": {
              padding: primitives.spacings["0"],
              '& > [class*="MuiCardMedia-root"]': {
                boxShadow: tokens.effects["container-0"],
                padding: primitives.spacings["2"],
                boxSizing: "border-box"
              },
              '& > [class*="MuiCardContent-root"]': {
                paddingBottom: primitives.spacings["0"],
                paddingLeft: primitives.spacings["2"],
                paddingRight: primitives.spacings["2"],
                paddingTop: primitives.spacings["2"]
              },
              '& > [class*="MuiCardActions-root"]': {
                paddingBottom: primitives.spacings["0"],
                paddingLeft: primitives.spacings["2"],
                paddingRight: primitives.spacings["2"],
                paddingTop: primitives.spacings["0"]
              },
              "& .DhigCard--divider": {
                padding: "".concat(primitives.spacings["0"], " ").concat(primitives.spacings["2"])
              }
            }
          },
          "&.MuiCard--framed": {
            paddingBottom: primitives.spacings["0"],
            paddingLeft: primitives.spacings["2"],
            paddingRight: primitives.spacings["2"],
            paddingTop: primitives.spacings["2"]
          },
          "&.MuiCard--twoColumns": _defineProperty(_defineProperty({
            display: "flex",
            flexWrap: "wrap",
            height: "auto"
          }, "& > div", {
            display: "flex",
            flexDirection: "column"
          }), '& [class*="MuiCardMedia-root"]', {
            flex: "1 0 auto",
            objectFit: "cover",
            width: "auto"
          }),
          "&.DhigCard--appearance--default, &.DhigCard--appearance--framed": {
            '&[class*="MuiPaper-rounded"]': {
              borderRadius: primitives.borderRadii.large
            }
          }
        }
      }
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colors.background,
          height: "fit-content",
          width: "fit-content",
          "&:has([class*='MuiPaper-rounded'])": {
            borderRadius: primitives.borderRadii.large
          },
          '&:hover [class*="MuiCard-root"]': {
            background: tokens.gradients["hover-gradient-fill"]
          },
          '&:focus-visible [class*="MuiCard-root"]': {
            boxShadow: tokens.effects["focus-ring-thin"],
            outline: "".concat(primitives.borderWidths.medium, " solid ").concat(primitives.colors.tint["slate-400"]),
            outlineOffset: "-2px"
          },
          '&:active [class*="MuiCard-root"]': {
            background: tokens.gradients["pressed-gradient-fill"],
            outline: "none"
          },
          '&:active [class*="MuiCard-root"] button svg': {
            outline: "".concat(primitives.borderWidths.large, " solid ").concat(tokens.colors["ink-pressed"])
          },
          '&:active:focus [class*="MuiCard-root"]': {
            background: tokens.gradients["pressed-gradient-fill"],
            boxShadow: "0px 0px 0px 1px ".concat(primitives.colors.tint["slate-175"], " inset"),
            outline: "none"
          },
          "&.Mui-disabled": {
            opacity: tokens.opacities.disabled,
            '& [class*="MuiButton-link"].Mui-disabled': {
              // ensure disabled opacities don't stack
              opacity: tokens.opacities.default
            }
          }
        },
        focusHighlight: {
          display: "none"
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          paddingBottom: primitives.spacings["6"],
          paddingLeft: primitives.spacings["6"],
          paddingRight: primitives.spacings["6"],
          paddingTop: primitives.spacings["0"],
          flexDirection: "column",
          alignItems: "flex-start"
        },
        spacing: {
          "& > :not(:first-of-type)": {
            marginLeft: primitives.spacings["0"]
          }
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingBottom: primitives.spacings["0"],
          paddingLeft: primitives.spacings["6"],
          paddingRight: primitives.spacings["6"],
          paddingTop: primitives.spacings["6"]
        }
      }
    }
  };
};