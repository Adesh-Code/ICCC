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
var SvgManageAccess = function SvgManageAccess(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/manage-access"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M1 18C1 13.5817 4.58172 10 9 10C10.1686 10 11.2786 10.2506 12.2794 10.7009M20.9375 17.641H23M20.9375 17.641C20.9375 16.6627 20.549 15.7774 19.9216 15.1387M20.9375 17.641C20.9375 18.6193 20.549 19.5046 19.9216 20.1433M17.5 21.1667V23M17.5 21.1667C16.5554 21.1667 15.6998 20.7759 15.0784 20.1433M17.5 21.1667C18.4446 21.1667 19.3002 20.7759 19.9216 20.1433M14.0625 17.641H12M14.0625 17.641C14.0625 16.6627 14.451 15.7774 15.0784 15.1387M14.0625 17.641C14.0625 18.6193 14.451 19.5046 15.0784 20.1433M17.5 14.1154V12M17.5 14.1154C16.5554 14.1154 15.6998 14.5062 15.0784 15.1387M17.5 14.1154C18.4446 14.1154 19.3002 14.5062 19.9216 15.1387M15.0784 15.1387L13.65 13.6782M19.9216 15.1387L21.35 13.6782M15.0784 20.1433L13.6637 21.5897M19.9216 20.1433L21.3363 21.5897M12.3684 4.47368C12.3684 6.39215 10.8604 7.94737 9.00003 7.94737C7.1397 7.94737 5.63161 6.39215 5.63161 4.47368C5.63161 2.55522 7.1397 1 9.00003 1C10.8604 1 12.3684 2.55522 12.3684 4.47368Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgManageAccess.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgManageAccess"
};
var _default = exports.default = SvgManageAccess;