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
var SvgHelpSolid = function SvgHelpSolid(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/help-solid"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.25 9.74555C10.25 9.0298 10.5022 8.54874 10.8319 8.24199C11.1729 7.92473 11.6426 7.75216 12.1305 7.75002C12.6183 7.74788 13.0852 7.91611 13.4234 8.22983C13.7504 8.53308 14.0044 9.01548 14.0044 9.74555C14.0044 10.401 13.6234 10.7553 12.9148 11.2425C12.8709 11.2727 12.8248 11.304 12.777 11.3365C12.48 11.5381 12.1183 11.7836 11.8354 12.0681C11.4774 12.4281 11.1751 12.9146 11.1751 13.5749V15C11.1751 15.4142 11.5109 15.75 11.9251 15.75C12.3393 15.75 12.6751 15.4142 12.6751 15V13.5749C12.6751 13.4268 12.7265 13.2992 12.899 13.1258C13.0719 12.9519 13.2965 12.7985 13.6029 12.5893C13.6545 12.5541 13.7084 12.5173 13.7647 12.4785C14.4708 11.993 15.5044 11.241 15.5044 9.74555C15.5044 8.63374 15.1017 7.74051 14.4434 7.13002C13.7965 6.53001 12.9498 6.24641 12.1239 6.25003C11.2982 6.25366 10.4543 6.54443 9.81013 7.14379C9.15463 7.75365 8.75 8.64247 8.75 9.74555C8.75 10.1598 9.08579 10.4955 9.5 10.4955C9.91421 10.4955 10.25 10.1598 10.25 9.74555ZM12.75 17.5C12.75 17.0858 12.4142 16.75 12 16.75C11.5858 16.75 11.25 17.0858 11.25 17.5V17.6C11.25 18.0142 11.5858 18.35 12 18.35C12.4142 18.35 12.75 18.0142 12.75 17.6V17.5Z",
    fill: "currentColor"
  })));
};
SvgHelpSolid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgHelpSolid"
};
var _default = exports.default = SvgHelpSolid;