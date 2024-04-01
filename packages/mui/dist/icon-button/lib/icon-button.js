"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconButtonWithDigitalHig = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _constants = require("./constants");
var _excluded = ["children", "className", "variant", "fullWidth"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var iconButtonWithDigitalHig = exports.iconButtonWithDigitalHig = function iconButtonWithDigitalHig(BaseMuiIconButton) {
  var IconButton = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
    var children = _ref.children,
      className = _ref.className,
      variant = _ref.variant,
      fullWidth = _ref.fullWidth,
      otherProps = _objectWithoutProperties(_ref, _excluded);
    var muiIconButtonApiPresets = {
      // children
      // classes
      // color
      // disabled
      // disableRipple
      // disableFocusRipple
      // edge
      // size
      // sx
    };
    var classnames = className && className.split(" ") || [];
    fullWidth && classnames.push("DhigIconButton--fullWidth");
    classnames.push("DhigIconButton--variant--".concat(variant));
    return /*#__PURE__*/_react.default.createElement(BaseMuiIconButton, _extends({}, muiIconButtonApiPresets, otherProps, {
      className: classnames.join(" "),
      ref: ref
    }), children);
  });
  IconButton.propTypes = {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    fullWidth: _propTypes.default.bool,
    sizes: _propTypes.default.oneOf(_constants.availableSizes),
    variant: _propTypes.default.oneOf(_constants.availableVariants)
  };
  IconButton.defaultProps = {
    disabled: false,
    fullWidth: false,
    size: _constants.sizes.MEDIUM,
    variant: _constants.variants.CONTAINED
  };
  IconButton.displayName = "IconButton";
  return IconButton;
};
var IconButton = iconButtonWithDigitalHig(_IconButton.default);
var _default = exports.default = IconButton;