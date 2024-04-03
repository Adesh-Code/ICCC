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
var SvgRedditCircle = function SvgRedditCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17.2148 10.5441C18.0144 10.5441 18.6707 11.1885 18.6707 12C18.6707 12.5966 18.3127 13.1098 17.8115 13.3365C17.8354 13.4797 17.8473 13.6348 17.8473 13.778C17.8473 16.0334 15.2339 17.8472 12.012 17.8472C8.79003 17.8472 6.17666 16.0215 6.17666 13.778C6.17666 13.6229 6.18859 13.4797 6.21246 13.3365C5.71127 13.1098 5.35327 12.6086 5.35327 12.0119C5.35327 11.2124 5.99766 10.5561 6.80912 10.5561C7.20291 10.5561 7.56091 10.7112 7.82344 10.9618C8.83776 10.2339 10.2339 9.76847 11.7853 9.72074L12.5251 6.23626C12.537 6.16466 12.5728 6.10499 12.6325 6.06919C12.6802 6.03339 12.7518 6.02146 12.8234 6.03339L15.2459 6.54652C15.4129 6.20046 15.7709 5.96179 16.1767 5.96179C16.7495 5.96179 17.2148 6.42719 17.2148 6.99998C17.2148 7.57277 16.7495 8.03816 16.1767 8.03816C15.6158 8.03816 15.1623 7.59664 15.1385 7.04771L12.9666 6.58232L12.2984 9.70881C13.8258 9.76847 15.1981 10.2339 16.2005 10.9499C16.4631 10.6993 16.8211 10.5441 17.2148 10.5441ZM9.70888 12C9.13609 12 8.67069 12.4654 8.67069 13.0382C8.67069 13.611 9.13609 14.0883 9.70888 14.0764C10.2817 14.0764 10.7471 13.611 10.7471 13.0382C10.7471 12.4654 10.2817 12 9.70888 12ZM12.012 16.5585C12.4058 16.5585 13.7662 16.5107 14.4822 15.7947C14.5776 15.6873 14.5776 15.5203 14.4822 15.4129C14.3748 15.3055 14.2077 15.3055 14.1003 15.4129C13.6588 15.8663 12.6922 16.0215 12.012 16.0215C11.3318 16.0215 10.3771 15.8663 9.92368 15.4129C9.81628 15.3055 9.64921 15.3055 9.54182 15.4129C9.43442 15.5203 9.43442 15.6873 9.54182 15.7947C10.2459 16.4988 11.6063 16.5585 12.012 16.5585ZM13.253 13.0501C13.253 13.6229 13.7184 14.0883 14.2912 14.0883C14.864 14.0883 15.3294 13.611 15.3294 13.0501C15.3294 12.4773 14.864 12.0119 14.2912 12.0119C13.7184 12.0119 13.253 12.4773 13.253 13.0501Z",
    fill: "currentColor"
  }));
};
SvgRedditCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgRedditCircle"
};
var _default = exports.default = SvgRedditCircle;