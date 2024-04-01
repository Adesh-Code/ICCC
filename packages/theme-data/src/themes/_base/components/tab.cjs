const tabBase = {
  backgroundColor: { value: "{primitives.colors.detail.transparent}" },
  borderColor: { value: "{primitives.colors.detail.transparent}" },
  borderWidth: { value: "{primitives.borderWidths.large}" },
  color: { value: "{tokens.colors.ink-on-background-60}" },
  transitionDuration: {
    value: "{tokens.transitions.state-activate.transitionDuration}"
  },
  transitionTimingFunction: {
    value: "{tokens.transitions.state-activate.transitionTimingFunction}"
  }
};

module.exports = {
  tab: {
    default: {
      ...tabBase
    },
    active: {
      ...tabBase,
      backgroundColor: { value: "{tokens.colors.fill-elevation-1}" },
      color: { value: "{tokens.colors.ink-on-background}" },
      transitionDuration: {
        value: "{tokens.transitions.state-blur.transitionDuration}"
      },
      transitionTimingFunction: {
        value: "{tokens.transitions.state-blur.transitionTimingFunction}"
      }
    },
    hover: {
      ...tabBase,
      backgroundColor: { value: "{tokens.colors.hover-fill-subtle}" },
      transitionDuration: {
        value: "{tokens.transitions.state-blur.transitionDuration}"
      },
      transitionTimingFunction: {
        value: "{tokens.transitions.state-blur.transitionTimingFunction}"
      }
    },
    focus: {
      ...tabBase,
      borderColor: { value: "{tokens.colors.ink-focus}" }
    },
    pressed: {
      ...tabBase,
      backgroundColor: { value: "{tokens.colors.pressed-fill-subtle}" }
    }
  }
};
