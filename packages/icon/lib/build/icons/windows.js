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
var SvgWindows = function SvgWindows(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/windows"
  }, /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.2872 2.82L21.7999 2.02L22 2V11.32H11.3347V3.73C11.3347 3.58 11.3847 3.51 11.5348 3.51C12.6202 3.3599 13.7009 3.20049 14.7801 3.04129C15.2826 2.96717 15.785 2.89307 16.2872 2.82Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.9998 22.0002L11.3445 20.5002V12.6602H21.9998V22.0002Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12.6699V19.0999C2 19.1999 2 19.2399 2.13006 19.2499L3.20059 19.3899L5.91194 19.7599L9.98396 20.3299V12.6699H2Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.99373 11.3202H2.00977V4.83023L9.99373 3.74023V11.3202Z",
    fill: "currentColor"
  }))));
};
SvgWindows.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgWindows"
};
var _default = exports.default = SvgWindows;