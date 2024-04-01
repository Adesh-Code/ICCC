"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variants = exports.types = exports.sizes = exports.componentArgs = exports.availableVariants = exports.availableTypes = exports.availableSizes = void 0;
var types = exports.types = Object.freeze({
  ACCORDION_LIST: "accordionList",
  STEPPER: "stepper"
});
var variants = exports.variants = Object.freeze({
  FLAT: "flat",
  INDIVIDUAL_PANEL: "individualPanel",
  MERGED_PANEL: "mergedPanel",
  MINIMAL: "minimal"
});
var sizes = exports.sizes = Object.freeze({
  NORMAL: "normal",
  DENSE: "dense"
});
var availableTypes = exports.availableTypes = Object.freeze(Object.values(types));
var availableVariants = exports.availableVariants = Object.freeze(Object.values(variants));
var availableSizes = exports.availableSizes = Object.freeze(Object.values(sizes));
var componentArgs = exports.componentArgs = {
  children: {
    table: {
      disable: true
    }
  },
  size: {
    table: {
      disable: true
    }
  },
  styleVariant: {
    table: {
      disable: true
    }
  },
  type: {
    control: {
      type: "select",
      labels: {
        accordionList: "accordion list",
        stepper: "stepper"
      }
    },
    options: availableTypes
  },
  variant: {
    control: {
      type: "select",
      labels: {
        flat: "flat",
        individualPanel: "individual panel",
        mergedPanel: "merged panel",
        minimal: "minimal"
      }
    },
    options: availableVariants,
    table: {
      defaultValue: {
        summary: "individualPanel"
      }
    }
  }
};