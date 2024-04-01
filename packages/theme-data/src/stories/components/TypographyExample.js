import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../theme-context";

const TypographyExample = ({
  value: {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textTransform
  }
}) => (
  <ThemeContext.Consumer>
    {({ designTokens }) => {
      const style = {
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        textTransform,
        marginBottom: designTokens.primitives.spacings[4],
        whiteSpace: "nowrap"
      };
      return (
        <React.Fragment>
          <div style={style}>
            The quick, brown fox jumped over the lazy dog.
          </div>
          <ul
            style={{
              fontSize: designTokens.primitives.fontSizes[1]
            }}
          >
            <li>
              Font family: <strong>{style.fontFamily}</strong>
            </li>
            <li>
              Font size: <strong>{style.fontSize}</strong>
            </li>
            <li>
              Font weight: <strong>{style.fontWeight}</strong>
            </li>
            <li>
              Letter spacing: <strong>{style.letterSpacing}</strong>
            </li>
            <li>
              Line height: <strong>{style.lineHeight}</strong>
            </li>
            {style.textTransform && (
              <li>
                Text transform: <strong>{style.textTransform}</strong>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }}
  </ThemeContext.Consumer>
);

TypographyExample.propTypes = {
  value: PropTypes.shape({
    fontFamily: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.number,
    letterSpacing: PropTypes.string,
    lineHeight: PropTypes.string,
    textTransform: PropTypes.string
  })
};

export default TypographyExample;
