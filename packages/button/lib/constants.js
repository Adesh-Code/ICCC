const sizes = Object.freeze({
    MEDIUM: "medium",
    SMALL: "small"
  });
  
  const variants = Object.freeze({
    CONTAINED: "contained",
    OUTLINED: "outlined",
    TEXT: "text",
    LINK_BUTTON: "link-button"
  });
  
  export const componentArgs = {
    children: {
      description: "The content of the component",
      control: { disable: true },
      table: {
        type: { summary: "node" }
      },
      type: { required: true }
    },
    disabled: {
      control: "boolean",
      description: "If true, the component is disabled",
      table: {
        defaultValue: { summary: false },
        type: { summary: "boolean" }
      }
    },
    fullWidth: {
      control: "boolean",
      description: "If true, component is full-width",
      table: {
        defaultValue: { summary: false },
        type: { summary: "boolean" }
      }
    },
    size: {
      control: "select",
      description: "Which size option to use",
      options: Object.values(sizes),
      table: {
        defaultValue: { summary: sizes.MEDIUM },
        type: { summary: "string" }
      }
    },
    variant: {
      control: "select",
      description: "Which variant option to use",
      options: Object.values(variants),
      table: {
        defaultValue: { summary: variants.CONTAINED },
        type: { summary: "string" }
      }
    }
  };
  