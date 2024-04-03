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
var SvgWeibo = function SvgWeibo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/weibo"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M10.6072 12.7893C8.87322 12.3386 6.91516 13.2018 6.16148 14.7296C5.39506 16.2879 6.13601 18.0168 7.88783 18.582C9.70075 19.1677 11.8396 18.2714 12.5831 16.5883C13.3139 14.9435 12.3998 13.2528 10.6072 12.7893ZM9.28317 16.7666C8.93179 17.3293 8.17555 17.5737 7.60774 17.3166C7.04757 17.0619 6.88206 16.4075 7.23599 15.8601C7.58482 15.3152 8.31305 15.0708 8.87577 15.3076C9.44613 15.5495 9.62945 16.1988 9.28317 16.7666ZM10.4417 15.277C10.3144 15.496 10.0318 15.6004 9.81279 15.5087C9.59635 15.4196 9.52761 15.1752 9.64983 14.9613C9.77714 14.7474 10.047 14.6455 10.2635 14.7296C10.485 14.8111 10.5639 15.058 10.4417 15.277ZM18.9589 10.2558C19.3408 10.378 19.7482 10.1693 19.873 9.78986C20.1734 8.85794 19.985 7.79361 19.2823 7.01446C18.9486 6.64476 18.5236 6.36941 18.0498 6.2161C17.576 6.06279 17.0702 6.03692 16.5832 6.1411C16.4901 6.16091 16.4017 6.1989 16.3232 6.25289C16.2448 6.30688 16.1777 6.37582 16.1259 6.45576C16.0741 6.5357 16.0386 6.62507 16.0214 6.71876C16.0042 6.81244 16.0056 6.9086 16.0256 7.00173C16.0455 7.09477 16.0836 7.18296 16.1377 7.26125C16.1917 7.33954 16.2607 7.40639 16.3407 7.45796C16.4206 7.50953 16.51 7.5448 16.6036 7.56177C16.6972 7.57873 16.7933 7.57705 16.8862 7.55681C17.3548 7.45751 17.8615 7.60264 18.2077 7.98203C18.3712 8.16271 18.484 8.38345 18.5345 8.62182C18.5851 8.8602 18.5716 9.1077 18.4955 9.33918C18.4654 9.42978 18.4536 9.52543 18.4607 9.62061C18.4678 9.7158 18.4936 9.80865 18.5366 9.89383C18.5797 9.97901 18.6392 10.0548 18.7116 10.117C18.7841 10.1791 18.8681 10.2263 18.9589 10.2558ZM21.5 5.01057C20.0563 3.40898 17.9251 2.79789 15.9569 3.21547C15.8485 3.23837 15.7458 3.28248 15.6545 3.34526C15.5633 3.40803 15.4854 3.48823 15.4253 3.58124C15.3652 3.67425 15.324 3.77822 15.3043 3.88719C15.2845 3.99615 15.2865 4.10795 15.3101 4.21614C15.3332 4.32449 15.3773 4.42724 15.4401 4.51851C15.5029 4.60978 15.583 4.6878 15.6759 4.74809C15.7689 4.80839 15.8728 4.84978 15.9817 4.86992C16.0906 4.89005 16.2025 4.88853 16.3108 4.86543C17.7112 4.56752 19.2237 5.00293 20.2524 6.1411C21.2785 7.27927 21.556 8.83248 21.1181 10.1922C20.9755 10.6352 21.2174 11.1088 21.6604 11.254C22.1035 11.3965 22.5771 11.1546 22.7197 10.7141V10.7116C23.3333 8.79174 22.9463 6.60961 21.5 5.01057ZM17.5253 11.669C17.2147 11.5773 17.0034 11.5137 17.1663 11.1063C17.5177 10.2227 17.5534 9.45885 17.174 8.9165C16.461 7.89546 14.5055 7.95148 12.2648 8.88849C12.2648 8.88849 11.5621 9.19659 11.7403 8.63896C12.084 7.53135 12.0331 6.60452 11.4959 6.06726C10.2813 4.85016 7.05011 6.11309 4.27726 8.8834C2.20462 10.9586 1.00024 13.1585 1.00024 15.0606C1.00024 18.6992 5.66496 20.9118 10.2304 20.9118C16.214 20.9118 20.1938 17.4362 20.1938 14.6736C20.1938 13.0058 18.7883 12.0611 17.5253 11.669ZM10.2431 19.6082C6.60197 19.9672 3.45737 18.3223 3.22057 15.9288C2.98377 13.5379 5.74644 11.3074 9.38756 10.9484C13.0287 10.5868 16.1733 12.2343 16.4101 14.6252C16.6444 17.0161 13.8842 19.2466 10.2431 19.6082Z",
    fill: "currentColor"
  })));
};
SvgWeibo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgWeibo"
};
var _default = exports.default = SvgWeibo;