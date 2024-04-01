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
var SvgGooglePlay = function SvgGooglePlay(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3.40349 2.15685C4.08971 1.11132 5.52819 0.657345 6.74618 1.35769L16.3451 6.87709L12.2559 10.9664L3.40349 2.15685Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3.87151V20.2223L11.1952 12.027L3 3.87151Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.44261 21.901C4.14321 22.9053 5.55087 23.3297 6.74617 22.6424L16.3266 17.1336L12.2584 13.0851L3.44261 21.901Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.6744 16.3587L21.4854 14.1673C23.1572 13.2061 23.1572 10.7941 21.4854 9.83279L17.692 7.65154L13.3191 12.0245L17.6744 16.3587Z",
    fill: "currentColor"
  }));
};
SvgGooglePlay.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgGooglePlay"
};
var _default = exports.default = SvgGooglePlay;