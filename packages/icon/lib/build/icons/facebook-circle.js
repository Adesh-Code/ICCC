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
var SvgFacebookCircle = function SvgFacebookCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/facebook-circle"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M12.0049 2C9.47543 1.99762 7.03917 2.95956 5.18723 4.69188C3.33528 6.42421 2.2054 8.79808 2.02537 11.3349C1.84533 13.8718 2.62854 16.3829 4.21708 18.3621C5.80563 20.3412 8.08137 21.6412 10.5855 22V14.8844H8.04665V11.9297H10.5855V9.7588C10.5855 7.24623 12.1248 5.8593 14.3638 5.8593C15.1185 5.8543 15.8728 5.89457 16.6228 5.9799V8.61307H15.0635C13.844 8.61307 13.6041 9.19598 13.6041 10.0402V11.9297H16.5028L16.123 14.8844H13.6041V21.9598C16.0835 21.5569 18.3209 20.2298 19.8708 18.2428C21.4207 16.2558 22.1694 13.7547 21.9677 11.2376C21.766 8.72055 20.6288 6.3722 18.7825 4.66031C16.9362 2.94841 14.5163 1.99858 12.0049 2Z",
    fill: "currentColor"
  })));
};
SvgFacebookCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgFacebookCircle"
};
var _default = exports.default = SvgFacebookCircle;