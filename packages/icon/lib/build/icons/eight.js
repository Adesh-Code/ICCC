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
var SvgEight = function SvgEight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/eight"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "stroke",
    cx: 12,
    cy: 12,
    r: 10,
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M13.2424 11.6143C14.157 11.3058 14.4876 10.8981 14.4876 10.281V9.79614C14.4876 8.74931 13.3967 8 11.8871 8C10.3884 8 9.3416 8.74931 9.3416 9.80716V10.303C9.3416 11.1074 9.71625 11.5592 10.5207 11.9008C9.49587 12.2755 9 12.7603 9 13.4766V13.9504C9 15.1846 10.2231 16 11.9091 16C13.5289 16 14.8292 15.1846 14.8292 13.9504V13.4766C14.8292 12.4628 14.2231 11.978 13.2424 11.6143ZM10.686 9.8292C10.686 9.17906 11.303 8.99174 11.8871 8.99174C12.4821 8.99174 13.1543 9.24518 13.1543 9.90634V10.3251C13.1543 10.7658 12.8237 10.9862 12.1625 11.2617L11.7879 11.1405C11.0606 10.9201 10.686 10.7218 10.686 10.2369V9.8292ZM13.4518 13.9063C13.4518 14.6116 12.7466 14.9532 11.9201 14.9532C11.0386 14.9532 10.3774 14.6116 10.3774 13.8623V13.4435C10.3774 12.8375 10.8402 12.562 11.6006 12.2755L12.0413 12.4187C12.8788 12.6832 13.4518 12.9256 13.4518 13.4876V13.9063Z",
    fill: "currentColor"
  })));
};
SvgEight.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgEight"
};
var _default = exports.default = SvgEight;