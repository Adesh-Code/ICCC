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
var SvgBilibili = function SvgBilibili(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.14724 3.87613C5.70254 3.44713 5.70254 2.73479 6.14724 2.3058C6.5699 1.89807 7.23947 1.89807 7.66212 2.3058L10.0191 4.57956C10.0861 4.64417 10.143 4.7152 10.1898 4.79072H13.7543C13.8012 4.7152 13.8581 4.64417 13.925 4.57956L16.282 2.3058C16.7047 1.89807 17.3742 1.89807 17.7969 2.3058C18.2417 2.73479 18.2417 3.44713 17.7969 3.87613L16.8489 4.79072H17.5556C20.0101 4.79072 22 6.78056 22 9.23516V15.3524C22 17.807 20.0101 19.7969 17.5556 19.7969H6.44444C3.98984 19.7969 2 17.807 2 15.3524V9.23515C2 6.78055 3.98984 4.79072 6.44444 4.79072H7.09532L6.14724 3.87613ZM6.44444 6.93445C5.21714 6.93445 4.22222 7.92937 4.22222 9.15667V15.4309C4.22222 16.6582 5.21714 17.6531 6.44444 17.6531H17.5556C18.7829 17.6531 19.7778 16.6582 19.7778 15.4309V9.15667C19.7778 7.92937 18.7829 6.93445 17.5556 6.93445H6.44444ZM7.55556 11.2612C7.55556 10.6475 8.05302 10.1501 8.66667 10.1501C9.28031 10.1501 9.77778 10.6475 9.77778 11.2612V12.2545C9.77778 12.8682 9.28031 13.3656 8.66667 13.3656C8.05302 13.3656 7.55556 12.8682 7.55556 12.2545V11.2612ZM15.3333 10.1501C14.7197 10.1501 14.2222 10.6475 14.2222 11.2612V12.2545C14.2222 12.8682 14.7197 13.3656 15.3333 13.3656C15.947 13.3656 16.4444 12.8682 16.4444 12.2545V11.2612C16.4444 10.6475 15.947 10.1501 15.3333 10.1501Z",
    fill: "currentColor"
  }));
};
SvgBilibili.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgBilibili"
};
var _default = exports.default = SvgBilibili;