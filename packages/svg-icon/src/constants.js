export const fontSizes = Object.freeze({
  INHERIT: "inherit",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  EXTRA_LARGE: "extra-large"
});

export const availableFontSizes = Object.freeze(Object.values(fontSizes));

export const componentArgs = {
  fontSize: {
    description: "Icon size",
    control: {
      type: "select"
    },
    options: availableFontSizes,
    table: {
      defaultValue: { summary: fontSizes.INHERIT },
      type: { summary: availableFontSizes }
    }
  }
};
