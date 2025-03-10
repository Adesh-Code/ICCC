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
var SvgWechatCircle = function SvgWechatCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/wechat-circle"
  }, /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.4215 8.72079C12.4215 8.34888 12.1183 8.04728 11.7464 8.04728C11.3745 8.04728 11.0713 8.34888 11.0713 8.72079C11.0713 9.09271 11.3745 9.3943 11.7464 9.3943C12.1199 9.3943 12.4215 9.09271 12.4215 8.72079Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.69752 8.72079C7.69752 9.09271 8.00068 9.3943 8.37259 9.3943C8.74451 9.3943 9.04767 9.09271 9.04767 8.72079C9.04767 8.34888 8.74607 8.04728 8.37259 8.04728C7.99911 8.04728 7.69752 8.34888 7.69752 8.72079Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.8153 12.1165C12.8153 12.4259 13.0669 12.6775 13.3778 12.6775C13.6872 12.6775 13.9404 12.4259 13.9404 12.1165C13.9404 11.8071 13.6888 11.5555 13.3778 11.5555C13.0669 11.5555 12.8153 11.8071 12.8153 12.1165Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.6265 12.1165C15.6265 12.4259 15.8781 12.6775 16.1891 12.6775C16.3379 12.6772 16.4806 12.618 16.586 12.5129C16.6914 12.4078 16.7509 12.2653 16.7517 12.1165C16.7517 11.8071 16.5001 11.5555 16.1891 11.5555C15.8781 11.5555 15.6265 11.8071 15.6265 12.1165Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.0577 9.40681C14.9671 9.40212 14.8749 9.39899 14.7827 9.39899C12.234 9.39899 10.1681 11.1179 10.1681 13.24C10.1681 13.5979 10.2275 13.9432 10.3384 14.2714C10.2462 14.2761 10.154 14.2777 10.0603 14.2777C9.48365 14.2777 8.92578 14.1948 8.40854 14.0464C8.36009 14.0323 8.31009 14.0245 8.26008 14.0245C8.1632 14.0245 8.07412 14.0542 7.9913 14.1026L6.88336 14.7418C6.85211 14.759 6.82242 14.773 6.78648 14.773C6.69272 14.773 6.61771 14.6965 6.61771 14.6043C6.61771 14.5716 6.62708 14.5399 6.63639 14.5083C6.6391 14.4991 6.64181 14.49 6.64428 14.4808C6.65053 14.4574 6.78648 13.9495 6.87243 13.6323C6.8818 13.5963 6.88962 13.562 6.88962 13.5245C6.88971 13.4706 6.87683 13.4174 6.85208 13.3696C6.82733 13.3217 6.79143 13.2805 6.74741 13.2494C5.68011 12.4775 4.99878 11.3351 4.99878 10.0678C4.99878 7.74256 7.26466 5.85797 10.0587 5.85797C12.584 5.85797 14.6764 7.39564 15.0577 9.40681ZM18.9988 13.2369C18.9988 14.2949 18.4315 15.245 17.5424 15.8888C17.472 15.9403 17.4252 16.0232 17.4236 16.1154C17.4236 16.1451 17.4299 16.1747 17.4377 16.2044C17.5096 16.4701 17.6236 16.8936 17.6283 16.9123C17.6307 16.9229 17.6337 16.9335 17.6367 16.9441C17.6434 16.9679 17.6502 16.9917 17.6502 17.0155C17.6503 17.034 17.6468 17.0524 17.6399 17.0695C17.6329 17.0867 17.6226 17.1023 17.6096 17.1155C17.5964 17.1285 17.5808 17.1388 17.5636 17.1458C17.5464 17.1527 17.5281 17.1563 17.5096 17.1561C17.4799 17.1561 17.4549 17.1452 17.4283 17.1295L16.5048 16.5982C16.436 16.5592 16.3625 16.5342 16.2813 16.5342C16.2391 16.5342 16.1985 16.5404 16.1578 16.5529C15.7281 16.6764 15.2624 16.7451 14.7811 16.7451C12.4512 16.7451 10.5635 15.1746 10.5635 13.2369C10.5635 11.2992 12.4527 9.72872 14.7811 9.72872C17.1111 9.72872 18.9988 11.2992 18.9988 13.2369Z",
    fill: "currentColor"
  }))));
};
SvgWechatCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgWechatCircle"
};
var _default = exports.default = SvgWechatCircle;