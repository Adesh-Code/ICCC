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
var SvgInfo = function SvgInfo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "info"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill-background",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.005 34.13C26.9106 34.13 34.13 26.9106 34.13 18.005C34.13 9.09941 26.9106 1.88 18.005 1.88C9.09941 1.88 1.88 9.09941 1.88 18.005C1.88 26.9106 9.09941 34.13 18.005 34.13Z",
    fill: "#5F60FF"
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill-foreground",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 25.6666C17.3787 25.6666 16.875 25.1629 16.875 24.5416L16.875 17.0416C16.875 16.4203 17.3787 15.9166 18 15.9166C18.6213 15.9166 19.125 16.4203 19.125 17.0416L19.125 24.5416C19.125 25.1629 18.6213 25.6666 18 25.6666ZM18 12.9167C17.3787 12.9167 16.875 12.413 16.875 11.7917L16.875 11.625C16.875 11.0037 17.3787 10.5 18 10.5C18.6213 10.5 19.125 11.0037 19.125 11.625L19.125 11.7917C19.125 12.413 18.6213 12.9167 18 12.9167Z",
    fill: "white"
  })));
};
SvgInfo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgInfo"
};
var _default = exports.default = SvgInfo;