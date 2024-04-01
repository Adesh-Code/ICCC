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
var SvgCancel = function SvgCancel(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "cancel"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill-background",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 34.13C26.9056 34.13 34.125 26.9106 34.125 18.005C34.125 9.09941 26.9056 1.88 18 1.88C9.09441 1.88 1.875 9.09941 1.875 18.005C1.875 26.9106 9.09441 34.13 18 34.13Z",
    fill: "#666666"
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill-foreground",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.7045 12.7045C13.1438 12.2652 13.8562 12.2652 14.2955 12.7045L18 16.409L21.7045 12.7045C22.1438 12.2652 22.8562 12.2652 23.2955 12.7045C23.7348 13.1438 23.7348 13.8562 23.2955 14.2955L19.591 18L23.2955 21.7045C23.7348 22.1438 23.7348 22.8562 23.2955 23.2955C22.8562 23.7348 22.1438 23.7348 21.7045 23.2955L18 19.591L14.2955 23.2955C13.8562 23.7348 13.1438 23.7348 12.7045 23.2955C12.2652 22.8562 12.2652 22.1438 12.7045 21.7045L16.409 18L12.7045 14.2955C12.2652 13.8562 12.2652 13.1438 12.7045 12.7045Z",
    fill: "white"
  })));
};
SvgCancel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgCancel"
};
var _default = exports.default = SvgCancel;