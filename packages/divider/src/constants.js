export const orientations = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
});

export const availableOrientations = Object.freeze(Object.values(orientations));

export const componentArgs = {
  light: {
    control: {
      type: "boolean"
    },
    description: "If true, the divider will have a lighter color.",
    table: {
      defaultValue: { summary: true },
      type: { summary: "boolean" }
    }
  },
  orientation: {
    control: {
      type: "select"
    },
    description: "The component orientation.",
    options: availableOrientations,
    table: {
      defaultValue: { summary: orientations.HORIZONTAL },
      type: { summary: "string" }
    }
  }
};
