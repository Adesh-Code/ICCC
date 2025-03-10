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
var SvgNaverBlogCircle = function SvgNaverBlogCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "social/naver-blog-circle"
  }, /*#__PURE__*/React.createElement("g", {
    id: "fill"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM18 14C17.9974 14.4969 17.7981 14.9725 17.4458 15.3229C17.0936 15.6733 16.6169 15.87 16.12 15.87H13.12L12.12 17.52C12.1021 17.5489 12.077 17.5728 12.0473 17.5894C12.0175 17.606 11.9841 17.6146 11.95 17.6146C11.916 17.6146 11.8825 17.606 11.8527 17.5894C11.823 17.5728 11.7979 17.5489 11.78 17.52L10.78 15.87H7.88C7.38313 15.87 6.90645 15.6733 6.55417 15.3229C6.20188 14.9725 6.00265 14.4969 6 14V9.08C6 8.58139 6.19808 8.10321 6.55064 7.75064C6.90321 7.39807 7.3814 7.2 7.88 7.2H16.12C16.6186 7.2 17.0968 7.39807 17.4494 7.75064C17.8019 8.10321 18 8.58139 18 9.08V14Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.17 10.9101V12.8101H10.56C10.56 12.2901 10.56 11.7601 10.56 11.2401C10.56 10.9901 10.56 10.6001 10.21 10.5201V10.0001C10.3294 9.9969 10.4484 10.0173 10.56 10.0601C10.7352 10.1242 10.887 10.2396 10.9958 10.3912C11.1046 10.5428 11.1653 10.7236 11.17 10.9101Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.1601 12.6699V10.6699L15.5501 10.6499V10.8499C15.3723 10.7218 15.1592 10.6519 14.9401 10.6499C14.6563 10.6499 14.3842 10.7626 14.1835 10.9633C13.9829 11.164 13.8701 11.4361 13.8701 11.7199C13.8701 12.0037 13.9829 12.2758 14.1835 12.4765C14.3842 12.6772 14.6563 12.7899 14.9401 12.7899C15.1592 12.7879 15.3723 12.718 15.5501 12.5899V12.6899C15.5501 12.7099 15.5501 13.0699 15.0701 13.0699V13.6399C15.3252 13.6399 15.575 13.567 15.7901 13.4299C15.9113 13.3451 16.0089 13.2308 16.0736 13.0979C16.1384 12.9649 16.1681 12.8176 16.1601 12.6699ZM15.6098 11.74C15.6098 12.0327 15.3725 12.27 15.0798 12.27C14.7871 12.27 14.5498 12.0327 14.5498 11.74C14.5498 11.4472 14.7871 11.21 15.0798 11.21C15.3725 11.21 15.6098 11.4472 15.6098 11.74Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.4694 12.3344C13.587 12.1584 13.6498 11.9515 13.6498 11.7399C13.6498 11.4561 13.537 11.184 13.3364 10.9833C13.1357 10.7827 12.8636 10.6699 12.5798 10.6699C12.3681 10.6699 12.1613 10.7327 11.9853 10.8502C11.8093 10.9678 11.6722 11.1349 11.5912 11.3305C11.5102 11.526 11.489 11.7411 11.5303 11.9487C11.5716 12.1562 11.6735 12.3469 11.8232 12.4965C11.9728 12.6462 12.1635 12.7481 12.371 12.7894C12.5786 12.8306 12.7937 12.8095 12.9892 12.7285C13.1848 12.6475 13.3519 12.5103 13.4694 12.3344ZM13.1098 11.74C13.1098 12.0327 12.8725 12.27 12.5798 12.27C12.2871 12.27 12.0498 12.0327 12.0498 11.74C12.0498 11.4472 12.2871 11.21 12.5798 11.21C12.8725 11.21 13.1098 11.4472 13.1098 11.74Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.1322 12.1487C10.1849 12.019 10.2113 11.88 10.21 11.74C10.2209 11.4605 10.1208 11.188 9.9316 10.9819C9.74241 10.7759 9.47943 10.653 9.2 10.64C8.99269 10.6384 8.79 10.7013 8.62 10.82V10H8V12.81H8.57V12.63C8.74 12.7487 8.94269 12.8116 9.15 12.81C9.29005 12.81 9.42871 12.7823 9.55797 12.7284C9.68723 12.6745 9.80453 12.5955 9.9031 12.496C10.0017 12.3965 10.0795 12.2785 10.1322 12.1487ZM9.60004 11.74C9.60004 12.0327 9.36275 12.27 9.07004 12.27C8.77733 12.27 8.54004 12.0327 8.54004 11.74C8.54004 11.4472 8.77733 11.21 9.07004 11.21C9.36275 11.21 9.60004 11.4472 9.60004 11.74Z",
    fill: "currentColor"
  }))));
};
SvgNaverBlogCircle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgNaverBlogCircle"
};
var _default = exports.default = SvgNaverBlogCircle;