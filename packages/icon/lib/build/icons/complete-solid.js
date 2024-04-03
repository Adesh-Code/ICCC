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
var SvgCompleteSolid = function SvgCompleteSolid(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/complete-solid"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.75 22.5C17.6871 22.5 22.5 17.6871 22.5 11.75C22.5 5.81294 17.6871 1 11.75 1C5.81294 1 1 5.81294 1 11.75C1 17.6871 5.81294 22.5 11.75 22.5ZM15.7384 9.48809C16.008 9.1736 15.9716 8.70012 15.6571 8.43056C15.3426 8.16099 14.8691 8.19741 14.5995 8.51191L10.3536 13.4654L8.51411 11.7336C8.21252 11.4496 7.73786 11.464 7.45393 11.7655C7.17 12.0671 7.18431 12.5418 7.48589 12.8257L9.89758 15.0962C10.0468 15.2368 10.2471 15.3101 10.4518 15.2991C10.6564 15.2882 10.8477 15.1939 10.9811 15.0383L15.7384 9.48809Z",
    fill: "currentColor"
  })));
};
SvgCompleteSolid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgCompleteSolid"
};
var _default = exports.default = SvgCompleteSolid;