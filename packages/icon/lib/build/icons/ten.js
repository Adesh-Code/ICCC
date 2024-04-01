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
var SvgTen = function SvgTen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/ten"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "stroke",
    cx: 12,
    cy: 12,
    r: 10,
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.18457 14.8099V8.14325H8.15978L6 9.39945L6.50689 10.303L7.84022 9.64187V14.8099H6.26446V15.8567H7.84022H10.5399V14.8099H9.18457Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.4029 16C16.155 16 17.1687 14.9642 17.1687 13.3223V10.7218C17.1687 9.02479 16.155 8 14.4029 8C12.5847 8 11.5489 9.02479 11.5489 10.7218V13.3223C11.5489 14.9642 12.5847 16 14.4029 16ZM14.4029 14.9201C13.4883 14.9201 12.9373 14.3912 12.9373 13.3333V10.6997C12.9373 9.58678 13.4883 9.04683 14.4029 9.04683C15.2293 9.04683 15.7913 9.58678 15.7913 10.6997V13.3333C15.7913 14.3912 15.2293 14.9201 14.4029 14.9201Z",
    fill: "currentColor"
  }))));
};
SvgTen.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgTen"
};
var _default = exports.default = SvgTen;