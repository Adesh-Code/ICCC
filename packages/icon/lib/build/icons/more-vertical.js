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
var SvgMoreVertical = function SvgMoreVertical(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "navigation/more-vertical"
  }, /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.75 12C13.75 12.9665 12.9665 13.75 12 13.75C11.0335 13.75 10.25 12.9665 10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.75 4C13.75 4.9665 12.9665 5.75 12 5.75C11.0335 5.75 10.25 4.9665 10.25 4C10.25 3.0335 11.0335 2.25 12 2.25C12.9665 2.25 13.75 3.0335 13.75 4Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.75 20C13.75 20.9665 12.9665 21.75 12 21.75C11.0335 21.75 10.25 20.9665 10.25 20C10.25 19.0335 11.0335 18.25 12 18.25C12.9665 18.25 13.75 19.0335 13.75 20Z",
    fill: "currentColor"
  }))));
};
SvgMoreVertical.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgMoreVertical"
};
var _default = exports.default = SvgMoreVertical;