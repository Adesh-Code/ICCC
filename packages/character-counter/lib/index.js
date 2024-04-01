"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCount = exports.CharacterCounter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typography = _interopRequireDefault(require("@iccc/typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Renders a character counter
 *
 * @param {Object} props
 * @param {number} props.count - Current character count
 * @param {number} props.maxLength - Maximum allowed length
 *
 */
var CharacterCounter = exports.CharacterCounter = function CharacterCounter(_ref) {
  var count = _ref.count,
    maxLength = _ref.maxLength;
  return /*#__PURE__*/_react.default.createElement(_typography.default, {
    className: "DhigTextInput--count"
  }, "".concat(count, " / ").concat(maxLength));
};
CharacterCounter.propTypes = {
  count: _propTypes.default.number,
  maxLength: _propTypes.default.number,
  exceeded: _propTypes.default.bool
};
var useCount = exports.useCount = function useCount(maxLength) {
  var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var _useState = (0, _react.useState)(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var count = value && value.length || 0;
  var _useState3 = (0, _react.useState)(count > maxLength),
    _useState4 = _slicedToArray(_useState3, 2),
    exceeded = _useState4[0],
    setExceeded = _useState4[1];
  var handleChange = function handleChange(event) {
    var inputValue = event.target.value;
    setExceeded(inputValue.length > maxLength);
    setValue(inputValue);
  };
  return {
    value: value,
    count: count,
    exceeded: exceeded,
    handleChange: handleChange
  };
};
CharacterCounter.__docgenInfo = {
  "description": "Renders a character counter\n\n@param {Object} props\n@param {number} props.count - Current character count\n@param {number} props.maxLength - Maximum allowed length",
  "methods": [],
  "displayName": "CharacterCounter",
  "props": {
    "count": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "maxLength": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "exceeded": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};