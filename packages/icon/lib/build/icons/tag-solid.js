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
var SvgTagSolid = function SvgTagSolid(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/tag-solid"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.7 2H11.7672C11.9528 2 12.1309 2.07375 12.2622 2.20503L23.505 13.4479C23.7784 13.7212 23.7784 14.1645 23.505 14.4378L14.4378 23.505C14.1645 23.7784 13.7212 23.7784 13.4479 23.505L2.20502 12.2622C2.07375 12.1309 2 11.9528 2 11.7672V2.7C2 2.3134 2.3134 2 2.7 2ZM8 6.25C7.0335 6.25 6.25 7.0335 6.25 8C6.25 8.9665 7.0335 9.75 8 9.75C8.9665 9.75 9.75 8.9665 9.75 8C9.75 7.0335 8.9665 6.25 8 6.25Z",
    fill: "currentColor"
  })));
};
SvgTagSolid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgTagSolid"
};
var _default = exports.default = SvgTagSolid;