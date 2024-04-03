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
var SvgPersonalData = function SvgPersonalData(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/personal-data"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M13.5 13.5C13.5 13.5 14.8421 15.5 18 15.5C21.1579 15.5 23 13.5 23 13.5M13.5 17.5C13.5 17.5 14.8421 19.5 18 19.5C21.1579 19.5 23 17.5 23 17.5M1.03027 17.2993C1.38517 13.2092 4.81782 10 9.00001 10C10.0609 10 11.0736 10.2065 12 10.5815M12.3685 4.47368C12.3685 6.39215 10.8604 7.94737 9.00004 7.94737C7.13971 7.94737 5.63162 6.39215 5.63162 4.47368C5.63162 2.55522 7.13971 1 9.00004 1C10.8604 1 12.3685 2.55522 12.3685 4.47368ZM13.5 13V21C13.5 21 14.75 23 18 23C21.25 23 23 21 23 21V13C23 13 21 11.5 18 11.5C15 11.5 13.5 13 13.5 13Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgPersonalData.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgPersonalData"
};
var _default = exports.default = SvgPersonalData;