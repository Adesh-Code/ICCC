"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioWithDigitalHig = void 0;
var _react = _interopRequireDefault(require("react"));
var _circle = _interopRequireDefault(require("@iccc/icon/lib/build/icons/circle"));
var _circleFull = _interopRequireDefault(require("@iccc/icon/lib/build/icons/circle-full"));
var _Radio = _interopRequireDefault(require("@mui/material/Radio"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
var RadioWithDigitalHig = exports.RadioWithDigitalHig = function RadioWithDigitalHig(BaseMuiRadio) {
  var Radio = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
    var otherProps = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
    var CheckedIcon = function CheckedIcon() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, null, /*#__PURE__*/_react.default.createElement(_circle.default, null)), /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        className: "DhigRadio--icon--inner"
      }, /*#__PURE__*/_react.default.createElement(_circleFull.default, null)));
    };
    var muiRadioApiPresets = {
      // checked,
      checkedIcon: /*#__PURE__*/_react.default.createElement(CheckedIcon, null),
      // classes,
      // color,
      // disabled,
      // disableRipple (already disabled at theme level)
      icon: /*#__PURE__*/_react.default.createElement(_SvgIcon.default, null, /*#__PURE__*/_react.default.createElement(_circle.default, null))
      // id,
      // inputProps,
      // inputRef,
      // name
      // onChange,
      // required,
      // size
      // sx
      // value
    };
    return /*#__PURE__*/_react.default.createElement(BaseMuiRadio, _extends({}, muiRadioApiPresets, otherProps, {
      ref: ref
    }));
  });
  Radio.displayName = "Radio";
  return Radio;
};
var Radio = RadioWithDigitalHig(_Radio.default);
var _default = exports.default = Radio;