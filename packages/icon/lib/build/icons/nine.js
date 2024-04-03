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
var SvgNine = function SvgNine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/nine"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "stroke",
    cx: 12,
    cy: 12,
    r: 10,
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M11.7658 8C9.9146 8 9 9.19008 9 10.5234V10.9972C9 12.2645 9.81543 13.2562 11.2369 13.2562C12.1074 13.2562 12.7135 12.9477 13.1433 12.4408C12.978 14.0716 11.8099 14.8099 9.70523 14.8871V16C12.8678 15.9118 14.5207 14.4683 14.5207 11.5702V11.0303C14.5207 9.21212 13.5399 8 11.7658 8ZM11.5234 12.2314C10.708 12.2314 10.3554 11.6915 10.3554 10.9642V10.5675C10.3554 9.65289 10.7961 9.07989 11.7438 9.07989C12.6915 9.07989 13.1653 9.67493 13.1653 10.9752V11.3278C12.7245 11.9008 12.2727 12.2314 11.5234 12.2314Z",
    fill: "currentColor"
  })));
};
SvgNine.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgNine"
};
var _default = exports.default = SvgNine;