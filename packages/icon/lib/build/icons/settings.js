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
var SvgSettings = function SvgSettings(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/settings"
  }, /*#__PURE__*/React.createElement("g", {
    id: "stroke"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5 17.7333L17.5 20.5L15.4333 18.1444C14.9526 18.4038 14.4462 18.6124 13.9222 18.7667L14 22H10.0778V18.7667C9.55381 18.6124 9.04737 18.4038 8.56667 18.1444L6.26667 20.5L3.58889 17.7333L5.85556 15.4222C5.59431 14.9463 5.38567 14.4433 5.23333 13.9222H2V10.0778H5.23333C5.38567 9.55667 5.59431 9.05371 5.85556 8.57778L3.58889 6.26667L6.26667 3.65633L8.56667 5.85556C9.04737 5.59618 9.55381 5.38764 10.0778 5.23333L10.1818 2H13.8182L13.9222 5.23333C14.4462 5.38764 14.9526 5.59618 15.4333 5.85556L17.7841 3.65633L20.5 6.5L18.1444 8.57778C18.4057 9.05371 18.6143 9.55667 18.7667 10.0778H22V13.9222L18.7667 13.7057V13.9222C18.6143 14.4433 18.4057 14.9463 18.1444 15.4222L20.5 17.7333Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
};
SvgSettings.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgSettings"
};
var _default = exports.default = SvgSettings;