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
    viewBox: "0 0 36 36",
    fill: "inherit",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "error"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill-background",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.7425 2.24244L33.7575 17.2575C34.1676 17.6676 34.1676 18.3324 33.7575 18.7424L18.7425 33.7575C18.3324 34.1676 17.6676 34.1676 17.2575 33.7575L2.24246 18.7424C1.83241 18.3324 1.83241 17.6676 2.24246 17.2575L17.2575 2.24244C17.6676 1.83239 18.3324 1.83239 18.7425 2.24244Z",
    fill: "inherit"
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill-foreground",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 10.875C18.6213 10.875 19.125 11.3787 19.125 12V19.5C19.125 20.1213 18.6213 20.625 18 20.625C17.3787 20.625 16.875 20.1213 16.875 19.5V12C16.875 11.3787 17.3787 10.875 18 10.875ZM18 23.625C18.6213 23.625 19.125 24.1286 19.125 24.75V24.9166C19.125 25.5379 18.6213 26.0416 18 26.0416C17.3787 26.0416 16.875 25.5379 16.875 24.9166V24.75C16.875 24.1286 17.3787 23.625 18 23.625Z",
    fill: "currentColor"
  })));
};
SvgError.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgError"
};
var _default = exports.default = SvgError;