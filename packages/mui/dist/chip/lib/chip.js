"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ChipWithDigitalHig = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("./constants");
var _cross = _interopRequireDefault(require("@iccc/icon/lib/build/icons/cross"));
var _Chip = _interopRequireDefault(require("@mui/material/Chip"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _excluded = ["className", "disabled", "selected"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChipWithDigitalHig = exports.ChipWithDigitalHig = function ChipWithDigitalHig(BaseMuiChip) {
  var Chip = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
    var className = _ref.className,
      disabled = _ref.disabled,
      selected = _ref.selected,
      otherProps = _objectWithoutProperties(_ref, _excluded);
    var muiChipPresets = {
      // avatar,
      // children,
      // classes,
      // clickable,
      // color,
      // component,
      deleteIcon: /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        tabIndex: disabled ? -1 : 0
      }, /*#__PURE__*/_react.default.createElement(_cross.default, null)),
      // disabled,
      // icon,
      // label,
      // onDelete,
      // size,
      skipFocusWhenDisabled: true
      // sx,
      // variant
    };
    var classnames = className && className.split(" ") || [];
    selected && classnames.push("DhigChip--selected");
    return /*#__PURE__*/_react.default.createElement(BaseMuiChip, _extends({}, muiChipPresets, {
      className: classnames.join(" "),
      disabled: disabled
    }, otherProps, {
      ref: ref
    }));
  });
  Chip.displayName = "Chip";
  Chip.propTypes = {
    className: _propTypes.default.string,
    color: _propTypes.default.oneOf(_constants.availableColors),
    disabled: _propTypes.default.bool,
    selected: _propTypes.default.bool,
    variant: _propTypes.default.oneOf(_constants.availableVariants)
  };
  Chip.defaultProps = {
    color: _constants.colors.DEFAULT,
    disabled: false,
    selected: false,
    variant: _constants.variants.FILLED
  };
  return Chip;
};
var Chip = ChipWithDigitalHig(_Chip.default);
var _default = exports.default = Chip;