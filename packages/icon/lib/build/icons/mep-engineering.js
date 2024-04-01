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
var SvgMepEngineering = function SvgMepEngineering(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.4288 1.85364V4.50421M19.8437 1.85364V4.50421M11.741 18.3231V10.9792M14.2776 21.817H21.5632M1.95215 6.87561H9.23772M12.749 12.1025H15.3642C16.2763 12.0973 17.172 12.3475 17.9514 12.825C18.2623 13.0158 18.5564 13.2329 18.8306 13.4742C19.2572 13.8621 19.5971 14.337 19.8279 14.8674C20.0586 15.3977 20.1749 15.9715 20.169 16.5506V21.817M12.749 17.3353H14.5242C14.825 17.3352 15.114 17.4528 15.3303 17.6635C15.5466 17.8741 15.6732 18.1613 15.6834 18.4643V21.817M3.19543 6.87561C3.19543 8.1852 3.19543 9.94057 3.19543 11.2445C3.19553 12.4188 3.2745 13.6782 3.75543 14.7951C5.43543 18.103 9.73621 17.3353 12.7546 17.3353M8.03955 6.87561C8.03955 8.03279 8.03955 9.22933 8.03955 10.8212C8.04022 11.0133 8.07239 11.2041 8.13476 11.3856C8.36436 12.0517 8.95235 12.1138 9.56275 12.0969C10.6211 12.063 11.6851 12.0969 12.7435 12.0969M15.7051 4.50444H21.5631V9.29311H15.7051V4.50444ZM17.3997 10.0408H19.8684V10.0579H17.3997V10.0408Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
SvgMepEngineering.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgMepEngineering"
};
var _default = exports.default = SvgMepEngineering;