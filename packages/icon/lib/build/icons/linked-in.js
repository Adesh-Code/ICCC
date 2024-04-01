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
var SvgLinkedIn = function SvgLinkedIn(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/linkedIn"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5219 2.00017H3.47775C3.09171 1.99423 2.71912 2.14192 2.44198 2.41072C2.16484 2.67953 2.00585 3.04744 2 3.43348V20.5554C2.00294 20.9414 2.15911 21.3105 2.43416 21.5814C2.70921 21.8523 3.08061 22.0028 3.46664 21.9998H20.5219C20.9099 22.0058 21.2841 21.8566 21.5616 21.5854C21.839 21.3142 21.9967 20.9434 21.9997 20.5554V3.44459C21.9967 3.05661 21.839 2.68585 21.5616 2.41464C21.2841 2.14344 20.9099 1.99424 20.5219 2.00017ZM7.93321 19.0443H4.9666V9.50001H7.93321V19.0443ZM6.44437 8.18902C5.49614 8.18894 4.72637 7.42236 4.72234 6.47414C4.71831 5.52592 5.48155 4.75283 6.42975 4.7447C7.37795 4.73657 8.15433 5.49646 8.16657 6.44461C8.17557 6.9061 7.99774 7.35165 7.67346 7.68012C7.34917 8.00858 6.90594 8.19211 6.44437 8.18902ZM19.033 19.0332H16.0775V14.3999C16.0775 13.2888 16.0775 11.8666 14.5331 11.8666C12.9887 11.8666 12.7554 13.0777 12.7554 14.3221V19.0443H9.77764V9.49999H12.622V10.8C13.1992 9.80275 14.2819 9.20793 15.4331 9.25555C18.4331 9.25555 18.9886 11.2333 18.9886 13.7999L19.033 19.0332Z",
    fill: "currentColor"
  })));
};
SvgLinkedIn.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgLinkedIn"
};
var _default = exports.default = SvgLinkedIn;