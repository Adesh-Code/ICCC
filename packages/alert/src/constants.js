export const severities = Object.freeze({
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success"
});

export const variants = Object.freeze({
  FILLED: "filled",
  OUTLINED: "outlined",
  STANDARD: "standard"
});

export const availableSeverities = Object.freeze(Object.values(severities));
export const availableVariants = Object.freeze(Object.values(variants));

export const componentArgs = {
  icon: {
    table: { disable: true }
  },
  severity: {
    description: "The severity of the alert",
    options: availableSeverities,
    table: {
      defaultValue: { summary: severities.INFO }
    },
    type: "select"
  },
  variant: {
    description: "The variant to use",
    options: availableVariants,
    table: {
      defaultValue: { summary: variants.OUTLINED }
    },
    type: "select"
  }
};
