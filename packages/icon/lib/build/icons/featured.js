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
var SvgFeatured = function SvgFeatured(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/featured"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M9.89474 16.4451C10.5394 16.7195 11.2515 16.8718 12 16.8718C12.7485 16.8718 13.4606 16.7195 14.1053 16.4451M9.89474 16.4451C9.30397 16.1936 8.76974 15.8395 8.31579 15.4059C7.34139 14.4751 6.73684 13.1782 6.73684 11.7436C6.73684 8.91136 9.09324 6.5 12 6.5C14.9068 6.5 17.2632 8.91136 17.2632 11.7436C17.2632 13.1782 16.6586 14.4751 15.6842 15.4059C15.2303 15.8395 14.696 16.1936 14.1053 16.4451M9.89474 16.4451V22H14.1053V16.4451M12 4.05128C12 4.05128 12 2.80108 12 2M19.8947 11.7436H22M2 11.7436H4.10526M4.63158 5.07692L6.21053 6.61538M19.3684 5.07692L17.7895 6.61538",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgFeatured.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgFeatured"
};
var _default = exports.default = SvgFeatured;