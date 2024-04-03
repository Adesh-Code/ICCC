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
var SvgBlogCircle = function SvgBlogCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/blog-circle"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6.25 6.5C6.25 6.08579 6.58579 5.75 7 5.75C13.2132 5.75 18.25 10.7868 18.25 17C18.25 17.4142 17.9142 17.75 17.5 17.75C17.0858 17.75 16.75 17.4142 16.75 17C16.75 11.6152 12.3848 7.25 7 7.25C6.58579 7.25 6.25 6.91421 6.25 6.5ZM7 8.73755C6.58579 8.73755 6.25 9.07334 6.25 9.48755C6.25 9.90176 6.58579 10.2375 7 10.2375C10.7348 10.2375 13.7624 13.2652 13.7624 16.9999C13.7624 17.4141 14.0982 17.7499 14.5124 17.7499C14.9266 17.7499 15.2624 17.4141 15.2624 16.9999C15.2624 12.4367 11.5632 8.73755 7 8.73755ZM7 11.8632C6.58579 11.8632 6.25 12.1989 6.25 12.6132C6.25 13.0274 6.58579 13.3632 7 13.3632C9.00857 13.3632 10.6368 14.9914 10.6368 17C10.6368 17.4142 10.9726 17.75 11.3868 17.75C11.8011 17.75 12.1368 17.4142 12.1368 17C12.1368 14.163 9.837 11.8632 7 11.8632ZM8.94445 16.2778C8.94445 16.9528 8.39724 17.5 7.72222 17.5C7.04721 17.5 6.5 16.9528 6.5 16.2778C6.5 15.6028 7.04721 15.0555 7.72222 15.0555C8.39724 15.0555 8.94445 15.6028 8.94445 16.2778Z",
    fill: "currentColor"
  })));
};
SvgBlogCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgBlogCircle"
};
var _default = exports.default = SvgBlogCircle;