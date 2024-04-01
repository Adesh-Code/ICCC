"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinearProgressLabel = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("./constants");
var _LinearProgress = _interopRequireDefault(require("@mui/material/LinearProgress"));
var _typography = _interopRequireDefault(require("@iccc/typography"));
var _excluded = ["children", "size", "variant", "value"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var getPercentage = function getPercentage(value) {
  return typeof value === "number" && "".concat(Math.round(value), "%");
};
var LinearProgress = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    size = _ref.size,
    variant = _ref.variant,
    value = _ref.value,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_LinearProgress.default, _extends({}, otherProps, {
    classes: {
      root: "DhigLinearProgress--size--".concat(size)
    },
    variant: variant,
    value: value,
    ref: ref
  })), children);
});
LinearProgress.displayName = "LinearProgress";
LinearProgress.defaultProps = {
  size: "small"
};
LinearProgress.propTypes = {
  children: _propTypes.default.node,
  size: _propTypes.default.oneOf(_constants.availableSizes),
  variant: _propTypes.default.oneOf(_constants.availableVariants),
  value: _propTypes.default.number
};
var LinearProgressLabel = exports.LinearProgressLabel = function LinearProgressLabel(_ref2) {
  var label = _ref2.label,
    variant = _ref2.variant,
    size = _ref2.size,
    value = _ref2.value;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "DhigLinearProgressLabel"
  }, label && /*#__PURE__*/_react.default.createElement(_typography.default, {
    variant: /* istanbul ignore next */size === _constants.sizes.MEDIUM ? "body-copy-medium" : "smallprint",
    color: "ink-on-background"
  }, label), variant === _constants.variants.DETERMINATE && /*#__PURE__*/_react.default.createElement(_typography.default, {
    variant: /* istanbul ignore next */size === _constants.sizes.MEDIUM ? "body-copy-medium" : "smallprint",
    color: "ink-on-background"
  }, getPercentage(value)));
};
LinearProgressLabel.propTypes = {
  label: _propTypes.default.string,
  variant: _propTypes.default.oneOf(_constants.availableVariants),
  size: _propTypes.default.oneOf(_constants.availableSizes),
  value: _propTypes.default.number
};
LinearProgress.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LinearProgress",
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
    "children": {
      "description": "",
      "type": {
        "name": "node"
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
var _default = exports.default = LinearProgress;
LinearProgressLabel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LinearProgressLabel",
  "props": {
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
    "size": {
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "availableSizes"
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