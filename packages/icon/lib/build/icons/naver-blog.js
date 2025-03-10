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
var SvgNaverBlog = function SvgNaverBlog(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/naver-blog"
  }, /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.5233 12.6742C16.9648 12.6742 17.3228 12.3163 17.3228 11.8748C17.3228 11.4333 16.9648 11.0754 16.5233 11.0754C16.0818 11.0754 15.7239 11.4333 15.7239 11.8748C15.7239 12.3163 16.0818 12.6742 16.5233 12.6742Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5519 11.8748C13.5519 12.3163 13.194 12.6742 12.7525 12.6742C12.311 12.6742 11.9531 12.3163 11.9531 11.8748C11.9531 11.4333 12.311 11.0754 12.7525 11.0754C13.194 11.0754 13.5519 11.4333 13.5519 11.8748Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.45869 12.6742C7.90019 12.6742 8.2581 12.3163 8.2581 11.8748C8.2581 11.4333 7.90019 11.0754 7.45869 11.0754C7.01719 11.0754 6.65928 11.4333 6.65928 11.8748C6.65928 12.3163 7.01719 12.6742 7.45869 12.6742Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 7.70002V15.29C21 16.007 20.7159 16.6948 20.2098 17.2028C19.7037 17.7107 19.017 17.9974 18.3 18H13.75L12.24 20.47C12.2104 20.5113 12.1713 20.545 12.1261 20.5682C12.0809 20.5914 12.0308 20.6035 11.98 20.6035C11.9292 20.6035 11.8791 20.5914 11.8339 20.5682C11.7887 20.545 11.7496 20.5113 11.72 20.47L10.22 18H5.71C4.99126 18 4.30196 17.7145 3.79374 17.2063C3.28552 16.6981 3 16.0088 3 15.29V7.70002C3 7.34461 3.07017 6.99269 3.20648 6.66446C3.34279 6.33623 3.54257 6.03814 3.79434 5.78729C4.04612 5.53644 4.34495 5.33776 4.67368 5.20267C5.00242 5.06757 5.35459 4.9987 5.71 5.00002H18.3C19.0161 5.00002 19.7028 5.28448 20.2092 5.79083C20.7155 6.29718 21 6.98393 21 7.70002ZM10.6262 10.6231V13.4889H9.70614V11.1208C9.70614 10.7437 9.70613 10.1555 9.17822 10.0348V9.25049C9.35843 9.24569 9.53782 9.27644 9.70614 9.34099C9.97041 9.43773 10.1995 9.61173 10.3636 9.84037C10.5276 10.069 10.6192 10.3417 10.6262 10.6231ZM18.1528 10.2609V13.2775C18.1649 13.5003 18.12 13.7224 18.0223 13.923C17.9247 14.1236 17.7775 14.296 17.5947 14.4238C17.2702 14.6306 16.8935 14.7405 16.5087 14.7406V13.8808C17.2327 13.8808 17.2327 13.3379 17.2327 13.3077V13.1569C16.9646 13.3501 16.6431 13.4555 16.3126 13.4585C15.8846 13.4585 15.4741 13.2885 15.1714 12.9858C14.8688 12.6832 14.6987 12.2727 14.6987 11.8446C14.6987 11.4166 14.8688 11.0061 15.1714 10.7034C15.4741 10.4007 15.8846 10.2307 16.3126 10.2307C16.6431 10.2337 16.9646 10.3391 17.2327 10.5324V10.2307L18.1528 10.2609ZM14.0945 12.7713C14.2718 12.5059 14.3665 12.1938 14.3665 11.8746C14.3665 11.4466 14.1964 11.0361 13.8938 10.7334C13.5911 10.4308 13.1806 10.2607 12.7526 10.2607C12.4334 10.2607 12.1213 10.3554 11.8559 10.5327C11.5905 10.7101 11.3837 10.9621 11.2615 11.257C11.1394 11.5519 11.1074 11.8764 11.1697 12.1895C11.232 12.5026 11.3857 12.7901 11.6114 13.0158C11.8371 13.2416 12.1247 13.3953 12.4377 13.4575C12.7508 13.5198 13.0753 13.4878 13.3702 13.3657C13.6651 13.2435 13.9171 13.0367 14.0945 12.7713ZM9.17811 11.8747C9.18011 12.0859 9.14022 12.2955 9.06077 12.4912C8.98131 12.6869 8.86386 12.865 8.7152 13.015C8.56654 13.1651 8.38961 13.2842 8.19464 13.3655C7.99967 13.4468 7.79053 13.4886 7.57929 13.4886C7.26659 13.491 6.96088 13.3961 6.70447 13.2171V13.4886H5.84473V9.25024H6.77989V10.4871C7.0363 10.3081 7.34201 10.2132 7.65471 10.2156C8.07618 10.2352 8.47283 10.4205 8.75819 10.7313C9.04355 11.0421 9.19449 11.4531 9.17811 11.8747Z",
    fill: "currentColor"
  }))));
};
SvgNaverBlog.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgNaverBlog"
};
var _default = exports.default = SvgNaverBlog;