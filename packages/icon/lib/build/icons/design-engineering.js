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
var SvgDesignEngineering = function SvgDesignEngineering(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19.2389 7.25513L13.1389 10.9551M10.8689 10.9551L3.62885 6.56512M3.62885 6.56512L12.0089 1.49512L19.2389 5.87512M3.62885 6.56512L3.63885 11.8952V16.2952L7.80885 18.8252L10.8689 20.6752M11.9988 12.7751V16.5051V20.2351M19.2389 16.9851L13.1389 20.6751M20.3789 15.2151V7.70508M7.77888 9.0815V18.807M3.63807 11.4805L11.9988 16.5352M13.1388 10.5051H10.8688V12.7751H13.1388V10.5051ZM21.5088 5.43506H19.2388V7.70508H21.5088V5.43506ZM13.1388 20.2351H10.8688V22.505H13.1388V20.2351ZM21.5088 15.2151H19.2388V17.4851H21.5088V15.2151Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
SvgDesignEngineering.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgDesignEngineering"
};
var _default = exports.default = SvgDesignEngineering;