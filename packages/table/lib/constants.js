"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verticalAlignments = exports.sizes = exports.componentArgs = exports.availableVerticalAlignments = exports.availableSizes = void 0;
var sizes = exports.sizes = Object.freeze({
  MEDIUM: "medium",
  SMALL: "small"
});
var verticalAlignments = exports.verticalAlignments = Object.freeze({
  CENTER: "center",
  TOP: "top"
});
var availableSizes = exports.availableSizes = Object.freeze(Object.values(sizes));
var availableVerticalAlignments = exports.availableVerticalAlignments = Object.freeze(Object.values(verticalAlignments));
var componentArgs = exports.componentArgs = {
  className: {
    table: {
      disable: true
    }
  },
  size: {
    control: {
      type: "select"
    },
    options: availableSizes
  },
  verticalAlignment: {
    control: {
      type: "select"
    },
    options: availableVerticalAlignments
  }
};