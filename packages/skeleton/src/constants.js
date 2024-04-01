export const animations = Object.freeze({
  PULSE: "pulse",
  WAVE: "wave",
  FALSE: false
});

export const variants = Object.freeze({
  TEXT: "text",
  CIRCULAR: "circular",
  RECTANGULAR: "rectangular"
});

export const availableAnimations = Object.freeze(Object.values(animations));

export const availableVariants = Object.freeze(Object.values(variants));

export const componentArgs = {
  animation: {
    control: {
      type: "select"
    },
    description: "The animation. If `false`, the animation effect is disabled.",
    options: availableAnimations,
    table: {
      defaultValue: { summary: animations.PULSE },
      type: { summary: "string" }
    }
  },
  variant: {
    control: {
      type: "select"
    },
    description: "The type of content that will be rendered.",
    options: availableVariants,
    table: {
      defaultValue: { summary: variants.TEXT },
      type: { summary: "string" }
    }
  }
};
