import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../theme-context";

const ButtonExample = ({ value }) => (
  <ThemeContext.Consumer>
    {({ designTokens }) => {
      return (
        <ul
          style={{
            fontSize: designTokens.primitives.fontSizes["1"]
          }}
        >
          <li>
            Background color: <strong>{value.backgroundColor}</strong>
          </li>
          <li>
            Border color: <strong>{value.borderColor}</strong>
          </li>
          <li>
            Border style: <strong>{value.borderStyle}</strong>
          </li>
          <li>
            Border width: <strong>{value.borderWidth}</strong>
          </li>
          <li>
            Box Shadow: <strong>{value.boxShadow}</strong>
          </li>
          <li>
            Color: <strong>{value.color}</strong>
          </li>
          <li>
            Font size: <strong>{value.fontSize}</strong>
          </li>
          <li>
            Font weight: <strong>{value.fontWeight}</strong>
          </li>
          <li>
            Line height: <strong>{value.lineHeight}</strong>
          </li>
          <li>
            Opacity: <strong>{value.opacity}</strong>
          </li>
          <li>
            Padding:{" "}
            <strong>{`${value.paddingTop} ${value.paddingLeft}`}</strong>
          </li>
          <li>
            Text transform: <strong>{value.textTransform}</strong>
          </li>
          <li>
            Minimum width: <strong>{value.minWidth}</strong>
          </li>
        </ul>
      );
    }}
  </ThemeContext.Consumer>
);

ButtonExample.propTypes = {
  value: PropTypes.any
};

export default ButtonExample;
