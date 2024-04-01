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
var SvgZhihuCircle = function SvgZhihuCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.8106 11.3569H11.9687C12.0498 11.3564 12.1303 11.3718 12.2055 11.4024C12.2807 11.433 12.3491 11.4782 12.4067 11.5353C12.4641 11.5918 12.5095 11.6593 12.5404 11.7337C12.5712 11.8081 12.5869 11.888 12.5865 11.9685V12.6287H9.71084C9.61147 13.484 9.43073 14.3278 9.17108 15.1488C8.88241 16.0707 8.28337 17.2861 7.61446 17.9087C6.50843 18.9348 5 18.3685 5 18.3685C5.53616 17.9239 6.04262 17.4446 6.51614 16.9338C7.15038 16.182 7.64228 15.3208 7.96771 14.3926C8.15424 13.8213 8.27991 13.2318 8.34265 12.6341H5.19711C5.19721 12.466 5.23062 12.2997 5.29538 12.1447C5.36015 11.9897 5.45501 11.8491 5.57446 11.7309C5.81687 11.4914 6.14458 11.3574 6.48675 11.3574H8.47229C8.47587 11.2962 8.48004 11.2349 8.48422 11.1732C8.49578 11.003 8.50747 10.8307 8.50747 10.6538V8.00321H7.38265L7.33928 8.14779C7.15855 8.81333 6.88867 9.2514 6.3494 9.53718C5.97166 9.72478 5.55665 9.82524 5.13494 9.83116C5.13494 9.83116 5.6959 8.69815 5.92819 8.05429C6.00006 7.86211 6.08855 7.60802 6.18924 7.31891L6.18925 7.31888L6.18929 7.31877L6.18931 7.3187C6.29995 7.00103 6.42531 6.64108 6.55952 6.27453C6.78072 5.66538 6.94554 5.52947 7.22024 5.3367C7.56528 5.1103 7.97051 4.99307 8.38313 5.00032C8.38313 5.00032 7.95952 6.20803 7.82747 6.60321C7.81511 6.63765 7.80274 6.67654 7.79038 6.71543L7.79036 6.71551L7.78699 6.7261H11.6289C11.8035 6.72594 11.971 6.7945 12.0954 6.91694C12.1567 6.97719 12.2054 7.04895 12.2388 7.1281C12.2722 7.20725 12.2897 7.29223 12.2901 7.37815V8.00369H9.8294V10.6543C9.82807 10.7661 9.82398 10.8758 9.81995 10.9837V10.9838V10.9838V10.9838V10.9838L9.81995 10.9838C9.81523 11.1104 9.8106 11.2345 9.8106 11.3569ZM13.0641 6.7261H19V17.0191H16.6795L14.7128 18.2586L14.5186 17.0191H13.0641V6.7261ZM15.3359 16.4606L16.4906 15.7333L17.6593 15.7338V8.00369H14.3918V15.7338H15.2227L15.3359 16.4606ZM10.4313 13.9998L9.31711 14.7184L11.7451 18.3126C11.9125 17.9771 12.022 17.6157 12.0689 17.2437C12.1501 16.8905 12.1022 16.5199 11.934 16.1989L10.4313 13.9998Z",
    fill: "currentColor"
  }));
};
SvgZhihuCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgZhihuCircle"
};
var _default = exports.default = SvgZhihuCircle;