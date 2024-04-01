"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("./constants");
var _Container = _interopRequireDefault(require("@mui/material/Container"));
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
var _typography = _interopRequireDefault(require("@iccc/typography"));
var _excluded = ["label", "size", "variant", "value"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var getPercentage = function getPercentage(value) {
  return typeof value === "number" && "".concat(Math.round(value), "%");
};
var CircularProgress = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var label = _ref.label,
    size = _ref.size,
    variant = _ref.variant,
    value = _ref.value,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_Container.default, {
    sx: {
      alignItems: "center",
      display: "flex",
      flexDirection: size === _constants.sizes.MEDIUM ? "column" : "row"
    },
    className: "DhigCircularProgress--wrapper"
  }, /*#__PURE__*/_react.default.createElement(_Container.default, {
    sx: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column"
    },
    className: "DhigCircularProgress--container"
  }, /*#__PURE__*/_react.default.createElement(_CircularProgress.default, _extends({}, otherProps, {
    classes: {
      root: "DhigCircularProgress--background DhigCircularProgress--size--".concat(size)
    },
    size: null,
    variant: _constants.variants.DETERMINATE,
    value: 100
  })), /*#__PURE__*/_react.default.createElement(_CircularProgress.default, _extends({}, otherProps, {
    classes: {
      root: "DhigCircularProgress--foreground DhigCircularProgress--size--".concat(size)
    },
    size: null,
    variant: variant,
    value: value,
    ref: ref
  })), size === _constants.sizes.LARGE && (label || variant === _constants.variants.DETERMINATE) && /*#__PURE__*/_react.default.createElement(_Container.default, {
    sx: {
      flexDirection: "column"
    },
    className: "DhigCircularProgress--label DhigCircularProgress--label--".concat(size)
  }, /*#__PURE__*/_react.default.createElement(_typography.default, {
    align: "center",
    variant: "short-copy-small",
    color: "ink-on-background"
  }, label ? label : getPercentage(value)))), size !== _constants.sizes.LARGE && (label || variant === _constants.variants.DETERMINATE) && /*#__PURE__*/_react.default.createElement(_Container.default, {
    sx: {
      alignItems: "center",
      display: "flex"
    },
    className: "DhigCircularProgress--label--determinate DhigCircularProgress--label--determinate--".concat(size === _constants.sizes.MEDIUM ? "medium" : "notMedium")
  }, /*#__PURE__*/_react.default.createElement(_typography.default, {
    variant: /* istanbul ignore next */size === _constants.sizes["X-SMALL"] ? "smallprint" : "short-copy-small",
    color: "ink-on-background"
  }, label ? label : getPercentage(value))));
});
CircularProgress.displayName = "CircularProgress";
CircularProgress.defaultProps = {
  size: "small"
};
CircularProgress.propTypes = {
  label: _propTypes.default.string,
  size: _propTypes.default.oneOf(_constants.availableSizes),
  variant: _propTypes.default.oneOf(_constants.availableVariants),
  value: _propTypes.default.number
};
CircularProgress.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CircularProgress",
  "props": {
    "size": {
      "defaultValue": {
        "value": "\"small\"",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "availableSizes"
      },
      "required": false
    },
    "label": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "variant": {
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "availableVariants"
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
var _default = exports.default = CircularProgress;