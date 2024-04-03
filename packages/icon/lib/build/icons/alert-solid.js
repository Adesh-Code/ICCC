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
var SvgAlertSolid = function SvgAlertSolid(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/alert-solid"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5171 1.37916L23.4681 19.9958C23.7034 20.3958 23.415 20.9 22.9509 20.9H1.04903C0.584981 20.9 0.296588 20.3958 0.53187 19.9958L11.4828 1.37916C11.7148 0.984778 12.2852 0.984779 12.5171 1.37916ZM12.75 8.5C12.75 8.08579 12.4142 7.75 12 7.75C11.5858 7.75 11.25 8.08579 11.25 8.5V13.3C11.25 13.7142 11.5858 14.05 12 14.05C12.4142 14.05 12.75 13.7142 12.75 13.3V8.5ZM12.75 16.88C12.75 16.4658 12.4142 16.13 12 16.13C11.5858 16.13 11.25 16.4658 11.25 16.88V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V16.88Z",
    fill: "currentColor"
  })));
};
SvgAlertSolid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgAlertSolid"
};
var _default = exports.default = SvgAlertSolid;