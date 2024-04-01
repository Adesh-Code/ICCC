export const variants = Object.freeze({
  DETERMINATE: "determinate",
  INDETERMINATE: "indeterminate"
});
export const availableVariants = Object.freeze(Object.values(variants));

export const sizes = Object.freeze({
  SMALL: "small",
  MEDIUM: "medium"
});
export const availableSizes = Object.freeze(Object.values(sizes));

export const componentArgs = {
  children: { table: { disable: true } },
  className: { table: { disable: true } },
  size: {
    description: "Determines the size.",
    control: {
      type: "select"
    },
    table: {
      type: { summary: availableSizes }
    },
    options: availableSizes
  },
  value: {
    description: "Determines the value of the `determinate` variant.",
    control: {
      type: "range",
      min: 0,
      max: 100,
      step: 1
    },
    table: {
      defaultValue: { summary: 0 },
      type: { summary: "number" }
    }
  },
  variant: {
    description: "Determines the variant.",
    control: {
      type: "select"
    },
    table: {
      defaultValue: { summary: variants.INDETERMINATE },
      type: { summary: availableVariants }
    },
    options: availableVariants
  }
};
