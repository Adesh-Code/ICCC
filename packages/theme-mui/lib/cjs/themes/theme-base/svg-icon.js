"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSvgIconStyles = void 0;
var makeSvgIconStyles = exports.makeSvgIconStyles = function makeSvgIconStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "inherit"
      },
      styleOverrides: {
        root: {
          color: tokens.colors["ink-on-background"],
          display: "inline-block",
          fontSize: primitives.fontSizes[3],
          verticalAlign: "middle",
          height: "1em",
          width: "1em",
          "&[class*='MuiSvgIcon-fontSizeExtra-large']": {
            height: "36px",
            width: "36px"
          },
          "& g#error": {
            fill: tokens.colors["fill-error"],
            color: tokens.colors["ink-on-fill-primary"]
          },
          "& g#lock": {
            fill: tokens.colors.background
          },
          // legacy
          "& use.dhig--icons--edit-marker-left": {
            stroke: tokens.colors.background,
            color: tokens.colors["ink-on-background"]
          },
          "& use.dhig--icons--edit-marker-right": {
            stroke: tokens.colors.background,
            color: tokens.colors["ink-on-background"]
          },
          "& use.dhig--display-icons--error": {
            fill: tokens.colors["fill-error"],
            color: tokens.colors["ink-on-fill-primary"]
          },
          "& use.dhig--ui-controls--error": {
            fill: tokens.colors["fill-error"],
            color: tokens.colors["ink-on-fill-primary"]
          },
          "& use.dhig--ui-controls--manual-width--error": {
            fill: tokens.colors["fill-error"],
            color: tokens.colors["ink-on-fill-primary"]
          },
          "& use.dhig--display-icons--lock": {
            fill: tokens.colors.background
          }
        },
        fontSizeSmall: {
          height: primitives.spacings[4],
          width: primitives.spacings[4]
        },
        fontSizeMedium: {
          height: primitives.spacings[5],
          width: primitives.spacings[5]
        },
        fontSizeLarge: {
          height: primitives.spacings[6],
          width: primitives.spacings[6]
        }
      }
    }
  };
};