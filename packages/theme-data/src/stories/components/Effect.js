import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../theme-context";

const Effect = ({ boxShadow, background }) => (
  <ThemeContext.Consumer>
    {({ designTokens }) => {
      return (
        <div
          style={{
            height: "35px",
            width: "35px",
            borderRadius: "50%",
            boxShadow,
            background,
            marginBottom: designTokens.primitives.spacings[2]
          }}
        />
      );
    }}
  </ThemeContext.Consumer>
);

Effect.propTypes = {
  boxShadow: PropTypes.string,
  background: PropTypes.string
};

export default Effect;
