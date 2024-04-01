"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRadioStyles = void 0;
var makeRadioStyles = exports.makeRadioStyles = function makeRadioStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiRadio: {
      styleOverrides: {
        root: {
          fontSize: "inherit",
          padding: "".concat(primitives.spacings["0"], "px"),
          margin: "".concat(primitives.spacings["2"], " 0"),
          borderRadius: primitives.borderRadii.round,
          "&:hover": {
            outline: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-hover"])
          },
          "&:focus, &.Mui-focusVisible": {
            outline: "".concat(primitives.borderWidths.large, " solid ").concat(tokens.colors["ink-focus"]),
            outlineOffset: primitives.borderWidths.medium
          },
          "&:active": {
            outline: "".concat(primitives.borderWidths.large, " solid ").concat(tokens.colors["fill-success"])
          },
          '& + [class*="MuiFormControlLabel-label"]': {
            color: tokens.colors["ink-on-background"],
            paddingLeft: primitives.spacings["3"],
            fontSize: primitives.fontSizes["3"],
            lineHeight: "1.25" //primitives.lineHeights.compact
          },
          '& [class*="MuiSvgIcon-root"]': {
            width: "20px",
            height: "20px",
            color: tokens.colors["ink-on-background"]
          },
          "& .DhigRadio--icon--inner": {
            width: "10px",
            height: "10px",
            position: "absolute"
          },
          '&[class*="MuiRadio-colorSecondary"]:hover, &[class*="MuiRadio-colorSecondary"].Mui-checked:hover': {
            backgroundColor: tokens.colors.background
          }
        }
      }
    }
  };
};