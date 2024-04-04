const tabsBase = {
  color: {
    value: "{tokens.colors.ink-on-background-60}"
  },
  opacity: {
    value: "{primitives.opacities.opaque}"
  },
  padding: {
    value: "{primitives.spacings.0}"
  }
};

module.exports = {
  tabs: {
    default: {
      ...tabsBase,
      backgroundColor: {
        value: "{tokens.colors.detail-1-20}"
      },
      boxShadow: {
        value: "none"
      }
    },
    quiet: {
      ...tabsBase,
      backgroundColor: {
        value: "{primitives.colors.detail.transparent}"
      },
      boxShadow: {
        value: "{tokens.effects.divider-0-bottom}"
      }
    }
  }
};
