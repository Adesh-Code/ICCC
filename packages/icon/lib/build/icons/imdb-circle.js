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
var SvgImdbCircle = function SvgImdbCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6.45833 14.25H5V9H6.45833V14.25ZM9.24477 11.4525L9.57115 9H11.4167V14.25H10.1831L10.1795 10.7068L9.68515 14.25H8.80439L8.28361 10.7832L8.27881 14.25H7.04167V9H8.87278C8.92678 9.31843 8.98318 9.69128 9.04198 10.1185L9.24477 11.4525ZM12 14.25V9H14.2763C14.7911 9 15.2083 9.41415 15.2083 9.92651V13.3235C15.2083 13.8352 14.7917 14.25 14.2763 14.25H12ZM13.7011 9.94486C13.6432 9.9136 13.5326 9.89854 13.3716 9.89854V13.3434C13.5841 13.3434 13.7149 13.3051 13.7639 13.2252C13.813 13.1465 13.8381 12.9334 13.8381 12.5838V10.5481C13.8381 10.3108 13.8293 10.1591 13.813 10.0919C13.7966 10.0248 13.7602 9.97612 13.7011 9.94486ZM18.0519 10.3145H17.9587C17.6453 10.3145 17.3674 10.4613 17.1871 10.686V9H15.7917V14.1826H17.0995L17.1835 13.8616C17.3551 14.0965 17.6383 14.25 17.9587 14.25H18.0519C18.5757 14.25 19 13.8402 19 13.3347V11.2298C19 10.7245 18.5755 10.3145 18.0519 10.3145ZM17.66 11.6306V12.8746C17.66 13.109 17.6479 13.2578 17.6237 13.3188C17.5995 13.3799 17.4842 13.4122 17.4051 13.4122C17.3259 13.4122 17.2127 13.3788 17.1863 13.3188V11.2131C17.2094 11.1585 17.3281 11.1261 17.4051 11.1261C17.482 11.1261 17.5918 11.1659 17.6193 11.228C17.6468 11.2901 17.66 11.425 17.66 11.6306Z",
    fill: "currentColor"
  }));
};
SvgImdbCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgImdbCircle"
};
var _default = exports.default = SvgImdbCircle;