module.exports = {
  effects: {
    "divider-0-top": {
      value: "0px 1px 0px 0px {tokens.colors.row-divider} inset"
    },
    "divider-0-bottom": {
      value: "0px -1px 0px 0px {tokens.colors.row-divider} inset"
    },
    "divider-0-left": {
      value: "1px 0px 0px 0px {tokens.colors.row-divider} inset"
    },
    "divider-0-top-bottom": {
      value:
        "0px -1px 0px 0px {tokens.colors.row-divider} inset, 0px 1px 0px 0px {tokens.colors.row-divider} inset"
    },
    "divider-0-bottom-on-fill-primary": {
      value: "0px -1px 0px 0px rgba(255, 255, 255, 0.2) inset"
    },
    "container-0": {
      value: "0px 0px 0px 1px {tokens.colors.row-divider} inset"
    },
    "container-0-outside": {
      value: "0px 0px 0px 1px {tokens.colors.row-divider}"
    },
    "container-1": {
      value:
        "0px 0px 0px 1px rgba(204, 204, 204, 0.5) inset, 0px -1px 0px 0px {primitives.colors.detail.slate-dark} inset"
    },
    "elevation-0-dropdown": {
      value:
        "0px 2px 0px 0px rgba(0, 0, 0, 0.6), 0px 1px 0px 0px rgba(0, 0, 0, 0.3) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.3) inset, 1px 0px 0px 0px rgba(0, 0, 0, 0.3) inset"
    },
    "elevation-0-popover": {
      value:
        "0px 2px 0px 0px rgba(0, 0, 0, 0.6), 0px 1px 0px 0px rgba(0, 0, 0, 0.3) inset, 1px 0px 0px 0px rgba(0, 0, 0, 0.3) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.3) inset"
    },
    "elevation-1": {
      value:
        "0px 3px 0px 0px {primitives.colors.primary.black}, 0px 0px 0px 1px {primitives.colors.primary.black} inset"
    },
    "field-default": {
      value:
        "0px -1px 0px 0px {primitives.colors.primary.black} inset, 0px 0px 0px 1px rgba(0, 0, 0, 0.3) inset"
    },
    underline: {
      value: "0px -1px 0px 0px {tokens.colors.ink-on-background} inset"
    },
    "tab-highlight-top": {
      value: "0px 2px 0px 0px {tokens.colors.ink-on-background} inset"
    },
    "tab-highlight-bottom": {
      value: "0px -2px 0px 0px {tokens.colors.ink-on-background} inset"
    },
    "tab-highlight-left": {
      value: "2px 0px 0px 0px {tokens.colors.ink-on-background} inset"
    },
    "tab-highlight-bottom-on-fill-primary": {
      value: "0px -2px 0px 0px {tokens.colors.background} inset"
    },
    "focus-ring": {
      value:
        "0px 0px 0px 3px {primitives.colors.accent.iris}, 0px 0px 0px 1px {tokens.colors.background}"
    },
    "focus-ring-thin": {
      value:
        "0px 0px 0px 2px {primitives.colors.accent.iris}, 0px 0px 0px 1px {tokens.colors.background}"
    },
    "focus-ring-reverse": {
      value:
        "0px 0px 0px 1px {tokens.colors.background}, 0px 0px 0px 3px {primitives.colors.accent.iris}"
    },
    "hover-halo-inwards": {
      value: "0px 0px 0px 1px {primitives.colors.tint.iris-400} inset"
    },
    "field-error": {
      value:
        "0px -1px 0px 0px {primitives.colors.accent.clay} inset, 0px 0px 0px 1px {primitives.colors.accent.clay} inset"
    },
    "halo-hover": {
      value: "0px 0px 0px 1px {primitives.colors.tint.iris-400}"
    },
    "halo-pressed": {
      value: "0px 0px 0px 2px {primitives.colors.accent.plant}"
    },
    "halo-success-hover": {
      value: "0px 0px 0px 1px {primitives.colors.tint.plant-300}"
    },
    "halo-success-pressed": {
      value: "0px 0px 0px 2px {primitives.colors.tint.plant-300}"
    },
    "halo-engage-hover": {
      value: "0px 0px 0px 1px {primitives.colors.tint.iris-300}"
    },
    "halo-engage-pressed": {
      value: "0px 0px 0px 2px {primitives.colors.tint.iris-300}"
    },
    "halo-alarm-hover": {
      value: "0px 0px 0px 1px {primitives.colors.tint.clay-300}"
    },
    "halo-alarm-pressed": {
      value: "0px 0px 0px 2px {primitives.colors.tint.clay-300}"
    }
  }
};
