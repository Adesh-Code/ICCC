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
var SvgEditProfile = function SvgEditProfile(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "actions/edit-profile"
  }, /*#__PURE__*/React.createElement("path", {
    id: "stroke",
    d: "M1 18.4736C1 14.0554 4.58172 10.4736 9 10.4736C10.1686 10.4736 11.2786 10.7242 12.2794 11.1745M10.2053 18.6891L9 22.9971L13.308 21.7918M10.2053 18.6891L18.3314 10.5563M10.2053 18.6891L13.308 21.7918M13.308 21.7918L21.4419 13.6512M18.3314 10.5563L19.6456 9.24106C19.7716 9.11756 19.9312 9.03374 20.1044 9H20.3765C21.8238 9 22.9971 10.1733 22.9971 11.6206V11.6828C23.001 11.7527 23.001 11.8228 22.9971 11.8927C22.959 12.0678 22.8697 12.2275 22.7405 12.3515L21.4419 13.6512M18.3314 10.5563L21.4419 13.6512M12.3684 4.47368C12.3684 6.39215 10.8604 7.94737 9.00003 7.94737C7.1397 7.94737 5.63161 6.39215 5.63161 4.47368C5.63161 2.55522 7.1397 1 9.00003 1C10.8604 1 12.3684 2.55522 12.3684 4.47368Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
SvgEditProfile.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgEditProfile"
};
var _default = exports.default = SvgEditProfile;