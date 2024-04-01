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
var SvgPermissionGroup = function SvgPermissionGroup(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/permission-group"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M3 20C3 16.6929 5.10793 13 9.51396 13C13.92 13 16 16.6929 16 20M22 14.5C22 12.669 20.8547 10.4463 18.5395 10.4463C16.2242 10.4463 15 12 15 12M13 6.5C13 8.433 11.433 10 9.5 10C7.567 10 6 8.433 6 6.5C6 4.567 7.567 3 9.5 3C11.433 3 13 4.567 13 6.5ZM20.5395 6.03702C20.5395 7.17611 19.6441 8.09952 18.5395 8.09952C17.4349 8.09952 16.5395 7.17611 16.5395 6.03702C16.5395 4.89794 17.4349 3.97452 18.5395 3.97452C19.6441 3.97452 20.5395 4.89794 20.5395 6.03702Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgPermissionGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgPermissionGroup"
};
var _default = exports.default = SvgPermissionGroup;