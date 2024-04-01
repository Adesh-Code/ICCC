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
var SvgDiscord = function SvgDiscord(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.9556 5.27349C17.6518 4.67718 16.2671 4.24257 14.8218 4C14.6399 4.31332 14.4377 4.73781 14.2962 5.07135C12.759 4.84899 11.2328 4.84899 9.71672 5.07135C9.57521 4.73781 9.36295 4.31332 9.19112 4C7.73573 4.24257 6.35105 4.67718 5.05634 5.27349C2.4386 9.13439 1.73111 12.9043 2.08485 16.6237C3.82327 17.8871 5.50106 18.6553 7.14953 19.1607C7.55382 18.6148 7.91768 18.0286 8.231 17.4121C7.63468 17.1897 7.06868 16.9168 6.5229 16.5934C6.6644 16.4924 6.8059 16.3812 6.93729 16.27C10.2322 17.776 13.801 17.776 17.0555 16.27C17.197 16.3812 17.3284 16.4924 17.4699 16.5934C16.9241 16.9168 16.3581 17.1897 15.7618 17.4121C16.0751 18.0286 16.439 18.6148 16.8432 19.1607C18.4907 18.6553 20.1786 17.8871 21.9079 16.6237C22.3425 12.3181 21.2196 8.57854 18.9556 5.27349ZM8.68581 14.3294C7.6953 14.3294 6.88674 13.4299 6.88674 12.3283C6.88674 11.2266 7.67509 10.327 8.68581 10.327C9.68639 10.327 10.505 11.2266 10.4848 12.3283C10.4848 13.4299 9.68639 14.3294 8.68581 14.3294ZM15.3272 14.3294C14.3367 14.3294 13.5271 13.4299 13.5271 12.3283C13.5271 11.2266 14.3164 10.327 15.3272 10.327C16.3278 10.327 17.1464 11.2266 17.1262 12.3283C17.1262 13.4299 16.3379 14.3294 15.3272 14.3294Z",
    fill: "currentColor"
  }));
};
SvgDiscord.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgDiscord"
};
var _default = exports.default = SvgDiscord;