"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLinearProgressStyles = void 0;
var makeLinearProgressStyles = exports.makeLinearProgressStyles = function makeLinearProgressStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiLinearProgress: {
      defaultProps: {
        variant: "indeterminate",
        value: 0
      },
      styleOverrides: {
        root: {
          height: "3px",
          "&.DhigLinearProgress--size--small": {
            height: "2px"
          },
          "& + .DhigLinearProgressLabel": {
            display: "flex",
            justifyContent: "space-between",
            marginTop: primitives.spacings[2]
          }
        },
        colorPrimary: {
          backgroundColor: tokens.colors["detail-1-40-transparent"]
        },
        barColorPrimary: {
          backgroundColor: tokens.colors["ink-on-background"]
        },
        bar1Indeterminate: {
          animation: "MuiLinearProgress-keyframes-indeterminate1 3600ms ".concat(primitives.transitions.easing.smooth, " infinite")
        },
        bar2Indeterminate: {
          animation: "MuiLinearProgress-keyframes-indeterminate2 3600ms ".concat(primitives.transitions.easing.smooth, " infinite"),
          opacity: 0
        }
      }
    }
  };
};