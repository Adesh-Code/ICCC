"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSnackbarStyles = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var makeSnackbarStyles = exports.makeSnackbarStyles = function makeSnackbarStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        }
      },
      styleOverrides: {
        anchorOriginBottomCenter: _defineProperty({}, "@media (min-width: ".concat(primitives.grid.scale["0"], ")"), {
          bottom: primitives.spacings["0"]
        }),
        anchorOriginTopRight: _defineProperty({}, "@media (min-width: ".concat(primitives.grid.scale["0"], ")"), {
          top: primitives.spacings["0"],
          right: primitives.spacings["0"]
        })
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: _defineProperty({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: tokens.colors["fill-elevation-0"],
          backgroundImage: "none",
          boxShadow: tokens.effects["elevation-0-popover"],
          padding: "".concat(primitives.spacings["2"], " ").concat(primitives.spacings["2"], " ").concat(primitives.spacings["2"], " ").concat(primitives.spacings["3"]),
          minWidth: "320px",
          minHeight: "36px",
          margin: "".concat(primitives.spacings["2"], " ").concat(primitives.spacings["2"], " ").concat(primitives.spacings["4"])
        }, "@media (min-width: ".concat(primitives.grid.scale["3"], ")"), {
          minWidth: "320px"
        }),
        message: _defineProperty({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "".concat(primitives.spacings["0"], "px"),
          marginRight: primitives.spacings["6"],
          '& [class*="MuiSvgIcon-root"]': {
            marginRight: primitives.spacings["4"],
            fontSize: primitives.fontSizeFallbacks["5"]
          },
          '& > [class*="MuiTypography-root"]': {
            minWidth: "140px",
            maxWidth: "250px",
            '& [class*="MuiLink"]': {
              cursor: "pointer"
            }
          },
          '& > [class*="MuiContainer-root"]': {
            display: "flex",
            padding: "".concat(primitives.spacings["0"], "px"),
            '& [class*="MuiContainer-root"]': {
              minWidth: "140px",
              maxWidth: "250px",
              padding: "".concat(primitives.spacings["0"], "px"),
              marginLeft: primitives.spacings["0"],
              '& [class*="MuiTypography-root"] + [class*="MuiTypography-root"]': {
                cursor: "pointer",
                marginTop: primitives.spacings["2"]
              }
            }
          }
        }, "@media (max-width: ".concat(primitives.grid.scale["3"], ")"), {
          minWidth: "320px",
          justifyContent: "flex-start"
        }),
        action: _defineProperty(_defineProperty(_defineProperty(_defineProperty({
          margin: "unset",
          padding: "unset",
          alignSelf: "flex-start",
          '&:not(:has( > [class*="MuiSvgIcon-root"]))': {
            marginRight: primitives.spacings["2"],
            alignSelf: "center"
          }
        }, "@media (max-width: ".concat(primitives.grid.scale["3"], ")"), {
          paddingLeft: "40px"
        }), '& [class*="MuiSvgIcon-root"]', Object.assign(Object.assign({
          backgroundColor: tokens.colors["fill-elevation-0"],
          boxShadow: "none",
          cursor: "pointer",
          fontSize: primitives.fontSizeFallbacks["4"]
        }, tokens.transitions["state-blur"]), _defineProperty({
          padding: "6px",
          borderRadius: primitives.borderRadii["medium"],
          border: "".concat(primitives.borderWidths.large, " solid ").concat(tokens.colors["fade-gradient-transparent"]),
          "&:hover": Object.assign({
            backgroundColor: tokens.colors["activated-fill-subtle"]
          }, tokens.transitions["state-activate"]),
          "&:active": Object.assign({
            backgroundColor: tokens.colors["activated-hover-fill-subtle"]
          }, tokens.transitions["state-activate"]),
          "&:focus": {
            outline: "none"
          },
          "&:focus-visible": Object.assign(Object.assign({
            border: "".concat(primitives.borderWidths.large, " solid ").concat(primitives.colors.accent.iris)
          }, tokens.transitions["state-activate"]), {
            "&:hover, &:active": {
              backgroundColor: tokens.colors["fill-elevation-0"]
            }
          })
        }, "@media (max-width: ".concat(primitives.grid.scale["3"], ")"), {
          position: "absolute",
          right: primitives.spacings["4"],
          top: primitives.spacings["4"]
        }))), '& [class*="MuiTypography-root"] [class*="MuiLink"]', {
          cursor: "pointer"
        }), '& [class*="MuiTypography-root"] + [class*="MuiSvgIcon-root"]', {
          marginLeft: primitives.spacings["3"]
        })
      }
    }
  };
};