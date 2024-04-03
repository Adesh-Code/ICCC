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
var SvgFileVideo = function SvgFileVideo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/file-video"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M6 18H2V21H6M6 18V21M6 18H10M6 21H10M10 21V18M10 21H14M10 18H14M14 18V21M14 18H18M14 21H18M18 21H22V18H18M18 21V18M6 2H2V5H4M6 2V5M6 2H10M6 5H10M6 5H4M10 5V2M10 5H12M10 2H14M14 2V5M14 2H18M14 5H18M14 5H12M18 5V2M18 5H20M18 2H22V5H20M4 5V18M20 5V18M12 5V18",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  })));
};
SvgFileVideo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgFileVideo"
};
var _default = exports.default = SvgFileVideo;