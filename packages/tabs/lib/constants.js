"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleVariants = exports.orientations = exports.componentArgs = exports.availableStyleVariants = exports.availableOrientations = void 0;
var styleVariants = exports.styleVariants = Object.freeze({
  DEFAULT: "default",
  QUIET: "quiet"
});
var orientations = exports.orientations = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
});
var availableStyleVariants = exports.availableStyleVariants = Object.freeze(Object.values(styleVariants));
var availableOrientations = exports.availableOrientations = Object.freeze(Object.values(orientations));
var componentArgs = exports.componentArgs = {
  extendedUnderline: {
    description: "Determines which underline style to use.",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  onChange: {
    description: "Callback fired when the value changes. `function(event: object, value: number) => void` `event: The event source of the callback` `value: Index of the tab`"
  },
  orientation: {
    description: "The tabs orientation (layout flow direction).",
    control: {
      type: "radio"
    },
    options: availableOrientations,
    table: {
      defaultValue: {
        summary: orientations.HORIZONTAL
      }
    }
  },
  styleVariant: {
    description: "Determines which style variant to use.",
    control: {
      type: "radio"
    },
    options: availableStyleVariants,
    table: {
      defaultValue: {
        summary: styleVariants.DEFAULT
      }
    }
  },
  value: {
    description: "The value of the currently selected Tab (defaults to `0`). If you don't want any selected Tab, you can set this property to `false`.",
    control: {
      type: "number"
    },
    table: {
      defaultValue: {
        summary: 0
      }
    }
  }
};