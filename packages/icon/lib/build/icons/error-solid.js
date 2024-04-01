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
var SvgErrorSolid = function SvgErrorSolid(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/error-solid"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.495 1.49494L22.505 11.505C22.7784 11.7784 22.7784 12.2216 22.505 12.4949L12.495 22.505C12.2216 22.7784 11.7784 22.7784 11.505 22.505L1.49497 12.4949C1.22161 12.2216 1.22161 11.7784 1.49497 11.505L11.505 1.49494C11.7784 1.22158 12.2216 1.22157 12.495 1.49494ZM12.75 7.99997C12.75 7.58575 12.4142 7.24997 12 7.24997C11.5858 7.24997 11.25 7.58575 11.25 7.99997V13C11.25 13.4142 11.5858 13.75 12 13.75C12.4142 13.75 12.75 13.4142 12.75 13V7.99997ZM12.75 16.4999C12.75 16.0857 12.4142 15.7499 12 15.7499C11.5858 15.7499 11.25 16.0857 11.25 16.4999V16.6111C11.25 17.0253 11.5858 17.3611 12 17.3611C12.4142 17.3611 12.75 17.0253 12.75 16.6111V16.4999Z",
    fill: "currentColor"
  })));
};
SvgErrorSolid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgErrorSolid"
};
var _default = exports.default = SvgErrorSolid;