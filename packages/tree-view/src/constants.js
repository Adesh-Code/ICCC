export const sizes = Object.freeze({
  DEFAULT: "default",
  DENSE: "dense"
});

export const variants = Object.freeze({
  FLAT: "flat",
  MINIMAL: "minimal"
});

export const availableSizes = Object.freeze(Object.values(sizes));
export const availableVariants = Object.freeze(Object.values(variants));

export const componentArgs = {
  size: {
    description: "The size of the tree items",
    options: availableSizes,
    table: {
      defaultValue: { summary: sizes.DEFAULT }
    },
    type: "select"
  },
  variant: {
    description: "Which variant option to use",
    options: availableVariants,
    table: {
      defaultValue: { summary: variants.MINIMAL }
    },
    type: "select"
  }
};
