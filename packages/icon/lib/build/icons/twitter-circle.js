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
var SvgTwitterCircle = function SvgTwitterCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/twitter-circle"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8078C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9989 9.34816 20.945 6.80524 19.0699 4.9301C17.1948 3.05497 14.6518 2.00106 12 2ZM17.42 9.8V10.12C17.42 13.44 14.88 17.28 10.26 17.28C8.89036 17.2799 7.54992 16.8841 6.4 16.14C6.6 16.16 6.8 16.18 7 16.18C8.13229 16.1837 9.23229 15.8029 10.12 15.1C9.59695 15.0913 9.08982 14.9187 8.67004 14.6065C8.25025 14.2944 7.93896 13.8584 7.78 13.36C7.93902 13.3832 8.09933 13.3966 8.26 13.4C8.48204 13.3943 8.70303 13.3675 8.92 13.32C8.35064 13.2071 7.83809 12.9001 7.46973 12.4515C7.10137 12.0029 6.90002 11.4405 6.9 10.86V10.82C7.25154 11.0099 7.64096 11.1193 8.04 11.14C7.69451 10.9096 7.41142 10.5972 7.21599 10.2308C7.02057 9.86438 6.91888 9.45528 6.92 9.04C6.91602 8.59681 7.03361 8.16102 7.26 7.78C7.89139 8.55557 8.67888 9.18964 9.5713 9.64102C10.4637 10.0924 11.4411 10.351 12.44 10.4C12.3992 10.2094 12.3791 10.0149 12.38 9.82C12.3805 9.15182 12.6462 8.51115 13.1187 8.03867C13.5912 7.5662 14.2318 7.30053 14.9 7.3C15.2454 7.29855 15.5873 7.36892 15.9041 7.50664C16.2208 7.64436 16.5055 7.84642 16.74 8.1C17.3059 7.99007 17.8478 7.78012 18.34 7.48C18.1535 8.06367 17.763 8.56065 17.24 8.88C17.7374 8.82016 18.223 8.6853 18.68 8.48C18.3452 8.99411 17.918 9.44168 17.42 9.8Z",
    fill: "currentColor"
  })));
};
SvgTwitterCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgTwitterCircle"
};
var _default = exports.default = SvgTwitterCircle;