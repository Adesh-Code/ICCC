export const sizes = Object.freeze({
  MEDIUM: "medium",
  SMALL: "small"
});

export const variants = Object.freeze({
  CONTAINED: "contained",
  OUTLINED: "outlined"
});

export const availableSizes = Object.freeze(Object.values(sizes));
export const availableVariants = Object.freeze(Object.values(variants));

export const componentArgs = {
  size: {
    description: "Determines the size",
    options: availableSizes,
    type: "select",
    table: {
      defaultValue: { summary: sizes.MEDIUM },
      type: { summary: availableSizes }
    }
  },
  variant: {
    description: "Determines the variant",
    options: availableVariants,
    type: "select",
    table: {
      defaultValue: { summary: variants.CONTAINED },
      type: { summary: availableVariants }
    }
  }
};
