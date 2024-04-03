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
var SvgManufacturing = function SvgManufacturing(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.17236 5.22522C7.17236 5.92616 6.60414 6.49438 5.9032 6.49438C5.20226 6.49438 4.63403 5.92616 4.63403 5.22522C4.63403 4.52428 5.20226 3.95605 5.9032 3.95605C6.60414 3.95605 7.17236 4.52428 7.17236 5.22522Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.42714 15.9537L3.25448 7.40009M12.8083 14.2097L8.67319 7.24057M8.53475 20.1421H15.3379M11.7258 16.135H12.1387M19.3837 14.5733V11.8347M9.32837 3.53711H17.6831V6.73386H9.32837V3.53711ZM17.6833 2.4622H21.0922V7.8004H17.6833V2.4622ZM18.2919 7.80027H20.4836V11.3414H18.2919V7.80027ZM4.25195 18.0842H19.6125V22.2H4.25195V18.0842ZM9.32846 5.22532C9.32846 7.11705 7.79491 8.6506 5.90318 8.6506C4.01145 8.6506 2.47791 7.11705 2.47791 5.22532C2.47791 3.3336 4.01145 1.80005 5.90318 1.80005C7.79491 1.80005 9.32846 3.3336 9.32846 5.22532ZM16.1863 18.0844H7.68623C7.73054 17.4685 7.9098 16.8698 8.21129 16.3309C8.57926 15.6651 9.11879 15.11 9.77385 14.7232C10.4289 14.3364 11.1756 14.1321 11.9363 14.1315C12.556 14.1287 13.1686 14.2641 13.7294 14.5278C14.419 14.8475 15.0105 15.346 15.4425 15.9714C15.8745 16.5967 16.1313 17.3263 16.1863 18.0844Z",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
SvgManufacturing.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SvgManufacturing"
};
var _default = exports.default = SvgManufacturing;