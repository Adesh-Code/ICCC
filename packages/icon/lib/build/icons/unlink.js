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
var SvgUnlink = function SvgUnlink(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/unlink"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M8.61747 8.81597L2.5792 14.8542C1.4736 15.9598 1.4736 17.76 2.5792 18.8656L4.60613 20.8925C5.71173 21.9981 7.51187 21.9981 8.61747 20.8925L11.4097 18.1002M3.75001 3.05715L21.1826 20.4897M14.9457 14.5C13.8483 15.2031 12.3681 15.0755 11.4097 14.1171L9.69667 12.3921M12 5.46161L14.8824 2.5792C15.988 1.4736 17.7881 1.4736 18.8937 2.5792L20.9207 4.60613C22.0263 5.71173 22.0263 7.51187 20.9207 8.61747L17.4621 12.076",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgUnlink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgUnlink"
};
var _default = exports.default = SvgUnlink;