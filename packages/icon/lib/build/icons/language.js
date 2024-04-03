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
var SvgLanguage = function SvgLanguage(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/language"
  }, /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.115 7.65149C7.7445 8.69649 7.222 9.56099 6.5665 10.283C5.835 9.53249 5.265 8.64899 4.8565 7.65149H8.115Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 2.75C13 2.33579 12.6642 2 12.25 2H0.75C0.335786 2 0 2.33579 0 2.75V16.25C0 16.6642 0.335786 17 0.75 17H11.75V8.5C11.75 8.08579 12.0858 7.75 12.5 7.75H13V2.75ZM10.8415 7.65149V6.54949H6.709L7.526 6.29299C7.412 5.90349 7.127 5.29549 6.88 4.85849L5.6735 5.20999C5.892 5.62799 6.101 6.15999 6.2055 6.54949H2.1965V7.65149H3.688C4.201 8.99099 4.8565 10.131 5.7115 11.0715C4.7235 11.841 3.498 12.3825 2.016 12.753C2.244 13.0095 2.5765 13.5415 2.7 13.8075C4.2295 13.3705 5.5025 12.7435 6.5475 11.8885C7.545 12.7245 8.7705 13.3515 10.262 13.7505C10.433 13.437 10.7655 12.943 11.022 12.696C9.6065 12.3635 8.4095 11.8125 7.431 11.0525C8.2575 10.131 8.9035 9.01949 9.388 7.65149H10.8415Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.25 18.5H19.69L18.994 16.292H16.09L15.454 18.5H13.93L16.498 10.1H18.55L21.25 18.5ZM18.634 15.08L17.518 11.156L16.426 15.08H18.634Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("rect", {
    id: "stroke",
    x: 11.75,
    y: 7.75,
    width: 11.5,
    height: 13.5,
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  })));
};
SvgLanguage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgLanguage"
};
var _default = exports.default = SvgLanguage;