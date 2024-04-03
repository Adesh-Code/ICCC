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
var SvgMepContractor = function SvgMepContractor(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.7246 16.9954H19.3765C19.9513 16.9913 20.5167 17.151 21.015 17.4584C21.2104 17.581 21.3964 17.7201 21.5713 17.8744C21.8384 18.1162 22.0527 18.4182 22.199 18.7589C22.3452 19.0996 22.4198 19.4706 22.4175 19.8456V22.6452M17.7246 20.3522H18.8472C19.0326 20.3481 19.2123 20.4211 19.3487 20.5559C19.4851 20.6908 19.5675 20.877 19.5788 21.0756V22.6164M11.6798 14.6772V17.1259C11.6682 17.883 11.8977 18.6218 12.3304 19.2201C12.4638 19.4025 12.6165 19.5676 12.7856 19.712C13.7396 20.5294 16.6043 20.3522 17.882 20.3522M14.751 14.6772V16.1963C14.751 16.1963 14.7712 16.9197 15.3612 16.9956C15.7215 17.0455 17.6817 16.9956 18.0425 16.9956M18.9478 6.66403V8.86828M20.9006 6.66403V8.86828M2.18457 18.4947C2.53491 14.4571 5.92346 11.2892 10.0519 11.2892C11.0992 11.2892 12.0988 11.493 13.0134 11.8632M18.7967 22.6488H23.1828V22.6453H18.7967V22.6488ZM11.047 14.3912H15.4331V14.3762H11.047V14.3912ZM17.1291 20.9767V16.271H17.127V20.9767H17.1291ZM17.554 8.86825H22.2909V12.8506H17.554V8.86825ZM19.2169 13.8959H20.6317V13.8995H19.2169V13.8959ZM13.3771 5.83384C13.3771 7.72766 11.8884 9.2629 10.052 9.2629C8.21552 9.2629 6.7268 7.72766 6.7268 5.83384C6.7268 3.94003 8.21552 2.40479 10.052 2.40479C11.8884 2.40479 13.3771 3.94003 13.3771 5.83384Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
SvgMepContractor.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgMepContractor"
};
var _default = exports.default = SvgMepContractor;