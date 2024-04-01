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
var SvgShare = function SvgShare(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/share"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M15 6.5L9 10.5M15 17.5L9 13.5M9.5 12.25C9.5 13.4926 8.49264 14.5 7.25 14.5C6.00736 14.5 5 13.4926 5 12.25C5 11.0074 6.00736 10 7.25 10C8.49264 10 9.5 11.0074 9.5 12.25ZM19.5 5.25C19.5 6.49264 18.4926 7.5 17.25 7.5C16.0074 7.5 15 6.49264 15 5.25C15 4.00736 16.0074 3 17.25 3C18.4926 3 19.5 4.00736 19.5 5.25ZM19.5 19.25C19.5 20.4926 18.4926 21.5 17.25 21.5C16.0074 21.5 15 20.4926 15 19.25C15 18.0074 16.0074 17 17.25 17C18.4926 17 19.5 18.0074 19.5 19.25Z",
    stroke: "currentColor",
    strokeWidth: 1.5
  })));
};
SvgShare.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgShare"
};
var _default = exports.default = SvgShare;