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
var SvgSuccess = function SvgSuccess(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 15 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "success"
  }, /*#__PURE__*/React.createElement("g", {
    id: "group"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill-background",
    d: "M7.25001 1.74998C3.79822 1.74998 1 4.54821 1 8C1 11.4518 3.79822 14.25 7.25001 14.25C10.7018 14.25 13.5 11.4518 13.5 8C13.5 4.54821 10.7018 1.74998 7.25001 1.74998Z",
    fill: "#2BC275"
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill-foreground",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.2049 5.58046C10.5193 5.85002 10.5558 6.3235 10.2862 6.63799L7.11467 10.3381C6.98127 10.4937 6.78999 10.588 6.5853 10.5989C6.38062 10.6099 6.18037 10.5366 6.03112 10.3961L4.42333 8.8824C4.12175 8.59847 4.10744 8.12381 4.39137 7.82223C4.67531 7.52064 5.14996 7.50633 5.45155 7.79026L6.48719 8.76529L9.14732 5.66181C9.41688 5.34731 9.89036 5.31089 10.2049 5.58046Z",
    fill: "black"
  }))));
};
SvgSuccess.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgSuccess"
};
var _default = exports.default = SvgSuccess;