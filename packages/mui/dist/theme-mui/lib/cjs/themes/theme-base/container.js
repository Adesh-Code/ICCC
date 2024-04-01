"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeContainerStyles = void 0;
var makeContainerStyles = exports.makeContainerStyles = function makeContainerStyles(_ref) {
  var primitives = _ref.primitives;
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.DhigSplitButton--wrapper": {
            position: "relative",
            width: "fit-content",
            margin: "unset"
          },
          "&.DhigCircularProgress--wrapper": {
            width: "fit-content",
            margin: "0",
            padding: "0",
            "& .DhigCircularProgress--container": {
              justifyContent: "center",
              position: "relative",
              padding: "0",
              width: "unset",
              "& .DhigCircularProgress--label": {
                display: "flex",
                position: "absolute",
                wordBreak: "break-word",
                "&.DhigCircularProgress--label--medium": {
                  width: "30px"
                },
                "&.DhigCircularProgress--label--large": {
                  width: "70px"
                }
              }
            },
            "& .DhigCircularProgress--label--determinate": {
              justifyContent: "center",
              padding: primitives.spacings["0"],
              "&.DhigCircularProgress--label--determinate--medium": {
                marginTop: primitives.spacings["3"],
                marginLeft: primitives.spacings["0"]
              },
              "&.DhigCircularProgress--label--determinate--notMedium": {
                marginTop: primitives.spacings["0"],
                marginLeft: primitives.spacings["2"]
              }
            }
          }
        }
      }
    }
  };
};