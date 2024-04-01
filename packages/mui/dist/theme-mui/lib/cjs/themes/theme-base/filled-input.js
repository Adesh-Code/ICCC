"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFilledInputStyles = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var makeFilledInputStyles = exports.makeFilledInputStyles = function makeFilledInputStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colors.background,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: tokens.colors.background,
            boxShadow: "none"
          },
          "&.Mui-focused": {
            backgroundColor: tokens.colors.background,
            boxShadow: "none"
          },
          '& + [class*="MuiFormHelperText-root"]': {
            marginLeft: primitives.spacings["2"]
          },
          "&.Mui-error": {
            marginLeft: 0,
            '& div[class*="MuiFilledInput-input"]': _defineProperty({
              borderRadius: "".concat(primitives.borderRadii.medium, " ").concat(primitives.borderRadii.medium, " 0 0"),
              boxShadow: tokens.effects["field-error"],
              padding: "calc(".concat(primitives.spacings["3"], "/2) ").concat(primitives.spacings["7"], " calc(").concat(primitives.spacings["3"], "/2) ").concat(primitives.spacings["2"]),
              "&:focus": {
                backgroundColor: tokens.colors.background
              }
            }, "&:hover, &:active:not(.Mui-disabled), &[aria-expanded='true'][class*=\"MuiSelect-filled\"]", {
              "&:not(.Mui-disabled):not(:focus):not(:focus-visible)": {
                borderBottom: "".concat(primitives.borderWidths.medium, " solid ").concat(primitives.colors.detail.transparent),
                "& + input + .MuiSelect-icon": {
                  marginRight: primitives.spacings["1"]
                }
              }
            })
          },
          '& [class*="MuiSelect-icon"], [class*="MuiNativeSelect-icon"]': {
            color: tokens.colors["ink-on-background"],
            marginRight: primitives.spacings["1"],
            position: "absolute",
            right: 0,
            pointerEvents: "none"
          },
          '&:not(.Mui-disabled) [class*="MuiFilledInput-input"]:before': {
            left: 0,
            right: 0,
            bottom: 0,
            display: "block",
            height: "100%",
            content: "''",
            position: "absolute"
          },
          '&[class*="MuiSelect-root"]:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: "".concat(primitives.borderWidths.medium, " solid ").concat(primitives.colors.detail.transparent),
            left: primitives.spacings["2"]
          },
          '&[class*="MuiSelect-root"]:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-hover"])
          }
        },
        input: {
          padding: "calc(".concat(primitives.spacings["3"], "/2) ").concat(primitives.spacings["2"]),
          borderBottom: "".concat(primitives.borderWidths.medium, " solid ").concat(primitives.colors.detail.transparent),
          height: "auto",
          "&:focus, &:focus-visible": {
            borderRadius: "".concat(primitives.borderRadii.medium, " ").concat(primitives.borderRadii.medium, " 0 0"),
            boxShadow: tokens.effects["focus-ring-thin"],
            backgroundColor: tokens.colors.background,
            "&[aria-expanded='true']": {
              boxShadow: "none"
            }
          },
          "&[data-active='true']:not(.Mui-error)": {
            borderBottom: "".concat(primitives.borderWidths.large, " solid ").concat(tokens.colors["ink-focus"])
          }
        },
        underline: {
          borderBottom: 0,
          "&:hover:before": {
            borderBottom: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-hover"]),
            left: primitives.spacings["2"]
          },
          "&:hover:focus-within:before": {
            borderBottom: 0
          },
          "&:before, &:after, &.Mui-disabled:before, &.Mui-error:before, &:focus:before, &:focus-visible:before, &:active:before": {
            borderBottom: 0
          }
        }
      }
    }
  };
};