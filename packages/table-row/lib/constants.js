"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentArgs = void 0;
var componentArgs = exports.componentArgs = {
  activated: {
    description: "Displays the row in an activated state",
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  className: {
    table: {
      disable: true
    }
  },
  enableInteractions: {
    description: "Whether to allow hover/active/selected (etc.) interactions",
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  highlighted: {
    description: "Displays the row in a highlighted state",
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  onClick: {
    description: "`onClick` function, can be used if interactions are allowed"
  },
  selected: {
    description: "Displays the row in a selected state",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};