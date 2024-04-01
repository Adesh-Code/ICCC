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
var SvgSix = function SvgSix(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/six"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "stroke",
    cx: 12,
    cy: 12,
    r: 10,
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M12.3168 10.7438C11.4132 10.7438 10.8182 11.0634 10.3884 11.5702C10.5537 9.93939 11.6997 9.17906 13.6391 9.09091V8C10.686 8.08815 9 9.53168 9 12.4298V12.9697C9 14.7879 10.1129 16 11.8209 16C13.6171 16 14.5317 14.8099 14.5317 13.4766V13.0028C14.5317 11.7355 13.7493 10.7438 12.3168 10.7438ZM13.1653 13.4325C13.1653 14.3471 12.7355 14.9201 11.8209 14.9201C10.9504 14.9201 10.3664 14.3251 10.3664 13.0248V12.6722C10.8182 12.0992 11.303 11.7906 12.0303 11.7906C12.8567 11.7906 13.1653 12.2865 13.1653 13.0358V13.4325Z",
    fill: "currentColor"
  })));
};
SvgSix.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgSix"
};
var _default = exports.default = SvgSix;