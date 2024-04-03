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
var SvgImdb = function SvgImdb(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2 15.5H4.08333V8H2V15.5Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.53022 8L8.06395 11.5035L7.77425 9.59793C7.69025 8.98754 7.60969 8.4549 7.53255 8H4.91667V15.5H6.68401L6.69087 10.5474L7.43484 15.5H8.69307L9.39932 10.4382L9.40446 15.5H11.1667V8H8.53022Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15.5V8H15.2519C15.9872 8 16.5833 8.59164 16.5833 9.32359V14.1764C16.5833 14.9074 15.9882 15.5 15.2519 15.5H12ZM14.4301 9.3498C14.3475 9.30514 14.1894 9.28363 13.9594 9.28363V14.2048C14.263 14.2048 14.4499 14.1502 14.5199 14.0361C14.59 13.9236 14.6259 13.6192 14.6259 13.1197V10.2116C14.6259 9.87252 14.6133 9.65582 14.59 9.55988C14.5666 9.46394 14.5145 9.39446 14.4301 9.3498Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.5125 9.87786H20.6456C21.3936 9.87786 22 10.4636 22 11.1854V14.1925C22 14.9146 21.3938 15.5 20.6456 15.5H20.5125C20.0548 15.5 19.6501 15.2807 19.4049 14.9451L19.285 15.4037H17.4167V8H19.4101V10.4086C19.6677 10.0876 20.0646 9.87786 20.5125 9.87786ZM20.0857 13.5351V11.7579C20.0857 11.4643 20.0668 11.2716 20.0275 11.1829C19.9883 11.0942 19.8315 11.0372 19.7215 11.0372C19.6116 11.0372 19.442 11.0835 19.409 11.1615V14.1698C19.4467 14.2554 19.6084 14.3031 19.7215 14.3031C19.8346 14.3031 19.9993 14.257 20.0338 14.1698C20.0684 14.0826 20.0857 13.87 20.0857 13.5351Z",
    fill: "currentColor"
  }));
};
SvgImdb.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgImdb"
};
var _default = exports.default = SvgImdb;