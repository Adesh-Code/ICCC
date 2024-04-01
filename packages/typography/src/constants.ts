/** 
 * Collection of all typography variants
 */
export const availableVariants = Object.freeze(<const>[
  "display-extra",
  "display",
  "headline-largest",
  "headline-larger",
  "headline-large",
  "headline-medium",
  "headline-small",
  "headline-smaller",
  "headline-smallest",
  "body-copy-large",
  "body-copy-medium",
  "body-copy-small",
  "short-copy-large",
  "short-copy-medium",
  "short-copy-small",
  "smallprint",
  "code",
  "caption",
  "eyebrow",
  "pull-quote-medium",
  "pull-quote-large",
  "input-value",
  "button-label",
  "button-label-dense"
]);

/**
 * Collection of all color tokens starting with `ink-` or `text-`
 */
export const availableColors = <const>[
  "",
  "ink-error",
  "ink-on-background",
  "ink-on-background-60",
  "ink-on-background-disabled",
  "ink-on-fill-alert",
  "ink-on-fill-engage",
  "ink-on-fill-primary",
  "ink-on-fill-success",
  "ink-on-fill-warning",
  "ink-pressed",
  "text-link-loud",
  "text-link-loud-hover",
  "text-link-loud-pressed",
  "text-link-visited",
  "text-on-background",
  "text-on-fill-primary",
  // excluding: ink-hover, ink-focus, ink-success
];

export const componentArgs = {
  variant: {
    description: 'DHIG Typography tokens',
    defaultValue: 'body-copy-medium',
    table: {
      type: {
        summary: availableVariants.join(' | ')
      }
    },
    control: {
      type: "select"
    },
    options: availableVariants
  },
  color: {
    description: 'DHIG Typography text colors',
    table: {
      type: {
        summary: availableColors.join(' | ')
      }
    },
    control: {
      type: "select"
    },
    options: availableColors
  },
  tabularNumeric: {
    description: 'DHIG Tabular numeric, displays a set of figures where numbers are all of the same size, allowing them to be easily aligned like in tables.',
    defaultValue: false,
    table: {
      type: {
        summary: 'boolean'
      }
    },
    control: {
      type: "boolean"
    }
  }
};
