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
var SvgTiktok = function SvgTiktok(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.0958 5.79885C19.8677 5.76158 18.7548 5.1738 17.9146 4.38782C17.4576 3.95097 17.0953 3.42478 16.8502 2.84198C16.6051 2.25917 16.4825 1.63219 16.4901 1H13.0717V14.1701C13.0717 16.3214 11.7827 17.5885 10.1921 17.5885C9.77037 17.5949 9.35238 17.5086 8.96768 17.3357C8.58298 17.1628 8.24095 16.9075 7.96579 16.5878C7.69062 16.2682 7.48903 15.892 7.37527 15.4858C7.26152 15.0797 7.23837 14.6535 7.30746 14.2374C7.37656 13.8213 7.53621 13.4255 7.77513 13.0779C8.01405 12.7304 8.32641 12.4395 8.69012 12.2259C9.05383 12.0124 9.46001 11.8813 9.87995 11.842C10.2999 11.8027 10.7233 11.8562 11.1204 11.9986V8.51927C10.8155 8.45276 10.5042 8.41981 10.1921 8.42102C8.94829 8.42135 7.73252 8.79047 6.69848 9.4817C5.66443 10.1729 4.85856 11.1552 4.38274 12.3044C3.90691 13.4536 3.7825 14.7181 4.02523 15.9379C4.26797 17.1578 4.86695 18.2783 5.74645 19.1578C6.62595 20.0373 7.74647 20.6363 8.96636 20.8791C10.1862 21.1218 11.4507 20.9974 12.5999 20.5216C13.7491 20.0457 14.7314 19.2399 15.4226 18.2058C16.1138 17.1718 16.4829 15.956 16.4833 14.7122V7.62319C17.8079 8.5396 19.39 8.97831 21.0806 9.00372L21.0958 5.79885Z",
    fill: "currentColor"
  }));
};
SvgTiktok.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgTiktok"
};
var _default = exports.default = SvgTiktok;