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
var SvgDashboard = function SvgDashboard(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/dashboard"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M17.2388 18.7763L20.5289 20.9474C22.0737 19.0532 23 16.6348 23 14C23 7.92487 18.0751 3 12 3C5.92487 3 1 7.92487 1 14C1 16.6348 1.92635 19.0532 3.47113 20.9474L6.76124 18.7763M4 15H7M18 15H20M12 5.47375V8.47375M6 9L8.4131 10.7824M13.7084 18.7534C13.0119 19.8261 11.5776 20.1309 10.505 19.4343C9.43234 18.7378 9.12749 17.3035 9.82407 16.2309C10.5206 15.1582 17.0484 9.0326 17.0484 9.0326C17.0484 9.0326 14.405 17.6808 13.7084 18.7534Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgDashboard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgDashboard"
};
var _default = exports.default = SvgDashboard;