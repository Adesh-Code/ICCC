export const placements = Object.freeze({
  TOP_START: "top-start",
  TOP: "top",
  TOP_END: "top-end",
  LEFT_START: "left-start",
  LEFT: "left",
  LEFT_END: "left-end",
  RIGHT_START: "right-start",
  RIGHT: "right",
  RIGHT_END: "right-end",
  BOTTOM_START: "bottom-start",
  BOTTOM: "bottom",
  BOTTOM_END: "bottom-end"
});

export const availablePlacements = Object.freeze(Object.values(placements));

export const componentArgs = {
  arrow: {
    description: "If true, adds an arrow to the tooltip",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: { summary: true },
      type: { summary: "boolean" }
    }
  },
  className: { table: { disable: true } },
  placement: {
    control: {
      type: "select"
    },
    options: availablePlacements,
    table: {
      defaultValue: { summary: placements.BOTTOM }
    }
  },
  TransitionProps: { table: { disable: true } }
};
