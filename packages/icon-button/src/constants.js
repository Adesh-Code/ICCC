export const sizes = Object.freeze({
  MEDIUM: "medium",
  SMALL: "small"
});

export const variants = Object.freeze({
  CONTAINED: "contained",
  OUTLINED: "outlined",
  TEXT: "text"
});

export const availableSizes = Object.freeze(Object.values(sizes));
export const availableVariants = Object.freeze(Object.values(variants));

export const componentArgs = {
  disabled: {
    description: "Prevents user interaction with the button",
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    }
  },
  fullWidth: {
    description: "Determines if it extends to 100% of the container width",
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    }
  },
  size: {
    description: "Determines the size of the button",
    control: {
      type: "select"
    },
    table: {
      defaultValue: { summary: sizes.MEDIUM },
      type: { summary: "string" }
    },
    options: availableSizes
  },
  variant: {
    description: "Determines the variant of the button",
    control: {
      type: "select"
    },
    table: {
      defaultValue: { summary: variants.CONTAINED },
      type: { summary: "string" }
    },
    options: availableVariants
  }
};
