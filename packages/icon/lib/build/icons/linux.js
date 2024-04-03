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
var SvgLinux = function SvgLinux(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/linux"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.71149 3.81881C8.74617 2.3858 10.2822 2.05036 11.7922 2.00389L11.8753 2.00357C11.9174 2.00337 11.9608 2.00317 12 2.00317L12.0976 2.00346C12.1319 2.00361 12.1672 2.00377 12.2078 2.00377C13.7177 2.05022 15.2537 2.38576 16.2884 3.81881C17.2089 5.09368 17.1718 6.26535 17.1509 6.92464C17.1462 7.07454 17.1423 7.19795 17.1507 7.29006C17.1655 7.45341 17.5401 8.18764 18.0205 9.12938C19.0028 11.0546 20.4274 13.847 20.1253 14.4019C20.0084 14.6167 19.7038 14.572 19.4091 14.5287C19.0705 14.4789 18.745 14.4311 18.7329 14.7817C18.7311 14.8361 18.737 14.9313 18.7451 15.0601C18.8344 16.4818 19.1808 21.9968 12.0582 21.9968L12.0403 21.9968L11.9998 21.9968H11.9419C4.81924 21.9968 5.16554 16.4818 5.25481 15.0601C5.26289 14.9313 5.26887 14.8361 5.267 14.7817C5.25491 14.4311 4.92946 14.4789 4.59081 14.5287C4.29617 14.572 3.99154 14.6167 3.87459 14.4019C3.57253 13.847 4.99717 11.0546 5.97938 9.12938C6.45983 8.18765 6.83442 7.45341 6.84927 7.29006C6.85765 7.19795 6.85374 7.07454 6.84899 6.92464C6.82811 6.26535 6.791 5.09368 7.71149 3.81881ZM10.2121 6.31911C10.2121 5.90839 9.87912 5.57544 9.4684 5.57544C9.05768 5.57544 8.72473 5.90839 8.72473 6.31911C8.72473 6.72983 9.05768 7.06278 9.4684 7.06278C9.87912 7.06278 10.2121 6.72983 10.2121 6.31911ZM14.5315 5.57544C14.9422 5.57544 15.2752 5.90839 15.2752 6.31911C15.2752 6.72983 14.9422 7.06278 14.5315 7.06278C14.1208 7.06278 13.7878 6.72983 13.7878 6.31911C13.7878 5.90839 14.1208 5.57544 14.5315 5.57544ZM10.8745 9.74564C10.2211 9.36886 9.47163 8.93661 8.99075 8.95209C8.96342 8.95297 8.93704 8.95527 8.91151 8.95914C8.43347 9.03152 8.46704 9.48133 8.50743 10.0227C8.53606 10.4065 8.56814 10.8363 8.42373 11.2103C7.54757 13.4792 6.37019 16.994 7.6269 19.04C8.01759 19.676 8.92527 20.7676 11.7967 20.8037C11.8196 20.8039 11.8423 20.8041 11.865 20.8043C11.9095 20.8046 11.9541 20.805 11.9999 20.8051C12.0454 20.805 12.0896 20.8046 12.1338 20.8043C12.1568 20.8041 12.1798 20.8039 12.203 20.8037C15.0746 20.7677 15.9824 19.6761 16.3731 19.04C17.6298 16.994 16.4524 13.4792 15.5762 11.2103C15.4318 10.8363 15.4639 10.4065 15.4925 10.0227C15.5329 9.48133 15.5665 9.03152 15.0885 8.95914C14.6138 8.88726 13.8159 9.3474 13.1255 9.7456C12.7409 9.96739 12.3897 10.17 12.1462 10.2507C12.1259 10.2561 12.109 10.2614 12.0939 10.2662C12.06 10.2769 12.035 10.2848 11.9999 10.2848C11.9652 10.2848 11.9423 10.2776 11.9087 10.267C11.8933 10.2621 11.8757 10.2566 11.8537 10.2507C11.6102 10.1699 11.259 9.96739 10.8745 9.74564Z",
    fill: "currentColor"
  })));
};
SvgLinux.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgLinux"
};
var _default = exports.default = SvgLinux;