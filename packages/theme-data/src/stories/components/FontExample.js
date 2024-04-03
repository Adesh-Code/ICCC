import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../theme-context";

const FontExample = ({ fontFamily, fontSize, fontWeight }) => (
  <ThemeContext.Consumer>
    {({ designTokens }) => {
      const style = {
        fontFamily: fontFamily || designTokens.primitives.fontFamilies.default,
        fontSize: fontSize || designTokens.primitives.fontSizes[3],
        fontWeight: fontWeight || designTokens.primitives.fontWeights.default,
        lineHeight: designTokens.primitives.lineHeights.default,
        marginBottom: designTokens.primitives.spacings[4]
      };
      return (
        <div style={style}>The quick, brown fox jumped over the lazy dog.</div>
      );
    }}
  </ThemeContext.Consumer>
);

FontExample.propTypes = {
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  value: PropTypes.any
};

export default FontExample;
