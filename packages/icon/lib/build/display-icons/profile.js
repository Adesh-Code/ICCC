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
var SvgProfile = function SvgProfile(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "profile"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill-background",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.005 34.13C26.9106 34.13 34.13 26.9106 34.13 18.005C34.13 9.09941 26.9106 1.88 18.005 1.88C9.09941 1.88 1.88 9.09941 1.88 18.005C1.88 26.9106 9.09941 34.13 18.005 34.13Z",
    fill: "#5F60FF"
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill-foreground",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.8358 28.8495C10.9548 28.6849 11.025 28.4827 11.025 28.2641C11.025 24.4119 14.1478 21.2891 18 21.2891C21.8522 21.2891 24.975 24.4119 24.975 28.2641C24.975 28.4827 25.0452 28.6849 25.1642 28.8495C25.7962 28.4313 26.3895 27.9594 26.9377 27.4403C26.5217 22.8696 22.679 19.2891 18 19.2891C13.321 19.2891 9.47825 22.8696 9.0623 27.4403C9.61046 27.9594 10.2038 28.4313 10.8358 28.8495ZM15.642 12.7128C15.642 11.3234 16.7265 10.25 17.9999 10.25C19.2733 10.25 20.3578 11.3234 20.3578 12.7128C20.3578 14.1022 19.2733 15.1757 17.9999 15.1757C16.7264 15.1757 15.642 14.1022 15.642 12.7128ZM17.9999 8.25C15.5643 8.25 13.642 10.2773 13.642 12.7128C13.642 15.1484 15.5643 17.1757 17.9999 17.1757C20.4355 17.1757 22.3578 15.1484 22.3578 12.7128C22.3578 10.2773 20.4355 8.25 17.9999 8.25Z",
    fill: "white"
  })));
};
SvgProfile.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgProfile"
};
var _default = exports.default = SvgProfile;