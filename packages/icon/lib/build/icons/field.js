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
var SvgField = function SvgField(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/field"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M21.087 15.2551C20.7908 10.5173 18.595 7.7244 16.2406 6.26848C16.0323 6.13968 15.8228 6.02134 15.6132 5.91304M21.087 15.2551H2.91304M21.087 15.2551H23V16.913C23 16.913 21.087 19 12 19C2.91304 19 1 16.913 1 16.913V15.2551H2.91304M2.91304 15.2551C3.20916 10.5173 5.40497 7.7244 7.75942 6.26848C7.96771 6.13968 8.17724 6.02134 8.38681 5.91304M8.97101 5.63645C8.7769 5.72018 8.58184 5.81226 8.38681 5.91304M8.97101 5.63645L8.38681 5.91304M8.97101 5.63645C9.34895 5.47344 9.72332 4.38559 10.087 4.28344C10.7802 4.0887 11.4345 4 12 4C12.5655 4 13.2198 4.0887 13.913 4.28344C14.2767 4.38559 14.651 5.47344 15.029 5.63645M8.97101 5.63645V8.78261M15.029 5.63645C15.2231 5.72018 15.4182 5.81226 15.6132 5.91304M15.029 5.63645L15.6132 5.91304M15.029 5.63645V8.78261",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgField.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgField"
};
var _default = exports.default = SvgField;