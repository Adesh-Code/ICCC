const lightEffects = require("../light/effects.cjs");

module.exports = {
  effects: {
    ...lightEffects.effects,
    "divider-0-bottom-on-fill-primary": {
      value: "0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset"
    },
    "container-1": {
      value:
        "0px 0px 0px 1px rgba(102, 102, 102, 0.5) inset, 0px 1px 0px 0px {primitives.colors.tint.slate-500} inset"
    },
    "elevation-0-dropdown": {
      value: "0px 0px 0px 1px rgba(255, 255, 255, 0.1) inset"
    },
    "elevation-0-popover": {
      value:
        "0px 1px 0px 0px rgba(255, 255, 255, 0.4) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.1) inset, 0px -1px 0px 0px rgba(255, 255, 255, 0.1) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.1) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.1) inset"
    },
    "elevation-1": {
      value:
        "0px 2px 0px 0px rgba(255, 255, 255, 0.4) inset, 0px 0px 0px 1px rgba(255, 255, 255, 0.2) inset"
    },
    "field-default": {
      value:
        "0px -1px 0px 0px {primitives.colors.primary.white} inset, 0px 0px 0px 1px rgba(255, 255, 255, 0.25) inset"
    }
  }
};
