"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFormGroupStyles = void 0;
var makeFormGroupStyles = exports.makeFormGroupStyles = function makeFormGroupStyles(_ref) {
  var primitives = _ref.primitives;
  return {
    MuiFormGroup: {
      styleOverrides: {
        root: {
          "& label": {
            marginBottom: primitives.spacings[1]
          }
        }
      }
    }
  };
};