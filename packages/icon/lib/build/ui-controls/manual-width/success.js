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
var SvgSuccess = function SvgSuccess(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 14 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "manual-width/success"
  }, /*#__PURE__*/React.createElement("g", {
    id: "group"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill-background",
    d: "M7.00001 1.75C3.54822 1.75 0.75 4.54822 0.75 8.00001C0.75 11.4518 3.54822 14.25 7.00001 14.25C10.4518 14.25 13.25 11.4518 13.25 8.00001C13.25 4.54822 10.4518 1.75 7.00001 1.75Z",
    fill: "#2BC275"
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill-foreground",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.95485 5.58047C10.2693 5.85004 10.3058 6.32352 10.0362 6.63801L6.86467 10.3381C6.73127 10.4938 6.53999 10.588 6.3353 10.599C6.13062 10.6099 5.93037 10.5366 5.78112 10.3961L4.17333 8.88242C3.87175 8.59848 3.85744 8.12383 4.14137 7.82224C4.42531 7.52065 4.89996 7.50634 5.20155 7.79028L6.23719 8.7653L8.89732 5.66182C9.16688 5.34733 9.64036 5.31091 9.95485 5.58047Z",
    fill: "black"
  }))));
};
SvgSuccess.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgSuccess"
};
var _default = exports.default = SvgSuccess;