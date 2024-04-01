export const colors = Object.freeze({
  ATTENTION: "attention",
  DEFAULT: "default",
  NEUTRAL: "neutral",
  SUCCESS: "success",
  URGENCY: "urgency"
});

export const variants = Object.freeze({
  DOT: "dot",
  INLINE: "inline",
  STANDARD: "standard"
});

export const availableColors = Object.freeze(Object.values(colors));
export const availableVariants = Object.freeze(Object.values(variants));

export const componentArgs = {
  badgeContent: {
    description: "The content rendered within the badge."
  },
  color: {
    description: "The color of the component.",
    options: availableColors,
    control: {
      type: "select"
    },
    table: {
      defaultValue: { summary: colors.DEFAULT },
      type: { summary: availableColors }
    }
  },
  variant: {
    description: "The variant of the component.",
    options: availableVariants,
    control: {
      type: "select"
    },
    table: {
      defaultValue: { summary: variants.STANDARD },
      type: { summary: availableVariants }
    }
  }
};
