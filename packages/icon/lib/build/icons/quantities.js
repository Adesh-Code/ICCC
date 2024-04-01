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
var SvgQuantities = function SvgQuantities(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/quantities"
  }, /*#__PURE__*/React.createElement("g", {
    id: "stroke"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.5 16C12.8807 16 14 17.1193 14 18.5C14 19.8807 12.8807 21 11.5 21C10.1193 21 9 19.8807 9 18.5C9 17.1193 10.1193 16 11.5 16Z",
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 16C4.88071 16 6 17.1193 6 18.5C6 19.8807 4.88071 21 3.5 21C2.11929 21 1 19.8807 1 18.5C1 17.1193 2.11929 16 3.5 16Z",
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 16C20.8807 16 22 17.1193 22 18.5C22 19.8807 20.8807 21 19.5 21C18.1193 21 17 19.8807 17 18.5C17 17.1193 18.1193 16 19.5 16Z",
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 9C8.88071 9 10 10.1193 10 11.5C10 12.8807 8.88071 14 7.5 14C6.11929 14 5 12.8807 5 11.5C5 10.1193 6.11929 9 7.5 9Z",
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 9C16.8807 9 18 10.1193 18 11.5C18 12.8807 16.8807 14 15.5 14C14.1193 14 13 12.8807 13 11.5C13 10.1193 14.1193 9 15.5 9Z",
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 2C12.8807 2 14 3.11929 14 4.5C14 5.88071 12.8807 7 11.5 7C10.1193 7 9 5.88071 9 4.5C9 3.11929 10.1193 2 11.5 2Z",
    stroke: "currentColor",
    strokeWidth: 1.5
  }))));
};
SvgQuantities.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgQuantities"
};
var _default = exports.default = SvgQuantities;