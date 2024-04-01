"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variants = exports.severities = exports.componentArgs = exports.availableVariants = exports.availableSeverities = void 0;
var severities = exports.severities = Object.freeze({
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success"
});
var variants = exports.variants = Object.freeze({
  FILLED: "filled",
  OUTLINED: "outlined",
  STANDARD: "standard"
});
var availableSeverities = exports.availableSeverities = Object.freeze(Object.values(severities));
var availableVariants = exports.availableVariants = Object.freeze(Object.values(variants));
var componentArgs = exports.componentArgs = {
  icon: {
    table: {
      disable: true
    }
  },
  severity: {
    description: "The severity of the alert",
    options: availableSeverities,
    table: {
      defaultValue: {
        summary: severities.INFO
      }
    },
    type: "select"
  },
  variant: {
    description: "The variant to use",
    options: availableVariants,
    table: {
      defaultValue: {
        summary: variants.OUTLINED
      }
    },
    type: "select"
  }
};