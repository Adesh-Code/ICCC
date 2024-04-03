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
var SvgThreadsCircle = function SvgThreadsCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.2812 12.207C12.4387 12.198 12.5917 12.1935 12.7432 12.1935C13.2412 12.1935 13.7047 12.24 14.1277 12.3315C13.9597 14.3115 12.9637 14.61 12.1987 14.6505C11.3662 14.6955 10.5007 14.331 10.4587 13.5465C10.4182 12.798 11.1337 12.2715 12.2812 12.207Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.1117 19.5H12.1207C14.1097 19.4865 15.5122 18.975 16.6687 17.844C18.1807 16.3635 18.1342 14.508 17.6362 13.3695C17.2777 12.552 16.5967 11.889 15.6652 11.451C15.5992 11.421 15.5317 11.391 15.4642 11.3625C15.3457 9.2295 14.1562 8.007 12.1597 7.995H12.1327C10.9387 7.995 9.94574 8.496 9.33374 9.405L10.4317 10.1415C10.8877 9.462 11.6047 9.3165 12.1327 9.3165H12.1507C12.8077 9.321 13.3042 9.507 13.6252 9.873C13.8592 10.1385 14.0152 10.5075 14.0932 10.971C13.5112 10.875 12.8797 10.845 12.2062 10.8825C11.2912 10.935 10.5172 11.214 9.96674 11.6895C9.39074 12.1875 9.09524 12.8715 9.13574 13.6155C9.17774 14.3805 9.56624 15.0375 10.2307 15.468C10.7917 15.8325 11.5162 16.0095 12.2677 15.969C13.2607 15.915 14.0452 15.5385 14.5987 14.85C15.0127 14.334 15.2812 13.65 15.4012 12.8055C15.8767 13.086 16.2292 13.455 16.4227 13.899C16.7527 14.652 16.7707 15.8895 15.7417 16.8975C14.8402 17.781 13.7557 18.1635 12.1162 18.1755C10.2982 18.1635 8.92274 17.592 8.02874 16.4775C7.19174 15.435 6.75974 13.929 6.74324 12C6.75974 10.071 7.19174 8.565 8.02724 7.5225C8.92124 6.4095 10.2967 5.838 12.1147 5.8245C14.8687 5.844 16.6147 7.1085 17.3047 9.5835L18.5797 9.228C18.1732 7.767 17.4352 6.618 16.3867 5.811C15.2722 4.953 13.8367 4.512 12.1207 4.5H12.1117C9.87524 4.515 8.15324 5.253 6.99824 6.6945C5.96924 7.977 5.43824 9.759 5.42024 11.9955V12.006C5.43824 14.241 5.96924 16.0245 6.99674 17.307C8.15324 18.747 9.87374 19.485 12.1117 19.5Z",
    fill: "currentColor"
  }));
};
SvgThreadsCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgThreadsCircle"
};
var _default = exports.default = SvgThreadsCircle;