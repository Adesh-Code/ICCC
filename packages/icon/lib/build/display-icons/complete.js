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
var SvgComplete = function SvgComplete(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "complete"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill-background",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.625 33.75C26.5306 33.75 33.75 26.5306 33.75 17.625C33.75 8.71941 26.5306 1.5 17.625 1.5C8.71941 1.5 1.5 8.71941 1.5 17.625C1.5 26.5306 8.71941 33.75 17.625 33.75Z",
    fill: "#2BC275"
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill-foreground",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.7823 12.4831C24.254 12.8875 24.3087 13.5977 23.9043 14.0694L16.7684 22.3947C16.5683 22.6281 16.2814 22.7695 15.9743 22.7859C15.6673 22.8024 15.3669 22.6924 15.1431 22.4817L11.5255 19.0759C11.0732 18.65 11.0517 17.938 11.4776 17.4856C11.9035 17.0332 12.6155 17.0118 13.0679 17.4377L15.8272 20.0355L22.196 12.6051C22.6003 12.1334 23.3106 12.0788 23.7823 12.4831Z",
    fill: "black"
  })));
};
SvgComplete.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgComplete"
};
var _default = exports.default = SvgComplete;