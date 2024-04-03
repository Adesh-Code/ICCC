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
var SvgPinterest = function SvgPinterest(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/pinterest"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M12 2C6.47737 2 2 6.47737 2 12C2 16.2387 4.63374 19.8601 8.35391 21.3169C8.26337 20.5267 8.1893 19.3086 8.38683 18.4444C8.5679 17.6626 9.55556 13.4733 9.55556 13.4733C9.55556 13.4733 9.25926 12.8724 9.25926 11.9918C9.25926 10.6008 10.0658 9.56379 11.07 9.56379C11.9259 9.56379 12.3374 10.2058 12.3374 10.9712C12.3374 11.8272 11.7942 13.1111 11.5062 14.3045C11.2675 15.3004 12.0082 16.1152 12.9877 16.1152C14.7654 16.1152 16.1317 14.2387 16.1317 11.5391C16.1317 9.14403 14.4115 7.47325 11.9506 7.47325C9.10288 7.47325 7.4321 9.60494 7.4321 11.8107C7.4321 12.6667 7.76132 13.5885 8.17284 14.0905C8.25514 14.1893 8.26337 14.2798 8.23868 14.3786C8.16461 14.6914 7.99177 15.3745 7.95885 15.5144C7.9177 15.6955 7.8107 15.7366 7.6214 15.6461C6.37037 15.0617 5.58848 13.2428 5.58848 11.7695C5.58848 8.61728 7.87654 5.72016 12.1975 5.72016C15.6626 5.72016 18.3621 8.1893 18.3621 11.4979C18.3621 14.9465 16.1893 17.7202 13.177 17.7202C12.1646 17.7202 11.2099 17.1934 10.8889 16.5679C10.8889 16.5679 10.3868 18.4774 10.2634 18.9465C10.0412 19.8189 9.4321 20.9053 9.02058 21.572C9.95885 21.8601 10.9465 22.0165 11.9835 22.0165C17.5062 22.0165 21.9835 17.5391 21.9835 12.0165C22 6.47737 17.5226 2 12 2Z",
    fill: "currentColor"
  })));
};
SvgPinterest.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgPinterest"
};
var _default = exports.default = SvgPinterest;