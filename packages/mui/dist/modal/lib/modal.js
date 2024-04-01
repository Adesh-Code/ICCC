"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalWithDigitalHig = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _cross = _interopRequireDefault(require("@iccc/icon/lib/build/icons/cross"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _typography = _interopRequireDefault(require("@iccc/typography"));
var _constants = require("./constants");
var _excluded = ["actions", "backdropVariant", "closeButtonDisplay", "closeButtonOutside", "CloseButtonProps", "caption", "content", "DialogContentProps", "disableCloseFromOutside", "displayLogo", "handleClose", "maxWidth", "styleVariant", "title", "type", "AlertIcon"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CloseButton = function CloseButton(_ref) {
  var accessibleLabel = _ref.accessibleLabel,
    handleClose = _ref.handleClose,
    _onClick = _ref.onClick,
    outsideButton = _ref.outsideButton;
  return /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": accessibleLabel,
    classes: {
      root: "DhigModal--closeButton--".concat(outsideButton ? "outside" : "default")
    },
    onClick: function onClick(event) {
      /* istanbul ignore next */
      _onClick(event);
      /* istanbul ignore next */
      handleClose(event);
    }
  }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, null, /*#__PURE__*/_react.default.createElement(_cross.default, null)));
};
CloseButton.defaultProps = {
  accessibleLabel: "close",
  onClick: /* istanbul ignore next */function onClick() {}
};
CloseButton.propTypes = {
  /**
   * Accessible label
   */
  accessibleLabel: _propTypes.default.string,
  /**
   * Close action callback
   */
  handleClose: _propTypes.default.func,
  /**
   * On click of close button callback
   */
  onClick: _propTypes.default.func,
  /**
   * Whether the button should render relative to dialog or to screen
   */
  outsideButton: _propTypes.default.bool
};
var modalWithDigitalHig = exports.modalWithDigitalHig = function modalWithDigitalHig(BaseMuiDialog) {
  var Modal = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
    var actions = _ref2.actions,
      backdropVariant = _ref2.backdropVariant,
      closeButtonDisplay = _ref2.closeButtonDisplay,
      closeButtonOutside = _ref2.closeButtonOutside,
      CloseButtonProps = _ref2.CloseButtonProps,
      caption = _ref2.caption,
      content = _ref2.content,
      DialogContentProps = _ref2.DialogContentProps,
      disableCloseFromOutside = _ref2.disableCloseFromOutside,
      displayLogo = _ref2.displayLogo,
      handleClose = _ref2.handleClose,
      maxWidth = _ref2.maxWidth,
      styleVariant = _ref2.styleVariant,
      title = _ref2.title,
      type = _ref2.type,
      AlertIcon = _ref2.AlertIcon,
      otherProps = _objectWithoutProperties(_ref2, _excluded);
    var muiModalPresets = {
      // open,
      // aria-describedby,
      // aria-labelledby,
      // backdropComponent,
      // children,
      // classes,
      // disableEscapeKeyDown,
      // fullScreen,
      // fullWidth,
      // maxWidth
      // onBackdropClick,
      // onClose,
      // PaperComponent,
      // PaperProps,
      // scroll,
      // sx,
      // TransitionComponent,
      // TransitionDuration,
      // TransitionProps
    };
    var backdropClassName = "DhigModal--backdrop--".concat(backdropVariant);
    var className = "DhigModal--styleVariant--".concat(styleVariant, " DhigModal--type--").concat(type);
    var outsideButton = closeButtonOutside || type === _constants.types.LIGHTBOX;
    var logo = /*#__PURE__*/_react.default.createElement("img", {
      className: "DhigModal--logo",
      src: "https://swc.autodesk.com/pharmacopeia/svg/logo/v0/logo.svg",
      alt: "Autodesk logo"
    });
    var defaultContent = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (displayLogo || title) && /*#__PURE__*/_react.default.createElement(_DialogTitle.default, null, displayLogo ? logo : title), /*#__PURE__*/_react.default.createElement(_DialogContent.default, DialogContentProps, content), actions && /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, actions));
    var alertContent = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DialogContent.default, DialogContentProps, AlertIcon && /*#__PURE__*/_react.default.createElement(_SvgIcon.default, null, /*#__PURE__*/_react.default.createElement(AlertIcon, null)), title && /*#__PURE__*/_react.default.createElement(_typography.default, {
      sx: {
        mb: "2"
      },
      variant: "headline-small"
    }, title), /*#__PURE__*/_react.default.createElement(_typography.default, null, content)), actions && /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, actions));
    var lightboxContent = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DialogContent.default, DialogContentProps, content), caption && (typeof caption === "string" ? /*#__PURE__*/_react.default.createElement(_typography.default, {
      variant: "caption"
    }, caption) : caption));
    var renderContent = function renderContent() {
      switch (type) {
        case _constants.types.ALERT:
          return alertContent;
        case _constants.types.LIGHTBOX:
          return lightboxContent;
        default:
          return defaultContent;
      }
    };
    return /*#__PURE__*/_react.default.createElement(BaseMuiDialog, _extends({}, muiModalPresets, {
      disableEscapeKeyDown: !closeButtonDisplay || type === _constants.types.ALERT,
      maxWidth: maxWidth,
      onClose: /* istanbul ignore next */
      function onClose(event, reason) {
        if (!closeButtonDisplay || disableCloseFromOutside || type === _constants.types.ALERT) {
          if (reason === "backdropClick") {
            return;
          }
        }
        handleClose(event, reason);
      },
      PaperProps: {
        classes: {
          root: className
        }
      },
      ref: ref,
      slotProps: {
        backdrop: {
          classes: {
            root: backdropClassName
          }
        }
      }
    }, otherProps), closeButtonDisplay && type !== _constants.types.ALERT && /*#__PURE__*/_react.default.createElement(CloseButton, _extends({
      handleClose: handleClose,
      outsideButton: outsideButton
    }, CloseButtonProps)), renderContent());
  });
  Modal.displayName = "Modal";
  Modal.defaultProps = {
    backdropVariant: _constants.backdropVariants.DEFAULT,
    closeButtonDisplay: true,
    closeButtonOutside: false,
    disableCloseFromOutside: false,
    displayLogo: false,
    maxWidth: _constants.maxWidths.SM,
    styleVariant: _constants.styleVariants.DEFAULT,
    type: _constants.types.MODAL
  };
  Modal.propTypes = {
    actions: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node]),
    AlertIcon: _propTypes.default.elementType,
    backdropVariant: _propTypes.default.oneOf(_constants.availableBackdropVariants),
    closeButtonDisplay: _propTypes.default.bool,
    closeButtonOutside: _propTypes.default.bool,
    CloseButtonProps: _propTypes.default.object,
    caption: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node, _propTypes.default.string]),
    content: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node, _propTypes.default.string]),
    DialogContentProps: _propTypes.default.object,
    disableCloseFromOutside: _propTypes.default.bool,
    displayLogo: _propTypes.default.bool,
    handleClose: _propTypes.default.func,
    maxWidth: _propTypes.default.oneOf(_constants.availableMaxWidths),
    styleVariant: _propTypes.default.oneOf(_constants.availableStyleVariants),
    title: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node, _propTypes.default.string]),
    type: _propTypes.default.oneOf(_constants.availableTypes)
  };
  return Modal;
};
var Modal = modalWithDigitalHig(_Dialog.default);
var _default = exports.default = Modal;