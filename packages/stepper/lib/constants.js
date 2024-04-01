"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orientations = exports.componentArgs = exports.availableOrientations = void 0;
var orientations = exports.orientations = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
});
var availableOrientations = exports.availableOrientations = Object.freeze(Object.values(orientations));
var componentArgs = exports.componentArgs = {
  activeStep: {
    description: "Set the active step (zero based index). Set to -1 to disable all the steps.",
    options: [-1, 0, 1, 2, 3],
    control: {
      type: "select"
    },
    table: {
      defaultValue: {
        summary: 0
      },
      type: {
        summary: "number"
      }
    },
    type: "boolean"
  },
  nonLinear: {
    description: "If true, the stepper will not assist in controlling steps for linear flow.",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: "boolean"
      }
    },
    type: "boolean"
  },
  orientation: {
    description: "The orientation of the component.",
    options: availableOrientations,
    control: {
      type: "select"
    },
    table: {
      defaultValue: {
        summary: orientations.HORIZONTAL
      },
      type: {
        summary: availableOrientations
      }
    }
  }
};