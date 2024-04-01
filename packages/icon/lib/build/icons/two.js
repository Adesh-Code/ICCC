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
var SvgTwo = function SvgTwo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/two"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "stroke",
    cx: 12,
    cy: 12,
    r: 10,
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M10.5596 14.8555C10.582 14.2609 10.7952 13.8008 11.6704 13.2286L12.5344 12.6676C13.7461 11.8822 14.2174 11.1978 14.2174 10.4236V10.0757C14.2174 9.02104 13.2861 8 11.5919 8C10.5484 8 9.72931 8.34783 9 8.92006L9.62833 9.77279C10.3015 9.30154 10.8289 9.09958 11.5021 9.09958C12.4334 9.09958 12.8036 9.64937 12.8036 10.1206V10.3899C12.8036 10.906 12.5344 11.1978 11.8275 11.6802L10.7504 12.4208C9.84151 13.0491 9.1683 13.8121 9.1683 15.2034V16H14.2286V14.8555H10.5596Z",
    fill: "currentColor"
  })));
};
SvgTwo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgTwo"
};
var _default = exports.default = SvgTwo;