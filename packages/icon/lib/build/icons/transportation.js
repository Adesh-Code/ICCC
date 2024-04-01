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
var SvgTransportation = function SvgTransportation(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5.32925 11.3987H18.6983M9.07628 16.6633L6.17886 22.9606M14.7233 16.6633L17.6207 22.9606M6.74795 19.0667H16.7709M5.5552 21.4854H18.1057M5.37896 14H7.50004M16.5 14H18.6867M18.8412 11.5338L17.9898 5.20595C17.8229 3.96526 16.764 3.03931 15.5122 3.03931H8.53168C7.27281 3.03931 6.21031 3.97535 6.05162 5.22417L5.23675 11.6372C5.08168 12.8575 5.25094 14.0971 5.72747 15.2312L5.81442 15.4381C6.12634 16.1805 6.85304 16.6634 7.65826 16.6634H16.3991C17.1892 16.6634 17.9053 16.1982 18.2264 15.4764L18.2993 15.3126C18.8265 14.1275 19.0142 12.8193 18.8412 11.5338Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
SvgTransportation.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgTransportation"
};
var _default = exports.default = SvgTransportation;