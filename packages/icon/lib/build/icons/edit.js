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
var SvgEdit = function SvgEdit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/edit"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M15 5.00139L16.69 3.31C16.8521 3.15118 17.0572 3.04339 17.28 3H17.55H17.63C19.4912 3 21 4.5088 21 6.37V6.45C21.005 6.53993 21.005 6.63007 21 6.72C20.951 6.94507 20.8361 7.15046 20.67 7.31L19 8.98138M15 5.00139L4.55 15.46L3 21L8.54 19.45L19 8.98138M15 5.00139L19 8.98138M4.59 15.5L8.5 19.41",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  })));
};
SvgEdit.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgEdit"
};
var _default = exports.default = SvgEdit;