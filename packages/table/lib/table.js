"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableWithDigitalHig = exports.defaultProps = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Table = _interopRequireDefault(require("@mui/material/Table"));
var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));
var _constants = require("./constants");
var _excluded = ["bordered", "className", "loud", "verticalAlignment", "zebra"];
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
  bordered: false,
  loud: false,
  size: _constants.sizes.MEDIUM,
  verticalAlignment: _constants.verticalAlignments.TOP,
  zebra: false
};

/**
 * Makes a Digital HIG table component using the provided MUITable as base
 */
var tableWithDigitalHig = exports.tableWithDigitalHig = function tableWithDigitalHig(BaseMuiTableContainer, BaseMuiTable) {
  /**
   * Table component
   *
   * @param {Object} props
   * @param {string} [props.className] - Class names to apply to the icon component
   * @param {string} [props.loud] - Whether to enable loud palette
   * @param {string} [props.verticalAlignment] - Which vertical alignment option to use
   * @param {string} [props.zebra] - Whether to enable zebra styling
   * @param {...*} [otherProps] - Additional arguments to pass to table
   */
  var Table = function Table(_ref) {
    var bordered = _ref.bordered,
      className = _ref.className,
      loud = _ref.loud,
      verticalAlignment = _ref.verticalAlignment,
      zebra = _ref.zebra,
      otherProps = _objectWithoutProperties(_ref, _excluded);
    // https://mui.com/material-ui/api/table/
    // List out complete MUI API props and fillout values for props that will be
    // preset in the component; all the others will be received from the parent
    var muiTableApiPresets = {
      // children,
      // classes,
      // component,
      // padding,
      // size,
      // stickyHeader,
      // sx
    };
    var classnames = className && className.split(" ") || [];
    classnames.push("DhigTable--verticalAlignment--".concat(verticalAlignment));
    bordered && classnames.push("DhigTable--bordered");
    loud && classnames.push("DhigTable--loud");
    zebra && classnames.push("DhigTable--zebra");
    return /*#__PURE__*/_react.default.createElement(BaseMuiTableContainer, null, /*#__PURE__*/_react.default.createElement(BaseMuiTable, _extends({}, muiTableApiPresets, otherProps, {
      className: classnames.join(" ")
    })));
  };
  Table.propTypes = {
    /**
     * Whether to enable bordered styling
     */
    bordered: _propTypes.default.bool,
    /**
     * Class names to apply to the table component
     */
    className: _propTypes.default.string,
    /**
     * Whether to enable loud palette
     */
    loud: _propTypes.default.bool,
    /**
     * Which size option to use
     */
    size: _propTypes.default.oneOf(_constants.availableSizes),
    /**
     * Which vertical alignment option to use
     */
    verticalAlignment: _propTypes.default.oneOf(_constants.availableVerticalAlignments),
    /**
     * Whether to enable zebra styling
     */
    zebra: _propTypes.default.bool
  };
  Table.defaultProps = _objectSpread({}, defaultProps);
  return Table;
};
var Table = tableWithDigitalHig(_TableContainer.default, _Table.default);
var _default = exports.default = Table;