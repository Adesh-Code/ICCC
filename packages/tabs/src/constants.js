export const styleVariants = Object.freeze({
  DEFAULT: "default",
  QUIET: "quiet"
});

export const orientations = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
});

export const availableStyleVariants = Object.freeze(
  Object.values(styleVariants)
);

export const availableOrientations = Object.freeze(Object.values(orientations));

export const componentArgs = {
  extendedUnderline: {
    description: "Determines which underline style to use.",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: { summary: false }
    }
  },
  onChange: {
    description:
      "Callback fired when the value changes. `function(event: object, value: number) => void` `event: The event source of the callback` `value: Index of the tab`"
  },
  orientation: {
    description: "The tabs orientation (layout flow direction).",
    control: {
      type: "radio"
    },
    options: availableOrientations,
    table: {
      defaultValue: { summary: orientations.HORIZONTAL }
    }
  },
  styleVariant: {
    description: "Determines which style variant to use.",
    control: {
      type: "radio"
    },
    options: availableStyleVariants,
    table: {
      defaultValue: { summary: styleVariants.DEFAULT }
    }
  },
  value: {
    description:
      "The value of the currently selected Tab (defaults to `0`). If you don't want any selected Tab, you can set this property to `false`.",
    control: {
      type: "number"
    },
    table: {
      defaultValue: { summary: 0 }
    }
  }
};
