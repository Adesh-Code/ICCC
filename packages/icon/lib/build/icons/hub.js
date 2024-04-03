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
var SvgHub = function SvgHub(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/hub"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M16.9033 9.13626C16.8363 8.93639 16.8 8.72243 16.8 8.5C16.8 7.39543 17.6954 6.5 18.8 6.5C19.9046 6.5 20.8 7.39543 20.8 8.5C20.8 9.60457 19.9046 10.5 18.8 10.5C17.9179 10.5 17.1691 9.9289 16.9033 9.13626ZM16.9033 9.13626L14.9142 10.2199M6.89667 9.13626C6.96369 8.93639 7 8.72243 7 8.5C7 7.39543 6.10457 6.5 5 6.5C3.89543 6.5 3 7.39543 3 8.5C3 9.60457 3.89543 10.5 5 10.5C5.88213 10.5 6.63088 9.9289 6.89667 9.13626ZM6.89667 9.13626L8.88585 10.2199M11.9 6C13.0046 6 13.9 5.10457 13.9 4C13.9 2.89543 13.0046 2 11.9 2C10.7954 2 9.9 2.89543 9.9 4C9.9 5.10457 10.7954 6 11.9 6ZM11.9 6V8.5M11.9 8.5C10.617 8.5 9.49518 9.19037 8.88585 10.2199M11.9 8.5C13.183 8.5 14.3048 9.19037 14.9142 10.2199M16.9033 15.3637C16.8363 15.5636 16.8 15.7776 16.8 16C16.8 17.1046 17.6954 18 18.8 18C19.9046 18 20.8 17.1046 20.8 16C20.8 14.8954 19.9046 14 18.8 14C17.9179 14 17.1691 14.5711 16.9033 15.3637ZM16.9033 15.3637L14.666 14.1449M6.89667 15.3637C6.96369 15.5636 7 15.7776 7 16C7 17.1046 6.10457 18 5 18C3.89543 18 3 17.1046 3 16C3 14.8954 3.89543 14 5 14C5.88213 14 6.63088 14.5711 6.89667 15.3637ZM6.89667 15.3637L9.13403 14.1449M11.9 18C13.0046 18 13.9 18.8954 13.9 20C13.9 21.1046 13.0046 22 11.9 22C10.7954 22 9.9 21.1046 9.9 20C9.9 18.8954 10.7954 18 11.9 18ZM11.9 18V15.5M11.9 15.5C10.7752 15.5 9.77435 14.9694 9.13403 14.1449M11.9 15.5C13.0248 15.5 14.0257 14.9694 14.666 14.1449M8.88585 10.2199C8.57717 10.7415 8.4 11.35 8.4 12C8.4 12.8082 8.67394 13.5524 9.13403 14.1449M14.666 14.1449C15.1261 13.5524 15.4 12.8082 15.4 12C15.4 11.35 15.2228 10.7415 14.9142 10.2199",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgHub.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgHub"
};
var _default = exports.default = SvgHub;