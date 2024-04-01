"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _checkmark = _interopRequireDefault(require("@iccc/icon/lib/build/ui-controls/checkmark"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var OptionContent = function OptionContent(_ref) {
  var children = _ref.children,
    isSelected = _ref.isSelected;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "DhigSelect--option"
  }, children), isSelected && /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    className: "DhigSelect--checkedIcon",
    title: "Selected"
  }, /*#__PURE__*/_react.default.createElement(_checkmark.default, null)));
};
OptionContent.propTypes = {
  children: _propTypes.default.any,
  isSelected: _propTypes.default.bool
};
OptionContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OptionContent",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "isSelected": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
var _default = exports.default = OptionContent;