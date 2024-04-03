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
var SvgRedshiftCircle = function SvgRedshiftCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/redshift-circle"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM17.64 17.33L12.2 18.19L17.62 17.66V17.94L12.04 18.49L17.62 18.29V18.56L12.62 18.74L17.53 18.82C17.2109 18.9423 16.8717 19.0033 16.53 19H7.36V5H7.64V13.32L8.07 5H8.36L7.93 13.26L8.77 5H9.07L8.22 13.16L9.5 5H9.77L8.5 13.22L10.16 5H10.5L8.79 13.16L10.89 5H11.18L9.1 13.1L11.59 5H11.89L9.36 13.2L12.36 5H12.65L9.81001 12.9L13.02 5.04H13.32L10.1 12.83L13.65 5.17L13.92 5.23L10.34 13L14.29 5.35C14.39 5.35 14.49 5.41 14.57 5.45L10.5 13.26L14.92 5.6C15.0068 5.64017 15.0904 5.68697 15.17 5.74L10.69 13.51L15.5 6L15.71 6.18L11.11 13.43L15.99 6.43C16.0637 6.49369 16.1277 6.5678 16.18 6.65L11.23 13.72L16.43 7C16.43 7.08 16.53 7.18 16.57 7.28L11.57 13.76L16.68 7.67C16.68 7.77 16.74 7.88 16.76 8L11.76 14L16.82 8.4C16.8307 8.49303 16.8307 8.58697 16.82 8.68V8.79L11.5 14.65L16.87 9.34V9.73L11.5 15L16.85 10.24C16.8206 10.3992 16.7806 10.5562 16.73 10.71L11.66 15.23L14.5 13L14.64 13.26L11.39 15.86L14.74 13.47L14.87 13.73L11.03 16.45L15.03 13.98L15.17 14.24L11.29 16.63L15.29 14.51L15.43 14.77L11.59 16.77L15.5 15L15.64 15.26L11.27 17.26L15.79 15.6L15.91 15.87L11.33 17.56L16.07 16.17L16.2 16.42L11.76 17.71L16.36 16.71L16.58 16.94L11.81 18L17.03 17.17C17.1665 17.2095 17.3079 17.2297 17.45 17.23H17.64V17.33Z",
    fill: "currentColor"
  })));
};
SvgRedshiftCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgRedshiftCircle"
};
var _default = exports.default = SvgRedshiftCircle;