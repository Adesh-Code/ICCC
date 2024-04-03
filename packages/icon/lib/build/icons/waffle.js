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
var SvgWaffle = function SvgWaffle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "navigation/waffle"
  }, /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.7 2H2V5.7H5.7V2Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.83 2H10.13V5.7H13.83V2Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2H18.3V5.7H22V2Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.7 10.08H2V13.78H5.7V10.08Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.83 10.08H10.13V13.78H13.83V10.08Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 10.08H18.3V13.78H22V10.08Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.7 18.3H2V22H5.7V18.3Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.83 18.3H10.13V22H13.83V18.3Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 18.3H18.3V22H22V18.3Z",
    fill: "currentColor"
  }))));
};
SvgWaffle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgWaffle"
};
var _default = exports.default = SvgWaffle;