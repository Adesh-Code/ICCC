import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../theme-context";

export default function Swatch({ color }) {
  return (
    <ThemeContext.Consumer>
      {({ designTokens }) => (
        <div
          style={{
            height: "32px",
            backgroundColor: color,
            border: `${designTokens.primitives.borderWidths.medium} solid ${designTokens.primitives.colors.detail["slate-dark"]}`,
            marginBottom: designTokens.primitives.spacings[2]
          }}
        />
      )}
    </ThemeContext.Consumer>
  );
}

Swatch.propTypes = {
  color: PropTypes.string
};
