const textLinkBase = {
  color: {
    value: "{tokens.colors.ink-on-background}"
  },
  outlineColor: {
    value: "{primitives.colors.detail.transparent}"
  },
  outlineOffset: {
    value: "2px"
  },
  outlineStyle: {
    value: "solid"
  },
  outlineWidth: {
    value: "{primitives.borderWidths.large}"
  },
  textDecoration: {
    value: "underline"
  },
  textDecorationColor: {
    value: "{tokens.colors.ink-on-background}"
  },
  textDecorationThickness: {
    value: "0.0625em"
  },
  textUnderlineOffset: {
    value: "0.125em"
  },
  underlineThickness: {
    value: "0.0625em"
  },
  underlineOffset: {
    value: "0.125em"
  }
};

const textLink = {
  defaultState: textLinkBase,
  hoverState: {
    ...textLinkBase,
    textDecorationColor: {
      value: "{tokens.colors.ink-hover}"
    }
  },
  focusState: {
    ...textLinkBase,
    outlineColor: {
      value: "{tokens.colors.ink-focus}"
    }
  },
  pressedState: {
    ...textLinkBase,
    textDecorationColor: {
      value: "{tokens.colors.ink-pressed}"
    },
    textDecorationThickness: {
      value: "0.125em"
    },
    underlineThickness: {
      value: "0.125em"
    }
  },
  visitedState: {
    ...textLinkBase,
    color: {
      value: "{tokens.colors.text-link-visited}"
    },
    textDecorationColor: {
      value: "{tokens.colors.text-link-visited}"
    }
  }
};

module.exports = { textLink };
