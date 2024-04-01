"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThemeBase = void 0;
var _styles = require("@mui/material/styles");
var _accordion = require("./theme-base/accordion");
var _alert = require("./theme-base/alert");
var _autocomplete = require("./theme-base/autocomplete");
var _badge = require("./theme-base/badge");
var _buttonGroup = require("./theme-base/button-group");
var _button = require("./theme-base/button");
var _card = require("./theme-base/card");
var _checkbox = require("./theme-base/checkbox");
var _chip = require("./theme-base/chip");
var _circularProgress = require("./theme-base/circular-progress");
var _container = require("./theme-base/container");
var _datePicker = require("./theme-base/date-picker");
var _dialog = require("./theme-base/dialog");
var _divider = require("./theme-base/divider");
var _filledInput = require("./theme-base/filled-input");
var _formControlLabel = require("./theme-base/form-control-label");
var _formControl = require("./theme-base/form-control");
var _formGroup = require("./theme-base/form-group");
var _formHelperText = require("./theme-base/form-helper-text");
var _formLabel = require("./theme-base/form-label");
var _grid = require("./theme-base/grid");
var _iconButton = require("./theme-base/icon-button");
var _inputLabel = require("./theme-base/input-label");
var _input = require("./theme-base/input");
var _linearProgress = require("./theme-base/linear-progress");
var _link = require("./theme-base/link");
var _listSubheader = require("./theme-base/list-subheader");
var _menuItem = require("./theme-base/menu-item");
var _outlinedInput = require("./theme-base/outlined-input");
var _pagination = require("./theme-base/pagination");
var _popover = require("./theme-base/popover");
var _popper = require("./theme-base/popper");
var _radio = require("./theme-base/radio");
var _select = require("./theme-base/select");
var _skeleton = require("./theme-base/skeleton");
var _snackbar = require("./theme-base/snackbar");
var _stepper = require("./theme-base/stepper");
var _svgIcon = require("./theme-base/svg-icon");
var _table = require("./theme-base/table");
var _tabs = require("./theme-base/tabs");
var _textField = require("./theme-base/text-field");
var _toggleButtonGroup = require("./theme-base/toggle-button-group");
var _toggleButton = require("./theme-base/toggle-button");
var _toolbar = require("./theme-base/toolbar");
var _tooltip = require("./theme-base/tooltip");
var _treeItem = require("./theme-base/tree-item");
var _treeView = require("./theme-base/tree-view");
var _typography = require("./theme-base/typography");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Returns a MUI-compatible theme base object
 *
 * @param {Object} props
 * @param {paletteMode} [props.paletteMode=light] - Light or dark
 * @param {Object} props.themeData - Digital HIG design tokens
 *
 * @returns {Object} Returns a MUI theme.
 */
