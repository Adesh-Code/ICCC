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
var SvgEditMarkerLeft = function SvgEditMarkerLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 25 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 17.528 0 C 19.043 0 20.428 0.856 21.106 2.211 L 25 10 L 21.106 17.789 C 20.428 19.144 19.043 20 17.528 20 L 4 20 C 1.791 20 0 18.209 0 16 Z M 5.587 12.046 L 4.279 16.721 L 8.954 15.413 L 16.02 8.341 L 17.134 7.227 C 17.29 7.062 17.43 6.805 17.489 6.586 L 17.497 6.555 L 17.499 6.507 C 17.503 6.434 17.503 6.359 17.5 6.289 L 17.5 6.247 C 17.478 5.524 17.165 4.774 16.696 4.304 C 16.226 3.835 15.476 3.522 14.753 3.5 L 14.462 3.5 L 14.424 3.509 C 14.207 3.562 13.943 3.701 13.777 3.85 L 12.646 4.981 Z M 15.666 7.281 L 13.708 5.333 L 14.477 4.564 C 14.526 4.501 14.522 4.508 14.547 4.5 L 14.753 4.5 C 15.272 4.478 15.645 4.668 15.988 5.012 C 16.332 5.355 16.522 5.728 16.5 6.247 L 16.501 6.327 C 16.504 6.374 16.504 6.4 16.502 6.44 C 16.495 6.521 16.492 6.472 16.426 6.52 Z M 6.284 13.265 L 7.735 14.716 L 5.721 15.279 Z M 8.693 14.259 L 6.74 12.307 L 13.001 6.041 L 14.959 7.989 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 5.33426L14.1267 4.20667C14.2347 4.10078 14.3715 4.02893 14.52 4H14.7H14.7533C15.9941 4 17 5.00587 17 6.24667V6.3C17.0033 6.35995 17.0033 6.42005 17 6.48C16.9673 6.63005 16.8908 6.76697 16.78 6.87333L15.6667 7.98758M13 5.33426L6.03333 12.3067L5 16L8.69333 14.9667L15.6667 7.98758M13 5.33426L15.6667 7.98758M6.06 12.3333L8.66667 14.94",
    strokeLinejoin: "round"
  }));
};
SvgEditMarkerLeft.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgEditMarkerLeft"
};
var _default = exports.default = SvgEditMarkerLeft;