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
var SvgDiscordCircle = function SvgDiscordCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.9753 6.6C14.987 6.7698 15.9563 7.07402 16.8689 7.49144C18.4537 9.80498 19.2397 12.4227 18.9355 15.4366C17.725 16.321 16.5435 16.8587 15.3903 17.2125C15.1073 16.8304 14.8526 16.42 14.6332 15.9885C15.0507 15.8328 15.4469 15.6418 15.8289 15.4154C15.7603 15.3664 15.6951 15.314 15.6286 15.2606C15.5991 15.2369 15.5693 15.2129 15.5388 15.189C13.2607 16.2432 10.7625 16.2432 8.45611 15.189C8.36413 15.2668 8.26508 15.3447 8.16603 15.4154C8.54808 15.6418 8.94427 15.8328 9.3617 15.9885C9.14237 16.42 8.88767 16.8304 8.60467 17.2125C7.45075 16.8587 6.27629 16.321 5.0594 15.4366C4.81177 12.833 5.30702 10.1941 7.13944 7.49144C8.04574 7.07402 9.01501 6.7698 10.0338 6.6C10.1541 6.81933 10.3026 7.11647 10.4017 7.34995C11.463 7.19429 12.5313 7.19429 13.6074 7.34995C13.7064 7.11647 13.8479 6.81933 13.9753 6.6ZM8.42072 12.4298C8.42072 13.2009 8.98671 13.8306 9.68007 13.8306C10.3805 13.8306 10.9394 13.2009 10.9394 12.4298C10.9535 11.6586 10.3805 11.0289 9.68007 11.0289C8.97256 11.0289 8.42072 11.6586 8.42072 12.4298ZM13.069 12.4298C13.069 13.2009 13.6357 13.8306 14.329 13.8306C15.0365 13.8306 15.5884 13.2009 15.5884 12.4298C15.6025 11.6586 15.0295 11.0289 14.329 11.0289C13.6215 11.0289 13.069 11.6586 13.069 12.4298Z",
    fill: "currentColor"
  }));
};
SvgDiscordCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgDiscordCircle"
};
var _default = exports.default = SvgDiscordCircle;