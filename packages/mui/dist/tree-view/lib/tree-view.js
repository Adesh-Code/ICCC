"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TreeView = _interopRequireDefault(require("@mui/lab/TreeView"));
var _constants = require("./constants");
var _excluded = ["size", "variant", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var treeViewWithDigitalHig = function treeViewWithDigitalHig(BaseMuiTreeView) {
  var TreeView = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
    var size = _ref.size,
      variant = _ref.variant,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, _excluded);
    var muiTreeViewPresets = {
      // children,
      // className,
      // defaultCollapseIcon,
      // defaultEndIcon,
      // defaultExpanded,
      // defaultExpandIcon,
      // defaultParentIcon,
      // defaultSelected,
      // disabledItemsFocusable,
      // disabledSelection,
      // expanded,
      // id,
      // multiSelect,
      // onNodeFocus,
      // onNodeSelect,
      // onNodeToggle,
      // selected,
      // sx
    };
    var classnames = className && className.split(" ") || [];
    classnames.push("DhigTreeView--variant--".concat(variant));
    classnames.push("DhigTreeView--size--".concat(size));
    return /*#__PURE__*/_react.default.createElement(BaseMuiTreeView, _extends({
      className: classnames.join(" ")
    }, muiTreeViewPresets, otherProps, {
      ref: ref
    }));
  });
  TreeView.displayName = "TreeView";
  TreeView.propTypes = {
    className: _propTypes.default.string,
    size: _propTypes.default.oneOf(_constants.availableSizes),
    variant: _propTypes.default.oneOf(_constants.availableVariants)
  };
  TreeView.defaultProps = {
    size: _constants.sizes.DEFAULT,
    variant: _constants.variants.MINIMAL
  };
  return TreeView;
};
var TreeView = treeViewWithDigitalHig(_TreeView.default);
var _default = exports.default = TreeView;