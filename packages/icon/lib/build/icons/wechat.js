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
var SvgWechat = function SvgWechat(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/wechat"
  }, /*#__PURE__*/React.createElement("path", {
    id: "fill",
    d: "M16.3735 8.69434C16.5184 8.69434 16.6632 8.69925 16.8057 8.70662C16.2065 5.54622 12.9184 3.12988 8.95011 3.12988C4.55944 3.12988 0.998779 6.09137 0.998779 9.74535C0.998779 11.7369 2.06943 13.5319 3.74663 14.745C3.81581 14.7939 3.87222 14.8586 3.91111 14.9338C3.95001 15.0091 3.97024 15.0925 3.97009 15.1772C3.97009 15.2361 3.95781 15.2902 3.94308 15.3466C3.80802 15.8451 3.59438 16.6432 3.58456 16.6801C3.56737 16.7439 3.54281 16.8077 3.54281 16.8741C3.54281 17.0189 3.66068 17.1393 3.80802 17.1393C3.8645 17.1393 3.91116 17.1172 3.96027 17.0901L5.70131 16.0858C5.83146 16.0097 5.97143 15.963 6.12368 15.963C6.20226 15.963 6.28084 15.9753 6.35697 15.9974C7.16978 16.2307 8.04644 16.3608 8.95257 16.3608C9.09991 16.3608 9.24479 16.3584 9.38967 16.351C9.21532 15.8353 9.12201 15.2926 9.12201 14.7303C9.12201 11.3955 12.3684 8.69434 16.3735 8.69434ZM11.6022 6.57022C12.1866 6.57022 12.663 7.04416 12.663 7.6286C12.663 8.21304 12.1891 8.68698 11.6022 8.68698C11.0178 8.68698 10.5414 8.21304 10.5414 7.6286C10.5414 7.04416 11.0178 6.57022 11.6022 6.57022ZM6.30049 8.68698C5.71605 8.68698 5.23965 8.21304 5.23965 7.6286C5.23965 7.04416 5.71359 6.57022 6.30049 6.57022C6.88738 6.57022 7.36132 7.04416 7.36132 7.6286C7.36132 8.21304 6.88493 8.68698 6.30049 8.68698ZM20.7101 18.8926C22.1074 17.8809 22.9988 16.3878 22.9988 14.7254C22.9988 11.6804 20.0324 9.21248 16.371 9.21248C12.7121 9.21248 9.74328 11.6804 9.74328 14.7254C9.74328 17.7704 12.7097 20.2383 16.371 20.2383C17.1274 20.2383 17.8591 20.1302 18.5344 19.9362C18.5983 19.9166 18.6621 19.9068 18.7284 19.9068C18.8561 19.9068 18.9715 19.946 19.0796 20.0074L20.5309 20.8424C20.5726 20.8669 20.6119 20.8841 20.6586 20.8841C20.6877 20.8843 20.7165 20.8788 20.7435 20.8679C20.7705 20.8569 20.795 20.8407 20.8157 20.8202C20.8362 20.7995 20.8524 20.775 20.8633 20.748C20.8743 20.7211 20.8798 20.6922 20.8796 20.6631C20.8796 20.6091 20.8575 20.555 20.8452 20.501C20.8378 20.4715 20.6586 19.8061 20.5456 19.3886C20.5333 19.342 20.5235 19.2953 20.5235 19.2486C20.526 19.1038 20.5996 18.9736 20.7101 18.8926ZM14.1659 13.8463C13.6772 13.8463 13.2818 13.4509 13.2818 12.9647C13.2818 12.4785 13.6772 12.0831 14.1659 12.0831C14.6545 12.0831 15.0499 12.4785 15.0499 12.9647C15.0499 13.4509 14.6521 13.8463 14.1659 13.8463ZM18.5836 13.8463C18.0949 13.8463 17.6995 13.4509 17.6995 12.9647C17.6995 12.4785 18.0949 12.0831 18.5836 12.0831C19.0722 12.0831 19.4676 12.4785 19.4676 12.9647C19.4664 13.1986 19.3728 13.4225 19.2072 13.5876C19.0416 13.7528 18.8174 13.8457 18.5836 13.8463Z",
    fill: "currentColor"
  })));
};
SvgWechat.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgWechat"
};
var _default = exports.default = SvgWechat;