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
var SvgAndroid = function SvgAndroid(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.0628 15.0632C16.8816 15.0633 16.7045 15.0096 16.5538 14.9089C16.4031 14.8083 16.2856 14.6652 16.2163 14.4978C16.1469 14.3304 16.1287 14.1462 16.164 13.9685C16.1994 13.7908 16.2866 13.6275 16.4147 13.4994C16.5428 13.3712 16.706 13.2839 16.8837 13.2485C17.0614 13.2132 17.2457 13.2313 17.4131 13.3006C17.5805 13.3699 17.7236 13.4873 17.8243 13.6379C17.925 13.7886 17.9788 13.9657 17.9788 14.1469C17.9785 14.3898 17.8819 14.6226 17.7102 14.7944C17.5385 14.9662 17.3057 15.0629 17.0628 15.0632ZM6.93719 15.0632C6.75599 15.0633 6.57885 15.0096 6.42817 14.9089C6.27749 14.8083 6.16004 14.6652 6.09066 14.4978C6.02129 14.3304 6.00311 14.1462 6.03843 13.9685C6.07374 13.7908 6.16097 13.6275 6.28907 13.4994C6.41718 13.3712 6.58041 13.2839 6.75812 13.2485C6.93583 13.2132 7.12004 13.2313 7.28746 13.3006C7.45488 13.3699 7.59799 13.4873 7.69869 13.6379C7.79938 13.7886 7.85315 13.9657 7.85318 14.1469C7.85296 14.3898 7.75639 14.6227 7.58467 14.7945C7.41294 14.9662 7.18009 15.0629 6.93719 15.0632ZM17.3913 9.54501L19.2221 6.37409C19.2471 6.33078 19.2634 6.28296 19.27 6.23336C19.2765 6.18376 19.2732 6.13336 19.2603 6.08503C19.2474 6.0367 19.2251 5.99138 19.1947 5.95167C19.1642 5.91196 19.1263 5.87864 19.083 5.8536C19.0396 5.82856 18.9918 5.8123 18.9422 5.80574C18.8926 5.79918 18.8422 5.80245 18.7939 5.81537C18.7456 5.82829 18.7003 5.85061 18.6605 5.88104C18.6208 5.91147 18.5875 5.94943 18.5625 5.99274L16.7086 9.20372C15.2909 8.55669 13.6987 8.1964 11.9998 8.1964C10.3009 8.1964 8.70893 8.5572 7.29126 9.20372L5.43753 5.99274C5.41252 5.94942 5.37923 5.91145 5.33955 5.88099C5.29987 5.85053 5.25458 5.82819 5.20626 5.81524C5.15795 5.80228 5.10755 5.79898 5.05796 5.8055C5.00836 5.81202 4.96054 5.82825 4.91721 5.85325C4.87389 5.87826 4.83592 5.91155 4.80546 5.95124C4.77501 5.99092 4.75266 6.03621 4.73971 6.08452C4.72676 6.13284 4.72345 6.18323 4.72997 6.23283C4.73649 6.28242 4.75272 6.33025 4.77773 6.37357L6.60867 9.54501C3.46485 11.2549 1.31454 14.4376 1 18.1979H23C22.6851 14.4376 20.535 11.2549 17.3913 9.54501Z",
    fill: "currentColor"
  }));
};
SvgAndroid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgAndroid"
};
var _default = exports.default = SvgAndroid;