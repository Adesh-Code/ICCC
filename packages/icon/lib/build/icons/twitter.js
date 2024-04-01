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
var SvgTwitter = function SvgTwitter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/twitter"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 5.87678C21.2482 6.20051 20.4531 6.41275 19.64 6.50678C20.4911 6.00696 21.131 5.2142 21.44 4.27678C20.6336 4.75684 19.7508 5.09508 18.83 5.27678C17.6819 4.07291 15.9225 3.67759 14.3698 4.27462C12.8171 4.87165 11.7758 6.34387 11.73 8.00678C11.7314 8.31664 11.7683 8.62532 11.84 8.92678C8.55895 8.77384 5.49297 7.24992 3.39 4.72678C3.03049 5.33251 2.83731 6.02244 2.83 6.72678C2.83346 8.08126 3.52215 9.34198 4.66 10.0768C4.00948 10.0575 3.37249 9.88631 2.8 9.57678V9.64678C2.78943 11.5987 4.17269 13.2805 6.09 13.6468C5.48583 13.8048 4.85439 13.8287 4.24 13.7168C4.79218 15.369 6.32813 16.4919 8.07 16.5168C6.60951 17.6168 4.82835 18.207 3 18.1968C2.66577 18.1967 2.33184 18.1767 2 18.1368C3.88291 19.3237 6.06422 19.9514 8.29 19.9468C11.3349 20.0084 14.2794 18.8576 16.4756 16.7477C18.6718 14.6378 19.9396 11.7417 20 8.69678V7.94678C20.7824 7.37884 21.4593 6.67825 22 5.87678Z",
    fill: "currentColor"
  })));
};
SvgTwitter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgTwitter"
};
var _default = exports.default = SvgTwitter;