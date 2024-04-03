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
var SvgBillStack = function SvgBillStack(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/bill-stack"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M23 16.9643V20H15.1842M23 16.9643V13.9286M23 16.9643H15.1842M1 16.9643V20H8.81579M1 16.9643V13.9286M1 16.9643H8.81579M23 13.9286V3H15.1842M23 13.9286H15.1842M1 13.9286V3H8.81579M1 13.9286H8.81579M8.81579 3H12H15.1842M8.81579 3V6.03571M15.1842 3V6.03571M15.1842 20H8.81579M15.1842 20V16.9643M8.81579 20V13.9286M8.81579 13.9286V10.8929M15.1842 13.9286V16.9643M15.1842 13.9286V10.8929M8.81579 6.03571H3.89474V10.8929H8.81579M8.81579 6.03571V10.8929M15.1842 6.03571H20.1053V10.8929H15.1842M15.1842 6.03571V10.8929",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinejoin: "round"
  })));
};
SvgBillStack.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgBillStack"
};
var _default = exports.default = SvgBillStack;