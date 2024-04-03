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
var SvgBilibiliCircle = function SvgBilibiliCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM7.90307 5.21406C7.59178 5.51435 7.59178 6.01299 7.90307 6.31329L8.56673 6.9535H8.11111C6.39289 6.9535 5 8.34639 5 10.0646V14.3467C5 16.0649 6.39289 17.4578 8.11111 17.4578H15.8889C17.6071 17.4578 19 16.0649 19 14.3467V10.0646C19 8.34639 17.6071 6.9535 15.8889 6.9535H15.3942L16.0578 6.31329C16.3692 6.01299 16.3692 5.51435 16.0578 5.21406C15.762 4.92865 15.2933 4.92865 14.9974 5.21406L13.3475 6.80569C13.3007 6.85092 13.2609 6.90064 13.228 6.9535H10.7329C10.7001 6.90064 10.6603 6.85092 10.6134 6.80569L8.96349 5.21406C8.66763 4.92865 8.19893 4.92865 7.90307 5.21406ZM6.55556 10.0097C6.55556 9.15056 7.252 8.45412 8.11111 8.45412H15.8889C16.748 8.45412 17.4444 9.15056 17.4444 10.0097V14.4016C17.4444 15.2607 16.748 15.9572 15.8889 15.9572H8.11111C7.252 15.9572 6.55556 15.2607 6.55556 14.4016V10.0097ZM9.66667 10.705C9.23712 10.705 8.88889 11.0533 8.88889 11.4828V12.1782C8.88889 12.6077 9.23712 12.9559 9.66667 12.9559C10.0962 12.9559 10.4444 12.6077 10.4444 12.1782V11.4828C10.4444 11.0533 10.0962 10.705 9.66667 10.705ZM13.5556 11.4828C13.5556 11.0533 13.9038 10.705 14.3333 10.705C14.7629 10.705 15.1111 11.0533 15.1111 11.4828V12.1782C15.1111 12.6077 14.7629 12.9559 14.3333 12.9559C13.9038 12.9559 13.5556 12.6077 13.5556 12.1782V11.4828Z",
    fill: "currentColor"
  }));
};
SvgBilibiliCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgBilibiliCircle"
};
var _default = exports.default = SvgBilibiliCircle;