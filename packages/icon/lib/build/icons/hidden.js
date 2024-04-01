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
var SvgHidden = function SvgHidden(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/hidden"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M3 3L21 21M6.5 6.72278C3.44566 8.79546 2 12 2 12C2 12 5.15789 19 12 19C14.1045 19 15.8605 18.3377 17.2833 17.4206M19.071 16C21.0525 14.1003 22 12 22 12C22 12 18.8421 5 12 5C11.6115 5 11.2635 4.96622 11 5C10 5 9.22473 5.27526 9 5.5M9.11299 9.23139C8.42364 9.95003 8 10.9255 8 12C8 14.2091 9.79086 16 12 16C13.0693 16 14.0407 15.5804 14.7583 14.8969M11.5 8.03095C11.6638 8.01052 11.8307 8 12 8C12.1693 8 12.3362 8.01052 12.5 8.03095C12.9707 8.08965 13.4161 8.23015 13.8214 8.43777C14.2161 8.64 14.5728 8.90591 14.8779 9.22194C15.1493 9.50301 15.3799 9.82372 15.5601 10.1745C15.6937 10.4345 15.7996 10.7109 15.874 11C15.9562 11.3196 16 11.6547 16 12C16 12.1693 15.9895 12.3362 15.9691 12.5",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgHidden.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgHidden"
};
var _default = exports.default = SvgHidden;