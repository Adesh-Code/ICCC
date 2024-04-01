"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchWithDigitalHig = exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _Grow = _interopRequireDefault(require("@mui/material/Grow"));
var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _search = _interopRequireDefault(require("@iccc/icon/lib/build/icons/search"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _excluded = ["className", "onInputChange", "placeholder"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var searchWithDigitalHig = exports.searchWithDigitalHig = function searchWithDigitalHig(BaseMuiAutocomplete) {
  var animatedPaperComponent = function animatedPaperComponent(paperProps) {
    return /*#__PURE__*/_react.default.createElement(_Grow.default, {
      in: true,
      style: {
        transformOrigin: "0 0 0"
      }
    }, /*#__PURE__*/_react.default.createElement(_Paper.default, paperProps));
  };
  var Search = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
    var className = _ref.className,
      _onInputChange = _ref.onInputChange,
      placeholder = _ref.placeholder,
      otherProps = _objectWithoutProperties(_ref, _excluded);
    // API: https://mui.com/material-ui/api/autocomplete/
    var muiAutocompleteApiPresets = {
      // options
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
      // disableClearable
      // disableCloseOnSelect
      // disabled
      // disabledItemsFocusable
      // disableListWrap
      // disablePortal
      // filterOptions
      // filterSelectedOptions
      forcePopupIcon: false,
      freeSolo: true,
      // fullWidth
      // getLimitTagsText
      // getOptionDisabled
      // getOptionLabel
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
      onInputChange: _onInputChange,
      // onOpen
      // open
      // openOnFocus
      // openText
      PaperComponent: animatedPaperComponent
      // PopperComponent
      // popupIcon
      // readOnly
      // renderGroup
      // renderOption
      // renderTags
      // selectOnFocus
      // size
      // slotProps
      // sx
      // value
    };
    var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];
    var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];
    var classnames = className && className.split(" ") || [];
    classnames.push("DhigSearch");
    return /*#__PURE__*/_react.default.createElement(BaseMuiAutocomplete, _extends({}, muiAutocompleteApiPresets, {
      className: classnames.join(" "),
      open: open,
      onClose: /* istanbul ignore next */function onClose() {
        return setOpen(false);
      },
      inputValue: inputValue,
      onInputChange: function onInputChange(event, value, reason) {
        _onInputChange(event, value, reason);
        setInputValue(value);
        setOpen(!!value);
      },
      ref: ref,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({}, params, {
          className: "DhigSearch--textField",
          placeholder: placeholder,
          InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
            disableUnderline: true,
            startAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
              position: "start"
            }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, null, /*#__PURE__*/_react.default.createElement(_search.default, null)))
          }),
          inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
            className: "DhigSearch--input"
          }),
          variant: "standard"
        }));
      }
    }, otherProps));
  });
  Search.displayName = "Search";
  Search.defaultProps = {
    onInputChange: /* istanbul ignore next */function onInputChange() {},
    placeholder: "Search..."
  };
  Search.propTypes = {
    /**
     * Class names to apply to the search component.
     */
    className: _propTypes.default.string,
    /**
     * Callback fired when the input value changes.
     */
    onInputChange: _propTypes.default.func,
    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder: _propTypes.default.string
  };
  return Search;
};
var Search = searchWithDigitalHig(_Autocomplete.default);
var _default = exports.default = Search;