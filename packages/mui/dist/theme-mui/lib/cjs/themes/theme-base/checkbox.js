"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCheckboxStyles = void 0;
var React = _interopRequireWildcard(require("react"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _checkmark = _interopRequireDefault(require("@iccc/icon/lib/build/ui-controls/checkmark"));
var _indeterminate = _interopRequireDefault(require("@iccc/icon/lib/build/ui-controls/indeterminate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* TODO: [Typescript] remove ignores once icon is migrated */ // @ts-ignore
// @ts-ignore
var makeCheckboxStyles = exports.makeCheckboxStyles = function makeCheckboxStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiCheckbox: {
      defaultProps: {
        checkedIcon: ( /*#__PURE__*/React.createElement(_SvgIcon.default, null, /*#__PURE__*/React.createElement(_checkmark.default, null))),
        icon: /*#__PURE__*/React.createElement(_SvgIcon.default, null),
        indeterminateIcon: ( /*#__PURE__*/React.createElement(_SvgIcon.default, null, /*#__PURE__*/React.createElement(_indeterminate.default, null)))
      },
      styleOverrides: {
        root: _defineProperty({
          padding: "".concat(primitives.spacings["0"], "px"),
          margin: "".concat(primitives.spacings["2"], " 0"),
          outlineOffset: 0,
          '& [class*="MuiSvgIcon-fontSizeSmall"]': {
            height: primitives.spacings["4"],
            width: primitives.spacings["4"]
          },
          "&.Mui-disabled": {
            opacity: tokens.opacities.disabled,
            color: tokens.colors["ink-on-background"]
          },
          "&:hover": {
            backgroundColor: "inherit"
          },
          "&:hover > svg": Object.assign({
            outline: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-hover"])
          }, tokens.transitions["state-activate"]),
          "&:focus, &.Mui-focusVisible, &:focus-visible > svg": {
            outline: "".concat(primitives.borderWidths.large, " solid ").concat(tokens.colors["ink-focus"]),
            outlineOffset: primitives.borderWidths.medium,
            borderRadius: primitives.borderRadii.small,
            transition: "outline-color ".concat(primitives.transitions.duration["2"], " ").concat(primitives.transitions.easing.energetic)
          },
          "&:active > svg": Object.assign({
            outline: "".concat(primitives.borderWidths.large, " solid ").concat(tokens.colors["fill-success"])
          }, tokens.transitions["state-activate"]),
          '&.Mui-checked:not([class*="MuiCheckbox-indeterminate"])': {
            "& > svg": {
              color: tokens.colors["ink-on-fill-primary"],
              background: tokens.colors["fill-primary"]
            },
            "& span": {
              background: tokens.colors["fill-primary"]
            }
          },
          "& > svg": Object.assign({
            height: primitives.spacings["5"],
            width: primitives.spacings["5"],
            padding: "2px",
            border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-on-background"]),
            borderRadius: primitives.borderRadii.small,
            boxSizing: "border-box"
          }, tokens.transitions["state-blur"])
        }, "& + [class*=\"MuiFormControlLabel-label\"]", {
          color: tokens.colors["ink-on-background"],
          paddingLeft: primitives.spacings["2"],
          fontSize: primitives.fontSizes["3"],
          lineHeight: primitives.lineHeights.compact
        }),
        colorSecondary: {
          color: "".concat(tokens.colors["ink-on-background"])
        }
      }
    }
  };
};