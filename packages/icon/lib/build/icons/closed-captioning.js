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
var SvgClosedCaptioning = function SvgClosedCaptioning(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "av/closed-captioning"
  }, /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.0067 19C14.6354 19 12.5848 16.3938 12.5848 12.0215C12.5848 7.64923 14.6006 5 18.0415 5C20.7872 5 22.386 6.42154 22.9189 9.30769L23 9.78154L19.3622 10.7508L19.2348 10.1692C18.8524 8.25231 18.25 8.25231 17.9604 8.25231C17.3 8.25231 16.5354 9.22154 16.5354 11.9569C16.5354 14.24 17.1031 15.6615 18.0183 15.6615C18.7598 15.6615 19.1768 14.4554 19.3622 13.4323L19.4896 12.84L22.9652 13.9169V14.3908C22.3744 17.4923 20.6945 19 18.0067 19Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.42194 19C3.05061 19 1 16.3938 1 12.0215C1 7.64923 3.01585 5 6.4567 5C9.20242 5 10.8012 6.42154 11.3341 9.30769L11.4152 9.78154L7.77742 10.7508L7.64999 10.1692C7.26767 8.25231 6.66523 8.25231 6.3756 8.25231C5.72682 8.25231 4.9506 9.22154 4.9506 11.9569C4.9506 14.24 5.51828 15.6615 6.43352 15.6615C7.17499 15.6615 7.59206 14.4554 7.77742 13.4323L7.9512 12.8831L11.4268 13.96V14.4338C10.7896 17.4923 9.10974 19 6.42194 19Z",
    fill: "currentColor"
  }))));
};
SvgClosedCaptioning.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgClosedCaptioning"
};
var _default = exports.default = SvgClosedCaptioning;