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
var SvgReddit = function SvgReddit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 11.0681C22 9.84946 21.0143 8.88172 19.8136 8.88172C19.2222 8.88172 18.6846 9.1147 18.2903 9.49104C16.7849 8.41577 14.724 7.71685 12.4301 7.62724L13.4337 2.9319L16.6953 3.63083C16.7312 4.4552 17.4122 5.11828 18.2545 5.11828C19.1147 5.11828 19.8136 4.41936 19.8136 3.55914C19.8136 2.69893 19.1147 2 18.2545 2C17.6452 2 17.1075 2.35842 16.8566 2.87814L13.2186 2.10753C13.1111 2.08961 13.0036 2.10753 12.9319 2.16129C12.8423 2.21505 12.7885 2.30466 12.7706 2.41219L11.6595 7.64516C9.32975 7.71685 7.23298 8.41577 5.70968 9.50896C5.31541 9.13262 4.77778 8.89964 4.18638 8.89964C2.96774 8.89964 2 9.8853 2 11.086C2 11.9821 2.53764 12.7348 3.29032 13.0753C3.25448 13.2903 3.23656 13.5054 3.23656 13.7384C3.23656 17.1075 7.16129 19.8495 12 19.8495C16.8387 19.8495 20.7634 17.1254 20.7634 13.7384C20.7634 13.5233 20.7455 13.2903 20.7097 13.0753C21.4624 12.7348 22 11.9642 22 11.0681V11.0681ZM6.98208 12.6272C6.98208 11.767 7.681 11.0681 8.54122 11.0681C9.40143 11.0681 10.1004 11.767 10.1004 12.6272C10.1004 13.4875 9.40143 14.1864 8.54122 14.1864C7.681 14.2043 6.98208 13.4875 6.98208 12.6272V12.6272ZM15.7097 16.767C14.6344 17.8423 12.5914 17.914 12 17.914C11.3907 17.914 9.34767 17.8244 8.29032 16.767C8.12903 16.6057 8.12903 16.3548 8.29032 16.1935C8.45161 16.0323 8.70251 16.0323 8.8638 16.1935C9.5448 16.8746 10.9785 17.1075 12 17.1075C13.0215 17.1075 14.4731 16.8746 15.1362 16.1935C15.2975 16.0323 15.5484 16.0323 15.7097 16.1935C15.853 16.3548 15.853 16.6057 15.7097 16.767ZM15.4229 14.2043C14.5627 14.2043 13.8638 13.5054 13.8638 12.6452C13.8638 11.7849 14.5627 11.086 15.4229 11.086C16.2832 11.086 16.9821 11.7849 16.9821 12.6452C16.9821 13.4875 16.2832 14.2043 15.4229 14.2043Z",
    fill: "currentColor"
  }));
};
SvgReddit.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgReddit"
};
var _default = exports.default = SvgReddit;