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
var SvgYoutubeCircle = function SvgYoutubeCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/youtube-circle"
  }, /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5719 9.85714L14.2862 12L10.5719 14.1429V9.85714Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM18.8434 8.56429C18.6741 7.95253 18.1927 7.47664 17.5791 7.31429C16.4648 7 12.0005 7 12.0005 7C12.0005 7 7.53623 7 6.42194 7.3C5.80545 7.46623 5.32389 7.94779 5.15766 8.56429C4.95094 9.69769 4.8505 10.8479 4.85766 12C4.8505 13.1521 4.95094 14.3023 5.15766 15.4357C5.32389 16.0522 5.80545 16.5338 6.42194 16.7C7.53623 17 12.0005 17 12.0005 17C12.0005 17 16.4648 17 17.5791 16.7C18.1956 16.5338 18.6771 16.0522 18.8434 15.4357C19.0501 14.3023 19.1505 13.1521 19.1434 12C19.1505 10.8479 19.0501 9.69769 18.8434 8.56429Z",
    fill: "currentColor"
  }))));
};
SvgYoutubeCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgYoutubeCircle"
};
var _default = exports.default = SvgYoutubeCircle;