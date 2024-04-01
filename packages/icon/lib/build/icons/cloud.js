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
var SvgCloud = function SvgCloud(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/cloud"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.5897 12.0502C19.8828 11.4011 20.0365 10.6977 20.0407 9.98554C20.0281 7.57391 18.2995 5.51331 15.9268 5.08147C13.5542 4.64963 11.2104 5.96904 10.3489 8.22156C9.9205 8.0696 9.47028 7.98836 9.01584 7.98102C6.8017 7.98102 5.00679 9.77593 5.00679 11.9901C3.34619 11.9901 2 13.3363 2 14.9969C2 16.6575 3.34619 18.0036 5.00679 18.0036H19.0385C20.5741 17.9805 21.8454 16.8037 21.987 15.2744C22.1286 13.7452 21.095 12.355 19.5897 12.0502Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  })));
};
SvgCloud.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgCloud"
};
var _default = exports.default = SvgCloud;