export const sizes = Object.freeze({
  MEDIUM: "medium",
  SMALL: "small"
});

export const verticalAlignments = Object.freeze({
  CENTER: "center",
  TOP: "top"
});

export const availableSizes = Object.freeze(Object.values(sizes));
export const availableVerticalAlignments = Object.freeze(
  Object.values(verticalAlignments)
);

export const componentArgs = {
  className: { table: { disable: true } },
  size: {
    control: {
      type: "select"
    },
    options: availableSizes
  },
  verticalAlignment: {
    control: {
      type: "select"
    },
    options: availableVerticalAlignments
  }
};
