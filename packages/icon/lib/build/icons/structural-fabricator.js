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
var SvgStructuralFabricator = function SvgStructuralFabricator(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2.18469 18.4947C2.53503 14.4571 5.92358 11.2892 10.052 11.2892C11.0993 11.2892 12.099 11.493 13.0135 11.8632M19.4869 17.8987H22.864L17.8442 22.9185H11.093L12.3937 21.6178M19.4869 17.9017L15.7842 21.6044M14.5855 17.5198V22.9155M13.3772 5.83384C13.3772 7.72766 11.8885 9.2629 10.0521 9.2629C8.21564 9.2629 6.72692 7.72766 6.72692 5.83384C6.72692 3.94003 8.21564 2.40479 10.0521 2.40479C11.8885 2.40479 13.3772 3.94003 13.3772 5.83384ZM11.093 17.5228H17.8442L22.867 12.5001H16.1157L11.093 17.5228Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
SvgStructuralFabricator.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgStructuralFabricator"
};
var _default = exports.default = SvgStructuralFabricator;