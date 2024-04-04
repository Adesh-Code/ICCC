export const sizes = Object.freeze({
  MEDIUM: "medium",
  SMALL: "small"
});

export const availableSizes = Object.freeze(Object.values(sizes));

export const componentArgs = {
  checked: {
    description: "Render a checked checkbox",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    },
    type: "boolean"
  },
  className: { table: { disable: true } },
  disabled: {
    description: "Render a disabled checkbox",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    },
    type: "boolean"
  },
  indeterminate: {
    description: "Render an indeterminate checkbox",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    },
    type: "boolean"
  },
  size: {
    control: {
      type: "select"
    },
    description: "Size of the control",
    options: availableSizes,
    table: {
      defaultValue: { summary: sizes.MEDIUM },
      type: { summary: "string" }
    }
  }
};
