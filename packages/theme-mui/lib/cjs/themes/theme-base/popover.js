"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePopoverStyles = void 0;
var makePopoverStyles = exports.makePopoverStyles = function makePopoverStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiPopover: {
      styleOverrides: {
        root: {
          '& [class*="MuiPaper-root"]': {
            borderRadius: "".concat(primitives.borderRadii.none, " ").concat(primitives.borderRadii.none, " ").concat(primitives.borderRadii.medium, " ").concat(primitives.borderRadii.medium),
            marginTop: primitives.spacings["1"],
            boxShadow: tokens.effects["elevation-0-popover"],
            scrollbarWidth: "thin",
            backgroundColor: tokens.colors["fill-elevation-0"],
            '& [class*="MuiList-root"]': {
              "& [class*='MuiListSubheader-root']": {
                background: tokens.gradients["fill-category-title"],
                marginLeft: "1px",
                marginRight: "1px",
                "&:not(:first-of-type)": {
                  borderTop: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["row-divider"])
                }
              }
            }
          }
        }
      }
    }
  };
};