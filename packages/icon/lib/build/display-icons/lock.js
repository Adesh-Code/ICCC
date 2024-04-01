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
var SvgLock = function SvgLock(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 36 36",
    fill: "inherit",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "lock"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill-background",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.7238 2.90599C24.0829 4.12348 24.945 5.92328 24.945 8.21082V12.6447H28.1471C28.7684 12.6447 29.2721 13.1484 29.2721 13.7697V29.6521C29.2721 30.2734 28.7684 30.7771 28.1471 30.7771H7.5C6.87868 30.7771 6.375 30.2734 6.375 29.6521V13.7697C6.375 13.1484 6.87868 12.6447 7.5 12.6447H10.875V8.21082C10.875 5.92329 11.7371 4.12349 13.0963 2.90599C14.4353 1.70646 16.1904 1.13 17.91 1.13C19.6296 1.13 21.3847 1.70645 22.7238 2.90599ZM13.125 12.6447V8.21082C13.125 6.5278 13.7404 5.34969 14.5975 4.58192C15.4747 3.79618 16.6746 3.38 17.91 3.38C19.1454 3.38 20.3453 3.79617 21.2225 4.58191C22.0796 5.34968 22.695 6.52779 22.695 8.21082V12.6447H13.125Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill-foreground",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.8235 18.99C18.4449 18.99 18.9485 19.4937 18.9485 20.115V23.2915C18.9485 23.9128 18.4449 24.4165 17.8235 24.4165C17.2022 24.4165 16.6985 23.9128 16.6985 23.2915V20.115C16.6985 19.4937 17.2022 18.99 17.8235 18.99Z",
    fill: "inherit"
  })));
};
SvgLock.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgLock"
};
var _default = exports.default = SvgLock;