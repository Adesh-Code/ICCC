export const types = Object.freeze({
  ACCORDION_LIST: "accordionList",
  STEPPER: "stepper"
});

export const variants = Object.freeze({
  FLAT: "flat",
  INDIVIDUAL_PANEL: "individualPanel",
  MERGED_PANEL: "mergedPanel",
  MINIMAL: "minimal"
});

export const sizes = Object.freeze({
  NORMAL: "normal",
  DENSE: "dense"
});

export const availableTypes = Object.freeze(Object.values(types));
export const availableVariants = Object.freeze(Object.values(variants));
export const availableSizes = Object.freeze(Object.values(sizes));

export const componentArgs = {
  children: { table: { disable: true } },
  size: { table: { disable: true } },
  styleVariant: { table: { disable: true } },
  type: {
    control: {
      type: "select",
      labels: {
        accordionList: "accordion list",
        stepper: "stepper"
      }
    },
    options: availableTypes
  },
  variant: {
    control: {
      type: "select",
      labels: {
        flat: "flat",
        individualPanel: "individual panel",
        mergedPanel: "merged panel",
        minimal: "minimal"
      }
    },
    options: availableVariants,
    table: {
      defaultValue: { summary: "individualPanel" }
    }
  }
};
