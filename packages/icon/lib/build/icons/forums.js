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
var SvgForums = function SvgForums(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/forums"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M6.89372 18.4452C6.89372 15.597 9.20261 13.2881 12.0508 13.2881C14.8989 13.2881 17.2078 15.597 17.2078 18.4452M1 14.7616C1 12.9306 2.48429 11.4463 4.31525 11.4463C5.33465 11.4463 6.24659 11.9064 6.85474 12.6303M23 14.7616C23 12.9306 21.5157 11.4463 19.6848 11.4463C18.6653 11.4463 17.7534 11.9064 17.1453 12.6303M15 8.03898C15 9.71736 13.6569 11.078 12 11.078C10.3431 11.078 9 9.71736 9 8.03898C9 6.3606 10.3431 5 12 5C13.6569 5 15 6.3606 15 8.03898ZM6 7.0625C6 8.20159 5.10457 9.125 4 9.125C2.89543 9.125 2 8.20159 2 7.0625C2 5.92341 2.89543 5 4 5C5.10457 5 6 5.92341 6 7.0625ZM22 7.0625C22 8.20159 21.1046 9.125 20 9.125C18.8954 9.125 18 8.20159 18 7.0625C18 5.92341 18.8954 5 20 5C21.1046 5 22 5.92341 22 7.0625Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgForums.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgForums"
};
var _default = exports.default = SvgForums;