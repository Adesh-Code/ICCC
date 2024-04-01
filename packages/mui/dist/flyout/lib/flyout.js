"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _checkmark = _interopRequireDefault(require("@iccc/icon/lib/build/ui-controls/checkmark"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _MenuList = _interopRequireDefault(require("@mui/material/MenuList"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _excluded = ["children", "menuItems", "title"],
  _excluded2 = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Flyout = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    menuItems = _ref.menuItems,
    title = _ref.title,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var _React$useState = _react.default.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selectedIndex = _React$useState2[0],
    setSelectedIndex = _React$useState2[1];
  var handleMenuItemClick = function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
  };
  return /*#__PURE__*/_react.default.createElement(_Tooltip.default, _extends({
    ref: ref,
    disableFocusListener: true,
    disableHoverListener: true,
    placement: "bottom",
    classes: {
      popper: "DhigFlyout"
    },
    title: title || /*#__PURE__*/_react.default.createElement(_Paper.default, null, /*#__PURE__*/_react.default.createElement(_MenuList.default, {
      autoFocusItem: true
    }, menuItems.map(function (_ref2, index) {
      var children = _ref2.children,
        otherMenuItemProps = _objectWithoutProperties(_ref2, _excluded2);
      return /*#__PURE__*/_react.default.createElement(_MenuItem.default, _extends({
        key: index,
        selected: index === selectedIndex,
        onClick: function onClick(event) {
          return handleMenuItemClick(event, index);
        },
        tabIndex: 0
      }, otherMenuItemProps), children, index === selectedIndex && /*#__PURE__*/_react.default.createElement(_SvgIcon.default, null, /*#__PURE__*/_react.default.createElement(_checkmark.default, null)));
    })))
  }, otherProps), children);
});
Flyout.displayName = "Flyout";
Flyout.defaultProps = {
  disabled: false,
  className: "",
  menuItems: []
};
Flyout.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  disabled: _propTypes.default.bool,
  menuItems: _propTypes.default.array,
  title: _propTypes.default.node
};
Flyout.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Flyout",
  "props": {
    "disabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "className": {
      "defaultValue": {
        "value": "\"\"",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "menuItems": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "array"
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
    "title": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
var _default = exports.default = Flyout;