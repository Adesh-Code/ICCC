export const componentArgs = {
  className: { table: { disable: true } },
  error: {
    control: {
      type: "boolean"
    },
    description: "Use to indicate that the input is in an error state",
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    }
  },
  id: { table: { disable: true } },
  onChange: { table: { disable: true } },
  onKeyDown: { table: { disable: true } },
  max: {
    control: {
      type: "number"
    },
    description: "Maximum value",
    table: {
      type: { summary: "number" }
    }
  },
  min: {
    control: {
      type: "number"
    },
    description: "Minimum value",
    table: {
      type: { summary: "number" }
    }
  },
  step: {
    control: {
      type: "number"
    },
    description: "Step value for the add and subtract buttons",
    table: {
      type: { summary: "number" }
    }
  },
  value: {
    control: {
      type: "number"
    },
    description: "Value of the input",
    table: {
      type: { summary: "number" }
    }
  }
};