var getThemeBase = exports.getThemeBase = function getThemeBase(_ref) {
  var _ref$paletteMode = _ref.paletteMode,
    paletteMode = _ref$paletteMode === void 0 ? "light" : _ref$paletteMode,
    _ref$themeData = _ref.themeData,
    primitives = _ref$themeData.primitives,
    tokens = _ref$themeData.tokens;
  /* TODO: [Typescript] Migrate the htmlFontSize logic to work with createTheme */
  // Modify rem-based primitive and token values for cases in which the
  // root font size of the page is not set to the default 16px
  // const htmlFontSize = additionalThemeOptions?.typography?.htmlFontSize ?? 16;
  // const htmlFontSizeRatio = htmlFontSize / 16;
  // const primitives = {
  //   ...themeData.primitives,
  //   fontSizes: Object.entries(themeData.primitives.fontSizes).reduce(
  //     (acc, [key, fontSize]) => {
  //       acc[key] =
  //         htmlFontSizeRatio === 1
  //           ? fontSize
  //           : `calc(${fontSize} / ${htmlFontSizeRatio})`;
  //       return acc;
  //     },
  //     {}
  //   )
  // };
  // const typographyTokens = Object.entries(themeData.tokens.typography).reduce(
  //   (acc, [key, token]) => {
  //     acc[key] = {
  //       ...token,
  //       fontSize:
  //         htmlFontSizeRatio === 1
  //           ? token.fontSize
  //           : `calc(${token.fontSize} / ${htmlFontSizeRatio})`
  //     };
  //     return acc;
  //   },
  //   {}
  // );
  // const tokens = {
  //   ...themeData.tokens,
  //   typography: typographyTokens
  // };
  // Create a MUI-compatible breakpoint configuration based on theme data
  var breakpointValues = Object.entries(tokens.grid).reduce(function (acc, _ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    acc.keys.push(key);
    acc.values[key] = parseInt(value.breakpoint, 10);
    return acc;
  }, {
    keys: [],
    values: {}
  });
  var _createTheme = (0, _styles.createTheme)({
      breakpoints: breakpointValues
    }),
    breakpoints = _createTheme.breakpoints;
  var transitionValues = Object.entries(tokens.transitions).reduce(function (acc, _ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
      key = _ref5[0],
      value = _ref5[1];
    acc.duration[key] = value.transitionDuration;
    acc.easing[key] = value.transitionTimingFunction;
    return acc;
  }, {
    duration: {},
    easing: {}
  });
  /* istanbul ignore next */
  return {
    breakpoints: breakpoints,
    direction: "ltr",
    palette: {
      mode: paletteMode,
      common: {
        black: primitives.colors.primary.black,
        white: primitives.colors.primary.white
      },
      primary: {
        main: paletteMode === "light" ? primitives.colors.primary.black : primitives.colors.primary.white
      },
      error: {
        main: tokens.colors["ink-error"]
      },
      success: {
        main: tokens.colors["fill-success"]
      },
      urgency: {
        main: tokens.colors["fill-urgent"]
      },
      attention: {
        main: tokens.colors["fill-warning"]
      },
      neutral: {
        main: tokens.colors["detail-1-opaque"]
      },
      text: {
        primary: primitives.colors.primary.black,
        secondary: primitives.colors.primary.white
      },
      divider: "rgba(0, 0, 0, 0.1)",
      background: {
        paper: tokens.colors.background,
        default: tokens.colors.background
      }
    },
    typography: Object.assign({
      fontFamily: primitives.fontFamilies.default,
      fontWeightLight: primitives.fontWeights.default,
      fontWeightRegular: primitives.fontWeights.default,
      fontWeightMedium: primitives.fontWeights.emphasized,
      fontWeightBold: primitives.fontWeights.display,
      body1: tokens.typography["body-copy-medium"]
    }, tokens.typography),
    spacing: Object.entries(primitives.spacings).map(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
        _ = _ref7[0],
        value = _ref7[1];
      return value;
    }),
    transitions: Object.assign({}, transitionValues),
    zIndex: {},
    primitives: primitives,
    tokens: tokens,
    components: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _accordion.makeAccordionStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _alert.makeAlertStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _autocomplete.makeAutocompleteStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _badge.makeBadgeStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _buttonGroup.makeButtonGroupStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _button.makeButtonStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _card.makeCardStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _checkbox.makeCheckboxStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _chip.makeChipStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _circularProgress.makeCircularProgressStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _container.makeContainerStyles)({
      primitives: primitives
    })), (0, _datePicker.makeDatePickerStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _dialog.makeDialogStyles)({
      breakpoints: breakpoints,
      paletteMode: paletteMode,
      primitives: primitives,
      tokens: tokens
    })), (0, _divider.makeDividerStyles)({
      tokens: tokens
    })), (0, _filledInput.makeFilledInputStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _formControlLabel.makeFormControlLabelStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _formControl.makeFormControlStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _formGroup.makeFormGroupStyles)({
      primitives: primitives
    })), (0, _formHelperText.makeFormHelperTextStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _formLabel.makeFormLabelStyles)({
      tokens: tokens
    })), (0, _grid.makeGridStyles)({
      breakpoints: breakpoints,
      primitives: primitives,
      tokens: tokens
    })), (0, _iconButton.makeIconButtonStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _inputLabel.makeInputLabelStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _input.makeInputStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _linearProgress.makeLinearProgressStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _link.makeLinkStyles)({
      tokens: tokens
    })), (0, _listSubheader.makeListSubheaderStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _menuItem.makeMenuItemStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _outlinedInput.makeOutlinedInputStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _pagination.makePaginationStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _popover.makePopoverStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _popper.makePopperStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _radio.makeRadioStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _select.makeSelectStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _skeleton.makeSkeletonStyles)({
      tokens: tokens
    })), (0, _snackbar.makeSnackbarStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _stepper.makeStepperStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _svgIcon.makeSvgIconStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _table.makeTableStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _tabs.makeTabsStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _textField.makeTextFieldStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _toggleButtonGroup.makeToggleButtonGroupStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _toggleButton.makeToggleButtonStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _toolbar.makeToolbarStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _tooltip.makeTooltipStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _treeItem.makeTreeItemStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _treeView.makeTreeViewStyles)({
      primitives: primitives,
      tokens: tokens
    })), (0, _typography.makeTypographyStyles)({
      tokens: tokens
    }))
  };
};