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
var SvgNotifcationOff = function SvgNotifcationOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/notifcation-off"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M17.5 18.0064H2.75C3.26621 16.7243 4.21883 15.6658 5.43966 15.0179L6.00287 14.673V7.7765L6.75 7M3.25 3.5L20.25 20.5M15 18C15 18 15 21 12 21C9 21 9 18 9 18M8.64111 5.40327C12.3065 2.72402 17.4972 6.53609 17.4972 7.7765C17.4972 9.05299 17.5 14.5 17.5 14.5L19.5 15.5C20.2188 15.8594 20.7604 16.6261 20.6689 17.1689M13 3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgNotifcationOff.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgNotifcationOff"
};
var _default = exports.default = SvgNotifcationOff;