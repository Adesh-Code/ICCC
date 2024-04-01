export const layouts = Object.freeze({
  FIXED: "fixed",
  GROW: "grow"
});

export const availableLayouts = Object.freeze(Object.values(layouts));

export const componentArgs = {
  addendum: {
    control: {
      type: "text"
    },
    description:
      "Provides non-selectable explanatory text or contextual links to the bottom of the dropdown.",
    table: {
      type: { summary: "string" }
    }
  },
  className: { table: { disable: true } },
  disabled: {
    description: "If `true`, renders disabled state.",
    table: {
      defaultValue: { summary: false }
    }
  },
  error: {
    description: "If `true`, renders error state.",
    table: {
      defaultValue: { summary: false }
    }
  },
  freeSolo: {
    control: {
      type: "boolean"
    },
    description:
      "If `true`, the combobox is free solo, meaning that the user input is not bound to provided options.",
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    }
  },
  layout: {
    control: {
      type: "select"
    },
    description:
      "Layout of the autocomplete component when `multiple` is set to `true`.",
    options: availableLayouts,
    table: {
      type: { summary: "string" }
    }
  },
  multiple: {
    control: {
      type: "boolean"
    },
    description:
      "If `true`, value must be an array and the menu will support multiple selections.",
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    }
  },
  options: { table: { disable: true } },
  renderTags: { table: { disable: true } }
};
