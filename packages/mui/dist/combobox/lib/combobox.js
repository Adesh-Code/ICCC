"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.comboboxWithDigitalHig = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("./constants");
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _caretDown = _interopRequireDefault(require("@iccc/icon/lib/build/ui-controls/caret-down"));
var _checkmark = _interopRequireDefault(require("@iccc/icon/lib/build/ui-controls/checkmark"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _excluded = ["addendum", "className", "error", "placeholder", "layout", "renderInput"],
  _excluded2 = ["children", "classes"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var comboboxWithDigitalHig = exports.comboboxWithDigitalHig = function comboboxWithDigitalHig(BaseMuiAutocomplete) {
  var Combobox = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
    var addendum = _ref.addendum,
      className = _ref.className,
      error = _ref.error,
      placeholder = _ref.placeholder,
      layout = _ref.layout,
      renderInput = _ref.renderInput,
      otherProps = _objectWithoutProperties(_ref, _excluded);
    var DefaultTextFieldRenderer = function DefaultTextFieldRenderer(params) {
      return /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({}, params, {
        className: "DhigCombobox--textField",
        InputProps: _objectSpread({}, params.InputProps),
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          className: "DhigCombobox--input"
        }),
        error: error,
        variant: "standard",
        placeholder: placeholder
      }));
    };

    // API: https://mui.com/material-ui/api/autocomplete/
    var muiAutocompleteApiPresets = {
      // options
      // eslint-disable-next-line react/display-name
      // renderInput
      // autoComplete
      // autoHighlight
      // autoSelect
      // blurOnSelect
      // ChipProps
      // classes
      // clearIcon
      // clearOnBlur
      // clearOnEscape
      // clearText
      // closeText
      // componentsProps
      // defaultValue
      disableClearable: false,
      // disableCloseOnSelect
      // disabled
      // disabledItemsFocusable
      // disableListWrap
      // disablePortal
      // filterOptions
      // filterSelectedOptions
      // forcePopupIcon,
      // freeSolo
      // fullWidth
      // getLimitTagsText
      // getOptionDisabled
      getOptionLabel: function getOptionLabel(option) {
        var _option$label;
        return (_option$label = option.label) !== null && _option$label !== void 0 ? _option$label : option;
      },
      // reference https://mui.com/material-ui/api/autocomplete/#autocomplete-prop-getOptionLabel
      // groupBy
      // handleHomeEndKeys
      // id
      // includeInputInList
      // inputValue
      // isOptionEqualToValue
      // limitTags
      // ListboxComponent
      // ListboxProps
      // loading
      // loadingText
      // multiple
      // noOptionsText
      // onChange
      // onClose
      // onHighlightChange
      // onInputChange
      // onOpen
      // open
      // openOnFocus
      // openText
      // PaperComponent
      // PopperComponent
      popupIcon: /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        fontSize: "small",
        tabIndex: "0"
      }, /*#__PURE__*/_react.default.createElement(_caretDown.default, null)),
      // readOnly
      // renderGroup
      // eslint-disable-next-line react/display-name
      renderOption: function renderOption(props, option, state, ownerState) {
        return /*#__PURE__*/_react.default.createElement("div", _extends({
          component: "li"
        }, props, {
          key: option
        }), otherProps.multiple && /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          checked: state.selected
        }), ownerState.getOptionLabel(option), !otherProps.multiple && state.selected && /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
          className: "DhigCombobox--checkedIcon"
        }, /*#__PURE__*/_react.default.createElement(_checkmark.default, null)));
      }
      // renderTags
      // selectOnFocus
      // size
      // slotProps
      // sx
      // value
    };
    var classnames = className && className.split(" ") || [];
    classnames.push("DhigCombobox");
    var multiSelectProps = {};
    if (otherProps.multiple) {
      classnames.push("DhigCombobox--multiple");
      classnames.push("DhigCombobox--layout--grow");
      multiSelectProps = {
        disableClearable: true,
        disableCloseOnSelect: true
      };
      if (layout === _constants.layouts.FIXED) {
        classnames.push("DhigCombobox--layout--fixed");
        classnames = classnames.filter(function (value) {
          return value !== "DhigCombobox--layout--grow";
        });
        multiSelectProps = _objectSpread(_objectSpread({}, multiSelectProps), {}, {
          limitTags: 1,
          getLimitTagsText: function getLimitTagsText(more) {
            return null;
          }
        });
      }
    }

    // eslint-disable-next-line react/prop-types
    var PaperWithAddendum = function PaperWithAddendum(_ref2) {
      var children = _ref2.children,
        classes = _ref2.classes,
        otherPaperProps = _objectWithoutProperties(_ref2, _excluded2);
      return /*#__PURE__*/_react.default.createElement(_Paper.default, _extends({
        classes: classes
      }, otherPaperProps), children, addendum && /*#__PURE__*/_react.default.createElement("div", {
        className: "DhigCombobox--addendum"
      }, addendum));
    };
    return /*#__PURE__*/_react.default.createElement(BaseMuiAutocomplete, _extends({}, muiAutocompleteApiPresets, {
      className: classnames.join(" "),
      PaperComponent: addendum ? PaperWithAddendum : null
    }, multiSelectProps, otherProps, {
      renderInput: otherProps.renderInput || DefaultTextFieldRenderer
    }));
  });
  Combobox.displayName = "Combobox";
  Combobox.propTypes = {
    addendum: _propTypes.default.string,
    className: _propTypes.default.string,
    layout: _propTypes.default.oneOf(_constants.availableLayouts),
    error: _propTypes.default.bool,
    placeholder: _propTypes.default.string,
    renderInput: _propTypes.default.func
  };
  Combobox.defaultProps = {
    disabled: false,
    error: false,
    placeholder: ""
  };
  return Combobox;
};
var Combobox = comboboxWithDigitalHig(_Autocomplete.default);
var _default = exports.default = Combobox;