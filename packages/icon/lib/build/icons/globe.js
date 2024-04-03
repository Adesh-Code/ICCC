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
var SvgGlobe = function SvgGlobe(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "miscellaneous/globe"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M22 12H2M22 12C22 10.1786 21.513 8.47087 20.6622 7M22 12C22 13.8214 21.513 15.5291 20.6622 17M12 22V2M12 22C23.5 12 12 2 12 2M12 22C0.5 12 12 2 12 2M12 22C15.7014 22 18.9331 19.989 20.6622 17M12 22C8.29859 22 5.06687 19.989 3.33782 17M2 12C2 10.1786 2.48697 8.47087 3.33782 7M2 12C2 13.8214 2.48697 15.5291 3.33782 17M12 2C15.7014 2 18.9331 4.01099 20.6622 7M12 2C8.29859 2 5.06687 4.01099 3.33782 7M20.6622 7H3.33782M20.6622 17H3.33782",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinejoin: "round"
  })));
};
SvgGlobe.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgGlobe"
};
var _default = exports.default = SvgGlobe;