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
var SvgOnlineViewers = function SvgOnlineViewers(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/online-viewers"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M11 2C14.7014 2 17.9331 4.01099 19.6622 7M11 2C7.29859 2 4.06687 4.01099 2.33782 7M11 2C11 2 13.248 3.95475 14.7622 7M11 2C11 2 8.75204 3.95475 7.23776 7M11 2V7M19.6622 7C20.513 8.47087 21 10.1786 21 12H16.1045M19.6622 7H14.7622M1 12C1 10.1786 1.48697 8.47087 2.33782 7M1 12C1 13.8214 1.48697 15.5291 2.33782 17M1 12H5.89552M2.33782 7H7.23776M14.7622 7H11M14.7622 7C15.4835 8.45041 16.0383 10.1482 16.1045 12M11 7H7.23776M11 7V12M7.23776 7C6.51653 8.45041 5.96173 10.1482 5.89552 12M11 22C7.29859 22 4.06687 19.989 2.33782 17M11 22C10.2349 21.3347 9.57164 20.6694 9 20.0071C8.12593 18.9943 7.46612 17.9885 6.98425 17M11 22C11.5098 22 12.0107 21.9619 12.5 21.8883M2.33782 17H6.98425M16.1045 12H11M5.89552 12C5.83923 13.5745 6.13613 15.2603 6.98425 17M5.89552 12H11M6.98425 17H9M11 12V13.5M23 17.5C23 17.5 21.1579 21 17.1667 21C13.1754 21 11.3333 17.5 11.3333 17.5C11.3333 17.5 13.1754 14 17.1667 14C21.1579 14 23 17.5 23 17.5ZM18.3333 17.5C18.3333 18.1443 17.811 18.6667 17.1667 18.6667C16.5223 18.6667 16 18.1443 16 17.5C16 16.8557 16.5223 16.3333 17.1667 16.3333C17.811 16.3333 18.3333 16.8557 18.3333 17.5Z",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgOnlineViewers.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgOnlineViewers"
};
var _default = exports.default = SvgOnlineViewers;