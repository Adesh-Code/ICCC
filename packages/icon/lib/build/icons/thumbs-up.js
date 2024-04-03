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
var SvgThumbsUp = function SvgThumbsUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8.07863 8.8428C8.07863 8.8428 9.60586 6.84286 10.4422 6.26106C11.327 5.63078 11.5452 3.69144 11.3149 2.74602C10.9998 1.44909 12.5755 0.0188262 13.9451 1.9218C15.3148 3.82477 13.9451 7.55799 13.9451 7.55799L17.0844 7.93373C17.0844 7.93373 20.7692 8.56402 20.8904 10.1155C20.9873 11.3276 19.7389 11.6548 19.7389 11.6548C19.7389 11.6548 20.9267 11.6912 20.9267 13.4002C20.9267 14.879 19.3389 14.9517 19.3389 14.9517C19.3389 14.9517 20.1267 15.4608 19.9449 16.6365C19.7631 17.8486 18.4662 18.0789 18.4662 18.0789C18.4662 18.0789 19.254 18.3092 18.8177 19.7031C18.5147 20.7455 16.5632 21 15.0239 21C13.3027 21 10.9634 20.5273 8.79376 19.4364C8.79376 19.4364 7.13321 18.6486 3 18.794V10.0428C3 10.0428 7.61804 10.4427 8.07863 8.8428Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeMiterlimit: 10,
    strokeLinejoin: "round"
  }));
};
SvgThumbsUp.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgThumbsUp"
};
var _default = exports.default = SvgThumbsUp;