"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variants = exports.sizes = exports.componentArgs = exports.availableVariants = exports.availableSizes = void 0;
var variants = exports.variants = Object.freeze({
  DETERMINATE: "determinate",
  INDETERMINATE: "indeterminate"
});
var availableVariants = exports.availableVariants = Object.freeze(Object.values(variants));
var sizes = exports.sizes = Object.freeze({
  "X-SMALL": "x-small",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
});
var availableSizes = exports.availableSizes = Object.freeze(Object.values(sizes));
var componentArgs = exports.componentArgs = {
  className: {
    table: {
      disable: true
    }
  },
  label: {
    name: "label",
    type: {
      name: "string",
      required: false
    },
    description: "Sets the label to be displayed.",
    table: {
      type: {
        summary: "string"
      }
    },
    control: {
      type: "text"
    }
  },
  size: {
    description: "Determines the size.",
    control: {
      type: "select"
    },
    table: {
      type: {
        summary: availableSizes
      }
    },
    options: availableSizes
  },
  value: {
    description: "Determines the value of the `determinate` variant.",
    control: {
      type: "range",
      min: 0,
      max: 100,
      step: 1
    },
    table: {
      defaultValue: {
        summary: 0
      },
      type: {
        summary: "number"
      }
    }
  },
  variant: {
    description: "Determines the variant.",
    control: {
      type: "select"
    },
    table: {
      defaultValue: {
        summary: variants.INDETERMINATE
      },
      type: {
        summary: availableVariants
      }
    },
    options: availableVariants
  }
};