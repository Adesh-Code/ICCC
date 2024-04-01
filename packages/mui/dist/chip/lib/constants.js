"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variants = exports.componentArgs = exports.colors = exports.availableVariants = exports.availableColors = void 0;
var colors = exports.colors = Object.freeze({
  DEFAULT: "default",
  ERROR: "error"
});
var availableColors = exports.availableColors = Object.freeze(Object.values(colors));
var variants = exports.variants = Object.freeze({
  FILLED: "filled",
  OUTLINED: "outlined"
});
var availableVariants = exports.availableVariants = Object.freeze(Object.values(variants));
var componentArgs = exports.componentArgs = {
  color: {
    description: "Use `'error'` for invalid state.",
    control: {
      type: "select"
    },
    options: availableColors,
    table: {
      defaultValue: {
        summary: colors.DEFAULT
      }
    }
  },
  disabled: {
    control: "boolean",
    description: "If true, the component is disabled",
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: "boolean"
      }
    }
  },
  label: {
    description: "Chip label"
  },
  selected: {
    description: "Use to indicate that the chip is selected.",
    control: {
      type: "boolean"
    }
  },
  variant: {
    description: "Use `'outlined'` for invalid state only.",
    control: {
      type: "select"
    },
    options: availableVariants,
    table: {
      defaultValue: {
        summary: variants.FILLED
      }
    }
  }
};