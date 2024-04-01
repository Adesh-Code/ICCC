"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactOtpInput = _interopRequireDefault(require("react-otp-input"));
var _Input = _interopRequireDefault(require("@mui/material/Input"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _styles = _interopRequireDefault(require("./styles"));
var _excluded = ["dense", "error", "disabled"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SecurityCode = function SecurityCode(_ref) {
  var dense = _ref.dense,
    error = _ref.error,
    disabled = _ref.disabled,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var classNames = ["DhigSecurityCode"];
  if (dense) {
    classNames.push("DhigSecurityCode--dense");
  }
  if (error) {
    classNames.push("DhigSecurityCode--error");
  }
  var renderInput = function renderInput(inputProps) {
    return /*#__PURE__*/_react.default.createElement(_Input.default, {
      inputProps: _objectSpread({}, inputProps),
      className: classNames.join(" "),
      sx: function sx(theme) {
        return (0, _styles.default)(theme);
      },
      endAdornment: /*#__PURE__*/_react.default.createElement(_Divider.default, {
        sx: {
          height: "60%",
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)"
        },
        orientation: "vertical",
        light: true
      }),
      disabled: disabled
    });
  };
  return /*#__PURE__*/_react.default.createElement(_reactOtpInput.default, _extends({
    renderInput: renderInput
  }, otherProps));
};
SecurityCode.propTypes = {
  /*
   * Disabled state
   */
  disabled: _propTypes.default.bool,
  /*
   * Dense variant
   */
  dense: _propTypes.default.bool,
  /*
   * Error state
   */
  error: _propTypes.default.bool,
  /*
   * Number of inputs
   */
  numInputs: _propTypes.default.number
};
SecurityCode.defaultProps = {
  disabled: false,
  dense: false,
  error: false,
  numInputs: 6
};
SecurityCode.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SecurityCode",
  "props": {
    "disabled": {
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
    "dense": {
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
    "numInputs": {
      "defaultValue": {
        "value": "6",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
var _default = exports.default = SecurityCode;