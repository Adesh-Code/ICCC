"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableHeadWithDigitalHig = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("./constants");
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _down = _interopRequireDefault(require("@iccc/icon/lib/build/icons/down"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _tableRow = _interopRequireDefault(require("@iccc/table-row"));
var _TableSortLabel = _interopRequireDefault(require("@mui/material/TableSortLabel"));
var _up = _interopRequireDefault(require("@iccc/icon/lib/build/icons/up"));
var _excluded = ["CheckboxProps", "enableSelect", "enableSort", "headCells", "onRequestSort", "onSelectAllClick", "order", "orderBy", "rowCount", "selectedRowCount"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var tableHeadWithDigitalHig = exports.tableHeadWithDigitalHig = function tableHeadWithDigitalHig(BaseTableHead) {
  var TableHead = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
    var CheckboxProps = _ref.CheckboxProps,
      enableSelect = _ref.enableSelect,
      enableSort = _ref.enableSort,
      headCells = _ref.headCells,
      onRequestSort = _ref.onRequestSort,
      onSelectAllClick = _ref.onSelectAllClick,
      order = _ref.order,
      orderBy = _ref.orderBy,
      rowCount = _ref.rowCount,
      selectedRowCount = _ref.selectedRowCount,
      otherProps = _objectWithoutProperties(_ref, _excluded);
    var muiTableHeadApiPresets = {
      // children,
      // classes,
      // component,
      // sx,
    };
    var createSortHandler = function createSortHandler(property) {
      return /* istanbul ignore next */function (event) {
        /* istanbul ignore next */onRequestSort(event, property);
      };
    };
    return /*#__PURE__*/_react.default.createElement(BaseTableHead, _extends({}, muiTableHeadApiPresets, otherProps), /*#__PURE__*/_react.default.createElement(_tableRow.default, {
      enableInteractions: false
    }, enableSelect && /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      className: "DhigTableHead--cell".concat(enableSelect ? "--enableSelect" : /* istanbul ignore next */"")
    }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
      className: "DhigTableHead--checkbox",
      control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({
        indeterminate: selectedRowCount > 0 && selectedRowCount < rowCount,
        checked: rowCount > 0 && selectedRowCount === rowCount,
        onChange: onSelectAllClick
      }, CheckboxProps)),
      label: ""
    })), headCells.map(function (headCell) {
      return /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        key: headCell.id,
        align: headCell.align || "left",
        className: enableSort && !headCell.disableInteractions ? "DhigTableHead--cell--sort" : "DhigTableHead--cell",
        onClick: enableSort && !headCell.disableInteractions ? createSortHandler(headCell.id) : undefined
      }, enableSort ? /*#__PURE__*/_react.default.createElement(_TableSortLabel.default, {
        active: orderBy === headCell.id,
        direction: orderBy === headCell.id ? order : "asc",
        onClick: createSortHandler(headCell.id),
        IconComponent: function IconComponent() {
          return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, null, /* istanbul ignore next */order === _constants.orders.ASC ? /*#__PURE__*/_react.default.createElement(_up.default, null) : /*#__PURE__*/_react.default.createElement(_down.default, null));
        }
      }, headCell.label) : headCell.label);
    })));
  });
  TableHead.displayName = "TableHead";
  TableHead.defaultProps = {
    enableSelect: false,
    enableSort: false
  };
  TableHead.propTypes = {
    /** Class names to apply to the table head component. */
    className: _propTypes.default.string,
    /** Props to forward to the checkbox. */
    CheckboxProps: _propTypes.default.object,
    /**
     * If true, a checkbox will be displayed, allowing all rows
     * in the table component to be selected at once.
     * The `selectedRowCount`, `onSelectAllClick`, and `rowCount` props
     * must also be provided, with the `CheckboxProps` optional.
     */
    enableSelect: _propTypes.default.bool,
    /**
     * If true, the table head will have sort capabilities.
     * The `onRequestSort`, `order`, and `orderBy` props must also be provided.
     */
    enableSort: _propTypes.default.bool,
    /** The cells to be displayed. */
    headCells: _propTypes.default.arrayOf(_propTypes.default.shape({
      id: _propTypes.default.string.isRequired,
      align: _propTypes.default.string,
      label: _propTypes.default.node.isRequired
    })).isRequired,
    /** Callback function for sorting the table component. */
    onRequestSort: _propTypes.default.func,
    /** Function for when checkbox is clicked. */
    onSelectAllClick: _propTypes.default.func,
    /** Table sort order. */
    order: _propTypes.default.oneOf(_constants.availableOrders),
    /** ID of row to order by. */
    orderBy: _propTypes.default.string,
    /** Number of rows in the table component. */
    rowCount: _propTypes.default.number,
    /** Number of selected rows in table component. */
    selectedRowCount: _propTypes.default.number
  };
  return TableHead;
};
var TableHead = tableHeadWithDigitalHig(_TableHead.default);
var _default = exports.default = TableHead;