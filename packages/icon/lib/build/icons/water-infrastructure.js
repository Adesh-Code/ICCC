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
var SvgWaterInfrastructure = function SvgWaterInfrastructure(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.9833 18.2968V10.9529M14.52 21.7908H21.8056M2.19458 6.8493H9.48015M12.9913 12.0762H15.6065C16.5186 12.071 17.4143 12.3212 18.1937 12.7987C18.5046 12.9895 18.7987 13.2066 19.0729 13.4479C19.4995 13.8358 19.8394 14.3107 20.0702 14.8411C20.3009 15.3714 20.4172 15.9452 20.4113 16.5243V21.4578M12.9913 17.309H14.7665C15.0673 17.3088 15.3563 17.4265 15.5726 17.6372C15.7889 17.8478 15.9155 18.135 15.9257 18.438V21.4071M3.43784 7.30084C3.43784 8.61044 3.43784 9.91439 3.43784 11.2183C3.43793 12.3926 3.51691 13.652 3.99784 14.7689C5.67783 18.0768 9.97862 17.3091 12.997 17.3091M8.28198 7.30084C8.28198 8.45803 8.28198 9.20314 8.28198 10.795C8.28265 10.9871 8.31483 11.1779 8.37719 11.3595C8.60679 12.0255 9.19478 12.0876 9.80518 12.0707C10.8636 12.0368 11.9276 12.0707 12.986 12.0707M21.615 6.48521C21.6636 6.80951 21.6421 7.14057 21.5521 7.45576C21.4621 7.77095 21.3057 8.06283 21.0935 8.31147C20.8813 8.5601 20.6183 8.75964 20.3226 8.89642C20.0269 9.0332 19.7053 9.104 19.38 9.104C19.0546 9.104 18.733 9.0332 18.4373 8.89642C18.1416 8.75964 17.8786 8.5601 17.6664 8.31147C17.4542 8.06283 17.2977 7.77095 17.2077 7.45576C17.1177 7.14057 17.0963 6.80951 17.1449 6.48521C17.2826 4.52806 19.3763 2.48328 19.3763 2.48328C19.3763 2.48328 21.4701 4.49885 21.615 6.48521Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
SvgWaterInfrastructure.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgWaterInfrastructure"
};
var _default = exports.default = SvgWaterInfrastructure;