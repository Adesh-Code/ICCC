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
var SvgFavoriteFull = function SvgFavoriteFull(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "utility/favorite-full"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M15.7831 8.38398L12.7462 2.53895C12.3729 1.82036 11.3449 1.82035 10.9715 2.53892L7.93436 8.38398H2.00193C1.14696 8.38398 0.686273 9.38735 1.24353 10.0358L5.68632 15.2053L3.75759 21.4136C3.4936 22.2634 4.38758 23.0088 5.17605 22.5964L11.8589 19.1009L18.3744 22.5693C19.1629 22.9891 20.0643 22.243 19.7993 21.3899L17.8779 15.2053L22.3795 10.0411C22.9434 9.39409 22.4839 8.38398 21.6257 8.38398H15.7831Z",
    fill: "currentColor"
  })));
};
SvgFavoriteFull.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgFavoriteFull"
};
var _default = exports.default = SvgFavoriteFull;