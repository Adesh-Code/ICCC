"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTreeViewStyles = void 0;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _caretDownSmall = _interopRequireDefault(require("@iccc/icon/lib/build/ui-controls/caret-down-small"));
var _caretRightSmall = _interopRequireDefault(require("@iccc/icon/lib/build/ui-controls/caret-right-small"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* TODO: [Typescript] remove ignores once icon is migrated */
// @ts-ignore

// @ts-ignore

var makeTreeViewStyles = exports.makeTreeViewStyles = function makeTreeViewStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiTreeView: {
      defaultProps: {
        defaultCollapseIcon: ( /*#__PURE__*/_react.default.createElement(_SvgIcon.default, null, /*#__PURE__*/_react.default.createElement(_caretDownSmall.default, null))),
        defaultExpandIcon: ( /*#__PURE__*/_react.default.createElement(_SvgIcon.default, null, /*#__PURE__*/_react.default.createElement(_caretRightSmall.default, null)))
      },
      styleOverrides: {
        root: {
          position: "relative",
          "&.DhigTreeView--variant--flat": {
            borderBottom: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["detail-1-opaque"]),
            borderTop: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["detail-1-opaque"]),
            '& [class*="MuiTreeItem-root"]:first-of-type > div.DhigTreeItem': {
              hr: {
                display: "none"
              }
            },
            "& hr": {
              position: "absolute",
              left: primitives.spacings["0"],
              width: "100%",
              zIndex: 0
            }
          },
          "&.DhigTreeView--size--dense": {
            '& [class*="MuiTreeItem-content"]': {
              padding: primitives.spacings["3"]
            },
            '& [class*="MuiTreeItem-label"]': Object.assign({}, tokens.typography["short-copy-small"])
          }
        }
      }
    }
  };
};