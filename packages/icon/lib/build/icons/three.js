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
var SvgThree = function SvgThree(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/three"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "stroke",
    cx: 12,
    cy: 12,
    r: 10,
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M11.7879 16C13.4408 16 14.6529 15.0744 14.6529 13.8402V13.3444C14.6529 12.3967 13.7273 11.8127 13.0661 11.7025C13.7273 11.5482 14.3884 11.0083 14.3884 10.314V9.8843C14.3884 8.74931 13.2534 8 11.832 8C10.6088 8 9.77135 8.47383 9.11019 9.12397L9.84848 9.86226C10.4105 9.34435 10.9835 9.03581 11.7218 9.03581C12.427 9.03581 13.0441 9.30028 13.0441 10.0386V10.292C13.0441 11.0744 12.2837 11.2837 11.6997 11.2837H10.9835V12.2755H11.6997C12.2837 12.2755 13.2755 12.4959 13.2755 13.4545V13.73C13.2755 14.6116 12.5592 14.9421 11.7107 14.9421C10.8733 14.9421 10.2672 14.5675 9.79339 14.0606L9 14.8209C9.58402 15.4821 10.3664 16 11.7879 16Z",
    fill: "currentColor"
  })));
};
SvgThree.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgThree"
};
var _default = exports.default = SvgThree;