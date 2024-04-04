const buttonBase = {
  backgroundColor: { value: "{tokens.colors.fill-primary}" },
  borderColor: { value: "{tokens.colors.ink-on-background}" },
  borderStyle: { value: "solid" },
  borderWidth: { value: "{primitives.borderWidths.medium}" },
  boxShadow: { value: "none" },
  color: { value: "{tokens.colors.ink-on-fill-primary}" },
  fontSize: { value: "{primitives.fontSizes.3}" },
  fontWeight: { value: "{primitives.fontWeights.stout}" },
  lineHeight: { value: "{primitives.lineHeights.compact}" },
  minWidth: { value: "80px" },
  opacity: { value: "{primitives.opacities.opaque}" },
  paddingBottom: { value: "9px" },
  paddingLeft: { value: "{primitives.spacings.5}" },
  paddingRight: { value: "{primitives.spacings.5}" },
  paddingTop: { value: "9px" },
  textTransform: { value: "none" }
};

const variants = {
  contained: {
    ...buttonBase
  },
  outlined: {
    ...buttonBase,
    backgroundColor: { value: "{primitives.colors.detail.transparent}" },
    borderColor: { value: "{tokens.colors.ink-on-background}" },
    color: { value: "{tokens.colors.ink-on-background}" }
  },
  text: {
    ...buttonBase,
    backgroundColor: { value: "{primitives.colors.detail.transparent}" },
    borderColor: { value: "{primitives.colors.detail.transparent}" },
    color: { value: "{tokens.colors.ink-on-background}" }
  },
  "link-button": {
    ...buttonBase,
    backgroundColor: { value: "{primitives.colors.detail.transparent}" },
    borderColor: { value: "{primitives.colors.detail.transparent}" },
    color: { value: "{tokens.colors.ink-on-background}" },
    paddingBottom: { value: "{primitives.spacings.1}" },
    paddingLeft: { value: "0px" },
    paddingRight: { value: "0px" },
    paddingTop: { value: "{primitives.spacings.1}" },
    textDecorationColor: { value: "{primitives.colors.detail.transparent}" }
  }
};

const sizes = {
  defaultSize: {},
  dense: {
    fontSize: { value: "{primitives.fontSizes.2}" },
    lineHeight: { value: "20px" },
    minWidth: { value: "64px" },
    paddingBottom: { value: "5px" },
    paddingLeft: { value: "{primitives.spacings.3}" },
    paddingRight: { value: "{primitives.spacings.3}" },
    paddingTop: { value: "5px" }
  }
};

const states = {
  default: {},
  hover: {
    boxShadow: { value: "{tokens.effects.halo-hover}" }
  },
  focus: {
    outline: {
      value: "{primitives.borderWidths.large} solid {tokens.colors.ink-focus}"
    },
    outlineOffset: { value: "1px" }
  },
  pressed: {
    boxShadow: { value: "{tokens.effects.halo-pressed}" }
  },
  disabled: {
    opacity: { value: "{tokens.opacities.disabled}" }
  }
};

const combinator = (variantsArray, sizesArray, statesArray) => {
  return variantsArray.reduce((variantsAcc, [variantKey, variantValue]) => {
    const sizes = sizesArray.reduce((_sizesAcc, [sizeKey, sizeValue]) => {
      const states = statesArray.reduce(
        (_statesAcc, [stateKey, stateValue]) => {
          _statesAcc[stateKey] = {
            ...variantValue,
            ...sizeValue,
            ...stateValue
          };
          return _statesAcc;
        },
        {}
      );
      _sizesAcc[sizeKey] = { ...states };
      return _sizesAcc;
    }, {});
    variantsAcc[variantKey] = { ...sizes };
    return variantsAcc;
  }, {});
};

const button = combinator(
  Object.entries(variants),
  Object.entries(sizes),
  Object.entries(states)
);

module.exports = { button };
