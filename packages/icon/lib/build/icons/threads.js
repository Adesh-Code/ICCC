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
var SvgThreads = function SvgThreads(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.1551 22H12.1491C9.16505 21.98 6.87105 20.996 5.32905 19.076C3.95905 17.366 3.25105 14.988 3.22705 12.008V11.994C3.25105 9.012 3.95905 6.636 5.33105 4.926C6.87105 3.004 9.16705 2.02 12.1491 2H12.1551H12.1611C14.4491 2.016 16.3631 2.604 17.8491 3.748C19.2471 4.824 20.2311 6.356 20.7731 8.304L19.0731 8.778C18.1531 5.478 15.8251 3.792 12.1531 3.766C9.72905 3.784 7.89505 4.546 6.70305 6.03C5.58905 7.42 5.01305 9.428 4.99105 12C5.01305 14.572 5.58905 16.58 6.70505 17.97C7.89705 19.456 9.73105 20.218 12.1551 20.234C14.3411 20.218 15.7871 19.708 16.9891 18.53C18.3611 17.186 18.3371 15.536 17.8971 14.532C17.6391 13.94 17.1691 13.448 16.5351 13.074C16.3751 14.2 16.0171 15.112 15.4651 15.8C14.7271 16.718 13.6811 17.22 12.3571 17.292C11.3551 17.346 10.3891 17.11 9.64105 16.624C8.75505 16.05 8.23705 15.174 8.18105 14.154C8.12705 13.162 8.52105 12.25 9.28905 11.586C10.0231 10.952 11.0551 10.58 12.2751 10.51C13.1731 10.46 14.0151 10.5 14.7911 10.628C14.6871 10.01 14.4791 9.518 14.1671 9.164C13.7391 8.676 13.0771 8.428 12.2011 8.422C12.1931 8.422 12.1851 8.422 12.1771 8.422C11.4731 8.422 10.5171 8.616 9.90905 9.522L8.44505 8.54C9.26105 7.328 10.5851 6.66 12.1771 6.66C12.1891 6.66 12.2011 6.66 12.2131 6.66C14.8751 6.676 16.4611 8.306 16.6191 11.15C16.7091 11.188 16.7991 11.228 16.8871 11.268C18.1291 11.852 19.0371 12.736 19.5151 13.826C20.1791 15.344 20.2411 17.818 18.2251 19.792C16.6831 21.3 14.8131 21.982 12.1611 22H12.1551ZM12.9911 12.258C12.7891 12.258 12.5851 12.264 12.3751 12.276C10.8451 12.362 9.89105 13.064 9.94505 14.062C10.0011 15.108 11.1551 15.594 12.2651 15.534C13.2851 15.48 14.6131 15.082 14.8371 12.442C14.2731 12.32 13.6551 12.258 12.9911 12.258Z",
    fill: "currentColor"
  }));
};
SvgThreads.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgThreads"
};
var _default = exports.default = SvgThreads;