import React from "react";
import PropTypes from "prop-types";

// @to-do refactor example box styles
const BorderRadiusExample = ({ designTokens: { primitives }, value }) => (
  <div
    style={{
      height: "32px",
      borderColor: primitives.colors.detail["slate-dark"],
      borderStyle: "solid",
      borderWidth: primitives.borderWidths.medium,
      borderRadius: value,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: primitives.spacings[4]
    }}
  >
    {value}
  </div>
);

BorderRadiusExample.propTypes = {
  designTokens: PropTypes.object,
  value: PropTypes.string
};

export default BorderRadiusExample;
