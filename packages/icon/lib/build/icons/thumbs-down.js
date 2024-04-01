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
var SvgThumbsDown = function SvgThumbsDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8.09457 15.1542C8.09457 15.1542 9.62295 17.1556 10.4599 17.7379C11.3454 18.3686 11.5637 20.3094 11.3333 21.2556C11.0179 22.5413 12.5948 23.9848 13.9655 22.0804C15.3361 20.176 13.9655 16.44 13.9655 16.44L17.1071 16.0639C17.1071 16.0639 20.7946 15.4332 20.9159 13.8806C21.013 12.6676 19.7636 12.34 19.7636 12.34C19.7636 12.34 20.9523 12.3037 20.9523 10.5933C20.9523 9.11349 19.3633 9.04071 19.3633 9.04071C19.3633 9.04071 20.1517 8.53125 19.9698 7.35465C19.7878 6.14165 18.4899 5.91118 18.4899 5.91118C18.4899 5.91118 19.2784 5.68072 18.8417 4.28577C18.5263 3.25473 16.5734 3 15.0329 3C13.3104 3 10.9694 3.47307 8.79811 4.56476C8.79811 4.56476 7.13631 5.35321 3 5.20765V13.9655C3.01213 13.9655 7.63364 13.5652 8.09457 15.1542Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeMiterlimit: 10,
    strokeLinejoin: "round"
  }));
};
SvgThumbsDown.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgThumbsDown"
};
var _default = exports.default = SvgThumbsDown;