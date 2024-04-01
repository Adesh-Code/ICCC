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
var SvgAutodeskAssistant = function SvgAutodeskAssistant(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M1.0874 13.3424L14.8566 4.73842M1.42189 18.0475L22.3991 4.93953M20.176 11.2511L22.2819 9.93519M15.3594 19.0246L22.9122 14.3051M22.505 19.2575L22.4982 19.2618",
    stroke: "currentColor",
    strokeWidth: 2.1,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "mask0_6205_27",
    style: {
      maskType: "alpha"
    },
    maskUnits: "userSpaceOnUse",
    x: 6,
    y: 9,
    width: 16,
    height: 12
  }, /*#__PURE__*/React.createElement("rect", {
    x: 6.41577,
    y: 18.4524,
    width: 16.4018,
    height: 2.3112,
    transform: "rotate(-32 6.41577 18.4524)",
    fill: "url(#paint0_linear_6205_27)"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0_6205_27)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.99463 18.8624L20.1761 11.251",
    stroke: "currentColor",
    strokeWidth: 2.1,
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_6205_27",
    x1: 21.196,
    y1: 19.49,
    x2: 18.6238,
    y2: 24.9813,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopOpacity: 0.6
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.5,
    stopOpacity: 0.25
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopOpacity: 0.1
  }))));
};
SvgAutodeskAssistant.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgAutodeskAssistant"
};
var _default = exports.default = SvgAutodeskAssistant;