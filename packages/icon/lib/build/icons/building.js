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
var SvgBuilding = function SvgBuilding(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/building"
  }, /*#__PURE__*/React.createElement("g", {
    id: "stroke"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 2H5V22H19V2Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 18H15V22H9V18Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 6H14V7H15V6Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 6H9V7H10V6Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 10H14V11H15V10Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 10H9V11H10V10Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 14H14V15H15V14Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 14H9V15H10V14Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }))));
};
SvgBuilding.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgBuilding"
};
var _default = exports.default = SvgBuilding;