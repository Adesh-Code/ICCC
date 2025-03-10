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
var SvgEditMarkerRight = function SvgEditMarkerRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 25 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M 25 16 C 25 18.209 23.209 20 21 20 L 7.472 20 C 5.957 20 4.572 19.144 3.894 17.789 L 0 10 L 3.894 2.211 C 4.572 0.856 5.957 0 7.472 0 L 21 0 C 23.209 0 25 1.791 25 4 Z M 8.587 12.046 L 7.279 16.721 L 11.954 15.413 L 19.02 8.341 L 20.134 7.227 C 20.29 7.062 20.43 6.805 20.489 6.586 L 20.497 6.555 L 20.499 6.507 C 20.503 6.434 20.503 6.359 20.5 6.289 L 20.5 6.247 C 20.478 5.524 20.165 4.774 19.695 4.304 C 19.226 3.835 18.476 3.522 17.753 3.5 L 17.462 3.5 L 17.424 3.509 C 17.207 3.562 16.943 3.701 16.777 3.85 L 15.646 4.981 Z M 18.666 7.281 L 16.708 5.333 L 17.477 4.564 C 17.526 4.501 17.522 4.508 17.547 4.5 L 17.753 4.5 C 18.272 4.478 18.645 4.668 18.988 5.012 C 19.332 5.355 19.522 5.728 19.5 6.247 L 19.501 6.327 C 19.504 6.374 19.504 6.4 19.502 6.44 C 19.493 6.467 19.492 6.472 19.426 6.52 Z M 9.284 13.265 L 10.735 14.716 L 8.721 15.279 Z M 11.693 14.259 L 9.74 12.307 L 16.001 6.041 L 17.959 7.989 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5.33426L17.1267 4.20667C17.2347 4.10078 17.3715 4.02893 17.52 4H17.7H17.7533C18.9941 4 20 5.00587 20 6.24667V6.3C20.0033 6.35995 20.0033 6.42005 20 6.48C19.9673 6.63005 19.8908 6.76697 19.78 6.87333L18.6667 7.98758M16 5.33426L9.03333 12.3067L8 16L11.6933 14.9667L18.6667 7.98758M16 5.33426L18.6667 7.98758M9.06 12.3333L11.6667 14.94",
    strokeLinejoin: "round"
  }));
};
SvgEditMarkerRight.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgEditMarkerRight"
};
var _default = exports.default = SvgEditMarkerRight;