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
var SvgTiktokCircle = function SvgTiktokCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.2902 6.87147C16.8783 7.42166 17.6574 7.83311 18.517 7.85919L18.5064 10.1026C17.323 10.0848 16.2155 9.77772 15.2883 9.13623V14.0985C15.288 14.9692 15.0296 15.8202 14.5458 16.5441C14.0619 17.2679 13.3743 17.832 12.5699 18.1651C11.7655 18.4982 10.8803 18.5853 10.0264 18.4153C9.17249 18.2454 8.38813 17.8261 7.77248 17.2105C7.15683 16.5948 6.73754 15.8105 6.56763 14.9566C6.39771 14.1026 6.4848 13.2175 6.81788 12.4131C7.15096 11.6087 7.71507 10.921 8.4389 10.4372C9.16273 9.95333 10.0138 9.69495 10.8844 9.69471C11.1029 9.69387 11.3208 9.71693 11.5342 9.76349V12.199C11.2563 12.0993 10.9599 12.0619 10.6659 12.0894C10.372 12.1169 10.0876 12.2087 9.83305 12.3582C9.57845 12.5076 9.3598 12.7112 9.19255 12.9546C9.02531 13.1979 8.91355 13.4749 8.86519 13.7662C8.81682 14.0574 8.83303 14.3558 8.91266 14.6401C8.99228 14.9244 9.1334 15.1877 9.32601 15.4115C9.51863 15.6352 9.75805 15.8139 10.0273 15.935C10.2966 16.056 10.5892 16.1164 10.8844 16.1119C11.9978 16.1119 12.9002 15.225 12.9002 13.7191V4.5H15.293C15.2877 4.94253 15.3736 5.38142 15.5451 5.78938C15.7167 6.19735 15.9703 6.56568 16.2902 6.87147Z",
    fill: "currentColor"
  }));
};
SvgTiktokCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgTiktokCircle"
};
var _default = exports.default = SvgTiktokCircle;