"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _Accordion = _interopRequireDefault(require("@mui/material/Accordion"));
var _constants = require("./constants");
var _excluded = ["children", "disableTransitions", "dense", "size", "styleVariant", "variant", "type"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // Libraries
// Components
// Utilities
// Extends MUI theme to enable transitions in accordion component instances
var getTheme = function getTheme(outerTheme) {
  return (0, _styles.createTheme)(_objectSpread(_objectSpread({}, outerTheme), {}, {
    transitions: _objectSpread(_objectSpread({}, outerTheme.transitions), {}, {
      create: function create() {
        return ["none"];
      }
    })
  }));
};
var TransitionManager = function TransitionManager(_ref) {
  var disableTransitions = _ref.disableTransitions,
    wrapper = _ref.wrapper,
    children = _ref.children;
  return disableTransitions ? wrapper(children) : children;
};

/**
 * MUI Accordion wrapper. Renders a composition of accordion summary, the
 * interactive portion that toggles content on and off, and accordion content
 * that expands and collapses
 *
 * Note accordion is wrapped in a nested theme provider, to enable transitions
 * locally.
 */
var Accordion = function Accordion(_ref2) {
  var children = _ref2.children,
    disableTransitions = _ref2.disableTransitions,
    dense = _ref2.dense,
    size = _ref2.size,
    styleVariant = _ref2.styleVariant,
    variant = _ref2.variant,
    type = _ref2.type,
    MuiAccordionProps = _objectWithoutProperties(_ref2, _excluded);
  var variantToUse = variant || styleVariant || _constants.variants.INDIVIDUAL_PANEL;
  var classes = "".concat(dense || size === "dense" ? "DhigAccordion--density--dense" : "", " ", "DhigAccordion--variant--".concat(variantToUse), " DhigAccordion--type--").concat(type);
  var squaredBorders = [_constants.variants.FLAT, _constants.variants.MINIMAL];
  return /*#__PURE__*/_react.default.createElement(TransitionManager, {
    disableTransitions: disableTransitions,
    wrapper: function wrapper(children) {
      return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
        theme: function theme(_theme) {
          return getTheme(_theme);
        }
      }, children);
    }
  }, /*#__PURE__*/_react.default.createElement(_Accordion.default, _extends({
    classes: {
      root: classes
    }
  }, MuiAccordionProps, {
    square: squaredBorders.includes(variant || styleVariant)
  }), children));
};
Accordion.propTypes = {
  /**
   * The accordion content
   */
  children: _propTypes.default.any,
  /**
   * Disable transitions
   */
  disableTransitions: _propTypes.default.bool,
  /**
   * Which density option to use
   */
  dense: _propTypes.default.bool,
  /**
   * Which variant option to use
   */
  variant: _propTypes.default.oneOf(_constants.availableVariants),
  /**
   * Which type option to use
   */
  type: _propTypes.default.oneOf(_constants.availableTypes),
  /**
   * Which size option to use (deprecated)
   */
  size: _propTypes.default.oneOf(_constants.availableSizes),
  /**
   * Which style variant option to use (deprecated)
   */
  styleVariant: _propTypes.default.oneOf(_constants.availableVariants)
};
var defaultProps = exports.defaultProps = {
  dense: false,
  disableTransitions: false,
  type: _constants.types.ACCORDION_LIST
};

// Represents the iccc defaults
Accordion.defaultProps = _objectSpread({}, defaultProps);
Accordion.__docgenInfo = {
  "description": "MUI Accordion wrapper. Renders a composition of accordion summary, the\ninteractive portion that toggles content on and off, and accordion content\nthat expands and collapses\n\nNote accordion is wrapped in a nested theme provider, to enable transitions\nlocally.",
  "methods": [],
  "displayName": "Accordion",
  "props": {
    "dense": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Which density option to use",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disableTransitions": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Disable transitions",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "type": {
      "defaultValue": {
        "value": "types.ACCORDION_LIST",
        "computed": true
      },
      "description": "Which type option to use",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "availableTypes"
      },
      "required": false
    },
    "children": {
      "description": "The accordion content",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "variant": {
      "description": "Which variant option to use",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "availableVariants"
      },
      "required": false
    },
    "size": {
      "description": "Which size option to use (deprecated)",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "availableSizes"
      },
      "required": false
    },
    "styleVariant": {
      "description": "Which style variant option to use (deprecated)",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "availableVariants"
      },
      "required": false
    }
  }
};
var _default = exports.default = Accordion;