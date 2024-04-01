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
var SvgFileSpreadsheet = function SvgFileSpreadsheet(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/file-spreadsheet"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M7 1H3V23H7V1Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M21 5.27778V1H13.6875M21 5.27778H3M21 5.27778V9.55556M3 5.27778V1H4.6875H6.375M3 5.27778V9.55556M3 9.55556H21M3 9.55556V13.8333M21 9.55556V13.8333M3 13.8333H21M3 13.8333V18.4167M21 13.8333V18.4167M3 18.4167V23H4.6875H6.375M3 18.4167H21M21 18.4167V23H13.6875M13.6875 1V23M13.6875 1H6.375M13.6875 23H6.375M6.375 23V1",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  })));
};
SvgFileSpreadsheet.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgFileSpreadsheet"
};
var _default = exports.default = SvgFileSpreadsheet;