"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSkeletonStyles = void 0;
var makeSkeletonStyles = exports.makeSkeletonStyles = function makeSkeletonStyles(_ref) {
  var tokens = _ref.tokens;
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colors["fill-soft-gray-transparent"]
        }
      }
    }
  };
};