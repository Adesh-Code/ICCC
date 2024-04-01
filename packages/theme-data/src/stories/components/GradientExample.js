import React from "react";
import PropTypes from "prop-types";

const GradientExample = ({ designTokens, value }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}
  >
    <div
      style={{
        height: "20px",
        width: "100%",
        background: value
      }}
    />
    <p style={{ fontSize: designTokens.primitives.fontSizes[1] }}>{value}</p>
  </div>
);

GradientExample.propTypes = {
  designTokens: PropTypes.object,
  value: PropTypes.any
};

export default GradientExample;
