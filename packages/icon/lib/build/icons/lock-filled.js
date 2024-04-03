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
var SvgLockFilled = function SvgLockFilled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.63 5.47055C16.63 3.94552 16.0553 2.74566 15.1492 1.93399C15.0376 1.83403 14.9217 1.74056 14.802 1.65352C13.9643 1.04423 12.9431 0.75 11.94 0.75C10.7936 0.75 9.62356 1.13431 8.73083 1.934C7.82474 2.74566 7.25 3.94553 7.25 5.47055V8.42647H5C4.58579 8.42647 4.25 8.76226 4.25 9.17647V19.7647C4.25 20.1789 4.58579 20.5147 5 20.5147H18.7647C19.1789 20.5147 19.5147 20.1789 19.5147 19.7647V9.17647C19.5147 8.76226 19.1789 8.42647 18.7647 8.42647H16.63V5.47055ZM8.75 5.47055V8.42647H15.13V5.47055C15.13 4.34853 14.7197 3.56312 14.1483 3.05128C13.5636 2.52745 12.7636 2.25 11.94 2.25C11.1164 2.25 10.3164 2.52745 9.73167 3.05128C9.16027 3.56313 8.75 4.34854 8.75 5.47055ZM12.6324 13.4118C12.6324 12.9975 12.2966 12.6618 11.8824 12.6618C11.4681 12.6618 11.1324 12.9975 11.1324 13.4118V15.5294C11.1324 15.9436 11.4681 16.2794 11.8824 16.2794C12.2966 16.2794 12.6324 15.9436 12.6324 15.5294V13.4118Z",
    fill: "currentColor"
  }));
};
SvgLockFilled.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgLockFilled"
};
var _default = exports.default = SvgLockFilled;