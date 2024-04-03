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
var SvgZhihu = function SvgZhihu(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5201 4.46586H22V19.1702H18.685L15.8754 20.9409L15.5979 19.1702H13.5201V4.46586ZM16.7656 18.3722L18.4151 17.3333L20.0847 17.334V6.29099H15.4169V17.334H16.6038L16.7656 18.3722Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.87229 11.0813H11.9552C12.0712 11.0805 12.1862 11.1026 12.2936 11.1463C12.401 11.19 12.4987 11.2545 12.5811 11.3361C12.663 11.4169 12.7279 11.5133 12.772 11.6196C12.8161 11.7259 12.8385 11.8399 12.8379 11.955V12.8982H8.72978C8.58782 14.12 8.32962 15.3255 7.95869 16.4982C7.5463 17.8153 6.69053 19.5516 5.73494 20.4411C4.15491 21.9068 2 21.0979 2 21.0979C2.76594 20.4627 3.48946 19.778 4.16592 19.0483C5.07197 17.9742 5.77468 16.744 6.23959 15.418C6.50605 14.6018 6.68559 13.7597 6.77522 12.9058H2.28158C2.28173 12.6658 2.32945 12.4282 2.42198 12.2067C2.51451 11.9853 2.65001 11.7844 2.82065 11.6156C3.16695 11.2734 3.63511 11.082 4.12392 11.082H6.96041C6.96554 10.9946 6.97148 10.9069 6.97746 10.8189C6.99397 10.5757 7.01067 10.3296 7.01067 10.0769V6.2903H5.40379L5.34182 6.49684C5.08365 7.44761 4.69811 8.07343 3.92771 8.48169C3.38809 8.74969 2.79522 8.8932 2.19277 8.90166C2.19277 8.90166 2.99415 7.28307 3.32599 6.36327C3.42866 6.08873 3.55507 5.72574 3.69892 5.31272C3.857 4.85883 4.03612 4.34451 4.22788 3.82076C4.54389 2.95054 4.77935 2.75639 5.17177 2.481C5.66468 2.15756 6.24359 1.99011 6.83305 2.00045C6.83305 2.00045 6.22788 3.72575 6.03924 4.2903C6.02157 4.33953 6.0039 4.39513 5.98622 4.45073C5.98462 4.45577 5.98302 4.46082 5.98141 4.46586H11.4699C11.7192 4.46563 11.9586 4.56357 12.1363 4.73849C12.2238 4.82455 12.2935 4.92707 12.3412 5.04014C12.3889 5.15322 12.4138 5.27462 12.4145 5.39735V6.29099H8.89914V10.0776C8.89724 10.2373 8.89139 10.3941 8.88564 10.5483C8.8789 10.729 8.87229 10.9064 8.87229 11.0813Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.1673 15.8834L9.75904 14.8569L11.9057 17.9984C12.1461 18.457 12.2144 18.9864 12.0985 19.491C12.0314 20.0224 11.875 20.5387 11.6358 21.018L8.1673 15.8834Z",
    fill: "currentColor"
  }));
};
SvgZhihu.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgZhihu"
};
var _default = exports.default = SvgZhihu;