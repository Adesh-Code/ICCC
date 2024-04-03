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
var SvgWeiboCircle = function SvgWeiboCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/weibo-circle"
  }, /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.00535 15.2198C9.3925 15.3952 9.90811 15.2285 10.1477 14.8448C10.3838 14.4577 10.2588 14.015 9.86992 13.8501C9.48625 13.6886 8.98973 13.8553 8.75189 14.2268C8.51057 14.6001 8.62342 15.0462 9.00535 15.2198Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5088 13.9872C10.6581 14.0497 10.8508 13.9785 10.9376 13.8292C11.0209 13.6799 10.9671 13.5115 10.8161 13.456C10.6685 13.3987 10.4845 13.4681 10.3977 13.614C10.3144 13.7598 10.3612 13.9265 10.5088 13.9872Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.0141 14.2737C6.17555 15.9056 8.31961 17.0271 10.8022 16.7823C13.2848 16.5358 15.1667 15.015 15.007 13.3848C14.8455 11.7546 12.7015 10.6314 10.2189 10.8779C7.73629 11.1227 5.85265 12.6435 6.0141 14.2737ZM8.01927 13.456C8.53314 12.4143 9.86818 11.8258 11.0504 12.1331C12.2726 12.4491 12.8959 13.6018 12.3976 14.7233C11.8907 15.8709 10.4324 16.482 9.19632 16.0827C8.0019 15.6973 7.49671 14.5185 8.01927 13.456Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.368 10.088C17.283 10.3467 17.0052 10.489 16.7448 10.4057C16.6829 10.3856 16.6256 10.3534 16.5762 10.311C16.5268 10.2687 16.4862 10.217 16.4569 10.1589C16.4275 10.1008 16.4099 10.0375 16.4051 9.9726C16.4003 9.9077 16.4083 9.84249 16.4288 9.78071C16.4807 9.62289 16.4899 9.45414 16.4554 9.29161C16.421 9.12908 16.3441 8.97857 16.2326 8.85539C15.9965 8.59671 15.651 8.49776 15.3316 8.56546C15.2682 8.57926 15.2027 8.58041 15.1389 8.56884C15.0751 8.55728 15.0141 8.53322 14.9596 8.49806C14.9051 8.4629 14.8581 8.41732 14.8212 8.36395C14.7844 8.31056 14.7584 8.25043 14.7448 8.187C14.7312 8.1235 14.7302 8.05794 14.7419 7.99406C14.7537 7.93019 14.7779 7.86925 14.8132 7.81475C14.8485 7.76024 14.8942 7.71324 14.9477 7.67643C15.0013 7.63961 15.0615 7.61371 15.125 7.60021C15.457 7.52918 15.8019 7.54681 16.1249 7.65134C16.448 7.75587 16.7378 7.94361 16.9653 8.19568C17.4444 8.72692 17.5729 9.4526 17.368 10.088ZM14.6979 5.60546C16.0399 5.32074 17.493 5.7374 18.4774 6.82939C19.4635 7.91964 19.7273 9.40746 19.309 10.7165V10.7182C19.2117 11.0185 18.8888 11.1835 18.5867 11.0862C18.2847 10.9873 18.1197 10.6644 18.217 10.3623C18.5156 9.43524 18.3263 8.37623 17.6267 7.60021C16.9253 6.82418 15.8941 6.52731 14.9393 6.73043C14.8654 6.74618 14.7891 6.74722 14.7149 6.73349C14.6406 6.71976 14.5698 6.69154 14.5064 6.65043C14.443 6.60932 14.3884 6.55613 14.3456 6.49389C14.3028 6.43166 14.2727 6.36161 14.257 6.28773C14.2409 6.21396 14.2395 6.13774 14.253 6.06345C14.2665 5.98915 14.2945 5.91826 14.3355 5.85484C14.3765 5.79143 14.4296 5.73675 14.4918 5.69395C14.554 5.65115 14.6241 5.62107 14.6979 5.60546ZM15.5226 10.9855C15.4115 11.2633 15.5556 11.3067 15.7674 11.3692C16.6285 11.6366 17.5868 12.2807 17.5868 13.4178C17.5868 15.3014 14.8733 17.6712 10.7935 17.6712C7.68073 17.6712 4.50024 16.1625 4.50024 13.6817C4.50024 12.3848 5.32141 10.8849 6.73457 9.46996C8.62515 7.58111 10.8282 6.72002 11.6563 7.54986C12.0227 7.91617 12.0574 8.5481 11.823 9.30329C11.7015 9.68349 12.1806 9.47343 12.1806 9.47343C13.7084 8.83455 15.0417 8.79636 15.5278 9.49253C15.7865 9.86231 15.7622 10.3831 15.5226 10.9855Z",
    fill: "currentColor"
  }))));
};
SvgWeiboCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgWeiboCircle"
};
var _default = exports.default = SvgWeiboCircle;