export const sizes = Object.freeze({
  MEDIUM: "medium",
  SMALL: "small"
});

const availableSizes = Object.freeze(Object.values(sizes));

export const componentArgs = {
  size: {
    name: "size",
    control: {
      type: "select"
    },
    description: "Which size option to use",
    options: availableSizes,
    table: {
      defaultValue: { summary: sizes.MEDIUM },
      type: { summary: "string" }
    }
  }
};
