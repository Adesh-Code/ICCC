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
var SvgMac = function SvgMac(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/mac"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M17.6573 20.1901C17.2099 20.6286 16.6292 20.9054 16.0068 20.9768C15.3845 21.0482 14.7562 20.9102 14.2211 20.5844C13.655 20.3271 13.0403 20.194 12.4185 20.194C11.7966 20.194 11.182 20.3271 10.6159 20.5844C9.01985 21.2792 8.16549 21.0726 7.20786 20.1901C6.74134 19.7376 6.32003 19.2409 5.94984 18.7067C5.58637 18.1984 5.25404 17.6686 4.95466 17.1201C4.40618 16.0908 4.01083 14.9869 3.7811 13.8435C3.56689 12.8185 3.52563 11.765 3.65904 10.7265C3.78104 9.7992 4.10124 8.90903 4.59789 8.1165C5.0556 7.36917 5.70359 6.7568 6.47559 6.34206C7.0764 6.00431 7.74617 5.80766 8.4342 5.76699C9.12224 5.72633 9.81049 5.84272 10.4469 6.10734L10.8037 6.2388C11.0384 6.32329 11.2731 6.41717 11.5172 6.49228C11.7148 6.58153 11.9295 6.62638 12.1462 6.6237C13.4606 6.36082 14.7186 5.59097 16.1175 5.68485C16.8541 5.7118 17.575 5.90583 18.2255 6.25226C18.8761 6.5987 19.4394 7.08849 19.8729 7.6846C19.1482 8.0944 18.5541 8.70088 18.1595 9.43397C17.7648 10.1671 17.5856 10.9969 17.6425 11.8275C17.6995 12.6582 17.9903 13.4557 18.4813 14.1281C18.9724 14.8005 19.6436 15.3202 20.4175 15.6273C19.8758 17.3472 18.9292 18.912 17.6573 20.1901ZM12.0242 5.69425C11.9839 4.52637 12.3942 3.3877 13.1701 2.51391C13.946 1.64012 15.0282 1.09809 16.1927 1C16.5494 3.82594 13.6202 5.9759 12.0618 5.69425H12.0242Z",
    fill: "currentColor"
  })));
};
SvgMac.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgMac"
};
var _default = exports.default = SvgMac;