"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgRedshift = function SvgRedshift(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/redshift"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M20.34 19.43H20.06C19.8633 19.4287 19.6679 19.3984 19.48 19.34L12 20.52L18.8 19C18.6894 18.8966 18.5889 18.7827 18.5 18.66L11.92 20.15L18.27 18.3L18.08 17.94L11.31 19.94L17.85 17.54L17.69 17.14L11.22 19.52L17.46 16.7L17.27 16.33L11.62 18.88L17.1 16L16.9 15.63L11.2 18.63L16.73 15.22L16.54 14.86L10.83 18.39L16.31 14.5L16.12 14.14L11.34 17.55L16 13.83L15.8 13.47L11.8 16.69L19 10.22C19.08 10 19.11 9.78 19.17 9.55L11.53 16.35L19.2 8.77V8.21L11.53 15.79L19.2 7.43V7.26C19.2161 7.1305 19.2161 6.9995 19.2 6.87L11.9 14.78L19.08 6.22C19.08 6.06 19 5.89 18.97 5.75L11.67 14.45L18.8 5.19C18.75 5.05 18.66 4.91 18.61 4.8L11.2 14.42L18.27 4.32C18.1941 4.20224 18.1033 4.09469 18 4L11 14L17.6 3.62C17.49 3.54 17.41 3.45 17.29 3.37L10.41 14.17L16.82 3.06C16.71 3.01 16.59 2.92 16.45 2.87L10.16 13.8L16 2.64C15.89 2.59 15.75 2.56 15.61 2.5L9.91003 13.44L15 2.34L14.61 2.25L9.57003 13.19L14.1 2.19C13.97 2.19 13.83 2.19 13.69 2.13L9.10003 13.3L13.15 2H12.73L8.51003 13.72L12.12 2H11.7L8.15003 13.58L11.11 2H10.69L7.69003 13.66L10.08 2H9.66003L7.28003 13.75L9.07003 2H8.68003L6.89003 13.66L8.09003 2H7.67003L6.47003 13.8L7.08003 2H6.66003L6.05003 13.89V2H5.66003V22H18.8C19.288 22.0046 19.7726 21.9199 20.23 21.75L13.23 21.64L20.33 21.38V21L12.33 21.28L20.33 20.5V20.1L12.59 20.85L20.36 19.62L20.34 19.43Z",
    fill: "currentColor"
  })));
};
SvgRedshift.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgRedshift"
};
var _default = exports.default = SvgRedshift;