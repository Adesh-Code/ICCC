"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableRowWithDigitalHig = exports.defaultProps = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _excluded = ["activated", "className", "enableInteractions", "highlighted", "onClick"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var defaultProps = exports.defaultProps = {
  activated: false,
  enableInteractions: true,
  highlighted: false,
  selected: false
};

/**
 * Makes a Digital HIG table row component using the provided MUITableRow as base
 */
var tableRowWithDigitalHig = exports.tableRowWithDigitalHig = function tableRowWithDigitalHig(BaseMuiTableRow) {
  /**
   * Table row component
   *
   * @param {Object} props
   * @param {string} [props.activated] - Whether to show the row in a activated state
   * @param {string} [props.className] - Class names to apply to the icon component
   * @param {bool} [props.enableInteractions] - Whether to allow row interactions
   * @param {string} [props.highlighted] - Whether to show the row in a highlighted state
   * @param {func} [props.onClick] - `onClick` function, used if interactions are allowed
   * @param {...*} [otherProps] - Additional arguments to pass to table row
   */
  var TableRow = function TableRow(_ref) {
    var activated = _ref.activated,
      className = _ref.className,
      enableInteractions = _ref.enableInteractions,
      highlighted = _ref.highlighted,
      onClick = _ref.onClick,
      otherProps = _objectWithoutProperties(_ref, _excluded);
    // https://mui.com/material-ui/api/table-row/
    // List out complete MUI API props and fillout values for props that will be
    // preset in the component; all the others will be received from the parent
    var muiTableRowApiPresets = {
      // children,
      // classes,
      // component,
      // hover,
      // selected,
      // sx
    };
    var classnames = className && className.split(" ") || [];
    enableInteractions && classnames.push("DhigTableRow--enableInteractions");
    activated && classnames.push("DhigTableRow--activated");
    highlighted && classnames.push("DhigTableRow--highlighted");
    var additionalProps = enableInteractions ? {
      tabIndex: 0,
      role: "button",
      onClick: onClick
    } : {};
    return /*#__PURE__*/_react.default.createElement(BaseMuiTableRow, _extends({}, muiTableRowApiPresets, additionalProps, otherProps, {
      className: classnames.join(" ")
    }));
  };
  TableRow.propTypes = {
    activated: _propTypes.default.bool,
    className: _propTypes.default.string,
    enableInteractions: _propTypes.default.bool,
    highlighted: _propTypes.default.bool,
    onClick: _propTypes.default.func
  };
  TableRow.defaultProps = _objectSpread({}, defaultProps);
  return TableRow;
};
var TableRow = tableRowWithDigitalHig(_TableRow.default);
var _default = exports.default = TableRow;