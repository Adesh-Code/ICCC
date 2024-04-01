export const colors = Object.freeze({
  DEFAULT: "default",
  ERROR: "error"
});
export const availableColors = Object.freeze(Object.values(colors));

export const variants = Object.freeze({
  FILLED: "filled",
  OUTLINED: "outlined"
});
export const availableVariants = Object.freeze(Object.values(variants));

export const componentArgs = {
  color: {
    description: "Use `'error'` for invalid state.",
    control: {
      type: "select"
    },
    options: availableColors,
    table: {
      defaultValue: { summary: colors.DEFAULT }
    }
  },
  disabled: {
    control: "boolean",
    description: "If true, the component is disabled",
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    }
  },
  label: {
    description: "Chip label"
  },
  selected: {
    description: "Use to indicate that the chip is selected.",
    control: {
      type: "boolean"
    }
  },
  variant: {
    description: "Use `'outlined'` for invalid state only.",
    control: {
      type: "select"
    },
    options: availableVariants,
    table: {
      defaultValue: { summary: variants.FILLED }
    }
  }
};
