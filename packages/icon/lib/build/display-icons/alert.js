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
var SvgAlert = function SvgAlert(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "alert"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill-background",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.7757 2.07368L35.2021 29.9986C35.5551 30.5986 35.1225 31.3549 34.4264 31.3549H1.57355C0.877472 31.3549 0.444882 30.5986 0.797805 29.9986L17.2242 2.07368C17.5722 1.4821 18.4277 1.4821 18.7757 2.07368Z",
    fill: "#FFC21A"
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill-foreground",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 11.63C18.6213 11.63 19.125 12.1337 19.125 12.755V20.255C19.125 20.8763 18.6213 21.38 18 21.38C17.3787 21.38 16.875 20.8763 16.875 20.255V12.755C16.875 12.1337 17.3787 11.63 18 11.63ZM18 24.38C18.6213 24.38 19.125 24.8836 19.125 25.505V25.6716C19.125 26.2929 18.6213 26.7966 18 26.7966C17.3787 26.7966 16.875 26.2929 16.875 25.6716V25.505C16.875 24.8836 17.3787 24.38 18 24.38Z",
    fill: "black"
  })));
};
SvgAlert.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgAlert"
};
var _default = exports.default = SvgAlert;