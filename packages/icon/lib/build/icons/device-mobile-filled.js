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
var SvgDeviceMobileFilled = function SvgDeviceMobileFilled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/device-mobile-filled"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.5 4C5.5 2.48122 6.73122 1.25 8.25 1.25H15.75C17.2688 1.25 18.5 2.48122 18.5 4V20C18.5 21.5188 17.2688 22.75 15.75 22.75H8.25C6.73122 22.75 5.5 21.5188 5.5 20V4ZM10.75 19.5C10.3358 19.5 10 19.8358 10 20.25C10 20.6642 10.3358 21 10.75 21H13.25C13.6642 21 14 20.6642 14 20.25C14 19.8358 13.6642 19.5 13.25 19.5H10.75Z",
    fill: "currentColor"
  })));
};
SvgDeviceMobileFilled.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgDeviceMobileFilled"
};
var _default = exports.default = SvgDeviceMobileFilled;