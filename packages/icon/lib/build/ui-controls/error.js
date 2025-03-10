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
var SvgError = function SvgError(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 16 16",
    fill: "inherit",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "error"
  }, /*#__PURE__*/React.createElement("g", {
    id: "group"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill-background",
    d: "M1.70711 7.29289L7.29289 1.70711C7.68342 1.31658 8.31658 1.31658 8.70711 1.70711L14.2929 7.29289C14.6834 7.68342 14.6834 8.31658 14.2929 8.70711L8.70711 14.2929C8.31658 14.6834 7.68342 14.6834 7.29289 14.2929L1.70711 8.70711C1.31658 8.31658 1.31658 7.68342 1.70711 7.29289Z",
    fill: "inherit"
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill-foreground",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.75 4.5C8.75 4.08579 8.41421 3.75 8 3.75C7.58579 3.75 7.25 4.08579 7.25 4.5V8.5C7.25 8.91421 7.58579 9.25 8 9.25C8.41421 9.25 8.75 8.91421 8.75 8.5V4.5ZM8.75 11C8.75 10.5858 8.41421 10.25 8 10.25C7.58579 10.25 7.25 10.5858 7.25 11V11.125C7.25 11.5392 7.58579 11.875 8 11.875C8.41421 11.875 8.75 11.5392 8.75 11.125L8.75 11Z",
    fill: "currentColor"
  }))));
};
SvgError.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgError"
};
var _default = exports.default = SvgError;