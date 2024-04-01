"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("@iccc/alert/lib/constants");
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _alert = _interopRequireDefault(require("@iccc/icon/lib/build/display-icons/alert"));
var _complete = _interopRequireDefault(require("@iccc/icon/lib/build/display-icons/complete"));
var _error = _interopRequireDefault(require("@iccc/icon/lib/build/display-icons/error"));
var _info = _interopRequireDefault(require("@iccc/icon/lib/build/display-icons/info"));
var _alertOutline = _interopRequireDefault(require("@iccc/icon/lib/build/icons/alert-outline"));
var _complete2 = _interopRequireDefault(require("@iccc/icon/lib/build/icons/complete"));
var _errorOutline = _interopRequireDefault(require("@iccc/icon/lib/build/icons/error-outline"));
var _infoOutline = _interopRequireDefault(require("@iccc/icon/lib/build/icons/info-outline"));
var _excluded = ["severity", "variant"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlertIcon = exports.AlertIcon = function AlertIcon(_ref) {
  var severity = _ref.severity,
    variant = _ref.variant,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var icon;
  if (variant === _constants.variants.FILLED) {
    switch (severity) {
      case _constants.severities.INFO:
        {
          icon = /*#__PURE__*/_react.default.createElement(_infoOutline.default, null);
          break;
        }
      case _constants.severities.SUCCESS:
        {
          icon = /*#__PURE__*/_react.default.createElement(_complete2.default, null);
          break;
        }
      case _constants.severities.WARNING:
        {
          icon = /*#__PURE__*/_react.default.createElement(_alertOutline.default, null);
          break;
        }
      case _constants.severities.ERROR:
        {
          icon = /*#__PURE__*/_react.default.createElement(_errorOutline.default, null);
          break;
        }
      default:
        {
          icon = /*#__PURE__*/_react.default.createElement(_infoOutline.default, null);
        }
    }
  } else {
    switch (severity) {
      case _constants.severities.INFO:
        {
          icon = /*#__PURE__*/_react.default.createElement(_info.default, null);
          break;
        }
      case _constants.severities.SUCCESS:
        {
          icon = /*#__PURE__*/_react.default.createElement(_complete.default, null);
          break;
        }
      case _constants.severities.WARNING:
        {
          icon = /*#__PURE__*/_react.default.createElement(_alert.default, null);
          break;
        }
      case _constants.severities.ERROR:
        {
          icon = /*#__PURE__*/_react.default.createElement(_error.default, null);
          break;
        }
      default:
        {
          icon = /*#__PURE__*/_react.default.createElement(_info.default, null);
        }
    }
  }
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, otherProps, icon);
};
AlertIcon.propTypes = {
  severity: _propTypes.default.oneOf(_constants.availableSeverities),
  variant: _propTypes.default.oneOf(_constants.availableVariants)
};
AlertIcon.defaultProps = {
  severity: _constants.severities.INFO
};
AlertIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertIcon",
  "props": {
    "severity": {
      "defaultValue": {
        "value": "severities.INFO",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "availableSeverities"
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
    }
  }
};