import React from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../../theme-context";

export default function Spacing({ length }) {
  return (
    <ThemeContext.Consumer>
      {({ designTokens }) => (
        <div
          style={{
            height: length,
            width: length,
            borderColor: designTokens.primitives.colors.detail["slate-dark"],
            borderStyle: "solid",
            borderWidth: designTokens.primitives.borderWidths.medium,
            marginBottom: designTokens.primitives.spacings[2]
          }}
        />
      )}
    </ThemeContext.Consumer>
  );
}

Spacing.propTypes = {
  length: PropTypes.string
};
