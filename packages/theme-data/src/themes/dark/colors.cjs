const lightColors = require("../light/colors.cjs");

const transformColorToken = (token, value) => ({
  value: value.color,
  attributes: { category: "color" },
  opacity: value.opacity,
  modify: [
    {
      type: "alpha",
      amount: `{tokens.colors.${token}.opacity}`
    }
  ]
});

const transformAll = (colors) =>
  Object.entries(colors).reduce((acc, [token, value]) => {
    acc[token] = transformColorToken(token, value);
    return acc;
  }, {});

const darkColors = {
  "activated-fill-subtle": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.08
  },
  "activated-fill-subtle-on-fill-primary": {
    color: "{primitives.colors.primary.black}",
    opacity: 0.03
  },
  "activated-hover-fill-subtle": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.12
  },
  "activated-hover-fill-subtle-on-fill-primary": {
    color: "{primitives.colors.primary.black}",
    opacity: 0.09
  },
  "activated-pressed-fill-subtle": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.16
  },
  "activated-pressed-fill-subtle-on-fill-primary": {
    color: "{primitives.colors.primary.black}",
    opacity: 0.15
  },
  "backdrop-30": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.3
  },
  "backdrop-60": {
    color: "{primitives.colors.primary.black}",
    opacity: 0.6
  },
  "backdrop-85": {
    color: "{primitives.colors.primary.black}",
    opacity: 0.85
  },
  background: {
    color: "{primitives.colors.primary.black}",
    opacity: "{primitives.opacities.opaque}"
  },
  "background-40": {
    color: "{primitives.colors.primary.black}",
    opacity: "{primitives.opacities.semi-transparent}"
  },
  "background-panel": {
    color: "{primitives.colors.tint.slate-800}",
    opacity: "{primitives.opacities.opaque}"
  },
  "background-panel-distinct": {
    color: "{primitives.colors.tint.slate-700}",
    opacity: "{primitives.opacities.opaque}"
  },
  "detail-1-20": {
    color: "{primitives.colors.detail.slate-dark}",
    opacity: 0.2
  },
  "detail-1-40": {
    color: "{primitives.colors.detail.slate-dark}",
    opacity: "{primitives.opacities.semi-transparent}"
  },
  "detail-1-40-transparent": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.16
  },
  "detail-1-opaque": {
    color: "{primitives.colors.detail.slate-dark}",
    opacity: "{primitives.opacities.opaque}"
  },
  "detail-1-opaque-50": {
    color: "{primitives.colors.tint.slate-600}",
    opacity: "{primitives.opacities.opaque}"
  },
  "detail-1-transparent": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.2
  },
  "detail-2-40": {
    color: "{primitives.colors.detail.slate-light}",
    opacity: "{primitives.opacities.semi-transparent}"
  },
  "detail-2-opaque": {
    color: "{primitives.colors.detail.slate-light}",
    opacity: "{primitives.opacities.opaque}"
  },
  "detail-2-transparent": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.6
  },
  "divider-0": {
    color: "{primitives.colors.tint.slate-600}",
    opacity: "{primitives.opacities.opaque}"
  },
  "fade-gradient-opaque": {
    color: "{primitives.colors.primary.black}",
    opacity: "{primitives.opacities.opaque}"
  },
  "fade-gradient-semi-opaque": {
    color: "{primitives.colors.primary.black}",
    opacity: 0.85
  },
  "fade-gradient-semi-transparent": {
    color: "{primitives.colors.primary.black}",
    opacity: 0.15
  },
  "fade-gradient-transparent": {
    color: "{primitives.colors.primary.black}",
    opacity: "{primitives.opacities.transparent}"
  },
  "field-fill": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.05
  },
  "fill-alert-slight": {
    color: "{primitives.colors.tint.clay-450}",
    opacity: 0.2
  },
  "fill-elevation-0": {
    color: "{primitives.colors.tint.slate-800}",
    opacity: "{primitives.opacities.opaque}"
  },
  "fill-elevation-1": {
    color: "{primitives.colors.tint.slate-650}",
    opacity: "{primitives.opacities.opaque}"
  },
  "fill-elevation-2": {
    color: "{primitives.colors.tint.slate-600}",
    opacity: "{primitives.opacities.opaque}"
  },
  "fill-elevation-3": {
    color: "{primitives.colors.primary.black}",
    opacity: "{primitives.opacities.opaque}"
  },
  "fill-engage-slight": {
    color: "{primitives.colors.accent.iris}",
    opacity: 0.2
  },
  "fill-error": {
    color: "{primitives.colors.tint.clay-450}",
    opacity: "{primitives.opacities.opaque}"
  },
  "fill-inverse-tint": {
    color: "{primitives.colors.tint.slate-100}",
    opacity: "{primitives.opacities.opaque}"
  },
  "fill-primary": {
    color: "{primitives.colors.primary.white}",
    opacity: "{primitives.opacities.opaque}"
  },
  "fill-success-slight": {
    color: "{primitives.colors.accent.plant}",
    opacity: 0.2
  },
  "fill-urgent": {
    color: "{primitives.colors.tint.clay-450}",
    opacity: "{primitives.opacities.opaque}"
  },
  "fill-warning-slight": {
    color: "{primitives.colors.accent.gold}",
    opacity: 0.2
  },
  "hover-fill-subtle": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.08
  },
  "hover-fill-subtle-on-fill-primary": {
    color: "{primitives.colors.primary.black}",
    opacity: 0.03
  },
  "ink-error": {
    color: "{primitives.colors.tint.clay-450}",
    opacity: "{primitives.opacities.opaque}"
  },
  "ink-on-background": {
    color: "{primitives.colors.primary.white}",
    opacity: "{primitives.opacities.opaque}"
  },
  "ink-on-background-60": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.6
  },
  "ink-on-background-disabled": {
    color: "{primitives.colors.primary.white}",
    opacity: "{primitives.opacities.semi-transparent}"
  },
  "ink-on-fill-primary": {
    color: "{primitives.colors.primary.black}",
    opacity: "{primitives.opacities.opaque}"
  },
  "pressed-fill-subtle": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.12
  },
  "pressed-fill-subtle-on-fill-primary": {
    color: "{primitives.colors.primary.black}",
    opacity: 0.09
  },
  "row-divider": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.2
  },
  "row-highlighted": {
    color: "{primitives.colors.accent.iris}",
    opacity: 0.11
  },
  "row-highlighted-selected-loud": {
    color: "{primitives.colors.accent.iris}",
    opacity: 0.21
  },
  "row-selected-loud": {
    color: "{primitives.colors.accent.iris}",
    opacity: 0.16
  },
  "search-field-fill": {
    color: "{primitives.colors.primary.white}",
    opacity: 0.12
  },
  "search-field-fill-on-fill-primary": {
    color: "{primitives.colors.primary.black}",
    opacity: 0.04
  },
  "text-link-loud": {
    color: "{primitives.colors.tint.iris-200}",
    opacity: "{primitives.opacities.opaque}"
  },
  "text-link-loud-hover": {
    color: "{primitives.colors.tint.iris-150}",
    opacity: "{primitives.opacities.opaque}"
  },
  "text-link-loud-pressed": {
    color: "{primitives.colors.tint.iris-300}",
    opacity: "{primitives.opacities.opaque}"
  },
  "text-link-visited": {
    color: "{primitives.colors.tint.slate-450}",
    opacity: "{primitives.opacities.opaque}"
  },
  "text-on-background": {
    color: "{primitives.colors.tint.slate-200}",
    opacity: "{primitives.opacities.opaque}"
  },
  "text-on-fill-primary": {
    color: "{primitives.colors.tint.slate-700}",
    opacity: "{primitives.opacities.opaque}"
  }
};

module.exports = {
  colors: {
    ...lightColors.colors,
    ...transformAll(darkColors)
  }
};
