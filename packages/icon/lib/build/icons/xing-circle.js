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
var SvgXingCircle = function SvgXingCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/xing-circle"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM7.13011 7.77002C7.07714 7.76518 7.0238 7.7736 6.97491 7.79456C6.92603 7.81551 6.88313 7.84832 6.85011 7.89001C6.82554 7.93799 6.81271 7.99111 6.81271 8.04501C6.81271 8.09891 6.82554 8.15204 6.85011 8.20001L8.22011 10.57L6.0701 14.35C6.04553 14.398 6.03271 14.4511 6.03271 14.505C6.03271 14.5589 6.04553 14.612 6.0701 14.66C6.09928 14.7046 6.13946 14.7409 6.18675 14.7654C6.23405 14.7899 6.28686 14.8018 6.3401 14.8H8.3401C8.45963 14.795 8.57517 14.7555 8.67276 14.6863C8.77035 14.6171 8.84583 14.5212 8.89011 14.41L11.0701 10.56L9.6801 8.14001C9.63361 8.02923 9.55595 7.93433 9.45653 7.86687C9.35711 7.79941 9.24023 7.76228 9.1201 7.76001L7.13011 7.77002ZM15.2798 5.11151C15.3761 5.04192 15.4913 5.00305 15.6101 5L17.6301 5.05C17.6838 5.04393 17.7381 5.05351 17.7864 5.07761C17.8348 5.1017 17.8751 5.13926 17.9026 5.18578C17.9301 5.23229 17.9435 5.28576 17.9413 5.33974C17.9391 5.39372 17.9213 5.44591 17.8901 5.49001L13.4201 13.4L16.2701 18.6C16.2994 18.6464 16.315 18.7001 16.315 18.755C16.315 18.8099 16.2994 18.8636 16.2701 18.91C16.2437 18.9542 16.2051 18.9899 16.1591 19.013C16.113 19.036 16.0613 19.0454 16.0101 19.04H14.0101C13.8899 19.0377 13.7731 19.0006 13.6737 18.9332C13.5742 18.8657 13.4966 18.7708 13.4501 18.66L10.5801 13.39L15.0701 5.39C15.1103 5.27816 15.1834 5.1811 15.2798 5.11151Z",
    fill: "currentColor"
  })));
};
SvgXingCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgXingCircle"
};
var _default = exports.default = SvgXingCircle;