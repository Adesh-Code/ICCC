"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeToolbarStyles = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var makeToolbarStyles = exports.makeToolbarStyles = function makeToolbarStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiToolbar: {
      styleOverrides: {
        root: Object.assign(Object.assign({
          boxShadow: tokens.effects["elevation-0-dropdown"]
        }, tokens.typography["short-copy-medium"]), _defineProperty(_defineProperty({
          backgroundColor: tokens.colors["fill-primary"],
          borderRadius: primitives.borderRadii.large,
          color: tokens.colors["ink-on-fill-primary"],
          padding: "".concat(primitives.spacings["2"], " ").concat(primitives.spacings["4"]),
          boxSizing: "border-box",
          justifyContent: "space-between",
          minHeight: "calc(".concat(primitives.spacings["8"], " + ").concat(primitives.spacings["1"], ")"),
          '& [class*="MuiIconButton-root"]': {
            marginRight: primitives.spacings["2"]
          },
          '& button[class*="MuiButton-root"]': {
            backgroundColor: tokens.colors["fill-primary"],
            borderColor: tokens.colors["ink-on-fill-primary"],
            color: tokens.colors["ink-on-fill-primary"],
            whiteSpace: "nowrap"
          },
          '& button[class*="MuiButton-root"]:focus:active': {
            color: tokens.colors["ink-on-fill-primary"]
          },
          '& [class*="MuiTypography-root"]': {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginRight: primitives.spacings["4"]
          }
        }, "@media (min-width: 600px)", {
          padding: "".concat(primitives.spacings["2"], " ").concat(primitives.spacings["4"]),
          minHeight: "calc(".concat(primitives.spacings["8"], " + ").concat(primitives.spacings["1"], ")")
        }), "@media (min-width: 0px) and (orientation: landscape)", {
          minHeight: "calc(".concat(primitives.spacings["8"], " + ").concat(primitives.spacings["1"], ")")
        }))
      }
    }
  };
};