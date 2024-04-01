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
var SvgInfrastructure = function SvgInfrastructure(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M1.90094 11.0104C3.48266 10.9631 4.49957 10.7462 5.9726 10.0932C8.01741 9.07495 10.7735 5.16956 10.7735 5.16956M10.7735 5.16956V20.1414M10.7735 5.16956L13.2272 5.16964M10.7736 15.0032H1.90094M2.65944 10.9706V15.0033M5.55174 10.2716V15.0033M8.43833 8.03653V15.0033M22.0897 11.011C20.5095 10.977 19.5022 10.7372 18.028 10.0932C15.9832 9.08165 13.2272 5.16964 13.2272 5.16964M13.2272 5.16964V20.0878M22.0897 14.9699L10.7735 14.9699M21.3412 10.9758V14.97M18.449 10.2741V14.9699M15.5624 8.03945V14.9699M10.7735 11.7009H13.2273M10.7735 8.43188H13.2273",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
SvgInfrastructure.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgInfrastructure"
};
var _default = exports.default = SvgInfrastructure;