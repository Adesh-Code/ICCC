export const backdropVariants = Object.freeze({
  DEFAULT: "default",
  LIGHT: "light"
});

export const maxWidths = Object.freeze({
  FALSE: false,
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl"
});

export const styleVariants = Object.freeze({
  DEFAULT: "default",
  SUBDIVISION: "subdivision"
});

export const types = Object.freeze({
  MODAL: "modal",
  LIGHTBOX: "lightbox",
  ALERT: "alert"
});

export const availableBackdropVariants = Object.freeze(
  Object.values(backdropVariants)
);
export const availableMaxWidths = Object.freeze(Object.values(maxWidths));
export const availableStyleVariants = Object.freeze(
  Object.values(styleVariants)
);
export const availableTypes = Object.freeze(Object.values(types));

export const componentArgs = {
  actions: {
    description: "Elements or text in the footer",
    control: { disable: true },
    table: {
      type: { summary: "element, node" }
    }
  },
  AlertIcon: {
    description:
      "Icon component for modal header, only applies for the 'alert' variant",
    table: {
      type: { summary: "element, node" }
    }
  },
  backdropVariant: {
    description: "Backdrop variant",
    options: availableBackdropVariants,
    control: {
      type: "select"
    },
    table: {
      defaultValue: { summary: backdropVariants.DEFAULT },
      type: { summary: availableBackdropVariants }
    }
  },
  closeButtonDisplay: {
    description:
      "Whether to display the close button. If not displayed, the modal cannot be dismissed by clicking the backdrop.",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: { summary: true },
      type: { summary: "boolean" }
    }
  },
  closeButtonOutside: {
    description: "Displays close button on the overlay outside the modal",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    }
  },
  CloseButtonProps: {
    description:
      "Props to pass to close button component, e.g. `accessibleLabel` string, `onClick` function, etc.",
    control: {
      type: "object"
    },
    table: {
      type: { summary: "object" }
    }
  },
  content: {
    description: "Modal content",
    control: { disable: true },
    table: {
      type: { summary: "element, node, string" }
    }
  },
  DialogContentProps: {
    description:
      "Props to pass to DialogContent component, e.g. `style` object.",
    control: {
      type: "object"
    },
    table: {
      type: { summary: "object" }
    }
  },
  disableCloseFromOutside: {
    description: "If true, clicking the backdrop will not fire onClose",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    }
  },
  displayLogo: {
    description: "Whether to display the Autodesk logo (replaces the title)",
    control: {
      type: "boolean"
    },
    table: {
      defaultValue: { summary: false },
      type: { summary: "boolean" }
    }
  },
  handleClose: {
    description: "Function to handle modal closing",
    control: { disable: true },
    table: {
      type: { summary: "func" }
    }
  },
  maxWidth: {
    description:
      "Max width of the modal. Set to false if custom width is needed.",
    options: availableMaxWidths,
    control: {
      type: "select"
    },
    table: {
      defaultValue: { summary: maxWidths.SM },
      type: { summary: availableMaxWidths }
    }
  },
  styleVariant: {
    description: "Style variant",
    options: availableStyleVariants,
    control: {
      type: "select"
    },
    table: {
      defaultValue: { summary: styleVariants.DEFAULT },
      type: { summary: availableStyleVariants }
    }
  },
  title: {
    description: "Title of the modal",
    control: {
      type: "object"
    },
    table: {
      type: { summary: "element, node, string" }
    }
  },
  type: {
    description: "Modal type",
    options: availableTypes,
    control: {
      type: "select"
    },
    table: {
      defaultValue: { summary: types.MODAL },
      type: { summary: availableTypes }
    }
  }
};
