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
var SvgGeneralContractor = function SvgGeneralContractor(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2.18469 18.4947C2.53503 14.4571 5.92358 11.2892 10.052 11.2892C11.0993 11.2892 12.099 11.493 13.0135 11.8632M13.3772 5.83384C13.3772 7.72766 11.8885 9.2629 10.0521 9.2629C8.21564 9.2629 6.72692 7.72766 6.72692 5.83384C6.72692 3.94003 8.21564 2.40479 10.0521 2.40479C11.8885 2.40479 13.3772 3.94003 13.3772 5.83384ZM22.335 13.4474C22.335 14.2425 22.0191 15.0049 21.457 15.5671C20.8948 16.1293 20.1323 16.4451 19.3373 16.4451C19.0364 16.4447 18.7372 16.3996 18.4496 16.3113L12.2293 22.5316L10.2774 20.5555L16.5038 14.3352C16.3641 13.889 16.3309 13.4162 16.407 12.9549C16.483 12.4935 16.6661 12.0564 16.9416 11.6786C17.2171 11.3008 17.5774 10.9928 17.9934 10.7794C18.4095 10.566 18.8697 10.4531 19.3373 10.4498C19.7816 10.4484 20.2203 10.5482 20.6203 10.7417L18.9846 12.3773C18.9547 12.4072 18.9309 12.4428 18.9147 12.4819C18.8985 12.521 18.8901 12.563 18.8901 12.6053C18.8901 12.6477 18.8985 12.6896 18.9147 12.7287C18.9309 12.7679 18.9547 12.8034 18.9846 12.8333L19.8359 13.6907C19.8974 13.7516 19.9804 13.7857 20.067 13.7857C20.1535 13.7857 20.2365 13.7516 20.298 13.6907L21.9701 12.0125C22.2081 12.4534 22.3335 12.9464 22.335 13.4474Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
SvgGeneralContractor.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgGeneralContractor"
};
var _default = exports.default = SvgGeneralContractor;