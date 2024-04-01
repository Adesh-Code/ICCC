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
var SvgLink = function SvgLink(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/link"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M12.2633 5.69841L15.1325 2.8292C16.2381 1.7236 18.0383 1.7236 19.1439 2.8292L21.1708 4.85613C22.2764 5.96173 22.2764 7.76187 21.1708 8.86747L15.6712 14.3671C14.5656 15.4727 12.7654 15.4727 11.6598 14.3671L10 12.6957M11.591 18.4189L8.86747 21.1424C7.76187 22.248 5.96173 22.248 4.85613 21.1424L2.8292 19.1155C1.7236 18.0099 1.7236 16.2098 2.8292 15.1042L8.32884 9.60453C9.43444 8.49893 11.2346 8.49893 12.3402 9.60453L14 11.2644",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  })));
};
SvgLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgLink"
};
var _default = exports.default = SvgLink;