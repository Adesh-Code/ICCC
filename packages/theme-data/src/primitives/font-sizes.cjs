const pixelsPerRem = 16;
const minWidthRem = 360 / pixelsPerRem;
const maxWidthRem = 1440 / pixelsPerRem;

const fontSizeValues = {
  1: {
    fontSize: 12,
    minFontSize: 12,
    maxFontSize: 12
  },
  2: {
    fontSize: 14,
    minFontSize: 14,
    maxFontSize: 14
  },
  3: {
    fontSize: 16,
    minFontSize: 16,
    maxFontSize: 16
  },
  4: {
    fontSize: 20,
    minFontSize: 18,
    maxFontSize: 21
  },
  5: {
    fontSize: 24,
    minFontSize: 21,
    maxFontSize: 26
  },
  6: {
    fontSize: 30,
    minFontSize: 24,
    maxFontSize: 34
  },
  7: {
    fontSize: 38,
    minFontSize: 28,
    maxFontSize: 44
  },
  8: {
    fontSize: 47,
    minFontSize: 32,
    maxFontSize: 56
  },
  9: {
    fontSize: 58,
    minFontSize: 37,
    maxFontSize: 72
  },
  10: {
    fontSize: 70,
    minFontSize: 42,
    maxFontSize: 92
  }
};

const getFontSizeValue = ({ fontSize, maxFontSize, minFontSize }) => {
  const fontSizeRem = fontSize / pixelsPerRem;
  const minFontSizeRem = minFontSize / pixelsPerRem;
  const maxFontSizeRem = maxFontSize / pixelsPerRem;

  const slope = (maxFontSizeRem - minFontSizeRem) / (maxWidthRem - minWidthRem);
  const yAxisIntersection = -minWidthRem * slope + minFontSizeRem;

  const clampValue =
    minFontSize === maxFontSize
      ? `${minFontSizeRem}rem`
      : `clamp(${minFontSizeRem}rem, calc(${yAxisIntersection.toPrecision(
          3
        )}rem + ${(slope * 100).toPrecision(3)}vw), ${maxFontSizeRem}rem)`;

  return {
    fallback: {
      value: `${fontSizeRem}rem`
    },
    clamp: {
      value: clampValue
    }
  };
};

const { fontSizeFallbacks, fontSizes } = Object.entries(fontSizeValues).reduce(
  (acc, [key, value]) => {
    const { fallback, clamp } = getFontSizeValue(value);
    acc.fontSizeFallbacks[key] = fallback;
    acc.fontSizes[key] = clamp;
    return acc;
  },
  {
    fontSizeFallbacks: {},
    fontSizes: {}
  }
);

module.exports = { fontSizeFallbacks, fontSizes };
