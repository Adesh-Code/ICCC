const themeData = require("./lib/build/json/light/design-tokens.json");
const darkThemeData = require("./lib/build/json/dark/design-tokens.json");

// Adapt grid token config to Tailwind screens config
const screensConfig = Object.entries(themeData.tokens.grid).reduce(
  (acc, [key, value]) => {
    acc[key] = `${value.breakpoint}`;
    return acc;
  },
  {}
);

// Create CSS variables for colors or box shadows
const extractCssVars = (tokens, prefix) =>
  Object.entries(tokens).reduce((result, [key, token]) => {
    result[`--${prefix}--${key}`] = token;
    return result;
  }, {});

module.exports = {
  prefix: "iccc-",
  corePlugins: [
    // "preflight",
    // "container",
    // "accessibility",
    "alignContent",
    "alignItems",
    "alignSelf",
    // "animation",
    // "appearance",
    // "backdropBlur",
    // "backdropBrightness",
    // "backdropContrast",
    // "backdropFilter",
    // "backdropGrayscale",
    // "backdropHueRotate",
    // "backdropInvert",
    // "backdropOpacity",
    // "backdropSaturate",
    // "backdropSepia",
    // "backgroundAttachment",
    // "backgroundBlendMode",
    // "backgroundClip",
    // "backgroundColor",
    // "backgroundImage",
    // "backgroundOpacity",
    // "backgroundOrigin",
    // "backgroundPosition",
    // "backgroundRepeat",
    // "backgroundSize",
    // "blur",
    // "borderCollapse",
    // "borderColor",
    // "borderOpacity",
    "borderRadius",
    "borderStyle",
    "borderWidth",
    // "boxDecorationBreak",
    // "boxShadow",
    "boxSizing",
    // "brightness",
    // "caretColor",
    // "clear",
    // "content",
    // "contrast",
    "cursor",
    "display",
    // "divideColor",
    // "divideOpacity",
    // "divideStyle",
    // "divideWidth",
    // "dropShadow",
    "fill",
    // "filter",
    "flex",
    "flexDirection",
    "flexGrow",
    "flexShrink",
    "flexWrap",
    // "float",
    "fontFamily",
    "fontSize",
    // "fontSmoothing",
    // "fontStyle",
    // "fontVariantNumeric",
    "fontWeight",
    "gap",
    // "gradientColorStops",
    // "grayscale",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridColumn",
    "gridColumnEnd",
    "gridColumnStart",
    "gridRow",
    "gridRowEnd",
    "gridRowStart",
    "gridTemplateColumns",
    "gridTemplateRows",
    "height",
    // "hueRotate",
    "inset",
    // "invert",
    // "isolation",
    "justifyContent",
    "justifyItems",
    "justifySelf",
    // "letterSpacing",
    "lineHeight",
    // "listStylePosition",
    // "listStyleType",
    "margin",
    // "maxHeight",
    // "maxWidth",
    "minHeight",
    "minWidth",
    // "mixBlendMode",
    // "objectFit",
    // "objectPosition",
    "opacity",
    "order",
    // "outline",
    // "overflow",
    // "overscrollBehavior",
    "padding",
    "placeContent",
    // "placeholderColor",
    // "placeholderOpacity",
    "placeItems",
    "placeSelf",
    "pointerEvents",
    "position",
    // "resize",
    // "ringColor",
    // "ringOffsetColor",
    // "ringOffsetWidth",
    // "ringOpacity",
    // "ringWidth",
    // "rotate",
    // "saturate",
    // "scale",
    // "sepia",
    // "skew",
    "space",
    // "stroke",
    // "strokeWidth",
    // "tableLayout",
    "textAlign",
    // "textColor",
    "textDecoration",
    // "textOpacity",
    // "textOverflow",
    "textTransform",
    // "transform",
    // "transformOrigin",
    // "transitionDelay",
    "transitionDuration",
    // "transitionProperty",
    "transitionTimingFunction",
    // "translate",
    "userSelect",
    "verticalAlign",
    // "visibility",
    // "whitespace",
    "width"
    // "wordBreak",
    // "zIndex"
  ],
  plugins: [
    function ({ addUtilities, theme }) {
      const lightUtilities = {
        ":root, .theme-light": {
          background: themeData.tokens.colors.background,
          color: themeData.tokens.colors["text-on-background"],
          ...extractCssVars(themeData.tokens.colors, "color"),
          ...extractCssVars(themeData.tokens.effects, "shadow"),
          ...extractCssVars(themeData.tokens.gradients, "gradient")
        }
      };
      const darkUtilities = {
        ".theme-dark": {
          background: darkThemeData.tokens.colors.background,
          color: darkThemeData.tokens.colors["text-on-background"],
          ...extractCssVars(darkThemeData.tokens.colors, "color"),
          ...extractCssVars(darkThemeData.tokens.effects, "shadow"),
          ...extractCssVars(darkThemeData.tokens.gradients, "gradient")
        }
      };
      addUtilities(lightUtilities);
      addUtilities(darkUtilities);
    }
  ],
  theme: {
    borderRadius: {
      DEFAULT: "1px",
      ...themeData.primitives.borderRadii
    },
    fontFamily: themeData.primitives.fontFamilies,
    fontSize: themeData.primitives.fontSizes,
    fontWeight: themeData.primitives.fontWeights,
    lineHeight: {
      DEFAULT: "1.5",
      ...themeData.primitives.lineHeights
    },
    opacity: themeData.primitives.opacities,
    screens: screensConfig,
    transitionDuration: themeData.primitives.transitions.duration,
    transitionTimingFunction: themeData.primitives.transitions.easing,
    extend: {
      borderWidth: {
        DEFAULT: "1px",
        ...themeData.primitives.borderWidths
      },
      height: themeData.primitives.spacings,
      spacing: themeData.primitives.spacings,
      width: themeData.primitives.spacings
    }
  }
};
