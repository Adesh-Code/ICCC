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
var SvgSupportCall = function SvgSupportCall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/support-call"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M9.62499 7.1625C9.54999 7.2 9.48749 7.2375 9.42499 7.2875C9.18749 7.4375 7.31249 8.7125 8.92499 12.7875L9.33749 13.7125C11.3125 17.6375 13.5125 17.0875 13.775 17C13.85 16.9875 13.925 16.9625 14.0125 16.9375C14.3125 16.8625 14.575 16.7625 15.05 16.475C15.05 16.475 15.1125 15.975 14.8 15.275C14.4875 14.575 14 14.1375 14 14.1375L12.8875 14.7875C12.325 15.0375 11.0375 14.075 10.6125 13.15L10.1875 12.225C9.77499 11.2875 9.91249 9.6875 10.475 9.4375L11.7 9.0375C11.7 9.0375 11.9 8.8 11.45 7.775C10.9875 6.7375 10.65 6.6875 10.65 6.6875C10.125 6.8625 9.88749 6.9875 9.62499 7.1625Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeMiterlimit: 10,
    strokeLinejoin: "round"
  })));
};
SvgSupportCall.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgSupportCall"
};
var _default = exports.default = SvgSupportCall;