/*
Constants to be used for Card component
*/
export const overlays = Object.freeze({
  NONE: "none",
  TOP: "top",
  CENTER: "center",
  BOTTOM: "bottom"
});

export const appearances = Object.freeze({
  DEFAULT: "default",
  FRAMED: "framed",
  QUIET_AND_FRAMED: "quietAndFramed",
  QUIET: "quiet"
});

export const availableOverlays = Object.freeze(Object.values(overlays));

export const componentArgs = {
  className: { table: { disable: true } },
  children: { table: { disable: true } },
  twoColumns: { table: { disable: true } }
};
