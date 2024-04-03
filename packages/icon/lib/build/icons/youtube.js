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
var SvgYoutube = function SvgYoutube(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/youtube"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.8105 5.44C20.6696 5.66729 21.3435 6.33354 21.5805 7.19C21.8699 8.77677 22.0105 10.3871 22.0005 12C22.0105 13.6129 21.8699 15.2232 21.5805 16.81C21.3478 17.6731 20.6736 18.3473 19.8105 18.58C18.2505 19 12.0005 19 12.0005 19C12.0005 19 5.7505 19 4.1905 18.58C3.32741 18.3473 2.65322 17.6731 2.4205 16.81C2.13109 15.2232 1.99048 13.6129 2.0005 12C1.99048 10.3871 2.13109 8.77677 2.4205 7.19C2.65322 6.32691 3.32741 5.65272 4.1905 5.42C5.7505 5 12.0005 5 12.0005 5C12.0005 5 18.2505 5 19.8105 5.44ZM15.2005 12L10.0005 9V15L15.2005 12Z",
    fill: "currentColor"
  })));
};
SvgYoutube.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgYoutube"
};
var _default = exports.default = SvgYoutube;