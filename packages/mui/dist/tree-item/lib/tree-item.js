"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlatTreeItem = void 0;
Object.defineProperty(exports, "MinimalTreeItem", {
  enumerable: true,
  get: function get() {
    return _TreeItem.default;
  }
});
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _TreeItem = _interopRequireWildcard(require("@mui/lab/TreeItem"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*
 * Modified replica of MUI's internal component, TreeItemContent
 * https://github.com/mui/material-ui/blob/835e53eac76266ce37145a82365765190afc8709/packages/mui-lab/src/TreeItem/TreeItemContent.js
 * https://mui.com/material-ui/react-tree-view/#contentcomponent-prop
 */
var FlatContentComponent = /*#__PURE__*/_react.default.forwardRef(function FlatContentComponent(props, ref) {
  var classes = props.classes,
    className = props.className,
    label = props.label,
    nodeId = props.nodeId,
    iconProp = props.icon,
    expansionIcon = props.expansionIcon,
    displayIcon = props.displayIcon;
  var _useTreeItem = (0, _TreeItem.useTreeItem)(nodeId),
    disabled = _useTreeItem.disabled,
    expanded = _useTreeItem.expanded,
    selected = _useTreeItem.selected,
    focused = _useTreeItem.focused,
    handleExpansion = _useTreeItem.handleExpansion,
    handleSelection = _useTreeItem.handleSelection,
    preventSelection = _useTreeItem.preventSelection;
  var icon = iconProp || expansionIcon || displayIcon;
  var handleMouseDown = function handleMouseDown(event) {
    preventSelection(event);
  };
  var handleExpansionClick = function handleExpansionClick(event) {
    handleExpansion(event);
  };
  var handleSelectionClick = function handleSelectionClick(event) {
    handleSelection(event);
  };
  var classnames = className && className.split(" ") || [];
  classnames.push(classes.root);
  classnames.push("DhigTreeView--variant--flat");
  expanded && classnames.push(classes.expanded);
  selected && classnames.push(classes.selected);
  focused && classnames.push(classes.focused);
  disabled && classnames.push(classes.disabled);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "DhigTreeItem"
  }, /*#__PURE__*/_react.default.createElement(_Divider.default, {
    light: true
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classnames.join(" "),
    onMouseDown: handleMouseDown,
    onClick: handleExpansionClick,
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.iconContainer
  }, icon), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    onClick: handleSelectionClick,
    component: "div",
    className: classes.label
  }, label)));
});
FlatContentComponent.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object.isRequired,
  /**
   * className applied to the root element.
   */
  className: _propTypes.default.string,
  /**
   * The icon to display next to the tree node's label. Either a parent or end icon.
   */
  displayIcon: _propTypes.default.node,
  /**
   * The icon to display next to the tree node's label. Either an expansion or collapse icon.
   */
  expansionIcon: _propTypes.default.node,
  /**
   * The icon to display next to the tree node's label.
   */
  icon: _propTypes.default.node,
  /**
   * The tree node label.
   */
  label: _propTypes.default.node,
  /**
   * The id of the node.
   */
  nodeId: _propTypes.default.string.isRequired
};
var FlatTreeItem = exports.FlatTreeItem = function FlatTreeItem(props) {
  return /*#__PURE__*/_react.default.createElement(_TreeItem.default, _extends({
    ContentComponent: FlatContentComponent
  }, props));
};
FlatTreeItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FlatTreeItem"
};