"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CardDivider = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _constants = require("./constants");
var _excluded = ["children", "className", "framed", "quiet", "twoColumns"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var cardWithDigitalHig = function cardWithDigitalHig(BaseMuiCard) {
  var Card = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
    var children = _ref.children,
      className = _ref.className,
      framed = _ref.framed,
      quiet = _ref.quiet,
      twoColumns = _ref.twoColumns,
      otherProps = _objectWithoutProperties(_ref, _excluded);
    // MUI Card API: https://mui.com/material-ui/api/card/
    var muiCardApiPresets = {
      // children
      // classes
      // raised
      // sx
    };

    /**
     * Determines additional classnames related to "quiet" version, "framed"
     * version, and 2 col handling.
     */
    className = "".concat(className).concat(quiet ? " MuiCard--quiet" : "");
    className = "".concat(className).concat(framed ? " MuiCard--framed" : "");
    className = "".concat(className).concat(twoColumns ? " MuiCard--twoColumns" : "");

    // Adding an appearance classname to bring button to parity with accordion
    // component API, but still dependant on changes resulting from
    // https://jira.autodesk.com/browse/EXPM-1100
    var appearance = _constants.appearances.DEFAULT;
    if (quiet && framed) {
      appearance = _constants.appearances.QUIET_AND_FRAMED;
    }
    if (quiet && !framed) {
      appearance = _constants.appearances.QUIET;
    }
    if (!quiet && framed) {
      appearance = _constants.appearances.FRAMED;
    }
    className = "".concat(className, " DhigCard--appearance--").concat(appearance);
    return /*#__PURE__*/_react.default.createElement(BaseMuiCard, _extends({}, muiCardApiPresets, otherProps, {
      className: className,
      ref: ref
    }), children);
  });
  Card.displayName = "Card";
  Card.defaultProps = {
    className: "",
    framed: false,
    quiet: false,
    twoColumns: false
  };
  Card.propTypes = {
    children: _propTypes.default.node.isRequired,
    className: _propTypes.default.string,
    framed: _propTypes.default.bool,
    quiet: _propTypes.default.bool,
    twoColumns: _propTypes.default.bool
  };
  return Card;
};
var CardDivider = exports.CardDivider = function CardDivider(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "DhigCard--divider"
  }, /*#__PURE__*/_react.default.createElement(_Divider.default, _extends({
    light: true
  }, props)));
};
var Card = cardWithDigitalHig(_Card.default);
var _default = exports.default = Card;
CardDivider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CardDivider"
};