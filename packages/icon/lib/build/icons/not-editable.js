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
var SvgNotEditable = function SvgNotEditable(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/not-editable"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M15.0553 4.80226L16.7883 3.06783C16.9546 2.90497 17.1649 2.79445 17.3933 2.74995H17.7523C19.6608 2.74995 21.208 4.29714 21.208 6.20569V6.28773C21.2131 6.37995 21.2131 6.47238 21.208 6.5646C21.1578 6.79539 21.04 7.00601 20.8696 7.16961L19.1571 8.88352M15.0553 4.80226L19.1571 8.88352M15.0553 4.80226C15.0553 4.80226 13.1638 6.69842 11.7549 8.11067M19.1571 8.88352L15.8904 12.1582M4.33944 15.527L2.75 21.2079L8.43096 19.6185M4.33944 15.527L8.43096 19.6185M4.33944 15.527L9.5 10.5M8.43096 19.6185L13.5 14.5M3.26276 3.26264L20.6953 20.6952",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgNotEditable.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgNotEditable"
};
var _default = exports.default = SvgNotEditable;