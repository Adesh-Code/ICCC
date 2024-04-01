"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variants = exports.sizes = exports.componentArgs = exports.availableVariants = exports.availableSizes = void 0;
var sizes = exports.sizes = Object.freeze({
  DEFAULT: "default",
  DENSE: "dense"
});
var variants = exports.variants = Object.freeze({
  FLAT: "flat",
  MINIMAL: "minimal"
});
var availableSizes = exports.availableSizes = Object.freeze(Object.values(sizes));
var availableVariants = exports.availableVariants = Object.freeze(Object.values(variants));
var componentArgs = exports.componentArgs = {
  size: {
    description: "The size of the tree items",
    options: availableSizes,
    table: {
      defaultValue: {
        summary: sizes.DEFAULT
      }
    },
    type: "select"
  },
  variant: {
    description: "Which variant option to use",
    options: availableVariants,
    table: {
      defaultValue: {
        summary: variants.MINIMAL
      }
    },
    type: "select"
  }
};