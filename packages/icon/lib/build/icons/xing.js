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
var SvgXing = function SvgXing(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/xing"
  }, /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.01119 5.94789C4.93462 5.9414 4.85766 5.95445 4.78752 5.98583C4.71738 6.01721 4.65636 6.06588 4.61017 6.12729C4.57127 6.19467 4.55078 6.2711 4.55078 6.3489C4.55078 6.4267 4.57127 6.50313 4.61017 6.57051L6.56247 9.94745L3.55488 15.3717C3.51883 15.44 3.5 15.516 3.5 15.5933C3.5 15.6705 3.51883 15.7466 3.55488 15.8149C3.59526 15.8785 3.65156 15.9304 3.71819 15.9656C3.78482 16.0008 3.85948 16.0179 3.93478 16.0154H6.81573C6.98736 16.0077 7.1532 15.951 7.29351 15.8518C7.43381 15.7527 7.54269 15.6153 7.6072 15.4561L10.7203 9.94745L8.73637 6.48609C8.66796 6.32922 8.55609 6.19519 8.41398 6.09983C8.27187 6.00446 8.10543 5.95175 7.93434 5.94789H5.01119Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.1257 2.00094C16.9569 2.0036 16.7928 2.05749 16.6552 2.15549C16.5176 2.25348 16.4131 2.39095 16.3554 2.54968C16.3554 2.54968 10.1397 13.5669 9.92863 13.9257L14.0337 21.45C14.0994 21.6096 14.2104 21.7466 14.3528 21.844C14.4953 21.9415 14.6632 21.9953 14.8358 21.9987H17.7167C17.7913 22.0046 17.8661 21.99 17.933 21.9565C18 21.9231 18.0565 21.872 18.0966 21.8088C18.1355 21.7414 18.156 21.665 18.156 21.5872C18.156 21.5094 18.1355 21.4329 18.0966 21.3656L14.0232 13.9785L20.4394 2.63411C20.4763 2.56419 20.4956 2.4863 20.4956 2.40722C20.4956 2.32813 20.4763 2.25025 20.4394 2.18033C20.3965 2.12062 20.3391 2.07281 20.2726 2.04143C20.2062 2.01004 20.1328 1.9961 20.0595 2.00094H17.1257Z",
    fill: "currentColor"
  }))));
};
SvgXing.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgXing"
};
var _default = exports.default = SvgXing;