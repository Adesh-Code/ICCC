"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTabsStyles = void 0;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _caretLeft = _interopRequireDefault(require("@iccc/icon/lib/build/ui-controls/caret-left"));
var _caretRight = _interopRequireDefault(require("@iccc/icon/lib/build/ui-controls/caret-right"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* TODO: [Typescript] remove ignores once icon is migrated */ // @ts-ignore
// @ts-ignore
var makeTabsStyles = exports.makeTabsStyles = function makeTabsStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  var getTabStyles = function getTabStyles() {
    var variant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";
    var tab = tokens.tab;
    var padding = variant === "quiet" ? "".concat(primitives.spacings["3"], " ").concat(primitives.spacings["4"]) : "".concat(primitives.spacings["4"], " ").concat(primitives.spacings["6"]);
    return Object.assign(Object.assign({}, tab.default), {
      fontSize: primitives.fontSizes["3"],
      fontWeight: primitives.fontWeights.stout,
      lineHeight: primitives.lineHeights.compact,
      padding: padding,
      textTransform: "none",
      "&:hover": Object.assign({}, tab.hover),
      "&:focus-visible": Object.assign({}, tab.focus),
      "&:active": Object.assign({}, tab.pressed),
      "&.Mui-selected": Object.assign(Object.assign({}, tab.active), variant === "quiet" ? {
        backgroundColor: primitives.colors.detail.transparent
      } : {}),
      "&.Mui-selected:focus-visible": Object.assign(Object.assign({}, tab.focus), {
        backgroundColor: tokens.colors["fill-elevation-1"],
        color: tokens.colors["ink-on-background"]
      }),
      "&.Mui-disabled": {
        opacity: tokens.opacities.disabled
      }
    });
  };
  return {
    MuiTabs: {
      defaultProps: {
        slots: {
          // eslint-disable-next-line react/display-name
          StartScrollButtonIcon: function StartScrollButtonIcon() {
            return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
              fontSize: "small"
            }, /*#__PURE__*/_react.default.createElement(_caretLeft.default, null));
          },
          // eslint-disable-next-line react/display-name
          EndScrollButtonIcon: function EndScrollButtonIcon() {
            return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
              fontSize: "small"
            }, /*#__PURE__*/_react.default.createElement(_caretRight.default, null));
          }
        }
      },
      styleOverrides: {
        root: {
          position: "relative",
          "&.DhigTabs--styleVariant--default": Object.assign(Object.assign({}, tokens.tabs.default), {
            '&[class*="MuiTabs-vertical"] [class*="MuiTabs-scroller"] [class*="MuiTab-root"]': {
              maxWidth: "none",
              alignContent: "flex-start",
              flexWrap: "wrap"
            },
            '& [class*="MuiTab-root"]': getTabStyles()
          }),
          "&.DhigTabs--styleVariant--quiet": Object.assign(Object.assign({}, tokens.tabs.quiet), {
            '& [class*="MuiTabs-scroller"]': {
              marginLeft: "-".concat(primitives.spacings["4"]),
              '& [class*="MuiTabs-indicator"]': {
                top: "unset",
                bottom: primitives.spacings["0"],
                background: "transparent",
                "&:after": {
                  width: "calc( 100% - ".concat(primitives.spacings["7"], " )"),
                  height: "2px",
                  content: "''",
                  background: tokens.colors["ink-on-background"]
                }
              }
            },
            "&.DhigTabs--extendedUnderline": {
              overflow: "unset",
              "&:before, &:after": {
                boxShadow: tokens.effects["divider-0-bottom"],
                content: "''",
                height: "100%",
                position: "absolute",
                width: "calc((100vw - 100%) / 2)"
              },
              "&:before": {
                right: "100%"
              },
              "&:after": {
                left: "100%"
              },
              '& [class*="MuiTabs-scroller"]': {
                marginLeft: primitives.spacings["0"]
              },
              '&[class*="MuiTabs-vertical"]': {
                overflow: "hidden"
              }
            },
            '&[class*="MuiTabs-vertical"]': {
              boxShadow: tokens.effects["divider-0-left"],
              '& [class*="MuiTabs-scroller"]': {
                marginLeft: primitives.spacings["0"],
                '& [class*="MuiTabs-indicator"]': {
                  background: tokens.colors["ink-on-background"]
                },
                '& [class*="MuiTab-root"]': {
                  maxWidth: "none",
                  alignContent: "flex-start",
                  flexWrap: "wrap",
                  "&.Mui-selected": {
                    boxShadow: "none",
                    "&:focus:active": {
                      boxShadow: tokens.effects["tab-highlight-left"]
                    }
                  }
                }
              }
            },
            '& [class*="MuiTab-root"]': getTabStyles("quiet")
          }),
          "& [class*='MuiTabs-scroller'] + [class*='MuiTabScrollButton-root']": {
            background: "linear-gradient(270deg, ".concat(tokens.colors["fade-gradient-opaque"], " 0%, ").concat(tokens.colors["fade-gradient-semi-opaque"], " 33.33%, ").concat(tokens.colors["fade-gradient-semi-transparent"], " 66.67%, ").concat(tokens.colors["fade-gradient-transparent"], " 100%)"),
            right: primitives.spacings["0"],
            left: "unset"
          }
        },
        indicator: {
          left: primitives.spacings["0"],
          top: primitives.spacings["0"],
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }
    },
    MuiTab: {
      defaultProps: {
        wrapped: true,
        tabIndex: 0
      },
      styleOverrides: {
        root: {
          border: "".concat(primitives.borderWidths.large, " solid transparent"),
          minWidth: "unset"
        }
      }
    },
    MuiTabScrollButton: {
      styleOverrides: {
        root: {
          color: tokens.colors["ink-on-background"],
          height: "100%",
          width: primitives.spacings["8"],
          position: "absolute",
          zIndex: 1,
          background: "linear-gradient(270deg, ".concat(tokens.colors["fade-gradient-transparent"], " 0%, ").concat(tokens.colors["fade-gradient-semi-transparent"], " 33.33%, ").concat(tokens.colors["fade-gradient-semi-opaque"], " 66.67%, ").concat(tokens.colors["fade-gradient-opaque"], " 100%)"),
          left: primitives.spacings["0"],
          '& [class*="MuiSvgIcon"]': {
            display: "none"
          },
          "&:hover": {
            '& [class*="MuiSvgIcon"]': {
              display: "inline-block"
            }
          },
          // Not addding theming for breakpoints; this is only to override the MUI default.
          "@media (max-width: 599.95px)": _defineProperty({}, "&[class*=\"MuiTabs-scrollButtonsDesktop\"]", {
            display: "flex"
          })
        }
      }
    }
  };
};