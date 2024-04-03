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
var SvgMicOff = function SvgMicOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "av/mic-off"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M12 20C8.13401 20 5 16.866 5 13M12 20C14.1525 20 16.078 19.0285 17.3621 17.5M12 20V23M18.7522 14.8528C18.9137 14.2627 19 13.6414 19 13M8 8V13C8 15.2091 9.79086 17 12 17C13.3117 17 14.4759 16.3687 15.2053 15.3933M16 12V5C16 2.79086 14.2091 1 12 1C10.1372 1 8.57182 2.06653 8.12677 3.89983M19 23H5M2 2L22 22",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round"
  })));
};
SvgMicOff.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgMicOff"
};
var _default = exports.default = SvgMicOff;