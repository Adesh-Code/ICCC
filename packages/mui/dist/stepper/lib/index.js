"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepIconComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _activeIncomplete = _interopRequireDefault(require("@iccc/icon/lib/build/stepper/active-incomplete"));
var _complete = _interopRequireDefault(require("@iccc/icon/lib/build/stepper/complete"));
var _error = _interopRequireDefault(require("@iccc/icon/lib/build/stepper/error"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _excluded = ["active", "completed", "error", "icon"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var StepIconComponent = exports.StepIconComponent = function StepIconComponent(_ref) {
  var active = _ref.active,
    completed = _ref.completed,
    error = _ref.error,
    icon = _ref.icon,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var iconMapping = {
    error: /*#__PURE__*/_react.default.createElement(_error.default, null),
    active: icon ? /*#__PURE__*/_react.default.createElement("text", {
      x: "12",
      y: "12",
      textAnchor: "middle",
      dominantBaseline: "central"
    }, icon) : /*#__PURE__*/_react.default.createElement(_activeIncomplete.default, null),
    completed: /*#__PURE__*/_react.default.createElement(_complete.default, null),
    default: icon ? /*#__PURE__*/_react.default.createElement("text", {
      x: "12",
      y: "12",
      textAnchor: "middle",
      dominantBaseline: "central"
    }, icon) : null
  };
  var status = error ? "error" : completed ? "completed" : active ? "active" : "default";
  var selectedIcon = iconMapping[status];
  return selectedIcon ? /*#__PURE__*/_react.default.createElement(_SvgIcon.default, otherProps, selectedIcon) : null;
};
StepIconComponent.propTypes = {
  active: _propTypes.default.bool,
  completed: _propTypes.default.bool,
  error: _propTypes.default.bool,
  icon: _propTypes.default.any
};
StepIconComponent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StepIconComponent",
  "props": {
    "active": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "completed": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "error": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "icon": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    }
  }
};