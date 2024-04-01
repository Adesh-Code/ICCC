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
var SvgTag = function SvgTag(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/tag"
  }, /*#__PURE__*/React.createElement("g", {
    id: "stroke"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.1429 3H3V12.1429L13.8571 23L23 13.8571L12.1429 3Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.00011 8.00011C9.00011 8.55239 8.55239 9.00011 8.00011 9.00011C7.44782 9.00011 7.00011 8.55239 7.00011 8.00011C7.00011 7.44782 7.44782 7.00011 8.00011 7.00011C8.55239 7.00011 9.00011 7.44782 9.00011 8.00011Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  }))));
};
SvgTag.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgTag"
};
var _default = exports.default = SvgTag;