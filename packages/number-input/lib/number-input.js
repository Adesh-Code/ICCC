"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Input = _interopRequireDefault(require("@mui/material/Input"));
var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));
var _add = _interopRequireDefault(require("@iccc/icon/lib/build/icons/add"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _subtract = _interopRequireDefault(require("@iccc/icon/lib/build/icons/subtract"));
var _excluded = ["className", "id", "max", "min", "step", "value", "error", "onChange", "onKeyDown"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var NumberInput = function NumberInput(_ref) {
  var className = _ref.className,
    id = _ref.id,
    max = _ref.max,
    min = _ref.min,
    step = _ref.step,
    value = _ref.value,
    error = _ref.error,
    onChange = _ref.onChange,
    onKeyDown = _ref.onKeyDown,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    number = _useState2[0],
    setNumber = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    customError = _useState4[0],
    setCustomError = _useState4[1];
  (0, _react.useEffect)(function () {
    setNumber(value);
  }, [value]);
  var parseInput = function parseInput(input) {
    if (!input) {
      return "";
    }
    var num = parseFloat(input);
    return num;
  };
  var validateInput = function validateInput(input) {
    input === "" || input > max || input < min ? setCustomError(true) : setCustomError(false);
  };
  var handleChange = function handleChange(input) {
    var value = parseInput(input);
    validateInput(value);
    setNumber(value);
    if (onChange) {
      onChange(value);
    }
  };
  var changeValue = function changeValue(currentValue, max, min, step) {
    if (currentValue === "") return min;
    var number = currentValue + step;
    if (typeof max === "number" && number > max) {
      setCustomError(false);
      return max;
    }
    if (typeof min === "number" && number < min) {
      setCustomError(false);
      return min;
    }
    var decimals = (step.toString().split(".")[1] || []).length;
    if (decimals) {
      return parseFloat(number.toFixed(decimals));
    }
    validateInput(number);
    return number;
  };
  var handleKeyDown = function handleKeyDown(event, operation) {
    if (event.key === "ArrowUp" || operation === "add" && onChange) {
      return onChange(function (currentValue) {
        return changeValue(currentValue, max, min, step);
      });
    }
    if (event.key === "ArrowDown" || operation === "subtract" && onChange) {
      return onChange(function (currentValue) {
        return changeValue(currentValue, max, min, step * -1);
      });
    }
    if (onKeyDown) return onKeyDown(event);
    return null;
  };
  return /*#__PURE__*/_react.default.createElement(_Input.default, _extends({
    classes: {
      root: "DhigNumberInput ".concat(className.split(" "))
    },
    id: id,
    value: number,
    inputProps: {
      type: "number"
    },
    onChange: function onChange(e) {
      return handleChange(e.target.value);
    },
    onKeyDown: handleKeyDown,
    error: error || customError,
    endAdornment: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
      position: "end",
      tabIndex: "0"
    }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      fontSize: "medium",
      onClick: function onClick(e) {
        return handleKeyDown(e, "subtract");
      }
    }, /*#__PURE__*/_react.default.createElement(_subtract.default, null))), /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
      position: "end",
      tabIndex: "0"
    }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      fontSize: "medium",
      onClick: function onClick(e) {
        return handleKeyDown(e, "add");
      }
    }, /*#__PURE__*/_react.default.createElement(_add.default, null))))
  }, otherProps));
};
NumberInput.propTypes = {
  className: _propTypes.default.string,
  error: _propTypes.default.bool,
  id: _propTypes.default.string,
  max: _propTypes.default.number,
  min: _propTypes.default.number,
  step: _propTypes.default.number,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  onChange: _propTypes.default.func,
  onKeyDown: _propTypes.default.func
};
var defaultProps = exports.defaultProps = {
  className: "",
  error: false,
  id: "",
  max: 100,
  min: 0,
  step: 1,
  value: 0
};
NumberInput.defaultProps = _objectSpread({}, defaultProps);
NumberInput.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NumberInput",
  "props": {
    "className": {
      "defaultValue": {
        "value": "\"\"",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "error": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "id": {
      "defaultValue": {
        "value": "\"\"",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "max": {
      "defaultValue": {
        "value": "100",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "min": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "step": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "value": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onKeyDown": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
var _default = exports.default = NumberInput;