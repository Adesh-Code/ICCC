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
var SvgGithubCircle = function SvgGithubCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/github-circle"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2C6.47562 2 2 6.4687 2 11.9824C2 16.4007 4.86247 20.133 8.83836 21.4537C9.33808 21.5445 9.52548 21.2414 9.52548 20.981C9.52548 20.7436 9.51233 19.9579 9.51233 19.122C7.00055 19.5815 6.35069 18.5114 6.15123 17.9501C6.03945 17.6612 5.55178 16.7749 5.12658 16.5386C4.77589 16.3504 4.27616 15.8897 5.11342 15.8766C5.90137 15.8646 6.46356 16.602 6.65096 16.8986C7.54959 18.4108 8.98849 17.9851 9.56384 17.7225C9.65041 17.0747 9.91233 16.6382 10.2005 16.3887C7.97699 16.1403 5.65041 15.2792 5.65041 11.4593C5.65041 10.3706 6.03945 9.47555 6.67616 8.77526C6.57644 8.52688 6.22575 7.50381 6.77589 6.13059C6.77589 6.13059 7.61315 5.86798 9.52548 7.15476C10.3266 6.92935 11.177 6.81665 12.0241 6.81665C12.8756 6.81665 13.726 6.92935 14.526 7.15476C16.4362 5.85485 17.2745 6.13059 17.2745 6.13059C17.8247 7.50381 17.4751 8.52688 17.3753 8.77526C18.0121 9.47555 18.4 10.3629 18.4 11.4593C18.4 15.2901 16.0636 16.1403 13.8367 16.3887C14.2005 16.7016 14.5129 17.2991 14.5129 18.2379C14.5129 19.5728 14.5008 20.644 14.5008 20.981C14.5008 21.2414 14.6871 21.5566 15.1879 21.4537C19.2581 20.0827 21.9978 16.2738 22 11.9824C22 6.4687 17.5244 2 12 2Z",
    fill: "currentColor"
  })));
};
SvgGithubCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgGithubCircle"
};
var _default = exports.default = SvgGithubCircle;