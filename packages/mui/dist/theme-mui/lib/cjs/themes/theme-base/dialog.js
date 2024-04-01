"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDialogStyles = void 0;
var _react = _interopRequireDefault(require("react"));
var _Fade = _interopRequireDefault(require("@mui/material/Fade"));
var _Slide = _interopRequireDefault(require("@mui/material/Slide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var makeDialogStyles = exports.makeDialogStyles = function makeDialogStyles(_ref) {
  var _paper;
  var breakpoints = _ref.breakpoints,
    paletteMode = _ref.paletteMode,
    primitives = _ref.primitives,
    tokens = _ref.tokens;
  var filterColor = paletteMode === "light" ? "invert(0%)" : "invert(100%)";
  var spacings = primitives.spacings;
  var closeButtonDimensions = {
    sm: {
      iconSize: spacings["6"],
      distanceToEdge: spacings["4"]
    },
    md: {
      iconSize: spacings["7"],
      distanceToEdge: spacings["5"]
    },
    lg: {
      iconSize: spacings["8"],
      distanceToEdge: spacings["6"]
    },
    xl: {
      iconSize: spacings["8"],
      distanceToEdge: spacings["7"]
    },
    horizontalPadding: spacings["3"],
    verticalPadding: spacings["2"]
  };
  var paperMargin = function paperMargin(breakpoint, axis) {
    return parseInt(closeButtonDimensions[breakpoint].iconSize, 10) + parseInt(closeButtonDimensions["".concat(axis, "Padding")], 10) * 2 + parseInt(closeButtonDimensions[breakpoint].distanceToEdge, 10) * 2 + "px";
  };
  var closeButtonStyles = {
    color: tokens.colors["fill-primary"],
    backgroundColor: primitives.colors.detail.transparent,
    borderRadius: primitives.borderRadii.medium,
    padding: "".concat(closeButtonDimensions.verticalPadding, " ").concat(closeButtonDimensions.horizontalPadding),
    position: "absolute",
    top: closeButtonDimensions.sm.distanceToEdge,
    right: closeButtonDimensions.sm.distanceToEdge,
    "&:hover": {
      backgroundColor: tokens.colors["hover-fill-subtle"]
    },
    "&:focus": {
      boxShadow: tokens.effects["focus-ring"]
    },
    "&:focus:active": {
      backgroundColor: tokens.colors["pressed-fill-subtle"],
      boxShadow: "none"
    },
    "&:active": {
      backgroundColor: tokens.colors["pressed-fill-subtle"]
    },
    "& svg": {
      height: closeButtonDimensions.sm.iconSize,
      width: closeButtonDimensions.sm.iconSize
    }
  };
  return {
    MuiBackdrop: {
      defaultProps: {
        TransitionComponent: /*#__PURE__*/_react.default.forwardRef(function Transition(props, ref) {
          return /*#__PURE__*/_react.default.createElement(_Fade.default, Object.assign({
            ref: ref
          }, props, {
            easing: primitives.transitions.easing.smooth,
            timeout: parseFloat(primitives.transitions.duration["3"])
          }));
        })
      },
      styleOverrides: {
        root: {
          "&.DhigModal--backdrop--light": {
            backgroundColor: tokens.colors["backdrop-60"]
          },
          "&.DhigModal--backdrop--default": {
            backgroundColor: tokens.colors["backdrop-85"]
          }
        }
      }
    },
    MuiDialog: {
      defaultProps: {
        TransitionComponent: /*#__PURE__*/_react.default.forwardRef(function Transitions(props, ref) {
          return /*#__PURE__*/_react.default.createElement(_Slide.default, Object.assign({
            ref: ref
          }, props, {
            easing: primitives.transitions.easing["slow-down"],
            timeout: parseFloat(primitives.transitions.duration["2"]),
            onEntering: function onEntering(node) {
              var transform = "translateY(".concat(primitives.spacings["4"], ")");
              node.style.transform = transform;
            },
            onExiting: function onExiting(node) {
              var transform = "translateY(-".concat(primitives.spacings["4"], ")");
              node.style.transform = transform;
            },
            direction: "up"
          }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Fade.default, Object.assign({
            ref: ref
          }, props, {
            easing: primitives.transitions.easing["slow-down"],
            timeout: parseFloat(primitives.transitions.duration["2"]),
            style: {
              transitionDelay: primitives.transitions.duration["1"]
            }
          }))));
        })
      },
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          '& [class*="MuiPaper-root"]': {
            color: "".concat(tokens.colors["ink-on-background"])
          },
          "& > [role='presentation']": _defineProperty({}, breakpoints.down(breakpoints.values.md), {
            width: "100%",
            height: "100%"
          })
        },
        paper: (_paper = {
          background: tokens.colors["fill-elevation-1"],
          borderRadius: primitives.borderRadii.large,
          boxShadow: tokens.effects["elevation-1"]
        }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_paper, breakpoints.down(breakpoints.values.md), {
          marginBottom: paperMargin("sm", "vertical"),
          marginTop: paperMargin("sm", "vertical")
        }), breakpoints.up(breakpoints.values.md), {
          marginLeft: paperMargin("md", "horizontal"),
          marginRight: paperMargin("md", "horizontal")
        }), breakpoints.up(breakpoints.values.lg), {
          marginLeft: paperMargin("lg", "horizontal"),
          marginRight: paperMargin("lg", "horizontal")
        }), breakpoints.up(breakpoints.values.xl), {
          marginLeft: paperMargin("xl", "horizontal"),
          marginRight: paperMargin("xl", "horizontal")
        }), "&.DhigModal--type--alert", {
          '& [class*="MuiDialogContent-root"]': {
            padding: spacings["6"],
            "& img": {
              marginBottom: spacings["4"],
              height: spacings["8"],
              width: spacings["8"]
            },
            "& [class*='MuiSvgIcon-root']": {
              height: spacings["8"],
              paddingBottom: "1em",
              width: spacings["8"]
            }
          }
        }), "&.DhigModal--type--lightbox", _defineProperty(_defineProperty(_defineProperty({
          backgroundColor: tokens.colors["fade-gradient-transparent"],
          borderRadius: primitives.borderRadii.none,
          boxShadow: tokens.effects["container-0-outside"],
          maxWidth: "unset"
        }, breakpoints.down(breakpoints.values.lg), {
          marginLeft: spacings["4"],
          marginRight: spacings["4"],
          maxHeight: "calc(100% - calc(".concat(paperMargin("sm", "vertical"), " * 2))")
        }), breakpoints.up(breakpoints.values.lg), {
          margin: "".concat(paperMargin("lg", "vertical"), " 11.25%")
        }), '& [class*="MuiDialogContent-root"]', {
          borderRadius: primitives.borderRadii.large,
          padding: spacings["0"],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          marginBottom: spacings["4"],
          "& :first-of-type": {
            maxWidth: "100%",
            maxHeight: "100%",
            overflow: "hidden"
          },
          "& ~ *": {
            color: tokens.colors["ink-on-dark"]
          }
        })), "&.DhigModal--type--modal", _defineProperty({}, breakpoints.down(breakpoints.values.md), {
          position: "fixed",
          bottom: primitives.spacings["4"],
          margin: 0,
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          boxShadow: "none",
          borderTop: "1px solid ".concat(tokens.colors["ink-on-background"])
        })), "&.DhigModal--styleVariant--subdivision", {
          '& [class*="MuiDialogTitle-root"]': {
            boxShadow: tokens.effects["divider-0-bottom"],
            paddingBottom: primitives.spacings["4"]
          },
          '& [class*="MuiDialogActions-root"]': {
            boxShadow: tokens.effects["divider-0-top"]
          },
          '& [class*="MuiDialogContent-root"]': {
            padding: "".concat(spacings["6"], " ").concat(spacings["7"])
          }
        }), '& .DhigModal--closeButton--default ~ [class*="MuiDialogTitle-root"]', {
          paddingRight: spacings["9"]
        }), "& .DhigModal--closeButton--default", closeButtonStyles), _defineProperty(_paper, "& .DhigModal--closeButton--outside", Object.assign(Object.assign({}, closeButtonStyles), _defineProperty(_defineProperty(_defineProperty({
          position: "fixed",
          "& [class*='MuiSvgIcon-root'] svg": {
            color: tokens.colors["ink-on-dark"],
            height: closeButtonDimensions.sm.iconSize,
            width: closeButtonDimensions.sm.iconSize
          }
        }, breakpoints.up(breakpoints.values.md), {
          top: closeButtonDimensions.md.distanceToEdge,
          right: closeButtonDimensions.md.distanceToEdge,
          "& svg": {
            height: closeButtonDimensions.md.iconSize,
            width: closeButtonDimensions.md.iconSize
          }
        }), breakpoints.up(breakpoints.values.lg), {
          top: closeButtonDimensions.lg.distanceToEdge,
          right: closeButtonDimensions.lg.distanceToEdge,
          "& svg": {
            height: closeButtonDimensions.lg.iconSize,
            width: closeButtonDimensions.lg.iconSize
          }
        }), breakpoints.up(breakpoints.values.xl), {
          top: closeButtonDimensions.xl.distanceToEdge,
          right: closeButtonDimensions.xl.distanceToEdge,
          "& svg": {
            height: closeButtonDimensions.xl.iconSize,
            width: closeButtonDimensions.xl.iconSize
          }
        })))),
        paperWidthXs: {
          maxWidth: 342
        },
        paperWidthSm: {
          maxWidth: 586
        },
        paperWidthMd: {
          maxWidth: 830
        },
        paperWidthLg: {
          maxWidth: 1074
        },
        paperWidthXl: {
          maxWidth: 1318
        },
        paperScrollPaper: _defineProperty({}, breakpoints.down(breakpoints.values.md), {
          maxHeight: "calc(100% - calc(".concat(paperMargin("sm", "vertical"), " * 2))")
        })
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: Object.assign(Object.assign({}, tokens.typography["headline-small"]), {
          padding: "".concat(spacings["6"], " ").concat(spacings["7"], " ").concat(spacings["0"]),
          "& .DhigModal--logo": {
            filter: filterColor,
            height: spacings["6"],
            width: "148px"
          }
        })
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "".concat(spacings["6"], " ").concat(spacings["7"]),
          marginRight: "1px"
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "".concat(spacings["6"], " ").concat(spacings["7"])
        }
      }
    }
  };
};